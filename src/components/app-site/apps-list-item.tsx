import AppIcon from './app-icon'
import type { AppCard } from '../../../lib/types/app'

function AppListItem({ app, onSelect }: { app: AppCard; onSelect: (app: AppCard) => void }) {
  return (
    <button className='store-list-item' type='button' onClick={() => onSelect(app)}>
      <AppIcon app={app} />
      <div className='store-list-copy'>
        <strong>{app.title}</strong>
        <span>{app.subtitle}</span>
        <small>
          {app.category} · ★ {app.stars}
        </small>
      </div>
      <span className='store-get-button'>{app.action}</span>
    </button>
  )
}

export default AppListItem
