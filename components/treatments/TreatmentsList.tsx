'use client';

import { useState, type ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { getAllTreatments, type Treatment } from '@/lib/treatments-data';
import Reveal from '@/components/home/Reveal';
import s from '@/components/sheet/Sheet.module.css';
import tx from './Treatment.module.css';

const categories = [
  {
    name: 'Treatment Modalities',
    treatments: ['dry-needling', 'exercise-therapy', 'joint-mobilization', 'soft-tissue-myofascial-release'],
  },
  {
    name: 'Manual Techniques',
    treatments: ['trigger-point-therapy', 'cupping-therapy', 'iastm'],
  },
  {
    name: 'Programs & Assessment',
    treatments: ['sports-rehab-return-to-sport', 'post-surgical-rehabilitation', 'postural-assessment', 'pain-education'],
  },
];

/** One treatment as a row: its name, its line, and the arrow. */
function Row({ treatment, tags }: { treatment: Treatment; tags?: boolean }) {
  return (
    <Link href={`/treatments/${treatment.id}`} className={tx.row}>
      <span>
        <span className={tx.rowName}>{treatment.name}</span>
        <span className={tx.rowLine}>{treatment.shortDescription}</span>
        {tags && (
          <span className={s.chips}>
            {treatment.conditions.slice(0, 3).map((condition) => (
              <span key={condition}>{condition}</span>
            ))}
          </span>
        )}
      </span>
      <span className={tx.rowGo} aria-hidden="true">
        <ArrowRightIcon />
      </span>
    </Link>
  );
}

/**
 * The treatments index: the title (passed in, server rendered) with the
 * search beside it, then the treatments as hairline rows beside their
 * group's title (which stays in view on laptops as the group scrolls),
 * then the shared disclaimer as a quiet note.
 */
export default function TreatmentsList({ intro, note }: { intro: ReactNode; note?: ReactNode }) {
  const [searchTerm, setSearchTerm] = useState('');
  const query = searchTerm.trim().toLowerCase();
  const treatments = getAllTreatments();

  const filteredTreatments = treatments.filter(
    (treatment) =>
      treatment.name.toLowerCase().includes(query) ||
      treatment.shortDescription.toLowerCase().includes(query) ||
      treatment.conditions.some((condition) => condition.toLowerCase().includes(query)),
  );

  return (
    <>
      <header className={`${s.wrap} ${s.opening}`}>
        <div className={s.indexGrid}>
          {intro}
          <div className={s.search}>
            <MagnifyingGlassIcon aria-hidden="true" />
            <input
              type="text"
              placeholder="Search treatments or conditions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search treatments or conditions"
            />
          </div>
        </div>
      </header>

      <div className={`${s.wrap} ${s.body}`}>
        <div className={s.listTop}>
          {query && (
            <div className={s.status}>
              <p role="status">
                {filteredTreatments.length
                  ? `${filteredTreatments.length} treatments found`
                  : `No treatments found for “${searchTerm.trim()}”`}
              </p>
              <button type="button" onClick={() => setSearchTerm('')} className={s.line}>
                Show all treatments
              </button>
            </div>
          )}

          {query ? (
            <ul className={tx.rows} role="list">
              {filteredTreatments.map((treatment) => (
                <li key={treatment.id}>
                  <Row treatment={treatment} tags />
                </li>
              ))}
            </ul>
          ) : (
            categories.map((category) => {
              const items = category.treatments
                .map((id) => treatments.find((t) => t.id === id))
                .filter((t): t is NonNullable<typeof t> => Boolean(t));
              return (
                <section key={category.name} className={tx.set} aria-labelledby={`set-${category.treatments[0]}`}>
                  <Reveal as="div" className={tx.setHead}>
                    <Reveal as="span" variant="rule" className={s.bar} />
                    <h2 id={`set-${category.treatments[0]}`} className={tx.setTitle}>
                      {category.name}
                    </h2>
                  </Reveal>
                  <ul className={tx.rows} role="list">
                    {items.map((treatment, index) => (
                      <Reveal as="li" key={treatment.id} delay={index * 60}>
                        <Row treatment={treatment} />
                      </Reveal>
                    ))}
                  </ul>
                </section>
              );
            })
          )}

          {note && <div className={s.note}>{note}</div>}
        </div>
      </div>
    </>
  );
}
