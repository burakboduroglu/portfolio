import { Search, Star } from 'lucide-react'
import categories from '../../../lib/data/categories'
import profile from '../../../lib/data/profile'
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
  return (
    <aside className='store-sidebar' aria-label='Apps navigation'>
      <label className='store-search'>
        <Search size={15} />
        <input
          type='search'
          value={searchQuery}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder='Search'
          aria-label='Search apps'
        />
      </label>

      <button
        className={activeCategory === 'all' ? 'discover-button active' : 'discover-button'}
        type='button'
        onClick={() => onCategoryChange('all')}>
        <Star size={18} /> Discover
      </button>

      <div className='store-nav-group'>
        <p>Categories</p>
        {categories.map((category) => {
          const Icon = category.icon
          const isActive = activeCategory === category.key

          return (
            <button
              className={isActive ? 'active' : ''}
              type='button'
              key={category.key}
              onClick={() => onCategoryChange(category.key)}>
              <Icon size={17} /> {category.label}
            </button>
          )
        })}
      </div>

      <div className='store-sidebar-link-group'>
        <ExternalLink href='https://github.com/burakboduroglu'>
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
