import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react'
import { navigate } from '../lib/router'

interface InternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: ReactNode
}

/**
 * Renders a real `href` so the link is crawlable, middle-clickable and shown in
 * the status bar; intercepts only the plain left click to route in place.
 */
function InternalLink({ href, children, onClick, ...props }: InternalLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)

    // Let the browser own modified clicks — new tab, new window, download
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return
    }

    event.preventDefault()
    navigate(href)
  }

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  )
}

export default InternalLink
