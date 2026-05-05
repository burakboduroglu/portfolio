import { Search } from 'lucide-react'
import AppIcon from './app-icon'
import AppTitle from './app-title'
import AppListItem from './apps-list-item'
import categories from '../../../lib/data/categories'

function AppsHome({
  visibleApps,
  activeCategory,
  searchQuery,
  onSelect,
}: {
  visibleApps: any[]
  activeCategory: string
  searchQuery: string
  onSelect: (app: any) => void
}) {
  const featuredApp = visibleApps[0]
  const activeLabel =
    activeCategory === 'all'
      ? 'All'
      : (categories.find(
          (category: { key: string; label: string }) => category.key === activeCategory
        )?.label ?? 'All')
  const title = searchQuery
    ? `Search results for “${searchQuery}”`
    : activeLabel === 'All'
      ? 'All Apps'
      : activeLabel

  return (
    <div className='store-content'>
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
          <span>{visibleApps.length} apps</span>
        </div>
        <div className='store-list-grid'>
          {visibleApps.map((app) => (
            <AppListItem app={app} key={app.id} onSelect={onSelect} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default AppsHome
