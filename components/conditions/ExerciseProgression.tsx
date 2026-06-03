import React from 'react';
import { InformationCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import GlossaryText from './GlossaryText';
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
 * Visual language matches the other self-care sections (white rounded-2xl card,
 * gold accent dot + kicker, slate body text).
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
}

// Drop a leading "Phase 1:" / "Phase 2 -" style prefix so the rendered phase
// number is never duplicated by titles that already carry one.
function cleanPhaseTitle(title: string): string {
  return title.replace(/^\s*phase\s*\d+\s*[:.\-]\s*/i, '').trim();
}

// Strip parentheticals and "/ alternative" suffixes so the name reads cleanly
// mid-sentence: "Patellar Tendinopathy (Jumper's Knee)" -> "Patellar Tendinopathy".
function inlineConditionName(name: string): string {
  return name
    .replace(/\s*\(.*?\)\s*/g, ' ')
    .replace(/\s*\/.*$/, '')
    .trim();
}

export default function ExerciseProgression({ progression, conditionName, scopeNote }: ExerciseProgressionProps) {
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
      className="relative bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden scroll-mt-40"
    >
      <div className="relative">
        {/* Header */}
        <div className="px-6 sm:px-8 pt-6 sm:pt-8 pb-5 sm:pb-6 border-b border-slate-100">
          <div className="mb-3 flex items-center gap-2.5">
            <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-[#B08D57]" />
            <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8A6F0A]">Rehabilitation</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-tight text-slate-900">
            A Typical Rehabilitation Progression
          </h2>
          <p className="mt-2 text-sm text-slate-600 max-w-[60ch]">
            Three phases, from settling symptoms to returning to full activity.
          </p>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          {/* Intro framing */}
          <p className="text-base md:text-lg text-slate-700 leading-relaxed max-w-[72ch]">
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
                  <p className="m-0 text-sm font-semibold text-slate-900 mb-1.5">Before you use this progression</p>
                  <p className="m-0 text-sm text-slate-800 leading-relaxed max-w-[72ch]">{scopeNote}</p>
                </div>
              </div>
            </aside>
          )}

          {/* Safety note */}
          <aside
            aria-label="Using these exercises safely"
            className="rounded-xl border border-[#B08D57]/25 border-l-4 border-l-[#B08D57] bg-[#B08D57]/[0.05] p-5 sm:p-6"
          >
            <div className="flex items-start gap-3">
              <InformationCircleIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-[#8A6F0A] mt-0.5" />
              <div>
                <p className="m-0 text-sm font-semibold text-slate-900 mb-2">Using these safely</p>
                <p className="m-0 text-sm text-slate-700 leading-relaxed max-w-[72ch]">
                  These are general examples, not individual advice. The right exercises, the right load,
                  and the right pace depend on an assessment of your specific situation, and two people
                  with the same diagnosis can need very different programs. Before you try anything here,
                  it is worth having your movement assessed so you know it suits you and that you can
                  perform it safely with good technique. Build up gradually, and back off if symptoms get
                  worse instead of settling. If any of the warning signs listed on this page apply to you,
                  hold off and get assessed first.
                </p>
              </div>
            </div>
          </aside>

          {/* Phases */}
          <ol className="list-none m-0 p-0 space-y-5">
            {phases.map((phase, index) => (
              <li key={index} className="rounded-xl border border-slate-200 bg-slate-50/40 p-5 sm:p-6">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="flex-shrink-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8A6F0A] tabular-nums">
                    Phase {index + 1}
                  </span>
                  <h3 className="text-lg md:text-xl font-medium leading-snug text-slate-900">
                    {cleanPhaseTitle(phase.title)}
                  </h3>
                </div>

                <p className="text-base text-slate-700 leading-relaxed max-w-[72ch]">
                  <GlossaryText text={phase.focus} usedTerms={usedTerms} />
                </p>

                {phase.examples && phase.examples.length > 0 && (
                  <div className="mt-4">
                    <p className="m-0 mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Examples, not a prescription
                    </p>
                    <ul className="space-y-2">
                      {phase.examples.map((ex, i) => (
                        <li key={i} className="flex gap-2.5 text-sm md:text-base text-slate-700 leading-relaxed">
                          <span aria-hidden="true" className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#B08D57]" />
                          <span className="max-w-[72ch]"><GlossaryText text={ex} usedTerms={usedTerms} /></span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {phase.progressionCriteria && (
                  <div className="mt-4 rounded-lg border-l-2 border-l-[#B08D57] bg-white px-4 py-3">
                    <p className="m-0 text-xs font-semibold uppercase tracking-[0.16em] text-[#8A6F0A] mb-1">
                      Ready to progress when
                    </p>
                    <p className="m-0 text-sm text-slate-700 leading-relaxed max-w-[72ch]">
                      <GlossaryText text={phase.progressionCriteria} usedTerms={usedTerms} />
                    </p>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
