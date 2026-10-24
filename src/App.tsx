import { useEffect, useMemo, useRef } from 'react'
import { applyDocumentMeta, LOCALES, syncLocaleParam, useApps, useLocale, useT } from './lib/i18n'
import profile from './lib/data/profile'
import { useRoute } from './lib/router'
import AppDetail from './components/app-site/app-detail'
import { IconArrowLeft } from './components/icons'
import HomePage from './components/home-page'
import InternalLink from './components/internal-link'
import LanguageSwitcher from './components/language-switcher'
import MobileControls from './components/mobile-controls'
import ThemeSwitch, { toggleTheme } from './components/theme-switch'

function NotFoundPage() {
  const t = useT()

  return (
    <div className='site-rail page project-missing'>
      <h1>{t.apps.missingTitle}</h1>
      <p>{t.apps.missingBody}</p>
      <InternalLink className='project-back' href='/'>
        <IconArrowLeft />
        <span>{t.apps.backToProjects}</span>
      </InternalLink>
    </div>
  )
}

function App() {
  const t = useT()
  const { locale, setLocale } = useLocale()
  const route = useRoute()
  const apps = useApps()

  const activeApp = useMemo(
    () => (route.name === 'project' ? (apps.find((app) => app.id === route.id) ?? null) : null),
    [apps, route]
  )

  const routeKey = route.name === 'project' ? route.id : route.name
  const previousRouteKey = useRef(routeKey)

  // A fresh page starts at the top; a deep link into #apps must not be undone
  useEffect(() => {
    if (previousRouteKey.current !== routeKey) {
      previousRouteKey.current = routeKey
      window.scrollTo(0, 0)
    }
  }, [routeKey])

  useEffect(() => {
    syncLocaleParam(locale)
    const canonical = `${window.location.origin}${window.location.pathname}`

    if (route.name === 'notFound') {
      applyDocumentMeta({
        title: `${t.apps.missingTitle} — ${profile.name}`,
        description: t.apps.missingBody,
        canonical,
        noindex: true,
      })
      return
    }

    if (activeApp) {
      applyDocumentMeta({
        title: `${activeApp.title} — ${activeApp.subtitle}`,
        description: activeApp.description,
        canonical,
      })
      return
    }

    applyDocumentMeta({
      title: t.meta.title,
      description: t.meta.description,
      canonical,
    })
  }, [activeApp, locale, routeKey, t])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger shortcuts if user is typing in form/search inputs
      const target = e.target as HTMLElement | null
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)
      ) {
        return
      }

      if (e.metaKey || e.ctrlKey || e.altKey) {
        return
      }

      if (e.key === 't' || e.key === 'T') {
        e.preventDefault()
        toggleTheme()
      } else if (e.key === 'l' || e.key === 'L') {
        e.preventDefault()
        const currentIndex = LOCALES.indexOf(locale)
        const nextLocale = LOCALES[(currentIndex + 1) % LOCALES.length]
        setLocale(nextLocale)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [locale, setLocale])

  return (
    <main className='site'>
      {activeApp ? (
        <AppDetail app={activeApp} />
      ) : route.name === 'home' ? (
        <HomePage />
      ) : (
        <>
          <header className='site-navbar' role='banner'>
            <div className='site-rail'>
              <div className='page-top'>
                <span />
                <div className='page-top-actions'>
                  <ThemeSwitch />
                  <LanguageSwitcher />
                </div>
              </div>
            </div>
          </header>
          <NotFoundPage />
        </>
      )}
      <MobileControls />
    </main>
  )
}

export default App
