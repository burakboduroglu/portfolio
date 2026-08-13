import type { CSSProperties } from 'react'
import AppIcon from './app-icon'
import type { AppCard } from '../../../lib/types/app'

function AppListItem({
  app,
  index,
  onSelect,
}: {
  app: AppCard
  index: number
  onSelect: (app: AppCard) => void
}) {
  return (
    <button
      className='store-list-item'
      type='button'
      data-accent={app.accent}
      // Drives the staggered fade-in delay; ignored under reduced motion
      style={{ '--i': index } as CSSProperties}
      onClick={() => onSelect(app)}>
      <div className='store-list-item-top'>
        <AppIcon app={app} />
        <span className='store-get-button'>{app.action}</span>
      </div>
      <div className='store-list-copy'>
        <strong>{app.title}</strong>
        <span>{app.subtitle}</span>
        <small>
          {app.category} · {app.platform}
        </small>
      </div>
      <p className='store-list-description'>{app.description}</p>
    </button>
  )
}

export default AppListItem
