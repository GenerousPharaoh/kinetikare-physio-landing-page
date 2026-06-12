import Image from 'next/image';

/**
 * RegionAnatomy
 *
 * Decorative hero accent for condition pages: a public-domain anatomical plate
 * (Leiden University Libraries via Europeana; foot is a Desmaretz skeletal
 * plate), one per body region, warm-tinted to the brand gold and dissolved into
 * the page.
 *
 * Treatment (approved as "Treatment B" in the preview comp): mix-blend-multiply
 * drops the cream paper into the light hero so the drawing floats; the gold
 * filter tints the graphite toward #B08D57/#D4AF37; a vertical mask fades the
 * top/bottom so structures cut by the plate edge dissolve instead of hard-crop.
 *
 * Decorative -> aria-hidden + empty alt (the H1 + byline carry the meaning).
 * Categories without a plate render nothing.
 */

const EDGE_FADE =
  'linear-gradient(to bottom, transparent 0%, #000 9%, #000 91%, transparent 100%)';

interface Plate {
  src: string;
  width: number;
  height: number;
  widthClass: string;
}

const PORTRAIT = 'w-[150px] xl:w-[180px]';

const PLATE_BY_CATEGORY: Record<string, Plate> = {
  knee: { src: '/images/anatomy/anatomy-knee.webp', width: 860, height: 1131, widthClass: PORTRAIT },
  'spinal-health': { src: '/images/anatomy/anatomy-spine.webp', width: 860, height: 1226, widthClass: PORTRAIT },
  'hip-pelvis': { src: '/images/anatomy/anatomy-hip.webp', width: 860, height: 1638, widthClass: PORTRAIT },
  shoulder: { src: '/images/anatomy/anatomy-shoulder.webp', width: 860, height: 1256, widthClass: PORTRAIT },
  'elbow-wrist-hand': { src: '/images/anatomy/anatomy-elbow.webp', width: 820, height: 1427, widthClass: PORTRAIT },
  // Foot is a lateral (landscape) plate -> render wider so it has presence.
  'foot-ankle': { src: '/images/anatomy/anatomy-foot.webp', width: 1000, height: 430, widthClass: 'w-[200px] xl:w-[235px]' },
};

export default function RegionAnatomy({
  category,
  className = '',
}: {
  category: string;
  className?: string;
}) {
  const plate = PLATE_BY_CATEGORY[category];
  if (!plate) return null;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none relative select-none ${plate.widthClass} ${className}`}
    >
      <Image
        src={plate.src}
        width={plate.width}
        height={plate.height}
        alt=""
        sizes="330px"
        loading="lazy"
        className="w-full h-auto opacity-90"
        style={{
          maskImage: EDGE_FADE,
          WebkitMaskImage: EDGE_FADE,
        }}
      />
    </div>
  );
}
