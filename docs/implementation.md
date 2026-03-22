# Uygulama rehberi

**İlişkili:** [PRD.md](../PRD.md) (ürün), [DATA_DICTIONARY.md](../DATA_DICTIONARY.md) (alan sözleşmesi), [.cursor/rules/generate-rules.mdc](../.cursor/rules/generate-rules.mdc) (üretim kuralları).

---

## 1. Kaynak hiyerarşisi

1. **PRD.md** — kapsam, non-goals, case study yapısı.  
2. **[DATA_DICTIONARY.md](../DATA_DICTIONARY.md)** (kök) — frontmatter ve tip isimleri.  
3. **Kod** — yukarıdakilerle çelişirse önce doküman güncellenir, sonra kod.

---

## 2. Hedef dizin yapısı (Next.js scaffold sonrası)

Aşağıdaki yapı öneridir; scaffold oluşturulduğunda bu dosya gerçek ağaçla eşitlenmelidir.

```text
app/
  layout.tsx                 # Kök: yalnızca children (html [locale] içinde)
  [locale]/
    layout.tsx               # html/lang, NextIntlClientProvider, header/footer
    page.tsx                 # Ana sayfa
    about/page.tsx
    contact/page.tsx
    not-found.tsx
  globals.css
proxy.ts
i18n/
  routing.ts
  request.ts
  navigation.ts              # Link, useRouter, …
messages/
  tr.json
  en.json
components/
  ui/                        # shadcn (button, card, …)
  site-header.tsx
  site-footer.tsx
  locale-switcher.tsx
lib/
  utils.ts
```

**İçerik deseni (Faz 0 kilidi):** Locale başına **`tr.md` / `en.md`** (Markdown + YAML frontmatter); `slug` ve `stack` her iki dosyada aynı. PRD §5 bölümleri gövdede `##` başlıklarıyla. Faz 1’de uzantı MDX’e taşınabilir.

---

## 3. i18n

- **Kütüphane:** `next-intl` (veya eşdeğeri) — PRD §7.  
- **URL:** `/tr/...`, `/en/...` (veya `[locale]` segmenti).  
- **`hreflang` / canonical:** Her sayfa çifti için; duplicate content önleme kuralları PRD §4 ile uyumlu tutulur.

---

## 4. Tip güvenliği (öneri)

- `Project` ve `CaseStudy` için Zod şeması; `content/work` derlemesinde doğrulama.  
- Çeviri anahtarları için `as const` + `satisfies` veya `next-intl` tipleri.

---

## 5. Stil ve bileşenler

- Tailwind CSS + shadcn/ui (PRD §6–7).  
- Tema: sınırlı palet, güçlü tipografi; gereksiz ağır animasyon yok.  
- **UI ilhamı ve metodoloji:** [design-reference-wise.md](design-reference-wise.md) — birincil bileşen referansı [Wise Design — Components](https://wise.design/components); genel düzen [Wise Design](https://wise.design/). Uygulama: shadcn/ui + Tailwind; marka varlığı kopyalanmaz.
- **Düzen sözleşmesi:** [`lib/design-system.ts`](../lib/design-system.ts) (sayfa kabuğu, `heading`, `section`, `surface`) + [`app/globals.css`](../app/globals.css) içindeki `bb-*` sınıfları; ayrıntı [design-reference-wise.md](design-reference-wise.md) §7.

---

## 6. Performans

- Statik oluşturma mümkün olduğunca (`generateStaticParams` ile `[locale]` ve `[slug]`).  
- `next/image` ile görseller; OG görselleri `public/` veya build üretimi.

---

## 7. Lighthouse hedefleri (PRD §10)

Sayısal eşikler scaffold tamamlandığında buraya yazılır:

- Performance: ≥ **90** (hedef; cihaz koşulları notu).  
- Accessibility: ≥ **90**.  
- SEO: ≥ **90** (statik içerik varsayımı).

---

## 8. Faz 3 odağı (tasarım + tema)

- **Tema:** Header üzerinde kullanıcı seçimi kalıcı (localStorage) dark mode toggle.  
- **Görsel yön:** Creative-showcase; [burakboduroglu.com.tr](https://burakboduroglu.com.tr/) sadeliği + Behance tarzı daha vurucu sunum dengesi.  
- **Kapsam dışı (Faz 3):** CI/pipeline/container/deploy rehberi.

| Değişken | Açıklama |
|----------|----------|
| `NEXT_PUBLIC_SITE_URL` | Kanonik site URL (OG ve canonical) |

(Gerçek değerler repoya yazılmaz.)

---

## 9. Mevcut kod tabanı (PRD §14)

| Karar | Durum |
|-------|--------|
| Eski Vite + React portföy | Next.js scaffold ile **kaldırıldı** (bkz. repo geçmişi). |
| PRD §12 Faz 0 | **İçerik taslakları** [content/work/](../content/work/) altında 3 proje × TR/EN; `case_study_status: draft`. Ürün onayı PRD sahibine aittir. |
| PRD §12 Faz 1–2 | **Uygulandı:** `next-intl`, `proxy` tabanlı locale yönlendirme, shadcn/ui, landing + about + contact sayfaları, linktree tarzı iletişim blokları. |
| PRD §12 Faz 3 | **Yeni hedef:** dark mode + creative-showcase görsel iyileştirme (pipeline/deploy dokümantasyonu yok). |

**Karar kaydı:**

- **2025-03-21:** Faz 0 — `invoice-automation-n8n`, `llm-context-pipeline`, `containerized-portfolio-deploy` için TR/EN taslaklar eklendi; [content/README.md](../content/README.md).
- **2025-03-21:** Faz 1 — i18n rotaları, UI iskeleti, üretimde `npm start -H 127.0.0.1` (ağ arayüzü hatası riski).

---

## 10. Revizyon

| Sürüm | Tarih | Not |
|-------|--------|-----|
| 1.0 | 2025-03-21 | İlk uygulama rehberi |
| 1.1 | 2025-03-21 | Faz 0 içerik ağacı ve içerik deseni kilidi |
| 1.2 | 2025-03-21 | Faz 1: next-intl, shadcn, sayfalar, içerik boru hattı |
| 1.3 | 2026-03-21 | Faz 3 yön değişimi: dark mode + tasarım iyileştirmesi |
| 1.4 | 2026-03-21 | §5: `lib/design-system.ts` + design-reference-wise §7 kod eşlemesi |
