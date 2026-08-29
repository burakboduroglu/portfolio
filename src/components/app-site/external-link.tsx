import type { AnchorHTMLAttributes, ReactNode } from 'react'

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: ReactNode
  className?: string
  title?: string
  'aria-label'?: string
}

function ExternalLink({
  href,
  children,
  className = '',
  title,
  'aria-label': ariaLabel,
  onClick,
  ...props
}: ExternalLinkProps) {
  return (
    <a
      className={className}
      href={href}
      target='_blank'
      rel='noreferrer noopener'
      title={title}
      aria-label={ariaLabel}
      onClick={onClick}
      {...props}>
      {children}
    </a>
  )
}

export default ExternalLink

