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
  regionNoun: string;     // singular noun used in UI copy, e.g. 'knee', 'hip', 'shoulder', 'low back'
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
  regionNoun: 'knee',
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
      text: 'If you press with one finger on the tendon just below your kneecap, is that the worst spot?',
      helper: 'A pinpoint, localised sore spot on the tendon itself rather than a diffuse ache.',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'pain_around_kneecap',
      text: 'Is the pain vaguer, around or behind the kneecap, and hard to point to with one finger?',
      helper: 'A diffuse ache rather than a pinpoint spot.',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'pain_outside_of_knee',
      text: 'Is the pain mainly on the outer side of the knee, toward the outside of the leg?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'theatre_sign',
      text: 'After sitting with the knee bent for a long stretch, like a movie or long drive, does it hurt more when you stand up?',
      helper: 'Sometimes called the theatre sign.',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'worse_going_downstairs',
      text: 'Is going down stairs noticeably worse than going up?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'pain_with_jumping_or_landing',
      text: 'Is it worst with jumping, landing, or sinking into a deep squat?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'catching_locking_giving_way',
      text: 'Does the knee ever catch, briefly lock, or give way underneath you?',
      helper: 'A sudden block in movement, or a feeling that the knee briefly drops out from under you.',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'pain_running_especially_downhill',
      text: 'Does the pain come on at roughly the same point in a run, and is downhill running worse than flat?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'morning_stiffness_short',
      text: 'Does the knee feel stiff first thing in the morning, easing up inside about half an hour?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'specific_twist_or_injury_event',
      text: 'Can you trace this back to a specific twist, impact, or pop?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'worse_after_full_rest',
      text: 'Does a full week off make the knee feel worse, not better, and does it settle once you warm up?',
      helper: 'A paradox that is common with reactive tendon pain.',
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
