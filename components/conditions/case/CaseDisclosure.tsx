'use client';

import { useId, useState, type ReactNode } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import styles from './Case.module.css';

/** A row that opens with an eased height; the body is always in the HTML. */
export default function CaseDisclosure({
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
        <button type="button" className={`${styles.plain} ${styles.discBtn}`} aria-expanded={open} aria-controls={id} onClick={() => setOpen((v) => !v)}>
          <span>{title}</span>
          <PlusIcon aria-hidden="true" />
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
