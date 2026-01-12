import React from 'react'

export function ScrollProgress() {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPosition = window.scrollY

      if (totalHeight <= 0) {
        setProgress(100)
        return
      }

      const currentProgress = (scrollPosition / totalHeight) * 100
      // Clamp for fractional pixels / mobile browser quirks
      setProgress(Math.min(100, Math.max(0, currentProgress)))
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <div className='fixed top-0 left-0 right-0 h-1 z-[100] bg-dark-900/50 backdrop-blur-sm'>
      <div
        className='h-full bg-gradient-to-r from-wise-green via-primary-500 to-accent-cyan transition-all duration-150 ease-out'
        style={{ width: `${progress}%` }}
      />
      {/* Glow effect */}
      <div
        className='absolute top-0 h-full bg-gradient-to-r from-wise-green via-primary-500 to-accent-cyan blur-sm opacity-50'
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

