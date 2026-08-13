function ExternalLink({
  href,
  children,
  className = '',
  title,
  'aria-label': ariaLabel,
}: {
  href: string
  children: React.ReactNode
  className?: string
  title?: string
  'aria-label'?: string
}) {
  return (
    <a
      className={className}
      href={href}
      target='_blank'
      rel='noreferrer'
      title={title}
      aria-label={ariaLabel}>
      {children}
    </a>
  )
}

export default ExternalLink
