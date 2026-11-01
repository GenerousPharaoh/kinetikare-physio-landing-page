'use client';

import { useState, type ReactNode } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import styles from './Atlas.module.css';

/**
 * The reference list. Phones show the first two studies and a line to show
 * the rest; desktop shows them all in two columns (CSS).
 */
export default function AtlasResearch({ count, children }: { count: number; children: ReactNode }) {
  const [all, setAll] = useState(false);
  return (
    <>
      <ol className={styles.refs} data-folded={all ? 'false' : 'true'}>
        {children}
      </ol>
      {!all && count > 2 && (
        <button type="button" className={styles.refsMore} onClick={() => setAll(true)}>
          Show all {count} studies
          <ChevronDownIcon aria-hidden="true" />
        </button>
      )}
    </>
  );
}
