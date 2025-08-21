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
    metaDescription: 'Expert low back pain treatment in Burlington with Kareem Hassanein. CAMPT-certified physiotherapy using manual therapy, dry needling, and personalized exercise programs for lasting relief.',
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
  },
  {
    id: 'spinal-stenosis',
    slug: 'spinal-stenosis',
    name: 'Spinal Stenosis',
    category: 'spinal-health',
    description: 'Narrowing of spinal canal management',
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
  },
  {
    id: 'headaches',
    slug: 'headaches-migraines',
    name: 'Headaches & Migraines',
    category: 'spinal-health',
    description: 'cervicogenic or tension-type',
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
];

export const conditionCategories: ConditionCategory[] = [
  {
    title: "Spinal Health",
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

// Get related conditions
export const getRelatedConditions = (currentSlug: string, category: string, limit: number = 3): Condition[] => {
  return getAllConditions()
    .filter(condition => 
      condition.slug !== currentSlug && 
      condition.category === category
    )
    .slice(0, limit);
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