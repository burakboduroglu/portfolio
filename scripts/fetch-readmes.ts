/**
 * Pulls each project's README off GitHub and renders it to sanitized HTML for
 * the project detail pages.
 *
 * Run deliberately (`bun run readmes`), not from `bun run build` — the output is
 * committed, so CI builds stay offline and a GitHub outage cannot fail a deploy.
 *
 * Convention per repo: README.md is the English source, README.tr.md and
 * README.de.md are the translations. A missing translation falls back to
 * English and the page says so.
 */

import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { Marked } from 'marked'
import sanitizeHtml from 'sanitize-html'
import apps from '../src/lib/data/apps'
import { LOCALES } from '../src/lib/i18n/types'
import type { Locale } from '../src/lib/i18n/types'
import type { AppId } from '../src/lib/types/app'

const ROOT = resolve(import.meta.dirname, '..')
const OUT_DIR = resolve(ROOT, 'public/readme')
const MANIFEST = resolve(ROOT, 'src/lib/data/readme-manifest.ts')

const BASE_LOCALE: Locale = 'en'

type Repo = { owner: string; name: string; branch: string }

function parseRepo(url: string): Omit<Repo, 'branch'> | null {
  const match = /^https:\/\/github\.com\/([^/]+)\/([^/]+)/.exec(url)
  return match ? { owner: match[1], name: match[2] } : null
}

async function gh<T>(path: string): Promise<T | null> {
  const headers: Record<string, string> = { Accept: 'application/vnd.github+json' }
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
  }

  const response = await fetch(`https://api.github.com${path}`, { headers })
  if (!response.ok) {
    return null
  }

  return (await response.json()) as T
}

/**
 * READMEs are not consistently cased across repos — some ship `readme.md`
 * — so the root listing is matched case-insensitively rather than guessed at.
 */
async function readmeNames(repo: Omit<Repo, 'branch'>): Promise<string[]> {
  const entries = await gh<{ name: string; type: string }[]>(
    `/repos/${repo.owner}/${repo.name}/contents`
  )

  return (entries ?? []).filter((entry) => entry.type === 'file').map((entry) => entry.name)
}

function pickReadme(names: string[], locale: Locale): string | null {
  const wanted =
    locale === BASE_LOCALE ? /^readme\.md$/i : new RegExp(`^readme\\.${locale}\\.md$`, 'i')
  return names.find((name) => wanted.test(name)) ?? null
}

async function fetchRaw(repo: Repo, file: string): Promise<string | null> {
  const response = await fetch(
    `https://raw.githubusercontent.com/${repo.owner}/${repo.name}/${repo.branch}/${file}`
  )
  return response.ok ? await response.text() : null
}

/**
 * The hero already shows the logo, name, tagline and download button, and a row
 * of CI badges is noise on a portfolio page — so the opening centred block and
 * the H1 that repeats the project name are dropped before rendering.
 */
function stripRedundantHeader(markdown: string): string {
  let out = markdown.replace(/^﻿/, '').trimStart()

  if (out.startsWith('<div align="center">')) {
    const end = out.indexOf('</div>')
    if (end !== -1) {
      out = out.slice(end + '</div>'.length).trimStart()
    }
  }

  out = out.replace(/^-{3,}\s*\n/, '').trimStart()
  out = out.replace(/^#\s+.+\n/, '').trimStart()

  // Badge-only lines left outside the centred block
  const badgeImage = /!\[[^\]]*\]\([^)]*(?:shields\.io|badgen\.net|badge\.fury\.io)[^)]*\)/g
  const linkedBadge = /\[!\[[^\]]*\]\([^)]*(?:shields\.io|badgen\.net)[^)]*\)\]\([^)]*\)/g

  out = out
    .split('\n')
    .filter((line) => {
      const stripped = line.replace(linkedBadge, '').replace(badgeImage, '').trim()
      // Keep the line unless removing its badges emptied it out
      return stripped.length > 0 || line.trim().length === 0
    })
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')

  return out.trim()
}

function absoluteUrl(repo: Repo, url: string, kind: 'image' | 'link'): string {
  if (/^(https?:|mailto:|#|data:)/i.test(url)) {
    return url
  }

  const path = url.replace(/^\.\//, '').replace(/^\//, '')
  return kind === 'image'
    ? `https://raw.githubusercontent.com/${repo.owner}/${repo.name}/${repo.branch}/${path}`
    : `https://github.com/${repo.owner}/${repo.name}/blob/${repo.branch}/${path}`
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/<[^>]*>/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '')
}

function render(markdown: string, repo: Repo): string {
  const marked = new Marked({ gfm: true, breaks: false })

  marked.use({
    renderer: {
      // The page owns h1 and h2; README headings shift down so the outline of
      // the rendered document stays legal underneath them.
      heading({ tokens, depth }) {
        const text = this.parser.parseInline(tokens)
        const level = Math.min(depth + 1, 6)
        return `<h${level} id="${slugify(text)}">${text}</h${level}>\n`
      },
      image({ href, title, text }) {
        const src = absoluteUrl(repo, href, 'image')
        const titleAttr = title ? ` title="${title}"` : ''
        return `<img src="${src}" alt="${text}"${titleAttr} loading="lazy" />`
      },
      link({ href, title, tokens }) {
        const text = this.parser.parseInline(tokens)
        const url = absoluteUrl(repo, href, 'link')
        const titleAttr = title ? ` title="${title}"` : ''
        return `<a href="${url}"${titleAttr}>${text}</a>`
      },
    },
  })

  const rendered = (marked.parse(markdown, { async: false }) as string)
    // READMEs space centred images apart with &nbsp;, which turns into an
    // anonymous flex item here and wraps the row. Drop runs that sit alone
    // between two tags; nbsp inside prose is left alone.
    .replace(/(?<=>)\s*(?:&nbsp;)+\s*(?=<)/g, '')

  const html = rendered.replace(
    /\b(src|href)="([^"]*)"/g,
    (match, attribute: string, url: string) => {
      const absolute = absoluteUrl(repo, url, attribute === 'src' ? 'image' : 'link')
      return absolute === url ? match : `${attribute}="${absolute}"`
    }
  )

  return sanitizeHtml(html, {
    allowedTags: [
      'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'ul', 'ol', 'li', 'blockquote', 'code', 'pre',
      'em', 'strong', 'del', 'hr', 'br', 'img', 'table', 'thead', 'tbody', 'tr', 'th', 'td',
      'div', 'span', 'sub', 'sup', 'kbd', 'details', 'summary',
    ],
    allowedAttributes: {
      a: ['href', 'title', 'target', 'rel'],
      img: ['src', 'alt', 'title', 'width', 'height', 'loading'],
      div: ['align'],
      p: ['align'],
      th: ['align'],
      td: ['align'],
      '*': ['id'],
    },
    allowedSchemes: ['https', 'mailto'],
    transformTags: {
      // Every link in a README leaves the site
      a: (tagName, attribs) =>
        attribs.href?.startsWith('#')
          ? { tagName, attribs }
          : { tagName, attribs: { ...attribs, target: '_blank', rel: 'noreferrer noopener' } },
    },
  })
}

/**
 * Reads the manifest back out of public/readme/ rather than from whatever this
 * run touched — otherwise `bun run readmes macshelf` would drop every other
 * project's documentation section from the site.
 */
async function buildManifest(): Promise<Partial<Record<AppId, Locale[]>>> {
  const ids = new Set<string>(apps.map((app) => app.id))
  const files = await readdir(OUT_DIR)
  const found = new Map<AppId, Set<Locale>>()

  for (const file of files) {
    const match = /^(.+)\.([a-z]{2})\.json$/.exec(file)
    if (!match || !ids.has(match[1])) {
      continue
    }

    const id = match[1] as AppId
    const document = JSON.parse(await readFile(resolve(OUT_DIR, file), 'utf8')) as {
      locale: Locale
      sourceLocale: Locale
    }

    if (!found.has(id)) {
      found.set(id, new Set())
    }

    if (document.sourceLocale === document.locale) {
      found.get(id)?.add(document.locale)
    }
  }

  const manifest: Partial<Record<AppId, Locale[]>> = {}
  for (const app of apps) {
    const locales = found.get(app.id)
    if (locales) {
      manifest[app.id] = LOCALES.filter((locale) => locales.has(locale))
    }
  }

  return manifest
}

async function main() {
  const only = process.argv.slice(2).filter((arg) => !arg.startsWith('-'))
  const targets = apps.filter(
    (app) => app.repo && (only.length === 0 || only.includes(app.id))
  )

  await mkdir(OUT_DIR, { recursive: true })

  for (const app of targets) {
    const parsed = parseRepo(app.repo as string)
    if (!parsed) {
      console.warn(`! ${app.id}: could not parse repo url`)
      continue
    }

    const info = await gh<{ default_branch: string }>(`/repos/${parsed.owner}/${parsed.name}`)
    if (!info) {
      console.warn(`! ${app.id}: repo not reachable`)
      continue
    }

    const repo: Repo = { ...parsed, branch: info.default_branch }
    const names = await readmeNames(parsed)

    const sources = new Map<Locale, string>()
    for (const locale of LOCALES) {
      const file = pickReadme(names, locale)
      if (!file) continue
      const raw = await fetchRaw(repo, file)
      if (raw) {
        sources.set(locale, raw)
      }
    }

    if (!sources.has(BASE_LOCALE) && sources.size === 0) {
      console.warn(`! ${app.id}: no README found`)
      continue
    }

    const translated: Locale[] = []
    const updatedAt = new Date().toISOString().slice(0, 10)

    for (const locale of LOCALES) {
      const sourceLocale = sources.has(locale)
        ? locale
        : sources.has(BASE_LOCALE)
          ? BASE_LOCALE
          : ([...sources.keys()][0] as Locale)

      const markdown = sources.get(sourceLocale) as string
      const html = render(stripRedundantHeader(markdown), repo)

      await writeFile(
        resolve(OUT_DIR, `${app.id}.${locale}.json`),
        `${JSON.stringify({ id: app.id, locale, sourceLocale, html, updatedAt }, null, 2)}\n`
      )

      if (sourceLocale === locale) {
        translated.push(locale)
      }
    }

    console.log(`✓ ${app.id}  translated: ${translated.join(', ') || '—'}`)
  }

  const manifest = await buildManifest()

  const body = `import type { Locale } from '../i18n/types'
import type { AppId } from '../types/app'

/**
 * Generated by \`bun run readmes\` — do not edit by hand.
 *
 * Keys are the projects with a rendered README under public/readme/. The value
 * lists the locales that have their own translation; every other locale falls
 * back to English and the page says so.
 */
export const readmeManifest: Partial<Record<AppId, Locale[]>> = ${JSON.stringify(
    manifest,
    null,
    2
  )}

export default readmeManifest
`

  await writeFile(MANIFEST, body)
  console.log(`\nmanifest → ${MANIFEST.replace(ROOT + '/', '')}`)
}

await main()
