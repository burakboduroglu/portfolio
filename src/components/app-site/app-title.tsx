import type { AppCard } from '../../../lib/types/app'

function AppTitle({ app }: { app: AppCard }) {
  return app.id === 'portkill' ? (
    <span className='portkill-wordmark'>
      <i />
      <span>.portkill</span>
    </span>
  ) : (
    app.title
  )
}

export default AppTitle
