// Curated main-navigation menu (desktop mega menu and the phone submenu).
//
// The nav renders on every page, which makes it the site's largest
// internal-link surface: each link here gets roughly one inbound link per
// page on the site. It is therefore weighted deliberately, to the regional
// hubs (the pages that carry local intent) and to the work Kareem wants more
// of: hips, knees, feet, dry needling, sports rehab. Regions and conditions
// that are on the site but not promoted (neck, whiplash, elbow, wrist, hand,
// the structural foot conditions) stay reachable from the /conditions
// directory; they are just not carried on every page.
//
// Category tab indexes match the order in lib/condition-nav.ts:
// 0 spinal-health, 1 shoulder, 2 elbow-wrist-hand, 3 hip-pelvis, 4 knee, 5 foot-ankle.

export interface NavMenuLink {
  name: string;
  href: string;
}

export interface NavMenuColumn {
  key: string;
  title: string;
  /** Column heading target: the regional hub where one exists. */
  href: string;
  links: NavMenuLink[];
  viewAll: NavMenuLink;
}

export const NAV_MENU: NavMenuColumn[] = [
  {
    key: 'knee',
    title: 'Knee',
    href: '/conditions/knee-pain',
    links: [
      { name: 'Kneecap Pain (Patellofemoral)', href: '/conditions/knee-pain-patellofemoral' },
      { name: "Patellar Tendinopathy (Jumper's Knee)", href: '/conditions/patellar-tendinopathy' },
      { name: 'Knee Osteoarthritis', href: '/conditions/knee-osteoarthritis' },
      { name: 'ACL Injuries', href: '/conditions/acl-injuries' },
    ],
    viewAll: { name: 'View all (9)', href: '/conditions?tab=4' },
  },
  {
    key: 'hip',
    title: 'Hip & Pelvis',
    href: '/conditions/hip-pain',
    links: [
      { name: 'Lateral Hip Pain & Gluteal Tendinopathy', href: '/conditions/greater-trochanteric-pain-syndrome' },
      { name: 'Hip Osteoarthritis', href: '/conditions/hip-osteoarthritis' },
      { name: 'Hip Impingement (FAI)', href: '/conditions/femoroacetabular-impingement' },
      { name: 'Proximal Hamstring Tendinopathy', href: '/conditions/proximal-hamstring-tendinopathy' },
    ],
    viewAll: { name: 'View all (11)', href: '/conditions?tab=3' },
  },
  {
    key: 'foot-ankle',
    title: 'Foot & Ankle',
    href: '/conditions/foot-ankle-pain',
    links: [
      { name: 'Ankle Sprains', href: '/conditions/ankle-sprains' },
      { name: 'Plantar Fasciitis & Heel Pain', href: '/conditions/plantar-fasciitis' },
      { name: 'Achilles Tendinopathy', href: '/conditions/achilles-tendinopathy' },
      { name: 'Shin Splints', href: '/conditions/shin-splints' },
    ],
    viewAll: { name: 'View all (16)', href: '/conditions?tab=5' },
  },
  {
    key: 'shoulder',
    title: 'Shoulder',
    href: '/conditions/shoulder-pain',
    links: [
      { name: 'Rotator Cuff Injuries', href: '/conditions/rotator-cuff-injuries' },
      { name: 'Shoulder Impingement', href: '/conditions/shoulder-impingement' },
      { name: 'Frozen Shoulder', href: '/conditions/frozen-shoulder' },
      { name: 'Shoulder Instability', href: '/conditions/shoulder-instability' },
    ],
    viewAll: { name: 'View all (9)', href: '/conditions?tab=1' },
  },
  {
    key: 'back',
    title: 'Back & Sciatica',
    href: '/conditions?tab=0',
    links: [
      { name: 'Low Back Pain', href: '/conditions/low-back-pain' },
      { name: 'Sciatica', href: '/conditions/sciatica' },
      { name: 'Disc Herniations', href: '/conditions/disc-herniation' },
      { name: 'SI Joint Pain', href: '/conditions/si-joint-dysfunction' },
    ],
    viewAll: { name: 'View all (9)', href: '/conditions?tab=0' },
  },
  {
    key: 'treatments',
    title: 'Treatments',
    href: '/treatments',
    links: [
      { name: 'Dry Needling', href: '/treatments/dry-needling' },
      { name: 'Sports Rehab & Return to Sport', href: '/treatments/sports-rehab-return-to-sport' },
      { name: 'Cupping Therapy', href: '/treatments/cupping-therapy' },
      { name: 'Post-Surgical Rehabilitation', href: '/treatments/post-surgical-rehabilitation' },
    ],
    viewAll: { name: 'View all (11)', href: '/treatments' },
  },
];

/** Wayfinding row under the columns, so nothing on the site becomes unreachable from the menu. */
export const NAV_MENU_FOOTER_LINKS: NavMenuLink[] = [
  { name: 'All conditions', href: '/conditions' },
  { name: 'Elbow, wrist & hand', href: '/conditions?tab=2' },
  { name: 'Pain guides', href: '/conditions/pain-guides' },
  { name: 'Compare conditions', href: '/conditions/compare' },
];
