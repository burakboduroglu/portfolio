import { ArrowUpRight } from 'lucide-react'
import profile from '../lib/data/profile'
import { useT } from '../lib/i18n'
import ExternalLink from './app-site/external-link'
import ReachOutLeadingIcon from './reach-out-icons'

function DeveloperProfilesSection() {
  const t = useT()

  return (
    <section
      id='developer-profiles'
      className='developer-profiles'
      aria-label={t.developerProfiles.sectionAria}>
      <header className='developer-profiles-header'>
        <h2>{t.developerProfiles.title}</h2>
        {t.developerProfiles.subtitle ? (
          <p className='developer-profiles-subtitle'>{t.developerProfiles.subtitle}</p>
        ) : null}
      </header>

      <ul className='developer-profiles-grid'>
        {profile.developerProfiles.map((item) => {
          const platformName = t.profile.links[item.key] || item.key
          return (
            <li key={item.key}>
              <ExternalLink
                className='developer-profile-card'
                data-platform={item.key}
                href={item.href}
                aria-label={`${platformName}: ${item.handle || item.href}`}>
                <span className='developer-profile-icon' aria-hidden='true'>
                  <ReachOutLeadingIcon name={item.icon} size={18} />
                </span>
                <span className='developer-profile-info'>
                  <strong className='developer-profile-name'>{platformName}</strong>
                  {item.handle ? (
                    <span className='developer-profile-handle'>{item.handle}</span>
                  ) : null}
                </span>
                <span className='developer-profile-arrow' aria-hidden='true'>
                  <ArrowUpRight size={14} />
                </span>
              </ExternalLink>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default DeveloperProfilesSection
