import { Geist } from 'next/font/google';

/*
 * The condition "case" template's own face, loaded only by the pages that
 * use it. Labels are Geist too (small, semibold, tracked); Kareem found a
 * monospace label face ugly (2026-11-01).
 */
export const geist = Geist({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-geist',
});
