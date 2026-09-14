'use client';

import { useEffect, useState } from 'react';
import { WEEKLY_HOURS, type ClinicSite } from '@/lib/hours';

/**
 * Kareem's regular clinic days as a three-column table: day, clinic, hours.
 * Seven rows because Tuesday is split between PhysioMax and Endorphins; the
 * second Tuesday row leaves the day cell blank so the split reads as one day.
 *
 * Today's rows are tinted after hydration from the Toronto weekday. The
 * server render is neutral so nothing shifts.
 */

const CLINIC_SHORT: Record<ClinicSite, string> = {
  endorphins: 'Endorphins',
  headon: 'Headon Physio',
  physiomax: 'PhysioMax',
};

export default function WeekSchedule() {
  const [today, setToday] = useState<string | null>(null);

  useEffect(() => {
    try {
      setToday(new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Toronto', weekday: 'long' }).format(new Date()));
    } catch {
      /* leave untinted */
    }
  }, []);

  return (
    <table className="w-full border-collapse text-[15px]">
      <caption className="sr-only">Regular clinic days, Monday to Saturday</caption>
      <tbody>
        {WEEKLY_HOURS.map((d, i) => {
          const first = i === 0 || WEEKLY_HOURS[i - 1].day !== d.day;
          const isToday = today === d.day;
          return (
            <tr
              key={`${d.day}-${d.site}`}
              className={`${first ? 'border-t border-white/10' : ''} ${isToday ? 'bg-[#D4AF37]/[0.08]' : ''}`}
            >
              <th
                scope="row"
                className={`w-16 py-2.5 pl-2 pr-3 text-left font-medium align-baseline whitespace-nowrap ${isToday ? 'text-[#D4AF37]' : 'text-white'}`}
              >
                {first ? d.short : <span className="sr-only">{d.short}</span>}
                {first && isToday && <span className="sr-only">, today</span>}
              </th>
              <td className="py-2.5 pr-3 text-slate-300 align-baseline">{CLINIC_SHORT[d.site]}</td>
              <td className="py-2.5 pr-2 text-right text-white tabular-nums whitespace-nowrap align-baseline">{d.label}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
