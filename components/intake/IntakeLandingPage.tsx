'use client';

import type { CSSProperties, ComponentType, ReactNode, SVGProps } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  ArrowRightIcon,
  ClockIcon,
  CreditCardIcon,
  MapPinIcon,
  PhoneIcon,
  StarIcon,
} from '@heroicons/react/24/solid';
import { CheckCircleIcon, MagnifyingGlassIcon, HandRaisedIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BookingCTA from '@/components/intake/BookingCTA';

/* ─── PALETTE ─── */
const c = {
  black: '#111111',
  charcoal: '#1C1917',
  text: '#292524',
  textMid: '#57534E',
  textLight: '#78716C',
  textFaint: '#A8A29E',
  gold: '#B8960C',
  goldBright: '#D4AF37',
  bg: '#FAFAF9',
  white: '#FFFFFF',
  stone50: '#F5F5F4',
  stone100: '#E7E5E4',
  stone200: '#D6D3D1',
};

const serif = '"Playfair Display", Georgia, serif';
const sans = '"Inter", system-ui, sans-serif';
type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

/* ─── DATA ─── */
const visitSteps = [
  { icon: MagnifyingGlassIcon, label: 'Assess', title: 'Find the root cause', text: 'A thorough movement and injury assessment to understand exactly what is driving the problem.' },
  { icon: HandRaisedIcon, label: 'Treat', title: 'Start treatment immediately', text: 'Hands-on care in the same visit. Joint mobilization, dry needling, or soft tissue work based on findings.' },
  { icon: ClipboardDocumentCheckIcon, label: 'Plan', title: 'Leave with a clear plan', text: 'Specific exercises, a recovery timeline, and measurable goals to track your progress.' },
];

const conditionsRow1 = [
  { label: 'Back Pain', slug: 'low-back-pain' },
  { label: 'Knee Injuries', slug: 'knee-pain-patellofemoral' },
  { label: 'Shoulder Pain', slug: 'shoulder-impingement' },
  { label: 'Hip Pain', slug: 'hip-osteoarthritis' },
  { label: 'Sciatica', slug: 'sciatica' },
  { label: 'Sports Injuries', slug: 'sports-injuries' },
  { label: 'Neck Pain', slug: 'neck-pain' },
  { label: 'Ankle Sprains', slug: 'ankle-sprains' },
  { label: 'Tennis Elbow', slug: 'tennis-elbow' },
  { label: 'Post-Surgery Rehab', slug: 'post-surgical-rehabilitation' },
];
const conditionsRow2 = [
  { label: 'Plantar Fasciitis', slug: 'plantar-fasciitis' },
  { label: 'Rotator Cuff', slug: 'rotator-cuff-injuries' },
  { label: 'Achilles Pain', slug: 'achilles-tendinopathy' },
  { label: 'IT Band Pain', slug: 'it-band-syndrome' },
  { label: 'Running Injuries', slug: 'running-injuries' },
  { label: 'Frozen Shoulder', slug: 'frozen-shoulder' },
  { label: 'Arthritis', slug: 'knee-osteoarthritis' },
  { label: 'Muscle Strains', slug: 'muscle-strains' },
];

const reviews = [
  { name: 'Dr. Fel Rocci', text: 'His thorough diagnosis combined with an adaptable approach has been nothing short of amazing. I am now able to play tennis 4-5 times a week without a setback. Not bad for a 70 year old!' },
  { name: 'Nickel Chan', text: "Kareem is honestly one of the best physiotherapists I've ever seen. The dry needling and manual therapy made a huge difference. He fixed issues I'd been struggling with for a long time." },
  { name: 'Thanula G.', text: 'I came in with an ankle injury and from the very first session, Kareem was thorough, knowledgeable, and incredibly attentive. I saw consistent progress and now feel stronger and pain free.' },
  { name: 'Ryan Darkwah', text: "He found that the problem came from weakness in my hip and tension in my quads putting extra strain on my knee. My pain's gone now, and I'm back to playing at full speed." },
  { name: 'David Espinosa', text: "Kareem took the time to figure out what was causing my hip pain instead of just treating it. The dry needling and cupping made a big difference right away. My hip feels strong again and I've been training hard without any flare-ups." },
  { name: 'D Belisle', text: "After knee surgery, Kareem took the time to truly understand my situation and tailor a treatment plan. His professionalism, knowledge, and genuine care made a huge difference in my recovery." },
  { name: 'Mitch Ball', text: "I struggled with rotator cuff, hip, and back pain from weightlifting. His assessments helped me understand what was wrong, and the dry needling and deep tissue work really accelerated my recovery." },
  { name: 'Pasquale Di Clemente', text: "He's great at adjusting each session based on how I'm feeling. The exercises have made a big difference in my strength and balance, and the dry needling and cupping helped loosen my tight muscles." },
  { name: 'Tami Murzin', text: "I had a shoulder injury and Kareem developed a treatment plan that was both effective and manageable. His knowledge and hands-on approach helped me regain strength and mobility much faster than I expected." },
  { name: 'Marko Vasilic', text: "I had achilles tendinitis and plantar fasciitis holding me back from basketball. Kareem did a full movement analysis, used dry needling and cupping, and I'm now back to playing comfortably without worrying about flare-ups." },
  { name: 'Johan Mapa', text: "Kareem treated my plantar fasciitis that had been bothering me for months. After my first appointment, almost all the pain was gone. I always notice improvements in my mobility after each session." },
  { name: 'Kendra MacCuish', text: "I came in with a bad shoulder injury. Kareem put together a therapy plan including cupping, dry needling, and shockwave therapy that allowed me to reduce my pain while increasing my range of motion." },
  { name: 'Nader S', text: "I took my elderly father to Kareem for hip and back pain. He took his time to assess the issue carefully and determine the right care. My father's mobility immediately improved." },
];

const clinicDetails: Array<{ label: string; value: string; icon: IconComponent }> = [
  { label: 'Location', value: 'Endorphins Health & Wellness Centre\n4631 Palladium Way, Unit 6\nBurlington, ON', icon: MapPinIcon },
  { label: 'Hours', value: 'Mon / Tue / Thu: 1:30 \u2013 8:00 PM\nWed / Fri: 2:00 \u2013 7:30 PM', icon: ClockIcon },
  { label: 'Billing', value: 'Direct billing for Sun Life, Manulife, Green Shield, Blue Cross, Canada Life, WSIB, and more.', icon: CreditCardIcon },
];

const serviceAreas = ['Burlington', 'Waterdown', 'Flamborough', 'Carlisle', 'Oakville'];

/* ─── HELPERS ─── */
function Stars({ size = 14 }: { size?: number }) {
  return <span style={{ display: 'inline-flex', gap: 2 }}>{[...Array(5)].map((_, i) => <StarIcon key={i} width={size} height={size} style={{ color: c.goldBright }} aria-hidden="true" />)}</span>;
}

function Reveal({ children, delay = 0, from = 'bottom', style, className }: {
  children: ReactNode; delay?: number; from?: 'bottom' | 'left' | 'right' | 'scale'; style?: CSSProperties; className?: string;
}) {
  const reduced = useReducedMotion();
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true, rootMargin: '0px 0px -6% 0px' });
  const init: Record<string, number> = { opacity: 0 };
  if (from === 'bottom') init.y = 48;
  if (from === 'left') init.x = -60;
  if (from === 'right') init.x = 60;
  if (from === 'scale') { init.scale = 0.9; init.y = 24; }
  return (
    <motion.div ref={ref} initial={reduced ? false : init} animate={reduced || inView ? { opacity: 1, x: 0, y: 0, scale: 1 } : init}
      transition={{ duration: 0.95, delay, ease: [0.22, 1, 0.36, 1] }} className={className} style={style}>{children}</motion.div>
  );
}

function GoldDivider({ padding = 48 }: { padding?: number } = {}) {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  return (
    <div ref={ref} style={{ display: 'flex', justifyContent: 'center', padding: `${padding}px 0` }}>
      <motion.div initial={{ width: 0 }} animate={inView ? { width: 160 } : { width: 0 }} transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ height: 1, background: `linear-gradient(90deg, transparent, ${c.goldBright}80, ${c.goldBright}, ${c.goldBright}80, transparent)`, borderRadius: 1 }} />
    </div>
  );
}

function AnimatedTimelineLine() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <div ref={ref} className="hidden lg:block" style={{ position: 'absolute', top: 32, left: '16.66%', right: '16.66%', height: 2, zIndex: 0, overflow: 'hidden' }}>
      <motion.div
        initial={{ width: '0%' }}
        animate={inView ? { width: '100%' } : { width: '0%' }}
        transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ height: '100%', background: `linear-gradient(90deg, ${c.stone200}, ${c.goldBright} 30%, ${c.goldBright} 70%, ${c.stone200})` }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════ */

export default function IntakeLandingPage() {
  const reduced = useReducedMotion();
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const photoY = useSpring(useTransform(heroProgress, [0, 1], [0, 70]), { stiffness: 80, damping: 25 });
  const heroTextY = useSpring(useTransform(heroProgress, [0, 1], [0, 40]), { stiffness: 100, damping: 30 });
  const heroOpacity = useTransform(heroProgress, [0, 0.95], [1, 0]);

  const reviewRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress: reviewProgress } = useScroll({ target: reviewRef, offset: ['start end', 'end start'] });
  const reviewBgY = useSpring(useTransform(reviewProgress, [0, 1], [-30, 30]), { stiffness: 60, damping: 30 });
  const reviewBgScale = useSpring(useTransform(reviewProgress, [0, 0.5, 1], [1.1, 1.05, 1]), { stiffness: 60, damping: 30 });

  const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.1 } } };
  const up = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };

  const [activeReview, setActiveReview] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const next = useCallback(() => setActiveReview((p) => (p + 1) % reviews.length), []);
  useEffect(() => { timer.current = setInterval(next, 5500); return () => { if (timer.current) clearInterval(timer.current); }; }, [next]);
  const go = (i: number) => { setActiveReview(i); if (timer.current) clearInterval(timer.current); timer.current = setInterval(next, 5500); };

  // Mobile detection for marquee speed (mobile needs faster scroll)
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <>
      <style>{`
        .intake-page, .intake-page * { font-style: normal !important; }
        .intake-page section { padding: 0 !important; }
        .intake-hero { min-height: 100vh; min-height: 100dvh; }
        @media (prefers-reduced-motion: reduce) { .intake-page .animate-ping { display: none !important; } }
        .intake-cta-hover { transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease !important; }
        .intake-cta-hover:hover { transform: translateY(-3px) !important; box-shadow: 0 20px 56px -12px rgba(184,150,12,0.5) !important; }
        .intake-pill { transition: all 0.25s cubic-bezier(0.22,1,0.36,1) !important; cursor: default; }
        .intake-pill:hover { transform: translateY(-2px) !important; border-color: #D4AF37 !important; box-shadow: 0 4px 12px -4px rgba(184,150,12,0.15) !important; }
        .intake-page [data-booking-cta] { color: #1C1917 !important; }
        .intake-page [data-booking-cta]:hover { color: #1C1917 !important; }
        .intake-page [data-booking-cta]:visited { color: #1C1917 !important; }
        .intake-mobile-portrait { display: block !important; }
        @media (min-width: 1024px) { .intake-mobile-portrait { display: none !important; } }
      `}</style>

      <main className="intake-page" style={{ fontFamily: sans, background: c.bg, color: c.text, WebkitFontSmoothing: 'antialiased', overflow: 'hidden' }}>

        {/* Floating CTA removed — conflicts with scroll-to-top button */}

        {/* ═══════════════ HERO ═══════════════ */}
        <section ref={heroRef} className="intake-hero" style={{ position: 'relative', background: c.bg, paddingBottom: 'clamp(4rem, 8vw, 6rem)' }}>
          <div style={{ position: 'absolute', inset: 0, opacity: 0.015, backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")', backgroundSize: '200px', pointerEvents: 'none' }} />

          <motion.div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)', display: 'flex', minHeight: '100vh', alignItems: 'center', paddingTop: 'clamp(7rem, 14vh, 10rem)', opacity: reduced ? 1 : heroOpacity }}>
            <motion.div initial="hidden" animate="visible" variants={reduced ? undefined : stagger} style={{ display: 'grid', width: '100%', alignItems: 'start', gap: 'clamp(3rem, 6vw, 5rem)', gridTemplateColumns: '1fr' }} className="lg:!grid-cols-[1fr_380px]">

              <motion.div style={{ y: reduced ? 0 : heroTextY, paddingTop: 'clamp(0rem, 4vh, 3rem)' }}>
                <motion.div variants={up} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 48 }}>
                  <span className="relative flex" style={{ width: 8, height: 8 }}>
                    <span className="animate-ping" style={{ position: 'absolute', inset: 0, borderRadius: '50%', backgroundColor: '#6EE7B7', opacity: 0.6 }} />
                    <span style={{ position: 'relative', display: 'block', width: 8, height: 8, borderRadius: '50%', backgroundColor: '#059669' }} />
                  </span>
                  <span style={{ fontSize: 13, fontWeight: 500, color: '#059669' }}>Accepting new patients</span>
                </motion.div>

                <motion.h1 variants={up} style={{ fontFamily: serif, fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 700, lineHeight: 0.95, letterSpacing: '-0.04em', color: c.black, marginBottom: 8 }}>
                  Book Your
                </motion.h1>
                <motion.div variants={up} aria-hidden="true" style={{ fontFamily: serif, fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 300, lineHeight: 0.95, letterSpacing: '-0.04em', color: c.gold, marginBottom: 48, fontStyle: 'italic' }}>
                  Assessment
                </motion.div>

                <motion.p variants={up} style={{ maxWidth: 460, color: c.textMid, fontSize: 17, lineHeight: 1.75, marginBottom: 36 }}>
                  Personalized one-on-one physiotherapy that gets to the source of your pain so you can move freely and feel like yourself again.
                </motion.p>

                {/* Mobile portrait card — visible only below lg */}
                <motion.div variants={up} className="lg:hidden intake-mobile-portrait" style={{ marginBottom: 32, padding: 14, borderRadius: 18, background: c.white, border: `1px solid ${c.stone200}`, boxShadow: '0 18px 38px -24px rgba(15,23,42,0.25)' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '88px 1fr', gap: 14, alignItems: 'center' }}>
                    <img
                      src="/images/professional-photo-kareem-hassanein-registered-physiotherapist-burlington-waterdown-flamborough-oakville-carlisle.png"
                      alt="Kareem Hassanein, Registered Physiotherapist"
                      width={176}
                      height={242}
                      style={{ width: 88, height: 108, borderRadius: 14, objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
                    />
                    <div>
                      <p style={{ fontFamily: serif, fontSize: 16, fontWeight: 700, color: c.black, marginBottom: 4 }}>Kareem Hassanein</p>
                      <p style={{ fontSize: 11, color: c.gold, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>Registered Physiotherapist</p>
                      <p style={{ fontSize: 10, color: c.textLight, fontWeight: 500, letterSpacing: '0.04em' }}>MSc PT, BSc Kin &middot; CPO #20079</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={up} className="flex flex-col gap-3 sm:flex-row sm:gap-4" style={{ marginBottom: 40 }}>
                  <BookingCTA size="lg" className="intake-cta-hover w-full sm:w-auto !rounded-none !px-12 !py-5 !text-xs !tracking-[0.25em]" style={{ boxShadow: '0 16px 48px -12px rgba(184,150,12,0.4)' }}>
                    BOOK ASSESSMENT <ArrowRightIcon width={14} height={14} aria-hidden="true" />
                  </BookingCTA>
                  <a href="tel:+19056346000" className="intake-cta-hover inline-flex items-center justify-center gap-3" style={{ padding: '20px 28px', border: `1.5px solid ${c.stone200}`, color: c.text, fontSize: 13, fontWeight: 600, letterSpacing: '0.04em', cursor: 'pointer' }}>
                    <PhoneIcon width={16} height={16} style={{ color: c.gold }} /> (905) 634-6000
                  </a>
                </motion.div>

                {/* Trust row — more breathing room */}
                <motion.div variants={up} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16, paddingTop: 8, paddingBottom: 16, borderTop: `1px solid ${c.stone100}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Stars size={13} />
                    <span style={{ fontSize: 14, fontWeight: 700, color: c.text }}>5.0</span>
                    <span style={{ fontSize: 13, color: c.textLight }}>from 17 reviews</span>
                  </div>
                  <span style={{ width: 1, height: 14, background: c.stone200 }} className="hidden sm:block" />
                  {['Direct Billing', 'No Referral', 'Evening Hours'].map((b) => (
                    <span key={b} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 500, color: c.textLight }}>
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: c.goldBright, flexShrink: 0 }} />
                      {b}
                    </span>
                  ))}
                </motion.div>
{/* Name/credentials shown as overlay on portrait */}
              </motion.div>

              {/* PORTRAIT */}
              <motion.div className="hidden lg:block" initial={reduced ? false : { opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2, delay: 0.25, ease: [0.22, 1, 0.36, 1] }} style={{ position: 'relative', zIndex: 10 }}>
                <motion.div style={{ position: 'relative', y: reduced ? 0 : photoY, overflow: 'hidden', aspectRatio: '4 / 5', borderRadius: 4 }}>
                  <img src="/images/professional-photo-kareem-hassanein-registered-physiotherapist-burlington-waterdown-flamborough-oakville-carlisle.png" alt="Kareem Hassanein, Registered Physiotherapist in Burlington" width={826} height={1169} style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover', objectPosition: 'center 18%', filter: 'contrast(1.03)' }} />

                  {/* Dark gradient at bottom for overlay legibility */}
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '45%', background: 'linear-gradient(to top, rgba(17,17,17,0.85), rgba(17,17,17,0.2) 60%, transparent)', pointerEvents: 'none' }} />

                  {/* Frosted name/credentials banner overlaying bottom of photo */}
                  <motion.div
                    initial={reduced ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 24px', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', background: 'rgba(17,17,17,0.5)', borderTop: '1px solid rgba(212,175,55,0.3)' }}
                  >
                    <p style={{ fontFamily: serif, fontSize: 18, fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.01em', marginBottom: 4 }}>Kareem Hassanein</p>
                    <p style={{ fontSize: 11, color: 'rgba(212,175,55,0.95)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: 1.4 }}>
                      Registered Physiotherapist
                    </p>
                    <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.55)', fontWeight: 500, letterSpacing: '0.06em', marginTop: 4 }}>
                      MSc PT &middot; BSc Kin &middot; CPO #20079
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Premium bottom edge */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 5 }}>
            <div style={{ height: 1, background: `linear-gradient(90deg, transparent 5%, ${c.goldBright}40 30%, ${c.goldBright}60 50%, ${c.goldBright}40 70%, transparent 95%)` }} />
            <div style={{ height: 40, background: 'linear-gradient(to bottom, rgba(0,0,0,0.04), transparent)', pointerEvents: 'none' }} />
          </div>
        </section>

        {/* ═══════════ REVIEWS — cinematic parallax ═══════════ */}
        <div ref={reviewRef} style={{ position: 'relative', overflow: 'hidden' }}>
          {/* Smooth gradient bridge from hero into dark */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 100, background: `linear-gradient(to bottom, ${c.bg}, transparent)`, zIndex: 3, pointerEvents: 'none' }} />
          <motion.div style={{ position: 'absolute', inset: '-80px 0', y: reduced ? 0 : reviewBgY, scale: reduced ? 1 : reviewBgScale }}>
            <img src="/images/clinic-room-may-25.webp" alt="" aria-hidden="true" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(17,17,17,0.82)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(17,17,17,0.9) 0%, rgba(17,17,17,0.65) 50%, rgba(17,17,17,0.9) 100%)' }} />
          </motion.div>

          <div style={{ position: 'relative', maxWidth: 780, margin: '0 auto', padding: 'clamp(7rem, 16vw, 14rem) clamp(1.5rem, 5vw, 4rem)', textAlign: 'center' }}>
            <Reveal from="scale">
              <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 24 }}><Stars size={18} /></div>
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: c.goldBright, marginBottom: 48 }}>5.0 from 17 Google Reviews</p>

              <div style={{ position: 'relative', height: 'clamp(200px, 28vw, 250px)' }}>
                <AnimatePresence mode="wait">
                  <motion.div key={activeReview}
                    initial={{ opacity: 0, y: 24, filter: 'blur(4px)', scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                    exit={{ opacity: 0, y: -24, filter: 'blur(4px)', scale: 0.96 }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <p style={{ fontFamily: serif, fontSize: 'clamp(1.25rem, 2.4vw, 1.85rem)', fontWeight: 300, lineHeight: 1.65, color: '#FFFFFFEE', maxWidth: 620, margin: '0 auto 32px' }}>
                      &ldquo;{reviews[activeReview].text}&rdquo;
                    </p>
                    <p style={{ fontSize: 13, fontWeight: 700, color: c.goldBright, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{reviews[activeReview].name}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 40 }}>
                {reviews.map((_, i) => (
                  <button key={i} onClick={() => go(i)} aria-label={`Review ${i + 1}`} style={{ width: 32, height: 44, border: 'none', background: 'transparent', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ display: 'block', width: activeReview === i ? 32 : 6, height: 6, borderRadius: 3, background: activeReview === i ? c.goldBright : 'rgba(255,255,255,0.18)', transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)' }} />
                  </button>
                ))}
              </div>
              <a href="https://www.google.com/maps/place/Endorphins+Health+%26+Wellness+Centre" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.35)', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 24, cursor: 'pointer', padding: '8px 0' }}>
                Read all on Google <ArrowRightIcon width={11} height={11} />
              </a>
            </Reveal>
          </div>

          {/* Gradient fade from dark to light */}
          <div style={{ position: 'relative', height: 80, marginTop: -1, background: 'linear-gradient(to bottom, rgba(17,17,17,0.9), transparent)', zIndex: 2, pointerEvents: 'none' }} />
        </div>

        {/* ═══════════ CONDITIONS — dual marquee rows ═══════════ */}
        <div style={{ background: c.white, paddingTop: 'clamp(3rem, 6vw, 4rem)', paddingBottom: 'clamp(3rem, 6vw, 4rem)', overflow: 'hidden' }}>
          <Reveal>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: c.gold, textAlign: 'center', marginBottom: 32 }}>Conditions Treated</p>
          </Reveal>
          <div style={{ position: 'relative' }}>
            {/* Edge fade masks */}
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 100, background: `linear-gradient(to right, ${c.white}, transparent)`, zIndex: 2, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 100, background: `linear-gradient(to left, ${c.white}, transparent)`, zIndex: 2, pointerEvents: 'none' }} />
            {/* Row 1 — scrolls left */}
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: isMobile ? 22 : 40, ease: 'linear', repeat: Infinity }}
              style={{ display: 'flex', gap: 12, width: 'max-content', marginBottom: 12 }}
            >
              {[...conditionsRow1, ...conditionsRow1].map((cond, i) => (
                <a key={`r1-${i}`} href={`/conditions/${cond.slug}`} className="intake-pill" style={{ padding: '10px 20px', fontSize: 14, fontWeight: 500, color: c.text, background: c.stone50, borderRadius: 999, whiteSpace: 'nowrap', border: `1px solid ${c.stone100}`, display: 'inline-block', flexShrink: 0, textDecoration: 'none' }}>
                  {cond.label}
                </a>
              ))}
            </motion.div>
            {/* Row 2 — scrolls right (opposite direction) */}
            <motion.div
              animate={{ x: ['-50%', '0%'] }}
              transition={{ duration: isMobile ? 25 : 45, ease: 'linear', repeat: Infinity }}
              style={{ display: 'flex', gap: 12, width: 'max-content' }}
            >
              {[...conditionsRow2, ...conditionsRow2].map((cond, i) => (
                <a key={`r2-${i}`} href={`/conditions/${cond.slug}`} className="intake-pill" style={{ padding: '10px 20px', fontSize: 14, fontWeight: 500, color: c.text, background: c.stone50, borderRadius: 999, whiteSpace: 'nowrap', border: `1px solid ${c.stone100}`, display: 'inline-block', flexShrink: 0, textDecoration: 'none' }}>
                  {cond.label}
                </a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ═══════════ 3-STEP VISUAL TIMELINE — your first visit ═══════════ */}
        <div style={{ background: c.bg, position: 'relative' }}>
          {/* Subtle radial glow behind timeline */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '60%', height: '80%', background: `radial-gradient(ellipse at center, rgba(212,175,55,0.04), transparent 60%)`, pointerEvents: 'none' }} />
          <div style={{ maxWidth: 1000, margin: '0 auto', padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)' }}>
            <Reveal>
              <div style={{ textAlign: 'center', marginBottom: 72 }}>
                <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: c.gold, marginBottom: 16 }}>Your First Visit</p>
                <h2 style={{ fontFamily: serif, color: c.black, fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.08, letterSpacing: '-0.03em' }}>
                  Assessment to action<br /><span style={{ fontWeight: 300, fontStyle: 'italic', color: c.gold }}>in one visit</span>
                </h2>
              </div>
            </Reveal>

            {/* Timeline: 3 columns with animated connecting gold line */}
            <div style={{ position: 'relative' }}>
              <AnimatedTimelineLine />

              <div className="grid gap-12 lg:grid-cols-3" style={{ position: 'relative', zIndex: 1 }}>
                {visitSteps.map((step, i) => (
                  <Reveal key={step.label} delay={0.15 * i} from="scale">
                    <div style={{ textAlign: 'center' }}>
                      {/* Icon circle with step number */}
                      <div style={{ position: 'relative', width: 64, height: 64, margin: '0 auto 24px' }}>
                        <div style={{ width: 64, height: 64, borderRadius: '50%', background: i === 0 ? c.charcoal : c.white, border: i === 0 ? 'none' : `2px solid ${c.stone200}`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: i === 0 ? '0 12px 32px -8px rgba(17,17,17,0.3)' : '0 6px 16px -4px rgba(0,0,0,0.06)' }}>
                          <step.icon width={26} height={26} style={{ color: i === 0 ? c.goldBright : c.gold }} />
                        </div>
                        {/* Step number badge */}
                        <div style={{ position: 'absolute', top: -4, right: -4, width: 22, height: 22, borderRadius: '50%', background: c.goldBright, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: c.white, boxShadow: '0 2px 8px -2px rgba(184,150,12,0.4)' }}>
                          {i + 1}
                        </div>
                      </div>
                      <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: c.gold, marginBottom: 8 }}>{step.label}</p>
                      <h3 style={{ fontFamily: serif, color: c.black, fontWeight: 700, fontSize: 20, lineHeight: 1.3, marginBottom: 12 }}>{step.title}</h3>
                      <p style={{ color: c.textMid, fontSize: 14, lineHeight: 1.75, maxWidth: 280, margin: '0 auto' }}>{step.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════ MID-PAGE CTA ═══════════ */}
        <Reveal from="scale">
          <div style={{ maxWidth: 720, margin: '0 auto', padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)', textAlign: 'center' }}>
            <p style={{ fontFamily: serif, fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: 700, color: c.black, lineHeight: 1.3, marginBottom: 8 }}>
              Ready to get started?
            </p>
            <p style={{ fontSize: 14, color: c.textLight, marginBottom: 24 }}>No referral required. Book online in under a minute.</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <BookingCTA size="md" className="intake-cta-hover w-full sm:w-auto !rounded-none !px-10 !py-4 !text-[11px] !tracking-[0.22em]" style={{ boxShadow: '0 12px 36px -8px rgba(184,150,12,0.35)' }}>
                BOOK ASSESSMENT <ArrowRightIcon width={13} height={13} aria-hidden="true" />
              </BookingCTA>
              <a href="tel:+19056346000" className="intake-cta-hover inline-flex items-center justify-center gap-2" style={{ padding: '16px 24px', border: `1.5px solid ${c.stone200}`, color: c.text, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                <PhoneIcon width={15} height={15} style={{ color: c.gold }} /> (905) 634-6000
              </a>
            </div>
          </div>
        </Reveal>

        {/* ═══════════ PRICING — full-width with treatment photo accent ═══════════ */}
        <div style={{ position: 'relative', background: c.white, overflow: 'hidden' }}>
          {/* Treatment photo as subtle side accent — desktop only */}
          <div className="hidden lg:block" style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '38%' }}>
            <img src="/images/treatment-photos/treatment-passive-stretching-knee-manual-therapy.jpg" alt="" aria-hidden="true" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', filter: 'contrast(1.04) saturate(1.05)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 50%, rgba(255,255,255,0.4) 80%, rgba(255,255,255,1) 100%)' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.15))' }} />
          </div>

          <div style={{ position: 'relative', maxWidth: 1100, margin: '0 auto', padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)' }}>
            <div className="lg:flex lg:justify-end">
              <Reveal from="right">
                <div style={{ maxWidth: 520 }} className="lg:!pl-16">
                  <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: c.gold, marginBottom: 16 }}>Fees</p>
                  <h2 style={{ fontFamily: serif, color: c.black, fontWeight: 700, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 40 }}>
                    Simple, transparent pricing
                  </h2>

                  {/* Pricing rows */}
                  <div style={{ display: 'grid', gap: 0 }}>
                    {[
                      { name: 'Initial Assessment', detail: 'Evaluation + treatment', price: '130' },
                      { name: 'Follow-up Session', detail: '30-minute session', price: '90' },
                    ].map((item, i) => (
                      <div key={item.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', borderBottom: `1px solid ${c.stone100}`, borderTop: i === 0 ? `1px solid ${c.stone100}` : 'none' }}>
                        <div>
                          <p style={{ fontSize: 15, fontWeight: 600, color: c.black, marginBottom: 2 }}>{item.name}</p>
                          <p style={{ color: c.textLight, fontSize: 13 }}>{item.detail}</p>
                        </div>
                        <p style={{ fontSize: 22, fontWeight: 700, color: c.black, whiteSpace: 'nowrap', marginLeft: 24, letterSpacing: '-0.02em' }}>
                          {item.price}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Trust signals as horizontal chips */}
                  <div className="flex flex-wrap gap-3" style={{ marginTop: 32 }}>
                    {[
                      { icon: CreditCardIcon, text: 'Direct Billing' },
                      { icon: CheckCircleIcon, text: 'No Referral' },
                      { icon: ClockIcon, text: 'Evening Hours' },
                    ].map((item) => (
                      <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 16px', background: c.stone50, borderRadius: 999, border: `1px solid ${c.stone100}` }}>
                        <item.icon width={15} height={15} style={{ color: c.gold, flexShrink: 0 }} />
                        <span style={{ fontSize: 12, fontWeight: 600, color: c.text }}>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* ═══════════ CLINIC — split: details + styled map ═══════════ */}
        <div style={{ background: c.stone50, borderTop: `1px solid ${c.stone100}` }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(5rem, 10vw, 8rem) clamp(1.5rem, 5vw, 4rem)' }}>
            <div className="grid gap-12 lg:grid-cols-2" style={{ alignItems: 'start' }}>
              {/* Left: details */}
              <Reveal from="left">
                <div>
                  <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: c.gold, marginBottom: 16 }}>The Clinic</p>
                  <h2 style={{ fontFamily: serif, color: c.black, fontWeight: 700, fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 48 }}>Burlington &amp; Waterdown</h2>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                    {clinicDetails.map((d, i) => (
                      <div key={d.label} style={{ display: 'flex', gap: 'clamp(16px, 3vw, 24px)', alignItems: 'flex-start', padding: '24px 0', borderBottom: i < clinicDetails.length - 1 ? `1px solid ${c.stone200}` : 'none' }}>
                        <div style={{ width: 40, height: 40, borderRadius: 10, background: c.white, border: `1px solid ${c.stone200}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 2px 8px -2px rgba(0,0,0,0.04)' }}>
                          <d.icon width={18} height={18} style={{ color: c.gold }} />
                        </div>
                        <div style={{ flex: 1 }}>
                          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: c.gold, marginBottom: 6 }}>{d.label}</p>
                          <p style={{ color: c.text, fontSize: 15, lineHeight: 1.75, whiteSpace: 'pre-line' }}>{d.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2" style={{ marginTop: 28 }}>
                    {serviceAreas.map((a) => <span key={a} style={{ padding: '7px 16px', fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: c.textMid, background: c.white, borderRadius: 999, border: `1px solid ${c.stone200}` }}>{a}</span>)}
                  </div>
                </div>
              </Reveal>

              {/* Right: styled Google Maps embed */}
              <Reveal from="right" delay={0.15}>
                <div style={{ position: 'relative' }}>
                  {/* Gold accent corner brackets */}
                  <div style={{ position: 'absolute', top: -8, left: -8, width: 40, height: 40, borderTop: `2px solid ${c.goldBright}50`, borderLeft: `2px solid ${c.goldBright}50`, borderRadius: '4px 0 0 0', zIndex: 2, pointerEvents: 'none' }} />
                  <div style={{ position: 'absolute', bottom: -8, right: -8, width: 40, height: 40, borderBottom: `2px solid ${c.goldBright}50`, borderRight: `2px solid ${c.goldBright}50`, borderRadius: '0 0 4px 0', zIndex: 2, pointerEvents: 'none' }} />

                  {/* Map container with dark/grayscale filter */}
                  <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 20px 60px -16px rgba(0,0,0,0.12)', border: `1px solid ${c.stone200}`, position: 'relative' }}>
                    <div style={{ position: 'relative' }}>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.3!2d-79.838055!3d43.430782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b63e5c1beb2c7%3A0x4b6f5e5e3e5e5e5e!2s4631+Palladium+Way+Unit+6%2C+Burlington%2C+ON!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                        width="100%"
                        height="420"
                        style={{ border: 0, display: 'block' }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Endorphins Health and Wellness Centre location"
                      />
                    </div>
                    {/* Gold gradient overlay at bottom */}
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, background: `linear-gradient(to top, ${c.stone50}cc, transparent)`, pointerEvents: 'none' }} />

                    {/* Floating address chip on map */}
                    <a
                      href="https://maps.app.goo.gl/JC7uKnd9zW4AJPP49"
                      target="_blank"
                      rel="noreferrer"
                      style={{ position: 'absolute', bottom: 20, left: 20, display: 'inline-flex', alignItems: 'center', gap: 8, background: c.white, borderRadius: 10, padding: '12px 18px', boxShadow: '0 8px 32px -8px rgba(0,0,0,0.15)', border: `1px solid ${c.stone100}`, cursor: 'pointer', textDecoration: 'none', zIndex: 1 }}
                    >
                      <MapPinIcon width={16} height={16} style={{ color: c.gold }} />
                      <div>
                        <p style={{ fontSize: 13, fontWeight: 700, color: c.black, lineHeight: 1.2 }}>Get Directions</p>
                        <p style={{ fontSize: 11, color: c.textLight, marginTop: 2 }}>4631 Palladium Way, Unit 6</p>
                      </div>
                      <ArrowRightIcon width={12} height={12} style={{ color: c.textFaint, marginLeft: 4 }} />
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

      </main>
    </>
  );
}
