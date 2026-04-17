'use client';

/**
 * PatternMatcher
 *
 * A differential-matching helper for a cluster of related conditions (e.g. knee).
 * Given a set of patient-voice questions and per-condition marker patterns, it
 * returns either:
 *   - a lopsided match (one condition matches much better than the rest),
 *   - a close-call comparison between the top two candidates, or
 *   - an honest "no strong match" message when nothing aligns.
 *
 * Design principles (non-negotiable):
 *   - Default output is comparison, not destination.
 *   - Show reasoning, not scores. No percentages.
 *   - Name ambiguity when it exists.
 *   - Never diagnostic. "Pattern matches" and "typically overlaps with", never "you have X."
 *
 * UX choice: single-question stepper. It keeps each question readable on mobile,
 * prevents a long scroll-to-submit form, and allows clean keyboard nav (1–4 keys,
 * arrow keys, back button). Reviewed alternative: single-page form with all
 * questions visible. Rejected because the question set is 10+ and each question
 * benefits from focused attention, and because a stepper gives a visible sense
 * of progress which reduces drop-off.
 */

import React, { useMemo, useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  InformationCircleIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline';
import type { Condition } from '@/lib/conditions-data';
import type {
  MatcherAnswer,
  PatternMatcherCluster,
  PatternMatcherQuestion,
} from '@/lib/pattern-matchers/knee-cluster';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type MarkerSignal = 'strong_yes' | 'yes' | 'neutral' | 'no' | 'strong_no';

interface ConditionScore {
  slug: string;
  name: string;
  raw: number;            // raw accumulated score
  positives: number;      // sum of positive contributions only (used for relative strength)
  maxPossible: number;    // upper bound given the marker set (non-neutral markers answered yes)
  topDrivers: DriverNote[]; // up to 3 strongest contributors (positive or negative)
}

interface DriverNote {
  questionId: string;
  questionText: string;
  userAnswer: MatcherAnswer;
  markerSignal: MarkerSignal;
  contribution: number;
  direction: 'supports' | 'argues_against';
  phrase: string;
}

export interface PatternMatcherProps {
  currentSlug: string;
  cluster: PatternMatcherCluster;
  // We only need slug + name from each condition. We pass the full map so the
  // caller can keep a single lookup source of truth, but we treat it as a slim
  // view-model here.
  conditionsBySlug: Record<string, Pick<Condition, 'slug' | 'name'> & {
    patternMatcher?: Condition['patternMatcher'];
  }>;
}

// ---------------------------------------------------------------------------
// Scoring
// ---------------------------------------------------------------------------

/**
 * Score matrix for (markerSignal, userAnswer). Returns a signed number.
 * Values are tuned so that a single strong match moves the needle clearly,
 * but a lopsided verdict still requires alignment across several questions.
 */
function scoreCell(marker: MarkerSignal, answer: MatcherAnswer): number {
  if (answer === 'unsure') return 0;
  switch (marker) {
    case 'strong_yes':
      if (answer === 'yes') return 3;
      if (answer === 'somewhat') return 1.5;
      if (answer === 'no') return -2;
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
      if (answer === 'no') return 1;
      return 0;
    case 'strong_no':
      if (answer === 'yes') return -2;
      if (answer === 'somewhat') return -1;
      if (answer === 'no') return 2;
      return 0;
    default:
      return 0;
  }
}

/** Maximum positive score a marker can contribute given an ideal answer. */
function markerUpperBound(marker: MarkerSignal): number {
  if (marker === 'strong_yes' || marker === 'strong_no') return 3;
  if (marker === 'yes' || marker === 'no') return 2;
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
function scoreCluster(
  cluster: PatternMatcherCluster,
  conditionsBySlug: PatternMatcherProps['conditionsBySlug'],
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

type VerdictKind = 'lopsided' | 'ambiguous' | 'no_match';

interface Verdict {
  kind: VerdictKind;
  ranked: ConditionScore[];
}

/**
 * Decide whether one condition is clearly ahead, two are close, or nothing
 * lines up well. Thresholds are relative to the top condition's own positive
 * potential, not an absolute percentage — this keeps the rule honest when the
 * user answered many questions "unsure".
 */
function classify(ranked: ConditionScore[]): Verdict {
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

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function PatternMatcher({
  currentSlug,
  cluster,
  conditionsBySlug,
}: PatternMatcherProps) {
  const totalQuestions = cluster.questions.length;
  const [step, setStep] = useState<number>(0); // 0..totalQuestions-1, then totalQuestions = result
  const [answers, setAnswers] = useState<Record<string, MatcherAnswer>>({});
  const cardRef = useRef<HTMLDivElement | null>(null);
  const liveRegionRef = useRef<HTMLDivElement | null>(null);

  const onResult = step >= totalQuestions;
  const progressPct = Math.round((step / totalQuestions) * 100);
  const currentQ: PatternMatcherQuestion | undefined = cluster.questions[step];

  const handleAnswer = useCallback(
    (value: MatcherAnswer) => {
      if (!currentQ) return;
      setAnswers((prev) => ({ ...prev, [currentQ.id]: value }));
      // Advance after a tiny delay so the active state is visible to the user.
      window.setTimeout(() => {
        setStep((s) => s + 1);
      }, 120);
    },
    [currentQ],
  );

  const goBack = useCallback(() => {
    setStep((s) => Math.max(0, s - 1));
  }, []);

  const restart = useCallback(() => {
    setAnswers({});
    setStep(0);
  }, []);

  // Keyboard shortcuts: 1-4 pick answers, left arrow = back.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (onResult || !currentQ) return;
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) return;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goBack();
        return;
      }
      const idx = Number(e.key) - 1;
      if (!Number.isNaN(idx) && idx >= 0 && idx < currentQ.options.length) {
        e.preventDefault();
        handleAnswer(currentQ.options[idx].value);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [currentQ, goBack, handleAnswer, onResult]);

  // Announce step changes to screen readers.
  useEffect(() => {
    if (!liveRegionRef.current) return;
    if (onResult) {
      liveRegionRef.current.textContent = 'Pattern check complete. Results are shown below.';
    } else if (currentQ) {
      liveRegionRef.current.textContent = `Question ${step + 1} of ${totalQuestions}.`;
    }
  }, [step, onResult, totalQuestions, currentQ]);

  const scores = useMemo(
    () => scoreCluster(cluster, conditionsBySlug, answers),
    [cluster, conditionsBySlug, answers],
  );

  const verdict = useMemo(() => classify(scores), [scores]);

  // Accent: the page uses #B08D57 as its gold throughout. We match it.
  const gold = '#B08D57';
  const goldDark = '#8c6d3d';

  return (
    <section
      aria-label={cluster.label}
      className="bg-white rounded-xl border border-slate-200 shadow-lg overflow-hidden"
    >
      {/* Screen-reader live region */}
      <div ref={liveRegionRef} aria-live="polite" aria-atomic="true" className="sr-only" />

      {/* Header */}
      <div className="px-6 py-5 md:px-10 md:py-7 border-b border-slate-100 bg-gradient-to-br from-white to-slate-50/60">
        <div className="flex items-start gap-3">
          <div
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-white shadow-sm"
            style={{ background: `linear-gradient(135deg, ${gold}, ${goldDark})` }}
            aria-hidden="true"
          >
            <ScaleIcon className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
              Is this my pattern?
            </h2>
            <p className="mt-1 text-sm md:text-base text-slate-600 leading-relaxed max-w-[58ch]">
              A few questions to compare your own pattern against the common {cluster.regionNoun} conditions.
              This is not a diagnosis. It is a way to see which pattern your answers most resemble,
              so an in-person assessment has a starting point.
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-5" aria-hidden={onResult ? 'true' : 'false'}>
          <div className="flex items-center justify-between text-xs font-medium text-slate-500 mb-1.5">
            <span>
              {onResult
                ? 'Pattern check complete'
                : `Question ${Math.min(step + 1, totalQuestions)} of ${totalQuestions}`}
            </span>
            <span>{onResult ? '100%' : `${progressPct}%`}</span>
          </div>
          <div
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={onResult ? 100 : progressPct}
            className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden"
          >
            <div
              className="h-full transition-[width] duration-300 ease-out"
              style={{
                width: `${onResult ? 100 : progressPct}%`,
                background: `linear-gradient(90deg, ${gold}, ${goldDark})`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Body */}
      <div ref={cardRef} className="px-6 py-8 md:px-10 md:py-10">
        <AnimatePresence mode="wait">
          {!onResult && currentQ && (
            <motion.div
              key={currentQ.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <h3 className="text-lg md:text-xl font-medium text-slate-900 leading-snug max-w-[52ch]">
                {currentQ.text}
              </h3>
              {currentQ.helper && (
                <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-[62ch]">
                  {currentQ.helper}
                </p>
              )}

              <div
                role="radiogroup"
                aria-label={currentQ.text}
                className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {currentQ.options.map((opt, idx) => {
                  const selected = answers[currentQ.id] === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      onClick={() => handleAnswer(opt.value)}
                      className={`group relative text-left px-4 py-3.5 rounded-xl border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B08D57] ${
                        selected
                          ? 'border-[#B08D57] bg-[#B08D57]/10 shadow-sm'
                          : 'border-slate-200 hover:border-[#B08D57]/50 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-medium border ${
                            selected
                              ? 'border-[#B08D57] bg-[#B08D57] text-white'
                              : 'border-slate-300 bg-white text-slate-500 group-hover:border-[#B08D57]/70'
                          }`}
                          aria-hidden="true"
                        >
                          {idx + 1}
                        </span>
                        <span className={`text-base ${selected ? 'text-slate-900 font-medium' : 'text-slate-700'}`}>
                          {opt.label}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Nav */}
              <div className="mt-8 flex items-center justify-between">
                <button
                  type="button"
                  onClick={goBack}
                  disabled={step === 0}
                  className={`inline-flex items-center gap-1.5 text-sm font-medium rounded-lg px-3 py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B08D57] ${
                    step === 0
                      ? 'text-slate-300 cursor-not-allowed'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <ArrowLeftIcon className="h-4 w-4" />
                  Back
                </button>
                <span className="text-xs text-slate-400">
                  Tip: press 1&ndash;4 to answer quickly
                </span>
              </div>
            </motion.div>
          )}

          {onResult && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            >
              <ResultView
                verdict={verdict}
                cluster={cluster}
                currentSlug={currentSlug}
                onRestart={restart}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Result subviews
// ---------------------------------------------------------------------------

interface ResultViewProps {
  verdict: Verdict;
  cluster: PatternMatcherCluster;
  currentSlug: string;
  onRestart: () => void;
}

function ResultView({ verdict, cluster, currentSlug, onRestart }: ResultViewProps) {
  if (verdict.kind === 'no_match') {
    return (
      <div>
        <div className="flex items-start gap-3 mb-6">
          <InformationCircleIcon className="h-6 w-6 text-[#B08D57] flex-shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <h3 className="text-xl font-semibold text-slate-900 tracking-tight">
              Your answers don&rsquo;t line up with any single pattern.
            </h3>
            <p className="mt-2 text-base text-slate-700 leading-relaxed max-w-[62ch]">
              That happens. {capitalize(cluster.regionNoun)} presentations overlap, and some
              genuinely do not fit a tidy textbook pattern. This is where an in-person assessment
              pulls its weight. I watch how the {cluster.regionNoun} moves, test specific
              structures, and see how it behaves under load.
            </p>
          </div>
        </div>
        <BookCta onRestart={onRestart} />
      </div>
    );
  }

  if (verdict.kind === 'lopsided') {
    const top = verdict.ranked[0];
    const reasoning = buildLopsidedReasoning(top);
    const isCurrent = top.slug === currentSlug;
    return (
      <div>
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
          Your answers most resemble{' '}
          <span className="text-[#B08D57]">{top.name}</span>.
        </h3>
        <p className="mt-3 text-base text-slate-700 leading-relaxed max-w-[64ch]">
          {reasoning}
        </p>

        <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50/60 p-4">
          <p className="text-sm text-slate-600 leading-relaxed">
            <span className="font-medium text-slate-800">Important:</span> this is a pattern match,
            not a diagnosis. Several conditions can share features, and a physical exam is what
            distinguishes them reliably.
          </p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          {!isCurrent && (
            <Link
              href={`/conditions/${top.slug}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#B08D57] px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-[#8c6d3d] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B08D57]"
            >
              Read about {top.name}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          )}
          <button
            type="button"
            onClick={onRestart}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B08D57]"
          >
            <ArrowPathIcon className="h-4 w-4" />
            Start over
          </button>
        </div>
      </div>
    );
  }

  // ambiguous: show comparison view of top two (and, if close, three)
  const topTwo = verdict.ranked.slice(0, Math.min(3, verdict.ranked.length)).filter((r) => r.raw > 0);
  const candidates = topTwo.length >= 2 ? topTwo.slice(0, 2) : topTwo;

  return (
    <div>
      <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
        Your answers fit{' '}
        <span className="text-[#B08D57]">more than one pattern</span>.
      </h3>
      <p className="mt-3 text-base text-slate-700 leading-relaxed max-w-[64ch]">
        Both of these match parts of what you described. A hands-on exam is what separates them
        cleanly. Here is what lines up with each, based on your answers.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {candidates.map((c) => (
          <CandidateCard key={c.slug} score={c} isCurrent={c.slug === currentSlug} />
        ))}
      </div>

      <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50/60 p-4">
        <p className="text-sm text-slate-600 leading-relaxed">
          <span className="font-medium text-slate-800">What typically distinguishes them:</span>{' '}
          {buildDistinguishingNote(candidates, cluster.regionNoun)}
        </p>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          onClick={onRestart}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B08D57]"
        >
          <ArrowPathIcon className="h-4 w-4" />
          Start over
        </button>
      </div>
    </div>
  );
}

function CandidateCard({ score, isCurrent }: { score: ConditionScore; isCurrent: boolean }) {
  const supports = score.topDrivers.filter((d) => d.direction === 'supports').slice(0, 3);
  return (
    <div className="group relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <h4 className="text-base md:text-lg font-semibold text-slate-900">{score.name}</h4>
          {isCurrent && (
            <p className="mt-0.5 text-xs font-medium text-[#8c6d3d]">This page</p>
          )}
        </div>
      </div>
      <ul className="space-y-2">
        {supports.length === 0 && (
          <li className="text-sm text-slate-600">
            No single answer strongly supported this, but your overall pattern still overlaps.
          </li>
        )}
        {supports.map((d) => (
          <li key={d.questionId} className="flex items-start gap-2">
            <CheckCircleIcon className="h-4 w-4 text-[#B08D57] mt-0.5 flex-shrink-0" aria-hidden="true" />
            <span className="text-sm text-slate-700 leading-relaxed">{d.phrase}</span>
          </li>
        ))}
      </ul>
      {!isCurrent && (
        <div className="mt-4">
          <Link
            href={`/conditions/${score.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-[#8c6d3d] hover:text-[#B08D57]"
          >
            Read about {score.name}
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </Link>
        </div>
      )}
    </div>
  );
}

function BookCta({ onRestart }: { onRestart: () => void }) {
  return (
    <div className="mt-4 flex flex-col sm:flex-row gap-3">
      <Link
        href="/book"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#B08D57] px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-[#8c6d3d] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B08D57]"
      >
        Book an assessment
        <ArrowRightIcon className="h-4 w-4" />
      </Link>
      <button
        type="button"
        onClick={onRestart}
        className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B08D57]"
      >
        <ArrowPathIcon className="h-4 w-4" />
        Start over
      </button>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Reasoning text builders
// ---------------------------------------------------------------------------

function buildLopsidedReasoning(top: ConditionScore): string {
  const supports = top.topDrivers.filter((d) => d.direction === 'supports');
  if (supports.length === 0) {
    return `Your answers line up more with ${top.name} than the other patterns in this cluster, though no single answer was decisive.`;
  }
  // Use up to the two strongest supports to build a one-paragraph reason.
  const primary = supports[0];
  const secondary = supports[1];
  const lead = primary.phrase.replace(/^You answered "/, 'You said ').replace(/"/g, '').replace(/\.$/, '');
  if (secondary) {
    const follow = secondary.phrase.replace(/^You answered "/, 'you also said ').replace(/"/g, '').replace(/\.$/, '');
    return `${lead}. ${capitalize(follow)}. Together, these lean toward ${top.name} more than the other patterns in this cluster.`;
  }
  return `${lead}. That pattern fits ${top.name} more cleanly than the other conditions on this page.`;
}

function buildDistinguishingNote(candidates: ConditionScore[], regionNoun: string): string {
  if (candidates.length < 2) return '';
  const [a, b] = candidates;
  return `On exam, ${a.name} and ${b.name} usually separate by where the ${regionNoun} is most tender, how it behaves under specific loads, and which movements or special tests reproduce the pain. That is what I work through during an assessment.`;
}

function capitalize(s: string): string {
  if (!s) return s;
  return s.charAt(0).toUpperCase() + s.slice(1);
}
