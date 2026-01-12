import React from 'react'
import { animate } from 'animejs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFileAlt, faComments } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const actions = [
  { id: 'email', icon: faEnvelope, label: 'Email', href: 'mailto:info@burakboduroglu.com.tr', color: 'bg-wise-green' },
  { id: 'linkedin', icon: faLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/burakboduroglu', color: 'bg-blue-600' },
  { id: 'github', icon: faGithub, label: 'GitHub', href: 'https://github.com/burakboduroglu', color: 'bg-dark-700' },
]

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const buttonRef = React.useRef<HTMLButtonElement>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)

    if (buttonRef.current) {
      animate(buttonRef.current, {
        rotate: isOpen ? '0deg' : '45deg',
        duration: 300,
        ease: 'outBack',
      })
    }
  }

  React.useEffect(() => {
    if (containerRef.current) {
      const buttons = containerRef.current.querySelectorAll('.fab-action')

      if (isOpen) {
        animate(buttons, {
          opacity: [0, 1],
          translateY: [20, 0],
          scale: [0.8, 1],
          duration: 300,
          delay: (_, i) => i * 50,
          ease: 'outBack',
        })
      } else {
        animate(buttons, {
          opacity: 0,
          translateY: 20,
          scale: 0.8,
          duration: 200,
          ease: 'inQuad',
        })
      }
    }
  }, [isOpen])

  return (
    <div className='fixed bottom-6 right-6 z-50 flex flex-col-reverse items-center gap-3'>
      {/* Action buttons */}
      <div ref={containerRef} className='flex flex-col-reverse gap-2'>
        {actions.map((action) => (
          <a
            key={action.id}
            href={action.href}
            target={action.id !== 'email' ? '_blank' : undefined}
            rel='noopener noreferrer'
            className={`fab-action ${action.color} w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg opacity-0 hover:scale-110 transition-transform`}
            title={action.label}>
            <FontAwesomeIcon icon={action.icon} className='text-lg' />
          </a>
        ))}
      </div>

      {/* Main FAB */}
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className='w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center text-white shadow-xl shadow-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/40 transition-shadow'>
        <FontAwesomeIcon icon={faComments} className='text-xl' />
      </button>
    </div>
  )
}
