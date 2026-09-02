import type { Messages } from './types'

const tr = {
  localeLabel: 'Türkçe',
  meta: {
    title: 'Burak Boduroğlu — Yazılım Mühendisi',
    description:
      'Burak Boduroğlu — Yazılım Mühendisi. Kişisel web sitesi; geliştirdiği uygulamalar, projeler, teknik yazılar ve geliştirici profilleri.',
  },
  nav: {
    languageAria: 'Dil',
    themeAria: 'Tema',
    themeDark: 'Koyu mod',
    themeLight: 'Açık mod',
  },
  hero: {
    photoAlt: 'Burak Boduroğlu',
    contactLinksAria: 'İletişim bağlantıları',
    connect: 'İletişim',
    reachOut: 'İletişime geç',
  },
  profile: {
    intro:
      'Yazılım mühendisiyim. Karmaşık fikirleri sade, işe yarayan ürünlere dönüştürmeyi seviyorum. Problemi ele almaktan ürünü yayına almaya kadar sürecin her aşamasında olmayı tercih ederim. Küçük adımlarla ilerlerim, işe uygun aracı seçerim; okunması da bakımı da kolay kod yazmaya önem veririm.',
    aiIntro: '',
    links: {
      email: 'E-posta',
      linkedin: 'LinkedIn',
      devto: 'DEV.to',
      github: 'GitHub',
      substack: 'Substack',
      x: 'X',
      reddit: 'Reddit',
      youtube: 'YouTube',
      producthunt: 'Product Hunt',
      kick: 'Kick',
      figma: 'Figma',
      bsky: 'Bluesky',
      gdev: 'Google Dev',
      microsoft: 'MS Learn',
      aws: 'AWS Builder',
      lovable: 'Lovable',
      cursor: 'Cursor',
      medium: 'Medium',
      npm: 'npm',
      framer: 'Framer',
    },
  },
  categories: {
    macos: 'macOS Uygulamaları',
    web: 'Web Uygulamaları',
    developer: 'Geliştirici Araçları',
    cli: 'CLI Uygulamaları',
    productivity: 'Üretkenlik',
  },
  apps: {
    title: 'Projeler',
    sectionAria: 'Uygulama vitrini',
    navAria: 'Uygulama menüsü',
    openNav: 'Menüyü aç',
    closeNav: 'Menüyü kapat',
    searchPlaceholder: 'Ara',
    searchAria: 'Uygulamalarda ara',
    discover: 'Keşfet',
    categoriesHeading: 'Kategoriler',
    all: 'Tümü',
    allApps: 'Tüm uygulamalar',
    featured: 'Öne çıkan',
    filterAria: 'Kategoriye göre filtrele',
    searchResults: (query) => `"${query}" için sonuçlar`,
    appCount: (count) => `${count} uygulama`,
    resultCount: (count) => `${count} sonuç`,
    clearFilter: 'Filtreleri temizle',
    emptyTitle: 'Uygulama bulunamadı',
    emptyBody: 'Uygulama adı, kategori, platform ya da dil ile aramayı dene.',
    prevPage: 'Önceki sayfa',
    nextPage: 'Sonraki sayfa',
    pageOf: (current, total) => `Sayfa ${current} / ${total}`,
    back: 'Geri',
    viewOnGitHub: 'GitHub’da aç',
    preview: 'Önizleme',
    description: 'Açıklama',
    viewDetails: 'Detaylar',
    detailAria: (title) => `${title} proje detayı`,
    openSite: 'Siteyi aç',
    install: 'Kurulum',
    copyCommand: 'Komutu kopyala',
    commandCopied: 'Kopyalandı',
    documentation: 'Dokümantasyon',
    readmeFallback: 'Bu doküman henüz Türkçeye çevrilmedi — İngilizcesi gösteriliyor.',
    readmeError: 'Doküman yüklenemedi.',
    missingTitle: 'Böyle bir proje yok',
    missingBody: 'Aradığın sayfa taşınmış ya da hiç var olmamış olabilir.',
    backToProjects: 'Projeler',
    stats: {
      stars: 'Yıldız',
      forks: 'Fork',
      price: 'Fiyat',
      platform: 'Platform',
      language: 'Dil',
    },
  },
  contact: {
    title: 'Konuşalım',
    intro:
      'Kapsamı belli ürünler, geliştirici araçları ve iyi kurgulanmış mühendislik süreçleri ilgimi çekiyor. Dışarıdan sade görünen ama altında sağlam duran yazılımları seviyorum.',
    topics: [
      {
        title: 'Ürünü ve kodu birlikte düşünürüm',
        bullets: [
          'Gerçek bir ihtiyaca dokunan, kapsamı net ürünler ve iç araçlar üzerinde çalışmayı seviyorum.',
          'Problemi, kullanıcıyı ve teknik çözümü aynı anda düşünebildiğim işlerde çok daha iyi iş çıkarıyorum.',
        ],
      },
      {
        title: 'Küçük ama işini yapan araçlar',
        bullets: [
          'MacShelf ve .portkill sevdiğim yaklaşımı iyi özetliyor: tek bir işi yapan, onu da düzgün yapan araçlar.',
          'Geliştiricilerin ya da ekiplerin günlük işini kolaylaştıran bir şey yapıyorsan seve seve konuşurum.',
        ],
      },
      {
        title: 'Yapay zekâyı işin içine katıyorum',
        bullets: [
          'Context engineering, ajan akışları ve kod inceleme süreçleri üzerine kafa yoruyorum.',
          'Yapay zekâ düşünmenin yerine geçmiyor; iyi kurulmuş bir mühendislik sürecini hızlandırıyor.',
        ],
      },
      {
        title: 'Öğrendiklerimi yazıyorum',
        bullets: [
          'Substack ve DEV.to’da programlama ve yazılım mühendisliği üzerine yazıyorum.',
          'Bir şey geliştirirken öğrendiklerimi, sonradan dönüp bakabileceğim; belki başkasının da işine yarayacak notlara çeviriyorum.',
        ],
      },
      {
        title: 'Konuşmak istersen yaz',
        bullets: [
          'Yazılım, geliştirici araçları, yapay zekâ ya da üzerinde çalıştığın bir ürün; ne olursa konuşabiliriz.',
          'Bana ulaşmanın en kolay yolu e-posta: info@burakboduroglu.com.tr.',
        ],
      },
    ],
  },
  articles: {
    sectionAria: 'Yazılar',
    title: 'Yazılar',
    readOnSubstack: 'Substack’te oku',
  },
  developerProfiles: {
    sectionAria: 'Geliştirici profilleri ve platformlar',
    title: 'Geliştirici Profilleri & Topluluklar',
    subtitle: 'Bulut, yapay zekâ, kodlama ve tasarım ekosistemlerindeki profillerim.',
  },
  toast: {
    emailCopied: 'E-posta adresi panoya kopyalandı!',
  },
  footer: {
    shortcutTheme: 'tema',
    shortcutLang: 'dil',
    crafted: (name) => [`${name} tarafından`, 'yapıldı'],
  },
  appCopy: {
    macshelf: {
      category: 'macOS Uygulaması',
      subtitle: 'Menü çubuğunda clipboard rafı',
      description:
        'Kopyaladığın metin ve görselleri tutan yerel bir macOS menü çubuğu uygulaması — aranabilir, klavye odaklı, Dock ikonu yok, hesap yok.',
      stack: 'Swift 6',
      platform: 'macOS 14+',
      price: 'Ücretsiz',
      action: 'İndir',
      heroTitle: 'Kopyaladığın hiçbir şey kaybolmasın.',
      heroText:
        'Cmd+Shift+V ile menü çubuğundan clipboard geçmişin açılır — metin ve görseller, tekrar panoya koymaya hazır.',
    },
    portkill: {
      category: 'CLI Uygulaması',
      subtitle: 'Takılı TCP portunu tek komutla boşalt',
      description:
        'macOS ve Linux’ta bir portu tutan süreci bulup kapatan bir CLI. --dry-run ile önizle, aralık tara, açık portları listele ya da aynı mantığı yerel bir web arayüzünde aç.',
      stack: 'TypeScript',
      platform: 'macOS / Linux',
      price: 'Ücretsiz',
      action: 'İndir',
      heroTitle: 'Portu kim tutuyor, hemen gör.',
      heroText:
        'Bir portu hangi sürecin tuttuğunu gör, sinyal göndermeden önce önizle, sonra terminalden ya da yerel web arayüzünden kapat.',
    },
    penote: {
      category: 'CLI / Geliştirici Aracı',
      subtitle: 'Ajanların da insanların da okuyabildiği programlama notları',
      description:
        'Java, JavaScript, Python, SQL ve MongoDB notlarını Markdown olarak tutan bir kitaplık; sıfır bağımlılıklı CLI, TUI ve yerel web arayüzüyle gezilir. AGENTS.md sayesinde kod ajanları da aynı dosyaları okuyup genişletebilir.',
      stack: 'JavaScript',
      platform: 'CLI',
      price: 'Ücretsiz',
      action: 'İndir',
      heroTitle: 'Hem insanın hem ajanın okuduğu notlar.',
      heroText:
        'Java, JavaScript, Python, SQL ve MongoDB notları düz Markdown olarak duruyor — terminalden, TUI’den ya da tarayıcıdan aç; derleme adımı da çalışma zamanı bağımlılığı da yok.',
    },
    bdash: {
      category: 'SaaS',
      subtitle: 'İşletmeler için yönetim paneli',
      description:
        'BDash; ürün, stok, maliyet, müşteri ve sipariş takibini tek panelde toplar. Küçük ekiplerin günlük işlerini gereksiz karmaşaya girmeden takip edebilmesi için tasarlandı.',
      stack: 'TypeScript',
      platform: 'Web',
      price: 'Özel',
      action: 'Görüntüle',
      heroTitle: 'İşletmenin tamamı tek yerde.',
      heroText:
        'BDash ile işletmenin günlük operasyonlarını tek bir web panelinden takip edersin.',
    },
    dizey: {
      category: 'Web Sitesi',
      subtitle: 'Yazılım stüdyosu için web sitesi',
      description:
        'Web platformları, bulut altyapısı ve veri sistemleri kuran Dizey Yazılım’ın web sitesi. Ekibin verdiği hizmetleri, çalışma biçimini ve iletişim bilgilerini sade bir dille anlatıyor.',
      stack: 'Web',
      platform: 'Tarayıcı',
      price: 'Ücretsiz',
      action: 'Görüntüle',
      heroTitle: 'Ölçeklenebilir yazılım, doğru kurgulanmış altyapı.',
      heroText:
        'Dizey, yazılımı ilk fikirden üretime kadar taşıyan küçük bir mühendislik ekibinin web sitesi.',
    },
    portfolio: {
      category: 'Web Sitesi',
      subtitle: 'Şu an baktığın site',
      description:
        'Bu sitenin kendisi. Tek bir React uygulaması; üç dil, açık ve koyu tema, her proje için ayrı bir sayfa. Ne i18n kütüphanesi var ne router ne de CSS framework’ü — hepsi elle yazıldı ve kaynağı açık.',
      stack: 'React / TypeScript',
      platform: 'Tarayıcı',
      price: 'Açık kaynak',
      action: 'Siteyi aç',
      heroTitle: 'Elle yazılmış, sade bir kişisel site.',
      heroText:
        'Kim olduğumu, nasıl çalıştığımı ve ürettiğim küçük ürünleri anlatan bir sayfa — üç dilde, bağımlılığı az tutularak.',
    },
    alice: {
      category: 'Web Sitesi',
      subtitle: 'Düğün mekânı için tanıtım sayfası',
      description:
        'Bir düğün mekânı için hazırlanmış web sitesi konsepti. Mekânın atmosferini, hizmetlerini ve bilinmesi gerekenleri sade bir şekilde aktarıyor.',
      stack: 'Web',
      platform: 'Tarayıcı',
      price: 'Ücretsiz',
      action: 'Görüntüle',
      heroTitle: 'Mekânı ilk bakışta hissettir.',
      heroText:
        'Alice, bir düğün mekânının atmosferini ve sunduğu deneyimi öne çıkaran sade bir web sitesi konsepti.',
    },
    'betus-design': {
      category: 'Web Sitesi',
      subtitle: 'El yapımı atölye için tanıtım sayfası',
      description:
        'El yapımı ürünler üreten bir atölye için hazırlanmış web sitesi konsepti. Ürünleri, atölyenin hikâyesini ve bilinmesi gerekenleri sade bir şekilde aktarıyor.',
      stack: 'Web',
      platform: 'Tarayıcı',
      price: 'Ücretsiz',
      action: 'Görüntüle',
      heroTitle: 'El emeğinin hikâyesini anlat.',
      heroText:
        'Betus Design, el yapımı bir atölyenin ürünlerini ve hikâyesini öne çıkaran sade bir web sitesi konsepti.',
    },
  },
} satisfies Messages

export default tr
