import type { Messages } from './types'

const de = {
  localeLabel: 'Deutsch',
  meta: {
    title: 'Burak Boduroglu',
    description:
      'Eine minimalistische persönliche Website von Burak Boduroğlu mit einer eingebetteten App-Übersicht, gebaut mit React und Vite.',
  },
  nav: {
    languageAria: 'Sprache',
  },
  hero: {
    photoAlt: 'Burak Boduroğlu',
    contactLinksAria: 'Kontaktlinks',
    connect: 'Kontakt',
    reachOut: 'Melde dich',
  },
  profile: {
    intro:
      'Ich bin Softwareentwickler. Ich entwickle gern aus ungeordneten Ideen einfache, nützliche Produkte, die Menschen wirklich verwenden können. Ich arbeite am liebsten vom Verständnis des Problems bis zum Launch mit. Dabei gehe ich in kleinen Schritten vor, setze die passenden Werkzeuge ein und achte auf lesbaren, wartbaren Code.',
    aiIntro: '',
    links: {
      email: 'E-Mail senden',
      linkedin: 'LinkedIn',
      devto: 'DEV.to',
      github: 'GitHub',
      producthunt: 'Product Hunt',
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
    emptyBody: 'Suche nach App-Name, Kategorie, Plattform oder Sprache.',
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
      'Mich interessieren klar abgegrenzte Produkte, praxisnahe KI-gestützte Entwicklungsabläufe, Entwickler-Tools und Software, die von außen einfach wirkt und innen solide bleibt.',
    topics: [
      {
        title: 'Ich denke Produkt und Code zusammen',
        bullets: [
          'Ich arbeite gern an Produkten und internen Tools, die ein echtes Problem lösen und einen klaren Umfang haben.',
          'Am besten bin ich, wenn ich Problem, Nutzer und technische Lösung gemeinsam betrachten kann.',
        ],
      },
      {
        title: 'Kleine Werkzeuge, die etwas erledigen',
        bullets: [
          'MacShelf und .portkill zeigen, welche Art von Software ich mag: Werkzeuge, die eine Sache gut machen.',
          'Wenn du etwas baust, das den Alltag von Entwicklern oder Teams leichter macht, höre ich gern davon.',
        ],
      },
      {
        title: 'Ich nutze KI als Teil der Arbeit',
        bullets: [
          'Ich beschäftige mich mit Context Engineering, agentischen Abläufen und Code-Reviews.',
          'KI ersetzt für mich nicht das Denken, sondern kann einen guten Engineering-Prozess schneller machen.',
        ],
      },
      {
        title: 'Ich schreibe über das, was ich lerne',
        bullets: [
          'Auf DEV.to schreibe ich über Programmierung und Softwareentwicklung.',
          'Was ich beim Bauen lerne, halte ich in Notizen fest, zu denen ich später zurückkehren kann und die vielleicht auch anderen helfen.',
        ],
      },
      {
        title: 'Schreib mir, wenn du reden möchtest',
        bullets: [
          'Wir können über Software, Entwickler-Tools, KI oder ein Produkt sprechen, an dem du arbeitest.',
          'Am einfachsten erreichst du mich per E-Mail: info@burakboduroglu.com.tr.',
        ],
      },
    ],
  },
  footer: {
    crafted: (name) => ['Mit', `von ${name} erstellt`],
  },
  appCopy: {
    macshelf: {
      category: 'macOS-App',
      subtitle: 'Zwischenablage-Manager für macOS',
      description:
        'Eine macOS-App, die kopierte Texte und Bilder speichert, damit du sie später leicht wiederfindest und verwenden kannst.',
      stack: 'Swift',
      platform: 'macOS',
      price: 'Kostenlos',
      action: 'Laden',
      heroTitle: 'Verliere Kopiertes nicht mehr.',
      heroText:
        'MacShelf speichert Kopiertes im Hintergrund und hält es bereit, wenn du es brauchst.',
    },
    portkill: {
      category: 'CLI-App',
      subtitle: 'Belegte TCP-Ports mit einem Befehl schließen',
      description:
        'Ein CLI für macOS und Linux, das den Prozess findet und beendet, der einen Port verwendet. Mit Vorschau, Port-Bereichen und Listenmodus.',
      stack: 'TypeScript',
      platform: 'macOS / Linux',
      price: 'Kostenlos',
      action: 'Laden',
      heroTitle: 'Finde den Prozess hinter einem Port.',
      heroText:
        'Finde heraus, welcher Prozess einen Port verwendet, und beende ihn bei Bedarf mit einem Befehl.',
    },
    'dev-notes': {
      category: 'CLI / DevTool',
      subtitle: 'Entwicklernotizen im Terminal festhalten',
      description:
        'Ein CLI, mit dem du Befehle, Code-Schnipsel und Projektnotizen direkt im Terminal speicherst und später wiederfindest.',
      stack: 'Entwickler-Tool',
      platform: 'CLI',
      price: 'Kostenlos',
      action: 'Laden',
      heroTitle: 'Halte deine Notizen nah am Terminal.',
      heroText:
        'DevNotes hält die Befehle, Code-Schnipsel und Projektdetails, die du beim Bauen verwendest, an einem Ort.',
    },
    bdash: {
      category: 'SaaS',
      subtitle: 'Verwaltungsplattform für Unternehmen',
      description:
        'BDash bündelt Produkte, Lagerbestand, Kosten, Kunden und Bestellungen in einem Dashboard. Die Plattform hilft Unternehmen, ihre täglichen Abläufe ohne unnötige Komplexität im Blick zu behalten.',
      stack: 'TypeScript',
      platform: 'Web',
      price: 'Privat',
      action: 'Ansehen',
      heroTitle: 'Das Unternehmen an einem Ort im Blick.',
      heroText:
        'BDash ermöglicht die Verwaltung der täglichen Abläufe über ein einziges Web-Dashboard.',
    },
    dizey: {
      category: 'Web Page',
      subtitle: 'Website für ein Softwarestudio',
      description:
        'Die Website von Dizey Yazılım, einem kleinen Engineering-Team, das Web-Plattformen, Cloud-Infrastruktur und Datensysteme baut. Sie zeigt die Leistungen, die Arbeitsweise des Teams und die Kontaktmöglichkeiten.',
      stack: 'Web',
      platform: 'Browser',
      price: 'Kostenlos',
      action: 'Ansehen',
      heroTitle: 'Skalierbare Software, richtig aufgebaute Infrastruktur.',
      heroText:
        'Dizey ist die Website eines kleinen Engineering-Teams, das Software von der ersten Idee bis in die Produktion begleitet.',
    },
    alice: {
      category: 'Web Page',
      subtitle: 'Landingpage für eine Hochzeitslocation',
      description:
        'Ein Website-Konzept für eine Hochzeitslocation. Es präsentiert Atmosphäre, Leistungen und wichtige Informationen auf einfache Weise.',
      stack: 'Web',
      platform: 'Browser',
      price: 'Kostenlos',
      action: 'Ansehen',
      heroTitle: 'Die Location auf den ersten Blick spürbar machen.',
      heroText:
        'Alice ist ein einfaches Website-Konzept, das die Atmosphäre und das Erlebnis einer Hochzeitslocation hervorhebt.',
    },
    'betus-design': {
      category: 'Web Page',
      subtitle: 'Landingpage für eine Manufaktur für Handarbeit',
      description:
        'Ein Website-Konzept für eine Manufaktur. Es präsentiert die Produkte, die Geschichte der Werkstatt und wichtige Informationen auf einfache Weise.',
      stack: 'Web',
      platform: 'Browser',
      price: 'Kostenlos',
      action: 'Ansehen',
      heroTitle: 'Die Geschichte hinter der Handarbeit erzählen.',
      heroText:
        'Betus Design ist ein einfaches Website-Konzept, das die Produkte und die Geschichte einer Manufaktur hervorhebt.',
    },
  },
} satisfies Messages

export default de
