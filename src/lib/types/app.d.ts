export type AppId =
  | 'macshelf'
  | 'portkill'
  | 'dev-notes'
  | 'bdash'
  | 'alice'
  | 'betus-design'
  | 'dizey'

/** Language-independent structure — lives in src/lib/data/apps.ts */
export type AppMeta = {
  id: AppId
  categoryKey: string
  categoryKeys?: string[]
  /** Brand name, never translated ('.portkill', 'MacShelf') */
  title: string
  link: string
  repo?: string
  stars: string
  forks: string
  icon: string
  logoUrl?: string
  accent: string
  featured?: boolean
}

/** Translated prose — lives in src/lib/i18n/{en,tr,de}.ts, keyed by AppId */
export type AppCopy = {
  category: string
  subtitle: string
  description: string
  stack: string
  platform: string
  price: string
  action: string
  heroTitle: string
  heroText: string
}

/** Merged at runtime by useApps() — the shape every component consumes */
export type AppCard = AppMeta & AppCopy
