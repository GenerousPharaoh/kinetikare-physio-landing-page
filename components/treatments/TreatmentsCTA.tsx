import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { JANE_ASSESSMENT_URL } from '@/lib/booking';
import Reveal from '@/components/home/Reveal';
import s from '@/components/sheet/Sheet.module.css';

/** The index's closing band. */
export default function TreatmentsCTA() {
  return (
    <section className={s.closing}>
      <Reveal as="div" className={s.closingInner}>
        <h2 className={s.closingTitle}>How Treatments Are Combined</h2>
        <p className={s.closingText}>
          Most plans are built around exercise, with one or two hands-on treatments where they help.
          At your assessment I explain which ones suit your problem and why.
        </p>
        <div className={s.actions}>
          <a
            href={JANE_ASSESSMENT_URL}
            data-booking-source="treatment_page"
            target="_blank"
            rel="noopener noreferrer"
            className={s.light}
          >
            Book Your Assessment
            <ArrowRightIcon aria-hidden="true" data-arrow="" />
          </a>
          <Link href="/#contact" className={s.ghost}>
            Get in Touch
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
