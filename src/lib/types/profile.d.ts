export type ProfileLinkKey =
  | 'email'
  | 'linkedin'
  | 'devto'
  | 'github'
  | 'substack'
  | 'x'
  | 'reddit'
  | 'youtube'
  | 'producthunt'
  | 'kick'
  | 'figma'
  | 'bsky'
  | 'gdev'
  | 'microsoft'
  | 'aws'
  | 'lovable'
  | 'cursor'
  | 'medium'
  | 'npm'
  | 'framer'


export type ProfileLink = {
  key: ProfileLinkKey
  href: string
  icon: string
  handle?: string
}

export type ProfileData = {
  name: string
  avatarUrl: string
  email: string
  githubUrl: string
  primaryLinks: ProfileLink[]
  developerProfiles: ProfileLink[]
  links: ProfileLink[]
}

