'use client';

import React, { useEffect, useRef } from 'react';
import { ChevronDownIcon, InformationCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import GlossaryText from './GlossaryText';
import { inlineName } from '@/lib/text';
import type { ExerciseProgressionPhase } from '@/lib/conditions-data';

/**
 * ExerciseProgression
 *
 * Renders a condition's three-phase rehabilitation progression as visible,
 * patient-facing content. The same data already feeds the HowTo JSON-LD on the
 * condition page (its @id is `#rehab-progression`), so giving this section that
 * id is what finally makes the structured data correspond to content a human
 * can actually see.
 *
 * The framing is deliberately educational, not prescriptive: an intro that
 * presents the phases as examples, a prominent "using these safely" note, and a
 * per-phase "Examples, not a prescription" label placed right at the specific
 * sets and reps. Renders nothing when no progression data is supplied.
 *
 * Flat, not carded: it sits inside the treatment section's ivory ground, so a
 * hairline opens it and hairlines separate the phases. Each phase is a
 * <details>: closed on phones, where the three phases used to take about five
 * screens, and opened on mount from 1024px up, where they read side by side
 * with the "On this page" rail. Closed details are still in the HTML, so the
 * HowTo schema and search engines see every step.
 */

interface ExerciseProgressionData {
  phase1: ExerciseProgressionPhase;
  phase2: ExerciseProgressionPhase;
  phase3: ExerciseProgressionPhase;
}

interface ExerciseProgressionProps {
  progression?: ExerciseProgressionData;
  /** Condition display name, e.g. "Patellar Tendinopathy (Jumper's Knee)". */
  conditionName: string;
  /**
   * Optional condition-specific scope / clearance sentence, rendered as a
   * prominent amber note above the generic safety box. Used for higher-stakes
   * conditions (post-surgical, fracture, acute, pediatric) where the progression
   * only applies to a specific population or after medical clearance.
   */
  scopeNote?: string;
  /** False when the page lists no red flags, so the safety note does not refer to them. */
  hasWarningSigns?: boolean;
}

// Drop a leading "Phase 1:" / "Phase 2 -" style prefix so the rendered phase
// number is never duplicated by titles that already carry one.
function cleanPhaseTitle(title: string): string {
  return title.replace(/^\s*phase\s*\d+\s*[:.\-]\s*/i, '').trim();
}

// Strip parentheticals and "/ alternative" suffixes so the name reads cleanly
// mid-sentence: "Patellar Tendinopathy (Jumper's Knee)" -> "patellar tendinopathy".
// "Achilles Tendinopathy / Tendinitis" -> "Achilles tendinopathy" (a spaced
// slash is an alternative name), "MCL/LCL Sprains" -> "MCL and LCL sprains"
// (an unspaced slash joins two structures), parentheses dropped.
function inlineConditionName(name: string): string {
  return inlineName(
    name
      .replace(/\s*\(.*?\)\s*/g, ' ')
      .replace(/\s+\/.*$/, '')
      .replace(/(\S)\/(\S)/g, '$1 and $2')
      .replace(/\s+/g, ' ')
      .trim(),
  );
}

export default function ExerciseProgression({ progression, conditionName, scopeNote, hasWarningSigns = true }: ExerciseProgressionProps) {
  const listRef = useRef<HTMLOListElement | null>(null);

  // Desktop shows every phase open; phones keep them closed until tapped.
  useEffect(() => {
    if (!listRef.current || !window.matchMedia('(min-width: 1024px)').matches) return;
    listRef.current.querySelectorAll('details').forEach((d) => {
      d.open = true;
    });
  }, []);

  if (!progression) return null;
  const phases = [progression.phase1, progression.phase2, progression.phase3].filter(Boolean);
  if (phases.length === 0) return null;

  const name = inlineConditionName(conditionName);
  // One shared set so any glossary term is linked only once across the section.
  const usedTerms = new Set<string>();

  return (
    <div
      id="rehab-progression"
      data-section="rehab-progression"
      className="scroll-mt-40 border-t border-[#B08D57]/30 pt-8"
    >
      <h3 className="text-2xl md:text-3xl font-light tracking-tight leading-tight text-slate-900">
        A typical rehabilitation progression
      </h3>
      <p className="m-0 mt-2 text-base text-slate-600 max-w-[60ch]">
        Three phases, from settling symptoms to returning to full activity.
      </p>

      <div className="mt-6 space-y-6">
        {/* Intro framing */}
        <p className="m-0 text-base md:text-lg text-slate-700 leading-relaxed max-w-[72ch]">
          Recovery from {name} is usually staged: calm the symptoms first, then rebuild the strength
          and capacity of the area, then return to your full activities. The three phases below show
          the kind of progression the evidence supports and that I commonly work through in clinic.
          They are here to show you what the road can look like, not to act as a personal program.
        </p>

        {/* Condition-specific scope / clearance note (higher-stakes conditions only) */}
        {scopeNote && (
          <aside
            role="note"
            aria-label="Important scope and clearance note"
            className="rounded-xl border border-amber-300 border-l-4 border-l-amber-500 bg-amber-50 p-5 sm:p-6"
          >
            <div className="flex items-start gap-3">
              <ExclamationTriangleIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-amber-600 mt-0.5" />
              <div>
                <p className="m-0 text-base font-semibold text-slate-900 mb-1.5">Before you use this progression</p>
                <p className="m-0 text-base text-slate-800 leading-relaxed max-w-[72ch]">{scopeNote}</p>
              </div>
            </div>
          </aside>
        )}

        {/* Safety note */}
        <aside
          aria-label="Using these exercises safely"
          className="border-l-2 border-l-[#B08D57] pl-4 sm:pl-5"
        >
          <p className="m-0 mb-1.5 flex items-center gap-2 text-base font-semibold text-slate-900">
            <InformationCircleIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-[#8A6F0A]" />
            Using these safely
          </p>
          <p className="m-0 text-base text-slate-700 leading-relaxed max-w-[72ch]">
            These are general examples, not individual advice. The right exercises, the right load,
            and the right pace depend on an assessment of your specific situation, and two people
            with the same diagnosis can need very different programs. Before you try anything here,
            it is worth having your movement assessed so you know it suits you and that you can
            perform it safely with good technique. Build up gradually, and back off if symptoms get
            worse instead of settling.
            {hasWarningSigns && ' If any of the warning signs listed on this page apply to you, hold off and get assessed first.'}
          </p>
        </aside>

        {/* Phases */}
        <ol ref={listRef} className="list-none m-0 p-0 border-b border-slate-200">
          {phases.map((phase, index) => (
            <li key={index} className="border-t border-slate-200">
              <details className="group">
                <summary className="flex min-h-[44px] cursor-pointer list-none items-start justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden">
                  {/* summary allows a heading but not a div, so the phase label sits inside it */}
                  <h4 className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#8A6F0A] tabular-nums mb-1">
                      Phase {index + 1}
                    </span>
                    <span className="block text-lg md:text-xl font-medium leading-snug text-slate-900 group-hover:text-[#8A6F0A] transition-colors">
                      {cleanPhaseTitle(phase.title)}
                    </span>
                  </h4>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="mt-5 h-5 w-5 flex-shrink-0 text-slate-500 transition-transform group-open:rotate-180"
                  />
                </summary>

                <div className="pb-7 space-y-4">
                  <p className="m-0 text-base text-slate-700 leading-relaxed max-w-[72ch]">
                    <GlossaryText text={phase.focus} usedTerms={usedTerms} />
                  </p>

                  {phase.examples && phase.examples.length > 0 && (
                    <div>
                      <p className="m-0 mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Examples, not a prescription
                      </p>
                      <ul className="space-y-2">
                        {phase.examples.map((ex, i) => (
                          <li key={i} className="flex gap-2.5 text-base text-slate-700 leading-relaxed">
                            <span aria-hidden="true" className="mt-2.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#B08D57]" />
                            <span className="max-w-[72ch]"><GlossaryText text={ex} usedTerms={usedTerms} /></span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {phase.progressionCriteria && (
                    <div className="border-l-2 border-l-[#B08D57] pl-4">
                      <p className="m-0 text-xs font-semibold uppercase tracking-[0.16em] text-[#8A6F0A] mb-1">
                        Ready to progress when
                      </p>
                      <p className="m-0 text-base text-slate-700 leading-relaxed max-w-[72ch]">
                        <GlossaryText text={phase.progressionCriteria} usedTerms={usedTerms} />
                      </p>
                    </div>
                  )}
                </div>
              </details>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
