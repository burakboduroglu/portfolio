import type { Locale } from '../i18n/types'
import type { AppId } from '../types/app'

/**
 * Project screenshots, served from public/screenshots/<id>/ as WebP.
 *
 * Copies are local on purpose: a README image on raw.githubusercontent.com can
 * be renamed or deleted in its repo, and the gallery would break silently.
 * Detail pages show these files only — README figures are stripped when the
 * document is rendered. The sites without a repo were captured at 1440×900.
 *
 * `width` and `height` are the file's real pixel size — the gallery reserves
 * the box before the image arrives, so nothing shifts when it loads. Every alt
 * text is required in every language; a missing one is a compile error.
 */
export type Screenshot = {
  src: string
  width: number
  height: number
  alt: Record<Locale, string>
}

const shot = (id: AppId, file: string, width: number, height: number, alt: Record<Locale, string>) => ({
  src: `/screenshots/${id}/${file}.webp`,
  width,
  height,
  alt,
})

export const screenshots: Partial<Record<AppId, Screenshot[]>> = {
  'social-web': [
    shot('social-web', 'feed-desktop', 1962, 1226, {
      en: 'social-web on the For you tab: composer, a post, and the community discovery column',
      tr: 'Senin için sekmesinde social-web: gönderi kutusu, bir gönderi ve topluluk keşfi sütunu',
      de: 'social-web im Tab „Für dich“: Beitragsfeld, ein Beitrag und die Spalte zum Entdecken von Communitys',
    }),
  ],
  portkill: [
    shot('portkill', 'demo', 900, 520, {
      en: 'portkill listing three TCP listeners, previewing two with --dry-run, then stopping the one on port 3000',
      tr: 'portkill üç TCP dinleyicisini listeliyor, ikisini --dry-run ile önizliyor, ardından 3000 portundakini durduruyor',
      de: 'portkill listet drei TCP-Listener, zeigt zwei mit --dry-run in der Vorschau und beendet dann den auf Port 3000',
    }),
  ],
  macshelf: [
    shot('macshelf', 'history', 720, 919, {
      en: 'The MacShelf popover showing eight clipboard entries with a search field and keyboard hints',
      tr: 'Arama alanı ve klavye ipuçlarıyla sekiz pano kaydını gösteren MacShelf açılır penceresi',
      de: 'Das MacShelf-Popover mit acht Zwischenablage-Einträgen, Suchfeld und Tastaturhinweisen',
    }),
    shot('macshelf', 'copied', 720, 919, {
      en: 'A row confirming with a green Copied badge while the popover stays open',
      tr: 'Açılır pencere açık kalırken yeşil "Kopyalandı" rozetiyle onaylanan bir satır',
      de: 'Eine Zeile bestätigt mit einem grünen „Kopiert“-Badge, während das Popover offen bleibt',
    }),
  ],
  bdash: [
    shot('bdash', 'login', 1440, 900, {
      en: 'BDash sign-in page beside the pitch: orders, stock and revenue reports in one panel',
      tr: 'BDash giriş sayfası ve yanında tanıtım: siparişler, stok ve ciro raporları tek panelde',
      de: 'BDash-Anmeldeseite neben der Übersicht: Bestellungen, Lager und Umsatzberichte in einem Panel',
    }),
    shot('bdash', 'dashboard', 1440, 742, {
      en: 'BDash dashboard overview with business names, figures and chart values obscured',
      tr: 'İşletme adları, tutarlar ve grafik değerleri bulanıklaştırılmış BDash genel bakış paneli',
      de: 'BDash-Dashboard mit unkenntlich gemachten Firmennamen, Beträgen und Diagrammwerten',
    }),
  ],
  skadi: [
    shot('skadi', 'list', 1100, 859, {
      en: 'The list: totals, live rates, and every subscription with its own logo',
      tr: 'Liste: toplamlar, canlı kurlar ve her aboneliğin kendi logosu',
      de: 'Die Liste: Summen, Live-Kurse und jedes Abo mit eigenem Logo',
    }),
    shot('skadi', 'dialog', 1100, 859, {
      en: 'Adding a subscription: paste a link, the name and logo resolve server-side',
      tr: 'Abonelik ekleme: bir bağlantı yapıştırın, ad ve logo sunucu tarafında bulunur',
      de: 'Ein Abo hinzufügen: Link einfügen, Name und Logo werden serverseitig aufgelöst',
    }),
    shot('skadi', 'menu', 1100, 859, {
      en: 'Language and display currency, both stored per browser',
      tr: 'Dil ve gösterim para birimi, ikisi de tarayıcı başına saklanır',
      de: 'Sprache und Anzeigewährung, beides pro Browser gespeichert',
    }),
  ],
  dizey: [
    shot('dizey', 'home', 1440, 900, {
      en: 'Dizey Lab home page: "From science to product, end to end"',
      tr: 'Dizey Lab ana sayfası: "Bilimden ürüne, uçtan uca"',
      de: 'Startseite von Dizey Lab: „Von der Wissenschaft zum Produkt, durchgängig“',
    }),
    shot('dizey', 'principles', 1440, 900, {
      en: 'Dizey Lab principle: AI suggests, a human decides, and every output has measurable evidence',
      tr: 'Dizey Lab ilkesi: yapay zekâ önerir, insan karar verir, her çıktının ölçülebilir bir kanıtı vardır',
      de: 'Dizey-Lab-Prinzip: KI schlägt vor, der Mensch entscheidet, und jedes Ergebnis ist messbar belegt',
    }),
  ],
  penote: [
    shot('penote', 'demo', 1000, 620, {
      en: 'penote list filtered to the Java category',
      tr: 'Java kategorisine göre filtrelenmiş penote listesi',
      de: 'penote-Liste, gefiltert auf die Kategorie Java',
    }),
  ],
  portfolio: [
    shot('portfolio', 'home', 1440, 900, {
      en: 'The home page: photo, introduction, pixel-icon contact links and the project shelf',
      tr: 'Ana sayfa: fotoğraf, tanıtım, pixel ikonlu iletişim bağlantıları ve proje rafı',
      de: 'Die Startseite: Foto, Vorstellung, Kontaktlinks mit Pixel-Icons und das Projektregal',
    }),
    shot('portfolio', 'project', 1440, 900, {
      en: "A project page: full-bleed hero in the project's accent colour, with get and repository buttons",
      tr: 'Bir proje sayfası: projenin vurgu rengindeki tam genişlik giriş, indirme ve depo düğmeleriyle',
      de: 'Eine Projektseite: vollflächiger Hero in der Akzentfarbe des Projekts, mit Download- und Repository-Button',
    }),
    shot('portfolio', 'profiles', 1440, 900, {
      en: 'Developer profiles, each marked with a hand-drawn pixel icon',
      tr: 'Her biri elle çizilmiş bir pixel ikonla işaretlenmiş geliştirici profilleri',
      de: 'Entwicklerprofile, jedes mit einem handgezeichneten Pixel-Icon',
    }),
  ],
  alice: [
    shot('alice', 'hall', 1440, 900, {
      en: 'Alice Palazzo event hall set for a wedding, shown on the venue site',
      tr: 'Mekân sitesinde düğün için hazırlanmış Alice Palazzo salonu',
      de: 'Der für eine Hochzeit gedeckte Saal von Alice Palazzo auf der Website',
    }),
    shot('alice', 'home', 1440, 900, {
      en: 'Alice Palazzo home page hero with the venue navigation',
      tr: 'Mekân menüsüyle birlikte Alice Palazzo ana sayfa girişi',
      de: 'Hero der Alice-Palazzo-Startseite mit der Navigation',
    }),
  ],
  'betus-design': [
    shot('betus-design', 'home', 1440, 900, {
      en: 'Betüş Design home page: "Elegance for your table, handmade"',
      tr: 'Betüş Design ana sayfası: "Sofranıza zarafet, elde işlenmiş"',
      de: 'Startseite von Betüş Design: „Eleganz für Ihren Tisch, handgefertigt“',
    }),
    shot('betus-design', 'collection', 1440, 900, {
      en: 'Featured designs: hand-beaded napkins on serving trays',
      tr: 'Öne çıkan tasarımlar: servis tepsilerinde el işlemesi taşlı peçeteler',
      de: 'Ausgewählte Designs: handbestickte Servietten auf Serviertabletts',
    }),
  ],
}

export default screenshots
