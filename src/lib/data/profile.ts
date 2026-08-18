import { ProfileData } from '../types/profile'

const profile = {
  name: 'Burak Boduroğlu',
  avatarUrl: 'https://avatars.githubusercontent.com/u/80620802?v=4',
  email: 'info@burakboduroglu.com.tr',
  githubUrl: 'https://github.com/burakboduroglu',
  links: [
    { key: 'email', href: 'mailto:info@burakboduroglu.com.tr', icon: 'mail' },
    { key: 'linkedin', href: 'https://www.linkedin.com/in/burakboduroglu', icon: 'linkedin' },
    { key: 'github', href: 'https://github.com/burakboduroglu', icon: 'github' },
    { key: 'substack', href: 'https://substack.com/@penoloxai', icon: 'substack' },
    { key: 'x', href: 'https://x.com/penoloxai', icon: 'x' },
    { key: 'reddit', href: 'https://www.reddit.com/user/penoloxai/', icon: 'reddit' },
    { key: 'youtube', href: 'https://www.youtube.com/@penoloxai', icon: 'youtube' },
    { key: 'producthunt', href: 'https://www.producthunt.com/@burakboduroglu', icon: 'producthunt' },
    { key: 'devto', href: 'https://dev.to/burakboduroglu', icon: 'devto' },
  ],
} satisfies ProfileData

export default profile
