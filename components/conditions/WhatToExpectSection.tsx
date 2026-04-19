import React from 'react';
import { Condition } from '@/lib/conditions-data';

/**
 * WhatToExpectSection
 *
 * Renders the `whatToExpect` content (first visit, early phase, progression)
 * as a patient-facing section near the final CTA. Addresses the reader who
 * has scrolled to the bottom and is weighing whether to book by removing
 * the "what happens if I call?" anxiety.
 *
 * Returns null when `condition.whatToExpect` is not populated on this
 * condition (6 of 61 conditions currently lack the field).
 */

interface WhatToExpectSectionProps {
  condition: Condition;
}

interface Subsection {
  id: string;
  label: string;
  body: string;
}

export default function WhatToExpectSection({ condition }: WhatToExpectSectionProps) {
  const wte = condition.whatToExpect;
  if (!wte) return null;

  const subsections: Subsection[] = [
    { id: 'first-visit', label: 'Your first visit', body: wte.firstVisit },
    { id: 'early-phase', label: 'The first few weeks', body: wte.earlyPhase },
    { id: 'progression', label: 'As you progress', body: wte.progression },
  ].filter((s) => Boolean(s.body && s.body.trim().length > 0));

  if (subsections.length === 0) return null;

  return (
    <section
      aria-label="What to expect from treatment"
      className="mt-6 bg-white rounded-xl border border-slate-200 border-l-4 border-l-[#B08D57] shadow-sm p-6 md:p-8"
    >
      {/* Kicker matching SectionHeading pattern */}
      <div className="mb-3 flex items-center gap-2.5">
        <span
          aria-hidden="true"
          className="inline-block h-1.5 w-1.5 rounded-full bg-[#B08D57]"
        />
        <p className="m-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B08D57]">
          What to expect
        </p>
      </div>

      <h2 className="text-2xl md:text-3xl font-light tracking-tight leading-tight text-slate-900 mb-6">
        What happens at your first visit
      </h2>

      <div className="space-y-6">
        {subsections.map((s, idx) => (
          <div
            key={s.id}
            className={idx > 0 ? 'pt-6 border-t border-slate-100' : ''}
          >
            <p className="m-0 mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700">
              {s.label}
            </p>
            <p className="m-0 text-base md:text-lg text-slate-700 leading-relaxed max-w-[68ch]">
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
