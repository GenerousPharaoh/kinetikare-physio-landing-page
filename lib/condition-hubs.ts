/**
 * Maps a condition to the curated regional hub page that sits above it.
 *
 * Used by the condition-page breadcrumb and its BreadcrumbList schema so each
 * condition links up to its hub. Before this existed the hubs had two inbound
 * links each (the home page and the conditions index) and Google had them as
 * "Discovered - currently not indexed".
 *
 * Five hubs exist against six categories. Conditions in `spinal-health` have no
 * hub and keep the two-level Home > Conditions trail. A back hub was considered
 * and deliberately not built: Burlington back-pain queries drew roughly four
 * impressions in a quarter, and it would have competed with the already-indexed
 * /conditions/low-back-pain page.
 */

export interface ConditionHub {
  /** Breadcrumb label. Deliberately shorter than the hub's own H1. */
  name: string;
  path: string;
}

const HUB_BY_CATEGORY: Record<string, ConditionHub> = {
  knee: { name: 'Knee Pain', path: '/conditions/knee-pain' },
  'hip-pelvis': { name: 'Hip Pain', path: '/conditions/hip-pain' },
  shoulder: { name: 'Shoulder Pain', path: '/conditions/shoulder-pain' },
  'elbow-wrist-hand': { name: 'Elbow Pain', path: '/conditions/elbow-pain' },
  'foot-ankle': { name: 'Foot & Ankle Pain', path: '/conditions/foot-ankle-pain' },
};

/**
 * Conditions whose category has a hub but where the hub's label would misdescribe
 * the condition. The wrist and hand conditions share the `elbow-wrist-hand`
 * category but do not belong under a crumb reading "Elbow Pain", and neither
 * thoracic outlet syndrome nor the diabetes page is a shoulder complaint the
 * shoulder hub covers. These keep the two-level trail.
 */
const EXCLUDED_FROM_HUB = new Set([
  'carpal-tunnel-syndrome',
  'de-quervains-tenosynovitis',
  'wrist-sprains',
  'scaphoid-fractures',
  'repetitive-strain-injuries',
  'thoracic-outlet-syndrome',
  'diabetes-related-conditions',
]);

export function getConditionHub(
  slug: string | undefined,
  category: string | undefined
): ConditionHub | null {
  if (!slug || !category) return null;
  if (EXCLUDED_FROM_HUB.has(slug)) return null;
  return HUB_BY_CATEGORY[category] ?? null;
}

/**
 * Every hub path. Hubs live under /conditions/ but are landing pages rather than
 * condition detail pages, so callers that branch on that distinction (the
 * floating CTA buttons, for one) test against this instead of hard-coding a list.
 */
export const HUB_PATHS: ReadonlySet<string> = new Set(
  Object.values(HUB_BY_CATEGORY).map((hub) => hub.path)
);
