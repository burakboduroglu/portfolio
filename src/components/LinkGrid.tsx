import { LinkItem } from '../types/link'
import toast from 'react-hot-toast'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

interface LinkGridProps {
  links: LinkItem[]
  onLinkClick: (id: string) => void
}

export function LinkGrid({ links, onLinkClick }: LinkGridProps) {
  const handleCopyLink = async (e: React.MouseEvent, url: string) => {
    e.preventDefault()
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText(url)
      toast.success('Link copied!', {
        duration: 2000,
        position: 'bottom-center',
        style: {
          background: '#1e40af',
          color: '#fff',
        },
      })
    } catch (err) {
      toast.error('Copy failed', {
        duration: 2000,
        position: 'bottom-center',
      })
    }
  }

  return (
    <section className='flex flex-col gap-6' aria-label='Links'>
      <nav aria-label='Project Links' className='space-y-2'>
        {links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target='_blank'
            rel='noopener noreferrer'
            onClick={() => onLinkClick(link.id)}
            className='flex items-center justify-between rounded-lg border border-white/10 px-4 py-3 hover:bg-white/5 transition-colors'>
            <div className='flex items-center gap-3'>
              <FontAwesomeIcon icon={link.icon} className='text-blue-400' />
              <div>
                <div className='text-sm font-medium text-white'>{link.title}</div>
                <div className='text-xs text-gray-400'>{link.description}</div>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <button
                onClick={(e) => handleCopyLink(e, link.url)}
                className='text-gray-400 hover:text-blue-400 transition-colors p-1'
                aria-label={`Copy ${link.title} link`}>
                <FontAwesomeIcon icon={faEllipsisVertical} size='sm' />
              </button>
              <FontAwesomeIcon icon={faExternalLinkAlt} size='sm' className='text-blue-400' />
            </div>
          </a>
        ))}
      </nav>
    </section>
  )
}
