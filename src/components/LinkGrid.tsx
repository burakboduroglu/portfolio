import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { LinkItem } from '../types/link'
import toast from 'react-hot-toast'

interface LinkGridProps {
  links: LinkItem[]
  onLinkClick: (id: string) => void
  featuredLink?: LinkItem
}

export function LinkGrid({ links, onLinkClick, featuredLink }: LinkGridProps) {
  const handleCopyLink = async (e: React.MouseEvent, url: string) => {
    e.preventDefault()
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText(url)
      toast.success('Copied!', {
        duration: 2000,
        position: 'bottom-center',
        style: {
          background: '#0B1910',
          color: '#fff',
        },
      })
    } catch (err) {
      toast.error('Failed to copy link', {
        duration: 2000,
        position: 'bottom-center',
      })
    }
  }

  return (
    <div className='flex flex-col gap-3'>
      {featuredLink && (
        <a
          key={featuredLink.id}
          href={featuredLink.url}
          target='_blank'
          rel='noopener noreferrer'
          onClick={(e) => {
            e.preventDefault()
            onLinkClick(featuredLink.id)
            window.open(featuredLink.url, '_blank')
          }}
          className='bg-gradient-to-r from-[#0f1c47] via-[#7a1515] to-[#b38309] 
                     md:h-20 hover:opacity-90 transition-all duration-200 
                     text-white font-medium rounded-md
                     border border-white
                     flex items-center justify-between md:justify-between
                     relative group h-14 p-4
                     md:col-span-full'>
          <div className='flex items-center gap-3'>
            <FontAwesomeIcon icon={featuredLink.icon} size='xl' className='block' />
            <span className='text-sm md:text-lg text-white'>{featuredLink.title}</span>
          </div>
          <div className='flex items-center gap-3'>
            <button
              onClick={(e) => handleCopyLink(e, featuredLink.url)}
              className='block text-white hover:cursor-pointer transition-colors p-1'>
              <FontAwesomeIcon icon={faEllipsisVertical} size='lg' />
            </button>
          </div>
        </a>
      )}

      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3'>
        {links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target='_blank'
            rel='noopener noreferrer'
            onClick={(e) => {
              e.preventDefault()
              onLinkClick(link.id)
              window.open(link.url, '_blank')
            }}
            className='bg-[#0B1925] hover:bg-gray-300 transition-all duration-200 
                     text-white hover:text-black font-medium rounded-md
                     border border-white
                     flex md:flex-col items-center justify-between md:justify-center
                     relative group h-14 md:h-auto md:aspect-square p-4 md:p-2'>
            <div className='flex items-center gap-3 lg:pt-3 md:gap-0 md:flex-1 md:flex-col'>
              <FontAwesomeIcon icon={link.icon} size='xl' className='block' />
              <span className='text-sm md:text-xs text-gray-400 group-hover:text-gray-600 md:mt-2'>
                {link.title}
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <button
                onClick={(e) => handleCopyLink(e, link.url)}
                className='block text-gray-600 hover:cursor-pointer ransition-colors p-1'>
                <FontAwesomeIcon icon={faEllipsisVertical} size='lg' />
              </button>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
