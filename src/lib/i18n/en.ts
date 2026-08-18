import type { Messages } from './types'

const en = {
  localeLabel: 'English',
  meta: {
    title: 'Burak Boduroglu',
    description:
      'A minimal personal site for Burak Boduroğlu, with an embedded apps showcase built with React and Vite.',
  },
  nav: {
    languageAria: 'Language',
    themeAria: 'Theme',
    themeDark: 'Dark mode',
    themeLight: 'Light mode',
  },
  hero: {
    photoAlt: 'Burak Boduroğlu',
    contactLinksAria: 'Contact links',
    connect: 'Connect',
    reachOut: 'Reach out',
  },
  profile: {
    intro:
      'I’m a software engineer. I like turning messy ideas into simple, useful products that people actually reach for. I’d rather be involved end to end, from working out the problem to shipping the thing. I work in small steps, pick the right tools for the job, and care about writing code that’s readable and easy to live with.',
    aiIntro: '',
    links: {
      email: 'Send email',
      linkedin: 'LinkedIn',
      devto: 'DEV.to',
      github: 'GitHub',
      substack: 'Substack',
      x: 'X',
      reddit: 'Reddit',
      youtube: 'YouTube',
      producthunt: 'Product Hunt',
      kick: 'Kick',
    },
  },
  categories: {
    macos: 'macOS Apps',
    web: 'Web Apps',
    developer: 'Developer Tools',
    cli: 'CLI Apps',
    productivity: 'Productivity',
  },
  apps: {
    title: 'Projects',
    sectionAria: 'Embedded apps showcase',
    navAria: 'Apps navigation',
    openNav: 'Open navigation',
    closeNav: 'Close navigation',
    searchPlaceholder: 'Search',
    searchAria: 'Search apps',
    discover: 'Discover',
    categoriesHeading: 'Categories',
    all: 'All',
    allApps: 'All Apps',
    featured: 'Featured',
    filterAria: 'Filter by category',
    searchResults: (query) => `Search results for "${query}"`,
    appCount: (count) => `${count} ${count === 1 ? 'app' : 'apps'}`,
    resultCount: (count) => `${count} ${count === 1 ? 'result' : 'results'}`,
    clearFilter: 'Clear filters',
    emptyTitle: 'No apps found',
    emptyBody: 'Try searching by app name, category, platform or language.',
    prevPage: 'Previous page',
    nextPage: 'Next page',
    pageOf: (current, total) => `Page ${current} of ${total}`,
    back: 'Back',
    viewOnGitHub: 'View on GitHub',
    preview: 'Preview',
    description: 'Description',
    stats: {
      stars: 'Stars',
      forks: 'Forks',
      price: 'Price',
      platform: 'Platform',
      language: 'Language',
    },
  },
  contact: {
    title: 'Let’s talk',
    intro:
      'I’m drawn to well-scoped products, practical AI-assisted engineering workflows, developer tools, and software that feels simple from the outside while staying solid underneath.',
    topics: [
      {
        title: 'Product and code, thought about together',
        bullets: [
          'I like working on products and internal tools that solve a real need and have a clear scope.',
          'I do my best work when I can think about the problem, the user and the technical solution all at once.',
        ],
      },
      {
        title: 'Small tools that pull their weight',
        bullets: [
          'MacShelf and .portkill are the sort of software I enjoy: tools that do one thing and do it well.',
          'If you’re building something that makes a developer’s or a team’s day easier, I’d love to hear about it.',
        ],
      },
      {
        title: 'AI is part of how I work',
        bullets: [
          'I think a lot about context engineering, agent workflows and code review.',
          'AI isn’t a substitute for thinking; it’s a tool that makes a good engineering process quicker.',
        ],
      },
      {
        title: 'I write about what I learn',
        bullets: [
          'I write about programming and software engineering on Substack and DEV.to.',
          'Whatever I pick up while building turns into notes I can come back to, and that might be useful to someone else too.',
        ],
      },
      {
        title: 'Drop me a line',
        bullets: [
          'Happy to talk about software, developer tools, AI, or whatever you’re building.',
          'The easiest way to reach me is by email: info@burakboduroglu.com.tr.',
        ],
      },
    ],
  },
  articles: {
    sectionAria: 'Articles and writing',
    title: 'Articles',
    readOnSubstack: 'Read on Substack',
  },
  footer: {
    crafted: (name) => ['Crafted with', `by ${name}`],
  },
  appCopy: {
    macshelf: {
      category: 'macOS App',
      subtitle: 'Clipboard manager for macOS',
      description:
        'A macOS app that hangs on to the text and images you copy, so you can find them again whenever you need them.',
      stack: 'Swift',
      platform: 'macOS',
      price: 'Free',
      action: 'Get',
      heroTitle: 'Never lose what you copied.',
      heroText:
        'MacShelf quietly keeps everything you copy and puts it back within reach the moment you need it.',
    },
    portkill: {
      category: 'CLI App',
      subtitle: 'Free up a busy TCP port with one command',
      description:
        'A CLI for macOS and Linux that tracks down the process holding a port and shuts it down. It also handles previews, port ranges and listing whatever’s open.',
      stack: 'TypeScript',
      platform: 'macOS / Linux',
      price: 'Free',
      action: 'Get',
      heroTitle: 'Find out what’s holding your port.',
      heroText:
        'Work out which process is using a port, then close it with a single command.',
    },
    'dev-notes': {
      category: 'CLI / DevTool',
      subtitle: 'Keep developer notes in the terminal',
      description:
        'A CLI for saving commands, code snippets and project notes without leaving the terminal, then finding them again later.',
      stack: 'Developer Tool',
      platform: 'CLI',
      price: 'Free',
      action: 'Get',
      heroTitle: 'Keep your notes where you work.',
      heroText:
        'DevNotes gathers the commands, code snippets and project details you rely on while building into one place.',
    },
    bdash: {
      category: 'SaaS',
      subtitle: 'Management platform for businesses',
      description:
        'BDash pulls products, stock, costs, customers and orders into a single dashboard. It’s built to help businesses stay on top of the day-to-day without the usual clutter.',
      stack: 'TypeScript',
      platform: 'Web',
      price: 'Private',
      action: 'View',
      heroTitle: 'The whole business in one place.',
      heroText:
        'BDash lets you keep an eye on day-to-day operations from a single web dashboard.',
    },
    dizey: {
      category: 'Web Page',
      subtitle: 'Website for a software studio',
      description:
        'The website for Dizey Yazılım, a small engineering team building web platforms, cloud infrastructure and data systems. It sets out what they do, how they work and how to get in touch.',
      stack: 'Web',
      platform: 'Browser',
      price: 'Free',
      action: 'View',
      heroTitle: 'Software that scales, infrastructure built properly.',
      heroText:
        'Dizey is the site of a small engineering team that takes software from the first idea through to production.',
    },
    alice: {
      category: 'Web Page',
      subtitle: 'Landing page for a wedding venue',
      description:
        'A website concept for a wedding venue, setting out the atmosphere, the services and the details that matter, without any fuss.',
      stack: 'Web',
      platform: 'Browser',
      price: 'Free',
      action: 'View',
      heroTitle: 'Let the venue speak for itself.',
      heroText:
        'Alice is a simple site concept built around the atmosphere and feel of a wedding venue.',
    },
    'betus-design': {
      category: 'Web Page',
      subtitle: 'Landing page for a handmade craft shop',
      description:
        'A website concept for a handmade workshop, showing off the products, the story behind them and the practical details.',
      stack: 'Web',
      platform: 'Browser',
      price: 'Free',
      action: 'View',
      heroTitle: 'Tell the story behind the work.',
      heroText:
        'Betus Design is a simple site concept built around the products and story of a handmade workshop.',
    },
  },
} satisfies Messages

export default en
