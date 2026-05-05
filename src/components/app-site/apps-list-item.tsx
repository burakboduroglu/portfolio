import AppIcon from './app-icon'

function AppListItem({ app, onSelect }: { app: any; onSelect: (app: any) => void }) {
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
