import localFont from 'next/font/local';

/*
 * The home redesign's two extra faces, loaded only by the pages that use
 * them, on top of the site-wide Inter and Playfair. Self-hosted since
 * 2026-11-01 (see app/fonts/README.md).
 */

// The gold italic ("The Art of Care.") is true Playfair italic, which the
// site-wide font setup does not load.
export const playfairItalic = localFont({
  src: '../../app/fonts/playfair-display-latin-wght-italic.woff2',
  weight: '400 900',
  style: 'italic',
  display: 'swap',
  variable: '--font-playfair-italic',
});

// The hero masthead (KINETIKARE PHYSIO) in Archivo, variable in weight and
// width (the face Techniques Combat uses).
export const archivo = localFont({
  src: '../../app/fonts/archivo-latin-wdth-normal.woff2',
  weight: '100 900',
  style: 'normal',
  display: 'swap',
  variable: '--font-archivo',
});
