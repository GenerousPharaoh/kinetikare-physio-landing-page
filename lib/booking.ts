export const BOOKING_PAGE_PATH = '/intake';

export const JANE_BOOKING_URL =
  'https://endorphinshealth.janeapp.com/locations/endorphins-health-and-wellness-centre/book#/staff_member/42';

// Deep link for the /intake ads landing page only. Pre-selects Kareem
// (staff_member 42) AND the Initial Assessment (treatment 133), so ad
// visitors land straight on the time picker instead of choosing a discipline
// and treatment first. Reduces booking-flow drop-off for new-patient traffic.
export const JANE_INTAKE_BOOKING_URL =
  'https://endorphinshealth.janeapp.com/#/staff_member/42/treatment/133';

// The same initial-assessment deep link on the location path, for every
// button whose label promises an assessment or a first visit ("Book Initial
// Assessment", "Book an assessment for ...", "Book Your Assessment", "Book
// First Visit"). Revised 2026-10-11: those labels used to open the general
// profile, where the patient had to pick the assessment from four treatments.
// Generic labels ("Book Now", "Book Online", "Book Appointment", the floating
// "Book") keep JANE_BOOKING_URL so returning patients can pick a follow-up.
// Checked live 2026-10-11: lands on the initial assessment's calendar at
// Kareem's first availability.
export const JANE_ASSESSMENT_URL =
  'https://endorphinshealth.janeapp.com/locations/endorphins-health-and-wellness-centre/book#/staff_member/42/treatment/133';

// The other two clinics Kareem practises at, each on its own Jane instance.
// Used on /contact only (Kareem's decision, 2026-09-14), where the page says
// plainly that each clinic has its own booking page. Sitewide CTAs stay on
// JANE_BOOKING_URL: the ads, the schema and the Business Profile all point at
// Endorphins, and a visitor arriving from those should not be split three ways.
export const PHYSIOMAX_BOOKING_URL = 'https://physiomaxwellness.janeapp.com/#/staff_member/42';
export const HEADON_BOOKING_URL = 'https://headonphysio.janeapp.com/#/staff_member/4/treatment/1';
