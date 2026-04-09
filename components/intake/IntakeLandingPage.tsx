'use client';

import type { CSSProperties, ComponentType, ReactNode, SVGProps } from 'react';
import {
  ArrowRightIcon,
  ClockIcon,
  CreditCardIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { motion, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BookingCTA from '@/components/intake/BookingCTA';

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
  line: 'rgba(176,141,87,0.1)',
  lineDark: 'rgba(255,255,255,0.08)',
};

const serifFont = '"Playfair Display", var(--font-heading), serif';
const sectionPadding = 'clamp(4rem, 7vw, 6rem)';

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;
type SurfaceTone = 'paper' | 'warm' | 'dark' | 'glass';

const trustBadges = ['Direct Billing', 'No Referral Needed', 'Evening Hours'];

const careHighlights: Array<{
  title: string;
  description: string;
  tone: SurfaceTone;
  size: 'tall' | 'standard';
}> = [
  {
    title: 'One-on-one from start to finish',
    description:
      'Every appointment is directly with Kareem. No assistants, no handoffs, and no split treatment blocks.',
    tone: 'paper',
    size: 'tall',
  },
  {
    title: 'Treatment starts on day one',
    description:
      'The first visit includes treatment when appropriate, not just intake paperwork and explanation.',
    tone: 'paper',
    size: 'standard',
  },
  {
    title: 'Clear reasoning at each visit',
    description: 'Each visit ends with a clear explanation of what was found and what comes next.',
    tone: 'paper',
    size: 'standard',
  },
  {
    title: 'Care matched to the problem',
    description:
      'Manual therapy, dry needling, cupping, and exercise rehabilitation are used where they fit the assessment.',
    tone: 'paper',
    size: 'tall',
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

const clinicDetails: Array<{
  label: string;
  value: string;
  icon: IconComponent;
}> = [
  {
    label: 'Location',
    value: 'Endorphins Health & Wellness Centre\n4631 Palladium Way, Unit 6\nBurlington, ON',
    icon: MapPinIcon,
  },
  {
    label: 'Hours',
    value: 'Mon / Tue / Thu: 1:30 - 8:00 PM\nWed / Fri: 2:00 - 7:30 PM',
    icon: ClockIcon,
  },
  {
    label: 'Billing',
    value:
      'Direct billing support available for Sun Life, Manulife, Green Shield Canada, Blue Cross, Canada Life, WSIB, and more.',
    icon: CreditCardIcon,
  },
];

const serviceAreas = ['Burlington', 'Waterdown', 'Flamborough', 'Carlisle', 'Oakville'];
const directionsHref = 'https://maps.app.goo.gl/JC7uKnd9zW4AJPP49';

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
        border: `1px solid ${light ? 'rgba(255,255,255,0.15)' : 'rgba(176,141,87,0.2)'}`,
        background: light ? 'rgba(255,255,255,0.05)' : '#ffffff',
        color: light ? 'rgba(255,255,255,0.9)' : palette.bodyDark,
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        boxShadow: light ? 'none' : '0 2px 8px -2px rgba(176,141,87,0.1)',
      }}
    >
      {children}
    </span>
  );
}

function Surface({
  children,
  tone = 'paper',
  style,
}: {
  children: ReactNode;
  tone?: SurfaceTone;
  style?: CSSProperties;
}) {
  const tones: Record<SurfaceTone, CSSProperties> = {
    paper: {
      border: '1px solid rgba(176,141,87,0.1)',
      background: '#ffffff',
      boxShadow: '0 8px 30px -6px rgba(24, 39, 75, 0.04)',
      color: palette.bodyDark,
    },
    warm: {
      border: '1px solid rgba(176,141,87,0.15)',
      background: 'linear-gradient(145deg, #fdfbf7, #f7f1e6)',
      boxShadow: '0 4px 20px -4px rgba(176,141,87,0.08)',
      color: palette.bodyDark,
    },
    dark: {
      border: '1px solid rgba(255,255,255,0.08)',
      background: 'linear-gradient(180deg, #16213a, #0f172a)',
      boxShadow: '0 12px 40px -8px rgba(2,6,23,0.4)',
      color: 'white',
    },
    glass: {
      // Kept name for TS but changed behavior to solid matte
      border: '1px solid rgba(176,141,87,0.12)',
      background: '#faf8f4',
      boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
      color: palette.bodyDark,
    },
  };

  return (
    <div
      style={{
        position: 'relative',
        borderRadius: 24,
        ...tones[tone],
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function SecondaryAction({
  href,
  children,
  style,
  className,
}: {
  href: string;
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group relative inline-flex items-center justify-center w-full sm:w-auto overflow-hidden transition-colors ${className || ''}`}
      style={{
        gap: 10,
        padding: '16px 28px',
        borderRadius: 10,
        border: '1px solid rgba(255,255,255,0.15)',
        background: palette.navyLift,
        color: 'white',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        ...style,
      }}
    >
      <span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-130%] group-hover:translate-x-[130%] transition-transform duration-700 ease-out"
        aria-hidden="true"
      />
      <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 10 }}>
        {children}
      </span>
    </a>
  );
}

function Reveal({
  children,
  delay = 0,
  distance = 18,
  direction = 'up',
  scale = 0.995,
  amount = 0.24,
  style,
  className,
}: {
  children: ReactNode;
  delay?: number;
  distance?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  scale?: number;
  amount?: number;
  style?: CSSProperties;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  const { ref, inView } = useInView({
    threshold: amount,
    triggerOnce: true,
    rootMargin: '0px 0px -6% 0px',
  });

  const axis =
    direction === 'left'
      ? { x: -distance, y: 0 }
      : direction === 'right'
        ? { x: distance, y: 0 }
        : direction === 'down'
          ? { x: 0, y: -distance }
          : { x: 0, y: distance };

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? false : 'hidden'}
      animate={shouldReduceMotion || inView ? 'visible' : 'hidden'}
      variants={{
        hidden: {
          opacity: shouldReduceMotion ? 1 : 0,
          x: shouldReduceMotion ? 0 : axis.x,
          y: shouldReduceMotion ? 0 : axis.y,
          scale: shouldReduceMotion ? 1 : scale,
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          transition: {
            duration: shouldReduceMotion ? 0 : 0.68,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export default function IntakeLandingPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <main
        className="intake-page"
        style={{ background: 'linear-gradient(180deg, #faf8f4 0%, #ffffff 15%, #ffffff 100%)' }}
      >
        {/* ---- HERO: editorial split with portrait photo ---- */}
        <section
          className="lg:min-h-screen lg:min-h-[100dvh]"
          style={{ position: 'relative', overflow: 'hidden', background: '#faf8f4' }}
        >
          {/* Subtle warm texture */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(ellipse 80% 60% at 30% 40%, rgba(176,141,87,0.04), transparent 60%)',
            }}
          />

          <div
            className="container mx-auto max-w-6xl px-6 sm:px-8 lg:px-12"
            style={{
              position: 'relative',
              zIndex: 2,
              display: 'flex',
              minHeight: '100%',
              alignItems: 'center',
              paddingTop: 'clamp(5.75rem, 12vw, 8.25rem)',
              paddingBottom: 'clamp(3.5rem, 7vw, 5.5rem)',
            }}
          >
            <div className="grid w-full items-start gap-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-20">
              {/* Left: content */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-2.5"
                  style={{ marginBottom: 22 }}
                >
                  <span className="relative flex h-[6px] w-[6px]">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-[6px] w-[6px] bg-emerald-500"></span>
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: '#059669',
                    }}
                  >
                    Accepting New Patients
                  </span>
                </motion.div>

                <motion.h1
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    fontFamily: serifFont,
                    fontSize: 'clamp(2.85rem, 6vw, 5rem)',
                    fontWeight: 400,
                    lineHeight: 1.03,
                    letterSpacing: '-0.03em',
                    color: palette.navyLift,
                    marginBottom: 22,
                    maxWidth: 720,
                  }}
                >
                  Book your assessment.
                  <br />
                  <span style={{ color: palette.goldDeep, fontStyle: 'italic' }}>
                    Start treatment with a plan.
                  </span>
                </motion.h1>

                <motion.p
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    maxWidth: 560,
                    color: palette.body,
                    fontSize: 'clamp(1rem, 1.8vw, 1.1rem)',
                    lineHeight: 1.78,
                    marginBottom: 26,
                  }}
                >
                  One-on-one physiotherapy with Kareem Hassanein to find the root cause, start
                  treatment when appropriate, and leave your first visit with clear next steps.
                </motion.p>

                <Reveal delay={0.24} className="lg:hidden" style={{ marginBottom: 26 }}>
                  <Surface
                    tone="paper"
                    style={{
                      padding: 14,
                      borderRadius: 18,
                      border: '1px solid rgba(176,141,87,0.16)',
                      boxShadow: '0 18px 38px -24px rgba(15,23,42,0.25)',
                    }}
                  >
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '88px 1fr',
                        gap: 14,
                        alignItems: 'center',
                      }}
                    >
                      <img
                        src="/images/professional-photo-kareem-hassanein-registered-physiotherapist-burlington-waterdown-flamborough-oakville-carlisle.png"
                        alt="Kareem Hassanein, Registered Physiotherapist"
                        width={176}
                        height={242}
                        style={{
                          width: 88,
                          height: 108,
                          borderRadius: 14,
                          objectFit: 'cover',
                          objectPosition: 'center top',
                          display: 'block',
                        }}
                      />
                      <div>
                        <p
                          style={{
                            fontFamily: serifFont,
                            fontSize: 19,
                            lineHeight: 1.1,
                            color: palette.bodyDark,
                            marginBottom: 6,
                          }}
                        >
                          Kareem Hassanein
                        </p>
                        <p
                          style={{
                            fontSize: 12,
                            fontWeight: 700,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: palette.goldDeep,
                            marginBottom: 6,
                          }}
                        >
                          Registered Physiotherapist
                        </p>
                        <p
                          style={{
                            color: palette.body,
                            fontSize: 12,
                            lineHeight: 1.6,
                            marginBottom: 10,
                          }}
                        >
                          MSc PT, BSc Kin and CPO #20079
                        </p>
                        <div
                          className="flex items-center gap-2"
                          style={{ color: palette.bodyDark, fontSize: 12, fontWeight: 600 }}
                        >
                          <ReviewStars size={12} />
                          <span>5.0 Google rating</span>
                        </div>
                      </div>
                    </div>
                  </Surface>
                </Reveal>

                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-3 sm:flex-row sm:gap-4"
                  style={{ marginBottom: 28 }}
                >
                  <BookingCTA
                    size="lg"
                    className="w-full sm:w-auto !rounded-[12px] !px-8 !py-4 !text-[11px] !tracking-[0.18em] transition-transform hover:scale-[1.02] shadow-xl shadow-navy/10"
                  >
                    Book Assessment
                    <ArrowRightIcon width={14} height={14} aria-hidden="true" />
                  </BookingCTA>
                  <a
                    href="tel:+19056346000"
                    className="inline-flex items-center justify-center gap-2.5 transition-transform hover:scale-[1.02]"
                    style={{
                      padding: '16px 28px',
                      borderRadius: 12,
                      background: 'rgba(176,141,87,0.1)',
                      border: '1px solid rgba(176,141,87,0.2)',
                      color: palette.navyLift,
                      fontSize: 13,
                      fontWeight: 700,
                    }}
                  >
                    <PhoneIcon
                      width={16}
                      height={16}
                      aria-hidden="true"
                      style={{ color: palette.goldDeep }}
                    />
                    (905) 634-6000
                  </a>
                </motion.div>

                {/* Trust row */}
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.45 }}
                  className="flex flex-wrap items-center gap-3"
                >
                  <div
                    className="flex items-center gap-2"
                    style={{
                      padding: '10px 14px',
                      borderRadius: 999,
                      background: '#ffffff',
                      border: '1px solid rgba(176,141,87,0.16)',
                      boxShadow: '0 12px 28px -22px rgba(15,23,42,0.35)',
                    }}
                  >
                    <ReviewStars size={14} />
                    <span style={{ fontSize: 13, fontWeight: 600, color: palette.bodyDark }}>
                      5.0 from 17 Google reviews
                    </span>
                  </div>
                  {trustBadges.map((badge) => (
                    <TrustChip key={badge}>{badge}</TrustChip>
                  ))}
                </motion.div>
              </div>

              {/* Right: professional portrait */}
              <motion.div
                className="hidden lg:block"
                initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                style={{ position: 'relative' }}
              >
                {/* Gold accent behind photo */}
                <div
                  style={{
                    position: 'absolute',
                    top: 20,
                    left: 20,
                    right: -8,
                    bottom: -8,
                    borderRadius: 24,
                    background: `linear-gradient(135deg, ${palette.goldDeep}18, ${palette.gold}10)`,
                  }}
                />

                <div
                  style={{
                    position: 'relative',
                    width: 340,
                    borderRadius: 20,
                    overflow: 'hidden',
                    boxShadow: '0 32px 72px -20px rgba(26,32,54,0.18)',
                  }}
                >
                  <img
                    src="/images/professional-photo-kareem-hassanein-registered-physiotherapist-burlington-waterdown-flamborough-oakville-carlisle.png"
                    alt="Kareem Hassanein, Registered Physiotherapist in Burlington"
                    width={826}
                    height={1169}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>

                {/* Credentials floating tag */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 32,
                    left: -24,
                    background: 'white',
                    borderRadius: 14,
                    padding: '14px 20px',
                    boxShadow: '0 12px 40px -12px rgba(26,32,54,0.12)',
                    maxWidth: 220,
                  }}
                >
                  <p
                    style={{
                      fontFamily: serifFont,
                      fontWeight: 400,
                      fontSize: 16,
                      color: palette.bodyDark,
                      lineHeight: 1.3,
                      marginBottom: 4,
                    }}
                  >
                    Kareem Hassanein
                  </p>
                  <p
                    style={{
                      fontSize: 12,
                      color: palette.goldDeep,
                      fontWeight: 600,
                      letterSpacing: '0.04em',
                    }}
                  >
                    Registered Physiotherapist
                  </p>
                  <p style={{ fontSize: 11, color: palette.body, marginTop: 4 }}>
                    MSc PT, BSc Kin &middot; CPO #20079
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ---- WHAT TO EXPECT ---- */}
        <div
          className="container mx-auto max-w-5xl px-6 sm:px-8 lg:px-16"
          style={{ paddingTop: sectionPadding, paddingBottom: sectionPadding }}
        >
          <Reveal>
            <Eyebrow>Your First Visit</Eyebrow>
            <h2
              style={{
                fontFamily: serifFont,
                color: palette.bodyDark,
                fontWeight: 300,
                fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginBottom: 12,
                maxWidth: 480,
              }}
            >
              Assessment, treatment, and a clear plan
            </h2>
            <p
              style={{
                color: palette.body,
                fontSize: 16,
                lineHeight: 1.85,
                maxWidth: 520,
                marginBottom: 56,
              }}
            >
              You are not booking a generic consult. Your first visit is built to identify the
              problem, begin treatment when appropriate, and explain what comes next.
            </p>
          </Reveal>

          <div
            className="grid gap-y-16 gap-x-20 sm:grid-cols-2 lg:items-start"
            style={{ marginTop: 24 }}
          >
            {careHighlights.map((item, index) => (
              <Reveal
                key={item.title}
                delay={0.08 * index}
                style={{ marginTop: index % 2 !== 0 ? 'clamp(0rem, 5vw, 4rem)' : 0 }}
              >
                <div style={{ paddingLeft: 28, borderLeft: `2px solid rgba(176,141,87,0.3)` }}>
                  <p
                    style={{
                      color: palette.goldDeep,
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: '0.18em',
                      marginBottom: 16,
                    }}
                  >
                    0{index + 1}
                  </p>
                  <h3
                    style={{
                      fontFamily: serifFont,
                      color: palette.navyLift,
                      fontWeight: 400,
                      fontSize: '1.35rem',
                      lineHeight: 1.3,
                      letterSpacing: '-0.01em',
                      marginBottom: 14,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: palette.body, fontSize: 15, lineHeight: 1.8 }}>
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ---- REVIEWS ---- full-width warm tint for visual rhythm */}
        <div
          style={{
            background:
              'linear-gradient(180deg, rgba(247,241,230,0.35) 0%, rgba(247,241,230,0.5) 50%, rgba(247,241,230,0.35) 100%)',
            marginTop: 'clamp(2rem, 4vw, 3rem)',
          }}
        >
          <div
            className="container mx-auto max-w-5xl px-6 sm:px-8 lg:px-16"
            style={{ paddingTop: sectionPadding, paddingBottom: sectionPadding }}
          >
            <Reveal>
              <Eyebrow>Patient Reviews</Eyebrow>
              <h2
                style={{
                  fontFamily: serifFont,
                  color: palette.bodyDark,
                  fontWeight: 300,
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  marginBottom: 12,
                  maxWidth: 460,
                }}
              >
                What patients say
              </h2>
              <div className="flex flex-wrap items-center gap-3" style={{ marginBottom: 56 }}>
                <ReviewStars size={16} />
                <span style={{ color: palette.body, fontSize: 14 }}>
                  5.0 from 17 Google reviews
                </span>
              </div>
            </Reveal>

            <div className="grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review, index) => (
                <Reveal key={review.name} delay={0.04 * index}>
                  <div>
                    <p
                      style={{
                        color: palette.goldDeep,
                        fontSize: 32,
                        lineHeight: 0.8,
                        fontFamily: serifFont,
                        marginBottom: 14,
                      }}
                    >
                      &ldquo;
                    </p>
                    <p
                      style={{
                        color: palette.body,
                        fontSize: 15,
                        lineHeight: 1.85,
                        marginBottom: 18,
                      }}
                    >
                      {review.text}
                    </p>
                    <p style={{ color: palette.bodyDark, fontWeight: 600, fontSize: 14 }}>
                      {review.name}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.18} style={{ marginTop: 48 }}>
              <a
                href="https://www.google.com/maps/place/Endorphins+Health+%26+Wellness+Centre"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  color: palette.goldDeep,
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                }}
              >
                Read all reviews on Google
                <ArrowRightIcon width={14} height={14} aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </div>

        {/* ---- PRICING & DETAILS ---- */}
        <div
          className="container mx-auto max-w-5xl px-6 sm:px-8 lg:px-16"
          style={{ paddingTop: sectionPadding, paddingBottom: sectionPadding }}
        >
          <div className="grid gap-20 lg:grid-cols-2">
            {/* Pricing */}
            <Reveal>
              <div>
                <Eyebrow>Fees</Eyebrow>
                <h2
                  style={{
                    fontFamily: serifFont,
                    color: palette.bodyDark,
                    fontWeight: 300,
                    fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                    lineHeight: 1.15,
                    letterSpacing: '-0.02em',
                    marginBottom: 36,
                  }}
                >
                  Clear pricing before you book
                </h2>

                <div className="grid gap-10 sm:grid-cols-2" style={{ marginBottom: 32 }}>
                  {pricingOptions.map((item) => (
                    <div key={item.label}>
                      <p
                        style={{
                          color: palette.goldDeep,
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: '0.15em',
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
                          color: palette.bodyDark,
                          fontSize: '2.8rem',
                          lineHeight: 1,
                          letterSpacing: '-0.03em',
                          marginBottom: 8,
                        }}
                      >
                        {item.price}
                      </p>
                      <p style={{ color: palette.body, fontSize: 14, lineHeight: 1.6 }}>
                        {item.note}
                      </p>
                    </div>
                  ))}
                </div>

                <p style={{ color: palette.body, fontSize: 14, lineHeight: 1.85 }}>
                  Direct billing available for Sun Life, Manulife, Green Shield Canada, Blue Cross,
                  Canada Life, WSIB, and more.
                </p>
                <p style={{ color: palette.body, fontSize: 13, lineHeight: 1.75, marginTop: 12 }}>
                  All prices shown in CAD.
                </p>
              </div>
            </Reveal>

            {/* Clinic details */}
            <Reveal delay={0.06}>
              <div>
                <Eyebrow>Clinic Details</Eyebrow>
                <h2
                  style={{
                    fontFamily: serifFont,
                    color: palette.bodyDark,
                    fontWeight: 300,
                    fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                    lineHeight: 1.15,
                    letterSpacing: '-0.02em',
                    marginBottom: 36,
                  }}
                >
                  Burlington & Waterdown
                </h2>

                <div style={{ display: 'grid', gap: 32 }}>
                  {clinicDetails.map((detail) => (
                    <div
                      key={detail.label}
                      style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}
                    >
                      <detail.icon
                        width={20}
                        height={20}
                        aria-hidden="true"
                        style={{ color: palette.goldDeep, flexShrink: 0, marginTop: 3 }}
                      />
                      <div>
                        <p
                          style={{
                            color: palette.goldDeep,
                            fontSize: 11,
                            fontWeight: 700,
                            letterSpacing: '0.15em',
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
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2.5" style={{ marginTop: 28 }}>
                  {serviceAreas.map((area) => (
                    <span
                      key={area}
                      style={{
                        padding: '7px 14px',
                        borderRadius: 999,
                        background: 'rgba(176,141,87,0.06)',
                        color: palette.body,
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {area}
                    </span>
                  ))}
                </div>

                <div style={{ marginTop: 28 }}>
                  <SecondaryAction
                    href={directionsHref}
                    style={{
                      width: '100%',
                      background: palette.navyLift,
                      borderColor: 'rgba(15,23,42,0.08)',
                    }}
                  >
                    Get Directions
                    <ArrowRightIcon width={14} height={14} aria-hidden="true" />
                  </SecondaryAction>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ---- BOTTOM CTA ---- dark for contrast and visual weight */}
        <div style={{ background: palette.navy, marginTop: 'clamp(2rem, 4vw, 3rem)' }}>
          <div
            className="container mx-auto max-w-5xl px-6 sm:px-8 lg:px-16"
            style={{ paddingTop: sectionPadding, paddingBottom: sectionPadding }}
          >
            <Reveal>
              <div className="lg:flex lg:items-end lg:justify-between lg:gap-16">
                <div style={{ marginBottom: 28 }}>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 12,
                      marginBottom: 18,
                    }}
                  >
                    <span
                      style={{
                        width: 34,
                        height: 1,
                        background: 'linear-gradient(90deg, rgba(212,175,55,0.6), transparent)',
                      }}
                    />
                    <span
                      style={{
                        color: 'rgba(212,175,55,0.9)',
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: '0.28em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Book Your Assessment
                    </span>
                  </div>
                  <h2
                    style={{
                      fontFamily: serifFont,
                      color: 'white',
                      fontWeight: 300,
                      fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                      lineHeight: 1.1,
                      letterSpacing: '-0.02em',
                      marginBottom: 14,
                      maxWidth: 440,
                    }}
                  >
                    Ready to get moving again?
                  </h2>
                  <p
                    style={{
                      color: 'rgba(255,255,255,0.55)',
                      fontSize: 16,
                      lineHeight: 1.85,
                      maxWidth: 460,
                    }}
                  >
                    Book online in under a minute or call the clinic directly. No referral required.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row" style={{ flexShrink: 0 }}>
                  <BookingCTA
                    size="lg"
                    className="w-full sm:w-auto !rounded-[12px] !px-8 !py-4 !text-[11px] !tracking-[0.22em] transition-transform hover:scale-[1.02] shadow-xl shadow-navyLift"
                  >
                    Book Assessment
                    <ArrowRightIcon width={14} height={14} aria-hidden="true" />
                  </BookingCTA>
                  <a
                    href="tel:+19056346000"
                    className="inline-flex items-center justify-center gap-2.5 transition-transform hover:scale-[1.02]"
                    style={{
                      padding: '16px 24px',
                      borderRadius: 12,
                      border: '1px solid rgba(255,255,255,0.15)',
                      background: 'rgba(255,255,255,0.02)',
                      color: 'white',
                      fontSize: 13,
                      fontWeight: 700,
                    }}
                  >
                    <PhoneIcon
                      width={15}
                      height={15}
                      aria-hidden="true"
                      style={{ color: palette.gold }}
                    />
                    (905) 634-6000
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </main>
    </>
  );
}
