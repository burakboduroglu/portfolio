---
slug: llm-context-pipeline
locale: tr
category:
  - fullstack
  - prompt_engineering
case_study_status: draft
stack:
  - Next.js
  - PostgreSQL
  - OpenAI API
title: Kontrollü LLM asistan hattı (taslak)
summary: Prompt şablonları ve güvenlik kurallarıyla API tabanlı modele bağlı, ölçülebilir çıktı hedefleyen fullstack taslak.
demo_url: null
repo_url: null
privacy_note: Veri kaynakları ve müşteri genellemesi anonimdir.
---

## Başlık ve özet

Destek veya iç süreçler için sabit prompt şablonları, rol tanımı ve güvenlik politikalarıyla API üzerinden çalışan bir asistan hattı tasarlandı (taslak).

## Rolünüz

Fullstack geliştirme ve prompt / context mühendisliği.

## Süre ve takım

Tahmini süre: 6–10 hafta. Takım: TBD.

## Problem

Genel amaçlı sohbet botu yanlış bağlam ve güncel olmayan bilgi üretiyordu.

## Kısıtlar

Token maliyeti; iç dokümanların bölüm bazlı yetkilendirmesi; yanıtlarda kaynak gösterme zorunluluğu.

## Çözüm özeti

Next.js arayüzü, sistem + kullanıcı mesajları için ayrı şablonlar, gerekirse el ile seçilen veya basit kurallarla filtrelenmiş bağlam, çıktı sonrası doğrulama adımları.

## Teknik mimari

İstek → (isteğe bağlı) kısıtlı bağlam ekleme → LLM API → post-filter (PII / yasaklı konu). Diyagram Faz 2’de.

## Kullanılan teknolojiler

Next.js, PostgreSQL, OpenAI veya eşdeğeri LLM API.

## Prompt / context engineering

Sistem prompt’unda rol, yasaklar ve “bilinmiyorsa söyle” kuralı; few-shot örnekler sürümlenir; değerlendirme için altın örnek seti planlandı.

## Otomasyon ve DevOps

CI’da prompt şablonu diff kontrolü (taslak fikir); ortamlar arası API anahtar ayrımı.

## Güvenlik ve gizlilik

PII maskeleme; audit log’da ham içerik tutulmaz.

## Sonuçlar

Taslak: doğruluk ve kullanıcı memnuniyeti metrikleri Faz 2’de.

## Öğrenilenler

- Bağlam penceresi bütçesi ürün kararlarını doğrudan etkiler.
- Kaynak atfı UX’in parçası olmalıdır.

## Bağlantılar

Canlı demo: yok (taslak).
