import type { Messages } from './types'

const en = {
  localeLabel: 'English',
  meta: {
    title: 'Burak Boduroglu',
    description:
      'A minimal personal site for Burak Boduroğlu with an embedded apps showcase built using React and Vite.',
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
      'I’m a software engineer. I enjoy turning messy ideas into simple, useful products that people can actually use. I prefer being involved from understanding the problem to shipping the product. I work in small steps, use the right tools, and care about writing readable, maintainable code.',
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
    emptyBody: 'Try searching by app name, category, platform, or language.',
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
      'I’m interested in well-scoped products, practical AI-assisted engineering workflows, developer tools, and software that feels simple from the outside while staying solid underneath.',
    topics: [
      {
        title: 'I think about the product and the code together',
        bullets: [
          'I enjoy working on products and internal tools that solve a real need and have a clear scope.',
          'I do my best work when I can think about the problem, the user, and the technical solution together.',
        ],
      },
      {
        title: 'Small tools that do useful work',
        bullets: [
          'MacShelf and .portkill reflect the kind of software I like: tools that do one thing and do it well.',
          'If you’re building something that makes a developer’s or team’s daily work easier, I’d like to hear about it.',
        ],
      },
      {
        title: 'I use AI as part of the work',
        bullets: [
          'I think about context engineering, agent workflows, and code review processes.',
          'AI is not a replacement for thinking; it is a tool that can make a good engineering process faster.',
        ],
      },
      {
        title: 'I write about what I learn',
        bullets: [
          'I write about programming and software engineering on Substack and DEV.to.',
          'I turn what I learn while building into notes I can return to and that may be useful to other people too.',
        ],
      },
      {
        title: 'Write if you want to talk',
        bullets: [
          'We can talk about software, developer tools, AI, or a product you’re working on.',
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
        'A macOS app that keeps the text and images you copy so you can find and use them again whenever you need them.',
      stack: 'Swift',
      platform: 'macOS',
      price: 'Free',
      action: 'Get',
      heroTitle: 'Don’t lose what you copied.',
      heroText:
        'MacShelf keeps the things you copy in the background and puts them within reach when you need them.',
    },
    portkill: {
      category: 'CLI App',
      subtitle: 'Close used TCP ports with one command',
      description:
        'A CLI for macOS and Linux that finds and closes the process using a port. It also supports previews, port ranges, and listing open ports.',
      stack: 'TypeScript',
      platform: 'macOS / Linux',
      price: 'Free',
      action: 'Get',
      heroTitle: 'Find the process using a port.',
      heroText:
        'Find which process is using a port and close it with one command when needed.',
    },
    'dev-notes': {
      category: 'CLI / DevTool',
      subtitle: 'Keep developer notes in the terminal',
      description:
        'A CLI for saving commands, code snippets, and project notes without leaving the terminal, then finding them again when needed.',
      stack: 'Developer Tool',
      platform: 'CLI',
      price: 'Free',
      action: 'Get',
      heroTitle: 'Keep your notes close to the terminal.',
      heroText:
        'DevNotes keeps the commands, code snippets, and project details you use while building in one place.',
    },
    bdash: {
      category: 'SaaS',
      subtitle: 'Management platform for businesses',
      description:
        'BDash brings products, inventory, costs, customers, and orders together in one dashboard. It is designed to help businesses keep track of their daily work without unnecessary complexity.',
      stack: 'TypeScript',
      platform: 'Web',
      price: 'Private',
      action: 'View',
      heroTitle: 'Keep the business in one place.',
      heroText:
        'BDash lets you track the business’s daily operations from a single web dashboard.',
    },
    dizey: {
      category: 'Web Page',
      subtitle: 'Website for a software studio',
      description:
        'The website of Dizey Yazılım, a small engineering team building web platforms, cloud infrastructure, and data systems. It presents the services, the way the team works, and how to get in touch.',
      stack: 'Web',
      platform: 'Browser',
      price: 'Free',
      action: 'View',
      heroTitle: 'Scalable software, infrastructure built right.',
      heroText:
        'Dizey is the website of a small engineering team that carries software from the first idea through to production.',
    },
    alice: {
      category: 'Web Page',
      subtitle: 'Landing page for a wedding venue',
      description:
        'A website concept for a wedding venue. It presents the venue’s atmosphere, services, and important information in a simple way.',
      stack: 'Web',
      platform: 'Browser',
      price: 'Free',
      action: 'View',
      heroTitle: 'Let the venue speak for itself.',
      heroText:
        'Alice is a simple website concept that highlights the atmosphere and experience of a wedding venue.',
    },
    'betus-design': {
      category: 'Web Page',
      subtitle: 'Landing page for a handmade craft shop',
      description:
        'A website concept for a handmade workshop. It presents the products, the story behind the workshop, and the important information simply.',
      stack: 'Web',
      platform: 'Browser',
      price: 'Free',
      action: 'View',
      heroTitle: 'Tell the story behind the work.',
      heroText:
        'Betus Design is a simple website concept that highlights the products and story of a handmade workshop.',
    },
  },
} satisfies Messages

export default en
