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
- `npm run build` also runs `next-sitemap` and regenerates `public/sitemap.xml`.
- Local profiling artifacts are written under `output/` and are ignored by git.

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

### Highest remaining structural gap

- The site does not yet have a true broad `hip pain` landing page for Burlington
- There is a strong targeted page for lateral hip pain / gluteal tendinopathy, but not a broader hip-pain hub

### Monitoring priorities

After March 26, 2026 changes, monitor Search Console for:

- `physiotherapy burlington`
- `knee pain treatment burlington`
- `patellar tendinitis`
- `hip pain treatment burlington`
- `cupping therapy burlington`
- `dry needling physiotherapy burlington`

Suggested review checkpoints:

- April 23, 2026
- May 7, 2026

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
