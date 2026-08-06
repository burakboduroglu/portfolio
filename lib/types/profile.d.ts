export type ProfileLinkKey = 'email' | 'linkedin' | 'devto' | 'github' | 'npm'

export type ProfileLink = {
  key: ProfileLinkKey
  href: string
  icon: string
}

export type ProfileData = {
  name: string
  avatarUrl: string
  email: string
  githubUrl: string
  links: ProfileLink[]
}
