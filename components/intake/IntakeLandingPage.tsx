'use client';

import type { CSSProperties, ComponentType, ReactNode, SVGProps } from 'react';
import { useRef } from 'react';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  CreditCardIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
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
  line: 'rgba(176,141,87,0.18)',
  lineDark: 'rgba(255,255,255,0.1)',
};

const serifFont = '"Playfair Display", var(--font-heading), serif';
const sectionPadding = 'clamp(4.5rem, 7vw, 6.5rem)';

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;
type SurfaceTone = 'paper' | 'warm' | 'dark' | 'glass';

const trustBadges = ['Direct Billing', 'No Referral Needed', 'Evening Hours'];

const visitSteps = [
  {
    title: 'Assessment',
    text: 'A detailed history and movement assessment to identify what is driving the issue.',
  },
  {
    title: 'Treatment',
    text: 'Hands-on care starts in the first session when it is appropriate for your presentation.',
  },
  {
    title: 'Plan',
    text: 'You leave with clear next steps, priorities, and a treatment direction tailored to you.',
  },
];

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
    tone: 'dark',
    size: 'standard',
  },
  {
    title: 'Clear reasoning at each visit',
    description:
      'Each visit ends with a clear explanation of what was found and what comes next.',
    tone: 'warm',
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
    value: 'Direct billing support available for Sun Life, Manulife, Green Shield Canada, Blue Cross, Canada Life, WSIB, and more.',
    icon: CreditCardIcon,
  },
];

const serviceAreas = ['Burlington', 'Waterdown', 'Flamborough', 'Carlisle', 'Oakville'];

const heroInfo = [
  'Sports injuries',
  'Knee and hip pain',
  'Dry needling and cupping',
  'Exercise rehabilitation',
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
        border: light ? '1px solid rgba(255,255,255,0.12)' : `1px solid ${palette.line}`,
        background: light ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.62)',
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
      border: `1px solid ${palette.line}`,
      background: 'linear-gradient(180deg, rgba(255,255,255,0.94), rgba(247,241,230,0.92))',
      boxShadow: '0 32px 84px -58px rgba(15,23,42,0.42)',
      color: palette.bodyDark,
    },
    warm: {
      border: '1px solid rgba(176,141,87,0.22)',
      background: 'linear-gradient(180deg, rgba(247,241,230,0.97), rgba(239,228,208,0.95))',
      boxShadow: '0 30px 80px -56px rgba(15,23,42,0.36)',
      color: palette.bodyDark,
    },
    dark: {
      border: `1px solid ${palette.lineDark}`,
      background: 'linear-gradient(180deg, rgba(15,23,42,0.96), rgba(2,6,23,0.98))',
      boxShadow: '0 36px 96px -62px rgba(2,6,23,0.92)',
      color: 'white',
    },
    glass: {
      border: `1px solid ${palette.lineDark}`,
      background: 'rgba(15,23,42,0.62)',
      backdropFilter: 'blur(18px)',
      boxShadow: '0 34px 90px -60px rgba(2,6,23,0.9)',
      color: 'white',
    },
  };

  return (
    <div
      style={{
        position: 'relative',
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
    <a href={href} className="group relative inline-flex w-full sm:w-auto overflow-hidden">
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
    triggerOnce: false,
    rootMargin: '-4% 0px -8% 0px',
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

function DetailRow({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: IconComponent;
}) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: 16,
        paddingBottom: 22,
        borderBottom: `1px solid ${palette.line}`,
      }}
    >
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 40,
          height: 40,
          borderRadius: 999,
          background: 'rgba(176,141,87,0.12)',
          color: palette.goldDeep,
        }}
      >
        <Icon width={18} height={18} aria-hidden="true" />
      </span>
      <div>
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
    </div>
  );
}

function ReviewCard({
  name,
  text,
  tone,
}: {
  name: string;
  text: string;
  tone: SurfaceTone;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      style={{ height: '100%' }}
    >
      <Surface
        tone={tone}
        style={{
          padding: 24,
          height: '100%',
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
                color: tone === 'warm' ? palette.goldDeep : palette.gold,
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
              color: tone === 'warm' || tone === 'paper' ? palette.body : 'rgba(255,255,255,0.86)',
              fontSize: 15,
              lineHeight: 1.85,
              flex: 1,
              marginBottom: 20,
            }}
          >
            &ldquo;{text}&rdquo;
          </div>
          <div
            style={{
              paddingTop: 16,
              borderTop:
                tone === 'warm' || tone === 'paper'
                  ? `1px solid ${palette.line}`
                  : '1px solid rgba(255,255,255,0.08)',
              color: tone === 'warm' || tone === 'paper' ? palette.bodyDark : 'white',
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            {name}
          </div>
        </div>
      </Surface>
    </motion.div>
  );
}

export default function IntakeLandingPage() {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress: pageProgress } = useScroll();
  const smoothPageProgress = useSpring(pageProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.22,
  });
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroImageScale = useSpring(useTransform(heroProgress, [0, 1], [1.03, 1.12]), {
    stiffness: 120,
    damping: 26,
    mass: 0.28,
  });
  const heroImageY = useSpring(useTransform(heroProgress, [0, 1], [0, 92]), {
    stiffness: 120,
    damping: 28,
    mass: 0.3,
  });
  const heroContentY = useSpring(useTransform(heroProgress, [0, 1], [0, 48]), {
    stiffness: 120,
    damping: 28,
    mass: 0.26,
  });
  const heroContentOpacity = useTransform(heroProgress, [0, 0.82], [1, 0.34]);
  const primaryPanelY = useSpring(useTransform(heroProgress, [0, 1], [0, -24]), {
    stiffness: 120,
    damping: 28,
    mass: 0.28,
  });
  const secondaryPanelY = useSpring(useTransform(heroProgress, [0, 1], [0, 18]), {
    stiffness: 120,
    damping: 28,
    mass: 0.28,
  });
  const sectionGlowY = useTransform(smoothPageProgress, [0, 1], [0, -140]);

  const featuredReview = reviews[0];
  const secondaryReviews = reviews.slice(1);

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

        .intake-grain::before {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0.035;
          background-image: radial-gradient(rgba(255,255,255,0.9) 0.7px, transparent 0.7px);
          background-size: 16px 16px;
          pointer-events: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .intake-page .animate-ping {
            display: none !important;
          }
        }
      `}</style>

      <main className="intake-page" style={{ background: palette.ink }}>
        <section
          ref={heroRef}
          className="intake-hero intake-grain"
          style={{
            position: 'relative',
            overflow: 'hidden',
            background: palette.ink,
          }}
        >
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              scale: shouldReduceMotion ? 1.03 : heroImageScale,
              y: shouldReduceMotion ? 0 : heroImageY,
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: "url('/images/clinic-pic-may-2025.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: '70% center',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(96deg, rgba(2,6,23,0.99) 0%, rgba(15,23,42,0.96) 22%, rgba(15,23,42,0.88) 42%, rgba(15,23,42,0.58) 62%, rgba(2,6,23,0.9) 100%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(180deg, rgba(2,6,23,0.2) 0%, rgba(2,6,23,0.04) 26%, rgba(2,6,23,0.26) 58%, rgba(2,6,23,0.96) 100%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'radial-gradient(circle at 14% 22%, rgba(212,175,55,0.18), transparent 28%), radial-gradient(circle at 82% 18%, rgba(212,175,55,0.12), transparent 18%)',
              }}
            />
          </motion.div>

          <div
            className="container mx-auto max-w-6xl px-6 sm:px-8 lg:px-16"
            style={{
              position: 'relative',
              zIndex: 2,
              display: 'flex',
              minHeight: '100%',
              alignItems: 'center',
              paddingTop: 'clamp(6.75rem, 11vh, 8.75rem)',
              paddingBottom: 'clamp(4.5rem, 8vh, 7rem)',
            }}
          >
            <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,0.94fr)_minmax(380px,0.9fr)] lg:gap-14">
              <motion.div
                style={{
                  y: shouldReduceMotion ? 0 : heroContentY,
                  opacity: shouldReduceMotion ? 1 : heroContentOpacity,
                  maxWidth: 640,
                }}
              >
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Eyebrow light>Physiotherapy in Burlington</Eyebrow>

                  <h1
                    style={{
                      fontFamily: serifFont,
                      fontSize: 'clamp(3.6rem, 7vw, 6.5rem)',
                      fontWeight: 300,
                      lineHeight: 0.92,
                      letterSpacing: '-0.045em',
                      color: 'white',
                      marginBottom: 22,
                    }}
                  >
                    Book Your
                    <br />
                    <span style={{ color: palette.gold }}>Assessment</span>
                  </h1>

                  <p
                    style={{
                      maxWidth: 560,
                      color: 'rgba(255,255,255,0.8)',
                      fontSize: 'clamp(1rem, 2vw, 1.18rem)',
                      lineHeight: 1.88,
                      marginBottom: 18,
                    }}
                  >
                    One-on-one physiotherapy for sports injuries, knee and hip pain, dry needling,
                    cupping, and rehabilitation, delivered in Burlington with time to assess,
                    treat, and explain.
                  </p>

                  <p
                    style={{
                      color: 'rgba(255,255,255,0.54)',
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
                      <ArrowRightIcon width={14} height={14} aria-hidden="true" />
                    </BookingCTA>

                    <SecondaryAction href="tel:+19056346000">
                      <PhoneIcon width={15} height={15} aria-hidden="true" />
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

                  <div className="grid gap-2.5 sm:grid-cols-2" style={{ maxWidth: 520, marginBottom: 24 }}>
                    {heroInfo.map((item) => (
                      <div
                        key={item}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 10,
                          color: 'rgba(255,255,255,0.76)',
                          fontSize: 14,
                          lineHeight: 1.6,
                        }}
                      >
                        <CheckCircleIcon
                          width={16}
                          height={16}
                          aria-hidden="true"
                          style={{ color: palette.gold, flexShrink: 0 }}
                        />
                        <span>{item}</span>
                      </div>
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
                          color: 'rgba(255,255,255,0.84)',
                        }}
                      >
                        Accepting New Patients
                      </span>
                    </div>
                  </div>
                </motion.div>

                <Reveal className="lg:hidden" delay={0.16} style={{ marginTop: 32 }}>
                  <Surface
                    tone="warm"
                    style={{
                      padding: 26,
                      background:
                        'linear-gradient(180deg, rgba(247,241,230,0.985), rgba(239,228,208,0.965))',
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
                    <div style={{ display: 'grid', gap: 15 }}>
                      {visitSteps.map((step, index) => (
                        <div
                          key={step.title}
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
                              {step.title}
                            </p>
                            <p style={{ color: palette.body, lineHeight: 1.78, fontSize: 14 }}>
                              {step.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Surface>
                </Reveal>
              </motion.div>

              <div className="hidden lg:block">
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1fr) minmax(180px, 220px)',
                    alignItems: 'stretch',
                    gap: 18,
                    minHeight: 560,
                  }}
                >
                  <motion.div
                    style={{
                      gridColumn: '2',
                      alignSelf: 'start',
                      y: shouldReduceMotion ? 0 : secondaryPanelY,
                    }}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Surface tone="glass" style={{ padding: 22, borderRadius: 28 }}>
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
                        Clinic Details
                      </p>
                      <p
                        style={{
                          fontFamily: serifFont,
                          fontWeight: 300,
                          fontSize: '1.35rem',
                          lineHeight: 1.14,
                          letterSpacing: '-0.03em',
                          marginBottom: 10,
                          color: 'rgba(255,255,255,0.94)',
                        }}
                      >
                        Evening appointments and one-on-one care in Burlington.
                      </p>
                      <p
                        style={{
                          color: 'rgba(255,255,255,0.8)',
                          lineHeight: 1.7,
                          fontSize: 13,
                        }}
                      >
                        Endorphins Health & Wellness Centre, 4631 Palladium Way, Unit 6.
                      </p>
                    </Surface>
                  </motion.div>

                  <motion.div
                    style={{
                      gridColumn: '1',
                      gridRow: '1 / span 2',
                      y: shouldReduceMotion ? 0 : primaryPanelY,
                    }}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.88, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Surface tone="warm" style={{ padding: 30, borderRadius: 30 }}>
                      <div
                        className="flex items-start justify-between"
                        style={{ gap: 18, marginBottom: 24 }}
                      >
                        <div>
                          <p
                            style={{
                              color: palette.goldDeep,
                              fontSize: 11,
                              fontWeight: 700,
                              letterSpacing: '0.18em',
                              textTransform: 'uppercase',
                              marginBottom: 12,
                            }}
                          >
                            Your First Visit
                          </p>
                          <h2
                            style={{
                              fontFamily: serifFont,
                              fontWeight: 300,
                              fontSize: '2.18rem',
                              lineHeight: 1.02,
                              letterSpacing: '-0.04em',
                              color: palette.bodyDark,
                            }}
                          >
                            Assessment, treatment, and a plan forward.
                          </h2>
                        </div>

                        <div
                          style={{
                            flexShrink: 0,
                            minWidth: 98,
                            padding: '14px 12px',
                            borderRadius: 18,
                            border: `1px solid ${palette.line}`,
                            background: 'rgba(255,255,255,0.65)',
                            textAlign: 'center',
                          }}
                        >
                          <p
                            style={{
                              color: palette.goldDeep,
                              fontSize: 10,
                              fontWeight: 700,
                              letterSpacing: '0.18em',
                              textTransform: 'uppercase',
                              marginBottom: 6,
                            }}
                          >
                            Initial Visit
                          </p>
                          <p
                            style={{
                              fontFamily: serifFont,
                              fontWeight: 300,
                              fontSize: '2rem',
                              lineHeight: 0.95,
                              color: palette.bodyDark,
                            }}
                          >
                            $130
                          </p>
                        </div>
                      </div>

                      <div style={{ display: 'grid', gap: 16 }}>
                        {visitSteps.map((step, index) => (
                          <div
                            key={step.title}
                            style={{
                              display: 'grid',
                              gridTemplateColumns: 'auto 1fr',
                              gap: 14,
                              alignItems: 'start',
                              paddingTop: index === 0 ? 0 : 16,
                              borderTop: index === 0 ? 'none' : `1px solid ${palette.line}`,
                            }}
                          >
                            <span
                              style={{
                                display: 'inline-flex',
                                width: 34,
                                height: 34,
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
                                  marginBottom: 5,
                                }}
                              >
                                {step.title}
                              </p>
                              <p style={{ color: palette.body, lineHeight: 1.8, fontSize: 14 }}>
                                {step.text}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Surface>
                  </motion.div>

                  <motion.div
                    style={{
                      gridColumn: '2',
                      alignSelf: 'end',
                      y: shouldReduceMotion ? 0 : secondaryPanelY,
                    }}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Surface tone="dark" style={{ padding: 22, borderRadius: 28 }}>
                      <div
                        className="flex items-center justify-between"
                        style={{ gap: 12, marginBottom: 14 }}
                      >
                        <div>
                          <p
                            style={{
                              color: palette.gold,
                              fontSize: 11,
                              fontWeight: 700,
                              letterSpacing: '0.18em',
                              textTransform: 'uppercase',
                              marginBottom: 6,
                            }}
                          >
                            Patient Reviews
                          </p>
                          <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 14 }}>
                            5.0 from 17 Google reviews
                          </p>
                        </div>
                        <ReviewStars size={13} />
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 12,
                          paddingTop: 16,
                          borderTop: '1px solid rgba(255,255,255,0.08)',
                        }}
                      >
                        <span
                          style={{
                            width: 10,
                            height: 10,
                            borderRadius: 999,
                            background: '#22c55e',
                            boxShadow: '0 0 14px rgba(34,197,94,0.6)',
                          }}
                        />
                        <span
                          style={{
                            color: 'rgba(255,255,255,0.84)',
                            fontSize: 12,
                            fontWeight: 600,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                          }}
                        >
                          Accepting New Patients
                        </span>
                      </div>
                    </Surface>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            position: 'relative',
            marginTop: 0,
            padding: `${sectionPadding} 0`,
            background: `linear-gradient(180deg, ${palette.creamSoft} 0%, ${palette.cream} 56%, ${palette.creamDeep} 100%)`,
            borderTopLeftRadius: 36,
            borderTopRightRadius: 36,
            overflow: 'hidden',
          }}
        >
          <motion.div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: -80,
              right: -120,
              width: 360,
              height: 360,
              borderRadius: '999px',
              background: 'radial-gradient(circle, rgba(212,175,55,0.2), transparent 68%)',
              y: shouldReduceMotion ? 0 : sectionGlowY,
            }}
          />
          <div
            className="container mx-auto max-w-6xl px-6 sm:px-8 lg:px-16"
            style={{ position: 'relative' }}
          >
            <div className="grid gap-12 lg:grid-cols-[minmax(320px,0.84fr)_minmax(0,1.16fr)] lg:gap-16">
              <div className="lg:sticky lg:top-28 h-fit">
                <Reveal>
                  <Eyebrow>What to Expect</Eyebrow>
                  <h2
                    style={{
                      fontFamily: serifFont,
                      color: palette.bodyDark,
                      fontWeight: 300,
                      fontSize: 'clamp(2.45rem, 4.8vw, 4.2rem)',
                      lineHeight: 0.98,
                      letterSpacing: '-0.04em',
                      marginBottom: 18,
                      maxWidth: 460,
                    }}
                  >
                    What your first visit includes.
                  </h2>
                  <p
                    style={{
                      color: palette.body,
                      fontSize: 16,
                      lineHeight: 1.9,
                      maxWidth: 430,
                    }}
                  >
                    Your appointment is built around assessment, treatment, and a clear explanation
                    of what comes next.
                  </p>
                </Reveal>

                <Reveal delay={0.08} style={{ marginTop: 26 }}>
                  <Surface tone="dark" style={{ padding: 30 }}>
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
                      First Visit Flow
                    </p>
                    <div style={{ display: 'grid', gap: 16 }}>
                      {visitSteps.map((step, index) => (
                        <div
                          key={step.title}
                          style={{
                            display: 'grid',
                            gridTemplateColumns: 'auto 1fr',
                            gap: 14,
                            alignItems: 'start',
                            paddingTop: index === 0 ? 0 : 16,
                            borderTop: index === 0 ? 'none' : '1px solid rgba(255,255,255,0.08)',
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-flex',
                              width: 30,
                              height: 30,
                              alignItems: 'center',
                              justifyContent: 'center',
                              borderRadius: 999,
                              background: 'rgba(212,175,55,0.14)',
                              color: palette.gold,
                              fontSize: 12,
                              fontWeight: 700,
                            }}
                          >
                            0{index + 1}
                          </span>
                          <div>
                            <p style={{ color: 'white', fontWeight: 600, marginBottom: 4 }}>
                              {step.title}
                            </p>
                            <p
                              style={{
                                color: 'rgba(255,255,255,0.72)',
                                lineHeight: 1.8,
                                fontSize: 14,
                              }}
                            >
                              {step.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Surface>
                </Reveal>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {careHighlights.map((item, index) => (
                  <Reveal key={item.title} delay={0.05 * index}>
                    <Surface
                      tone={item.tone}
                      style={{
                        padding: 28,
                        minHeight: item.size === 'tall' ? 272 : 228,
                      }}
                    >
                      <p
                        style={{
                          color:
                            item.tone === 'dark' || item.tone === 'glass'
                              ? palette.gold
                              : palette.goldDeep,
                          fontSize: 12,
                          fontWeight: 700,
                          letterSpacing: '0.16em',
                          marginBottom: 16,
                        }}
                      >
                        0{index + 1}
                      </p>
                      <h3
                        style={{
                          fontFamily: serifFont,
                          color:
                            item.tone === 'dark' || item.tone === 'glass'
                              ? 'white'
                              : palette.bodyDark,
                          fontWeight: 300,
                          fontSize: item.size === 'tall' ? '2rem' : '1.7rem',
                          lineHeight: 1.06,
                          letterSpacing: '-0.03em',
                          marginBottom: 14,
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          color:
                            item.tone === 'dark' || item.tone === 'glass'
                              ? 'rgba(255,255,255,0.74)'
                              : palette.body,
                          fontSize: 15,
                          lineHeight: 1.82,
                        }}
                      >
                        {item.description}
                      </p>
                    </Surface>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            position: 'relative',
            marginTop: 0,
            padding: `${sectionPadding} 0`,
            background: `linear-gradient(180deg, ${palette.navy} 0%, ${palette.ink} 100%)`,
            overflow: 'hidden',
          }}
        >
          <motion.div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: -120,
              top: 40,
              width: 320,
              height: 320,
              borderRadius: '999px',
              background: 'radial-gradient(circle, rgba(212,175,55,0.16), transparent 68%)',
              y: shouldReduceMotion ? 0 : sectionGlowY,
            }}
          />

          <div
            className="container mx-auto max-w-6xl px-6 sm:px-8 lg:px-16"
            style={{ position: 'relative' }}
          >
            <Reveal>
              <Eyebrow light>Patient Reviews</Eyebrow>
              <div>
                <h2
                  style={{
                    fontFamily: serifFont,
                    color: 'white',
                    fontWeight: 300,
                    fontSize: 'clamp(2.45rem, 4.8vw, 4.1rem)',
                    lineHeight: 0.98,
                    letterSpacing: '-0.04em',
                    marginBottom: 16,
                    maxWidth: 500,
                  }}
                >
                  What patients say.
                </h2>
                <p
                  style={{
                    color: 'rgba(255,255,255,0.78)',
                    fontSize: 16,
                    lineHeight: 1.9,
                    maxWidth: 560,
                    marginBottom: 18,
                  }}
                >
                  Reviews consistently mention clear explanations, attentive care, and treatment
                  that gets to the source of the issue.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <ReviewStars size={15} />
                  <span style={{ color: 'rgba(255,255,255,0.78)', fontSize: 13 }}>
                    5.0 from 17 Google reviews
                  </span>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-7 pt-8 xl:grid-cols-[minmax(320px,0.72fr)_minmax(0,1.28fr)] xl:items-start xl:gap-10">
              <Reveal direction="left">
                <Surface
                  tone="warm"
                  style={{
                    padding: 'clamp(1.7rem, 2.6vw, 2.1rem)',
                  }}
                >
                  <p
                    style={{
                      color: palette.goldDeep,
                      fontSize: 46,
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
                      fontSize: 'clamp(1.3rem, 2vw, 1.9rem)',
                      lineHeight: 1.18,
                      letterSpacing: '-0.03em',
                      marginBottom: 20,
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
                      borderTop: `1px solid ${palette.line}`,
                    }}
                  >
                    <div>
                      <p style={{ color: palette.bodyDark, fontWeight: 600, marginBottom: 4 }}>
                        {featuredReview.name}
                      </p>
                      <p style={{ color: palette.body, fontSize: 13 }}>Google Review</p>
                    </div>
                    <ReviewStars size={13} />
                  </div>
                </Surface>
              </Reveal>

              <div className="grid gap-4 md:grid-cols-2">
                {secondaryReviews.map((review, index) => (
                  <Reveal key={review.name} delay={0.04 * index}>
                    <ReviewCard
                      name={review.name}
                      text={review.text}
                      tone={index % 3 === 1 ? 'glass' : index % 3 === 2 ? 'warm' : 'dark'}
                    />
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal delay={0.18} style={{ textAlign: 'center', marginTop: 28 }}>
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
                <ArrowRightIcon width={14} height={14} aria-hidden="true" />
              </a>
            </Reveal>
          </div>
        </section>

        <section
          style={{
            position: 'relative',
            padding: `${sectionPadding} 0`,
            background: `linear-gradient(180deg, ${palette.creamDeep} 0%, ${palette.creamSoft} 100%)`,
            overflow: 'hidden',
          }}
        >
          <motion.div
            aria-hidden="true"
            style={{
              position: 'absolute',
              right: -140,
              bottom: -60,
              width: 360,
              height: 360,
              borderRadius: '999px',
              background: 'radial-gradient(circle, rgba(176,141,87,0.16), transparent 70%)',
              y: shouldReduceMotion ? 0 : sectionGlowY,
            }}
          />

          <div
            className="container mx-auto max-w-6xl px-6 sm:px-8 lg:px-16"
            style={{ position: 'relative' }}
          >
            <div className="grid gap-8 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:items-start">
              <Reveal direction="left">
                <Surface
                  tone="dark"
                  style={{
                    padding: 'clamp(1.85rem, 3.4vw, 2.55rem)',
                    minHeight: '100%',
                  }}
                >
                  <Eyebrow light>Fees & Billing</Eyebrow>
                  <h2
                    style={{
                      fontFamily: serifFont,
                      color: 'white',
                      fontWeight: 300,
                      fontSize: 'clamp(2.05rem, 4vw, 3.3rem)',
                      lineHeight: 0.98,
                      letterSpacing: '-0.04em',
                      marginBottom: 16,
                      maxWidth: 440,
                    }}
                  >
                    Fees, billing, and clinic details.
                  </h2>
                  <p
                    style={{
                      color: 'rgba(255,255,255,0.8)',
                      lineHeight: 1.9,
                      maxWidth: 460,
                      marginBottom: 28,
                    }}
                  >
                    Review the fees, clinic location, and booking details before you schedule your
                    first appointment.
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {pricingOptions.map((item, index) => (
                      <Reveal key={item.label} delay={0.06 * index}>
                        <Surface tone="glass" style={{ padding: 22, borderRadius: 24 }}>
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
                              fontSize: '2.45rem',
                              lineHeight: 0.94,
                              letterSpacing: '-0.04em',
                              marginBottom: 8,
                            }}
                          >
                            {item.price}
                          </p>
                          <p
                            style={{
                              color: 'rgba(255,255,255,0.72)',
                              lineHeight: 1.72,
                              fontSize: 14,
                            }}
                          >
                            {item.note}
                          </p>
                        </Surface>
                      </Reveal>
                    ))}
                  </div>

                  <div
                    style={{
                      marginTop: 22,
                      paddingTop: 22,
                      borderTop: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 12,
                        color: 'rgba(255,255,255,0.76)',
                        lineHeight: 1.85,
                        fontSize: 14,
                      }}
                    >
                      <CreditCardIcon
                        width={18}
                        height={18}
                        aria-hidden="true"
                        style={{ color: palette.gold, flexShrink: 0, marginTop: 2 }}
                      />
                      <span>
                        Direct billing support is available for Sun Life, Manulife, Green Shield
                        Canada, Blue Cross, Canada Life, WSIB, and more.
                      </span>
                    </div>
                  </div>
                </Surface>
              </Reveal>

              <Reveal direction="right" delay={0.06}>
                <Surface
                  tone="paper"
                  style={{
                    padding: 'clamp(1.85rem, 3.4vw, 2.55rem)',
                    minHeight: '100%',
                  }}
                >
                  <div className="flex flex-wrap gap-2.5" style={{ marginBottom: 20 }}>
                    <TrustChip>Burlington Clinic</TrustChip>
                    <TrustChip>No Referral Required</TrustChip>
                  </div>

                  <Eyebrow>Clinic Details</Eyebrow>
                  <h2
                    style={{
                      fontFamily: serifFont,
                      color: palette.bodyDark,
                      fontWeight: 300,
                      fontSize: 'clamp(2.2rem, 4.2vw, 3.5rem)',
                      lineHeight: 1,
                      letterSpacing: '-0.04em',
                      marginBottom: 16,
                    }}
                  >
                    Burlington & Waterdown.
                  </h2>
                  <p
                    style={{
                      color: palette.body,
                      fontSize: 16,
                      lineHeight: 1.9,
                      maxWidth: 520,
                      marginBottom: 28,
                    }}
                  >
                    Easy to reach from Burlington, Waterdown, Flamborough, Carlisle, and Oakville.
                  </p>

                  <div style={{ display: 'grid', gap: 20, marginBottom: 22 }}>
                    {clinicDetails.map((detail, index) => (
                      <Reveal key={detail.label} delay={0.05 * index}>
                        <DetailRow label={detail.label} value={detail.value} icon={detail.icon} />
                      </Reveal>
                    ))}
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 10,
                    }}
                  >
                    {serviceAreas.map((area) => (
                      <span
                        key={area}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '10px 14px',
                          borderRadius: 999,
                          border: `1px solid ${palette.line}`,
                          background: 'rgba(255,255,255,0.66)',
                          color: palette.bodyDark,
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
                </Surface>
              </Reveal>
            </div>
          </div>
        </section>

        <section
          style={{
            position: 'relative',
            padding: `0 0 ${sectionPadding}`,
            background: `linear-gradient(180deg, ${palette.navy} 0%, ${palette.ink} 100%)`,
            overflow: 'hidden',
          }}
        >
          <div className="container mx-auto max-w-5xl px-6 sm:px-8 lg:px-16">
            <Reveal>
              <Surface
                tone="glass"
                style={{
                  padding: 'clamp(2rem, 5vw, 3rem)',
                  borderRadius: 34,
                }}
              >
                <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
                  <div>
                    <Eyebrow light>Book Your Assessment</Eyebrow>
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
                      Choose a time that works for you.
                    </h2>
                    <p
                      style={{
                        color: 'rgba(255,255,255,0.76)',
                        fontSize: 16,
                        lineHeight: 1.9,
                        maxWidth: 520,
                      }}
                    >
                      No referral required. Book online in under a minute or call the clinic
                      directly.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                    <BookingCTA
                      size="lg"
                      className="w-full sm:w-auto !rounded-[14px] sm:!rounded-[10px] !px-8 !py-4 !text-[11px] !tracking-[0.22em] !shadow-[0_22px_60px_-28px_rgba(212,175,55,0.72)]"
                    >
                      Book Assessment
                      <ArrowRightIcon width={14} height={14} aria-hidden="true" />
                    </BookingCTA>

                    <SecondaryAction href="tel:+19056346000">
                      <PhoneIcon width={15} height={15} aria-hidden="true" />
                      (905) 634-6000
                    </SecondaryAction>
                  </div>
                </div>
              </Surface>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
