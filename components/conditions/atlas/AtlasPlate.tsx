'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from './Atlas.module.css';

/**
 * A condition's engraved plate, mounted as a print (paper, a gold hairline
 * inset) and faded in over its paper once the file arrives, so a move from
 * one condition to the next reads as ink appearing on the page. Keyed on the
 * slug by the caller so the fade plays per condition.
 */
export default function AtlasPlate({
  slug,
  sizes,
  priority = false,
  className = '',
}: {
  slug: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`${styles.mount} ${className}`} data-loaded={loaded ? 'true' : 'false'} aria-hidden="true">
      <Image
        src={`/images/conditions/${slug}.webp`}
        width={600}
        height={600}
        alt=""
        sizes={sizes}
        priority={priority}
        quality={82}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
