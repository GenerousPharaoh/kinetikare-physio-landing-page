'use client';

import { useState, type ReactNode } from 'react';
import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { getAllTreatments } from '@/lib/treatments-data';
import Reveal from '@/components/home/Reveal';
import { ActionLabel } from '@/components/sheet/text';
import s from '@/components/sheet/Sheet.module.css';

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

/**
 * The treatments index: the title (passed in, server rendered) with the
 * search beside it, then the treatments grouped as tiles of a name and one
 * line, then the shared disclaimer as a quiet note.
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
            <div className={s.grid} data-count={filteredTreatments.length}>
              {filteredTreatments.map((treatment) => (
                <div key={treatment.id}>
                  <Link href={`/treatments/${treatment.id}`}>
                    <span className={s.tileTitle}>{treatment.name}</span>
                    <span className={s.tileBlurb}>{treatment.shortDescription}</span>
                    <span className={s.chips}>
                      {treatment.conditions.slice(0, 3).map((condition) => (
                        <span key={condition}>{condition}</span>
                      ))}
                    </span>
                    <span className={s.tileAction}>
                      <ActionLabel text="View treatment" />
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            categories.map((category) => {
              const items = category.treatments
                .map((id) => treatments.find((t) => t.id === id))
                .filter((t): t is NonNullable<typeof t> => Boolean(t));
              return (
                <section key={category.name} className={s.set}>
                  <Reveal as="h2" className={s.setTitle}>
                    {category.name}
                  </Reveal>
                  <div className={s.grid} data-count={items.length}>
                    {items.map((treatment, index) => (
                      <Reveal as="div" key={treatment.id} delay={index * 60}>
                        <Link href={`/treatments/${treatment.id}`}>
                          <span className={s.tileTitle}>{treatment.name}</span>
                          <span className={s.tileBlurb}>{treatment.shortDescription}</span>
                          <span className={s.tileAction}>
                            <ActionLabel text="Explore Treatment" />
                          </span>
                        </Link>
                      </Reveal>
                    ))}
                  </div>
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
