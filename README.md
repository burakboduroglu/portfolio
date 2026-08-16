# Portfolio site

This repository holds the source for my personal site: a single page that introduces who I am, how I work, and the small products and tools I ship. It is meant to read like a hand-built portfolio—not a reusable template or a library for others to install.

## What it is

The page pairs a calm, editorial hero (photo, short positioning copy, location) with a **Reach out** block for direct links. Below that sits an **Apps** section styled like a focused product shelf: each entry is a real project with its own story, stack, and links, instead of a generic grid of cards.

Visually I leaned toward clarity and restraint: monospace type, light structure, a single accent color, and enough whitespace that the content—not chrome—carries the impression.

## What I used

The UI is **React** on **Vite** in TypeScript, with layout and typography in plain CSS. Icons come from **Lucide** where it fits; a couple of brand marks are inlined where the icon set does not ship them. Content lives in code so the whole thing stays easy to revise and deploy as static files: `src/lib/data/` holds the language-independent structure (app links, icons, accents, category keys), and `src/lib/i18n/` holds every user-facing string.

## Languages

The site ships in Turkish, English, and German. There is no i18n dependency — `src/lib/i18n/index.ts` is a small context provider exposing `useT()`, `useLocale()`, and `useApps()`, which merges app metadata with the active translation.

`src/lib/i18n/types.ts` defines a single `Messages` type that all three dictionaries `satisfies`. Because app copy and categories are keyed by union types, a missing or misspelled translation is a compile error — and `bun run build` runs `tsc --noEmit` first, so an incomplete translation cannot reach production.

The active language is resolved as `?lang=` → `localStorage` → `navigator.language` → English, and the choice is written back to the URL so a link carries it. Search is normalised per locale, which matters for the Turkish dotted/dotless I.

To add a string: add it to `Messages`, then let the type errors point at each dictionary.

## If you cloned the repo

You are looking at my site’s source, not a packaged product. Still, the usual Vite commands apply: `bun install`, `bun run dev` for local preview, and `bun run build` for production output. Pushes to `main` are deployed to **GitHub Pages** automatically through GitHub Actions; `bun run deploy` remains available as a manual fallback.
