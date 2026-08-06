import { Search, Star } from 'lucide-react'
import categories from '../../../lib/data/categories'
import profile from '../../../lib/data/profile'
import { useT } from '../../../lib/i18n'
import ExternalLink from './external-link'

function StoreSidebar({
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}: {
  activeCategory: string
  onCategoryChange: (key: string) => void
  searchQuery: string
  onSearchChange: (value: string) => void
}) {
  const t = useT()

  return (
    <aside className='store-sidebar' aria-label={t.apps.navAria}>
      <label className='store-search'>
        <Search size={15} />
        <input
          type='search'
          value={searchQuery}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder={t.apps.searchPlaceholder}
          aria-label={t.apps.searchAria}
        />
      </label>

      <button
        className={activeCategory === 'all' ? 'discover-button active' : 'discover-button'}
        type='button'
        onClick={() => onCategoryChange('all')}>
        <Star size={18} /> {t.apps.discover}
      </button>

      <div className='store-nav-group'>
        <p>{t.apps.categoriesHeading}</p>
        {categories.map((category) => {
          const Icon = category.icon
          const isActive = activeCategory === category.key

          return (
            <button
              className={isActive ? 'active' : ''}
              type='button'
              key={category.key}
              onClick={() => onCategoryChange(category.key)}>
              <Icon size={17} /> {t.categories[category.key]}
            </button>
          )
        })}
      </div>

      <div className='store-sidebar-link-group'>
        <ExternalLink href={profile.githubUrl}>
          <span className='github-dot'>●</span> GitHub
        </ExternalLink>
      </div>

      <div className='store-sidebar-footer'>
        <div>
          <img src={profile.avatarUrl} alt='' />
          <span>{profile.name}</span>
        </div>
      </div>
    </aside>
  )
}

export default StoreSidebar
