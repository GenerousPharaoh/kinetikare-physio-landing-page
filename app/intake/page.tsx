import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BookingCTA from '@/components/intake/BookingCTA';

export const metadata: Metadata = {
  title: 'Book Your Assessment | Kareem Hassanein Physiotherapy Burlington',
  description:
    'Book your physiotherapy assessment with Kareem Hassanein, Registered Physiotherapist in Burlington. One-on-one care, direct insurance billing, evening appointments, no referral needed.',
  openGraph: {
    title: 'Book Your Assessment | Kareem Hassanein Physiotherapy',
    description:
      'Book physiotherapy in Burlington. 5.0 stars on Google, direct insurance billing, evening appointments, no referral needed.',
  },
  robots: 'index, follow',
};

const reviews = [
  { name: 'Dr. Fel Rocci', text: 'Having worked with Kareem, I am now able to play tennis 4-5 times a week without a setback. Not bad for a 70 year old!' },
  { name: 'Nickel Chan', text: "Kareem is honestly one of the best physiotherapists I've ever seen. He fixed issues I'd been struggling with for a long time." },
  { name: 'Thanula G.', text: 'Thorough, knowledgeable, and incredibly attentive. I saw consistent progress and now feel stronger and pain free.' },
  { name: 'Ryan Darkwah', text: "Kareem found the problem came from my hip and quads. My pain's gone now, and I'm back to playing at full speed." },
  { name: 'David Espinosa', text: 'He took the time to figure out what was causing it instead of just treating the pain. My hip feels strong again.' },
  { name: 'Marko Vasilic', text: "He did a full movement analysis and showed me where the extra stress was coming from. I'm back to playing basketball comfortably." },
];

export default function IntakePage() {
  return (
    <>
      <style>{`
        .intake-page, .intake-page * { font-style: normal !important; }
        .intake-page > div { padding: 0 !important; margin: 0 !important; }
        .intake-page section { padding: 0 !important; }
      `}</style>

      <main className="intake-page" style={{ background: '#0f172a' }}>

        {/* ================================================================ */}
        {/* HERO -- full viewport, matches homepage dark cinematic feel      */}
        {/* ================================================================ */}
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#0f172a', position: 'relative', overflow: 'hidden' }}>

          {/* Background: full-bleed clinic photo with heavy overlay */}
          <div style={{ position: 'absolute', inset: 0 }} className="hidden lg:block">
            <Image
              src="/images/clinic-pic-may-2025.jpg"
              alt="KinetiKare Physiotherapy clinic in Burlington"
              fill
              priority
              quality={85}
              style={{ objectFit: 'cover', objectPosition: '60% center' }}
              sizes="100vw"
            />
            {/* Heavy left overlay so text is readable */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #0f172a 35%, rgba(15,23,42,0.85) 55%, rgba(15,23,42,0.4) 75%, rgba(15,23,42,0.2))' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0f172a 5%, transparent 40%)' }} />
          </div>

          {/* Mobile background */}
          <div style={{ position: 'absolute', inset: 0 }} className="lg:hidden">
            <Image
              src="/images/clinic-pic-may-2025.jpg"
              alt="KinetiKare Physiotherapy clinic"
              fill
              quality={80}
              style={{ objectFit: 'cover' }}
              sizes="100vw"
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0f172a, rgba(15,23,42,0.85) 40%, rgba(15,23,42,0.6))' }} />
          </div>

          {/* Subtle gold glow */}
          <div className="hidden lg:block" style={{ position: 'absolute', top: '20%', left: '15%', width: 500, height: 500, background: 'rgba(212,175,55,0.04)', borderRadius: '50%', filter: 'blur(100px)' }} />

          {/* Content */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', paddingTop: 100, paddingBottom: 48, position: 'relative', zIndex: 30 }}>
            <div className="container mx-auto px-6 sm:px-8 lg:px-16 max-w-6xl">
              <div style={{ maxWidth: 560 }}>

              {/* Eyebrow */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <span style={{ height: 1, width: 32, background: 'linear-gradient(to right, #D4AF37, transparent)' }} />
                <span style={{ color: '#D4AF37', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase' as const, fontWeight: 500 }}>
                  Physiotherapy in Burlington
                </span>
              </div>

              {/* Heading */}
              <h1 className="font-serif" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 300, color: 'white', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 24 }}>
                Book Your
                <br />
                <span style={{ color: '#D4AF37' }}>Assessment</span>
              </h1>

              {/* Subtitle */}
              <p style={{ fontSize: 16, lineHeight: 1.75, color: 'rgba(255,255,255,0.7)', marginBottom: 12, maxWidth: 460, fontWeight: 300, letterSpacing: '0.01em' }}>
                One-on-one physiotherapy for sports injuries, knee and hip pain,
                dry needling, cupping, and rehabilitation.
              </p>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 32 }}>
                Kareem Hassanein, RPT &middot; MSc PT, BSc Kin &middot; CPO #20079
              </p>

              {/* CTAs -- matching homepage button style */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4" style={{ marginBottom: 32 }}>
                <BookingCTA size="lg" className="!rounded-lg sm:!rounded-sm !tracking-[0.15em]">
                  Book Assessment
                  <svg style={{ width: 14, height: 14 }} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 3l5 5-5 5" /></svg>
                </BookingCTA>
                <a
                  href="tel:+19056346000"
                  className="flex items-center justify-center"
                  style={{ padding: '16px 32px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)', borderRadius: '8px 8px 8px 8px', fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: 'white', transition: 'all 0.3s', gap: 8 }}
                >
                  <svg style={{ width: 14, height: 14, color: '#D4AF37' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  (905) 634-6000
                </a>
              </div>

              {/* Trust badges -- matching homepage */}
              <div className="flex flex-wrap gap-2" style={{ marginBottom: 24 }}>
                {['Direct Billing', 'No Referral Needed', 'Evening Hours'].map((badge) => (
                  <span key={badge} style={{ padding: '6px 12px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(8px)', borderRadius: 6, fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.05em' }}>
                    {badge}
                  </span>
                ))}
              </div>

              {/* Stars */}
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} style={{ width: 14, height: 14, color: '#D4AF37' }} viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 1l2.39 4.84L17.3 6.7l-3.54 3.46.84 4.88L10 12.77l-4.6 2.27.84-4.88L2.7 6.7l4.91-.86L10 1z" />
                    </svg>
                  ))}
                </div>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>5.0 from 17 Google Reviews</span>
              </div>
              </div>
            </div>
          </div>

          {/* Accepting patients badge -- bottom right */}
          <div className="hidden lg:flex" style={{ position: 'absolute', bottom: 40, right: 48, zIndex: 30, alignItems: 'center', gap: 12, padding: '8px 16px', background: 'rgba(15,23,42,0.8)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 999 }}>
            <span style={{ position: 'relative', display: 'flex', width: 10, height: 10 }}>
              <span style={{ position: 'absolute', inset: 0, borderRadius: 999, background: '#4ade80', opacity: 0.75, animation: 'ping 2s infinite' }} />
              <span style={{ position: 'relative', display: 'block', width: 10, height: 10, borderRadius: 999, background: '#22c55e' }} />
            </span>
            <span style={{ fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.9)', letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>Accepting New Patients</span>
          </div>
        </div>

        {/* ================================================================ */}
        {/* WHAT TO EXPECT                                                    */}
        {/* ================================================================ */}
        <div style={{ background: 'white', padding: '80px 0' }}>
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-5xl">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <span style={{ height: 1, width: 32, background: 'linear-gradient(to right, #D4AF37, transparent)' }} />
              <span style={{ color: '#D4AF37', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase' as const, fontWeight: 500 }}>What to Expect</span>
            </div>
            <h2 className="font-serif" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 300, color: '#1A2036', letterSpacing: '-0.01em', marginBottom: 48 }}>
              Individualized care, every session
            </h2>

            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { title: 'One-on-One Sessions', desc: 'Your entire appointment is with Kareem. No assistants, no handoffs, no sharing time with other patients.' },
                { title: 'Root Cause Focus', desc: 'A thorough assessment of your movement patterns to address what is actually driving your pain.' },
                { title: 'Treatment From Day One', desc: 'Your first visit includes both assessment and hands-on treatment. No wasting a session on paperwork alone.' },
                { title: 'Evidence-Based Care', desc: 'Every intervention backed by current research. Manual therapy, dry needling, cupping, and exercise rehabilitation.' },
              ].map((item) => (
                <div key={item.title} style={{ padding: 28, borderRadius: 4, border: '1px solid #e5e7eb', transition: 'all 0.3s' }}>
                  <h3 style={{ fontSize: 15, fontWeight: 600, color: '#1A2036', marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: '#64748b' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* REVIEWS                                                           */}
        {/* ================================================================ */}
        <div style={{ background: '#f8f9fa', padding: '80px 0' }}>
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-5xl">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <span style={{ height: 1, width: 32, background: 'linear-gradient(to right, #D4AF37, transparent)' }} />
              <span style={{ color: '#D4AF37', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase' as const, fontWeight: 500 }}>Patient Reviews</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4" style={{ marginBottom: 40 }}>
              <h2 className="font-serif" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 300, color: '#1A2036' }}>
                What patients are saying
              </h2>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} style={{ width: 16, height: 16, color: '#D4AF37' }} viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 1l2.39 4.84L17.3 6.7l-3.54 3.46.84 4.88L10 12.77l-4.6 2.27.84-4.88L2.7 6.7l4.91-.86L10 1z" />
                    </svg>
                  ))}
                </div>
                <span style={{ fontSize: 13, color: '#64748b', fontWeight: 500 }}>5.0 from 17 reviews</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {reviews.map((r) => (
                <div key={r.name} style={{ background: 'white', borderRadius: 4, padding: 24, border: '1px solid #e5e7eb', display: 'flex', flexDirection: 'column' as const }}>
                  <p style={{ color: '#374151', fontSize: 14, lineHeight: 1.7, flex: 1, marginBottom: 16 }}>
                    &ldquo;{r.text}&rdquo;
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingTop: 12, borderTop: '1px solid #f1f5f9' }}>
                    <span style={{ width: 2, height: 14, borderRadius: 999, background: '#D4AF37' }} />
                    <span style={{ fontSize: 13, fontWeight: 600, color: '#1A2036' }}>{r.name}</span>
                  </div>
                </div>
              ))}
            </div>

            <p style={{ textAlign: 'center' as const, marginTop: 28 }}>
              <Link href="https://www.google.com/maps/place/Endorphins+Health+%26+Wellness+Centre" target="_blank" className="inline-flex items-center gap-1.5" style={{ fontSize: 13, color: '#B08D57', fontWeight: 500 }}>
                Read all reviews on Google
                <svg style={{ width: 14, height: 14 }} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 3l5 5-5 5" /></svg>
              </Link>
            </p>
          </div>
        </div>

        {/* ================================================================ */}
        {/* PRICING + INFO                                                    */}
        {/* ================================================================ */}
        <div style={{ background: 'white', padding: '80px 0' }}>
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Pricing */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <span style={{ height: 1, width: 32, background: 'linear-gradient(to right, #D4AF37, transparent)' }} />
                  <span style={{ color: '#D4AF37', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase' as const, fontWeight: 500 }}>Pricing</span>
                </div>
                <h2 className="font-serif" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: 300, color: '#1A2036', marginBottom: 32 }}>
                  No hidden fees
                </h2>
                <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
                  {[
                    { label: 'Initial Assessment', price: '$130', sub: 'Assessment + treatment' },
                    { label: 'Follow-up', price: '$90', sub: '30-minute session' },
                  ].map((p) => (
                    <div key={p.label} style={{ flex: 1, padding: 24, borderRadius: 4, border: '1px solid #e5e7eb', textAlign: 'center' as const }}>
                      <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', color: '#94a3b8', textTransform: 'uppercase' as const, marginBottom: 8 }}>{p.label}</p>
                      <p className="font-serif" style={{ fontSize: '2rem', fontWeight: 300, color: '#1A2036', lineHeight: 1, marginBottom: 4 }}>{p.price}</p>
                      <p style={{ fontSize: 12, color: '#94a3b8' }}>{p.sub}</p>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.6 }}>
                  Direct billing to Sun Life, Manulife, Green Shield Canada, Blue Cross, Canada Life, WSIB, and more.
                </p>
              </div>

              {/* Clinic info */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <span style={{ height: 1, width: 32, background: 'linear-gradient(to right, #D4AF37, transparent)' }} />
                  <span style={{ color: '#D4AF37', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase' as const, fontWeight: 500 }}>Clinic Details</span>
                </div>
                <h2 className="font-serif" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: 300, color: '#1A2036', marginBottom: 32 }}>
                  Burlington & Waterdown
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {[
                    { label: 'Location', value: 'Endorphins Health & Wellness Centre\n4631 Palladium Way, Unit 6, Burlington', icon: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z M12 11.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z' },
                    { label: 'Hours', value: 'Mon / Tue / Thu: 1:30 - 8:00 PM\nWed / Fri: 2:00 - 7:30 PM', icon: 'M3 4h18v18H3zM16 2v4M8 2v4M3 10h18' },
                    { label: 'Service Areas', value: 'Burlington, Waterdown, Flamborough, Carlisle, Oakville', icon: 'M9 12l2 2 4-4M22 12A10 10 0 112 12a10 10 0 0120 0z' },
                  ].map((item) => (
                    <div key={item.label} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                      <svg style={{ width: 18, height: 18, color: '#B08D57', marginTop: 2, flexShrink: 0 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={item.icon} /></svg>
                      <div>
                        <p style={{ fontSize: 12, fontWeight: 600, color: '#1A2036', letterSpacing: '0.05em', textTransform: 'uppercase' as const, marginBottom: 4 }}>{item.label}</p>
                        <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* BOTTOM CTA                                                        */}
        {/* ================================================================ */}
        <div style={{ background: '#0f172a', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,175,55,0.04), transparent 60%)' }} />

          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-2xl" style={{ position: 'relative', textAlign: 'center' as const }}>
            <h2 className="font-serif" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 300, color: 'white', marginBottom: 12 }}>
              Ready to move forward?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, lineHeight: 1.7, maxWidth: 380, margin: '0 auto 36px' }}>
              Book online in under a minute. No referral required.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <BookingCTA size="lg" className="!rounded-lg sm:!rounded-sm !tracking-[0.15em]">
                Book Assessment
                <svg style={{ width: 14, height: 14 }} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 3l5 5-5 5" /></svg>
              </BookingCTA>
              <a
                href="tel:+19056346000"
                className="flex items-center justify-center"
                style={{ padding: '16px 32px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)', borderRadius: 4, fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: 'white', gap: 8 }}
              >
                (905) 634-6000
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
