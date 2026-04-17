/**
 * Shoulder pattern matcher cluster.
 *
 * Purpose: help a visitor on a shoulder condition page compare their own
 * pattern against the common patterns for five overlapping shoulder
 * conditions. This is not a diagnostic tool. Output is phrased as "pattern
 * matches" and "typically overlaps with", never "you have X."
 *
 * Source voice check:
 * - Patient-voice questions ("Is it hard to reach behind your back to tuck in
 *   a shirt or fasten a bra?")
 * - Honest uncertainty: when the top two are close, the component names that
 *   ambiguity rather than forcing a pick.
 *
 * Questions selected from the discriminator checklist for highest signal:
 * pain location (top of shoulder vs deltoid vs front), loss of passive range
 * (frozen shoulder), painful arc (impingement / rotator cuff), weakness with
 * overhead or external rotation (rotator cuff tear), night pain (rotator
 * cuff / frozen shoulder), specific event like a fall on the shoulder (AC
 * joint), tenderness over the front of the shoulder (biceps), cross-body
 * reaching (AC joint), and gradual onset with progressive stiffness (frozen
 * shoulder).
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

export const SHOULDER_CLUSTER: PatternMatcherCluster = {
  key: 'shoulder',
  label: 'Shoulder pain pattern check',
  conditionSlugs: [
    'rotator-cuff-injuries',
    'frozen-shoulder',
    'shoulder-impingement',
    'ac-joint-injuries',
    'biceps-tendinopathy',
  ],
  questions: [
    {
      id: 'pain_top_of_shoulder_ac',
      text: 'Is the pain right on top of the shoulder, on the bump where the collarbone meets the shoulder?',
      helper: 'A small, pinpoint spot you can press with one finger on the top of the shoulder.',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'pain_outside_deltoid',
      text: 'Is the pain more on the outside of the shoulder, in the middle of the deltoid, where your sleeve sits?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'pain_front_of_shoulder',
      text: 'Is the pain mostly at the front of the shoulder, near the crease where the arm meets the chest?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'painful_arc_overhead',
      text: 'When you lift your arm out to the side, is there a painful zone in the middle of the range that eases when you go higher?',
      helper: 'Painful between roughly shoulder height and ear height, then easier once you reach straight up.',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'cant_reach_behind_back',
      text: 'Is it hard or painful to reach behind your back, for example to tuck in a shirt or fasten a bra?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'passive_motion_restricted_all_directions',
      text: 'When someone else moves your arm for you while you relax, is the movement still blocked or painful in every direction?',
      helper: 'Classic pattern for a frozen shoulder, where even passive motion is limited.',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'weakness_lifting_or_external_rotation',
      text: 'Does the arm feel weak when lifting overhead, or when rotating the arm outward against resistance?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'night_pain_lying_on_shoulder',
      text: 'Does the pain wake you up at night, especially when you roll onto that shoulder?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'cross_body_reach_painful',
      text: 'Does reaching across your body, like putting on a seatbelt, pinch the top of the shoulder?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'specific_fall_on_shoulder',
      text: 'Did this start after a specific fall onto the shoulder, a hit, or a sudden pull on the arm?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'gradual_progressive_stiffening',
      text: 'Has the shoulder gradually become stiffer over weeks or months, with the range getting smaller over time?',
      options: STANDARD_OPTIONS,
    },
  ],
};
