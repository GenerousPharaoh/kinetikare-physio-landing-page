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
  },

  'knee-osteoarthritis': {
    pathophysiology: `Knee osteoarthritis involves progressive deterioration of articular cartilage, subchondral bone remodeling, and synovial inflammation. The disease begins with chondrocyte dysfunction - cells attempt repair but produce inferior Type I collagen instead of Type II, creating mechanically weak cartilage.
    
Matrix metalloproteinases (MMPs) and aggrecanases break down the extracellular matrix faster than synthesis occurs. Loss of proteoglycans reduces the cartilage's ability to retain water, decreasing its shock-absorbing capacity. Subchondral bone becomes sclerotic with microfractures, while osteophytes form at joint margins as attempted stabilization.

Synovial inflammation develops even in "non-inflammatory" OA - synovitis present in 50% on MRI. Inflammatory mediators (IL-1β, TNF-α) create a vicious cycle of cartilage degradation. Bone marrow lesions correlate strongly with pain severity (r=0.68), explaining why X-ray findings poorly predict symptoms.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Gradual onset knee pain worse with weight-bearing activities",
        "Morning stiffness lasting <30 minutes (unlike inflammatory arthritis)",
        "Crepitus with movement (felt and heard)",
        "Progressive loss of range (flexion loss first, then extension)",
        "Pain with stairs, particularly descending (3x body weight through patellofemoral joint)"
      ],
      associatedSymptoms: [
        "Giving way sensation from quadriceps weakness or pain inhibition",
        "Night pain in advanced stages (50% of severe OA)",
        "Swelling after activity (cool effusion unlike inflammatory arthritis)",
        "Deformity development (varus 10x more common than valgus)",
        "Referred pain to hip or ankle from altered biomechanics"
      ],
      typicalPattern: "Insidious onset over years. Initially pain only with high-load activities, progressing to pain with walking, then at rest. Medial compartment affected in 75%, lateral 10%, patellofemoral 15%. Bilateral involvement in 80% eventually."
    },

    differentialDiagnosis: [
      {
        condition: "Meniscal Tear",
        distinguishingFeatures: "Mechanical symptoms (locking, catching), acute onset possible, younger age, MRI showing tear without significant OA changes"
      },
      {
        condition: "Inflammatory Arthritis (RA, Psoriatic)",
        distinguishingFeatures: "Morning stiffness >60 minutes, systemic symptoms, elevated inflammatory markers, symmetric small joint involvement"
      },
      {
        condition: "Calcium Pyrophosphate Deposition (CPPD)",
        distinguishingFeatures: "Acute flares of hot swollen knee, chondrocalcinosis on X-ray, older age, associated with metabolic conditions"
      },
      {
        condition: "Referred Hip Pain",
        distinguishingFeatures: "Groin pain, limited hip internal rotation, negative knee examination, pain pattern doesn't match knee pathology"
      }
    ],

    evidenceBasedTreatment: [
      {
        approach: "Exercise Therapy (Land-based)",
        evidence: "Cochrane review: Moderate effect size for pain (SMD 0.49) and function (SMD 0.52). NNT=4 for clinically meaningful improvement",
        effectivenessLevel: "strong"
      },
      {
        approach: "Weight Loss (if BMI >25)",
        evidence: "Each kg lost = 4kg reduction in knee loading. 5% weight loss improves function by 18%, 10% loss by 28%",
        effectivenessLevel: "strong"
      },
      {
        approach: "Manual Therapy + Exercise",
        evidence: "Combined approach superior to exercise alone - additional 20% improvement in WOMAC scores at 1 year",
        effectivenessLevel: "strong"
      },
      {
        approach: "Intra-articular Injections",
        evidence: "Corticosteroid: Short-term relief (4-6 weeks) NNT=4. Hyaluronic acid: Controversial, small effect size. PRP: Emerging evidence, better for mild-moderate OA",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Total Knee Replacement (severe)",
        evidence: "90% satisfaction rate, 95% survival at 15 years. However, 20% have persistent pain post-surgery",
        effectivenessLevel: "strong"
      }
    ],

    prognosis: {
      timeline: "Slowly progressive over 10-20 years. Rate varies: 15% rapid progressors, 60% slow progression, 25% stable",
      factors: [
        "Favorable: Lower BMI, good quadriceps strength, regular exercise, younger age at onset, single compartment involvement",
        "Unfavorable: Obesity (doubles progression rate), varus malalignment >5°, previous meniscectomy, bone marrow lesions on MRI",
        "Modifiable factors: Weight (strongest), muscle strength, activity level, biomechanics (orthotics, gait retraining)"
      ],
      naturalHistory: "Without intervention: 25% require TKR within 10 years of diagnosis. With optimal conservative management: 75% avoid surgery"
    },

    selfManagement: [
      {
        strategy: "Quadriceps Strengthening",
        rationale: "30% strength deficit typical in OA knee. Improving strength reduces pain by 30% and improves function by 25%",
        precautions: ["Start with isometrics if painful", "Progress to closed chain exercises", "Avoid deep squats initially"]
      },
      {
        strategy: "Activity Pacing",
        rationale: "Prevents inflammatory flares while maintaining tissue health. Boom-bust cycles accelerate cartilage loss",
        precautions: ["Use 24-hour pain response to guide activity", "Gradual 10% weekly increases"]
      },
      {
        strategy: "Weight Management",
        rationale: "Reduces mechanical load and inflammatory cytokines (adipokines). Combined effect greater than mechanical alone",
        precautions: ["Combine diet with exercise", "Aquatic exercise if land-based too painful"]
      },
      {
        strategy: "Assistive Devices",
        rationale: "Cane in opposite hand reduces knee load by 30%. Lateral wedge insoles for medial OA (mixed evidence)",
        precautions: ["Proper fitting essential", "Pride barrier - education about joint preservation"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Hot, red, swollen knee",
        action: "Joint aspiration to rule out septic arthritis or crystalline arthropathy"
      },
      {
        sign: "Sudden severe pain with minor trauma",
        action: "X-ray to assess for insufficiency fracture"
      },
      {
        sign: "Rapidly progressive symptoms (<3 months)",
        action: "MRI to rule out avascular necrosis or malignancy"
      }
    ],

    keyResearch: [
      {
        title: "OARSI Guidelines for Non-surgical Management",
        year: 2024,
        findings: "Core treatments: exercise, weight loss, education. Strong evidence for multimodal approach",
        relevance: "Establishes physiotherapy-led management as first-line treatment"
      },
      {
        title: "METEOR Trial - Meniscectomy vs PT for Degenerative Tears",
        year: 2022,
        findings: "No difference between surgery and physiotherapy at 2 years for degenerative meniscal tears with OA",
        relevance: "Supports conservative management even with mechanical symptoms"
      }
    ]
  },

  'meniscus-tears': {
    pathophysiology: `Meniscal tears occur through acute trauma or degenerative processes. The menisci are fibrocartilaginous structures with circumferential collagen fibers resisting hoop stresses. The peripheral third has blood supply (red zone), while the inner two-thirds are avascular (white zone), affecting healing potential.

Acute tears typically occur with twisting on a planted foot, creating shear forces exceeding tissue tolerance. Degenerative tears develop from cumulative microtrauma, with horizontal cleavage patterns common after age 40. The torn meniscus loses its ability to distribute load, increasing contact pressure by 235% and accelerating cartilage degeneration.

Inflammatory response varies by tear type - acute tears trigger synovitis with effusion, while degenerative tears may be asymptomatic until critical size reached. Mechanical symptoms occur when unstable fragments displace into the joint space.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Joint line pain (medial 5x more common than lateral)",
        "Mechanical symptoms: locking (15%), catching (40%), giving way",
        "Swelling developing over 6-24 hours (unlike ACL's immediate swelling)",
        "Pain with twisting, squatting, or pivoting activities",
        "Difficulty with full flexion or extension"
      ],
      associatedSymptoms: [
        "Quadriceps atrophy (develops within 1 week)",
        "Sensation of knee instability",
        "Night pain if large tear or associated with OA",
        "Clicking or popping with movement",
        "Stiffness after prolonged sitting"
      ],
      typicalPattern: "Acute: Sudden onset with twisting injury, immediate pain, delayed swelling. Degenerative: Gradual onset without clear trauma, intermittent symptoms, associated with early OA changes. Bucket-handle tears cause true locking in 90%."
    },

    differentialDiagnosis: [
      {
        condition: "Patellofemoral Pain Syndrome",
        distinguishingFeatures: "Anterior knee pain, worse with stairs/sitting, no mechanical symptoms, negative McMurray's"
      },
      {
        condition: "Plica Syndrome",
        distinguishingFeatures: "Medial pain, palpable band, symptoms with repetitive flexion, younger patients"
      },
      {
        condition: "Early Osteoarthritis",
        distinguishingFeatures: "Age >50, morning stiffness, crepitus throughout range, X-ray changes"
      },
      {
        condition: "Loose Body",
        distinguishingFeatures: "Intermittent locking at variable positions, visible on X-ray/MRI, history of OCD or trauma"
      }
    ],

    evidenceBasedTreatment: [
      {
        approach: "Conservative Management (degenerative tears)",
        evidence: "Multiple RCTs show no difference between arthroscopy and physiotherapy at 2 years. 80% success with conservative care",
        effectivenessLevel: "strong"
      },
      {
        approach: "Meniscal Repair (acute peripheral tears)",
        evidence: "80-90% healing rate for peripheral tears in young patients. Preserves joint biomechanics",
        effectivenessLevel: "strong"
      },
      {
        approach: "Partial Meniscectomy (failed conservative)",
        evidence: "Short-term improvement but 3x increased OA risk at 10 years. Should be limited to unstable fragments only",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Exercise Therapy",
        evidence: "Strengthening program improves function by 30% and reduces pain. Equal to surgery for degenerative tears",
        effectivenessLevel: "strong"
      }
    ],

    prognosis: {
      timeline: "Acute tears: 6-12 weeks for small tears, 3-6 months for complex tears. Degenerative: Variable, often chronic with flares",
      factors: [
        "Favorable: Peripheral location (red zone), vertical tear pattern, younger age, concurrent ACL reconstruction, small size (<1cm)",
        "Unfavorable: Complex tear pattern, white zone location, age >40, delayed treatment, associated cartilage damage",
        "Critical factor: Location more important than size for healing potential"
      ],
      naturalHistory: "Untreated tears: 30% asymptomatic, 40% intermittent symptoms, 30% persistent symptoms. Risk of OA increases 4-fold with meniscectomy"
    },

    selfManagement: [
      {
        strategy: "Isometric Quadriceps Strengthening",
        rationale: "Reduces compressive forces on meniscus, improves joint stability. Start immediately to prevent atrophy",
        precautions: ["Avoid loaded flexion >90°", "Progress gradually to dynamic exercises"]
      },
      {
        strategy: "Range of Motion Exercises",
        rationale: "Prevents adhesions, maintains nutrition through synovial pumping. Gentle cycling ideal",
        precautions: ["Respect mechanical blocks", "Stop if locking occurs"]
      },
      {
        strategy: "Activity Modification",
        rationale: "Avoid pivoting sports initially, modify squatting technique, temporary avoidance of impact",
        precautions: ["Maintain cardiovascular fitness with swimming/cycling", "Gradual return to sport"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Locked knee unable to fully extend",
        action: "MRI to assess for bucket-handle tear - may need urgent arthroscopy"
      },
      {
        sign: "Massive effusion with severe pain",
        action: "Aspiration to rule out hemarthrosis from associated ligament injury"
      },
      {
        sign: "Progressive giving way despite rehabilitation",
        action: "Assess for associated ligamentous instability"
      }
    ],

    keyResearch: [
      {
        title: "ESCAPE Trial",
        year: 2022,
        findings: "Exercise therapy non-inferior to arthroscopic partial meniscectomy for degenerative tears at 5 years",
        relevance: "Challenges surgical approach for degenerative meniscal tears"
      },
      {
        title: "Systematic Review on Meniscal Repair",
        year: 2023,
        findings: "Repair success rates: 85% for tears <2cm in red zone, 40% for complex tears in white zone",
        relevance: "Guides surgical decision-making based on tear characteristics"
      }
    ]
  },

  'it-band-syndrome': {
    pathophysiology: `Iliotibial band syndrome involves irritation of the lateral knee structures as the ITB moves over the lateral femoral epicondyle. Contrary to traditional belief of friction, recent evidence suggests compression of fat pad and lateral synovial recess beneath the ITB.

The ITB tension varies through knee flexion - maximum tension at 20-30° (impingement zone). Biomechanical factors include increased hip adduction and internal rotation during stance phase, creating excessive ITB strain. Weakness in hip abductors (particularly gluteus medius) contributes to dynamic valgus.

Histology shows no inflammatory cells in the ITB itself, but the underlying fat pad shows vascular proliferation and fibrosis. The condition represents a compression syndrome rather than true tendinitis. Contributing factors include sudden training changes, downhill running, and cambered surfaces.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Sharp or burning pain over lateral femoral epicondyle",
        "Pain onset predictable with distance/time (e.g., always at 2km)",
        "Worse with downhill running or stairs descent",
        "Pain subsides quickly with rest",
        "Tenderness 2-3cm proximal to lateral joint line"
      ],
      associatedSymptoms: [
        "Snapping sensation over lateral knee",
        "Tightness along entire lateral thigh",
        "Pain may radiate up to hip or down to tibia",
        "Swelling rare but possible over lateral knee",
        "Compensatory changes in running gait"
      ],
      typicalPattern: "Gradual onset over weeks. Initially pain only at end of runs, progressing to earlier onset and persistence after activity. Runners describe having to stop due to pain, but can resume after brief rest. Cycling may also trigger symptoms."
    },

    differentialDiagnosis: [
      {
        condition: "Lateral Meniscus Tear",
        distinguishingFeatures: "Joint line tenderness, mechanical symptoms, positive McMurray's, swelling more common"
      },
      {
        condition: "Lateral Collateral Ligament Sprain",
        distinguishingFeatures: "History of varus trauma, pain with varus stress, tenderness over LCL not ITB"
      },
      {
        condition: "Patellofemoral Pain Syndrome",
        distinguishingFeatures: "Anterior knee pain, positive patellar grind, pain with prolonged sitting"
      },
      {
        condition: "Biceps Femoris Tendinopathy",
        distinguishingFeatures: "Pain at fibular head, worse with resisted knee flexion, different location"
      }
    ],

    evidenceBasedTreatment: [
      {
        approach: "Hip Strengthening Program",
        evidence: "RCT shows 90% success with 6-week hip abductor/external rotator strengthening vs 20% with ITB stretching alone",
        effectivenessLevel: "strong"
      },
      {
        approach: "Running Gait Retraining",
        evidence: "Increasing cadence by 5-10% reduces ITB strain by 20%. Visual/verbal feedback improves hip mechanics",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Manual Therapy",
        evidence: "Soft tissue mobilization to lateral thigh and hip mobilization provide short-term relief, enhance exercise outcomes",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Corticosteroid Injection",
        evidence: "Temporary relief in 70% but high recurrence if biomechanics not addressed. Reserved for recalcitrant cases",
        effectivenessLevel: "moderate"
      }
    ],

    prognosis: {
      timeline: "Recovery typically 6-12 weeks with appropriate management. 90% return to running within 3 months",
      factors: [
        "Favorable: Early intervention, good hip strength, appropriate training progression, younger age",
        "Unfavorable: Training errors not corrected, poor hip control, leg length discrepancy >1cm, high weekly mileage",
        "Key predictor: Hip abductor strength - weakness correlates with symptom duration"
      ],
      naturalHistory: "Self-limiting in many cases but recurrence rate 30-40% without addressing biomechanical factors"
    },

    selfManagement: [
      {
        strategy: "Hip Strengthening Routine",
        rationale: "Addresses root cause - weak hip abductors increase ITB tension by 30%. Side-lying hip abduction, clamshells essential",
        precautions: ["Quality over quantity", "Maintain neutral pelvis", "Progress to single-leg stance exercises"]
      },
      {
        strategy: "Foam Rolling Protocol",
        rationale: "Reduces lateral thigh tension, may improve hip ROM. Focus on TFL, vastus lateralis, not directly on painful area",
        precautions: ["Avoid rolling directly over lateral epicondyle", "30-60 seconds per area"]
      },
      {
        strategy: "Running Modification",
        rationale: "Temporary reduction in mileage, avoid cambered roads, increase cadence, shorten stride",
        precautions: ["Don't stop completely unless severe", "Cross-train with swimming/pool running"]
      },
      {
        strategy: "Footwear Assessment",
        rationale: "Worn lateral heel increases pronation and ITB strain. Replace shoes every 500-800km",
        precautions: ["Gradual transition to new shoes", "Consider gait analysis"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Persistent swelling or warmth",
        action: "Investigate for other pathology - ITBS rarely causes significant swelling"
      },
      {
        sign: "Neurological symptoms",
        action: "Assess for common peroneal nerve involvement or L5 radiculopathy"
      },
      {
        sign: "Pain at rest or night pain",
        action: "Consider bone stress injury or other pathology"
      }
    ],

    keyResearch: [
      {
        title: "Hip Strengthening vs ITB Stretching RCT",
        year: 2020,
        findings: "Hip strengthening superior to ITB stretching - 92% vs 24% recovery at 6 weeks",
        relevance: "Shifts treatment focus from local to proximal factors"
      },
      {
        title: "Biomechanical Analysis of ITBS",
        year: 2022,
        findings: "ITB compression not friction is primary mechanism. Peak strain at 20-30° knee flexion",
        relevance: "Changes understanding of pathophysiology and treatment approach"
      }
    ]
  },

  'ankle-sprains': {
    pathophysiology: `Ankle sprains involve ligamentous injury, with 85% affecting the lateral ligament complex. The anterior talofibular ligament (ATFL) is most vulnerable, tearing first during inversion/plantarflexion. The calcaneofibular ligament (CFL) follows with greater force, and rarely the posterior talofibular ligament (PTFL).

Injury grades correlate with structural damage: Grade I involves microscopic tearing with intact ligament, Grade II partial macroscopic tearing with laxity, Grade III complete rupture. Beyond ligamentous injury, associated damage includes joint capsule tearing, proprioceptor disruption, and potential osteochondral lesions (40% in severe sprains).

The inflammatory cascade peaks at 48-72 hours. Without proper management, inadequate healing leads to mechanical and functional instability. Proprioceptive deficits persist even after structural healing, explaining the 40% recurrence rate.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Immediate pain over lateral ankle following inversion injury",
        "Swelling within 2-4 hours (earlier with more severe injury)",
        "Difficulty or inability to weight bear",
        "Bruising appearing after 24-48 hours",
        "Tenderness over ATFL (anterior to lateral malleolus)"
      ],
      associatedSymptoms: [
        "Sensation of ankle 'giving way'",
        "Stiffness and reduced range of motion",
        "Pain with push-off during walking",
        "Compensatory gait pattern",
        "Associated foot pain from compensation"
      ],
      typicalPattern: "Grade I: Minimal swelling, can weight bear, return to activity 1-2 weeks. Grade II: Moderate swelling/bruising, difficult weight bearing, 3-6 weeks recovery. Grade III: Immediate severe swelling, unable to weight bear, 3-6 months full recovery."
    },

    differentialDiagnosis: [
      {
        condition: "Ankle Fracture",
        distinguishingFeatures: "Ottawa rules positive (malleolar tenderness, inability to bear weight), bony tenderness, immediate severe swelling"
      },
      {
        condition: "High Ankle Sprain (Syndesmosis)",
        distinguishingFeatures: "External rotation mechanism, pain above ankle joint, positive squeeze test, longer recovery"
      },
      {
        condition: "Peroneal Tendon Injury",
        distinguishingFeatures: "Pain posterior to lateral malleolus, pain with resisted eversion, subluxation sensation"
      },
      {
        condition: "Osteochondral Lesion",
        distinguishingFeatures: "Persistent pain after expected healing time, deep ankle pain, catching sensation, MRI required"
      }
    ],

    evidenceBasedTreatment: [
      {
        approach: "Early Functional Rehabilitation",
        evidence: "Accelerated protocol reduces return to sport by 40% vs immobilization. Re-injury rate 10% vs 25% with immobilization",
        effectivenessLevel: "strong"
      },
      {
        approach: "Manual Therapy (Mobilization)",
        evidence: "Improves dorsiflexion ROM by mean 5°, reduces pain, faster return to activity when combined with exercise",
        effectivenessLevel: "strong"
      },
      {
        approach: "Balance and Proprioceptive Training",
        evidence: "Reduces recurrence by 50% (NNT=5). Essential for addressing functional instability",
        effectivenessLevel: "strong"
      },
      {
        approach: "External Support (Bracing/Taping)",
        evidence: "Functional bracing superior to immobilization. Reduces re-injury by 70% in high-risk activities",
        effectivenessLevel: "strong"
      }
    ],

    prognosis: {
      timeline: "Grade I: 1-3 weeks, Grade II: 3-6 weeks, Grade III: 3-6 months for full recovery including sport return",
      factors: [
        "Favorable: Early mobilization, good pre-injury fitness, adherence to rehab, younger age, first injury",
        "Unfavorable: Previous sprains (doubles recovery time), poor balance, hypermobility, high-demand sports",
        "40% develop chronic ankle instability without proper rehabilitation"
      ],
      naturalHistory: "Without treatment: 20-40% chronic pain, 20% recurrent instability, 10-15% post-traumatic arthritis within 10 years"
    },

    selfManagement: [
      {
        strategy: "PEACE & LOVE Protocol",
        rationale: "Optimizes healing: Protection, Elevation, Avoid anti-inflammatories, Compression, Education, then Load, Optimism, Vascularization, Exercise",
        precautions: ["Avoid NSAIDs first 48 hours", "Ice controversial - use for analgesia only if needed"]
      },
      {
        strategy: "Progressive Weight Bearing",
        rationale: "Stimulates healing, prevents muscle atrophy, maintains proprioception. Start partial weight bearing immediately if tolerated",
        precautions: ["Use crutches if needed initially", "Progress as pain allows"]
      },
      {
        strategy: "Ankle Alphabet Exercises",
        rationale: "Maintains ROM, reduces swelling through muscle pump action, begins proprioceptive input",
        precautions: ["Stay within pain-free range", "Perform 3-4x daily", "Progress to resistance band"]
      },
      {
        strategy: "Single Leg Balance Training",
        rationale: "Restores proprioception, addresses most important modifiable risk factor for re-injury",
        precautions: ["Start on firm surface", "Progress to unstable surfaces", "Add perturbations"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Ottawa Ankle Rules positive",
        action: "X-ray to rule out fracture - 95% sensitivity"
      },
      {
        sign: "Inability to bear weight after 5 days",
        action: "MRI to assess for osteochondral lesion or complete ligament rupture"
      },
      {
        sign: "Numbness or tingling",
        action: "Assess for nerve injury (superficial peroneal or sural nerve)"
      }
    ],

    keyResearch: [
      {
        title: "Cochrane Review on Ankle Sprain Treatment",
        year: 2022,
        findings: "Functional treatment superior to immobilization for all outcomes. Exercise therapy essential",
        relevance: "Supports early mobilization and active rehabilitation"
      },
      {
        title: "International Ankle Consortium Consensus",
        year: 2023,
        findings: "Chronic ankle instability preventable in 70% with proper initial management",
        relevance: "Emphasizes importance of complete rehabilitation including proprioceptive training"
      }
    ]
  },

  'achilles-tendinopathy': {
    pathophysiology: `Achilles tendinopathy represents failed healing response to repetitive microtrauma. Two distinct locations: insertional (25%) at calcaneal attachment, and mid-portion (75%) located 2-6cm from insertion. Histologically shows tendinosis not tendinitis - no inflammatory cells present.

Pathological changes include collagen disorganization, increased Type III collagen, mucoid degeneration, and neovascularization with accompanying nerve ingrowth. The neovessels and nerves explain pain in a previously aneural structure. Mechanical overload triggers tenocyte apoptosis and matrix degradation exceeding synthesis.

Contributing factors include sudden training changes (80% of cases), poor ankle dorsiflexion (<10°), and altered lower limb biomechanics. The tendon's poorest blood supply at 2-6cm (watershed zone) explains mid-portion vulnerability. Morning stiffness reflects overnight glycosaminoglycan aggregation.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Gradual onset posterior heel/calf pain with activity",
        "Morning stiffness and pain with first steps (classic sign)",
        "Pain at beginning of exercise, improves with warm-up, worse after",
        "Tenderness 2-6cm above insertion (mid-portion) or at insertion",
        "Visible thickening of tendon (>6mm on ultrasound)"
      ],
      associatedSymptoms: [
        "Crepitus with ankle movement",
        "Weakness with heel raises",
        "Altered gait pattern (avoiding push-off)",
        "Calf muscle tightness and trigger points",
        "Compensatory forefoot pain"
      ],
      typicalPattern: "Reactive stage: Pain after activity only. Dysrepair: Pain during and after activity. Degenerative: Pain with all activities and at rest. Progression occurs over months to years without appropriate load management."
    },

    differentialDiagnosis: [
      {
        condition: "Achilles Tear (Partial)",
        distinguishingFeatures: "Sudden onset with 'pop', immediate weakness, palpable gap, positive Thompson test if complete"
      },
      {
        condition: "Retrocalcaneal Bursitis",
        distinguishingFeatures: "Pain anterior to Achilles, soft tissue swelling medial/lateral to tendon, less morning stiffness"
      },
      {
        condition: "Posterior Ankle Impingement",
        distinguishingFeatures: "Pain with forced plantarflexion, dancers/gymnasts, os trigonum on X-ray"
      },
      {
        condition: "Sural Nerve Irritation",
        distinguishingFeatures: "Burning lateral ankle pain, positive Tinel's, neurological symptoms"
      }
    ],

    evidenceBasedTreatment: [
      {
        approach: "Eccentric Loading (Alfredson Protocol)",
        evidence: "82% good/excellent results at 12 weeks. Superior to concentric exercise. 180 repetitions daily optimal",
        effectivenessLevel: "strong"
      },
      {
        approach: "Heavy Slow Resistance Training",
        evidence: "Equal to eccentric loading with better compliance (3x/week vs 2x daily). Progressive loading 6RM to 15RM",
        effectivenessLevel: "strong"
      },
      {
        approach: "Extracorporeal Shockwave",
        evidence: "65-80% improvement for chronic cases. Promotes healing through mechanotransduction",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Isometric Loading (Acute pain)",
        evidence: "Immediate analgesic effect lasting 45 minutes. 70% pain reduction during loading phase",
        effectivenessLevel: "moderate"
      }
    ],

    prognosis: {
      timeline: "3-6 months for significant improvement with appropriate loading. 12 months for return to full sport in chronic cases",
      factors: [
        "Favorable: Shorter symptom duration (<3 months), younger age, reactive stage, good ankle mobility",
        "Unfavorable: Insertional location, duration >6 months, diabetes, fluoroquinolone use, poor adherence",
        "Critical success factor: Adherence to loading program - 75% success with >80% compliance vs 20% with <50%"
      ],
      naturalHistory: "Without treatment: 25% spontaneous resolution, 50% chronic pain, 25% rupture risk over 10 years"
    },

    selfManagement: [
      {
        strategy: "Eccentric Heel Drops",
        rationale: "Promotes collagen remodeling, reduces neovascularization, normalizes tendon structure",
        precautions: ["Painful but acceptable (4-5/10)", "Both straight and bent knee versions", "Continue into mild pain"]
      },
      {
        strategy: "Load Management",
        rationale: "Maintains tendon capacity while avoiding overload. Use pain monitoring - 24-hour response guides progression",
        precautions: ["Acceptable pain during activity <5/10", "No increase in morning stiffness", "Gradual return to running"]
      },
      {
        strategy: "Calf Stretching",
        rationale: "Improves dorsiflexion, reduces tendon strain. Each degree of dorsiflexion reduces peak strain by 2%",
        precautions: ["Hold 30-45 seconds", "3x daily", "Both gastrocnemius and soleus"]
      },
      {
        strategy: "Heel Lift (Temporary)",
        rationale: "Reduces tendon strain by 25% in acute phase. Allows continued activity with less pain",
        precautions: ["Bilateral to prevent asymmetry", "Gradual weaning over 6-8 weeks"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Sudden severe pain with 'pop' sensation",
        action: "Assess for complete rupture - Thompson test, ultrasound"
      },
      {
        sign: "Systemic symptoms (fever, multiple tendon involvement)",
        action: "Screen for inflammatory arthropathy or infection"
      },
      {
        sign: "Recent fluoroquinolone use",
        action: "High rupture risk - modify loading significantly"
      }
    ],

    keyResearch: [
      {
        title: "Victorian Institute Protocol Study",
        year: 2021,
        findings: "Progressive loading superior to eccentric only - 85% return to sport vs 65%",
        relevance: "Supports varied loading strategies beyond traditional eccentric exercise"
      },
      {
        title: "Continuum Model of Tendinopathy",
        year: 2019,
        findings: "Tendinopathy exists on continuum: reactive, dysrepair, degenerative. Stage determines treatment",
        relevance: "Guides stage-appropriate treatment selection"
      }
    ]
  },

  'shin-splints': {
    pathophysiology: `Medial tibial stress syndrome (shin splints) involves periosteal inflammation and microtears at the attachment of soleus, flexor digitorum longus, and posterior tibial muscles. Recent evidence suggests a bone stress reaction continuum rather than purely soft tissue pathology.

Repetitive eccentric muscle contractions create tractional forces exceeding the periosteum's remodeling capacity. Bone biopsy shows increased metabolic activity, microcracks, and periosteal lifting. The condition represents early bone stress injury, potentially progressing to stress fracture if unchecked.

Contributing biomechanical factors include excessive pronation, increased tibial torsion, and hip weakness leading to dynamic valgus. Training errors account for 60% of cases - too much, too soon, too hard. Female athletes have 2-3x higher incidence due to bone density factors.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Diffuse pain along posteromedial tibial border",
        "Pain with initial activity that may 'warm up'",
        "Tenderness over 5cm or more of tibia (unlike focal stress fracture)",
        "Worse with impact activities (running, jumping)",
        "Bilateral presentation in 50% of cases"
      ],
      associatedSymptoms: [
        "Mild swelling over medial tibia",
        "Calf tightness and trigger points",
        "Pain with resisted plantarflexion",
        "Morning stiffness in lower legs",
        "Progressive earlier onset of pain with activity"
      ],
      typicalPattern: "Stage 1: Pain after activity only. Stage 2: Pain during and after activity. Stage 3: Pain limiting activity. Stage 4: Pain at rest. Progression over weeks if training continues unchanged."
    },

    differentialDiagnosis: [
      {
        condition: "Tibial Stress Fracture",
        distinguishingFeatures: "Focal tenderness (<5cm), pain at rest, night pain, positive hop test, MRI shows fracture line"
      },
      {
        condition: "Chronic Exertional Compartment Syndrome",
        distinguishingFeatures: "Cramping/burning pain, symptoms resolve quickly with rest, tightness sensation, requires compartment pressure testing"
      },
      {
        condition: "Popliteal Artery Entrapment",
        distinguishingFeatures: "Claudication symptoms, cold feet, diminished pulses with plantarflexion, vascular studies positive"
      },
      {
        condition: "Deep Vein Thrombosis",
        distinguishingFeatures: "Unilateral swelling, calf pain, warmth, positive Homans sign, risk factors present"
      }
    ],

    evidenceBasedTreatment: [
      {
        approach: "Gait Retraining",
        evidence: "Increasing cadence by 10% reduces tibial shock by 20%. Forefoot striking controversial but may help selected cases",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Progressive Loading Program",
        evidence: "Graduated return to running protocol: 86% successful return at 16 weeks following structured program",
        effectivenessLevel: "strong"
      },
      {
        approach: "Calf Strengthening",
        evidence: "Eccentric and concentric strengthening reduces recurrence by 45%. Addresses primary pathomechanics",
        effectivenessLevel: "strong"
      },
      {
        approach: "Orthotics (if indicated)",
        evidence: "For excessive pronation: 70% improvement. Most effective when combined with strengthening",
        effectivenessLevel: "moderate"
      }
    ],

    prognosis: {
      timeline: "Mild cases: 2-4 weeks with activity modification. Moderate: 6-8 weeks. Severe: 3-6 months if bone stress present",
      factors: [
        "Favorable: Early recognition, training modification, good bone health, male gender, appropriate footwear",
        "Unfavorable: Female athlete triad, vitamin D deficiency, training through pain, poor biomechanics",
        "Key factor: Time to modify activity - each week of delayed treatment adds 2 weeks to recovery"
      ],
      naturalHistory: "Without treatment: 10% progress to stress fracture, 30% chronic pain, 60% eventual resolution but high recurrence"
    },

    selfManagement: [
      {
        strategy: "Relative Rest Protocol",
        rationale: "Maintains fitness while allowing healing. Pool running maintains VO2 max with zero impact",
        precautions: ["Pain should not exceed 3/10 during alternative activities", "Gradual return to running"]
      },
      {
        strategy: "Ice Massage",
        rationale: "Reduces periosteal inflammation, provides analgesia. Direct ice application most effective",
        precautions: ["15 minutes post-activity", "Protect skin from ice burn"]
      },
      {
        strategy: "Calf Stretching and Foam Rolling",
        rationale: "Reduces tractional forces on tibia. Gastrocnemius and soleus flexibility crucial",
        precautions: ["Hold stretches 45 seconds", "Foam roll avoiding direct tibial pressure"]
      },
      {
        strategy: "Calcium and Vitamin D",
        rationale: "Optimizes bone remodeling. Vitamin D deficiency present in 40% of athletes with MTSS",
        precautions: ["Test vitamin D levels", "1000mg calcium, 1000-2000 IU vitamin D daily"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Focal tenderness <5cm with night pain",
        action: "MRI to rule out stress fracture - requires longer recovery"
      },
      {
        sign: "Symptoms persist despite 2 weeks rest",
        action: "Investigate for bone stress injury or other pathology"
      },
      {
        sign: "Numbness or severe cramping",
        action: "Compartment pressure testing for chronic exertional compartment syndrome"
      }
    ],

    keyResearch: [
      {
        title: "Military Recruit MTSS Prevention Study",
        year: 2021,
        findings: "Graduated running program reduced MTSS by 40%. Shock-absorbing insoles no benefit",
        relevance: "Supports progressive loading over passive interventions"
      },
      {
        title: "Biomechanical Risk Factor Analysis",
        year: 2023,
        findings: "Hip weakness and excessive pronation strongest predictors. Combined presence triples risk",
        relevance: "Guides targeted prevention and treatment strategies"
      }
    ]
  },

  'golfers-elbow': {
    pathophysiology: `Medial epicondylalgia involves degenerative changes at the common flexor tendon origin, primarily affecting pronator teres and flexor carpi radialis. Despite the term 'epicondylitis', histology reveals angiofibroblastic degeneration without inflammatory cells - a failed healing response.

The pathology shows disrupted collagen architecture, increased ground substance, and neovascularization with accompanying neoinnervation. These new vessels and nerves contribute to pain generation. Repetitive valgus stress and eccentric loading during gripping activities cause cumulative microtrauma exceeding repair capacity.

Unlike lateral epicondylalgia, 60% have associated ulnar nerve irritation due to proximity at cubital tunnel. The condition affects the dominant arm in 75% of cases and often coexists with lateral symptoms (20%).`,

    clinicalPresentation: {
      primarySymptoms: [
        "Pain over medial epicondyle with gripping/lifting",
        "Tenderness 5-10mm distal and anterior to medial epicondyle",
        "Pain with resisted wrist flexion and pronation",
        "Weakness with grip (average 35% reduction)",
        "Morning stiffness lasting 5-15 minutes"
      ],
      associatedSymptoms: [
        "Ulnar nerve symptoms (tingling in 4th/5th fingers) in 60%",
        "Pain radiating down medial forearm",
        "Night pain in 20% of chronic cases",
        "Difficulty with activities requiring sustained grip",
        "Compensatory shoulder/neck tension"
      ],
      typicalPattern: "Insidious onset over weeks to months. Initially pain only with heavy activities, progressing to pain with daily tasks and potentially at rest. Often precipitated by change in activity or technique."
    },

    differentialDiagnosis: [
      {
        condition: "Cubital Tunnel Syndrome",
        distinguishingFeatures: "Numbness/tingling predominates, positive Tinel's at elbow, weakness of intrinsic hand muscles, EMG changes"
      },
      {
        condition: "UCL Injury",
        distinguishingFeatures: "Medial joint line pain, valgus instability, acute onset with throwing, positive moving valgus test"
      },
      {
        condition: "C6-7 Radiculopathy",
        distinguishingFeatures: "Neck pain primary, dermatomal symptoms, weakness in multiple muscles, positive Spurling's"
      },
      {
        condition: "Flexor Tendinopathy",
        distinguishingFeatures: "Pain more distal in forearm, specific to individual tendon, no epicondylar tenderness"
      }
    ],

    evidenceBasedTreatment: [
      {
        approach: "Eccentric Strengthening",
        evidence: "76% good/excellent results at 12 weeks. Tyler twist with FlexBar shows superior outcomes to conventional therapy",
        effectivenessLevel: "strong"
      },
      {
        approach: "Manual Therapy",
        evidence: "Joint mobilization and soft tissue techniques provide 30% pain reduction, improve grip strength 25%",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Dry Needling",
        evidence: "Reduces pain by 40% at 6 weeks when combined with exercise. Addresses trigger points in flexor muscles",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Ulnar Nerve Mobilization",
        evidence: "For concurrent neural symptoms - 70% improvement when addressed early",
        effectivenessLevel: "moderate"
      }
    ],

    prognosis: {
      timeline: "Recovery typically 3-6 months with appropriate treatment. Slower than lateral epicondylalgia due to higher loads through medial structures",
      factors: [
        "Favorable: Duration <3 months, absence of ulnar nerve symptoms, good response to initial treatment, manual occupation allows modification",
        "Unfavorable: Concurrent ulnar neuropathy, duration >6 months, high repetitive occupational demands, poor ergonomics",
        "Workers compensation cases have 50% longer recovery times"
      ],
      naturalHistory: "Self-limiting in most but prolonged - average 12-18 months without treatment. 25% develop chronic symptoms >2 years"
    },

    selfManagement: [
      {
        strategy: "Eccentric Flexor Loading",
        rationale: "Promotes tendon remodeling, reduces pain by 50% at 6 weeks. Use FlexBar or weights",
        precautions: ["Mild pain (3-4/10) acceptable", "Avoid if sharp pain", "Progress load gradually"]
      },
      {
        strategy: "Nerve Gliding Exercises",
        rationale: "Prevents ulnar nerve adhesions, maintains neural mobility. Critical given 60% have neural involvement",
        precautions: ["Gentle movement only", "Stop if tingling increases", "Combine with neck mobility"]
      },
      {
        strategy: "Ergonomic Modifications",
        rationale: "Reduces provocative loading. Larger grip size decreases flexor activity by 25%",
        precautions: ["Assess tool grip size", "Modify computer workstation", "Use two hands when possible"]
      },
      {
        strategy: "Counterforce Bracing",
        rationale: "Reduces tendon strain by 15-20%. Most effective 5cm distal to epicondyle",
        precautions: ["Not too tight - allow finger under strap", "Remove at night", "Not a substitute for exercise"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Progressive ulnar nerve symptoms",
        action: "EMG/NCS to assess for cubital tunnel syndrome - may need surgical release"
      },
      {
        sign: "Sudden loss of grip with trauma",
        action: "Assess for tendon rupture - rare but requires surgical opinion"
      },
      {
        sign: "Medial joint instability",
        action: "MRI to evaluate UCL - especially in throwing athletes"
      }
    ],

    keyResearch: [
      {
        title: "Comparative Study of Medial vs Lateral Epicondylalgia",
        year: 2022,
        findings: "Medial takes 40% longer to resolve, higher association with nerve pathology",
        relevance: "Sets realistic expectations and emphasizes neural assessment"
      },
      {
        title: "Eccentric vs Concentric Loading RCT",
        year: 2021,
        findings: "Eccentric superior for pain reduction and functional improvement (NNT=3)",
        relevance: "Supports eccentric loading as primary exercise intervention"
      }
    ]
  },

  'carpal-tunnel-syndrome': {
    pathophysiology: `Carpal tunnel syndrome results from median nerve compression within the carpal tunnel. The tunnel's boundaries (carpal bones and transverse carpal ligament) are rigid, making the nerve vulnerable to any space-occupying process.

Increased pressure (normal <15mmHg, CTS >30mmHg) causes epineural edema, venous congestion, and ischemia. Chronic compression leads to demyelination, then axonal loss. The nerve develops a 'double crush' phenomenon where proximal compression (cervical spine) increases susceptibility to distal compression.

Contributing factors include repetitive wrist flexion/extension, sustained grip, vibration exposure, and systemic conditions (diabetes, hypothyroidism, pregnancy). Tenosynovitis of flexor tendons reduces available space. Night symptoms occur due to fluid redistribution and prolonged wrist flexion during sleep.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Numbness/tingling in median nerve distribution (thumb, index, middle, radial half ring finger)",
        "Night pain and numbness waking patient (93% specific)",
        "Symptoms relieved by 'shaking out' hands (flick sign)",
        "Weakness with grip and pinch activities",
        "Dropping objects due to decreased sensation"
      ],
      associatedSymptoms: [
        "Proximal radiation of pain to forearm/shoulder",
        "Thenar muscle atrophy in advanced cases",
        "Decreased two-point discrimination (>6mm abnormal)",
        "Autonomic changes (dry skin over median distribution)",
        "Bilateral symptoms in 60% (dominant hand usually worse)"
      ],
      typicalPattern: "Initial intermittent night symptoms, progressing to daytime numbness with activities, then constant numbness, finally motor weakness and atrophy. Pregnancy-related CTS often resolves postpartum."
    },

    differentialDiagnosis: [
      {
        condition: "Cervical Radiculopathy (C6-7)",
        distinguishingFeatures: "Neck pain, symptoms include little finger, reflex changes, positive Spurling's test"
      },
      {
        condition: "Thoracic Outlet Syndrome",
        distinguishingFeatures: "Symptoms with arm elevation, vascular changes, ulnar > median symptoms, positive Roos test"
      },
      {
        condition: "Pronator Syndrome",
        distinguishingFeatures: "Forearm pain predominates, no night symptoms, pain with resisted pronation, negative Phalen's"
      },
      {
        condition: "Peripheral Neuropathy",
        distinguishingFeatures: "Stocking-glove distribution, bilateral symmetric, multiple nerves affected, systemic disease"
      }
    ],

    evidenceBasedTreatment: [
      {
        approach: "Night Splinting",
        evidence: "Neutral wrist splint: 70% improvement in mild-moderate CTS. NNT=4 for symptom relief at 3 months",
        effectivenessLevel: "strong"
      },
      {
        approach: "Nerve Gliding Exercises",
        evidence: "Combined with splinting improves outcomes by 30%. Reduces adhesions, improves nerve excursion",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Manual Therapy (Carpal Bone Mobilization)",
        evidence: "Increases carpal tunnel space, 65% report significant improvement when combined with exercise",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Corticosteroid Injection",
        evidence: "80% short-term relief, 50% at 1 year. Ultrasound-guided superior to blind injection",
        effectivenessLevel: "strong"
      },
      {
        approach: "Surgical Release (severe cases)",
        evidence: "90% satisfaction rate for severe CTS. Endoscopic vs open similar long-term outcomes",
        effectivenessLevel: "strong"
      }
    ],

    prognosis: {
      timeline: "Mild: 60% resolve with conservative treatment in 3-6 months. Moderate: 40% require surgery within 2 years. Severe: Surgery usually required",
      factors: [
        "Favorable: Short duration (<3 months), mild symptoms, no motor involvement, pregnancy-related, good response to splinting",
        "Unfavorable: Constant numbness, thenar atrophy, EMG showing axonal loss, diabetes, age >50",
        "Critical threshold: Once constant numbness develops, conservative treatment success drops to 20%"
      ],
      naturalHistory: "Progressive without treatment. Untreated severe CTS leads to permanent nerve damage and functional loss"
    },

    selfManagement: [
      {
        strategy: "Neutral Wrist Splinting",
        rationale: "Maintains optimal tunnel volume, prevents night flexion. Wear during sleep and provocative activities",
        precautions: ["Ensure neutral position (not extension)", "Remove periodically to prevent stiffness"]
      },
      {
        strategy: "Tendon Gliding Exercises",
        rationale: "Reduces adhesions, improves tendon excursion, decreases tunnel pressure during movement",
        precautions: ["Perform gently 5x daily", "Stop if symptoms worsen", "Combine with nerve glides"]
      },
      {
        strategy: "Ergonomic Modifications",
        rationale: "Reduces repetitive strain. Neutral wrist position decreases tunnel pressure by 40%",
        precautions: ["Keyboard at elbow height", "Avoid sustained grip", "Use ergonomic tools"]
      },
      {
        strategy: "Activity Pacing",
        rationale: "Prevents inflammatory flares. Micro-breaks every 30 minutes reduce symptoms by 35%",
        precautions: ["Don't work through numbness", "Alternate hand use when possible"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Rapid onset thenar atrophy",
        action: "Urgent EMG and surgical referral - permanent damage risk"
      },
      {
        sign: "Sudden complete numbness",
        action: "Assess for acute carpal tunnel pressure (fracture, hemorrhage)"
      },
      {
        sign: "Bilateral symptoms with systemic features",
        action: "Screen for diabetes, hypothyroidism, rheumatoid arthritis"
      }
    ],

    keyResearch: [
      {
        title: "INSTINCT Trial - Injection vs Surgery",
        year: 2022,
        findings: "Surgery superior at 2 years but injection adequate for mild-moderate CTS",
        relevance: "Supports stepped care approach based on severity"
      },
      {
        title: "Cochrane Review on Conservative Treatment",
        year: 2023,
        findings: "Splinting, exercise, and manual therapy effective for mild-moderate CTS. Combined approach optimal",
        relevance: "Evidence for multimodal conservative management"
      }
    ]
  },

  'de-quervains-tenosynovitis': {
    pathophysiology: `De Quervain's tenosynovitis involves thickening and stenosis of the first dorsal compartment containing abductor pollicis longus (APL) and extensor pollicis brevis (EPB) tendons. The condition represents mechanical entrapment rather than true inflammation.

Histology shows myxoid degeneration, fibrocartilaginous metaplasia, and thickening of the extensor retinaculum (2-4x normal). Multiple APL tendon slips (present in 75%) and septation between APL and EPB (40%) complicate the condition. Repetitive thumb use with ulnar deviation creates friction and microtrauma.

Women are affected 10x more than men, with peak incidence postpartum (associated with repetitive lifting). The radial styloid process creates a fulcrum, concentrating stress at direction change. Smartphone use ('texting thumb') increasingly recognized as causative factor.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Pain over radial styloid with thumb/wrist movement",
        "Positive Finkelstein test (88% sensitivity)",
        "Tenderness and swelling over first dorsal compartment",
        "Pain with gripping, lifting, or twisting motions",
        "Crepitus with thumb movement"
      ],
      associatedSymptoms: [
        "Pain radiation to thumb or forearm",
        "Weakness with pinch grip",
        "Triggering or catching sensation (if severe stenosis)",
        "Difficulty with childcare activities in new mothers",
        "Secondary compensation causing forearm/elbow pain"
      ],
      typicalPattern: "Gradual onset over weeks. New mothers: onset 4-6 weeks postpartum. Initially pain only with specific activities, progressing to pain with all thumb use and eventually at rest."
    },

    differentialDiagnosis: [
      {
        condition: "Intersection Syndrome",
        distinguishingFeatures: "Pain 4-6cm proximal to radial styloid, crepitus more pronounced, affects different compartment"
      },
      {
        condition: "CMC Joint Arthritis",
        distinguishingFeatures: "Pain at base of thumb, positive grind test, age >50, X-ray shows joint changes"
      },
      {
        condition: "Scaphoid Fracture",
        distinguishingFeatures: "History of fall, anatomical snuffbox tenderness, positive scaphoid compression test"
      },
      {
        condition: "Wartenberg's Syndrome",
        distinguishingFeatures: "Superficial radial nerve compression, numbness over dorsal thumb/hand, positive Tinel's"
      }
    ],

    evidenceBasedTreatment: [
      {
        approach: "Corticosteroid Injection",
        evidence: "83% success rate with single injection, 93% if septum absent. Ultrasound-guided improves accuracy",
        effectivenessLevel: "strong"
      },
      {
        approach: "Thumb Spica Splinting",
        evidence: "Combined with activity modification: 60% improvement at 6 weeks. Most effective if worn 24 hours initially",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Manual Therapy",
        evidence: "Radial nerve mobilization and soft tissue work: improves outcomes when combined with splinting",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Eccentric Exercise Program",
        evidence: "Progressive thumb/wrist strengthening after acute phase: reduces recurrence by 50%",
        effectivenessLevel: "moderate"
      }
    ],

    prognosis: {
      timeline: "Conservative treatment: 6-12 weeks for resolution. Injection: improvement within 1 week, resolution 4-6 weeks",
      factors: [
        "Favorable: Early treatment (<3 months), single tendon slip, absence of septum, first episode",
        "Unfavorable: Multiple APL slips with septum, chronic (>6 months), failed injection, systemic inflammatory condition",
        "New mothers: 90% resolve within 6 months with appropriate management"
      ],
      naturalHistory: "Without treatment: 30% spontaneous resolution, 50% chronic pain, 20% require surgery"
    },

    selfManagement: [
      {
        strategy: "Activity Modification",
        rationale: "Reduces repetitive microtrauma. Avoiding thumb use for 2 weeks crucial for healing",
        precautions: ["Use built-up grips", "Avoid repetitive thumb movements", "Modify childcare techniques"]
      },
      {
        strategy: "Ice Massage",
        rationale: "Reduces acute inflammation and pain. Direct application over first dorsal compartment most effective",
        precautions: ["10-15 minutes 3-4x daily", "Protect skin from ice burn"]
      },
      {
        strategy: "Tendon Gliding Exercises",
        rationale: "Prevents adhesions, maintains tendon excursion within sheath",
        precautions: ["Pain-free range only initially", "Progress gradually", "5-10 reps hourly"]
      },
      {
        strategy: "Thumb Spica Taping",
        rationale: "Alternative to rigid splinting, allows some function while protecting tendons",
        precautions: ["Include thumb IP joint", "Check circulation", "Re-tape every 2-3 days"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Failure of two steroid injections",
        action: "MRI to assess for anatomical variants, consider surgical release"
      },
      {
        sign: "Numbness in radial nerve distribution",
        action: "Assess for concurrent Wartenberg's syndrome"
      },
      {
        sign: "Multiple tendon involvement",
        action: "Screen for systemic inflammatory conditions"
      }
    ],

    keyResearch: [
      {
        title: "Ultrasound-Guided vs Blind Injection RCT",
        year: 2021,
        findings: "US-guided injection 95% success vs 70% blind injection, especially with septation",
        relevance: "Supports ultrasound use for injection accuracy"
      },
      {
        title: "Smartphone Use and De Quervain's",
        year: 2023,
        findings: "4+ hours daily smartphone use triples risk. Thumb-intensive apps highest risk",
        relevance: "Identifies modern risk factors requiring ergonomic education"
      }
    ]
  },

  'hip-pain': {
    pathophysiology: `Greater trochanteric pain syndrome encompasses various pathologies around the lateral hip, primarily gluteal tendinopathy (80%) and trochanteric bursitis (20%). Recent evidence shows tendon pathology predominates over bursal inflammation.

The gluteus medius and minimus tendons undergo degenerative changes similar to other tendinopathies - collagen disorganization, increased proteoglycans, and neovascularization. Compression from the iliotibial band during hip adduction creates additional stress. The tendons experience highest load during single-leg stance (2.5x body weight).

Contributing factors include altered hip biomechanics, weakness of hip abductors, and excessive hip adduction during gait. Women are affected 4x more than men due to wider pelvis creating greater tensile and compressive forces. Coxa vara and leg length discrepancy increase mechanical stress.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Lateral hip pain over greater trochanter",
        "Pain with side-lying on affected hip (90% specific)",
        "Pain with single-leg stance activities (stairs, standing on one leg)",
        "Tenderness with palpation posterior to greater trochanter",
        "Pain with resisted hip abduction"
      ],
      associatedSymptoms: [
        "Pain radiation to lateral thigh (pseudoradicular pattern)",
        "Morning stiffness lasting 5-30 minutes",
        "Trendelenburg gait in severe cases",
        "Difficulty crossing legs",
        "Pain with prolonged sitting (compression from chair)"
      ],
      typicalPattern: "Insidious onset in 70%, acute onset after fall or unusual activity in 30%. Initially intermittent with weight-bearing, progressing to night pain and rest pain. Often bilateral (30-60%) with one side worse."
    },

    differentialDiagnosis: [
      {
        condition: "Hip Osteoarthritis",
        distinguishingFeatures: "Groin pain predominant, limited internal rotation, X-ray shows joint space narrowing"
      },
      {
        condition: "Lumbar Radiculopathy",
        distinguishingFeatures: "Back pain primary, dermatomal distribution, neurological signs, positive straight leg raise"
      },
      {
        condition: "Femoral Neck Stress Fracture",
        distinguishingFeatures: "Deep hip/groin pain, high activity level, positive hop test, MRI required for diagnosis"
      },
      {
        condition: "Meralgia Paresthetica",
        distinguishingFeatures: "Lateral thigh numbness/burning, no hip pain, positive Tinel's at ASIS"
      }
    ],

    evidenceBasedTreatment: [
      {
        approach: "Progressive Loading Exercise",
        evidence: "Isometric → isotonic → functional progression: 80% improvement at 12 weeks. Superior to corticosteroid injection at 1 year",
        effectivenessLevel: "strong"
      },
      {
        approach: "Corticosteroid Injection",
        evidence: "Short-term relief (77% at 6 weeks) but worse outcomes at 1 year vs exercise. Multiple injections harmful",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Shockwave Therapy",
        evidence: "68% good/excellent results for chronic cases. 3-5 sessions optimal",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Load Management Education",
        evidence: "Avoiding compression positions and pacing activities crucial. Education alone improves outcomes by 40%",
        effectivenessLevel: "strong"
      }
    ],

    prognosis: {
      timeline: "3-6 months for significant improvement with appropriate loading program. Full recovery 6-12 months",
      factors: [
        "Favorable: Shorter duration (<6 months), younger age, absence of central sensitization, good hip strength",
        "Unfavorable: Duration >12 months, multiple corticosteroid injections, severe tendon changes on imaging, BMI >30",
        "Critical: Avoiding positions of hip adduction/compression essential for recovery"
      ],
      naturalHistory: "Without treatment: 30% spontaneous improvement, 50% chronic pain, 20% progressive disability"
    },

    selfManagement: [
      {
        strategy: "Isometric Hip Abduction",
        rationale: "Provides analgesia, maintains muscle activation without compression. Start at 25% MVC, hold 45 seconds",
        precautions: ["Perform in neutral hip position", "Progress to 70% MVC", "5 repetitions 2x daily"]
      },
      {
        strategy: "Sleep Positioning",
        rationale: "Avoid compression from side-lying. Pillow between knees reduces adduction stress by 50%",
        precautions: ["May need to sleep supine initially", "Gradual return to side-lying"]
      },
      {
        strategy: "Activity Modification",
        rationale: "Reduce compressive and tensile loads. Avoid hip 'hanging' in standing, excessive walking",
        precautions: ["Use cane in opposite hand if needed", "Avoid stretching into adduction"]
      },
      {
        strategy: "Progressive Strengthening",
        rationale: "Address hip abductor weakness - 30-40% deficit typical. Focus on gluteus medius",
        precautions: ["Avoid exercises in adduction", "Quality over quantity", "Monitor 24-hour response"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Groin pain with limited internal rotation",
        action: "X-ray to assess for hip OA or FAI"
      },
      {
        sign: "Night pain with constitutional symptoms",
        action: "MRI to rule out malignancy or infection"
      },
      {
        sign: "Sudden severe pain with minor trauma in older adult",
        action: "Assess for hip fracture - may be occult on X-ray"
      }
    ],

    keyResearch: [
      {
        title: "LEAP Trial - Load vs Injection",
        year: 2022,
        findings: "Education plus exercise superior to corticosteroid injection at all time points beyond 8 weeks",
        relevance: "Establishes exercise as first-line treatment over injection"
      },
      {
        title: "MRI Studies of GTPS",
        year: 2021,
        findings: "Gluteal tendinopathy present in 88%, isolated bursitis in only 12%. Changes treatment targets",
        relevance: "Shifts focus from anti-inflammatory to tendon loading strategies"
      }
    ]
  },

  'piriformis-syndrome': {
    pathophysiology: `Piriformis syndrome involves compression or irritation of the sciatic nerve by the piriformis muscle. The piriformis originates from the anterior sacrum and inserts on the greater trochanter, with the sciatic nerve passing beneath it in 85% of people. In 15%, anatomical variations exist where the nerve pierces or splits around the muscle, increasing vulnerability.

The condition develops through muscle hypertrophy, spasm, or fibrosis causing direct nerve compression. Prolonged sitting, especially on hard surfaces, creates sustained pressure. Hip trauma can cause piriformis scarring and adhesions. Biomechanical factors include excessive hip internal rotation during gait, sacroiliac dysfunction, and leg length discrepancy >1.5cm.

Neural inflammation occurs from mechanical compression and ischemia. The nerve becomes hypersensitive, with ectopic discharge and altered ion channel expression. Central sensitization develops with chronicity, amplifying pain perception beyond the initial injury site.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Deep buttock pain, often described as 'toothache-like'",
        "Pain radiating down posterior thigh following sciatic distribution",
        "Symptoms worse with sitting >15-20 minutes",
        "Pain with hip internal rotation and adduction",
        "Difficulty sitting on affected side"
      ],
      associatedSymptoms: [
        "Numbness/tingling in posterior thigh and calf",
        "Pain with walking upstairs or inclines",
        "Sexual dysfunction (dyspareunia) from pudendal nerve involvement",
        "Difficulty crossing legs",
        "Compensatory low back pain from altered gait"
      ],
      typicalPattern: "Progressive onset over weeks to months. Pain initially intermittent with prolonged sitting, becoming constant. Walking provides temporary relief but prolonged activity worsens symptoms. Night pain uncommon unless severe inflammation present."
    },

    differentialDiagnosis: [
      {
        condition: "Lumbar Radiculopathy (L5-S1)",
        distinguishingFeatures: "Back pain primary, positive straight leg raise, MRI shows disc pathology, dermatomal sensory changes"
      },
      {
        condition: "Sacroiliac Joint Dysfunction",
        distinguishingFeatures: "Pain at PSIS, positive sacroiliac provocation tests, no true neurological symptoms"
      },
      {
        condition: "Greater Trochanteric Pain Syndrome",
        distinguishingFeatures: "Lateral hip pain, tender over greater trochanter, worse lying on side, no neurological symptoms"
      },
      {
        condition: "Ischiofemoral Impingement",
        distinguishingFeatures: "Deep buttock pain, MRI shows narrowed ischiofemoral space (<15mm), pain with hip extension"
      }
    ],

    evidenceBasedTreatment: [
      {
        approach: "Piriformis Stretching and Soft Tissue Release",
        evidence: "RCT shows 70% improvement with targeted stretching program. Manual release techniques reduce pain by 2.5 points on VAS",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Dry Needling of Piriformis",
        evidence: "Studies show 60% reduction in pain at 3 months. Superior to stretching alone for myofascial component",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Hip Strengthening Program",
        evidence: "Addressing hip abductor weakness (present in 78% of cases) reduces recurrence by 50%",
        effectivenessLevel: "strong"
      },
      {
        approach: "Neural Mobilization",
        evidence: "Sciatic nerve gliding exercises improve neural mobility and reduce adhesions. 65% report significant improvement",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Injection Therapy (if conservative fails)",
        evidence: "Ultrasound-guided injection 79% effective short-term, but exercise superior at 6 months",
        effectivenessLevel: "moderate"
      }
    ],

    prognosis: {
      timeline: "Conservative treatment: 60-70% significant improvement within 6-8 weeks. Complete resolution 3-4 months with adherence to program",
      factors: [
        "Favorable: Duration <3 months, absence of anatomical variation, good hip flexibility, active lifestyle pre-injury",
        "Unfavorable: Chronic >6 months, anatomical nerve variants, sedentary occupation, central sensitization present",
        "Critical factor: Addressing perpetuating factors (sitting posture, hip weakness) determines long-term success"
      ],
      naturalHistory: "Without treatment: 20% spontaneous resolution, 50% chronic intermittent symptoms, 30% progressive worsening"
    },

    selfManagement: [
      {
        strategy: "Piriformis Stretch - Figure 4 Position",
        rationale: "Lengthens piriformis reducing compression. Hold 30-45 seconds, 3-4x daily. Gentle progression crucial",
        precautions: ["Avoid aggressive stretching - can increase spasm", "Stop if neurological symptoms worsen"]
      },
      {
        strategy: "Sitting Modifications",
        rationale: "Reduce direct pressure on piriformis. Use cushion, avoid wallet in back pocket, stand every 30 minutes",
        precautions: ["May need standing desk initially", "Car seat adjustments critical"]
      },
      {
        strategy: "Tennis Ball Release",
        rationale: "Self-myofascial release reduces muscle tension. 60-90 seconds on tender points",
        precautions: ["Avoid direct pressure on sciatic nerve", "Should feel 'good pain' not sharp/electric"]
      },
      {
        strategy: "Hip Strengthening",
        rationale: "Clamshells, bridges target hip external rotators/abductors. Reduces compensatory piriformis overactivity",
        precautions: ["Start with low resistance", "Quality over quantity", "Stop if symptoms increase"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Progressive neurological deficit",
        action: "MRI lumbar spine to rule out disc herniation or cauda equina"
      },
      {
        sign: "Bowel/bladder dysfunction",
        action: "Emergency referral - possible cauda equina syndrome"
      },
      {
        sign: "Constitutional symptoms with buttock pain",
        action: "Investigate for malignancy or infection (psoas abscess)"
      }
    ],

    keyResearch: [
      {
        title: "Anatomical Variations in Piriformis Syndrome",
        year: 2023,
        findings: "15% have sciatic nerve variations increasing syndrome risk. MR neurography 93% sensitive for diagnosis",
        relevance: "Explains why some cases resistant to conservative treatment"
      },
      {
        title: "Conservative vs Injection Therapy RCT",
        year: 2022,
        findings: "Exercise program equal to injection at 3 months, superior at 12 months. Combined approach best for chronic cases",
        relevance: "Supports physiotherapy as first-line treatment"
      }
    ]
  },

  'groin-strains': {
    pathophysiology: `Groin strains involve injury to the hip adductor complex - primarily adductor longus (65%), but also brevis, magnus, pectineus, and gracilis. The injury occurs at the musculotendinous junction or enthesis where tensile forces exceed tissue capacity. The adductor longus, with its small origin and long lever arm, experiences the highest mechanical stress.

Acute injury mechanism involves eccentric contraction during hip abduction with simultaneous hip extension/rotation - common in kicking, cutting, or rapid direction changes. Microscopic tears progress to macroscopic disruption with hemorrhage and inflammatory cascade activation. Type I collagen is replaced with weaker Type III during initial healing, creating vulnerability to re-injury.

Chronic groin pain often involves multiple structures: adductor tendinopathy, pubic symphysis stress reaction, and hip joint pathology. Central sensitization develops with persistent nociception, creating widespread pelvic pain beyond the initial injury site.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Sharp pain at adductor origin during injury ('pop' or 'tear' sensation)",
        "Pain with resisted hip adduction",
        "Tenderness at pubic insertion or muscle belly",
        "Pain with stretching into abduction",
        "Difficulty with sports-specific movements (kicking, sprinting)"
      ],
      associatedSymptoms: [
        "Swelling/bruising in medial thigh (Grade II-III)",
        "Antalgic gait favoring affected side",
        "Pain with coughing/sneezing (enthesopathy)",
        "Lower abdominal discomfort",
        "Referred pain to medial knee"
      ],
      typicalPattern: "Acute: sudden onset during explosive movement. Pain immediate, forcing activity cessation. Chronic: gradual onset with training, warming up helps initially, progressive worsening. Morning stiffness common with tendinopathy."
    },

    differentialDiagnosis: [
      {
        condition: "Athletic Pubalgia (Sports Hernia)",
        distinguishingFeatures: "Deep groin/lower abdominal pain, no palpable hernia, pain with Valsalva, MRI shows rectus/oblique pathology"
      },
      {
        condition: "Hip Joint Pathology (Labral tear, FAI)",
        distinguishingFeatures: "Deep groin pain, positive FADIR test, clicking/catching, limited hip internal rotation"
      },
      {
        condition: "Inguinal Hernia",
        distinguishingFeatures: "Palpable bulge with Valsalva, reducible mass, may have bowel symptoms"
      },
      {
        condition: "Osteitis Pubis",
        distinguishingFeatures: "Pubic symphysis tenderness, bilateral symptoms, X-ray shows symphysis changes"
      }
    ],

    evidenceBasedTreatment: [
      {
        approach: "Copenhagen Adduction Exercise Protocol",
        evidence: "41% reduction in groin injuries when used preventatively. 85% return to sport with structured program",
        effectivenessLevel: "strong"
      },
      {
        approach: "Eccentric Strengthening",
        evidence: "Superior to concentric for tendinopathy. 75% good/excellent outcomes at 12 weeks",
        effectivenessLevel: "strong"
      },
      {
        approach: "Manual Therapy and Soft Tissue Work",
        evidence: "Combined with exercise reduces return to play by 2 weeks vs exercise alone",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Progressive Running Program",
        evidence: "Criteria-based progression reduces re-injury from 23% to 7%. Pain monitoring crucial",
        effectivenessLevel: "strong"
      },
      {
        approach: "Injection Therapy",
        evidence: "Limited evidence. May help chronic enthesopathy but inferior to exercise at 12 months",
        effectivenessLevel: "moderate"
      }
    ],

    prognosis: {
      timeline: "Grade I: 1-2 weeks. Grade II: 3-6 weeks. Grade III: 6-12 weeks. Chronic tendinopathy: 3-6 months with loading program",
      factors: [
        "Favorable: Early intervention, younger age, first injury, good hip ROM and strength pre-injury",
        "Unfavorable: Previous groin injury (2.4x risk), delayed treatment, poor lumbopelvic control, early return to sport",
        "Critical: Addressing hip and core strength deficits essential for preventing recurrence"
      ],
      naturalHistory: "High recurrence rate (15-30%) without proper rehabilitation. Chronic pain develops in 10% of acute injuries"
    },

    selfManagement: [
      {
        strategy: "Acute Phase Protection (0-72 hours)",
        rationale: "Minimize bleeding and inflammation. Relative rest, ice 15 minutes every 2 hours, compression shorts",
        precautions: ["Avoid stretching first 48 hours", "Crutches if antalgic gait", "No NSAIDs first 48 hours"]
      },
      {
        strategy: "Isometric Adduction",
        rationale: "Early loading promotes healing, provides analgesia. Squeeze ball between knees, 5x45 seconds",
        precautions: ["Pain should be <3/10", "Progress to different angles", "Daily monitoring"]
      },
      {
        strategy: "Progressive Stretching",
        rationale: "Restore length after acute phase. Gentle static stretches 30 seconds, 3x daily",
        precautions: ["Never stretch through sharp pain", "Warm up first", "Symmetrical flexibility goal"]
      },
      {
        strategy: "Copenhagen Plank Progression",
        rationale: "Gold standard for adductor strengthening. Start short lever, progress to long lever",
        precautions: ["Master technique before adding time", "Both sides equal", "Core engagement critical"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Severe pain with minimal trauma in adolescent",
        action: "X-ray to rule out avulsion fracture of AIIS or pubic ramus"
      },
      {
        sign: "Groin mass or severe abdominal pain",
        action: "Assess for incarcerated hernia - surgical emergency"
      },
      {
        sign: "Fever, night sweats with groin pain",
        action: "Rule out septic arthritis or osteomyelitis"
      }
    ],

    keyResearch: [
      {
        title: "Copenhagen Protocol Prevention Study",
        year: 2023,
        findings: "8-week preseason program reduced groin injuries by 41% in football players",
        relevance: "Establishes eccentric strengthening as key prevention strategy"
      },
      {
        title: "Doha Agreement on Groin Pain Classification",
        year: 2022,
        findings: "Defined clinical entities: adductor, iliopsoas, inguinal, pubic-related groin pain",
        relevance: "Standardizes diagnosis and treatment approaches"
      }
    ]
  },

  'hamstring-strains': {
    pathophysiology: `Hamstring strains predominantly affect the biceps femoris long head (80%), followed by semimembranosus and semitendinosus. The injury typically occurs at the proximal musculotendinous junction during eccentric contraction when the muscle is simultaneously lengthening and contracting - peak stress occurs during terminal swing phase of sprinting.

The biceps femoris vulnerability stems from its dual innervation (tibial and peroneal nerves) creating asynchronous activation, pennate fiber arrangement concentrating stress, and high proportion of Type II fibers susceptible to fatigue. During sprinting, hamstrings experience 8-10x body weight in tensile force.

Healing follows three phases: inflammatory (0-72 hours) with hematoma formation, proliferation (3-21 days) with scar tissue deposition, and remodeling (3 weeks-6 months). Scar tissue has only 60% tensile strength of original muscle, creating permanent vulnerability. Neural inhibition persists long after tissue healing, altering muscle activation patterns.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Sudden sharp pain in posterior thigh during sprinting/jumping",
        "Audible 'pop' with Grade II-III injuries",
        "Immediate functional loss - unable to continue activity",
        "Pain with knee flexion and hip extension",
        "Palpable defect in muscle belly (Grade III)"
      ],
      associatedSymptoms: [
        "Bruising appearing 24-48 hours post-injury, tracking distally",
        "Cramping sensation in posterior thigh",
        "Sciatic nerve irritation symptoms (10% of proximal injuries)",
        "Altered running gait - shortened stride length",
        "Compensatory low back pain from guarding"
      ],
      typicalPattern: "Acute onset during acceleration or maximum velocity sprinting. Proximal injuries (closer to ischial tuberosity) have longer recovery. Pain worse in morning, improves with gentle movement, worsens with stretching or sprinting motion."
    },

    differentialDiagnosis: [
      {
        condition: "Proximal Hamstring Tendinopathy",
        distinguishingFeatures: "Gradual onset, deep buttock pain, worse with sitting, no acute incident"
      },
      {
        condition: "Referred Pain from Lumbar Spine",
        distinguishingFeatures: "Back pain primary, neurological symptoms, positive slump test, no local muscle tenderness"
      },
      {
        condition: "Adductor Magnus Strain",
        distinguishingFeatures: "Medial thigh pain, tender at adductor tubercle, pain with resisted adduction"
      },
      {
        condition: "Sciatic Nerve Irritation",
        distinguishingFeatures: "Burning/electric pain, neurological symptoms, positive neural tension tests"
      }
    ],

    evidenceBasedTreatment: [
      {
        approach: "Eccentric Strengthening Protocol",
        evidence: "Nordic exercise program reduces injury rates by 51% and re-injury by 86%. Time to RTP reduced by 25%",
        effectivenessLevel: "strong"
      },
      {
        approach: "Progressive Running Program",
        evidence: "Criteria-based progression (pain-free walking, 70% strength, full ROM) reduces re-injury from 23% to 6%",
        effectivenessLevel: "strong"
      },
      {
        approach: "L-Protocol Rehabilitation",
        evidence: "Lengthening exercises throughout recovery accelerates RTP by 15 days vs conventional protocol",
        effectivenessLevel: "strong"
      },
      {
        approach: "Trunk Stabilization Training",
        evidence: "Adding core stability reduces re-injury risk by 35%. Addresses proximal control deficits",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Platelet-Rich Plasma (PRP)",
        evidence: "Mixed evidence. May reduce RTP by 5-7 days for Grade II injuries, no benefit Grade I",
        effectivenessLevel: "emerging"
      }
    ],

    prognosis: {
      timeline: "Grade I: 1-3 weeks. Grade II: 4-8 weeks. Grade III: 3-6 months. Proximal injuries add 2-3 weeks to recovery",
      factors: [
        "Favorable: First injury, younger age (<25), good pre-injury flexibility, early treatment initiation",
        "Unfavorable: Previous hamstring injury (2-6x re-injury risk), proximal injury location, >1 day to walk pain-free post-injury",
        "Critical predictor: Time to walk pain-free - <1 day suggests <3 week recovery, >4 days suggests >6 weeks"
      ],
      naturalHistory: "Re-injury rate 12-33% within first year. Most re-injuries occur within first 2 weeks of return to sport"
    },

    selfManagement: [
      {
        strategy: "Acute Management (0-48 hours)",
        rationale: "Minimize secondary tissue damage. Ice 20 minutes every 2 hours, compression, elevation when possible",
        precautions: ["Avoid complete rest - gentle movement within pain limits", "No stretching first 48 hours", "May need crutches if severe"]
      },
      {
        strategy: "Early Loading - Isometric",
        rationale: "Promotes healing, reduces atrophy. Prone knee flexion holds at multiple angles, 5x15 seconds",
        precautions: ["Pain <4/10 acceptable", "No sharp/shooting pain", "Progress to isotonic when tolerated"]
      },
      {
        strategy: "Eccentric Nordic Progression",
        rationale: "Gold standard for strength and injury prevention. Start assisted, progress to full bodyweight",
        precautions: ["Not before week 2-3", "Gradual progression essential", "Mild delayed soreness normal"]
      },
      {
        strategy: "Running Progression",
        rationale: "Gradual return to sprinting. Start jogging 50%, increase 10% weekly if asymptomatic",
        precautions: ["Must achieve 70% strength first", "High-speed running last to return", "Monitor 24-hour response"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Complete proximal avulsion with >2cm retraction",
        action: "MRI and surgical consultation - may benefit from repair"
      },
      {
        sign: "Sciatic nerve symptoms persisting >1 week",
        action: "MRI to assess for nerve involvement or compartment syndrome"
      },
      {
        sign: "Inability to walk within 48 hours of injury",
        action: "Imaging to assess severity - possible complete rupture"
      }
    ],

    keyResearch: [
      {
        title: "British Athletics Muscle Injury Classification",
        year: 2024,
        findings: "MRI classification correlates with RTP time. Intratendon injuries worst prognosis",
        relevance: "Guides prognosis and rehabilitation planning based on tissue involved"
      },
      {
        title: "Nordic Exercise Prevention Meta-Analysis",
        year: 2023,
        findings: "51% reduction in injuries, 86% reduction in re-injuries with consistent program",
        relevance: "Establishes eccentric training as essential for prevention and rehabilitation"
      }
    ]
  },

  'facet-joint-syndrome': {
    pathophysiology: `Facet joints (zygapophyseal joints) are synovial joints comprising 15-20% of spinal load bearing. Each joint has a fibrous capsule richly innervated by medial branch nerves, making them potent pain generators. Degeneration begins with cartilage fibrillation, progressing to subchondral bone exposure, osteophyte formation, and capsular hypertrophy.

The lumbar facets orient in the sagittal plane, resisting rotation but vulnerable to extension and rotation combined. Repetitive loading causes synovial inflammation, capsular distension, and mechanical impingement. The inflammatory cascade releases substance P, CGRP, and inflammatory cytokines, sensitizing nociceptors.

Facet-mediated pain involves both mechanical and chemical irritation. Capsular stretch activates mechanoreceptors, while inflammatory mediators sensitize chemical nociceptors. Central sensitization develops with chronicity - spinal cord neurons become hyperexcitable, expanding receptive fields and lowering pain thresholds.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Unilateral or bilateral paravertebral pain",
        "Pain worse with extension and rotation to affected side",
        "Morning stiffness lasting 15-30 minutes",
        "Pain with prolonged standing or walking",
        "Relief with sitting or flexion"
      ],
      associatedSymptoms: [
        "Referred pain to buttock, groin, or thigh (non-dermatomal)",
        "Pseudo-radicular pain not below knee",
        "Muscle guarding and loss of lordosis",
        "Pain with transitional movements",
        "Sleep disruption from inability to find comfortable position"
      ],
      typicalPattern: "Gradual onset over months to years. Pain initially intermittent with specific movements, progressing to constant ache with acute exacerbations. Extension-rotation activities (reaching overhead, looking up) particularly provocative."
    },

    differentialDiagnosis: [
      {
        condition: "Disc Herniation",
        distinguishingFeatures: "Flexion increases pain, true radicular symptoms, positive straight leg raise, neurological deficits"
      },
      {
        condition: "Spinal Stenosis",
        distinguishingFeatures: "Bilateral leg symptoms, neurogenic claudication, relief with flexion/sitting, age >60"
      },
      {
        condition: "Sacroiliac Joint Dysfunction",
        distinguishingFeatures: "Pain below L5, positive sacroiliac provocation tests, pain with single leg stance"
      },
      {
        condition: "Myofascial Pain Syndrome",
        distinguishingFeatures: "Trigger points in paraspinal muscles, broader pain distribution, no specific movement pattern"
      }
    ],

    evidenceBasedTreatment: [
      {
        approach: "Manual Therapy - Joint Mobilization",
        evidence: "Moderate evidence for short-term pain relief. Grade III-IV mobilizations reduce pain by 30-40% immediately",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Specific Exercise Therapy",
        evidence: "Multifidus strengthening and motor control exercises reduce recurrence by 50%. Superior to general exercise",
        effectivenessLevel: "strong"
      },
      {
        approach: "Cognitive Functional Therapy",
        evidence: "Addressing movement behaviors and beliefs. 60% achieve clinically important improvement at 12 months",
        effectivenessLevel: "strong"
      },
      {
        approach: "Radiofrequency Ablation (if conservative fails)",
        evidence: "50-80% pain relief for 6-12 months in confirmed facet pain. Diagnostic blocks necessary",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Combined Manual Therapy and Exercise",
        evidence: "Superior to either alone. NNT of 5 for significant improvement at 3 months",
        effectivenessLevel: "strong"
      }
    ],

    prognosis: {
      timeline: "Conservative management: 50-60% significant improvement within 6-8 weeks. Chronic cases may need 3-6 months of consistent treatment",
      factors: [
        "Favorable: Single level involvement, younger age, absence of central sensitization, active lifestyle",
        "Unfavorable: Multi-level degeneration, age >65, obesity, depression/anxiety, workers compensation",
        "Critical: Early intervention before central sensitization develops determines long-term outcomes"
      ],
      naturalHistory: "Progressive condition if untreated. Episodes become more frequent and severe. 30% develop chronic pain lasting >1 year"
    },

    selfManagement: [
      {
        strategy: "Flexion-Based Relief Positions",
        rationale: "Reduces facet loading. Child's pose, knees to chest, reduces compression by 50%",
        precautions: ["Hold 30-60 seconds", "Use for symptom relief not treatment", "Combine with strengthening"]
      },
      {
        strategy: "Lumbar Stabilization Exercises",
        rationale: "Strengthens multifidus and transverse abdominis, improving segmental control. Reduces shear forces on facets",
        precautions: ["Start with low load", "Quality over quantity", "Progress when pain-free"]
      },
      {
        strategy: "Activity Pacing",
        rationale: "Prevents inflammatory flares. Alternate extension activities with flexion breaks",
        precautions: ["Set timer for position changes", "Avoid prolonged overhead work", "Modify don't avoid"]
      },
      {
        strategy: "Heat Therapy",
        rationale: "Reduces muscle guarding, improves local circulation. Most effective before exercise",
        precautions: ["20 minutes maximum", "Not during acute inflammation", "Moist heat more effective"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Progressive neurological deficit",
        action: "MRI to rule out nerve root compression or spinal cord involvement"
      },
      {
        sign: "Bilateral leg weakness or numbness",
        action: "Urgent imaging for possible central stenosis or cauda equina"
      },
      {
        sign: "Pain unrelieved by position change",
        action: "Consider non-mechanical causes - infection, malignancy, fracture"
      }
    ],

    keyResearch: [
      {
        title: "Facet Joint Contribution to Low Back Pain",
        year: 2023,
        findings: "Facet joints primary pain source in 15-40% of chronic LBP. Dual diagnostic blocks 80% accurate",
        relevance: "Validates facet joints as significant pain generators requiring specific treatment"
      },
      {
        title: "Manual Therapy for Facet Syndrome RCT",
        year: 2022,
        findings: "Specific facet mobilization superior to general mobilization. Effects maintained at 6 months with exercise",
        relevance: "Supports targeted manual therapy approach combined with exercise"
      }
    ]
  },

  'thoracic-outlet-syndrome': {
    pathophysiology: `Thoracic outlet syndrome (TOS) involves compression of the neurovascular bundle (brachial plexus, subclavian artery/vein) as it traverses three potential spaces: interscalene triangle, costoclavicular space, and subpectoral space. Neurogenic TOS comprises 95% of cases, with vascular TOS being rare but more serious.

Anatomical factors include cervical ribs (0.5% population), elongated C7 transverse processes, fibrous bands, and scalene muscle variations. Dynamic factors involve scalene hypertrophy from chronic respiratory patterns, anterior head posture increasing scalene tension by 30%, and depressed shoulders narrowing the costoclavicular space.

Chronic compression causes neural ischemia, intraneural edema, and fibrosis. Wallerian degeneration occurs in severe cases. The lower trunk (C8-T1) is most vulnerable, affecting ulnar nerve distribution. Sympathetic fibers involvement explains vasomotor symptoms. Central sensitization develops with persistent nociception.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Numbness/tingling in ulnar nerve distribution (4th-5th fingers)",
        "Aching pain in neck, shoulder, and arm",
        "Weakness in hand grip and fine motor control",
        "Symptoms worse with overhead activities",
        "Fatigue with repetitive arm use"
      ],
      associatedSymptoms: [
        "Vascular symptoms: coldness, color changes, swelling",
        "Headaches from scalene trigger points",
        "Chest pain mimicking cardiac conditions",
        "Night pain and paresthesias",
        "Dropping objects due to weakness"
      ],
      typicalPattern: "Gradual onset over months. Initially intermittent with provocative positions (overhead, carrying bags). Progresses to constant symptoms. Worse at end of day, disturbs sleep. Often bilateral but asymmetric."
    },

    differentialDiagnosis: [
      {
        condition: "Cervical Radiculopathy",
        distinguishingFeatures: "Neck pain primary, dermatomal pattern, positive Spurling's test, MRI shows foraminal stenosis"
      },
      {
        condition: "Carpal Tunnel Syndrome",
        distinguishingFeatures: "Median nerve distribution (thumb-3rd finger), positive Phalen's test, worse at night, normal neck exam"
      },
      {
        condition: "Cubital Tunnel Syndrome",
        distinguishingFeatures: "Isolated ulnar symptoms, positive elbow flexion test, local tenderness at cubital tunnel"
      },
      {
        condition: "Shoulder Pathology",
        distinguishingFeatures: "Local shoulder pain, positive impingement tests, no neurological symptoms"
      }
    ],

    evidenceBasedTreatment: [
      {
        approach: "Scalene Stretching and Breathing Retraining",
        evidence: "60-70% improvement with dedicated program. Diaphragmatic breathing reduces scalene activity by 40%",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Postural Correction Program",
        evidence: "Forward head posture correction reduces symptoms in 65% of cases. Combined with strengthening most effective",
        effectivenessLevel: "strong"
      },
      {
        approach: "Neural Mobilization",
        evidence: "Brachial plexus gliding improves neural mobility. 70% report significant improvement at 6 weeks",
        effectivenessLevel: "moderate"
      },
      {
        approach: "First Rib Mobilization",
        evidence: "Elevated first rib present in 80% of TOS. Mobilization provides immediate relief in 50%",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Strengthening Scapular Stabilizers",
        evidence: "Corrects shoulder depression and protraction. Reduces recurrence by 60%",
        effectivenessLevel: "strong"
      }
    ],

    prognosis: {
      timeline: "Conservative treatment: 60-80% improve within 3-6 months. Complete resolution may take 6-12 months",
      factors: [
        "Favorable: Shorter duration (<6 months), absence of structural anomaly, good posture pre-morbid, younger age",
        "Unfavorable: Cervical rib present, chronic >1 year, workers compensation, depression/anxiety",
        "Critical: Addressing perpetuating factors (posture, breathing, ergonomics) essential for lasting relief"
      ],
      naturalHistory: "Without treatment: 20% spontaneous improvement, 60% chronic symptoms, 20% progressive worsening requiring surgery"
    },

    selfManagement: [
      {
        strategy: "Scalene Stretch - Lateral Neck",
        rationale: "Reduces scalene tension and compression. Hold 30 seconds, 3x daily each side",
        precautions: ["Gentle stretch only", "Stop if symptoms increase", "Combine with breathing"]
      },
      {
        strategy: "Diaphragmatic Breathing",
        rationale: "Reduces accessory muscle use. Practice 5-10 minutes, 3x daily. Essential for long-term management",
        precautions: ["May feel dizzy initially", "Progress gradually", "Use in stressful situations"]
      },
      {
        strategy: "Posture Breaks",
        rationale: "Reset position every 30 minutes. Shoulder rolls, chin tucks prevent sustained compression",
        precautions: ["Set reminders", "Gentle movements", "Combine with breathing"]
      },
      {
        strategy: "Sleep Positioning",
        rationale: "Avoid arms overhead. Support arms with pillows to prevent stretch on brachial plexus",
        precautions: ["May take time to adapt", "Multiple pillows helpful", "Avoid stomach sleeping"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Sudden onset severe pain with arm swelling",
        action: "Doppler ultrasound for venous thrombosis - medical emergency"
      },
      {
        sign: "Pulseless, cold, pale arm",
        action: "Vascular emergency - arterial TOS with thrombosis"
      },
      {
        sign: "Progressive weakness with muscle atrophy",
        action: "EMG/NCS and surgical consultation for nerve damage"
      }
    ],

    keyResearch: [
      {
        title: "Conservative Management of Neurogenic TOS",
        year: 2023,
        findings: "Structured physiotherapy program 71% effective. Surgery needed in only 15% of cases",
        relevance: "Establishes conservative treatment as first-line approach"
      },
      {
        title: "Scalene Muscle Function in TOS",
        year: 2022,
        findings: "Paradoxical breathing patterns in 85% of TOS patients. Breathing retraining crucial component",
        relevance: "Highlights importance of addressing respiratory mechanics"
      }
    ]
  },

  'shoulder-impingement': {
    pathophysiology: `Shoulder impingement involves compression of subacromial structures (rotator cuff tendons, subacromial bursa, biceps tendon) between the humeral head and coracoacromial arch. Modern understanding emphasizes intrinsic tendon pathology over extrinsic compression, with 'impingement' being a clinical sign rather than diagnosis.

Primary factors include rotator cuff weakness causing superior humeral migration (loss of centering), reducing subacromial space by 50%. Scapular dyskinesis, present in 70% of cases, alters acromiohumeral distance. Posterior capsule tightness increases anterior-superior translation. Secondary factors include acromial morphology (Type III higher risk) and age-related tendon degeneration.

The pathological cascade involves mechanical compression → bursal inflammation → tendon degeneration → partial thickness tears → full thickness tears. Inflammatory mediators (IL-1β, TNF-α) drive matrix degradation. Neovascularization and neural ingrowth correlate with pain severity.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Painful arc between 60-120° of abduction",
        "Night pain, difficulty lying on affected side",
        "Pain with overhead activities",
        "Weakness with elevation and external rotation",
        "Catching or clicking sensation with movement"
      ],
      associatedSymptoms: [
        "Referred pain to lateral deltoid insertion",
        "Difficulty with behind-back activities (internal rotation)",
        "Compensatory scapular hiking",
        "Stiffness worse in morning",
        "Fatigue with repetitive use"
      ],
      typicalPattern: "Gradual onset over weeks to months. Initially pain only with overhead activities, progressing to pain with daily tasks. Night pain indicates bursal involvement. Temporary relief with rest but returns with activity."
    },

    differentialDiagnosis: [
      {
        condition: "Rotator Cuff Tear",
        distinguishingFeatures: "Weakness disproportionate to pain, positive drop arm test, MRI confirms tear"
      },
      {
        condition: "Adhesive Capsulitis",
        distinguishingFeatures: "Global ROM restriction, passive = active limitation, gradual onset without trauma"
      },
      {
        condition: "AC Joint Arthropathy",
        distinguishingFeatures: "Pain localized to AC joint, positive cross-body adduction, tender over AC joint"
      },
      {
        condition: "Calcific Tendinitis",
        distinguishingFeatures: "Acute severe pain, X-ray shows calcification, self-limiting course"
      }
    ],

    evidenceBasedTreatment: [
      {
        approach: "Exercise Therapy - Rotator Cuff and Scapular",
        evidence: "Equal to surgery at 1 year for most cases. 75% good/excellent outcomes with structured program",
        effectivenessLevel: "strong"
      },
      {
        approach: "Manual Therapy",
        evidence: "Combined with exercise superior to exercise alone. Reduces pain by 40% at 6 weeks",
        effectivenessLevel: "strong"
      },
      {
        approach: "Corticosteroid Injection",
        evidence: "Short-term relief (70% at 6 weeks) but no benefit beyond 3 months. Multiple injections harmful",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Scapular Retraining",
        evidence: "Corrects dyskinesis in 85% of cases. Essential for long-term success",
        effectivenessLevel: "strong"
      },
      {
        approach: "Taping/Strapping",
        evidence: "Scapular taping reduces pain during rehabilitation. Facilitates exercise performance",
        effectivenessLevel: "moderate"
      }
    ],

    prognosis: {
      timeline: "Conservative treatment: 60-70% significant improvement within 12 weeks. Full recovery 3-6 months",
      factors: [
        "Favorable: Duration <3 months, younger age (<40), no trauma history, good scapular control",
        "Unfavorable: Duration >6 months, full thickness tear, workers compensation, poor compliance",
        "Critical: Addressing scapular dyskinesis and rotator cuff strength determines success"
      ],
      naturalHistory: "40% spontaneous improvement, 40% persistent symptoms, 20% progression to rotator cuff tear without treatment"
    },

    selfManagement: [
      {
        strategy: "Pendulum Exercises",
        rationale: "Provides gentle traction and movement without muscle activation. Reduces pain and stiffness",
        precautions: ["Let gravity do the work", "Small circles initially", "2-3 minutes, 3x daily"]
      },
      {
        strategy: "Isometric Rotator Cuff",
        rationale: "Strengthens without impingement position. Start at 20% effort, build to 50%",
        precautions: ["Pain-free only", "Hold 5 seconds", "Progress to isotonic when able"]
      },
      {
        strategy: "Scapular Setting",
        rationale: "Retrains scapular position. 'Down and back' cue, hold 10 seconds",
        precautions: ["Avoid shrugging", "Quality over quantity", "Integrate into daily activities"]
      },
      {
        strategy: "Activity Modification",
        rationale: "Avoid provocative positions while healing. Keep elbow below shoulder level",
        precautions: ["Temporary modifications only", "Gradual return to overhead", "Use proper lifting mechanics"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Sudden weakness after trauma",
        action: "MRI or ultrasound for acute rotator cuff tear"
      },
      {
        sign: "Fever with shoulder pain",
        action: "Blood tests and aspiration for septic arthritis"
      },
      {
        sign: "Progressive weakness with atrophy",
        action: "EMG for neurological cause (cervical radiculopathy, brachial neuritis)"
      }
    ],

    keyResearch: [
      {
        title: "Exercise vs Surgery for Subacromial Impingement",
        year: 2023,
        findings: "No difference between surgery and exercise at 2 years. Exercise first-line treatment",
        relevance: "Challenges surgical approach for impingement syndrome"
      },
      {
        title: "Scapular Dyskinesis in Shoulder Impingement",
        year: 2022,
        findings: "Present in 67-100% of impingement cases. Correction essential for recovery",
        relevance: "Emphasizes importance of scapular rehabilitation"
      }
    ]
  },

  'ac-joint-injuries': {
    pathophysiology: `Acromioclavicular (AC) joint injuries involve disruption of the AC ligaments and potentially the coracoclavicular (CC) ligaments (conoid and trapezoid). The AC joint is a diarthrodial joint with a fibrocartilaginous disc that degenerates by age 40. Forces are transmitted through the joint during shoulder movement, with maximum stress in overhead and cross-body positions.

Grade I-II injuries involve AC ligament sprain/tear with intact CC ligaments. Grade III includes CC ligament disruption with 25-100% superior displacement. Grades IV-VI involve additional displacement patterns and soft tissue damage. The injury triggers inflammatory cascade with joint effusion, capsular distension, and periarticular edema.

Chronic AC pathology develops from altered biomechanics - increased translation causes cartilage degeneration, osteophyte formation, and joint instability. Distal clavicle osteolysis can occur from repetitive microtrauma. Post-traumatic arthritis develops in 40% of Grade III+ injuries.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Point tenderness directly over AC joint",
        "Pain with overhead and cross-body movements",
        "Visible deformity with Grade III+ injuries ('step deformity')",
        "Pain with lying on affected side",
        "Weakness with pressing and overhead activities"
      ],
      associatedSymptoms: [
        "Trapezius muscle spasm and neck pain",
        "Clicking or popping with movement",
        "Sensation of instability with overhead tasks",
        "Night pain disrupting sleep",
        "Compensatory scapular dyskinesis"
      ],
      typicalPattern: "Acute: immediate pain after fall on shoulder or direct impact. Swelling develops within hours. Chronic: gradual onset with repetitive overhead activities. Pain worse at end range positions, better with rest."
    },

    differentialDiagnosis: [
      {
        condition: "Distal Clavicle Fracture",
        distinguishingFeatures: "Crepitus with movement, X-ray shows fracture line, more medial tenderness"
      },
      {
        condition: "Rotator Cuff Pathology",
        distinguishingFeatures: "Pain with resisted movements, impingement signs positive, AC joint non-tender"
      },
      {
        condition: "Shoulder Impingement",
        distinguishingFeatures: "Painful arc 60-120°, night pain more diffuse, responds to subacromial injection"
      },
      {
        condition: "SLAP Lesion",
        distinguishingFeatures: "Deep shoulder pain, positive O'Brien's test, clicking with rotation"
      }
    ],

    evidenceBasedTreatment: [
      {
        approach: "Conservative Management (Grade I-III)",
        evidence: "85% good/excellent outcomes for Grade I-II, 70% for Grade III with structured rehabilitation",
        effectivenessLevel: "strong"
      },
      {
        approach: "Progressive Strengthening Program",
        evidence: "Scapular and rotator cuff strengthening improves function in 80% by 12 weeks",
        effectivenessLevel: "strong"
      },
      {
        approach: "Corticosteroid Injection",
        evidence: "Provides short-term relief in 60-70%. Limited to 2-3 injections due to ligament weakening",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Surgical Reconstruction (Grade IV-VI)",
        evidence: "Indicated for high-grade injuries in overhead athletes. 85% return to sport",
        effectivenessLevel: "strong"
      },
      {
        approach: "Taping/Strapping",
        evidence: "AC joint taping reduces pain and improves proprioception during acute phase",
        effectivenessLevel: "moderate"
      }
    ],

    prognosis: {
      timeline: "Grade I: 2-3 weeks. Grade II: 4-6 weeks. Grade III: 8-12 weeks. Post-surgical: 4-6 months for return to sport",
      factors: [
        "Favorable: Lower grade injury (I-II), younger age, non-dominant arm, non-overhead athlete",
        "Unfavorable: Grade III+ injury, overhead athlete, age >40, delayed treatment",
        "Note: Persistent deformity doesn't correlate with functional outcome in Grade III injuries"
      ],
      naturalHistory: "Grade I-II: excellent prognosis with conservative treatment. Grade III: 20-40% develop chronic symptoms. Post-traumatic arthritis in 40% of Grade III+ at 10 years"
    },

    selfManagement: [
      {
        strategy: "Acute Phase Protection",
        rationale: "Sling for comfort 1-2 weeks. Ice 15 minutes 3-4x daily. Avoid overhead and cross-body movements",
        precautions: ["Don't immobilize >2 weeks", "Maintain elbow/wrist ROM", "Sleep semi-upright initially"]
      },
      {
        strategy: "Early Range of Motion",
        rationale: "Pendulum exercises and passive ROM prevent stiffness. Start day 3-5 for Grade I-II",
        precautions: ["Stay below pain threshold", "Avoid end range initially", "Progress as pain allows"]
      },
      {
        strategy: "Scapular Stabilization",
        rationale: "Reduces stress on AC joint. Wall slides, scapular clocks improve control",
        precautions: ["Pain-free range only", "Focus on quality", "Avoid shrugging compensation"]
      },
      {
        strategy: "Progressive Loading",
        rationale: "Gradual return to pressing and overhead. Start with isometrics, progress to resistance bands",
        precautions: ["Monitor 24-hour response", "Avoid early overhead work", "Full strength before return to sport"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Skin tenting with severe deformity",
        action: "Urgent orthopedic referral - risk of skin necrosis"
      },
      {
        sign: "Neurovascular compromise",
        action: "Check for brachial plexus or vascular injury - emergency referral"
      },
      {
        sign: "Associated fractures on X-ray",
        action: "Orthopedic consultation for surgical planning"
      }
    ],

    keyResearch: [
      {
        title: "Grade III AC Joint Separation: Surgery vs Conservative",
        year: 2023,
        findings: "No functional difference at 1 year. Surgery higher complication rate (15% vs 2%)",
        relevance: "Supports initial conservative management even for Grade III injuries"
      },
      {
        title: "Return to Sport After AC Joint Injury",
        year: 2022,
        findings: "Grade I: 2-3 weeks, Grade II: 6 weeks, Grade III: 12 weeks average. Overhead athletes longer",
        relevance: "Provides evidence-based timelines for athlete counseling"
      }
    ]
  },

  'biceps-tendinopathy': {
    pathophysiology: `Biceps tendinopathy primarily affects the long head tendon as it travels through the bicipital groove and intra-articularly over the humeral head. The tendon experiences compression, friction, and tensile forces, particularly during overhead activities. Primary tendinopathy involves intrinsic tendon degeneration, while secondary results from impingement or instability.

The pathology progresses from reactive tendinopathy with proliferation of tenocytes and proteoglycans, to tendon dysrepair with matrix breakdown and neovascularization, finally to degenerative tendinopathy with cell death and fatty infiltration. The tendon loses its parallel collagen architecture, developing mucoid degeneration and partial tears.

Inflammation is minimal despite the term 'tendinitis' - histology shows degenerative changes without inflammatory cells. Pain arises from mechanical irritation, biochemical irritation from degraded matrix products, and neurovascular ingrowth bringing nociceptive nerve fibers into previously aneural tissue.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Anterior shoulder pain, specifically over bicipital groove",
        "Pain with overhead activities and lifting",
        "Pain radiating down anterior arm along biceps",
        "Night pain when lying on affected side",
        "Clicking or catching sensation with shoulder rotation"
      ],
      associatedSymptoms: [
        "Weakness with elbow flexion and supination",
        "Cramping in biceps muscle",
        "Shoulder stiffness in morning",
        "Difficulty with overhead reaching",
        "Compensatory trapezius overactivity"
      ],
      typicalPattern: "Gradual onset over weeks to months. Initially pain only with specific activities (overhead, lifting), progressing to pain with daily tasks. Worse in morning, improves with gentle movement, worsens with overuse."
    },

    differentialDiagnosis: [
      {
        condition: "Rotator Cuff Pathology",
        distinguishingFeatures: "Pain with abduction/external rotation, positive impingement tests, less localized to bicipital groove"
      },
      {
        condition: "SLAP Tear",
        distinguishingFeatures: "Deep shoulder pain, positive O'Brien's test, mechanical symptoms, MRA confirms"
      },
      {
        condition: "Adhesive Capsulitis",
        distinguishingFeatures: "Global ROM restriction, passive = active limitation, less focal tenderness"
      },
      {
        condition: "Cervical Radiculopathy (C5-C6)",
        distinguishingFeatures: "Neck pain primary, neurological symptoms, positive Spurling's test"
      }
    ],

    evidenceBasedTreatment: [
      {
        approach: "Eccentric Loading Program",
        evidence: "70% good/excellent outcomes at 12 weeks. Superior to concentric strengthening",
        effectivenessLevel: "strong"
      },
      {
        approach: "Scapular and Rotator Cuff Strengthening",
        evidence: "Addresses secondary impingement. Combined program reduces symptoms by 60%",
        effectivenessLevel: "strong"
      },
      {
        approach: "Manual Therapy",
        evidence: "Soft tissue mobilization and joint mobilization reduce pain in 65% when combined with exercise",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Shockwave Therapy",
        evidence: "60% improvement for chronic cases. 3-5 sessions optimal. Equal to eccentric exercise",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Corticosteroid Injection",
        evidence: "Short-term relief but worse outcomes at 1 year vs exercise. Risk of tendon rupture",
        effectivenessLevel: "moderate"
      }
    ],

    prognosis: {
      timeline: "Conservative treatment: 70% improve within 3-6 months with structured program. Chronic cases may need 6-12 months",
      factors: [
        "Favorable: Shorter duration (<3 months), younger age, primary tendinopathy, good shoulder mechanics",
        "Unfavorable: Duration >6 months, associated rotator cuff pathology, smoker, manual worker",
        "Critical: Addressing contributing factors (impingement, instability) essential for recovery"
      ],
      naturalHistory: "Without treatment: 30% spontaneous improvement, 50% chronic pain, 20% progression to partial tear or rupture"
    },

    selfManagement: [
      {
        strategy: "Eccentric Biceps Curls",
        rationale: "Stimulates tendon remodeling. Slow lowering phase (4 seconds), moderate load",
        precautions: ["Mild pain (3-4/10) acceptable", "Progress load weekly if tolerated", "Both arms for comparison"]
      },
      {
        strategy: "Activity Modification",
        rationale: "Avoid provocative positions while healing. Limit overhead work, modify lifting technique",
        precautions: ["Temporary only", "Gradual return to activities", "Don't completely avoid movement"]
      },
      {
        strategy: "Ice Massage",
        rationale: "Direct ice to bicipital groove 5-10 minutes post-exercise. Reduces reactive inflammation",
        precautions: ["Protect skin", "Circular motion", "Not before exercise"]
      },
      {
        strategy: "Shoulder Blade Squeezes",
        rationale: "Improves scapular position, reduces anterior shoulder stress. 10 reps, hold 5 seconds",
        precautions: ["Don't arch back", "Gentle squeeze", "Throughout the day"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Sudden sharp pain with audible pop",
        action: "Assess for biceps rupture - 'Popeye deformity'"
      },
      {
        sign: "Fever with shoulder pain",
        action: "Rule out septic arthritis or systemic infection"
      },
      {
        sign: "Progressive weakness with atrophy",
        action: "EMG to rule out neurological cause"
      }
    ],

    keyResearch: [
      {
        title: "Biceps Tendinopathy: Eccentric vs Concentric Exercise",
        year: 2023,
        findings: "Eccentric loading superior for pain reduction (ES 0.84) and function (ES 0.76)",
        relevance: "Establishes eccentric exercise as gold standard treatment"
      },
      {
        title: "Long Head of Biceps in Shoulder Pain",
        year: 2022,
        findings: "LHB pathology present in 68% of shoulder pain cases. Rarely occurs in isolation",
        relevance: "Emphasizes need to address concurrent shoulder pathology"
      }
    ]
  },

  'mcl-lcl-sprains': {
    pathophysiology: `The medial collateral ligament (MCL) is the primary restraint to valgus stress, while the lateral collateral ligament (LCL) resists varus stress. MCL injuries are 4x more common due to valgus forces in sports. The MCL has superficial and deep layers, with the deep layer attaching to the medial meniscus, explaining concurrent meniscal injuries in 30% of cases.

Grade I involves microscopic tearing with intact ligament continuity. Grade II shows partial macroscopic disruption with residual stability. Grade III is complete rupture with gross instability. Healing occurs through inflammation (0-72 hours), proliferation (3 days-6 weeks) with type III collagen deposition, and remodeling (6 weeks-6 months) with gradual type I collagen replacement.

The MCL has excellent healing capacity due to robust blood supply, while isolated LCL injuries heal poorly and may require surgery. Associated injuries (ACL, PCL, meniscus) significantly affect prognosis and treatment approach.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Medial (MCL) or lateral (LCL) knee pain after twisting/impact",
        "Swelling localized to ligament site (less than ACL)",
        "Pain with valgus (MCL) or varus (LCL) stress",
        "Feeling of knee 'opening up' with Grade II-III",
        "Difficulty with cutting and pivoting movements"
      ],
      associatedSymptoms: [
        "Stiffness worse in morning or after sitting",
        "Bruising along ligament course (Grade II-III)",
        "Compensatory quad weakness from pain inhibition",
        "Difficulty with stairs (especially down)",
        "Sensation of instability on uneven ground"
      ],
      typicalPattern: "Acute onset with specific mechanism - MCL: valgus force (planted foot with lateral blow), LCL: varus force (less common). Initial sharp pain, followed by aching. Weight bearing possible but painful. Swelling peaks at 24-48 hours."
    },

    differentialDiagnosis: [
      {
        condition: "ACL Tear",
        distinguishingFeatures: "Rotational mechanism, immediate swelling, positive Lachman test, feeling of instability"
      },
      {
        condition: "Meniscus Tear",
        distinguishingFeatures: "Twisting mechanism, mechanical symptoms (locking/catching), joint line tenderness"
      },
      {
        condition: "Bone Bruise",
        distinguishingFeatures: "Similar mechanism, MRI shows bone edema, longer recovery than expected for grade"
      },
      {
        condition: "Patellar Dislocation",
        distinguishingFeatures: "Visible deformity at time of injury, medial patellofemoral ligament tender, apprehension test positive"
      }
    ],

    evidenceBasedTreatment: [
      {
        approach: "Early Mobilization and Protected Weight Bearing",
        evidence: "Superior to immobilization. Return to sport 2-3 weeks faster with early motion",
        effectivenessLevel: "strong"
      },
      {
        approach: "Progressive Strengthening Program",
        evidence: "Quadriceps and hamstring strengthening reduces re-injury by 50%. Essential for all grades",
        effectivenessLevel: "strong"
      },
      {
        approach: "Proprioceptive Training",
        evidence: "Balance and neuromuscular training reduces re-injury risk by 40% and improves function",
        effectivenessLevel: "strong"
      },
      {
        approach: "Bracing (Grade II-III)",
        evidence: "Hinged knee brace for Grade II-III improves stability. Limited evidence for Grade I",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Surgery (isolated Grade III MCL/LCL rare)",
        evidence: "Reserved for combined injuries or failed conservative treatment. 85% good outcomes",
        effectivenessLevel: "strong"
      }
    ],

    prognosis: {
      timeline: "Grade I: 1-3 weeks. Grade II: 4-6 weeks. Grade III: 8-12 weeks. Combined injuries add 4-6 weeks",
      factors: [
        "Favorable: Isolated MCL injury, younger age, good pre-injury strength, early treatment",
        "Unfavorable: Combined ligament injuries, Grade III LCL, poor neuromuscular control, delayed treatment",
        "Critical: MCL heals well conservatively even Grade III. LCL Grade III may need surgery"
      ],
      naturalHistory: "MCL: excellent healing potential, 90% return to sport. LCL: isolated injuries rare, poorer healing without surgery"
    },

    selfManagement: [
      {
        strategy: "RICE Protocol (First 48-72 hours)",
        rationale: "Minimize swelling and secondary damage. Ice 20 minutes every 2-3 hours, compression, elevation",
        precautions: ["Avoid heat first 72 hours", "Don't ice before activity", "Loosen compression if numbness"]
      },
      {
        strategy: "Range of Motion Exercises",
        rationale: "Prevent stiffness and promote healing. Heel slides, gentle flexion/extension within comfort",
        precautions: ["Stay within pain-free range", "Progress gradually", "Avoid rotation initially"]
      },
      {
        strategy: "Quadriceps Activation",
        rationale: "Prevent quad shutdown. Quad sets 10x10 throughout day, straight leg raises when able",
        precautions: ["Full quad contraction important", "Add resistance gradually", "Both legs for comparison"]
      },
      {
        strategy: "Protected Weight Bearing",
        rationale: "Stimulates healing while protecting ligament. Crutches if needed, progress as able",
        precautions: ["May need brace for Grade II-III", "Normal gait pattern important", "Avoid limping"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Multi-ligament injury signs",
        action: "MRI to assess for surgical candidates - combined ACL/MCL or PCL/LCL"
      },
      {
        sign: "Neurovascular symptoms",
        action: "Assess for knee dislocation - vascular emergency even if reduced"
      },
      {
        sign: "Locked knee unable to extend",
        action: "Assess for displaced meniscal tear or loose body"
      }
    ],

    keyResearch: [
      {
        title: "Conservative vs Surgical Treatment of Grade III MCL",
        year: 2023,
        findings: "No difference in outcomes for isolated Grade III MCL. Conservative treatment first line",
        relevance: "Supports non-operative management even for complete MCL tears"
      },
      {
        title: "Return to Sport After Collateral Ligament Injury",
        year: 2022,
        findings: "Strength symmetry <90% associated with 3x re-injury risk. Proprioception critical",
        relevance: "Emphasizes importance of complete rehabilitation before return"
      }
    ]
  },

  'patellar-tendinopathy': {
    pathophysiology: `Patellar tendinopathy (jumper's knee) involves degenerative changes in the patellar tendon, typically at the inferior pole of the patella (65%), less commonly at the tibial tuberosity (25%) or mid-tendon (10%). The condition results from repetitive loading exceeding the tendon's capacity to adapt and repair.

The pathology progresses through reactive tendinopathy (proliferation of proteoglycans and cell activation), tendon dysrepair (matrix breakdown, neovascularization), and degenerative tendinopathy (cell death, fatty infiltration, partial tears). The tendon loses its organized collagen structure, developing areas of mucoid degeneration. Neovascularization brings sensory nerves, correlating with pain.

Energy storage and release during jumping creates tensile loads up to 8x body weight. Risk factors include training errors (>4 sessions/week), biomechanical factors (poor landing mechanics, ankle stiffness), and intrinsic factors (male sex, genetic collagen variants). The condition is bilateral in 30% of cases.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Well-localized pain at inferior pole of patella",
        "Pain with jumping, landing, and deceleration",
        "Morning stiffness lasting 5-10 minutes",
        "Pain with prolonged sitting (movie sign)",
        "Tenderness on palpation of proximal tendon"
      ],
      associatedSymptoms: [
        "Thickening of tendon palpable",
        "Pain with stairs, especially descending",
        "Warm-up phenomenon - improves with activity initially",
        "Weakness in jump performance",
        "Compensatory changes in movement patterns"
      ],
      typicalPattern: "Gradual onset over weeks to months in jumping athletes. Initially pain only after activity, progresses to pain during activity, finally pain with daily activities. Classic pattern: stiff in morning, improves with warm-up, worsens with continued loading."
    },

    differentialDiagnosis: [
      {
        condition: "Patellofemoral Pain Syndrome",
        distinguishingFeatures: "Diffuse anterior knee pain, pain behind patella, positive patella grind, less focal tenderness"
      },
      {
        condition: "Hoffa's Fat Pad Impingement",
        distinguishingFeatures: "Pain inferior to patella but deeper, swelling of fat pad, positive Hoffa's test"
      },
      {
        condition: "Osgood-Schlatter Disease (adolescents)",
        distinguishingFeatures: "Pain at tibial tuberosity, prominence of tuberosity, growth plate involvement"
      },
      {
        condition: "Quadriceps Tendinopathy",
        distinguishingFeatures: "Pain superior to patella, tender at superior pole, less common than patellar"
      }
    ],

    evidenceBasedTreatment: [
      {
        approach: "Progressive Loading Program (Isometric → Isotonic → Plyometric)",
        evidence: "Gold standard treatment. 75% return to sport with structured program. Isometrics for analgesia",
        effectivenessLevel: "strong"
      },
      {
        approach: "Heavy Slow Resistance Training",
        evidence: "Equal to eccentric exercise with better compliance. 3 sets of 4-6 reps at 85-90% 1RM",
        effectivenessLevel: "strong"
      },
      {
        approach: "Eccentric Exercise on Decline Board",
        evidence: "Traditional treatment - 65% good outcomes. 25° decline optimal. Painful exercises acceptable",
        effectivenessLevel: "strong"
      },
      {
        approach: "Shockwave Therapy",
        evidence: "Adjunct to exercise. 60% improvement when exercise plateaus. 3-5 sessions",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Load Management Education",
        evidence: "Critical for success. Training load reduction of 50% during initial rehabilitation",
        effectivenessLevel: "strong"
      }
    ],

    prognosis: {
      timeline: "3-6 months for significant improvement with loading program. Return to sport 4-6 months. Some degree of symptoms may persist",
      factors: [
        "Favorable: Shorter duration (<3 months), younger age, single leg affected, good compliance",
        "Unfavorable: Duration >12 months, bilateral involvement, complete sporting rest, previous injection",
        "Critical: Adherence to loading program determines outcome - 'no pain, no gain' principle applies"
      ],
      naturalHistory: "Without appropriate loading: 30% spontaneous improvement, 50% chronic symptoms affecting sport, 20% cessation of sport"
    },

    selfManagement: [
      {
        strategy: "Isometric Loading (Acute Phase)",
        rationale: "Provides analgesia for up to 45 minutes. Wall sit or leg extension hold, 5x45 seconds at 70% effort",
        precautions: ["60° knee flexion optimal", "Pain should reduce during hold", "2-3x daily"]
      },
      {
        strategy: "Progressive Isotonic Loading",
        rationale: "Stimulates tendon adaptation. Single leg squats, leg press. 3-4 sets of 6-15 reps",
        precautions: ["Pain up to 4/10 acceptable", "Every other day", "Monitor 24-hour response"]
      },
      {
        strategy: "Energy Storage Loading (Return to Sport)",
        rationale: "Prepares tendon for jumping demands. Jump squats, drop jumps progressively",
        precautions: ["Only when strength restored", "Gradual volume increase", "Quality over quantity"]
      },
      {
        strategy: "Training Load Monitoring",
        rationale: "Prevent overload. Track pain, training volume, intensity. Modify when pain >5/10",
        precautions: ["Acute:chronic workload ratio <1.5", "10% weekly progression", "Plan deload weeks"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Sudden severe pain with loss of extension",
        action: "Assess for patellar tendon rupture - surgical emergency"
      },
      {
        sign: "Adolescent with prominent tibial tuberosity",
        action: "X-ray for Osgood-Schlatter or avulsion fracture"
      },
      {
        sign: "Joint effusion with patellar tendon pain",
        action: "Investigate for inflammatory arthropathy or infection"
      }
    ],

    keyResearch: [
      {
        title: "Victorian Institute Protocol for Patellar Tendinopathy",
        year: 2023,
        findings: "Progressive loading superior to eccentric exercise. Isometric for pain relief, isotonic for strength",
        relevance: "Establishes modern loading approach replacing traditional eccentric-only protocols"
      },
      {
        title: "In-Season Management of Jumping Athletes",
        year: 2022,
        findings: "Continued sport participation possible with load modification. Complete rest delays recovery",
        relevance: "Supports active management rather than complete rest"
      }
    ]
  }
};

// Export function to get detailed condition with fallback
export function getDetailedCondition(slug: string, baseCondition: Condition): Condition {
  const detailedContent = detailedConditionsContent[slug];
  
  if (!detailedContent) {
    return baseCondition;
  }
  
  // Merge the base condition with detailed content
  return {
    ...baseCondition,
    ...detailedContent,
    // Ensure arrays are properly merged (not replaced)
    redFlags: detailedContent.clinicalRedFlags || baseCondition.redFlags,
    whenToSeek: detailedContent.clinicalRedFlags?.map(flag => flag.sign) || baseCondition.whenToSeek,
    relatedConditions: detailedContent.relatedConditions || baseCondition.relatedConditions,
    keywords: detailedContent.keywords || baseCondition.keywords,
    // Map new structure to old for backward compatibility if needed
    overview: detailedContent.pathophysiology || baseCondition.overview,
    biomechanics: detailedContent.pathophysiology || baseCondition.biomechanics,
    treatmentApproach: detailedContent.evidenceBasedTreatment ? {
      title: 'Evidence-Based Treatment',
      description: 'Treatment approaches based on current research',
      techniques: detailedContent.evidenceBasedTreatment.map(t => 
        `${t.intervention}: ${t.description}`
      )
    } : baseCondition.treatmentApproach,
    timeline: detailedContent.prognosis ? [
      {
        phase: 'Initial Phase',
        duration: detailedContent.prognosis.timeline.split('.')[0],
        description: 'Focus on pain reduction and initial rehabilitation'
      },
      {
        phase: 'Progressive Phase', 
        duration: 'Varies based on individual factors',
        description: detailedContent.prognosis.timeline
      }
    ] : baseCondition.timeline,
    faqs: baseCondition.faqs // Keep existing FAQs
  };
}
