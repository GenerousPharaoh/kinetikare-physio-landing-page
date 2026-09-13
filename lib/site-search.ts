import { getAllConditions } from './conditions-data';
import { treatments } from './treatments-data';
import { getConditionHub } from './condition-hubs';
import { bodyPartConditions, activityInjuries, symptomMappings } from './search-content';
import { JANE_BOOKING_URL } from './booking';

export interface SearchResult {
  title: string;
  description: string;
  url: string;
  kind: 'Condition' | 'Treatment' | 'Body region' | 'Clinic' | 'Booking';
}
interface SearchEntry extends SearchResult {
  keywords: string[];
}
const normalize = (text: string) =>
  text
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
const conditions = getAllConditions();
const matchesName = (name: string, other: string) =>
  normalize(name).includes(normalize(other)) || normalize(other).includes(normalize(name));

// Index the same data that renders the pages. Search never assigns a diagnosis,
// urgency level or appointment availability from a patient's search words.
const entries: SearchEntry[] = [
  ...conditions.map(
    (condition): SearchEntry => ({
      title: condition.name,
      description: condition.shortDescription || condition.description || '',
      url: `/conditions/${condition.slug}`,
      kind: 'Condition',
      keywords: [
        condition.slug,
        ...Object.entries(bodyPartConditions)
          .filter(([, names]) => names.some((name) => matchesName(condition.name, name)))
          .map(([region]) => region),
        ...activityInjuries
          .filter((activity) =>
            activity.conditions.some((name) => matchesName(condition.name, name))
          )
          .flatMap((activity) => activity.keywords),
        ...symptomMappings
          .filter((mapping) => mapping.conditions.some((name) => matchesName(condition.name, name)))
          .flatMap((mapping) => mapping.symptoms),
      ],
    })
  ),
  ...treatments.map(
    (treatment): SearchEntry => ({
      title: treatment.name,
      description: treatment.shortDescription,
      url: `/treatments/${treatment.id}`,
      kind: 'Treatment',
      keywords: treatment.keywords,
    })
  ),
  ...Array.from(
    new Map(
      conditions
        .map((condition) => getConditionHub(condition.slug, condition.category))
        .filter((hub) => hub !== null)
        .map((hub) => [hub.path, hub])
    ).values()
  ).map(
    (hub): SearchEntry => ({
      title: hub.name,
      description: 'Explore common patterns and related condition guides.',
      url: hub.path,
      kind: 'Body region',
      keywords: [hub.name],
    })
  ),
  {
    title: 'Book an assessment',
    description: 'Check appointment availability with Kareem on Jane.',
    url: JANE_BOOKING_URL,
    kind: 'Booking',
    keywords: ['book', 'appointment', 'schedule', 'visit'],
  },
  {
    title: 'Insurance, fees & direct billing',
    description: 'Answers about coverage, payment and appointment fees.',
    url: '/faq#billing',
    kind: 'Clinic',
    keywords: ['insurance', 'billing', 'cost', 'price', 'benefits', 'ohip', 'coverage', 'fees'],
  },
  {
    title: 'Location & hours',
    description: 'Clinic address, contact details and appointment hours.',
    url: '/#contact',
    kind: 'Clinic',
    keywords: [
      'location',
      'address',
      'directions',
      'hours',
      'parking',
      'contact',
      'phone',
      'email',
    ],
  },
  {
    title: 'Meet Kareem Hassanein',
    description: 'About your registered physiotherapist.',
    url: '/about',
    kind: 'Clinic',
    keywords: ['about', 'kareem', 'qualifications', 'physiotherapist'],
  },
  {
    title: 'Your first appointment',
    description: 'What to expect and how to prepare for physiotherapy.',
    url: '/faq#getting-started',
    kind: 'Clinic',
    keywords: ['first appointment', 'referral', 'prepare', 'wear', 'expect'],
  },
];

// A single mistyped, inserted or omitted letter still finds an existing title.
function closeWord(a: string, b: string): boolean {
  if (a === b) return true;
  if (Math.min(a.length, b.length) < 4 || Math.abs(a.length - b.length) > 1) return false;
  let i = 0,
    j = 0,
    edits = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      i++;
      j++;
      continue;
    }
    if (++edits > 1) return false;
    if (a.length >= b.length) i++;
    if (b.length >= a.length) j++;
  }
  return edits + (a.length - i) + (b.length - j) <= 1;
}

export function searchSite(query: string): SearchResult[] {
  const term = normalize(query);
  if (term.length < 2) return [];
  const words = term
    .split(' ')
    .filter((word) => !['my', 'the', 'a', 'is', 'in', 'and'].includes(word));
  if (!words.length) return [];
  return entries
    .map((entry) => {
      const title = normalize(entry.title);
      const keywords = entry.keywords.map(normalize);
      const description = normalize(entry.description);
      const titleScore =
        title === term
          ? 1000
          : title.startsWith(term)
            ? 900
            : title.includes(term)
              ? 800
              : words.every((word) => title.includes(word))
                ? 700
                : 0;
      const keywordScore = keywords.includes(term)
        ? 600
        : keywords.some((keyword) => words.every((word) => keyword.includes(word)))
          ? 400
          : 0;
      const bodyScore = words.every((word) =>
        `${title} ${description} ${keywords.join(' ')}`.includes(word)
      )
        ? 200
        : 0;
      const typoScore = words.every((word) =>
        title.split(' ').some((candidate) => closeWord(word, candidate))
      )
        ? 100
        : 0;
      return { entry, score: Math.max(titleScore, keywordScore, bodyScore, typoScore) };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title))
    .slice(0, 8)
    .map(({ entry }) => entry);
}
