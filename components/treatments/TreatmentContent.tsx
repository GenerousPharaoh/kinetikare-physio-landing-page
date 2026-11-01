import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import type { Treatment } from '@/lib/treatments-data';
import { getConditionBySlug } from '@/lib/conditions-data';
import { CONDITION_PLATES } from '@/lib/condition-plates';
import Reveal from '@/components/home/Reveal';
import SectionHead from '@/components/sheet/SectionHead';
import { ActionLabel } from '@/components/sheet/text';
import s from '@/components/sheet/Sheet.module.css';

interface TreatmentContentProps {
  treatment: Treatment;
}

/**
 * What the treatment is, what a session feels like, its benefits, and the
 * conditions it is used for (tiles with the condition's plate where one
 * exists, as on the condition pages).
 */
export default function TreatmentContent({ treatment }: TreatmentContentProps) {
  // Fetch full condition objects from slugs
  const relatedConditions = treatment.relatedConditions
    .map((slug) => getConditionBySlug(slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <>
      <section className={s.sec}>
        <SectionHead title="About This Treatment" />
        <div className={s.prose}>
          <p>{treatment.description}</p>
        </div>

        <Reveal as="div" className={s.panel}>
          <h3 className={s.h3}>What to Expect</h3>
          <p>{treatment.expectations}</p>
        </Reveal>

        <h3 className={`${s.h3} ${s.sub}`}>Key Benefits</h3>
        <ul className={`${s.rows} ${s.rowsTwo}`} role="list">
          {treatment.benefits.map((benefit, index) => (
            <Reveal as="li" key={benefit} delay={Math.min(index, 5) * 50}>
              {benefit}
            </Reveal>
          ))}
        </ul>
      </section>

      <section className={s.sec}>
        <SectionHead title="Conditions Treated" stand="Conditions where I use this treatment, usually alongside exercise." />
        <div className={`${s.tiles} ${s.compact}`}>
          {relatedConditions.map((condition, index) => (
            <Reveal as="div" key={condition.id} delay={(index % 2) * 60}>
              <Link href={`/conditions/${condition.slug}`}>
                {CONDITION_PLATES[condition.slug] && (
                  <span className={s.thumb}>
                    <Image src={`/images/conditions/${condition.slug}.webp`} alt="" fill sizes="44px" />
                  </span>
                )}
                <span className={s.tileTitle}>{condition.name}</span>
                <span className={s.tileBlurb}>{condition.shortDescription || condition.description}</span>
                <span className={s.tileAction}>
                  <ActionLabel text={`View ${condition.name}`} />
                </span>
                <ArrowRightIcon aria-hidden="true" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
