/**
 * Scoring for the "Is this my pattern?" checks on condition pages.
 *
 * Pure functions, kept out of the component so they can be tested directly
 * (see scripts/pattern-matcher-check.ts). Each condition carries markers in its
 * data (`patternMatcher.markers`); every answer adds or subtracts from each
 * condition's score according to `scoreCell`, and `classify` decides whether
 * one pattern is clearly ahead, two are close, or nothing matches.
 */

import type {
  MatcherAnswer,
  PatternMatcherCluster,
  PatternMatcherQuestion,
} from './knee-cluster';

/** The slice of a condition the scorer reads. */
export type ScoringConditions = Record<
  string,
  {
    slug: string;
    name: string;
    patternMatcher?: { clusterKey: string; markers: { questionId: string; signal: MarkerSignal }[] };
  }
>;

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type MarkerSignal = 'strong_yes' | 'yes' | 'neutral' | 'no' | 'strong_no';

export interface ConditionScore {
  slug: string;
  name: string;
  raw: number;            // raw accumulated score
  positives: number;      // sum of positive contributions only (used for relative strength)
  maxPossible: number;    // upper bound given the marker set (non-neutral markers answered yes)
  topDrivers: DriverNote[]; // up to 3 strongest contributors (positive or negative)
}

export interface DriverNote {
  questionId: string;
  questionText: string;
  userAnswer: MatcherAnswer;
  markerSignal: MarkerSignal;
  contribution: number;
  direction: 'supports' | 'argues_against';
  phrase: string;
}


// ---------------------------------------------------------------------------
// Scoring
// ---------------------------------------------------------------------------

/**
 * Score matrix for (markerSignal, userAnswer). Returns a signed number.
 * Values are tuned so that a single strong match moves the needle clearly,
 * but a lopsided verdict still requires alignment across several questions.
 *
 * Two rules added 2026-10-11 after a 62-year-old answering like knee arthritis
 * was told the pattern also fitted patellar tendinopathy:
 * - A "no" to a condition's defining feature (strong_yes) costs 4, so missing
 *   the hallmark (the sore spot on the tendon) outweighs incidental matches.
 * - Not having a feature that argues against a condition is weak evidence for
 *   it, so "no" to a no/strong_no marker earns 0.5 / 1 rather than 1 / 2.
 *   Before, a condition collected points from every symptom the patient did
 *   not have.
 * `scripts/pattern-matcher-check.ts` tests these values against every cluster.
 */
export function scoreCell(marker: MarkerSignal, answer: MatcherAnswer): number {
  if (answer === 'unsure') return 0;
  switch (marker) {
    case 'strong_yes':
      if (answer === 'yes') return 3;
      if (answer === 'somewhat') return 1.5;
      if (answer === 'no') return -4;
      return 0;
    case 'yes':
      if (answer === 'yes') return 2;
      if (answer === 'somewhat') return 1;
      if (answer === 'no') return -1;
      return 0;
    case 'neutral':
      return 0;
    case 'no':
      if (answer === 'yes') return -1;
      if (answer === 'somewhat') return -0.5;
      if (answer === 'no') return 0.5;
      return 0;
    case 'strong_no':
      if (answer === 'yes') return -2;
      if (answer === 'somewhat') return -1;
      if (answer === 'no') return 1;
      return 0;
    default:
      return 0;
  }
}

/** Maximum positive score a marker can contribute given an ideal answer (matches scoreCell). */
export function markerUpperBound(marker: MarkerSignal): number {
  if (marker === 'strong_yes') return 3;
  if (marker === 'yes') return 2;
  if (marker === 'strong_no') return 1;
  if (marker === 'no') return 0.5;
  return 0;
}

function humanize(answer: MatcherAnswer): string {
  switch (answer) {
    case 'yes':
      return 'yes';
    case 'somewhat':
      return 'somewhat';
    case 'no':
      return 'no';
    case 'unsure':
      return 'unsure';
  }
}

function describeMarker(marker: MarkerSignal): string {
  switch (marker) {
    case 'strong_yes':
      return 'characteristically yes';
    case 'yes':
      return 'usually yes';
    case 'neutral':
      return 'ambiguous';
    case 'no':
      return 'usually no';
    case 'strong_no':
      return 'characteristically no';
  }
}

/**
 * Compute scores for each condition in the cluster. Questions the user marked
 * 'unsure' contribute nothing. Conditions without `patternMatcher` markers are
 * skipped. Returns results sorted by raw score descending.
 */
export function scoreCluster(
  cluster: PatternMatcherCluster,
  conditionsBySlug: ScoringConditions,
  answers: Record<string, MatcherAnswer>,
): ConditionScore[] {
  const questionsById = new Map<string, PatternMatcherQuestion>();
  cluster.questions.forEach((q) => questionsById.set(q.id, q));

  const results: ConditionScore[] = [];

  for (const slug of cluster.conditionSlugs) {
    const cond = conditionsBySlug[slug];
    if (!cond || !cond.patternMatcher) continue;

    let raw = 0;
    let positives = 0;
    let maxPossible = 0;
    const drivers: DriverNote[] = [];

    for (const marker of cond.patternMatcher.markers) {
      const question = questionsById.get(marker.questionId);
      if (!question) continue;

      maxPossible += markerUpperBound(marker.signal);

      const answer = answers[marker.questionId];
      if (!answer) continue;

      const contribution = scoreCell(marker.signal, answer);
      raw += contribution;
      if (contribution > 0) positives += contribution;

      if (contribution !== 0) {
        drivers.push({
          questionId: marker.questionId,
          questionText: question.text,
          userAnswer: answer,
          markerSignal: marker.signal,
          contribution,
          direction: contribution > 0 ? 'supports' : 'argues_against',
          phrase: buildDriverPhrase(question.text, answer, marker.signal, contribution > 0),
        });
      }
    }

    drivers.sort((a, b) => Math.abs(b.contribution) - Math.abs(a.contribution));

    results.push({
      slug,
      name: cond.name ?? slug,
      raw,
      positives,
      maxPossible: maxPossible || 1,
      topDrivers: drivers.slice(0, 3),
    });
  }

  results.sort((a, b) => b.raw - a.raw);
  return results;
}

/**
 * Render a short, plain-language phrase describing how a given answer
 * contributes to (or against) a condition. No percentages, no scores.
 */
function buildDriverPhrase(
  questionText: string,
  answer: MatcherAnswer,
  marker: MarkerSignal,
  supports: boolean,
): string {
  const trimmed = questionText.replace(/\?$/, '').toLowerCase();
  const answerWord = humanize(answer);
  const markerWord = describeMarker(marker);
  if (supports) {
    return `You answered "${answerWord}" to: "${trimmed}". That pattern is ${markerWord} for this condition.`;
  }
  return `You answered "${answerWord}" to: "${trimmed}". That pattern is ${markerWord} for this condition, which argues against it.`;
}

// ---------------------------------------------------------------------------
// Result classification
// ---------------------------------------------------------------------------

export type VerdictKind = 'lopsided' | 'ambiguous' | 'no_match';

export interface Verdict {
  kind: VerdictKind;
  ranked: ConditionScore[];
}

/**
 * Decide whether one condition is clearly ahead, two are close, or nothing
 * lines up well. Thresholds are relative to the top condition's own positive
 * potential, not an absolute percentage — this keeps the rule honest when the
 * user answered many questions "unsure".
 */
export function classify(ranked: ConditionScore[]): Verdict {
  if (ranked.length === 0) {
    return { kind: 'no_match', ranked };
  }

  const top = ranked[0];
  const second = ranked[1];

  // If the best positive score is weak relative to its own potential, don't
  // pretend we matched anything. 25% of the max-possible positive score is a
  // rough floor below which the signal is just noise.
  const topStrength = top.positives / Math.max(top.maxPossible, 1);
  if (topStrength < 0.25 || top.raw <= 0) {
    return { kind: 'no_match', ranked };
  }

  if (!second) {
    return { kind: 'lopsided', ranked };
  }

  // Lopsided if top is >40% higher raw score than second and second is
  // meaningfully lower in absolute terms too.
  const gap = top.raw - Math.max(second.raw, 0.01);
  const relGap = gap / Math.max(top.raw, 0.01);
  if (relGap >= 0.4 && gap >= 2) {
    return { kind: 'lopsided', ranked };
  }

  // Ambiguous if the top two are within 20% of each other.
  const twoRelGap = gap / Math.max(top.raw, 0.01);
  if (twoRelGap <= 0.2) {
    return { kind: 'ambiguous', ranked };
  }

  // Middle ground: still treat as comparison (safer default).
  return { kind: 'ambiguous', ranked };
}
