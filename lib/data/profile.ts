import { ProfileData } from '../types/profile'

const profile = {
  name: 'Burak Boduroğlu',
  location: 'Türkiye / Remote',
  avatarUrl: 'https://avatars.githubusercontent.com/u/80620802?v=4',
  intro:
    'I’m a software engineer who likes turning unclear ideas into simple, reliable, and usable software. I enjoy working across the full product cycle — understanding the problem, shaping the experience, building the system, and refining it until it feels clear and dependable.',
  aiIntro:
    'My work style is practical and intentional: define the context, move in small iterations, keep the system observable, and use modern tools thoughtfully. I care about software that is easy to understand, easy to improve, and calm to operate.',
  reachOutPre: 'Open to collaborations, developer tooling, and clear conversations —',
  links: [
    { label: 'Send email', href: 'mailto:info@burakboduroglu.com.tr', icon: 'mail' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/burakboduroglu', icon: 'linkedin' },
    { label: 'DEV.to', href: 'https://dev.to/burakboduroglu', icon: 'devto' },
    { label: 'GitHub', href: 'https://github.com/burakboduroglu', icon: 'github' },
    { label: 'NPM', href: 'https://www.npmjs.com/~burakboduroglu', icon: 'npm' },
  ],
} satisfies ProfileData

export default profile
