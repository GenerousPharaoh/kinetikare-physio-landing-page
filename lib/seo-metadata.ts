import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://www.kinetikarephysio.com';

function getFileMTime(relativePath: string): Date | undefined {
  try {
    return fs.statSync(path.join(process.cwd(), relativePath)).mtime;
  } catch {
    return undefined;
  }
}

function getLatestMTime(relativePaths: string[]): Date | undefined {
  return relativePaths
    .map((relativePath) => getFileMTime(relativePath))
    .filter((value): value is Date => Boolean(value))
    .sort((left, right) => right.getTime() - left.getTime())[0];
}

function toIsoString(date: Date | undefined): string | undefined {
  return date?.toISOString();
}

export const SEO_AUTHOR = {
  name: 'Kareem Hassanein',
  url: `${SITE_URL}/about`,
};

export const SEO_PUBLISHER = 'Kareem Hassanein Physiotherapy';

export const SEO_PERSON_ID = `${SITE_URL}/#person`;
export const SEO_ORGANIZATION_ID = `${SITE_URL}/#organization`;

export const CONTENT_LAST_MODIFIED = {
  home: getLatestMTime([
    'app/page.tsx',
    'app/layout.tsx',
    'components/Header.tsx',
    'components/Footer.tsx',
  ]),
  about: getLatestMTime([
    'app/about/page.tsx',
  ]),
  services: getLatestMTime([
    'app/services/page.tsx',
  ]),
  faq: getLatestMTime([
    'app/faq/page.tsx',
    'components/FAQPageClient.tsx',
    'components/FAQAccordion.tsx',
  ]),
  conditions: getLatestMTime([
    'app/conditions/[slug]/page.tsx',
    'components/ConditionPageClient.tsx',
    'lib/conditions-data.ts',
    'lib/detailed-conditions-content.ts',
  ]),
  treatments: getLatestMTime([
    'app/treatments/[slug]/page.tsx',
    'components/treatments/TreatmentHero.tsx',
    'components/treatments/TreatmentContent.tsx',
    'components/treatments/TreatmentProcess.tsx',
    'components/treatments/TreatmentFAQ.tsx',
    'lib/treatments-data.ts',
  ]),
};

export const CONTENT_LAST_MODIFIED_ISO = {
  home: toIsoString(CONTENT_LAST_MODIFIED.home),
  about: toIsoString(CONTENT_LAST_MODIFIED.about),
  services: toIsoString(CONTENT_LAST_MODIFIED.services),
  faq: toIsoString(CONTENT_LAST_MODIFIED.faq),
  conditions: toIsoString(CONTENT_LAST_MODIFIED.conditions),
  treatments: toIsoString(CONTENT_LAST_MODIFIED.treatments),
};
