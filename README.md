# wiselook.ai

Marketing/landing site for Wiselook, deployed at [wiselook.ai](https://wiselook.ai).

## Stack

- [Vite](https://vitejs.dev/) + React 18 + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) + a small set of [shadcn/ui](https://ui.shadcn.com/) components (Radix UI primitives)
- Fonts self-hosted via [@fontsource](https://fontsource.org/) (Inter, Space Grotesk) — no external font requests
- Static output, no backend: the whole site is a pre-built bundle served from GitHub Pages

## Development

```bash
npm i
npm run dev            # start the dev server (http://localhost:8080)
```

Other scripts:

```bash
npm run lint            # ESLint
npx tsc --noEmit        # type check
npm run build            # production build -> docs/
npm run build:dev        # build in development mode (unminified, for debugging)
npm run preview          # locally preview the production build
```

## Structure

```
src/
  components/
    landing/    # the sections that make up the landing page (Hero, ProofStrip,
                # ProblemSection, HowItWorks, UseCases, WhyWiselook, SecuritySection,
                # TeamSection, FaqSection, ContactCta, SiteNav, SiteFooter, StickyCta, ...)
    ui/         # the shadcn/ui primitives actually used by the landing components
    CookieConsent.tsx
  pages/        # route-level components (Index, Support, NotFound)
  hooks/        # small shared hooks (hash-scroll, scroll-reveal)
  lib/          # constants and small utilities (cn, scroll helpers, sticky CTA store)
  assets/       # images and logos used by the landing components
```

Copy for each section lives inline in its component under `src/components/landing/` —
that's the source of truth for page content, not a separate spec file. See
`src/landing.md` for a short pointer to where each section lives.

## Deployment

The site builds to `docs/` (see `vite.config.ts`), which is what GitHub Pages serves
from on the `main` branch. `.github/workflows/deploy.yml` runs on every push/PR:

1. **build** job: `npm ci`, lint, type check, `npm run build`, then uploads `docs/`
   as a Pages artifact.
2. **deploy** job: only runs on pushes to `main`, publishes the artifact to GitHub Pages.

The custom domain (`wiselook.ai`) is configured via the `CNAME` file at the repo root,
which Vite copies into `docs/` on build (GitHub Pages reads `CNAME` from the published
artifact).

`docs/` is git-ignored — it's a build artifact, not something to commit by hand.
