import { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSectionModern';
import AboutSection from '@/components/sections/AboutSection';
import CareJourneySection from '@/components/sections/CareJourneySection';
import ServicesSection from '@/components/sections/ServicesSection';
import PopularConditionsSection from '@/components/sections/PopularConditionsSection';
import GoogleReviews from '@/components/GoogleReviews';
import ContactSection from '@/components/sections/ContactSection';
import SectionDivider from '@/components/SectionDivider';

// SEO Metadata for Homepage
export const metadata: Metadata = {
  title: 'Physiotherapy in Burlington | Sports Rehab, Knee Pain, Dry Needling & Cupping',
  description: 'One-on-one physiotherapy in Burlington for sports injuries, knee and hip pain, sciatica, dry needling, cupping, and rehabilitation with Kareem Hassanein. Direct billing and evening appointments.',
  openGraph: {
    title: 'Burlington Physiotherapy | Sports Rehab, Dry Needling & Cupping',
    description: 'Registered Physiotherapist in Burlington offering sports rehabilitation, knee and hip pain treatment, dry needling, cupping, and exercise-based rehab.',
    url: 'https://www.kinetikarephysio.com',
    type: 'website',
    images: [
      {
        url: 'https://www.kinetikarephysio.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kareem Hassanein Physiotherapy',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Physiotherapy in Burlington | Kareem Hassanein, PT',
    description: 'Sports injury rehabilitation, knee and hip pain treatment, dry needling, cupping, and direct billing in Burlington.',
    images: ['https://www.kinetikarephysio.com/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.kinetikarephysio.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Streamlined site structure: Hero → About → Care Journey → Services → Conditions → Reviews → Contact
// Person schema is provided site-wide via app/layout.tsx (id: #kareem-hassanein).
export default function Home() {
  return (
    <>
      {/* Force dark background on homepage to prevent white flash before hydration */}
      <style dangerouslySetInnerHTML={{ __html: `html { background: #020617 !important; }` }} />

      <main className="min-h-screen" style={{ margin: '0px', padding: '0px' }}>
        <HeroSection />

        {/* Main content wrapper with light background to restore original design */}
        <div className="relative z-10 bg-white">
          {/* Elegant transition from hero — minimal on mobile */}
          <div className="relative py-3 md:py-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-[#B08D57]/[0.02] to-white" />
            <div className="relative max-w-4xl mx-auto px-5 hidden md:block">
              <div className="flex items-center justify-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#B08D57]/20 to-[#B08D57]/40" />
                <div className="flex gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B08D57]/40" />
                  <div className="w-2 h-2 rounded-full bg-[#B08D57]/60" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B08D57]/40" />
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-[#B08D57]/40 via-[#B08D57]/20 to-transparent" />
              </div>
            </div>
          </div>

          {/* Content sections with elegant dividers */}
          <AboutSection />

          <SectionDivider variant="dots" />

          <CareJourneySection />

          <ServicesSection />

          {/* Billing + pricing note */}
          <div className="text-center py-14 px-6 max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-slate-900 font-light leading-snug mb-3">
              Direct billing to most major insurance providers.
            </p>
            <p className="text-base text-slate-600 mb-10">
              No referral needed.
            </p>

            {/* Insurer roster — editorial list with gold dot separators */}
            <div className="flex flex-wrap items-center justify-center gap-y-3 mb-10">
              {['Canada Life', 'Sun Life', 'Manulife', 'Green Shield', 'Blue Cross', 'Desjardins', 'TELUS Health'].map((name, i, arr) => (
                <span
                  key={name}
                  className="inline-flex items-center whitespace-nowrap text-[11px] md:text-xs tracking-[0.25em] uppercase text-slate-500"
                >
                  {name}
                  {i < arr.length - 1 && (
                    <span
                      className="w-[3px] h-[3px] rounded-full bg-[#B08D57]/60 mx-5"
                      aria-hidden="true"
                    />
                  )}
                </span>
              ))}
            </div>

            {/* Pricing */}
            <div className="flex items-center justify-center gap-5 text-sm text-slate-500">
              <span><span className="text-slate-700 font-medium">$130</span> initial assessment</span>
              <span className="w-1 h-1 rounded-full bg-slate-300" aria-hidden="true" />
              <span><span className="text-slate-700 font-medium">$90</span> follow-up (30 min)</span>
            </div>
          </div>

          <SectionDivider variant="dots" />

          <PopularConditionsSection />

          <GoogleReviews />

          <SectionDivider variant="dots" />

          <ContactSection />
        </div>
      </main>
    </>
  );
} 
