'use client';

import { useEffect, useState } from 'react';
import { WEEKLY_HOURS, type ClinicSite } from '@/lib/hours';

/**
 * Kareem's regular clinic days as a three-column table: day, clinic, hours.
 * Seven rows because Tuesday is split between PhysioMax and Endorphins; the
 * second Tuesday row leaves the day cell blank (and carries `data-split`) so
 * the split reads as one day.
 *
 * Today's rows carry `data-today` after hydration, from the Toronto weekday.
 * The server render is neutral so nothing shifts. The look comes from the
 * page's stylesheet through `className`.
 */

const CLINIC_SHORT: Record<ClinicSite, string> = {
  endorphins: 'Endorphins',
  headon: 'Headon Physio',
  physiomax: 'PhysioMax',
};

export default function WeekSchedule({ className }: { className?: string }) {
  const [today, setToday] = useState<string | null>(null);

  useEffect(() => {
    try {
      setToday(new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Toronto', weekday: 'long' }).format(new Date()));
    } catch {
      /* leave untinted */
    }
  }, []);

  return (
    <table className={className}>
      <caption className="sr-only">Regular clinic days, Monday to Saturday</caption>
      <tbody>
        {WEEKLY_HOURS.map((d, i) => {
          const first = i === 0 || WEEKLY_HOURS[i - 1].day !== d.day;
          const isToday = today === d.day;
          return (
            <tr key={`${d.day}-${d.site}`} data-split={first ? undefined : ''} data-today={isToday ? '' : undefined}>
              <th scope="row">
                {first ? d.short : <span className="sr-only">{d.short}</span>}
                {first && isToday && <span className="sr-only">, today</span>}
              </th>
              <td>{CLINIC_SHORT[d.site]}</td>
              <td>{d.label}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
