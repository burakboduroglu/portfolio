function AppTitle({ app }: { app: any }) {
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
