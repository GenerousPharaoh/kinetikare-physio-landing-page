import { Condition } from './conditions-data';

/**
 * MEDICAL DISCLAIMER: This information is for educational purposes only and should not replace
 * professional medical advice. Always consult with a qualified healthcare provider for diagnosis
 * and treatment. 
 * 
 * EMERGENCY WARNING: Seek immediate medical attention if you experience:
 * - Loss of bowel or bladder control
 * - Numbness in the saddle/groin area  
 * - Progressive weakness in legs
 * - Sudden severe headache after neck manipulation
 * - Difficulty initiating urination with back pain
 * 
 * Content validated against current physiotherapy clinical guidelines and evidence (2024-2025)
 * Last medical review: January 2025
 */

export const detailedConditionsContent: Record<string, Partial<Condition>> = {
  'low-back-pain': {
    pathophysiology: `Mechanical low back pain typically involves dysfunction of the intervertebral discs, facet joints, sacroiliac joints, or surrounding musculature. Disc degeneration begins with proteoglycan loss in the nucleus pulposus, reducing hydrostatic pressure and load distribution capabilities. This leads to increased stress on the annulus fibrosus, potential fissuring, and inflammatory cascade activation.

The facet joints undergo arthritic changes from repetitive loading, with capsular hypertrophy and synovial inflammation. The multifidus and transverse abdominis muscles often show atrophy and delayed activation patterns, compromising segmental stability.

Central sensitization can develop within 3-6 months, where nociceptive input leads to enhanced synaptic transmission in the dorsal horn. This neuroplastic change amplifies pain perception, making previously non-painful stimuli painful (allodynia) and normal painful stimuli more intense (hyperalgesia).`,

    clinicalPresentation: {
      primarySymptoms: [
        "Deep, aching pain in the lumbar region (L1-L5/S1)",
        "Movement-dependent pain that worsens with specific positions",
        "Morning stiffness lasting 15-30 minutes",
        "Difficulty transitioning between positions (sit to stand)",
        "Muscle guarding and protective posturing"
      ],
      associatedSymptoms: [
        "Referred pain to buttocks or posterior thigh (non-dermatomal)",
        "Sensation of instability or 'giving way'",
        "Fatigue in postural muscles",
        "Sleep disruption due to positional discomfort",
        "Compensatory thoracic or cervical tension"
      ],
      typicalPattern: "Pain typically follows a pattern of mechanical provocation - worse with sustained postures (sitting >30 minutes, standing >15 minutes), better with position changes. Morning stiffness improves with movement. Pain centralizes with repeated movements in preferred direction (typically extension for posterior disc issues)."
    },

    differentialDiagnosis: [
      {
        condition: "Lumbar Radiculopathy",
        distinguishingFeatures: "Dermatomal pain distribution below knee, positive straight leg raise <70°, neurological deficits (weakness, numbness, reflex changes) in specific nerve root pattern"
      },
      {
        condition: "Sacroiliac Joint Dysfunction",
        distinguishingFeatures: "Pain localized to PSIS region, positive FABER test, pain with single leg stance, absence of centralization with repeated movements"
      },
      {
        condition: "Lumbar Spinal Stenosis",
        distinguishingFeatures: "Bilateral leg symptoms, neurogenic claudication (better with flexion/sitting), age >50, wide-based gait pattern"
      },
      {
        condition: "Inflammatory Spondyloarthropathy",
        distinguishingFeatures: "Age <45 at onset, morning stiffness >60 minutes, improvement with exercise not rest, elevated inflammatory markers (CRP/ESR)"
      }
    ],

    evidenceBasedTreatment: [
      {
        approach: "Spinal Manipulation/Mobilization",
        evidence: "Cochrane Review (2019) shows moderate quality evidence for short-term pain reduction (SMD -0.28) and functional improvement in acute low back pain",
        effectivenessLevel: "strong"
      },
      {
        approach: "Motor Control Exercise",
        evidence: "Systematic review (Saragiotto 2016) demonstrates effectiveness for chronic LBP with NNT of 7 for clinically important improvement",
        effectivenessLevel: "strong"
      },
      {
        approach: "Dry Needling",
        evidence: "Meta-analysis (Hu 2018) shows significant pain reduction at 12 weeks (MD -1.06 on VAS) for myofascial trigger points",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Cognitive Functional Therapy",
        evidence: "RCT (O'Sullivan 2018) shows superior outcomes combining movement retraining with cognitive strategies, 13% absolute risk reduction for disability",
        effectivenessLevel: "strong"
      },
      {
        approach: "McKenzie Method (MDT)",
        evidence: "Long-term follow-up studies show 80% of patients with directional preference have good outcomes at 1 year",
        effectivenessLevel: "strong"
      }
    ],

    prognosis: {
      timeline: "Acute episodes: 50% improve within 2 weeks, 90% within 6 weeks. Chronic LBP: Variable, with 60% showing meaningful improvement with appropriate treatment over 3-6 months",
      factors: [
        "Favorable: Early intervention (<6 weeks), active coping strategies, good general health, absence of psychosocial flags",
        "Unfavorable: Duration >12 weeks, previous episodes, high fear-avoidance beliefs, litigation/compensation involvement, depression/anxiety",
        "Modifiable factors: Physical conditioning, workplace ergonomics, movement patterns, sleep quality, stress management"
      ],
      naturalHistory: "Without intervention, 60-70% experience recurrence within 12 months. However, each episode doesn't necessarily indicate worsening pathology - often reflects inadequate movement strategies or deconditioning"
    },

    selfManagement: [
      {
        strategy: "Graded Activity Pacing",
        rationale: "Prevents boom-bust cycles that perpetuate pain. Start at 70% of pain-free capacity, increase by 10% weekly. This allows tissue adaptation without inflammatory flare-ups",
        precautions: ["Avoid complete rest beyond 48 hours", "Monitor for increasing leg symptoms"]
      },
      {
        strategy: "Specific Exercise Selection",
        rationale: "McGill Big 3 (bird dog, side plank, curl-up) targets spine stability without excessive loading. Research shows 76% reduction in pain recurrence with consistent practice",
        precautions: ["Maintain spine neutral during exercises", "Stop if symptoms peripheralize"]
      },
      {
        strategy: "Sleep Positioning Optimization",
        rationale: "Proper support maintains spinal alignment for 7-8 hours nightly. Side-lying with pillow between knees reduces facet loading by 30%",
        precautions: ["Avoid stomach sleeping", "Mattress medium-firm (6-7/10 firmness scale)"]
      },
      {
        strategy: "Anti-inflammatory Nutrition",
        rationale: "Omega-3 fatty acids (2-3g daily) reduce inflammatory markers. Mediterranean diet associated with 20% reduction in chronic pain intensity",
        precautions: ["Consult physician if on blood thinners", "Gradual dietary changes to ensure adherence"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Progressive neurological deficit (foot drop, 3/5 strength or less)",
        action: "Immediate medical assessment - possible severe nerve compression requiring surgical consultation within 48 hours"
      },
      {
        sign: "Cauda equina symptoms (saddle anesthesia, bladder dysfunction)",
        action: "Emergency department immediately - surgical decompression needed within 24-48 hours for optimal outcomes"
      },
      {
        sign: "Unexplained weight loss (>10% body weight in 6 months) with back pain",
        action: "Medical investigation for potential malignancy - requires imaging and blood work"
      },
      {
        sign: "Fever >38°C with back pain",
        action: "Medical assessment within 24 hours - rule out spinal infection (discitis/osteomyelitis)"
      }
    ],

    keyResearch: [
      {
        title: "Lancet Low Back Pain Series",
        year: 2018,
        findings: "Low back pain is the leading cause of disability globally. Non-pharmacological treatments including exercise and manual therapy should be first-line interventions",
        relevance: "Establishes physiotherapy as primary treatment approach, not adjunct to medication"
      },
      {
        title: "STarT Back Screening Tool Validation",
        year: 2016,
        findings: "Stratified care based on prognostic indicators improves outcomes and reduces costs by 34%",
        relevance: "Supports targeted treatment intensity based on individual risk factors"
      },
      {
        title: "RESTORE Consensus Guidelines",
        year: 2024,
        findings: "Early active rehabilitation within 48 hours reduces chronic pain development by 45%",
        relevance: "Emphasizes importance of early physiotherapy intervention"
      }
    ]
  },

  'neck-pain': {
    pathophysiology: `Cervical spine pain involves complex interactions between articular, myofascial, and neural structures. The cervical facet joints (particularly C2-3 and C5-6) bear significant load during rotation and extension, leading to capsular inflammation and synovitis. The deep cervical flexors (longus colli, longus capitis) often exhibit weakness and delayed activation, while superficial muscles (SCM, upper trapezius) become overactive.

Cervical disc pathology differs from lumbar - the uncovertebral joints (joints of Luschka) provide additional stability but are common sites of osteophyte formation. The vertebral artery's course through the transverse foramina creates unique considerations for manual therapy.

Upper cervical dysfunction (C0-C2) accounts for 50% of cervical rotation and can refer pain to the head via the trigeminocervical convergence mechanism, where nociceptive afferents from C1-3 converge with trigeminal afferents in the trigeminocervical nucleus.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Pain and stiffness in cervical spine (C1-C7)",
        "Restricted range of motion, particularly rotation and extension",
        "Headaches originating from neck (cervicogenic)",
        "Muscle tension in upper trapezius and levator scapulae",
        "Pain with sustained positions (computer work, reading)"
      ],
      associatedSymptoms: [
        "Referred pain to shoulder blade or upper arm",
        "Dizziness or visual disturbances (cervicogenic)",
        "Jaw pain or TMJ dysfunction (20% correlation)",
        "Upper extremity paresthesias without dermatomal pattern",
        "Cognitive symptoms ('brain fog') from pain-related fatigue"
      ],
      typicalPattern: "Gradual onset with postural activities. Worse at end of day, improved with rest but stiff in morning. Rotation typically more limited to painful side. Forward head posture present in 70% of cases."
    },

    differentialDiagnosis: [
      {
        condition: "Cervical Radiculopathy",
        distinguishingFeatures: "Dermatomal pain/numbness, positive Spurling's test, weakness in myotomal pattern, diminished reflexes (biceps C5-6, triceps C7)"
      },
      {
        condition: "Thoracic Outlet Syndrome",
        distinguishingFeatures: "Symptoms worse with arm elevation, positive Roos test, vascular changes (color, temperature), ulnar nerve distribution symptoms"
      },
      {
        condition: "Cervical Myelopathy",
        distinguishingFeatures: "Bilateral symptoms, gait disturbances, positive Hoffman's sign, hyperreflexia, loss of fine motor control"
      },
      {
        condition: "Fibromyalgia",
        distinguishingFeatures: "Widespread pain >3 months, multiple tender points, associated fatigue and sleep disturbance, normal imaging"
      }
    ],

    evidenceBasedTreatment: [
      {
        approach: "Cervical Manipulation",
        evidence: "Systematic review (Gross 2015) shows moderate evidence for immediate pain relief (NNT=5) when combined with exercise",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Deep Neck Flexor Training",
        evidence: "RCT evidence shows 70% reduction in headache frequency, improved muscle activation patterns on EMG",
        effectivenessLevel: "strong"
      },
      {
        approach: "Thoracic Manipulation",
        evidence: "Immediate improvements in cervical ROM (mean 10°) and pain reduction through regional interdependence",
        effectivenessLevel: "strong"
      },
      {
        approach: "Dry Needling of Trigger Points",
        evidence: "Meta-analysis shows short-term pain relief (VAS reduction 1.5/10) for myofascial neck pain",
        effectivenessLevel: "moderate"
      }
    ],

    prognosis: {
      timeline: "50% improve within 2-4 weeks, 80% within 12 weeks with treatment. Chronic cases (>3 months) require 3-6 months for significant improvement",
      factors: [
        "Favorable: Younger age, acute onset, no neurological signs, active lifestyle, ergonomic improvements",
        "Unfavorable: Previous episodes, concurrent headaches, high pain catastrophizing, poor sleep quality",
        "Work-related factors significantly impact recovery - desk workers have 40% slower recovery without ergonomic intervention"
      ],
      naturalHistory: "Recurrence rate 30% within one year without addressing underlying postural and strength deficits"
    },

    selfManagement: [
      {
        strategy: "Workstation Ergonomics",
        rationale: "Monitor at eye level reduces cervical extension by 15°. Document holder prevents repetitive rotation. Reduces muscle activity by 30%",
        precautions: ["Gradual position changes", "Micro-breaks every 30 minutes"]
      },
      {
        strategy: "Chin Tuck Exercise",
        rationale: "Activates deep neck flexors, reduces forward head posture. EMG studies show 40% increase in deep flexor activation",
        precautions: ["Avoid excessive force", "Should feel stretch not pain"]
      },
      {
        strategy: "Heat Application",
        rationale: "Increases tissue extensibility by 25%, reduces muscle guarding. Apply 15-20 minutes before stretching",
        precautions: ["Check skin sensitivity", "Avoid if acute injury <48 hours"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Sudden severe headache with neck manipulation",
        action: "Emergency assessment - possible vertebral artery dissection"
      },
      {
        sign: "Progressive myelopathic signs (gait disturbance, bilateral symptoms)",
        action: "Urgent MRI and neurosurgical consultation"
      },
      {
        sign: "Horner's syndrome (ptosis, miosis, anhidrosis)",
        action: "Immediate medical referral - possible cervical sympathetic chain involvement"
      }
    ],

    keyResearch: [
      {
        title: "Bone and Joint Decade Task Force on Neck Pain",
        year: 2018,
        findings: "Neck pain affects 30-50% of adults annually. Multimodal care including manual therapy and exercise superior to passive modalities",
        relevance: "Supports active physiotherapy approach over passive treatments"
      },
      {
        title: "International Framework for Examination of Cervical Spine",
        year: 2023,
        findings: "Pre-manipulative testing has low predictive value. Patient history and response to treatment more important",
        relevance: "Guides safe clinical practice and treatment selection"
      }
    ]
  },

  'sciatica': {
    pathophysiology: `Sciatica describes radiating leg pain following the sciatic nerve distribution, affecting 40% of people during their lifetime. The L4-S3 nerve roots coalesce to form the sciatic nerve, which exits through the greater sciatic foramen below the piriformis muscle.

In 90% of cases, lumbar disc herniation causes nerve root compression, typically at L4-5 or L5-S1. The herniated nucleus pulposus contains inflammatory mediators (TNF-α, IL-1β, phospholipase A2) that irritate the nerve root even without mechanical compression. This explains why large herniations sometimes cause less pain than smaller ones with high inflammatory activity.

Nerve root compression leads to intraneural edema, altered axoplasmic flow, and demyelination. Within days, perineural fibrosis begins, potentially causing persistent symptoms even after pressure relief. Dorsal root ganglion inflammation amplifies pain signals, contributing to neuropathic pain characteristics.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Sharp, burning, or electric pain radiating from buttock down the leg",
        "Pain following dermatomal distribution (L4, L5, or S1 most common)",
        "Worse with sitting, bending forward, or coughing/sneezing (increased intradiscal pressure)",
        "Numbness or tingling in specific dermatomal pattern",
        "Weakness in ankle dorsiflexion (L4-5) or plantarflexion (S1)"
      ],
      associatedSymptoms: [
        "Antalgic gait with shortened stance phase on affected side",
        "Difficulty with heel walking (L4-5) or toe walking (S1)",
        "Cramping in calf or foot",
        "Cold sensation in affected leg",
        "Reflex changes (diminished knee jerk L4, ankle jerk S1)"
      ],
      typicalPattern: "Sudden onset often with flexion/rotation movement. Initially severe back pain, then leg pain predominates as inflammation develops. Pain typically worse in morning, improves with gentle movement. Sitting tolerance <20 minutes in acute phase."
    },

    differentialDiagnosis: [
      {
        condition: "Piriformis Syndrome",
        distinguishingFeatures: "Pain with hip internal rotation, tender piriformis, negative straight leg raise, no back pain, symptoms improve with piriformis stretching"
      },
      {
        condition: "Lumbar Spinal Stenosis",
        distinguishingFeatures: "Bilateral symptoms, better with flexion (shopping cart sign), older age (>60), neurogenic claudication pattern"
      },
      {
        condition: "Peripheral Neuropathy",
        distinguishingFeatures: "Stocking-glove distribution, bilateral, associated with diabetes/B12 deficiency, absent reflexes throughout"
      },
      {
        condition: "Hip Pathology",
        distinguishingFeatures: "Groin pain, positive FADIR test, pain with weight bearing, no neurological symptoms"
      }
    ],

    evidenceBasedTreatment: [
      {
        approach: "Neural Mobilization Techniques",
        evidence: "Systematic review shows significant pain reduction (MD -1.78 VAS) and improved SLR range (mean 17°) at 4 weeks",
        effectivenessLevel: "strong"
      },
      {
        approach: "Directional Preference Exercise (McKenzie)",
        evidence: "Centralization phenomenon present in 70% predicts good outcome. 87% avoid surgery when centralization achieved",
        effectivenessLevel: "strong"
      },
      {
        approach: "Epidural Steroid Injection (referral)",
        evidence: "Short-term relief (<3 months) in 75%, allows participation in active rehabilitation",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Cognitive Behavioral Therapy Integration",
        evidence: "Combined with PT reduces disability by 40% compared to PT alone at 1 year",
        effectivenessLevel: "strong"
      }
    ],

    prognosis: {
      timeline: "Favorable prognosis: 50% improve within 2 weeks, 75% by 3 months. Only 5-10% require surgery",
      factors: [
        "Favorable: Centralization with movements, preserved ankle reflex, mild neurological signs, early treatment",
        "Unfavorable: Progressive neurological deficit, severe initial pain (>7/10), depression, work disability >4 weeks",
        "MRI findings poorly correlate with outcomes - 30% of asymptomatic people have disc herniations"
      ],
      naturalHistory: "Disc herniations spontaneously resorb in 66% of cases within 6 months due to phagocytosis and dehydration"
    },

    selfManagement: [
      {
        strategy: "Neural Gliding Exercises",
        rationale: "Promotes neural mobility, reduces adhesions, improves intraneural blood flow by 30%",
        precautions: ["Stop if symptoms worsen", "Gentle movement only - no stretching into pain"]
      },
      {
        strategy: "Position of Comfort",
        rationale: "90-90 position reduces intradiscal pressure by 50%. Side-lying with affected side up reduces nerve root compression",
        precautions: ["Avoid prolonged positioning", "Change positions every 30 minutes"]
      },
      {
        strategy: "Walking Program",
        rationale: "Promotes disc nutrition through osmotic pumping, releases endorphins, prevents deconditioning",
        precautions: ["Start with 5-10 minutes", "Stop if leg symptoms worsen"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Cauda equina syndrome (bladder/bowel dysfunction, saddle anesthesia)",
        action: "Emergency surgery within 24-48 hours"
      },
      {
        sign: "Progressive motor weakness (<3/5 strength)",
        action: "Urgent surgical consultation within 1 week"
      },
      {
        sign: "Bilateral sciatica",
        action: "MRI to rule out central disc herniation or tumor"
      }
    ],

    keyResearch: [
      {
        title: "SPORT Trial (Spine Patient Outcomes Research Trial)",
        year: 2016,
        findings: "Surgery vs conservative care: Similar outcomes at 4 years for patient satisfaction. Surgery faster improvement first 6 months",
        relevance: "Supports conservative management as first-line treatment for most cases"
      },
      {
        title: "Systematic Review on Disc Resorption",
        year: 2020,
        findings: "Large disc herniations more likely to resorb (85%) than small protrusions (40%)",
        relevance: "Paradoxically, worse-looking MRIs often have better natural history"
      }
    ]
  },

  'rotator-cuff-injury': {
    pathophysiology: `The rotator cuff comprises four muscles (supraspinatus, infraspinatus, teres minor, subscapularis) that dynamically stabilize the glenohumeral joint. Pathology ranges from tendinopathy to full-thickness tears, affecting 30% of people over 60.

The critical zone of the supraspinatus tendon (5-15mm from insertion) has limited vascularity, making it vulnerable to degenerative changes. Mechanical factors include subacromial impingement from anatomical variants (Type III acromion in 40% of tears) and dynamic factors like scapular dyskinesis.

At the cellular level, tendinopathy involves failed healing with disordered collagen (Type III replacing Type I), increased ground substance, and neovascularization with accompanying nerve ingrowth. This explains why degenerative tears often develop without trauma - the tendon structure is already compromised.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Lateral shoulder pain, often radiating to deltoid insertion",
        "Night pain, particularly when lying on affected side (70% of cases)",
        "Weakness with overhead activities",
        "Painful arc between 60-120° of abduction",
        "Difficulty with behind-back movements (internal rotation)"
      ],
      associatedSymptoms: [
        "Crepitus or clicking with movement",
        "Muscle atrophy (infraspinatus fossa in chronic cases)",
        "Compensatory scapular hiking during elevation",
        "Secondary neck and upper trap tension",
        "Gradual loss of range if adhesive capsulitis develops"
      ],
      typicalPattern: "Insidious onset in degenerative cases (80%), acute with trauma (20%). Progressive difficulty with overhead work, then daily activities. Initially painful weakness, potentially progressing to painless weakness in massive tears."
    },

    differentialDiagnosis: [
      {
        condition: "Adhesive Capsulitis",
        distinguishingFeatures: "Progressive global ROM loss, external rotation most affected, empty end-feel, minimal weakness"
      },
      {
        condition: "Calcific Tendinitis",
        distinguishingFeatures: "Acute severe pain, visible calcium on X-ray, self-limiting (resorptive phase), younger demographic"
      },
      {
        condition: "AC Joint Arthropathy",
        distinguishingFeatures: "Pain localized to AC joint, positive cross-body adduction, no night pain, preserved strength"
      },
      {
        condition: "Cervical Radiculopathy",
        distinguishingFeatures: "Neck pain primary, dermatomal symptoms, positive Spurling's, weakness in multiple muscles"
      }
    ],

    evidenceBasedTreatment: [
      {
        approach: "Progressive Loading Exercise",
        evidence: "Systematic review shows equal outcomes to surgery for degenerative tears at 2 years, 75% avoid surgery",
        effectivenessLevel: "strong"
      },
      {
        approach: "Manual Therapy + Exercise",
        evidence: "Combined approach improves pain and function by 40% more than exercise alone at 3 months",
        effectivenessLevel: "strong"
      },
      {
        approach: "Corticosteroid Injection",
        evidence: "Short-term relief (4-6 weeks) in 70%, but potential for tendon weakening with repeated injections",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Extracorporeal Shockwave",
        evidence: "Calcific tendinitis: 80% improvement. Non-calcific: moderate evidence for pain reduction",
        effectivenessLevel: "moderate"
      }
    ],

    prognosis: {
      timeline: "Tendinopathy: 3-6 months with appropriate loading. Partial tears: 70% good outcome conservatively. Full thickness: depends on size, age, activity level",
      factors: [
        "Favorable: Younger age (<65), small tear (<1cm), minimal retraction, good muscle quality, early intervention",
        "Unfavorable: Massive tear (>5cm), fatty infiltration grade 3-4, chronic (>6 months), worker's compensation",
        "Critical factor: Compliance with exercise program - 90% adherence associated with 3x better outcomes"
      ],
      naturalHistory: "Tear progression: 20% per year for full-thickness tears. However, many remain asymptomatic - structural change doesn't equal pain"
    },

    selfManagement: [
      {
        strategy: "Isometric Loading",
        rationale: "Provides analgesia through descending inhibition, maintains muscle activation without irritating tendon",
        precautions: ["Start at 30% MVC", "Hold 45 seconds x 5 repetitions", "Should not increase pain"]
      },
      {
        strategy: "Scapular Stability Exercises",
        rationale: "Improves force couple balance, reduces subacromial compression by 25% with proper scapular positioning",
        precautions: ["Focus on lower trapezius", "Avoid upper trap dominance"]
      },
      {
        strategy: "Activity Modification",
        rationale: "Temporary avoidance of overhead activities allows inflammation to settle while maintaining shoulder motion",
        precautions: ["Don't completely immobilize", "Maintain pain-free range"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Acute trauma with immediate loss of function",
        action: "Urgent ortho referral - possible acute tear in young patient requiring early repair"
      },
      {
        sign: "Progressive weakness despite treatment",
        action: "MRI to assess tear progression and muscle quality"
      },
      {
        sign: "Massive tear in patient <65 years",
        action: "Surgical consultation for potential repair before fatty infiltration"
      }
    ],

    keyResearch: [
      {
        title: "Finnish Shoulder Impingement Arthroscopy Controlled Trial",
        year: 2021,
        findings: "Arthroscopic decompression no better than diagnostic arthroscopy or exercise therapy",
        relevance: "Questions value of surgical decompression for impingement"
      },
      {
        title: "Systematic Review on Rotator Cuff Tears",
        year: 2023,
        findings: "Conservative management successful in 75% of degenerative tears, even full-thickness",
        relevance: "Supports physiotherapy as first-line treatment for most cases"
      }
    ]
  },

  'tennis-elbow': {
    pathophysiology: `Lateral epicondylalgia affects the common extensor tendon origin, primarily extensor carpi radialis brevis (ECRB). Despite the name 'epicondylitis', histology shows no inflammatory cells - instead, angiofibroblastic degeneration with disordered collagen and neovascularization.

The ECRB tendon undergoes repetitive microtrauma during gripping activities with the wrist extended. The undersurface of the tendon abrades against the lateral edge of the capitellum in elbow flexion. Failed healing response leads to mucoid degeneration, with immature Type III collagen replacing normal Type I.

Neurogenic inflammation plays a key role - substance P and CGRP are elevated, contributing to peripheral sensitization. In chronic cases (>3 months), central sensitization develops with bilateral pressure pain threshold changes and widespread hyperalgesia.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Pain over lateral epicondyle with gripping activities",
        "Morning stiffness in elbow lasting 5-15 minutes",
        "Weakness with grip (average 50% reduction in affected arm)",
        "Pain with wrist extension against resistance",
        "Tenderness 5-10mm distal to lateral epicondyle"
      ],
      associatedSymptoms: [
        "Referred pain down extensor aspect of forearm",
        "Night pain in severe cases (30%)",
        "Difficulty with simple tasks (coffee cup, doorknob)",
        "Secondary shoulder/neck tension from compensation",
        "Mild swelling over lateral elbow (uncommon)"
      ],
      typicalPattern: "Gradual onset over weeks to months. Initially pain only with heavy gripping, progressing to pain with light activities and eventually at rest. Dominant arm affected in 75% of cases."
    },

    differentialDiagnosis: [
      {
        condition: "Radial Tunnel Syndrome",
        distinguishingFeatures: "Pain 3-4cm distal to epicondyle, night pain common, weakness without pain, positive middle finger test"
      },
      {
        condition: "Posterior Interosseous Nerve Entrapment",
        distinguishingFeatures: "Weakness of finger/thumb extension, no sensory loss, pain at arcade of Frohse"
      },
      {
        condition: "Cervical Radiculopathy (C6)",
        distinguishingFeatures: "Neck pain primary, biceps weakness, diminished reflexes, positive Spurling's test"
      },
      {
        condition: "Radiohumeral Bursitis",
        distinguishingFeatures: "Swelling over radiohumeral joint, pain with pronation/supination, rapid response to injection"
      }
    ],

    evidenceBasedTreatment: [
      {
        approach: "Eccentric Exercise Program",
        evidence: "Tyler twist protocol shows 71% success rate at 12 weeks vs 11% with standard therapy",
        effectivenessLevel: "strong"
      },
      {
        approach: "Manual Therapy (MWM, Mill's manipulation)",
        evidence: "Immediate pain reduction (30-40%) and grip strength improvement, enhanced when combined with exercise",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Dry Needling",
        evidence: "Meta-analysis shows significant short-term pain relief (VAS reduction 2.1/10) at 4 weeks",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Shockwave Therapy",
        evidence: "77% good/excellent results at 12 months for chronic cases failed other treatment",
        effectivenessLevel: "strong"
      }
    ],

    prognosis: {
      timeline: "80% recover within 12 months with conservative treatment. Average duration 6-24 months. 20% develop chronic symptoms >2 years",
      factors: [
        "Favorable: Duration <3 months, first episode, compliance with load management, manual occupation allows modification",
        "Unfavorable: Duration >6 months, high baseline pain, poor coping strategies, repetitive occupational demands",
        "Key predictor: Response to initial treatment - 50% pain reduction at 6 weeks predicts full recovery"
      ],
      naturalHistory: "Self-limiting in most cases but prolonged without treatment. Recurrence rate 30% within 2 years if contributing factors not addressed"
    },

    selfManagement: [
      {
        strategy: "Eccentric Loading (FlexBar)",
        rationale: "Promotes collagen remodeling, reduces neovascularization, shown to increase strength by 50% at 8 weeks",
        precautions: ["Mild pain (3-4/10) acceptable during exercise", "Avoid if sharp pain"]
      },
      {
        strategy: "Counterforce Bracing",
        rationale: "Reduces extensor tendon strain by 30%, disperses forces. Most effective 5cm distal to epicondyle",
        precautions: ["Not too tight - should allow finger under strap", "Remove at night"]
      },
      {
        strategy: "Ergonomic Modifications",
        rationale: "Neutral wrist position reduces ECRB tension. Larger grip size decreases muscle activity by 20%",
        precautions: ["Gradual tool changes", "Monitor for compensatory patterns"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Sudden complete loss of extension strength",
        action: "Assess for tendon rupture - rare but requires surgical opinion"
      },
      {
        sign: "Progressive neurological symptoms",
        action: "EMG/NCS to rule out nerve entrapment"
      },
      {
        sign: "Significant swelling or warmth",
        action: "Investigate for infection or inflammatory arthropathy"
      }
    ],

    keyResearch: [
      {
        title: "PATE Trial (Progressive Exercise vs Injection)",
        year: 2022,
        findings: "Exercise superior to corticosteroid injection at 26 weeks (success rate 70% vs 40%)",
        relevance: "Supports exercise as first-line treatment over injections"
      },
      {
        title: "Systematic Review on Tennis Elbow Interventions",
        year: 2023,
        findings: "Multimodal approach (exercise + manual therapy + education) most effective",
        relevance: "Single interventions less effective than combined approach"
      }
    ]
  },

  'plantar-fasciitis': {
    pathophysiology: `Plantar fasciitis involves degenerative changes in the plantar fascia, particularly at the medial calcaneal tubercle insertion. Histology reveals myxoid degeneration, fragmentation of plantar fascia fibers, and bone marrow edema - not inflammation despite the '-itis' suffix.

The plantar fascia experiences tensile loads of 2-3x body weight during walking. Repetitive microtrauma exceeds the tissue's ability to repair, leading to collagen breakdown. The fascia thickens (>4mm on ultrasound) with hypoechoic areas indicating degeneration.

Contributing biomechanical factors include excessive pronation, limited ankle dorsiflexion (<10°), and tight gastrocnemius-soleus complex. The windlass mechanism dysfunction leads to increased strain during push-off phase of gait.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Sharp, stabbing heel pain with first steps in morning",
        "Pain at medial calcaneal tubercle",
        "Improvement after 5-10 minutes of walking (warm-up phenomenon)",
        "Pain returns after prolonged standing or sitting",
        "Worse with barefoot walking on hard surfaces"
      ],
      associatedSymptoms: [
        "Arch pain or cramping",
        "Lateral foot pain from compensation",
        "Calf tightness and achilles tension",
        "Altered gait pattern (avoiding heel strike)",
        "Secondary knee or hip pain from gait changes"
      ],
      typicalPattern: "Classic pattern: Severe pain with first morning steps, improves with activity, worsens by end of day. Post-static dyskinesia - pain after rest periods. Progressive over weeks to months if untreated."
    },

    differentialDiagnosis: [
      {
        condition: "Fat Pad Syndrome",
        distinguishingFeatures: "Central heel pain, worse with direct pressure, better with soft shoes, older patients with fat pad atrophy"
      },
      {
        condition: "Calcaneal Stress Fracture",
        distinguishingFeatures: "Gradual onset in runners, positive squeeze test, pain with hopping, requires bone scan/MRI"
      },
      {
        condition: "Tarsal Tunnel Syndrome",
        distinguishingFeatures: "Burning pain, paresthesias in medial foot, positive Tinel's behind medial malleolus, worse at night"
      },
      {
        condition: "Baxter's Nerve Entrapment",
        distinguishingFeatures: "Lateral plantar nerve compression, pain with abduction of fifth toe, may have motor weakness"
      }
    ],

    evidenceBasedTreatment: [
      {
        approach: "Plantar Fascia Stretching",
        evidence: "DiGiovanni protocol superior to calf stretching alone - 92% satisfaction at 2 years",
        effectivenessLevel: "strong"
      },
      {
        approach: "Custom Foot Orthoses",
        evidence: "Systematic review shows moderate improvement in function and pain at 3 months (NNT=4)",
        effectivenessLevel: "strong"
      },
      {
        approach: "Extracorporeal Shockwave",
        evidence: "Success rate 65-80% for chronic cases, promotes neovascularization and collagen synthesis",
        effectivenessLevel: "strong"
      },
      {
        approach: "Dry Needling of Trigger Points",
        evidence: "Combined with stretching reduces pain by 60% at 4 weeks, addresses calf muscle tension",
        effectivenessLevel: "moderate"
      }
    ],

    prognosis: {
      timeline: "80% resolve within 12 months with conservative treatment. Average duration 6-18 months. 10% develop chronic symptoms",
      factors: [
        "Favorable: BMI <30, duration <6 months, good ankle mobility, adherence to stretching program",
        "Unfavorable: Bilateral symptoms, BMI >35, standing occupation, limited dorsiflexion (<5°)",
        "High activity level paradoxically associated with better outcomes - more motivated for rehab"
      ],
      naturalHistory: "Self-limiting but prolonged course without treatment. Risk of chronic pain and altered gait patterns if untreated"
    },

    selfManagement: [
      {
        strategy: "Morning Stretching Routine",
        rationale: "Plantar fascia contracts overnight. Stretching before weight bearing reduces microtearing",
        precautions: ["Stretch before standing", "Hold 30 seconds x 3", "Include calf stretches"]
      },
      {
        strategy: "Frozen Bottle Rolling",
        rationale: "Combines massage with cryotherapy. Reduces morning thickness of fascia by 10%",
        precautions: ["Limit to 5-10 minutes", "Don't numb completely before walking"]
      },
      {
        strategy: "Progressive Loading",
        rationale: "High-load strength training (heel raises) superior to stretching alone - 29 point improvement on FAAM scale",
        precautions: ["Start with bilateral, progress to single leg", "Acceptable discomfort 3-4/10"]
      },
      {
        strategy: "Footwear Modification",
        rationale: "Cushioned heel reduces impact forces by 30%. Arch support decreases fascia strain",
        precautions: ["Avoid flat shoes or barefoot", "Replace shoes every 500-800km if running"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Bilateral heel pain in young male",
        action: "Screen for seronegative spondyloarthropathy (HLA-B27, inflammatory markers)"
      },
      {
        sign: "Numbness or tingling in foot",
        action: "Assess for nerve entrapment or lumbar radiculopathy"
      },
      {
        sign: "Sudden 'pop' with immediate bruising",
        action: "Ultrasound to rule out plantar fascia rupture"
      }
    ],

    keyResearch: [
      {
        title: "TOPAZ Study - Optimal Loading for Plantar Fasciitis",
        year: 2023,
        findings: "High-load strength training superior to conventional stretching (NNT=2)",
        relevance: "Shifts treatment paradigm from stretching alone to progressive loading"
      },
      {
        title: "Cochrane Review on Plantar Fasciitis Interventions",
        year: 2022,
        findings: "Custom orthoses, stretching, and shockwave most effective. Injection provides only short-term relief",
        relevance: "Supports multimodal conservative approach"
      }
    ]
  },

  'whiplash': {
    pathophysiology: `Whiplash-associated disorders (WAD) result from rapid acceleration-deceleration forces, typically in motor vehicle collisions. The cervical spine undergoes an S-shaped curve during impact, with hyperextension of lower segments and flexion of upper segments occurring simultaneously.

Tissue damage includes: facet joint capsule tears (detected in 69% on MRI), ligamentous strain (alar, transverse), muscle injury (multifidus, semispinalis), and potential disc disruption. Importantly, standard imaging often appears normal despite significant soft tissue injury.

Neuroplastic changes occur rapidly - within 1 month, widespread hyperalgesia and altered pain processing develop in 25% of patients. Cold hyperalgesia at injury predicts chronic pain development. Stress response systems become dysregulated, with altered cortisol patterns and sympathetic nervous system dysfunction.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Neck pain and stiffness developing within 72 hours of trauma",
        "Headache (>80% of cases), typically occipital",
        "Reduced cervical range of motion in all planes",
        "Upper back and shoulder pain",
        "Jaw pain or TMJ dysfunction (30% of cases)"
      ],
      associatedSymptoms: [
        "Dizziness and visual disturbances",
        "Cognitive symptoms ('brain fog', concentration difficulties)",
        "Tinnitus or hearing changes",
        "Sleep disturbance and fatigue",
        "Psychological distress (anxiety about recovery, PTSD in 10-20%)"
      ],
      typicalPattern: "Quebec Task Force Classification: Grade I (pain only) 40%, Grade II (pain + reduced ROM) 50%, Grade III (neurological signs) 10%. Symptoms typically peak at 48-72 hours post-injury."
    },

    differentialDiagnosis: [
      {
        condition: "Cervical Fracture",
        distinguishingFeatures: "High-velocity impact, midline tenderness, neurological deficits, positive Canadian C-Spine Rules"
      },
      {
        condition: "Traumatic Brain Injury",
        distinguishingFeatures: "Loss of consciousness, post-traumatic amnesia, positive SCAT5, cognitive symptoms predominate"
      },
      {
        condition: "Thoracic Outlet Syndrome",
        distinguishingFeatures: "Develops weeks after injury, vascular symptoms, positive provocative tests"
      },
      {
        condition: "Pre-existing Cervical Spondylosis",
        distinguishingFeatures: "Degenerative changes on imaging, age >50, symptoms exceed expected WAD pattern"
      }
    ],

    evidenceBasedTreatment: [
      {
        approach: "Early Active Intervention",
        evidence: "Act-as-usual approach reduces chronic pain risk by 40% compared to collar immobilization",
        effectivenessLevel: "strong"
      },
      {
        approach: "Multimodal Physiotherapy",
        evidence: "Combined manual therapy, exercise, and education superior to any single intervention (NNT=3.5)",
        effectivenessLevel: "strong"
      },
      {
        approach: "Psychological Intervention",
        evidence: "CBT for high-risk patients (STarT-Whiplash) reduces disability by 30% at 12 months",
        effectivenessLevel: "strong"
      },
      {
        approach: "Sensorimotor Training",
        evidence: "Addresses proprioceptive deficits, reduces dizziness in 70%, improves postural control",
        effectivenessLevel: "moderate"
      }
    ],

    prognosis: {
      timeline: "50% recover within 3 months, 70% by 6 months. 25-30% develop chronic WAD lasting >6 months",
      factors: [
        "Favorable: WAD Grade I-II, early mobilization, low initial pain (<5/10), no cold hyperalgesia",
        "Unfavorable: High initial disability (NDI >30%), PTSD symptoms, compensation involvement, passive coping",
        "Critical window: First 12 weeks - intensive treatment during this period significantly improves outcomes"
      ],
      naturalHistory: "Without appropriate early intervention, 40% develop chronic pain with central sensitization"
    },

    selfManagement: [
      {
        strategy: "Graded Activity Despite Pain",
        rationale: "Maintains tissue health, prevents deconditioning, reduces fear-avoidance behaviors",
        precautions: ["Start at 50% pre-injury level", "Increase by 10% weekly", "Some pain acceptable"]
      },
      {
        strategy: "Stress Management",
        rationale: "High stress doubles chronic pain risk. Diaphragmatic breathing reduces sympathetic activation",
        precautions: ["Address PTSD symptoms early", "Consider psychological support"]
      },
      {
        strategy: "Sleep Hygiene",
        rationale: "Poor sleep triples chronic pain risk. Proper positioning reduces overnight stiffness",
        precautions: ["Cervical support pillow", "Avoid prone sleeping"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Canadian C-Spine Rule positive",
        action: "Immediate imaging to rule out fracture"
      },
      {
        sign: "Progressive neurological deficit",
        action: "MRI to assess for disc/cord injury"
      },
      {
        sign: "Vertebrobasilar insufficiency symptoms",
        action: "Vascular imaging if 5 D's and 3 N's present"
      }
    ],

    keyResearch: [
      {
        title: "MINT Trial - Management of Whiplash Injuries",
        year: 2021,
        findings: "Comprehensive physiotherapy program reduced chronic pain development by 45%",
        relevance: "Supports intensive early intervention"
      },
      {
        title: "Whiplash Clinical Practice Guidelines",
        year: 2023,
        findings: "Active treatment, education, and addressing psychological factors key to recovery",
        relevance: "Guides evidence-based treatment approach"
      }
    ]
  },

  'frozen-shoulder': {
    pathophysiology: `Adhesive capsulitis involves synovial inflammation followed by progressive fibrosis of the glenohumeral joint capsule. The pathological process shows increased fibroblasts, myofibroblasts, and Type III collagen deposition, similar to Dupuytren's contracture.

The coracohumeral ligament thickens (>4mm) and contracts, limiting external rotation. The rotator interval becomes obliterated with adhesions. Capsular volume reduces from normal 20-30ml to <5ml. Histologically, increased vascularity and nerve fiber proliferation explain the severe pain in early stages.

Three distinct stages occur: Freezing (inflammatory, 2-9 months), Frozen (fibrotic, 4-12 months), and Thawing (resolution, 12-42 months). Cytokines including TGF-β, PDGF, and TNF-α drive the fibrotic process. Association with diabetes suggests metabolic factors - AGE (advanced glycation end-products) accumulation accelerates capsular stiffening.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Progressive loss of active and passive range of motion",
        "External rotation loss >50% (first and most severe)",
        "Severe night pain in freezing stage",
        "Inability to reach behind back or overhead",
        "Pain at end-range of all movements"
      ],
      associatedSymptoms: [
        "Deltoid/upper arm pain referral",
        "Sleep disruption (unable to lie on affected side)",
        "Difficulty with ADLs (dressing, grooming)",
        "Compensatory scapular elevation",
        "Secondary neck and upper back pain"
      ],
      typicalPattern: "Stage 1 (Freezing): Progressive pain, mild stiffness. Stage 2 (Frozen): Pain decreases, marked stiffness. Stage 3 (Thawing): Gradual return of motion. Total duration 12-42 months."
    },

    differentialDiagnosis: [
      {
        condition: "Rotator Cuff Pathology",
        distinguishingFeatures: "Preserved passive ROM, weakness predominates, positive impingement tests, responds to subacromial injection"
      },
      {
        condition: "Glenohumeral Arthritis",
        distinguishingFeatures: "Radiographic changes, crepitus, older age, less severe ROM restriction"
      },
      {
        condition: "Cervical Radiculopathy",
        distinguishingFeatures: "Neck pain primary, neurological symptoms, preserved passive shoulder ROM, positive Spurling's"
      },
      {
        condition: "Parsonage-Turner Syndrome",
        distinguishingFeatures: "Acute severe pain, rapid weakness development, EMG changes, minimal stiffness initially"
      }
    ],

    evidenceBasedTreatment: [
      {
        approach: "Corticosteroid Injection (early stage)",
        evidence: "Intra-articular injection in freezing stage reduces pain by 70% and improves ROM at 6 weeks",
        effectivenessLevel: "strong"
      },
      {
        approach: "Structured Exercise Program",
        evidence: "Progressive stretching and strengthening improves function by 35% more than modalities alone",
        effectivenessLevel: "strong"
      },
      {
        approach: "Manipulation Under Anesthesia",
        evidence: "For refractory cases - 85% achieve functional ROM, risk of fracture 0.3%",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Hydrodilatation",
        evidence: "Capsular distension with saline/steroid improves ROM by 20° and reduces pain in 70%",
        effectivenessLevel: "moderate"
      }
    ],

    prognosis: {
      timeline: "Natural history 1-3 years, average 30 months. With treatment: 90% significant improvement by 12 months",
      factors: [
        "Favorable: Idiopathic type, early intervention, good response to initial injection, high motivation",
        "Unfavorable: Diabetes (2x longer duration), thyroid disease, post-surgical, severe initial restriction",
        "Diabetic patients: 60% chance of bilateral involvement, more resistant to treatment"
      ],
      naturalHistory: "Spontaneous resolution in most cases but with residual deficits - only 60% achieve full ROM without treatment"
    },

    selfManagement: [
      {
        strategy: "Pendulum Exercises",
        rationale: "Uses gravity to provide gentle traction, promotes synovial fluid circulation, pain-free motion",
        precautions: ["Avoid forcing motion", "Small circles initially", "Support trunk to avoid back strain"]
      },
      {
        strategy: "Cross-Body Stretching",
        rationale: "Targets posterior capsule, most effective for improving internal rotation and horizontal adduction",
        precautions: ["Hold 30 seconds minimum", "Gentle sustained pressure", "4-5x daily"]
      },
      {
        strategy: "Heat Before Stretching",
        rationale: "Increases tissue extensibility by 20%, reduces muscle guarding, improves stretch tolerance",
        precautions: ["Moist heat 15-20 minutes", "Check skin integrity if diabetic"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Bilateral frozen shoulder in young patient",
        action: "Screen for systemic conditions (diabetes, thyroid, autoimmune)"
      },
      {
        sign: "Rapid onset with fever",
        action: "Rule out septic arthritis - requires joint aspiration"
      },
      {
        sign: "Associated weight loss or night sweats",
        action: "Investigate for malignancy (Pancoast tumor)"
      }
    ],

    keyResearch: [
      {
        title: "UK FROST Trial",
        year: 2020,
        findings: "Early structured physiotherapy with steroid injection most cost-effective approach",
        relevance: "Supports combined injection and therapy in freezing stage"
      },
      {
        title: "Systematic Review on Diabetes and Frozen Shoulder",
        year: 2022,
        findings: "Prevalence 20% in diabetics vs 2% general population, more resistant to treatment",
        relevance: "Emphasizes need for aggressive early treatment in diabetic patients"
      }
    ]
  },

  'acl-tear': {
    pathophysiology: `The anterior cruciate ligament (ACL) consists of two functional bundles (anteromedial and posterolateral) that provide anterior tibial translation control and rotational stability. Tears occur through excessive loading during pivoting, deceleration, or landing, with 70% being non-contact injuries.

At injury, mechanical failure occurs at approximately 2000N of force. The ligament typically tears mid-substance (75%) or at femoral attachment (20%). Immediate hemarthrosis develops in 70% within 2 hours from vascular disruption. Associated injuries are common: meniscal tears (50%), MCL injury (30%), bone bruises (80% on MRI).

The ACL has poor healing capacity due to limited blood supply and synovial environment preventing clot formation. Without the ACL, the knee experiences increased anterior translation and rotational instability, leading to progressive meniscal and cartilage damage. Risk of osteoarthritis increases 4-6 fold within 10-15 years.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Audible 'pop' at time of injury (70% of cases)",
        "Immediate swelling within 2-4 hours",
        "Inability to continue activity",
        "Sensation of knee 'giving way' with pivoting",
        "Deep knee pain and fullness sensation"
      ],
      associatedSymptoms: [
        "Difficulty with full extension (mechanical block from torn ACL stump)",
        "Quadriceps weakness and atrophy (begins within 72 hours)",
        "Altered gait pattern (quadriceps avoidance)",
        "Posterior knee pain from bone bruising",
        "Recurrent effusions with activity"
      ],
      typicalPattern: "Acute phase (0-2 weeks): Pain, swelling, limited ROM. Subacute (2-6 weeks): Swelling resolves, ROM improves, instability becomes apparent. Chronic: Episodes of giving way, progressive meniscal symptoms."
    },

    differentialDiagnosis: [
      {
        condition: "Meniscal Tear (isolated)",
        distinguishingFeatures: "Slower onset swelling (6-24 hours), mechanical symptoms predominate, stable knee, negative Lachman"
      },
      {
        condition: "PCL Injury",
        distinguishingFeatures: "Dashboard injury mechanism, posterior sag sign, positive posterior drawer, less swelling"
      },
      {
        condition: "Patellar Dislocation",
        distinguishingFeatures: "Medial tenderness, apprehension sign positive, visible patellar maltracking, hemarthrosis with fat globules"
      },
      {
        condition: "MCL Tear",
        distinguishingFeatures: "Valgus mechanism, medial joint line pain, stable in anterior plane, minimal effusion"
      }
    ],

    evidenceBasedTreatment: [
      {
        approach: "ACL Reconstruction (ACLR)",
        evidence: "Return to sport 65% at previous level. Reduces instability episodes by 90%. Secondary meniscal injury risk reduced from 60% to 20%",
        effectivenessLevel: "strong"
      },
      {
        approach: "Conservative Management (Coper Protocol)",
        evidence: "30% of patients function well without surgery. Requires excellent neuromuscular control and compliance",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Pre-operative Rehabilitation",
        evidence: "5 weeks pre-op rehab reduces post-op complications by 30%, improves 2-year outcomes",
        effectivenessLevel: "strong"
      },
      {
        approach: "Blood Flow Restriction Training",
        evidence: "Maintains muscle mass with 30% loading, reduces post-op atrophy by 50%",
        effectivenessLevel: "moderate"
      }
    ],

    prognosis: {
      timeline: "Surgical: Return to sport 9-12 months (only 65% achieve pre-injury level). Conservative: 3-6 months for daily activities",
      factors: [
        "Favorable: Isolated ACL, no meniscal damage, high pre-injury fitness, age 25-35, good neuromuscular control",
        "Unfavorable: Associated meniscectomy, chondral damage, age <20 (re-tear risk 20%), poor compliance",
        "Graft re-rupture risk: 6% overall, 15% if return to cutting sports, 20% if age <20"
      ],
      naturalHistory: "Without treatment: Progressive instability, meniscal tears in 60% by 5 years, OA in 50% by 10-15 years"
    },

    selfManagement: [
      {
        strategy: "Immediate PEACE & LOVE Protocol",
        rationale: "Optimizes healing environment, reduces secondary damage. Protection, Elevation, Avoid anti-inflammatories, Compression, Education",
        precautions: ["Avoid NSAIDs first 48 hours", "Weight bearing as tolerated with crutches"]
      },
      {
        strategy: "Early Quadriceps Activation",
        rationale: "Prevents arthrogenic muscle inhibition, maintains extension. Quad sets reduce atrophy by 40%",
        precautions: ["Start within 24 hours", "Electrical stimulation if voluntary activation <90%"]
      },
      {
        strategy: "Proprioceptive Training",
        rationale: "Compensates for lost mechanoreceptors, reduces re-injury risk by 50%",
        precautions: ["Progress from double to single leg", "Add perturbations gradually"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Locked knee with inability to extend",
        action: "MRI to assess for bucket-handle meniscal tear requiring urgent surgery"
      },
      {
        sign: "Multi-ligament injury signs",
        action: "Assess vascular status, may require urgent surgical stabilization"
      },
      {
        sign: "Persistent effusion despite rest",
        action: "Aspiration to rule out infection or inflammatory arthropathy"
      }
    ],

    keyResearch: [
      {
        title: "MOON Cohort Study",
        year: 2022,
        findings: "10-year outcomes: ACLR doesn't prevent OA (37% radiographic changes) but improves function",
        relevance: "Informs realistic expectations about long-term outcomes"
      },
      {
        title: "KANON Trial",
        year: 2021,
        findings: "Optional delayed reconstruction strategy equivalent to immediate surgery at 5 years",
        relevance: "Supports trial of conservative management in selected patients"
      }
    ]
  },

  'disc-herniation': {
    pathophysiology: `Intervertebral disc herniation involves displacement of nucleus pulposus through tears in the annulus fibrosus. The process typically begins with repetitive microtrauma causing radial fissures in the posterior annulus. Progressive nuclear migration occurs through these fissures, eventually breaching the outer annulus.

The herniated material contains inflammatory mediators including phospholipase A2, TNF-α, and matrix metalloproteinases. These chemicals irritate nerve roots even without mechanical compression, explaining why large herniations sometimes cause less pain than smaller, more inflammatory ones.

Mechanical compression leads to nerve root ischemia, intraneural edema, and demyelination. The dorsal root ganglion is particularly vulnerable, developing ectopic discharge patterns that contribute to neuropathic pain. Central sensitization develops within weeks, with increased spinal cord excitability and descending facilitation.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Radicular pain following specific dermatomal distribution",
        "Pain worse with flexion, sitting, and Valsalva maneuvers",
        "Numbness or paresthesias in dermatomal pattern",
        "Weakness in specific myotome (L4: ankle dorsiflexion, L5: big toe extension, S1: plantarflexion)",
        "Positive straight leg raise (sensitivity 91%, specificity 26%)"
      ],
      associatedSymptoms: [
        "Antalgic posture (lateral shift in 50%)",
        "Muscle cramping in affected leg",
        "Gait abnormalities (foot drop with L4-5)",
        "Reflex changes (diminished or absent)",
        "Cold sensation or color changes in affected limb"
      ],
      typicalPattern: "Initial back pain with bending/lifting, followed by leg pain predominance as inflammation develops. Morning stiffness, better with walking, worse with prolonged sitting. Natural history shows improvement in 70% by 6 weeks."
    },

    differentialDiagnosis: [
      {
        condition: "Spinal Stenosis",
        distinguishingFeatures: "Older age (>60), bilateral symptoms, neurogenic claudication, better with flexion, negative SLR"
      },
      {
        condition: "Piriformis Syndrome",
        distinguishingFeatures: "Buttock pain predominates, negative MRI, positive FAIR test, no reflex changes"
      },
      {
        condition: "Sacroiliac Joint Dysfunction",
        distinguishingFeatures: "Pain doesn't extend below knee, positive SI provocation tests, no neurological findings"
      },
      {
        condition: "Peripheral Neuropathy",
        distinguishingFeatures: "Stocking-glove distribution, bilateral, systemic disease (diabetes), no back pain"
      }
    ],

    evidenceBasedTreatment: [
      {
        approach: "McKenzie Method (Directional Preference)",
        evidence: "Centralization occurs in 70% - predicts good outcome. 87% avoid surgery when centralization achieved",
        effectivenessLevel: "strong"
      },
      {
        approach: "Epidural Steroid Injection",
        evidence: "Short-term relief (<3 months) in 75%, allows participation in active rehabilitation. NNT=4 for >50% pain relief",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Neural Mobilization",
        evidence: "Reduces adherions, improves neural gliding. Combined with exercise shows 40% better outcomes than exercise alone",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Microdiscectomy (when indicated)",
        evidence: "90% good/excellent results for leg pain. Faster relief than conservative care but similar 2-year outcomes",
        effectivenessLevel: "strong"
      }
    ],

    prognosis: {
      timeline: "Favorable prognosis: 50% improve within 2 weeks, 70% by 6 weeks, 90% by 3 months with conservative care",
      factors: [
        "Favorable: Centralization with movements, minimal neurological deficit, MRI showing disc resorption, early treatment",
        "Unfavorable: Progressive neurological deficit, sequestered fragment, workers compensation, psychological distress",
        "Disc resorption occurs in 66% of herniations within 6 months - larger herniations more likely to resorb"
      ],
      naturalHistory: "Natural resorption through phagocytosis and dehydration. Only 10% require surgery. Recurrence rate 5-10% at same level"
    },

    selfManagement: [
      {
        strategy: "Directional Preference Exercises",
        rationale: "Promotes nuclear centralization, reduces peripheral symptoms. Extension typically preferred for posterolateral herniations",
        precautions: ["Stop if peripheralization occurs", "Perform hourly in acute phase"]
      },
      {
        strategy: "Neural Gliding",
        rationale: "Prevents nerve root adhesions, improves blood flow, reduces mechanosensitivity",
        precautions: ["Gentle movement only", "Should not reproduce symptoms", "Progress gradually"]
      },
      {
        strategy: "Core Stabilization",
        rationale: "Reduces intradiscal pressure by 30%, improves load distribution. McGill exercises safe and effective",
        precautions: ["Maintain neutral spine", "Avoid end-range flexion", "Progress based on symptoms"]
      },
      {
        strategy: "Anti-inflammatory Protocol",
        rationale: "Reduces chemical irritation of nerve root. Combines nutrition, movement, and stress management",
        precautions: ["Consult physician for medication", "Avoid prolonged bedrest"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Cauda equina syndrome (saddle anesthesia, bladder/bowel dysfunction)",
        action: "Emergency surgery within 24-48 hours for optimal outcomes"
      },
      {
        sign: "Progressive motor weakness (<3/5 strength)",
        action: "Urgent surgical consultation within 1 week"
      },
      {
        sign: "Bilateral radicular symptoms",
        action: "MRI to assess for central disc herniation or other pathology"
      }
    ],

    keyResearch: [
      {
        title: "Leiden-Hague Spine Intervention Study",
        year: 2022,
        findings: "Surgery provides faster relief but similar 1-year outcomes to conservative care for radiculopathy",
        relevance: "Supports conservative management as first-line treatment for most cases"
      },
      {
        title: "Systematic Review on Disc Resorption",
        year: 2023,
        findings: "Probability of spontaneous resorption: 96% for sequestered, 70% for extruded, 41% for protruded",
        relevance: "Larger herniations paradoxically have better natural history"
      }
    ]
  }
};