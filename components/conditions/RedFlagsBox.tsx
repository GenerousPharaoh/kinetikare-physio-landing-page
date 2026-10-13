import React from 'react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { groupRedFlags, type RedFlag, type RedFlagUrgency } from '@/lib/red-flags';

/**
 * "When to see a doctor first" on the regional hubs and pain guides.
 *
 * The hubs used to fold these warnings into a 12px, closed <details> in the
 * hero. An audit (2026-10-09) flagged that as too easy to miss, so the hero
 * now carries a readable link and the list itself sits open further down,
 * styled like the condition pages' box.
 */

export const RED_FLAGS_ID = 'see-a-doctor-first';

export function RedFlagsLink({ className = '' }: { className?: string }) {
  return (
    <a
      href={`#${RED_FLAGS_ID}`}
      className={`inline-flex min-h-[44px] items-center gap-2 text-[15px] font-medium text-red-700 underline underline-offset-2 hover:text-red-800 ${className}`}
    >
      <ExclamationTriangleIcon className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
      When to see a doctor first
    </a>
  );
}

const BAND_STYLE: Record<RedFlagUrgency, { heading: string; dot: string }> = {
  emergency: { heading: 'text-red-700', dot: 'bg-red-600' },
  today: { heading: 'text-amber-800', dot: 'bg-amber-500' },
  doctor: { heading: 'text-slate-700', dot: 'bg-slate-400' },
};

/**
 * The warnings grouped by how soon to act: "Go to emergency", "Get seen
 * today", "Check with your doctor" (lib/red-flags.ts decides the band from
 * each action's most urgent instruction; the texts are unchanged). Shared by
 * the condition pages and the hubs and guides (2026-10-11). Before, up to
 * eight rows of mixed urgency sat in one identical list.
 */
export function RedFlagBands({ flags }: { flags: ReadonlyArray<RedFlag> }) {
  const bands = groupRedFlags(flags);
  return (
    <div className="space-y-6">
      {bands.map((band, i) => (
        <div key={band.urgency} className={i > 0 ? 'border-t border-red-100 pt-6' : ''}>
          <h3 className={`m-0 mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide ${BAND_STYLE[band.urgency].heading}`}>
            <span className={`h-2 w-2 flex-shrink-0 rounded-full ${BAND_STYLE[band.urgency].dot}`} aria-hidden="true" />
            {band.heading}
          </h3>
          <ul className="m-0 grid list-none gap-x-8 gap-y-4 p-0 md:grid-cols-2">
            {band.flags.map((flag) => (
              <li key={flag.sign} className="m-0">
                <p className="m-0 text-base font-medium text-slate-900 leading-snug">{flag.sign}</p>
                {flag.action && <p className="m-0 mt-1 text-base text-slate-700 leading-snug">{flag.action}</p>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function RedFlagsBox({ flags }: { flags: ReadonlyArray<RedFlag> }) {
  if (!flags.length) return null;
  return (
    <section id={RED_FLAGS_ID} className="scroll-mt-28 py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-2xl border border-red-200 border-l-4 border-l-red-600 bg-white p-6 md:p-8">
          <div className="flex items-center gap-2.5 mb-5">
            <ExclamationTriangleIcon className="h-5 w-5 text-red-600" aria-hidden="true" />
            <h2 className="text-xl md:text-2xl font-medium text-slate-900">When to see a doctor first</h2>
          </div>
          <RedFlagBands flags={flags} />
        </div>
      </div>
    </section>
  );
}
