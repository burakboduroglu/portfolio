import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faDev,
  faGithub,
  faGitlab,
  faLinkedin,
  faMedium,
  faMicrosoft,
  faNpm,
  faReddit,
  faTiktok,
  faVsco,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export type ContactLinkDef = {
  id: string;
  url: string;
  icon: IconDefinition;
};

/** Sıra ve URL’ler; başlık ve açıklama `messages` içinde `contact.links.<id>`. */
export const CONTACT_LINK_DEFINITIONS: readonly ContactLinkDef[] = [
  {
    id: "gitlab",
    url: "https://gitlab.com/burakboduroglu",
    icon: faGitlab,
  },
  {
    id: "github",
    url: "https://github.com/burakboduroglu",
    icon: faGithub,
  },
  {
    id: "dev",
    url: "https://dev.to/burakboduroglu",
    icon: faDev,
  },
  {
    id: "npm",
    url: "https://www.npmjs.com/~burakboduroglu",
    icon: faNpm,
  },
  {
    id: "reddit",
    url: "https://www.reddit.com/user/burakboduroglu1/",
    icon: faReddit,
  },
  {
    id: "linkedin",
    url: "https://linkedin.com/in/burakboduroglu",
    icon: faLinkedin,
  },
  {
    id: "medium",
    url: "https://medium.com/@burakboduroglu",
    icon: faMedium,
  },
  {
    id: "microsoft",
    url: "https://learn.microsoft.com/en-us/users/burakboduroglu",
    icon: faMicrosoft,
  },
  {
    id: "youtube",
    url: "https://www.youtube.com/@burakboduroglu",
    icon: faYoutube,
  },
  {
    id: "tiktok",
    url: "https://www.tiktok.com/@burak_boduroglu",
    icon: faTiktok,
  },
  {
    id: "vsco",
    url: "https://vsco.co/burakbodurogluu",
    icon: faVsco,
  },
  {
    id: "contact",
    url: "mailto:info@burakboduroglu.com.tr",
    icon: faEnvelope,
  },
] as const;
