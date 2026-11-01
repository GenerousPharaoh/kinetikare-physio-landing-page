import Link from 'next/link';
import { ArrowDownIcon, ArrowRightIcon, CheckIcon, ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';
import { JANE_ASSESSMENT_URL } from '@/lib/booking';
import type { Treatment } from '@/lib/treatments-data';
import s from '@/components/sheet/Sheet.module.css';
import { KeepHyphens } from '@/components/sheet/text';

interface TreatmentHeroProps {
  treatment: Treatment;
  /** Extra classes on the header (the shell's column, on treatment pages). */
  className?: string;
}

/**
 * The opening of a treatment page, set like a condition page's: the trail,
 * the name, what it is, the booking action, then the first three benefits
 * in one hairline panel.
 */
export default function TreatmentHero({ treatment, className }: TreatmentHeroProps) {
  const name = treatment.shortName ?? treatment.name;
  return (
    <header className={`${s.column} ${s.opening}${className ? ` ${className}` : ''}`}>
      <nav aria-label="Breadcrumb" className={`${s.crumbs} ${s.label}`}>
        <Link href="/" aria-label="Home">
          <HomeIcon aria-hidden="true" />
        </Link>
        <ChevronRightIcon aria-hidden="true" />
        <Link href="/treatments">Treatments</Link>
        <ChevronRightIcon aria-hidden="true" />
        <span aria-current="page">{name}</span>
      </nav>

      <h1 className={s.h1}>
        <KeepHyphens text={name} />
      </h1>

      <p className={s.summary}>{treatment.shortDescription}</p>

      <div className={s.actions}>
        <a
          href={JANE_ASSESSMENT_URL}
          data-booking-source="treatment_page"
          target="_blank"
          rel="noopener noreferrer"
          className={s.ink}
        >
          Book Your Assessment
          <ArrowRightIcon aria-hidden="true" data-arrow="" />
        </a>
        <a href="#process" className={s.line}>
          <span>Learn More</span>
          <ArrowDownIcon aria-hidden="true" data-down="" />
        </a>
      </div>

      <ul className={s.glance} role="list">
        {treatment.benefits.slice(0, 3).map((benefit) => (
          <li key={benefit}>
            <CheckIcon aria-hidden="true" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </header>
  );
}
