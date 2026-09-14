import { SITE_FOOTNOTES, WEEKLY_HOURS, dayKey, dayLabel } from '@/lib/hours';

/**
 * The five-row hours list used on the regional hubs, the pain guides and the
 * comparison template, under the Palladium Way address block. Reads from
 * lib/hours.ts so a closing-time change is one edit, and marks the Headon
 * days the same way the footer and contact section do. Before this the rows
 * were hand-typed on each page and the Headon days sat under the Palladium
 * Way address with nothing to say they were somewhere else.
 *
 * Server component: no hooks, no state.
 */
export default function HoursList() {
  return (
    <>
      <ul className="space-y-2 text-sm">
        {WEEKLY_HOURS.map((d, i) => (
          <li
            key={dayKey(d)}
            className={
              i < WEEKLY_HOURS.length - 1
                ? 'flex items-center justify-between border-b border-slate-200 pb-2'
                : 'flex items-center justify-between'
            }
          >
            <span className="text-slate-600">{dayLabel(d)}</span>
            <span className="text-slate-900 font-medium">{d.label}</span>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-xs text-slate-500 italic">
        {SITE_FOOTNOTES.map((f) => `${f.mark} ${f.text}`).join('   ')}
      </p>
    </>
  );
}
