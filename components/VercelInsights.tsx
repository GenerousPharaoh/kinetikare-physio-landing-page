'use client';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

/**
 * Vercel Web Analytics (cookie-free page views) and Speed Insights (real-visitor Core Web Vitals).
 * Both only report from production deployments. Automated browsers (navigator.webdriver) are
 * dropped so headless audits do not count as visitors, matching the GoogleAnalytics opt-out.
 */
const isAutomation = () => typeof navigator !== 'undefined' && navigator.webdriver === true;

export default function VercelInsights() {
  return (
    <>
      <Analytics beforeSend={(event) => (isAutomation() ? null : event)} />
      <SpeedInsights beforeSend={(data) => (isAutomation() ? null : data)} />
    </>
  );
}
