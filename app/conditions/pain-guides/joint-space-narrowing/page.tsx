import type { Metadata } from 'next';
import ReportGuidePage from '@/components/guides/ReportGuidePage';
import { getReportGuide, reportGuideUrl } from '@/lib/report-guides';
import { contentDateFor, SEO_AUTHOR, SEO_PUBLISHER } from '@/lib/seo-metadata';

const guide = getReportGuide('joint-space-narrowing')!;
const PAGE_URL = reportGuideUrl(guide.slug);

export const metadata: Metadata = {
  title: guide.title,
  description: guide.description,
  authors: [SEO_AUTHOR],
  creator: SEO_AUTHOR.name,
  publisher: SEO_PUBLISHER,
  openGraph: {
    title: guide.title,
    description: guide.description,
    url: PAGE_URL,
    type: 'article',
    siteName: 'Kinetikare',
    authors: [SEO_AUTHOR.name],
    ...(contentDateFor('/conditions/pain-guides/joint-space-narrowing') ? { modifiedTime: contentDateFor('/conditions/pain-guides/joint-space-narrowing') } : {}),
    images: [
      {
        url: 'https://www.kinetikarephysio.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${guide.h1} - Kareem Hassanein Physiotherapy`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: guide.title,
    description: guide.description,
    images: ['https://www.kinetikarephysio.com/images/og-image.jpg'],
  },
  alternates: { canonical: PAGE_URL },
};

export default function JointSpaceNarrowingPage() {
  return <ReportGuidePage guide={guide} />;
}
