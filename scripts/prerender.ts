/**
 * Runs after `vite build`. Writes one real HTML file per project route and the
 * sitemap, both derived from src/lib/data so neither can drift from the site.
 *
 * Why the route files: GitHub Pages serves 404.html — with HTTP status 404 —
 * for any path it has no file for. The SPA fallback makes /projects/:id render
 * in a browser, but crawlers and link unfurlers see a 404 and the home page's
 * <head>. dist/projects/<id>.html is the same app shell with that
 * project's title, description, canonical URL and preview image baked in, so
 * the route answers 200 and a shared link previews the right project.
 *
 * Meta is written in English, the x-default language; the app still switches
 * language client-side from ?lang= exactly as before.
 */

import { execSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import apps from '../src/lib/data/apps'
import readmeManifest from '../src/lib/data/readme-manifest'
import screenshots from '../src/lib/data/screenshots'
import en from '../src/lib/i18n/en'
import { LOCALES } from '../src/lib/i18n/types'
import { projectPath } from '../src/lib/router'
import type { AppId } from '../src/lib/types/app'

const SITE = 'https://burakboduroglu.com.tr'
const DIST = resolve(import.meta.dirname, '../dist')
const README_DIR = resolve(import.meta.dirname, '../public/readme')

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

/** Replaces the value of one attribute on the one tag matching `tagPattern` */
function setAttr(html: string, tagPattern: RegExp, attr: 'content' | 'href', value: string): string {
  const match = tagPattern.exec(html)
  if (!match) {
    throw new Error(`prerender: no tag matches ${tagPattern}`)
  }

  const tag = match[0]
  const next = tag.replace(new RegExp(`${attr}="[^"]*"`), `${attr}="${escapeAttr(value)}"`)
  return html.replace(tag, next)
}

const meta = (key: string) => new RegExp(`<meta\\s+(?:name|property)="${key}"[^>]*>`, 's')
const link = (rel: string, extra = '') => new RegExp(`<link\\s+rel="${rel}"${extra}[^>]*>`, 's')

type PageMeta = {
  path: string
  title: string
  description: string
  image?: string
}

function renderPage(shell: string, page: PageMeta): string {
  const url = `${SITE}${page.path}`
  let html = shell.replace(/<title>[^<]*<\/title>/, `<title>${escapeAttr(page.title)}</title>`)

  html = setAttr(html, meta('description'), 'content', page.description)
  html = setAttr(html, meta('og:url'), 'content', url)
  html = setAttr(html, meta('og:title'), 'content', page.title)
  html = setAttr(html, meta('og:description'), 'content', page.description)
  html = setAttr(html, meta('twitter:title'), 'content', page.title)
  html = setAttr(html, meta('twitter:description'), 'content', page.description)
  html = setAttr(html, link('canonical'), 'href', url)

  for (const locale of LOCALES) {
    html = setAttr(html, link('alternate', `\\s+hreflang="${locale}"`), 'href', `${url}?lang=${locale}`)
  }
  html = setAttr(html, link('alternate', '\\s+hreflang="x-default"'), 'href', url)

  if (page.image) {
    const image = `${SITE}${page.image}`
    html = setAttr(html, meta('og:image'), 'content', image)
    html = setAttr(html, meta('twitter:image'), 'content', image)
    html = setAttr(html, meta('twitter:card'), 'content', 'summary_large_image')
  }

  return html
}

/** Day of the last commit — a stable lastmod that only moves when the site does */
function lastCommitDate(): string {
  try {
    return execSync('git log -1 --format=%cs', { encoding: 'utf8' }).trim()
  } catch {
    return new Date().toISOString().slice(0, 10)
  }
}

async function readmeDate(id: string): Promise<string | null> {
  if (!readmeManifest[id as keyof typeof readmeManifest]) {
    return null
  }

  try {
    const document = JSON.parse(await readFile(resolve(README_DIR, `${id}.en.json`), 'utf8'))
    return typeof document.updatedAt === 'string' ? document.updatedAt : null
  } catch {
    return null
  }
}

/**
 * Link unfurlers are pickier than browsers — LinkedIn does not render WebP —
 * so a project with screenshots also ships public/screenshots/<id>/og.jpg, a
 * JPEG of its first one. tests/screenshots.test.ts keeps that file present.
 */
function previewImage(id: AppId): string | undefined {
  if (!screenshots[id]?.length) {
    return undefined
  }

  const path = `/screenshots/${id}/og.jpg`
  return existsSync(resolve(DIST, path.slice(1))) ? path : undefined
}

function sitemapEntry(path: string, lastmod: string, priority: string): string {
  const url = `${SITE}${path}`
  const alternates = [
    ...LOCALES.map(
      (locale) => `    <xhtml:link rel="alternate" hreflang="${locale}" href="${url}?lang=${locale}" />`
    ),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${url}" />`,
  ].join('\n')

  return `  <url>
    <loc>${url}</loc>
${alternates}
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
  </url>`
}

async function main() {
  const shell = await readFile(resolve(DIST, 'index.html'), 'utf8')
  const siteDate = lastCommitDate()
  const entries = [sitemapEntry('/', siteDate, '1.0')]

  for (const app of apps) {
    const copy = en.appCopy[app.id]
    const path = projectPath(app.id)
    const html = renderPage(shell, {
      path,
      title: `${app.title} — ${copy.subtitle}`,
      description: copy.description,
      image: previewImage(app.id),
    })

    // projects/<id>.html, not projects/<id>/index.html: Pages serves the file
    // at the extensionless path, where a directory would 301 to a trailing
    // slash that the canonical URL does not have
    const file = resolve(DIST, `${path.slice(1)}.html`)
    await mkdir(resolve(file, '..'), { recursive: true })
    await writeFile(file, html)

    entries.push(sitemapEntry(path, (await readmeDate(app.id)) ?? siteDate, '0.8'))
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`
  await writeFile(resolve(DIST, 'sitemap.xml'), sitemap)

  console.log(`prerender: ${apps.length} project pages + sitemap (${entries.length} urls)`)
}

await main()
