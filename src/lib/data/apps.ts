import portfolioLogo from '../../../assets/portfolio-logo.svg'
import { AppMeta } from '../types/app'

const apps: AppMeta[] = [
  {
    id: 'portkill',
    categoryKey: 'cli',
    categoryKeys: ['cli', 'developer'],
    title: '.portkill',
    repo: 'https://github.com/burakboduroglu/portkill',
    link: 'https://www.npmjs.com/package/@burakboduroglu/portkill',
    icon: 'p',
    logoUrl:
      'https://raw.githubusercontent.com/burakboduroglu/portkill/main/assets/portkill-logo.svg',
    accent: 'portkill',
    install: [
      { manager: 'Homebrew', command: 'brew install burakboduroglu/portkill/portkill' },
      { manager: 'bun', command: 'bun add -g @burakboduroglu/portkill' },
    ],
  },
  {
    id: 'macshelf',
    categoryKey: 'macos',
    categoryKeys: ['macos', 'productivity'],
    title: 'MacShelf',
    repo: 'https://github.com/burakboduroglu/macshelf',
    link: 'https://github.com/burakboduroglu/macshelf/releases/latest',
    icon: 'M',
    logoUrl:
      'https://github.com/burakboduroglu/macshelf/raw/main/assets/macshelf-logo.svg',
    accent: 'dark',
    install: [
      {
        manager: 'After the DMG',
        command: 'xattr -dr com.apple.quarantine /Applications/MacShelf.app',
      },
      { manager: 'Homebrew', command: 'brew install burakboduroglu/macshelf/macshelf' },
    ],
  },
  {
    id: 'bdash',
    categoryKey: 'web',
    categoryKeys: ['web', 'productivity'],
    title: 'BDash',
    link: 'https://bdash.burakboduroglu.com.tr',
    icon: 'B',
    logoUrl: '/logos/bdash.png',
    accent: 'bdash',
    featured: true,
  },
  {
    id: 'skadi',
    categoryKey: 'cli',
    categoryKeys: ['cli', 'productivity'],
    title: 'Skadi',
    repo: 'https://github.com/burakboduroglu/skadi',
    link: 'https://www.npmjs.com/package/@burakboduroglu/skadi',
    icon: 'S',
    logoUrl: 'https://raw.githubusercontent.com/burakboduroglu/skadi/main/assets/logo.png',
    accent: 'skadi',
    install: [
      { manager: 'bun', command: 'bunx @burakboduroglu/skadi install /path/to/pocketbase' },
    ],
  },
  {
    id: 'dizey',
    categoryKey: 'web',
    title: 'Dizey',
    link: 'https://dizey.sh',
    icon: 'D',
    logoUrl: '/logos/dizey.svg',
    accent: 'dizey',
  },
  {
    id: 'penote',
    categoryKey: 'cli',
    categoryKeys: ['cli', 'developer'],
    title: 'penote',
    repo: 'https://github.com/burakboduroglu/penote',
    link: 'https://www.npmjs.com/package/@burakboduroglu/penote',
    icon: 'PN',
    logoUrl:
      'https://raw.githubusercontent.com/burakboduroglu/penote/main/assets/penote-logo.svg',
    accent: 'penote',
    install: [{ manager: 'bun', command: 'bun add -g @burakboduroglu/penote' }],
  },
  {
    id: 'portfolio',
    categoryKey: 'web',
    title: 'Portfolio',
    repo: 'https://github.com/burakboduroglu/portfolio',
    link: 'https://burakboduroglu.com.tr',
    icon: 'P',
    logoUrl: portfolioLogo,
    accent: 'portfolio',
  },
  {
    id: 'alice',
    categoryKey: 'web',
    title: 'Alice',
    repo: 'https://github.com/burakboduroglu/alice',
    link: 'https://alicepalazzo.com',
    icon: 'A',
    logoUrl: '/logos/alice.png',
    accent: 'rose',
  },
  {
    id: 'betus-design',
    categoryKey: 'web',
    title: 'Betus Design',
    repo: 'https://github.com/burakboduroglu/betus-design',
    link: 'https://btsdesign.com.tr',
    icon: 'B',
    logoUrl: '/logos/betus-design.png',
    accent: 'golden',
  },
]

export default apps
