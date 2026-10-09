import React from 'react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

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

export default function RedFlagsBox({ flags }: { flags: ReadonlyArray<{ sign: string; action?: string }> }) {
  if (!flags.length) return null;
  return (
    <section id={RED_FLAGS_ID} className="scroll-mt-28 py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-2xl border border-red-200 border-l-4 border-l-red-600 bg-white p-6 md:p-8">
          <div className="flex items-center gap-2.5 mb-5">
            <ExclamationTriangleIcon className="h-5 w-5 text-red-600" aria-hidden="true" />
            <h2 className="text-xl md:text-2xl font-medium text-slate-900">When to see a doctor first</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-5">
            {flags.map((flag) => (
              <div key={flag.sign} className="flex items-start gap-2.5">
                <div className="mt-[9px] h-1.5 w-1.5 bg-red-500 rounded-full flex-shrink-0" />
                <div>
                  <p className="m-0 text-base font-medium text-slate-900 leading-snug">{flag.sign}</p>
                  {flag.action && <p className="m-0 mt-1 text-base text-slate-600 leading-snug">{flag.action}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
