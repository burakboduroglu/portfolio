import { createContext, createElement, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import appMeta from '../data/apps'
import type { AppCard } from '../types/app'
import de from './de'
import en from './en'
import tr from './tr'
import { isLocale } from './types'
import type { Locale, Messages } from './types'

export { LOCALES, isLocale } from './types'
export type { Locale, Messages } from './types'

const STORAGE_KEY = 'portfolio.locale'

const dictionaries: Record<Locale, Messages> = { tr, en, de }

/** Endonyms, for the language switcher tooltips — always in their own language */
export const localeLabels: Record<Locale, string> = {
  tr: tr.localeLabel,
  en: en.localeLabel,
  de: de.localeLabel,
}

/** Priority: ?lang= > localStorage > navigator.language > 'en' */
function detectLocale(): Locale {
  if (typeof window === 'undefined') {
    return 'en'
  }

  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (isLocale(fromUrl)) {
    return fromUrl
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (isLocale(stored)) {
      return stored
    }
  } catch {
    // localStorage can throw in Safari private mode — fall through to detection
  }

  const preferred = (window.navigator.languages ?? [window.navigator.language])
    .filter(Boolean)
    .map((value) => value.toLowerCase())

  for (const value of preferred) {
    if (value.startsWith('tr')) return 'tr'
    if (value.startsWith('de')) return 'de'
    if (value.startsWith('en')) return 'en'
  }

  return 'en'
}

function persistLocale(locale: Locale) {
  try {
    window.localStorage.setItem(STORAGE_KEY, locale)
  } catch {
    // Ignore — the ?lang= param still carries the choice across reloads
  }
}

function setMetaContent(selector: string, content: string) {
  const element = document.querySelector(selector)
  if (element) {
    element.setAttribute('content', content)
  }
}

/** Keeps document metadata and the ?lang= param in sync */
function syncDocument(locale: Locale, messages: Messages) {
  document.documentElement.lang = locale
  document.title = messages.meta.title
  setMetaContent('meta[name="description"]', messages.meta.description)
  setMetaContent('meta[property="og:title"]', messages.meta.title)
  setMetaContent('meta[property="og:description"]', messages.meta.description)
  setMetaContent('meta[name="twitter:title"]', messages.meta.title)
  setMetaContent('meta[name="twitter:description"]', messages.meta.description)

  const url = new URL(window.location.href)
  if (url.searchParams.get('lang') !== locale) {
    url.searchParams.set('lang', locale)
    window.history.replaceState(null, '', url)
  }
}

type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Messages
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ children }: { children: ReactNode }) {
  // Lazy initializer: the correct language is resolved before the first paint
  const [locale, setLocale] = useState<Locale>(detectLocale)
  const t = dictionaries[locale]

  useEffect(() => {
    persistLocale(locale)
    syncDocument(locale, t)
  }, [locale, t])

  const value = useMemo<LocaleContextValue>(() => ({ locale, setLocale, t }), [locale, t])

  return createElement(LocaleContext.Provider, { value }, children)
}

function useLocaleContext(): LocaleContextValue {
  const value = useContext(LocaleContext)

  if (!value) {
    throw new Error('useLocale must be used inside a LocaleProvider')
  }

  return value
}

export function useT(): Messages {
  return useLocaleContext().t
}

export function useLocale() {
  const { locale, setLocale } = useLocaleContext()
  return { locale, setLocale }
}

/** Merges the language-independent app metadata with the active translation */
export function useApps(): AppCard[] {
  const t = useT()

  return useMemo(
    () => appMeta.map((app) => ({ ...app, ...t.appCopy[app.id] })),
    [t]
  )
}

