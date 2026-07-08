import { useMemo, useState } from 'react'
import apps from '../../../lib/data/apps'
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
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedApp, setSelectedApp] = useState<AppCard | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const visibleApps = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()
    const categoryApps =
      activeCategory === 'all'
        ? apps
        : apps.filter((app) => getAppCategoryKeys(app).includes(activeCategory))

    if (!query) {
      return categoryApps
    }

    return categoryApps.filter((app) =>
      [app.title, app.subtitle, app.description, app.category, app.stack, app.platform]
        .join(' ')
        .toLowerCase()
        .includes(query)
    )
  }, [activeCategory, searchQuery])

  const totalPages = Math.max(1, Math.ceil(visibleApps.length / ITEMS_PER_PAGE))
  const paginatedApps = visibleApps.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  function handleCategoryChange(categoryKey: string) {
    setActiveCategory(categoryKey)
    setSelectedApp(null)
    setCurrentPage(1)
  }

  function handleSelectApp(app: AppCard) {
    setIsSidebarOpen(false)
    setSelectedApp(app)
  }

  return (
    <section
      id='apps'
      className={isSidebarOpen ? 'apps-site sidebar-open' : 'apps-site'}
      aria-label='Embedded apps showcase'>
      <button
        className='store-menu-toggle'
        type='button'
        onClick={() => setIsSidebarOpen((value) => !value)}
        aria-label={isSidebarOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={isSidebarOpen}>
        <Menu size={22} />
      </button>

      {isSidebarOpen ? (
        <button
          className='store-backdrop'
          type='button'
          aria-label='Close navigation'
          onClick={() => setIsSidebarOpen(false)}
        />
      ) : null}

      <StoreSidebar
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        searchQuery={searchQuery}
        onSearchChange={(value: string) => {
          setSearchQuery(value)
          setSelectedApp(null)
          setCurrentPage(1)
        }}
      />
      {selectedApp ? (
        <AppsDetail app={selectedApp} onBack={() => setSelectedApp(null)} />
      ) : (
        <AppsHome
          paginatedApps={paginatedApps}
          totalApps={visibleApps.length}
          activeCategory={activeCategory}
          searchQuery={searchQuery.trim()}
          onSelect={handleSelectApp}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </section>
  )
}

export default AppsSite
