import { LinkItem } from '../types/link'
import {
  faLinkedin,
  faXTwitter,
  faYoutube,
  faGithub,
  faDev,
  faHackerrank,
  faFigma,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const initialLinks: LinkItem[] = [
  {
    id: 'linkedin',
    title: 'LinkedIn',
    url: 'https://linkedin.com/in/burakboduroglu',
    views: 0,
    icon: faLinkedin,
  },
  {
    id: 'x',
    title: 'X',
    url: 'https://x.com/cryptogophertr',
    views: 0,
    icon: faXTwitter,
  },
  {
    id: 'youtube',
    title: 'YouTube',
    url: 'https://youtube.com/@burakboduroglu',
    views: 0,
    icon: faYoutube,
  },
  {
    id: 'github',
    title: 'GitHub',
    url: 'https://github.com/burakboduroglu',
    views: 0,
    icon: faGithub,
  },
  {
    id: 'dev',
    title: 'DEV Community',
    url: 'https://dev.to/burakboduroglu',
    views: 0,
    icon: faDev,
  },
  {
    id: 'figma',
    title: 'Figma',
    url: 'https://figma.com/@burakboduroglu',
    views: 0,
    icon: faFigma,
  },
  {
    id: 'hackerrank',
    title: 'HackerRank',
    url: 'https://hackerrank.com/burakboduroglu',
    views: 0,
    icon: faHackerrank,
  },
  {
    id: 'contact',
    title: 'Contact',
    url: 'https://acoustic-dust-b61.notion.site/1883b173972d8195b23ed9146b8c8119?pvs=105',
    views: 0,
    icon: faEnvelope,
  },
]
