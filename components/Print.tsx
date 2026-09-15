import Image from 'next/image';
import type { Illustration } from '@/lib/illustrations';

/**
 * One of Kareem's illustrations presented as a print: its own paper colour
 * behind it, a single gold hairline inset from the edge, no shadow, no
 * radius. The same mount the anatomy medallions use, so the two sets read as
 * one library. Decorative by default (empty alt); pass `alt` when the picture
 * carries meaning on its own.
 */
export default function Print({
  src,
  paper,
  dark,
  alt = '',
  sizes,
  priority = false,
  className = '',
  position = '50% 50%',
}: Illustration & { alt?: string; sizes: string; priority?: boolean; className?: string; position?: string }) {
  return (
    <div className={`relative aspect-[4/5] overflow-hidden ${className}`} style={{ backgroundColor: dark ? paper : paper }}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" style={{ objectPosition: position }} />
      <span aria-hidden="true" className="pointer-events-none absolute inset-3 border border-[#D4AF37]/75" />
    </div>
  );
}
