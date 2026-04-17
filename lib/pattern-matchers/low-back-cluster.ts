/**
 * Low back pattern matcher cluster.
 *
 * Purpose: help a visitor on a low-back condition page compare their own
 * pattern against the common patterns for six overlapping low-back and
 * low-back-adjacent conditions. This is not a diagnostic tool. Output is
 * phrased as "pattern matches" and "typically overlaps with", never "you
 * have X."
 *
 * Source voice check:
 * - Patient-voice questions ("When you walk for a while, does the pain ease
 *   when you sit or lean forward on a cart?")
 * - Honest uncertainty: when the top two are close, the component names that
 *   ambiguity rather than forcing a pick.
 *
 * Questions selected from the discriminator checklist for highest signal:
 * pain location (central vs one-sided SI vs buttock), directional preference
 * (flexion vs extension intolerance), neurogenic claudication pattern
 * (stenosis), radicular leg pain below the knee (sciatica / disc), seated
 * versus upright tolerance, specific movements (rotation vs extension),
 * trauma or mechanical event, morning stiffness duration, and single-leg
 * activities (SI joint).
 */

import type {
  MatcherAnswer,
  PatternMatcherCluster,
} from './knee-cluster';

// Standard answer options, kept short and plain.
const STANDARD_OPTIONS: { value: MatcherAnswer; label: string }[] = [
  { value: 'yes', label: 'Yes' },
  { value: 'somewhat', label: 'Somewhat' },
  { value: 'no', label: 'No' },
  { value: 'unsure', label: "I'm not sure" },
];

export const LOW_BACK_CLUSTER: PatternMatcherCluster = {
  key: 'low-back',
  label: 'Low back pain pattern check',
  regionNoun: 'low back',
  conditionSlugs: [
    'low-back-pain',
    'sciatica',
    'si-joint-dysfunction',
    'facet-joint-syndrome',
    'spinal-stenosis',
    'piriformis-syndrome',
  ],
  questions: [
    {
      id: 'pain_central_low_back',
      text: 'Is the pain spread across the centre of your low back, above the belt line, on both sides of the spine?',
      helper: 'Not one-sided, not deep in the buttock, but across the lower back itself.',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'pain_one_sided_buttock_or_si',
      text: 'Is there a focal sore spot on one side only, near the dimple above the buttock?',
      helper: 'A small area you can cover with a couple of fingers at the back of the pelvis.',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'pain_radiates_below_knee',
      text: 'Does pain, numbness, or pins and needles travel down the leg past the knee, into the calf or foot?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'pain_deep_in_buttock',
      text: 'Is there a deep ache in the middle of the buttock, sometimes with tingling down the back of the thigh?',
      helper: 'Not in the low back itself, but deep in the cheek of the buttock.',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'worse_with_bending_or_sitting',
      text: 'Is it worse when you bend forward, slouch in a chair, or lift something off the floor?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'worse_with_standing_or_extension',
      text: 'Is it worse with standing a long time, walking, or arching backward?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'eases_with_sitting_or_leaning_forward',
      text: 'After walking for a while, does it settle once you sit down or lean forward on a grocery cart?',
      helper: 'A classic pattern for narrowing of the spinal canal.',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'worse_single_leg_activities',
      text: 'Is it worse on single-leg moves, like standing on one foot, climbing stairs, or rolling over in bed?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'worse_prolonged_sitting',
      text: 'After a long sit on a firm or uneven surface, is the buttock or sit-bone area much worse?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'specific_lifting_or_twisting_event',
      text: 'Can you pin the start of this to a specific lift, awkward twist, or bend?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'age_over_60',
      text: 'Are you 60 or older?',
      options: STANDARD_OPTIONS,
    },
  ],
};
