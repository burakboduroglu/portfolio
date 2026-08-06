import { useEffect, useRef } from 'react'
import { ArrowUpRight, ChevronLeft, Code2, GitFork, Monitor, Star, Tag } from 'lucide-react'
import AppIcon from './app-icon'
import ExternalLink from './external-link'
import { useT } from '../../../lib/i18n'
import type { AppCard } from '../../../lib/types/app'

function AppsDetail({ app, onBack }: { app: AppCard; onBack: () => void }) {
  const t = useT()
  const backRef = useRef<HTMLButtonElement>(null)

  // Keys are stable identifiers, not the translated labels
  const stats = [
    { key: 'stars', Icon: Star, label: t.apps.stats.stars, value: app.stars },
    { key: 'forks', Icon: GitFork, label: t.apps.stats.forks, value: app.forks },
    { key: 'price', Icon: Tag, label: t.apps.stats.price, value: app.price },
    { key: 'platform', Icon: Monitor, label: t.apps.stats.platform, value: app.platform },
    { key: 'language', Icon: Code2, label: t.apps.stats.language, value: app.stack },
  ]

  useEffect(() => {
    backRef.current?.focus({ preventScroll: true })
    backRef.current?.scrollIntoView({ block: 'nearest' })
  }, [app.id])

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onBack()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onBack])

  return (
    <div className='store-detail'>
      <button className='store-back' type='button' ref={backRef} onClick={onBack}>
        <ChevronLeft size={18} /> {t.apps.back}
      </button>

      <div className='store-detail-hero'>
        <AppIcon app={app} large />
        <div>
          <h2>{app.title}</h2>
          <p>{app.subtitle}</p>
          <div className='store-detail-badges'>
            <span className='store-badge'>{app.stack}</span>
            <span className='store-badge'>{app.platform}</span>
            <span className='store-badge'>{app.price}</span>
          </div>
          <div className='store-detail-actions'>
            <ExternalLink className='store-primary-link' href={app.link}>
              {app.action}
            </ExternalLink>
            {app.repo ? (
              <ExternalLink className='store-secondary-link' href={app.repo}>
                {t.apps.viewOnGitHub} <ArrowUpRight size={14} />
              </ExternalLink>
            ) : null}
          </div>
        </div>
      </div>

      <div className='store-stats'>
        {stats.map(({ key, Icon, label, value }) => (
          <div key={key}>
            <strong>{value}</strong>
            <span>
              <Icon size={12} aria-hidden='true' />
              {label}
            </span>
          </div>
        ))}
      </div>

      <section className='store-preview-section'>
        <h3>{t.apps.preview}</h3>
        <div className={`store-preview ${app.accent}`}>
          <div className='preview-window'>
            <span />
            <span />
            <span />
          </div>
          <div className='preview-floating-card'>
            <strong>{app.title}</strong>
            <p>{app.heroText}</p>
          </div>
        </div>
      </section>

      <section className='store-description'>
        <h3>{t.apps.description}</h3>
        <p>{app.description}</p>
      </section>
    </div>
  )
}

export default AppsDetail
