# CLAUDE.md

## Project Overview

- Project: `physiotherapy-next`
- Stack: **Next.js 16.2.6 App Router / React 19.2** / TypeScript / Tailwind 3.4 / Framer Motion 12.7
- Site: `https://www.kinetikarephysio.com`
- Main business: Kareem Hassanein Physiotherapy in Burlington, Ontario

## Working Commands

- Install deps: `npm install`
- Production build: `npm run build`
- Production server: `npm run build && PORT=4040 npm run start`
- **NEVER `npm run dev`** — Framer Motion hydration issues. Always test on a production build.
- Typecheck: `npx tsc --noEmit` · Lint: `npm run lint` (ESLint 9 flat config in `eslint.config.mjs`; `next lint` was removed in Next 16)

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
- The page is set to `robots: 'noindex, follow'` in `app/intake/page.tsx` (verified live 2026-06-10), so it stays out of organic SERPs while remaining crawlable

`BookingTracker.tsx` fires the Google Ads conversion sitewide on any Jane App or `tel:` link click. Attribution is handled by Google Ads via the `_gcl_aw` GCLID cookie — clicks from users without a recent ad interaction fire the event but are not credited to any campaign and do not push spend. Scoping conversion to `/intake` only was tried (commit `5efdeaa` on 2026-05-19, reverted 2026-05-26) and dropped legitimate multi-page ad-driven journeys (ad → /intake → another page → Book Now).

When adding a new booking CTA anywhere, use `JANE_BOOKING_URL` + `target="_blank"` + `rel="noopener noreferrer"`. Never use `/intake` or `/book` as a booking destination.

Also give it a `data-booking-source="..."` attribute. `BookingTracker` reads it as the GA4 `event_label`; without it the click reports `site_link` and cannot be told apart from any other CTA. Existing labels: header, header_menu, hero, floating_mobile, floating_desktop, condition_intro, condition_management, condition_faq, condition_footer, intake_sticky_bar (added 2026-09-14, commit 3795feb; earlier weeks are all `site_link`).

Kareem also practises at Headon Physio and PhysioMax Wellness, each with its own Jane instance. **Sitewide CTAs link to Endorphins' Jane only** (the ads, the schema and the Business Profile all point there). **The one exception is `/contact`** (Kareem's decision, 2026-09-14): it links all three booking pages, `PHYSIOMAX_BOOKING_URL` and `HEADON_BOOKING_URL` in `lib/booking.ts`, under a note that each clinic has its own Jane booking page. Do not add those two links anywhere else without asking. `BookingTracker` fires GA4 `booking_click` for any Jane host (labels `contact_endorphins` / `contact_physiomax` / `contact_headon` on that page) but the Google Ads conversion only for `endorphinshealth.janeapp.com`.

The Business Profile appointment link is the deep link `https://endorphinshealth.janeapp.com/#/staff_member/42/treatment/133`, preferred (confirmed at the API 2026-09-14). It lands on the time picker for the initial assessment; `JANE_BOOKING_URL` deliberately stays the general entry for returning patients.

## Contact page

`/contact` was rebuilt twice on 2026-09-14. The first rebuild (36e1028) had the palette without the composition and was critiqued in detail (oversized band, email as a display headline, a floating timetable widget, faint clinic columns, the same schedule printed three times). The second (59fcc13) is the current shape:

- Opener: navy, compact two-column grid. Left: H1, two-sentence lede, and `components/contact/WeekSchedule.tsx` (day / clinic / hours table, seven rows, Tuesday split, today tinted after hydration). Right: one contact-and-booking panel: email, Book online (three rows, one per clinic), and the three reception numbers as tel links. On phones the panel follows the intro so the actions come before the schedule.
- Clinics: three full-width hairline rows (logo as the visible identity, the clinic name only as an sr-only h3 and the logo alt, address, Directions; hours at that clinic; action). Every row has a Book online button in that clinic's own colour, sampled from its logo (Endorphins `#7FB83F` green, PhysioMax `#F26522` orange, Headon `#003377` navy; the panel rows carry matching dots), to that clinic's own Jane with "Or call reception, (905) ..." beneath; Endorphins adds "Direct billing available." The panel's Book online block is a note ("Each clinic has its own Jane booking page. Choose the one you want to be seen at.") plus three rows. Added 2026-09-14 at Kareem's request (commit after 59fcc13); before that the page was Endorphins-only for booking.
- No photos on this page (Kareem's call). No floating pills here (`FloatingButtons` returns null on `/contact`; `html:has([data-contact-page])` zeroes `--mobile-cta-height`). The footer is the concise variant on `/contact`.

Facts the copy rests on: the phone numbers are each clinic's reception desk (Endorphins (905) 634-6000, PhysioMax (905) 315-9955, Headon (905) 332-7758, L7M 0Z1), and the one line that reaches Kareem himself is `kareem.hassanein@gmail.com`. Do not write "phone is the fastest way to reach me". The whole page sits in `data-booking-source="contact_page"`.

Two global CSS traps found here: `app/globals.css` repaints every `<section>` with `background-color: transparent` plus a translucent 135deg gradient `background-image`, so a section that must be a solid colour needs `!bg-[...]` **and** `!bg-none`; and an `h1` without an explicit colour rendered near-black inside a `text-white` section (use `!text-white`).

Footer (all pages, same commit): hours are grouped under each clinic's name and street, replacing the asterisk/dagger footnotes that sat beside the Palladium Way address; phone padding-bottom now includes `--mobile-cta-height` so the pill clears the legal links; the desktop `padding-right` clearance for the pills runs to 1499px.

## Button hover rule

**The real cause of gold text on hover was `styles/color-harmony.css`**, not the button classes: `a:not(.btn):not(.button-gold):not([class*="btn"]):not([class*="text-white"]):hover { color: gold-600 }` at specificity (0,5,1) beat every component `hover:text-*` utility, so any anchor styled as a button with dark text (green/orange clinic buttons, FAQ pills, the conditions CTA) got dirty-gold text on hover. Since 2026-09-14 the pair also excludes `[class*="hover:"]`: a link that declares its own hover utility opts out. Plain text links with no hover class still get the gold hover. To check a hover state, force `:hover` with `CSS.forcePseudoState`, **wait ~350 ms for the colour transition**, then read the computed colour; reading immediately returns the pre-hover value.

Kareem, 2026-09-14: a coloured button hovers to a *lighter* tint of itself with the text colour unchanged. Never darker or muddier (`#D4AF37` hovers to `#E6C66A`; `.button-gold` `#B08D57` hovers to `#C4A26A`; the contact page clinic colours lighten the same way), and text never turns gold on a gold ground. He read the old darker hovers (`#C9A227`, `#A17D47`, `#B08D57`) as "the text goes gold or dirty gold".

## Context-loss defects fixed 2026-09-14 (from an external audit)

Four real defects, all the same shape: a transformation dropped the thing that gave a value its meaning.

- **Conditions search linked the wrong page.** `ConditionsPageClient` filtered the display strings but not `conditionsData`, then looked slugs up by index, so searching "sciatica" showed Sciatica and linked `/conditions/low-back-pain`. Both arrays are now filtered together. Rule: never use position as identity; a route crawler cannot catch this because the wrong page still returns 200.
- **Reduced motion painted dark surfaces white.** `styles/performance.css` set `background-color: rgba(255,255,255,.95) !important` on every `backdrop-blur-*` element under `body.reduce-animations`, which `PerformanceProvider` adds for `prefers-reduced-motion` **and** for any device `useDevicePerformance` calls low-end (`deviceMemory <= 4`, `hardwareConcurrency <= 2`, or width <= 768 with `deviceMemory <= 6`; Chrome on most Android phones reports 4). White text on a white header for a large share of Android visitors. The rule now only removes the blur. Reduced motion must never change colours.
- **Ads landing page hours lost their clinic.** `HOURS_SUMMARY` listed Wed/Fri (Headon) under the Endorphins address with no label. It now reads "(Headon Physio, Walkers Line)".
- **Intake header linked a different Jane screen than the page's buttons.** `Header` now uses `JANE_INTAKE_BOOKING_URL` on `/intake`.

Also aligned: the patellar tendinopathy research card said 6-8x body weight in its heading and roughly 4-5x in its audited detail; heading and biomechanics text now say "several times body weight, estimates roughly 4-5 times". Still open from that audit and deliberately not touched without Kareem: the "Knee Pain" umbrella condition (`knee-pain-patellofemoral`) sharing a name with the knee hub; separate review dates on condition pages; the red-flag list on patellar (urgency tiers are a clinician's call).

## Site name contract (2026-09-14)

External parsers were seeing five names for the website (Kareem Hassanein Physiotherapy, KinetiKare Physiotherapy, Kareem Physio, KinetiKare Physio, and "KinetiKarePhysio" from the header's three-span wordmark, which one citation system rendered as "Kinetika Rephysio"). Kareem dropped the internal capital K: the brand is **Kinetikare**, descriptor **Physio**, alternate **Kinetikare Physiotherapy**; the professional entity stays **Kareem Hassanein Physiotherapy** (`#organization` name) and the person is Kareem Hassanein. So: `WebSite.name`, `Brand.name`, `applicationName`, `og:site_name` on every page (each page's `openGraph` replaces the layout's, so `siteName` is set per page), `apple-mobile-web-app-title` and both manifests all say `Kinetikare`; the header wordmark is one text node "Kinetikare" plus a separate "Physio"; the footer is "Kinetikare" plus a small "Physiotherapy" with a real space between. Never rebuild the name from styled fragments, and do not reintroduce "KinetiKare" anywhere machine-readable. Page titles keep their own wording. After a change like this, request re-indexing of the homepage in Search Console; Google's site-name pick can lag the recrawl.

## Release 1 of the September 2026 redesign plan (shipped 2026-09-15)

Kareem accepted a three-release plan (record in memory: `kinetikare-hero-direction-2026-09`). Release 1 is the part that needs no artwork:

- **`/fees-and-first-visit`** (`app/fees-and-first-visit/page.tsx`): appointment types and fees (the Services table: initial assessment $130, follow-up 30 min $90, 60 min $145), direct billing at Endorphins, the four-step first visit, what to wear and bring, cancellation notice, where to come with Endorphins hours from `lib/hours.ts`. Wording is lifted from the published FAQ and Services answers; the only new sentences are connective. Booking links carry `data-booking-source="fees_page"`. It replaced **Home** in the header nav (the logo is the home link) and was added to the footer nav. A fee line under the hero buttons was tried and removed the same day at Kareem's request ("its weird"); the page is reached from the nav and footer only.
- **Care Journey** (`components/sections/CareJourneySection.tsx`): four stages on one connecting rule (desktop), two by two (tablet), a numbered left rail read by scrolling (phone). It replaced a horizontal carousel of 75vw glass cards. Heading, titles and descriptions unchanged.
- **Floating pills** (`components/FloatingButtons.tsx`): the phone pill shows when no inline `janeapp.com` link is at least 20% on screen (IntersectionObserver, re-observed on route change and 1.2 s later), not after a fixed 320 px; hidden while the body scroll is locked by the menu or search; still absent on condition detail pages, `/contact` and `/intake`.
- **Home footer**: the concise variant with the identity block (Book Online + CPO registration) and navigation but no repeated phone, email, address or hours; the home page's own contact section carries those.
- **Header**: nav links are `whitespace-nowrap`; the phone number moved from the 1440 to the 1600 breakpoint because the wider nav clipped Book Now at 1440.

## Home hero (rebuilt 2026-09-15, full creative control from Kareem)

`components/sections/HeroSectionModern.tsx` + `components/sections/HeroMotionField.tsx`. The subject is movement analysed: a running gait cycle drawn live on a canvas as a motion-capture constellation (14 joint markers, hairline segments, fading gold trails from the knees and ankles, a ring on the loaded knee), computed each frame from sagittal joint-angle curves. It floats over the dimmed newer treatment-room photograph (`/images/endorphins-treatment-room.webp`, opacity 0.34) on the right 54% of desktop, and in its own 4:5 frame below the text on phones. Cursor x scrubs the cycle, cursor y tilts the trunk; the room and a gold bloom parallax against each other and settle with scroll; the primary button is magnetic. No review marquee, no diagonal clip, no photo mask cut. Name, slogan, proposition, buttons and the trust row (5.0 on Google, 31 reviews linked to the listing by CID, "Accepting new patients") are painted at full opacity on the first frame; only transforms animate (`heroRise` keyframes), so LCP no longer waits on hydration. Reduced motion renders one still frame with trails. Phones get a softer glow and a 30 fps cap.

What Kareem rejected on the way here, so nobody proposes it again: AI figures with the joint anatomy opened up (two were generated via the Codex bridge, `~/Documents/Websites/kinetikare-hero-review/plates/new/hero/`, "Im not a fan of these designs"), an AI-adapted treatment room, a plain photo hero, a typography-only hero, and abstract AI artwork. He wanted "something more creative"; the constellation is that answer.

Review count surfaces after this rebuild: `GoogleReviews.tsx` (`totalGoogleReviews`), the hero (`REVIEW_COUNT`), and the two `/intake` hits. The grep in "The review count is multi-sourced" still finds all of them.

## Hours live in one file

`lib/hours.ts` is the only place clinical hours are defined. It feeds the root schema (`ENDORPHINS_OPENING_HOURS_SCHEMA`), `Footer.tsx`, `ContactSection.tsx`, the ads landing page summary (`HOURS_SUMMARY`) and `components/HoursList.tsx`, which the five regional hubs, two pain guides and the compare template render. Before 2026-09-14 the same rows were hand-typed in twelve files and had drifted.

Three clinics, marked differently: Endorphins (plain; Mon/Thu 1:30-8:00 PM, Tue 3:30-8:00 PM), Headon Physio (asterisk; Wed/Fri 2:00-7:30 PM), PhysioMax Wellness (dagger; Tue 10:00 AM-2:30 PM, Sat 11:00 AM-3:00 PM). Two things are enforced by construction and must stay that way: the Palladium Way schema entity carries **Endorphins days only** (the builder filters by `site`), and `HOURS_SUMMARY` on the ads landing page omits PhysioMax because that page exists to convert Endorphins ad clicks.

8:00 PM is Kareem's real last slot and matches his Business Profile. Endorphins' own site advertises 7:00 PM because reception is not always staffed later; that is the facility's number, not ours, and the gap is the normal shape of a nested practitioner listing rather than a contradiction.

## The review count is multi-sourced

The Google review count now appears in **four** UI surfaces across three files:
- `components/GoogleReviews.tsx` (`totalGoogleReviews` constant)
- `components/sections/HeroSectionModern.tsx` (the mobile hero trust badge)
- `components/intake/IntakeLandingPage.tsx` (twice: the star-rating line and the testimonial section heading)

It used to appear in 13 places. The other nine were JSON-LD `aggregateRating` blocks, all removed on 2026-09-05 in commit `5d4582a` because self-serving review markup on your own site is not eligible for rich results and risked a structured-data penalty. Do not reintroduce them.

Before changing the count, run this and confirm you have every hit:

```bash
grep -rn "reviewCount\|totalGoogleReviews\|[0-9]\+ reviews\|from [0-9]\+ Google" app components
```

The `/intake` hits are easy to miss, and that page is the Google Ads landing page, so a stale count there is the one that costs money.

As of 2026-09-11: **31** total, **26** featured in the carousel.

The displayed count reflects the **actual Google total**. The carousel itself shows a curated subset, not all reviews — this mismatch is intentional, not a bug.

## Condition hubs and breadcrumbs

Five regional hub pages sit above the condition pages: `/conditions/{knee-pain,hip-pain,shoulder-pain,elbow-pain,foot-ankle-pain}`.

`lib/condition-hubs.ts` is the single source of truth mapping a condition to its hub. It is read by **both** the visible breadcrumb in `components/ConditionPageClient.tsx` **and** the `BreadcrumbList` schema in `app/conditions/[slug]/page.tsx`, plus `HUB_PATHS` in `components/FloatingButtons.tsx`. Change it in one place.

Deliberate decisions in that file, do not "fix" them:
- **spinal-health has no hub.** Burlington back-pain queries drew ~4 impressions in a quarter, and a back hub would compete with the already-indexed `/conditions/low-back-pain`.
- **Wrist and hand conditions are excluded from the Elbow hub** (they share the `elbow-wrist-hand` category but "Elbow Pain" would misdescribe carpal tunnel), as are thoracic-outlet-syndrome and diabetes-related-conditions from the Shoulder hub.

The condition breadcrumb uses `flex-wrap` with `gap-x-2 gap-y-1`, not `space-x-2`. Long condition names overflowed the viewport at phone widths before this; `space-x` also breaks on wrapped rows.

## One Person node, one business node

Rebuilt 2026-09-14 (commits 3795feb, a5fe978). Before this the site declared two root Person ids (`#person`, thin and nested in `founder`, which `SEO_PERSON_ID` pointed every page's author at; and `#kareem-hassanein`, the rich node nothing referenced) and minted a fresh Person and LocalBusiness on every condition page through relative `@id`s. Google was reconciling about 64 of Kareem.

Now: exactly one Person, `https://www.kinetikarephysio.com/#person`, declared in `app/layout.tsx` and shared verbatim by endorphinshealth.com and physiomaxwellness.ca. `worksFor`/`workLocation` lists all three clinics. The business node `#organization` is typed `["Physiotherapy","MedicalBusiness"]` (PhysicalTherapy is a treatment, not a business), keeps the Endorphins NAP for parity with the listing, points `location`/`containedInPlace` at `https://endorphinshealth.com/#clinic`, and carries a ReserveAction. Condition pages reference `SEO_PERSON_ID` as provider; treatment pages reference `SEO_ORGANIZATION_ID` and `SEO_PERSON_ID`; hubs and guides no longer declare their own LocalBusiness.

Rules: **never a relative `@id`** in a page template (it resolves against the page URL and mints a node per page); **never a second Person id**; the pin is `43.4078162,-79.8262185`, read from Google's own Maps URL for the listing (CID `12525727525636452787`, Place ID `ChIJD8TZ2clhK4gRs7HkBtJS1K0`), and both sites had it wrong before. The reviews carousel links to the practitioner listing by CID. `treatmentOffered`, `acceptsInsurance` and `healthPlanAccepted` are not schema.org properties and were removed; do not reintroduce them. Verify the graph after any schema change by sweeping all 100 built pages for Person and business nodes (the check is in the 2026-09-14 commit message). Full audit: https://claude.ai/code/artifact/fe07393d-088e-4706-8e64-f82b9634f006

## Portraits

Two studio shoots exist and they are easy to confuse.

- **Use the tucked one** (`public/images/professional-photo-kareem-hassanein-...png`, belt visible). It is on `/about` and is the value of both JSON-LD `image` fields in `app/layout.tsx`.
- The **untucked** variants (`kareem-profile.webp`, `kareem-profile-backup.webp`) were **deleted 2026-09-11**. They were never rendered anywhere, but they were the `image` value in the homepage schema, which was enough to put them in Google Images under the homepage title. Removal requests were filed in Search Console.

**A JSON-LD `image` value alone is enough to rank a photo in Google Images.** When auditing what Google shows, check schema fields, not just `<img>` tags.

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

### Local search and entity audit completed on 2026-09-14

- Entity graph unified (see "One Person node, one business node" above) on this site and on endorphinshealth.com (commit ae9c425 there: clinic `@id`, employees by reference, geo, ReserveAction, physio page schema, GA4 outbound events) and physiomaxwellness.ca (plugin 1.30.4).
- Hours centralised in `lib/hours.ts` (see "Hours live in one file"), corrected to 8:00 PM, Headon days removed from the Palladium Way schema, PhysioMax days added.
- Reviews link to the practitioner listing; pin corrected; `data-booking-source` on every CTA; PhysioMax logo on About; GBP appointment link moved to the deep link and set preferred.
- Measured, not fixed: home LCP 2.07 s in the lab with 98% render delay on the H1 (Framer stagger holds it at opacity 0 until hydration plus a 300 ms delay and 800 ms fade); dry needling 1.27 s; CLS 0 on both. Held until the hero redesign lands.

### Audit-driven a11y / SEO / conversion pass completed on 2026-06-10

- **Accessibility**: focus trap + Escape + body-scroll lock + return-focus on the mobile nav drawer (`Header.tsx`) and `SearchModal` (now `role="dialog"`); roving arrow-key navigation on the conditions filter + condition-page tablists via `lib/roving-tabs.ts`; hero review marquee `aria-hidden`; `aria-live` slide announcement + `aria-hidden` on non-current slides in `GoogleReviews` + `CommitmentCarousel`; `text-slate-400` -> `500` on ancillary labels; cookie-banner buttons to 44px targets.
- **SEO titles**: `generateConditionTitle` (`app/conditions/[slug]/page.tsx`) now fits titles to ~60 chars (front-loads "{name} Treatment in Burlington", drops the brand suffix on long names); curated hub pages + conditions index + FAQ titles trimmed to match. Patellar 93 -> ~60, GTPS 96 -> ~62.
- **Conversion**: `FloatingButtons` rewritten from a navy icon-only FAB that tucked away on scroll into a persistent gold "Book" + slate "Call" pill pair (labelled, 48px+ targets); hidden on mobile for condition detail pages (kept on desktop) to avoid colliding with the condition bottom bar. Condition pages gained a "Book an assessment" strip atop the mobile bottom bar and a contextual booking band at the end of the Management tab. New CTAs use `JANE_BOOKING_URL`.
- **Verified, no change needed**: the `MedicalWebPage` `author`/`publisher` `@id` references resolve correctly (the root `layout.tsx` emits `#person`/`#organization` on every page) — the audit's "dangling reference" finding was a false positive.

### Accessibility and UI polish pass completed on 2026-05-30

- Global `<MotionConfig reducedMotion="user">` added in `context/PerformanceContext.tsx` so all Framer Motion respects `prefers-reduced-motion`; `CommitmentCarousel` auto-advance is now gated by `useReducedMotion()`.
- Small static gold text darkened from `#B08D57` to `#8A6F0A` for WCAG AA (see "Gold text contrast" under Current Gaps for scope and the residual tinted-badge case).
- `CommitmentCarousel` mobile dot navigation added; `GoogleReviews` mobile arrows bumped to a 44px tap target; `RelatedConditionsList` hover-arrow nudge.

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
- **Gold text contrast** (addressed 2026-05-30): small static gold text moved from `#B08D57` (~4.2:1 on white) to the darker `#8A6F0A` (~4.8:1) already used for eyebrow labels on curated pages. Icons, hover states, large display headings, and gold-on-dark were left as `#B08D57`. 269 instances across 26 files. Residual: small badges on a `bg-[#B08D57]/10` tint sit at ~4.39:1, a hair under AA at that size (the tint is the limiter, not the text); closing it would need a slightly darker gold for tinted badges or a more neutral badge background.
- **FAQ schema breadth** (not a real gap): the dynamic condition template (`app/conditions/[slug]/page.tsx` lines 342-380) builds a `FAQPage` schema from each condition's `faqs` and emits it whenever present, so every condition that carries FAQ data (~58 in `lib/detailed-conditions-content.ts`) ships FAQ JSON-LD. The curated pages and `/faq` emit their own `FAQPage` too. The earlier "~5 pages" figure only counted hand-built static pages and missed the dynamic coverage.
- **Carousel swipe gestures (implemented)**: both `GoogleReviews` (`onCarouselTouchStart/End`) and `CommitmentCarousel` (`handleTouchStart/End`) support horizontal swipe; `CommitmentCarousel` also has mobile dot navigation and reduced-motion-aware auto-advance. On 2026-06-10 both gained an `aria-live` slide announcement and `aria-hidden` on non-current slides.

### Open from the 2026-09-14 audit

- Hero H1 render delay (one-line fix; ship with the hero redesign, not before).
- One `@graph` per page instead of 8 to 16 separate JSON-LD blocks.
- Knee hub title back to "Knee Pain Treatment in Burlington | Kareem Hassanein" (the other four hubs use that form).
- A visible link from `/about` or the author byline to `https://endorphinshealth.com/team/kareem-hassanein/`, which the schema names as the same person.
- Schema `name` parity with the listing title (it is the first `alternateName` now; making it the `name` is Kareem's call).
- Off-site: 14 external links, none editorial; Headon does not link; no directory or association citations. This is what `physiotherapy burlington` at position 25 responds to.
- Business Profile: 31 reviews with zero replies, zero posts; drafts from 2026-09-05 await sign-off.

### Monitoring priorities

Monitor Search Console for:

- `physiotherapy burlington`
- `knee pain treatment burlington`
- `patellar tendinitis`
- `hip pain treatment burlington`
- `cupping therapy burlington`
- `dry needling physiotherapy burlington`

Also watch, from 2026-09-14: Business Profile impressions (188 per 28 days at the audit) and booking-button clicks; GA4 `booking_click` by `event_label` on both properties; `appointment_booked` in Ads remembering it over-counts about 1.75x. Three things changed on that date at once (GBP deep link, CTA labels, Endorphins measuring Jane clicks), so compare against the window before it, Canada-filtered.

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
