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

// Protect the distinction between an emergency escalation and a same-day
// choice of emergency or urgent care, including when it follows other advice.
const urgencyCases = [
  ['Keep weight off and get medical assessment today. If pain is severe, go to emergency.', 'emergency'],
  ['Get medical assessment today, or go to emergency if you feel very unwell.', 'emergency'],
  ['Contact your surgical team the same day, or go to emergency.', 'emergency'],
  ['Get medical assessment today. If pain increases, go to emergency or urgent care.', 'today'],
  ['Go to emergency or an urgent care clinic today.', 'today'],
  ['Go to emergency or urgent care now.', 'emergency'],
  ['Get same-day medical assessment before exercise.', 'today'],
  ['Arrange an appointment with your family doctor before physiotherapy.', 'doctor'],
  ['Contact your doctor today; sudden weakness means call 911.', 'emergency'],
] as const;

for (const [action, expected] of urgencyCases) {
  const actual = redFlagUrgency({ sign: 'Regression case', action });
  if (actual !== expected) {
    failures++;
    console.log(`FAIL urgency regression: expected ${expected}, got ${actual}: ${action}`);
  }
}

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
