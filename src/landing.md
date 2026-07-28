# Landing page map

Copy for every section lives inline in its component under `src/components/landing/`
— that's the source of truth for page content, not this file. This is just a pointer
to where each section lives, in the order they render on `/` (see `src/pages/Index.tsx`).

| Section (anchor)                   | Component                                                                |
| ----------------------------------- | ------------------------------------------------------------------------- |
| Nav                                 | `SiteNav.tsx`                                                            |
| Hero                                 | `HeroSection.tsx` (+ `ClaireChatMock.tsx`)                               |
| Proof strip                         | `ProofStrip.tsx`                                                         |
| Problem (`#problem`)                | `ProblemSection.tsx` (+ `TalentPyramid.tsx`)                             |
| How it works (`#how-it-works`)      | `HowItWorks.tsx`                                                         |
| Use cases (`#use-cases`)            | `UseCases.tsx`                                                           |
| Why Wiselook                        | `WhyWiselook.tsx` (+ `CompetitorQuadrant.tsx`)                           |
| Security and privacy (`#security`)  | `SecuritySection.tsx`                                                    |
| Team / About (`#about`)             | `TeamSection.tsx`                                                        |
| FAQ                                  | `FaqSection.tsx`                                                         |
| Contact (`#contact`)                | `ContactCta.tsx`                                                         |
| Footer                               | `SiteFooter.tsx`                                                         |
| Mobile sticky CTA                   | `StickyCta.tsx` (rendered inside `Index.tsx`)                            |
| Cookie banner                       | `CookieConsent.tsx` (rendered in `App.tsx`, on every route)              |

Other routes: `/support` (`src/pages/Support.tsx`), 404 (`src/pages/NotFound.tsx`).
