/**
 * Groups "When to see a doctor first" warnings by how soon to act, so a
 * patient can find the emergencies without reading every row (2026-10-11).
 *
 * The band comes from the most urgent instruction in the action text. If an
 * action says "go to emergency" or "call 911" anywhere, even as an
 * escalation ("same-day assessment; chest pain means go to emergency now"),
 * the row sits under the emergency heading, so grouping can never make an
 * emergency look calmer than its own text. The action text itself is shown
 * unchanged. `scripts/red-flags-check.ts` prints every row's band; run it after
 * editing any clinicalRedFlags entry.
 */

export type RedFlagUrgency = 'emergency' | 'today' | 'doctor';

export interface RedFlag {
  sign: string;
  action?: string;
}

const EMERGENCY = [
  /call 911/i,
  /emergency now/i,
  /emergency or urgent care now/i,
  /seek emergency assessment today/i,
  // Include conditional escalation later in the action. The choice of
  // emergency or urgent care remains same day unless it explicitly says now.
  /\bgo to emergency\b(?!\s+or\s+(?:an?\s+)?urgent care)/i,
];

const TODAY = [/same[- ]day/i, /\btoday\b/i, /within 24 hours/i, /urgent care/i, /right away/i];

export function redFlagUrgency(flag: RedFlag): RedFlagUrgency {
  const text = (flag.action ?? flag.sign).trim();
  if (EMERGENCY.some((re) => re.test(text))) return 'emergency';
  if (TODAY.some((re) => re.test(text))) return 'today';
  return 'doctor';
}

export const RED_FLAG_BANDS: { urgency: RedFlagUrgency; heading: string }[] = [
  { urgency: 'emergency', heading: 'Go to emergency' },
  { urgency: 'today', heading: 'Get seen today' },
  { urgency: 'doctor', heading: 'Check with your doctor' },
];

/** The flags in band order (emergency, today, doctor), original order kept within a band. Empty bands are dropped. */
export function groupRedFlags<T extends RedFlag>(flags: ReadonlyArray<T>) {
  return RED_FLAG_BANDS.map((band) => ({
    ...band,
    flags: flags.filter((f) => redFlagUrgency(f) === band.urgency),
  })).filter((band) => band.flags.length > 0);
}

/**
 * One line for the "Key points" box, naming the most urgent kind of warning on
 * the page, so the box never makes the list sound calmer than it is.
 */
export function redFlagSummary(flags: ReadonlyArray<RedFlag>): string | null {
  if (flags.length === 0) return null;
  const urgencies = new Set(flags.map(redFlagUrgency));
  if (urgencies.has('emergency')) return 'Some signs need emergency care. Check the list before you start treatment.';
  if (urgencies.has('today')) return 'Some signs need medical care the same day. Check the list before you start treatment.';
  return 'Some signs need a visit to your doctor before physiotherapy. Check the list before you start.';
}
