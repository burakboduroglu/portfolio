# Security Policy

## Supported versions

This repository is a single static site that is continuously deployed from
`main` to GitHub Pages. There are no released versions or maintenance branches —
only what is currently live is supported.

| Branch | Status                          |
| ------ | ------------------------------- |
| `main` | Live on GitHub Pages, supported |
| `dev`  | Integration branch, unsupported |

## Reporting a vulnerability

Please do **not** open a public issue for a security problem.

Report it privately in one of these ways:

1. **GitHub Security Advisories** — go to the
   [Security tab](https://github.com/burakboduroglu/portfolio/security/advisories/new)
   and open a private draft advisory. This is preferred.
2. **Email** — <info@burakboduroglu.com.tr>.

A useful report includes:

- What the issue is and where it lives (file, URL, or dependency).
- Steps to reproduce, or a proof of concept.
- The impact you believe it has.
- Any suggested fix, if you have one.

### What to expect

- **Acknowledgement** within 5 working days.
- **An assessment** — whether it is accepted, and a rough fix timeline —
  within 14 days.
- **Credit** in the fix commit or advisory, unless you prefer to stay anonymous.

This is a personal project maintained in spare time, so please treat those
timelines as intent rather than a guarantee.

## Scope

In scope:

- The site's source in `src/` and its build configuration.
- The GitHub Actions workflows in `.github/workflows/`.
- Vulnerable dependencies declared in `package.json` that ship to the browser.

Out of scope:

- The third-party sites linked from the portfolio — report those to their own
  maintainers.
- Missing security headers that GitHub Pages does not let a static site set.
- Automated scanner output with no demonstrated impact.
- Denial of service, social engineering, and physical attacks.

## Safe harbour

If you act in good faith, stay within the scope above, avoid privacy violations
and service disruption, and give us reasonable time to respond before disclosing
publicly, we will not pursue or support any action against you for your
research.
