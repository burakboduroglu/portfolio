import { ArrowUpRight, ChevronLeft } from 'lucide-react'
import AppIcon from './app-icon'
import ExternalLink from './external-link'

function AppsDetail({ app, onBack }: { app: any; onBack: () => void }) {
  const stats = [
    ['Stars', app.stars],
    ['Forks', app.forks],
    ['Price', app.price],
    ['Platform', app.platform],
    ['Language', app.stack],
  ]

  return (
    <div className='store-detail'>
      <button className='store-back' type='button' onClick={onBack}>
        <ChevronLeft size={18} /> Back
      </button>

      <div className='store-detail-hero'>
        <AppIcon app={app} large />
        <div>
          <h2>{app.title}</h2>
          <p>{app.subtitle}</p>
          <div className='store-detail-actions'>
            <ExternalLink className='store-primary-link' href={app.link}>
              {app.action}
            </ExternalLink>
            <ExternalLink className='store-secondary-link' href={app.repo}>
              View on GitHub <ArrowUpRight size={14} />
            </ExternalLink>
          </div>
        </div>
      </div>

      <div className='store-stats'>
        {stats.map(([label, value]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>

      <section className='store-preview-section'>
        <h3>Preview</h3>
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
        <h3>Description</h3>
        <p>{app.description}</p>
      </section>
    </div>
  )
}

export default AppsDetail
