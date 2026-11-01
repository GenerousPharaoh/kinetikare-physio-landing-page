import { serializeJsonLd } from '@/lib/structured-data';
import { PlusIcon } from '@heroicons/react/24/outline';
import type { Treatment } from '@/lib/treatments-data';
import SectionHead from '@/components/sheet/SectionHead';
import s from '@/components/sheet/Sheet.module.css';

interface TreatmentFAQProps {
  treatment: Treatment;
}

/**
 * The questions as native disclosures: every answer is in the HTML, they
 * open without JavaScript, one at a time (a shared `name`), the first open
 * as before, and they ease open where the browser can animate
 * ::details-content.
 */
export default function TreatmentFAQ({ treatment }: TreatmentFAQProps) {
  // Generate FAQPage schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: treatment.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section className={s.sec}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }} />
      <SectionHead title="Frequently Asked Questions" stand={`Common questions about ${treatment.shortName ?? treatment.name}`} />
      <div className={s.disc}>
        {treatment.faqs.map((faq, index) => (
          <details key={faq.question} className={s.discItem} name="treatment-faq" open={index === 0}>
            <summary id={`treatment-faq-button-${index}`}>
              <h3 className={s.discQ}>{faq.question}</h3>
              <PlusIcon aria-hidden="true" />
            </summary>
            <div id={`treatment-faq-panel-${index}`} className={s.discInner}>
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
