import React from 'react'
import { animate } from 'animejs'

interface NavItem {
  id: string
  label: string
}

const navItems: NavItem[] = [
  { id: 'profile', label: 'Profile' },
  { id: 'terminal', label: 'Terminal' },
  { id: 'links', label: 'Links' },
  { id: 'podcast', label: 'Podcast' },
  { id: 'stats', label: 'Stats' },
]

export function BubbleNav() {
  const [activeSection, setActiveSection] = React.useState('profile')
  const navRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    // Entrance animation
    if (navRef.current) {
      animate(navRef.current, {
        opacity: [0, 1],
        translateX: [-20, 0],
        duration: 800,
        delay: 1000,
        ease: 'outExpo',
      })
    }
  }, [])

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }))

      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.element) {
          const offsetTop = section.element.offsetTop
          if (scrollPosition >= offsetTop) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleDotHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    animate(e.currentTarget.querySelector('.dot'), {
      scale: 1.3,
      duration: 200,
      ease: 'outBack',
    })
  }

  const handleDotLeave = (e: React.MouseEvent<HTMLButtonElement>, isActive: boolean) => {
    if (!isActive) {
      animate(e.currentTarget.querySelector('.dot'), {
        scale: 1,
        duration: 200,
        ease: 'outQuad',
      })
    }
  }

  return (
    <nav
      ref={navRef}
      className='fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4 opacity-0'
      aria-label='Section navigation'>
      {navItems.map((item) => {
        const isActive = activeSection === item.id
        return (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            onMouseEnter={handleDotHover}
            onMouseLeave={(e) => handleDotLeave(e, isActive)}
            className='group flex items-center gap-3 cursor-pointer'
            aria-label={`Go to ${item.label}`}
            aria-current={isActive ? 'true' : 'false'}>
            {/* Dot */}
            <div
              className={`dot relative w-3 h-3 rounded-full transition-all duration-300 ${
                isActive
                  ? 'bg-primary-500 scale-125 shadow-lg shadow-primary-500/50'
                  : 'bg-dark-600 group-hover:bg-dark-400'
              }`}>
              {/* Active ring */}
              {isActive && (
                <div className='absolute inset-0 rounded-full border-2 border-primary-400 animate-ping opacity-75'></div>
              )}
            </div>

            {/* Label - only visible when active or on hover */}
            <span
              className={`text-xs font-medium whitespace-nowrap transition-all duration-300 ${
                isActive
                  ? 'opacity-100 translate-x-0 text-primary-400'
                  : 'opacity-0 -translate-x-2 text-dark-400 group-hover:opacity-100 group-hover:translate-x-0'
              }`}>
              {item.label}
            </span>
          </button>
        )
      })}

      {/* Connecting line */}
      <div className='absolute left-[5px] top-0 bottom-0 w-[2px] bg-dark-800 -z-10 rounded-full'>
        <div
          className='absolute left-0 w-full bg-gradient-to-b from-primary-500 to-accent-cyan rounded-full transition-all duration-500'
          style={{
            top: 0,
            height: `${(navItems.findIndex((item) => item.id === activeSection) / (navItems.length - 1)) * 100}%`,
          }}
        />
      </div>
    </nav>
  )
}
