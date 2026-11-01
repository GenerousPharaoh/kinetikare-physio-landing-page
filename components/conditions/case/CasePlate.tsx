'use client';

import Image from 'next/image';
import { useState } from 'react';

/**
 * A condition's engraved plate, faded in over its paper once the file
 * arrives. The caller supplies the frame (viewer, thumb, figure) through
 * `className`; the stylesheet styles the image by that frame.
 */
export default function CasePlate({
  slug,
  sizes,
  priority = false,
  className = '',
  zoom = false,
}: {
  slug: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  zoom?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={className} data-loaded={loaded ? 'true' : 'false'} data-zoom={zoom ? 'true' : 'false'} aria-hidden="true">
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
