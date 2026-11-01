import localFont from 'next/font/local';

/*
 * The condition "case" template's own face, loaded only by the pages that
 * use it. Labels are Geist too (small, semibold, tracked); Kareem found a
 * monospace label face ugly (2026-11-01).
 *
 * Self-hosted since 2026-11-01 (see app/fonts/README.md): the Google loader
 * failed intermittently and took whole builds down with it.
 */
export const geist = localFont({
  src: '../../../app/fonts/geist-latin-wght-normal.woff2',
  weight: '100 900',
  style: 'normal',
  display: 'swap',
  variable: '--font-geist',
});
