import Link from 'next/link';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import styles from './ConditionDirectory.module.css';

interface DirectoryEntry {
  href: string;
  name: string;
  description?: string;
}

interface ConditionDirectoryProps {
  categories: Array<{
    slug: string;
    title: string;
    conditions: Array<{ slug: string; name: string; description?: string }>;
  }>;
  guides: Array<{ href: string; title: string }>;
  comparisons: Array<{ href: string; label: string }>;
}

export default function ConditionDirectory({ categories, guides, comparisons }: ConditionDirectoryProps) {
  const groups: Array<{ id: string; title: string; entries: DirectoryEntry[] }> = [
    ...categories.map(category => ({
      id: category.slug,
      title: category.title,
      entries: category.conditions.map(condition => ({
        href: `/conditions/${condition.slug}`,
        name: condition.name,
        description: condition.description,
      })),
    })),
    { id: 'guides', title: 'Guides', entries: guides.map(guide => ({ href: guide.href, name: guide.title })) },
    {
      id: 'comparisons',
      title: 'Comparisons',
      entries: [
        { href: '/conditions/compare', name: 'All comparisons' },
        ...comparisons.map(comparison => ({ href: comparison.href, name: comparison.label })),
      ],
    },
  ];

  return (
    <section aria-labelledby="all-conditions-heading" className={styles.directory}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <div>
            <h2 id="all-conditions-heading">All conditions</h2>
            <p>Browse by body region, or open the guides and comparisons.</p>
          </div>
          <span className={styles.total}>{categories.reduce((total, category) => total + category.conditions.length, 0)} conditions</span>
        </div>
        <div className={styles.groups}>
          {groups.map(group => (
            <details key={group.id} name="conditions-directory" className={styles.group}>
              <summary className={styles.summary}>
                <h3>
                  <span>{group.title}</span>
                  <span className={styles.count}>{group.entries.length}<span className="sr-only"> links</span></span>
                  <ChevronDownIcon className={styles.chevron} aria-hidden="true" />
                </h3>
              </summary>
              <ul className={styles.entries}>
                {group.entries.map(entry => (
                  <li key={entry.href}>
                    <Link href={entry.href} prefetch={false} className={styles.link}>
                      <span className={styles.copy}>
                        <span className={styles.name}>{entry.name}</span>
                        {entry.description && <span className={styles.description}>{entry.description}</span>}
                      </span>
                      <ChevronRightIcon className={styles.linkArrow} aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
