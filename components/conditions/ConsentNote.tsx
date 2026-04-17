import { ShieldCheckIcon } from '@heroicons/react/24/outline';

/**
 * Consent + alternatives note. Short, warm, two-sentence framing that:
 *   1. Signals informed consent as the default for any hands-on assessment or treatment
 *   2. Makes clear that alternatives are available if something does not suit the patient
 *
 * Designed to be visible but unobtrusive. Mounted once per relevant page (hub pages,
 * pain guides, and a single placement on condition pages via ConditionPageClient).
 */
export default function ConsentNote({ className = '' }: { className?: string }) {
  return (
    <aside
      className={`mt-8 rounded-lg border border-slate-200 bg-slate-50/80 p-4 ${className}`}
      aria-label="About hands-on assessment"
    >
      <div className="flex items-start gap-3">
        <ShieldCheckIcon className="h-5 w-5 flex-none text-[#B08D57] mt-0.5" aria-hidden="true" />
        <p className="text-sm text-slate-600 leading-relaxed m-0">
          Every part of an assessment runs on informed consent. I explain what I am checking for
          and why before I do it, and I can offer an alternative approach if a test or technique
          does not suit your comfort level or needs.
        </p>
      </div>
    </aside>
  );
}
