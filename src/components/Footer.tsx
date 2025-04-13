import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export function Footer() {
  return (
    <footer className='py-6 text-gray-400 text-sm flex flex-col items-center border-t border-gray-800'>
      <div className='flex items-center gap-2'>
        <p>Created with</p>
        <FontAwesomeIcon icon={faHeart} className='text-red-500' aria-label='love' />
        <p>by</p>
        <address className='inline'>
          <a
            href='https://github.com/burakboduroglu'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white hover:text-gray-300 transition-colors'>
            Burak Boduroglu
          </a>
        </address>
      </div>
      <small className='mt-1 text-xs'>© {new Date().getFullYear()} All rights reserved</small>
    </footer>
  )
}
