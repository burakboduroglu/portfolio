import { useCallback, useEffect, useRef, useState } from 'react'
import { Check, ChevronRight } from 'lucide-react'
import profile from '../lib/data/profile'
import { useT } from '../lib/i18n'
import AppsSite from './app-site/apps-site'
import ExternalLink from './app-site/external-link'
import ArticlesSection from './articles-section'
import DeveloperProfilesSection from './developer-profiles-section'
import LanguageSwitcher from './language-switcher'
import ReachOutLeadingIcon from './reach-out-icons'
import ThemeSwitch from './theme-switch'

function HomePage() {
  const t = useT()
  const [craftedBefore, craftedAfter] = t.footer.crafted(profile.name)
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const showToast = useCallback((msg: string) => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current)
    }
    setToastMessage(msg)
    toastTimeoutRef.current = setTimeout(() => {
      setToastMessage(null)
    }, 2400)
  }, [])

  const handleLinkClick = (key: string) => {
    if (key === 'email') {
      try {
        navigator.clipboard?.writeText(profile.email)
        showToast(t.toast.emailCopied)
      } catch {
        /* fallback if clipboard API is restricted */
      }
    }
  }

  return (
    <>
      <header className='site-navbar' role='banner'>
        <div className='site-rail'>
          <div className='page-top'>
            <div className='page-label'>
              <img src={profile.avatarUrl} alt='' width='20' height='20' decoding='async' />
              <span>{profile.name}</span>
            </div>
            <div className='page-top-actions'>
              <ThemeSwitch />
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </header>

      <div className='site-rail page'>
        <header className='hero'>
          <div className='hero-photo-row'>
            <img
              className='profile-photo'
              src={profile.avatarUrl}
              alt={t.hero.photoAlt}
              width='108'
              height='108'
              decoding='async'
            />
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
                  <h2 className='reach-out-title'>
                    <span className='reach-out-title-dot' aria-hidden='true' />
                    {t.hero.reachOut}
                  </h2>
                </div>
                <ul className='reach-out-list'>
                  {profile.primaryLinks.map((link) => {
                    const label = t.profile.links[link.key]
                    return (
                      <li key={link.key}>
                        <ExternalLink
                          className='reach-out-link'
                          href={link.href}
                          onClick={() => handleLinkClick(link.key)}
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

        <DeveloperProfilesSection />

        <footer className='site-footer'>
          <div className='site-footer-shortcuts' aria-hidden='true'>
            <span className='shortcut-badge'>
              <kbd>T</kbd> {t.footer.shortcutTheme}
            </span>
            <span className='shortcut-dot'>•</span>
            <span className='shortcut-badge'>
              <kbd>L</kbd> {t.footer.shortcutLang}
            </span>
          </div>
          <p className='site-footer-crafted'>
            {craftedBefore} <span className='site-footer-heart'>❤️</span> {craftedAfter}
          </p>
        </footer>
      </div>

      <div
        className={`site-toast ${toastMessage ? 'visible' : ''}`}
        role='status'
        aria-live='polite'>
        <Check size={14} aria-hidden='true' />
        <span>{toastMessage}</span>
      </div>
    </>
  )
}

export default HomePage
