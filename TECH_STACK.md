# Tech Stack — Hopeful Memories

## Core
| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 14.2.35 | React framework (App Router) |
| React | 18.3.x | UI library |
| TypeScript | 5.4.x | Type safety |
| Tailwind CSS | 3.4.x | Utility-first styling |

## Build & Deploy
| Tool | Purpose |
|------|---------|
| Static Export | `output: 'export'` in next.config.mjs |
| Netlify | Hosting and deployment |
| Netlify Forms | Contact form + newsletter signup |

## Fonts
| Font | Source | Usage |
|------|--------|-------|
| Source Serif 4 | next/font/google | Headings (serif) |
| Inter | next/font/google | Body text (sans-serif) |

## Dev Dependencies
| Package | Purpose |
|---------|---------|
| PostCSS | CSS processing |
| Autoprefixer | Vendor prefix automation |
| ESLint | Code linting |
| eslint-config-next | Next.js ESLint rules |

## Constraints
- No runtime server — fully static
- No external JavaScript libraries unless strictly necessary
- No CSS-in-JS — Tailwind only
- Images: `next/image` with `unoptimized: true` (static export)
- Forms: Netlify Forms (no custom backend)
- Relative imports only (no `@/` path alias at build time)
