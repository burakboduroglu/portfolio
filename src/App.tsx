import { ChevronRight } from 'lucide-react'
import profile from '../lib/data/profile'
import { useT } from '../lib/i18n'
import AppsSite from './components/app-site/apps-site'
import ExternalLink from './components/app-site/external-link'
import ArticlesSection from './components/articles-section'
import LanguageSwitcher from './components/language-switcher'
import ReachOutLeadingIcon from './components/reach-out-icons'

function App() {
  const t = useT()
  const [craftedBefore, craftedAfter] = t.footer.crafted(profile.name)

  return (
    <main className='site'>
      <header className='site-navbar' role='banner'>
        <div className='site-rail'>
          <div className='page-top'>
            <div className='page-label'>
              <img src={profile.avatarUrl} alt='' />
              <span>{profile.name}</span>
            </div>
            <div className='page-top-actions'>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </header>

      <div className='site-rail page'>
        <header className='hero'>
          <div className='hero-photo-row'>
            <img className='profile-photo' src={profile.avatarUrl} alt={t.hero.photoAlt} />
            <div className='hero-photo-line' aria-hidden='true' />
          </div>
          <h1>{profile.name}</h1>
          <div className='hero-grid'>
            <div className='hero-copy-main'>
              <p>{t.profile.intro}</p>
              {t.profile.aiIntro ? <p>{t.profile.aiIntro}</p> : null}
            </div>
            <div className='reach-out-column'>
              <aside className='reach-out' aria-label={t.hero.contactLinksAria}>
                <div className='reach-out-header'>
                  <h3 className='reach-out-title'>
                    <span className='reach-out-title-dot' aria-hidden='true' />
                    {t.hero.reachOut}
                  </h3>
                </div>
                <ul className='reach-out-list'>
                  {profile.links.map((link) => {
                    const label = t.profile.links[link.key]
                    return (
                      <li key={link.key}>
                        <ExternalLink
                          className='reach-out-link'
                          href={link.href}
                          title={label}
                          aria-label={label}>
                          <ReachOutLeadingIcon name={link.icon} />
                        </ExternalLink>
                      </li>
                    )
                  })}
                </ul>
              </aside>
            </div>
          </div>
        </header>

        <AppsSite />

        <section className='get-in-touch'>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.intro}</p>

          <div className='contact-topics'>
            {t.contact.topics.map((topic, index) => (
              <details className='contact-topic' key={topic.title} open={index === 0}>
                <summary>
                  <ChevronRight size={16} aria-hidden='true' />
                  <span>{topic.title}</span>
                </summary>
                <ul>
                  {topic.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </section>

        <ArticlesSection />

        <footer className='site-footer'>
          <p className='site-footer-crafted'>
            {craftedBefore} <span className='site-footer-heart'>❤️</span> {craftedAfter}
          </p>
        </footer>
      </div>
    </main>
  )
}

export default App
