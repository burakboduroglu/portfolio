import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export function Footer() {
  return (
    <div className='py-6 text-gray-400 text-sm flex flex-col items-center border-t border-gray-800'>
      <p className='flex items-center gap-2'>
        Created with <FontAwesomeIcon icon={faHeart} className='text-red-500' /> by
        <a
          href='https://github.com/burakboduroglu'
          target='_blank'
          rel='noopener noreferrer'
          className='text-white hover:text-gray-300 transition-colors'>
          Burak Boduroglu
        </a>
      </p>
      <p className='mt-1 text-xs'>© {new Date().getFullYear()} All rights reserved</p>
    </div>
  )
}
