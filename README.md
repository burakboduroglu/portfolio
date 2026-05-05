# Portfolio site

This repository holds the source for my personal site: a single page that introduces who I am, how I work, and the small products and tools I ship. It is meant to read like a hand-built portfolio—not a reusable template or a library for others to install.

## What it is

The page pairs a calm, editorial hero (photo, short positioning copy, location) with a **Reach out** block for direct links. Below that sits an **Apps** section styled like a focused product shelf: each entry is a real project with its own story, stack, and links, instead of a generic grid of cards.

Visually I leaned toward clarity and restraint: monospace type, light structure, a single accent color, and enough whitespace that the content—not chrome—carries the impression.

## What I used

The UI is **React** on **Vite**, with layout and typography in plain CSS. Icons come from **Lucide** where it fits; a couple of brand marks are inlined where the icon set does not ship them. Content and copy live in code (`src/App.jsx`) so the whole thing stays easy to revise and deploy as static files.

## If you cloned the repo

You are looking at my site’s source, not a packaged product. Still, the usual Vite commands apply: `npm install`, `npm run dev` for local preview, and `npm run build` for production output. Pushes to `main` are deployed to **GitHub Pages** automatically through GitHub Actions; `npm run deploy` remains available as a manual fallback.
