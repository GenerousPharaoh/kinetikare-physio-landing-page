import { Archivo, Playfair_Display } from 'next/font/google';

/*
 * The redesign's two extra faces, loaded only by the pages that use them (the
 * home page and About), on top of the site-wide Inter and Playfair.
 */

// The gold italic ("The Art of Care.", the About page's accents) is true
// Playfair italic, which the site-wide font setup does not load.
export const playfairItalic = Playfair_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic'],
  display: 'swap',
  variable: '--font-playfair-italic',
});

// The hero masthead (KINETIKARE PHYSIO) in Archivo, variable in weight and
// width (the face Techniques Combat uses).
export const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  display: 'swap',
  variable: '--font-archivo',
});
