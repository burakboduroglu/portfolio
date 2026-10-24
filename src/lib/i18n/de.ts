import type { Messages } from './types'

const de = {
  localeLabel: 'Deutsch',
  meta: {
    title: 'Burak Boduroğlu, Softwareentwickler',
    description:
      'Burak Boduroğlu ist Softwareentwickler. Persönliche Website mit meinen Apps, Entwickler-Tools, technischen Artikeln und Profilen.',
  },
  nav: {
    languageAria: 'Sprache',
    themeAria: 'Theme',
    themeDark: 'Dunkler Modus',
    themeLight: 'Heller Modus',
    mobileControlsAria: 'Darstellung und Sprache',
    close: 'Schließen',
  },
  hero: {
    photoAlt: 'Burak Boduroğlu',
    contactLinksAria: 'Kontaktlinks',
    connect: 'Kontakt',
    reachOut: 'Melde dich',
  },
  profile: {
    intro:
      'Ich bin Softwareentwickler. Ich mag es, aus komplexen Ideen einfache, nützliche Produkte zu machen, die Leute wirklich benutzen. Am liebsten bin ich von Anfang bis Ende dabei, von der Problemstellung bis zum Launch. Ich gehe in kleinen Schritten vor, nehme das passende Werkzeug für die Aufgabe und lege Wert auf Code, den man lesen und pflegen kann.',
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
      kick: 'Kick',
      behance: 'Behance',
      figma: 'Figma',
      cursor: 'Cursor',
      gdev: 'Google Dev',
      microsoft: 'MS Learn',
      aws: 'AWS Builder',
      medium: 'Medium',
      npm: 'npm',
      framer: 'Framer',
      huggingface: 'Hugging Face',
      higgsfield: 'Higgsfield',
      suno: 'Suno',
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
    sectionAria: 'Übersicht der eingebetteten Apps',
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
    viewDetails: 'Details',
    detailAria: (title) => `Projektdetails zu ${title}`,
    openSite: 'Website öffnen',
    install: 'Installation',
    copyCommand: 'Befehl kopieren',
    commandCopied: 'Kopiert',
    documentation: 'Dokumentation',
    readmeFallback: 'Dieses Dokument ist noch nicht übersetzt. Es wird das englische Original gezeigt.',
    readmeError: 'Das Dokument konnte nicht geladen werden.',
    missingTitle: 'Kein solches Projekt',
    missingBody: 'Die gesuchte Seite wurde möglicherweise verschoben oder existiert nicht.',
    backToProjects: 'Projekte',
    screenshots: 'Screenshots',
    galleryAria: (title) => `Screenshots von ${title}`,
    prevShot: 'Vorheriger Screenshot',
    nextShot: 'Nächster Screenshot',
    shotOf: (current, total) => `${current} / ${total}`,
    showShot: (index) => `Screenshot ${index} anzeigen`,
    enlargeShot: 'In voller Größe ansehen',
    closeShot: 'Schließen',
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
          'MacShelf und .portkill stehen für die Software, die ich mag: Tools, die eine Sache richtig machen.',
          'Wenn du etwas baust, das Entwicklern oder Teams den Alltag erleichtert, höre ich mir das gern an.',
        ],
      },
      {
        title: 'KI gehört bei mir zur Arbeit',
        bullets: [
          'Context Engineering, Agenten-Workflows und Code-Review beschäftigen mich.',
          'KI ersetzt das Denken nicht, sondern macht einen guten Engineering-Prozess schneller.',
        ],
      },
      {
        title: 'Ich schreibe über das, was ich lerne',
        bullets: [
          'Auf Substack und DEV.to schreibe ich über Programmierung und Softwareentwicklung.',
          'Was ich beim Bauen lerne, wird zu Notizen, auf die ich später zurückkomme und die vielleicht auch anderen weiterhelfen.',
        ],
      },
      {
        title: 'Schreib mir einfach',
        bullets: [
          'Über Software, Entwickler-Tools, KI oder ein Produkt, an dem du gerade sitzt, kannst du mir jederzeit schreiben.',
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
  developerProfiles: {
    sectionAria: 'Entwicklerprofile und Plattformen',
    title: 'Entwicklerprofile & Communitys',
    subtitle: 'Meine Profile in den Bereichen Cloud, KI, Coding und Design.',
  },
  toast: {
    emailCopied: 'E-Mail-Adresse in die Zwischenablage kopiert!',
  },
  footer: {
    shortcutTheme: 'Theme',
    shortcutLang: 'Sprache',
    crafted: (name) => ['Mit', `von ${name} erstellt`],
  },
  appCopy: {
    ratekit: {
      category: 'Backend / Abrechnung',
      subtitle: 'Nutzungsmessung, Preisberechnung und Prepaid-Abrechnung',
      description:
        'Eine Open-Source-Engine für Nutzungsmessung und Preisberechnung mit Java 21 und Spring Boot. Drei Dienste nehmen Nutzungsereignisse über Kafka entgegen, berechnen Preise anhand versionierter Tarife, ziehen Beträge vom Prepaid-Guthaben ab und erstellen monatliche Rechnungen in PostgreSQL. Idempotente Verarbeitung verhindert doppelte Belastungen; fehlgeschlagene Ereignisse werden erneut versucht oder in ein Dead-Letter-Topic geschrieben.',
      stack: 'Java 21 / Spring Boot / Kafka / PostgreSQL',
      platform: 'Self-hosted',
      price: 'Kostenlos / Apache-2.0',
      action: 'Auf GitHub ansehen',
      heroTitle: 'Aus Nutzungsereignissen werden berechnete Kosten.',
      heroText:
        'Nutzung messen, feste Preise, gestaffelte Tarife oder Freikontingente anwenden und für jedes Konto monatliche Rechnungen mit exakten Dezimalbeträgen erstellen.',
    },
    macshelf: {
      category: 'macOS-App',
      subtitle: 'Zwischenablage-Regal in der Menüleiste',
      description:
        'Eine native macOS-Menüleisten-App, die Text und Bilder behält, die du kopierst: durchsuchbar, tastaturorientiert, ohne Dock-Icon und ohne Konto.',
      stack: 'Swift 6',
      platform: 'macOS 14+',
      price: 'Kostenlos',
      action: 'Laden',
      heroTitle: 'Nie wieder verlieren, was du kopiert hast.',
      heroText:
        'Cmd+Shift+V öffnet ein Popover aus der Menüleiste mit deiner Zwischenablage-Historie: Text und Bilder, bereit zum Zurücklegen.',
    },
    portkill: {
      category: 'CLI-App',
      subtitle: 'Blockierten TCP-Port mit einem Befehl freigeben',
      description:
        'Ein CLI-Tool für macOS und Linux, das den Prozess findet, der einen Port belegt, und ihn beendet. Vorschau mit --dry-run, Portbereiche durchgehen, offene Ports auflisten oder dieselbe Logik in einer lokalen Web-UI öffnen.',
      stack: 'TypeScript',
      platform: 'macOS / Linux',
      price: 'Kostenlos',
      action: 'Laden',
      heroTitle: 'Finde heraus, wer deinen Port blockiert.',
      heroText:
        'Sieh nach, welcher Prozess einen Port belegt, prüfe ihn, bevor du ein Signal sendest, und stoppe ihn dann: im Terminal oder in einer lokalen Web-UI.',
    },
    penote: {
      category: 'CLI / DevTool',
      subtitle: 'Programmiernotizen für Menschen und Agenten',
      description:
        'Eine Markdown-Bibliothek mit Notizen zu Java, JavaScript, Python, SQL und MongoDB, erschlossen über ein CLI, ein TUI und eine lokale Web-UI ohne Abhängigkeiten. Über AGENTS.md lesen und erweitern auch KI-Agenten dieselben Dateien.',
      stack: 'JavaScript',
      platform: 'CLI',
      price: 'Kostenlos',
      action: 'Laden',
      heroTitle: 'Notizen, die Menschen und Agenten lesen.',
      heroText:
        'Notizen zu Java, JavaScript, Python, SQL und MongoDB liegen als reines Markdown vor. Du öffnest sie im Terminal, im TUI oder im Browser, ohne Build-Schritt und ohne Laufzeitabhängigkeiten.',
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
    'social-web': {
      category: 'Soziale Plattform',
      subtitle: 'Ein Ort für Gespräche und Communities, nur mit Einladung',
      description:
        'Eine responsive soziale Plattform zum Teilen von Beiträgen, zum Antworten auf Gespräche und zum Entdecken von Menschen über Community-Feeds. Beiträge unterstützen Emoji, GIFs sowie YouTube- und Spotify-Vorschauen.',
      stack: 'React / TanStack Router / Bun / Supabase',
      platform: 'Web',
      price: 'Nur auf Einladung',
      action: 'Auf GitHub ansehen',
      heroTitle: 'Gespräche an einem Ort, der verbindet.',
      heroText:
        'Ein sozialer Raum nur mit Einladung: mit fokussierten Feeds, Community-Entdeckung und einer responsiven Oberfläche für Desktop und Mobilgeräte.',
    },
    skadi: {
      category: 'CLI / Self-hosted',
      subtitle: 'Abo-Tracking auf einer PocketBase, die ohnehin läuft',
      description:
        'Drei Migrationen, zwei Hook-Dateien und eine statische Seite, kopiert in eine bestehende PocketBase: kein Container, keine zweite Datenbank, kein zusätzlicher Port. Ein eingefügter Link wird serverseitig zu Name und Logo aufgelöst, Abbuchungstermine rücken von selbst weiter, und Summen erscheinen in TRY, USD, EUR oder GBP, wobei veraltete Kurse als solche gekennzeichnet statt verschwiegen werden.',
      stack: 'JavaScript / PocketBase',
      platform: 'Self-hosted',
      price: 'Kostenlos',
      action: 'Laden',
      heroTitle: 'Abos auf dem Server, den du schon hast.',
      heroText:
        'Skadi ist keine Anwendung, die du deployst. Es sind ein paar Dateien in einer PocketBase-Instanz, die Datenbank, Auth und Backups längst selbst betreibt.',
    },
    nors: {
      category: 'CLI / Self-hosted',
      subtitle: 'Persönliche Ops-Notizen auf einer PocketBase, die ohnehin läuft',
      description:
        'Eine Migration und eine statische Seite, kopiert in eine bestehende PocketBase: kein Container, keine zweite Datenbank, kein zusätzlicher Port. Notizen liegen als Karten in vier Kinds vor, mit Markdown- und Mermaid-Rendering, Sortierung per Drag-and-drop, wiederholbaren Seed-Upsets und Warnung bei ungespeicherten Änderungen.',
      stack: 'SolidJS / PocketBase',
      platform: 'Self-hosted',
      price: 'Kostenlos',
      action: 'Laden',
      heroTitle: 'Ops-Notizen auf dem Server, den du schon hast.',
      heroText:
        'Nors ist keine Anwendung, die du deployst. Es sind eine Migration und eine statische Seite in einer PocketBase-Instanz, die Datenbank, Auth und Backups längst selbst betreibt.',
    },
    dizey: {
      category: 'Website',
      subtitle: 'Website für ein Softwarestudio',
      description:
        'Die Website von Dizey Yazılım, einem kleinen Entwicklungsteam für Web-Plattformen, Cloud-Infrastruktur und Datensysteme. Sie zeigt, was das Team macht, wie es arbeitet und wie man es erreicht.',
      stack: 'Web',
      platform: 'Browser',
      price: 'Kostenlos',
      action: 'Ansehen',
      heroTitle: 'Skalierbare Software, sauber gebaute Infrastruktur.',
      heroText:
        'Dizey ist die Website eines kleinen Entwicklungsteams, das Software von der ersten Idee bis in die Produktion bringt.',
    },
    portfolio: {
      category: 'Website',
      subtitle: 'Die Seite, die du gerade ansiehst',
      description:
        'Diese Seite selbst. Eine React-App mit drei Sprachen, hellem und dunklem Theme und einer eigenen Seite für jedes Projekt. Keine i18n-Bibliothek, kein Router, kein CSS-Framework. Alles ist von Hand geschrieben und der Quellcode ist offen.',
      stack: 'React / TypeScript',
      platform: 'Browser',
      price: 'Open Source',
      action: 'Website öffnen',
      heroTitle: 'Eine ruhige, von Hand gebaute persönliche Seite.',
      heroText:
        'Eine Seite darüber, wer ich bin, wie ich arbeite und welche kleinen Produkte ich baue, in drei Sprachen und mit kurzer Abhängigkeitsliste.',
    },
    alice: {
      category: 'Website',
      subtitle: 'Landingpage für eine Hochzeitslocation',
      description:
        'Ein Website-Konzept für eine Hochzeitslocation: Atmosphäre, Leistungen und alles Wichtige, ohne Schnörkel.',
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
      subtitle: 'Landingpage für eine Handarbeitsmanufaktur',
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
    hezarfen: {
      category: 'Lernplattform',
      subtitle: 'Schul-Dashboard und Lernportal',
      description:
        'Das Frontend des Hezarfen-Campus- und Lernmanagementsystems: Status-Dashboard sowie rollenbasierte Lern- und Schulverwaltungsabläufe auf Türkisch und Englisch.',
      stack: 'SolidJS / TanStack Router / Tailwind',
      platform: 'Web',
      price: 'Teamprojekt',
      action: 'Demo öffnen',
      heroTitle: 'Ein Campus, der im Browser läuft.',
      heroText:
        'Schul-Dashboard und Lernportal für Hezarfen: Kurse, Hausaufgaben, Prüfungen und KI-Lernwerkzeuge in rollenbasierten Abläufen.',
    },
  },
} satisfies Messages

export default de
