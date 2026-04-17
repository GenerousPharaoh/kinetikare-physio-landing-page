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
      text: 'Is the pain mostly in the groin or the front crease of the hip?',
      helper: 'The fold where the thigh meets the pelvis, not the side of the hip.',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'pain_outside_of_hip',
      text: 'Is the pain mostly on the outside of the hip, on the bony bump you lie on?',
      helper: 'The spot where your side would touch the mattress when lying on that side.',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'pain_at_sit_bone',
      text: 'Is the pain right at the sit bone, where the back of the thigh meets the buttock?',
      helper: 'The spot that presses into a hard chair.',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'worse_deep_hip_flexion',
      text: 'Does the groin pain worsen with deep hip bending, like getting out of a low car, squatting, or sitting cross-legged?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'catching_or_clicking_with_pivot',
      text: 'Does the hip catch, click, or pinch when you twist, pivot, or change direction?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'worse_lying_on_that_side',
      text: 'Does lying on that side at night hurt, or make the outside of the hip ache within a few minutes?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'worse_prolonged_sitting_hard_chair',
      text: 'Does sitting for a long time on a hard chair bring on pain at the sit bone or upper hamstring?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'worse_uphill_or_lengthened_hamstring',
      text: 'Does pain at the back of the hip worsen with running uphill, lunges, or stretching the hamstring?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'morning_stiffness_hip_short',
      text: 'Is the hip stiff first thing in the morning, easing up within about 30 minutes of moving?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'loss_of_rotation_putting_on_socks',
      text: 'Is it harder to put on socks, cut toenails, or get in and out of a car on that side?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'age_over_50_hip',
      text: 'Are you 50 or older?',
      options: STANDARD_OPTIONS,
    },
  ],
};
