/**
 * Links for the "Conditions that can feel similar" section of a condition page.
 *
 * Each `differentialDiagnosis` entry names a condition in clinical words
 * ("Meniscal Pathology", "Early Tibiofemoral Osteoarthritis"), so the page a
 * patient should go to next cannot be derived from the name. This map is keyed
 * by the exact `condition` string in `lib/detailed-conditions-content.ts`; an
 * entry that is not here (or points at the page it sits on) stays plain text.
 *
 * Deliberately unmapped (2026-10-11):
 * - Combined or vague entries ("Hip Joint Pathology (FAI or Labral Tear)",
 *   "Inflammatory Arthropathy") and conditions with no page of their own.
 * - Emergencies and fractures that differ from the page they resemble
 *   (Achilles rupture, proximal hamstring avulsion, tibial plateau fracture).
 * - Pages that are kept but not promoted: neck pain, whiplash, tennis and
 *   golfer's elbow, carpal tunnel, de Quervain's (see NOT_PROMOTED in the
 *   repo CLAUDE.md content rules).
 *
 * If you rename a differential entry, rename its key here too, or it stops
 * linking (nothing breaks).
 */

const KNEE: Record<string, string> = {
  'ACL Tear': '/conditions/acl-injuries',
  'ACL Tear with Associated MCL Injury': '/conditions/acl-injuries',
  'Early Tibiofemoral Osteoarthritis': '/conditions/knee-osteoarthritis',
  'Knee Osteoarthritis': '/conditions/knee-osteoarthritis',
  'Iliotibial Band Syndrome': '/conditions/it-band-syndrome',
  'Lateral Collateral Ligament Sprain': '/conditions/mcl-lcl-sprains',
  'MCL Sprain': '/conditions/mcl-lcl-sprains',
  'Lateral Meniscus Tear': '/conditions/meniscus-tears',
  'Medial Meniscus Tear': '/conditions/meniscus-tears',
  'Meniscal Pathology': '/conditions/meniscus-tears',
  'Meniscal Tear (Degenerative)': '/conditions/meniscus-tears',
  'Posterior Meniscal Root Tear': '/conditions/meniscus-tears',
  'PCL Injury': '/conditions/pcl-injuries',
  "Patellar Tendinopathy (Jumper's Knee)": '/conditions/patellar-tendinopathy',
  'Patellofemoral Pain': '/conditions/knee-pain-patellofemoral',
  'Patellofemoral Pain Syndrome': '/conditions/knee-pain-patellofemoral',
  'Osgood-Schlatter Disease': '/conditions/growth-plate-injuries',
  'Osgood-Schlatter Disease (Tibial Tubercle Apophysitis)': '/conditions/growth-plate-injuries',
  // Knee pain coming from the hip: the hip hub sorts hip causes by where they hurt.
  'Referred Pain from the Hip': '/conditions/hip-pain',
};

const HIP: Record<string, string> = {
  'Femoroacetabular Impingement': '/conditions/femoroacetabular-impingement',
  'Femoroacetabular Impingement Syndrome': '/conditions/femoroacetabular-impingement',
  'Hip Labral Tear': '/conditions/hip-labral-tears',
  'Isolated Labral Tear Without FAI Morphology': '/conditions/hip-labral-tears',
  'Hip Osteoarthritis': '/conditions/hip-osteoarthritis',
  'Hip Osteoarthritis (referring into low back)': '/conditions/hip-osteoarthritis',
  'Gluteal Tendinopathy': '/conditions/greater-trochanteric-pain-syndrome',
  'Gluteal Tendinopathy (GTPS)': '/conditions/greater-trochanteric-pain-syndrome',
  'Greater Trochanteric Pain Syndrome (Gluteal Tendinopathy)': '/conditions/greater-trochanteric-pain-syndrome',
  'Trochanteric Bursitis / Gluteal Tendinopathy': '/conditions/greater-trochanteric-pain-syndrome',
  'Proximal Hamstring Tendinopathy': '/conditions/proximal-hamstring-tendinopathy',
  'Piriformis / Deep Gluteal Syndrome': '/conditions/piriformis-syndrome',
  'Piriformis Syndrome / Deep Gluteal Syndrome': '/conditions/piriformis-syndrome',
  'Deep Gluteal Syndrome (Sciatic Nerve Entrapment)': '/conditions/piriformis-syndrome',
  'Deep Gluteal Syndrome / Piriformis Involvement': '/conditions/piriformis-syndrome',
  'Deep Gluteal Syndrome Including Piriformis Involvement': '/conditions/piriformis-syndrome',
  'Sciatic Nerve Irritation / Deep Gluteal Syndrome': '/conditions/piriformis-syndrome',
  'Sacroiliac Joint Dysfunction': '/conditions/si-joint-dysfunction',
  'Sacroiliac Joint Pain': '/conditions/si-joint-dysfunction',
  'Referred Pain from the Sacroiliac Joint': '/conditions/si-joint-dysfunction',
  'Adductor-Related Groin Pain': '/conditions/groin-strains',
  'Stress Fracture of the Femoral Neck': '/conditions/stress-fractures',
  'Hip Stress Fracture (Femoral Neck)': '/conditions/stress-fractures',
  'Slipped Capital Femoral Epiphysis (SCFE)': '/conditions/growth-plate-injuries',
};

const BACK: Record<string, string> = {
  'Facet Joint Pain': '/conditions/facet-joint-syndrome',
  'Facet-Mediated Pain': '/conditions/facet-joint-syndrome',
  'Facet-Mediated Pain with Somatic Referral': '/conditions/facet-joint-syndrome',
  'Facet-Mediated Referred Pain': '/conditions/facet-joint-syndrome',
  'Lumbar Facet-Mediated Pain': '/conditions/facet-joint-syndrome',
  'Lumbar Radiculopathy': '/conditions/sciatica',
  'Lumbar Radiculopathy (Disc Herniation)': '/conditions/sciatica',
  'Lumbar Radiculopathy (Disc or Foraminal)': '/conditions/sciatica',
  'Lumbar Radiculopathy (L5 or S1)': '/conditions/sciatica',
  'Lumbar Radiculopathy / Disc Herniation': '/conditions/sciatica',
  'Lumbar Radiculopathy from Foraminal Stenosis': '/conditions/sciatica',
  'S1 Radiculopathy': '/conditions/sciatica',
  'L5 or S1 Radiculopathy Referring to the Lateral Hip': '/conditions/sciatica',
  'Lumbar-referred Leg Pain': '/conditions/sciatica',
  'Lumbar Spinal Stenosis': '/conditions/spinal-stenosis',
  'Spinal Stenosis': '/conditions/spinal-stenosis',
  'Mechanical Low Back Pain (Non-Specific)': '/conditions/low-back-pain',
  'Referred Pain from the Lumbar Spine': '/conditions/low-back-pain',
  'Lumbar Spine Referral (Facet or Radicular Pain)': '/conditions/low-back-pain',
};

const SHOULDER: Record<string, string> = {
  'Rotator Cuff Related Shoulder Pain': '/conditions/rotator-cuff-injuries',
  'Rotator Cuff Tear (Full or High-Grade Partial)': '/conditions/rotator-cuff-injuries',
  'Rotator Cuff Tear or Tendinopathy': '/conditions/rotator-cuff-injuries',
  'Rotator Cuff Tendinopathy or Tear': '/conditions/rotator-cuff-injuries',
  'Rotator Cuff Tendinopathy or Tear (Supraspinatus or Subscapularis)': '/conditions/rotator-cuff-injuries',
  'Calcific Tendinopathy of the Rotator Cuff': '/conditions/rotator-cuff-injuries',
  // Carried only by the frozen shoulder page.
  'Calcific Tendinitis': '/conditions/rotator-cuff-injuries',
  'Subacromial Pain Syndrome': '/conditions/shoulder-impingement',
  'Subacromial Bursitis / Impingement Syndrome': '/conditions/shoulder-impingement',
  'Subacromial Pain Syndrome / Bursitis': '/conditions/shoulder-impingement',
  'Frozen Shoulder (Adhesive Capsulitis)': '/conditions/frozen-shoulder',
  'Adhesive Capsulitis (Frozen Shoulder) in Diabetes': '/conditions/frozen-shoulder',
  'AC Joint Pathology': '/conditions/ac-joint-injuries',
  'Biceps Tendinopathy': '/conditions/biceps-tendinopathy',
  'Posterior Shoulder Instability': '/conditions/shoulder-instability',
  'Multidirectional Instability with Hypermobility': '/conditions/shoulder-instability',
  'Thoracic Outlet Syndrome': '/conditions/thoracic-outlet-syndrome',
};

const WRIST: Record<string, string> = {
  'Scaphoid Fracture': '/conditions/scaphoid-fractures',
  'Scaphoid Fracture (Acute or Non-union)': '/conditions/scaphoid-fractures',
  'Scapholunate Ligament Injury': '/conditions/wrist-sprains',
  'Wrist Sprain (Scapholunate Ligament Strain)': '/conditions/wrist-sprains',
};

const FOOT: Record<string, string> = {
  'Achilles Tendinopathy': '/conditions/achilles-tendinopathy',
  'Insertional vs Mid-portion Achilles Tendinopathy': '/conditions/achilles-tendinopathy',
  'Plantar Fasciitis': '/conditions/plantar-fasciitis',
  'Hallux Rigidus': '/conditions/hallux-rigidus',
  'Hallux Rigidus (First MTP Arthritis)': '/conditions/hallux-rigidus',
  'Hallux Valgus': '/conditions/hallux-valgus',
  'Hallux Valgus with Secondary Lesser Toe Deformity': '/conditions/hallux-valgus',
  "Morton's Neuroma": '/conditions/mortons-neuroma',
  'Turf Toe (First MTP Sprain)': '/conditions/turf-toe',
  'Tarsal Tunnel Syndrome': '/conditions/tarsal-tunnel-syndrome',
  'Posterior Tibial Tendinitis': '/conditions/posterior-tibial-tendon-dysfunction',
  'Posterior Tibial Tendinopathy': '/conditions/posterior-tibial-tendon-dysfunction',
  'Posterior Tibial Tendon Dysfunction': '/conditions/posterior-tibial-tendon-dysfunction',
  'Tibialis Posterior or Deep Posterior Compartment Tendinopathy': '/conditions/posterior-tibial-tendon-dysfunction',
  'Peroneal Tendon Injury (Tear or Subluxation)': '/conditions/peroneal-tendinopathy',
  'Peroneal Tendon Tear or Subluxation': '/conditions/peroneal-tendinopathy',
  'Medial Tibial Stress Syndrome (Shin Splints)': '/conditions/shin-splints',
  'Chronic Lateral Ankle Ligament Injury or Instability': '/conditions/ankle-sprains',
  'Isolated ATFL vs Combined ATFL plus CFL Sprain': '/conditions/ankle-sprains',
  "Sever's Disease (Calcaneal Apophysitis)": '/conditions/severs-disease',
  'Salter-Harris Physeal Fracture (Types I to V)': '/conditions/growth-plate-injuries',
  'Stress Fracture': '/conditions/stress-fractures',
  'Stress Fracture of Metatarsal': '/conditions/stress-fractures',
  'Tibial Stress Fracture': '/conditions/stress-fractures',
  'First Metatarsal Stress Fracture': '/conditions/stress-fractures',
  'Calcaneal Stress Fracture': '/conditions/stress-fractures',
  'Calcaneal Stress Fracture or Calcaneal Bone Stress': '/conditions/stress-fractures',
  'Diabetic Peripheral Neuropathy': '/conditions/diabetes-related-conditions',
  'Peripheral Neuropathy (e.g. Diabetic)': '/conditions/diabetes-related-conditions',
};

const DIFFERENTIAL_PATHS: Record<string, string> = { ...KNEE, ...HIP, ...BACK, ...SHOULDER, ...WRIST, ...FOOT };

/** The page a differential entry should link to, or null to leave it as text. */
export function differentialHref(name: string, currentSlug: string): string | null {
  const href = DIFFERENTIAL_PATHS[name];
  if (!href || href === `/conditions/${currentSlug}`) return null;
  return href;
}

/** Condition slugs the similar-conditions section already links to, so the related list can skip them. */
export function linkedDifferentialSlugs(names: string[], currentSlug: string): Set<string> {
  const slugs = new Set<string>();
  for (const name of names) {
    const href = differentialHref(name, currentSlug);
    if (href) slugs.add(href.replace('/conditions/', ''));
  }
  return slugs;
}

export const DIFFERENTIAL_LINK_KEYS = Object.keys(DIFFERENTIAL_PATHS);
