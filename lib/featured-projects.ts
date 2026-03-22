/**
 * Öne çıkan projeler (npm, GitHub, canlı web).
 * Metinler messages içindeki `projects` sözlüğünde `id` ile eşlenir.
 */
export const FEATURED_PROJECTS = [
  {
    id: "portkill",
    href: "https://www.npmjs.com/package/@burakboduroglu/portkill",
  },
  {
    id: "eruSocial",
    href: "https://github.com/burakboduroglu/eru-social-web-app",
  },
  {
    id: "acapair",
    href: "https://github.com/orgs/Acapair/repositories",
  },
  {
    id: "alicePalazzo",
    href: "https://alicepalazzo.com/",
  },
] as const;

export type FeaturedProjectId = (typeof FEATURED_PROJECTS)[number]["id"];
