import { onCLS, onFCP, onFID, onLCP, onTTFB, onINP, Metric } from 'web-vitals';

/**
 * Send Web Vitals metrics to Google Analytics
 */
function sendToGoogleAnalytics(metric: Metric) {
  // Only send if gtag is available
  if (typeof window !== 'undefined' && (window as any).gtag) {
    const eventParams: Record<string, any> = {
      value: Math.round(metric.name === 'CLS' ? metric.delta * 1000 : metric.delta),
      metric_id: metric.id,
      metric_value: metric.value,
      metric_delta: metric.delta,
    };

    // Add debug info in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Web Vitals: ${metric.name}`, metric.value);
    }

    // Send to GA4 as events
    switch (metric.name) {
      case 'FCP':
        (window as any).gtag('event', 'page_view_timing', {
          ...eventParams,
          name: 'first_contentful_paint',
        });
        break;
      case 'LCP':
        (window as any).gtag('event', 'page_view_timing', {
          ...eventParams,
          name: 'largest_contentful_paint',
        });
        break;
      case 'CLS':
        (window as any).gtag('event', 'page_view_timing', {
          ...eventParams,
          name: 'cumulative_layout_shift',
        });
        break;
      case 'FID':
        (window as any).gtag('event', 'page_view_timing', {
          ...eventParams,
          name: 'first_input_delay',
        });
        break;
      case 'TTFB':
        (window as any).gtag('event', 'page_view_timing', {
          ...eventParams,
          name: 'time_to_first_byte',
        });
        break;
      case 'INP':
        (window as any).gtag('event', 'page_view_timing', {
          ...eventParams,
          name: 'interaction_to_next_paint',
        });
        break;
    }

    // Also send as custom event for easier tracking
    (window as any).gtag('event', 'web_vitals', {
      metric_name: metric.name,
      value: eventParams.value,
      rating: metric.rating, // 'good', 'needs-improvement', or 'poor'
    });
  }
}

/**
 * Initialize Web Vitals reporting
 */
export function reportWebVitals() {
  onCLS(sendToGoogleAnalytics);
  onFCP(sendToGoogleAnalytics);
  onFID(sendToGoogleAnalytics);
  onLCP(sendToGoogleAnalytics);
  onTTFB(sendToGoogleAnalytics);
  onINP(sendToGoogleAnalytics);
}