import React from 'react'
import { animate, stagger } from 'animejs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStar,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface StatItem {
  id: string
  icon: IconDefinition
  value: number
  suffix: string
  label: string
  color: string
}

const stats: StatItem[] = [
  {
    id: 'repos',
    icon: faGithub,
    value: 34,
    suffix: '',
    label: 'GitHub Repos',
    color: 'from-primary-500 to-primary-400',
  },
  {
    id: 'followers',
    icon: faUsers,
    value: 84,
    suffix: '',
    label: 'Followers',
    color: 'from-accent-cyan to-cyan-400',
  },
  {
    id: 'following',
    icon: faUsers,
    value: 63,
    suffix: '',
    label: 'Following',
    color: 'from-green-500 to-emerald-400',
  },
  {
    id: 'stars',
    icon: faStar,
    value: 110,
    suffix: '',
    label: 'Stars Earned',
    color: 'from-amber-500 to-orange-400',
  },
]

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  const [count, setCount] = React.useState(0)
  const cardRef = React.useRef<HTMLDivElement>(null)
  const hasAnimated = React.useRef(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true

            // Card entrance animation
            if (cardRef.current) {
              animate(cardRef.current, {
                opacity: [0, 1],
                translateY: [30, 0],
                scale: [0.9, 1],
                duration: 600,
                delay: index * 100,
                ease: 'outExpo',
              })
            }

            // Counter animation
            const duration = 2000
            const startTime = Date.now()
            const endValue = stat.value

            const updateCounter = () => {
              const elapsed = Date.now() - startTime
              const progress = Math.min(elapsed / duration, 1)

              // Ease out cubic
              const easeOut = 1 - Math.pow(1 - progress, 3)
              const currentValue = Math.floor(easeOut * endValue)

              setCount(currentValue)

              if (progress < 1) {
                requestAnimationFrame(updateCounter)
              }
            }

            // Start counter after card animation
            setTimeout(updateCounter, index * 100 + 300)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [stat.value, index])

  const handleHover = () => {
    if (cardRef.current) {
      animate(cardRef.current, {
        scale: 1.05,
        duration: 300,
        ease: 'outBack',
      })
    }
  }

  const handleLeave = () => {
    if (cardRef.current) {
      animate(cardRef.current, {
        scale: 1,
        duration: 300,
        ease: 'outQuad',
      })
    }
  }

  return (
    <div
      ref={cardRef}
      className='stat-card opacity-0'
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}>
      {/* Gradient background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-10 rounded-2xl`}></div>

      {/* Icon */}
      <div
        className={`stat-icon-container bg-gradient-to-br ${stat.color}`}>
        <FontAwesomeIcon icon={stat.icon} className='text-white text-lg' />
      </div>

      {/* Value */}
      <div className='text-3xl md:text-4xl font-bold text-white mt-3 font-mono'>
        {count.toLocaleString()}
        <span className='text-primary-400'>{stat.suffix}</span>
      </div>

      {/* Label */}
      <div className='text-dark-400 text-sm mt-1'>{stat.label}</div>

      {/* Decorative corner */}
      <div className='absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl'>
        <div
          className={`absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br ${stat.color} opacity-20 rotate-45`}></div>
      </div>
    </div>
  )
}

export function AnimatedStats() {
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (containerRef.current) {
      animate(containerRef.current, {
        opacity: [0, 1],
        duration: 600,
        ease: 'outExpo',
      })
    }
  }, [])

  return (
    <section ref={containerRef} className='w-full max-w-5xl mx-auto opacity-0'>
      <h2 className='text-sm font-semibold text-dark-400 uppercase tracking-widest mb-6 text-center flex items-center justify-center gap-2'>
        <span className='w-8 h-[1px] bg-gradient-to-r from-transparent to-primary-500'></span>
        Stats & Achievements
        <span className='w-8 h-[1px] bg-gradient-to-l from-transparent to-primary-500'></span>
      </h2>

      <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        {stats.map((stat, index) => (
          <StatCard key={stat.id} stat={stat} index={index} />
        ))}
      </div>

      {/* GitHub link */}
      <div className='mt-6 text-center'>
        <a 
          href='https://github.com/burakboduroglu' 
          target='_blank' 
          rel='noopener noreferrer'
          className='text-dark-500 text-xs font-mono hover:text-primary-400 transition-colors'>
          <span className='text-accent-cyan'>→</span> View full profile on GitHub
        </a>
      </div>
    </section>
  )
}
