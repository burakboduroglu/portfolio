# UI referansı: Wise Design (ilham kaynağı)

**Resmî kaynaklar:**

- [Wise Design](https://wise.design/) — genel sistem ve editoryal dil  
- **[Wise Design — Components](https://wise.design/components)** — **tasarım metodolojisi ve bileşen sözlüğü** (bu proje için birincil referans)

Bu dosya, kişisel sitenin **görsel ve UX ilhamını** nereden alacağını tanımlar. Amaç Wise’ın kurumsal kimliğini kopyalamak değil; **editoryal, bileşen odaklı ve çok kültürlü** bir hisi kendi marka paletiniz ve içeriğinizle yeniden yorumlamaktır.

---

## 1. Tasarım metodolojisi: [Wise Design Components](https://wise.design/components)

**Metodoloji:** Arayüz kararlarında referans, Wise’ın bileşen kataloğundaki **yapılandırma ve isimlendirme düzeni**dir (ör. *Product* / *Editorial* ayrımı; düğme, kart, chip, liste öğeleri, formlar, geri bildirim, navigasyon kalıpları).

| Wise tarafı (metodoloji) | Bizim uygulama |
|--------------------------|----------------|
| Bileşen odaklı düşünme; tutarlı etkileşim ve hiyerarşi | shadcn/ui + Tailwind ile aynı mantıkta tekrar kullanılabilir parçalar |
| Ürün / editoryal bağlamlara göre varyantlar | Kişisel sitede “landing + case study + iletişim” için aynı token ve bileşen disiplini |
| Net bileşen adları ve kalıplar | Yeni UI eklerken önce “hangi tür parça?” (ör. kart, bölüm başlığı, CTA) sorusu; [components](https://wise.design/components) sözlüğü ilham verir, **kopya değildir** |

**Teknik eşleme:** Kod tabanında **Tailwind + shadcn/ui** kullanılır; Wise bileşenleri birebir yeniden üretilmez. Renk, tipografi, ikon ve içerik **projeye özgüdür** (aşağıdaki telif bölümü).

---

## 2. Neden bu referans (genel site)

[wise.design](https://wise.design/) şu yönleriyle PRD §6 (Tasarım ve UX ilkeleri) ile uyumludur:

- **Editoryal düzen:** Uzun kaydırma, güçlü başlıklar, metin + görsel blokların ritmi; “ürün sitesi” yerine “tasarım sistemi / hikâye” hissi.
- **Tipografi önceliği:** Büyük, net başlıklar; okunabilir gövde; sınırlı ama cesur tip hiyerarşisi.
- **Görsel alan:** İnsan ve bağlam fotoğrafı, tam genişlik bölümler; boşluk ve grid disiplini.
- **Çok dillilik vurgusu:** Farklı alfabeler / dil örnekleri arayüzde “dünya ölçeği” mesajını destekler — bu projenin **TR + EN** hedefiyle örtüşür (içerik kopyası Wise’tan alınmaz).
- **Derinlemesine keşif:** “Foundations, Components, Patterns, Resources” benzeri **bizde** “Work, Case study, Stack, İletişim” gibi net bilgi mimarisi ve tekrar kullanılabilir bölüm şablonları düşünmeyi destekler.

---

## 3. Kendi sitemize aktarım ilkeleri

| Wise tarafı (ilham) | Bizim uygulama |
|---------------------|----------------|
| Büyük hero + kısa mesaj | Ana sayfa hero; value proposition tek cümle + CTA |
| Bölüm bazlı hikâye | Case study ve about sayfalarında aynı grid/ritim |
| Bileşen netliği | shadcn/ui + Tailwind ile kart, bölüm, tipografi token’ları |
| Uluslararası his | Dil seçici + locale URL; tipografi Latin ve TR karakterlerinde test |
| “Dig into the details” | Work listesinden case study’ye derin link |

---

## 4. Uygulama sırasında kontrol listesi

- [ ] Renk, logo, illüstrasyon ve **Wise’a özgü varlıklar** kullanılmıyor; kendi palet ve görselleriniz tanımlı.
- [ ] Tipografi: lisanslı / web font seçimi (Wise fontlarını kopyalamak zorunlu değil).
- [ ] Animasyon: abartılı efekt yerine içerik odaklı, hafif geçişler (PRD §6).
- [ ] Erişilebilirlik: kontrast ve heading sırası korunuyor.

---

## 5. Telif ve marka

Wise Design, Wise’ın markasıdır. Bu proje **referans ve ilham** içindir; ticari unvan, logo, özgün görsel ve metin içeriği **çoğaltılmamalıdır**. Tasarım kararları “benzer prensipler, farklı uygulama” olarak dokümante edilir.

---

## 6. İlgili dokümanlar

- [PRD.md](../PRD.md) §6 — ürün düzeyinde tasarım ilkeleri ve bu dosyaya atıf.
- [implementation.md](implementation.md) §5 — teknik stil ve bileşen uygulaması.

## 7. Kodda uygulama (site ayarları)

| Ne | Nerede |
|----|--------|
| Sayfa kabuğu (geniş / dar tuval), H1 varyantları, yüzey sabitleri | [`lib/design-system.ts`](../lib/design-system.ts) |
| `bb-*` yardımcı sınıflar, `--spacing-section-y`, mesh / fade animasyonları | [`app/globals.css`](../app/globals.css) |
| Ürün yüzeyi (iletişim link ızgarası) | `data-surface="product"` + `surface.product` — [`components/contact-linktree.tsx`](../components/contact-linktree.tsx) |
| Nav / marka link hover | `link.brand`, `link.nav` → `bb-link-*` — [`components/site-header.tsx`](../components/site-header.tsx) |

**Revizyon**

| Sürüm | Tarih | Not |
|-------|--------|-----|
| 1.0 | 2025-03-21 | İlk referans dokümanı |
| 1.1 | 2026-03-21 | Tasarım metodolojisi: [Wise Design Components](https://wise.design/components) birincil referans olarak tanımlandı |
| 1.2 | 2026-03-21 | §7: `lib/design-system.ts` + `globals.css` ile kod eşlemesi |
| 1.3 | 2026-03-21 | §7: `link.*` + `bb-link-*` nav hover |
