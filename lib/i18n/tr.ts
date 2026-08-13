import type { Messages } from './types'

const tr = {
  localeLabel: 'Türkçe',
  meta: {
    title: 'Burak Boduroğlu',
    description:
      'Burak Boduroğlu’nun sade kişisel sitesi; React ve Vite ile geliştirilmiş gömülü bir uygulama vitrini içerir.',
  },
  nav: {
    apps: 'Uygulamalar',
    languageAria: 'Dil',
  },
  hero: {
    photoAlt: 'Burak Boduroğlu',
    contactLinksAria: 'İletişim bağlantıları',
    connect: 'Bağlantı',
    reachOut: 'İletişime geç',
  },
  profile: {
    location: 'Türkiye / Uzaktan',
    intro:
      'Belirsiz fikirleri sade, güvenilir ve kullanışlı yazılıma dönüştürmeyi seven bir yazılım mühendisiyim. Ürün döngüsünün tamamında çalışmaktan keyif alıyorum — problemi anlamak, deneyimi şekillendirmek, sistemi kurmak ve net ve güvenilir hissettirene kadar inceltmek.',
    aiIntro:
      'Çalışma tarzım pratik ve bilinçli: bağlamı tanımla, küçük adımlarla ilerle, sistemi gözlemlenebilir tut ve modern araçları düşünerek kullan. Anlaşılması kolay, geliştirilmesi kolay ve işletmesi sakin yazılımı önemsiyorum.',
    reachOutPre: 'İş birliklerine, geliştirici araçlarına ve net sohbetlere açığım —',
    links: {
      email: 'E-posta gönder',
      linkedin: 'LinkedIn',
      devto: 'DEV.to',
      github: 'GitHub',
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
    sectionAria: 'Gömülü uygulama vitrini',
    navAria: 'Uygulama gezinmesi',
    openNav: 'Menüyü aç',
    closeNav: 'Menüyü kapat',
    searchPlaceholder: 'Ara',
    searchAria: 'Uygulamalarda ara',
    discover: 'Keşfet',
    categoriesHeading: 'Kategoriler',
    all: 'Tümü',
    allApps: 'Tüm Uygulamalar',
    featured: 'Öne çıkan',
    filterAria: 'Kategoriye göre filtrele',
    searchResults: (query) => `"${query}" için sonuçlar`,
    appCount: (count) => `${count} uygulama`,
    resultCount: (count) => `${count} sonuç`,
    clearFilter: 'Filtreleri temizle',
    emptyTitle: 'Uygulama bulunamadı',
    emptyBody: 'Uygulama adı, kategori, platform veya dil ile aramayı deneyin.',
    prevPage: 'Önceki sayfa',
    nextPage: 'Sonraki sayfa',
    pageOf: (current, total) => `Sayfa ${current} / ${total}`,
    back: 'Geri',
    viewOnGitHub: 'GitHub’da görüntüle',
    preview: 'Önizleme',
    description: 'Açıklama',
    stats: {
      stars: 'Yıldız',
      forks: 'Çatal',
      price: 'Fiyat',
      platform: 'Platform',
      language: 'Dil',
    },
  },
  contact: {
    title: 'Konuşalım',
    intro:
      'Kapsamı net ürünler, pratik yapay zekâ destekli mühendislik akışları, geliştirici araçları ve dışarıdan sade görünürken içeride sağlam kalan yazılımlar ilgimi çekiyor.',
    sendEmail: 'E-posta gönder',
    topics: [
      {
        title: 'Net ve güvenilir yazılım geliştiriyorum',
        bullets: [
          'Problemin gerçek, kapsamın net olduğu ve sonucun kullanıcılar için sade hissettirmesi gereken ürünler ve iç araçlar üzerinde çalışmayı seviyorum.',
          'Hem teknik yönü hem de etrafındaki ürün detaylarını birlikte şekillendirebildiğimde en faydalı olduğumu düşünüyorum.',
        ],
      },
      {
        title: 'Geliştirici araçlarını ve işe yarar yardımcıları önemsiyorum',
        bullets: [
          'MacShelf ve .portkill gibi projeler sevdiğim yazılım türünü yansıtıyor: odaklı, pratik ve gerçek iş akışı sürtünmesi etrafında kurulmuş.',
          'Geliştiriciler, ekipler veya teknik operatörler için araç geliştiriyorsanız duymaktan memnuniyet duyarım.',
        ],
      },
      {
        title: 'Yapay zekâyı mühendislik sisteminin bir parçası olarak kullanıyorum',
        bullets: [
          'Bağlam mühendisliği, ajans akışları, inceleme döngüleri ve yapay zekâ destekli geliştirmeyi daha güvenilir kılacak yollar ilgimi çekiyor.',
          'Amaç mühendislik muhakemesini atlamak değil, iyi mühendislik işini daha hızlı ve tekrarlanabilir hale getirmek.',
        ],
      },
      {
        title: 'Teknik notlar yazıyor ve paylaşıyorum',
        bullets: [
          'DEV.to üzerinde pratik programlama notları ve yazılım mühendisliği yazıları yayımlıyorum.',
          'Geliştirirken öğrendiklerimi diğer geliştiricilere faydalı olacak notlara dönüştürmekten keyif alıyorum.',
        ],
      },
      {
        title: 'Düşünceli sohbetlere açığım',
        bullets: [
          'Yazılım, geliştirici araçları, yapay zekâ destekli mühendislik akışları ya da odaklı bir ürün fikri hakkında konuşmak isterseniz yazın.',
          'Bana ulaşmanın en iyi yolu e-posta: info@burakboduroglu.com.tr.',
        ],
      },
    ],
  },
  footer: {
    crafted: (name) => [`${name} tarafından`, 'ile yapıldı'],
  },
  appCopy: {
    macshelf: {
      category: 'macOS Uygulaması',
      subtitle: 'macOS için yerel pano rafı',
      description:
        'Metin ve görseller için yerel bir macOS pano rafı. Faydalı parçacıkları akışı bozmadan elinizin altında tutmak için küçük bir üretkenlik aracı olarak geliştirildi.',
      stack: 'Swift',
      platform: 'macOS',
      price: 'Ücretsiz',
      action: 'İndir',
      heroTitle: 'Panonuz her zaman göz önünde.',
      heroText:
        'MacShelf, metin ve görsel parçacıklarını Mac’inizde hazır tutar — sade, yerel ve yolunuza çıkmadan.',
    },
    portkill: {
      category: 'CLI Uygulaması',
      subtitle: 'Takılı TCP portlarını tek komutla serbest bırakın',
      description:
        'macOS ve Linux için TCP portlarını dinleyen süreçleri sonlandıran bir CLI; kuru çalıştırma, port aralıkları, listeleme modu ve isteğe bağlı yerel web arayüzü ile.',
      stack: 'TypeScript',
      platform: 'macOS / Linux',
      price: 'Ücretsiz',
      action: 'İndir',
      heroTitle: 'Komut ezberlemeden portları serbest bırakın.',
      heroText:
        'Porta bağlı süreçleri hızlı ve güvenli şekilde bulup sonlandırmak için odaklı bir geliştirici aracı.',
    },
    'dev-notes': {
      category: 'CLI / Geliştirici Aracı',
      subtitle: 'Komut satırından geliştirici notları',
      description:
        'Pratik geliştirme notlarını terminale yakın tutmak için bir CLI ve geliştirici aracı; böylece komutlar, parçacıklar ve uygulama detayları kolayca kaydedilir ve tekrar bulunur.',
      stack: 'Geliştirici Aracı',
      platform: 'CLI',
      price: 'Ücretsiz',
      action: 'İndir',
      heroTitle: 'Geliştirici notlarını işin geçtiği yerde tutun.',
      heroText:
        'DevNotes, geliştirirken başvurduğunuz komutları, parçacıkları ve bağlamı kaydetmek için terminal dostu bir not aracıdır.',
    },
    bdash: {
      category: 'Web Uygulaması',
      subtitle: 'Küçük işletme yönetim platformu',
      description:
        'BDash; ürünleri, stoğu, maliyetleri, müşterileri ve siparişleri tek bir net operasyon yüzeyinde tutan odaklı bir işletme yönetim platformudur. Hızlı bir TanStack Start arayüzünü Supabase Auth ve Postgres ile birleştirerek küçük ekiplere, basit iş akışlarını kurumsal karmaşıklığın altına gömmeden günlük iş için pratik bir panel sunar.',
      stack: 'TypeScript',
      platform: 'Web',
      price: 'Özel',
      action: 'Görüntüle',
      heroTitle: 'Küçük işletme operasyonları için sakin bir kontrol yüzeyi.',
      heroText:
        'BDash; ürünleri, stoğu, müşterileri, maliyetleri ve siparişleri TanStack Start, Supabase ve Bun ile kurulmuş hızlı bir web paneline taşır.',
    },
    alice: {
      category: 'Web Uygulaması',
      subtitle: 'Bir düğün mekânı için tanıtım sayfası',
      description:
        'Bir düğün mekânı için özenli bir tanıtım sayfası konsepti; mekânı, atmosferi ve önemli bilgileri organizasyonunu planlayan çiftlere net biçimde sunmak üzere tasarlandı.',
      stack: 'Web',
      platform: 'Tarayıcı',
      price: 'Ücretsiz',
      action: 'Görüntüle',
      heroTitle: 'Bir düğün mekânı için sıcak bir tanıtım sayfası.',
      heroText:
        'Alice, bir düğün mekânını sakin, zarif ve dönüşüm odaklı bir sunumla öne çıkarmak için tasarlanmış temiz bir tanıtım sitesi konseptidir.',
    },
    'betus-design': {
      category: 'Web Uygulaması',
      subtitle: 'El yapımı tasarım atölyesi için tanıtım sayfası',
      description:
        'El yapımı bir tasarım atölyesi için özenli bir tanıtım sayfası konsepti; ürünleri, atmosferi ve önemli bilgileri alışverişini planlayan müşterilere net biçimde sunmak üzere tasarlandı.',
      stack: 'Web',
      platform: 'Tarayıcı',
      price: 'Ücretsiz',
      action: 'Görüntüle',
      heroTitle: 'El yapımı tasarım atölyesi için sıcak bir tanıtım sayfası.',
      heroText:
        'Betus Design, el yapımı bir tasarım atölyesini sakin, zarif ve dönüşüm odaklı bir sunumla öne çıkarmak için tasarlanmış temiz bir tanıtım sitesi konseptidir.',
    },
  },
} satisfies Messages

export default tr
