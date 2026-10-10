import { HOURS_BY_CLINIC, dayKey } from '@/lib/hours';

/**
 * Hours used on regional hubs, pain guides and comparisons. Each group
 * identifies its clinic and street so another clinic's days cannot be
 * mistaken for availability at the Palladium Way address above this list.
 *
 * Server component: no hooks, no state.
 */
export default function HoursList() {
  return (
    <div className="space-y-5 text-sm">
      {HOURS_BY_CLINIC.map((clinic) => (
        <div key={clinic.name}>
          <div className="font-medium text-slate-900">{clinic.name}</div>
          <div className="mb-2 text-slate-600">{clinic.street}</div>
          <dl className="space-y-2">
            {clinic.days.map((d, i) => (
              <div
                key={dayKey(d)}
                className={`flex items-start justify-between gap-3 ${i < clinic.days.length - 1 ? 'border-b border-slate-200 pb-2' : ''}`}
              >
                <dt className="text-slate-600">{d.day}</dt>
                <dd className="text-right text-slate-900 font-medium">{d.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
  );
}
