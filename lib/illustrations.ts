/**
 * Kareem's commissioned illustrations (Sept 2026): engraved line over flat
 * colour on cream paper, one palette (navy, dark teal, gold, cream). Sources
 * and the ChatGPT style prompt that produced them live in
 * ~/Documents/Websites/kinetikare-hero-review/plates/new/. The files here are
 * 900px 4:5 WebP.
 *
 * `paper` is the image's own background colour, sampled at its corners, so a
 * container can match it and the drawing sits on the page with no visible
 * edge. Two images are dark (teal or navy grounds) and are marked so.
 *
 * The hero does not use these: Kareem chose the treatment-room photo there
 * after seeing an illustrated hero live (2026-09-15).
 */

export interface Illustration {
  src: string;
  paper: string;
  dark?: boolean;
}

export const ILLUSTRATIONS = {
  tennis: { src: '/images/illustrations/tennis.webp', paper: '#f5efe1' },
  golf: { src: '/images/illustrations/golf.webp', paper: '#f3eedf' },
  running: { src: '/images/illustrations/running.webp', paper: '#f5eddf' },
  gardening: { src: '/images/illustrations/gardening.webp', paper: '#f2ecdf' },
  pickleballLunge: { src: '/images/illustrations/pickleball-lunge.webp', paper: '#fdfdf0' },
  walking: { src: '/images/illustrations/walking.webp', paper: '#618283' },
  yoga: { src: '/images/illustrations/yoga.webp', paper: '#f5eedf' },
  basketball: { src: '/images/illustrations/basketball.webp', paper: '#f5efdf' },
  basketballLayup: { src: '/images/illustrations/basketball-layup.webp', paper: '#fefdf0' },
  basketballDefence: { src: '/images/illustrations/basketball-defence.webp', paper: '#fefcee' },
  sitToStand: { src: '/images/illustrations/sit-to-stand.webp', paper: '#f4f0e6' },
  stepUps: { src: '/images/illustrations/step-ups.webp', paper: '#f7f2e8' },
  trxRows: { src: '/images/illustrations/trx-rows.webp', paper: '#f7eee2' },
  farmerCarry: { src: '/images/illustrations/farmer-carry.webp', paper: '#0d4e5d', dark: true },
  kettlebellSquat: { src: '/images/illustrations/kettlebell-squat.webp', paper: '#f2ecde' },
  bandRotations: { src: '/images/illustrations/band-rotations.webp', paper: '#082844', dark: true },
  sideLunge: { src: '/images/illustrations/side-lunge.webp', paper: '#f1eade' },
  singleLegRdl: { src: '/images/illustrations/single-leg-rdl.webp', paper: '#f4efe5' },
} as const satisfies Record<string, Illustration>;

export type IllustrationKey = keyof typeof ILLUSTRATIONS;

/** Home, "Get back to it.": six life pictures, no captions (Kareem's instruction). */
// Order matters: on phones the row wraps two per line and on desktop it reads left to right,
// so no two similar figures may sit beside or above each other. Pickleball is a near
// duplicate of tennis (same figure, same pose) and is left out; yoga takes its place.
export const GET_BACK_ROW: IllustrationKey[] = ['tennis', 'golf', 'gardening', 'walking', 'yoga', 'running'];

/** Care Journey, one per stage: a functional test, a first progression, treatment, what you leave with. */
export const CARE_JOURNEY: IllustrationKey[] = ['sitToStand', 'stepUps', 'trxRows', 'farmerCarry'];

/** The regional hub openers: the drawing on the page, left of the heading. */
export const HUB_ILLUSTRATION: Record<string, IllustrationKey> = {
  'knee-pain': 'running',
  'hip-pain': 'golf',
  'shoulder-pain': 'tennis',
  'foot-ankle-pain': 'pickleballLunge',
  'elbow-pain': 'gardening',
};

/** The closing band on every condition page, by the condition's category. */
export const CATEGORY_PRINT: Record<string, IllustrationKey> = {
  knee: 'basketballLayup',
  'hip-pelvis': 'golf',
  shoulder: 'tennis',
  'foot-ankle': 'walking',
  'spinal-health': 'gardening',
  'elbow-wrist-hand': 'pickleballLunge',
};

/** The ads landing page: what a session looks like. */
export const SESSION_STRIP: IllustrationKey[] = ['kettlebellSquat', 'bandRotations', 'farmerCarry'];
