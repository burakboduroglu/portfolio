# Portfolio

Kişisel site — [PRD.md](PRD.md), [DATA_DICTIONARY.md](DATA_DICTIONARY.md) ve [docs/](docs/) ile hizalı. Stack: **Next.js 16** (App Router), **next-intl** (`/tr`, `/en`), **Tailwind v4**, **shadcn/ui** (base nova), içerik: `content/work/<slug>/tr.md` · `en.md`.

## Geliştirme

```bash
npm install
npm run dev
```

Kök `/` otomatik olarak varsayılan locale’e yönlendirilir (`/tr`). Sayfalar: `/[locale]`, `/about`, `/work`, `/work/[slug]`, `/contact`.

## Üretim

```bash
npm run build
npm start
```

`npm start` yerel olarak `127.0.0.1` bağlar (bazı ortamlarda `os.networkInterfaces` hatasını önlemek için). `NEXT_PUBLIC_SITE_URL` kanonik URL için kullanılabilir (OG / metadata — Faz 2).

Ana sayfadaki yuvarlak profil görseli GitHub avatarından gelir: `NEXT_PUBLIC_GITHUB_USERNAME` (varsayılan `burakboduroglu`) → `https://github.com/<kullanıcı>.png`. `https://github.com/account` bir görsel adresi değildir.

## Dokümantasyon

| Dosya | Açıklama |
|-------|-----------|
| [PRD.md](PRD.md) | Ürün kapsamı ve yol haritası |
| [DATA_DICTIONARY.md](DATA_DICTIONARY.md) | İçerik alanları |
| [docs/implementation.md](docs/implementation.md) | Dizin yapısı ve teknik notlar |

## Lisans

Projeye uygun lisans dosyasını repo köküne ekleyin (ör. MIT).
