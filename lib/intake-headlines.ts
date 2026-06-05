/**
 * Ad-matched hero copy for the /intake landing page (Google Ads destination).
 *
 * The page reads a `condition` (exact slug) or keyword param (`k`/`keyword`/
 * `term`/`q`) from the URL and swaps the hero lead line and supporting phrase
 * to match what the visitor searched. Matching the landing page to the ad
 * raises the Ad Relevance and Landing Page Experience components of Quality
 * Score (lower CPC) and lifts conversion.
 *
 * `resolveIntakeHero` is pure and always returns a valid hero. When there is
 * no param or no match it returns DEFAULT_HERO, which renders the exact
 * original hero copy, so untagged traffic sees no change.
 *
 * To activate per ad group, set the ad's Final URL to e.g.
 *   https://www.kinetikarephysio.com/intake?condition=knee-pain
 * Or campaign-wide, append `?k={keyword}` (ValueTrack) and rely on fuzzy match.
 */

export interface IntakeHero {
  /** H1 first line; the gold italic "Burlington" is appended after it. */
  lead: string;
  /** Phrase inserted into "Searching for ___ in Burlington or Waterdown?" */
  sub: string;
}

export const DEFAULT_HERO: IntakeHero = {
  lead: 'Physiotherapy in',
  sub: 'physiotherapy near me',
};

interface HeroMatcher {
  keys: string[]; // exact condition-slug matches (highest priority)
  match: RegExp; // fuzzy match against raw keyword text (for {keyword} insertion)
  hero: IntakeHero;
}

// Order matters only for fuzzy matching: more specific patterns first.
const MATCHERS: HeroMatcher[] = [
  {
    keys: ['patellar-tendinopathy'],
    match: /patellar|jumper'?s knee/,
    hero: { lead: "Jumper's Knee Treatment in", sub: 'patellar tendinopathy treatment' },
  },
  {
    keys: ['knee-pain-patellofemoral', 'knee-pain', 'knee'],
    match: /\bknee\b|patellofemoral|runner'?s knee/,
    hero: { lead: 'Knee Pain Treatment in', sub: 'knee pain treatment' },
  },
  {
    keys: ['greater-trochanteric-pain-syndrome', 'hip-pain', 'hip-osteoarthritis', 'hip'],
    match: /\bhip\b|trochanter|gluteal/,
    hero: { lead: 'Hip Pain Treatment in', sub: 'hip and lateral hip pain treatment' },
  },
  {
    keys: ['sciatica'],
    match: /sciatic/,
    hero: { lead: 'Sciatica Treatment in', sub: 'sciatica treatment' },
  },
  {
    keys: ['low-back-pain', 'back-pain'],
    match: /back pain|low back|lower back/,
    hero: { lead: 'Back Pain Treatment in', sub: 'back pain treatment' },
  },
  {
    keys: ['shoulder-impingement', 'rotator-cuff-injuries', 'frozen-shoulder', 'shoulder'],
    match: /shoulder|rotator|impinge/,
    hero: { lead: 'Shoulder Pain Treatment in', sub: 'shoulder pain treatment' },
  },
  {
    keys: ['sports-rehab-return-to-sport', 'sports'],
    match: /sport|athlete|return to (sport|play)/,
    hero: { lead: 'Sports Injury Rehab in', sub: 'sports injury rehab' },
  },
  {
    keys: ['tennis-elbow'],
    match: /tennis elbow|lateral epicond/,
    hero: { lead: 'Tennis Elbow Treatment in', sub: 'tennis elbow treatment' },
  },
  {
    keys: ['golfers-elbow'],
    match: /golfer'?s elbow|medial epicond/,
    hero: { lead: "Golfer's Elbow Treatment in", sub: "golfer's elbow treatment" },
  },
  {
    keys: ['plantar-fasciitis'],
    match: /plantar|heel pain|fasciitis/,
    hero: { lead: 'Plantar Fasciitis Treatment in', sub: 'plantar fasciitis treatment' },
  },
  {
    keys: ['achilles-tendinopathy'],
    match: /achilles/,
    hero: { lead: 'Achilles Pain Treatment in', sub: 'Achilles pain treatment' },
  },
  {
    keys: ['neck-pain', 'whiplash'],
    match: /neck pain|whiplash/,
    hero: { lead: 'Neck Pain Treatment in', sub: 'neck pain treatment' },
  },
  {
    keys: ['dry-needling'],
    match: /dry needl|needling/,
    hero: { lead: 'Dry Needling in', sub: 'dry needling' },
  },
  {
    keys: ['proximal-hamstring-tendinopathy', 'hamstring-strains', 'hamstring'],
    match: /hamstring/,
    hero: { lead: 'Hamstring Injury Treatment in', sub: 'hamstring injury treatment' },
  },
  {
    keys: ['ankle-sprains', 'ankle'],
    match: /ankle|sprained? ankle/,
    hero: { lead: 'Ankle Injury Treatment in', sub: 'ankle injury treatment' },
  },
];

export function resolveIntakeHero(search: string | null | undefined): IntakeHero {
  if (!search) return DEFAULT_HERO;

  let params: URLSearchParams;
  try {
    params = new URLSearchParams(search);
  } catch {
    return DEFAULT_HERO;
  }

  const raw = (
    params.get('condition') ||
    params.get('k') ||
    params.get('keyword') ||
    params.get('term') ||
    params.get('q') ||
    ''
  )
    .toLowerCase()
    .trim();

  if (!raw) return DEFAULT_HERO;

  // Exact condition-slug match wins regardless of order.
  for (const m of MATCHERS) {
    if (m.keys.includes(raw)) return m.hero;
  }
  // Otherwise fuzzy-match the keyword text (handles ValueTrack {keyword}).
  for (const m of MATCHERS) {
    if (m.match.test(raw)) return m.hero;
  }
  return DEFAULT_HERO;
}
