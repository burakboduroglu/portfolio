import { useEffect, useState } from 'react'
import appMeta from './data/apps'
import type { AppId } from './types/app'

/**
 * A ~60 line History API router. The site has one dynamic route and four
 * runtime dependencies — react-router would double the dependency list to
 * resolve `/projects/:id`.
 */

const PROJECT_PREFIX = '/projects/'

/** pushState does not fire popstate, so navigations announce themselves */
const NAVIGATE_EVENT = 'portfolio:navigate'

export type Route =
  | { name: 'home' }
  | { name: 'project'; id: AppId }
  | { name: 'notFound'; path: string }

const appIds = new Set<string>(appMeta.map((app) => app.id))

function isAppId(value: string): value is AppId {
  return appIds.has(value)
}

export function projectPath(id: AppId): string {
  return `${PROJECT_PREFIX}${id}`
}

export function parseRoute(pathname: string): Route {
  const path = pathname.replace(/\/+$/, '') || '/'

  if (path === '/' || path === '/projects') {
    return { name: 'home' }
  }

  if (path.startsWith(PROJECT_PREFIX)) {
    const raw = decodeURIComponent(path.slice(PROJECT_PREFIX.length))
    // penote was previously published and linked as dev-notes
    const id = raw === 'dev-notes' ? 'penote' : raw
    if (isAppId(id)) {
      return { name: 'project', id }
    }
  }

  return { name: 'notFound', path }
}

export function navigate(path: string) {
  const url = new URL(path, window.location.origin)

  // The active language lives in ?lang= — carry it across navigations so a
  // shared link and an in-site click land on the same page in the same language
  const lang = new URLSearchParams(window.location.search).get('lang')
  if (lang && !url.searchParams.has('lang')) {
    url.searchParams.set('lang', lang)
  }

  if (url.pathname === window.location.pathname) {
    return
  }

  window.history.pushState(null, '', url)
  window.dispatchEvent(new Event(NAVIGATE_EVENT))
}

function rewriteLegacyPath() {
  const path = window.location.pathname.replace(/\/+$/, '')
  if (path === `${PROJECT_PREFIX}dev-notes`) {
    const url = new URL(window.location.href)
    url.pathname = projectPath('penote')
    window.history.replaceState(null, '', url)
  }
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() => {
    rewriteLegacyPath()
    return parseRoute(window.location.pathname)
  })

  useEffect(() => {
    const sync = () => {
      rewriteLegacyPath()
      setRoute(parseRoute(window.location.pathname))
    }
    window.addEventListener('popstate', sync)
    window.addEventListener(NAVIGATE_EVENT, sync)

    return () => {
      window.removeEventListener('popstate', sync)
      window.removeEventListener(NAVIGATE_EVENT, sync)
    }
  }, [])

  return route
}
