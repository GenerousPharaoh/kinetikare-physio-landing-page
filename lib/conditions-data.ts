export interface Condition {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  details?: string;
  featured?: boolean;
  priority?: number;
  metaDescription?: string;
  keywords?: string[];
  
  // Medical/Educational content structure
  pathophysiology?: string;  // What's happening at tissue level
  clinicalPresentation?: {
    primarySymptoms: string[];
    associatedSymptoms?: string[];
    typicalPattern?: string;
  };
  differentialDiagnosis?: {
    condition: string;
    distinguishingFeatures: string;
  }[];
  evidenceBasedTreatment?: {
    approach: string;
    evidence: string;
    effectivenessLevel?: 'strong' | 'moderate' | 'emerging';
  }[];
  prognosis?: {
    timeline: string;
    factors: string[];
    naturalHistory?: string;
  };
  selfManagement?: {
    strategy: string;
    rationale: string;
    precautions?: string[];
  }[];
  clinicalRedFlags?: {
    sign: string;
    action: string;
  }[];
  keyResearch?: {
    title: string;
    authors?: string;
    year: number;
    journal?: string;
    sampleSize?: string;
    findings: string;
    relevance: string;
    citation?: string;
  }[];
  
  // New evidence-based sections
  evidenceSnapshot?: {
    firstLine?: string;  // Old format - deprecated
    imaging?: string;    // Old format - deprecated
    management?: string; // Old format - deprecated
    primaryStrategy?: string;    // New format
    secondaryStrategy?: string;  // New format
    preventionStrategy?: string; // New format
    sources?: string;
  };
  whatToExpect?: {
    firstVisit: string;
    earlyPhase: string;
    progression: string;
  };
  measuringProgress?: {
    dayToDay: string;
    questionnaires?: string;
    activityTarget: string;
  };
  accessAndHours?: {
    location: string;
    hours: string;
    parking: string;
    accessibility: string;
    booking: string;
  };
  
  // Legacy fields (keeping for backward compatibility)
  overview?: string;
  biomechanics?: string;
  researchInsights?: string[];
  treatmentApproach?: {
    title: string;
    description: string;
    techniques: string[];
  };
  timeline?: {
    phase: string;
    duration: string;
    description: string;
  }[];
  redFlags?: string[];
  relatedConditions?: string[];
  whenToSeek?: string[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  
  // New intelligent cross-linking system
  intelligentRelatedConditions?: {
    slug: string;
    relationshipType: 'anatomical' | 'symptomatic' | 'causal' | 'biomechanical' | 'treatment';
    explanation: string;
    relevanceScore: number; // 1-10 scale
  }[];
}

export interface ConditionCategory {
  title: string;
  slug: string;
  subtitle: string;
  accent: string;
  gradient: string;
  textGradient: string;
  conditions: Condition[];
}

// Helper function to generate slug from condition name
function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Extract condition data from the existing structure
const spinalConditions: Condition[] = [
  {
    id: 'low-back-pain',
    slug: 'low-back-pain',
    name: 'Low Back Pain',
    category: 'spinal-health',
    description: 'acute and chronic, mechanical, disc-related',
    featured: true,
    priority: 1,
    metaDescription: 'Expert low back pain treatment in Burlington with Kareem Hassanein. Advanced manual therapy physiotherapy using manual techniques, dry needling, and personalized exercise programs for lasting relief.',
  },
  {
    id: 'neck-pain',
    slug: 'neck-pain',
    name: 'Neck Pain & Stiffness',
    category: 'spinal-health',
    description: 'including whiplash-associated disorders',
    featured: true,
    priority: 7,
    metaDescription: 'Specialized neck pain treatment in Burlington. Expert physiotherapy for cervical spine issues, whiplash, and chronic neck stiffness using evidence-based manual therapy techniques.',
  },
  {
    id: 'whiplash',
    slug: 'whiplash',
    name: 'Whiplash/WAD',
    category: 'spinal-health',
    description: 'Whiplash-associated disorders from motor vehicle accidents',
    featured: true,
    priority: 23,
    metaDescription: 'Whiplash treatment in Burlington. Expert care for motor vehicle accident injuries with early intervention and progressive rehabilitation.',
  },
  {
    id: 'sciatica',
    slug: 'sciatica',
    name: 'Sciatica',
    category: 'spinal-health',
    description: 'Nerve root compressions and radiculopathy',
    featured: true,
    priority: 2,
    metaDescription: 'Get relief from sciatica pain in Burlington. Kareem Hassanein provides specialized treatment for nerve pain, using manual therapy and targeted exercises to address root causes.',
  },
  {
    id: 'disc-herniation',
    slug: 'disc-herniation',
    name: 'Disc Herniations / Bulges',
    category: 'spinal-health',
    description: 'Comprehensive disc injury management',
    featured: true,
    priority: 10,
    metaDescription: 'Expert disc herniation treatment in Burlington. Non-surgical physiotherapy approach to disc bulges using McKenzie method, manual therapy, and progressive rehabilitation.',
  },
  {
    id: 'degenerative-disc',
    slug: 'degenerative-disc-disease',
    name: 'Degenerative Disc Disease',
    category: 'spinal-health',
    description: 'Degenerative Joint Disease (Spondylosis)',
    metaDescription: 'Degenerative disc disease treatment in Burlington. Kareem Hassanein provides specialized physiotherapy for spine degeneration, using manual therapy and targeted exercises for pain relief.',
  },
  {
    id: 'spinal-stenosis',
    slug: 'spinal-stenosis',
    name: 'Spinal Stenosis',
    category: 'spinal-health',
    description: 'Narrowing of spinal canal management',
    metaDescription: 'Spinal stenosis treatment in Burlington. Expert physiotherapy for spinal canal narrowing with Kareem Hassanein, using decompression techniques and mobility exercises.',
  },
  {
    id: 'facet-joint-syndrome',
    slug: 'facet-joint-syndrome',
    name: 'Facet Joint Syndrome',
    category: 'spinal-health',
    description: 'Facet joint pain and dysfunction',
    featured: true,
    priority: 24,
    metaDescription: 'Facet joint syndrome treatment in Burlington. Targeted physiotherapy for spinal joint pain using manual therapy and specific exercises.',
  },
  {
    id: 'postural-dysfunction',
    slug: 'postural-dysfunction',
    name: 'Postural Dysfunction',
    category: 'spinal-health',
    description: 'Related pain and movement issues',
    metaDescription: 'Postural dysfunction treatment in Burlington. Expert physiotherapy with Kareem Hassanein for poor posture, forward head position, and related pain using corrective exercises.',
  },
];

const shoulderConditions: Condition[] = [
  {
    id: 'rotator-cuff',
    slug: 'rotator-cuff-injuries',
    name: 'Rotator Cuff Injuries',
    category: 'shoulder',
    description: 'tendinopathy, tears, post-repair',
    featured: true,
    priority: 3,
    metaDescription: 'Rotator cuff injury treatment in Burlington. Expert physiotherapy for shoulder pain, tears, and tendinopathy using manual therapy and progressive strengthening programs.',
  },
  {
    id: 'shoulder-impingement',
    slug: 'shoulder-impingement',
    name: 'Shoulder Impingement Syndrome',
    category: 'shoulder',
    description: 'Subacromial impingement causing pain with overhead activities',
    featured: true,
    priority: 25,
    metaDescription: 'Shoulder impingement treatment in Burlington. Expert physiotherapy for subacromial pain using manual therapy and scapular retraining.',
  },
  {
    id: 'frozen-shoulder',
    slug: 'frozen-shoulder',
    name: 'Frozen Shoulder',
    category: 'shoulder',
    description: 'Adhesive Capsulitis treatment',
    featured: true,
    priority: 8,
    metaDescription: 'Effective frozen shoulder treatment in Burlington. Specialized physiotherapy for adhesive capsulitis using manual therapy, mobilization, and guided exercise progression.',
  },
  {
    id: 'shoulder-instability',
    slug: 'shoulder-instability',
    name: 'Shoulder Instability / Dislocations',
    category: 'shoulder',
    description: 'conservative management & post-surgical',
    metaDescription: 'Shoulder instability and dislocation treatment in Burlington. Expert physiotherapy with Kareem Hassanein for shoulder stability training and post-surgical rehabilitation.',
  },
  {
    id: 'thoracic-outlet',
    slug: 'thoracic-outlet-syndrome',
    name: 'Thoracic Outlet Syndrome',
    category: 'shoulder',
    description: 'Nerve and vascular compression in neck and shoulder',
    featured: true,
    priority: 26,
    metaDescription: 'Thoracic outlet syndrome treatment in Burlington. Specialized care for nerve compression with postural retraining and manual therapy.',
  },
  {
    id: 'biceps-tendinopathy',
    slug: 'biceps-tendinopathy',
    name: 'Biceps Tendinopathy',
    category: 'shoulder',
    description: 'Long head biceps tendon pain',
    metaDescription: 'Biceps tendinopathy treatment in Burlington. Expert physiotherapy for anterior shoulder pain with progressive loading exercises.',
  },
  {
    id: 'shoulder-bursitis',
    slug: 'shoulder-bursitis',
    name: 'Bursitis / Tendinitis',
    category: 'shoulder',
    description: 'Inflammatory shoulder conditions',
    metaDescription: 'Shoulder bursitis and tendinitis treatment in Burlington. Kareem Hassanein provides expert physiotherapy for shoulder inflammation using manual therapy and anti-inflammatory techniques.',
  },
  {
    id: 'ac-joint',
    slug: 'ac-joint-injuries',
    name: 'AC Joint Sprains',
    category: 'shoulder',
    description: 'Acromioclavicular joint separations and arthritis',
    featured: true,
    priority: 27,
    metaDescription: 'AC joint injury treatment in Burlington. Expert care for shoulder separations with targeted strengthening and return-to-sport protocols.',
  },
];

const elbowWristConditions: Condition[] = [
  {
    id: 'tennis-elbow',
    slug: 'tennis-elbow',
    name: 'Tennis Elbow',
    category: 'elbow-wrist-hand',
    description: 'Lateral epicondylitis, common extensor tendinopathy',
    featured: true,
    priority: 6,
    metaDescription: 'Tennis elbow treatment in Burlington. Expert physiotherapy for lateral epicondylitis using manual therapy, dry needling, and progressive loading exercises.',
  },
  {
    id: 'golfers-elbow',
    slug: 'golfers-elbow',
    name: "Golfer's Elbow",
    category: 'elbow-wrist-hand',
    description: 'Medial epicondylitis, common flexor tendinopathy',
    featured: true,
    priority: 17,
    metaDescription: "Golfer's elbow treatment in Burlington. Specialized physiotherapy for medial epicondylitis with targeted strengthening and manual therapy.",
  },
  {
    id: 'carpal-tunnel',
    slug: 'carpal-tunnel-syndrome',
    name: 'Carpal Tunnel Syndrome',
    category: 'elbow-wrist-hand',
    description: 'Median nerve compression at the wrist',
    featured: true,
    priority: 18,
    metaDescription: 'Carpal tunnel syndrome treatment in Burlington. Non-surgical physiotherapy for median nerve compression using nerve gliding and ergonomic solutions.',
  },
  {
    id: 'de-quervains',
    slug: 'de-quervains-tenosynovitis',
    name: "De Quervain's Tenosynovitis",
    category: 'elbow-wrist-hand',
    description: 'Thumb tendon inflammation, common in new parents',
    featured: true,
    priority: 19,
    metaDescription: "De Quervain's treatment in Burlington. Expert physiotherapy for thumb pain using splinting, manual therapy, and activity modification.",
  },
  {
    id: 'wrist-sprains',
    slug: 'wrist-sprains',
    name: 'Wrist Sprains & Strains',
    category: 'elbow-wrist-hand',
    description: 'Ligament and soft tissue injuries',
    metaDescription: 'Wrist sprain treatment in Burlington. Comprehensive physiotherapy for wrist injuries with progressive strengthening and return to activity.',
  },
  {
    id: 'repetitive-strain',
    slug: 'repetitive-strain-injuries',
    name: 'Repetitive Strain Injuries',
    category: 'elbow-wrist-hand',
    description: 'Overuse injuries of upper limb',
    metaDescription: 'RSI treatment in Burlington. Expert physiotherapy for workplace injuries with ergonomic assessment and targeted rehabilitation.',
  },
];

const hipPelvisConditions: Condition[] = [
  {
    id: 'hip-osteoarthritis',
    slug: 'hip-osteoarthritis',
    name: 'Hip Osteoarthritis',
    category: 'hip-pelvis',
    description: 'Joint degeneration, cartilage breakdown, activity-related pain',
    featured: true,
    priority: 9,
    metaDescription: 'Hip osteoarthritis treatment in Burlington. Expert physiotherapy for hip joint pain using evidence-based exercise therapy, manual therapy, and pain management strategies.',
  },
  {
    id: 'femoroacetabular-impingement',
    slug: 'femoroacetabular-impingement',
    name: 'Femoroacetabular Impingement (FAI)',
    category: 'hip-pelvis',
    description: 'Hip impingement causing groin pain with deep hip flexion',
    featured: true,
    priority: 28,
    metaDescription: 'FAI treatment in Burlington. Specialized physiotherapy for femoroacetabular impingement using movement modification and progressive strengthening.',
  },
  {
    id: 'greater-trochanteric-pain-syndrome',
    slug: 'greater-trochanteric-pain-syndrome',
    name: 'Greater Trochanteric Pain Syndrome',
    category: 'hip-pelvis',
    description: 'Gluteal tendinopathy, lateral hip pain, formerly "trochanteric bursitis"',
    featured: true,
    priority: 29,
    metaDescription: 'GTPS treatment in Burlington. Expert physiotherapy for lateral hip pain and gluteal tendinopathy using progressive loading and manual therapy.',
  },
  {
    id: 'hip-labral-tears',
    slug: 'hip-labral-tears',
    name: 'Hip Labral Tears',
    category: 'hip-pelvis',
    description: 'Cartilage ring tears causing clicking, catching, groin pain',
    featured: true,
    priority: 30,
    metaDescription: 'Hip labral tear treatment in Burlington. Conservative physiotherapy for labral pathology using activity modification and targeted rehabilitation.',
  },
  {
    id: 'hip-bursitis',
    slug: 'hip-bursitis',
    name: 'Hip Bursitis',
    category: 'hip-pelvis',
    description: 'Bursal inflammation causing localized hip pain',
    metaDescription: 'Hip bursitis treatment in Burlington. Physiotherapy for inflammatory hip conditions using activity modification and progressive loading.',
  },
  {
    id: 'deep-gluteal-syndrome',
    slug: 'deep-gluteal-syndrome',
    name: 'Deep Gluteal Syndrome',
    category: 'hip-pelvis',
    description: 'Sciatic nerve entrapment in deep gluteal space',
    metaDescription: 'Deep gluteal syndrome treatment in Burlington. Specialized care for sciatic nerve entrapment using neural mobilization and manual therapy.',
  },
  {
    id: 'proximal-hamstring-tendinopathy',
    slug: 'proximal-hamstring-tendinopathy',
    name: 'Proximal Hamstring Tendinopathy',
    category: 'hip-pelvis',
    description: 'Sitting bone pain, hamstring origin tendon issues',
    featured: true,
    priority: 31,
    metaDescription: 'Proximal hamstring tendinopathy treatment in Burlington. Expert physiotherapy for sitting bone pain using load management and progressive strengthening.',
  },
  {
    id: 'piriformis-syndrome',
    slug: 'piriformis-syndrome',
    name: 'Piriformis Syndrome',
    category: 'hip-pelvis',
    description: 'Deep gluteal syndrome causing sciatic-type pain',
    featured: true,
    priority: 20,
    metaDescription: 'Piriformis syndrome treatment in Burlington. Expert physiotherapy for deep hip pain and sciatica using manual therapy and targeted stretching.',
  },
  {
    id: 'si-joint',
    slug: 'si-joint-dysfunction',
    name: 'Sacroiliac (SI) Joint Dysfunction',
    category: 'hip-pelvis',
    description: 'SI joint pain and instability',
    metaDescription: 'SI joint dysfunction treatment in Burlington. Specialized physiotherapy for sacroiliac pain using manual therapy and core stabilization.',
  },
  {
    id: 'groin-strains',
    slug: 'groin-strains',
    name: 'Groin Strains',
    category: 'hip-pelvis',
    description: 'Adductor strains common in hockey and soccer',
    featured: true,
    priority: 21,
    metaDescription: 'Groin strain treatment in Burlington. Sports physiotherapy for adductor injuries with progressive strengthening and return-to-sport protocols.',
  },
  {
    id: 'hamstring-strains',
    slug: 'hamstring-strains',
    name: 'Hamstring Strains',
    category: 'hip-pelvis',
    description: 'Hamstring tears and chronic tightness',
    featured: true,
    priority: 22,
    metaDescription: 'Hamstring strain treatment in Burlington. Expert physiotherapy for hamstring injuries using eccentric strengthening and running retraining.',
  },
];

const kneeConditions: Condition[] = [
  {
    id: 'knee-pain',
    slug: 'knee-pain-patellofemoral',
    name: 'Knee Pain',
    category: 'knee',
    description: "e.g., Patellofemoral Pain Syndrome, Patellar Tendinopathy",
    featured: true,
    priority: 4,
    metaDescription: 'Expert knee pain treatment in Burlington. Specialized physiotherapy for patellofemoral pain syndrome using biomechanical assessment and targeted rehabilitation.',
  },
  {
    id: 'acl-injuries',
    slug: 'acl-injuries',
    name: 'ACL Injuries',
    category: 'knee',
    description: 'Anterior cruciate ligament tears, conservative and post-surgical rehab',
    featured: true,
    priority: 11,
    metaDescription: 'ACL injury rehabilitation in Burlington. Expert physiotherapy for ACL tears, pre-surgical strengthening, and post-operative recovery with Kareem Hassanein.',
  },
  {
    id: 'mcl-lcl-sprains',
    slug: 'mcl-lcl-sprains',
    name: 'MCL/LCL Sprains',
    category: 'knee',
    description: 'Medial and lateral collateral ligament injuries',
    metaDescription: 'MCL and LCL sprain treatment in Burlington. Specialized physiotherapy for knee ligament injuries with manual therapy and progressive strengthening.',
  },
  {
    id: 'pcl-injuries',
    slug: 'pcl-injuries',
    name: 'PCL Injuries',
    category: 'knee',
    description: 'Posterior cruciate ligament tears, conservative and post-surgical rehab',
    metaDescription: 'PCL injury treatment in Burlington. Expert physiotherapy for posterior cruciate ligament injuries with specialized rehabilitation protocols.',
  },
  {
    id: 'meniscus-tears',
    slug: 'meniscus-tears',
    name: 'Meniscal Injuries',
    category: 'knee',
    description: 'conservative & post-surgical rehab',
    featured: true,
    priority: 12,
    metaDescription: 'Meniscus tear treatment in Burlington. Expert physiotherapy for meniscal injuries, avoiding surgery when possible, and post-operative rehabilitation.',
  },
  {
    id: 'it-band-syndrome',
    slug: 'it-band-syndrome',
    name: 'IT Band Syndrome',
    category: 'knee',
    description: 'Iliotibial band friction syndrome, common in runners and cyclists',
    featured: true,
    priority: 13,
    metaDescription: 'IT band syndrome treatment in Burlington. Specialized physiotherapy for runners and cyclists with lateral knee pain using targeted stretching and strengthening.',
  },
  {
    id: 'patellar-tendinopathy',
    slug: 'patellar-tendinopathy',
    name: "Patellar Tendinopathy (Jumper's Knee)",
    category: 'knee',
    description: 'Patellar tendon pain common in jumping sports',
    metaDescription: "Jumper's knee treatment in Burlington. Expert physiotherapy for patellar tendinopathy using progressive loading and manual therapy techniques.",
  },
  {
    id: 'knee-arthritis',
    slug: 'knee-osteoarthritis',
    name: 'Osteoarthritis of the Knee',
    category: 'knee',
    description: 'Degenerative joint disease management',
    metaDescription: 'Knee arthritis treatment in Burlington. Evidence-based physiotherapy to reduce pain, improve mobility, and delay surgery for knee osteoarthritis.',
  },
];

const footAnkleConditions: Condition[] = [
  {
    id: 'ankle-sprains',
    slug: 'ankle-sprains',
    name: 'Ankle Sprains',
    category: 'foot-ankle',
    description: 'Lateral and medial ligament injuries, chronic ankle instability',
    featured: true,
    priority: 14,
    metaDescription: 'Ankle sprain treatment in Burlington. Expert physiotherapy for acute sprains and chronic instability using balance training and manual therapy.',
  },
  {
    id: 'plantar-fasciitis',
    slug: 'plantar-fasciitis',
    name: 'Plantar Fasciitis & Heel Spurs',
    category: 'foot-ankle',
    description: 'Heel pain and heel spurs',
    featured: true,
    priority: 5,
    metaDescription: 'Effective plantar fasciitis treatment in Burlington. Expert physiotherapy for heel pain using manual therapy, shockwave therapy, and customized exercise programs.',
  },
  {
    id: 'achilles-tendinopathy',
    slug: 'achilles-tendinopathy',
    name: 'Achilles Tendinopathy / Tendinitis',
    category: 'foot-ankle',
    description: 'Achilles tendon pain, both insertional and mid-portion',
    featured: true,
    priority: 15,
    metaDescription: 'Achilles tendinopathy treatment in Burlington. Specialized physiotherapy for Achilles pain using eccentric loading and progressive rehabilitation.',
  },
  {
    id: 'shin-splints',
    slug: 'shin-splints',
    name: 'Shin Splints',
    category: 'foot-ankle',
    description: 'Medial Tibial Stress Syndrome',
    featured: true,
    priority: 16,
    metaDescription: 'Shin splints treatment in Burlington. Expert physiotherapy for runners with tibial pain using gait analysis and progressive loading.',
  },
  {
    id: 'peroneal-tendinopathy',
    slug: 'peroneal-tendinopathy',
    name: 'Peroneal Tendinopathy',
    category: 'foot-ankle',
    description: 'Lateral ankle tendon issues',
    metaDescription: 'Peroneal tendinopathy treatment in Burlington. Specialized care for lateral ankle pain with targeted strengthening and balance training.',
  },
  {
    id: 'posterior-tibial-tendon-dysfunction',
    slug: 'posterior-tibial-tendon-dysfunction',
    name: 'Posterior Tibial Tendon Dysfunction',
    category: 'foot-ankle',
    description: 'Adult-acquired flatfoot, progressive foot deformity',
    metaDescription: 'PTTD treatment in Burlington. Expert physiotherapy for adult-acquired flatfoot using orthotics, strengthening exercises, and activity modification.',
    featured: true,
    priority: 32,
  },
  {
    id: 'mortons-neuroma',
    slug: 'mortons-neuroma',
    name: "Morton's Neuroma",
    category: 'foot-ankle',
    description: 'Forefoot nerve compression causing numbness and burning pain',
    featured: true,
    priority: 33,
    metaDescription: "Morton's neuroma treatment in Burlington. Conservative physiotherapy for forefoot pain using activity modification and footwear advice.",
  },
  {
    id: 'metatarsalgia',
    slug: 'metatarsalgia',
    name: 'Metatarsalgia',
    category: 'foot-ankle',
    description: 'Ball of foot pain, forefoot overload syndrome',
    metaDescription: 'Metatarsalgia treatment in Burlington. Expert care for ball of foot pain using load redistribution and strengthening exercises.',
  },
  {
    id: 'hallux-valgus',
    slug: 'hallux-valgus',
    name: 'Hallux Valgus (Bunions)',
    category: 'foot-ankle',
    description: 'Big toe joint deformity, bunion pain and stiffness',
    featured: true,
    priority: 34,
    metaDescription: 'Bunion treatment in Burlington. Conservative physiotherapy for hallux valgus using exercises, taping, and footwear modification.',
  },
  {
    id: 'hallux-rigidus',
    slug: 'hallux-rigidus',
    name: 'Hallux Rigidus',
    category: 'foot-ankle',
    description: 'Big toe arthritis, stiff great toe joint',
    metaDescription: 'Hallux rigidus treatment in Burlington. Physiotherapy for big toe arthritis using mobility exercises and activity modification.',
  },
  {
    id: 'turf-toe',
    slug: 'turf-toe',
    name: 'Turf Toe',
    category: 'foot-ankle',
    description: 'Great toe joint sprain, first MTP joint injury',
    metaDescription: 'Turf toe treatment in Burlington. Sports physiotherapy for great toe sprains using progressive loading and return-to-sport protocols.',
  },
  {
    id: 'severs-disease',
    slug: 'severs-disease',
    name: "Sever's Disease",
    category: 'foot-ankle',
    description: 'Calcaneal apophysitis, pediatric heel pain in growing athletes',
    metaDescription: "Sever's disease treatment in Burlington. Expert pediatric physiotherapy for heel pain in young athletes using activity modification and stretching.",
    featured: true,
    priority: 35,
    metaDescription: "Sever's disease treatment in Burlington. Pediatric physiotherapy for growing heel pain using activity modification and strengthening.",
  },
  {
    id: 'tarsal-tunnel-syndrome',
    slug: 'tarsal-tunnel-syndrome',
    name: 'Tarsal Tunnel Syndrome',
    category: 'foot-ankle',
    description: 'Posterior tibial nerve compression, medial ankle numbness',
    metaDescription: 'Tarsal tunnel syndrome treatment in Burlington. Physiotherapy for nerve compression using neural mobilization and activity modification.',
  },
];

export const conditionCategories: ConditionCategory[] = [
  {
    title: "Neck & Back",
    slug: "spinal-health",
    subtitle: "Neck, Mid-Back & Low Back",
    accent: "#B08D57",
    gradient: "from-[#B08D57]/20 via-[#D4AF37]/10 to-transparent",
    textGradient: "bg-gradient-to-r from-[#B08D57] to-[#D4AF37] bg-clip-text text-transparent",
    conditions: spinalConditions,
  },
  {
    title: "Shoulder Conditions",
    slug: "shoulder",
    subtitle: "Complete shoulder care",
    accent: "#A17D47",
    gradient: "from-[#A17D47]/20 via-[#B08D57]/10 to-transparent",
    textGradient: "bg-gradient-to-r from-[#A17D47] to-[#B08D57] bg-clip-text text-transparent",
    conditions: shoulderConditions,
  },
  {
    title: "Elbow, Wrist & Hand",
    slug: "elbow-wrist-hand",
    subtitle: "Upper extremity focus",
    accent: "#D4AF37",
    gradient: "from-[#D4AF37]/20 via-[#B08D57]/10 to-transparent",
    textGradient: "bg-gradient-to-r from-[#D4AF37] to-[#B08D57] bg-clip-text text-transparent",
    conditions: elbowWristConditions,
  },
  {
    title: "Hip & Pelvis",
    slug: "hip-pelvis",
    subtitle: "Core stability and mobility",
    accent: "#B08D57",
    gradient: "from-[#B08D57]/20 via-[#A17D47]/10 to-transparent",
    textGradient: "bg-gradient-to-r from-[#B08D57] to-[#A17D47] bg-clip-text text-transparent",
    conditions: hipPelvisConditions,
  },
  {
    title: "Knee Conditions",
    slug: "knee",
    subtitle: "Comprehensive knee care",
    accent: "#A17D47",
    gradient: "from-[#A17D47]/20 via-[#D4AF37]/10 to-transparent",
    textGradient: "bg-gradient-to-r from-[#A17D47] to-[#D4AF37] bg-clip-text text-transparent",
    conditions: kneeConditions,
  },
  {
    title: "Foot & Ankle",
    slug: "foot-ankle",
    subtitle: "Foundation of movement",
    accent: "#D4AF37",
    gradient: "from-[#D4AF37]/20 via-[#A17D47]/10 to-transparent",
    textGradient: "bg-gradient-to-r from-[#D4AF37] to-[#A17D47] bg-clip-text text-transparent",
    conditions: footAnkleConditions,
  },
];

// Get all conditions as a flat array
export const getAllConditions = (): Condition[] => {
  return conditionCategories.flatMap(category => category.conditions);
};

// Get featured conditions (top 10)
export const getFeaturedConditions = (): Condition[] => {
  return getAllConditions()
    .filter(condition => condition.featured)
    .sort((a, b) => (a.priority || 999) - (b.priority || 999));
};

// Get condition by slug
export const getConditionBySlug = (slug: string): Condition | undefined => {
  return getAllConditions().find(condition => condition.slug === slug);
};

// Intelligent relationship mapping system
const intelligentRelationships: Record<string, Array<{
  slug: string;
  relationshipType: 'anatomical' | 'symptomatic' | 'causal' | 'biomechanical' | 'treatment';
  explanation: string;
  relevanceScore: number;
}>> = {
  'low-back-pain': [
    { slug: 'sciatica', relationshipType: 'anatomical', explanation: 'Both involve the lumbar spine; disc dysfunction can progress to nerve root compression', relevanceScore: 9 },
    { slug: 'disc-herniation', relationshipType: 'causal', explanation: 'Disc problems often underlying cause of mechanical low back pain', relevanceScore: 8 },
    { slug: 'si-joint-dysfunction', relationshipType: 'biomechanical', explanation: 'SI joint dysfunction commonly coexists with lumbar spine issues due to shared load transfer', relevanceScore: 7 },
    { slug: 'facet-joint-syndrome', relationshipType: 'anatomical', explanation: 'Both affect spinal segments; facet joints can become overloaded when discs degenerate', relevanceScore: 7 },
    { slug: 'hip-osteoarthritis', relationshipType: 'biomechanical', explanation: 'Hip stiffness alters lumbar mechanics and can contribute to back pain', relevanceScore: 6 }
  ],
  'neck-pain': [
    { slug: 'whiplash', relationshipType: 'causal', explanation: 'Whiplash is a common cause of chronic neck pain and dysfunction', relevanceScore: 8 },
    { slug: 'thoracic-outlet-syndrome', relationshipType: 'anatomical', explanation: 'Both involve cervical spine region; neck posture affects thoracic outlet space', relevanceScore: 7 },
    { slug: 'shoulder-impingement', relationshipType: 'biomechanical', explanation: 'Forward head posture and neck pain often coexist with shoulder impingement', relevanceScore: 6 },
    { slug: 'postural-dysfunction', relationshipType: 'causal', explanation: 'Poor posture is a primary contributing factor to chronic neck pain', relevanceScore: 7 }
  ],
  'sciatica': [
    { slug: 'low-back-pain', relationshipType: 'anatomical', explanation: 'Sciatica often originates from lumbar spine pathology causing back pain', relevanceScore: 9 },
    { slug: 'disc-herniation', relationshipType: 'causal', explanation: 'Disc herniation is the most common cause of sciatica symptoms', relevanceScore: 9 },
    { slug: 'piriformis-syndrome', relationshipType: 'symptomatic', explanation: 'Both cause sciatic-type pain; piriformis syndrome can mimic lumbar radiculopathy', relevanceScore: 7 },
    { slug: 'spinal-stenosis', relationshipType: 'causal', explanation: 'Spinal stenosis can cause nerve root compression leading to sciatica', relevanceScore: 8 },
    { slug: 'deep-gluteal-syndrome', relationshipType: 'symptomatic', explanation: 'Both cause posterior leg pain; deep gluteal syndrome involves sciatic nerve entrapment', relevanceScore: 6 }
  ],
  'rotator-cuff-injuries': [
    { slug: 'shoulder-impingement', relationshipType: 'causal', explanation: 'Shoulder impingement often leads to rotator cuff damage over time', relevanceScore: 9 },
    { slug: 'frozen-shoulder', relationshipType: 'symptomatic', explanation: 'Both cause shoulder pain and stiffness; can develop sequentially', relevanceScore: 7 },
    { slug: 'biceps-tendinopathy', relationshipType: 'anatomical', explanation: 'Biceps tendon closely related to rotator cuff; injuries often coexist', relevanceScore: 7 },
    { slug: 'ac-joint-injuries', relationshipType: 'biomechanical', explanation: 'AC joint dysfunction can alter shoulder mechanics and stress rotator cuff', relevanceScore: 6 },
    { slug: 'neck-pain', relationshipType: 'biomechanical', explanation: 'Neck posture affects shoulder blade position and rotator cuff function', relevanceScore: 5 }
  ],
  'shoulder-impingement': [
    { slug: 'rotator-cuff-injuries', relationshipType: 'causal', explanation: 'Chronic impingement leads to rotator cuff tendon damage and tears', relevanceScore: 9 },
    { slug: 'frozen-shoulder', relationshipType: 'symptomatic', explanation: 'Both cause overhead movement restriction; impingement can progress to adhesive capsulitis', relevanceScore: 7 },
    { slug: 'thoracic-outlet-syndrome', relationshipType: 'biomechanical', explanation: 'Both involve poor shoulder blade mechanics and postural dysfunction', relevanceScore: 6 },
    { slug: 'neck-pain', relationshipType: 'biomechanical', explanation: 'Forward head posture contributes to scapular dysfunction and impingement', relevanceScore: 6 },
    { slug: 'biceps-tendinopathy', relationshipType: 'anatomical', explanation: 'Biceps tendon can be affected by subacromial impingement process', relevanceScore: 6 }
  ],
  'frozen-shoulder': [
    { slug: 'rotator-cuff-injuries', relationshipType: 'symptomatic', explanation: 'Both cause shoulder pain and movement restriction; can coexist or develop sequentially', relevanceScore: 7 },
    { slug: 'shoulder-impingement', relationshipType: 'causal', explanation: 'Impingement can progress to capsular inflammation and adhesive capsulitis', relevanceScore: 7 },
    { slug: 'diabetes-related-conditions', relationshipType: 'causal', explanation: 'Diabetes significantly increases risk of developing adhesive capsulitis', relevanceScore: 8 },
    { slug: 'shoulder-bursitis', relationshipType: 'symptomatic', explanation: 'Both cause shoulder pain and stiffness with inflammatory components', relevanceScore: 6 },
    { slug: 'ac-joint-injuries', relationshipType: 'biomechanical', explanation: 'Compensatory movements from frozen shoulder can stress AC joint', relevanceScore: 5 }
  ],
  'tennis-elbow': [
    { slug: 'golfers-elbow', relationshipType: 'anatomical', explanation: 'Both are elbow tendinopathies affecting opposite sides of the joint', relevanceScore: 8 },
    { slug: 'repetitive-strain-injuries', relationshipType: 'causal', explanation: 'Tennis elbow is a type of repetitive strain injury from overuse', relevanceScore: 8 },
    { slug: 'carpal-tunnel-syndrome', relationshipType: 'biomechanical', explanation: 'Both can result from poor wrist/forearm ergonomics and repetitive motions', relevanceScore: 6 },
    { slug: 'neck-pain', relationshipType: 'biomechanical', explanation: 'Cervical radiculopathy can mimic lateral elbow pain symptoms', relevanceScore: 5 },
    { slug: 'shoulder-impingement', relationshipType: 'biomechanical', explanation: 'Shoulder dysfunction can alter elbow mechanics and contribute to lateral epicondylitis', relevanceScore: 5 }
  ],
  'golfers-elbow': [
    { slug: 'tennis-elbow', relationshipType: 'anatomical', explanation: 'Both are elbow tendinopathies affecting opposite epicondyles', relevanceScore: 8 },
    { slug: 'repetitive-strain-injuries', relationshipType: 'causal', explanation: 'Medial epicondylitis is a repetitive strain injury from overuse', relevanceScore: 8 },
    { slug: 'carpal-tunnel-syndrome', relationshipType: 'biomechanical', explanation: 'Both involve median nerve pathway; wrist flexor tension can contribute to carpal tunnel', relevanceScore: 6 },
    { slug: 'thoracic-outlet-syndrome', relationshipType: 'symptomatic', explanation: 'Both can cause medial arm/forearm symptoms and nerve-related pain', relevanceScore: 5 },
    { slug: 'de-quervains-tenosynovitis', relationshipType: 'causal', explanation: 'Both involve overuse of wrist and forearm muscles from similar activities', relevanceScore: 5 }
  ],
  'carpal-tunnel-syndrome': [
    { slug: 'de-quervains-tenosynovitis', relationshipType: 'anatomical', explanation: 'Both affect the wrist; can coexist due to similar risk factors', relevanceScore: 7 },
    { slug: 'repetitive-strain-injuries', relationshipType: 'causal', explanation: 'Carpal tunnel syndrome is a type of repetitive strain injury', relevanceScore: 8 },
    { slug: 'tennis-elbow', relationshipType: 'biomechanical', explanation: 'Both can result from poor ergonomics and repetitive wrist/forearm motions', relevanceScore: 6 },
    { slug: 'thoracic-outlet-syndrome', relationshipType: 'symptomatic', explanation: 'Both cause hand/arm numbness and tingling; TOS affects more proximal nerve compression', relevanceScore: 6 },
    { slug: 'neck-pain', relationshipType: 'symptomatic', explanation: 'Cervical radiculopathy can mimic carpal tunnel symptoms', relevanceScore: 5 }
  ],
  'de-quervains-tenosynovitis': [
    { slug: 'carpal-tunnel-syndrome', relationshipType: 'anatomical', explanation: 'Both affect wrist structures; similar risk factors and can coexist', relevanceScore: 7 },
    { slug: 'repetitive-strain-injuries', relationshipType: 'causal', explanation: 'De Quervains is a repetitive strain injury affecting thumb tendons', relevanceScore: 8 },
    { slug: 'golfers-elbow', relationshipType: 'biomechanical', explanation: 'Both involve overuse of wrist/forearm muscles from gripping activities', relevanceScore: 5 },
    { slug: 'tennis-elbow', relationshipType: 'biomechanical', explanation: 'Wrist extension activities can stress both lateral elbow and thumb tendons', relevanceScore: 5 },
    { slug: 'wrist-sprains', relationshipType: 'anatomical', explanation: 'Both affect wrist region; acute injuries can predispose to De Quervains', relevanceScore: 6 }
  ],
  'hip-osteoarthritis': [
    { slug: 'knee-osteoarthritis', relationshipType: 'biomechanical', explanation: 'Hip stiffness alters gait and can increase knee joint stress leading to arthritis', relevanceScore: 8 },
    { slug: 'low-back-pain', relationshipType: 'biomechanical', explanation: 'Hip stiffness from arthritis alters lumbar spine mechanics', relevanceScore: 6 },
    { slug: 'greater-trochanteric-pain-syndrome', relationshipType: 'anatomical', explanation: 'Both affect hip region; GTPS often coexists with hip OA', relevanceScore: 7 },
    { slug: 'femoroacetabular-impingement', relationshipType: 'causal', explanation: 'FAI can lead to cartilage damage and secondary osteoarthritis', relevanceScore: 8 },
    { slug: 'hip-bursitis', relationshipType: 'symptomatic', explanation: 'Both cause hip pain; bursitis often secondary to altered mechanics from OA', relevanceScore: 6 }
  ],
  'femoroacetabular-impingement': [
    { slug: 'hip-osteoarthritis', relationshipType: 'causal', explanation: 'FAI causes cartilage damage and predisposes to early hip arthritis', relevanceScore: 8 },
    { slug: 'hip-labral-tears', relationshipType: 'causal', explanation: 'FAI is the primary cause of hip labral tears in young adults', relevanceScore: 9 },
    { slug: 'greater-trochanteric-pain-syndrome', relationshipType: 'biomechanical', explanation: 'Hip impingement alters mechanics and can stress gluteal tendons', relevanceScore: 6 },
    { slug: 'groin-strains', relationshipType: 'symptomatic', explanation: 'Both cause groin/hip flexor pain; FAI can predispose to muscle strains', relevanceScore: 7 },
    { slug: 'low-back-pain', relationshipType: 'biomechanical', explanation: 'Hip impingement limits hip mobility affecting lumbar spine mechanics', relevanceScore: 5 }
  ],
  'greater-trochanteric-pain-syndrome': [
    { slug: 'hip-osteoarthritis', relationshipType: 'anatomical', explanation: 'Both affect hip region; GTPS often develops secondary to hip OA', relevanceScore: 7 },
    { slug: 'hip-bursitis', relationshipType: 'symptomatic', explanation: 'GTPS was formerly called trochanteric bursitis; both cause lateral hip pain', relevanceScore: 8 },
    { slug: 'it-band-syndrome', relationshipType: 'anatomical', explanation: 'Both involve lateral hip/thigh structures; IT band tightness can contribute to GTPS', relevanceScore: 7 },
    { slug: 'low-back-pain', relationshipType: 'biomechanical', explanation: 'Gluteal weakness from GTPS can contribute to back pain and instability', relevanceScore: 6 },
    { slug: 'knee-pain-patellofemoral', relationshipType: 'biomechanical', explanation: 'Gluteal weakness affects knee mechanics and patellofemoral tracking', relevanceScore: 6 }
  ],
  'hip-labral-tears': [
    { slug: 'femoroacetabular-impingement', relationshipType: 'causal', explanation: 'FAI is the primary mechanism causing hip labral tears', relevanceScore: 9 },
    { slug: 'hip-osteoarthritis', relationshipType: 'causal', explanation: 'Labral tears can lead to joint instability and secondary arthritis', relevanceScore: 7 },
    { slug: 'groin-strains', relationshipType: 'symptomatic', explanation: 'Both cause groin pain; labral tears can be mistaken for muscle strains', relevanceScore: 7 },
    { slug: 'greater-trochanteric-pain-syndrome', relationshipType: 'biomechanical', explanation: 'Hip instability from labral tears can stress gluteal tendons', relevanceScore: 5 },
    { slug: 'si-joint-dysfunction', relationshipType: 'biomechanical', explanation: 'Hip instability affects pelvic mechanics and SI joint function', relevanceScore: 5 }
  ],
  'piriformis-syndrome': [
    { slug: 'sciatica', relationshipType: 'symptomatic', explanation: 'Both cause sciatic-type pain; piriformis syndrome can mimic lumbar radiculopathy', relevanceScore: 7 },
    { slug: 'deep-gluteal-syndrome', relationshipType: 'anatomical', explanation: 'Piriformis syndrome is part of the broader deep gluteal syndrome spectrum', relevanceScore: 8 },
    { slug: 'si-joint-dysfunction', relationshipType: 'anatomical', explanation: 'Both affect sacral/pelvic region; piriformis dysfunction can affect SI joint mechanics', relevanceScore: 6 },
    { slug: 'greater-trochanteric-pain-syndrome', relationshipType: 'anatomical', explanation: 'Both involve deep hip/gluteal muscles and can cause overlapping symptoms', relevanceScore: 6 },
    { slug: 'hamstring-strains', relationshipType: 'biomechanical', explanation: 'Piriformis tightness can affect hamstring mechanics and predispose to strains', relevanceScore: 5 }
  ],
  'groin-strains': [
    { slug: 'hip-labral-tears', relationshipType: 'symptomatic', explanation: 'Both cause groin pain; important to differentiate muscle strain from labral pathology', relevanceScore: 7 },
    { slug: 'femoroacetabular-impingement', relationshipType: 'symptomatic', explanation: 'Both cause groin/hip flexor pain; FAI can predispose to muscle strains', relevanceScore: 7 },
    { slug: 'hamstring-strains', relationshipType: 'biomechanical', explanation: 'Both are common sports injuries affecting hip/thigh muscles with similar mechanisms', relevanceScore: 7 },
    { slug: 'proximal-hamstring-tendinopathy', relationshipType: 'anatomical', explanation: 'Both affect proximal thigh muscles; can have overlapping symptoms in posterior hip', relevanceScore: 6 },
    { slug: 'si-joint-dysfunction', relationshipType: 'biomechanical', explanation: 'Adductor muscle imbalances can affect pelvic stability and SI joint function', relevanceScore: 5 }
  ],
  'hamstring-strains': [
    { slug: 'groin-strains', relationshipType: 'biomechanical', explanation: 'Both are common sports injuries with similar mechanisms and recovery approaches', relevanceScore: 7 },
    { slug: 'proximal-hamstring-tendinopathy', relationshipType: 'anatomical', explanation: 'Both affect hamstring muscles; acute strains can lead to chronic tendinopathy', relevanceScore: 8 },
    { slug: 'low-back-pain', relationshipType: 'biomechanical', explanation: 'Hamstring tightness can contribute to lumbar spine stress and back pain', relevanceScore: 6 },
    { slug: 'knee-pain-patellofemoral', relationshipType: 'biomechanical', explanation: 'Hamstring dysfunction affects knee mechanics and patellofemoral joint stress', relevanceScore: 5 },
    { slug: 'piriformis-syndrome', relationshipType: 'biomechanical', explanation: 'Both affect posterior hip/thigh; muscle imbalances can be interconnected', relevanceScore: 5 }
  ],
  'knee-pain-patellofemoral': [
    { slug: 'patellar-tendinopathy', relationshipType: 'anatomical', explanation: 'Both affect the patellofemoral region; biomechanical factors often overlap', relevanceScore: 8 },
    { slug: 'it-band-syndrome', relationshipType: 'biomechanical', explanation: 'Both common in runners; IT band tightness can affect patellofemoral tracking', relevanceScore: 7 },
    { slug: 'greater-trochanteric-pain-syndrome', relationshipType: 'biomechanical', explanation: 'Gluteal weakness contributes to both lateral hip pain and poor knee tracking', relevanceScore: 6 },
    { slug: 'knee-osteoarthritis', relationshipType: 'causal', explanation: 'Chronic patellofemoral dysfunction can lead to cartilage wear and arthritis', relevanceScore: 6 },
    { slug: 'hip-osteoarthritis', relationshipType: 'biomechanical', explanation: 'Hip stiffness alters knee mechanics and patellofemoral joint stress', relevanceScore: 5 }
  ],
  'acl-injuries': [
    { slug: 'meniscus-tears', relationshipType: 'anatomical', explanation: 'ACL and meniscus injuries often occur together; shared injury mechanisms', relevanceScore: 8 },
    { slug: 'mcl-lcl-sprains', relationshipType: 'anatomical', explanation: 'Multi-ligament knee injuries common; ACL tears often involve collateral ligaments', relevanceScore: 7 },
    { slug: 'knee-osteoarthritis', relationshipType: 'causal', explanation: 'ACL injuries increase risk of early knee arthritis due to altered mechanics', relevanceScore: 7 },
    { slug: 'patellar-tendinopathy', relationshipType: 'biomechanical', explanation: 'Both common in jumping sports; altered knee mechanics can affect patellar tendon', relevanceScore: 6 },
    { slug: 'ankle-sprains', relationshipType: 'biomechanical', explanation: 'Both involve knee/ankle stability; ankle instability can predispose to ACL injury', relevanceScore: 5 }
  ],
  'meniscus-tears': [
    { slug: 'acl-injuries', relationshipType: 'anatomical', explanation: 'Often occur together; both involve knee stability and similar injury mechanisms', relevanceScore: 8 },
    { slug: 'knee-osteoarthritis', relationshipType: 'causal', explanation: 'Meniscus tears can lead to joint degeneration and arthritis', relevanceScore: 8 },
    { slug: 'mcl-lcl-sprains', relationshipType: 'anatomical', explanation: 'Meniscus tears can occur with ligament injuries in complex knee trauma', relevanceScore: 6 },
    { slug: 'it-band-syndrome', relationshipType: 'symptomatic', explanation: 'Both can cause lateral knee pain and may be confused diagnostically', relevanceScore: 5 },
    { slug: 'patellar-tendinopathy', relationshipType: 'biomechanical', explanation: 'Altered knee mechanics from meniscus injury can stress patellar tendon', relevanceScore: 5 }
  ],
  'it-band-syndrome': [
    { slug: 'knee-pain-patellofemoral', relationshipType: 'biomechanical', explanation: 'Both common in runners; IT band tightness affects patellofemoral mechanics', relevanceScore: 7 },
    { slug: 'greater-trochanteric-pain-syndrome', relationshipType: 'anatomical', explanation: 'Both involve lateral hip/thigh structures; IT band connects to trochanteric region', relevanceScore: 7 },
    { slug: 'shin-splints', relationshipType: 'causal', explanation: 'Both are common running injuries with overlapping biomechanical causes', relevanceScore: 6 },
    { slug: 'ankle-sprains', relationshipType: 'biomechanical', explanation: 'Ankle instability can alter lower limb mechanics contributing to IT band stress', relevanceScore: 5 },
    { slug: 'plantar-fasciitis', relationshipType: 'biomechanical', explanation: 'Both involve lower limb overuse; foot dysfunction can affect IT band mechanics', relevanceScore: 5 }
  ],
  'patellar-tendinopathy': [
    { slug: 'knee-pain-patellofemoral', relationshipType: 'anatomical', explanation: 'Both affect patellofemoral region; share many biomechanical risk factors', relevanceScore: 8 },
    { slug: 'achilles-tendinopathy', relationshipType: 'treatment', explanation: 'Both are tendinopathies with similar pathophysiology and treatment approaches', relevanceScore: 7 },
    { slug: 'tennis-elbow', relationshipType: 'treatment', explanation: 'Both are tendinopathies responding to similar loading protocols and treatment', relevanceScore: 6 },
    { slug: 'acl-injuries', relationshipType: 'biomechanical', explanation: 'Both common in jumping sports; altered landing mechanics affect both structures', relevanceScore: 6 },
    { slug: 'hip-osteoarthritis', relationshipType: 'biomechanical', explanation: 'Hip stiffness can alter knee mechanics and increase patellar tendon stress', relevanceScore: 5 }
  ],
  'knee-osteoarthritis': [
    { slug: 'hip-osteoarthritis', relationshipType: 'biomechanical', explanation: 'Hip stiffness alters gait and can accelerate knee joint degeneration', relevanceScore: 8 },
    { slug: 'meniscus-tears', relationshipType: 'causal', explanation: 'Meniscus damage can lead to accelerated cartilage loss and arthritis', relevanceScore: 8 },
    { slug: 'acl-injuries', relationshipType: 'causal', explanation: 'ACL injuries significantly increase risk of early knee osteoarthritis', relevanceScore: 7 },
    { slug: 'ankle-sprains', relationshipType: 'biomechanical', explanation: 'Chronic ankle instability alters knee mechanics and can contribute to OA', relevanceScore: 5 },
    { slug: 'plantar-fasciitis', relationshipType: 'biomechanical', explanation: 'Foot/ankle dysfunction affects knee loading patterns', relevanceScore: 5 }
  ],
  'ankle-sprains': [
    { slug: 'peroneal-tendinopathy', relationshipType: 'causal', explanation: 'Chronic ankle instability from sprains can lead to peroneal tendon overuse', relevanceScore: 8 },
    { slug: 'achilles-tendinopathy', relationshipType: 'biomechanical', explanation: 'Ankle instability affects Achilles tendon mechanics and loading patterns', relevanceScore: 6 },
    { slug: 'shin-splints', relationshipType: 'biomechanical', explanation: 'Ankle instability can alter lower leg mechanics contributing to shin splints', relevanceScore: 6 },
    { slug: 'it-band-syndrome', relationshipType: 'biomechanical', explanation: 'Ankle dysfunction affects entire lower limb chain including IT band stress', relevanceScore: 5 },
    { slug: 'knee-osteoarthritis', relationshipType: 'biomechanical', explanation: 'Chronic ankle instability alters knee loading patterns over time', relevanceScore: 5 }
  ],
  'plantar-fasciitis': [
    { slug: 'achilles-tendinopathy', relationshipType: 'biomechanical', explanation: 'Both involve posterior chain tightness; Achilles stiffness contributes to plantar fasciitis', relevanceScore: 8 },
    { slug: 'shin-splints', relationshipType: 'biomechanical', explanation: 'Both are overuse injuries with shared biomechanical factors in runners', relevanceScore: 6 },
    { slug: 'ankle-sprains', relationshipType: 'biomechanical', explanation: 'Ankle dysfunction can alter foot mechanics and contribute to plantar fasciitis', relevanceScore: 5 },
    { slug: 'it-band-syndrome', relationshipType: 'biomechanical', explanation: 'Both are running-related overuse injuries with interconnected lower limb mechanics', relevanceScore: 5 },
    { slug: 'knee-pain-patellofemoral', relationshipType: 'biomechanical', explanation: 'Foot dysfunction affects entire lower limb kinetic chain including knee mechanics', relevanceScore: 5 },
    { slug: 'posterior-tibial-tendon-dysfunction', relationshipType: 'biomechanical', explanation: 'Both involve medial arch support; PTTD can lead to plantar fascia overload', relevanceScore: 8 },
    { slug: 'severs-disease', relationshipType: 'anatomical', explanation: 'Both involve heel pain; plantar fascia attaches near calcaneal apophysis', relevanceScore: 7 }
  ],
  'achilles-tendinopathy': [
    { slug: 'plantar-fasciitis', relationshipType: 'biomechanical', explanation: 'Both involve posterior chain; Achilles stiffness is major risk factor for plantar fasciitis', relevanceScore: 8 },
    { slug: 'patellar-tendinopathy', relationshipType: 'treatment', explanation: 'Both are tendinopathies with similar pathophysiology and evidence-based treatments', relevanceScore: 7 },
    { slug: 'shin-splints', relationshipType: 'causal', explanation: 'Both are common running injuries; Achilles dysfunction can contribute to shin splints', relevanceScore: 6 },
    { slug: 'tennis-elbow', relationshipType: 'treatment', explanation: 'Both are tendinopathies responding to similar loading and exercise protocols', relevanceScore: 6 },
    { slug: 'ankle-sprains', relationshipType: 'biomechanical', explanation: 'Ankle instability affects Achilles tendon loading and mechanics', relevanceScore: 6 },
    { slug: 'severs-disease', relationshipType: 'anatomical', explanation: 'Both involve Achilles tendon attachment issues, though in different age groups', relevanceScore: 8 },
    { slug: 'posterior-tibial-tendon-dysfunction', relationshipType: 'biomechanical', explanation: 'Achilles tightness can increase stress on posterior tibial tendon', relevanceScore: 6 }
  ],
  'shin-splints': [
    { slug: 'plantar-fasciitis', relationshipType: 'biomechanical', explanation: 'Both are overuse injuries in runners with shared biomechanical risk factors', relevanceScore: 6 },
    { slug: 'achilles-tendinopathy', relationshipType: 'causal', explanation: 'Both common running injuries; Achilles dysfunction can contribute to shin splints', relevanceScore: 6 },
    { slug: 'it-band-syndrome', relationshipType: 'causal', explanation: 'Both are running-related overuse injuries with similar training error causes', relevanceScore: 6 },
    { slug: 'ankle-sprains', relationshipType: 'biomechanical', explanation: 'Ankle instability can alter lower leg mechanics contributing to shin splints', relevanceScore: 6 },
    { slug: 'stress-fractures', relationshipType: 'causal', explanation: 'Untreated shin splints can progress to tibial stress fractures', relevanceScore: 7 },
    { slug: 'severs-disease', relationshipType: 'causal', explanation: 'Both are common overuse injuries in young athletes with similar causes', relevanceScore: 6 }
  ],
  'peroneal-tendinopathy': [
    { slug: 'ankle-sprains', relationshipType: 'causal', explanation: 'Chronic ankle instability leads to peroneal tendon overuse and tendinopathy', relevanceScore: 8 },
    { slug: 'achilles-tendinopathy', relationshipType: 'treatment', explanation: 'Both are tendinopathies with similar pathophysiology and treatment approaches', relevanceScore: 6 },
    { slug: 'it-band-syndrome', relationshipType: 'biomechanical', explanation: 'Both involve lateral structures; ankle dysfunction can affect entire lateral chain', relevanceScore: 5 },
    { slug: 'shin-splints', relationshipType: 'biomechanical', explanation: 'Both involve lower leg overuse; shared biomechanical factors in athletes', relevanceScore: 5 },
    { slug: 'plantar-fasciitis', relationshipType: 'biomechanical', explanation: 'Peroneal dysfunction affects foot mechanics and can contribute to plantar fasciitis', relevanceScore: 5 }
  ],
  'whiplash': [
    { slug: 'neck-pain', relationshipType: 'causal', explanation: 'Whiplash is a common cause of chronic neck pain and cervical dysfunction', relevanceScore: 8 },
    { slug: 'thoracic-outlet-syndrome', relationshipType: 'anatomical', explanation: 'Whiplash can affect cervical spine positioning contributing to thoracic outlet symptoms', relevanceScore: 6 },
    { slug: 'shoulder-impingement', relationshipType: 'biomechanical', explanation: 'Post-whiplash neck stiffness can alter shoulder blade mechanics', relevanceScore: 5 },
    { slug: 'postural-dysfunction', relationshipType: 'causal', explanation: 'Whiplash often leads to protective posturing and chronic postural problems', relevanceScore: 6 }
  ],
  'disc-herniation': [
    { slug: 'sciatica', relationshipType: 'causal', explanation: 'Disc herniation is the most common cause of sciatica and nerve root compression', relevanceScore: 9 },
    { slug: 'low-back-pain', relationshipType: 'causal', explanation: 'Disc herniation is often the underlying pathology in mechanical low back pain', relevanceScore: 8 },
    { slug: 'spinal-stenosis', relationshipType: 'causal', explanation: 'Large disc herniations can contribute to spinal canal narrowing', relevanceScore: 7 },
    { slug: 'degenerative-disc-disease', relationshipType: 'causal', explanation: 'Disc degeneration often precedes and predisposes to herniation', relevanceScore: 8 },
    { slug: 'facet-joint-syndrome', relationshipType: 'biomechanical', explanation: 'Disc pathology alters spinal mechanics increasing facet joint stress', relevanceScore: 6 }
  ],
  'facet-joint-syndrome': [
    { slug: 'low-back-pain', relationshipType: 'anatomical', explanation: 'Facet joints are common source of mechanical low back pain', relevanceScore: 7 },
    { slug: 'degenerative-disc-disease', relationshipType: 'causal', explanation: 'Disc degeneration increases load on facet joints leading to arthritis', relevanceScore: 7 },
    { slug: 'spinal-stenosis', relationshipType: 'causal', explanation: 'Facet joint hypertrophy can contribute to spinal canal narrowing', relevanceScore: 6 },
    { slug: 'disc-herniation', relationshipType: 'biomechanical', explanation: 'Disc pathology alters spinal mechanics affecting facet joint loading', relevanceScore: 6 },
    { slug: 'si-joint-dysfunction', relationshipType: 'biomechanical', explanation: 'Both affect spinal movement patterns and can have overlapping symptoms', relevanceScore: 5 }
  ],
  'thoracic-outlet-syndrome': [
    { slug: 'neck-pain', relationshipType: 'anatomical', explanation: 'Both involve cervical spine region; neck posture affects thoracic outlet space', relevanceScore: 7 },
    { slug: 'carpal-tunnel-syndrome', relationshipType: 'symptomatic', explanation: 'Both cause arm numbness and tingling; TOS affects more proximal nerve compression', relevanceScore: 6 },
    { slug: 'shoulder-impingement', relationshipType: 'biomechanical', explanation: 'Both involve poor shoulder blade mechanics and postural dysfunction', relevanceScore: 6 },
    { slug: 'postural-dysfunction', relationshipType: 'causal', explanation: 'Forward head posture and rounded shoulders are primary causes of TOS', relevanceScore: 7 },
    { slug: 'whiplash', relationshipType: 'causal', explanation: 'Whiplash can alter cervical positioning contributing to thoracic outlet compression', relevanceScore: 6 }
  ],
  'ac-joint-injuries': [
    { slug: 'rotator-cuff-injuries', relationshipType: 'biomechanical', explanation: 'AC joint dysfunction alters shoulder mechanics and can stress rotator cuff', relevanceScore: 6 },
    { slug: 'shoulder-impingement', relationshipType: 'biomechanical', explanation: 'AC joint pathology can contribute to subacromial impingement', relevanceScore: 6 },
    { slug: 'frozen-shoulder', relationshipType: 'symptomatic', explanation: 'Both cause shoulder pain; AC joint injury can lead to protective stiffness', relevanceScore: 5 },
    { slug: 'biceps-tendinopathy', relationshipType: 'anatomical', explanation: 'AC joint inflammation can affect nearby biceps tendon', relevanceScore: 5 },
    { slug: 'neck-pain', relationshipType: 'biomechanical', explanation: 'Compensatory neck movements from shoulder pain can cause cervical dysfunction', relevanceScore: 4 }
  ],
  'biceps-tendinopathy': [
    { slug: 'rotator-cuff-injuries', relationshipType: 'anatomical', explanation: 'Biceps tendon closely related to rotator cuff; injuries often coexist', relevanceScore: 7 },
    { slug: 'shoulder-impingement', relationshipType: 'anatomical', explanation: 'Biceps tendon can be affected by subacromial impingement process', relevanceScore: 6 },
    { slug: 'frozen-shoulder', relationshipType: 'symptomatic', explanation: 'Both cause anterior shoulder pain and can develop sequentially', relevanceScore: 5 },
    { slug: 'ac-joint-injuries', relationshipType: 'anatomical', explanation: 'Biceps tendon proximity to AC joint can cause overlapping symptoms', relevanceScore: 5 },
    { slug: 'tennis-elbow', relationshipType: 'treatment', explanation: 'Both are tendinopathies with similar pathophysiology and loading protocols', relevanceScore: 5 }
  ],
  'mcl-lcl-sprains': [
    { slug: 'acl-injuries', relationshipType: 'anatomical', explanation: 'Multi-ligament knee injuries common; often occur together in trauma', relevanceScore: 7 },
    { slug: 'meniscus-tears', relationshipType: 'anatomical', explanation: 'Complex knee injuries often involve both ligaments and meniscus', relevanceScore: 6 },
    { slug: 'knee-osteoarthritis', relationshipType: 'causal', explanation: 'Ligament injuries can lead to joint instability and secondary arthritis', relevanceScore: 6 },
    { slug: 'pcl-injuries', relationshipType: 'anatomical', explanation: 'Part of knee ligament complex; can occur together in high-energy trauma', relevanceScore: 6 },
    { slug: 'ankle-sprains', relationshipType: 'biomechanical', explanation: 'Both are ligament injuries with similar healing phases and rehabilitation', relevanceScore: 5 }
  ],
  'pcl-injuries': [
    { slug: 'acl-injuries', relationshipType: 'anatomical', explanation: 'Both are cruciate ligaments; can occur together in high-energy knee trauma', relevanceScore: 7 },
    { slug: 'mcl-lcl-sprains', relationshipType: 'anatomical', explanation: 'Part of knee ligament complex; multi-ligament injuries common', relevanceScore: 6 },
    { slug: 'meniscus-tears', relationshipType: 'anatomical', explanation: 'Complex knee trauma often involves multiple structures', relevanceScore: 5 },
    { slug: 'knee-osteoarthritis', relationshipType: 'causal', explanation: 'PCL injuries can lead to altered knee mechanics and secondary arthritis', relevanceScore: 6 },
    { slug: 'patella-fractures', relationshipType: 'causal', explanation: 'Dashboard injuries can cause both PCL tears and patellar fractures', relevanceScore: 5 }
  ],
  'degenerative-disc-disease': [
    { slug: 'facet-joint-syndrome', relationshipType: 'causal', explanation: 'Disc degeneration increases load on facet joints leading to arthritis', relevanceScore: 7 },
    { slug: 'disc-herniation', relationshipType: 'causal', explanation: 'Disc degeneration predisposes to herniation and rupture', relevanceScore: 8 },
    { slug: 'spinal-stenosis', relationshipType: 'causal', explanation: 'Disc degeneration contributes to spinal canal narrowing', relevanceScore: 7 },
    { slug: 'low-back-pain', relationshipType: 'causal', explanation: 'Degenerative disc disease is a common cause of chronic back pain', relevanceScore: 7 },
    { slug: 'neck-pain', relationshipType: 'causal', explanation: 'Cervical disc degeneration commonly causes chronic neck pain', relevanceScore: 6 }
  ],
  'spinal-stenosis': [
    { slug: 'degenerative-disc-disease', relationshipType: 'causal', explanation: 'Disc degeneration contributes to canal narrowing and stenosis', relevanceScore: 7 },
    { slug: 'facet-joint-syndrome', relationshipType: 'causal', explanation: 'Facet joint hypertrophy from arthritis contributes to stenosis', relevanceScore: 6 },
    { slug: 'sciatica', relationshipType: 'causal', explanation: 'Spinal stenosis can cause nerve root compression and sciatica', relevanceScore: 8 },
    { slug: 'disc-herniation', relationshipType: 'causal', explanation: 'Large disc herniations can contribute to canal narrowing', relevanceScore: 7 },
    { slug: 'low-back-pain', relationshipType: 'symptomatic', explanation: 'Stenosis commonly presents with back pain and leg symptoms', relevanceScore: 6 }
  ],
  'postural-dysfunction': [
    { slug: 'neck-pain', relationshipType: 'causal', explanation: 'Poor posture is primary cause of chronic neck pain and cervical dysfunction', relevanceScore: 7 },
    { slug: 'thoracic-outlet-syndrome', relationshipType: 'causal', explanation: 'Forward head posture and rounded shoulders cause thoracic outlet compression', relevanceScore: 7 },
    { slug: 'shoulder-impingement', relationshipType: 'causal', explanation: 'Poor posture contributes to scapular dysfunction and shoulder impingement', relevanceScore: 6 },
    { slug: 'low-back-pain', relationshipType: 'causal', explanation: 'Prolonged poor posture contributes to lumbar spine dysfunction', relevanceScore: 6 }
  ],
  'shoulder-instability': [
    { slug: 'rotator-cuff-injuries', relationshipType: 'causal', explanation: 'Shoulder instability can lead to rotator cuff damage from repeated dislocations', relevanceScore: 7 },
    { slug: 'shoulder-impingement', relationshipType: 'biomechanical', explanation: 'Instability can cause secondary impingement from altered shoulder mechanics', relevanceScore: 6 },
    { slug: 'ac-joint-injuries', relationshipType: 'anatomical', explanation: 'Traumatic dislocations can involve both glenohumeral and AC joints', relevanceScore: 5 },
    { slug: 'biceps-tendinopathy', relationshipType: 'biomechanical', explanation: 'Shoulder instability can stress biceps tendon as secondary stabilizer', relevanceScore: 5 },
    { slug: 'frozen-shoulder', relationshipType: 'symptomatic', explanation: 'Post-dislocation stiffness can develop into adhesive capsulitis', relevanceScore: 5 }
  ],
  'shoulder-bursitis': [
    { slug: 'shoulder-impingement', relationshipType: 'causal', explanation: 'Subacromial impingement commonly causes secondary bursitis', relevanceScore: 8 },
    { slug: 'rotator-cuff-injuries', relationshipType: 'symptomatic', explanation: 'Both cause shoulder pain and can coexist with similar presentations', relevanceScore: 7 },
    { slug: 'frozen-shoulder', relationshipType: 'symptomatic', explanation: 'Both cause shoulder pain and stiffness with inflammatory components', relevanceScore: 6 },
    { slug: 'biceps-tendinopathy', relationshipType: 'anatomical', explanation: 'Subacromial bursitis can affect nearby biceps tendon', relevanceScore: 5 },
    { slug: 'ac-joint-injuries', relationshipType: 'symptomatic', explanation: 'Both cause shoulder pain and can be confused diagnostically', relevanceScore: 5 }
  ],
  'wrist-sprains': [
    { slug: 'carpal-tunnel-syndrome', relationshipType: 'causal', explanation: 'Wrist trauma can lead to swelling and median nerve compression', relevanceScore: 6 },
    { slug: 'de-quervains-tenosynovitis', relationshipType: 'causal', explanation: 'Wrist injuries can predispose to De Quervains tendinopathy', relevanceScore: 6 },
    { slug: 'repetitive-strain-injuries', relationshipType: 'causal', explanation: 'Acute wrist injury can lead to chronic overuse patterns', relevanceScore: 5 },
    { slug: 'scaphoid-fractures', relationshipType: 'anatomical', explanation: 'Wrist sprains and scaphoid fractures have similar mechanisms and presentations', relevanceScore: 7 },
    { slug: 'tennis-elbow', relationshipType: 'biomechanical', explanation: 'Wrist dysfunction can alter forearm mechanics contributing to elbow problems', relevanceScore: 4 }
  ],
  'repetitive-strain-injuries': [
    { slug: 'carpal-tunnel-syndrome', relationshipType: 'causal', explanation: 'CTS is a type of repetitive strain injury from overuse', relevanceScore: 8 },
    { slug: 'tennis-elbow', relationshipType: 'causal', explanation: 'Tennis elbow is a repetitive strain injury of the lateral elbow', relevanceScore: 8 },
    { slug: 'de-quervains-tenosynovitis', relationshipType: 'causal', explanation: 'De Quervains is a repetitive strain injury of thumb tendons', relevanceScore: 8 },
    { slug: 'golfers-elbow', relationshipType: 'causal', explanation: 'Golfers elbow is a repetitive strain injury of the medial elbow', relevanceScore: 8 },
    { slug: 'thoracic-outlet-syndrome', relationshipType: 'causal', explanation: 'Poor ergonomics contributing to RSI can also cause thoracic outlet syndrome', relevanceScore: 6 }
  ],
  'si-joint-dysfunction': [
    { slug: 'low-back-pain', relationshipType: 'biomechanical', explanation: 'SI joint dysfunction commonly coexists with lumbar spine issues', relevanceScore: 7 },
    { slug: 'hip-labral-tears', relationshipType: 'biomechanical', explanation: 'Hip instability affects pelvic mechanics and SI joint function', relevanceScore: 5 },
    { slug: 'piriformis-syndrome', relationshipType: 'anatomical', explanation: 'Both affect sacral/pelvic region with overlapping symptoms', relevanceScore: 6 },
    { slug: 'groin-strains', relationshipType: 'biomechanical', explanation: 'Muscle imbalances affecting SI joint can also predispose to groin strains', relevanceScore: 5 },
    { slug: 'facet-joint-syndrome', relationshipType: 'biomechanical', explanation: 'Both affect spinal movement patterns with potential symptom overlap', relevanceScore: 5 }
  ],
  'hip-bursitis': [
    { slug: 'greater-trochanteric-pain-syndrome', relationshipType: 'symptomatic', explanation: 'Hip bursitis often part of GTPS; both cause lateral hip pain', relevanceScore: 8 },
    { slug: 'hip-osteoarthritis', relationshipType: 'symptomatic', explanation: 'Bursitis often secondary to altered mechanics from hip OA', relevanceScore: 6 },
    { slug: 'it-band-syndrome', relationshipType: 'anatomical', explanation: 'IT band tightness can contribute to trochanteric bursitis', relevanceScore: 6 },
    { slug: 'femoroacetabular-impingement', relationshipType: 'biomechanical', explanation: 'Hip impingement can cause secondary bursitis from altered mechanics', relevanceScore: 5 },
    { slug: 'piriformis-syndrome', relationshipType: 'symptomatic', explanation: 'Both cause deep hip pain and can be confused diagnostically', relevanceScore: 5 }
  ],
  'deep-gluteal-syndrome': [
    { slug: 'piriformis-syndrome', relationshipType: 'anatomical', explanation: 'Piriformis syndrome is part of deep gluteal syndrome spectrum', relevanceScore: 8 },
    { slug: 'sciatica', relationshipType: 'symptomatic', explanation: 'Both cause sciatic-type pain; DGS involves peripheral nerve entrapment', relevanceScore: 6 },
    { slug: 'greater-trochanteric-pain-syndrome', relationshipType: 'anatomical', explanation: 'Both involve deep gluteal muscles and hip region', relevanceScore: 5 },
    { slug: 'hamstring-strains', relationshipType: 'biomechanical', explanation: 'Deep gluteal dysfunction can affect hamstring mechanics', relevanceScore: 5 },
    { slug: 'si-joint-dysfunction', relationshipType: 'anatomical', explanation: 'Both affect posterior pelvic region with potential symptom overlap', relevanceScore: 5 }
  ],
  'proximal-hamstring-tendinopathy': [
    { slug: 'hamstring-strains', relationshipType: 'anatomical', explanation: 'Both affect hamstring muscles; acute strains can lead to chronic tendinopathy', relevanceScore: 8 },
    { slug: 'groin-strains', relationshipType: 'anatomical', explanation: 'Both affect proximal thigh muscles with overlapping symptoms', relevanceScore: 6 },
    { slug: 'piriformis-syndrome', relationshipType: 'symptomatic', explanation: 'Both can cause posterior hip/buttock pain and sitting difficulties', relevanceScore: 6 },
    { slug: 'ischial-bursitis', relationshipType: 'anatomical', explanation: 'Both affect sitting bone region and can be confused diagnostically', relevanceScore: 7 },
    { slug: 'deep-gluteal-syndrome', relationshipType: 'anatomical', explanation: 'Both involve posterior hip structures with potential symptom overlap', relevanceScore: 5 }
  ],
  'posterior-tibial-tendon-dysfunction': [
    { slug: 'plantar-fasciitis', relationshipType: 'biomechanical', explanation: 'Both involve medial arch support; PTTD can lead to plantar fascia overload', relevanceScore: 8 },
    { slug: 'ankle-sprains', relationshipType: 'causal', explanation: 'Chronic ankle instability can contribute to posterior tibial tendon overuse', relevanceScore: 7 },
    { slug: 'achilles-tendinopathy', relationshipType: 'biomechanical', explanation: 'Achilles tightness can increase stress on posterior tibial tendon', relevanceScore: 6 },
    { slug: 'knee-osteoarthritis', relationshipType: 'biomechanical', explanation: 'Flatfoot deformity from PTTD alters knee mechanics and loading patterns', relevanceScore: 6 },
    { slug: 'tarsal-tunnel-syndrome', relationshipType: 'anatomical', explanation: 'Both involve structures around medial ankle; swelling from PTTD can compress nerves', relevanceScore: 5 }
  ],
  'mortons-neuroma': [
    { slug: 'metatarsalgia', relationshipType: 'symptomatic', explanation: 'Both cause forefoot pain; neuroma can be mistaken for metatarsalgia', relevanceScore: 8 },
    { slug: 'hallux-valgus', relationshipType: 'biomechanical', explanation: 'Bunion deformity can alter forefoot mechanics contributing to neuroma development', relevanceScore: 7 },
    { slug: 'plantar-fasciitis', relationshipType: 'biomechanical', explanation: 'Both involve forefoot loading issues; altered mechanics can affect both conditions', relevanceScore: 5 },
    { slug: 'hammer-toe-deformities', relationshipType: 'causal', explanation: 'Toe deformities can contribute to neuroma formation through altered mechanics', relevanceScore: 6 },
    { slug: 'tarsal-tunnel-syndrome', relationshipType: 'symptomatic', explanation: 'Both cause foot numbness and tingling but in different distributions', relevanceScore: 5 }
  ],
  'metatarsalgia': [
    { slug: 'mortons-neuroma', relationshipType: 'symptomatic', explanation: 'Both cause forefoot pain and can be confused diagnostically', relevanceScore: 8 },
    { slug: 'hallux-valgus', relationshipType: 'biomechanical', explanation: 'Bunions can cause transfer metatarsalgia due to altered weight distribution', relevanceScore: 8 },
    { slug: 'hallux-rigidus', relationshipType: 'biomechanical', explanation: 'Stiff great toe causes transfer of forces to other metatarsals', relevanceScore: 7 },
    { slug: 'plantar-fasciitis', relationshipType: 'biomechanical', explanation: 'Both involve forefoot loading and can share common biomechanical factors', relevanceScore: 6 },
    { slug: 'hammer-toe-deformities', relationshipType: 'causal', explanation: 'Toe deformities alter forefoot mechanics leading to metatarsalgia', relevanceScore: 7 }
  ],
  'hallux-valgus': [
    { slug: 'metatarsalgia', relationshipType: 'causal', explanation: 'Bunions commonly cause transfer metatarsalgia due to altered forefoot mechanics', relevanceScore: 8 },
    { slug: 'mortons-neuroma', relationshipType: 'biomechanical', explanation: 'Bunion deformity can contribute to forefoot nerve compression', relevanceScore: 7 },
    { slug: 'hallux-rigidus', relationshipType: 'anatomical', explanation: 'Both affect the great toe joint; bunions can predispose to arthritis', relevanceScore: 6 },
    { slug: 'hammer-toe-deformities', relationshipType: 'causal', explanation: 'Hallux valgus commonly leads to lesser toe deformities', relevanceScore: 7 },
    { slug: 'plantar-fasciitis', relationshipType: 'biomechanical', explanation: 'Altered forefoot mechanics from bunions can affect arch function', relevanceScore: 5 }
  ],
  'hallux-rigidus': [
    { slug: 'metatarsalgia', relationshipType: 'causal', explanation: 'Limited great toe motion causes increased loading of other metatarsals', relevanceScore: 7 },
    { slug: 'hallux-valgus', relationshipType: 'anatomical', explanation: 'Both affect great toe joint; arthritis can develop in bunion joints', relevanceScore: 6 },
    { slug: 'severs-disease', relationshipType: 'biomechanical', explanation: 'Both involve altered toe function affecting push-off mechanics', relevanceScore: 5 },
    { slug: 'achilles-tendinopathy', relationshipType: 'biomechanical', explanation: 'Limited toe extension can alter calf muscle function and Achilles loading', relevanceScore: 5 },
    { slug: 'plantar-fasciitis', relationshipType: 'biomechanical', explanation: 'Altered great toe function affects plantar fascia loading during push-off', relevanceScore: 5 }
  ],
  'turf-toe': [
    { slug: 'hallux-rigidus', relationshipType: 'causal', explanation: 'Severe turf toe injuries can lead to post-traumatic arthritis of great toe', relevanceScore: 7 },
    { slug: 'hallux-valgus', relationshipType: 'biomechanical', explanation: 'Both affect great toe joint function and stability', relevanceScore: 5 },
    { slug: 'metatarsalgia', relationshipType: 'symptomatic', explanation: 'Turf toe can cause compensatory loading of other metatarsals', relevanceScore: 6 },
    { slug: 'ankle-sprains', relationshipType: 'treatment', explanation: 'Both are sports injuries with similar graded rehabilitation approaches', relevanceScore: 6 },
    { slug: 'plantar-fasciitis', relationshipType: 'biomechanical', explanation: 'Great toe injury can affect plantar fascia loading patterns', relevanceScore: 4 }
  ],
  'severs-disease': [
    { slug: 'achilles-tendinopathy', relationshipType: 'anatomical', explanation: 'Both involve Achilles tendon attachment issues, though in different age groups', relevanceScore: 8 },
    { slug: 'plantar-fasciitis', relationshipType: 'anatomical', explanation: 'Both involve heel pain; plantar fascia attaches near calcaneal apophysis', relevanceScore: 7 },
    { slug: 'shin-splints', relationshipType: 'causal', explanation: 'Both are common overuse injuries in young athletes with similar causes', relevanceScore: 6 },
    { slug: 'ankle-sprains', relationshipType: 'biomechanical', explanation: 'Heel pain can alter gait increasing ankle injury risk', relevanceScore: 5 },
    { slug: 'growth-plate-injuries', relationshipType: 'anatomical', explanation: 'Part of pediatric growth plate injury spectrum', relevanceScore: 8 }
  ],
  'tarsal-tunnel-syndrome': [
    { slug: 'posterior-tibial-tendon-dysfunction', relationshipType: 'anatomical', explanation: 'Both involve medial ankle structures; PTTD swelling can compress nerve', relevanceScore: 5 },
    { slug: 'plantar-fasciitis', relationshipType: 'symptomatic', explanation: 'Both can cause medial arch and heel pain symptoms', relevanceScore: 6 },
    { slug: 'mortons-neuroma', relationshipType: 'symptomatic', explanation: 'Both cause foot numbness but in different nerve distributions', relevanceScore: 5 },
    { slug: 'carpal-tunnel-syndrome', relationshipType: 'treatment', explanation: 'Both are peripheral nerve compressions with similar pathophysiology', relevanceScore: 7 },
    { slug: 'shin-splints', relationshipType: 'biomechanical', explanation: 'Both can be caused by excessive pronation and altered foot mechanics', relevanceScore: 4 }
  ]
};

// Get related conditions using intelligent algorithm
export const getRelatedConditions = (currentSlug: string, category: string, limit: number = 3): Condition[] => {
  const allConditions = getAllConditions();
  
  // Get intelligent relationships for this condition
  const relationships = intelligentRelationships[currentSlug] || [];
  
  // Sort by relevance score and filter out non-existent conditions
  const relatedSlugs = relationships
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, limit)
    .map(rel => rel.slug);
  
  // Get the actual condition objects
  const relatedConditions = relatedSlugs
    .map(slug => allConditions.find(condition => condition.slug === slug))
    .filter((condition): condition is Condition => condition !== undefined);
  
  // If we don't have enough intelligent relationships, fall back to category-based
  if (relatedConditions.length < limit) {
    const categoryFallback = allConditions
      .filter(condition => 
        condition.slug !== currentSlug && 
        condition.category === category &&
        !relatedSlugs.includes(condition.slug)
      )
      .slice(0, limit - relatedConditions.length);
    
    relatedConditions.push(...categoryFallback);
  }
  
  return relatedConditions.slice(0, limit);
};

// Get detailed relationship information for a condition
export const getDetailedRelationships = (conditionSlug: string) => {
  return intelligentRelationships[conditionSlug] || [];
};

// Additional service areas (not individual pages)
export const additionalServices = [
  {
    title: "Post-Surgical Rehabilitation",
    description: "Including joint replacements (hip, knee, shoulder), ligament reconstructions (e.g., ACL), fracture fixation, rotator cuff repairs, meniscectomies, spinal surgery recovery."
  },
  {
    title: "Arthritis Management",
    description: "Osteoarthritis, Rheumatoid Arthritis (focus on pain management, mobility, and function)."
  },
  {
    title: "Sports-Related Injuries",
    description: "Muscle strains, ligament sprains, contusions, overuse injuries specific to various sports."
  },
  {
    title: "Chronic Pain Management",
    description: "Multimodal approaches to help manage and reduce long-standing pain."
  },
  {
    title: "Balance & Gait Disorders",
    description: "Especially relevant for older adults or those with neurological considerations."
  },
  {
    title: "Pre-Operative Optimization",
    description: "Preparing for surgery to improve outcomes."
  }
];