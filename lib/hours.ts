/**
 * Kareem's clinical hours, the one place they are defined.
 *
 * Before this existed the same five rows were typed out in twelve files (the
 * root schema, the footer, the contact section, the ads landing page, five
 * regional hubs, two pain guides and the comparison template). A closing-time
 * change meant twelve edits, and the schema had drifted: it attached the
 * Wednesday and Friday rows to the Palladium Way entity even though those are
 * Headon Physio days at a different address.
 *
 * Two locations, and they must not be conflated:
 *
 * - Endorphins Health & Wellness Centre, 4631 Palladium Way. Kareem's last
 *   appointment ends at 8:00 PM. The facility itself advertises 7:00 PM
 *   because reception is not always staffed later; that is the facility's
 *   number to publish on its own site, not ours. Ours matches his own
 *   Business Profile, which also says 8:00 PM.
 * - Headon Physio, 1387 Walkers Line. Shown on the site with an asterisk and
 *   a footnote. Never included in the Palladium Way schema entity and never
 *   surfaced on the Business Profile (Kareem's decision).
 */

export type ClinicSite = 'endorphins' | 'headon';

export interface DayHours {
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday';
  short: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
  /** 24h, for schema.org */
  opens: string;
  closes: string;
  /** Display form used everywhere a human reads it */
  label: string;
  site: ClinicSite;
}

export const WEEKLY_HOURS: readonly DayHours[] = [
  { day: 'Monday', short: 'Mon', opens: '13:30', closes: '20:00', label: '1:30 PM - 8:00 PM', site: 'endorphins' },
  { day: 'Tuesday', short: 'Tue', opens: '15:30', closes: '20:00', label: '3:30 PM - 8:00 PM', site: 'endorphins' },
  { day: 'Wednesday', short: 'Wed', opens: '14:00', closes: '19:30', label: '2:00 PM - 7:30 PM', site: 'headon' },
  { day: 'Thursday', short: 'Thu', opens: '13:30', closes: '20:00', label: '1:30 PM - 8:00 PM', site: 'endorphins' },
  { day: 'Friday', short: 'Fri', opens: '14:00', closes: '19:30', label: '2:00 PM - 7:30 PM', site: 'headon' },
];

export const ENDORPHINS_HOURS = WEEKLY_HOURS.filter((d) => d.site === 'endorphins');
export const HEADON_HOURS = WEEKLY_HOURS.filter((d) => d.site === 'headon');

export const HEADON_FOOTNOTE = 'Headon Physio location';

/** "Wednesday*" for a Headon day, plain otherwise. The asterisk pairs with HEADON_FOOTNOTE. */
export function dayLabel(d: DayHours): string {
  return d.site === 'headon' ? `${d.day}*` : d.day;
}

/** Days that share identical hours, in week order, so "Mon / Thu" reads as one row. */
function groupByHours(days: readonly DayHours[]) {
  const groups: { days: DayHours[]; opens: string; closes: string; label: string }[] = [];
  for (const d of days) {
    const g = groups.find((x) => x.opens === d.opens && x.closes === d.closes);
    if (g) g.days.push(d);
    else groups.push({ days: [d], opens: d.opens, closes: d.closes, label: d.label });
  }
  return groups;
}

/**
 * schema.org OpeningHoursSpecification for the Palladium Way entity only.
 * Headon days are deliberately absent: they belong to a different address.
 */
export const ENDORPHINS_OPENING_HOURS_SCHEMA = groupByHours(ENDORPHINS_HOURS).map((g) => ({
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: g.days.map((d) => d.day),
  opens: g.opens,
  closes: g.closes,
}));

/**
 * Compact multi-line summary for the ads landing page:
 *   Mon / Thu: 1:30 – 8:00 PM
 *   Tue: 3:30 – 8:00 PM
 *   Wed / Fri: 2:00 – 7:30 PM
 */
export const HOURS_SUMMARY = [
  ...groupByHours(ENDORPHINS_HOURS),
  ...groupByHours(HEADON_HOURS),
]
  .map((g) => `${g.days.map((d) => d.short).join(' / ')}: ${g.label.replace(' PM - ', ' – ')}`)
  .join('\n');
