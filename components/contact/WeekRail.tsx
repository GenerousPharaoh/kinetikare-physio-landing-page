'use client';

import { useEffect, useState } from 'react';
import { WEEKLY_HOURS, type ClinicSite, type DayHours } from '@/lib/hours';

/**
 * Six columns, Monday to Saturday, each listing which clinic Kareem is at and
 * when. Tuesday carries two rows because it is split between PhysioMax and
 * Endorphins. This is the one thing a visitor who found him through another
 * clinic's site cannot work out anywhere else, so it gets its own strip.
 *
 * The "today" ring is applied after hydration from the Toronto weekday, so the
 * server render is neutral and nothing shifts; only a border colour changes.
 */

const DAYS: ReadonlyArray<DayHours['day']> = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const CLINIC_SHORT: Record<ClinicSite, string> = {
  endorphins: 'Endorphins',
  headon: 'Headon Physio',
  physiomax: 'PhysioMax',
};

export default function WeekRail() {
  const [today, setToday] = useState<string | null>(null);

  useEffect(() => {
    try {
      const weekday = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Toronto', weekday: 'long' }).format(new Date());
      setToday(weekday);
    } catch {
      /* leave unhighlighted */
    }
  }, []);

  return (
    <ol className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-slate-200/80 rounded-2xl overflow-hidden border border-slate-200/80" aria-label="Weekly schedule by clinic">
      {DAYS.map((day) => {
        const rows = WEEKLY_HOURS.filter((d) => d.day === day);
        const isToday = today === day;
        return (
          <li
            key={day}
            className={`relative bg-white px-4 py-5 sm:px-5 sm:py-6 flex flex-col gap-4 transition-colors ${isToday ? 'bg-[#FDF8E1]' : ''}`}
            aria-current={isToday ? 'date' : undefined}
          >
            <div className="flex items-baseline justify-between gap-2">
              <span className="font-playfair text-xl text-slate-900">{day}</span>
              {isToday && (
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8A6F0A]">Today</span>
              )}
            </div>
            <ul className="flex flex-col gap-3">
              {rows.map((d) => (
                <li key={`${d.day}-${d.site}`} className="flex flex-col gap-0.5">
                  <span className={`text-sm font-medium ${d.site === 'endorphins' ? 'text-[#8A6F0A]' : 'text-slate-800'}`}>
                    {CLINIC_SHORT[d.site]}
                  </span>
                  <span className="text-sm text-slate-700 tabular-nums">{d.label}</span>
                </li>
              ))}
            </ul>
            {isToday && <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-[#D4AF37]" />}
          </li>
        );
      })}
    </ol>
  );
}
