import type { Messages } from './types'

const de = {
  localeLabel: 'Deutsch',
  meta: {
    title: 'Burak Boduroglu',
    description:
      'Eine minimalistische persönliche Website von Burak Boduroğlu mit eingebetteter App-Übersicht, gebaut mit React und Vite.',
  },
  nav: {
    languageAria: 'Sprache',
    themeAria: 'Theme',
    themeDark: 'Dunkler Modus',
    themeLight: 'Heller Modus',
  },
  hero: {
    photoAlt: 'Burak Boduroğlu',
    contactLinksAria: 'Kontaktlinks',
    connect: 'Kontakt',
    reachOut: 'Melde dich',
  },
  profile: {
    intro:
      'Ich bin Softwareentwickler. Aus unsortierten Ideen einfache, nützliche Produkte zu machen, die Leute wirklich benutzen – das mag ich. Am liebsten bin ich von Anfang bis Ende dabei: vom Verstehen des Problems bis zum Launch. Ich gehe in kleinen Schritten vor, nehme das passende Werkzeug für die Aufgabe und lege Wert auf Code, den man lesen und pflegen kann.',
    aiIntro: '',
    links: {
      email: 'E-Mail senden',
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
    macos: 'macOS-Apps',
    web: 'Web-Apps',
    developer: 'Entwickler-Tools',
    cli: 'CLI-Apps',
    productivity: 'Produktivität',
  },
  apps: {
    title: 'Projekte',
    sectionAria: 'Eingebettete App-Übersicht',
    navAria: 'App-Navigation',
    openNav: 'Navigation öffnen',
    closeNav: 'Navigation schließen',
    searchPlaceholder: 'Suchen',
    searchAria: 'Apps durchsuchen',
    discover: 'Entdecken',
    categoriesHeading: 'Kategorien',
    all: 'Alle',
    allApps: 'Alle Apps',
    featured: 'Empfohlen',
    filterAria: 'Nach Kategorie filtern',
    searchResults: (query) => `Suchergebnisse für „${query}“`,
    appCount: (count) => `${count} ${count === 1 ? 'App' : 'Apps'}`,
    resultCount: (count) => `${count} ${count === 1 ? 'Ergebnis' : 'Ergebnisse'}`,
    clearFilter: 'Filter zurücksetzen',
    emptyTitle: 'Keine Apps gefunden',
    emptyBody: 'Such nach App-Name, Kategorie, Plattform oder Sprache.',
    prevPage: 'Vorherige Seite',
    nextPage: 'Nächste Seite',
    pageOf: (current, total) => `Seite ${current} von ${total}`,
    back: 'Zurück',
    viewOnGitHub: 'Auf GitHub ansehen',
    preview: 'Vorschau',
    description: 'Beschreibung',
    stats: {
      stars: 'Sterne',
      forks: 'Forks',
      price: 'Preis',
      platform: 'Plattform',
      language: 'Sprache',
    },
  },
  contact: {
    title: 'Sprechen wir',
    intro:
      'Mich reizen klar umrissene Produkte, praxistaugliche KI-gestützte Entwicklungsabläufe, Entwickler-Tools und Software, die von außen einfach wirkt und unter der Haube solide ist.',
    topics: [
      {
        title: 'Produkt und Code denke ich zusammen',
        bullets: [
          'Ich arbeite gern an Produkten und internen Tools, die ein echtes Problem lösen und einen klaren Rahmen haben.',
          'Am stärksten bin ich, wenn ich Problem, Nutzer und technische Lösung in einem Zug denken kann.',
        ],
      },
      {
        title: 'Kleine Tools, die wirklich etwas taugen',
        bullets: [
          'MacShelf und .portkill stehen für die Software, die ich mag: Tools, die eine Sache machen – und die richtig.',
          'Wenn du etwas baust, das Entwicklern oder Teams den Alltag erleichtert, hör ich mir das gern an.',
        ],
      },
      {
        title: 'KI gehört bei mir zur Arbeit',
        bullets: [
          'Context Engineering, Agenten-Workflows und Code-Review beschäftigen mich.',
          'KI ersetzt das Denken nicht, sie macht einen guten Engineering-Prozess schneller.',
        ],
      },
      {
        title: 'Ich schreibe über das, was ich lerne',
        bullets: [
          'Auf Substack und DEV.to schreibe ich über Programmierung und Softwareentwicklung.',
          'Was ich beim Bauen lerne, wird zu Notizen, auf die ich später zurückkomme – und die vielleicht auch anderen weiterhelfen.',
        ],
      },
      {
        title: 'Schreib mir einfach',
        bullets: [
          'Über Software, Entwickler-Tools, KI oder ein Produkt, an dem du gerade sitzt – jederzeit gern.',
          'Am einfachsten erreichst du mich per E-Mail: info@burakboduroglu.com.tr.',
        ],
      },
    ],
  },
  articles: {
    sectionAria: 'Artikel und Texte',
    title: 'Artikel',
    readOnSubstack: 'Auf Substack lesen',
  },
  footer: {
    crafted: (name) => ['Mit', `von ${name} erstellt`],
  },
  appCopy: {
    macshelf: {
      category: 'macOS-App',
      subtitle: 'Zwischenablage-Manager für macOS',
      description:
        'Eine macOS-App, die alles Kopierte aufbewahrt – Text wie Bilder –, damit du es später mit einem Griff wiederfindest.',
      stack: 'Swift',
      platform: 'macOS',
      price: 'Kostenlos',
      action: 'Laden',
      heroTitle: 'Nie wieder verlieren, was du kopiert hast.',
      heroText:
        'MacShelf sichert im Hintergrund alles, was du kopierst, und legt es dir wieder hin, sobald du es brauchst.',
    },
    portkill: {
      category: 'CLI-App',
      subtitle: 'Belegten TCP-Port mit einem Befehl freigeben',
      description:
        'Ein CLI für macOS und Linux, das den Prozess aufspürt, der einen Port blockiert, und ihn beendet. Mit Vorschau, Port-Bereichen und einer Liste aller offenen Ports.',
      stack: 'TypeScript',
      platform: 'macOS / Linux',
      price: 'Kostenlos',
      action: 'Laden',
      heroTitle: 'Finde heraus, wer deinen Port blockiert.',
      heroText:
        'Sieh nach, welcher Prozess einen Port belegt, und beende ihn mit einem einzigen Befehl.',
    },
    'dev-notes': {
      category: 'CLI / DevTool',
      subtitle: 'Entwicklernotizen im Terminal festhalten',
      description:
        'Ein CLI, mit dem du Befehle, Code-Schnipsel und Projektnotizen speicherst, ohne das Terminal zu verlassen – und sie später wiederfindest.',
      stack: 'Entwickler-Tool',
      platform: 'CLI',
      price: 'Kostenlos',
      action: 'Laden',
      heroTitle: 'Notizen da, wo du arbeitest.',
      heroText:
        'DevNotes sammelt die Befehle, Code-Schnipsel und Projektdetails, die du beim Bauen brauchst, an einem Ort.',
    },
    bdash: {
      category: 'SaaS',
      subtitle: 'Verwaltungsplattform für Unternehmen',
      description:
        'BDash bündelt Produkte, Bestand, Kosten, Kunden und Bestellungen in einem einzigen Dashboard. Gebaut dafür, dass Unternehmen ihr Tagesgeschäft im Griff behalten, ohne sich zu verzetteln.',
      stack: 'TypeScript',
      platform: 'Web',
      price: 'Privat',
      action: 'Ansehen',
      heroTitle: 'Das ganze Unternehmen an einem Ort.',
      heroText:
        'Mit BDash behältst du das Tagesgeschäft über ein einziges Web-Dashboard im Blick.',
    },
    dizey: {
      category: 'Website',
      subtitle: 'Website für ein Softwarestudio',
      description:
        'Die Website von Dizey Yazılım, einem kleinen Engineering-Team für Web-Plattformen, Cloud-Infrastruktur und Datensysteme. Sie zeigt, was das Team macht, wie es arbeitet und wie man es erreicht.',
      stack: 'Web',
      platform: 'Browser',
      price: 'Kostenlos',
      action: 'Ansehen',
      heroTitle: 'Skalierbare Software, sauber gebaute Infrastruktur.',
      heroText:
        'Dizey ist die Website eines kleinen Engineering-Teams, das Software von der ersten Idee bis in die Produktion bringt.',
    },
    alice: {
      category: 'Website',
      subtitle: 'Landingpage für eine Hochzeitslocation',
      description:
        'Ein Website-Konzept für eine Hochzeitslocation: Atmosphäre, Leistungen und alles Wichtige – ohne Schnörkel.',
      stack: 'Web',
      platform: 'Browser',
      price: 'Kostenlos',
      action: 'Ansehen',
      heroTitle: 'Die Location für sich sprechen lassen.',
      heroText:
        'Alice ist ein schlichtes Website-Konzept rund um die Atmosphäre und das Erlebnis einer Hochzeitslocation.',
    },
    'betus-design': {
      category: 'Website',
      subtitle: 'Landingpage für eine Manufaktur für Handarbeit',
      description:
        'Ein Website-Konzept für eine Manufaktur: die Produkte, die Geschichte dahinter und alles Wichtige auf einen Blick.',
      stack: 'Web',
      platform: 'Browser',
      price: 'Kostenlos',
      action: 'Ansehen',
      heroTitle: 'Die Geschichte hinter der Handarbeit erzählen.',
      heroText:
        'Betus Design ist ein schlichtes Website-Konzept rund um die Produkte und die Geschichte einer Manufaktur.',
    },
  },
} satisfies Messages

export default de
