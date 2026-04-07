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
  navyLift: '#16213a',
  slate: '#24324b',
  gold: '#D4AF37',
  goldDeep: '#B08D57',
  cream: '#F7F1E6',
  creamSoft: '#FFFCF7',
  creamDeep: '#EFE4D0',
  body: '#4b5563',
  bodyDark: '#1f2937',
  whiteSoft: 'rgba(255,255,255,0.75)',
};

const serifFont = '"Playfair Display", var(--font-heading), serif';
const sectionPadding = 'clamp(5rem, 8vw, 7.5rem)';

const trustBadges = ['Direct Billing', 'No Referral Needed', 'Evening Appointments'];

const heroVisitSteps = [
  {
    label: 'Assessment',
    text: 'A detailed history and movement evaluation to understand what is actually driving the pain.',
  },
  {
    label: 'Treatment',
    text: 'Hands-on care begins in the first session so you do not spend a visit only talking.',
  },
  {
    label: 'Plan',
    text: 'You leave with clearer next steps, recovery priorities, and a treatment direction that feels specific.',
  },
];

const careCards = [
  {
    title: 'Your whole session is one-on-one.',
    description:
      'No assistants, no handoffs, and no divided attention. Every visit is fully with Kareem from assessment through treatment.',
  },
  {
    title: 'The painful area is not the only area assessed.',
    description:
      'A careful look at movement patterns, strength, mobility, and loading helps identify why the issue keeps showing up.',
  },
  {
    title: 'Treatment starts right away.',
    description:
      'Your first appointment includes hands-on treatment, not only paperwork and explanation.',
  },
  {
    title: 'Care is practical, evidence-based, and tailored.',
    description:
      'Manual therapy, dry needling, cupping, and exercise rehabilitation are used thoughtfully when they suit your goals.',
  },
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

const featuredReview = reviews[0];
const secondaryReviews = reviews.slice(1);

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
          color: light ? 'rgba(212,175,55,0.95)' : palette.goldDeep,
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
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

function TrustChip({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '9px 14px',
        borderRadius: 999,
        border: light ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(176,141,87,0.18)',
        background: light ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.58)',
        backdropFilter: 'blur(14px)',
        color: light ? 'rgba(255,255,255,0.82)' : palette.bodyDark,
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

function Panel({
  children,
  tone = 'paper',
  style,
}: {
  children: ReactNode;
  tone?: 'paper' | 'dark' | 'glass' | 'warm';
  style?: CSSProperties;
}) {
  const tones: Record<string, CSSProperties> = {
    paper: {
      border: '1px solid rgba(176,141,87,0.18)',
      background: 'linear-gradient(180deg, rgba(255,255,255,0.92), rgba(247,241,230,0.92))',
      boxShadow: '0 30px 70px -52px rgba(15,23,42,0.4)',
      color: palette.bodyDark,
    },
    dark: {
      border: '1px solid rgba(255,255,255,0.1)',
      background: 'linear-gradient(180deg, rgba(15,23,42,0.94), rgba(2,6,23,0.96))',
      boxShadow: '0 34px 90px -60px rgba(2,6,23,0.9)',
      color: 'white',
    },
    glass: {
      border: '1px solid rgba(255,255,255,0.1)',
      background: 'rgba(15,23,42,0.54)',
      backdropFilter: 'blur(18px)',
      boxShadow: '0 34px 90px -60px rgba(2,6,23,0.9)',
      color: 'white',
    },
    warm: {
      border: '1px solid rgba(176,141,87,0.24)',
      background: 'linear-gradient(180deg, rgba(247,241,230,0.96), rgba(239,228,208,0.94))',
      boxShadow: '0 28px 60px -48px rgba(15,23,42,0.35)',
      color: palette.bodyDark,
    },
  };

  return (
    <div
      style={{
        borderRadius: 30,
        overflow: 'hidden',
        ...tones[tone],
        ...style,
      }}
    >
      {children}
    </div>
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
          borderRadius: 14,
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

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        paddingBottom: 20,
        borderBottom: '1px solid rgba(176,141,87,0.16)',
      }}
    >
      <p
        style={{
          color: palette.goldDeep,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          marginBottom: 8,
        }}
      >
        {label}
      </p>
      <p
        style={{
          color: palette.body,
          fontSize: 15,
          lineHeight: 1.85,
          whiteSpace: 'pre-line',
        }}
      >
        {value}
      </p>
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

        .intake-noise {
          position: relative;
        }

        .intake-noise::before {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0.028;
          background-image: radial-gradient(rgba(255,255,255,0.9) 0.7px, transparent 0.7px);
          background-size: 16px 16px;
          pointer-events: none;
        }
      `}</style>

      <main className="intake-page" style={{ background: palette.ink }}>
        <div
          className="intake-hero intake-noise"
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
                backgroundImage: "url('/images/clinic-pic-may-2025.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: '70% center',
                transform: 'scale(1.02)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(90deg, rgba(2,6,23,0.98) 0%, rgba(15,23,42,0.95) 24%, rgba(15,23,42,0.86) 44%, rgba(15,23,42,0.58) 64%, rgba(2,6,23,0.88) 100%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(180deg, rgba(2,6,23,0.25) 0%, rgba(2,6,23,0.05) 25%, rgba(2,6,23,0.2) 50%, rgba(2,6,23,0.92) 100%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'radial-gradient(circle at 16% 20%, rgba(212,175,55,0.15), transparent 28%), radial-gradient(circle at 85% 12%, rgba(212,175,55,0.1), transparent 18%)',
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
              paddingTop: 'clamp(6.5rem, 11vh, 8.5rem)',
              paddingBottom: 'clamp(4rem, 8vh, 6.5rem)',
            }}
          >
            <div className="container mx-auto max-w-6xl px-6 sm:px-8 lg:px-16">
              <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.96fr)_minmax(360px,0.94fr)] lg:gap-16">
                <div style={{ maxWidth: 640 }}>
                  <Eyebrow light>Physiotherapy in Burlington</Eyebrow>

                  <h1
                    style={{
                      fontFamily: serifFont,
                      fontSize: 'clamp(3.5rem, 7vw, 6.5rem)',
                      fontWeight: 300,
                      lineHeight: 0.92,
                      letterSpacing: '-0.045em',
                      color: 'white',
                      marginBottom: 24,
                    }}
                  >
                    Book Your
                    <br />
                    <span style={{ color: palette.gold }}>Assessment</span>
                  </h1>

                  <p
                    style={{
                      maxWidth: 560,
                      color: 'rgba(255,255,255,0.79)',
                      fontSize: 'clamp(1.03rem, 2vw, 1.18rem)',
                      lineHeight: 1.88,
                      marginBottom: 16,
                    }}
                  >
                    One-on-one physiotherapy for sports injuries, knee and hip pain, dry needling,
                    cupping, and rehabilitation, delivered in a calm Burlington clinic with time to
                    assess, treat, and explain.
                  </p>

                  <p
                    style={{
                      color: 'rgba(255,255,255,0.52)',
                      fontSize: 13,
                      letterSpacing: '0.08em',
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
                      className="w-full sm:w-auto !rounded-[14px] sm:!rounded-[10px] !px-8 !py-4 !text-[11px] !tracking-[0.22em] !shadow-[0_22px_60px_-28px_rgba(212,175,55,0.72)]"
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
                      <TrustChip key={badge} light>
                        {badge}
                      </TrustChip>
                    ))}
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
                    <div className="flex items-center gap-3">
                      <ReviewStars />
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.76)' }}>
                        5.0 from 17 Google reviews
                      </span>
                    </div>
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
                          className="animate-ping"
                          style={{
                            position: 'absolute',
                            inset: 0,
                            borderRadius: 999,
                            background: '#4ade80',
                            opacity: 0.55,
                          }}
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

                  <div className="lg:hidden" style={{ marginTop: 30 }}>
                    <Panel tone="warm" style={{ padding: 24 }}>
                      <p
                        style={{
                          color: palette.goldDeep,
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: '0.18em',
                          textTransform: 'uppercase',
                          marginBottom: 14,
                        }}
                      >
                        Your First Visit
                      </p>
                      <div style={{ display: 'grid', gap: 14 }}>
                        {heroVisitSteps.map((step, index) => (
                          <div
                            key={step.label}
                            style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}
                          >
                            <span
                              style={{
                                display: 'inline-flex',
                                width: 30,
                                height: 30,
                                flexShrink: 0,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 999,
                                background: 'rgba(176,141,87,0.12)',
                                color: palette.goldDeep,
                                fontSize: 12,
                                fontWeight: 700,
                              }}
                            >
                              0{index + 1}
                            </span>
                            <div>
                              <p
                                style={{
                                  color: palette.bodyDark,
                                  fontWeight: 600,
                                  marginBottom: 4,
                                }}
                              >
                                {step.label}
                              </p>
                              <p style={{ color: palette.body, lineHeight: 1.75, fontSize: 14 }}>
                                {step.text}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Panel>
                  </div>
                </div>

                <div className="hidden lg:block">
                  <div style={{ position: 'relative', minHeight: 590 }}>
                    <Panel
                      tone="glass"
                      style={{
                        position: 'absolute',
                        top: 12,
                        right: 0,
                        width: '70%',
                        padding: 28,
                        transform: 'rotate(1.25deg)',
                      }}
                    >
                      <p
                        style={{
                          color: palette.gold,
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: '0.18em',
                          textTransform: 'uppercase',
                          marginBottom: 12,
                        }}
                      >
                        Why Patients Choose Kareem
                      </p>
                      <div style={{ display: 'grid', gap: 14 }}>
                        {[
                          'Direct, thoughtful explanations',
                          'A calm pace that never feels rushed',
                          'Treatment matched to your real goals',
                        ].map((item) => (
                          <div
                            key={item}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 12,
                              paddingBottom: 14,
                              borderBottom: '1px solid rgba(255,255,255,0.08)',
                            }}
                          >
                            <span
                              style={{
                                width: 8,
                                height: 8,
                                borderRadius: 999,
                                background: palette.gold,
                                flexShrink: 0,
                              }}
                            />
                            <span style={{ color: 'rgba(255,255,255,0.84)', lineHeight: 1.65 }}>
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </Panel>

                    <Panel
                      tone="warm"
                      style={{
                        position: 'absolute',
                        left: 0,
                        bottom: 24,
                        width: '82%',
                        padding: 34,
                        transform: 'rotate(-1.1deg)',
                      }}
                    >
                      <p
                        style={{
                          color: palette.goldDeep,
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: '0.18em',
                          textTransform: 'uppercase',
                          marginBottom: 14,
                        }}
                      >
                        Your First Visit
                      </p>
                      <h2
                        style={{
                          fontFamily: serifFont,
                          fontWeight: 300,
                          fontSize: '2.1rem',
                          lineHeight: 1.08,
                          letterSpacing: '-0.03em',
                          color: palette.bodyDark,
                          marginBottom: 18,
                        }}
                      >
                        Calm, thorough care from the first session.
                      </h2>
                      <div style={{ display: 'grid', gap: 16 }}>
                        {heroVisitSteps.map((step, index) => (
                          <div
                            key={step.label}
                            style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}
                          >
                            <span
                              style={{
                                display: 'inline-flex',
                                width: 32,
                                height: 32,
                                flexShrink: 0,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 999,
                                background: 'rgba(176,141,87,0.12)',
                                color: palette.goldDeep,
                                fontSize: 12,
                                fontWeight: 700,
                              }}
                            >
                              0{index + 1}
                            </span>
                            <div>
                              <p
                                style={{
                                  color: palette.bodyDark,
                                  fontWeight: 600,
                                  marginBottom: 4,
                                }}
                              >
                                {step.label}
                              </p>
                              <p style={{ color: palette.body, lineHeight: 1.8, fontSize: 14 }}>
                                {step.text}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Panel>

                    <div
                      style={{
                        position: 'absolute',
                        right: 34,
                        bottom: 0,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 10,
                        padding: '12px 18px',
                        borderRadius: 999,
                        border: '1px solid rgba(255,255,255,0.12)',
                        background: 'rgba(15,23,42,0.74)',
                        backdropFilter: 'blur(14px)',
                        color: 'rgba(255,255,255,0.86)',
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                      }}
                    >
                      <span
                        style={{
                          width: 9,
                          height: 9,
                          borderRadius: 999,
                          background: '#22c55e',
                          boxShadow: '0 0 14px rgba(34,197,94,0.6)',
                        }}
                      />
                      Accepting New Patients
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
            padding: `${sectionPadding} 0`,
            background: `linear-gradient(180deg, ${palette.cream} 0%, ${palette.creamSoft} 100%)`,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(circle at 8% 16%, rgba(212,175,55,0.12), transparent 20%), radial-gradient(circle at 94% 76%, rgba(176,141,87,0.12), transparent 24%)',
            }}
          />

          <div
            className="container mx-auto max-w-6xl px-6 sm:px-8 lg:px-16"
            style={{ position: 'relative' }}
          >
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:gap-16">
              <div>
                <Eyebrow>What to Expect</Eyebrow>
                <h2
                  style={{
                    fontFamily: serifFont,
                    color: palette.bodyDark,
                    fontWeight: 300,
                    fontSize: 'clamp(2.35rem, 4.6vw, 4rem)',
                    lineHeight: 0.98,
                    letterSpacing: '-0.04em',
                    marginBottom: 20,
                    maxWidth: 440,
                  }}
                >
                  Care that feels personal, not procedural.
                </h2>
                <p
                  style={{
                    color: palette.body,
                    fontSize: 16,
                    lineHeight: 1.9,
                    maxWidth: 430,
                    marginBottom: 30,
                  }}
                >
                  The page needs to carry the same emotional signal as the clinic itself:
                  thoughtful, clear, and quietly confident rather than loud or overly polished.
                </p>

                <Panel tone="dark" style={{ padding: 30 }}>
                  <p
                    style={{
                      color: palette.gold,
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      marginBottom: 14,
                    }}
                  >
                    First Visit Includes
                  </p>
                  <div style={{ display: 'grid', gap: 14 }}>
                    {heroVisitSteps.map((step) => (
                      <div
                        key={step.label}
                        style={{
                          paddingBottom: 14,
                          borderBottom: '1px solid rgba(255,255,255,0.08)',
                        }}
                      >
                        <p
                          style={{
                            color: 'white',
                            fontWeight: 600,
                            marginBottom: 5,
                          }}
                        >
                          {step.label}
                        </p>
                        <p
                          style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, fontSize: 14 }}
                        >
                          {step.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </Panel>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <Panel tone="paper" style={{ padding: 28, minHeight: 280 }}>
                  <p
                    style={{
                      color: palette.goldDeep,
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: '0.16em',
                      marginBottom: 16,
                    }}
                  >
                    01
                  </p>
                  <h3
                    style={{
                      fontFamily: serifFont,
                      color: palette.bodyDark,
                      fontWeight: 300,
                      fontSize: '2rem',
                      lineHeight: 1.04,
                      letterSpacing: '-0.03em',
                      marginBottom: 14,
                    }}
                  >
                    {careCards[0].title}
                  </h3>
                  <p style={{ color: palette.body, fontSize: 15, lineHeight: 1.82 }}>
                    {careCards[0].description}
                  </p>
                </Panel>

                <Panel tone="warm" style={{ padding: 28, minHeight: 240 }}>
                  <p
                    style={{
                      color: palette.goldDeep,
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: '0.16em',
                      marginBottom: 16,
                    }}
                  >
                    02
                  </p>
                  <h3
                    style={{
                      fontFamily: serifFont,
                      color: palette.bodyDark,
                      fontWeight: 300,
                      fontSize: '1.72rem',
                      lineHeight: 1.08,
                      letterSpacing: '-0.03em',
                      marginBottom: 12,
                    }}
                  >
                    {careCards[1].title}
                  </h3>
                  <p style={{ color: palette.body, fontSize: 15, lineHeight: 1.82 }}>
                    {careCards[1].description}
                  </p>
                </Panel>

                <Panel tone="paper" style={{ padding: 28, minHeight: 220 }}>
                  <p
                    style={{
                      color: palette.goldDeep,
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: '0.16em',
                      marginBottom: 16,
                    }}
                  >
                    03
                  </p>
                  <h3
                    style={{
                      fontFamily: serifFont,
                      color: palette.bodyDark,
                      fontWeight: 300,
                      fontSize: '1.72rem',
                      lineHeight: 1.08,
                      letterSpacing: '-0.03em',
                      marginBottom: 12,
                    }}
                  >
                    {careCards[2].title}
                  </h3>
                  <p style={{ color: palette.body, fontSize: 15, lineHeight: 1.82 }}>
                    {careCards[2].description}
                  </p>
                </Panel>

                <Panel tone="dark" style={{ padding: 28, minHeight: 260 }}>
                  <p
                    style={{
                      color: palette.gold,
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: '0.16em',
                      marginBottom: 16,
                    }}
                  >
                    04
                  </p>
                  <h3
                    style={{
                      fontFamily: serifFont,
                      color: 'white',
                      fontWeight: 300,
                      fontSize: '1.9rem',
                      lineHeight: 1.06,
                      letterSpacing: '-0.03em',
                      marginBottom: 12,
                    }}
                  >
                    {careCards[3].title}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.74)', fontSize: 15, lineHeight: 1.82 }}>
                    {careCards[3].description}
                  </p>
                </Panel>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            position: 'relative',
            padding: `${sectionPadding} 0`,
            background: `linear-gradient(180deg, ${palette.navy} 0%, ${palette.ink} 100%)`,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(circle at 14% 22%, rgba(212,175,55,0.12), transparent 20%), radial-gradient(circle at 86% 10%, rgba(212,175,55,0.08), transparent 16%)',
            }}
          />

          <div
            className="container mx-auto max-w-6xl px-6 sm:px-8 lg:px-16"
            style={{ position: 'relative' }}
          >
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-16">
              <div>
                <Eyebrow light>Patient Reviews</Eyebrow>
                <h2
                  style={{
                    fontFamily: serifFont,
                    color: 'white',
                    fontWeight: 300,
                    fontSize: 'clamp(2.35rem, 4.6vw, 4rem)',
                    lineHeight: 0.98,
                    letterSpacing: '-0.04em',
                    marginBottom: 18,
                    maxWidth: 430,
                  }}
                >
                  Trust should feel human before it feels marketed.
                </h2>
                <p
                  style={{
                    color: palette.whiteSoft,
                    fontSize: 16,
                    lineHeight: 1.9,
                    maxWidth: 420,
                    marginBottom: 26,
                  }}
                >
                  Patients describe the same themes again and again: attentive care, clear
                  reasoning, and treatment that addresses why the issue is there in the first place.
                </p>
                <div className="flex items-center gap-3" style={{ marginBottom: 26 }}>
                  <ReviewStars size={15} />
                  <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13 }}>
                    5.0 from 17 Google reviews
                  </span>
                </div>

                <Panel tone="warm" style={{ padding: 34 }}>
                  <p
                    style={{
                      color: palette.goldDeep,
                      fontSize: 42,
                      lineHeight: 0.8,
                      marginBottom: 14,
                      fontFamily: serifFont,
                    }}
                  >
                    &ldquo;
                  </p>
                  <div
                    style={{
                      fontFamily: serifFont,
                      fontWeight: 300,
                      color: palette.bodyDark,
                      fontSize: 'clamp(1.5rem, 3vw, 2.4rem)',
                      lineHeight: 1.16,
                      letterSpacing: '-0.03em',
                      marginBottom: 18,
                    }}
                  >
                    {featuredReview.text}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 12,
                      paddingTop: 18,
                      borderTop: '1px solid rgba(176,141,87,0.18)',
                    }}
                  >
                    <div>
                      <p style={{ color: palette.bodyDark, fontWeight: 600, marginBottom: 3 }}>
                        {featuredReview.name}
                      </p>
                      <p style={{ color: palette.body, fontSize: 13 }}>Google Review</p>
                    </div>
                    <ReviewStars size={13} />
                  </div>
                </Panel>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {secondaryReviews.map((review, index) => (
                  <Panel
                    key={review.name}
                    tone={index % 2 === 0 ? 'glass' : 'dark'}
                    style={{
                      padding: 26,
                      minHeight: 210,
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                      <div
                        className="flex items-center justify-between"
                        style={{ marginBottom: 16 }}
                      >
                        <ReviewStars size={12} />
                        <span
                          style={{
                            color: index % 2 === 0 ? palette.gold : 'rgba(212,175,55,0.9)',
                            fontSize: 10,
                            fontWeight: 700,
                            letterSpacing: '0.16em',
                            textTransform: 'uppercase',
                          }}
                        >
                          Google
                        </span>
                      </div>
                      <div
                        style={{
                          color: 'rgba(255,255,255,0.82)',
                          fontSize: 15,
                          lineHeight: 1.85,
                          flex: 1,
                          marginBottom: 18,
                        }}
                      >
                        &ldquo;{review.text}&rdquo;
                      </div>
                      <div
                        style={{
                          paddingTop: 16,
                          borderTop: '1px solid rgba(255,255,255,0.08)',
                          color: 'white',
                          fontWeight: 600,
                          fontSize: 14,
                        }}
                      >
                        {review.name}
                      </div>
                    </div>
                  </Panel>
                ))}
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: 32 }}>
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
            padding: `${sectionPadding} 0`,
            background: `linear-gradient(180deg, ${palette.creamSoft} 0%, ${palette.cream} 100%)`,
            overflow: 'hidden',
          }}
        >
          <div className="container mx-auto max-w-6xl px-6 sm:px-8 lg:px-16">
            <div className="mx-auto max-w-3xl text-center" style={{ marginBottom: 46 }}>
              <Eyebrow>Pricing & Clinic Details</Eyebrow>
              <h2
                style={{
                  fontFamily: serifFont,
                  color: palette.bodyDark,
                  fontWeight: 300,
                  fontSize: 'clamp(2.25rem, 4.4vw, 3.75rem)',
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                  marginBottom: 16,
                }}
              >
                Straightforward before you book.
              </h2>
              <p
                style={{
                  color: palette.body,
                  fontSize: 16,
                  lineHeight: 1.9,
                  maxWidth: 640,
                  margin: '0 auto',
                }}
              >
                Pricing, billing support, and clinic logistics should feel reassuring and clear, not
                like a generic pricing table dropped into the page.
              </p>
            </div>

            <Panel tone="paper" style={{ borderRadius: 34, overflow: 'hidden' }}>
              <div className="grid lg:grid-cols-[minmax(320px,0.88fr)_minmax(0,1.12fr)]">
                <div
                  style={{
                    padding: 'clamp(2rem, 5vw, 3rem)',
                    background: `linear-gradient(180deg, ${palette.navyLift} 0%, ${palette.ink} 100%)`,
                    color: 'white',
                  }}
                >
                  <Eyebrow light>Pricing</Eyebrow>
                  <h3
                    style={{
                      fontFamily: serifFont,
                      fontWeight: 300,
                      fontSize: '2.2rem',
                      lineHeight: 1.04,
                      letterSpacing: '-0.03em',
                      marginBottom: 18,
                    }}
                  >
                    No hidden fees.
                  </h3>
                  <p
                    style={{
                      color: 'rgba(255,255,255,0.74)',
                      lineHeight: 1.85,
                      marginBottom: 24,
                    }}
                  >
                    You should know the investment before booking. Billing support is available for
                    Sun Life, Manulife, Green Shield Canada, Blue Cross, Canada Life, WSIB, and
                    more.
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    {pricingOptions.map((item) => (
                      <Panel
                        key={item.label}
                        tone="glass"
                        style={{ padding: 24, borderRadius: 24 }}
                      >
                        <p
                          style={{
                            color: palette.gold,
                            fontSize: 11,
                            fontWeight: 700,
                            letterSpacing: '0.18em',
                            textTransform: 'uppercase',
                            marginBottom: 12,
                          }}
                        >
                          {item.label}
                        </p>
                        <p
                          style={{
                            fontFamily: serifFont,
                            fontWeight: 300,
                            color: 'white',
                            fontSize: '2.75rem',
                            lineHeight: 0.95,
                            letterSpacing: '-0.04em',
                            marginBottom: 8,
                          }}
                        >
                          {item.price}
                        </p>
                        <p
                          style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, fontSize: 14 }}
                        >
                          {item.note}
                        </p>
                      </Panel>
                    ))}
                  </div>
                </div>

                <div style={{ padding: 'clamp(2rem, 5vw, 3rem)' }}>
                  <div className="flex flex-wrap gap-2.5" style={{ marginBottom: 18 }}>
                    <TrustChip>Waterdown & Burlington</TrustChip>
                    <TrustChip>No Referral Required</TrustChip>
                  </div>

                  <h3
                    style={{
                      fontFamily: serifFont,
                      color: palette.bodyDark,
                      fontWeight: 300,
                      fontSize: '2.2rem',
                      lineHeight: 1.04,
                      letterSpacing: '-0.03em',
                      marginBottom: 22,
                    }}
                  >
                    Burlington & Waterdown.
                  </h3>

                  <div style={{ display: 'grid', gap: 20 }}>
                    {clinicDetails.map((detail, index) => (
                      <div key={detail.label}>
                        <DetailRow label={detail.label} value={detail.value} />
                        {index === clinicDetails.length - 1 ? null : null}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Panel>
          </div>
        </div>

        <div
          style={{
            position: 'relative',
            padding: `${sectionPadding} 0`,
            background: `linear-gradient(180deg, ${palette.navy} 0%, ${palette.ink} 100%)`,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(circle at 50% 45%, rgba(212,175,55,0.16), transparent 25%)',
            }}
          />

          <div
            className="container mx-auto max-w-5xl px-6 sm:px-8 lg:px-16"
            style={{ position: 'relative' }}
          >
            <Panel tone="glass" style={{ padding: 'clamp(2rem, 5vw, 3rem)' }}>
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
                <div>
                  <Eyebrow light>Ready to Move Forward?</Eyebrow>
                  <h2
                    style={{
                      fontFamily: serifFont,
                      color: 'white',
                      fontWeight: 300,
                      fontSize: 'clamp(2.25rem, 4.4vw, 3.9rem)',
                      lineHeight: 0.98,
                      letterSpacing: '-0.04em',
                      marginBottom: 16,
                      maxWidth: 560,
                    }}
                  >
                    Book online in under a minute.
                  </h2>
                  <p
                    style={{
                      color: palette.whiteSoft,
                      fontSize: 16,
                      lineHeight: 1.9,
                      maxWidth: 520,
                    }}
                  >
                    No referral required. Choose a time that works for you and start with a
                    thoughtful one-on-one assessment.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <BookingCTA
                    size="lg"
                    className="w-full sm:w-auto !rounded-[14px] sm:!rounded-[10px] !px-8 !py-4 !text-[11px] !tracking-[0.22em] !shadow-[0_22px_60px_-28px_rgba(212,175,55,0.72)]"
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
            </Panel>
          </div>
        </div>
      </main>
    </>
  );
}
