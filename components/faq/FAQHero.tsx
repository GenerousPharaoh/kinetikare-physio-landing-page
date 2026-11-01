import styles from './Faq.module.css';

/** The FAQ opening: label, title and the two-sentence lede. */
export default function FAQHero() {
  return (
    <div>
      <p className={`${styles.kicker} ${styles.mono}`}>
        <i aria-hidden="true" />
        Information &amp; Support
      </p>
      <h1 className={styles.h1}>Common Questions</h1>
      <p className={styles.lede}>
        Clear answers to help you understand your journey to recovery.
        Find detailed information about physiotherapy, insurance coverage, and what to expect.
      </p>
    </div>
  );
}
