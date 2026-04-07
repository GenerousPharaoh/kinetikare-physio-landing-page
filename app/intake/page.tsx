import type { Metadata } from 'next';
import IntakeForm from '@/components/intake/IntakeForm';

export const metadata: Metadata = {
  title: 'Book Your Assessment | Kareem Hassanein Physiotherapy Burlington',
  description:
    'Start your recovery journey. Fill out a quick intake form and book your physiotherapy assessment with Kareem Hassanein, Registered Physiotherapist in Burlington.',
  openGraph: {
    title: 'Book Your Assessment | Kareem Hassanein Physiotherapy',
    description:
      'Quick intake form and online booking for physiotherapy in Burlington. Direct insurance billing, evening appointments, no referral needed.',
  },
  robots: 'index, follow',
};

export default function IntakePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero / intro */}
      <section className="pt-28 pb-8 sm:pt-32 sm:pb-10">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-sm font-medium tracking-wide text-[#B08D57] uppercase mb-3">
            Book Your Assessment
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-[2.6rem] font-serif font-light text-[#1A2036] leading-tight tracking-tight">
            Start Your <span className="text-[#D4AF37]">Recovery</span>
          </h1>
          <p className="mt-4 text-slate-500 max-w-lg mx-auto leading-relaxed">
            Fill out a short intake form so I can prepare for your visit, then
            pick a time that works for you.
          </p>
        </div>
      </section>

      {/* Form card */}
      <section className="pb-20 sm:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 p-6 sm:p-10">
            <IntakeForm />
          </div>

          {/* Trust signals */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#B08D57]">
                <path d="M7 1l1.76 3.57L13 5.24l-3 2.92.71 4.13L7 10.27 3.29 12.3 4 8.16 1 5.24l4.24-.67L7 1z" fill="currentColor" />
              </svg>
              5.0 Stars on Google
            </span>
            <span>Direct Insurance Billing</span>
            <span>No Referral Needed</span>
            <span>Evening Appointments</span>
            <span>Free Parking</span>
          </div>
        </div>
      </section>
    </main>
  );
}
