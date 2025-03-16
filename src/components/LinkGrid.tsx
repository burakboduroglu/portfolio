import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { LinkItem } from '../types/link'
import toast from 'react-hot-toast'

interface LinkGridProps {
  links: LinkItem[]
  onLinkClick: (id: string) => void
  featuredLink?: LinkItem
  secondFeaturedLink?: LinkItem
}

export function LinkGrid({ links, onLinkClick, featuredLink, secondFeaturedLink }: LinkGridProps) {
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
      <div className='flex justify-center mb-1 w-full'>
        <img
          src='https://skillicons.dev/icons?i=java,spring,hibernate,js,ts,next,react,nodejs,express,vite,mongodb,postgres,docker,tailwind'
          alt='Tech Skills'
          className='h-8 md:h-10'
        />
      </div>

      <div className='flex flex-col md:flex-row gap-3'>
        {featuredLink && (
          <FeaturedLink
            link={featuredLink}
            onLinkClick={onLinkClick}
            onCopyLink={handleCopyLink}
            gradientClass='from-[#1f1f37] via-[#2d2d5a] to-[#373777]
                         hover:from-[#24244d] hover:via-[#323268] hover:to-[#3d3d86]'
          />
        )}
        {secondFeaturedLink && (
          <FeaturedLink
            link={secondFeaturedLink}
            onLinkClick={onLinkClick}
            onCopyLink={handleCopyLink}
            gradientClass='from-[#1a1a2c] via-[#2b2b4f] to-[#35356b]
                         hover:from-[#1f1f33] hover:via-[#30305a] hover:to-[#3a3a76]'
          />
        )}
      </div>

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

function FeaturedLink({
  link,
  onLinkClick,
  onCopyLink,
  gradientClass,
}: {
  link: LinkItem
  onLinkClick: (id: string) => void
  onCopyLink: (e: React.MouseEvent, url: string) => void
  gradientClass: string
}) {
  return (
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
      className={`bg-gradient-to-r ${gradientClass}
                 shadow-lg hover:shadow-xl
                 md:h-20 transition-all duration-500 
                 text-white font-medium rounded-md
                 border border-[#ffffff15]
                 flex items-center justify-between
                 relative group h-14 p-4
                 md:flex-1
                 backdrop-blur-sm`}>
      <div className='flex items-center gap-3'>
        <FontAwesomeIcon icon={link.icon} size='xl' className='block' />
        <span className='text-sm md:text-lg text-white'>{link.title}</span>
      </div>
      <div className='flex items-center gap-3'>
        <button
          onClick={(e) => onCopyLink(e, link.url)}
          className='block text-white hover:cursor-pointer transition-colors p-1'>
          <FontAwesomeIcon icon={faEllipsisVertical} size='lg' />
        </button>
      </div>
    </a>
  )
}
