import React from 'react'
import { animate } from 'animejs'

export function StatusBadge() {
  const badgeRef = React.useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = React.useState(false)

  React.useEffect(() => {
    if (badgeRef.current) {
      animate(badgeRef.current, {
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 800,
        delay: 1500,
        ease: 'outExpo',
      })
    }
  }, [])

  const handleHover = () => {
    setIsHovered(true)
    if (badgeRef.current) {
      animate(badgeRef.current, {
        scale: 1.05,
        duration: 300,
        ease: 'outBack',
      })
    }
  }

  const handleLeave = () => {
    setIsHovered(false)
    if (badgeRef.current) {
      animate(badgeRef.current, {
        scale: 1,
        duration: 300,
        ease: 'outQuad',
      })
    }
  }

  return (
    <div
      ref={badgeRef}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      className='fixed top-4 right-4 md:top-6 md:right-6 z-50 opacity-0'>
      <a
        href='mailto:info@burakboduroglu.com.tr'
        className='group flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 rounded-full bg-dark-900/80 backdrop-blur-md border border-wise-green/30 hover:border-wise-green/60 transition-all duration-300 hover:shadow-lg hover:shadow-wise-green/20'>
        {/* Pulse dot (left slot) */}
        <span className='relative flex h-2.5 w-2.5 md:h-3 md:w-3 flex-shrink-0'>
          <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-wise-green opacity-75'></span>
          <span className='relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-wise-green'></span>
        </span>

        {/* Text */}
        <span className='text-[10px] md:text-xs font-medium text-dark-200 group-hover:text-white transition-colors'>
          {isHovered ? "Let's talk!" : 'Available for Work'}
        </span>

        {/* Arrow (right slot) - keeps padding visually symmetric */}
        <span className='w-2.5 md:w-3 flex items-center justify-center flex-shrink-0'>
          <span
            className={`text-wise-green transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1'
            }`}>
            →
          </span>
        </span>
      </a>
    </div>
  )
}
