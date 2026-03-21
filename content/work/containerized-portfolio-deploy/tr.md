---
slug: containerized-portfolio-deploy
locale: tr
category:
  - devops
case_study_status: draft
stack:
  - Docker
  - Dokploy
  - VPS
title: Statik / Node sitesi için container ve VPS yayını
summary: Tek imaj, ortam değişkenleri ve ters vekil ile tekrarlanabilir dağıtım taslağı.
demo_url: null
repo_url: null
privacy_note: Sunucu hostname ve sağlayıcı detayları genelleştirildi.
---

## Başlık ve özet

Kişisel veya küçük ürün sitelerinin “bilgisayarımda çalışıyor”dan çıkıp VPS üzerinde güvenilir şekilde yayınlanması için container + Dokploy (veya eşdeğeri) düzeni tasarlandı.

## Rolünüz

DevOps ve dağıtım otomasyonu.

## Süre ve takım

Tahmini süre: 1–2 hafta (ilk kurulum). Takım: solo.

## Problem

Manuel kopyala-yapıştır deploy drift yaratıyor; rollback zor.

## Kısıtlar

TLS sonlandırma ve tek makine bütçesi; sıfır bakım maliyeti hedefi.

## Çözüm özeti

Multi-stage Docker imajı, `NEXT_PUBLIC_SITE_URL` vb. env, reverse proxy ile HTTPS, Dokploy’da uygulama tanımı.

## Teknik mimari

Build → registry veya doğrudan host → container run → health check → proxy route. Ayrıntı şema Faz 2’de.

## Kullanılan teknolojiler

Docker veya Podman uyumlu imaj, VPS Linux, Dokploy (veya benzeri), Caddy/Nginx (tercihe göre).

## Prompt / context engineering

N/A — altyapı odaklı proje.

## Otomasyon ve DevOps

Gelecekte: CI’da `docker build` ve imaj itme; sürüm etiketleri.

## Güvenlik ve gizlilik

Secret’lar imaj içinde değil; SSH ve panel erişimi kısıtlı.

## Sonuçlar

Taslak: deploy süresi ve kesinti hedefleri Faz 2’de ölçülecek.

## Öğrenilenler

- Health check olmadan otomatik trafik yönlendirmesi risklidir.
- Kanonik URL env’i SEO ve OG için zorunlu.

## Bağlantılar

Canlı örnek: bu portföy sitesi Faz 3’te bu taslağa bağlanabilir.
