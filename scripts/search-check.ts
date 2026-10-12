/**
 * Checks site search against the way patients type.
 *
 *   node_modules/.bin/jiti scripts/search-check.ts
 *
 * Each case names the url that must come first (`first`), or a set of urls
 * that must all appear in the top results (`within`). Prints the top three for
 * every query and exits 1 on a failure. The /conditions box uses the same
 * scorer (rankConditions), so its order follows the condition rows below.
 */

import { searchSite, rankConditions } from '../lib/site-search';

type Case = { q: string; first?: string; within?: string[]; top?: number; none?: boolean };

const CASES: Case[] = [
  // From the 2026-10-11 reviews
  { q: 'pain going down stairs', first: '/conditions/knee-pain-patellofemoral' },
  { q: 'sore knee', first: '/conditions/knee-pain' },
  { q: 'torn meniscus', first: '/conditions/meniscus-tears' },
  { q: 'kneecap', first: '/conditions/knee-pain-patellofemoral' },
  { q: "runner's knee", within: ['/conditions/knee-pain-patellofemoral', '/conditions/it-band-syndrome'], top: 3 },
  { q: 'runners knee', first: '/conditions/knee-pain-patellofemoral' },
  { q: 'knee', first: '/conditions/knee-pain' },
  { q: 'location', first: '/contact' },
  { q: 'hours', first: '/contact' },
  { q: 'price', first: '/fees-and-first-visit' },
  { q: 'acl', first: '/conditions/acl-injuries' },
  // Other everyday wording
  { q: 'knee pain', first: '/conditions/knee-pain' },
  { q: 'pain below kneecap', first: '/conditions/pain-guides/pain-below-kneecap' },
  { q: 'pain under my kneecap', first: '/conditions/knee-pain-patellofemoral' },
  { q: 'pain behind kneecap', first: '/conditions/knee-pain-patellofemoral' },
  { q: 'jumpers knee', first: '/conditions/patellar-tendinopathy' },
  { q: 'meniscus tear', first: '/conditions/meniscus-tears' },
  { q: 'torn acl', first: '/conditions/acl-injuries' },
  { q: 'swollen knee', first: '/conditions/pain-guides/fluid-on-the-knee' },
  { q: 'fluid on the knee', first: '/conditions/pain-guides/fluid-on-the-knee' },
  { q: 'back of knee pain', first: '/conditions/knee-pain' },
  { q: 'outside of knee', first: '/conditions/it-band-syndrome' },
  { q: 'knee arthritis', first: '/conditions/knee-osteoarthritis' },
  { q: 'hip', first: '/conditions/hip-pain' },
  { q: 'side of hip', first: '/conditions/greater-trochanteric-pain-syndrome' },
  { q: 'heel pain', first: '/conditions/plantar-fasciitis' },
  { q: 'plantar fasciitis', first: '/conditions/plantar-fasciitis' },
  { q: 'achilles', first: '/conditions/achilles-tendinopathy' },
  { q: 'shin splints', first: '/conditions/shin-splints' },
  { q: 'sprained ankle', first: '/conditions/ankle-sprains' },
  { q: 'bunion', first: '/conditions/hallux-valgus' },
  { q: 'back pain', first: '/conditions/low-back-pain' },
  { q: 'sciatica', first: '/conditions/sciatica' },
  { q: 'slipped disc', first: '/conditions/disc-herniation' },
  { q: 'pulled hamstring', first: '/conditions/hamstring-strains' },
  { q: 'frozen shoulder', first: '/conditions/frozen-shoulder' },
  { q: 'rotator cuff tear', first: '/conditions/rotator-cuff-injuries' },
  { q: 'dry needling', first: '/treatments/dry-needling' },
  { q: 'insurance', first: '/faq#billing' },
  { q: 'direct billing', first: '/faq#billing' },
  { q: 'book appointment', within: ['https://endorphinshealth.janeapp.com/locations/endorphins-health-and-wellness-centre/book#/staff_member/42'], top: 2 },
  { q: 'plantar fasciits', first: '/conditions/plantar-fasciitis' }, // typo
  { q: 'neck pain', first: '/conditions/neck-pain' }, // not promoted, still found by name
  { q: 'xyzzy', none: true },
];

let failures = 0;
for (const c of CASES) {
  const results = searchSite(c.q).map((r) => r.url);
  let ok = true;
  if (c.none) ok = results.length === 0;
  if (c.first) ok = results[0] === c.first;
  if (c.within) ok = c.within.every((u) => results.slice(0, c.top ?? 8).includes(u));
  if (!ok) failures++;
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${JSON.stringify(c.q).padEnd(28)} ${results.slice(0, 3).join(' | ') || '(no results)'}`);
}

console.log('\n/conditions box (rankConditions), top three');
for (const q of ['sore knee', 'torn meniscus', "runner's knee", 'pain going down stairs', 'kneecap']) {
  const top = Array.from(rankConditions(q).entries()).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([s]) => s);
  const ok = top.length > 0;
  if (!ok) failures++;
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${JSON.stringify(q).padEnd(28)} ${top.join(' | ') || '(no results)'}`);
}

console.log(failures ? `\n${failures} failure(s)` : '\nAll search checks passed');
process.exit(failures ? 1 : 0);
