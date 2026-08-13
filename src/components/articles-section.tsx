import { ArrowUpRight } from 'lucide-react'
import articles from '../../lib/data/articles'
import { useLocale, useT } from '../../lib/i18n'
import ExternalLink from './app-site/external-link'

function formatArticleDate(date: string, locale: string) {
  const parsed = new Date(`${date}T12:00:00`)
  if (Number.isNaN(parsed.getTime())) {
    return date
  }

  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(parsed)
}

function ArticlesSection() {
  const t = useT()
  const { locale } = useLocale()

  return (
    <section id='articles' className='articles' aria-label={t.articles.sectionAria}>
      <header className='articles-header'>
        <h2>{t.articles.title}</h2>
      </header>

      <ul className='articles-grid'>
        {articles.map((article) => (
          <li key={article.id}>
            <ExternalLink className='article-card' href={article.href}>
              {article.imageUrl ? (
                <span className='article-card-media'>
                  <img src={article.imageUrl} alt='' loading='lazy' />
                </span>
              ) : null}
              <span className='article-card-body'>
                <span className='article-card-meta'>
                  <span className='article-card-source'>{article.source}</span>
                  <time dateTime={article.date}>{formatArticleDate(article.date, locale)}</time>
                </span>
                <strong className='article-card-title'>{article.title}</strong>
                <span className='article-card-subtitle'>{article.subtitle}</span>
                <span className='article-card-cta'>
                  {t.articles.readOnSubstack}
                  <ArrowUpRight size={14} aria-hidden='true' />
                </span>
              </span>
            </ExternalLink>
          </li>
        ))}
      </ul>

    </section>
  )
}

export default ArticlesSection
