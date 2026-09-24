# Changelog

All notable changes to this site are recorded here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and the project
follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Every icon is pixel art. `lucide-react` is gone; UI icons and the brands it
  covers come from `pixelarticons` (MIT), and the marks it lacks — AWS, DEV,
  Framer, Higgsfield, Hugging Face, Kick, Medium, Microsoft, Reddit, Substack,
  Suno — are hand-drawn 12×12 bitmaps in `src/components/icons.tsx`. All sit on
  the same 2-unit cell grid and render at 12 or 24 px so no cell lands
  mid-pixel. The footer heart is a pixel heart instead of an emoji.
- Fonts load from a `<link>` instead of a CSS `@import`, as variable fonts —
  the 550/650/750 weights the stylesheet asks for now render as written.
- A first visit follows the OS light/dark setting; a saved choice still wins.
- Dependencies are pinned to semver ranges instead of `latest`, build tools
  moved to `devDependencies`, and CI reads the Bun version from
  `packageManager` in `package.json`.

- Star and fork counts and the article list are **synced, not typed**.
  `bun run sync` reads them from the GitHub API and the Substack feed into
  `src/lib/data/repo-stats.ts` and `src/lib/data/articles.ts`, both generated
  and committed — the same rule `bun run readmes` already follows, so the build
  stays offline and no visitor's browser calls an API. `apps.ts` keeps the
  decisions and loses the two fields that went stale on their own.
- The project shelf carries one icon family instead of four systems. .portkill,
  MacShelf and the portfolio were redrawn against the language Skadi arrived
  with: flat geometry, two inks, a near-black plate, edge to edge, legible at
  32 px. Each mark keeps its own colour, so the shelf reads as a set without
  the projects losing their identity. MacShelf's tile no longer needs the
  `scale(1024 / 896)` rule that pushed its padded SVG out to the tile edge.

### Added

- A pixel penguin waddles along the footer line (`src/components/penguin.tsx`):
  hand-drawn 16×16 frames — idle, blink, two waddle steps, a hop — drawn at
  3 px per cell. It stops at the edges to blink before turning back, hops and
  sends up a heart when clicked, pauses off screen and in background tabs, and
  stands still under `prefers-reduced-motion`.
- Screenshots on every project page: previous/next controls, a counter, a
  thumbnail strip, arrow keys and swipe, and a full-size view in a native
  `<dialog>`. Images are local WebP under `public/screenshots/`, sized in
  `src/lib/data/screenshots.ts` so nothing shifts on load, with alt text in all
  three languages. A project without screenshots shows no section; an image
  that fails to load is dropped from the set.
- `scripts/prerender.ts`, run by `bun run build`, writes
  `dist/projects/<id>.html` with the project's own title, description,
  canonical URL and preview image — project pages now answer 200 instead of
  the 404 GitHub Pages sends with the SPA fallback — and generates
  `sitemap.xml` from `apps.ts`, so a new project can no longer be missing
  from it.
- `bun test`: route parsing, and a check that every screenshot file exists,
  matches its declared size and has alt text in every language. CI runs it.
- A weekly workflow runs `bun run sync` and opens a pull request when stars or
  articles changed.
- Manifest icons at the sizes they claim (192 and 512 px, real PNGs).
- Skadi on the project shelf, with its own page at `/projects/skadi` and its
  README rendered underneath. It takes the fourth slot on the first page, so
  Dizey moves to the second and the shelf now runs to three pages.
- The site has its own mark: a collar and tie on the warm plate the portfolio
  already used as its accent. It is the README header, the tile on the project
  shelf and the hero of `/projects/portfolio`, all from the single SVG in
  `assets/` — the bundler resolves it, so nothing is duplicated under `public/`
  and no tile depends on the network.
- A social preview card, and README screenshots of the hero, the project shelf
  and a project page. The repository had no preview of the thing it builds.
- This changelog.

### Removed

- The Lovable developer profile link. The badge, its data entry, its icon and
  translation label, and the JSON-LD `sameAs` entry are gone.
- Leftover styles of the old store layout: `.apps-site`, `.store-menu-toggle`,
  `.store-backdrop`.

### Fixed

- "Email copied" and the install command's "Copied" only show once the
  clipboard write actually succeeded; before, a blocked clipboard still
  claimed success.

- Project card titles no longer show a trailing ellipsis. The title clamped to
  one line with `-webkit-line-clamp`, and the leading square in the `.portkill`
  wordmark counts as an atomic box, so WebKit measured an overflow that was not
  there and appended `…` after a title that fit. The card clips instead of
  clamping now, and the wordmark lays out as ordinary inline text.

## [0.1.0] - 2026-09-02

The site as it stands: a hand-built personal page, no framework beyond React,
no CSS framework, no i18n runtime.

### Added

- Turkish, English and German, with no i18n dependency. One `Messages` type
  that all three dictionaries `satisfies`, so a missing translation is a
  compile error and `bun run build` typechecks before it builds.
- Language in the URL: `?lang=` → `localStorage` → `navigator.language` → `en`,
  written back so a shared link carries the language it was read in.
- Dark mode with no flash — an inline script in `index.html` sets the class
  before first paint and the toggle persists to `localStorage`.
- A project page for every project at `/projects/:id`, resolved over the
  History API in about 85 lines rather than a routing dependency. Cards render
  a real `href`, so middle-click and ⌘-click still open a new tab, and the
  build copies `index.html` to `404.html` so GitHub Pages resolves a hard
  refresh.
- READMEs rendered on the site. `bun run readmes` pulls each project's README
  from GitHub, drops the header the hero already shows, shifts headings down a
  level, rewrites relative URLs and commits sanitized HTML — so the build stays
  offline and no markdown parser ships to the browser.
- An articles section, and a developer profiles hub linking the cloud, AI,
  design and developer platforms I keep a presence on.
- Community health files: contributing guide, code of conduct, security policy,
  issue forms and a pull request template.
- Continuous integration on pull requests, and a deploy workflow that publishes
  `main` to GitHub Pages.

[Unreleased]: https://github.com/burakboduroglu/portfolio/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/burakboduroglu/portfolio/releases/tag/v0.1.0
