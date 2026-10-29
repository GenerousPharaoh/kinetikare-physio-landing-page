'use client';

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from 'react';

/**
 * Fades an element up (or wipes it in, with variant "clip" or "rule") the
 * first time it scrolls into view. It only arms when the element starts below
 * the fold, so anything on screen at load stays exactly as the server drew
 * it, and without JavaScript nothing is ever hidden. The styles live in
 * Home.module.css under [data-reveal].
 */
export default function Reveal({
  as: Tag = 'div',
  className,
  delay = 0,
  variant,
  children,
}: {
  as?: ElementType;
  className?: string;
  delay?: number;
  variant?: 'clip' | 'rule';
  children?: ReactNode;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;
    el.dataset.reveal = 'armed';
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.dataset.reveal = 'in';
        io.disconnect();
      },
      { rootMargin: '0px 0px -10% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={className} data-variant={variant} style={delay ? ({ '--d': `${delay}ms` } as CSSProperties) : undefined}>
      {children}
    </Tag>
  );
}
