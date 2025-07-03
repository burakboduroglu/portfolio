import { LinkItem } from "../types/link";
import {
  faLinkedin,
  faXTwitter,
  faYoutube,
  faGithub,
  faDev,
  faHackerrank,
  faFigma,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

export const initialLinks: LinkItem[] = [
  {
    id: "linkedin",
    title: "LinkedIn",
    url: "https://linkedin.com/in/burakboduroglu",
    views: 0,
    icon: faLinkedin,
  },
  {
    id: "x",
    title: "X",
    url: "https://x.com/cryptogophertr",
    views: 0,
    icon: faXTwitter,
  },
  {
    id: "youtube",
    title: "YouTube",
    url: "https://youtube.com/@burakboduroglu",
    views: 0,
    icon: faYoutube,
  },
  {
    id: "github",
    title: "GitHub",
    url: "https://github.com/burakboduroglu",
    views: 0,
    icon: faGithub,
  },
  {
    id: "dev",
    title: "DEV Community",
    url: "https://dev.to/burakboduroglu",
    views: 0,
    icon: faDev,
  },
  {
    id: "medium",
    title: "Medium",
    url: "https://medium.com/@burakboduroglu",
    views: 0,
    icon: faMedium,
  },
  {
    id: "figma",
    title: "Figma",
    url: "https://figma.com/@burakboduroglu",
    views: 0,
    icon: faFigma,
  },
  {
    id: "hackerrank",
    title: "HackerRank",
    url: "https://hackerrank.com/burakboduroglu",
    views: 0,
    icon: faHackerrank,
  },
];
