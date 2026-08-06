import { Search, ChevronLeft, ChevronRight } from 'lucide-react'
import AppIcon from './app-icon'
import AppTitle from './app-title'
import AppListItem from './apps-list-item'
import StoreFilterBar from './store-filter-bar'
import { useT } from '../../../lib/i18n'
import type { CategoryKey } from '../../../lib/types/category'
import type { AppCard } from '../../../lib/types/app'

function AppsHome({
  featuredApp,
  paginatedApps,
  searchedApps,
  totalApps,
  activeCategory,
  onCategoryChange,
  onClearFilters,
  searchQuery,
  onSelect,
  currentPage,
  totalPages,
  onPageChange,
}: {
  featuredApp: AppCard | null
  paginatedApps: AppCard[]
  searchedApps: AppCard[]
  totalApps: number
  activeCategory: string
  onCategoryChange: (key: string) => void
  onClearFilters: () => void
  searchQuery: string
  onSelect: (app: AppCard) => void
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}) {
  const t = useT()

  // Compare the category *key*, never the translated label — the label changes
  // per locale and a string comparison here would silently break.
  const title = searchQuery
    ? t.apps.searchResults(searchQuery)
    : activeCategory === 'all'
      ? t.apps.allApps
      : (t.categories[activeCategory as CategoryKey] ?? t.apps.allApps)

  const isEmpty = totalApps === 0

  return (
    <div className='store-content'>
      <StoreFilterBar
        searchedApps={searchedApps}
        activeCategory={activeCategory}
        onCategoryChange={onCategoryChange}
        onClearFilters={onClearFilters}
        searchQuery={searchQuery}
        resultCount={totalApps}
      />

      <div key={currentPage} className='store-page-fade'>
        {isEmpty ? (
          <section className='store-empty'>
            <Search size={24} />
            <h2>{t.apps.emptyTitle}</h2>
            <p>{t.apps.emptyBody}</p>
          </section>
        ) : featuredApp ? (
          <section className='store-hero-card'>
            <span>
              {t.apps.featured} · {featuredApp.category}
            </span>
            <h2>{featuredApp.heroTitle}</h2>
            <p>{featuredApp.heroText}</p>
            <button type='button' onClick={() => onSelect(featuredApp)}>
              <AppIcon app={featuredApp} />
              <span>
                <strong>
                  <AppTitle app={featuredApp} />
                </strong>
                <small>{featuredApp.subtitle}</small>
              </span>
              <em>{featuredApp.action}</em>
            </button>
          </section>
        ) : null}

        {isEmpty ? null : (
          <section className='store-list-section'>
            <div className='store-section-title'>
              <h3>{title}</h3>
              <span>{t.apps.appCount(totalApps)}</span>
            </div>
            <div className='store-list-grid'>
              {paginatedApps.map((app, index) => (
                <AppListItem app={app} key={app.id} index={index} onSelect={onSelect} />
              ))}
            </div>
          </section>
        )}

        {totalPages > 1 && (
          <div className='store-pagination'>
            <button
              type='button'
              className='store-pagination-button'
              disabled={currentPage === 1}
              onClick={() => onPageChange(currentPage - 1)}
              aria-label={t.apps.prevPage}>
              <ChevronLeft size={18} />
            </button>
            <span className='store-pagination-info'>{t.apps.pageOf(currentPage, totalPages)}</span>
            <button
              type='button'
              className='store-pagination-button'
              disabled={currentPage === totalPages}
              onClick={() => onPageChange(currentPage + 1)}
              aria-label={t.apps.nextPage}>
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default AppsHome
