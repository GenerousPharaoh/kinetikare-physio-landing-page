export interface MedicalTermData {
  term: string;
  definition: string;
  pronunciation?: string;
  visualReferences: {
    type: 'diagram' | 'animation' | 'photo';
    url: string;
    alt: string;
    caption?: string;
  }[];
  relatedTerms?: string[];
  category: 'anatomy' | 'movement' | 'condition' | 'treatment';
}

// Priority medical terms based on frequency analysis from condition pages
export const medicalGlossary: Record<string, MedicalTermData> = {
  'intervertebral disc': {
    term: 'Intervertebral Disc',
    definition: 'Cushion-like pad between spinal vertebrae that acts as a shock absorber',
    pronunciation: 'in-ter-ver-TEE-bral disk',
    category: 'anatomy',
    visualReferences: [
      {
        type: 'diagram',
        url: '/images/glossary/intervertebral-disc-anatomy.webp',
        alt: 'Cross-section diagram of intervertebral disc showing nucleus and annulus',
        caption: 'Healthy disc structure'
      },
      {
        type: 'diagram',
        url: '/images/glossary/disc-herniation-stages.webp',
        alt: 'Progressive stages of disc herniation',
        caption: 'Disc degeneration stages'
      }
    ],
    relatedTerms: ['disc herniation', 'bulging disc', 'nucleus pulposus']
  },
  
  'sciatica': {
    term: 'Sciatica',
    definition: 'Pain radiating along the sciatic nerve path from lower back through hip and down the leg',
    pronunciation: 'sigh-AT-ih-kah',
    category: 'condition',
    visualReferences: [
      {
        type: 'diagram',
        url: '/images/glossary/sciatic-nerve-pathway.webp',
        alt: 'Anatomical diagram showing sciatic nerve path from spine to foot',
        caption: 'Sciatic nerve pathway'
      },
      {
        type: 'diagram',
        url: '/images/glossary/sciatica-pain-pattern.webp',
        alt: 'Body diagram showing typical sciatica pain distribution',
        caption: 'Common pain patterns'
      }
    ],
    relatedTerms: ['sciatic nerve', 'radiculopathy', 'piriformis syndrome']
  },
  
  'rotator cuff': {
    term: 'Rotator Cuff',
    definition: 'Group of four muscles and tendons that stabilize the shoulder joint',
    pronunciation: 'ROH-tay-tor kuf',
    category: 'anatomy',
    visualReferences: [
      {
        type: 'diagram',
        url: '/images/glossary/rotator-cuff-muscles.webp',
        alt: 'Shoulder anatomy showing four rotator cuff muscles',
        caption: 'The four rotator cuff muscles'
      },
      {
        type: 'animation',
        url: '/images/glossary/shoulder-rotation.gif',
        alt: 'Animation of shoulder rotation movement',
        caption: 'Rotator cuff in motion'
      }
    ],
    relatedTerms: ['supraspinatus', 'infraspinatus', 'teres minor', 'subscapularis']
  },
  
  'facet joint': {
    term: 'Facet Joint',
    definition: 'Small stabilizing joints between and behind adjacent vertebrae',
    pronunciation: 'FASS-et joint',
    category: 'anatomy',
    visualReferences: [
      {
        type: 'diagram',
        url: '/images/glossary/facet-joint-anatomy.webp',
        alt: 'Spine cross-section showing facet joint location',
        caption: 'Facet joint location in spine'
      },
      {
        type: 'diagram',
        url: '/images/glossary/facet-joint-movement.webp',
        alt: 'Diagram showing facet joint movement during spine flexion',
        caption: 'Facet joint mechanics'
      }
    ],
    relatedTerms: ['zygapophyseal joint', 'facet syndrome']
  },
  
  'nerve root': {
    term: 'Nerve Root',
    definition: 'Initial segment of a nerve leaving the spinal cord',
    pronunciation: 'nurv root',
    category: 'anatomy',
    visualReferences: [
      {
        type: 'diagram',
        url: '/images/glossary/nerve-root-anatomy.webp',
        alt: 'Spinal cord cross-section showing nerve roots exiting',
        caption: 'Nerve roots exiting the spine'
      },
      {
        type: 'diagram',
        url: '/images/glossary/nerve-root-compression.webp',
        alt: 'Diagram showing nerve root compression',
        caption: 'Nerve root compression'
      }
    ],
    relatedTerms: ['radiculopathy', 'nerve impingement']
  },
  
  'sacroiliac joint': {
    term: 'Sacroiliac Joint (SI Joint)',
    definition: 'Joint connecting the spine to the pelvis, crucial for transferring weight',
    pronunciation: 'say-kroh-ILL-ee-ak',
    category: 'anatomy',
    visualReferences: [
      {
        type: 'diagram',
        url: '/images/glossary/si-joint-anatomy.webp',
        alt: 'Pelvis diagram showing sacroiliac joint location',
        caption: 'SI joint location'
      },
      {
        type: 'diagram',
        url: '/images/glossary/si-joint-dysfunction.webp',
        alt: 'Diagram showing SI joint dysfunction patterns',
        caption: 'SI joint dysfunction'
      }
    ],
    relatedTerms: ['SI joint', 'sacrum', 'ilium']
  },
  
  'plantar fascia': {
    term: 'Plantar Fascia',
    definition: 'Thick band of tissue running across the bottom of the foot',
    pronunciation: 'PLAN-tar FASH-ee-ah',
    category: 'anatomy',
    visualReferences: [
      {
        type: 'diagram',
        url: '/images/glossary/plantar-fascia-anatomy.webp',
        alt: 'Foot anatomy showing plantar fascia from heel to toes',
        caption: 'Plantar fascia anatomy'
      },
      {
        type: 'diagram',
        url: '/images/glossary/plantar-fasciitis.webp',
        alt: 'Diagram showing inflamed plantar fascia',
        caption: 'Plantar fasciitis'
      }
    ],
    relatedTerms: ['plantar fasciitis', 'heel spur']
  },
  
  'dorsiflexion': {
    term: 'Dorsiflexion',
    definition: 'Upward movement of the foot at the ankle joint',
    pronunciation: 'dor-sih-FLEK-shun',
    category: 'movement',
    visualReferences: [
      {
        type: 'animation',
        url: '/images/glossary/dorsiflexion-movement.gif',
        alt: 'Animation showing foot dorsiflexion movement',
        caption: 'Dorsiflexion movement'
      },
      {
        type: 'diagram',
        url: '/images/glossary/ankle-range-motion.webp',
        alt: 'Diagram showing normal ankle range of motion',
        caption: 'Ankle movement range'
      }
    ],
    relatedTerms: ['plantarflexion', 'ankle mobility']
  },
  
  'proprioception': {
    term: 'Proprioception',
    definition: 'Body\'s ability to sense its position and movement in space',
    pronunciation: 'proh-pree-oh-SEP-shun',
    category: 'movement',
    visualReferences: [
      {
        type: 'diagram',
        url: '/images/glossary/proprioception-system.webp',
        alt: 'Diagram showing proprioceptive feedback system',
        caption: 'Proprioceptive system'
      },
      {
        type: 'animation',
        url: '/images/glossary/balance-test.gif',
        alt: 'Animation of proprioception balance test',
        caption: 'Testing proprioception'
      }
    ],
    relatedTerms: ['balance', 'coordination', 'kinesthesia']
  },
  
  'trigger point': {
    term: 'Trigger Point',
    definition: 'Tight, sensitive spot in muscle tissue that causes pain in other areas',
    pronunciation: 'TRIG-er point',
    category: 'condition',
    visualReferences: [
      {
        type: 'diagram',
        url: '/images/glossary/trigger-point-patterns.webp',
        alt: 'Body diagram showing common trigger point locations',
        caption: 'Common trigger points'
      },
      {
        type: 'diagram',
        url: '/images/glossary/trigger-point-referral.webp',
        alt: 'Diagram showing trigger point pain referral patterns',
        caption: 'Pain referral patterns'
      }
    ],
    relatedTerms: ['myofascial pain', 'muscle knot']
  },
  
  'joint mobilization': {
    term: 'Joint Mobilization',
    definition: 'Manual therapy technique using gentle movements to improve joint function',
    pronunciation: 'joint moh-bil-ih-ZAY-shun',
    category: 'treatment',
    visualReferences: [
      {
        type: 'diagram',
        url: '/images/glossary/joint-mobilization-grades.webp',
        alt: 'Diagram showing grades of joint mobilization',
        caption: 'Mobilization grades'
      },
      {
        type: 'photo',
        url: '/images/glossary/joint-mobilization-technique.webp',
        alt: 'Physiotherapist performing joint mobilization',
        caption: 'Mobilization technique'
      }
    ],
    relatedTerms: ['manual therapy', 'joint manipulation']
  },
  
  'ligament': {
    term: 'Ligament',
    definition: 'Tough band of tissue connecting bones to other bones',
    pronunciation: 'LIG-ah-ment',
    category: 'anatomy',
    visualReferences: [
      {
        type: 'diagram',
        url: '/images/glossary/ligament-structure.webp',
        alt: 'Diagram showing ligament connecting two bones',
        caption: 'Ligament structure'
      },
      {
        type: 'diagram',
        url: '/images/glossary/ligament-tear-grades.webp',
        alt: 'Diagram showing grades of ligament tears',
        caption: 'Ligament injury grades'
      }
    ],
    relatedTerms: ['tendon', 'connective tissue']
  },
  
  'tendon': {
    term: 'Tendon',
    definition: 'Fibrous tissue connecting muscle to bone',
    pronunciation: 'TEN-dun',
    category: 'anatomy',
    visualReferences: [
      {
        type: 'diagram',
        url: '/images/glossary/tendon-anatomy.webp',
        alt: 'Diagram showing tendon connecting muscle to bone',
        caption: 'Tendon anatomy'
      },
      {
        type: 'diagram',
        url: '/images/glossary/tendinopathy-stages.webp',
        alt: 'Diagram showing stages of tendon degeneration',
        caption: 'Tendinopathy stages'
      }
    ],
    relatedTerms: ['ligament', 'tendinitis', 'tendinopathy']
  },
  
  'radiculopathy': {
    term: 'Radiculopathy',
    definition: 'Condition where nerve roots are compressed or irritated',
    pronunciation: 'rah-dik-yoo-LAH-pah-thee',
    category: 'condition',
    visualReferences: [
      {
        type: 'diagram',
        url: '/images/glossary/radiculopathy-spine.webp',
        alt: 'Spine diagram showing nerve root compression',
        caption: 'Nerve root compression'
      },
      {
        type: 'diagram',
        url: '/images/glossary/dermatome-map.webp',
        alt: 'Body diagram showing dermatome patterns',
        caption: 'Dermatome patterns'
      }
    ],
    relatedTerms: ['nerve root', 'sciatica', 'pinched nerve']
  },
  
  'bursitis': {
    term: 'Bursitis',
    definition: 'Inflammation of the fluid-filled sacs (bursae) that cushion joints',
    pronunciation: 'bur-SIGH-tis',
    category: 'condition',
    visualReferences: [
      {
        type: 'diagram',
        url: '/images/glossary/bursa-anatomy.webp',
        alt: 'Joint diagram showing bursa location',
        caption: 'Bursa anatomy'
      },
      {
        type: 'diagram',
        url: '/images/glossary/inflamed-bursa.webp',
        alt: 'Diagram comparing normal and inflamed bursa',
        caption: 'Inflamed vs normal bursa'
      }
    ],
    relatedTerms: ['bursa', 'joint inflammation']
  }
};

// Helper function to find terms in text (case-insensitive)
export function findMedicalTermsInText(text: string): string[] {
  const foundTerms: string[] = [];
  const lowerText = text.toLowerCase();
  
  Object.keys(medicalGlossary).forEach(term => {
    if (lowerText.includes(term)) {
      foundTerms.push(term);
    }
  });
  
  return foundTerms;
}

// Get term data by any variation (handles plurals, case variations)
export function getTermData(searchTerm: string): MedicalTermData | null {
  const normalized = searchTerm.toLowerCase().trim();
  
  // Direct match
  if (medicalGlossary[normalized]) {
    return medicalGlossary[normalized];
  }
  
  // Try without 's' for plurals
  const singular = normalized.replace(/s$/, '');
  if (medicalGlossary[singular]) {
    return medicalGlossary[singular];
  }
  
  // Try partial match
  const partialMatch = Object.keys(medicalGlossary).find(key => 
    key.includes(normalized) || normalized.includes(key)
  );
  
  return partialMatch ? medicalGlossary[partialMatch] : null;
}