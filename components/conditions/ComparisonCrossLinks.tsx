import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline';
import {
  ConditionComparison,
  getComparisonsForCondition,
} from '@/lib/condition-comparisons';

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

export default function ComparisonCrossLinks({
  conditionSlug,
  currentConditionName,
}: ComparisonCrossLinksProps) {
  const comparisons = getComparisonsForCondition(conditionSlug);

  if (!comparisons || comparisons.length === 0) return null;

  return (
    <section
      aria-label="Commonly confused with"
      className="mt-6 bg-slate-50 rounded-xl p-6 border border-slate-200"
    >
      <div className="mb-5 flex items-start gap-3">
        <div className="flex-shrink-0 p-2 bg-slate-900 rounded-lg">
          <ArrowsRightLeftIcon className="h-4 w-4 text-[#B08D57]" aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-slate-900">
            Commonly confused with
          </h3>
          <p className="mt-1 text-xs text-slate-500">
            Side-by-side comparisons for patterns that often get mistaken for{' '}
            {currentConditionName.toLowerCase()}.
          </p>
        </div>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {comparisons.map((comparison: ConditionComparison) => {
          const other =
            comparison.conditionA.slug === conditionSlug
              ? comparison.conditionB
              : comparison.conditionA;

          return (
            <li key={comparison.pair}>
              <Link
                href={`/conditions/compare/${comparison.pair}`}
                className="group flex flex-col h-full bg-white rounded-lg border border-slate-200 hover:border-[#B08D57]/50 hover:shadow-sm transition-all duration-200 p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="font-medium text-slate-900 group-hover:text-[#B08D57] transition-colors text-sm leading-snug">
                    Is this {currentConditionName.toLowerCase()} or {other.shortName.toLowerCase()}?
                  </p>
                  <ArrowRightIcon
                    className="h-3.5 w-3.5 text-slate-300 group-hover:text-[#B08D57] group-hover:translate-x-0.5 flex-shrink-0 mt-0.5 transition-all"
                    aria-hidden="true"
                  />
                </div>

                <span className="mt-3 inline-flex items-center self-start px-2 py-0.5 rounded-full border text-[10px] font-medium uppercase tracking-wide bg-amber-50/70 text-amber-800 border-amber-200/70">
                  Compare side by side
                </span>

                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  How I separate {currentConditionName.toLowerCase()} from{' '}
                  {other.shortName.toLowerCase()} by pattern, tests, and exam findings.
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
