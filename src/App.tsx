import { ArrowUpRight, BookOpen, ChevronRight, Hexagon, Mail, MapPin } from 'lucide-react'

import profile from '../lib/data/profile'
import contactTopics from '../lib/data/contact-topics'
import AppsSite from './components/app-site/apps-site'
import ExternalLink from './components/app-site/external-link'
import ReachOutLeadingIcon from './components/reach-out-icons'

function App() {
  return (
    <main>
      <header className='site-navbar' role='banner'>
        <div className='page-top'>
          <div className='page-label'>
            <img src={profile.avatarUrl} alt='' />
            <span>{profile.name}</span>
          </div>
          <a className='page-top-apps' href='#apps'>
            Apps
          </a>
        </div>
      </header>

      <div className='page'>
        <header className='hero'>
          <div className='hero-photo-row'>
            <img className='profile-photo' src={profile.avatarUrl} alt='Burak Boduroğlu' />
            <div className='hero-photo-line' aria-hidden='true' />
          </div>

          <h1>{profile.name}</h1>

          <div className='hero-grid'>
            <div className='hero-copy-main'>
              <p>{profile.intro}</p>
              <p>{profile.aiIntro}</p>
            </div>
            <p className='location-line location-line--hero'>
              <MapPin size={15} /> {profile.location}
            </p>

            <div className='reach-out-column'>
              <p className='reach-out-pre'>{profile.reachOutPre}</p>
              <aside className='reach-out' aria-label='Contact links'>
                <div className='reach-out-header'>
                  <p className='reach-out-eyebrow'>Connect</p>
                  <h3 className='reach-out-title'>
                    <span className='reach-out-title-dot' aria-hidden='true' />
                    Reach out
                  </h3>
                </div>
                <ul className='reach-out-list'>
                  {profile.links.map((link) => (
                    <li key={link.label}>
                      <ExternalLink className='reach-out-link' href={link.href}>
                        <span className='reach-out-link-lead'>
                          <span className='reach-out-link-kind-wrap' aria-hidden='true'>
                            <ReachOutLeadingIcon name={link.icon} />
                          </span>
                          <span className='reach-out-link-label'>{link.label}</span>
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

          <AppsSite />
        </header>

        <section className='get-in-touch'>
          <h2>Let’s talk</h2>
          <p>
            I’m interested in well-scoped products, practical AI-assisted engineering workflows,
            developer tools, and software that feels simple from the outside while staying solid
            underneath.
          </p>
          <p className='inline-link'>
            <ArrowUpRight size={16} />{' '}
            <ExternalLink href='mailto:info@burakboduroglu.com.tr'>Send email</ExternalLink>
          </p>

          <div className='contact-topics'>
            {contactTopics.map((topic, index) => (
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
            Crafted with <span className='site-footer-heart'>❤️</span> by {profile.name}
          </p>
        </footer>
      </div>
    </main>
  )
}

export default App
