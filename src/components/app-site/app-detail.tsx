import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowUpRight, Check, Copy, GitFork, Star } from 'lucide-react'
import { useT } from '../../lib/i18n'
import type { AppCard } from '../../lib/types/app'
import InternalLink from '../internal-link'
import ReachOutLeadingIcon from '../reach-out-icons'
import ThemeSwitch from '../theme-switch'
import LanguageSwitcher from '../language-switcher'
import AppIcon from './app-icon'
import AppTitle from './app-title'
import ExternalLink from './external-link'
import ReadmeSection from './readme-section'

/** '—' for a site with no repo, '0' for one nobody has starred yet */
function countOf(value: string): number | null {
  const parsed = Number.parseInt(value, 10)
  return Number.isNaN(parsed) || parsed < 1 ? null : parsed
}

function InstallCommand({ command }: { command: string }) {
  const t = useT()
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }, [])

  const copy = () => {
    try {
      navigator.clipboard?.writeText(command)
      setCopied(true)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard API can be blocked — the command stays selectable either way */
    }
  }

  return (
    <div className='project-command'>
      <code>
        <span className='project-command-prompt' aria-hidden='true'>
          $
        </span>
        {command}
      </code>
      <button
        type='button'
        className='project-command-copy'
        onClick={copy}
        aria-label={copied ? t.apps.commandCopied : t.apps.copyCommand}>
        {copied ? <Check size={14} /> : <Copy size={14} />}
        <span>{copied ? t.apps.commandCopied : t.apps.copyCommand}</span>
      </button>
    </div>
  )
}

function AppDetail({ app }: { app: AppCard }) {
  const t = useT()
  const stars = countOf(app.stars)
  const forks = countOf(app.forks)
  // portkill and MacShelf point `link` at their repo — one button, not two
  const hasSeparateRepo = Boolean(app.repo) && app.repo !== app.link

  return (
    <article className='project-detail' aria-label={t.apps.detailAria(app.title)}>
      <div className='project-detail-bar'>
        <div className='site-rail project-detail-bar-inner'>
          <InternalLink className='project-back' href='/'>
            <ArrowLeft size={15} aria-hidden='true' />
            <span>{t.apps.backToProjects}</span>
          </InternalLink>
          <div className='page-top-actions'>
            <ThemeSwitch />
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      <header className={`project-hero ${app.accent}`}>
        <div className='site-rail project-hero-inner'>
          <AppIcon app={app} large />
          <p className='project-hero-eyebrow'>{app.category}</p>
          <h1>
            <AppTitle app={app} />
          </h1>
          <p className='project-hero-tagline'>{app.heroTitle}</p>
          <p className='project-hero-text'>{app.heroText}</p>
          <div className='project-hero-actions'>
            <ExternalLink className='project-action primary' href={app.link}>
              <span>{app.action}</span>
              <ArrowUpRight size={15} aria-hidden='true' />
            </ExternalLink>
            {hasSeparateRepo ? (
              <ExternalLink className='project-action' href={app.repo as string}>
                <ReachOutLeadingIcon name='github' size={15} />
                <span>{t.apps.viewOnGitHub}</span>
              </ExternalLink>
            ) : null}
          </div>
        </div>
      </header>

      <div className='site-rail project-detail-body'>
        <ul className='project-facts'>
          <li>
            <span className='project-fact-label'>{t.apps.stats.platform}</span>
            <span className='project-fact-value'>{app.platform}</span>
          </li>
          <li>
            <span className='project-fact-label'>{t.apps.stats.language}</span>
            <span className='project-fact-value'>{app.stack}</span>
          </li>
          <li>
            <span className='project-fact-label'>{t.apps.stats.price}</span>
            <span className='project-fact-value'>{app.price}</span>
          </li>
          {stars ? (
            <li>
              <span className='project-fact-label'>{t.apps.stats.stars}</span>
              <span className='project-fact-value'>
                <Star size={13} aria-hidden='true' />
                {stars}
              </span>
            </li>
          ) : null}
          {forks ? (
            <li>
              <span className='project-fact-label'>{t.apps.stats.forks}</span>
              <span className='project-fact-value'>
                <GitFork size={13} aria-hidden='true' />
                {forks}
              </span>
            </li>
          ) : null}
        </ul>

        <section className='project-section'>
          <h2>{t.apps.description}</h2>
          <p>{app.description}</p>
        </section>

        {app.install?.length ? (
          <section className='project-section'>
            <h2>{t.apps.install}</h2>
            {app.install.map((entry) => (
              <div className='project-install' key={entry.command}>
                <p className='project-install-manager'>{entry.manager}</p>
                <InstallCommand command={entry.command} />
              </div>
            ))}
          </section>
        ) : null}

        <ReadmeSection app={app} />
      </div>
    </article>
  )
}

export default AppDetail
