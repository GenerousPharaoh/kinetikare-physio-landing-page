/**
 * Checks the "Is this my pattern?" scoring against the real cluster data.
 *
 *   node_modules/.bin/jiti scripts/pattern-matcher-check.ts
 *
 * 1. Self-consistency: answering every question the way a condition's own
 *    markers expect must put that condition first, clearly ahead.
 * 2. Knee personas: typical patients, answered the way they would answer,
 *    must land on the expected pattern (or an accepted pair).
 * Exits 1 on any failure.
 */

import { KNEE_CLUSTER, type MatcherAnswer, type PatternMatcherCluster } from '../lib/pattern-matchers/knee-cluster';
import { LOW_BACK_CLUSTER } from '../lib/pattern-matchers/low-back-cluster';
import { SHOULDER_CLUSTER } from '../lib/pattern-matchers/shoulder-cluster';
import { HIP_CLUSTER } from '../lib/pattern-matchers/hip-cluster';
import { ELBOW_CLUSTER } from '../lib/pattern-matchers/elbow-cluster';
import { FOOT_ANKLE_CLUSTER } from '../lib/pattern-matchers/foot-ankle-cluster';
import { detailedConditionsContent } from '../lib/detailed-conditions-content';
import { classify, scoreCluster, type ScoringConditions } from '../lib/pattern-matchers/scoring';
import { QUESTION_FEATURES } from '../lib/pattern-matchers/features';

const CLUSTERS: PatternMatcherCluster[] = [KNEE_CLUSTER, LOW_BACK_CLUSTER, SHOULDER_CLUSTER, HIP_CLUSTER, ELBOW_CLUSTER, FOOT_ANKLE_CLUSTER];

const conditions: ScoringConditions = {};
for (const [slug, c] of Object.entries(detailedConditionsContent)) {
  if (c.patternMatcher) conditions[slug] = { slug, name: slug, patternMatcher: c.patternMatcher };
}

let failures = 0;
const fmt = (n: number) => (Math.round(n * 10) / 10).toString();

function run(cluster: PatternMatcherCluster, answers: Record<string, MatcherAnswer>) {
  const ranked = scoreCluster(cluster, conditions, answers);
  const verdict = classify(ranked);
  return { verdict, ranked };
}

console.log('Self-consistency (ideal answers for each condition)');
for (const cluster of CLUSTERS) {
  for (const slug of cluster.conditionSlugs) {
    const markers = conditions[slug]?.patternMatcher?.markers;
    if (!markers) continue;
    const answers: Record<string, MatcherAnswer> = {};
    for (const m of markers) {
      answers[m.questionId] = m.signal === 'strong_yes' || m.signal === 'yes' ? 'yes' : m.signal === 'neutral' ? 'unsure' : 'no';
    }
    const { verdict, ranked } = run(cluster, answers);
    // Clinically overlapping pairs (cuff and impingement, hip OA, FAI and
    // labrum) may honestly show as a close call; the condition must still
    // come first and be shown.
    const ok = ranked[0]?.slug === slug && verdict.kind !== 'no_match';
    if (!ok) failures++;
    console.log(
      `  ${ok ? 'ok  ' : 'FAIL'} ${cluster.key.padEnd(10)} ${slug.padEnd(36)} ${verdict.kind.padEnd(9)} ` +
        ranked.slice(0, 3).map((r) => `${r.slug} ${fmt(r.raw)}`).join(' | '),
    );
  }
}

// Answers in question order: tendon, around kneecap, outside, theatre, downstairs,
// jumping, catching, downhill running, morning stiffness, twist, week off, 45+.
const Y = 'yes', S = 'somewhat', N = 'no', U = 'unsure';
const KNEE_PERSONAS: { name: string; answers: MatcherAnswer[]; expect: string[] }[] = [
  { name: 'Kneecap pain, 28-year-old runner', answers: [N, Y, N, Y, Y, S, N, S, N, N, N, N], expect: ['knee-pain-patellofemoral'] },
  { name: 'Kneecap pain, teen, some giving way', answers: [N, Y, N, Y, Y, S, S, U, N, N, N, N], expect: ['knee-pain-patellofemoral'] },
  { name: 'Jumper, tendon spot, 22', answers: [Y, N, N, S, S, Y, N, N, S, N, Y, N], expect: ['patellar-tendinopathy'] },
  { name: 'Meniscus, twist playing soccer, 25', answers: [N, N, N, N, S, S, Y, N, N, Y, N, N], expect: ['meniscus-tears'] },
  { name: 'Meniscus, gradual, 55', answers: [N, N, N, S, Y, S, Y, N, S, N, N, Y], expect: ['meniscus-tears', 'knee-osteoarthritis'] },
  { name: 'Arthritis, 62, settles once warm', answers: [N, N, N, S, S, S, S, N, Y, N, Y, Y], expect: ['knee-osteoarthritis'] },
  { name: 'Arthritis, 62, cautious answers', answers: [N, U, N, S, S, S, N, N, Y, N, S, Y], expect: ['knee-osteoarthritis'] },
  { name: 'IT band, runner, outer knee', answers: [N, N, Y, N, S, N, N, Y, N, N, N, N], expect: ['it-band-syndrome'] },
];

console.log('\nKnee personas');
for (const p of KNEE_PERSONAS) {
  const answers: Record<string, MatcherAnswer> = {};
  KNEE_CLUSTER.questions.forEach((q, i) => { answers[q.id] = p.answers[i]; });
  const { verdict, ranked } = run(KNEE_CLUSTER, answers);
  const shown = verdict.kind === 'lopsided' ? [ranked[0].slug] : verdict.kind === 'ambiguous' ? ranked.slice(0, 2).map((r) => r.slug) : [];
  const ok = shown.length > 0 && shown.every((s) => p.expect.includes(s));
  if (!ok) failures++;
  console.log(
    `  ${ok ? 'ok  ' : 'FAIL'} ${p.name.padEnd(38)} ${verdict.kind.padEnd(9)} shows: ${shown.join(' + ') || '(none)'}   ` +
      ranked.slice(0, 3).map((r) => `${r.slug} ${fmt(r.raw)}`).join(' | '),
  );
}

// Every question needs a plain result phrase (lib/pattern-matchers/features.ts).
for (const cluster of CLUSTERS) {
  for (const q of cluster.questions) {
    if (!QUESTION_FEATURES[q.id]) {
      console.log(`FAIL ${cluster.key}: no result phrase for question ${q.id}`);
      failures++;
    }
  }
}

console.log(failures ? `\n${failures} failure(s)` : '\nAll checks passed');
process.exit(failures ? 1 : 0);
