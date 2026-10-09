// The symptom and scan-report guides, in one list. The /conditions/pain-guides
// index renders the groups; condition pages link the guides for their region,
// which is most of the internal linking these pages get (the knee-fluid guide
// is the site's most-visited page and had four inbound links before this).

export interface GuideCard {
  href: string;
  title: string;
  blurb: string;
  region: string;
}

export interface GuideGroup {
  heading: string;
  intro: string;
  guides: GuideCard[];
}

export const PAIN_GUIDE_GROUPS: GuideGroup[] = [
  {
    heading: 'Where it hurts',
    intro: 'Guides that start from where the pain is and how it behaves.',
    guides: [
      {
        href: '/conditions/pain-guides/pain-below-kneecap',
        title: 'Pain Right Below the Kneecap',
        blurb:
          'A single tender spot below the kneecap that flares with jumping, stairs, or deep squats. Most commonly patellar tendinopathy in active adults, and growth-plate conditions in young athletes.',
        region: 'Knee',
      },
    ],
  },
  {
    heading: 'Words on a scan report',
    intro: 'Guides to the wording on X-ray, ultrasound and MRI reports: what it means and what it does not.',
    guides: [
      {
        href: '/conditions/pain-guides/fluid-on-the-knee',
        title: 'Suprapatellar Effusion (Fluid on the Knee)',
        blurb:
          'Extra fluid inside the knee joint, seen in the pouch above the kneecap. What the size words on a report mean, the usual causes by how quickly the swelling came on, and when to see a doctor first.',
        region: 'Knee',
      },
      {
        href: '/conditions/pain-guides/joint-space-narrowing',
        title: 'Joint Space Narrowing in the Knee',
        blurb:
          'The gap between the bones looks thinner than expected on an X-ray. What medial, tricompartmental and the severity words mean, how it relates to pain, and what the guidelines recommend.',
        region: 'Knee',
      },
    ],
  },
];

/** Every guide for one region ("Knee", "Hip" ...), in index order. */
export function guidesForRegion(region: string): GuideCard[] {
  return PAIN_GUIDE_GROUPS.flatMap((g) => g.guides).filter((g) => g.region === region);
}
