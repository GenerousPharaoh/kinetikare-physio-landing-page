import { getAllConditions } from './conditions-data';
import { treatments } from './treatments-data';
import { getConditionHub } from './condition-hubs';
import { bodyPartConditions, activityInjuries, symptomMappings } from './search-content';
import { JANE_ASSESSMENT_URL } from './booking';
import { PAIN_GUIDE_GROUPS } from './pain-guides';

/**
 * Site search, shared by the header search (`searchSite`) and the /conditions
 * directory box (`rankConditions`), so both read a query the same way.
 *
 * Rebuilt 2026-10-11. The old header search needed every word of the query to
 * match, so the way patients type ("pain going down stairs", "sore knee",
 * "torn meniscus") found nothing, and the directory box had its own, different
 * synonym list. Now:
 * - filler words are dropped ("going", "my", "when"), everyday words map to the
 *   words the pages use ("torn" to "tear", "sore" to "pain"), and plurals and
 *   apostrophes are folded ("runner's knee" = "runners knee" = "runner knee");
 * - a query matches when at least one meaningful word matches, and results
 *   rank by how many of the meaningful words they match, then where (title,
 *   keywords, description);
 * - curated phrases (PHRASES) send common patient wording to the right pages
 *   in a fixed order, and a bare body region ("knee", "sore hip") leads with
 *   that region's overview rather than guessing a diagnosis.
 * Search never assigns a diagnosis, urgency level or appointment availability
 * from a patient's search words. `scripts/search-check.ts` tests the queries
 * patients use; run it after changing anything here.
 */

export interface SearchResult {
  title: string;
  description: string;
  url: string;
  kind: 'Condition' | 'Treatment' | 'Body region' | 'Guide' | 'Clinic' | 'Booking';
}
interface SearchEntry extends SearchResult {
  keywords: string[];
}
interface IndexedEntry {
  entry: SearchEntry;
  title: Set<string>;
  keywords: Set<string>;
  description: Set<string>;
  titleText: string;
}

// Words that carry no meaning for finding a page.
const FILLER = new Set([
  'a', 'an', 'the', 'my', 'me', 'mine', 'i', 'im', 'ive', 'it', 'its', 'this', 'that', 'is', 'are', 'was', 'be',
  'of', 'on', 'at', 'to', 'for', 'with', 'from', 'in', 'into', 'and', 'or', 'but', 'so', 'when', 'while', 'after',
  'during', 'before', 'go', 'going', 'goes', 'get', 'gets', 'getting', 'got', 'have', 'has', 'had', 'do', 'does',
  'doing', 'feel', 'feels', 'feeling', 'very', 'really', 'bad', 'badly', 'always', 'sometimes', 'still', 'what',
  'why', 'how', 'can', 'cant', 'dont', 'wont', 'will', 'should', 'need', 'near', 'some', 'any', 'help', 'burlington',
]);

// Everyday words folded onto the word the pages use. Applied to the query and
// the index alike.
const EQUIVALENT: Record<string, string> = {
  torn: 'tear', tore: 'tear', ripped: 'tear', rupture: 'tear', ruptured: 'tear',
  sore: 'pain', soreness: 'pain', ache: 'pain', aches: 'pain', aching: 'pain', achy: 'pain', hurt: 'pain',
  hurts: 'pain', hurting: 'pain', painful: 'pain', pains: 'pain',
  swollen: 'swelling', swell: 'swelling', swells: 'swelling', swelled: 'swelling',
  sprained: 'sprain', strained: 'strain', pulled: 'strain',
  meniscal: 'meniscus', menisci: 'meniscus', cartilage: 'meniscus',
  downstairs: 'stair', upstairs: 'stair', steps: 'stair', step: 'stair',
  arthritic: 'arthritis', osteoarthritis: 'arthritis',
  tendonitis: 'tendinopathy', tendinitis: 'tendinopathy', tendinosis: 'tendinopathy',
  outer: 'outside', inner: 'inside', under: 'behind', beneath: 'behind',
  bum: 'buttock', butt: 'buttock', glute: 'buttock', glutes: 'buttock',
  lumbar: 'back', spine: 'back', spinal: 'back',
  costs: 'price', cost: 'price', fee: 'price', fees: 'price', prices: 'price', pricing: 'price',
  hours: 'hour', open: 'hour', opening: 'hour',
};

// Words that describe rather than identify: they help rank and complete a
// phrase, but on their own they never decide a result.
const WEAK = new Set(['pain', 'down', 'up', 'below', 'above', 'behind', 'inside', 'outside', 'side', 'front', 'top', 'bottom', 'left', 'right', 'injury', 'problem', 'issue', 'treatment', 'treat', 'physio', 'physiotherapy', 'physiotherapist', 'therapy', 'clinic']);

const stem = (word: string) => {
  if (word.length <= 3) return word;
  if (word.endsWith('ies') && word.length > 4) return `${word.slice(0, -3)}y`;
  if (word.endsWith('s') && !/(ss|us|is|ys)$/.test(word)) return word.slice(0, -1);
  return word;
};

export const normalizeSearch = (text: string) =>
  text
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

const toWord = (raw: string) => stem(EQUIVALENT[raw] ?? EQUIVALENT[stem(raw)] ?? raw);

/** Meaningful words of a text, normalised the same way for queries and pages. */
export function searchTokens(text: string): string[] {
  return normalizeSearch(text)
    .split(' ')
    .filter((w) => w && !FILLER.has(w))
    .map(toWord)
    .filter((w) => w && !FILLER.has(w));
}

/**
 * Curated patient phrases. A phrase applies when all its words are in the
 * query; its urls then lead the results in the order given. `exact` phrases
 * apply only when the query has no other meaningful word ("sore knee" yes,
 * "knee meniscus tear" no), which keeps a bare region on its overview page.
 */
const PHRASES: { words: string[]; urls: string[]; exact?: boolean }[] = [
  // Body regions on their own lead with the overview.
  { words: ['knee'], urls: ['/conditions/knee-pain'], exact: true },
  { words: ['hip'], urls: ['/conditions/hip-pain'], exact: true },
  { words: ['shoulder'], urls: ['/conditions/shoulder-pain'], exact: true },
  { words: ['elbow'], urls: ['/conditions/elbow-pain'], exact: true },
  { words: ['foot'], urls: ['/conditions/foot-ankle-pain'], exact: true },
  { words: ['ankle'], urls: ['/conditions/foot-ankle-pain', '/conditions/ankle-sprains'], exact: true },
  { words: ['back'], urls: ['/conditions/low-back-pain', '/conditions/sciatica'], exact: true },
  // Knee
  { words: ['stair'], urls: ['/conditions/knee-pain-patellofemoral', '/conditions/knee-osteoarthritis'] },
  { words: ['kneecap'], urls: ['/conditions/knee-pain-patellofemoral', '/conditions/pain-guides/pain-below-kneecap', '/conditions/patellar-tendinopathy', '/conditions/patella-fractures'] },
  // "Under" and "behind" the kneecap usually mean the joint; "below" the tendon.
  { words: ['behind', 'kneecap'], urls: ['/conditions/knee-pain-patellofemoral', '/conditions/knee-osteoarthritis'] },
  { words: ['below', 'kneecap'], urls: ['/conditions/pain-guides/pain-below-kneecap', '/conditions/patellar-tendinopathy', '/conditions/knee-pain-patellofemoral'] },
  { words: ['patella'], urls: ['/conditions/knee-pain-patellofemoral', '/conditions/patellar-tendinopathy', '/conditions/patella-fractures'] },
  { words: ['runner', 'knee'], urls: ['/conditions/knee-pain-patellofemoral', '/conditions/it-band-syndrome', '/conditions/knee-pain'] },
  { words: ['jumper'], urls: ['/conditions/patellar-tendinopathy', '/conditions/pain-guides/pain-below-kneecap'] },
  { words: ['meniscus'], urls: ['/conditions/meniscus-tears'] },
  { words: ['twist', 'knee'], urls: ['/conditions/meniscus-tears', '/conditions/acl-injuries', '/conditions/mcl-lcl-sprains'] },
  { words: ['locking'], urls: ['/conditions/meniscus-tears'] },
  { words: ['outside', 'knee'], urls: ['/conditions/it-band-syndrome', '/conditions/mcl-lcl-sprains', '/conditions/knee-pain'] },
  { words: ['inside', 'knee'], urls: ['/conditions/knee-pain', '/conditions/meniscus-tears', '/conditions/mcl-lcl-sprains', '/conditions/knee-osteoarthritis'] },
  { words: ['back', 'knee'], urls: ['/conditions/knee-pain', '/conditions/pcl-injuries', '/conditions/hamstring-strains'] },
  { words: ['swelling', 'knee'], urls: ['/conditions/pain-guides/fluid-on-the-knee', '/conditions/knee-pain'] },
  { words: ['fluid', 'knee'], urls: ['/conditions/pain-guides/fluid-on-the-knee'] },
  { words: ['water', 'knee'], urls: ['/conditions/pain-guides/fluid-on-the-knee'] },
  { words: ['effusion'], urls: ['/conditions/pain-guides/fluid-on-the-knee'] },
  { words: ['osgood'], urls: ['/conditions/growth-plate-injuries', '/conditions/pain-guides/pain-below-kneecap'] },
  // Hip and buttock
  { words: ['side', 'hip'], urls: ['/conditions/greater-trochanteric-pain-syndrome', '/conditions/hip-bursitis'] },
  { words: ['outside', 'hip'], urls: ['/conditions/greater-trochanteric-pain-syndrome', '/conditions/hip-bursitis'] },
  { words: ['buttock'], urls: ['/conditions/piriformis-syndrome', '/conditions/proximal-hamstring-tendinopathy', '/conditions/sciatica'] },
  { words: ['groin'], urls: ['/conditions/groin-strains', '/conditions/femoroacetabular-impingement', '/conditions/hip-osteoarthritis'] },
  { words: ['arthritis'], urls: ['/conditions/knee-osteoarthritis', '/conditions/hip-osteoarthritis'] },
  // Foot and leg
  { words: ['heel'], urls: ['/conditions/plantar-fasciitis', '/conditions/achilles-tendinopathy', '/conditions/severs-disease'] },
  { words: ['arch'], urls: ['/conditions/plantar-fasciitis', '/conditions/posterior-tibial-tendon-dysfunction'] },
  { words: ['shin'], urls: ['/conditions/shin-splints', '/conditions/stress-fractures'] },
  { words: ['runner'], urls: ['/conditions/knee-pain-patellofemoral', '/conditions/it-band-syndrome', '/conditions/shin-splints', '/conditions/achilles-tendinopathy', '/conditions/stress-fractures'] },
  { words: ['running'], urls: ['/conditions/knee-pain-patellofemoral', '/conditions/it-band-syndrome', '/conditions/shin-splints', '/conditions/achilles-tendinopathy', '/conditions/stress-fractures'] },
  // Back
  { words: ['slipped', 'disc'], urls: ['/conditions/disc-herniation', '/conditions/sciatica'] },
  { words: ['pinched', 'nerve'], urls: ['/conditions/sciatica', '/conditions/disc-herniation'] },
  { words: ['leg', 'back'], urls: ['/conditions/sciatica', '/conditions/disc-herniation', '/conditions/spinal-stenosis'] },
  // Clinic
  { words: ['insurance'], urls: ['/faq#billing', '/fees-and-first-visit'] },
  { words: ['price'], urls: ['/fees-and-first-visit', '/faq#billing'] },
];

// Kept but not promoted (repo CLAUDE.md content rules): they still come up
// when asked for by name, but lose ties to everything else.
const NOT_PROMOTED = new Set([
  '/conditions/neck-pain',
  '/conditions/whiplash',
  '/conditions/tennis-elbow',
  '/conditions/golfers-elbow',
  '/conditions/carpal-tunnel-syndrome',
  '/conditions/de-quervains-tenosynovitis',
]);

// Each condition is also found by its body region.
const CATEGORY_WORDS: Record<string, string[]> = {
  knee: ['knee'],
  'hip-pelvis': ['hip', 'pelvis'],
  'foot-ankle': ['foot', 'ankle'],
  shoulder: ['shoulder'],
  'elbow-wrist-hand': ['elbow', 'wrist', 'hand'],
  'spinal-health': ['back', 'spine'],
};

const conditions = getAllConditions();
const matchesName = (name: string, other: string) =>
  normalizeSearch(name).includes(normalizeSearch(other)) || normalizeSearch(other).includes(normalizeSearch(name));

const entries: SearchEntry[] = [
  ...conditions.map(
    (condition): SearchEntry => ({
      title: condition.name,
      description: condition.shortDescription || condition.description || '',
      url: `/conditions/${condition.slug}`,
      kind: 'Condition',
      keywords: [
        condition.slug.replace(/-/g, ' '),
        ...(CATEGORY_WORDS[condition.category] ?? []),
        ...Object.entries(bodyPartConditions)
          .filter(([, names]) => names.some((name) => matchesName(condition.name, name)))
          .map(([region]) => region),
        ...activityInjuries
          .filter((activity) => activity.conditions.some((name) => matchesName(condition.name, name)))
          .flatMap((activity) => activity.keywords),
        ...symptomMappings
          .filter((mapping) => mapping.conditions.some((name) => matchesName(condition.name, name)))
          .flatMap((mapping) => mapping.symptoms),
      ],
    })
  ),
  ...treatments.map(
    (treatment): SearchEntry => ({
      title: treatment.name,
      description: treatment.shortDescription,
      url: `/treatments/${treatment.id}`,
      kind: 'Treatment',
      keywords: treatment.keywords,
    })
  ),
  ...PAIN_GUIDE_GROUPS.flatMap((group) => group.guides).map(
    (guide): SearchEntry => ({
      title: guide.title,
      description: guide.blurb,
      url: guide.href,
      kind: 'Guide',
      keywords: [guide.region, (guide.href.split('/').pop() || '').replace(/-/g, ' '), 'pain guide', 'symptom guide'],
    })
  ),
  ...Array.from(
    new Map(
      conditions
        .map((condition) => getConditionHub(condition.slug, condition.category))
        .filter((hub) => hub !== null)
        .map((hub) => [hub.path, hub])
    ).values()
  ).map(
    (hub): SearchEntry => ({
      title: hub.name,
      description: 'Explore common patterns and related condition guides.',
      url: hub.path,
      kind: 'Body region',
      keywords: [hub.name, 'overview'],
    })
  ),
  {
    title: 'Book an assessment',
    description: 'Check appointment availability with Kareem on Jane.',
    url: JANE_ASSESSMENT_URL,
    kind: 'Booking',
    keywords: ['book', 'booking', 'appointment', 'schedule', 'visit'],
  },
  {
    title: 'Fees & first visit',
    description: 'Assessment and follow-up prices, appointment lengths and what to expect at your first visit.',
    url: '/fees-and-first-visit',
    kind: 'Clinic',
    keywords: ['fees', 'fee', 'cost', 'price', 'prices', 'pricing', 'first visit', 'first appointment', 'payment'],
  },
  {
    title: 'Compare conditions',
    description: 'Side-by-side guides to commonly confused conditions and their symptom patterns.',
    url: '/conditions/compare',
    kind: 'Guide',
    keywords: ['compare', 'comparison', 'comparisons', 'difference', 'differences', 'versus', 'vs'],
  },
  {
    title: 'Insurance, fees & direct billing',
    description: 'Answers about coverage, payment and appointment fees.',
    url: '/faq#billing',
    kind: 'Clinic',
    keywords: ['insurance', 'billing', 'direct billing', 'cost', 'price', 'benefits', 'ohip', 'coverage', 'fees'],
  },
  {
    title: 'Location & hours',
    description: 'Clinic address, contact details and appointment hours.',
    url: '/contact',
    kind: 'Clinic',
    keywords: ['location', 'address', 'directions', 'hours', 'parking', 'contact', 'phone', 'email', 'where'],
  },
  {
    title: 'Meet Kareem Hassanein',
    description: 'About your registered physiotherapist.',
    url: '/about',
    kind: 'Clinic',
    keywords: ['about', 'kareem', 'qualifications', 'physiotherapist'],
  },
  {
    title: 'Your first appointment',
    description: 'What to expect and how to prepare for physiotherapy.',
    url: '/faq#getting-started',
    kind: 'Clinic',
    keywords: ['first appointment', 'referral', 'prepare', 'wear', 'expect'],
  },
];

const indexed: IndexedEntry[] = entries.map((entry) => ({
  entry,
  title: new Set(searchTokens(entry.title)),
  keywords: new Set(entry.keywords.flatMap(searchTokens)),
  description: new Set(searchTokens(entry.description)),
  titleText: normalizeSearch(entry.title),
}));

// A single mistyped, inserted or omitted letter still finds a word.
function closeWord(a: string, b: string): boolean {
  if (a === b) return true;
  if (Math.min(a.length, b.length) < 4 || Math.abs(a.length - b.length) > 1) return false;
  let i = 0,
    j = 0,
    edits = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      i++;
      j++;
      continue;
    }
    if (++edits > 1) return false;
    if (a.length >= b.length) i++;
    if (b.length >= a.length) j++;
  }
  return edits + (a.length - i) + (b.length - j) <= 1;
}

/** How well one query word matches a set of page words: exact, prefix, or one typo. */
function wordMatch(word: string, words: Set<string>, allowTypo: boolean): number {
  if (words.has(word)) return 1;
  let best = 0;
  for (const candidate of Array.from(words)) {
    if (word.length >= 3 && candidate.startsWith(word)) best = Math.max(best, 0.8);
    else if (allowTypo && word.length >= 4 && closeWord(word, candidate)) best = Math.max(best, 0.6);
  }
  return best;
}

const KIND_BONUS: Record<SearchResult['kind'], number> = {
  'Body region': 40,
  Condition: 30,
  Guide: 20,
  Treatment: 10,
  Clinic: 0,
  Booking: 0,
};

/** Every entry with a positive score for the query, best first. */
function scoreQuery(query: string): { entry: SearchEntry; score: number }[] {
  const tokens = Array.from(new Set(searchTokens(query)));
  if (!tokens.length || normalizeSearch(query).length < 2) return [];
  const strong = tokens.filter((t) => !WEAK.has(t));
  const weak = tokens.filter((t) => WEAK.has(t));
  const deciding = strong.length ? strong : weak;
  const tokenSet = new Set(tokens);
  const phrase = normalizeSearch(query);

  const phraseBonus = new Map<string, number>();
  for (const p of PHRASES) {
    if (!p.words.every((w) => tokenSet.has(w))) continue;
    if (p.exact && !strong.every((w) => p.words.includes(w))) continue;
    p.urls.forEach((url, i) => {
      const bonus = 3000 + 100 * p.words.length - 40 * i;
      phraseBonus.set(url, Math.max(phraseBonus.get(url) ?? 0, bonus));
    });
  }

  return indexed
    .map(({ entry, title, keywords, description, titleText }) => {
      const fieldScore = (word: string) =>
        Math.max(3 * wordMatch(word, title, true), 2 * wordMatch(word, keywords, false), 1 * wordMatch(word, description, false));
      let matched = 0;
      let base = 0;
      for (const word of deciding) {
        const s = fieldScore(word);
        if (s > 0) matched++;
        base += s;
      }
      if (strong.length) for (const word of weak) base += 0.3 * fieldScore(word);
      const bonus = phraseBonus.get(entry.url) ?? 0;
      if (matched === 0 && bonus === 0) return { entry, score: 0 };
      let score = (matched / deciding.length) * 1000 + base * 20 + KIND_BONUS[entry.kind];
      if (titleText === phrase) score += 600;
      else if (titleText.startsWith(phrase)) score += 250;
      if (NOT_PROMOTED.has(entry.url)) score -= 60;
      // Curated phrases decide the order outright; word matching only breaks
      // ties between pages with the same phrase position.
      if (bonus) score = 100000 + bonus * 10 + score / 100;
      return { entry, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title));
}

export function searchSite(query: string): SearchResult[] {
  return scoreQuery(query)
    .slice(0, 8)
    .map(({ entry: { title, description, url, kind } }) => ({ title, description, url, kind }));
}

/** Score per condition slug for the /conditions directory box (0 or absent = no match). */
export function rankConditions(query: string): Map<string, number> {
  const ranks = new Map<string, number>();
  for (const { entry, score } of scoreQuery(query)) {
    if (entry.kind === 'Condition') ranks.set(entry.url.replace('/conditions/', ''), score);
  }
  return ranks;
}
