'use client';

import { useEffect } from 'react';
import { reportWebVitals } from '@/lib/web-vitals';

export default function WebVitals() {
  useEffect(() => {
    // Only run on client side and in production
    if (typeof window !== 'undefined') {
      // Small delay to ensure Google Analytics is loaded
      const timer = setTimeout(() => {
        reportWebVitals();
      }, 100);

      return () => clearTimeout(timer);
    }
  }, []);

  // This component doesn't render anything
  return null;
}