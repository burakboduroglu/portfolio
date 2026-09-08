export type ProfileLinkKey =
  | 'email'
  | 'linkedin'
  | 'devto'
  | 'github'
  | 'substack'
  | 'x'
  | 'reddit'
  | 'youtube'
  | 'kick'
  | 'figma'
  | 'gdev'
  | 'microsoft'
  | 'aws'
  | 'lovable'
  | 'medium'
  | 'npm'
  | 'framer'
  | 'huggingface'
  | 'higgsfield'
  | 'suno'


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

