'use client';

import { useState, type ReactNode } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import styles from './Case.module.css';

/** Phones show the first two studies and a line for the rest; wider screens show all (CSS). */
export default function CaseResearch({ count, children }: { count: number; children: ReactNode }) {
  const [all, setAll] = useState(false);
  return (
    <>
      <ol className={styles.studies} data-folded={all ? 'false' : 'true'}>
        {children}
      </ol>
      {!all && count > 2 && (
        <button type="button" className={`${styles.plain} ${styles.more}`} onClick={() => setAll(true)}>
          Show all {count} studies
          <ChevronDownIcon aria-hidden="true" />
        </button>
      )}
    </>
  );
}
