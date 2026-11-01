'use client';

import { useId, useState, type ReactNode } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import styles from './Atlas.module.css';

/**
 * A hairline disclosure (a question, "Contributing factors") whose body opens
 * with an eased height. The body is always in the HTML.
 */
export default function AtlasDisclosure({
  title,
  children,
  headingLevel = 3,
}: {
  title: string;
  children: ReactNode;
  headingLevel?: 3 | 4;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const Tag = headingLevel === 4 ? 'h4' : 'h3';
  return (
    <div className={styles.discItem} data-open={open ? 'true' : 'false'}>
      <Tag>
        <button type="button" className={styles.discBtn} aria-expanded={open} aria-controls={id} onClick={() => setOpen((v) => !v)}>
          <span>{title}</span>
          <ChevronDownIcon aria-hidden="true" />
        </button>
      </Tag>
      <div className={styles.discBody} id={id}>
        <div>
          <div className={styles.discInner}>{children}</div>
        </div>
      </div>
    </div>
  );
}
