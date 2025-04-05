import { LinkItem } from '../types/link'
import {
  faLinkedin,
  faXTwitter,
  faYoutube,
  faGithub,
  faDev,
  faHackerrank,
  faFigma,
  faBluesky,
  faMedium,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faCode, faFileCode } from '@fortawesome/free-solid-svg-icons'

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
    id: 'BlueSky',
    title: 'BlueSky',
    url: 'https://bsky.app/profile/burakboduroglu.bsky.social',
    views: 0,
    icon: faBluesky,
  },
  {
    id: 'dev',
    title: 'DEV Community',
    url: 'https://dev.to/burakboduroglu',
    views: 0,
    icon: faDev,
  },
  {
    id: 'medium',
    title: 'Medium',
    url: 'https://medium.com/@burakboduroglu',
    views: 0,
    icon: faMedium,
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
    id: 'leetcode',
    title: 'LeetCode',
    url: 'https://leetcode.com/u/burakboduroglu/',
    views: 0,
    icon: faCode,
  },
  {
    id: 'Codewars',
    title: 'Codewars',
    url: 'https://www.codewars.com/users/burakboduroglu',
    views: 0,
    icon: faFileCode,
  },

  {
    id: 'contact',
    title: 'Contact',
    url: 'https://acoustic-dust-b61.notion.site/1883b173972d8195b23ed9146b8c8119?pvs=105',
    views: 0,
    icon: faEnvelope,
  },
]
