import React from 'react'
import { animate, stagger } from 'animejs'
import { LinkItem } from '../types/link'
import toast from 'react-hot-toast'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faArrowRight } from '@fortawesome/free-solid-svg-icons'

interface LinkGridProps {
  links: LinkItem[]
  onLinkClick: (id: string) => void
}

export function LinkGrid({ links, onLinkClick }: LinkGridProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const titleRef = React.useRef<HTMLHeadingElement>(null)

  React.useEffect(() => {
    // Title animation
    if (titleRef.current) {
      animate(titleRef.current, {
        translateX: [{ from: -50, to: 0 }],
        opacity: [{ from: 0, to: 1 }],
        duration: 800,
        ease: 'outExpo',
        delay: 400,
      })
    }

    // Links stagger animation
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll('.link-card')
      animate(cards, {
        translateX: [{ from: 100, to: 0 }],
        opacity: [{ from: 0, to: 1 }],
        duration: 800,
        delay: stagger(100, { start: 500 }),
        ease: 'outExpo',
      })
    }
  }, [])

  // Card hover animation
  const handleCardHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const icon = e.currentTarget.querySelector('.icon-container')
    const arrow = e.currentTarget.querySelector('.arrow-icon')

    animate(e.currentTarget, {
      translateX: 8,
      duration: 300,
      ease: 'outQuad',
    })

    if (icon) {
      animate(icon, {
        scale: 1.15,
        rotate: '10deg',
        duration: 400,
        ease: 'outBack',
      })
    }

    if (arrow) {
      animate(arrow, {
        translateX: 5,
        duration: 300,
        ease: 'outQuad',
      })
    }
  }

  const handleCardLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const icon = e.currentTarget.querySelector('.icon-container')
    const arrow = e.currentTarget.querySelector('.arrow-icon')

    animate(e.currentTarget, {
      translateX: 0,
      duration: 300,
      ease: 'outQuad',
    })

    if (icon) {
      animate(icon, {
        scale: 1,
        rotate: '0deg',
        duration: 300,
        ease: 'outQuad',
      })
    }

    if (arrow) {
      animate(arrow, {
        translateX: 0,
        duration: 300,
        ease: 'outQuad',
      })
    }
  }

  // Click ripple effect
  const handleCardClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Create ripple element
    const ripple = document.createElement('span')
    ripple.className = 'absolute rounded-full bg-white/20 pointer-events-none'
    ripple.style.left = `${x}px`
    ripple.style.top = `${y}px`
    ripple.style.width = '0'
    ripple.style.height = '0'
    ripple.style.transform = 'translate(-50%, -50%)'

    e.currentTarget.style.overflow = 'hidden'
    e.currentTarget.appendChild(ripple)

    animate(ripple, {
      width: 300,
      height: 300,
      opacity: [{ from: 1, to: 0 }],
      duration: 600,
      ease: 'outExpo',
      onComplete: () => ripple.remove(),
    })

    onLinkClick(id)
  }

  const handleCopyLink = async (e: React.MouseEvent, url: string) => {
    e.preventDefault()
    e.stopPropagation()

    // Button pulse animation
    animate(e.currentTarget, {
      scale: [{ to: 1.3 }, { to: 1 }],
      duration: 400,
      ease: 'outBack',
    })

    try {
      await navigator.clipboard.writeText(url)
      toast.success('Link copied to clipboard!', {
        duration: 2000,
        position: 'bottom-center',
        style: {
          background: 'rgba(99, 102, 241, 0.9)',
          backdropFilter: 'blur(10px)',
          color: '#fff',
          borderRadius: '12px',
          border: '1px solid rgba(129, 140, 248, 0.3)',
          fontFamily: 'Outfit, sans-serif',
          fontSize: '14px',
        },
        iconTheme: {
          primary: '#22d3ee',
          secondary: '#fff',
        },
      })
    } catch {
      toast.error('Failed to copy link', {
        duration: 2000,
        position: 'bottom-center',
        style: {
          background: 'rgba(239, 68, 68, 0.9)',
          color: '#fff',
          borderRadius: '12px',
          fontFamily: 'Outfit, sans-serif',
        },
      })
    }
  }

  return (
    <section className='flex flex-col gap-4' aria-label='Links'>
      <h2
        ref={titleRef}
        className='text-sm font-semibold text-dark-400 uppercase tracking-widest mb-2 text-center md:text-left opacity-0'>
        Connect with me
      </h2>
      <nav ref={containerRef} aria-label='Project Links' className='space-y-3'>
        {links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target='_blank'
            rel='noopener noreferrer'
            onClick={(e) => handleCardClick(e, link.id)}
            onMouseEnter={handleCardHover}
            onMouseLeave={handleCardLeave}
            className='link-card group flex items-center justify-between px-5 py-4 relative opacity-0'>
            <div className='flex items-center gap-4'>
              <div className='icon-container'>
                <FontAwesomeIcon
                  icon={link.icon}
                  className='text-primary-400 text-lg transition-colors group-hover:text-accent-cyan'
                />
              </div>
              <div className='text-left'>
                <div className='text-base font-medium text-dark-100 group-hover:text-white transition-colors'>
                  {link.title}
                </div>
                <div className='text-xs text-dark-400 group-hover:text-dark-300 transition-colors'>
                  {link.description}
                </div>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <button
                onClick={(e) => handleCopyLink(e, link.url)}
                className='text-dark-500 hover:text-primary-400 transition-all p-2 rounded-lg hover:bg-primary-500/10 opacity-0 group-hover:opacity-100'
                aria-label={`Copy ${link.title} link`}>
                <FontAwesomeIcon icon={faCopy} size='sm' />
              </button>
              <FontAwesomeIcon
                icon={faArrowRight}
                className='arrow-icon text-dark-500 group-hover:text-primary-400 transition-colors'
              />
            </div>
          </a>
        ))}
      </nav>
    </section>
  )
}
