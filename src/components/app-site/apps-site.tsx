import { useMemo, useState } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useApps, useT } from '../../../lib/i18n'
import AppIcon from './app-icon'
import AppTitle from './app-title'
import ExternalLink from './external-link'

const ITEMS_PER_PAGE = 4

function AppsSite() {
  const t = useT()
  const apps = useApps()
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.max(1, Math.ceil(apps.length / ITEMS_PER_PAGE))
  const safePage = Math.min(currentPage, totalPages)
  const pageApps = useMemo(
    () => apps.slice((safePage - 1) * ITEMS_PER_PAGE, safePage * ITEMS_PER_PAGE),
    [apps, safePage]
  )

  return (
    <section id='apps' className='projects' aria-label={t.apps.sectionAria}>
      <header className='projects-header'>
        <h2>{t.apps.title}</h2>
      </header>

      <ul className='projects-grid'>
        {pageApps.map((app) => (
          <li key={app.id}>
            <ExternalLink className='project-card' href={app.link}>
              <span className='project-card-media'>
                <AppIcon app={app} />
              </span>
              <span className='project-card-body'>
                <span className='project-card-meta'>
                  <span className='project-card-category'>{app.category}</span>
                  <span className='project-card-platform'>{app.platform}</span>
                </span>
                <strong className='project-card-title'>
                  <AppTitle app={app} />
                </strong>
                <span className='project-card-subtitle'>{app.subtitle}</span>
                <span className='project-card-cta'>
                  {app.action}
                  <ArrowUpRight size={14} aria-hidden='true' />
                </span>
              </span>
            </ExternalLink>
          </li>
        ))}
      </ul>

      {totalPages > 1 ? (
        <div className='projects-pagination'>
          <button
            type='button'
            className='projects-pagination-button'
            disabled={safePage === 1}
            onClick={() => setCurrentPage(safePage - 1)}
            aria-label={t.apps.prevPage}>
            <ChevronLeft size={18} />
          </button>
          <span className='projects-pagination-info'>{t.apps.pageOf(safePage, totalPages)}</span>
          <button
            type='button'
            className='projects-pagination-button'
            disabled={safePage === totalPages}
            onClick={() => setCurrentPage(safePage + 1)}
            aria-label={t.apps.nextPage}>
            <ChevronRight size={18} />
          </button>
        </div>
      ) : null}
    </section>
  )
}

export default AppsSite
