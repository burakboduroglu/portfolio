import { useMemo, useState } from 'react'
import { normalizeForSearch, useApps, useLocale, useT } from '../../../lib/i18n'
import type { AppCard } from '../../../lib/types/app'
import { Menu } from 'lucide-react'
import AppsDetail from './apps-detail'
import AppsHome from './apps-home'
import StoreSidebar from './store-sidebar'

function getAppCategoryKeys(app: AppCard) {
  return app.categoryKeys ?? [app.categoryKey]
}

const ITEMS_PER_PAGE = 4

function AppsSite() {
  const t = useT()
  const { locale } = useLocale()
  const apps = useApps()

  const [activeCategory, setActiveCategory] = useState('all')
  // Keep only the stable id in state so a locale change can rehydrate the
  // selected app with the newly translated copy.
  const [selectedAppId, setSelectedAppId] = useState<AppCard['id'] | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const trimmedQuery = searchQuery.trim()

  /** Apps matching the search only — the category chips count against this set */
  const searchedApps = useMemo(() => {
    const query = normalizeForSearch(trimmedQuery, locale)

    if (!query) {
      return apps
    }

    return apps.filter((app) =>
      normalizeForSearch(
        [
          app.title,
          app.subtitle,
          app.description,
          app.category,
          app.stack,
          app.platform,
          app.heroTitle,
          app.heroText,
        ].join(' '),
        locale
      ).includes(query)
    )
  }, [apps, locale, trimmedQuery])

  const visibleApps = useMemo(
    () =>
      activeCategory === 'all'
        ? searchedApps
        : searchedApps.filter((app) => getAppCategoryKeys(app).includes(activeCategory)),
    [activeCategory, searchedApps]
  )

  // The featured app is pinned: it is resolved before pagination so it stays the
  // same on every page, and it is removed from the list so it never appears twice.
  const showFeatured = activeCategory === 'all' && !trimmedQuery
  const featuredApp = showFeatured ? (visibleApps.find((app) => app.featured) ?? null) : null
  const listApps = featuredApp
    ? visibleApps.filter((app) => app.id !== featuredApp.id)
    : visibleApps

  const totalPages = Math.max(1, Math.ceil(listApps.length / ITEMS_PER_PAGE))
  // Clamp instead of trusting state: totalPages can shrink under the current page
  const safePage = Math.min(currentPage, totalPages)
  const paginatedApps = listApps.slice((safePage - 1) * ITEMS_PER_PAGE, safePage * ITEMS_PER_PAGE)

  function handleCategoryChange(categoryKey: string) {
    setActiveCategory(categoryKey)
    setSelectedAppId(null)
    setCurrentPage(1)
    setIsSidebarOpen(false)
  }

  function handleSearchChange(value: string) {
    setSearchQuery(value)
    setSelectedAppId(null)
    setCurrentPage(1)
  }

  function handleSelectApp(app: AppCard) {
    setIsSidebarOpen(false)
    setSelectedAppId(app.id)
  }

  function handleClearFilters() {
    setActiveCategory('all')
    setSearchQuery('')
    setSelectedAppId(null)
    setCurrentPage(1)
  }

  const selectedApp = selectedAppId ? apps.find((app) => app.id === selectedAppId) ?? null : null

  return (
    <section
      id='apps'
      className={isSidebarOpen ? 'apps-site sidebar-open' : 'apps-site'}
      aria-label={t.apps.sectionAria}>
      <button
        className='store-menu-toggle'
        type='button'
        onClick={() => setIsSidebarOpen((value) => !value)}
        aria-label={isSidebarOpen ? t.apps.closeNav : t.apps.openNav}
        aria-expanded={isSidebarOpen}>
        <Menu size={22} />
      </button>

      {isSidebarOpen ? (
        <button
          className='store-backdrop'
          type='button'
          aria-label={t.apps.closeNav}
          onClick={() => setIsSidebarOpen(false)}
        />
      ) : null}

      <StoreSidebar
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />
      {selectedApp ? (
        <AppsDetail app={selectedApp} onBack={() => setSelectedAppId(null)} />
      ) : (
        <AppsHome
          featuredApp={featuredApp}
          paginatedApps={paginatedApps}
          searchedApps={searchedApps}
          totalApps={visibleApps.length}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          onClearFilters={handleClearFilters}
          searchQuery={trimmedQuery}
          onSelect={handleSelectApp}
          currentPage={safePage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </section>
  )
}

export default AppsSite
