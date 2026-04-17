/**
 * Hip pattern matcher cluster.
 *
 * Purpose: help a visitor on a hip condition page compare their own pattern
 * against the common patterns for five overlapping hip and hip-adjacent
 * conditions. This is not a diagnostic tool. Output is phrased as "pattern
 * matches" and "typically overlaps with", never "you have X."
 *
 * Source voice check:
 * - Patient-voice questions ("Does your groin pain worsen with deep hip
 *   flexion, like getting out of a low car?")
 * - Honest uncertainty: when the top two are close, the component names that
 *   ambiguity rather than forcing a pick.
 *
 * Questions selected from the discriminator checklist for highest signal:
 * pain location (groin vs outside of hip vs sit bone), deep hip flexion
 * (FAI / labral), pivoting or twisting (labral), lying on the side at night
 * (GTPS), pain at the sit bone with prolonged sitting (proximal hamstring),
 * morning stiffness duration (OA), and age bracket (OA).
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

export const HIP_CLUSTER: PatternMatcherCluster = {
  key: 'hip',
  label: 'Hip pain pattern check',
  regionNoun: 'hip',
  conditionSlugs: [
    'greater-trochanteric-pain-syndrome',
    'hip-osteoarthritis',
    'femoroacetabular-impingement',
    'hip-labral-tears',
    'proximal-hamstring-tendinopathy',
  ],
  questions: [
    {
      id: 'pain_groin_or_front_of_hip',
      text: 'Is the main pain in your groin or in the crease at the front of the hip?',
      helper: 'The fold where the thigh meets the pelvis, not the bony side of the hip.',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'pain_outside_of_hip',
      text: 'Is the main pain over the bony bump on the outside of the hip, the spot your side rests on in bed?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'pain_at_sit_bone',
      text: 'Is the main pain right at the sit bone, the spot that presses into a hard chair?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'worse_deep_hip_flexion',
      text: 'Do deep hip positions flare it, for example getting out of a low car, sinking into a squat, or sitting cross-legged?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'catching_or_clicking_with_pivot',
      text: 'Does the hip pinch, click, or catch when you twist, pivot, or change direction?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'worse_lying_on_that_side',
      text: 'Within a few minutes of lying on that side at night, does the outside of the hip start to ache?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'worse_prolonged_sitting_hard_chair',
      text: 'Is a long sit on a firm seat, like a drive or a ballgame, what really flares the sit bone or upper hamstring?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'worse_uphill_or_lengthened_hamstring',
      text: 'Does running uphill, lunging, or stretching the hamstring aggravate pain at the back of the hip?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'morning_stiffness_hip_short',
      text: 'Is the hip stiff first thing in the morning and does it loosen off inside about half an hour of moving?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'loss_of_rotation_putting_on_socks',
      text: 'Are small things like putting on socks, clipping toenails, or getting in and out of a car harder on that side?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'age_over_50_hip',
      text: 'Are you 50 or older?',
      options: STANDARD_OPTIONS,
    },
  ],
};
