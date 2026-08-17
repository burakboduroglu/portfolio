<div align="center">

# Portfolio

**A calm, hand-built personal site — one page, three languages, no framework tax.**

[**burakboduroglu.com.tr →**](https://burakboduroglu.com.tr/)

[![Deploy](https://img.shields.io/github/actions/workflow/status/burakboduroglu/portfolio/deploy-pages.yml?branch=main&label=deploy&style=flat-square)](https://github.com/burakboduroglu/portfolio/actions/workflows/deploy-pages.yml)
[![CI](https://img.shields.io/github/actions/workflow/status/burakboduroglu/portfolio/ci.yml?branch=dev&label=ci&style=flat-square)](https://github.com/burakboduroglu/portfolio/actions/workflows/ci.yml)
[![License](https://img.shields.io/github/license/burakboduroglu/portfolio?style=flat-square)](LICENSE)
[![Last commit](https://img.shields.io/github/last-commit/burakboduroglu/portfolio?style=flat-square)](https://github.com/burakboduroglu/portfolio/commits)

![React](https://img.shields.io/badge/React-19-000?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-000?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-8-000?style=flat-square&logo=vite)
![Bun](https://img.shields.io/badge/Bun-runtime-000?style=flat-square&logo=bun)
![Pages](https://img.shields.io/badge/GitHub_Pages-deployed-000?style=flat-square&logo=githubpages)

</div>

---

This repository holds the source for my personal site: a single page that introduces who I am, how I work, and the small products and tools I ship. It is meant to read like a hand-built portfolio — not a reusable template, not a library for others to install.

## What it is

The page pairs a calm, editorial hero (photo, short positioning copy, location) with a **Reach out** block for direct links. Below that sits an **Apps** section styled like a focused product shelf: each entry is a real project carrying its own category, platform, and accent color, instead of a generic grid of cards. An **Articles** section surfaces what I publish on Substack.

Visually I leaned toward clarity and restraint: monospace type, light structure, a single accent color, and enough whitespace that the content — not chrome — carries the impression.

## Highlights

|     | Feature | How it works |
| --- | ------- | ------------ |
| 🌍 | **Turkish, English, German** | Zero i18n dependencies. One `Messages` type, three dictionaries that `satisfies` it. |
| 🛡️ | **Translations can't be forgotten** | A missing key is a *compile error*, and `build` typechecks first — so it never reaches production. |
| 🌗 | **Dark mode, no flash** | A tiny inline script in `index.html` sets the class before first paint; the toggle persists to `localStorage`. |
| 🔗 | **Language lives in the URL** | `?lang=` → `localStorage` → `navigator.language` → `en`, written back so a shared link carries it. |
| 🏬 | **Apps shelf, not a card grid** | Each card carries its own category, platform, and accent, and links straight out; paginated four at a time. |
| ♿ | **Accessible by default** | Intact heading hierarchy, `focus-visible` styling that survives the dark panel, `prefers-reduced-motion` respected. |
| 🪶 | **Small** | The whole page ships in roughly 78 kB gzipped — no CSS framework, no state library, no i18n runtime. |

## Stack

**React 19** on **Vite** in **TypeScript**, with layout and typography in plain CSS — no framework, no CSS-in-JS. Icons come from **Lucide** where it fits; a couple of brand marks are inlined where the icon set does not ship them. **Bun** is the package manager and script runner.

Content lives in code so the whole thing stays easy to revise and deploy as static files.

## Quick start

```bash
git clone https://github.com/burakboduroglu/portfolio.git
cd portfolio
bun install
bun run dev
```

| Script              | What it does                                       |
| ------------------- | -------------------------------------------------- |
| `bun run dev`       | Vite dev server with hot reload                     |
| `bun run typecheck` | `tsc --noEmit` over the whole project               |
| `bun run build`     | Typechecks first, then builds into `dist/`          |
| `bun run preview`   | Serves the production build locally                 |
| `bun run deploy`    | Manual `gh-pages` deploy — CI normally handles this |

## Structure

```
src/
├─ App.tsx              Page composition
├─ main.tsx             Entry point
├─ styles.css           All styling — plain CSS, one file
├─ components/
│  └─ app-site/         The Apps shelf and its leaf components
└─ lib/
   ├─ data/             Language-independent structure (ids, links, icons, accents)
   ├─ i18n/             tr / en / de + the useT / useLocale / useApps context
   └─ types/            Shared type declarations
```

The split between `lib/data/` and `lib/i18n/` is the load-bearing idea: `data/` holds only what is identical in every language, and `useApps()` merges it with the active translation at render time. Leaf components never learn that translation exists.

## How the i18n works

There is no i18n dependency. `src/lib/i18n/index.ts` is a small context provider exposing `useT()`, `useLocale()`, and `useApps()`.

`src/lib/i18n/types.ts` defines a single `Messages` type that all three dictionaries `satisfies`. Because app copy and categories are keyed by union types, a missing or misspelled translation is a compile error — and `bun run build` runs `tsc --noEmit` first, so an incomplete translation cannot reach production.

The active language resolves as `?lang=` → `localStorage` → `navigator.language` → English, and the choice is written back to the URL so a link carries it. Search is normalised per locale, which the Turkish dotted/dotless İ/ı requires.

**To add a string:** add it to `Messages`, run `bun run typecheck`, and let the errors point at each dictionary.

## Deployment

Pushes to `main` build and deploy to **GitHub Pages** automatically via [`deploy-pages.yml`](.github/workflows/deploy-pages.yml). Pull requests into `main` or `dev` run typecheck and build through [`ci.yml`](.github/workflows/ci.yml). `bun run deploy` remains available as a manual fallback.

## Contributing

Bug reports, accessibility issues, and translation fixes are welcome; the personal content itself is not up for pull requests.

- [**Contributing guide**](CONTRIBUTING.md) — setup, project layout, style, commits, pull requests
- [**Code of Conduct**](CODE_OF_CONDUCT.md) — how we treat each other here
- [**Security policy**](SECURITY.md) — report vulnerabilities privately, never as an issue

## License

The code is released under the [MIT License](LICENSE). The personal content — my writing, my photo, and the third-party logos under `public/` — is not covered by that grant. Fork the code, bring your own content.

<div align="center">
<sub>Built by <a href="https://github.com/burakboduroglu">Burak Boduroğlu</a></sub>
</div>
