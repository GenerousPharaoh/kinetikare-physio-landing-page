import React from 'react';

/**
 * ClinicalObservations
 *
 * Renders Kareem's first-person "Patterns I see in clinic" callout — editorial
 * clinical observations attached to a condition. Purely content-driven: when
 * `observations` is undefined, this component renders nothing and the page is
 * unaffected.
 *
 * Visual design: a distinct boxed callout with a gold left border (#B08D57),
 * a small kicker and a paragraph body. Designed to read clearly as a quote from
 * the clinician rather than encyclopedic prose. The page's review date lives in
 * the author byline only, so `lastReviewed` here is kept as data but not shown
 * (two different dates on one page read as a mistake).
 */

export interface ClinicalObservationsData {
  /** Heading shown above the body. Defaults to "Patterns I see in clinic" when omitted. */
  title?: string;
  /** First-person prose. If it contains `\n\n`, each chunk renders as its own paragraph. */
  body: string;
  /** ISO date string (e.g. '2026-04-16'). Not rendered; the byline carries the page date. */
  lastReviewed?: string;
}

interface ClinicalObservationsProps {
  observations?: ClinicalObservationsData;
}

const DEFAULT_TITLE = 'Patterns I see in clinic';
const KICKER = 'From the clinic';

export default function ClinicalObservations({ observations }: ClinicalObservationsProps) {
  if (!observations) return null;
  const body = observations.body?.trim();
  if (!body) return null;

  const title = observations.title?.trim() || DEFAULT_TITLE;
  const paragraphs = body.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean);

  return (
    <aside
      aria-label={title}
      className="relative bg-white rounded-xl border border-slate-200 border-l-4 border-l-[#B08D57] shadow-sm p-6 sm:p-8 md:p-10"
    >
      <div className="mb-4 flex items-center gap-3">
        <span
          aria-hidden="true"
          className="inline-block h-2 w-2 rounded-full bg-[#B08D57]"
        />
        <p className="m-0 text-xs font-semibold uppercase tracking-[0.18em] text-[#8A6F0A]">
          {KICKER}
        </p>
      </div>

      <h2 className="text-2xl md:text-3xl font-light tracking-tight leading-tight text-slate-900 mb-6">
        {title}
      </h2>

      <div className="space-y-5">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-base md:text-lg text-slate-700 leading-relaxed max-w-[72ch]"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </aside>
  );
}
