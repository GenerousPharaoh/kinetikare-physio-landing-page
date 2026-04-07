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
  { name: 'David Espinosa', text: 'He took the time to figure out what was causing it instead of just treating the pain. My hip feels strong again and the foot pain is gone.' },
  { name: 'Marko Vasilic', text: "He did a full movement analysis and showed me where the extra stress was coming from. I'm back to playing basketball comfortably." },
];

export default function IntakePage() {
  return (
    <>
      <style>{`
        .intake-page, .intake-page * { font-style: normal; }
        .intake-page > div { padding: 0 !important; margin: 0 !important; }
        .intake-page section { padding: 0 !important; }
      `}</style>

      <main className="intake-page">
        {/* ================================================================ */}
        {/* HERO -- warm, light, welcoming                                   */}
        {/* ================================================================ */}
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'linear-gradient(180deg, #f8f6f1 0%, #ffffff 60%)', position: 'relative', overflow: 'hidden' }}>
          {/* Warm accent shapes */}
          <div style={{ position: 'absolute', top: -200, right: -150, width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)' }} />
          <div style={{ position: 'absolute', bottom: -100, left: -100, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(176,141,87,0.04) 0%, transparent 70%)' }} />

          {/* Content */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', paddingTop: 90, paddingBottom: 32, position: 'relative' }}>
            <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-6xl w-full">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Left: text content */}
                <div>
                  {/* Accepting badge */}
                  <div className="inline-flex items-center gap-2 mb-6" style={{ padding: '6px 14px', borderRadius: 999, background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.15)' }}>
                    <span style={{ width: 6, height: 6, borderRadius: 999, background: '#34d399', animation: 'pulse 2s infinite' }} />
                    <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: '#059669' }}>Accepting New Patients</span>
                  </div>

                  <h1 className="font-serif" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', fontWeight: 300, color: '#1A2036', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 16 }}>
                    Book Your{' '}
                    <span style={{ color: '#B08D57' }}>Assessment</span>
                  </h1>

                  <p style={{ fontSize: 16, lineHeight: 1.75, color: '#5A6A7F', marginBottom: 12, maxWidth: 440 }}>
                    Personalized, one-on-one physiotherapy with Kareem Hassanein, Registered Physiotherapist in Burlington.
                  </p>

                  {/* Credentials inline */}
                  <p style={{ fontSize: 13, color: '#94a3b8', marginBottom: 28, letterSpacing: '0.01em' }}>
                    MSc PT, BSc Kin &middot; CPO Reg. #20079 &middot; Endorphins Health & Wellness Centre
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3" style={{ marginBottom: 28 }}>
                    <BookingCTA size="lg">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" />
                      </svg>
                      Book Online
                    </BookingCTA>
                    <a
                      href="tel:+19056346000"
                      className="inline-flex items-center justify-center gap-2"
                      style={{ padding: '14px 24px', borderRadius: 9999, fontSize: 13, fontWeight: 600, color: '#3D4A59', border: '1.5px solid #d1d5db', background: 'white', transition: 'all 0.2s' }}
                    >
                      <svg className="w-4 h-4" style={{ color: '#B08D57' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                      </svg>
                      (905) 634-6000
                    </a>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} style={{ width: 16, height: 16, color: '#D4AF37' }} viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 1l2.39 4.84L17.3 6.7l-3.54 3.46.84 4.88L10 12.77l-4.6 2.27.84-4.88L2.7 6.7l4.91-.86L10 1z" />
                        </svg>
                      ))}
                    </div>
                    <span style={{ fontSize: 13, color: '#94a3b8' }}>5.0 from 17 Google Reviews</span>
                  </div>
                </div>

                {/* Right: photo */}
                <div className="hidden lg:flex justify-center" style={{ position: 'relative' }}>
                  {/* Warm accent behind photo */}
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 340, height: 400, borderRadius: 32, background: 'linear-gradient(145deg, rgba(176,141,87,0.08) 0%, rgba(212,175,55,0.04) 100%)', border: '1px solid rgba(176,141,87,0.1)' }} />

                  <div style={{ position: 'relative', width: 300, borderRadius: 24, overflow: 'hidden', boxShadow: '0 25px 60px rgba(26,32,54,0.12), 0 8px 20px rgba(26,32,54,0.06)' }}>
                    <Image
                      src="/images/professional-photo-kareem-hassanein-registered-physiotherapist-burlington-waterdown-flamborough-oakville-carlisle.png"
                      alt="Kareem Hassanein, Registered Physiotherapist in Burlington"
                      width={826}
                      height={1169}
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust bar at bottom */}
          <div style={{ borderTop: '1px solid rgba(176,141,87,0.1)', background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(8px)' }}>
            <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-6xl" style={{ padding: '18px 0' }}>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                {['No referral needed', 'Direct insurance billing', 'Evening appointments', 'Free parking', 'Same-week availability'].map((item) => (
                  <span key={item} className="flex items-center gap-2" style={{ fontSize: 13, color: '#5A6A7F' }}>
                    <svg style={{ width: 14, height: 14, color: '#B08D57' }} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8.5l3.5 3.5L13 5" />
                    </svg>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* WHAT TO EXPECT                                                    */}
        {/* ================================================================ */}
        <div style={{ background: 'white', padding: '80px 0' }}>
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-5xl">
            <div style={{ maxWidth: 520, margin: '0 auto 56px', textAlign: 'center' as const }}>
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', color: '#B08D57', textTransform: 'uppercase' as const, marginBottom: 12 }}>What to Expect</p>
              <h2 className="font-serif" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 300, color: '#1A2036', letterSpacing: '-0.01em' }}>
                Individualized care, every session
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: 'One-on-One Sessions', desc: 'Your entire appointment is with Kareem. No assistants, no handoffs, no sharing time with other patients.', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
                { title: 'Root Cause Focus', desc: 'A thorough assessment of your movement patterns to address what is actually driving your pain.', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
                { title: 'Treatment From Day One', desc: 'Your first visit includes both assessment and hands-on treatment. No wasting a session on paperwork alone.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
                { title: 'Evidence-Based Care', desc: 'Every intervention backed by current research. Manual therapy, dry needling, cupping, and exercise rehabilitation.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
              ].map((item) => (
                <div key={item.title} style={{ padding: 32, borderRadius: 16, border: '1px solid #f1f5f9', background: '#faf9f7', transition: 'all 0.3s' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: 'linear-gradient(135deg, rgba(176,141,87,0.1), rgba(212,175,55,0.08))', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                    <svg style={{ width: 22, height: 22, color: '#B08D57' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d={item.icon} />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: '#1A2036', marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: '#64748b' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* CLINIC INFO BAR                                                   */}
        {/* ================================================================ */}
        <div style={{ background: '#f8f6f1', padding: '48px 0', borderTop: '1px solid rgba(176,141,87,0.08)', borderBottom: '1px solid rgba(176,141,87,0.08)' }}>
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-4xl">
            <div className="grid sm:grid-cols-3 gap-8" style={{ textAlign: 'center' as const }}>
              <div>
                <svg style={{ width: 20, height: 20, color: '#B08D57', margin: '0 auto 8px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z M12 11.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                </svg>
                <p style={{ fontSize: 14, fontWeight: 600, color: '#1A2036', marginBottom: 4 }}>Burlington Location</p>
                <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.5 }}>4631 Palladium Way, Unit 6<br />Endorphins Health & Wellness</p>
              </div>
              <div>
                <svg style={{ width: 20, height: 20, color: '#B08D57', margin: '0 auto 8px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                <p style={{ fontSize: 14, fontWeight: 600, color: '#1A2036', marginBottom: 4 }}>Clinic Hours</p>
                <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.5 }}>Mon / Tue / Thu: 1:30 - 8:00 PM<br />Wed / Fri: 2:00 - 7:30 PM</p>
              </div>
              <div>
                <svg style={{ width: 20, height: 20, color: '#B08D57', margin: '0 auto 8px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M9 12l2 2 4-4M22 12A10 10 0 112 12a10 10 0 0120 0z" />
                </svg>
                <p style={{ fontSize: 14, fontWeight: 600, color: '#1A2036', marginBottom: 4 }}>Areas Served</p>
                <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.5 }}>Burlington, Waterdown<br />Flamborough, Carlisle</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* REVIEWS                                                           */}
        {/* ================================================================ */}
        <div style={{ background: 'white', padding: '80px 0' }}>
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-5xl">
            <div style={{ maxWidth: 520, margin: '0 auto 48px', textAlign: 'center' as const }}>
              <div className="flex justify-center gap-1" style={{ marginBottom: 12 }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} style={{ width: 20, height: 20, color: '#D4AF37' }} viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 1l2.39 4.84L17.3 6.7l-3.54 3.46.84 4.88L10 12.77l-4.6 2.27.84-4.88L2.7 6.7l4.91-.86L10 1z" />
                  </svg>
                ))}
              </div>
              <h2 className="font-serif" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 300, color: '#1A2036' }}>
                What patients are saying
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {reviews.map((r) => (
                <div key={r.name} style={{ background: '#faf9f7', borderRadius: 16, padding: 24, border: '1px solid #f1f5f9', display: 'flex', flexDirection: 'column' as const }}>
                  {/* Stars */}
                  <div className="flex gap-0.5" style={{ marginBottom: 12 }}>
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} style={{ width: 12, height: 12, color: '#D4AF37' }} viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 1l2.39 4.84L17.3 6.7l-3.54 3.46.84 4.88L10 12.77l-4.6 2.27.84-4.88L2.7 6.7l4.91-.86L10 1z" />
                      </svg>
                    ))}
                  </div>
                  <p style={{ color: '#3D4A59', fontSize: 14, lineHeight: 1.7, flex: 1, marginBottom: 16 }}>
                    &ldquo;{r.text}&rdquo;
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingTop: 12, borderTop: '1px solid #e5e7eb' }}>
                    <span style={{ width: 3, height: 14, borderRadius: 999, background: 'rgba(176,141,87,0.3)' }} />
                    <span style={{ fontSize: 13, fontWeight: 600, color: '#1A2036' }}>{r.name}</span>
                  </div>
                </div>
              ))}
            </div>

            <p style={{ textAlign: 'center' as const, marginTop: 28 }}>
              <Link
                href="https://www.google.com/maps/place/Endorphins+Health+%26+Wellness+Centre"
                target="_blank"
                className="inline-flex items-center gap-1.5"
                style={{ fontSize: 13, color: '#B08D57', fontWeight: 500 }}
              >
                Read all 17 reviews on Google
                <svg style={{ width: 14, height: 14 }} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 3l5 5-5 5" /></svg>
              </Link>
            </p>
          </div>
        </div>

        {/* ================================================================ */}
        {/* PRICING                                                           */}
        {/* ================================================================ */}
        <div style={{ background: '#f8f6f1', padding: '80px 0', borderTop: '1px solid rgba(176,141,87,0.08)' }}>
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-4xl">
            <div style={{ maxWidth: 520, margin: '0 auto 40px', textAlign: 'center' as const }}>
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', color: '#B08D57', textTransform: 'uppercase' as const, marginBottom: 12 }}>Transparent Pricing</p>
              <h2 className="font-serif" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 300, color: '#1A2036' }}>
                No hidden fees, no surprises
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-5" style={{ maxWidth: 460, margin: '0 auto 28px' }}>
              {[
                { label: 'Initial Assessment', price: '$130', sub: 'Assessment + treatment' },
                { label: 'Follow-up Session', price: '$90', sub: '30-minute session' },
              ].map((p) => (
                <div key={p.label} style={{ textAlign: 'center' as const, padding: 28, borderRadius: 16, border: '1px solid #e5e7eb', background: 'white' }}>
                  <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', color: '#94a3b8', textTransform: 'uppercase' as const, marginBottom: 8 }}>{p.label}</p>
                  <p className="font-serif" style={{ fontSize: '2.5rem', fontWeight: 300, color: '#1A2036', lineHeight: 1, marginBottom: 6 }}>{p.price}</p>
                  <p style={{ fontSize: 13, color: '#94a3b8' }}>{p.sub}</p>
                </div>
              ))}
            </div>

            <p style={{ textAlign: 'center' as const, fontSize: 13, color: '#94a3b8', lineHeight: 1.7, maxWidth: 400, margin: '0 auto' }}>
              Direct billing to Sun Life, Manulife, Green Shield Canada, Blue Cross, Canada Life, WSIB, and more.
            </p>
          </div>
        </div>

        {/* ================================================================ */}
        {/* BOTTOM CTA                                                        */}
        {/* ================================================================ */}
        <div style={{ background: '#1A2036', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(176,141,87,0.06), transparent 60%)' }} />

          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-2xl" style={{ position: 'relative', textAlign: 'center' as const }}>
            <h2 className="font-serif" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 300, color: 'white', marginBottom: 12 }}>
              Ready to move forward?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, lineHeight: 1.7, maxWidth: 380, margin: '0 auto 36px' }}>
              Book online in under a minute. No referral required. Call any time during clinic hours with questions.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <BookingCTA size="lg">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                Book Assessment
              </BookingCTA>
              <a
                href="tel:+19056346000"
                className="inline-flex items-center justify-center gap-2"
                style={{ padding: '16px 28px', borderRadius: 9999, fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.15)' }}
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
