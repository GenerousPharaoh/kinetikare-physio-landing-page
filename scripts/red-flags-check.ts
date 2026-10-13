/**
 * Prints every condition page's "When to see a doctor first" rows grouped by
 * band (lib/red-flags.ts), for review after editing clinicalRedFlags.
 *
 *   node_modules/.bin/jiti scripts/red-flags-check.ts            # counts only
 *   node_modules/.bin/jiti scripts/red-flags-check.ts --all      # every row
 *
 * Exits 1 if an action that names an emergency (911, "emergency now") lands
 * outside the emergency band, or a "same-day" action lands in the doctor band.
 */

import { detailedConditionsContent } from '../lib/detailed-conditions-content';
import { redFlagUrgency } from '../lib/red-flags';

const showAll = process.argv.includes('--all');
const counts = { emergency: 0, today: 0, doctor: 0 };
let failures = 0;

for (const [slug, c] of Object.entries(detailedConditionsContent)) {
  const flags = c.clinicalRedFlags ?? [];
  if (showAll && flags.length) console.log(`\n== ${slug}`);
  for (const f of flags) {
    const band = redFlagUrgency(f);
    counts[band]++;
    const action = f.action ?? '';
    const wrong =
      (/call 911|emergency now/i.test(action) && band !== 'emergency') ||
      (/same[- ]day/i.test(action) && band === 'doctor');
    if (wrong) {
      failures++;
      console.log(`FAIL ${slug}: [${band}] ${f.sign} -> ${action}`);
    }
    if (showAll) console.log(`  [${band.padEnd(9)}] ${f.sign}\n               -> ${action}`);
  }
}

console.log(`\nemergency ${counts.emergency}, today ${counts.today}, doctor ${counts.doctor}`);
console.log(failures ? `${failures} failure(s)` : 'All red-flag bands consistent');
process.exit(failures ? 1 : 0);
