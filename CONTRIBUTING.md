# Contributing

Thanks for taking the time to look at this repository.

This is my personal portfolio site, not a reusable template or a library. That
shapes what kind of contribution makes sense here:

- **Welcome:** bug reports, accessibility issues, broken links, typos,
  translation fixes, build/tooling problems, performance regressions.
- **Case by case:** small, focused improvements to structure, styling, or
  developer experience. Open an issue first so we can agree on the direction.
- **Not accepted:** changes to the personal content itself — my bio, photo,
  contact links, or which projects are listed. Redesigns and framework swaps
  are also out of scope.

If you want to reuse the code for your own site, fork it. The MIT
[LICENSE](LICENSE) covers the code; the personal content, photos, and logos in
`public/` are not part of that grant.

## Getting started

The project uses [Bun](https://bun.sh) as the package manager and runtime.

```bash
git clone https://github.com/burakboduroglu/portfolio.git
cd portfolio
bun install
bun run dev
```

| Script              | What it does                                        |
| ------------------- | --------------------------------------------------- |
| `bun run dev`       | Vite dev server with hot reload                      |
| `bun run typecheck` | `tsc --noEmit` over the whole project                |
| `bun run build`     | Runs `typecheck` first, then builds into `dist/`     |
| `bun run preview`   | Serves the production build locally                  |
| `bun run readmes`   | Pulls project READMEs from GitHub into `public/readme/` |
| `bun run deploy`    | Manual `gh-pages` deploy (CI normally handles this)  |

`bun run build` is the gate that matters: it fails on any type error, so a green
build means the change compiles and every translation is complete.

## Project layout

```
src/
  App.tsx                 Route shell — home, project page, not found
  main.tsx                Entry point
  styles.css              All styling — plain CSS, no framework
  components/             UI components
    app-site/             The project shelf, the /projects/:id page, the README
  lib/
    router.ts             History API routing, no dependency
    data/                 Language-independent structure (ids, links, icons, accents)
    i18n/                 tr / en / de dictionaries + the useT/useLocale/useApps context
    types/                Shared type declarations
scripts/
  fetch-readmes.ts        Pulls project READMEs, writes sanitized HTML
public/                   Static assets served as-is
  readme/                 Generated README HTML — committed, regenerate with `bun run readmes`
```

The split between `lib/data/` and `lib/i18n/` is deliberate: data holds only
what is the same in every language, and `useApps()` merges it with the active
translation. Please keep new content on the right side of that line.

## Translations

The site ships in Turkish, English, and German, with no i18n dependency.

`src/lib/i18n/types.ts` defines a single `Messages` type that all three
dictionaries `satisfies`. To add a string:

1. Add the key to `Messages` in `src/lib/i18n/types.ts`.
2. Run `bun run typecheck` and let the errors point you at `tr.ts`, `en.ts`,
   and `de.ts`.
3. Fill in all three. A missing translation is a compile error, so it cannot
   reach production.

If you can only write one language confidently, say so in the pull request —
a placeholder that is clearly flagged is better than a silent machine
translation.

## Style

- **TypeScript**, no `any` and no `@ts-ignore`. If the types fight you, the
  model is probably wrong.
- **Plain CSS** in `src/styles.css`. Follow the existing naming; do not add a
  CSS framework or a CSS-in-JS layer.
- Match the surrounding code — indentation, naming, and comment density.
  Comments explain *why*, not *what*.
- Respect `prefers-reduced-motion` for anything animated, and keep the heading
  hierarchy intact.

## Commits

Commit messages follow [Conventional Commits](https://www.conventionalcommits.org):

```
feat: add German translation for the apps section
fix: clamp currentPage when totalPages shrinks
refactor: move lib into src
chore: bump vite
docs: ...   perf: ...   style: ...   test: ...
```

Use the imperative mood in the subject line, keep it under ~72 characters, and
put the reasoning in the body when the change is not self-evident.

## Pull requests

1. Branch off `dev` (that is where work lands before it is merged to `main`).
2. Keep the change focused — one concern per pull request.
3. Run `bun run build` and make sure it passes.
4. Check the page at a narrow viewport; the layout is responsive and easy to
   break.
5. Fill in the pull request template, and attach before/after screenshots for
   anything visual.

`main` deploys to GitHub Pages automatically on push, so anything merged there
is live.

## Reporting bugs

Open an issue using the bug report template. The most useful reports include
the browser and viewport, the language the site was in (`?lang=tr|en|de`), and
a screenshot.

For security issues, do **not** open a public issue — see [SECURITY.md](SECURITY.md).

## Code of conduct

Participation in this repository is covered by the
[Code of Conduct](CODE_OF_CONDUCT.md).
