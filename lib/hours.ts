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
 * - PhysioMax Wellness, 1035 Brant Street. Tuesday mornings and Saturdays.
 *   Shown with a dagger and its own footnote, same treatment as Headon.
 *
 * Booking links on this site go to Endorphins only, whatever the day. Each
 * clinic runs its own Jane instance and Kareem does not want a visitor booking
 * into the wrong one from here. The hours say where he is; they are not a
 * booking route.
 */

export type ClinicSite = 'endorphins' | 'headon' | 'physiomax';

export interface DayHours {
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';
  short: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat';
  /** 24h, for schema.org */
  opens: string;
  closes: string;
  /** Display form used everywhere a human reads it */
  label: string;
  site: ClinicSite;
}

export const WEEKLY_HOURS: readonly DayHours[] = [
  { day: 'Monday', short: 'Mon', opens: '13:30', closes: '20:00', label: '1:30 PM - 8:00 PM', site: 'endorphins' },
  { day: 'Tuesday', short: 'Tue', opens: '10:00', closes: '14:30', label: '10:00 AM - 2:30 PM', site: 'physiomax' },
  { day: 'Tuesday', short: 'Tue', opens: '15:30', closes: '20:00', label: '3:30 PM - 8:00 PM', site: 'endorphins' },
  { day: 'Wednesday', short: 'Wed', opens: '14:00', closes: '19:30', label: '2:00 PM - 7:30 PM', site: 'headon' },
  { day: 'Thursday', short: 'Thu', opens: '13:30', closes: '20:00', label: '1:30 PM - 8:00 PM', site: 'endorphins' },
  { day: 'Friday', short: 'Fri', opens: '14:00', closes: '19:30', label: '2:00 PM - 7:30 PM', site: 'headon' },
  { day: 'Saturday', short: 'Sat', opens: '11:00', closes: '15:00', label: '11:00 AM - 3:00 PM', site: 'physiomax' },
];

export const ENDORPHINS_HOURS = WEEKLY_HOURS.filter((d) => d.site === 'endorphins');
export const HEADON_HOURS = WEEKLY_HOURS.filter((d) => d.site === 'headon');
export const PHYSIOMAX_HOURS = WEEKLY_HOURS.filter((d) => d.site === 'physiomax');
/** Every day not at Palladium Way, in week order, for the secondary list under the main one. */
export const OTHER_SITE_HOURS = WEEKLY_HOURS.filter((d) => d.site !== 'endorphins');

/** Marker shown after the day name for anything not at Palladium Way. */
export const SITE_MARK: Record<ClinicSite, string> = { endorphins: '', headon: '*', physiomax: '\u2020' };

export const HEADON_FOOTNOTE = 'Headon Physio location';
export const PHYSIOMAX_FOOTNOTE = 'PhysioMax Wellness location';

/** Footnotes in marker order, for any surface that lists every day. */
export const SITE_FOOTNOTES: ReadonlyArray<{ mark: string; text: string }> = [
  { mark: SITE_MARK.headon, text: HEADON_FOOTNOTE },
  { mark: SITE_MARK.physiomax, text: PHYSIOMAX_FOOTNOTE },
];

/** "Wednesday*", "Saturday†", or the plain day for Palladium Way. */
export function dayLabel(d: DayHours): string {
  return `${d.day}${SITE_MARK[d.site]}`;
}

/** Stable key for a row; Tuesday appears twice, at two clinics. */
export function dayKey(d: DayHours): string {
  return `${d.day}-${d.site}`;
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
 *   Wed / Fri: 2:00 – 7:30 PM (Headon Physio, Walkers Line)
 * The Headon days carry their clinic because the block sits under the
 * Endorphins address; unlabelled they read as Endorphins hours.
 * PhysioMax is deliberately not listed here. That page is the landing page
 * for ads that point at Endorphins, and a second Tuesday line for a different
 * clinic would muddy the one thing it exists to do.
 */
export const HOURS_SUMMARY = [
  ...groupByHours(ENDORPHINS_HOURS).map((g) => ({ ...g, where: '' })),
  ...groupByHours(HEADON_HOURS).map((g) => ({ ...g, where: ' (Headon Physio, Walkers Line)' })),
]
  .map((g) => `${g.days.map((d) => d.short).join(' / ')}: ${g.label.replace(' PM - ', ' – ')}${g.where}`)
  .join('\n');
