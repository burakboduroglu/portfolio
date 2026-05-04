import { useMemo, useState } from 'react'
import {
  ArrowUpRight,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Code2,
  Globe,
  Grid2X2,
  Hexagon,
  Mail,
  MapPin,
  Monitor,
  Menu,
  Search,
  Star,
  Terminal,
} from 'lucide-react'

function SvgGitHub(props) {
  return (
    <svg viewBox='0 0 24 24' width={16} height={16} fill='currentColor' aria-hidden {...props}>
      <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
    </svg>
  )
}

function SvgLinkedIn(props) {
  return (
    <svg viewBox='0 0 24 24' width={16} height={16} fill='currentColor' aria-hidden {...props}>
      <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
    </svg>
  )
}

function ReachOutLeadingIcon({ name }) {
  const stroke = { size: 16, strokeWidth: 2 }
  switch (name) {
    case 'mail':
      return <Mail {...stroke} />
    case 'github':
      return <SvgGitHub />
    case 'linkedin':
      return <SvgLinkedIn />
    case 'devto':
      return <BookOpen {...stroke} />
    case 'npm':
      return <Hexagon {...stroke} />
    default:
      return null
  }
}

const profile = {
  name: 'Burak Boduroğlu',
  location: 'Türkiye / Remote',
  avatarUrl: 'https://avatars.githubusercontent.com/u/80620802?v=4',
  intro:
    'I’m a software engineer who likes turning unclear ideas into simple, reliable, and usable software. I enjoy working across the full product cycle — understanding the problem, shaping the experience, building the system, and refining it until it feels clear and dependable.',
  aiIntro:
    'My work style is practical and intentional: define the context, move in small iterations, keep the system observable, and use modern tools thoughtfully. I care about software that is easy to understand, easy to improve, and calm to operate.',
  reachOutPre:
    'Open to collaborations, developer tooling, and clear conversations —',
  links: [
    { label: 'Send email', href: 'mailto:info@burakboduroglu.com.tr', icon: 'mail' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/burakboduroglu', icon: 'linkedin' },
    { label: 'DEV.to', href: 'https://dev.to/burakboduroglu', icon: 'devto' },
    { label: 'GitHub', href: 'https://github.com/burakboduroglu', icon: 'github' },
    { label: 'NPM', href: 'https://www.npmjs.com/~burakboduroglu', icon: 'npm' },
  ],
}

const categories = [
  { key: 'macos', label: 'macOS Apps', icon: Monitor },
  { key: 'web', label: 'Web Apps', icon: Globe },
  { key: 'developer', label: 'Developer Tools', icon: Code2 },
  { key: 'cli', label: 'CLI Apps', icon: Terminal },
  { key: 'productivity', label: 'Productivity', icon: Grid2X2 },
]

const apps = [
  {
    id: 'macshelf',
    categoryKey: 'macos',
    category: 'macOS App',
    title: 'MacShelf',
    subtitle: 'Native clipboard shelf for macOS',
    repo: 'https://github.com/burakboduroglu/macshelf',
    description:
      'A native macOS clipboard shelf for text and images. Built as a small productivity utility for keeping useful snippets close without breaking flow.',
    stack: 'Swift',
    platform: 'macOS',
    price: 'Free',
    stars: '1',
    forks: '0',
    action: 'Get',
    icon: 'M',
    logoUrl:
      'https://raw.githubusercontent.com/burakboduroglu/macshelf/main/assets/macshelf-logo.svg',
    accent: 'dark',
    heroTitle: 'Your clipboard, always in sight.',
    heroText:
      'MacShelf keeps text and image snippets ready on your Mac — simple, native, and out of the way.',
  },
  {
    id: 'portkill',
    categoryKey: 'cli',
    categoryKeys: ['cli', 'developer'],
    category: 'CLI App',
    title: '.portkill',
    subtitle: 'Free stuck TCP ports in one command',
    repo: 'https://github.com/burakboduroglu/portkill',
    description:
      'A CLI for macOS and Linux that kills processes listening on TCP ports, with dry-run, port ranges, list mode, and an optional local web UI.',
    stack: 'TypeScript',
    platform: 'macOS / Linux',
    price: 'Free',
    stars: '2',
    forks: '0',
    action: 'Get',
    icon: 'p',
    accent: 'portkill',
    heroTitle: 'Free ports without memorizing commands.',
    heroText:
      'A focused developer tool for finding and killing port-bound processes quickly and safely.',
  },
  {
    id: 'dev-notes',
    categoryKey: 'cli',
    categoryKeys: ['cli', 'developer'],
    category: 'CLI / DevTool',
    title: 'DevNotes',
    subtitle: 'Developer notes from the command line',
    repo: 'https://github.com/burakboduroglu/dev-notes',
    description:
      'A CLI and developer tool for keeping practical development notes close to the terminal, so commands, snippets, and implementation details stay easy to capture and revisit.',
    stack: 'Developer Tool',
    platform: 'CLI',
    price: 'Free',
    stars: '—',
    forks: '—',
    action: 'Get',
    icon: 'DN',
    logoUrl:
      'https://raw.githubusercontent.com/burakboduroglu/dev-notes/main/assets/devnotes-logo.svg',
    accent: 'devnotes',
    heroTitle: 'Keep developer notes where the work happens.',
    heroText:
      'DevNotes is a terminal-friendly notes utility for saving the commands, snippets, and context you reach for while building.',
  },
  {
    id: 'alice',
    categoryKey: 'web',
    category: 'Web App',
    title: 'Alice',
    subtitle: 'Landing page for a wedding venue',
    repo: 'https://github.com/burakboduroglu/alice',
    description:
      'A polished landing page concept for a wedding venue, designed to present the space, atmosphere, and key information clearly for couples planning their event.',
    stack: 'Web',
    platform: 'Browser',
    price: 'Free',
    stars: '—',
    forks: '—',
    action: 'View',
    icon: 'A',
    accent: 'rose',
    heroTitle: 'A warm landing page for a wedding venue.',
    heroText:
      'Alice is a clean promotional website concept for showcasing a wedding venue with a calm, elegant, and conversion-focused presentation.',
  },
]

function getAppCategoryKeys(app) {
  return app.categoryKeys ?? [app.categoryKey]
}

const contactTopics = [
  {
    title: 'I build clear, dependable software',
    bullets: [
      'I like working on products and internal tools where the problem is real, the scope is clear, and the result needs to feel simple for users.',
      'I’m most useful when I can help shape both the technical direction and the product details around it.',
    ],
  },
  {
    title: 'I care about developer tools and useful utilities',
    bullets: [
      'Projects like MacShelf and .portkill reflect the kind of software I enjoy: focused, practical, and built around real workflow friction.',
      'If you’re building tools for developers, teams, or technical operators, I’d be happy to hear about it.',
    ],
  },
  {
    title: 'I use AI as part of an engineering system',
    bullets: [
      'I’m interested in context engineering, agentic workflows, review loops, and ways to make AI-assisted development more reliable.',
      'The goal is not to skip engineering judgment, but to make better engineering work faster and more repeatable.',
    ],
  },
  {
    title: 'I write and share technical notes',
    bullets: [
      'I publish practical programming notes and software engineering articles on DEV.to.',
      'I enjoy turning what I learn while building into notes that are useful for other developers.',
    ],
  },
  {
    title: 'I’m open to thoughtful conversations',
    bullets: [
      'Reach out if you want to talk about software, developer tooling, AI-assisted engineering workflows, or a focused product idea.',
      'The best way to contact me is by email: info@burakboduroglu.com.tr.',
    ],
  },
]

function ExternalLink({ href, children, className = '' }) {
  return (
    <a className={className} href={href} target='_blank' rel='noreferrer'>
      {children}
    </a>
  )
}

function PortkillWordmark() {
  return (
    <span className='portkill-wordmark'>
      <i />
      <span>.portkill</span>
    </span>
  )
}

function AppTitle({ app }) {
  return app.id === 'portkill' ? <PortkillWordmark /> : app.title
}

function AppIcon({ app, large = false }) {
  return (
    <div
      className={`store-app-icon ${app.accent} ${large ? 'large' : ''} ${app.icon.length > 2 ? 'wordmark' : ''}`}
      aria-hidden='true'>
      {app.logoUrl ? (
        <img src={app.logoUrl} alt='' />
      ) : app.id === 'portkill' ? (
        <span className='portkill-mark'>
          <i />
          <b>{app.icon}</b>
        </span>
      ) : (
        <span>{app.icon}</span>
      )}
    </div>
  )
}

function StoreSidebar({ activeCategory, onCategoryChange, searchQuery, onSearchChange }) {
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
        <a href='https://github.com/burakboduroglu' target='_blank' rel='noreferrer'>
          <span className='github-dot'>●</span> GitHub
        </a>
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

function AppListItem({ app, onSelect }) {
  return (
    <button className='store-list-item' type='button' onClick={() => onSelect(app)}>
      <AppIcon app={app} />
      <div className='store-list-copy'>
        <strong>{app.title}</strong>
        <span>{app.subtitle}</span>
        <small>
          {app.category} · ★ {app.stars}
        </small>
      </div>
      <span className='store-get-button'>{app.action}</span>
    </button>
  )
}

function AppsHome({ visibleApps, activeCategory, searchQuery, onSelect }) {
  const featuredApp = visibleApps[0]
  const activeLabel =
    activeCategory === 'all'
      ? 'All'
      : (categories.find((category) => category.key === activeCategory)?.label ?? 'All')
  const title = searchQuery
    ? `Search results for “${searchQuery}”`
    : activeLabel === 'All'
      ? 'All Apps'
      : activeLabel

  return (
    <div className='store-content'>
      {featuredApp ? (
        <section className='store-hero-card'>
          <span>Featured · {featuredApp.category}</span>
          <h2>{featuredApp.heroTitle}</h2>
          <p>{featuredApp.heroText}</p>
          <button type='button' onClick={() => onSelect(featuredApp)}>
            <AppIcon app={featuredApp} />
            <span>
              <strong>
                <AppTitle app={featuredApp} />
              </strong>
              <small>{featuredApp.subtitle}</small>
            </span>
            <em>{featuredApp.action}</em>
          </button>
        </section>
      ) : (
        <section className='store-empty'>
          <Search size={24} />
          <h2>No apps found</h2>
          <p>Try searching by app name, category, platform, or language.</p>
        </section>
      )}

      <section className='store-list-section'>
        <div className='store-section-title'>
          <h3>{title}</h3>
          <span>{visibleApps.length} apps</span>
        </div>
        <div className='store-list-grid'>
          {visibleApps.map((app) => (
            <AppListItem app={app} key={app.id} onSelect={onSelect} />
          ))}
        </div>
      </section>
    </div>
  )
}

function AppsDetail({ app, onBack }) {
  const stats = [
    ['Stars', app.stars],
    ['Forks', app.forks],
    ['Price', app.price],
    ['Platform', app.platform],
    ['Language', app.stack],
  ]

  return (
    <div className='store-detail'>
      <button className='store-back' type='button' onClick={onBack}>
        <ChevronLeft size={18} /> Back
      </button>

      <div className='store-detail-hero'>
        <AppIcon app={app} large />
        <div>
          <h2>{app.title}</h2>
          <p>{app.subtitle}</p>
          <div className='store-detail-actions'>
            <ExternalLink className='store-primary-link' href={app.repo}>
              {app.action}
            </ExternalLink>
            <ExternalLink className='store-secondary-link' href={app.repo}>
              View on GitHub <ArrowUpRight size={14} />
            </ExternalLink>
          </div>
        </div>
      </div>

      <div className='store-stats'>
        {stats.map(([label, value]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>

      <section className='store-preview-section'>
        <h3>Preview</h3>
        <div className={`store-preview ${app.accent}`}>
          <div className='preview-window'>
            <span />
            <span />
            <span />
          </div>
          <div className='preview-floating-card'>
            <strong>{app.title}</strong>
            <p>{app.heroText}</p>
          </div>
        </div>
      </section>

      <section className='store-description'>
        <h3>Description</h3>
        <p>{app.description}</p>
      </section>
    </div>
  )
}

function AppsSite() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedApp, setSelectedApp] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const visibleApps = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()
    const categoryApps =
      activeCategory === 'all'
        ? apps
        : activeCategory === 'productivity'
          ? apps.filter((app) => app.id === 'macshelf')
          : apps.filter((app) => getAppCategoryKeys(app).includes(activeCategory))

    if (!query) {
      return categoryApps
    }

    return apps.filter((app) =>
      [app.title, app.subtitle, app.description, app.category, app.stack, app.platform]
        .join(' ')
        .toLowerCase()
        .includes(query)
    )
  }, [activeCategory, searchQuery])

  function handleCategoryChange(categoryKey) {
    setActiveCategory(categoryKey)
    setSelectedApp(null)
  }

  return (
    <section
      id='apps'
      className={isSidebarOpen ? 'apps-site sidebar-open' : 'apps-site'}
      aria-label='Embedded apps showcase'>
      <button
        className='store-menu-toggle'
        type='button'
        onClick={() => setIsSidebarOpen((value) => !value)}
        aria-label={isSidebarOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={isSidebarOpen}>
        <Menu size={22} />
      </button>

      {isSidebarOpen ? (
        <button
          className='store-backdrop'
          type='button'
          aria-label='Close navigation'
          onClick={() => setIsSidebarOpen(false)}
        />
      ) : null}

      <StoreSidebar
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        searchQuery={searchQuery}
        onSearchChange={(value) => {
          setSearchQuery(value)
          setSelectedApp(null)
        }}
      />
      {selectedApp ? (
        <AppsDetail app={selectedApp} onBack={() => setSelectedApp(null)} />
      ) : (
        <AppsHome
          visibleApps={visibleApps}
          activeCategory={activeCategory}
          searchQuery={searchQuery.trim()}
          onSelect={setSelectedApp}
        />
      )}
    </section>
  )
}

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
                        <ArrowUpRight size={17} className='reach-out-link-icon' aria-hidden='true' />
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
