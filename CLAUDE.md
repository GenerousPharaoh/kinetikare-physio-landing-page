# CLAUDE.md

## Project Overview

- Project: `physiotherapy-next`
- Stack: Next.js 14 App Router, React, TypeScript, Tailwind CSS
- Site: `https://www.kinetikarephysio.com`
- Main business: Kareem Hassanein Physiotherapy in Burlington, Ontario

## Working Commands

- Install deps: `npm install`
- Local dev: `npm run dev`
- Production build: `npm run build`
- Production server: `npm run start -- -p 5010`

Notes:
- `npm run build` also runs `next-sitemap` and regenerates `public/sitemap.xml` **and** `public/robots.txt`. Do not hand-edit `robots.txt` — your changes will be wiped on the next build. Edit `next-sitemap.config.js` and let postbuild regenerate.
- Local profiling artifacts are written under `output/` and are ignored by git.

## Booking Flow Architecture

**All in-site "Book" CTAs go directly to Jane**, not through `/intake`:

```
https://endorphinshealth.janeapp.com/locations/endorphins-health-and-wellness-centre/book#/staff_member/42
```

Constants live in `lib/booking.ts`:
- `JANE_BOOKING_URL` — use this for every internal booking CTA
- `BOOKING_PAGE_PATH = '/intake'` — **do not route booking CTAs through this**. It exists so `CookieBanner.tsx` can detect "user is on the ads landing page."

The `/intake` page is reserved for **Google Ads traffic only**:
- It is the destination URL set on Google Ads campaigns
- It is excluded from `sitemap.xml` (see `next-sitemap.config.js`)
- It has no internal links pointing to it (verified May 24, 2026)
- The page itself is technically indexable; if you want it stripped from organic SERPs, add `robots: { index: false, follow: true }` to `app/intake/page.tsx`

`BookingTracker.tsx` fires the Google Ads conversion sitewide on any Jane App or `tel:` link click. Attribution is handled by Google Ads via the `_gcl_aw` GCLID cookie — clicks from users without a recent ad interaction fire the event but are not credited to any campaign and do not push spend. Scoping conversion to `/intake` only was tried (commit `5efdeaa` on 2026-05-19, reverted 2026-05-26) and dropped legitimate multi-page ad-driven journeys (ad → /intake → another page → Book Now).

When adding a new booking CTA anywhere, use `JANE_BOOKING_URL` + `target="_blank"` + `rel="noopener noreferrer"`. Never use `/intake` or `/book` as a booking destination.

## Schema reviewCount is multi-sourced

The Google review count appears in 9 places that must stay in sync when the count changes:
- `app/layout.tsx` (Organization schema)
- `app/conditions/[slug]/page.tsx` (dynamic condition pages)
- `app/conditions/{hip-pain,knee-pain,shoulder-pain,elbow-pain}/page.tsx`
- `app/conditions/pain-guides/page.tsx`
- `app/conditions/pain-guides/{pain-below-kneecap,fluid-on-the-knee}/page.tsx`

Plus two UI surfaces:
- `components/GoogleReviews.tsx` (`totalGoogleReviews` constant)
- `components/sections/HeroSectionModern.tsx` (the hero badge)

The displayed count reflects the **actual Google total**. The carousel itself shows a curated subset, not all reviews — this mismatch is intentional, not a bug.

## Current Business / SEO Direction

As of March 26, 2026, the site SEO work is intentionally focused on the niches the owner actually wants to attract, not every condition the site can rank for.

### Current priority topics

- Physiotherapy in Burlington
- Sports injury rehabilitation
- Knee pain treatment
- Patellar tendinopathy / jumper's knee
- Lateral hip pain / gluteal tendinopathy / GTPS
- Dry needling
- Cupping therapy
- Sciatica remains acceptable, but is secondary to the items above

### Explicitly deprioritized for current SEO emphasis

- Whiplash
- Neck pain
- Broad generic condition expansion that does not match desired patient mix

### Geo focus

- Burlington is the primary commercial target
- Nearby communities still matter operationally, but SEO work should not aggressively chase Oakville or other nearby towns unless dedicated, non-thin local landing pages are created

## Recent Work Already Completed

### Performance / delivery improvements

- Removed unused Trustindex loading
- Lazy-loaded the search modal
- Reduced broad route prefetching on large link groups
- Removed `priority` from below-the-fold images
- Deferred footer Google Maps loading with a lightweight placeholder/facade
- Cleaned up font loading path
- Added `/output/` to `.gitignore`

### Technical SEO / crawl improvements

- FAQ content now renders in initial HTML instead of showing a loading placeholder
- Sitemap and robots behavior consolidated around `next-sitemap`
- `privacy` and `terms` are `noindex,follow`
- Sitemap `lastmod` now reflects content freshness logic rather than deploy time
- Ignored `keywords` meta clutter was removed from main pages

### Comprehensive audit pass completed on May 24, 2026

- Routed every in-site booking CTA directly to Jane (Header, services page, conditions index, Care Journey, PatternMatcher) — `/intake` is now ads-only (see Booking Flow Architecture above)
- Restored Content-Security-Policy in `next.config.js` with `frame-src` allowlist for Google Maps + `form-action` for Jane; X-Frame-Options set to SAMEORIGIN; Permissions-Policy added
- `experimental.optimizePackageImports` enabled in `next.config.js` for `framer-motion`, `@phosphor-icons/react`, `@heroicons/react`
- Dropped `lucide-react` and `react-icons` (migrated 3 import sites to `@heroicons/react`)
- AI crawler allowlist (GPTBot, ClaudeBot, anthropic-ai, PerplexityBot, Google-Extended, CCBot) added to `next-sitemap.config.js` so the robots.txt regeneration includes them
- Accessibility: `aria-current="page"` on Header nav; `useReducedMotion()` gating CareJourney auto-scroll and GoogleReviews carousel; global `prefers-reduced-motion` CSS in `globals.css`; SearchModal body-scroll lock
- Theme + color-scheme moved to Next 14 viewport export
- Resource hints (preconnect to googletagmanager.com + google-analytics.com) added in `app/layout.tsx` `<head>`
- Meta title/description tightening on homepage, services, knee-pain (all now within SERP truncation thresholds)
- `npm audit fix` ran transitive bumps (14 → 6 vulnerabilities; remaining 6 require Next 14→16)

### Focused SEO strengthening pass completed on March 26, 2026

- Homepage and services page were repositioned around:
  - Burlington physiotherapy
  - Sports rehab
  - Knee and hip pain
  - Dry needling
  - Cupping
- Condition-page metadata pattern was changed from `Physiotherapy in Burlington` to `Treatment in Burlington`
- Homepage featured condition links were reweighted toward current priority topics
- Internal anchor text was changed in several card/list components to be more descriptive and less generic than `Learn More`
- The GTPS page was renamed at the content-data layer to better match real search language:
  - `Lateral Hip Pain & Gluteal Tendinopathy`
- Metadata was tightened for:
  - sciatica
  - knee pain
  - patellar tendinopathy
  - lateral hip pain / gluteal tendinopathy
  - sports rehab
  - dry needling
  - cupping

## Key Files For Current SEO Direction

- Homepage metadata and schema:
  - `app/page.tsx`
- Homepage hero messaging:
  - `components/sections/HeroSectionModern.tsx`
- Homepage services section and internal links:
  - `components/sections/ServicesSection.tsx`
- Homepage featured conditions:
  - `components/sections/PopularConditionsSection.tsx`
- Services page metadata:
  - `app/services/page.tsx`
- Services hero:
  - `components/services/ServicesHero.tsx`
- Dynamic condition metadata template:
  - `app/conditions/[slug]/page.tsx`
- Condition data and custom meta descriptions:
  - `lib/conditions-data.ts`
- Treatment data and custom meta descriptions:
  - `lib/treatments-data.ts`
- Condition page internal treatment links:
  - `components/ConditionPageClient.tsx`
- Treatment page internal condition links:
  - `components/treatments/TreatmentContent.tsx`

## Current Gaps / Next Likely Priorities

### Open items from the May 24, 2026 audit

- **Next.js 14 → 16 upgrade — DONE (2026-05-29, commit `1591ce8`).** Now on Next 16.2.6 + React 19.2; cleared all 4 high-severity advisories (SSRF, RSC DoS, image-optimization DoS, cache poisoning). Builds stay on webpack via `next build --webpack` so the custom React-single-instance webpack config is preserved (Turbopack migration deferred). `params` is async in the 3 dynamic routes (`conditions/[slug]`, `conditions/compare/[pair]`, `treatments/[slug]`). Lint moved to ESLint 9 flat config (`eslint.config.mjs`; `next lint` was removed in 16), ruleset preserved — the new React-Compiler readiness rules (`react-hooks/refs`, `set-state-in-effect`, `immutability`) are disabled to match prior behaviour and are a future cleanup. Remaining `npm audit`: 2 moderate, build-time-only (nested `postcss` in Next's deps; awaits a future Next patch).
- **Hero JPG (`/public/images/clinic-pic-may-2025.jpg`, 1.8 MB)** — the `.webp` twin already exists at 775 KB and `next/image` auto-converts, so the raw JPG in `/public/` is just the source asset, not what ships. Could be deleted but no perf impact either way.
- **Gold text contrast** — `text-[#B08D57]` on white computes to ~4.2:1 (below the 4.5:1 AA threshold for normal text). Used in a handful of FAQ accordion headings. Visual-design judgment call before tweaking the brand color.
- **FAQ schema breadth** — only ~5 of 60+ condition pages carry FAQ JSON-LD. Highest-yield LLM-citation format per current research; expansion is a content-writing task.
- **Carousel swipe gestures on mobile** — `GoogleReviews` and `CommitmentCarousel` are arrow/dot-only; mobile users on `CommitmentCarousel` have only dots since arrows are `hidden sm:flex`.

### Monitoring priorities

Monitor Search Console for:

- `physiotherapy burlington`
- `knee pain treatment burlington`
- `patellar tendinitis`
- `hip pain treatment burlington`
- `cupping therapy burlington`
- `dry needling physiotherapy burlington`

## Design / UX Preference

- Preserve the established look and feel
- Avoid large visible design changes unless there is a clear ranking or usability reason
- Small copy adjustments are acceptable when they improve page ownership and query alignment without making the site feel worse

## Verification Standard

For meaningful content or SEO changes:

1. Run `npm run build`
2. Spot-check the affected pages in a browser
3. Confirm title tags and visible hero/page-intro copy are aligned
4. Make sure `public/sitemap.xml` regenerates cleanly
