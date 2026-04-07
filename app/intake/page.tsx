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
      'Book physiotherapy in Burlington. 5.0 stars on Google, direct insurance billing, evening appointments, no referral needed. One-on-one care with a Registered Physiotherapist.',
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
    text: 'Kareem is honestly one of the best physiotherapists I\'ve ever seen. He fixed issues I\'d been struggling with for a long time.',
  },
  {
    name: 'Thanula G.',
    text: 'Thorough, knowledgeable, and incredibly attentive. I saw consistent progress and now feel stronger and pain free.',
  },
  {
    name: 'David Espinosa',
    text: 'He took the time to figure out what was causing it instead of just treating the pain. My hip feels strong again.',
  },
];

const commitments = [
  {
    title: 'One-on-One Sessions',
    desc: 'Your entire appointment is with Kareem. No assistants, no handoffs, no sharing time with other patients.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <circle cx="12" cy="7" r="4" />
        <path d="M4 21c0-4 4-7 8-7s8 3 8 7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Root Cause Focus',
    desc: 'Not just treating symptoms. A thorough assessment of your movement patterns to address what is actually driving your pain.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Treatment From Day One',
    desc: 'Your first visit includes both assessment and hands-on treatment. No wasting a session on paperwork alone.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Evidence-Based Care',
    desc: 'Every intervention backed by current research. Manual therapy, dry needling, cupping, and progressive exercise rehabilitation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" strokeLinecap="round" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <path d="M9 14l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const logistics = [
  { label: 'No referral needed', icon: 'check' },
  { label: 'Direct insurance billing', icon: 'check' },
  { label: 'Evening appointments', icon: 'check' },
  { label: 'Free on-site parking', icon: 'check' },
  { label: 'Same-week availability', icon: 'check' },
  { label: 'Sun Life, Manulife, GSC, Blue Cross + more', icon: 'check' },
];

export default function IntakePage() {
  return (
    <main className="min-h-screen">
      {/* ---------------------------------------------------------------- */}
      {/* HERO */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative bg-[#020617] overflow-hidden">
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23fff\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")' }} />

        <div className="relative container mx-auto px-5 sm:px-6 lg:px-8 max-w-5xl pt-32 pb-20 sm:pt-36 sm:pb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left column */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-xs font-medium tracking-wide">Accepting New Patients</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white leading-[1.15] tracking-tight mb-5">
                Book Your{' '}
                <span className="text-[#D4AF37]">Assessment</span>
              </h1>

              <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-md">
                One-on-one physiotherapy with Kareem Hassanein, Registered
                Physiotherapist. Burlington and Waterdown.
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
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wide text-white/80 border border-white/15 hover:border-white/30 hover:text-white transition-all duration-200"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  (905) 634-6000
                </a>
              </div>

              {/* Stars + review count */}
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#D4AF37]" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 1l2.39 4.84L17.3 6.7l-3.54 3.46.84 4.88L10 12.77l-4.6 2.27.84-4.88L2.7 6.7l4.91-.86L10 1z" />
                    </svg>
                  ))}
                </div>
                <span className="text-white/50 text-sm">5.0 from 17 Google Reviews</span>
              </div>
            </div>

            {/* Right column: profile */}
            <div className="hidden lg:block">
              <div className="relative bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-white/10 flex-shrink-0">
                    <Image
                      src="/images/kareem-profile.webp"
                      alt="Kareem Hassanein, Registered Physiotherapist"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-white font-serif text-xl">Kareem Hassanein</h2>
                    <p className="text-[#D4AF37] text-sm font-medium mt-0.5">Registered Physiotherapist</p>
                    <p className="text-white/40 text-xs mt-1">MSc PT, BSc Kin &middot; CPO Reg. #20079</p>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-white/50">
                    <svg className="w-4 h-4 text-[#D4AF37]/60 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                    <span>4631 Palladium Way, Unit 6, Burlington</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/50">
                    <svg className="w-4 h-4 text-[#D4AF37]/60 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                    <span>Mon/Tue/Thu 1:30-8 PM &middot; Wed/Fri 2-7:30 PM</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/50">
                    <svg className="w-4 h-4 text-[#D4AF37]/60 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z" />
                      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Burlington, Waterdown, Flamborough, Carlisle</span>
                  </div>
                </div>

                {/* Credentials bar */}
                <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap gap-2">
                  {['Manual Therapy', 'Dry Needling', 'Cupping', 'Sports Rehab'].map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded-md bg-white/[0.06] text-white/40 text-xs">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* LOGISTICS BAR */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-[#0f172a] border-t border-white/5">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-5xl py-5">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {logistics.map((item) => (
              <span key={item.label} className="flex items-center gap-2 text-white/50 text-xs sm:text-sm">
                <svg className="w-3.5 h-3.5 text-emerald-400/70" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8.5l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* WHAT TO EXPECT */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-sm font-medium tracking-wide text-[#B08D57] uppercase mb-3">
              What to Expect
            </p>
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-[#1A2036] tracking-tight">
              Individualized care, every session
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {commitments.map((c) => (
              <div
                key={c.title}
                className="group p-6 rounded-2xl border border-slate-100 hover:border-[#B08D57]/20 hover:shadow-lg hover:shadow-[#B08D57]/5 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#B08D57]/10 to-[#D4AF37]/10 flex items-center justify-center text-[#B08D57] mb-4">
                  {c.icon}
                </div>
                <h3 className="text-[#1A2036] font-medium mb-2">{c.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* REVIEWS */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-10">
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-[#D4AF37]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 1l2.39 4.84L17.3 6.7l-3.54 3.46.84 4.88L10 12.77l-4.6 2.27.84-4.88L2.7 6.7l4.91-.86L10 1z" />
                </svg>
              ))}
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-[#1A2036] tracking-tight">
              5.0 stars from 17 reviews
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {reviews.map((r) => (
              <blockquote
                key={r.name}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"
              >
                <p className="text-slate-600 text-sm leading-relaxed mb-4 italic">
                  &ldquo;{r.text}&rdquo;
                </p>
                <footer className="text-xs font-medium text-[#1A2036]">{r.name}</footer>
              </blockquote>
            ))}
          </div>

          <p className="text-center mt-6">
            <Link
              href="https://www.google.com/maps/place/Endorphins+Health+%26+Wellness+Centre"
              target="_blank"
              className="text-sm text-[#B08D57] hover:text-[#96793e] font-medium transition-colors"
            >
              Read all reviews on Google &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* PRICING */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center mb-10">
            <p className="text-sm font-medium tracking-wide text-[#B08D57] uppercase mb-3">
              Transparent Pricing
            </p>
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-[#1A2036] tracking-tight">
              No hidden fees
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            <div className="text-center p-6 rounded-2xl border border-slate-100 bg-slate-50/50">
              <p className="text-sm text-slate-500 mb-1">Initial Assessment</p>
              <p className="text-3xl font-light text-[#1A2036]">$130</p>
              <p className="text-xs text-slate-400 mt-1">Assessment + treatment</p>
            </div>
            <div className="text-center p-6 rounded-2xl border border-slate-100 bg-slate-50/50">
              <p className="text-sm text-slate-500 mb-1">Follow-up Session</p>
              <p className="text-3xl font-light text-[#1A2036]">$90</p>
              <p className="text-xs text-slate-400 mt-1">30-minute session</p>
            </div>
          </div>

          <p className="text-center text-sm text-slate-400 mt-5">
            Direct billing to Sun Life, Manulife, Green Shield Canada, Blue Cross, Canada Life, WSIB + more.
            <br />
            Most extended health plans cover physiotherapy.
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* BOTTOM CTA */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative bg-[#020617] py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23fff\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")' }} />

        <div className="relative container mx-auto px-5 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-serif font-light text-white tracking-tight mb-4">
            Ready to move forward?
          </h2>
          <p className="text-white/50 mb-8 leading-relaxed">
            Book online in under a minute. No referral required. If you have questions first, call any time during clinic hours.
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
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-bold uppercase tracking-wide text-white/70 border border-white/15 hover:border-white/30 hover:text-white transition-all duration-200"
            >
              (905) 634-6000
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
