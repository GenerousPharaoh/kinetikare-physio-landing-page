import type { CSSProperties, ReactNode } from 'react';
import type { Metadata } from 'next';
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

const palette = {
  ink: '#020617',
  navy: '#0f172a',
  navySoft: '#172033',
  gold: '#D4AF37',
  goldMuted: '#B08D57',
  parchment: '#f7f2e8',
  parchmentDeep: '#efe7d8',
  paper: '#fffdf8',
  body: '#4b5563',
  bodyDark: '#1f2937',
  whiteSoft: 'rgba(255,255,255,0.72)',
};

const sectionPadding = 'clamp(4.75rem, 8vw, 7rem)';

const trustBadges = ['Direct Billing', 'No Referral Needed', 'Evening Hours'];

const carePillars = [
  {
    number: '01',
    title: 'One-on-one attention',
    description:
      'Every minute of your session is with Kareem. No assistants, no treatment handoffs, no split appointments.',
  },
  {
    number: '02',
    title: 'Movement-first assessment',
    description:
      'Your first visit looks at the patterns behind the pain so treatment can address the source, not just the symptom.',
  },
  {
    number: '03',
    title: 'Treatment on day one',
    description:
      'Assessment, hands-on care, and a plan forward happen in the same visit so you leave with clarity and momentum.',
  },
  {
    number: '04',
    title: 'Evidence-based care',
    description:
      'Manual therapy, exercise rehab, dry needling, and cupping are used thoughtfully and only when they fit your goals.',
  },
];

const firstVisitChecklist = [
  'Detailed history and movement assessment',
  'Hands-on treatment in the initial session',
  'Clear next steps for recovery and return to activity',
];

const pricingOptions = [
  {
    label: 'Initial Assessment',
    price: '$130',
    note: 'Assessment + treatment',
  },
  {
    label: 'Follow-up Visit',
    price: '$90',
    note: '30-minute session',
  },
];

const clinicDetails = [
  {
    label: 'Location',
    value: 'Endorphins Health & Wellness Centre\n4631 Palladium Way, Unit 6\nBurlington, ON',
  },
  {
    label: 'Hours',
    value: 'Mon / Tue / Thu: 1:30 - 8:00 PM\nWed / Fri: 2:00 - 7:30 PM',
  },
  {
    label: 'Service Areas',
    value: 'Burlington, Waterdown, Flamborough, Carlisle, and Oakville',
  },
];

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
    text: 'He took the time to figure out what was causing it instead of just treating the pain. My hip feels strong again.',
  },
  {
    name: 'Marko Vasilic',
    text: "He did a full movement analysis and showed me where the extra stress was coming from. I'm back to playing basketball comfortably.",
  },
];

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
      <span
        style={{
          width: 34,
          height: 1,
          background: `linear-gradient(90deg, ${palette.gold}, transparent)`,
        }}
      />
      <span
        style={{
          color: light ? 'rgba(212,175,55,0.95)' : palette.goldMuted,
          fontSize: 11,
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          fontWeight: 600,
        }}
      >
        {children}
      </span>
    </div>
  );
}

function ReviewStars({ size = 14 }: { size?: number }) {
  return (
    <div style={{ display: 'flex', gap: 4 }}>
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill={palette.gold}
          aria-hidden="true"
        >
          <path d="M10 1l2.39 4.84L17.3 6.7l-3.54 3.46.84 4.88L10 12.77l-4.6 2.27.84-4.88L2.7 6.7l4.91-.86L10 1z" />
        </svg>
      ))}
    </div>
  );
}

function GlassBadge({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '9px 14px',
        borderRadius: 999,
        border: '1px solid rgba(255,255,255,0.12)',
        background: 'rgba(255,255,255,0.06)',
        backdropFilter: 'blur(14px)',
        color: 'rgba(255,255,255,0.82)',
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
      }}
    >
      {children}
    </span>
  );
}

function SecondaryAction({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="group relative inline-flex w-full sm:w-auto">
      <span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent translate-x-[-130%] group-hover:translate-x-[130%] transition-transform duration-700 ease-out"
        aria-hidden="true"
      />
      <span
        style={{
          position: 'relative',
          display: 'inline-flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
          padding: '16px 28px',
          borderRadius: 10,
          border: '1px solid rgba(255,255,255,0.16)',
          background: 'rgba(255,255,255,0.06)',
          backdropFilter: 'blur(14px)',
          color: 'white',
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          boxShadow: '0 20px 45px -28px rgba(2,6,23,0.85)',
        }}
      >
        {children}
      </span>
    </a>
  );
}

function LightCard({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <div
      style={{
        height: '100%',
        borderRadius: 26,
        border: '1px solid rgba(176,141,87,0.18)',
        background: 'rgba(255,253,248,0.96)',
        boxShadow: '0 30px 65px -50px rgba(15,23,42,0.55)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default function IntakePage() {
  return (
    <>
      <style>{`
        .intake-page,
        .intake-page * {
          font-style: normal !important;
        }

        .intake-page section {
          padding: 0 !important;
        }

        .intake-page blockquote {
          font-style: normal !important;
        }

        .intake-hero {
          min-height: 100vh;
          min-height: 100dvh;
        }
      `}</style>

      <main className="intake-page" style={{ background: palette.ink }}>
        <div
          className="intake-hero"
          style={{
            position: 'relative',
            overflow: 'hidden',
            background: palette.ink,
          }}
        >
          <div style={{ position: 'absolute', inset: 0 }}>
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                backgroundImage: "url('/images/clinic-pic-may-2025.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: '62% center',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(90deg, rgba(2,6,23,0.96) 0%, rgba(15,23,42,0.95) 30%, rgba(15,23,42,0.83) 52%, rgba(15,23,42,0.58) 72%, rgba(2,6,23,0.82) 100%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(180deg, rgba(2,6,23,0.42) 0%, rgba(2,6,23,0.14) 24%, rgba(2,6,23,0.28) 54%, rgba(2,6,23,0.86) 100%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'radial-gradient(circle at 18% 22%, rgba(212,175,55,0.14), transparent 30%), radial-gradient(circle at 78% 18%, rgba(212,175,55,0.12), transparent 28%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                opacity: 0.06,
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)',
                backgroundSize: '34px 34px',
              }}
            />
          </div>

          <div
            style={{
              position: 'relative',
              zIndex: 2,
              display: 'flex',
              alignItems: 'center',
              minHeight: '100%',
              paddingTop: 'clamp(6.5rem, 11vh, 8.25rem)',
              paddingBottom: 'clamp(4rem, 8vh, 6rem)',
            }}
          >
            <div className="container mx-auto max-w-6xl px-6 sm:px-8 lg:px-16">
              <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.78fr)] lg:gap-14">
                <div style={{ maxWidth: 650 }}>
                  <Eyebrow light>Physiotherapy in Burlington</Eyebrow>

                  <h1
                    className="font-serif"
                    style={{
                      fontSize: 'clamp(3rem, 6vw, 5.1rem)',
                      fontWeight: 300,
                      lineHeight: 1.02,
                      letterSpacing: '-0.035em',
                      color: 'white',
                      marginBottom: 22,
                    }}
                  >
                    Book Your <span style={{ color: palette.gold }}>Assessment</span>
                  </h1>

                  <p
                    style={{
                      maxWidth: 590,
                      color: 'rgba(255,255,255,0.78)',
                      fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                      lineHeight: 1.85,
                      marginBottom: 14,
                    }}
                  >
                    One-on-one physiotherapy for sports injuries, knee and hip pain, dry needling,
                    cupping, and rehabilitation in a calm, welcoming Burlington clinic setting.
                  </p>

                  <p
                    style={{
                      color: 'rgba(255,255,255,0.52)',
                      fontSize: 13,
                      letterSpacing: '0.07em',
                      textTransform: 'uppercase',
                      marginBottom: 34,
                    }}
                  >
                    Kareem Hassanein, RPT · MSc PT, BSc Kin · CPO #20079
                  </p>

                  <div
                    className="flex flex-col gap-3 sm:flex-row sm:gap-4"
                    style={{ marginBottom: 26 }}
                  >
                    <BookingCTA
                      size="lg"
                      className="w-full sm:w-auto !rounded-[10px] sm:!rounded-sm !px-8 !py-4 !text-[11px] !tracking-[0.22em] !shadow-[0_20px_45px_-25px_rgba(212,175,55,0.7)]"
                    >
                      Book Assessment
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        aria-hidden="true"
                      >
                        <path d="M6 3l5 5-5 5" />
                      </svg>
                    </BookingCTA>

                    <SecondaryAction href="tel:+19056346000">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={palette.gold}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.8 19.8 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
                      </svg>
                      (905) 634-6000
                    </SecondaryAction>
                  </div>

                  <div className="flex flex-wrap gap-2.5" style={{ marginBottom: 26 }}>
                    {trustBadges.map((badge) => (
                      <GlassBadge key={badge}>{badge}</GlassBadge>
                    ))}
                  </div>

                  <div
                    className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
                    style={{ color: 'rgba(255,255,255,0.7)' }}
                  >
                    <div className="flex items-center gap-3">
                      <ReviewStars />
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>
                        5.0 from 17 Google reviews
                      </span>
                    </div>
                    <div
                      className="hidden sm:block"
                      style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.14)' }}
                    />
                    <div className="flex items-center gap-2">
                      <span
                        style={{
                          position: 'relative',
                          display: 'inline-flex',
                          width: 10,
                          height: 10,
                        }}
                      >
                        <span
                          style={{
                            position: 'absolute',
                            inset: 0,
                            borderRadius: 999,
                            background: '#4ade80',
                            opacity: 0.55,
                          }}
                          className="animate-ping"
                        />
                        <span
                          style={{
                            position: 'relative',
                            display: 'block',
                            width: 10,
                            height: 10,
                            borderRadius: 999,
                            background: '#22c55e',
                          }}
                        />
                      </span>
                      <span
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: 'rgba(255,255,255,0.82)',
                        }}
                      >
                        Accepting New Patients
                      </span>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block">
                  <div
                    style={{
                      marginLeft: 'auto',
                      maxWidth: 380,
                      borderRadius: 28,
                      border: '1px solid rgba(255,255,255,0.12)',
                      background: 'rgba(15,23,42,0.54)',
                      backdropFilter: 'blur(18px)',
                      boxShadow: '0 35px 90px -55px rgba(2,6,23,0.9)',
                      padding: 30,
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '7px 12px',
                        borderRadius: 999,
                        border: '1px solid rgba(212,175,55,0.24)',
                        background: 'rgba(212,175,55,0.1)',
                        color: palette.gold,
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        marginBottom: 18,
                      }}
                    >
                      Your First Visit
                    </span>

                    <h2
                      className="font-serif"
                      style={{
                        color: 'white',
                        fontWeight: 300,
                        fontSize: '2rem',
                        lineHeight: 1.15,
                        letterSpacing: '-0.02em',
                        marginBottom: 14,
                      }}
                    >
                      Calm, thorough care from the first session.
                    </h2>

                    <p
                      style={{
                        color: 'rgba(255,255,255,0.7)',
                        fontSize: 15,
                        lineHeight: 1.8,
                        marginBottom: 22,
                      }}
                    >
                      You will leave with a clearer understanding of what is driving your pain and
                      what recovery should look like from here.
                    </p>

                    <div style={{ display: 'grid', gap: 14, marginBottom: 24 }}>
                      {firstVisitChecklist.map((item) => (
                        <div
                          key={item}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 12,
                            padding: '14px 15px',
                            borderRadius: 18,
                            border: '1px solid rgba(255,255,255,0.08)',
                            background: 'rgba(255,255,255,0.04)',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-flex',
                              width: 22,
                              height: 22,
                              flexShrink: 0,
                              alignItems: 'center',
                              justifyContent: 'center',
                              borderRadius: 999,
                              background: 'rgba(212,175,55,0.14)',
                              color: palette.gold,
                              fontSize: 12,
                              fontWeight: 700,
                            }}
                          >
                            ✓
                          </span>
                          <span
                            style={{
                              color: 'rgba(255,255,255,0.82)',
                              lineHeight: 1.65,
                              fontSize: 14,
                            }}
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div
                      style={{
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                        paddingTop: 18,
                        color: 'rgba(255,255,255,0.68)',
                        fontSize: 13,
                        lineHeight: 1.75,
                      }}
                    >
                      Located at Endorphins Health & Wellness Centre in Burlington with evening
                      appointment availability.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            position: 'relative',
            background: `linear-gradient(180deg, ${palette.parchment} 0%, ${palette.paper} 100%)`,
            padding: `${sectionPadding} 0`,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(circle at 10% 18%, rgba(212,175,55,0.12), transparent 22%), radial-gradient(circle at 92% 82%, rgba(176,141,87,0.12), transparent 24%)',
              pointerEvents: 'none',
            }}
          />

          <div
            className="container mx-auto max-w-6xl px-6 sm:px-8 lg:px-16"
            style={{ position: 'relative' }}
          >
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
              <div>
                <Eyebrow>What to Expect</Eyebrow>
                <h2
                  className="font-serif"
                  style={{
                    color: palette.bodyDark,
                    fontWeight: 300,
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    lineHeight: 1.08,
                    letterSpacing: '-0.03em',
                    marginBottom: 18,
                  }}
                >
                  Individualized care, delivered with clarity and time.
                </h2>
                <p
                  style={{
                    maxWidth: 430,
                    color: palette.body,
                    fontSize: 16,
                    lineHeight: 1.9,
                    marginBottom: 28,
                  }}
                >
                  Your first visit is designed to feel calm, thorough, and practical. You will have
                  time to explain what is going on, get assessed carefully, and begin treatment with
                  a clear plan.
                </p>

                <div
                  style={{
                    borderRadius: 24,
                    border: `1px solid rgba(176,141,87,0.18)`,
                    background: 'rgba(255,255,255,0.78)',
                    boxShadow: '0 30px 65px -50px rgba(15,23,42,0.4)',
                    padding: 24,
                  }}
                >
                  <p
                    style={{
                      color: palette.goldMuted,
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      marginBottom: 12,
                    }}
                  >
                    First Visit Includes
                  </p>
                  <div style={{ display: 'grid', gap: 12 }}>
                    {firstVisitChecklist.map((item) => (
                      <div
                        key={item}
                        style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}
                      >
                        <span
                          style={{
                            width: 24,
                            height: 24,
                            flexShrink: 0,
                            borderRadius: 999,
                            background: 'rgba(212,175,55,0.12)',
                            color: palette.goldMuted,
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 12,
                            fontWeight: 700,
                          }}
                        >
                          ✓
                        </span>
                        <span style={{ color: palette.body, lineHeight: 1.7, fontSize: 14 }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {carePillars.map((item) => (
                  <LightCard key={item.title} style={{ padding: 28 }}>
                    <div
                      style={{
                        display: 'inline-flex',
                        marginBottom: 18,
                        color: palette.goldMuted,
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: '0.18em',
                      }}
                    >
                      {item.number}
                    </div>
                    <h3
                      className="font-serif"
                      style={{
                        color: palette.bodyDark,
                        fontWeight: 300,
                        fontSize: '1.55rem',
                        lineHeight: 1.18,
                        letterSpacing: '-0.02em',
                        marginBottom: 12,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p style={{ color: palette.body, fontSize: 15, lineHeight: 1.82 }}>
                      {item.description}
                    </p>
                  </LightCard>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            position: 'relative',
            background: `linear-gradient(180deg, ${palette.navy} 0%, ${palette.ink} 100%)`,
            padding: `${sectionPadding} 0`,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(circle at 14% 22%, rgba(212,175,55,0.12), transparent 22%), radial-gradient(circle at 86% 10%, rgba(212,175,55,0.08), transparent 18%)',
              pointerEvents: 'none',
            }}
          />

          <div
            className="container mx-auto max-w-6xl px-6 sm:px-8 lg:px-16"
            style={{ position: 'relative' }}
          >
            <div className="mx-auto max-w-3xl text-center" style={{ marginBottom: 44 }}>
              <Eyebrow light>Patient Reviews</Eyebrow>
              <h2
                className="font-serif"
                style={{
                  color: 'white',
                  fontWeight: 300,
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                  marginBottom: 16,
                }}
              >
                Trusted by Burlington patients who wanted lasting results.
              </h2>
              <p
                style={{
                  color: palette.whiteSoft,
                  fontSize: 16,
                  lineHeight: 1.85,
                  maxWidth: 650,
                  margin: '0 auto 18px',
                }}
              >
                Patients consistently describe feeling listened to, understood, and guided toward
                the real cause of the issue instead of only the painful area.
              </p>
              <div className="flex items-center justify-center gap-3">
                <ReviewStars size={15} />
                <span
                  style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, letterSpacing: '0.06em' }}
                >
                  5.0 rating from 17 Google reviews
                </span>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {reviews.map((review) => (
                <LightCard key={review.name} style={{ padding: 28 }}>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                    }}
                  >
                    <div className="flex items-center justify-between" style={{ marginBottom: 18 }}>
                      <ReviewStars size={13} />
                      <span
                        style={{
                          color: palette.goldMuted,
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: '0.18em',
                          textTransform: 'uppercase',
                        }}
                      >
                        Google
                      </span>
                    </div>
                    <div
                      style={{
                        color: palette.bodyDark,
                        fontSize: 15,
                        lineHeight: 1.9,
                        flex: 1,
                        marginBottom: 22,
                      }}
                    >
                      &ldquo;{review.text}&rdquo;
                    </div>
                    <div
                      style={{
                        paddingTop: 16,
                        borderTop: '1px solid rgba(176,141,87,0.18)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                      }}
                    >
                      <span
                        style={{
                          display: 'inline-flex',
                          width: 36,
                          height: 36,
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: 999,
                          background: `linear-gradient(135deg, ${palette.goldMuted}, ${palette.gold})`,
                          color: palette.paper,
                          fontSize: 14,
                          fontWeight: 700,
                        }}
                      >
                        {review.name.charAt(0)}
                      </span>
                      <span style={{ color: palette.bodyDark, fontWeight: 600, fontSize: 14 }}>
                        {review.name}
                      </span>
                    </div>
                  </div>
                </LightCard>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: 30 }}>
              <a
                href="https://www.google.com/maps/place/Endorphins+Health+%26+Wellness+Centre"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  color: palette.gold,
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                Read all reviews on Google
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M6 3l5 5-5 5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            position: 'relative',
            background: `linear-gradient(180deg, ${palette.paper} 0%, ${palette.parchment} 100%)`,
            padding: `${sectionPadding} 0`,
            overflow: 'hidden',
          }}
        >
          <div className="container mx-auto max-w-6xl px-6 sm:px-8 lg:px-16">
            <div className="mx-auto max-w-3xl text-center" style={{ marginBottom: 46 }}>
              <Eyebrow>Pricing & Clinic Details</Eyebrow>
              <h2
                className="font-serif"
                style={{
                  color: palette.bodyDark,
                  fontWeight: 300,
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                  marginBottom: 16,
                }}
              >
                Clear pricing, direct billing, and a straightforward next step.
              </h2>
              <p
                style={{
                  color: palette.body,
                  fontSize: 16,
                  lineHeight: 1.85,
                  maxWidth: 650,
                  margin: '0 auto',
                }}
              >
                Everything is straightforward before you book, from pricing to billing support and
                exactly where the clinic is located.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
              <LightCard style={{ padding: '30px clamp(1.5rem, 4vw, 2rem)' }}>
                <Eyebrow>Pricing</Eyebrow>
                <h3
                  className="font-serif"
                  style={{
                    color: palette.bodyDark,
                    fontWeight: 300,
                    fontSize: '2rem',
                    lineHeight: 1.14,
                    letterSpacing: '-0.02em',
                    marginBottom: 22,
                  }}
                >
                  No hidden fees.
                </h3>

                <div className="grid gap-4 sm:grid-cols-2" style={{ marginBottom: 18 }}>
                  {pricingOptions.map((item) => (
                    <div
                      key={item.label}
                      style={{
                        borderRadius: 22,
                        border: '1px solid rgba(176,141,87,0.18)',
                        background: 'rgba(247,242,232,0.72)',
                        padding: 24,
                        textAlign: 'center',
                      }}
                    >
                      <p
                        style={{
                          color: palette.goldMuted,
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: '0.18em',
                          textTransform: 'uppercase',
                          marginBottom: 10,
                        }}
                      >
                        {item.label}
                      </p>
                      <p
                        className="font-serif"
                        style={{
                          color: palette.bodyDark,
                          fontWeight: 300,
                          fontSize: '2.4rem',
                          lineHeight: 1,
                          letterSpacing: '-0.03em',
                          marginBottom: 8,
                        }}
                      >
                        {item.price}
                      </p>
                      <p style={{ color: palette.body, fontSize: 14, lineHeight: 1.7 }}>
                        {item.note}
                      </p>
                    </div>
                  ))}
                </div>

                <p style={{ color: palette.body, fontSize: 15, lineHeight: 1.85 }}>
                  Direct billing is available for Sun Life, Manulife, Green Shield Canada, Blue
                  Cross, Canada Life, WSIB, and more.
                </p>
              </LightCard>

              <LightCard style={{ padding: '30px clamp(1.5rem, 4vw, 2rem)' }}>
                <Eyebrow>Clinic Details</Eyebrow>
                <h3
                  className="font-serif"
                  style={{
                    color: palette.bodyDark,
                    fontWeight: 300,
                    fontSize: '2rem',
                    lineHeight: 1.14,
                    letterSpacing: '-0.02em',
                    marginBottom: 22,
                  }}
                >
                  Burlington & Waterdown.
                </h3>

                <div style={{ display: 'grid', gap: 18 }}>
                  {clinicDetails.map((detail, index) => (
                    <div
                      key={detail.label}
                      style={{
                        paddingBottom: index === clinicDetails.length - 1 ? 0 : 18,
                        borderBottom:
                          index === clinicDetails.length - 1
                            ? 'none'
                            : '1px solid rgba(176,141,87,0.16)',
                      }}
                    >
                      <p
                        style={{
                          color: palette.goldMuted,
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: '0.18em',
                          textTransform: 'uppercase',
                          marginBottom: 8,
                        }}
                      >
                        {detail.label}
                      </p>
                      <p
                        style={{
                          color: palette.body,
                          fontSize: 15,
                          lineHeight: 1.85,
                          whiteSpace: 'pre-line',
                        }}
                      >
                        {detail.value}
                      </p>
                    </div>
                  ))}
                </div>
              </LightCard>
            </div>
          </div>
        </div>

        <div
          style={{
            position: 'relative',
            background: `linear-gradient(180deg, ${palette.navy} 0%, ${palette.ink} 100%)`,
            padding: `${sectionPadding} 0`,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(circle at 50% 40%, rgba(212,175,55,0.15), transparent 28%)',
            }}
          />

          <div
            className="container mx-auto max-w-4xl px-6 sm:px-8 lg:px-16"
            style={{ position: 'relative' }}
          >
            <div
              style={{
                borderRadius: 30,
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(15,23,42,0.52)',
                backdropFilter: 'blur(18px)',
                padding: 'clamp(2rem, 5vw, 3rem)',
                textAlign: 'center',
                boxShadow: '0 35px 90px -55px rgba(2,6,23,0.95)',
              }}
            >
              <Eyebrow light>Ready to Move Forward?</Eyebrow>
              <h2
                className="font-serif"
                style={{
                  color: 'white',
                  fontWeight: 300,
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  lineHeight: 1.08,
                  letterSpacing: '-0.03em',
                  marginBottom: 16,
                }}
              >
                Book online in under a minute.
              </h2>
              <p
                style={{
                  color: palette.whiteSoft,
                  fontSize: 16,
                  lineHeight: 1.85,
                  maxWidth: 560,
                  margin: '0 auto 28px',
                }}
              >
                No referral required. Choose a time that works for you and start with a thorough
                one-on-one assessment.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
                <BookingCTA
                  size="lg"
                  className="w-full sm:w-auto !rounded-[10px] sm:!rounded-sm !px-8 !py-4 !text-[11px] !tracking-[0.22em] !shadow-[0_20px_45px_-25px_rgba(212,175,55,0.7)]"
                >
                  Book Assessment
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M6 3l5 5-5 5" />
                  </svg>
                </BookingCTA>

                <SecondaryAction href="tel:+19056346000">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={palette.gold}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.8 19.8 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  (905) 634-6000
                </SecondaryAction>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
