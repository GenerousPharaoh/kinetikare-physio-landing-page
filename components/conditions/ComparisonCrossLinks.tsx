import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import {
  ConditionComparison,
  getComparisonsForCondition,
} from '@/lib/condition-comparisons';
import { inlineName } from '@/lib/text';

/**
 * ComparisonCrossLinks
 *
 * Renders a compact card block on a condition detail page pointing readers to
 * any "X vs. Y" comparison page that features this condition. Visual style
 * mirrors RelatedConditionsList so the two blocks read as a single family.
 *
 * No client-side behaviour. Data comes from the static CONDITION_COMPARISONS
 * module, so this can be safely rendered inside a client component.
 */

interface ComparisonCrossLinksProps {
  conditionSlug: string;
  currentConditionName: string;
}

// The question on each card ("Is this X or Y?") reads both conditions by their
// singular short names. Three short names are table labels rather than words a
// patient says, so the question uses a plain form for those (2026-10-11; the
// page name gave "Is this meniscal injuries or ACL injury?").
const QUESTION_NAME: Record<string, string> = {
  'rotator-cuff-injuries': 'a rotator cuff injury',
  'hip-osteoarthritis': 'hip osteoarthritis',
  'greater-trochanteric-pain-syndrome': 'lateral hip pain',
};
const questionName = (side: { slug: string; shortName: string }) =>
  QUESTION_NAME[side.slug] ?? inlineName(side.shortName);

export default function ComparisonCrossLinks({
  conditionSlug,
  currentConditionName,
}: ComparisonCrossLinksProps) {
  const comparisons = getComparisonsForCondition(conditionSlug);

  if (!comparisons || comparisons.length === 0) return null;

  return (
    <section
      aria-label="Commonly confused with"
      className="mt-10"
    >
      <div className="mb-5">
        <div>
          <h3 className="text-2xl font-light tracking-tight text-slate-900">
            Commonly confused with
          </h3>
          <p className="m-0 mt-1 text-[15px] text-slate-600">
            Side-by-side comparisons for patterns that often get mistaken for{' '}
            {inlineName(currentConditionName)}.
          </p>
        </div>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {comparisons.map((comparison: ConditionComparison) => {
          const self =
            comparison.conditionA.slug === conditionSlug
              ? comparison.conditionA
              : comparison.conditionB;
          const other = self === comparison.conditionA ? comparison.conditionB : comparison.conditionA;

          return (
            <li key={comparison.pair}>
              <Link
                href={`/conditions/compare/${comparison.pair}`}
                className="group flex flex-col h-full bg-white rounded-lg border border-slate-200 hover:border-[#B08D57]/50 hover:shadow-sm transition-all duration-200 p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="m-0 font-medium text-slate-900 group-hover:text-[#8A6F0A] transition-colors text-base leading-snug">
                    Is this {questionName(self)} or {questionName(other)}?
                  </p>
                  <ArrowRightIcon
                    className="h-3.5 w-3.5 text-slate-300 group-hover:text-[#B08D57] group-hover:translate-x-0.5 flex-shrink-0 mt-0.5 transition-all"
                    aria-hidden="true"
                  />
                </div>

                <span className="mt-3 inline-flex items-center gap-1.5 self-start px-2 py-0.5 rounded-full border text-[11px] font-medium uppercase tracking-wide bg-slate-50 text-slate-600 border-slate-200">
                  <span className="h-1 w-1 rounded-full bg-[#B08D57]" aria-hidden="true" />
                  Compare side by side
                </span>

                <p className="m-0 mt-2 text-sm text-slate-600 leading-relaxed">
                  How I separate {questionName(self)} from {questionName(other)} by pattern, tests, and exam findings.
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
