/**
 * Wise Design–ilhamlı düzen sözleşmesi (bileşen odaklı ritim, editoryal vs yoğun yüzey).
 *
 * Kaynak: [docs/design-reference-wise.md](../docs/design-reference-wise.md)
 * Uygulama: Tailwind + shadcn/ui; sınıflar `app/globals.css` içinde tanımlıdır.
 */
export const designReferenceDoc = "docs/design-reference-wise.md" as const;

/** Sayfa genişliği: landing (hero + ızgara) vs okuma genişliği (hikâye sayfaları). */
export const pageShell = {
  /** Ana sayfa — geniş tuval, §3 “büyük hero + bölüm ızgarası”. */
  editorialWide: "bb-page-shell-wide",
  /** About, contact — dar sütun, tipografi önceliği. */
  editorialNarrow: "bb-page-shell-narrow",
} as const;

/** H1 ölçeği: hero blok vs iç sayfa başlığı. */
export const heading = {
  hero: "bb-h1-hero",
  page: "bb-h1-page",
} as const;

/** Bölüm başlığı (eyebrow / section header — Components’taki “Section header” ritmi). */
export const section = {
  label: "bb-section-label",
  /** Ana içerikten sonraki büyük bölüm aralığı (editoryal kaydırma ritmi). */
  gap: "bb-section-gap",
} as const;

/** Üst satır etiketi (hero üstü kısa satır). */
export const eyebrow = "bb-eyebrow" as const;

/**
 * Yüzey türleri (Wise Product / Editorial ayrımının projedeki karşılığı).
 * - editorial: hikâye / vitrin panelleri
 * - product: liste, tıklanabilir satırlar, daha sıkı dikey ritim
 */
export const surface = {
  editorial: "bb-showcase-panel",
  product: "bb-surface-product",
  /** shadcn Card — vitrin ızgarası (ana sayfa, projeler) */
  cardHover: "bb-card-hover",
} as const;

/**
 * Metin ve navigasyon linkleri — hafif renk + alt çizgi (PRD: abartısız hareket).
 */
export const link = {
  /** Header marka → ana sayfa */
  brand: "bb-link-brand",
  /** Üst ve mobil nav */
  nav: "bb-link-nav",
} as const;
