import { ArrowUpRight, ChevronRight, MapPin } from 'lucide-react'
import profile from '../lib/data/profile'
import { useT } from '../lib/i18n'
import AppsSite from './components/app-site/apps-site'
import ExternalLink from './components/app-site/external-link'
import LanguageSwitcher from './components/language-switcher'
import ReachOutLeadingIcon from './components/reach-out-icons'

function App() {
  const t = useT()
  const [craftedBefore, craftedAfter] = t.footer.crafted(profile.name)

  return (
    <main>
      <header className='site-navbar' role='banner'>
        <div className='page-top'>
          <div className='page-label'>
            <img src={profile.avatarUrl} alt='' />
            <span>{profile.name}</span>
          </div>
          <div className='page-top-actions'>
            <a className='page-top-apps' href='#apps'>
              {t.nav.apps}
            </a>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <div className='page'>
        <header className='hero'>
          <div className='hero-photo-row'>
            <img className='profile-photo' src={profile.avatarUrl} alt={t.hero.photoAlt} />
            <div className='hero-photo-line' aria-hidden='true' />
          </div>
          <h1>{profile.name}</h1>
          <div className='hero-grid'>
            <div className='hero-copy-main'>
              <p>{t.profile.intro}</p>
              <p>{t.profile.aiIntro}</p>
            </div>
            <p className='location-line location-line--hero'>
              <MapPin size={15} /> {t.profile.location}
            </p>
            <div className='reach-out-column'>
              <p className='reach-out-pre'>{t.profile.reachOutPre}</p>
              <aside className='reach-out' aria-label={t.hero.contactLinksAria}>
                <div className='reach-out-header'>
                  <p className='reach-out-eyebrow'>{t.hero.connect}</p>
                  <h3 className='reach-out-title'>
                    <span className='reach-out-title-dot' aria-hidden='true' />
                    {t.hero.reachOut}
                  </h3>
                </div>
                <ul className='reach-out-list'>
                  {profile.links.map((link) => (
                    <li key={link.key}>
                      <ExternalLink className='reach-out-link' href={link.href}>
                        <span className='reach-out-link-lead'>
                          <span className='reach-out-link-kind-wrap' aria-hidden='true'>
                            <ReachOutLeadingIcon name={link.icon} />
                          </span>
                          <span className='reach-out-link-label'>
                            {t.profile.links[link.key]}
                          </span>
                        </span>
                        <ArrowUpRight
                          size={17}
                          className='reach-out-link-icon'
                          aria-hidden='true'
                        />
                      </ExternalLink>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </header>

        <AppsSite />

        <section className='get-in-touch'>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.intro}</p>
          <p className='inline-link'>
            <ArrowUpRight size={16} />{' '}
            <ExternalLink href={`mailto:${profile.email}`}>{t.contact.sendEmail}</ExternalLink>
          </p>

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
