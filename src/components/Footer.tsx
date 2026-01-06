import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCode } from '@fortawesome/free-solid-svg-icons'

export function Footer() {
  return (
    <footer className='footer-gradient py-8 mt-12 animate-fade-in delay-700'>
      <div className='flex flex-col items-center gap-4'>
        {/* Decorative line */}
        <div className='section-divider w-24 mb-2'></div>

        {/* Main footer content */}
        <div className='flex flex-col items-center gap-2 text-dark-400 text-sm'>
          <div className='flex items-center gap-2'>
            <FontAwesomeIcon icon={faCode} className='text-primary-500 text-xs' />
            <span className='font-mono text-xs'>v1.0.0</span>
          </div>

          <div className='flex items-center gap-2'>
            <span>© {new Date().getFullYear()}</span>
            <span className='text-dark-600'>•</span>
            <span className='inline-flex items-center gap-1.5'>
              Crafted with
              <FontAwesomeIcon
                icon={faHeart}
                className='text-accent-pink animate-pulse'
                aria-label='love'
              />
              by
              <span className='text-dark-200 font-medium hover:text-primary-400 transition-colors cursor-default'>
                Burak Boduroğlu
              </span>
            </span>
          </div>
        </div>

        {/* Tech stack badge */}
        <div className='flex items-center gap-2 mt-2'>
          <span className='text-[10px] text-dark-500 font-mono bg-dark-800/50 px-3 py-1 rounded-full border border-dark-700/50'>
            React • TypeScript • Tailwind
          </span>
        </div>
      </div>
    </footer>
  )
}
