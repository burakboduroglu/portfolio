import { ProfileData, ProfileLink } from '../types/profile'

const primaryLinks: ProfileLink[] = [
  { key: 'email', href: 'mailto:info@burakboduroglu.com.tr', icon: 'mail' },
  { key: 'linkedin', href: 'https://www.linkedin.com/in/burakboduroglu', icon: 'linkedin' },
  { key: 'github', href: 'https://github.com/burakboduroglu', icon: 'github' },
  { key: 'reddit', href: 'https://www.reddit.com/user/penoloxai/', icon: 'reddit' },
  { key: 'x', href: 'https://x.com/penoloxai', icon: 'x' },
]

const developerProfiles: ProfileLink[] = [
  { key: 'gdev', href: 'https://g.dev/burakboduroglu', icon: 'gdev', handle: 'g.dev/burakboduroglu' },
  { key: 'microsoft', href: 'https://learn.microsoft.com/en-us/users/burakboduroglu/', icon: 'microsoft', handle: '@burakboduroglu' },
  { key: 'aws', href: 'https://builder.aws.com/community/@burakboduroglu', icon: 'aws', handle: '@burakboduroglu' },
  { key: 'cursor', href: 'https://cursor.com/@penolox', icon: 'cursor', handle: '@penolox' },
  { key: 'huggingface', href: 'https://huggingface.co/penoloxai', icon: 'huggingface', handle: '@penoloxai' },
  { key: 'kaggle', href: 'https://www.kaggle.com/penolox', icon: 'kaggle', handle: '@penolox' },
  { key: 'lovable', href: 'https://lovable.dev/@burakboduroglu', icon: 'lovable', handle: '@burakboduroglu' },
  { key: 'producthunt', href: 'https://www.producthunt.com/@burakboduroglu', icon: 'producthunt', handle: '@burakboduroglu' },
  { key: 'figma', href: 'https://www.figma.com/@burakboduroglu', icon: 'figma', handle: '@burakboduroglu' },
  { key: 'framer', href: 'https://www.framer.com/@burak-boduroglu/', icon: 'framer', handle: '@burak-boduroglu' },
  { key: 'github', href: 'https://github.com/burakboduroglu', icon: 'github', handle: 'burakboduroglu' },
  { key: 'npm', href: 'https://www.npmjs.com/~burakboduroglu', icon: 'npm', handle: '~burakboduroglu' },
  { key: 'devto', href: 'https://dev.to/burakboduroglu', icon: 'devto', handle: 'burakboduroglu' },
  { key: 'medium', href: 'https://medium.com/@burakboduroglu', icon: 'medium', handle: '@burakboduroglu' },
  { key: 'substack', href: 'https://substack.com/@penoloxai', icon: 'substack', handle: '@penoloxai' },
  { key: 'youtube', href: 'https://www.youtube.com/@penoloxai', icon: 'youtube', handle: '@penoloxai' },
  { key: 'bsky', href: 'https://bsky.app/profile/penoloxai.bsky.social', icon: 'bsky', handle: '@penoloxai' },
  { key: 'kick', href: 'https://kick.com/penolox', icon: 'kick', handle: 'penolox' },
]

const profile = {
  name: 'Burak Boduroğlu',
  avatarUrl: 'https://avatars.githubusercontent.com/u/80620802?v=4',
  email: 'info@burakboduroglu.com.tr',
  githubUrl: 'https://github.com/burakboduroglu',
  primaryLinks,
  developerProfiles,
  links: primaryLinks,
} satisfies ProfileData

export default profile
