'use client';

import { useCallback } from 'react';
import { JANE_BOOKING_URL } from '@/lib/booking';
import { cn } from '@/lib/utils';

interface BookingCTAProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  size?: 'md' | 'lg';
}

export default function BookingCTA({ children, className, style, size = 'lg' }: BookingCTAProps) {
  // No preventDefault, no programmatic redirect. The native <a> click must
  // proceed so gtag's cross-domain linker can decorate the JaneApp URL with
  // ?_gl=... Without it, JaneApp's gtag creates a fresh client_id on arrival
  // and Google Ads cannot attribute the booking back to the ad click.
  // transport_type: 'beacon' fires the conversion async (navigator.sendBeacon)
  // so it sends reliably even as navigation begins.
  const handleClick = useCallback(() => {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

    window.gtag('event', 'booking_click', {
      event_category: 'conversion',
      event_label: 'intake_page_cta',
      send_to: process.env.NEXT_PUBLIC_GA_ID || 'G-65FN5BN480',
    });

    window.gtag('event', 'conversion', {
      send_to: 'AW-18069490191/eeANCJi7n5ccEI-UmqhD',
      value: 130,
      currency: 'CAD',
      transport_type: 'beacon',
    });
  }, []);

  return (
    <a
      href={JANE_BOOKING_URL}
      onClick={handleClick}
      data-booking-cta="true"
      style={style}
      className={cn(
        'group relative inline-flex items-center justify-center font-bold tracking-wide uppercase overflow-hidden rounded-full transition-[transform,box-shadow] duration-300',
        'bg-[#D4AF37] text-slate-900 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-[1.03] active:scale-[0.98]',
        size === 'lg' ? 'px-10 py-4 text-sm gap-3' : 'px-7 py-3 text-xs gap-2',
        className
      )}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
      <span className="relative flex items-center gap-2">{children}</span>
    </a>
  );
}
