import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import {
  Condition,
  getDetailedRelationships,
} from '@/lib/conditions-data';

/**
 * RelatedConditionsList
 *
 * Related-conditions cards: the condition's name plus a one-line explanation
 * from the intelligentRelationships map in `lib/conditions-data.ts`.
 *
 * Since 2026-10-11 the cards no longer carry relationship-type pills
 * ("Anatomically related", "Biomechanically linked"); they told a patient
 * nothing the explanation did not. Conditions already linked in the page's
 * "Conditions that can feel similar" section are passed in `excludeSlugs` and
 * skipped, so the same condition is not offered twice a few screens apart.
 *
 * Falls back gracefully when a related condition has no structured
 * relationship metadata (e.g. category-fallback picks from
 * `getRelatedConditions`).
 */

interface RelatedConditionsListProps {
  currentSlug: string;
  relatedConditions: Condition[];
  /** Max cards shown. Defaults to 6. */
  limit?: number;
  /** Slugs already linked elsewhere on the page. */
  excludeSlugs?: ReadonlySet<string>;
}

export default function RelatedConditionsList({
  currentSlug,
  relatedConditions,
  limit = 6,
  excludeSlugs,
}: RelatedConditionsListProps) {
  if (!relatedConditions || relatedConditions.length === 0) return null;

  const explanationBySlug = new Map<string, string>(
    getDetailedRelationships(currentSlug).map((rel) => [rel.slug, rel.explanation]),
  );

  const items = relatedConditions
    .filter((related) => !excludeSlugs?.has(related.slug))
    .slice(0, limit);
  if (items.length === 0) return null;

  return (
    <section
      aria-label="Related conditions"
      className="mt-4 border-t border-slate-200 pt-12"
    >
      <div className="mb-5">
        <h3 id="related-conditions" className="text-2xl font-light tracking-tight text-slate-900">
          Related Conditions
        </h3>
        <p className="m-0 mt-1 text-[15px] text-slate-600">
          Conditions I commonly see alongside, or confused with, this one.
        </p>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((related) => {
          const explanation = explanationBySlug.get(related.slug);

          return (
            <li key={related.slug}>
              <Link
                href={`/conditions/${related.slug}`}
                className="group flex flex-col h-full bg-white rounded-lg border border-slate-200 hover:border-[#B08D57]/50 hover:shadow-sm transition-all duration-200 p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="m-0 font-medium text-slate-900 group-hover:text-[#8A6F0A] transition-colors text-base leading-snug">
                    {related.name}
                  </p>
                  <ArrowRightIcon
                    className="h-3.5 w-3.5 text-slate-300 group-hover:text-[#B08D57] group-hover:translate-x-1 flex-shrink-0 mt-0.5 transition-all"
                    aria-hidden="true"
                  />
                </div>

                {explanation && (
                  <p className="m-0 mt-2 text-sm text-slate-600 leading-relaxed">
                    {explanation}
                  </p>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
