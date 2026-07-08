import { Search, ChevronLeft, ChevronRight } from 'lucide-react'
import AppIcon from './app-icon'
import AppTitle from './app-title'
import AppListItem from './apps-list-item'
import categories from '../../../lib/data/categories'
import type { AppCard } from '../../../lib/types/app'

function AppsHome({
  paginatedApps,
  totalApps,
  activeCategory,
  searchQuery,
  onSelect,
  currentPage,
  totalPages,
  onPageChange,
}: {
  paginatedApps: AppCard[]
  totalApps: number
  activeCategory: string
  searchQuery: string
  onSelect: (app: AppCard) => void
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}) {
  const featuredApp = paginatedApps[0]
  const activeLabel =
    activeCategory === 'all'
      ? 'All'
      : (categories.find(
          (category: { key: string; label: string }) => category.key === activeCategory
        )?.label ?? 'All')
  const title = searchQuery
    ? `Search results for "${searchQuery}"`
    : activeLabel === 'All'
      ? 'All Apps'
      : activeLabel

  return (
    <div className='store-content'>
      <div key={currentPage} className='store-page-fade'>
        {featuredApp ? (
          <section className='store-hero-card'>
            <span>Featured · {featuredApp.category}</span>
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
        ) : (
          <section className='store-empty'>
            <Search size={24} />
            <h2>No apps found</h2>
            <p>Try searching by app name, category, platform, or language.</p>
          </section>
        )}

        <section className='store-list-section'>
          <div className='store-section-title'>
            <h3>{title}</h3>
            <span>{totalApps} apps</span>
          </div>
          <div className='store-list-grid'>
            {paginatedApps.map((app) => (
              <AppListItem app={app} key={app.id} onSelect={onSelect} />
            ))}
          </div>
        </section>

        {totalPages > 1 && (
          <div className='store-pagination'>
            <button
              type='button'
              className='store-pagination-button'
              disabled={currentPage === 1}
              onClick={() => onPageChange(currentPage - 1)}
              aria-label='Previous page'>
              <ChevronLeft size={18} />
            </button>
            <span className='store-pagination-info'>
              Page {currentPage} of {totalPages}
            </span>
            <button
              type='button'
              className='store-pagination-button'
              disabled={currentPage === totalPages}
              onClick={() => onPageChange(currentPage + 1)}
              aria-label='Next page'>
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default AppsHome
