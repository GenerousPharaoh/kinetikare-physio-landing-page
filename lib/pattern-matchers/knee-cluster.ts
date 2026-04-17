/**
 * Knee pattern matcher cluster.
 *
 * Purpose: help a visitor on a knee condition page compare their own pattern
 * against the common patterns for five overlapping knee conditions. This is
 * not a diagnostic tool. Output is phrased as "pattern matches" and "typically
 * overlaps with", never "you have X."
 *
 * Source voice check:
 * - Patient-voice questions ("Does it hurt most in the first few steps...")
 * - Honest uncertainty: when the top two are close, the component names that
 *   ambiguity rather than forcing a pick.
 *
 * Questions selected from the discriminator checklist for highest signal:
 * pain location, theatre sign (PFPS), jumping/landing (patellar tendinopathy),
 * mechanical catching/locking (meniscus), downhill running (ITBS), age bracket
 * (OA), stairs direction (PFPS), specific injury event (meniscus/ACL), response
 * to full rest (tendinopathy paradox), and swelling pattern.
 */

export type MatcherAnswer = 'yes' | 'somewhat' | 'no' | 'unsure';

export interface PatternMatcherQuestion {
  id: string;
  text: string;           // patient-voice question
  helper?: string;        // optional short clarification
  options: { value: MatcherAnswer; label: string }[];
}

export interface PatternMatcherCluster {
  key: string;
  label: string;          // short UI label, e.g. 'Knee pain pattern check'
  conditionSlugs: string[];
  questions: PatternMatcherQuestion[];
}

// Standard answer options, kept short and plain.
const STANDARD_OPTIONS: { value: MatcherAnswer; label: string }[] = [
  { value: 'yes', label: 'Yes' },
  { value: 'somewhat', label: 'Somewhat' },
  { value: 'no', label: 'No' },
  { value: 'unsure', label: "I'm not sure" },
];

export const KNEE_CLUSTER: PatternMatcherCluster = {
  key: 'knee',
  label: 'Knee pain pattern check',
  conditionSlugs: [
    'knee-pain-patellofemoral',
    'patellar-tendinopathy',
    'meniscus-tears',
    'knee-osteoarthritis',
    'it-band-syndrome',
  ],
  questions: [
    {
      id: 'pain_below_kneecap_on_tendon',
      text: 'Is the pain mostly right below your kneecap, on the tendon, in one specific spot?',
      helper: 'A small, pinpoint area you can press with one finger on the tendon just under the kneecap.',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'pain_around_kneecap',
      text: 'Is the pain more around or behind the kneecap itself, not pinpoint?',
      helper: 'A diffuse ache that is hard to point to exactly.',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'pain_outside_of_knee',
      text: 'Is the pain on the outside of the knee, toward the side of the leg?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'theatre_sign',
      text: 'Does the knee hurt more after sitting still for a long time, for example after a long movie or car ride?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'worse_going_downstairs',
      text: 'Is going down stairs harder or more painful than going up?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'pain_with_jumping_or_landing',
      text: 'Does it hurt most with jumping or landing, or deep squatting?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'catching_locking_giving_way',
      text: 'Does the knee catch, lock, or give way on you?',
      helper: 'A sudden block in movement, or a feeling that the knee briefly drops out from under you.',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'pain_running_especially_downhill',
      text: 'Does the pain come on with running, especially downhill, at a fairly predictable distance or time?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'morning_stiffness_short',
      text: 'Is the knee stiff in the morning or after resting, easing up within about 30 minutes of moving?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'specific_twist_or_injury_event',
      text: 'Was there a specific event where the knee twisted, was hit, or you heard a pop?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'worse_after_full_rest',
      text: 'Is the knee paradoxically worse after a long rest, like a week off, and then better once you warm up?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'age_over_45',
      text: 'Are you 45 or older?',
      options: STANDARD_OPTIONS,
    },
  ],
};

/**
 * Helper: look up a cluster by key. Kept simple for now since we only have one
 * cluster, but structured so other joints can be added later.
 */
export function getCluster(key: string): PatternMatcherCluster | undefined {
  if (key === KNEE_CLUSTER.key) return KNEE_CLUSTER;
  return undefined;
}
