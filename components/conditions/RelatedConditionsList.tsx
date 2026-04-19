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
 * Enhanced related-conditions block. Instead of a name-only card grid, each
 * card now shows the relationship type (as a patient-friendly pill) plus a
 * one-line explanation sourced from the intelligentRelationships data map in
 * `lib/conditions-data.ts`.
 *
 * Falls back gracefully when a related condition has no structured
 * relationship metadata (e.g. category-fallback picks from
 * `getRelatedConditions`).
 */

type RelationshipType =
  | 'anatomical'
  | 'symptomatic'
  | 'causal'
  | 'biomechanical'
  | 'treatment';

interface RelationshipMeta {
  relationshipType: RelationshipType;
  explanation: string;
}

// Patient-friendly pill labels. Kept short so cards stay visually compact.
const RELATIONSHIP_LABEL: Record<RelationshipType, string> = {
  anatomical: 'Anatomically related',
  symptomatic: 'Shares symptoms',
  causal: 'Common co-occurrence',
  biomechanical: 'Biomechanically linked',
  treatment: 'Similar treatment approach',
};

// One understated pill style for every relationship type. The label text
// carries all the meaning; colour does no work here and previously clashed
// with the page's muted gold/slate language. A single small gold dot keeps
// the editorial voice without turning the grid into a colour legend.
const RELATIONSHIP_PILL_CLASS =
  'bg-slate-50 text-slate-600 border-slate-200';

interface RelatedConditionsListProps {
  currentSlug: string;
  relatedConditions: Condition[];
  /** Max cards shown. Defaults to 6. */
  limit?: number;
}

export default function RelatedConditionsList({
  currentSlug,
  relatedConditions,
  limit = 6,
}: RelatedConditionsListProps) {
  if (!relatedConditions || relatedConditions.length === 0) return null;

  const relationships = getDetailedRelationships(currentSlug);
  const relationshipBySlug = new Map<string, RelationshipMeta>(
    relationships.map((rel) => [
      rel.slug,
      { relationshipType: rel.relationshipType, explanation: rel.explanation },
    ]),
  );

  const items = relatedConditions.slice(0, limit);

  return (
    <section
      aria-label="Related conditions"
      className="mt-12 bg-slate-50 rounded-xl p-6 border border-slate-200"
    >
      <div className="mb-5">
        <h3 id="related-conditions" className="text-lg font-medium text-slate-900">
          Related Conditions
        </h3>
        <p className="mt-1 text-xs text-slate-500">
          Conditions I commonly see alongside, or confused with, this one.
        </p>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((related) => {
          const meta = relationshipBySlug.get(related.slug);
          const label = meta ? RELATIONSHIP_LABEL[meta.relationshipType] : null;

          return (
            <li key={related.slug}>
              <Link
                href={`/conditions/${related.slug}`}
                className="group flex flex-col h-full bg-white rounded-lg border border-slate-200 hover:border-[#B08D57]/50 hover:shadow-sm transition-all duration-200 p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="font-medium text-slate-900 group-hover:text-[#B08D57] transition-colors text-sm leading-snug">
                    {related.name}
                  </p>
                  <ArrowRightIcon
                    className="h-3.5 w-3.5 text-slate-300 group-hover:text-[#B08D57] group-hover:translate-x-0.5 flex-shrink-0 mt-0.5 transition-all"
                    aria-hidden="true"
                  />
                </div>

                {label && (
                  <span
                    className={`mt-3 inline-flex items-center gap-1.5 self-start px-2 py-0.5 rounded-full border text-[10px] font-medium uppercase tracking-wide ${RELATIONSHIP_PILL_CLASS}`}
                  >
                    <span
                      className="h-1 w-1 rounded-full bg-[#B08D57]"
                      aria-hidden="true"
                    />
                    {label}
                  </span>
                )}

                {meta?.explanation && (
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {meta.explanation}
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
