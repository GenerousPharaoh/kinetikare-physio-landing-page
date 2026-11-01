import { Geist, Geist_Mono } from 'next/font/google';

/*
 * The condition "case" template's own faces, loaded only by the pages that
 * use it: Geist for everything readable and Geist Mono for labels, indices
 * and numbers.
 */
export const geist = Geist({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-geist',
});

export const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-geist-mono',
});
