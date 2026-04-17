/**
 * Elbow and forearm pattern matcher cluster.
 *
 * Purpose: help a visitor on an elbow or forearm condition page compare their
 * own pattern against the common patterns for four overlapping elbow and
 * forearm conditions. This is not a diagnostic tool. Output is phrased as
 * "pattern matches" and "typically overlaps with", never "you have X."
 *
 * Source voice check:
 * - Patient-voice questions ("Does shaking hands with someone, or pouring a
 *   full kettle, reproduce the pain on the outside of your elbow?")
 * - Honest uncertainty: when the top two are close, the component names that
 *   ambiguity rather than forcing a pick.
 *
 * Cluster rationale: the four conditions chosen represent the practical
 * differential for a patient presenting with forearm-dominant or elbow
 * symptoms. Lateral epicondyle tendinopathy and medial epicondyle
 * tendinopathy sit on opposite sides of the elbow but share overuse
 * mechanics. Carpal tunnel is included because median nerve symptoms are
 * the single most common pattern that a patient will self-confuse with a
 * tendinopathy: tingling in the hand frequently gets described as
 * "elbow pain" until the history is teased out. Repetitive strain is the
 * broad catch-all for diffuse forearm overuse that does not localise to a
 * single epicondyle or a single nerve distribution. Cubital tunnel and
 * radial tunnel do not have their own pages on this site, so they are not
 * in the cluster.
 *
 * Questions selected from the discriminator checklist for highest signal:
 * pain location (lateral epicondyle vs medial epicondyle vs palm-and-fingers
 * vs diffuse forearm), gripping or handshake reproduction (lateral),
 * resisted wrist flexion or pronation (medial), hand tingling in the thumb,
 * index, middle (median nerve), night-time numbness that wakes you up
 * (carpal tunnel), relieved by flicking or shaking the hand, recent spike
 * in a racket sport or repetitive manual task (tendinopathy), diffuse
 * aching with multiple aggravators and no single sore spot (RSI), and
 * response to full rest.
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

export const ELBOW_CLUSTER: PatternMatcherCluster = {
  key: 'elbow',
  label: 'Elbow and forearm pattern check',
  regionNoun: 'elbow',
  conditionSlugs: [
    'tennis-elbow',
    'golfers-elbow',
    'carpal-tunnel-syndrome',
    'repetitive-strain-injuries',
  ],
  questions: [
    {
      id: 'pain_outer_elbow_bump',
      text: 'If you press with one finger on the bony bump on the outside of your elbow, is that the worst spot?',
      helper: 'The knobble on the thumb-side of the elbow, not the inside and not the back of the joint.',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'pain_inner_elbow_bump',
      text: 'If you press with one finger on the bony bump on the inside of your elbow, the side closer to your body, is that the worst spot?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'pain_with_gripping_or_handshake',
      text: 'Does a firm handshake, pouring a full kettle, or turning a doorknob reproduce the pain?',
      helper: 'Classic pattern for the outside of the elbow.',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'pain_with_wrist_flexion_or_pronation',
      text: 'Is it worse with a golf swing, throwing a ball, or swinging a hammer, where the forearm rolls in and the wrist flexes under load?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'tingling_thumb_index_middle',
      text: 'Is there tingling, numbness, or pins and needles in the thumb, index, or middle finger of that hand?',
      helper: 'The first three fingers, including the thumb. The ring and small fingers are a different nerve pattern.',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'night_waking_with_numb_hand',
      text: 'Do you wake up at night with a numb or dead hand and have to shake it out to settle it?',
      helper: 'Often relieved by flicking or dangling the hand off the bed.',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'diffuse_aching_forearm_no_single_spot',
      text: 'Is the pain more of a diffuse ache across the forearm, without one single sore spot you can point to?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'started_with_task_spike',
      text: 'Did this follow a noticeable spike in a repetitive task, like a weekend of painting, a new racket sport, a fresh renovation project, or a heavy-typing stretch?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'worse_after_full_rest_elbow',
      text: 'After a full week off the aggravating activity, does the elbow feel stiff and sore on the first few reps, and then warm up?',
      helper: 'A pattern often seen with reactive tendon pain.',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'symptoms_spread_across_neck_shoulder_forearm',
      text: 'Do the symptoms jump around through the neck, shoulder, forearm, and hand depending on the day, rather than staying in one fixed spot?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'weak_grip_or_dropping_objects',
      text: 'Does your grip feel weak, or have you started dropping things like mugs, keys, or a pen?',
      options: STANDARD_OPTIONS,
    },
  ],
};
