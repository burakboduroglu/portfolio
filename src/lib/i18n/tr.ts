import type { Messages } from './types'

const tr = {
  localeLabel: 'Türkçe',
  meta: {
    title: 'Burak Boduroğlu',
    description:
      'Burak Boduroğlu’nun kişisel sitesi; yaptığı işler, uygulamalar ve teknik notlar.',
  },
  nav: {
    languageAria: 'Dil',
  },
  hero: {
    photoAlt: 'Burak Boduroğlu',
    contactLinksAria: 'İletişim bağlantıları',
    connect: 'İletişim',
    reachOut: 'İletişime geç',
  },
  profile: {
    intro:
      'Yazılım mühendisiyim. Dağınık fikirleri sade, kullanışlı ve gerçekten işe yarayan ürünlere dönüştürmeyi seviyorum. Problemi anlamaktan ürünü yayına almaya kadar sürecin içinde olmayı tercih ederim. Küçük adımlarla ilerler, doğru araçları kullanır ve okunabilir, sürdürülebilir kod yazmaya önem veririm.',
    aiIntro: '',
    links: {
      email: 'E-posta',
      linkedin: 'LinkedIn',
      devto: 'DEV.to',
      github: 'GitHub',
      producthunt: 'Product Hunt',
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
    emptyBody: 'Uygulama adı, kategori, platform veya dil ile aramayı dene.',
    prevPage: 'Önceki sayfa',
    nextPage: 'Sonraki sayfa',
    pageOf: (current, total) => `Sayfa ${current} / ${total}`,
    back: 'Geri',
    viewOnGitHub: 'GitHub’da aç',
    preview: 'Önizleme',
    description: 'Açıklama',
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
      'Kapsamı belli ürünler, geliştirici araçları ve iyi düşünülmüş mühendislik süreçleri ilgimi çekiyor. Dışarıdan basit görünen ama işini güvenilir biçimde yapan yazılımları seviyorum.',
    topics: [
      {
        title: 'Ürünü ve kodu birlikte düşünüyorum',
        bullets: [
          'Gerçek bir ihtiyacı çözen, kapsamı belli ürünler ve iç araçlar üzerinde çalışmayı seviyorum.',
          'Problemi, kullanıcıyı ve teknik çözümü birlikte düşündüğüm projelerde daha iyi iş çıkarıyorum.',
        ],
      },
      {
        title: 'Küçük ama işe yarayan araçlar',
        bullets: [
          'MacShelf ve .portkill, sevdiğim yaklaşımı iyi anlatıyor: tek bir işi yapan ve o işi düzgün yapan araçlar.',
          'Geliştiricilerin veya ekiplerin günlük işini kolaylaştıran bir şey yapıyorsan konuşmak isterim.',
        ],
      },
      {
        title: 'Yapay zekâyı işin içinde kullanıyorum',
        bullets: [
          'Context engineering, ajan akışları ve kod inceleme süreçleri üzerine düşünüyorum.',
          'Yapay zekâ benim için düşünmenin yerine geçen bir araç değil; iyi bir mühendislik sürecini hızlandıran bir yardımcı.',
        ],
      },
      {
        title: 'Öğrendiklerimi yazıyorum',
        bullets: [
          'DEV.to’da programlama ve yazılım mühendisliği üzerine yazıyorum.',
          'Bir şey inşa ederken öğrendiklerimi, daha sonra dönüp bakabileceğim ve başkasının da işine yarayabilecek notlara çeviriyorum.',
        ],
      },
      {
        title: 'Konuşmak istersen yaz',
        bullets: [
          'Yazılım, geliştirici araçları, yapay zekâ veya üzerinde çalıştığın bir ürün hakkında konuşabiliriz.',
          'Bana ulaşmanın en kolay yolu e-posta: info@burakboduroglu.com.tr.',
        ],
      },
    ],
  },
  footer: {
    crafted: (name) => [`${name} tarafından`, 'yapıldı'],
  },
  appCopy: {
    macshelf: {
      category: 'macOS Uygulaması',
      subtitle: 'macOS için pano yöneticisi',
      description:
        'Daha önce kopyaladığın metin ve görselleri saklayan macOS uygulaması. İhtiyacın olduğunda aradığını kolayca bulup tekrar kullanmanı sağlar.',
      stack: 'Swift',
      platform: 'macOS',
      price: 'Ücretsiz',
      action: 'İndir',
      heroTitle: 'Panondaki şeyleri kaybetme.',
      heroText:
        'MacShelf, kopyaladığın şeyleri kaybetmemen için arka planda çalışır ve ihtiyaç olduğunda hepsini elinin altında tutar.',
    },
    portkill: {
      category: 'CLI Uygulaması',
      subtitle: 'Kullanılan TCP portlarını tek komutla kapat',
      description:
        'macOS ve Linux’ta bir portu kullanan süreci bulup kapatmaya yarayan bir CLI. İşlemi uygulamadan önce kontrol etmek, port aralığı taramak ve açık portları listelemek mümkün.',
      stack: 'TypeScript',
      platform: 'macOS / Linux',
      price: 'Ücretsiz',
      action: 'İndir',
      heroTitle: 'Portu kullanan süreci hemen bul.',
      heroText:
        'Bir portu hangi sürecin kullandığını bulup gerektiğinde tek komutla kapat.',
    },
    'dev-notes': {
      category: 'CLI / Geliştirici Aracı',
      subtitle: 'Geliştirici notlarını terminalde tut',
      description:
        'Komutları, kod parçalarını ve proje notlarını terminalden çıkmadan kaydetmeni ve ihtiyaç olduğunda bulmanı sağlayan bir CLI.',
      stack: 'Geliştirici Aracı',
      platform: 'CLI',
      price: 'Ücretsiz',
      action: 'İndir',
      heroTitle: 'Notların terminalden uzaklaşmasın.',
      heroText:
        'DevNotes, geliştirirken sık kullandığın komutları, kod parçalarını ve proje detaylarını tek yerde tutar.',
    },
    bdash: {
      category: 'SaaS',
      subtitle: 'İşletmeler için yönetim paneli',
      description:
        'BDash; ürün, stok, maliyet, müşteri ve sipariş takibini tek panelde bir araya getirir. Küçük ekiplerin günlük işlerini daha kolay takip edebilmesi için tasarlandı.',
      stack: 'TypeScript',
      platform: 'Web',
      price: 'Özel',
      action: 'Görüntüle',
      heroTitle: 'Küçük işletmenin bütün işleri tek yerde.',
      heroText:
        'BDash, işletmenin günlük operasyonlarını tek bir web panelinden takip etmeni sağlar.',
    },
    dizey: {
      category: 'Web Page',
      subtitle: 'Yazılım stüdyosu için web sitesi',
      description:
        'Web platformları, bulut altyapısı ve veri sistemleri kuran Dizey Yazılım ekibinin web sitesi. Verilen hizmetleri, ekibin çalışma biçimini ve iletişim bilgilerini sade bir şekilde sunar.',
      stack: 'Web',
      platform: 'Tarayıcı',
      price: 'Ücretsiz',
      action: 'Görüntüle',
      heroTitle: 'Ölçeklenebilir yazılım, doğru kurgulanmış altyapı.',
      heroText:
        'Dizey, yazılımı ilk fikirden üretime kadar birlikte taşıyan küçük bir mühendislik ekibinin web sitesi.',
    },
    alice: {
      category: 'Web Page',
      subtitle: 'Düğün mekânı için tanıtım sayfası',
      description:
        'Bir düğün mekânını tanıtmak için hazırlanmış web sitesi konsepti. Mekânın atmosferini, hizmetlerini ve önemli bilgileri sade bir şekilde sunar.',
      stack: 'Web',
      platform: 'Tarayıcı',
      price: 'Ücretsiz',
      action: 'Görüntüle',
      heroTitle: 'Mekânı daha ilk bakışta hissettir.',
      heroText:
        'Alice, bir düğün mekânının atmosferini ve sunduğu deneyimi öne çıkaran sade bir web sitesi konsepti.',
    },
    'betus-design': {
      category: 'Web Page',
      subtitle: 'El yapımı atölye için tanıtım sayfası',
      description:
        'El yapımı ürünler üreten bir atölye için hazırlanmış web sitesi konsepti. Ürünleri, atölyenin hikâyesini ve önemli bilgileri sade bir şekilde sunar.',
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
