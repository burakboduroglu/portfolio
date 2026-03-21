# Veri sözlüğü (DATA_DICTIONARY)

**Kaynak:** [PRD.md](PRD.md) §4, §5, §8. Uygulama şeması ve içerik sözleşmesi burada tutulur; kod ve frontmatter bu isimlerle hizalanmalıdır.

**Konum:** Repo kökündeki bu dosya tek kaynaktır. İndeks için bkz. [docs/README.md](docs/README.md).

---

## Locale

| Alan | Tip | Açıklama |
|------|-----|----------|
| `code` | `"tr" \| "en"` | URL öneki ve dil seçimi |
| `hreflang` | string | BCP 47; örn. `tr`, `en` |
| `defaultLocale` | `"tr"` veya `"en"` | Scaffold sırasında tek kez seçilir; canonical kuralları [docs/implementation.md](docs/implementation.md) içinde |

---

## PageType

MVP sayfa türleri (PRD §4):

| `pageType` | Rota örneği | Amaç |
|------------|-------------|------|
| `home` | `/[locale]` | Hero, value prop, öne çıkan projeler, CTA |
| `about` | `/[locale]/about` | Bio, odak alanları |
| `work` | `/[locale]/work` | Proje listesi / filtre |
| `work_detail` | `/[locale]/work/[slug]` | Case study |
| `contact` | `/[locale]/contact` | İletişim (veya yalnızca footer — ürün kararı) |

---

## Project (liste kartı)

Liste ve özet gösterim için minimum alanlar.

| Alan | Tip | Zorunlu | Not |
|------|-----|---------|-----|
| `slug` | string | evet | URL-safe, dil-bağımsız |
| `category` | `("fullstack"\|"automation"\|"devops"\|"prompt_engineering")[]` | evet | En az bir |
| `title_tr` | string | evet | Liste başlığı |
| `title_en` | string | evet | |
| `summary_tr` | string | evet | 1–2 cümle |
| `summary_en` | string | evet | |
| `stack` | string[] | evet | Örn. `Next.js`, `PostgreSQL` |
| `case_study_status` | `"draft" \| "review" \| "published"` | evet | Taslakta iken listede gösterme kararı uygulamada |
| `demo_url` | string \| null | hayır | |
| `repo_url` | string \| null | hayır | |
| `privacy_note` | string \| null | hayır | Gizlilik kısıtı özeti |

---

## CaseStudy (detay sayfası)

PRD §5 ile birebir bölümler. Gövde metni için iki desen (birini seçip `docs/implementation.md` içinde kilitle):

- **A:** Tek MDX + alanlar `body_tr` / `body_en` veya ayrı `content/tr/`, `content/en/` dosyaları.
- **B:** Bölüm başına çeviri anahtarları (uzun içerik için önerilmez).

| Alan / bölüm | Tip | Zorunlu | PRD §5 |
|--------------|-----|---------|--------|
| `slug` | string | evet | — |
| `title_tr`, `title_en` | string | evet | Başlık ve özet |
| `summary_tr`, `summary_en` | string | evet | Özet |
| `role_tr`, `role_en` | string | evet | Rolünüz |
| `duration_team_tr`, `duration_team_en` | string | evet | Süre ve takım |
| `problem_tr`, `problem_en` | string | evet | Problem |
| `constraints_tr`, `constraints_en` | string | evet | Kısıtlar |
| `solution_tr`, `solution_en` | string | evet | Çözüm özeti |
| `architecture_tr`, `architecture_en` | string | evet | Teknik mimari |
| `technologies` | string[] veya tablo | evet | Kullanılan teknolojiler |
| `prompt_context_tr`, `prompt_context_en` | string \| null | koşullu | LLM varsa doldur; yoksa `N/A — gerekçe` |
| `automation_devops_tr`, `automation_devops_en` | string | evet | Otomasyon ve DevOps |
| `security_privacy_tr`, `security_privacy_en` | string | evet | Güvenlik ve gizlilik |
| `results_tr`, `results_en` | string | evet | Sonuçlar |
| `learnings_tr`, `learnings_en` | string | evet | Öğrenilenler |
| `links_note_tr`, `links_note_en` | string | evet | Demo/repo veya kapalı açıklama |
| `og_image` | string \| null | hayır | OG görsel yolu |

Yok sayılan bölüm için metin: `N/A — <kısa gerekçe>` (PRD §5).

---

## TranslationKey (UI sözlüğü)

Kategoriler (MVP minimum); anahtarlar `snake_case` veya `nested.object` — projede tek stil seçilir.

| Grup | Örnek anahtarlar | Kullanım |
|------|------------------|----------|
| `nav` | `nav.home`, `nav.work`, `nav.about`, `nav.contact` | Navigasyon |
| `home` | `home.hero_title`, `home.cta` | Ana sayfa |
| `work` | `work.title`, `work.filter_all` | Proje listesi |
| `common` | `common.language_tr`, `common.language_en` | Dil seçici, footer |
| `meta` | `meta.default_description` | SEO fallback |

---

## Opsiyonel: gelecek veritabanı

PRD §7: MVP’de zorunlu değil. Form veya dinamik özellik eklenirse burada genişlet:

- Örnek varlık: `ContactSubmission` — `id`, `created_at`, `email`, `message`, `locale` (şema uygulama ile eklenecek).

---

## Revizyon

| Sürüm | Tarih | Not |
|-------|--------|-----|
| 1.0 | 2025-03-21 | PRD 1.0 ile hizalı ilk sözlük |
| 1.1 | 2025-03-21 | Kaynak kök `DATA_DICTIONARY.md` olarak sabitlendi |
