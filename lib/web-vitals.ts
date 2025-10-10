import { onCLS, onFCP, onLCP, onTTFB, onINP, Metric } from 'web-vitals';

/**
 * Send Web Vitals metrics to Google Analytics 4
 * Uses the recommended GA4 event structure for Web Vitals
 */
function sendToGoogleAnalytics(metric: Metric) {
  // Only send if gtag is available
  if (typeof window !== 'undefined' && (window as any).gtag) {
    // Round the value for better readability
    // CLS is multiplied by 1000 to convert to a more manageable number
    const value = Math.round(metric.name === 'CLS' ? metric.delta * 1000 : metric.delta);

    // Add debug info in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Web Vitals] ${metric.name}:`, {
        value: metric.value,
        rating: metric.rating,
        delta: metric.delta,
        id: metric.id,
      });
    }

    // Send to GA4 using the recommended event name pattern
    // This allows GA4 to automatically track these metrics
    (window as any).gtag('event', metric.name, {
      value: value,
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true, // Doesn't affect bounce rate
      metric_value: metric.value,
      metric_delta: metric.delta,
      metric_rating: metric.rating, // 'good', 'needs-improvement', or 'poor'
    });
  }
}

/**
 * Initialize Web Vitals reporting
 */
export function reportWebVitals() {
  onCLS(sendToGoogleAnalytics);
  onFCP(sendToGoogleAnalytics);
  onLCP(sendToGoogleAnalytics);
  onTTFB(sendToGoogleAnalytics);
  onINP(sendToGoogleAnalytics);
}