import type { Messages } from './types'

const de = {
  localeLabel: 'Deutsch',
  meta: {
    title: 'Burak Boduroglu',
    description:
      'Eine minimalistische persönliche Website von Burak Boduroğlu mit einer eingebetteten App-Übersicht, gebaut mit React und Vite.',
  },
  nav: {
    apps: 'Apps',
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
      'Ich bin Softwareentwickler und verwandle unklare Ideen gern in einfache, verlässliche und benutzbare Software. Ich arbeite gerne über den gesamten Produktzyklus hinweg — das Problem verstehen, die Erfahrung gestalten, das System bauen und es verfeinern, bis es klar und verlässlich wirkt.',
    aiIntro:
      'Meine Arbeitsweise ist pragmatisch und bewusst: den Kontext festlegen, in kleinen Schritten vorgehen, das System beobachtbar halten und moderne Werkzeuge überlegt einsetzen. Mir liegt an Software, die leicht zu verstehen, leicht zu verbessern und ruhig zu betreiben ist.',
    links: {
      email: 'E-Mail senden',
      linkedin: 'LinkedIn',
      devto: 'DEV.to',
      github: 'GitHub',
      substack: 'Substack',
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
        title: 'Ich baue klare, verlässliche Software',
        bullets: [
          'Ich arbeite gern an Produkten und internen Tools, bei denen das Problem echt ist, der Umfang klar und das Ergebnis sich für Nutzer einfach anfühlen muss.',
          'Am nützlichsten bin ich, wenn ich sowohl die technische Richtung als auch die Produktdetails drumherum mitgestalten kann.',
        ],
      },
      {
        title: 'Mir liegen Entwickler-Tools und nützliche Helfer am Herzen',
        bullets: [
          'Projekte wie MacShelf und .portkill zeigen, welche Art von Software mir Freude macht: fokussiert, praktisch und um echte Reibung im Arbeitsablauf herum gebaut.',
          'Wenn du Werkzeuge für Entwickler, Teams oder technische Anwender baust, höre ich gern davon.',
        ],
      },
      {
        title: 'Ich nutze KI als Teil eines Engineering-Systems',
        bullets: [
          'Mich interessieren Context Engineering, agentische Workflows, Review-Schleifen und Wege, KI-gestützte Entwicklung verlässlicher zu machen.',
          'Das Ziel ist nicht, technisches Urteilsvermögen zu überspringen, sondern gute Engineering-Arbeit schneller und wiederholbarer zu machen.',
        ],
      },
      {
        title: 'Ich schreibe und teile technische Notizen',
        bullets: [
          'Auf Substack und DEV.to veröffentliche ich praktische Programmiernotizen und Artikel zum Software Engineering.',
          'Ich verwandle gern das, was ich beim Bauen lerne, in Notizen, die auch anderen Entwicklern nützen.',
        ],
      },
      {
        title: 'Ich bin offen für gute Gespräche',
        bullets: [
          'Melde dich, wenn du über Software, Entwickler-Tools, KI-gestützte Entwicklungsabläufe oder eine fokussierte Produktidee sprechen möchtest.',
          'Am besten erreichst du mich per E-Mail: info@burakboduroglu.com.tr.',
        ],
      },
    ],
  },
  articles: {
    sectionAria: 'Artikel und Schreiben',
    scrollLabel: 'Articles',
    title: 'Articles',
    viewAll: 'Alle auf Substack ansehen',
    readOnSubstack: 'Auf Substack lesen',
  },
  footer: {
    crafted: (name) => ['Mit', `von ${name} erstellt`],
  },
  appCopy: {
    macshelf: {
      category: 'macOS-App',
      subtitle: 'Natives Zwischenablage-Regal für macOS',
      description:
        'Ein natives Zwischenablage-Regal für macOS, für Text und Bilder. Entstanden als kleines Produktivitätswerkzeug, um nützliche Schnipsel griffbereit zu halten, ohne den Arbeitsfluss zu unterbrechen.',
      stack: 'Swift',
      platform: 'macOS',
      price: 'Kostenlos',
      action: 'Laden',
      heroTitle: 'Deine Zwischenablage, immer im Blick.',
      heroText:
        'MacShelf hält Text- und Bildschnipsel auf deinem Mac bereit — einfach, nativ und nie im Weg.',
    },
    portkill: {
      category: 'CLI-App',
      subtitle: 'Blockierte TCP-Ports mit einem Befehl freigeben',
      description:
        'Ein CLI für macOS und Linux, das Prozesse auf TCP-Ports beendet — mit Dry-Run, Port-Bereichen, Listenmodus und optionaler lokaler Weboberfläche.',
      stack: 'TypeScript',
      platform: 'macOS / Linux',
      price: 'Kostenlos',
      action: 'Laden',
      heroTitle: 'Ports freigeben, ohne Befehle auswendig zu lernen.',
      heroText:
        'Ein fokussiertes Entwickler-Tool, um portgebundene Prozesse schnell und sicher zu finden und zu beenden.',
    },
    'dev-notes': {
      category: 'CLI / DevTool',
      subtitle: 'Entwicklernotizen direkt aus der Kommandozeile',
      description:
        'Ein CLI und Entwickler-Tool, um praktische Entwicklungsnotizen nah am Terminal zu halten, damit Befehle, Schnipsel und Implementierungsdetails leicht festzuhalten und wiederzufinden sind.',
      stack: 'Entwickler-Tool',
      platform: 'CLI',
      price: 'Kostenlos',
      action: 'Laden',
      heroTitle: 'Entwicklernotizen dort, wo die Arbeit passiert.',
      heroText:
        'DevNotes ist ein terminalfreundliches Notiz-Werkzeug für die Befehle, Schnipsel und Zusammenhänge, auf die du beim Bauen zurückgreifst.',
    },
    bdash: {
      category: 'SaaS',
      subtitle: 'Verwaltungsplattform für kleine Unternehmen',
      description:
        'BDash ist eine fokussierte Verwaltungsplattform, die Produkte, Lagerbestand, Kosten, Kunden und Bestellungen auf einer klaren Arbeitsoberfläche bündelt. Sie verbindet eine schnelle TanStack-Start-Oberfläche mit Supabase Auth und Postgres und gibt kleinen Teams ein praktisches Dashboard für den Alltag, ohne einfache Abläufe unter Enterprise-Komplexität zu begraben.',
      stack: 'TypeScript',
      platform: 'Web',
      price: 'Privat',
      action: 'Ansehen',
      heroTitle: 'Eine ruhige Steuerzentrale für kleine Unternehmen.',
      heroText:
        'BDash bringt Produkte, Lagerbestand, Kunden, Kosten und Bestellungen in ein schnelles Web-Dashboard, gebaut mit TanStack Start, Supabase und Bun.',
    },
    alice: {
      category: 'Web Page',
      subtitle: 'Landingpage für eine Hochzeitslocation',
      description:
        'Ein sorgfältig gestaltetes Landingpage-Konzept für eine Hochzeitslocation, das Raum, Atmosphäre und wichtige Informationen klar für Paare in der Planung darstellt.',
      stack: 'Web',
      platform: 'Browser',
      price: 'Kostenlos',
      action: 'Ansehen',
      heroTitle: 'Eine warme Landingpage für eine Hochzeitslocation.',
      heroText:
        'Alice ist ein klares Website-Konzept, das eine Hochzeitslocation ruhig, elegant und abschlussorientiert in Szene setzt.',
    },
    'betus-design': {
      category: 'Web Page',
      subtitle: 'Landingpage für eine Manufaktur für Handarbeit',
      description:
        'Ein sorgfältig gestaltetes Landingpage-Konzept für eine Manufaktur für Handarbeit, das Produkte, Atmosphäre und wichtige Informationen klar für Kundinnen und Kunden darstellt.',
      stack: 'Web',
      platform: 'Browser',
      price: 'Kostenlos',
      action: 'Ansehen',
      heroTitle: 'Eine warme Landingpage für eine Manufaktur für Handarbeit.',
      heroText:
        'Betus Design ist ein klares Website-Konzept, das eine Manufaktur für Handarbeit ruhig, elegant und abschlussorientiert in Szene setzt.',
    },
  },
} satisfies Messages

export default de
