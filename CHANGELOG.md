# Changelog

All notable changes to this site are recorded here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and the project
follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- The site has its own mark: a collar and tie on the warm plate the portfolio
  already used as its accent. It is the README header, the tile on the project
  shelf and the hero of `/projects/portfolio`, all from the single SVG in
  `assets/` — the bundler resolves it, so nothing is duplicated under `public/`
  and no tile depends on the network.
- A social preview card, and README screenshots of the hero, the project shelf
  and a project page. The repository had no preview of the thing it builds.
- This changelog.

### Fixed

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
