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
  [locale]/
    layout.tsx
    page.tsx                 # home
    about/page.tsx
    work/page.tsx
    work/[slug]/page.tsx
    contact/page.tsx         # veya kaldırılıp footer-only
content/
  work/
    <slug>/
      meta.yaml              # veya tek meta + locale klasörleri
      tr.mdx
      en.mdx
messages/
  tr.json
  en.json
components/
  ui/                        # shadcn
public/
```

**İçerik deseni:** DATA_DICTIONARY `CaseStudy` alanları ya frontmatter’da ya da MDX gövdesinde bölüm başlıklarıyla eşlenir; seçilen desen burada tek cümle ile sabitlenir: **locale başına bir MDX (`tr.mdx` / `en.mdx`) + ortak `slug` ve `stack` frontmatter**.

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
- **UI ilhamı:** [design-reference-wise.md](design-reference-wise.md) — [Wise Design](https://wise.design/) editoryal düzeni ve çok dillilik vurgusu; marka varlığı kopyalanmaz.

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

## 8. Dağıtım ve ortam

- **Container:** Dockerfile veya Podman uyumlu imaj; multi-stage build önerilir.  
- **VPS / Dokploy:** Reverse proxy (TLS), `NODE_ENV=production`, runtime env listesi:

| Değişken | Açıklama |
|----------|----------|
| `NEXT_PUBLIC_SITE_URL` | Kanonik site URL (OG ve canonical) |

(Gerçek değerler repoya yazılmaz.)

---

## 9. Mevcut kod tabanı (PRD §14)

| Karar | Durum |
|-------|--------|
| Eski Vite + React portföy | Next.js scaffold ile **değiştirilecek** veya kaldırılacak — kesin seçim bu tabloya tarih ile işlenecek |

**Karar kaydı:**

- _(Tarih / imza: scaffold başlatıldığında doldurun.)_

---

## 10. Revizyon

| Sürüm | Tarih | Not |
|-------|--------|-----|
| 1.0 | 2025-03-21 | İlk uygulama rehberi |
