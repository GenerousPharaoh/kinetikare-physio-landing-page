import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { JANE_ASSESSMENT_URL } from '@/lib/booking';
import { FIGURES, figureMask } from '@/lib/figures';
import Reveal from '@/components/home/Reveal';
import s from '@/components/sheet/Sheet.module.css';
import tx from './Treatment.module.css';

const FIGURE = FIGURES.kettlebellDeadlift;

/** The index's closing band, one of Kareem's figures standing on its lower edge. */
export default function TreatmentsCTA() {
  return (
    <section className={`${s.closing} ${tx.closing}`}>
      <div className={`${s.closingInner} ${s.closingWide} ${tx.closeGrid}`}>
        <Reveal as="div" className={tx.closeText}>
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
        <div className={tx.closeArt} aria-hidden="true">
          <div className={tx.fig} style={{ '--ar': FIGURE.aspect } as CSSProperties}>
            <Image src={FIGURE.src} alt="" fill sizes="300px" quality={82} style={figureMask(FIGURE.fade)} />
          </div>
        </div>
      </div>
    </section>
  );
}
