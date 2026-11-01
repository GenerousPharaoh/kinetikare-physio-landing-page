import { ArrowRightIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { JANE_BOOKING_URL } from '@/lib/booking';
import Reveal from '@/components/home/Reveal';
import { KeepHyphens } from '@/components/sheet/text';
import s from '@/components/sheet/Sheet.module.css';

interface TreatmentCTAProps {
  treatmentName: string;
}

/** The closing band, dark like the condition pages' instrument. */
export default function TreatmentCTA({ treatmentName }: TreatmentCTAProps) {
  return (
    <section className={s.closing}>
      <Reveal as="div" className={s.closingInner}>
        <h2 className={s.closingTitle}>
          Have Questions About <KeepHyphens text={treatmentName} />?
        </h2>
        <p className={s.closingText}>
          Book an assessment to discuss how this treatment approach can be integrated into your care plan.
        </p>
        <div className={s.actions}>
          <a
            href={JANE_BOOKING_URL}
            data-booking-source="treatment_page"
            target="_blank"
            rel="noopener noreferrer"
            className={s.light}
          >
            Book Online Now
            <ArrowRightIcon aria-hidden="true" data-arrow="" />
          </a>
          <a href="tel:+19056346000" className={s.ghost}>
            <PhoneIcon aria-hidden="true" />
            (905) 634-6000
          </a>
        </div>
        <p className={s.closingNote}>Direct billing available for most insurance providers</p>
      </Reveal>
    </section>
  );
}
