import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | Kareem Hassanein Physiotherapy',
  description: 'The page you are looking for could not be found.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-5">
      <div className="max-w-lg w-full text-center">
        {/* 404 indicator */}
        <p className="text-sm font-medium tracking-widest uppercase text-[#B08D57] mb-4">
          404
        </p>

        <h1 className="text-3xl md:text-4xl font-light tracking-tight text-slate-900 mb-3">
          Page not found
        </h1>

        <p className="text-slate-500 mb-10 leading-relaxed">
          This page may have been moved or no longer exists.
        </p>

        {/* Navigation options */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-[#B08D57] text-white text-sm font-medium rounded-lg hover:bg-[#9A7A4A] transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/conditions"
            className="inline-flex items-center justify-center px-6 py-2.5 border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:border-[#B08D57]/40 hover:text-[#B08D57] transition-colors"
          >
            View Conditions
          </Link>
          <a
            href="https://endorphinshealth.janeapp.com/#/staff_member/42"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2.5 border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:border-[#B08D57]/40 hover:text-[#B08D57] transition-colors"
          >
            Book Appointment
          </a>
        </div>

        {/* Subtle divider */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-slate-200" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#B08D57]/40" />
          <div className="h-px w-12 bg-slate-200" />
        </div>

        <p className="mt-6 text-xs text-slate-400">
          Call{' '}
          <a href="tel:+19056346000" className="text-[#B08D57] hover:underline">
            (905) 634-6000
          </a>
          {' '}if you need help finding what you&apos;re looking for.
        </p>
      </div>
    </main>
  );
}
