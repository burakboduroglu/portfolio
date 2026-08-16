import type { AppCard } from '../../../lib/types/app'

function AppIcon({ app, large = false }: { app: AppCard; large?: boolean }) {
  return (
    <div
      className={`store-app-icon ${app.accent} ${large ? 'large' : ''} ${app.icon.length > 2 ? 'wordmark' : ''} ${app.logoUrl ? 'has-logo' : ''}`}
      aria-hidden='true'>
      {app.logoUrl ? (
        <img src={app.logoUrl} alt='' />
      ) : app.id === 'portkill' ? (
        <span className='portkill-mark'>
          <i />
          <b>{app.icon}</b>
        </span>
      ) : (
        <span>{app.icon}</span>
      )}
    </div>
  )
}

export default AppIcon
