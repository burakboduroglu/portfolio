---
slug: invoice-automation-n8n
locale: tr
category:
  - automation
case_study_status: draft
stack:
  - n8n
  - PostgreSQL
  - Webhook
title: Fatura onay hattı otomasyonu (n8n)
summary: Dağıtık onay e-postalarını tek akışta toplayıp ERP’ye işleyen düşük kod otomasyon taslağı.
demo_url: null
repo_url: null
privacy_note: Sektör ve sistem isimleri anonimleştirilmiştir.
---

## Başlık ve özet

Orta ölçekli bir hizmet şirketinde fatura onayı e-posta zincirine bağlı kaldığı için gecikmeler oluşuyordu. n8n ile tetikleyici, insan onayı ve ERP API adımlarını tek görünür akışta birleştiren bir tasarım taslağı hazırlandı.

## Rolünüz

Otomasyon mimarisi ve entegrasyon (solo / küçük ekip — netleştirilecek).

## Süre ve takım

Tahmini süre: 4–6 hafta (taslak aşaması). Takım büyüklüğü: TBD.

## Problem

Onaylar farklı gelen kutularında takılıyor; manuel takip hataya açık ve SLA ölçümü zor.

## Kısıtlar

Mevcut ERP API hız limiti; PII içeren e-posta gövdelerinin loglanmaması gerekliliği.

## Çözüm özeti

n8n üzerinde webhook veya e-posta tetikleyici, onay durumuna göre dallanma, başarısızlıkta yeniden deneme ve ERP’ye kapalı alan POST adımları.

## Teknik mimari

Gelen olay → kuyruk / workflow run → insan onayı (form veya e-posta yanıtı) → ERP güncelleme. Detay diyagram Faz 2’de eklenecek.

## Kullanılan teknolojiler

n8n, PostgreSQL (idempotency / durum), şirket içi webhook güvenliği.

## Prompt / context engineering

N/A — bu taslakta LLM kullanımı yok; ileride e-posta sınıflandırma için genişletilebilir.

## Otomasyon ve DevOps

Workflow export’ları repo veya gizli depoda versiyonlanır; ortam değişkenleri ile secret yönetimi.

## Güvenlik ve gizlilik

Fatura satırları ve kişi verisi loglara yazılmaz; erişim rol bazlıdır.

## Sonuçlar

Taslak: onay süresi ve hata oranı hedefleri ölçüm planı ile Faz 2’de doldurulacak.

## Öğrenilenler

- İnsan onayı adımını erken modellemek SLA’yı netleştirir.
- Idempotency anahtarları ERP çağrıları için kritiktir.

## Bağlantılar

Demo ve repo: henüz yok (taslak). Yayın politikası netleşince güncellenecek.
