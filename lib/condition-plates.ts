/**
 * The commissioned condition plates (2026): slug to the structure named in
 * the figure caption. A plain data module so server components can read it
 * (an export from a 'use client' file reaches a server component as an opaque
 * reference).
 */
export const CONDITION_PLATES: Record<string, string> = {
  // Spine
  'low-back-pain': 'Lumbar spine',
  sciatica: 'Sciatic nerve',
  'disc-herniation': 'Lumbar disc',
  'spinal-stenosis': 'Lumbar canal',
  'neck-pain': 'Cervical spine',
  // Knee
  'knee-pain-patellofemoral': 'Patellofemoral joint',
  'knee-osteoarthritis': 'Knee joint',
  'acl-injuries': 'Cruciate ligaments',
  'meniscus-tears': 'Menisci',
  'patellar-tendinopathy': 'Patellar tendon',
  'it-band-syndrome': 'Iliotibial band',
  // Hip and pelvis
  'greater-trochanteric-pain-syndrome': 'Gluteal tendons',
  'hip-osteoarthritis': 'Hip joint',
  'femoroacetabular-impingement': 'Femoroacetabular joint',
  'hip-labral-tears': 'Acetabular labrum',
  'hamstring-strains': 'Hamstring muscles',
  'proximal-hamstring-tendinopathy': 'Hamstring origin',
  // Shoulder
  'rotator-cuff-injuries': 'Rotator cuff',
  'shoulder-impingement': 'Subacromial space',
  'frozen-shoulder': 'Glenohumeral capsule',
  // Elbow, wrist and hand
  'tennis-elbow': 'Common extensor origin',
  'carpal-tunnel-syndrome': 'Median nerve',
  // Foot and ankle
  'plantar-fasciitis': 'Plantar fascia',
  'achilles-tendinopathy': 'Achilles tendon',
  'ankle-sprains': 'Lateral ankle ligaments',
  'shin-splints': 'Posteromedial tibia',

  // --- second wave ---
  // Spine
  whiplash: 'Cervical spine',
  'degenerative-disc-disease': 'Lumbar discs',
  'facet-joint-syndrome': 'Facet joints',
  'postural-dysfunction': 'Spinal column',
  // Knee
  'mcl-lcl-sprains': 'Collateral ligaments',
  'pcl-injuries': 'Posterior cruciate',
  'patella-fractures': 'Patella',
  // Hip and pelvis
  'hip-bursitis': 'Trochanteric bursa',
  'piriformis-syndrome': 'Piriformis',
  'si-joint-dysfunction': 'Sacroiliac joint',
  'groin-strains': 'Adductor origin',
  // Shoulder
  'shoulder-instability': 'Glenohumeral joint',
  'biceps-tendinopathy': 'Long head of biceps',
  'ac-joint-injuries': 'Acromioclavicular joint',
  'thoracic-outlet-syndrome': 'Thoracic outlet',
  'diabetes-related-conditions': 'Hand and palmar fascia',
  // Elbow, wrist and hand
  'golfers-elbow': 'Common flexor origin',
  'de-quervains-tenosynovitis': 'First dorsal compartment',
  'wrist-sprains': 'Carpal ligaments',
  'scaphoid-fractures': 'Scaphoid',
  'repetitive-strain-injuries': 'Forearm and wrist',
  // Foot and ankle
  'peroneal-tendinopathy': 'Peroneal tendons',
  'posterior-tibial-tendon-dysfunction': 'Posterior tibial tendon',
  'tarsal-tunnel-syndrome': 'Tarsal tunnel',
  metatarsalgia: 'Metatarsal heads',
  'hallux-valgus': 'First ray',
  'hallux-rigidus': 'First MTP joint',
  'turf-toe': 'Plantar plate',
  'hammer-toe-deformities': 'Lesser toe',
  'stress-fractures': 'Tibial cortex',
  'growth-plate-injuries': 'Growth plate',
  'mortons-neuroma': 'Plantar digital nerve',
  'severs-disease': 'Calcaneal apophysis',
};
