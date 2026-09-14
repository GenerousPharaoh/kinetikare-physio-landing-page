export const BOOKING_PAGE_PATH = '/intake';

export const JANE_BOOKING_URL =
  'https://endorphinshealth.janeapp.com/locations/endorphins-health-and-wellness-centre/book#/staff_member/42';

// Deep link for the /intake ads landing page only. Pre-selects Kareem
// (staff_member 42) AND the Initial Assessment (treatment 133), so ad
// visitors land straight on the time picker instead of choosing a discipline
// and treatment first. Reduces booking-flow drop-off for new-patient traffic.
// Sitewide CTAs keep JANE_BOOKING_URL (general entry) for returning patients.
export const JANE_INTAKE_BOOKING_URL =
  'https://endorphinshealth.janeapp.com/#/staff_member/42/treatment/133';

// The other two clinics Kareem practises at, each on its own Jane instance.
// Used on /contact only (Kareem's decision, 2026-09-14), where the page says
// plainly that each clinic has its own booking page. Sitewide CTAs stay on
// JANE_BOOKING_URL: the ads, the schema and the Business Profile all point at
// Endorphins, and a visitor arriving from those should not be split three ways.
export const PHYSIOMAX_BOOKING_URL = 'https://physiomaxwellness.janeapp.com/#/staff_member/42';
export const HEADON_BOOKING_URL = 'https://headonphysio.janeapp.com/#/staff_member/4/treatment/1';
