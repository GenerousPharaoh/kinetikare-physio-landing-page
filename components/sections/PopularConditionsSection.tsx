import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { getConditionBySlug } from '@/lib/conditions-data';
import { CONDITION_COMPARISONS } from '@/lib/condition-comparisons';
import styles from './PopularConditionsSection.module.css';

// Priority topics lead (knee, patellar, lateral hip, proximal hamstring,
// sciatica), followed by other common reasons people seek physiotherapy.
const featuredConditionSlugs = [
  'knee-pain-patellofemoral',
  'patellar-tendinopathy',
  'greater-trochanteric-pain-syndrome',
  'proximal-hamstring-tendinopathy',
  'sciatica',
  'rotator-cuff-injuries',
  'ankle-sprains',
  'low-back-pain',
  'plantar-fasciitis',
];

const categoryLabels: Record<string, string> = {
  'spinal-health': 'Neck & Back',
  shoulder: 'Shoulder',
  knee: 'Knee',
  'foot-ankle': 'Foot & Ankle',
  'elbow-wrist-hand': 'Elbow, Wrist & Hand',
  'hip-pelvis': 'Hip & Pelvis',
};

// Body-region topic hubs. Kept to 4 core regions that have dedicated hub pages.
const regionHubs: {
  slug: string;
  label: string;
  blurb: string;
}[] = [
  {
    slug: 'hip-pain',
    label: 'Hip Pain',
    blurb: 'Lateral hip, groin, deep buttock pain, and what the pattern usually points to.',
  },
  {
    slug: 'knee-pain',
    label: 'Knee Pain',
    blurb: 'Front, inside, outside, or back-of-knee pain, mapped to the most likely causes.',
  },
  {
    slug: 'shoulder-pain',
    label: 'Shoulder Pain',
    blurb: 'Rotator cuff, stiffness, impingement, and instability sorted by symptom pattern.',
  },
  {
    slug: 'elbow-pain',
    label: 'Elbow Pain',
    blurb: 'Tennis elbow, golfer’s elbow, nerve irritation, and elbow stiffness at a glance.',
  },
];

// Symptom-first pain guides. Keep this list short and curated.
const painGuides: { slug: string; label: string }[] = [
  { slug: 'pain-below-kneecap', label: 'Pain below the kneecap' },
  { slug: 'fluid-on-the-knee', label: 'Fluid on the knee' },
];

// Pulled from CONDITION_COMPARISONS so this row stays in sync automatically
// as new comparison pages are added.
const comparisonLinks = CONDITION_COMPARISONS.map((c) => ({
  pair: c.pair,
  label: `${c.conditionA.shortName} vs. ${c.conditionB.shortName}`,
}));

const regionImages: Record<string, string> = {
  'hip-pain': '/images/regions/hip-pelvis.webp',
  'knee-pain': '/images/regions/knee.webp',
  'shoulder-pain': '/images/regions/shoulder.webp',
  'elbow-pain': '/images/conditions/golfers-elbow.webp',
};

export default function PopularConditionsSection() {
  const popularConditions = featuredConditionSlugs
    .map((slug) => getConditionBySlug(slug))
    .filter((condition): condition is NonNullable<typeof condition> => Boolean(condition));

  return (
    <section id="home-condition-guides" className={styles.section} aria-label="Conditions and pain guides">
      <div className={styles.container}>
        <div>
          <div className={styles.heading}>
            <div>
              <p className={styles.eyebrow}>Start by body region</p>
              <h2>Where does it hurt?</h2>
            </div>
            <p className={styles.intro}>Region-level overviews that sort common patterns and point you to the right detailed condition page.</p>
          </div>
          <div className={styles.regions}>
            {regionHubs.map(region => (
              <Link key={region.slug} href={`/conditions/${region.slug}`} prefetch={false} className={styles.regionLink}>
                <div className={styles.regionArt}>
                  <Image src={regionImages[region.slug]} alt="" fill sizes="(min-width: 1200px) 270px, (min-width: 1024px) 23vw, (min-width: 768px) 46vw, (min-width: 360px) 44vw, 82px" className={`${styles.regionImage} ${region.slug === 'elbow-pain' ? styles.elbowImage : ''}`} />
                </div>
                <div className={styles.regionCopy}>
                  <h3>{region.label}</h3>
                  <p>{region.blurb}</p>
                  <span className={styles.regionAction}>Explore <ArrowRightIcon aria-hidden="true" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.topics}>
          <div className={styles.heading}>
            <h2>Common Pain &amp; Injury Topics</h2>
            <p className={styles.intro}>Quick access to knee, hip, back, shoulder, and sports injury pages with symptoms, contributing factors, and management options.</p>
          </div>
          <ul className={styles.topicList}>
            {popularConditions.map(condition => (
              <li key={condition.slug}>
                <Link href={`/conditions/${condition.slug}`} prefetch={false} className={styles.topicLink}>
                  <div className={styles.topicMeta}>
                    <span>{categoryLabels[condition.category] || 'Condition'}</span>
                    <ArrowUpRightIcon aria-hidden="true" />
                  </div>
                  <h3>{condition.name}</h3>
                  <p>{condition.description}</p>
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.browseRow}>
            <Link href="/conditions" prefetch={false} className={styles.browseLink}>Browse all condition pages <ArrowRightIcon aria-hidden="true" /></Link>
          </div>
        </div>

        <div className={styles.secondary}>
          <div className={styles.guidePanel}>
            <p className={styles.eyebrow}>Start with the symptom</p>
            <h3>Symptom-first pain guides</h3>
            <p className={styles.guideIntro}>Short reads that start from what you notice and walk through the most likely causes before you book an assessment.</p>
            <ul className={styles.guideList}>
              {painGuides.map(guide => (
                <li key={guide.slug}>
                  <Link href={`/conditions/pain-guides/${guide.slug}`} prefetch={false}>
                    <span>{guide.label}</span><ArrowUpRightIcon aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/conditions/pain-guides" prefetch={false} className={styles.indexLink}>See all pain guides <ArrowRightIcon aria-hidden="true" /></Link>
          </div>
          <div className={styles.comparisonPanel}>
            <div className={styles.comparisonHeader}>
              <p className={styles.eyebrow}>Commonly confused</p>
              <h3>Side-by-side comparisons</h3>
              <p>Two conditions that get mistaken for each other, compared by location, pattern, and tests that help sort them apart.</p>
            </div>
            <ul className={styles.comparisonList}>
              {comparisonLinks.map(comparison => (
                <li key={comparison.pair}>
                  <Link href={`/conditions/compare/${comparison.pair}`} prefetch={false}>
                    <span>{comparison.label}</span><ArrowRightIcon aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className={styles.comparisonFooter}>
              <Link href="/conditions/compare" prefetch={false} className={styles.indexLink}>All comparisons <ArrowRightIcon aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
