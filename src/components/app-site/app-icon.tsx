function AppIcon({ app, large = false }: { app: any; large?: boolean }) {
  return (
    <div
      className={`store-app-icon ${app.accent} ${large ? 'large' : ''} ${app.icon.length > 2 ? 'wordmark' : ''}`}
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
