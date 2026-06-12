import Image from 'next/image';

/**
 * RegionAnatomy
 *
 * Decorative hero accent for condition pages: a real public-domain anatomical
 * plate (Leiden University Libraries via Europeana; foot is a Desmaretz skeletal
 * plate) presented as a framed specimen medallion.
 *
 * Design: every page shows the SAME round, parchment-grounded medallion with a
 * fine double gold hairline (the mount on an antique engraving); only the plate
 * inside changes. That makes all 61 condition heroes feel like one set instead
 * of a row of differently-shaped cutouts. The graphite is composited into the
 * parchment with mix-blend-multiply so it reads as ink on paper rather than a
 * pasted PNG, which also dissolves any knockout halo and normalises plates that
 * were drawn on slightly different papers.
 *
 * Plates are matched to the *structure*, not just the body region (a patella
 * page shows the kneecap, an ACL page the cruciate notch, a meniscus page the
 * tibial plateau, sciatica the lumbar column). PLATE_BY_SLUG carries the
 * specific assignments; PLATE_BY_CATEGORY is the fallback.
 *
 * Decorative -> aria-hidden + empty alt (the H1 + byline carry the meaning).
 */

interface Plate {
  src: string;
  width: number;
  height: number;
}

const PLATES: Record<string, Plate> = {
  knee: { src: '/images/anatomy/anatomy-knee.webp', width: 722, height: 1096 },
  'knee-meniscus': { src: '/images/anatomy/anatomy-knee-meniscus.webp', width: 760, height: 1057 },
  'knee-patella': { src: '/images/anatomy/anatomy-knee-patella.webp', width: 764, height: 872 },
  spine: { src: '/images/anatomy/anatomy-spine.webp', width: 469, height: 1136 },
  'spine-lumbar': { src: '/images/anatomy/anatomy-spine-lumbar.webp', width: 330, height: 957 },
  shoulder: { src: '/images/anatomy/anatomy-shoulder.webp', width: 715, height: 1144 },
  elbow: { src: '/images/anatomy/anatomy-elbow.webp', width: 223, height: 1344 },
  hand: { src: '/images/anatomy/anatomy-hand.webp', width: 609, height: 933 },
  hip: { src: '/images/anatomy/anatomy-hip.webp', width: 605, height: 1491 },
  hamstring: { src: '/images/anatomy/anatomy-hamstring.webp', width: 600, height: 931 },
  foot: { src: '/images/anatomy/anatomy-foot.webp', width: 833, height: 274 },
};

// Structure-level mapping: condition slug -> plate. Anything not listed here
// falls back to the region plate in PLATE_BY_CATEGORY.
const PLATE_BY_SLUG: Record<string, keyof typeof PLATES> = {
  // Knee: intra-articular (cruciates + menisci) / collateral + general / patella
  'meniscus-tears': 'knee-meniscus',
  'acl-injuries': 'knee-meniscus',
  'pcl-injuries': 'knee-meniscus',
  'mcl-lcl-sprains': 'knee',
  'it-band-syndrome': 'knee',
  'knee-osteoarthritis': 'knee',
  'patellar-tendinopathy': 'knee-patella',
  'knee-pain-patellofemoral': 'knee-patella',
  'patella-fractures': 'knee-patella',
  // Spine: cervical (neck) vs lumbar (low back / disc / nerve)
  'neck-pain': 'spine',
  whiplash: 'spine',
  'low-back-pain': 'spine-lumbar',
  sciatica: 'spine-lumbar',
  'disc-herniation': 'spine-lumbar',
  'degenerative-disc-disease': 'spine-lumbar',
  'spinal-stenosis': 'spine-lumbar',
  'facet-joint-syndrome': 'spine-lumbar',
  'postural-dysfunction': 'spine-lumbar',
  // Elbow/forearm vs wrist/hand
  'tennis-elbow': 'elbow',
  'golfers-elbow': 'elbow',
  'repetitive-strain-injuries': 'elbow',
  'carpal-tunnel-syndrome': 'hand',
  'de-quervains-tenosynovitis': 'hand',
  'wrist-sprains': 'hand',
  'scaphoid-fractures': 'hand',
  // Hip/pelvis: posterior-thigh muscle conditions get the hamstring plate;
  // joint + pelvic-region conditions use the hip plate (no isolated pelvis
  // plate exists in the public-domain family).
  'proximal-hamstring-tendinopathy': 'hamstring',
  'hamstring-strains': 'hamstring',
};

const PLATE_BY_CATEGORY: Record<string, keyof typeof PLATES> = {
  knee: 'knee',
  'spinal-health': 'spine-lumbar',
  'hip-pelvis': 'hip',
  shoulder: 'shoulder',
  'elbow-wrist-hand': 'elbow',
  'foot-ankle': 'foot',
};

export default function RegionAnatomy({
  slug,
  category,
  className = '',
}: {
  slug?: string;
  category: string;
  className?: string;
}) {
  const key = (slug && PLATE_BY_SLUG[slug]) || PLATE_BY_CATEGORY[category];
  const plate = key ? PLATES[key] : undefined;
  if (!plate) return null;

  // The foot is the one landscape plate; let it spread a little wider and sit
  // shorter so it reads at the same visual weight as the portrait specimens.
  const fit = key === 'foot' ? 'max-w-[88%] max-h-[64%]' : 'max-w-[76%] max-h-[82%]';

  return (
    <div
      aria-hidden="true"
      className={`relative isolate w-[240px] xl:w-[280px] aspect-square select-none ${className}`}
    >
      {/* Parchment ground + soft seated shadow */}
      <div className="absolute inset-0 rounded-full bg-[#F4EEE3] shadow-[0_16px_44px_-20px_rgba(15,23,42,0.28)]" />
      {/* Double hairline frame — the mount on an antique plate */}
      <div className="absolute inset-0 rounded-full ring-1 ring-[#B08D57]/35" />
      <div className="absolute inset-[7px] rounded-full ring-1 ring-[#B08D57]/15" />
      {/* The specimen, composited into the paper */}
      <div className="absolute inset-[7px] rounded-full overflow-hidden flex items-center justify-center">
        <Image
          src={plate.src}
          width={plate.width}
          height={plate.height}
          alt=""
          sizes="320px"
          loading="lazy"
          // Serve the pre-optimized webp as-is: next/image would re-encode to
          // alpha-less JPEG for non-webp Accept headers, flattening the
          // transparent paper into a faint rectangle under mix-blend-multiply.
          unoptimized
          className={`w-auto h-auto object-contain mix-blend-multiply opacity-90 ${fit}`}
        />
      </div>
      {/* Faint inner vignette to seat the specimen in the dish */}
      <div className="absolute inset-[7px] rounded-full pointer-events-none shadow-[inset_0_2px_16px_rgba(15,23,42,0.08)]" />
    </div>
  );
}
