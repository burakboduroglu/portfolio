import { LinkItem } from "../types/link";
import {
  faLinkedin,
  faGithub,
  faMedium,
  faDev,
  faMicrosoft,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faGraduationCap,
  faEnvelope,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

export const initialLinks: LinkItem[] = [
  {
    id: "linkedin",
    title: "LinkedIn",
    url: "https://linkedin.com/in/burakboduroglu",
    views: 0,
    icon: faLinkedin,
    description: "Professional network",
  },
  {
    id: "github",
    title: "GitHub",
    url: "https://github.com/burakboduroglu",
    views: 0,
    icon: faGithub,
    description: " Visit my projects",
  },
  {
    id: "dev",
    title: "Dev.to",
    url: "https://dev.to/burakboduroglu",
    views: 0,
    icon: faDev,
    description: "Visit my dev.to profile",
  },
  {
    id: "medium",
    title: "Medium",
    url: "https://medium.com/@burakboduroglu",
    views: 0,
    icon: faMedium,
    description: " Read my articles",
  },
  {
    id: "microsoft",
    title: "Microsoft Learn",
    url: "https://learn.microsoft.com/en-us/users/burakboduroglu",
    views: 0,
    icon: faMicrosoft,
    description: "Visit my Microsoft Learn profile",
  },
  {
    id: "portfolio",
    title: "Blogs and Tutorials",
    url: "https://burakboduroglu.github.io/blogs-and-tutorials/",
    views: 0,
    icon: faGraduationCap,
    description: "Visit my personal blog",
  },
  {
    id: "youtube",
    title: "YouTube",
    url: "https://www.youtube.com/@burakboduroglu",
    views: 0,
    icon: faYoutube,
    description: "Visit my YouTube channel",
  },
  {
    id: "gravatar",
    title: "Burak Boduroglu Card",
    url: "https://burakboduroglu.bio",
    views: 0,
    icon: faAddressCard,
    description: "Visit my personal card",
  },
  {
    id: "contact",
    title: "Contact Me",
    url: "mailto:info@burakboduroglu.com.tr",
    views: 0,
    icon: faEnvelope,
    description: "Let's discuss opportunities",
  },
];
