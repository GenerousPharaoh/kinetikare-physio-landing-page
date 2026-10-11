/**
 * Checks lib/differential-links.ts against the data.
 *
 *   node_modules/.bin/jiti scripts/differential-links-check.ts
 *
 * Every key must still match a differentialDiagnosis entry (a renamed entry
 * silently stops linking), and every target must be a condition page or hub.
 * Prints how many entries link on each page. Exits 1 on a failure.
 */

import { detailedConditionsContent } from '../lib/detailed-conditions-content';
import { conditionCategories } from '../lib/conditions-data';
import { HUB_PATHS } from '../lib/condition-hubs';
import { DIFFERENTIAL_LINK_KEYS, differentialHref } from '../lib/differential-links';

const slugs = new Set(conditionCategories.flatMap((c) => c.conditions.map((x) => x.slug)));
const names = new Set<string>();
const perPage: string[] = [];
let failures = 0;

for (const [slug, c] of Object.entries(detailedConditionsContent)) {
  const diffs = c.differentialDiagnosis ?? [];
  diffs.forEach((d) => names.add(d.condition));
  const linked = diffs.filter((d) => differentialHref(d.condition, slug)).length;
  if (diffs.length) perPage.push(`${slug.padEnd(38)} ${linked}/${diffs.length}`);
}

for (const key of DIFFERENTIAL_LINK_KEYS) {
  if (!names.has(key)) { console.log(`FAIL key not found in data: ${key}`); failures++; }
  const href = differentialHref(key, '__none__')!;
  const target = href.replace('/conditions/', '');
  if (!slugs.has(target) && !HUB_PATHS.has(href)) { console.log(`FAIL target missing: ${key} -> ${href}`); failures++; }
}

console.log(perPage.join('\n'));
console.log(failures ? `\n${failures} failure(s)` : `\n${DIFFERENTIAL_LINK_KEYS.length} keys ok`);
process.exit(failures ? 1 : 0);
