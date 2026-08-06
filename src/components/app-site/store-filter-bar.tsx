import { X } from 'lucide-react'
import categories from '../../../lib/data/categories'
import { useT } from '../../../lib/i18n'
import type { AppCard } from '../../../lib/types/app'

function getAppCategoryKeys(app: AppCard) {
  return app.categoryKeys ?? [app.categoryKey]
}

/**
 * Horizontal category chips above the store content. Counts are derived from the
 * search-filtered set, so they always reflect what a chip would actually show.
 * Stays in sync with the sidebar — both drive the same `activeCategory` state.
 */
function StoreFilterBar({
  searchedApps,
  activeCategory,
  onCategoryChange,
  onClearFilters,
  searchQuery,
  resultCount,
}: {
  searchedApps: AppCard[]
  activeCategory: string
  onCategoryChange: (key: string) => void
  onClearFilters: () => void
  searchQuery: string
  resultCount: number
}) {
  const t = useT()
  const hasActiveFilter = activeCategory !== 'all' || Boolean(searchQuery)

  const chips = [
    { key: 'all', label: t.apps.all, count: searchedApps.length },
    ...categories.map((category) => ({
      key: category.key,
      label: t.categories[category.key],
      count: searchedApps.filter((app) => getAppCategoryKeys(app).includes(category.key)).length,
    })),
  ]

  return (
    <div className='store-filter-bar'>
      <div className='store-chip-row' role='group' aria-label={t.apps.filterAria}>
        {chips.map((chip) => (
          <button
            key={chip.key}
            type='button'
            className={chip.count === 0 ? 'store-chip empty' : 'store-chip'}
            aria-pressed={chip.key === activeCategory}
            onClick={() => onCategoryChange(chip.key)}>
            {chip.label}
            <span className='store-chip-count'>{chip.count}</span>
          </button>
        ))}
      </div>

      <div className='store-filter-meta'>
        <span>{t.apps.resultCount(resultCount)}</span>
        {hasActiveFilter ? (
          <button type='button' className='store-clear-filter' onClick={onClearFilters}>
            {t.apps.clearFilter}
            <X size={13} aria-hidden='true' />
          </button>
        ) : null}
      </div>
    </div>
  )
}

export default StoreFilterBar
