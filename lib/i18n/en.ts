import type { Messages } from './types'

const en = {
  localeLabel: 'English',
  meta: {
    title: 'Burak Boduroglu',
    description:
      'A minimal personal site for Burak Boduroğlu with an embedded apps showcase built using React and Vite.',
  },
  nav: {
    apps: 'Apps',
    languageAria: 'Language',
  },
  hero: {
    photoAlt: 'Burak Boduroğlu',
    contactLinksAria: 'Contact links',
    connect: 'Connect',
    reachOut: 'Reach out',
  },
  profile: {
    intro:
      'I’m a software engineer who likes turning unclear ideas into simple, reliable, and usable software. I enjoy working across the full product cycle — understanding the problem, shaping the experience, building the system, and refining it until it feels clear and dependable.',
    aiIntro:
      'My work style is practical and intentional: define the context, move in small iterations, keep the system observable, and use modern tools thoughtfully. I care about software that is easy to understand, easy to improve, and calm to operate.',
    links: {
      email: 'Send email',
      linkedin: 'LinkedIn',
      devto: 'DEV.to',
      github: 'GitHub',
      substack: 'Substack',
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
          'I publish practical programming notes and software engineering articles on Substack (penolox) and DEV.to.',
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
    ],
  },
  articles: {
    sectionAria: 'Articles and writing',
    scrollLabel: 'Articles',
    title: 'Articles',
    viewAll: 'View all on Substack',
    readOnSubstack: 'Read on Substack',
  },
  footer: {
    crafted: (name) => ['Crafted with', `by ${name}`],
  },
  appCopy: {
    macshelf: {
      category: 'macOS App',
      subtitle: 'Native clipboard shelf for macOS',
      description:
        'A native macOS clipboard shelf for text and images. Built as a small productivity utility for keeping useful snippets close without breaking flow.',
      stack: 'Swift',
      platform: 'macOS',
      price: 'Free',
      action: 'Get',
      heroTitle: 'Your clipboard, always in sight.',
      heroText:
        'MacShelf keeps text and image snippets ready on your Mac — simple, native, and out of the way.',
    },
    portkill: {
      category: 'CLI App',
      subtitle: 'Free stuck TCP ports in one command',
      description:
        'A CLI for macOS and Linux that kills processes listening on TCP ports, with dry-run, port ranges, list mode, and an optional local web UI.',
      stack: 'TypeScript',
      platform: 'macOS / Linux',
      price: 'Free',
      action: 'Get',
      heroTitle: 'Free ports without memorizing commands.',
      heroText:
        'A focused developer tool for finding and killing port-bound processes quickly and safely.',
    },
    'dev-notes': {
      category: 'CLI / DevTool',
      subtitle: 'Developer notes from the command line',
      description:
        'A CLI and developer tool for keeping practical development notes close to the terminal, so commands, snippets, and implementation details stay easy to capture and revisit.',
      stack: 'Developer Tool',
      platform: 'CLI',
      price: 'Free',
      action: 'Get',
      heroTitle: 'Keep developer notes where the work happens.',
      heroText:
        'DevNotes is a terminal-friendly notes utility for saving the commands, snippets, and context you reach for while building.',
    },
    bdash: {
      category: 'SaaS',
      subtitle: 'Small business management platform',
      description:
        'BDash is a focused business management platform for keeping products, inventory, costs, customers, and orders in one clear operating surface. It combines a fast TanStack Start interface with Supabase Auth and Postgres, giving small teams a practical dashboard for daily work without burying simple workflows under enterprise complexity.',
      stack: 'TypeScript',
      platform: 'Web',
      price: 'Private',
      action: 'View',
      heroTitle: 'A calm control surface for small business operations.',
      heroText:
        'BDash brings products, inventory, customers, costs, and orders into a fast web dashboard built with TanStack Start, Supabase, and Bun.',
    },
    alice: {
      category: 'Web Page',
      subtitle: 'Landing page for a wedding venue',
      description:
        'A polished landing page concept for a wedding venue, designed to present the space, atmosphere, and key information clearly for couples planning their event.',
      stack: 'Web',
      platform: 'Browser',
      price: 'Free',
      action: 'View',
      heroTitle: 'A warm landing page for a wedding venue.',
      heroText:
        'Alice is a clean promotional website concept for showcasing a wedding venue with a calm, elegant, and conversion-focused presentation.',
    },
    'betus-design': {
      category: 'Web Page',
      subtitle: 'Landing page for a handmade craft shop',
      description:
        'A polished landing page concept for a handmade craft shop, designed to present the products, atmosphere, and key information clearly for customers planning their purchase.',
      stack: 'Web',
      platform: 'Browser',
      price: 'Free',
      action: 'View',
      heroTitle: 'A warm landing page for a handmade craft shop.',
      heroText:
        'Betus Design is a clean promotional website concept for showcasing a handmade craft shop with a calm, elegant, and conversion-focused presentation.',
    },
  },
} satisfies Messages

export default en
