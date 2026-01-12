import React from 'react'
import { animate } from 'animejs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faRocket, faLightbulb, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const bentoItems = [
  {
    id: 'code',
    title: 'Clean Code',
    subtitle: 'Lover',
    icon: faCode,
    color: 'from-wise-green/20 to-wise-green/5',
    borderColor: 'border-wise-green/30',
    textColor: 'text-wise-green',
    size: 'col-span-1 row-span-1',
  },
  {
    id: 'github',
    title: '34+',
    subtitle: 'Open Source Repos',
    icon: faGithub,
    color: 'from-primary-500/20 to-primary-500/5',
    borderColor: 'border-primary-500/30',
    textColor: 'text-primary-400',
    size: 'col-span-1 row-span-1',
  },
  {
    id: 'ideas',
    title: 'Problem',
    subtitle: 'Solver',
    icon: faLightbulb,
    color: 'from-amber-500/20 to-amber-500/5',
    borderColor: 'border-amber-500/30',
    textColor: 'text-amber-400',
    size: 'col-span-1 row-span-1',
  },
  {
    id: 'rocket',
    title: 'Ship Fast',
    subtitle: '& Iterate',
    icon: faRocket,
    color: 'from-accent-pink/20 to-accent-pink/5',
    borderColor: 'border-accent-pink/30',
    textColor: 'text-accent-pink',
    size: 'col-span-1 row-span-1',
  },
]

function BentoCard({ item, index }: { item: typeof bentoItems[0]; index: number }) {
  const cardRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && cardRef.current) {
            animate(cardRef.current, {
              opacity: [0, 1],
              translateY: [30, 0],
              scale: [0.95, 1],
              duration: 600,
              delay: index * 100,
              ease: 'outExpo',
            })
            observer.disconnect()
          }
        })
      },
      { threshold: 0.2 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [index])

  const handleHover = () => {
    if (cardRef.current) {
      animate(cardRef.current, {
        scale: 1.02,
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
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      className={`bento-card ${item.size} opacity-0 relative overflow-hidden rounded-2xl md:rounded-3xl border ${item.borderColor} bg-gradient-to-br ${item.color} p-4 md:p-6 cursor-default transition-colors hover:bg-opacity-80`}>
      {/* Icon */}
      <div className={`${item.textColor} mb-3 md:mb-4`}>
        <FontAwesomeIcon icon={item.icon} className='text-2xl md:text-3xl' />
      </div>

      {/* Text */}
      <div>
        <h3 className={`text-xl md:text-2xl font-bold ${item.textColor}`}>{item.title}</h3>
        <p className='text-dark-400 text-sm md:text-base'>{item.subtitle}</p>
      </div>

      {/* Decorative corner */}
      <div className='absolute -bottom-4 -right-4 w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/5 blur-2xl'></div>
    </div>
  )
}

export function WiseBentoGrid() {
  return (
    <section className='w-full max-w-2xl mx-auto'>
      <h2 className='text-xs font-semibold text-dark-400 uppercase tracking-widest mb-6 flex items-center justify-center gap-3'>
        <span className='w-12 h-[1px] bg-gradient-to-r from-transparent to-wise-green/50'></span>
        What I Do
        <span className='w-12 h-[1px] bg-gradient-to-l from-transparent to-wise-green/50'></span>
      </h2>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4'>
        {bentoItems.map((item, index) => (
          <BentoCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  )
}
