import Link from 'next/link';
import styles from './ComparisonLinks.module.css';

export interface ComparisonLink {
  pair: string;
  href: string;
  label: string;
  conditionA: string;
  conditionB: string;
}

export default function ComparisonLinks({ comparisons }: { comparisons: ComparisonLink[] }) {
  return (
    <section aria-labelledby="comparisons-heading" className={styles.section}>
      <div className={styles.panel}>
        <div className={styles.header}>
          <div>
            <h2 id="comparisons-heading">Commonly confused</h2>
            <p>Explore the differences between conditions with similar symptoms.</p>
          </div>
          <Link href="/conditions/compare" className={styles.allLink}>
            All comparisons
          </Link>
        </div>
        <ul className={styles.list}>
          {comparisons.map(comparison => (
            <li key={comparison.pair}>
              <Link href={comparison.href} prefetch={false} aria-label={comparison.label} className={styles.link}>
                <h3 className={styles.pair}>
                  <span>{comparison.conditionA}</span>
                  <span className={styles.versus}>vs.</span>
                  <span>{comparison.conditionB}</span>
                </h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
