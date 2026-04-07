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
  {
    name: 'Dr. Fel Rocci',
    text: 'Having worked with Kareem, I am now able to play tennis 4-5 times a week without a setback. Not bad for a 70 year old!',
  },
  {
    name: 'Nickel Chan',
    text: "Kareem is honestly one of the best physiotherapists I've ever seen. He fixed issues I'd been struggling with for a long time.",
  },
  {
    name: 'Thanula G.',
    text: 'Thorough, knowledgeable, and incredibly attentive. I saw consistent progress and now feel stronger and pain free.',
  },
  {
    name: 'Ryan Darkwah',
    text: "Kareem found the problem came from my hip and quads. My pain's gone now, and I'm back to playing at full speed.",
  },
  {
    name: 'David Espinosa',
    text: 'He took the time to figure out what was causing it instead of just treating the pain. My hip feels strong again and the foot pain is gone.',
  },
  {
    name: 'Marko Vasilic',
    text: "He did a full movement analysis and showed me where the extra stress was coming from. I'm back to playing basketball comfortably.",
  },
];

function GoldStar() {
  return (
    <svg className="w-[15px] h-[15px] text-[#D4AF37]" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 1l2.39 4.84L17.3 6.7l-3.54 3.46.84 4.88L10 12.77l-4.6 2.27.84-4.88L2.7 6.7l4.91-.86L10 1z" />
    </svg>
  );
}

export default function IntakePage() {
  return (
    <>
      {/* Scoped reset: kill ALL global section/blockquote/element overrides for this page */}
      <style>{`
        .intake-page, .intake-page * {
          font-style: normal;
        }
        .intake-page > div {
          padding: 0 !important;
          margin: 0 !important;
        }
        .intake-page section {
          padding: 0 !important;
        }
      `}</style>

      <main className="intake-page">
        {/* ================================================================ */}
        {/* HERO                                                             */}
        {/* ================================================================ */}
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#020617', position: 'relative', overflow: 'hidden' }}>
          {/* Ambient glow */}
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 20% 48%, rgba(176,141,87,0.07), transparent 60%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 50% 50% at 80% 20%, rgba(212,175,55,0.04), transparent 50%)' }} />
          {/* Gold line */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.3), transparent)' }} />

          {/* Content */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', paddingTop: 76, paddingBottom: 24, position: 'relative' }}>
            <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-6xl w-full">
              <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-center">

                {/* Left */}
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-7" style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span style={{ color: 'rgb(52,211,153)', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const }}>
                      Accepting New Patients
                    </span>
                  </div>

                  <h1 className="font-serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.4rem)', fontWeight: 300, color: 'white', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 20 }}>
                    Book Your
                    <br />
                    <span style={{ background: 'linear-gradient(to right, #D4AF37, #E8D48B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                      Assessment
                    </span>
                  </h1>

                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 15, lineHeight: 1.7, marginBottom: 32, maxWidth: 420 }}>
                    One-on-one physiotherapy with Kareem Hassanein,
                    Registered Physiotherapist. Burlington and Waterdown.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 mb-8">
                    <BookingCTA size="lg">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" />
                      </svg>
                      Book Online
                    </BookingCTA>
                    <a
                      href="tel:+19056346000"
                      className="inline-flex items-center justify-center gap-2.5"
                      style={{ padding: '14px 28px', borderRadius: 9999, fontSize: 12, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.12)', transition: 'all 0.3s' }}
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                      </svg>
                      (905) 634-6000
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => <GoldStar key={i} />)}
                    </div>
                    <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>5.0 from 17 Google Reviews</span>
                  </div>
                </div>

                {/* Right: card */}
                <div className="hidden lg:block">
                  <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(to right, #B08D57, #D4AF37, #B08D57)', zIndex: 10 }} />
                    <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 28 }}>
                      <div className="flex items-center gap-5 mb-6">
                        <div style={{ width: 72, height: 72, borderRadius: 16, overflow: 'hidden', flexShrink: 0, boxShadow: '0 0 0 2px rgba(212,175,55,0.2), 0 0 0 4px #020617' }}>
                          <Image src="/images/kareem-profile.webp" alt="Kareem Hassanein" width={72} height={72} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h2 className="font-serif" style={{ color: 'white', fontSize: 18, letterSpacing: '-0.01em' }}>Kareem Hassanein</h2>
                          <p style={{ color: '#D4AF37', fontSize: 14, fontWeight: 500, marginTop: 2 }}>Registered Physiotherapist</p>
                          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12, marginTop: 4, letterSpacing: '0.03em' }}>MSc PT, BSc Kin &middot; CPO #20079</p>
                        </div>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, fontSize: 13, marginBottom: 24 }}>
                        {[
                          ['M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z M12 11.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z', 'Endorphins Health, 4631 Palladium Way, Burlington'],
                          ['M3 4h18v18H3zM16 2v4M8 2v4M3 10h18', 'Mon / Tue / Thu 1:30-8 PM, Wed / Fri 2-7:30 PM'],
                          ['M9 12l2 2 4-4M22 12A10 10 0 112 12a10 10 0 0120 0z', 'Burlington, Waterdown, Flamborough, Carlisle'],
                        ].map(([path, text], idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <svg style={{ width: 16, height: 16, color: 'rgba(212,175,55,0.5)', marginTop: 2, flexShrink: 0 }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d={path} />
                            </svg>
                            <span style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.4 }}>{text}</span>
                          </div>
                        ))}
                      </div>

                      <div style={{ paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', flexWrap: 'wrap' as const, gap: 6 }}>
                        {['Manual Therapy', 'Dry Needling', 'Cupping', 'Sports Rehab', 'Exercise Rx'].map((s) => (
                          <span key={s} style={{ padding: '4px 10px', borderRadius: 6, background: 'rgba(212,175,55,0.06)', color: 'rgba(212,175,55,0.6)', fontSize: 11, fontWeight: 500, letterSpacing: '0.03em' }}>{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust bar */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
            <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-6xl" style={{ padding: '16px 0' }}>
              <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2.5">
                {['No referral needed', 'Direct insurance billing', 'Evening appointments', 'Free on-site parking', 'Same-week availability'].map((item) => (
                  <span key={item} className="flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, letterSpacing: '0.03em' }}>
                    <span style={{ width: 4, height: 4, borderRadius: 999, background: 'rgba(212,175,55,0.4)' }} />
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
        <div style={{ background: 'white', padding: '96px 0' }}>
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-5xl">
            <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' as const, marginBottom: 56 }}>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', color: '#B08D57', textTransform: 'uppercase' as const, marginBottom: 16 }}>What to Expect</p>
              <h2 className="font-serif" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 300, color: '#1A2036', letterSpacing: '-0.01em', lineHeight: 1.3 }}>
                Individualized care, every session
              </h2>
            </div>

            <div className="grid sm:grid-cols-2" style={{ gap: 1, background: '#e5e7eb', borderRadius: 16, overflow: 'hidden', border: '1px solid #e5e7eb' }}>
              {[
                { num: '01', title: 'One-on-One Sessions', desc: 'Your entire appointment is with Kareem. No assistants, no handoffs, no sharing time with other patients.' },
                { num: '02', title: 'Root Cause Focus', desc: 'A thorough assessment of your movement patterns to address what is actually driving your pain.' },
                { num: '03', title: 'Treatment From Day One', desc: 'Your first visit includes both assessment and hands-on treatment. No wasting a session on paperwork alone.' },
                { num: '04', title: 'Evidence-Based Care', desc: 'Every intervention backed by current research. Manual therapy, dry needling, cupping, and exercise rehabilitation.' },
              ].map((item) => (
                <div key={item.num} style={{ background: 'white', padding: 36 }}>
                  <span className="font-serif" style={{ color: 'rgba(212,175,55,0.25)', fontSize: '2.5rem', fontWeight: 300, lineHeight: 1, display: 'block', marginBottom: 16 }}>{item.num}</span>
                  <h3 style={{ color: '#1A2036', fontWeight: 500, fontSize: 15, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* REVIEWS                                                           */}
        {/* ================================================================ */}
        <div style={{ background: '#faf9f7', padding: '96px 0' }}>
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-5xl">
            <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' as const, marginBottom: 56 }}>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" style={{ color: '#D4AF37' }} viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 1l2.39 4.84L17.3 6.7l-3.54 3.46.84 4.88L10 12.77l-4.6 2.27.84-4.88L2.7 6.7l4.91-.86L10 1z" />
                  </svg>
                ))}
              </div>
              <h2 className="font-serif" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 300, color: '#1A2036', letterSpacing: '-0.01em' }}>
                5.0 stars from 17 reviews
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {reviews.map((r) => (
                <div key={r.name} style={{ background: 'white', borderRadius: 12, padding: 24, border: '1px solid rgba(226,232,240,0.8)', boxShadow: '0 1px 3px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column' as const }}>
                  <svg style={{ width: 28, height: 28, color: 'rgba(212,175,55,0.2)', marginBottom: 12, flexShrink: 0 }} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179zM14.583 17.321C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179z" />
                  </svg>
                  <p style={{ color: '#475569', fontSize: 13, lineHeight: 1.7, flex: 1, marginBottom: 16 }}>
                    {r.text}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingTop: 12, borderTop: '1px solid #f1f5f9' }}>
                    <span style={{ width: 3, height: 16, borderRadius: 999, background: 'rgba(212,175,55,0.3)' }} />
                    <span style={{ fontSize: 12, fontWeight: 600, color: '#1A2036', letterSpacing: '0.03em' }}>{r.name}</span>
                  </div>
                </div>
              ))}
            </div>

            <p style={{ textAlign: 'center' as const, marginTop: 32 }}>
              <Link
                href="https://www.google.com/maps/place/Endorphins+Health+%26+Wellness+Centre"
                target="_blank"
                className="inline-flex items-center gap-1.5"
                style={{ fontSize: 13, color: '#B08D57', fontWeight: 500 }}
              >
                Read all reviews on Google
                <svg style={{ width: 14, height: 14 }} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M6 3l5 5-5 5" />
                </svg>
              </Link>
            </p>
          </div>
        </div>

        {/* ================================================================ */}
        {/* PRICING                                                           */}
        {/* ================================================================ */}
        <div style={{ background: 'white', padding: '96px 0' }}>
          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-4xl">
            <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' as const, marginBottom: 48 }}>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', color: '#B08D57', textTransform: 'uppercase' as const, marginBottom: 16 }}>Transparent Pricing</p>
              <h2 className="font-serif" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 300, color: '#1A2036', letterSpacing: '-0.01em' }}>
                No hidden fees, no surprises
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-5" style={{ maxWidth: 480, margin: '0 auto 32px' }}>
              {[
                { label: 'Initial Assessment', price: '$130', sub: 'Assessment + treatment' },
                { label: 'Follow-up Session', price: '$90', sub: '30-minute session' },
              ].map((p) => (
                <div key={p.label} style={{ textAlign: 'center' as const, padding: 28, borderRadius: 16, border: '1px solid #e5e7eb', background: '#faf9f7' }}>
                  <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', color: '#94a3b8', textTransform: 'uppercase' as const, marginBottom: 8 }}>{p.label}</p>
                  <p className="font-serif" style={{ fontSize: '2.5rem', fontWeight: 300, color: '#1A2036', lineHeight: 1, marginBottom: 6 }}>{p.price}</p>
                  <p style={{ fontSize: 12, color: '#94a3b8' }}>{p.sub}</p>
                </div>
              ))}
            </div>

            <p style={{ textAlign: 'center' as const, fontSize: 13, color: '#94a3b8', lineHeight: 1.7, maxWidth: 420, margin: '0 auto' }}>
              Direct billing to Sun Life, Manulife, Green Shield Canada, Blue Cross, Canada Life, WSIB, and more.
              Most extended health plans cover physiotherapy.
            </p>
          </div>
        </div>

        {/* ================================================================ */}
        {/* BOTTOM CTA                                                        */}
        {/* ================================================================ */}
        <div style={{ background: '#020617', position: 'relative', overflow: 'hidden', padding: '96px 0' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,175,55,0.04), transparent 60%)' }} />

          <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-2xl" style={{ position: 'relative', textAlign: 'center' as const }}>
            <h2 className="font-serif" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 300, color: 'white', letterSpacing: '-0.01em', marginBottom: 16 }}>
              Ready to move forward?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 15, marginBottom: 36, lineHeight: 1.7, maxWidth: 360, margin: '0 auto 36px' }}>
              Book online in under a minute. No referral required.
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
                className="inline-flex items-center justify-center gap-2.5"
                style={{ padding: '16px 28px', borderRadius: 9999, fontSize: 12, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.1)' }}
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
