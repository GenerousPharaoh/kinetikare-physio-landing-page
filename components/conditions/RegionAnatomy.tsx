import Image from 'next/image';

/**
 * RegionAnatomy
 *
 * Decorative hero accent for condition pages: a real public-domain anatomical
 * plate (Leiden University Libraries via Europeana; foot is a Desmaretz skeletal
 * plate) presented as a framed specimen medallion.
 *
 * Design: every page shows the SAME round medallion with a fine double gold
 * hairline (the mount on an antique engraving); only the plate inside changes,
 * so all condition heroes read as one set.
 *
 * Two plate families. CONDITION_PLATES are commissioned per-condition engravings
 * that carry their own ivory paper and fill the medallion directly. PLATES are
 * the legacy public-domain region plates (Leiden University Libraries via
 * Europeana; foot is a Desmaretz skeletal plate), which are transparent and get
 * composited into a parchment disc with mix-blend-multiply so they read as ink
 * on paper. Every condition now has a commissioned plate; the legacy family is
 * kept as a fallback so a new condition slug never renders empty.
 *
 * Decorative -> aria-hidden + empty alt (the H1 + byline carry the meaning).
 */

interface Plate {
  src: string;
  width: number;
  height: number;
}

/**
 * Commissioned condition plates (2026). Unlike the legacy public-domain plates
 * below, these are drawn per CONDITION rather than per region, and each one
 * carries its own warm ivory paper, so they fill the medallion directly instead
 * of being composited onto a parchment disc with mix-blend-multiply.
 *
 * Style: intaglio engraving, Patent construction geometry or Guilloche rosette,
 * tissue coloured by standard anatomical convention (muscle red, tendon pearl,
 * bone ivory, cartilage pale blue, nerve yellow). Pathology is shown
 * morphologically. Several are "functional" plates: the structure drawn in
 * overlapping positions with dashed motion arcs and load shown as hatching
 * density, so the page can explain mechanism rather than only anatomy.
 */
const CONDITION_PLATES: Record<string, string> = {
  // Spine
  'low-back-pain': 'Lumbar spine',
  sciatica: 'Sciatic nerve',
  'disc-herniation': 'Lumbar disc',
  'spinal-stenosis': 'Lumbar canal',
  'neck-pain': 'Cervical spine',
  // Knee
  'knee-pain-patellofemoral': 'Patellofemoral joint',
  'knee-osteoarthritis': 'Knee joint',
  'acl-injuries': 'Cruciate ligaments',
  'meniscus-tears': 'Menisci',
  'patellar-tendinopathy': 'Patellar tendon',
  'it-band-syndrome': 'Iliotibial band',
  // Hip and pelvis
  'greater-trochanteric-pain-syndrome': 'Gluteal tendons',
  'hip-osteoarthritis': 'Hip joint',
  'femoroacetabular-impingement': 'Femoroacetabular joint',
  'hip-labral-tears': 'Acetabular labrum',
  'hamstring-strains': 'Hamstring muscles',
  'proximal-hamstring-tendinopathy': 'Hamstring origin',
  // Shoulder
  'rotator-cuff-injuries': 'Rotator cuff',
  'shoulder-impingement': 'Subacromial space',
  'frozen-shoulder': 'Glenohumeral capsule',
  // Elbow, wrist and hand
  'tennis-elbow': 'Common extensor origin',
  'carpal-tunnel-syndrome': 'Carpal tunnel',
  // Foot and ankle
  'plantar-fasciitis': 'Plantar fascia',
  'achilles-tendinopathy': 'Achilles tendon',
  'ankle-sprains': 'Lateral ankle ligaments',
  'shin-splints': 'Posteromedial tibia',

  // --- second wave ---
  // Spine
  whiplash: 'Cervical spine',
  'degenerative-disc-disease': 'Lumbar discs',
  'facet-joint-syndrome': 'Facet joints',
  'postural-dysfunction': 'Spinal column',
  // Knee
  'mcl-lcl-sprains': 'Collateral ligaments',
  'pcl-injuries': 'Posterior cruciate',
  'patella-fractures': 'Patella',
  // Hip and pelvis
  'hip-bursitis': 'Trochanteric bursa',
  'piriformis-syndrome': 'Piriformis',
  'deep-gluteal-syndrome': 'Deep gluteal space',
  'si-joint-dysfunction': 'Sacroiliac joint',
  'groin-strains': 'Adductor origin',
  // Shoulder
  'shoulder-instability': 'Glenohumeral joint',
  'biceps-tendinopathy': 'Long head of biceps',
  'shoulder-bursitis': 'Subacromial bursa',
  'ac-joint-injuries': 'Acromioclavicular joint',
  'thoracic-outlet-syndrome': 'Thoracic outlet',
  'diabetes-related-conditions': 'Hand and palmar fascia',
  // Elbow, wrist and hand
  'golfers-elbow': 'Common flexor origin',
  'de-quervains-tenosynovitis': 'First dorsal compartment',
  'wrist-sprains': 'Carpal ligaments',
  'scaphoid-fractures': 'Scaphoid',
  'repetitive-strain-injuries': 'Forearm and wrist',
  // Foot and ankle
  'peroneal-tendinopathy': 'Peroneal tendons',
  'posterior-tibial-tendon-dysfunction': 'Posterior tibial tendon',
  'tarsal-tunnel-syndrome': 'Tarsal tunnel',
  metatarsalgia: 'Metatarsal heads',
  'hallux-valgus': 'First ray',
  'hallux-rigidus': 'First MTP joint',
  'turf-toe': 'Plantar plate',
  'hammer-toe-deformities': 'Lesser toe',
  'stress-fractures': 'Tibial cortex',
  'growth-plate-injuries': 'Growth plate',
  'mortons-neuroma': 'Plantar digital nerve',
  'severs-disease': 'Calcaneal apophysis',
};

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

// Anatomical region named in the figure caption (accurate, non-claiming).
const LABELS: Record<keyof typeof PLATES, string> = {
  knee: 'Knee',
  'knee-meniscus': 'Knee joint',
  'knee-patella': 'Patella',
  spine: 'Cervical spine',
  'spine-lumbar': 'Lumbar spine',
  shoulder: 'Shoulder',
  elbow: 'Elbow',
  hand: 'Wrist & hand',
  hip: 'Hip',
  hamstring: 'Posterior thigh',
  foot: 'Foot & ankle',
};

export default function RegionAnatomy({
  slug,
  category,
  caption = false,
  className = '',
}: {
  slug?: string;
  category: string;
  caption?: boolean;
  className?: string;
}) {
  // Commissioned per-condition plate wins; otherwise fall back to the legacy
  // region plates for conditions that have not been drawn yet.
  const commissioned = slug && CONDITION_PLATES[slug] ? slug : undefined;

  const key = (slug && PLATE_BY_SLUG[slug]) || PLATE_BY_CATEGORY[category];
  const plate = key ? PLATES[key] : undefined;
  if (!commissioned && !plate) return null;

  if (commissioned) {
    const commissionedMedallion = (
      <div className="relative isolate w-[230px] xl:w-[264px] aspect-square select-none">
        <div className="absolute inset-0 rounded-full overflow-hidden shadow-[0_16px_44px_-20px_rgba(15,23,42,0.28)]">
          <Image
            src={`/images/conditions/${commissioned}.webp`}
            width={600}
            height={600}
            alt=""
            sizes="(min-width: 1280px) 264px, 230px"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Same double hairline mount as the legacy plates so the two sets sit together */}
        <div className="absolute inset-0 rounded-full ring-1 ring-[#B08D57]/35 pointer-events-none" />
        <div className="absolute inset-[7px] rounded-full ring-1 ring-[#B08D57]/15 pointer-events-none" />
        <div className="absolute inset-0 rounded-full pointer-events-none shadow-[inset_0_2px_16px_rgba(15,23,42,0.08)]" />
      </div>
    );

    if (!caption) {
      return (
        <div aria-hidden="true" className={className}>
          {commissionedMedallion}
        </div>
      );
    }

    return (
      <figure className={`m-0 flex flex-col items-center gap-3 ${className}`}>
        <div aria-hidden="true">{commissionedMedallion}</div>
        <figcaption className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
          {CONDITION_PLATES[commissioned]}
        </figcaption>
      </figure>
    );
  }

  if (!plate) return null;

  // The foot is the one landscape plate; let it spread a little wider and sit
  // shorter so it reads at the same visual weight as the portrait specimens.
  const fit = key === 'foot' ? 'max-w-[88%] max-h-[64%]' : 'max-w-[76%] max-h-[82%]';

  const medallion = (
    <div className="relative isolate w-[230px] xl:w-[264px] aspect-square select-none">
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
          sizes="300px"
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

  if (!caption) {
    return (
      <div aria-hidden="true" className={className}>
        {medallion}
      </div>
    );
  }

  return (
    <figure className={`m-0 flex flex-col items-center gap-3 ${className}`}>
      <div aria-hidden="true">{medallion}</div>
      <figcaption className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
        {LABELS[key]}
      </figcaption>
    </figure>
  );
}
