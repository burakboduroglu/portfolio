export type AppId =
  | 'macshelf'
  | 'portkill'
  | 'penote'
  | 'skadi'
  | 'bdash'
  | 'alice'
  | 'betus-design'
  | 'dizey'
  | 'portfolio'

/** Language-independent structure — lives in src/lib/data/apps.ts */
export type AppMeta = {
  id: AppId
  categoryKey: string
  categoryKeys?: string[]
  /** Brand name, never translated ('.portkill', 'MacShelf') */
  title: string
  link: string
  repo?: string
  icon: string
  logoUrl?: string
  accent: string
  featured?: boolean
  /** Copy-paste install commands, shown on the detail page. Never translated. */
  install?: InstallCommand[]
}

export type InstallCommand = {
  /** Package manager name as it is written — 'Homebrew', 'bun' */
  manager: string
  command: string
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

/** Star and fork counts, refreshed by `bun run sync`, never hand-written */
export type RepoStats = {
  stars: number
  forks: number
}

/** Merged at runtime by useApps() — the shape every component consumes */
export type AppCard = AppMeta & AppCopy & Partial<RepoStats>
