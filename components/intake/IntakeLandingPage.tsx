'use client';

import type { CSSProperties, ComponentType, ReactNode, SVGProps } from 'react';
import { useRef } from 'react';
import {
  ArrowRightIcon,
  ClockIcon,
  CreditCardIcon,
  MapPinIcon,
  PhoneIcon,
  StarIcon,
} from '@heroicons/react/24/solid';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BookingCTA from '@/components/intake/BookingCTA';

/* ═══════════════════════════════════════════════════════════
   DESIGN TOKENS
   Style: Editorial Luxury (magazine grid, warm cream, gold)
   Typography: Classic Elegant (Playfair Display + Inter)
   Pattern: Hero + Social Proof + CTA conversion flow
   ═══════════════════════════════════════════════════════════ */

const c = {
  // Brand golds
  gold: '#D4AF37',
  goldDeep: '#B08D57',
  goldMuted: '#C4A265',
  goldFaint: 'rgba(176,141,87,0.08)',
  goldLine: 'rgba(176,141,87,0.18)',

  // Warm neutrals
  cream: '#FAF6EE',
  creamWarm: '#F5EFE3',
  creamDeep: '#EDE5D4',
  parchment: '#FEFCF8',
  white: '#FFFFFF',

  // Text hierarchy
  ink: '#1a1a2e',
  heading: '#1e1e32',
  body: '#555566',
  bodyLight: '#7a7a8a',
  caption: '#9a9aaa',

  // Utility
  navy: '#0f172a',
  navyLight: '#1a2744',
  emerald: '#059669',
  emeraldLight: '#34d399',
};

const font = {
  serif: '"Playfair Display", Georgia, "Times New Roman", serif',
  body: '"Inter", system-ui, -apple-system, sans-serif',
};

// Animation: spring physics per ui-ux-pro-max guidelines
const springConfig = { stiffness: 180, damping: 24, mass: 0.6 };
const staggerDelay = 0.04; // 40ms per item (within 30-50ms guideline)

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

/* ═══════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════ */

const careHighlights = [
  {
    title: 'One-on-one from start to finish',
    description:
      'Every appointment is directly with Kareem. No assistants, no handoffs, and no split treatment blocks.',
  },
  {
    title: 'Treatment starts on day one',
    description:
      'The first visit includes treatment when appropriate, not just intake paperwork and explanation.',
  },
  {
    title: 'Clear reasoning at each visit',
    description:
      'Each visit ends with a clear explanation of what was found and what comes next.',
  },
  {
    title: 'Care matched to the problem',
    description:
      'Manual therapy, dry needling, cupping, and exercise rehabilitation are used where they fit the assessment.',
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
    value:
      'Direct billing available for Sun Life, Manulife, Green Shield Canada, Blue Cross, Canada Life, WSIB, and more.',
    icon: CreditCardIcon,
  },
];

const serviceAreas = ['Burlington', 'Waterdown', 'Flamborough', 'Carlisle', 'Oakville'];

/* ═══════════════════════════════════════════════════════════
   SUB-COMPONENTS
   ═══════════════════════════════════════════════════════════ */

function Stars({ size = 16, gap = 2 }: { size?: number; gap?: number }) {
  return (
    <span style={{ display: 'inline-flex', gap }}>
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          width={size}
          height={size}
          style={{ color: c.gold }}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}

function Reveal({
  children,
  delay = 0,
  distance = 28,
  style,
  className,
}: {
  children: ReactNode;
  delay?: number;
  distance?: number;
  style?: CSSProperties;
  className?: string;
}) {
  const prefersReduced = useReducedMotion();
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
    rootMargin: '0px 0px -10% 0px',
  });

  return (
    <motion.div
      ref={ref}
      initial={prefersReduced ? false : 'hidden'}
      animate={prefersReduced || inView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, y: distance, scale: 0.985 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.7,
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

/* ═══════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════ */

export default function IntakeLandingPage() {
  const prefersReduced = useReducedMotion();
  const heroRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Subtle parallax on hero photo (respects reduced motion)
  const photoScale = useSpring(
    useTransform(heroProgress, [0, 1], [1, 1.06]),
    springConfig
  );
  const photoY = useSpring(
    useTransform(heroProgress, [0, 1], [0, 50]),
    springConfig
  );

  // Entrance stagger variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

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
          .intake-page .animate-ping { display: none !important; }
        }
      `}</style>

      <main
        className="intake-page"
        style={{
          fontFamily: font.body,
          background: c.white,
          color: c.body,
          WebkitFontSmoothing: 'antialiased',
        }}
      >
        {/* ════════════════════════ HERO ════════════════════════ */}
        <section
          ref={heroRef}
          className="intake-hero"
          style={{
            position: 'relative',
            overflow: 'hidden',
            background: c.cream,
          }}
        >
          {/* Ambient warm radial */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(ellipse 100% 80% at 20% 30%, rgba(212,175,55,0.07), transparent 50%), radial-gradient(ellipse 60% 60% at 80% 70%, rgba(176,141,87,0.04), transparent 50%)',
              pointerEvents: 'none',
            }}
          />

          {/* Fine grain texture */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.025,
              backgroundImage:
                'radial-gradient(rgba(30,30,50,0.6) 0.5px, transparent 0.5px)',
              backgroundSize: '12px 12px',
              pointerEvents: 'none',
            }}
          />

          {/* Seamless bottom fade */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 200,
              background: `linear-gradient(to bottom, transparent, ${c.cream})`,
              pointerEvents: 'none',
              zIndex: 3,
            }}
          />

          {/* Hero content */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              maxWidth: 1140,
              margin: '0 auto',
              padding: '0 clamp(1.5rem, 5vw, 3rem)',
              display: 'flex',
              minHeight: '100%',
              alignItems: 'center',
              paddingTop: 'clamp(7rem, 14vh, 10rem)',
              paddingBottom: 'clamp(5rem, 10vh, 8rem)',
            }}
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={prefersReduced ? undefined : containerVariants}
              style={{
                display: 'grid',
                width: '100%',
                alignItems: 'center',
                gap: 'clamp(3rem, 6vw, 5rem)',
                gridTemplateColumns: '1fr',
              }}
              className="lg:!grid-cols-[1fr_400px]"
            >
              {/* ── Left column: Text ── */}
              <div>
                {/* Accepting badge */}
                <motion.div
                  variants={itemVariants}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    marginBottom: 40,
                    padding: '8px 16px 8px 12px',
                    borderRadius: 999,
                    background: 'rgba(5,150,105,0.08)',
                    border: '1px solid rgba(5,150,105,0.15)',
                  }}
                >
                  <span className="relative flex" style={{ width: 8, height: 8 }}>
                    <span
                      className="animate-ping"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '50%',
                        backgroundColor: c.emeraldLight,
                        opacity: 0.6,
                      }}
                    />
                    <span
                      style={{
                        position: 'relative',
                        display: 'block',
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: c.emerald,
                      }}
                    />
                  </span>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      color: c.emerald,
                    }}
                  >
                    Accepting New Patients
                  </span>
                </motion.div>

                {/* Main heading */}
                <motion.h1
                  variants={itemVariants}
                  style={{
                    fontFamily: font.serif,
                    fontSize: 'clamp(2.6rem, 5.2vw, 4.2rem)',
                    fontWeight: 300,
                    lineHeight: 1.08,
                    letterSpacing: '-0.025em',
                    color: c.ink,
                    marginBottom: 24,
                  }}
                >
                  Book Your
                  <br />
                  Assessment
                </motion.h1>

                {/* Gold accent rule under heading */}
                <motion.div
                  variants={itemVariants}
                  style={{
                    width: 56,
                    height: 2.5,
                    borderRadius: 2,
                    background: `linear-gradient(90deg, ${c.gold}, ${c.goldDeep})`,
                    marginBottom: 28,
                  }}
                />

                {/* Subtitle */}
                <motion.p
                  variants={itemVariants}
                  style={{
                    maxWidth: 440,
                    color: c.body,
                    fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
                    lineHeight: 1.8,
                    marginBottom: 36,
                  }}
                >
                  One-on-one physiotherapy focused on finding the root cause.
                  Sports injuries, knee and hip pain, dry needling, cupping,
                  and exercise rehabilitation.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col gap-3 sm:flex-row sm:gap-4"
                  style={{ marginBottom: 36 }}
                >
                  <BookingCTA
                    size="lg"
                    className="w-full sm:w-auto !rounded-[10px] !px-10 !py-4 !text-[11px] !tracking-[0.2em]"
                    style={{
                      boxShadow: '0 10px 36px -8px rgba(176,141,87,0.4)',
                      transition: 'transform 200ms ease-out, box-shadow 200ms ease-out',
                    }}
                  >
                    Book Assessment
                    <ArrowRightIcon width={14} height={14} aria-hidden="true" />
                  </BookingCTA>
                  <a
                    href="tel:+19056346000"
                    className="inline-flex items-center justify-center gap-2.5"
                    style={{
                      padding: '16px 24px',
                      borderRadius: 10,
                      background: c.white,
                      border: `1px solid ${c.goldLine}`,
                      color: c.ink,
                      fontSize: 13,
                      fontWeight: 700,
                      boxShadow: '0 2px 12px -4px rgba(176,141,87,0.08)',
                      transition: 'transform 200ms ease-out',
                      cursor: 'pointer',
                    }}
                  >
                    <PhoneIcon
                      width={16}
                      height={16}
                      aria-hidden="true"
                      style={{ color: c.goldDeep }}
                    />
                    (905) 634-6000
                  </a>
                </motion.div>

                {/* Stars + review count */}
                <motion.div
                  variants={itemVariants}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    marginBottom: 20,
                  }}
                >
                  <Stars size={15} gap={1} />
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: c.heading,
                    }}
                  >
                    5.0
                  </span>
                  <span style={{ fontSize: 13, color: c.bodyLight }}>
                    from 17 Google reviews
                  </span>
                </motion.div>

                {/* Trust badges */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap items-center gap-3"
                >
                  {['Direct Billing', 'No Referral Needed', 'Evening Hours'].map(
                    (badge) => (
                      <span
                        key={badge}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 6,
                          padding: '7px 14px',
                          borderRadius: 999,
                          background: c.white,
                          border: `1px solid ${c.goldLine}`,
                          fontSize: 11,
                          fontWeight: 600,
                          letterSpacing: '0.04em',
                          color: c.body,
                          boxShadow: '0 1px 4px rgba(176,141,87,0.06)',
                        }}
                      >
                        <CheckCircleIcon
                          width={14}
                          height={14}
                          style={{ color: c.goldDeep }}
                          aria-hidden="true"
                        />
                        {badge}
                      </span>
                    )
                  )}
                </motion.div>

                {/* Credentials */}
                <motion.p
                  variants={itemVariants}
                  style={{
                    marginTop: 24,
                    fontSize: 12,
                    color: c.goldDeep,
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                  }}
                >
                  Registered Physiotherapist, MSc PT, BSc Kin &middot; CPO
                  #20079
                </motion.p>
              </div>

              {/* ── Right column: Portrait ── */}
              <motion.div
                className="hidden lg:block"
                initial={prefersReduced ? false : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{ position: 'relative' }}
              >
                {/* Decorative gold corner accents */}
                <div
                  style={{
                    position: 'absolute',
                    top: -6,
                    left: -6,
                    width: 48,
                    height: 48,
                    borderTop: `2px solid ${c.gold}40`,
                    borderLeft: `2px solid ${c.gold}40`,
                    borderRadius: '4px 0 0 0',
                    pointerEvents: 'none',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: -6,
                    right: -6,
                    width: 48,
                    height: 48,
                    borderBottom: `2px solid ${c.gold}40`,
                    borderRight: `2px solid ${c.gold}40`,
                    borderRadius: '0 0 4px 0',
                    pointerEvents: 'none',
                  }}
                />

                <motion.div
                  style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: 400,
                    borderRadius: 16,
                    overflow: 'hidden',
                    boxShadow:
                      '0 48px 100px -24px rgba(26,26,46,0.18), 0 20px 40px -16px rgba(176,141,87,0.08)',
                    scale: prefersReduced ? 1 : photoScale,
                    y: prefersReduced ? 0 : photoY,
                  }}
                >
                  <img
                    src="/images/professional-photo-kareem-hassanein-registered-physiotherapist-burlington-waterdown-flamborough-oakville-carlisle.png"
                    alt="Kareem Hassanein, Registered Physiotherapist in Burlington"
                    width={826}
                    height={1169}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                  {/* Warm bottom vignette blending into cream */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '40%',
                      background: `linear-gradient(to top, ${c.cream}cc, ${c.cream}40, transparent)`,
                      pointerEvents: 'none',
                    }}
                  />
                </motion.div>

                {/* Floating credentials chip */}
                <motion.div
                  initial={
                    prefersReduced ? false : { opacity: 0, y: 16, scale: 0.95 }
                  }
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    position: 'absolute',
                    bottom: 48,
                    left: -36,
                    background: c.white,
                    borderRadius: 14,
                    padding: '18px 24px',
                    boxShadow:
                      '0 20px 56px -16px rgba(26,26,46,0.14), 0 0 0 1px rgba(176,141,87,0.08)',
                    maxWidth: 210,
                  }}
                >
                  <p
                    style={{
                      fontFamily: font.serif,
                      fontWeight: 400,
                      fontSize: 17,
                      color: c.heading,
                      lineHeight: 1.25,
                      marginBottom: 5,
                    }}
                  >
                    Kareem Hassanein
                  </p>
                  <p
                    style={{
                      fontSize: 11,
                      color: c.goldDeep,
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                    }}
                  >
                    Registered Physiotherapist
                  </p>
                  <p style={{ fontSize: 11, color: c.bodyLight, marginTop: 4 }}>
                    MSc PT, BSc Kin &middot; CPO #20079
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════ WHAT TO EXPECT ════════════════════════ */}
        <div
          style={{
            background: `linear-gradient(180deg, ${c.cream} 0%, ${c.white} 20%)`,
          }}
        >
          <div
            style={{
              maxWidth: 960,
              margin: '0 auto',
              padding: '0 clamp(1.5rem, 5vw, 3rem)',
              paddingTop: 'clamp(6rem, 12vw, 9rem)',
              paddingBottom: 'clamp(6rem, 10vw, 8rem)',
            }}
          >
            <Reveal>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: c.goldDeep,
                  marginBottom: 20,
                }}
              >
                What to Expect
              </p>
              <h2
                style={{
                  fontFamily: font.serif,
                  color: c.heading,
                  fontWeight: 300,
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                  lineHeight: 1.12,
                  letterSpacing: '-0.02em',
                  marginBottom: 16,
                  maxWidth: 460,
                }}
              >
                What your first visit looks like
              </h2>
              {/* Accent rule */}
              <div
                style={{
                  width: 40,
                  height: 2,
                  borderRadius: 1,
                  background: c.goldLine,
                  marginBottom: 20,
                }}
              />
              <p
                style={{
                  color: c.body,
                  fontSize: 16,
                  lineHeight: 1.85,
                  maxWidth: 480,
                  marginBottom: 64,
                }}
              >
                Your appointment is built around assessment, treatment, and a
                clear explanation of what comes next.
              </p>
            </Reveal>

            <div className="grid gap-y-20 gap-x-20 sm:grid-cols-2">
              {careHighlights.map((item, i) => (
                <Reveal
                  key={item.title}
                  delay={staggerDelay * i}
                  style={{
                    marginTop:
                      i % 2 !== 0 ? 'clamp(0px, 5vw, 3.5rem)' : 0,
                  }}
                >
                  <div style={{ paddingLeft: 24 }}>
                    {/* Numbered marker */}
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        background: c.goldFaint,
                        border: `1px solid ${c.goldLine}`,
                        marginBottom: 18,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: font.serif,
                          fontSize: 14,
                          fontWeight: 400,
                          color: c.goldDeep,
                        }}
                      >
                        {i + 1}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontFamily: font.serif,
                        color: c.heading,
                        fontWeight: 400,
                        fontSize: '1.25rem',
                        lineHeight: 1.3,
                        letterSpacing: '-0.01em',
                        marginBottom: 14,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        color: c.body,
                        fontSize: 15,
                        lineHeight: 1.85,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* ════════════════════════ REVIEWS ════════════════════════ */}
        {/* Warm tint fades in and out seamlessly */}
        <div
          style={{
            background: `linear-gradient(180deg,
              ${c.white} 0%,
              ${c.creamWarm}55 6%,
              ${c.creamWarm}70 50%,
              ${c.creamWarm}55 94%,
              ${c.white} 100%
            )`,
          }}
        >
          <div
            style={{
              maxWidth: 960,
              margin: '0 auto',
              padding: '0 clamp(1.5rem, 5vw, 3rem)',
              paddingTop: 'clamp(6rem, 10vw, 8rem)',
              paddingBottom: 'clamp(6rem, 10vw, 8rem)',
            }}
          >
            <Reveal>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  marginBottom: 20,
                }}
              >
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: c.goldDeep,
                  }}
                >
                  Patient Reviews
                </p>
                <span
                  style={{
                    flex: 1,
                    height: 1,
                    background: c.goldLine,
                    maxWidth: 120,
                  }}
                />
              </div>

              <h2
                style={{
                  fontFamily: font.serif,
                  color: c.heading,
                  fontWeight: 300,
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                  lineHeight: 1.12,
                  letterSpacing: '-0.02em',
                  marginBottom: 16,
                }}
              >
                What patients say
              </h2>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 72,
                }}
              >
                <Stars size={14} gap={1} />
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: c.heading,
                  }}
                >
                  5.0
                </span>
                <span style={{ fontSize: 13, color: c.bodyLight }}>
                  from 17 Google reviews
                </span>
              </div>
            </Reveal>

            {/* Reviews grid - editorial quote style, no cards */}
            <div className="grid gap-x-16 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review, i) => (
                <Reveal key={review.name} delay={staggerDelay * i}>
                  <div>
                    {/* Large opening quotation mark */}
                    <p
                      style={{
                        fontFamily: font.serif,
                        fontSize: 48,
                        lineHeight: 0.6,
                        color: c.gold,
                        marginBottom: 18,
                        userSelect: 'none',
                      }}
                    >
                      &ldquo;
                    </p>
                    <p
                      style={{
                        color: c.body,
                        fontSize: 15,
                        lineHeight: 1.9,
                        marginBottom: 22,
                      }}
                    >
                      {review.text}
                    </p>
                    {/* Thin gold rule before name */}
                    <div
                      style={{
                        width: 24,
                        height: 1.5,
                        background: c.goldLine,
                        marginBottom: 12,
                        borderRadius: 1,
                      }}
                    />
                    <p
                      style={{
                        color: c.heading,
                        fontWeight: 600,
                        fontSize: 13,
                        letterSpacing: '0.02em',
                      }}
                    >
                      {review.name}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2} style={{ marginTop: 60 }}>
              <a
                href="https://www.google.com/maps/place/Endorphins+Health+%26+Wellness+Centre"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  color: c.goldDeep,
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  cursor: 'pointer',
                }}
              >
                Read all reviews on Google
                <ArrowRightIcon width={14} height={14} aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </div>

        {/* ════════════════════════ PRICING & DETAILS ════════════════════════ */}
        <div
          style={{
            maxWidth: 960,
            margin: '0 auto',
            padding: '0 clamp(1.5rem, 5vw, 3rem)',
            paddingTop: 'clamp(6rem, 10vw, 8rem)',
            paddingBottom: 'clamp(6rem, 10vw, 8rem)',
          }}
        >
          <div className="grid gap-24 lg:grid-cols-2">
            {/* Pricing */}
            <Reveal>
              <div>
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: c.goldDeep,
                    marginBottom: 20,
                  }}
                >
                  Fees
                </p>
                <h2
                  style={{
                    fontFamily: font.serif,
                    color: c.heading,
                    fontWeight: 300,
                    fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                    lineHeight: 1.12,
                    letterSpacing: '-0.02em',
                    marginBottom: 44,
                  }}
                >
                  Transparent pricing
                </h2>

                <div
                  style={{
                    display: 'grid',
                    gap: 40,
                    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                    marginBottom: 36,
                  }}
                >
                  {pricingOptions.map((item) => (
                    <div key={item.label}>
                      <p
                        style={{
                          color: c.goldDeep,
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
                          fontFamily: font.serif,
                          fontWeight: 300,
                          color: c.ink,
                          fontSize: 'clamp(2.4rem, 4vw, 3rem)',
                          lineHeight: 1,
                          letterSpacing: '-0.03em',
                          marginBottom: 8,
                          fontVariantNumeric: 'tabular-nums',
                        }}
                      >
                        {item.price}
                      </p>
                      <p
                        style={{
                          color: c.bodyLight,
                          fontSize: 14,
                          lineHeight: 1.65,
                        }}
                      >
                        {item.note}
                      </p>
                    </div>
                  ))}
                </div>

                <p style={{ color: c.body, fontSize: 14, lineHeight: 1.85 }}>
                  Direct billing available for Sun Life, Manulife, Green Shield
                  Canada, Blue Cross, Canada Life, WSIB, and more.
                </p>
              </div>
            </Reveal>

            {/* Clinic details */}
            <Reveal delay={0.1}>
              <div>
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: c.goldDeep,
                    marginBottom: 20,
                  }}
                >
                  Clinic Details
                </p>
                <h2
                  style={{
                    fontFamily: font.serif,
                    color: c.heading,
                    fontWeight: 300,
                    fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                    lineHeight: 1.12,
                    letterSpacing: '-0.02em',
                    marginBottom: 44,
                  }}
                >
                  Burlington &amp; Waterdown
                </h2>

                <div style={{ display: 'grid', gap: 36 }}>
                  {clinicDetails.map((detail) => (
                    <div
                      key={detail.label}
                      style={{
                        display: 'flex',
                        gap: 18,
                        alignItems: 'flex-start',
                      }}
                    >
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          background: c.goldFaint,
                          border: `1px solid ${c.goldLine}`,
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      >
                        <detail.icon
                          width={18}
                          height={18}
                          aria-hidden="true"
                          style={{ color: c.goldDeep }}
                        />
                      </span>
                      <div>
                        <p
                          style={{
                            color: c.goldDeep,
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
                            color: c.body,
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

                {/* Service area pills */}
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
                        background: c.goldFaint,
                        border: `1px solid ${c.goldLine}`,
                        color: c.body,
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

        {/* ════════════════════════ BOTTOM CTA ════════════════════════ */}
        <div
          style={{
            background: c.navy,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle warm glow in dark section */}
          <div
            style={{
              position: 'absolute',
              top: '-30%',
              left: '10%',
              width: '60%',
              height: '160%',
              background:
                'radial-gradient(ellipse at center, rgba(212,175,55,0.04), transparent 60%)',
              pointerEvents: 'none',
            }}
          />
          {/* Grain on dark */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.03,
              backgroundImage:
                'radial-gradient(rgba(255,255,255,0.5) 0.5px, transparent 0.5px)',
              backgroundSize: '14px 14px',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              position: 'relative',
              maxWidth: 960,
              margin: '0 auto',
              padding: '0 clamp(1.5rem, 5vw, 3rem)',
              paddingTop: 'clamp(6rem, 10vw, 8rem)',
              paddingBottom: 'clamp(6rem, 10vw, 8rem)',
            }}
          >
            <Reveal>
              <div className="lg:flex lg:items-end lg:justify-between lg:gap-16">
                <div style={{ marginBottom: 36 }}>
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      color: `${c.gold}bb`,
                      marginBottom: 20,
                    }}
                  >
                    Book Your Assessment
                  </p>
                  <h2
                    style={{
                      fontFamily: font.serif,
                      color: c.white,
                      fontWeight: 300,
                      fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                      lineHeight: 1.1,
                      letterSpacing: '-0.02em',
                      marginBottom: 18,
                      maxWidth: 420,
                    }}
                  >
                    Choose a time that works for you
                  </h2>
                  {/* Accent rule */}
                  <div
                    style={{
                      width: 40,
                      height: 2,
                      borderRadius: 1,
                      background: `${c.gold}50`,
                      marginBottom: 18,
                    }}
                  />
                  <p
                    style={{
                      color: 'rgba(255,255,255,0.45)',
                      fontSize: 16,
                      lineHeight: 1.85,
                      maxWidth: 420,
                    }}
                  >
                    No referral required. Book online in under a minute or call
                    the clinic directly.
                  </p>
                </div>

                <div
                  className="flex flex-col gap-3 sm:flex-row"
                  style={{ flexShrink: 0 }}
                >
                  <BookingCTA
                    size="lg"
                    className="w-full sm:w-auto !rounded-[10px] !px-10 !py-4 !text-[11px] !tracking-[0.2em]"
                    style={{
                      boxShadow: '0 14px 44px -10px rgba(212,175,55,0.45)',
                    }}
                  >
                    Book Assessment
                    <ArrowRightIcon
                      width={14}
                      height={14}
                      aria-hidden="true"
                    />
                  </BookingCTA>
                  <a
                    href="tel:+19056346000"
                    className="inline-flex items-center justify-center gap-2.5"
                    style={{
                      padding: '16px 24px',
                      borderRadius: 10,
                      border: '1px solid rgba(255,255,255,0.1)',
                      background: 'rgba(255,255,255,0.04)',
                      color: c.white,
                      fontSize: 13,
                      fontWeight: 700,
                      transition: 'background 200ms ease-out',
                      cursor: 'pointer',
                    }}
                  >
                    <PhoneIcon
                      width={15}
                      height={15}
                      aria-hidden="true"
                      style={{ color: c.gold }}
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
