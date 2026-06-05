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
