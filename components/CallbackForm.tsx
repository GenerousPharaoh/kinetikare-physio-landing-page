'use client';

import { useState, type FormEvent } from 'react';

/**
 * Call-back request: the second path beside "Book online".
 *
 * Jane walls booking behind an account, and about 87% of the people who
 * click Book on the ads landing page never finish there. This asks for a
 * name and a phone number only, posts to /api/callback, which emails Kareem,
 * and reports `callback_request` to GA4 (event_label = source). If
 * NEXT_PUBLIC_ADS_CALLBACK_LABEL is set it also fires that Google Ads
 * conversion. No health information is collected: the "what is bothering
 * you" field is a short fixed list, there is no free text, and the request
 * goes straight to Kareem's inbox rather than being stored anywhere.
 */

const TIMES = ['Morning', 'Afternoon', 'Evening', 'Any time'] as const;
const AREAS = ['Knee', 'Hip', 'Foot or ankle', 'Back', 'Shoulder', 'Something else', 'Not sure'] as const;

const CLINIC_PHONE_DISPLAY = '(905) 634-6000';
const CLINIC_PHONE_TEL = '+19056346000';

interface CallbackFormProps {
  /** GA4 event_label, e.g. intake_callback or contact_callback. */
  source: string;
  id?: string;
  className?: string;
}

export default function CallbackForm({ source, id = 'call-back', className = '' }: CallbackFormProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') || '').trim(),
      phone: String(data.get('phone') || '').trim(),
      time: String(data.get('time') || 'Any time'),
      area: String(data.get('area') || ''),
      company: String(data.get('company') || ''),
      source,
      page: typeof window !== 'undefined' ? window.location.pathname : '',
    };
    setStatus('sending');
    setError(null);
    try {
      const res = await fetch('/api/callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const body = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(body.error || 'Could not send right now.');
      setStatus('done');
      form.reset();
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'callback_request', {
          event_category: 'conversion',
          event_label: source,
          send_to: process.env.NEXT_PUBLIC_GA_ID || 'G-65FN5BN480',
        });
        const label = process.env.NEXT_PUBLIC_ADS_CALLBACK_LABEL;
        if (label) {
          // The action is configured in Ads with a fixed CA$1 value, the same
          // convention as Calls from ads, so conversion value keeps meaning
          // bookings; the count is what this adds.
          window.gtag('event', 'conversion', { send_to: label, value: 1, currency: 'CAD' });
        }
      }
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Could not send right now.');
    }
  }

  const inputClass =
    'w-full rounded-md border border-slate-300 bg-white px-3.5 py-3 text-[15px] text-slate-900 placeholder:text-slate-400 focus:border-[#B08D57] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40';
  const labelClass = 'block text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-600 mb-1.5';

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 ${className}`}
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <h2 id={`${id}-heading`} className="font-playfair text-2xl sm:text-3xl text-slate-900 tracking-tight">
            Prefer a call back?
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
            Leave your name and number and Kareem will call you back to sort out a time. No account needed.
          </p>
          <p className="mt-3 text-[13px] text-slate-500">
            Your details are used only to return your call. If it is urgent, call the clinic on{' '}
            <a href={`tel:${CLINIC_PHONE_TEL}`} className="font-medium text-slate-700 underline underline-offset-4 hover:text-slate-900">
              {CLINIC_PHONE_DISPLAY}
            </a>
            .
          </p>
        </div>

        <div className="lg:col-span-7">
          {status === 'done' ? (
            <div role="status" className="rounded-xl border border-[#D4AF37]/40 bg-[#FBF7EC] p-6">
              <p className="font-playfair text-xl text-slate-900">Thanks. Kareem will call you back.</p>
              <p className="mt-2 text-[15px] text-slate-600">
                If you would rather book a time yourself, the Book button on this page goes to the online calendar.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
              {/* Honeypot: hidden from people, filled by bots. */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor={`${id}-company`}>Company</label>
                <input id={`${id}-company`} name="company" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <div>
                <label htmlFor={`${id}-name`} className={labelClass}>Name</label>
                <input id={`${id}-name`} name="name" type="text" required minLength={2} maxLength={80} autoComplete="name" className={inputClass} placeholder="Your name" />
              </div>
              <div>
                <label htmlFor={`${id}-phone`} className={labelClass}>Phone</label>
                <input id={`${id}-phone`} name="phone" type="tel" required inputMode="tel" autoComplete="tel" maxLength={30} className={inputClass} placeholder="(905) 555-0123" />
              </div>
              <div>
                <label htmlFor={`${id}-time`} className={labelClass}>Best time to call</label>
                <select id={`${id}-time`} name="time" defaultValue="Any time" className={inputClass}>
                  {TIMES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor={`${id}-area`} className={labelClass}>What is bothering you? <span className="normal-case tracking-normal font-normal text-slate-400">(optional)</span></label>
                <select id={`${id}-area`} name="area" defaultValue="" className={inputClass}>
                  <option value="">Choose one</option>
                  {AREAS.map((a) => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#D4AF37] px-8 py-3 text-xs font-bold uppercase tracking-[0.15em] text-slate-900 transition-colors hover:bg-[#E6C66A] hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-70"
                >
                  {status === 'sending' ? 'Sending' : 'Request a call back'}
                </button>
                {status === 'error' && (
                  <p role="alert" className="text-[14px] text-red-700">
                    {error}
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
