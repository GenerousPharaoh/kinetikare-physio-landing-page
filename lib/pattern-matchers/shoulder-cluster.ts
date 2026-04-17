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
  regionNoun: 'shoulder',
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
      text: 'Is there a pinpoint sore spot right on top of the shoulder, on the bump where the collarbone meets the shoulder?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'pain_outside_deltoid',
      text: 'Is the main pain more on the outside of the shoulder, in the meat of the deltoid where a sleeve sits?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'pain_front_of_shoulder',
      text: 'Is the main pain at the front of the shoulder, near the crease where the arm meets the chest?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'painful_arc_overhead',
      text: 'Lifting your arm out to the side, is there a painful zone around shoulder to ear height that eases once you go higher?',
      helper: 'Known as a painful arc.',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'cant_reach_behind_back',
      text: 'Is reaching behind your back tough, for example tucking in a shirt or fastening a bra?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'passive_motion_restricted_all_directions',
      text: 'If someone else moves your arm for you while you stay relaxed, is it still blocked or painful in every direction?',
      helper: 'A classic pattern for a frozen shoulder, where even assisted motion is limited.',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'weakness_lifting_or_external_rotation',
      text: 'Does the arm feel truly weak when lifting overhead or rotating outward against resistance, not just sore?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'night_pain_lying_on_shoulder',
      text: 'Does rolling onto that shoulder at night wake you up?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'cross_body_reach_painful',
      text: 'Does reaching across your body, like grabbing a seatbelt, pinch the top of the shoulder?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'specific_fall_on_shoulder',
      text: 'Did this kick off with a fall onto the shoulder, a direct hit, or a sudden pull on the arm?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'gradual_progressive_stiffening',
      text: 'Over weeks or months, has the shoulder gradually tightened up, with the range getting smaller as time goes on?',
      options: STANDARD_OPTIONS,
    },
  ],
};
