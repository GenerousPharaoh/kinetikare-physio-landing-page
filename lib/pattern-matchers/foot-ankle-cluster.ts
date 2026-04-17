/**
 * Foot and ankle pattern matcher cluster.
 *
 * Purpose: help a visitor on a foot or ankle condition page compare their
 * own pattern against the common patterns for five overlapping conditions.
 * This is not a diagnostic tool. Output is phrased as "pattern matches" and
 * "typically overlaps with", never "you have X."
 *
 * Cluster rationale: plantar fasciopathy, Achilles tendinopathy, posterior
 * tibial tendon dysfunction, Morton's neuroma, and peroneal tendinopathy
 * cover the most common non-traumatic presentations in this region. They
 * are frequently confused with each other because patients describe them
 * loosely as "foot pain" or "heel pain" until the pain location and the
 * provoking movements are teased apart.
 *
 * Source voice check:
 * - Patient-voice questions ("Is the first step out of bed in the morning
 *   the single worst moment of your day?")
 * - Honest uncertainty: when the top two are close, the component names
 *   that ambiguity rather than forcing a pick.
 *
 * Questions selected from the discriminator checklist for highest signal:
 * pain location (plantar heel vs back of heel vs medial arch vs between
 * toes vs lateral foot), first-step-in-the-morning pain, pain that warms
 * up and worsens after activity, visible arch collapse or inability to
 * rise onto the toes (PTTD), electric shock or burning between the toes
 * with tight shoes (Morton's), lateral symptoms and a history of rolled
 * ankles (peroneal), response to a wide toe box, response to heel drop
 * or heel raise height in footwear.
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

export const FOOT_ANKLE_CLUSTER: PatternMatcherCluster = {
  key: 'foot-ankle',
  label: 'Foot and ankle pain pattern check',
  regionNoun: 'foot or ankle',
  conditionSlugs: [
    'plantar-fasciitis',
    'achilles-tendinopathy',
    'posterior-tibial-tendon-dysfunction',
    'mortons-neuroma',
    'peroneal-tendinopathy',
  ],
  questions: [
    {
      id: 'pain_under_heel_plantar',
      text: 'If you press with one finger on the underside of your heel, slightly toward the arch, is that the worst spot?',
      helper: 'The sole of the heel rather than the back of the heel or the arch itself.',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'pain_back_of_heel_or_cord',
      text: 'Is the main pain in the cord at the back of the heel, or right where the cord meets the heel bone?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'pain_medial_arch_or_below_inner_ankle',
      text: 'Is the pain along the inner side of the foot, behind and below the inner ankle bone, or along the arch?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'pain_forefoot_between_toes',
      text: 'Is the worst pain in the ball of the foot, between or under the middle toes, often like an electric shock or a pebble in the shoe?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'pain_lateral_foot_or_behind_outer_ankle',
      text: 'Is the main pain on the outer side of the foot or ankle, behind or below the bony bump on the outside?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'first_step_morning_pain',
      text: 'Is the first step out of bed in the morning the single worst moment of the day?',
      helper: 'A sharp stab in the heel or foot on the very first loading, easing within ten to fifteen minutes of walking.',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'warms_up_then_worse_after',
      text: 'Does the pain ease a bit once you are warmed up, then flare worse an hour or two after activity?',
      helper: 'A pattern common with tendon problems.',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'arch_collapse_or_cant_rise_on_toes',
      text: 'Have you noticed the arch flattening, the foot rolling inward, or trouble rising up onto the ball of that foot?',
      helper: 'Sometimes described as the foot looking different in shoes, or being unable to do a single-leg heel raise.',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'better_in_wide_toe_box',
      text: 'Do wide, roomy shoes clearly feel better than narrow dress shoes or tight trainers?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'history_of_rolled_ankles',
      text: 'Have you rolled or sprained that ankle before, and does it still feel wobbly on uneven ground?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'pain_with_push_off_running',
      text: 'Is the pain worst at push-off during running, walking briskly, or climbing a hill?',
      options: STANDARD_OPTIONS,
    },
    {
      id: 'numbness_or_burning_in_toes',
      text: 'Do the toes, or part of them, feel numb, burning, or tingly when the pain is at its worst?',
      options: STANDARD_OPTIONS,
    },
  ],
};
