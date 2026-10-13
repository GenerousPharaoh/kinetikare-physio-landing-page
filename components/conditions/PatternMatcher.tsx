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

import { JANE_ASSESSMENT_URL } from '@/lib/booking';
import React, { useMemo, useState, useRef, useEffect, useCallback } from 'react';
import { m as motion, AnimatePresence } from 'framer-motion';
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
import { inlineName } from '@/lib/text';
import {
  classify,
  scoreCluster,
  type ConditionScore,
  type Verdict,
} from '@/lib/pattern-matchers/scoring';

// ---------------------------------------------------------------------------
// Types (scoring lives in lib/pattern-matchers/scoring.ts)
// ---------------------------------------------------------------------------

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
  const advanceTimer = useRef<number | null>(null);
  const [isAdvancing, setIsAdvancing] = useState(false);
  useEffect(() => () => { if (advanceTimer.current) clearTimeout(advanceTimer.current); }, []);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const rootRef = useRef<HTMLElement | null>(null);
  const liveRegionRef = useRef<HTMLDivElement | null>(null);

  const onResult = step >= totalQuestions;
  const progressPct = Math.round((step / totalQuestions) * 100);
  const currentQ: PatternMatcherQuestion | undefined = cluster.questions[step];

  const handleAnswer = useCallback(
    (value: MatcherAnswer) => {
      if (!currentQ || advanceTimer.current) return;
      setIsAdvancing(true);
      setAnswers((prev) => ({ ...prev, [currentQ.id]: value }));
      // Advance after a tiny delay so the active state is visible to the user.
      advanceTimer.current = window.setTimeout(() => {
        advanceTimer.current = null;
        setIsAdvancing(false);
        setStep((s) => s + 1);
        requestAnimationFrame(() => cardRef.current?.focus({ preventScroll: true }));
      }, 120);
    },
    [currentQ],
  );

  const goBack = useCallback(() => {
    if (advanceTimer.current) clearTimeout(advanceTimer.current);
    advanceTimer.current = null;
    setIsAdvancing(false);
    setStep((s) => Math.max(0, s - 1));
  }, []);

  // The result card can be two or three phone screens tall, so after a
  // restart the page collapses above the reader. Bring the quiz top back into
  // view (scroll-mt clears the fixed header) and focus the first question.
  const restart = useCallback(() => {
    setAnswers({});
    setStep(0);
    requestAnimationFrame(() => {
      rootRef.current?.scrollIntoView({ block: 'start' });
      cardRef.current?.focus({ preventScroll: true });
    });
  }, []);

  // Keyboard shortcuts: 1-4 pick answers, left arrow = back.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (onResult || !currentQ) return;
      const target = e.target as HTMLElement | null;
      if (!target || !cardRef.current?.contains(target) || !cardRef.current.getClientRects().length) return;
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
      ref={rootRef}
      aria-label={cluster.label}
      // The floating Book/Call pills hide while the quiz fills the screen:
      // they otherwise sit on the answers and on the result's own Book button.
      data-hide-floating=""
      className="scroll-mt-24 bg-white rounded-xl border border-slate-200 shadow-lg overflow-hidden"
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
            <h2 className="text-xl md:text-2xl font-medium tracking-tight text-slate-900">
              Is this my pattern?
            </h2>
            <p className="mt-1 text-sm md:text-base text-slate-600 leading-relaxed max-w-[58ch]">
              A few questions to compare your own pattern against the common {cluster.regionNoun} conditions.
              This is not a diagnosis.
              <span className="hidden md:inline">
                {' '}It is a way to see which pattern your answers most resemble,
                so an in-person assessment has a starting point.
              </span>
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
            aria-label="Questionnaire progress"
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
      <div ref={cardRef} tabIndex={-1} className="px-6 py-8 md:px-10 md:py-10">
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
                role="group"
                aria-label={currentQ.text}
                className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {currentQ.options.map((opt, idx) => {
                  const selected = answers[currentQ.id] === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      aria-pressed={selected}
                      disabled={isAdvancing}
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
                <span className="hidden md:inline text-xs text-slate-400">
                  Tip: press 1 to 4 to answer quickly
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
              Your answers don&rsquo;t point to one pattern.
            </h3>
            <p className="mt-2 text-base text-slate-700 leading-relaxed max-w-[62ch]">
              That is common. {capitalize(cluster.regionNoun)} problems overlap, and many do not
              fit a textbook description. In an assessment I watch how the {cluster.regionNoun}{' '}
              moves, test the structures that could be involved, and see how it responds to load.
            </p>
          </div>
        </div>
        <BookCta onRestart={onRestart} />
      </div>
    );
  }

  if (verdict.kind === 'lopsided') {
    const top = verdict.ranked[0];
    const reasoning = buildLopsidedReasoning(top, cluster.regionNoun);
    const isCurrent = top.slug === currentSlug;
    return (
      <div>
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
          Your answers most resemble{' '}
          <span className="text-[#8A6F0A]">{top.name}</span>.
        </h3>
        <p className="mt-3 text-base text-slate-700 leading-relaxed max-w-[64ch]">
          {reasoning}
        </p>

        <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50/60 p-4">
          <p className="text-sm text-slate-600 leading-relaxed">
            <span className="font-medium text-slate-800">Important:</span> this compares patterns;
            it is not a diagnosis. Other problems can share these features, and an assessment is
            how to find out what is going on.
          </p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          {!isCurrent && (
            <Link
              href={`/conditions/${top.slug}`}
              className="button-gold inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B08D57]"
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
        <span className="text-[#8A6F0A]">more than one pattern</span>.
      </h3>
      <p className="mt-3 text-base text-slate-700 leading-relaxed max-w-[64ch]">
        Some of your answers point to each of these. Here is what lines up with each one. An
        assessment can help tell them apart, and sometimes that takes more than one visit or a
        scan arranged through your doctor.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {candidates.map((c) => (
          <CandidateCard key={c.slug} score={c} isCurrent={c.slug === currentSlug} />
        ))}
      </div>

      <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50/60 p-4">
        <p className="text-sm text-slate-600 leading-relaxed">
          <span className="font-medium text-slate-800">Telling them apart:</span>{' '}
          {buildDistinguishingNote(candidates)}
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
            Your answers overlap with this pattern overall, without one standout feature.
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
            className="relative before:absolute before:-inset-y-3 before:-inset-x-1 before:content-[''] inline-flex items-center gap-1 text-sm font-medium text-[#8c6d3d] hover:text-[#B08D57]"
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
        href={JANE_ASSESSMENT_URL} data-booking-source="pattern_matcher"
        target="_blank"
        rel="noopener noreferrer"
        className="button-gold inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B08D57]"
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

function buildLopsidedReasoning(top: ConditionScore, regionNoun: string): string {
  const name = inlineName(top.name);
  const reasons = top.topDrivers
    .filter((d) => d.direction === 'supports')
    .slice(0, 2)
    .map((d) => lowerFirst(d.phrase));
  const fit = `Of the ${regionNoun} conditions compared here, it fits your answers best.`;
  if (reasons.length === 0) return `Of the ${regionNoun} conditions compared here, your answers fit ${name} best, though no single answer stood out.`;
  if (reasons.length === 1) return `One of your answers points toward ${name}: ${reasons[0]}. ${fit}`;
  return `Two of your answers point toward ${name}: ${reasons[0]}, and ${reasons[1]}. ${fit}`;
}

function buildDistinguishingNote(candidates: ConditionScore[]): string {
  if (candidates.length < 2) return '';
  const [a, b] = candidates;
  return `${capitalize(inlineName(a.name))} and ${inlineName(b.name)} are usually told apart by exactly where the pain sits, which movements and loads bring it on, and a few hands-on tests. That is what I check in an assessment.`;
}

function lowerFirst(s: string): string {
  return s ? s.charAt(0).toLowerCase() + s.slice(1) : s;
}

function capitalize(s: string): string {
  if (!s) return s;
  return s.charAt(0).toUpperCase() + s.slice(1);
}
