import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export function Footer() {
  return (
    <footer className='py-6 text-gray-500 text-xs flex flex-col items-center gap-2 border-t border-white/10'>
      <div className='flex items-center gap-2'>
        <span>© {new Date().getFullYear()}</span>
        <span>—</span>
        <span className='inline-flex items-center gap-1'>
          Created with
          <FontAwesomeIcon icon={faHeart} className='text-red-500' aria-label='love' />
          by Burak Boduroglu
        </span>
      </div>
    </footer>
  )
}
