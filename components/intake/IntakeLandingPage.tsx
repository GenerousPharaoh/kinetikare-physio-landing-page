'use client';

import type { CSSProperties, ComponentType, ReactNode, SVGProps } from 'react';
import { useRef } from 'react';
import {
  ArrowRightIcon,
  ClockIcon,
  CreditCardIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BookingCTA from '@/components/intake/BookingCTA';

/* ─── palette & tokens ─── */
const p = {
  ink: '#1a1a2e',
  navy: '#0f172a',
  gold: '#D4AF37',
  goldDeep: '#B08D57',
  goldMuted: '#C4A265',
  cream: '#FAF6EE',
  creamWarm: '#F5EFE3',
  creamSoft: '#FFFCF7',
  warmWhite: '#FEFDFB',
  body: '#5a5a6e',
  bodyDark: '#2d2d3f',
  white: '#ffffff',
};

const serifFont = '"Playfair Display", Georgia, "Times New Roman", serif';

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

/* ─── data arrays (unchanged content) ─── */
const careHighlights = [
  {
    title: 'One-on-one from start to finish',
    description: 'Every appointment is directly with Kareem. No assistants, no handoffs, and no split treatment blocks.',
  },
  {
    title: 'Treatment starts on day one',
    description: 'The first visit includes treatment when appropriate, not just intake paperwork and explanation.',
  },
  {
    title: 'Clear reasoning at each visit',
    description: 'Each visit ends with a clear explanation of what was found and what comes next.',
  },
  {
    title: 'Care matched to the problem',
    description: 'Manual therapy, dry needling, cupping, and exercise rehabilitation are used where they fit the assessment.',
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
  { label: 'Initial Assessment', price: '$130', note: 'Assessment + treatment' },
  { label: 'Follow-up Visit', price: '$90', note: '30-minute session' },
];

const clinicDetails: Array<{ label: string; value: string; icon: IconComponent }> = [
  {
    label: 'Location',
    value: 'Endorphins Health & Wellness Centre\n4631 Palladium Way, Unit 6\nBurlington, ON',
    icon: MapPinIcon,
  },
  {
    label: 'Hours',
    value: 'Mon / Tue / Thu: 1:30 \u2013 8:00 PM\nWed / Fri: 2:00 \u2013 7:30 PM',
    icon: ClockIcon,
  },
  {
    label: 'Billing',
    value: 'Direct billing available for Sun Life, Manulife, Green Shield Canada, Blue Cross, Canada Life, WSIB, and more.',
    icon: CreditCardIcon,
  },
];

const serviceAreas = ['Burlington', 'Waterdown', 'Flamborough', 'Carlisle', 'Oakville'];

/* ─── sub-components ─── */

function ReviewStars({ size = 14 }: { size?: number }) {
  return (
    <span style={{ display: 'inline-flex', gap: 3 }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 20 20" fill={p.gold} aria-hidden="true">
          <path d="M10 1l2.39 4.84L17.3 6.7l-3.54 3.46.84 4.88L10 12.77l-4.6 2.27.84-4.88L2.7 6.7l4.91-.86L10 1z" />
        </svg>
      ))}
    </span>
  );
}

function Reveal({
  children,
  delay = 0,
  distance = 22,
  style,
  className,
}: {
  children: ReactNode;
  delay?: number;
  distance?: number;
  style?: CSSProperties;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  const { ref, inView } = useInView({ threshold: 0.18, triggerOnce: true, rootMargin: '0px 0px -8% 0px' });

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? false : 'hidden'}
      animate={shouldReduceMotion || inView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, y: distance },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

function GoldRule({ width = 48, align = 'left' }: { width?: number; align?: 'left' | 'center' }) {
  return (
    <div
      style={{
        width,
        height: 2,
        borderRadius: 1,
        background: `linear-gradient(90deg, ${p.gold}, ${p.goldDeep}80)`,
        margin: align === 'center' ? '0 auto' : undefined,
        marginBottom: 28,
      }}
    />
  );
}

/* ─── main component ─── */
export default function IntakeLandingPage() {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroImageScale = useSpring(useTransform(heroProgress, [0, 1], [1, 1.08]), {
    stiffness: 100,
    damping: 30,
    mass: 0.3,
  });
  const heroImageY = useSpring(useTransform(heroProgress, [0, 1], [0, 60]), {
    stiffness: 100,
    damping: 30,
    mass: 0.3,
  });

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

        @media (prefers-reduced-motion: reduce) {
          .intake-page .animate-ping {
            display: none !important;
          }
        }
      `}</style>

      <main
        className="intake-page"
        style={{
          background: `linear-gradient(180deg, ${p.cream} 0%, ${p.warmWhite} 12%, ${p.white} 28%, ${p.white} 100%)`,
        }}
      >
        {/* ═══════════════════════ HERO ═══════════════════════ */}
        <section
          ref={heroRef}
          className="intake-hero"
          style={{
            position: 'relative',
            overflow: 'hidden',
            background: p.cream,
          }}
        >
          {/* Warm radial texture */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse 90% 70% at 25% 35%, rgba(212,175,55,0.06), transparent 55%)',
              pointerEvents: 'none',
            }}
          />
          {/* Fine grain dot overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.028,
              backgroundImage: 'radial-gradient(rgba(45,45,63,0.7) 0.6px, transparent 0.6px)',
              backgroundSize: '14px 14px',
              pointerEvents: 'none',
            }}
          />
          {/* Bottom fade into content */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 180,
              background: `linear-gradient(to bottom, transparent, ${p.cream})`,
              pointerEvents: 'none',
              zIndex: 3,
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 2,
              maxWidth: 1200,
              margin: '0 auto',
              padding: '0 clamp(1.5rem, 4vw, 3rem)',
              display: 'flex',
              minHeight: '100%',
              alignItems: 'center',
              paddingTop: 'clamp(7rem, 13vh, 10rem)',
              paddingBottom: 'clamp(6rem, 10vh, 8rem)',
            }}
          >
            <div
              style={{
                display: 'grid',
                width: '100%',
                alignItems: 'center',
                gap: 'clamp(2.5rem, 5vw, 5rem)',
                gridTemplateColumns: '1fr',
              }}
              className="lg:!grid-cols-[1fr_380px]"
            >
              {/* Left: content */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {/* Accepting badge */}
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    marginBottom: 36,
                  }}
                >
                  <span className="relative flex" style={{ width: 7, height: 7 }}>
                    <span
                      className="animate-ping"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '50%',
                        backgroundColor: '#34d399',
                        opacity: 0.6,
                      }}
                    />
                    <span
                      style={{
                        position: 'relative',
                        display: 'block',
                        width: 7,
                        height: 7,
                        borderRadius: '50%',
                        backgroundColor: '#10b981',
                      }}
                    />
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: '#059669',
                    }}
                  >
                    Accepting New Patients
                  </span>
                </motion.div>

                {/* Main heading */}
                <motion.h1
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 36 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    fontFamily: serifFont,
                    fontSize: 'clamp(2.8rem, 5.5vw, 4.6rem)',
                    fontWeight: 300,
                    lineHeight: 1.08,
                    letterSpacing: '-0.025em',
                    color: p.ink,
                    marginBottom: 28,
                  }}
                >
                  Book Your<br />
                  <span style={{ color: p.goldDeep }}>Assessment</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    maxWidth: 460,
                    color: p.body,
                    fontSize: 'clamp(1rem, 1.6vw, 1.12rem)',
                    lineHeight: 1.85,
                    marginBottom: 40,
                  }}
                >
                  One-on-one physiotherapy focused on finding the root cause. Sports injuries, knee and hip pain, dry needling, cupping, and exercise rehabilitation.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-3 sm:flex-row sm:gap-4"
                  style={{ marginBottom: 40 }}
                >
                  <BookingCTA
                    size="lg"
                    className="w-full sm:w-auto !rounded-[10px] !px-9 !py-4 !text-[11px] !tracking-[0.2em] transition-transform hover:scale-[1.02]"
                    style={{ boxShadow: '0 8px 32px -8px rgba(176,141,87,0.35)' }}
                  >
                    Book Assessment
                    <ArrowRightIcon width={14} height={14} aria-hidden="true" />
                  </BookingCTA>
                  <a
                    href="tel:+19056346000"
                    className="inline-flex items-center justify-center gap-2.5 transition-all hover:scale-[1.02]"
                    style={{
                      padding: '16px 24px',
                      borderRadius: 10,
                      background: p.warmWhite,
                      border: `1px solid rgba(176,141,87,0.2)`,
                      color: p.ink,
                      fontSize: 13,
                      fontWeight: 700,
                    }}
                  >
                    <PhoneIcon width={16} height={16} aria-hidden="true" style={{ color: p.goldDeep }} />
                    (905) 634-6000
                  </a>
                </motion.div>

                {/* Trust row: stars + badges */}
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="flex flex-wrap items-center gap-x-5 gap-y-3"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <ReviewStars size={13} />
                    <span style={{ fontSize: 13, fontWeight: 600, color: p.bodyDark }}>5.0 from 17 reviews</span>
                  </div>
                  <span style={{ width: 1, height: 16, background: 'rgba(176,141,87,0.2)' }} className="hidden sm:block" />
                  {['Direct Billing', 'No Referral Needed', 'Evening Hours'].map((badge) => (
                    <span
                      key={badge}
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        color: p.body,
                        letterSpacing: '0.04em',
                      }}
                    >
                      {badge}
                    </span>
                  ))}
                </motion.div>

                {/* Credentials line */}
                <motion.p
                  initial={shouldReduceMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  style={{
                    marginTop: 20,
                    fontSize: 12,
                    color: p.goldDeep,
                    fontWeight: 500,
                    letterSpacing: '0.06em',
                  }}
                >
                  Registered Physiotherapist, MSc PT, BSc Kin &middot; CPO #20079
                </motion.p>
              </div>

              {/* Right: professional portrait */}
              <motion.div
                className="hidden lg:block"
                initial={shouldReduceMotion ? false : { opacity: 0, x: 24, scale: 0.97 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                style={{ position: 'relative' }}
              >
                {/* Gold accent frame offset */}
                <div
                  style={{
                    position: 'absolute',
                    top: 24,
                    left: 24,
                    right: -12,
                    bottom: -12,
                    borderRadius: 20,
                    border: `1.5px solid ${p.goldDeep}25`,
                    background: `linear-gradient(145deg, ${p.goldDeep}0a, ${p.gold}06)`,
                  }}
                />

                <motion.div
                  style={{
                    position: 'relative',
                    width: 360,
                    borderRadius: 18,
                    overflow: 'hidden',
                    boxShadow: '0 40px 80px -24px rgba(26,26,46,0.2), 0 16px 32px -12px rgba(176,141,87,0.1)',
                    scale: heroImageScale,
                    y: heroImageY,
                  }}
                >
                  <img
                    src="/images/professional-photo-kareem-hassanein-registered-physiotherapist-burlington-waterdown-flamborough-oakville-carlisle.png"
                    alt="Kareem Hassanein, Registered Physiotherapist in Burlington"
                    width={826}
                    height={1169}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />

                  {/* Warm vignette overlay on photo bottom */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '35%',
                      background: 'linear-gradient(to top, rgba(250,246,238,0.6), transparent)',
                      pointerEvents: 'none',
                    }}
                  />
                </motion.div>

                {/* Floating credentials chip */}
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    position: 'absolute',
                    bottom: 40,
                    left: -32,
                    background: p.white,
                    borderRadius: 14,
                    padding: '16px 22px',
                    boxShadow: '0 16px 48px -16px rgba(26,26,46,0.14)',
                    border: `1px solid rgba(176,141,87,0.1)`,
                    maxWidth: 200,
                  }}
                >
                  <p
                    style={{
                      fontFamily: serifFont,
                      fontWeight: 400,
                      fontSize: 16,
                      color: p.bodyDark,
                      lineHeight: 1.3,
                      marginBottom: 4,
                    }}
                  >
                    Kareem Hassanein
                  </p>
                  <p style={{ fontSize: 11, color: p.goldDeep, fontWeight: 600, letterSpacing: '0.05em' }}>
                    Registered Physiotherapist
                  </p>
                  <p style={{ fontSize: 11, color: p.body, marginTop: 4 }}>
                    MSc PT, BSc Kin &middot; CPO #20079
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ WHAT TO EXPECT ═══════════════════════ */}
        <div
          style={{
            maxWidth: 960,
            margin: '0 auto',
            padding: '0 clamp(1.5rem, 4vw, 3rem)',
            paddingTop: 'clamp(5rem, 10vw, 8rem)',
            paddingBottom: 'clamp(5rem, 8vw, 7rem)',
          }}
        >
          <Reveal>
            <GoldRule />
            <h2
              style={{
                fontFamily: serifFont,
                color: p.bodyDark,
                fontWeight: 300,
                fontSize: 'clamp(1.9rem, 3.5vw, 2.7rem)',
                lineHeight: 1.12,
                letterSpacing: '-0.02em',
                marginBottom: 14,
                maxWidth: 460,
              }}
            >
              What your first visit looks like
            </h2>
            <p
              style={{
                color: p.body,
                fontSize: 16,
                lineHeight: 1.85,
                maxWidth: 500,
                marginBottom: 64,
              }}
            >
              Your appointment is built around assessment, treatment, and a clear explanation of what comes next.
            </p>
          </Reveal>

          <div
            className="grid gap-y-16 gap-x-20 sm:grid-cols-2"
            style={{ marginTop: 0 }}
          >
            {careHighlights.map((item, index) => (
              <Reveal
                key={item.title}
                delay={0.08 * index}
                style={{
                  marginTop: index % 2 !== 0 ? 'clamp(0px, 4vw, 3rem)' : 0,
                }}
              >
                <div
                  style={{
                    paddingLeft: 28,
                    borderLeft: `2px solid ${p.goldDeep}40`,
                  }}
                >
                  <p
                    style={{
                      color: p.goldDeep,
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: '0.2em',
                      marginBottom: 16,
                    }}
                  >
                    0{index + 1}
                  </p>
                  <h3
                    style={{
                      fontFamily: serifFont,
                      color: p.ink,
                      fontWeight: 400,
                      fontSize: '1.3rem',
                      lineHeight: 1.3,
                      letterSpacing: '-0.01em',
                      marginBottom: 14,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: p.body, fontSize: 15, lineHeight: 1.85 }}>
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ═══════════════════════ REVIEWS ═══════════════════════ */}
        {/* Gently tinted section with gradient fade in/out */}
        <div
          style={{
            background: `linear-gradient(180deg,
              ${p.white} 0%,
              ${p.creamWarm}50 8%,
              ${p.creamWarm}60 50%,
              ${p.creamWarm}50 92%,
              ${p.white} 100%
            )`,
          }}
        >
          <div
            style={{
              maxWidth: 960,
              margin: '0 auto',
              padding: '0 clamp(1.5rem, 4vw, 3rem)',
              paddingTop: 'clamp(5rem, 8vw, 7rem)',
              paddingBottom: 'clamp(5rem, 8vw, 7rem)',
            }}
          >
            <Reveal>
              <GoldRule />
              <h2
                style={{
                  fontFamily: serifFont,
                  color: p.bodyDark,
                  fontWeight: 300,
                  fontSize: 'clamp(1.9rem, 3.5vw, 2.7rem)',
                  lineHeight: 1.12,
                  letterSpacing: '-0.02em',
                  marginBottom: 12,
                  maxWidth: 420,
                }}
              >
                What patients say
              </h2>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 64,
                }}
              >
                <ReviewStars size={15} />
                <span style={{ color: p.body, fontSize: 14 }}>5.0 from 17 Google reviews</span>
              </div>
            </Reveal>

            <div className="grid gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review, index) => (
                <Reveal key={review.name} delay={0.05 * index}>
                  <div>
                    <p
                      style={{
                        color: p.gold,
                        fontSize: 36,
                        lineHeight: 0.7,
                        fontFamily: serifFont,
                        marginBottom: 16,
                        fontWeight: 400,
                      }}
                    >
                      &ldquo;
                    </p>
                    <p
                      style={{
                        color: p.body,
                        fontSize: 15,
                        lineHeight: 1.9,
                        marginBottom: 20,
                      }}
                    >
                      {review.text}
                    </p>
                    <p
                      style={{
                        color: p.bodyDark,
                        fontWeight: 600,
                        fontSize: 14,
                        letterSpacing: '0.01em',
                      }}
                    >
                      {review.name}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2} style={{ marginTop: 56 }}>
              <a
                href="https://www.google.com/maps/place/Endorphins+Health+%26+Wellness+Centre"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  color: p.goldDeep,
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

        {/* ═══════════════════════ PRICING & DETAILS ═══════════════════════ */}
        <div
          style={{
            maxWidth: 960,
            margin: '0 auto',
            padding: '0 clamp(1.5rem, 4vw, 3rem)',
            paddingTop: 'clamp(6rem, 10vw, 8rem)',
            paddingBottom: 'clamp(5rem, 8vw, 7rem)',
          }}
        >
          <div className="grid gap-20 lg:grid-cols-2">
            {/* Pricing */}
            <Reveal>
              <div>
                <GoldRule />
                <h2
                  style={{
                    fontFamily: serifFont,
                    color: p.bodyDark,
                    fontWeight: 300,
                    fontSize: 'clamp(1.7rem, 3vw, 2.3rem)',
                    lineHeight: 1.12,
                    letterSpacing: '-0.02em',
                    marginBottom: 40,
                  }}
                >
                  Transparent pricing
                </h2>

                <div className="grid gap-10 sm:grid-cols-2" style={{ marginBottom: 36 }}>
                  {pricingOptions.map((item) => (
                    <div key={item.label}>
                      <p
                        style={{
                          color: p.goldDeep,
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: '0.18em',
                          textTransform: 'uppercase',
                          marginBottom: 14,
                        }}
                      >
                        {item.label}
                      </p>
                      <p
                        style={{
                          fontFamily: serifFont,
                          fontWeight: 300,
                          color: p.ink,
                          fontSize: 'clamp(2.4rem, 4vw, 3rem)',
                          lineHeight: 1,
                          letterSpacing: '-0.03em',
                          marginBottom: 8,
                        }}
                      >
                        {item.price}
                      </p>
                      <p style={{ color: p.body, fontSize: 14, lineHeight: 1.65 }}>
                        {item.note}
                      </p>
                    </div>
                  ))}
                </div>

                <p style={{ color: p.body, fontSize: 14, lineHeight: 1.85 }}>
                  Direct billing available for Sun Life, Manulife, Green Shield Canada, Blue Cross, Canada Life, WSIB, and more.
                </p>
              </div>
            </Reveal>

            {/* Clinic details */}
            <Reveal delay={0.08}>
              <div>
                <GoldRule />
                <h2
                  style={{
                    fontFamily: serifFont,
                    color: p.bodyDark,
                    fontWeight: 300,
                    fontSize: 'clamp(1.7rem, 3vw, 2.3rem)',
                    lineHeight: 1.12,
                    letterSpacing: '-0.02em',
                    marginBottom: 40,
                  }}
                >
                  Burlington &amp; Waterdown
                </h2>

                <div style={{ display: 'grid', gap: 36 }}>
                  {clinicDetails.map((detail) => (
                    <div
                      key={detail.label}
                      style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}
                    >
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 38,
                          height: 38,
                          borderRadius: '50%',
                          background: `${p.goldDeep}12`,
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      >
                        <detail.icon
                          width={18}
                          height={18}
                          aria-hidden="true"
                          style={{ color: p.goldDeep }}
                        />
                      </span>
                      <div>
                        <p
                          style={{
                            color: p.goldDeep,
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
                            color: p.body,
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

                <div
                  className="flex flex-wrap gap-2.5"
                  style={{ marginTop: 32 }}
                >
                  {serviceAreas.map((area) => (
                    <span
                      key={area}
                      style={{
                        padding: '8px 16px',
                        borderRadius: 999,
                        background: `${p.goldDeep}0a`,
                        color: p.body,
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ═══════════════════════ BOTTOM CTA ═══════════════════════ */}
        <div
          style={{
            background: `linear-gradient(180deg, ${p.white} 0%, ${p.cream} 6%, ${p.navy} 6%, ${p.navy} 100%)`,
          }}
        >
          <div
            style={{
              maxWidth: 960,
              margin: '0 auto',
              padding: '0 clamp(1.5rem, 4vw, 3rem)',
              paddingTop: 'clamp(6rem, 10vw, 8rem)',
              paddingBottom: 'clamp(6rem, 10vw, 8rem)',
            }}
          >
            <Reveal>
              <div className="lg:flex lg:items-end lg:justify-between lg:gap-16">
                <div style={{ marginBottom: 32 }}>
                  <div
                    style={{
                      width: 48,
                      height: 2,
                      borderRadius: 1,
                      background: `linear-gradient(90deg, ${p.gold}90, transparent)`,
                      marginBottom: 28,
                    }}
                  />
                  <h2
                    style={{
                      fontFamily: serifFont,
                      color: p.white,
                      fontWeight: 300,
                      fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)',
                      lineHeight: 1.1,
                      letterSpacing: '-0.02em',
                      marginBottom: 16,
                      maxWidth: 440,
                    }}
                  >
                    Choose a time that works for you
                  </h2>
                  <p
                    style={{
                      color: 'rgba(255,255,255,0.5)',
                      fontSize: 16,
                      lineHeight: 1.85,
                      maxWidth: 440,
                    }}
                  >
                    No referral required. Book online in under a minute or call the clinic directly.
                  </p>
                </div>

                <div
                  className="flex flex-col gap-3 sm:flex-row"
                  style={{ flexShrink: 0 }}
                >
                  <BookingCTA
                    size="lg"
                    className="w-full sm:w-auto !rounded-[10px] !px-9 !py-4 !text-[11px] !tracking-[0.2em] transition-transform hover:scale-[1.02]"
                    style={{
                      boxShadow: '0 12px 40px -10px rgba(212,175,55,0.4)',
                    }}
                  >
                    Book Assessment
                    <ArrowRightIcon width={14} height={14} aria-hidden="true" />
                  </BookingCTA>
                  <a
                    href="tel:+19056346000"
                    className="inline-flex items-center justify-center gap-2.5 transition-all hover:scale-[1.02]"
                    style={{
                      padding: '16px 24px',
                      borderRadius: 10,
                      border: '1px solid rgba(255,255,255,0.12)',
                      background: 'rgba(255,255,255,0.04)',
                      color: p.white,
                      fontSize: 13,
                      fontWeight: 700,
                    }}
                  >
                    <PhoneIcon width={15} height={15} aria-hidden="true" style={{ color: p.gold }} />
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
