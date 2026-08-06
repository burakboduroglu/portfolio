import type { AppCopy, AppId } from '../types/app'
import type { CategoryKey } from '../types/category'
import type { ProfileLinkKey } from '../types/profile'

export type Locale = 'tr' | 'en' | 'de'

export const LOCALES: Locale[] = ['tr', 'en', 'de']

export function isLocale(value: unknown): value is Locale {
  return value === 'tr' || value === 'en' || value === 'de'
}

/**
 * The single contract every dictionary satisfies. Because `appCopy` and
 * `categories` are keyed by union types, a missing translation is a compile
 * error — and `npm run build` runs `tsc --noEmit` first, so it blocks deploys.
 */
export type Messages = {
  /** Endonym shown in the language switcher tooltip */
  localeLabel: string
  meta: {
    title: string
    description: string
  }
  nav: {
    apps: string
    languageAria: string
  }
  hero: {
    photoAlt: string
    contactLinksAria: string
    connect: string
    reachOut: string
  }
  profile: {
    location: string
    intro: string
    aiIntro: string
    reachOutPre: string
    links: Record<ProfileLinkKey, string>
  }
  categories: Record<CategoryKey, string>
  apps: {
    sectionAria: string
    navAria: string
    openNav: string
    closeNav: string
    searchPlaceholder: string
    searchAria: string
    discover: string
    categoriesHeading: string
    all: string
    allApps: string
    featured: string
    filterAria: string
    searchResults: (query: string) => string
    appCount: (count: number) => string
    resultCount: (count: number) => string
    clearFilter: string
    emptyTitle: string
    emptyBody: string
    prevPage: string
    nextPage: string
    pageOf: (current: number, total: number) => string
    back: string
    viewOnGitHub: string
    preview: string
    description: string
    stats: Record<'stars' | 'forks' | 'price' | 'platform' | 'language', string>
  }
  contact: {
    title: string
    intro: string
    sendEmail: string
    topics: { title: string; bullets: string[] }[]
  }
  footer: {
    /** [before ❤️, after ❤️] — DE and TR put the heart in a different position */
    crafted: (name: string) => [string, string]
  }
  appCopy: Record<AppId, AppCopy>
}
