function ExternalLink({
  href,
  children,
  className = '',
  title,
  'aria-label': ariaLabel,
  onClick,
}: {
  href: string
  children: React.ReactNode
  className?: string
  title?: string
  'aria-label'?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}) {
  return (
    <a
      className={className}
      href={href}
      target='_blank'
      rel='noreferrer noopener'
      title={title}
      aria-label={ariaLabel}
      onClick={onClick}>
      {children}
    </a>
  )
}

export default ExternalLink
