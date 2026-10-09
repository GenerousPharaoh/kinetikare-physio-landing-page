// Read by ConditionFlowPage (the condition page layout).

// Conditions whose three-phase exercise progression has been individually
// reviewed (clinical accuracy, citation validity, safety, CPO-regulatory
// language, and appropriateness for self-directed public education) and cleared
// to render publicly. 52 of the 58 conditions that carry progression data.
//
// Deliberately held back and NOT listed here (all six need a clinical
// scope/clearance line before public self-directed use, which is Kareem's to
// write, not a data-integrity issue):
//   - acl-injuries (post-surgical-reconstruction scope; running threshold),
//   - shoulder-instability (acute traumatic vs atraumatic scope),
//   - stress-fractures, scaphoid-fractures, patella-fractures (loading gated on
//     imaging-confirmed union / surgeon clearance),
//   - growth-plate-injuries (pediatric: apophysitis-only scope; exclude acute
//     physeal fractures and SCFE).
export const REHAB_PROGRESSION_SLUGS = new Set<string>([
  // Spine + SI joint
  'low-back-pain',
  'sciatica',
  'disc-herniation',
  'degenerative-disc-disease',
  'spinal-stenosis',
  'facet-joint-syndrome',
  'postural-dysfunction',
  // Hip + pelvis
  'greater-trochanteric-pain-syndrome',
  'hip-osteoarthritis',
  'femoroacetabular-impingement',
  'hip-labral-tears',
  'hip-bursitis',
  'piriformis-syndrome',
  'proximal-hamstring-tendinopathy',
  'groin-strains',
  'hamstring-strains',
  // Knee
  'patellar-tendinopathy',
  'knee-pain-patellofemoral',
  'knee-osteoarthritis',
  'meniscus-tears',
  'it-band-syndrome',
  'mcl-lcl-sprains',
  // Lower leg, ankle + foot
  'achilles-tendinopathy',
  'ankle-sprains',
  'shin-splints',
  'peroneal-tendinopathy',
  'posterior-tibial-tendon-dysfunction',
  'plantar-fasciitis',
  'mortons-neuroma',
  'hallux-valgus',
  'hallux-rigidus',
  'hammer-toe-deformities',
  'severs-disease',
  // Shoulder, elbow, wrist + hand
  'rotator-cuff-injuries',
  'frozen-shoulder',
  'shoulder-bursitis',
  'ac-joint-injuries',
  'biceps-tendinopathy',
  'thoracic-outlet-syndrome',
  'tennis-elbow',
  'carpal-tunnel-syndrome',
  'de-quervains-tenosynovitis',
  'wrist-sprains',
  'repetitive-strain-injuries',
  // Systemic
  'diabetes-related-conditions',
  // Added 2026-06-03 after the citation audit + remediation cleared their
  // previously-fabricated/misattributed references (golfers-elbow, turf-toe,
  // shoulder-impingement, si-joint-dysfunction, pcl-injuries, metatarsalgia).
  'golfers-elbow',
  'turf-toe',
  'shoulder-impingement',
  'si-joint-dysfunction',
  'pcl-injuries',
  'metatarsalgia',
  // Added 2026-06-03 with a condition-specific scope/clearance note (see
  // REHAB_SCOPE_NOTES): each applies only to a specific population or after
  // medical clearance, so the progression renders behind a prominent amber note.
  'acl-injuries',
  'shoulder-instability',
  'stress-fractures',
  'scaphoid-fractures',
  'patella-fractures',
  'growth-plate-injuries',
]);

// Condition-specific scope / clearance sentences, shown as a prominent amber note
// at the top of the Exercise Phases section for higher-stakes conditions
// (post-surgical, fracture, acute, pediatric). Reviewed against current practice;
// the generic "Using these safely" box still renders below this.
export const REHAB_SCOPE_NOTES: Record<string, string> = {
  'acl-injuries':
    'These phases describe rehabilitation after ACL reconstruction. If your ACL is being managed without surgery, your early plan is different and should be set with your physiotherapist. Do not return to running or pivoting until your surgical team has cleared it and you meet the strength and control milestones, not just the calendar.',
  'shoulder-instability':
    'These phases suit gradual-onset or multidirectional instability and the later stages of recovery. After an acute, first-time dislocation, get it reduced, imaged to exclude a fracture, and assessed before loading. After stabilisation surgery, follow your surgeon\'s protocol rather than this general guide.',
  'stress-fractures':
    'Before any impact work in Phase 2, confirm with your clinician that your stress fracture is at a lower-risk site and has healed enough to load. High-risk sites such as the femoral neck, the front of the shin, the navicular, and the base of the fifth metatarsal need medical clearance first, because loading them too early can turn a stress fracture into a complete break.',
  'scaphoid-fractures':
    'Progress these phases on imaging-confirmed bone healing and your surgeon\'s clearance, not the calendar. Scaphoid fractures carry a real risk of non-union, so do not begin loaded or weight-bearing wrist work until union has been confirmed.',
  'meniscus-tears':
    'These phases are for meniscus tears managed without surgery, and for the later stages after a partial meniscectomy once your surgeon has cleared you. After a meniscus repair, deep bending and loaded squatting are usually restricted for several weeks, so follow your surgeon\'s protocol rather than this general timeline.',
  'patella-fractures':
    'Your weight-bearing status, the knee bend you are allowed, and your brace settings are set by your surgical team, so follow those over this general timeline. Do not start straight-leg raises or loaded exercises until your surgeon has cleared them and you can lift the leg without a lag.',
  'growth-plate-injuries':
    'This progression is for overuse growth-plate irritation (apophysitis, such as Osgood-Schlatter or Sever\'s disease). A suspected acute growth-plate fracture or a slipped capital femoral epiphysis needs imaging and orthopaedic clearance before any loading, so have a new or significant injury assessed first.',
};
