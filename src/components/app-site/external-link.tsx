function ExternalLink({
  href,
  children,
  className = '',
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <a className={className} href={href} target='_blank' rel='noreferrer'>
      {children}
    </a>
  )
}

export default ExternalLink
