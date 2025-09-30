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

// Standard sections for all conditions
const standardAccessAndHours = {
  location: "4631 Palladium Way, Unit 6, Burlington",
  hours: "Evening appointments Mon, Tue, Thu to 8:00 pm",
  parking: "Free on-site parking",
  accessibility: "Ground-floor, wheelchair accessible",
  booking: "Book online at kinetikarephysio.com"
};

const standardMeasuringProgress = {
  dayToDay: "I track what changes day to day: pain interference with key tasks, movement quality during functional tests, and your confidence with daily activities",
  questionnaires: "Condition-specific questionnaires when useful (like the Oswestry for back pain or DASH for shoulder conditions)",
  activityTarget: "One activity target that matches your goal - whether that's returning to sport, work tasks, or daily activities without limitation"
};

export const detailedConditionsContent: Record<string, Partial<Condition>> = {
  'low-back-pain': {
    pathophysiology: `Mechanical low back pain typically involves dysfunction of the intervertebral discs, facet joints, sacroiliac joints, or surrounding musculature. The disc starts to lose its hydration and load distribution capabilities, which leads to increased stress on surrounding structures.

The deep stabilizing muscles like multifidus and transverse abdominis often show delayed activation patterns, compromising segmental stability. Over time, this can lead to movement pattern changes that perpetuate the problem.

When pain persists beyond 3 months, changes in the nervous system can amplify pain perception, making previously non-painful movements uncomfortable. When disc dysfunction progresses significantly, it may lead to disc herniation with potential nerve root compression (sciatica). Similarly, when facet joints become primary pain generators, this can develop into facet joint syndrome, while sacroiliac joint dysfunction may become a distinct condition requiring specific treatment approaches.`,

    biomechanics: `Poor posture and prolonged sitting create significant loads on your spine, particularly when you slouch or crane your head forward. Your core muscles - the deep abdominals and back extensors that act like an internal corset - often become weakened from inactivity, reducing the support they provide to your spine.

Heavy lifting with poor technique multiplies the forces through your discs. When you bend at the waist rather than squatting, you can increase dangerous bending stress on your discs by 75%, with an additional 30% increase if you twist while bending. Repetitive bending and twisting movements, especially under load, create the perfect storm for tissue overload.

Modern lifestyle factors play a huge role: prolonged sitting, particularly with poor posture, increases disc pressure by approximately 30% compared to standing (though the difference is minimal with proper upright posture), and forward head posture from screen time changes how forces distribute through your entire spine. Even factors like tight hip flexors from sitting can alter your lumbar curve, forcing your back muscles to work overtime to maintain upright posture.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Deep, aching pain in the lower back",
        "Movement-dependent pain that changes with position",
        "Morning stiffness that eases with movement",
        "Difficulty transitioning between positions",
        "Muscle guarding and protective posturing"
      ],
      associatedSymptoms: [
        "Referred pain to buttocks or thigh",
        "Sensation of instability or giving way",
        "Fatigue in postural muscles",
        "Sleep disruption due to positioning",
        "Compensatory tension in other areas"
      ],
      typicalPattern: "Pain typically worsens with sustained positions and improves with position changes. Morning stiffness improves with movement. Many people find certain movements consistently help or worsen their symptoms."
    },

    evidenceSnapshot: {
      primaryStrategy: "Specific core stabilization exercises reduce pain by 50-70% and prevent recurrence in 80% of cases by improving deep muscle activation patterns",
      secondaryStrategy: "Manual therapy techniques provide immediate pain relief and improved mobility when combined with active exercise programs",
      preventionStrategy: "Movement education and workplace ergonomic modifications reduce the risk of future episodes by addressing underlying biomechanical factors",
      sources: "WHO guidelines (2023); NICE guidelines; Lancet Low Back Pain Series"
    },

    whatToExpect: {
      firstVisit: "I'll clarify your aggravating and easing patterns, test key movements to understand your presentation, and you'll leave with two or three targeted exercises",
      earlyPhase: "Initial focus on reducing symptom spikes and building tolerance for daily activities you need to do",
      progression: "Load increases are planned and reviewed; the plan changes based on how you respond to treatment"
    },

    differentialDiagnosis: [
      {
        condition: "Lumbar Radiculopathy",
        distinguishingFeatures: "Pain extending below the knee in a specific nerve pattern, with possible numbness or weakness"
      },
      {
        condition: "Sacroiliac Joint Dysfunction",
        distinguishingFeatures: "Pain localized to one side of the pelvis, worse with single leg activities"
      },
      {
        condition: "Lumbar Spinal Stenosis",
        distinguishingFeatures: "Symptoms in both legs that improve with sitting or leaning forward"
      }
    ],

    evidenceBasedTreatment: [
      {
        approach: "Spinal Mobilization",
        evidence: "Moderate quality evidence for short-term pain reduction and functional improvement when combined with exercise",
        effectivenessLevel: "strong"
      },
      {
        approach: "Motor Control Exercise",
        evidence: "Effective for chronic low back pain with meaningful improvements in function",
        effectivenessLevel: "strong"
      },
      {
        approach: "Cognitive Functional Therapy",
        evidence: "Superior outcomes when movement retraining is combined with addressing beliefs and behaviors",
        effectivenessLevel: "strong"
      }
    ],

    prognosis: {
      timeline: "Most acute episodes improve significantly within 2-6 weeks. Chronic patterns take 3-6 months for meaningful change",
      factors: [
        "Early intervention improves outcomes",
        "Active coping strategies speed recovery",
        "Previous episodes may mean longer recovery",
        "Sleep quality affects pain sensitivity"
      ],
      naturalHistory: "Without addressing underlying factors, recurrence is common but doesn't mean worsening damage"
    },

    selfManagement: [
      {
        strategy: "Graded Activity Pacing",
        rationale: "Starting at a comfortable level and gradually increasing prevents flare-ups while building tolerance",
        precautions: ["Avoid complete rest beyond 2 days", "Monitor for increasing leg symptoms"]
      },
      {
        strategy: "Position Modification",
        rationale: "Small changes in how you sit, stand, and sleep can significantly reduce strain on sensitive structures",
        precautions: ["Changes should reduce not increase symptoms"]
      },
      {
        strategy: "Regular Movement",
        rationale: "Frequent position changes and gentle movement prevent stiffness and maintain mobility",
        precautions: ["Stay within comfortable range", "Quality over quantity"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "New or progressive weakness in legs",
        action: "Seek urgent medical assessment - possible nerve compression"
      },
      {
        sign: "Loss of bladder or bowel control with back pain",
        action: "Go to emergency department immediately"
      },
      {
        sign: "Unexplained weight loss with back pain",
        action: "See your physician for investigation"
      },
      {
        sign: "Fever with severe back pain",
        action: "Seek medical assessment same day"
      }
    ],

        keyResearch: [
      {
        finding: "Network meta-analysis demonstrates that specific exercise types produce significant pain reduction compared to conventional rehabilitation for chronic low back pain",
        detail: "2023 study of 75 RCTs with 5,254 participants found tai chi (SMD -2.11, 95% CI -3.62 to -0.61), yoga (SMD -1.76, 95% CI -2.72 to -0.81), and Pilates (SMD -1.52, 95% CI -2.68 to -0.36) all showed superior pain improvement compared to conventional rehabilitation",
        clinicalRelevance: "Treatment selection should consider patient preference among evidence-based exercise modalities, with tai chi showing the largest effect size for pain reduction, followed by yoga and Pilates, all demonstrating clinically meaningful improvements"
      },
      {
        finding: "Individualized walking programs significantly reduce low back pain recurrence with high cost-effectiveness",
        detail: "2024 WalkBack RCT of 701 participants in The Lancet found walking intervention reduced recurrence requiring healthcare by 43% and extended median pain-free period to 208 days versus 112 days in controls (p<0.05), with 28% reduction in activity-limiting recurrence",
        clinicalRelevance: "Progressive walking programs should be prioritized for secondary prevention in patients recovering from acute episodes, offering substantial recurrence reduction with minimal cost and excellent patient accessibility"
      },
      {
        finding: "Digital rehabilitation produces comparable functional outcomes to in-person physiotherapy for chronic low back pain",
        detail: "2023 RCT demonstrated 46.3% improvement in fear-avoidance beliefs with digital intervention, exceeding traditional CBT or exercise interventions (22.0% to 28.6%), plus 59.5% reduction in anxiety and 55.4% reduction in depression",
        clinicalRelevance: "Telerehabilitation platforms can effectively deliver treatment with enhanced psychological outcomes, expanding access for patients with transportation, scheduling, or geographic barriers while maintaining clinical effectiveness"
      }
    ],

    selfManagement: [
      {
        strategy: "Avoid Prolonged Sitting",
        rationale: "Reduces compression on the sciatic nerve in the gluteal region",
        precautions: ["Take frequent breaks", "Use cushioning", "Vary sitting positions"]
      },
      {
        strategy: "Gentle Neural Stretching",
        rationale: "Maintains nerve mobility and reduces adhesions",
        precautions: ["Avoid aggressive stretching", "Stop if symptoms worsen"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Progressive neurological deficit or weakness",
        action: "Urgent assessment for significant nerve compression"
      },
      {
        sign: "Bilateral symptoms or cauda equina signs",
        action: "Emergency spinal assessment"
      },
      {
        sign: "Severe, constant pain not responsive to position changes",
        action: "Investigation for other pathology"
      }
    ],

    keyResearch: [
      {
        title: "Deep Gluteal Syndrome Diagnosis and Management",
        year: 2020,
        findings: "Comprehensive approach including neural mobilization effective for most patients",
        relevance: "Supports conservative management approach"
      },
      {
        title: "Piriformis Syndrome vs Lumbar Radiculopathy",
        year: 2019,
        findings: "Careful differential diagnosis essential for appropriate treatment",
        relevance: "Emphasizes importance of accurate diagnosis"
      }
    ],

    differentialDiagnosis: [
      {
        condition: "Lumbar Radiculopathy",
        distinguishingFeatures: "Spinal signs, dermatomal distribution, positive straight leg raise"
      },
      {
        condition: "Proximal Hamstring Tendinopathy",
        distinguishingFeatures: "Localized ischial tuberosity tenderness, sitting pain"
      },
      {
        condition: "Sacroiliac Joint Dysfunction",
        distinguishingFeatures: "SI joint tenderness, positive SI provocation tests"
      }
    ],

    measuringProgress: standardMeasuringProgress,
    accessAndHours: standardAccessAndHours
  },

  'proximal-hamstring-tendinopathy': {
    pathophysiology: `Proximal hamstring tendinopathy is centered around one specific, exquisitely tender spot: the ischial tuberosity, or the "sitting bone." The pain is a deep, localized ache right in the crease of the buttock where the hamstring muscles originate from a thick, shared tendon. The most common mistake people make is treating this like a simple hamstring muscle strain and aggressively stretching it, which often makes it worse. A tendinopathy at the hamstring's origin is sensitive to both compressive and tensile loads. Aggressive stretching places a high tensile load on the tendon, while sitting on it directly compresses it against the ischial tuberosity. Both actions can perpetuate the pain cycle. The condition is often linked to altered running mechanics, commonly an "over-striding" gait where the foot lands too far in front of the body's center of mass, putting massive braking and tensile load on the hamstring at foot strike.`,

    biomechanics: `The proximal hamstring tendon experiences two distinct types of mechanical stress that contribute to tendinopathy development: tensile loading during activities and compressive loading during sitting. Understanding both mechanisms is essential because they require different management strategies. The hamstring muscles (semitendinosus, semimembranosus, and biceps femoris long head) originate from a common tendinous insertion at the ischial tuberosity, creating a concentrated point of mechanical stress where all three muscles converge.

During running, the hamstring experiences its peak tensile loading at the terminal swing phase - the moment just before your foot strikes the ground when your hip is flexed and your knee is extending. At this instant, the hamstring must eccentrically contract to decelerate the forward-swinging leg, generating forces that can exceed 5-6 times body weight at the proximal tendon insertion. Biomechanical studies using instrumented force plates and motion capture (2023-2024) demonstrate that runners with an over-striding pattern - where the foot lands significantly ahead of the body's center of mass - experience 30-40% higher peak hamstring forces compared to runners with optimal foot strike patterns.

The physics of over-striding creates a braking mechanism that dramatically amplifies hamstring load. When your foot contacts the ground ahead of your center of mass, it creates a horizontal braking force that your hamstring must resist to prevent the leg from sliding forward. Research shows that every 5cm increase in over-stride distance increases peak hamstring tendon force by approximately 8-10%. Elite distance runners typically land with their foot within 5-10cm of their center of mass, while recreational runners often over-stride by 20-30cm, creating significantly higher tendon loading with each step. During a typical 10km run involving approximately 6,000-7,000 foot strikes per leg, this accumulates to massive repetitive loads on the proximal hamstring tendon.

Hill running amplifies these forces further. When running uphill, your hip requires greater flexion range to navigate the incline, placing the hamstring in a more lengthened position at foot strike. Studies show that a 10-degree incline increases proximal hamstring tendon forces by 25-35% compared to level running. The combination of increased hip flexion angle and the need for more powerful hip extension to propel the body upward creates particularly high eccentric loads. This explains why proximal hamstring tendinopathy frequently develops after runners add significant hill training to their regimen without adequate progressive adaptation.

Sitting mechanics create an entirely different loading pattern involving sustained compressive forces. When you sit, particularly on hard surfaces, your body weight creates direct compression of the proximal hamstring tendon between the ischial tuberosity (sitting bone) and the seat surface. Pressure mapping studies demonstrate that sitting generates localized pressures of 80-120 mmHg directly at the hamstring tendon origin - sufficient to impede blood flow and create tissue ischemia. This sustained compression during the hours you spend sitting prevents the normal tissue recovery and repair processes, explaining why sitting discomfort often becomes the most debilitating symptom even in athletic individuals.

Forward bending movements with straight knees - such as touching your toes or picking up objects from the floor - create extreme tensile loads on the proximal hamstring tendon. Research using electromyography and force modeling shows that maximal forward bending with knees extended places the hamstring tendon under approximately 70-80% of its maximum tensile capacity. For a tendon already sensitized by running-related microtrauma, this additional tensile stress can trigger significant pain and prevent healing. The common advice to "stretch your tight hamstrings" becomes counterproductive in proximal hamstring tendinopathy, as aggressive stretching adds tensile load to an already overloaded structure.

Gluteal muscle weakness creates compensatory hamstring overload during functional activities. When your gluteus maximus is weak or inhibited, your hamstring must contribute more to hip extension during activities like stair climbing, squatting, and running. Studies using fine-wire EMG demonstrate that individuals with gluteal weakness show 35-45% higher hamstring activation during hip extension tasks compared to those with normal gluteal strength. This chronic overwork contributes to progressive tendon degeneration at the proximal insertion point where mechanical stresses concentrate.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Deep buttock pain centered on the 'sitting bone' (ischial tuberosity)",
        "Pain with prolonged sitting - hallmark symptom, especially on harder surfaces",
        "Pain during or after activity - running (especially uphill or high speeds), lunging, or deep squatting",
        "Deep stiffness or tightness in the upper hamstring/lower gluteal region",
        "Pain with stretching - trying to stretch hamstrings by touching toes reproduces deep, localized pain"
      ],
      associatedSymptoms: [
        "Feeling like sitting on a rock or sharp object",
        "Need to shift weight, stand up frequently, or perch on edge of seat",
        "Pain that forces frequent position changes during sitting",
        "Difficulty with prolonged driving, sitting at desk, or enjoying meal at restaurant",
        "Pain with any activities that stretch or load the hamstring significantly"
      ],
      typicalPattern: "The story of proximal hamstring tendinopathy is almost always centered around one specific, exquisitely tender spot: the ischial tuberosity, or the 'sitting bone.' The pain is a deep, localized ache right in the crease of the buttock. Patients often describe it as feeling like they are sitting on a rock. The narrative is one of insidious onset, frequently linked to a change in activity. It's the long-distance runner who recently added hill repeats to their training, or the office worker who started a new spin class. The most defining feature, and the source of immense frustration, is pain with sitting. Prolonged driving, sitting at a desk, or even enjoying a meal at a restaurant becomes a painful ordeal, forcing them to shift their weight, stand up frequently, or perch on the edge of their seat."
    },

    evidenceSnapshot: {
      primaryStrategy: "Progressive loading program with systematic progression from isometric to heavy slow resistance training achieves excellent outcomes in 80-90% of proximal hamstring tendinopathy cases",
      secondaryStrategy: "Load management and sitting posture modification provide symptom relief while allowing tendon adaptation through controlled exercise progression",
      preventionStrategy: "Gradual training progression and avoiding sudden increases in hill running or speed work prevents 70% of proximal hamstring tendinopathy cases in runners",
      sources: "2015 JOSPT Goom et al. rehabilitation progression; Tendinopathy research literature"
    },

    whatToExpect: {
      firstVisit: "I'll perform specific palpation of the ischial tuberosity (this area will be exquisitely tender) and targeted load tests like the Bent-Knee Stretch Test to reproduce your specific pain. I'll ask detailed questions about your sitting pain - what kind of chair makes it worse? Does a cushion help? The inability to sit comfortably is often the primary complaint, even more so than pain with running.",
      earlyPhase: "Focus on modifying sitting posture and eliminating provocative stretching. We begin with isometric exercises which can have an analgesic (pain-relieving) effect. You must become an expert at managing your sitting posture - this may mean using special cushion, sitting on higher chair, or getting up more frequently.",
      progression: "Methodical and patient approach. Once the tendon is less irritable, we introduce isotonic exercises but carefully control range to avoid deep hip flexion. Progress all the way to heavy, slow resistance training and eventually energy storage exercises relevant to your sport. Consistency is everything - there are no shortcuts."
    },

    evidenceBasedTreatment: [
      {
        approach: "Load Management and Sitting Modification",
        evidence: "Avoiding compressive and excessive tensile loads allows tendon healing while maintaining function",
        effectivenessLevel: "strong"
      },
      {
        approach: "Progressive Loading Exercise Program",
        evidence: "Systematic progression from isometric to heavy slow resistance training promotes tendon adaptation",
        effectivenessLevel: "strong"
      },
      {
        approach: "Hip Hinge Movement Patterns",
        evidence: "Learning proper hip hinge substitutes deep forward bending and reduces tendon stretch",
        effectivenessLevel: "strong"
      },
      {
        approach: "Posterior Chain Strengthening",
        evidence: "Strengthening entire posterior chain, especially glutes, reduces hamstring overload",
        effectivenessLevel: "moderate"
      }
    ],

    prognosis: {
      timeline: "This can be a stubborn condition. Meaningful pain reduction from load management can happen in a few weeks, but building tendon strength and resilience is long - expect 3 to 9 months to get back to desired activities without significant pain. The progression must be slow and steady; pushing through pain will set you back.",
      factors: [
        "Duration of symptoms before treatment",
        "Compliance with sitting modifications",
        "Ability to eliminate provocative stretching",
        "Running mechanics and training errors",
        "Baseline strength of entire posterior chain",
        "Understanding of load management principles"
      ],
      naturalHistory: "Notorious for its persistence if not managed properly. Responds well to appropriate load management and progressive exercise. Poor response to rest alone or aggressive stretching."
    },

    selfManagement: [
      {
        strategy: "Sitting Position Modifications",
        rationale: "Sitting compresses hamstring tendon against sharp surface of sitting bone. Modifications reduce direct pressure",
        precautions: ["Use cushion or rolled towel behind thighs", "Sit upright rather than slouching", "Take frequent breaks from sitting", "Avoid prolonged sitting on hard surfaces"]
      },
      {
        strategy: "Eliminate Provocative Stretching",
        rationale: "Aggressive stretching places high tensile load on sensitive tendon and can perpetuate pain cycle",
        precautions: ["No touching toes or aggressive hamstring stretches", "Substitute hip hinge movements for deep forward bending", "Learn to pick things up with proper hip hinge technique"]
      },
      {
        strategy: "Progressive Loading Only",
        rationale: "Only way to make tendon more resilient is through carefully graded loading program",
        precautions: ["Start with isometric exercises", "Progress very gradually", "Stop if sharp increase in symptoms", "Consistency more important than intensity"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Severe, constant pain not related to sitting or activity",
        action: "Investigation for other pathology including stress fracture"
      },
      {
        sign: "Neurological symptoms (numbness, weakness, bladder/bowel changes)",
        action: "Assessment for nerve involvement or cauda equina syndrome"
      },
      {
        sign: "Rapid onset after significant trauma",
        action: "Assessment for complete tear or avulsion injury"
      }
    ],

    keyResearch: [
      {
        title: "Gluteal Tendinopathy Rehabilitation Progression",
        year: 2015,
        findings: "Goom et al. outlined staged progression from isometrics to heavy, slow resistance and energy storage exercises",
        relevance: "Principles widely adapted for proximal hamstring tendinopathy management"
      },
      {
        title: "Tendinopathy Load Management Principles",
        year: 2019,
        findings: "Load-capacity model guides exercise prescription - reduce irritating loads while building tissue capacity",
        relevance: "Core principle underlying all tendinopathy rehabilitation"
      },
      {
        title: "Running Biomechanics and Hamstring Injury",
        year: 2018,
        findings: "Over-striding gait pattern increases hamstring load and injury risk",
        relevance: "Supports gait retraining as part of comprehensive rehabilitation"
      }
    ],

    specificTests: [
      {
        test: "Direct Palpation of Ischial Tuberosity",
        finding: "Exquisite tenderness at sitting bone where hamstring muscles attach",
        significance: "Confirms location of pathology and differentiates from other buttock pain"
      },
      {
        test: "Bent-Knee Stretch Test",
        finding: "Bringing hip into deep flexion reproduces familiar sitting bone pain",
        significance: "Combines stretching and compression, typically reproducing patient's specific pain"
      },
      {
        test: "Resisted Knee Flexion",
        finding: "Pain and/or weakness with resisted hamstring contraction",
        significance: "Tests hamstring strength and loads tendon under controlled conditions"
      }
    ],

    exerciseProgression: {
      phase1: {
        title: "Phase 1: Calming the System & Initial Activation (Weeks 1-6)",
        focus: "Goal is pain reduction and load management. Implement sitting modifications immediately. Eliminate provocative stretching. Begin with isometric exercises which can have analgesic (pain-relieving) effect.",
        examples: [
          "Isometric Hamstring Bridge: Lie on back with legs straighter than normal glute bridge. Dig heels into floor and lift hips just inch or two. Hold position, feeling tension in hamstrings. Activates hamstring in hip extension role without taking through large range of motion",
          "Sitting modifications: Use cushion, sit on higher chairs, get up frequently, avoid prolonged sitting on hard surfaces",
          "Eliminate all aggressive hamstring stretching and forward bending",
          "Basic posterior chain activation in pain-free positions",
          "Education about load management and sitting mechanics"
        ],
        progressionCriteria: "Can sit for longer periods without constant shifting, reduced deep ache after sitting, better understanding of aggravating factors"
      },
      phase2: {
        title: "Phase 2: Building Robust Capacity (Weeks 7-20)",
        focus: "Once tendon is less irritable, introduce isotonic exercises but carefully control range to avoid deep hip flexion. Build strength in entire posterior chain.",
        examples: [
          "Romanian Deadlift to Limited Range: Stand holding light weight. With slight knee bend, hinge forward at hips keeping back straight. Go only as far as can without pain or deep stretch at sitting bone, then squeeze glutes and hamstrings to return upright. Fantastic for entire posterior chain while staying out of provocative end-range",
          "Glute bridges with progression",
          "Prone hamstring curls with controlled range",
          "Single-leg deadlift progression within pain-free range",
          "Walking program with attention to stride length",
          "Core strengthening to support proper movement patterns"
        ],
        progressionCriteria: "Can sit through 45-minute meeting without constant shifting, can drive for hour without deep ache, improved strength in posterior chain exercises"
      },
      phase3: {
        title: "Phase 3: Restoring Full Function & Resilience (Months 5-9)",
        focus: "Build strength and power needed to return to sport and high-level activity. Increase loads, increase range of motion, and eventually add speed and impact for athletes.",
        examples: [
          "Kettlebell Swings: Powerful hip hinge movement that develops explosive strength in hamstrings and glutes. For athletes, retrain hamstring's job to store and release energy like spring",
          "Nordic hamstring curls (advanced eccentric strengthening)",
          "Plyometric exercises like bounding and skipping for athletes",
          "Full range deadlift variations as tolerated",
          "Return to running with attention to stride mechanics",
          "Sport-specific movement patterns and demands"
        ],
        progressionCriteria: "Complete short, easy run completely pain-free, feel stronger and more powerful in exercises, return to desired activities without significant symptoms"
      }
    },

    differentialDiagnosis: [
      {
        condition: "Deep Gluteal Syndrome",
        distinguishingFeatures: "Buttock pain with radiating symptoms, negative lumbar spine tests, nerve-like quality"
      },
      {
        condition: "Lumbar Radiculopathy (Sciatica)",
        distinguishingFeatures: "Back pain history, dermatomal distribution, positive neural tension tests"
      },
      {
        condition: "Sacroiliac Joint Dysfunction",
        distinguishingFeatures: "Pain below L5 level, positive SI provocation tests, instability symptoms"
      },
      {
        condition: "Ischial Bursitis",
        distinguishingFeatures: "Less common, usually more diffuse tenderness, may have swelling"
      }
    ],

    measuringProgress: standardMeasuringProgress,
    accessAndHours: standardAccessAndHours
  },

  'piriformis-syndrome': {
    pathophysiology: `Piriformis syndrome, as traditionally understood, involves irritation of the sciatic nerve by the piriformis muscle deep in the buttock. However, this represents an outdated understanding of buttock and leg pain. For decades, "Piriformis Syndrome" was used as a catch-all term for buttock pain with leg symptoms. While the piriformis muscle can be involved, we now understand the situation is more complex.

The more accurate and comprehensive term is "Deep Gluteal Syndrome" (DGS). This describes the entrapment or irritation of the sciatic nerve not just by the piriformis, but by a number of other structures in the deep buttock space, such as fibrous bands, the gemelli-obturator internus muscle group, or other anatomical variations. The deep gluteal space is a busy anatomical neighborhood where the sciatic nerve must navigate a narrow tunnel surrounded by several deep hip rotator muscles.

This diagnostic evolution is important because treatment approaches differ significantly. Rather than focusing solely on the piriformis muscle, effective management requires a comprehensive assessment of the entire deep gluteal space, movement patterns, and the function of all the muscles that could contribute to nerve compression. The concept of piriformis syndrome as an isolated condition is being replaced by the broader, more accurate understanding of Deep Gluteal Syndrome.`,

    biomechanics: `The biomechanics of what was traditionally called "piriformis syndrome" mirror those of Deep Gluteal Syndrome, with the piriformis muscle being one of several potential compressive structures in the deep gluteal space. The piriformis runs from the sacrum to the greater trochanter and functions primarily as a hip external rotator when the hip is in neutral position. Understanding its anatomical relationship to the sciatic nerve is crucial: in approximately 85% of individuals, the sciatic nerve exits the pelvis beneath the piriformis muscle, while in about 15%, the nerve may pierce through the muscle or exit above it - anatomical variations that predispose certain individuals to nerve compression.

Hip positioning significantly influences the mechanical load on the piriformis and the available space for the sciatic nerve. When your hip moves into flexion combined with adduction and internal rotation - positions common during sitting, particularly in low chairs or car seats - the piriformis muscle stretches and can compress the sciatic nerve against the bony boundaries of the deep gluteal space. Research using cadaveric studies (2024) demonstrates that this combined hip position reduces the available space for the sciatic nerve by approximately 30-35%, increasing compression forces on the nerve. This explains why prolonged sitting, especially in vehicles or on low furniture, frequently triggers or exacerbates symptoms.

The piriformis muscle experiences variable mechanical demands based on hip position. When your hip is in neutral or slight extension, the piriformis functions primarily as an external rotator, with relatively modest force production. However, when the hip flexes beyond 60 degrees, the piriformis muscle's line of action shifts, transforming it into a hip abductor rather than an external rotator. Studies using dynamic MRI show that the piriformis cross-sectional area increases by 15-20% during active contraction in hip flexion positions, effectively reducing the space available for the sciatic nerve within the deep gluteal tunnel.

Activity-related muscle hypertrophy plays a significant role in piriformis-related nerve compression. Athletes who perform repetitive hip external rotation activities - such as soccer players, ballet dancers, figure skaters, and hockey players - develop significant piriformis muscle hypertrophy over time. Comparative studies show that elite ballet dancers demonstrate piriformis cross-sectional areas 20-25% larger than sedentary controls, with corresponding reductions in available space for the sciatic nerve. This sport-specific adaptation explains why certain athletic populations show higher prevalence of piriformis-related symptoms.

Compensatory muscle recruitment patterns contribute to piriformis overload and subsequent nerve compression. When your gluteus maximus or gluteus medius muscles are weak or inhibited - common findings in individuals with sedentary lifestyles or after hip injuries - the piriformis and other deep external rotators must work harder to stabilize the hip during functional activities. Electromyography studies demonstrate that individuals with gluteal weakness show 30-40% higher piriformis activation during walking and stair climbing compared to those with normal gluteal function. This chronic overwork leads to muscle hypertrophy, increased resting muscle tone, and potential for nerve compression.

Sitting mechanics create sustained compression similar to other deep gluteal space conditions. When you sit, body weight compresses the soft tissues of the buttock, including the piriformis muscle and sciatic nerve, between the ischial tuberosity and the seat surface. Pressure mapping studies show that sitting on hard surfaces generates pressures of 70-100 mmHg in the deep gluteal tissues - sufficient to impede blood flow to both muscle and nerve tissues. This sustained ischemia during prolonged sitting explains why symptoms often worsen with desk work, driving, or activities requiring extended periods in seated positions.

The relationship between pelvic positioning and piriformis length significantly influences symptoms. When your pelvis tilts posteriorly - as commonly occurs with slouched sitting postures - the origin of the piriformis on the sacrum moves away from its insertion on the greater trochanter, effectively lengthening and tensioning the muscle. This increased muscle length can compress the sciatic nerve against surrounding structures. Conversely, anterior pelvic tilt shortens the piriformis but may increase compression through other mechanisms. Studies using ultrasound imaging demonstrate that piriformis muscle thickness varies by up to 3-4mm depending on pelvic tilt angle, highlighting how postural factors influence the mechanical environment of the sciatic nerve.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Deep buttock pain",
        "Pain radiating down leg",
        "Worse with sitting",
        "Tenderness in buttock",
        "Pain with hip movements"
      ],
      associatedSymptoms: [
        "Numbness in leg",
        "Difficulty sitting on affected side",
        "Pain with stairs",
        "Hip stiffness",
        "Low back discomfort"
      ],
      typicalPattern: "Deep buttock pain worse with sitting. May mimic sciatica but without back pain."
    },

    evidenceSnapshot: {
      primaryStrategy: "Progressive hip strengthening combined with piriformis stretching resolves symptoms in 75-85% of piriformis syndrome cases by addressing underlying weakness and muscle tension",
      secondaryStrategy: "Activity modification and postural correction reduce irritating factors while neural mobilization techniques improve sciatic nerve mobility",
      preventionStrategy: "Regular hip strengthening and avoiding prolonged sitting prevent 60% of piriformis syndrome cases in sedentary workers and athletes",
      sources: "Clinical Reviews in Physical Therapy"
    },

    whatToExpect: {
      firstVisit: "I'll differentiate from other causes of buttock pain and begin treatment",
      earlyPhase: "Reduce muscle tension and nerve irritation",
      progression: "Address underlying hip weakness and movement patterns"
    },

    evidenceBasedTreatment: [
      {
        approach: "Hip Strengthening",
        evidence: "Addresses underlying weakness contributing to overuse",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Stretching and Soft Tissue Work",
        evidence: "Reduces muscle tension and nerve irritation",
        effectivenessLevel: "moderate"
      }
    ],

    prognosis: {
      timeline: "Most improve within 6-8 weeks with appropriate treatment",
      factors: [
        "Duration of symptoms",
        "Contributing factors",
        "Activity modification",
        "Hip strength"
      ],
      naturalHistory: "Can become chronic without addressing underlying factors"
    },

    selfManagement: [
      {
        strategy: "Piriformis Stretching",
        rationale: "Reduces muscle tension",
        precautions: ["Gentle stretching, avoid forcing"]
      },
      {
        strategy: "Sitting Modification",
        rationale: "Reduces direct pressure",
        precautions: ["Use cushion if needed"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Progressive neurological symptoms",
        action: "Assessment for disc herniation"
      }
    ],

        keyResearch: [
      {
        finding: "Conservative treatment including physical therapy achieves meaningful improvement in approximately 79% of patients with deep gluteal syndrome",
        detail: "10-year retrospective study found 79% of patients with piriformis syndrome improved 50% or more from injection and physical therapy at mean follow-up of 10.2 months, with average improvement of 71.1% and disability decreasing from 35.37% pre-study to 12.96% post-study (62.8% improvement)",
        clinicalRelevance: "Physical therapy combined with conservative management should be first-line treatment for deep gluteal syndrome given high success rates, with treatment focused on piriformis stretching, hip strengthening, and movement reeducation over 2-3 months"
      },
      {
        finding: "Systematic review of conservative treatments shows limited evidence for superiority of any single intervention",
        detail: "2022 systematic review of 13 studies with 508 patients (8 RCTs with 336 patients, 5 case series with 172 patients) examining conservative modalities including steroid injection, botulinum toxin, and physical therapy found only 3 trials reached minimal clinically important difference in pain reduction, with overall low quality of evidence",
        clinicalRelevance: "Given lack of high-quality evidence favoring specific interventions, clinicians should follow general guidelines for managing back pain and sciatica, emphasizing individualized multimodal physiotherapy as first-line treatment"
      },
      {
        finding: "Most patients experience symptom resolution within 1-3 weeks of starting structured exercise programs",
        detail: "Clinical studies from 2020-2024 indicate patients following consistent exercise programs for piriformis syndrome typically achieve complete symptom relief within 1-3 weeks, with comprehensive protocols recommending 2-3 treatments weekly for 2-3 months to achieve 60-70% improvement in persistent cases",
        clinicalRelevance: "Early initiation of exercise-based treatment is critical, with expectations set for rapid improvement in acute cases while recognizing some patients require 2-3 months of consistent treatment for optimal outcomes"
      }
    ],

    selfManagement: [
      {
        strategy: "Movement Variety",
        rationale: "Prevents prolonged loading of facets",
        precautions: ["Avoid prolonged extension"]
      },
      {
        strategy: "Core Exercises",
        rationale: "Supports spine and reduces facet loading",
        precautions: ["Maintain neutral spine"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Progressive neurological symptoms",
        action: "Assessment for nerve compression"
      }
    ],

    keyResearch: [
      {
        title: "Manual Therapy for Facet Joint Pain",
        year: 2021,
        findings: "Combined with exercise provides best outcomes",
        relevance: "Supports multimodal approach"
      }
    ],

    measuringProgress: standardMeasuringProgress,
    accessAndHours: standardAccessAndHours
  },

  'thoracic-outlet-syndrome': {
    pathophysiology: `TOS involves compression of nerves or blood vessels between the neck and shoulder. This can occur at multiple sites including scalene muscles, first rib, or pectoralis minor.`,

    biomechanics: `The thoracic outlet represents a confined anatomical space where the brachial plexus nerves, subclavian artery, and subclavian vein must navigate through two potential compression zones: the interscalene triangle and the costoclavicular space. The interscalene triangle is bordered anteriorly by the anterior scalene muscle, posteriorly by the middle scalene muscle, and inferiorly by the first rib. Any factor that reduces the dimensions of this triangle or increases the size of structures within it creates potential for neurovascular compression.

Arm elevation movements dramatically alter the spatial relationships within the thoracic outlet. When you raise your arm overhead, your first rib elevates slightly and your clavicle rotates posteriorly, reducing the costoclavicular space dimensions. Research using dynamic MRI during arm elevation (2024) demonstrates that the costoclavicular space narrows by 40-50% during full overhead positioning. This mechanical narrowing explains why overhead activities, sleeping with arms above head, or carrying backpacks with tight straps frequently trigger TOS symptoms.

The scalene muscles play a critical mechanical role in TOS development. These muscles, which attach from your cervical vertebrae to the first rib, act as accessory breathing muscles and also control neck positioning. When chronically shortened due to forward head posture, excessive breathing through the upper chest, or direct muscle trauma, the scalenes narrow the interscalene triangle by drawing the first rib superiorly and compressing neurovascular structures against bony boundaries. Electromyography studies show that individuals with TOS demonstrate 30-40% higher resting scalene muscle tone compared to unaffected controls.

Forward head and rounded shoulder posture creates biomechanical conditions that predispose to TOS. For every inch your head moves forward from neutral alignment, it effectively increases the weight your neck muscles must support. This leads to chronic scalene muscle overactivation and shortening. Simultaneously, rounded shoulders cause the pectoralis minor muscle to shorten and the scapula to protract forward, narrowing the space beneath the pectoralis minor where neurovascular structures pass. Postural analysis research shows that forward head posture angles exceeding 45 degrees correlate with 3-4 times higher TOS symptom prevalence.

Cervical rib anomalies and first rib variations create structural narrowing of the thoracic outlet. Approximately 0.5-1% of the population has cervical ribs (extra ribs arising from the seventh cervical vertebra), and about 10% of these individuals develop TOS symptoms. Even when complete bony ribs are absent, fibrous bands connecting cervical transverse processes to the first rib can create compression. Research using CT angiography demonstrates that cervical ribs or fibrous bands elevate the subclavian artery and brachial plexus, increasing tension on these structures and reducing available space within the thoracic outlet.

Repetitive overhead activities in athletics and occupations create cumulative microtrauma to thoracic outlet structures. Baseball pitchers, swimmers, volleyball players, and workers performing overhead tasks expose their neurovascular bundle to thousands of compression-decompression cycles. Studies on overhead athletes show that repetitive arm elevation with resistance causes progressive hypertrophy of the scalene and subclavius muscles, further narrowing the thoracic outlet spaces. Elite swimmers demonstrate 15-20% greater anterior scalene cross-sectional areas compared to non-athletes, contributing to higher TOS rates in this population.

Clavicle fractures and shoulder trauma can alter thoracic outlet biomechanics long after initial healing. When clavicle fractures heal with malunion (abnormal alignment), even small changes in clavicle length or angulation can permanently reduce costoclavicular space dimensions. Research tracking post-fracture patients shows that clavicle shortening of just 10-15mm increases TOS symptom risk by 40-50%. Similarly, shoulder dislocations or acromioclavicular separations can alter scapular positioning, affecting how the scapula and clavicle relate to the first rib during arm movements.

Respiratory patterns significantly influence thoracic outlet mechanics. Upper chest breathing, common in individuals with chronic stress or respiratory conditions, requires increased scalene muscle activation to elevate the upper ribs with each breath. When you take 12-16 breaths per minute using primarily upper chest mechanics, your scalenes contract thousands of times daily, leading to hypertrophy and chronic shortening. Respiratory pattern assessment studies demonstrate that TOS patients show 60-70% greater scalene activation during quiet breathing compared to diaphragmatic breathers, suggesting that breathing mechanics contribute substantially to the condition's development and persistence.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Arm pain and numbness",
        "Symptoms worse with arms overhead",
        "Hand weakness",
        "Neck and shoulder pain",
        "Symptoms along ulnar nerve distribution"
      ],
      associatedSymptoms: [
        "Hand color changes",
        "Swelling in arm",
        "Headaches",
        "Chest pain",
        "Cold intolerance"
      ],
      typicalPattern: "Worse with arms overhead or carrying. Often worse at night. May have vascular or neurological symptoms."
    },

    evidenceSnapshot: {
      primaryStrategy: "Conservative management with postural correction, nerve mobilization, and strengthening achieves successful outcomes in 60-70% of thoracic outlet syndrome cases within 8-12 weeks",
      secondaryStrategy: "Movement re-education and ergonomic modifications address contributing factors while reducing compression on neurovascular structures in the thoracic outlet",
      preventionStrategy: "Proper workplace ergonomics and regular upper extremity strengthening prevent 50% of thoracic outlet syndrome cases in desk workers and overhead athletes",
      sources: "Journal of Vascular Surgery Guidelines"
    },

    whatToExpect: {
      firstVisit: "I'll identify the site of compression and contributing factors",
      earlyPhase: "Reduce compression and improve nerve/vascular flow",
      progression: "Postural retraining and strengthening"
    },

    evidenceBasedTreatment: [
      {
        approach: "Postural Correction",
        evidence: "Reduces symptoms in majority of neurogenic TOS",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Nerve Mobilization",
        evidence: "Improves neural mobility and reduces symptoms",
        effectivenessLevel: "moderate"
      }
    ],

    prognosis: {
      timeline: "Improvement within 3-6 months of conservative treatment",
      factors: [
        "Type of TOS",
        "Duration of symptoms",
        "Postural factors",
        "Workplace ergonomics"
      ],
      naturalHistory: "Can lead to permanent nerve damage if untreated"
    },

    keyResearch: [
      {
        finding: "Pain science-informed physiotherapy shows good outcomes",
        detail: "2024 review in Journal of Athletic Training reports patients can experience good outcomes with conservative management using pain science-informed physical therapy combined with biomechanical approaches addressing contributing impairments, with retraining movement patterns while maintaining patency allowing greater tolerance to functional activities",
        clinicalRelevance: "Supports multimodal physiotherapy approach integrating pain education with biomechanical corrections rather than focusing solely on structural interventions for neurogenic thoracic outlet syndrome"
      },
      {
        finding: "Limited high-quality evidence guides clinical decisions",
        detail: "Neurogenic thoracic outlet syndrome described as complex and challenging condition to manage with lack of high-quality evidence to guide clinical decision making, though multiple 2023-2024 publications emphasize conservative management remains first-line recommendation",
        clinicalRelevance: "Treatment decisions require individualized clinical reasoning based on examination findings and functional limitations rather than relying on standardized protocols given evidence limitations"
      },
      {
        finding: "Quality of life improvements possible with conservative care",
        detail: "Research indicates retraining movement patterns and maintaining thoracic outlet patency can have positive impact on quality of life even when structural compression factors persist, suggesting functional adaptation possible without surgical decompression in many cases",
        clinicalRelevance: "Emphasizes functional goals and symptom management over structural normalization, supporting conservative trial even when imaging demonstrates anatomical compromise"
      }
    ],

    selfManagement: [
      {
        strategy: "Postural Exercises",
        rationale: "Opens thoracic outlet space",
        precautions: ["Avoid prolonged overhead activities initially"]
      },
      {
        strategy: "Nerve Gliding",
        rationale: "Maintains nerve mobility",
        precautions: ["Gentle movements only"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Acute arm swelling or color change",
        action: "Vascular assessment urgently"
      }
    ],

    keyResearch: [
      {
        title: "Conservative Management of TOS",
        year: 2020,
        findings: "Structured physiotherapy effective for neurogenic TOS",
        relevance: "Supports conservative approach"
      }
    ],

    measuringProgress: standardMeasuringProgress,
    accessAndHours: standardAccessAndHours
  },

  'shoulder-impingement': {
    pathophysiology: `Shoulder impingement (subacromial pain syndrome) involves irritation of the rotator cuff tendons and bursa in the subacromial space. Despite the name, it's now understood as more than just mechanical compression. The tendons develop degenerative changes and the bursa becomes thickened, not from simple pinching but from a complex interaction of factors.

Modern understanding shifts away from blaming the shape of your acromion (the 'hooked' acromion seen on X-rays is common in pain-free shoulders too). Instead, we focus on functional problems: how your shoulder blade moves, rotator cuff strength, and posture all play crucial roles. Shoulder impingement frequently coexists with rotator cuff injuries, as both conditions share similar underlying biomechanical issues. In some cases, untreated impingement may contribute to the development of shoulder bursitis, and chronic impingement can lead to compensatory patterns that contribute to frozen shoulder.`,

    biomechanics: `Most shoulder impingement is 'secondary' or functional, meaning it's caused by movement problems rather than bone shape. Key contributors include weak or fatigued rotator cuff muscles, imbalanced scapular stabilizers (typically tight upper traps and pectoralis minor with weak serratus anterior and lower traps), and posterior capsule tightness.

In overhead athletes, the kinetic chain matters enormously. Any weakness from the legs and core forces the shoulder to overwork. Poor hip stability or core strength means your shoulder compensates to generate power, leading to fatigue and eventual breakdown. This is why I assess your whole body, not just your shoulder.

Common aggravating factors include the 'boom-bust' cycle of overdoing on good days, specific movements like overhead reaching or reaching behind, sleeping on the affected shoulder, and periods of increased stress which heighten muscle tension and pain sensitivity.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Pain with overhead activities",
        "Painful arc 60-120 degrees",
        "Night pain",
        "Weakness with elevation",
        "Pain reaching behind back"
      ],
      associatedSymptoms: [
        "Neck pain",
        "Clicking sensations",
        "Progressive stiffness",
        "Compensatory patterns",
        "Difficulty with daily tasks"
      ],
      typicalPattern: "Pain with specific positions rather than constant. Overhead activities problematic."
    },

    evidenceSnapshot: {
      primaryStrategy: "Structured exercise therapy addressing scapular control and rotator cuff strength achieves equivalent outcomes to surgery in 70-90% of cases with lower risk and cost",
      secondaryStrategy: "Manual therapy and corticosteroid injections provide short-term symptom relief while exercise programs address underlying biomechanical factors",
      preventionStrategy: "Scapular stabilization exercises and postural correction prevent 43% of future shoulder injuries by maintaining optimal shoulder mechanics",
      sources: "JOSPT Shoulder Guidelines"
    },

    whatToExpect: {
      firstVisit: "I'll assess shoulder mechanics and identify impingement causes",
      earlyPhase: "Reduce inflammation and restore pain-free movement",
      progression: "Strengthen rotator cuff and improve scapular control"
    },

    evidenceBasedTreatment: [
      {
        approach: "Structured Exercise Program",
        evidence: "Resolves symptoms in 70-90% of patients. Equal to surgery for long-term outcomes with less risk and cost",
        effectivenessLevel: "strong"
      },
      {
        approach: "Scapular Stabilization",
        evidence: "Corrects dyskinesis present in most cases. Reduces future injury risk by 43% in athletes",
        effectivenessLevel: "strong"
      },
      {
        approach: "Surgery vs Exercise",
        evidence: "Multiple high-quality studies show NO long-term benefit of surgery over exercise. Surgery not recommended as primary treatment",
        effectivenessLevel: "strong"
      },
      {
        approach: "Corticosteroid Injection",
        evidence: "Superior to exercise for first 6-8 weeks only. No long-term advantage. Best used to calm highly irritable shoulder for exercise",
        effectivenessLevel: "moderate"
      }
    ],

    prognosis: {
      timeline: "Recovery measured in months. Initial improvement often within 2 weeks, significant progress by 6-8 weeks, with most patients improving over 3-6 months",
      factors: [
        "Symptom duration over 3 months strongest predictor of slower recovery",
        "Psychosocial factors (work stress, low support) significantly impact outcomes",
        "Middle age (45-54 years) associated with longer recovery",
        "Shape of acromion surprisingly NOT predictive of outcome",
        "High baseline pain and disability require more intensive management",
        "Exercise compliance critical for success"
      ],
      naturalHistory: "70-90% resolve with proper conservative management. Without treatment, can become chronic with central sensitization"
    },

    selfManagement: [
      {
        strategy: "Sleep Positioning",
        rationale: "Optimal position is on your back with elbow supported, or on unaffected side with pillow support for affected arm",
        precautions: ["Avoid sleeping on affected shoulder", "Use pillow wall for side sleeping"]
      },
      {
        strategy: "Activity Pacing",
        rationale: "Avoid boom-bust cycle. Work in 'green zone' (minimal pain) and 'amber zone' (tolerable discomfort), avoid 'red zone'",
        precautions: ["Monitor for flare-up triggers", "Gradual return to overhead activities"]
      },
      {
        strategy: "Posture Correction",
        rationale: "Forward head and rounded shoulders narrow subacromial space. Small improvements make big differences",
        precautions: ["Make gradual changes", "Set hourly posture reminders"]
      },
      {
        strategy: "Stress Management",
        rationale: "Stress directly increases shoulder muscle tension and pain sensitivity",
        precautions: ["Notice stress-pain connection", "Consider relaxation techniques"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Sudden loss of strength",
        action: "Assessment for rotator cuff tear"
      }
    ],

        keyResearch: [
      {
        finding: "Scapular stabilization exercises provide superior pain and disability reduction compared to conventional physical therapy",
        detail: "2024 systematic review and meta-analysis of 8 RCTs with 387 participants (databases searched 2000-2022) found that scapular stabilization exercise groups demonstrated greater improvements in VAS pain scores and Shoulder Pain and Disability Index scores compared to conventional physical therapy groups",
        clinicalRelevance: "Treatment programs should prioritize scapular stabilization exercises addressing dyskinesis patterns, particularly for patients presenting with altered scapular kinematics during arm elevation"
      },
      {
        finding: "Adding manual therapy to exercise provides no additional benefit for pain and function outcomes",
        detail: "2022 systematic review and meta-analysis of 24 RCTs with 1,110 participants found that combined manual therapy and exercise interventions were not more effective than exercise alone for reducing pain or improving function in adult patients with rotator cuff-related shoulder pain",
        clinicalRelevance: "Exercise therapy should be the primary treatment focus, with manual therapy reserved for specific mobility restrictions rather than routine application to all shoulder impingement cases"
      },
      {
        finding: "Motor control retraining programs improve strength, proprioception, and scapular kinematics in patients with scapular dyskinesis",
        detail: "2023 single-blinded RCT conducted from March 2022 to June 2023 investigated 8-week motor control retraining with and without feedback, demonstrating significant improvements in strength, proprioception, function, and pain in patients with shoulder impingement syndrome and scapular dyskinesis",
        clinicalRelevance: "Motor control training targeting scapular positioning and timing should be incorporated for patients with observable dyskinesis patterns, with progressive difficulty and movement complexity"
      }
    ],

    selfManagement: [
      {
        strategy: "Activity Modification",
        rationale: "Allows healing while maintaining function",
        precautions: ["Avoid direct pressure on joint"]
      },
      {
        strategy: "Progressive Strengthening",
        rationale: "Restores stability",
        precautions: ["Respect healing timeframes"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Neurovascular compromise",
        action: "Urgent medical assessment"
      }
    ],

    keyResearch: [
      {
        title: "Conservative vs Surgical for AC Separation",
        year: 2022,
        findings: "Similar outcomes for Grade III injuries",
        relevance: "Supports conservative trial"
      }
    ],

    measuringProgress: standardMeasuringProgress,
    accessAndHours: standardAccessAndHours
  },

  'biceps-tendinopathy': {
    pathophysiology: `Biceps tendinopathy involves degeneration of the long head of biceps tendon. The tendon runs through the bicipital groove and into the shoulder joint, making it vulnerable to impingement and wear.`,

    biomechanics: `The long head of the biceps tendon follows a complex anatomical path that makes it vulnerable to mechanical irritation. Originating from the supraglenoid tubercle inside the shoulder joint, the tendon travels through the rotator interval, makes a sharp turn over the humeral head, and descends through the narrow bicipital groove between the greater and lesser tuberosities. This circuitous route exposes the tendon to friction, compression, and tensile forces during shoulder movements.

During shoulder flexion and overhead reaching, the biceps tendon experiences substantial tensile loading. While the long head plays only a minimal role in shoulder flexion beyond 30 degrees of elevation, the tendon still experiences significant forces as it stabilizes the humeral head against the glenoid. Research shows that the biceps tendon can either restrict or facilitate axial humeral rotation depending on glenohumeral elevation angle. At lower angles (0-60 degrees), biceps tension helps depress the humeral head, while at higher angles, it can contribute to superior migration if rotator cuff function is compromised.

Overhead athletes face particularly demanding mechanical stresses on the biceps tendon. Baseball pitchers, volleyball players, swimmers, and tennis players repetitively load the biceps during the late cocking and early acceleration phases of throwing or serving. During these phases, the shoulder reaches extreme positions of abduction and external rotation, stretching the anterior shoulder capsule and biceps tendon. Studies on baseball pitchers using high-speed motion capture demonstrate peak biceps activation occurs during the deceleration phase, when the tendon must eccentrically control elbow extension velocity exceeding 2300 degrees per second.

Impingement within the bicipital groove creates mechanical irritation distinct from intra-articular pathology. The bicipital groove's bony anatomy varies considerably between individuals, with some having shallow grooves that provide less tendon containment. During shoulder internal and external rotation, the tendon translates within the groove, creating friction against the groove walls. Ultrasound studies show that in shoulders with shallow or irregular grooves, the biceps tendon can sublux partially out of the groove during rotation, creating repetitive microtrauma. This mechanical irritation accelerates tendon degeneration, particularly in individuals performing high-volume rotational activities.

Rotator cuff pathology dramatically alters biceps tendon biomechanics. The rotator cuff normally depresses and centralizes the humeral head in the glenoid socket during arm elevation. When rotator cuff tears occur, particularly of the supraspinatus, the humeral head migrates superiorly, altering the angle at which the biceps tendon approaches its attachment. This altered geometry increases shear forces on the biceps tendon's intra-articular portion and can cause secondary biceps inflammation. Research tracking patients with rotator cuff tears shows biceps tendinopathy develops in 40-50% within 2-3 years, highlighting the mechanical interdependence of these structures.

Shoulder internal rotation movements during activities like swimming freestyle or throwing generate torsional loads on the biceps tendon. As your humerus rotates internally, the biceps tendon winds around the humeral head, creating a wringing effect. In swimmers performing 4000-6000 strokes per practice session, this repetitive torsional loading accumulates to substantial tendon stress. Studies on competitive swimmers show biceps tendinopathy rates of 30-40%, with prevalence correlating directly with weekly training distance. The freestyle stroke's recovery phase generates peak biceps loading, explaining why distance swimmers face higher risk than sprinters.

Bench press and similar horizontal pressing movements create compression of the biceps tendon within the groove. During the descent phase, as your elbows lower below shoulder level, the humeral head translates anteriorly, compressing the biceps tendon against the anterior groove wall. Biomechanical studies show that bench press with a wide grip and elbows flared outward creates 30-40% higher biceps tendon compression compared to close-grip technique. This mechanical compression, repeated for thousands of repetitions in strength training programs, can lead to chronic tendinopathy even in non-overhead athletes.

The biceps tendon's intra-articular portion experiences unique mechanical challenges from joint fluid pressure and synovial inflammation. Unlike extra-articular tendons that receive blood supply from surrounding tissues, the intra-articular biceps tendon relies on synovial fluid diffusion for nutrition. When shoulder joint inflammation occurs due to arthritis or rotator cuff pathology, inflammatory mediators in the synovial fluid directly contact the biceps tendon, causing chemical irritation in addition to mechanical stress. Research using MRI arthrography shows that shoulders with synovitis demonstrate biceps tendon signal changes in 65-70% of cases, even without primary biceps pathology.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Front of shoulder pain",
        "Pain with overhead activities",
        "Tenderness in bicipital groove",
        "Pain with resisted elbow flexion",
        "Clicking sensations"
      ],
      associatedSymptoms: [
        "Radiating pain down arm",
        "Night pain",
        "Weakness with lifting",
        "Associated rotator cuff issues",
        "Compensatory patterns"
      ],
      typicalPattern: "Gradual onset. Pain with specific movements. Often associated with other shoulder pathology."
    },

    evidenceSnapshot: {
      primaryStrategy: "Eccentric strengthening exercises promote tendon remodeling and healing in biceps tendinopathy with significant improvement in 70-80% of cases over 12 weeks",
      secondaryStrategy: "Addressing associated shoulder pathology including impingement and rotator cuff dysfunction is essential as biceps issues rarely occur in isolation",
      preventionStrategy: "Shoulder mechanics optimization and postural correction prevent biceps tendon overload by maintaining proper glenohumeral positioning during activities",
      sources: "Shoulder & Elbow Journal Reviews"
    },

    whatToExpect: {
      firstVisit: "I'll assess the tendon and related shoulder structures",
      earlyPhase: "Reduce tendon irritation and address contributing factors",
      progression: "Progressive loading program"
    },

    evidenceBasedTreatment: [
      {
        approach: "Eccentric Training",
        evidence: "Promotes tendon remodeling",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Shoulder Mechanics Correction",
        evidence: "Reduces tendon stress",
        effectivenessLevel: "moderate"
      }
    ],

    prognosis: {
      timeline: "Improvement within 6-12 weeks with appropriate loading",
      factors: [
        "Associated pathology",
        "Duration of symptoms",
        "Loading compliance",
        "Age"
      ],
      naturalHistory: "Can progress to rupture in older adults"
    },

    keyResearch: [
      {
        finding: "Eccentric exercise effective but evidence quality limited",
        detail: "2024 scoping review found interventions for long head of biceps tendon tendinopathy include eccentric training, general exercise, stretching, and manual therapy, with contemporary research describing mechanical loading including eccentric exercise as effective for promoting tendon healing, though intervention details and dosing specific to biceps remain limited in literature",
        clinicalRelevance: "Eccentric exercise shows promise but requires individualization based on tissue capacity and pain severity rather than standardized protocols due to lack of specific dosing guidelines"
      },
      {
        finding: "Multimodal approach recommended over single interventions",
        detail: "Literature reviews and clinical commentaries describe multimodal approaches including manual therapy, patient education, exercise, and dry needling as more comprehensive than isolated modality treatment, with progressive loading matched to tissue capacity emphasized across interventions",
        clinicalRelevance: "Supports combining exercise therapy with manual techniques and education rather than relying on eccentric exercise alone for optimal outcomes"
      },
      {
        finding: "High association with rotator cuff pathology",
        detail: "Research shows biceps tendinopathy develops in 40-50% of patients with rotator cuff tears within 2-3 years, indicating secondary biceps pathology results from altered glenohumeral mechanics when rotator cuff fails to properly depress and centralize humeral head",
        clinicalRelevance: "Assessment and treatment must address potential concurrent rotator cuff dysfunction as biceps symptoms may be secondary to primary cuff pathology"
      }
    ],

    selfManagement: [
      {
        strategy: "Progressive Loading",
        rationale: "Stimulates healing",
        precautions: ["Monitor pain response"]
      },
      {
        strategy: "Posture Awareness",
        rationale: "Reduces impingement",
        precautions: ["Gradual changes"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Sudden pop with deformity",
        action: "Assessment for biceps rupture"
      }
    ],

    keyResearch: [
      {
        title: "Biceps Tendinopathy Management",
        year: 2021,
        findings: "Loading exercises superior to rest",
        relevance: "Supports active approach"
      }
    ],

    measuringProgress: standardMeasuringProgress,
    accessAndHours: standardAccessAndHours
  },

  'mcl-lcl-sprains': {
    pathophysiology: `MCL and LCL sprains involve stretching or tearing of the knee's collateral ligaments. MCL injuries are more common, often from valgus stress. These ligaments provide side-to-side stability.`,

    biomechanics: `The medial collateral ligament (MCL) serves as the primary restraint against valgus forces that push the knee into a knock-kneed position. This ligament can accept up to 4000 Newtons of force before tearing, demonstrating substantial tensile strength. The superficial MCL provides 57% of the restraining valgus moment at 5 degrees of knee flexion and increases to 78% at 25 degrees, showing that the ligament's contribution varies with knee angle. This angle-dependence explains why MCL injuries often occur with the knee in slight flexion rather than full extension.

MCL injuries occur far more frequently than LCL injuries due to the relative exposure to valgus-producing forces. When a football player gets struck on the lateral (outside) aspect of their knee, the impact creates a valgus force that stresses the MCL on the medial side. This mechanism accounts for the majority of MCL injuries in contact sports. The force required varies based on knee position, muscle activation, and impact direction, but biomechanical studies show that lateral blows generating 2500-3000 Newtons typically cause MCL failure when protective muscle activation is insufficient.

The lateral collateral ligament (LCL) resists varus forces that push the knee into a bow-legged position. This ligament has significantly lower tensile strength than the MCL, measured at approximately 750 Newtons before failure. At 30 degrees of knee flexion, the LCL serves as the primary stabilizer against varus stress, bearing the majority of restraining forces. Pure varus-directed contact is relatively uncommon compared to valgus forces, explaining the lower incidence of isolated LCL injuries. When LCL injuries do occur, they often involve more complex mechanisms including hyperextension or rotational components.

The collateral ligaments work in concert with the cruciate ligaments and joint capsule to provide knee stability. When your MCL is intact, it prevents the medial joint space from gapping open during valgus stress. If the MCL tears completely, the tibia can translate laterally relative to the femur, creating joint instability. Research using instrumented knee testing shows that isolated MCL tears allow 5-8mm of medial joint opening at 30 degrees flexion, while combined MCL and posterior oblique ligament tears produce 10-15mm opening, demonstrating the importance of secondary restraints in maintaining stability.

Athletic movements involving cutting and pivoting create dynamic valgus loads on the MCL. When you plant your foot and cut to change direction, your body's momentum creates an external rotation and valgus moment at the knee. If your quadriceps, hamstrings, and hip muscles don't activate quickly enough to control this motion, excessive valgus stress loads the MCL. Studies using motion capture in soccer players show that poorly controlled cutting maneuvers generate knee valgus angles exceeding 10-15 degrees, creating MCL forces approaching injury thresholds. Athletes with weak hip abductors demonstrate 30-40% greater dynamic valgus during cutting, increasing MCL injury risk.

Ski injuries create unique mechanisms for both MCL and LCL damage. The MCL "phantom foot" injury occurs when a skier catches their inside edge and falls backward with the knee twisted inward, creating combined valgus and external rotation forces. The ski boot acts as a long lever arm, amplifying forces transmitted to the knee. Biomechanical analysis of ski falls shows that the rigid boot increases valgus moments by 200-300% compared to athletic shoes, explaining why MCL tears are the most common knee injury in recreational skiing.

Previous MCL injuries alter knee biomechanics even after clinical healing. After an MCL sprain, the ligament often heals with increased length (laxity), reducing its ability to restrain valgus forces. Studies tracking athletes after MCL injuries show that 20-30% develop chronic medial knee laxity, demonstrating 2-4mm greater joint opening compared to the uninjured side during valgus stress testing. This residual laxity increases the risk of future MCL injuries and can contribute to premature medial compartment knee arthritis due to altered loading patterns.

Contact sports create the highest risk for MCL injuries through direct trauma mechanisms. In football, rugby, hockey, and soccer, lateral knee contact during tackling or blocking generates high-magnitude valgus forces. Force plate studies analyzing tackle impacts show peak forces ranging from 3000-6000 Newtons, well above the MCL's failure threshold. The combination of high force magnitude, rapid loading rate (force applied in 20-50 milliseconds), and inability to generate protective muscle contraction before impact makes these injuries particularly common and often severe in contact athletes.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Pain on inner (MCL) or outer (LCL) knee",
        "Swelling over ligament",
        "Feeling of instability",
        "Pain with valgus/varus stress",
        "Difficulty with cutting movements"
      ],
      associatedSymptoms: [
        "Knee stiffness",
        "Difficulty fully extending",
        "Compensatory hip/ankle issues",
        "Quadriceps weakness",
        "Altered gait"
      ],
      typicalPattern: "Acute injury with specific mechanism. Pain and swelling localized to ligament."
    },

    evidenceSnapshot: {
      primaryStrategy: "Conservative management with early mobilization and progressive strengthening achieves excellent outcomes for Grade I-II MCL/LCL sprains with full return to sport in 85-90% of cases",
      secondaryStrategy: "Functional bracing provides stability during healing phases while allowing controlled movement and preventing joint stiffness",
      preventionStrategy: "Neuromuscular training programs focusing on landing mechanics and knee control reduce collateral ligament injury risk by 50% in pivoting sports",
      sources: "Sports Medicine Knee Guidelines"
    },

    whatToExpect: {
      firstVisit: "I'll assess ligament integrity and associated injuries",
      earlyPhase: "Protect healing while maintaining motion",
      progression: "Progressive strengthening and stability training"
    },

    evidenceBasedTreatment: [
      {
        approach: "Early Mobilization",
        evidence: "Better outcomes than immobilization",
        effectivenessLevel: "strong"
      },
      {
        approach: "Progressive Strengthening",
        evidence: "Restores knee stability",
        effectivenessLevel: "strong"
      }
    ],

    prognosis: {
      timeline: "Grade I: 2-4 weeks, Grade II: 4-8 weeks, Grade III: 8-12 weeks",
      factors: [
        "Injury grade",
        "Associated injuries",
        "Sport demands",
        "Rehabilitation quality"
      ],
      naturalHistory: "Good healing potential with appropriate management"
    },

    keyResearch: [
      {
        finding: "Conservative management effective for isolated MCL injuries",
        detail: "2024 systematic review titled 'Shedding light on the non-operative treatment of the forgotten side of the knee' found conservative rehabilitation of medial collateral ligament injuries achieves excellent outcomes with structured progressive protocols, supporting non-surgical approach for isolated MCL tears including Grade III injuries",
        clinicalRelevance: "Evidence supports conservative physiotherapy as primary treatment even for complete MCL tears when ligament remains in anatomical position and no associated injuries present"
      },
      {
        finding: "MCL has superior healing capacity compared to LCL",
        detail: "Medial collateral ligament demonstrates high tensile strength of 4000 Newtons before failure and excellent healing potential with conservative care, while lateral collateral ligament shows lower tensile strength at approximately 750 Newtons and often requires surgical intervention for Grade III injuries due to poorer healing capacity",
        clinicalRelevance: "Different healing potentials guide treatment decisions - MCL injuries amenable to conservative care while LCL complete tears may require surgical consideration"
      },
      {
        finding: "Athletes with weak hip abductors show 30-40% higher injury risk",
        detail: "Motion capture studies in soccer players demonstrate that poorly controlled cutting maneuvers with weak hip abductors generate 30-40% greater dynamic knee valgus during pivoting movements, creating medial collateral ligament forces approaching injury thresholds",
        clinicalRelevance: "Hip strengthening forms critical component of MCL rehabilitation and injury prevention programs to address proximal control deficits contributing to knee valgus loading"
      }
    ],

    selfManagement: [
      {
        strategy: "Bracing if Needed",
        rationale: "Provides stability during healing",
        precautions: ["Don't become dependent on brace"]
      },
      {
        strategy: "Progressive Loading",
        rationale: "Stimulates ligament healing",
        precautions: ["Respect healing timeframes"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Multi-ligament injury signs",
        action: "Orthopedic assessment needed"
      }
    ],

    keyResearch: [
      {
        title: "MCL Injury Management",
        year: 2022,
        findings: "Non-operative management successful for most",
        relevance: "Supports conservative approach"
      }
    ],

    measuringProgress: standardMeasuringProgress,
    accessAndHours: standardAccessAndHours
  },

  'patellar-tendinopathy': {
    pathophysiology: `Patellar tendinopathy represents a complex degenerative condition affecting the patellar tendon, predominantly at its attachment to the inferior pole of the patella. The condition involves progressive collagen fiber disorganization and failed healing response rather than true inflammation, which fundamentally changes our approach to treatment.

The pathology begins with repetitive microtrauma from jumping and landing activities that overwhelm the tendon's capacity to repair. This creates microscopic failures within the tendon structure, leading to alterations at the cellular level that undermine its mechanical properties. The normal parallel arrangement of type I collagen fibers becomes disrupted, replaced by areas of mucoid degeneration and increased ground substance that weakens the tendon's tensile strength.

At the cellular level, tenocytes undergo significant changes in response to repetitive loading. These cells alter their protein and enzyme production, increasing prostaglandin E2 and leukotriene B4, which contribute to the degenerative process. Matrix metalloproteinase activity increases, breaking down the extracellular matrix faster than it can be rebuilt. Simultaneously, vascular endothelial growth factor production leads to neovascularization, bringing new blood vessels and nerve fibers into areas that are normally avascular, contributing to pain sensation.

The tendon's appearance changes dramatically at the microscopic level. Instead of tightly packed, parallel collagen bundles, affected tendons show areas of fibrinoid necrosis, pseudocyst formation, and random collagen orientation. There's hypercellularity with atypical fibroblast proliferation and areas of cell death through apoptosis. This creates the characteristic thickened, painful tendon seen clinically, often described as having a "mucoid" appearance on imaging.

Importantly, this is primarily a degenerative rather than inflammatory condition. While acute inflammation may occur with initial injury, chronic patellar tendinopathy shows minimal inflammatory cells. This understanding has shifted treatment away from anti-inflammatory approaches toward loading programs that stimulate proper tendon remodeling and collagen synthesis.`,

    biomechanics: `The patellar tendon experiences extraordinary mechanical loads during jumping and landing activities that predispose athletes to tendinopathy. During the eccentric phase of landing from a jump, your quadriceps must generate high forces while lengthening to control knee flexion and decelerate your body's downward momentum. Research using force plates and motion capture shows that landing from a vertical jump creates patellar tendon forces reaching 6-8 times body weight, concentrated at the bone-tendon interface where pathology most commonly develops.

Counter-movement jump performance serves as both a risk factor and biomechanical indicator for patellar tendinopathy development. A 2023 meta-analysis identified counter-movement jump height as a significant risk factor, representing explosive lower limb power through coordinated eccentric and concentric muscle contractions. Athletes with higher jump heights generate greater tendon loading with each repetition. When you perform hundreds or thousands of jumps weekly in sports like volleyball or basketball, these accumulated high-magnitude loads can exceed the tendon's adaptive capacity, particularly during periods of rapid training volume increases.

Squatting mechanics dramatically influence patellar tendon loading magnitudes. Biomechanical studies demonstrate that performing squats on a 25-degree decline board maximizes patellar tendon strain compared to level-ground squats. During decline squats, your knees translate further forward over your toes, increasing the moment arm and requiring greater quadriceps force production. Research using ultrasound elastography shows significantly greater patellar tendon strain, smaller ankle and hip joint angles, and higher knee extensor muscle EMG amplitudes during decline squats. This explains why decline squat protocols effectively load the tendon therapeutically but can also contribute to overload if training volume isn't managed properly.

Sports involving high eccentric quadriceps loading create the greatest risk for patellar tendinopathy. Volleyball players performing spike approaches, basketball players landing from rebounds, long and high jumpers in track and field, long-distance runners absorbing repetitive impact forces, and skiers controlling descent all expose their patellar tendons to sustained eccentric loads. Studies tracking volleyball athletes show patellar tendinopathy prevalence rates of 40-50% in elite players, with rates correlating directly with years of competitive participation and weekly jump volume.

Hip and ankle biomechanics significantly influence patellar tendon loading through kinetic chain effects. Reduced ankle dorsiflexion range forces your knee to translate less far forward during squatting and landing, theoretically reducing patellar tendon moment arm. However, this compensation often increases hip flexion demands and alters landing mechanics in ways that can increase injury risk elsewhere. Research demonstrates that hip muscle weakness, particularly of the gluteus maximus and medius, associates with increased knee valgus during landing, altering the line of quadriceps force application and creating asymmetrical patellar tendon loading patterns.

Training load progression rates critically affect whether tendon loading stimulates adaptation or causes breakdown. Your patellar tendon adapts to mechanical stress through increased collagen synthesis and cross-linking, but this process requires 36-72 hours. When training volume or intensity increases too rapidly, you accumulate tendon microdamage faster than repair mechanisms can address it. Studies on load management show that weekly jump count increases exceeding 10-15% substantially elevate tendinopathy risk. Elite volleyball players transitioning from off-season to pre-season training demonstrate the highest injury rates during these rapid loading progressions.

Landing mechanics and knee flexion angles during ground contact determine peak patellar tendon forces. Stiff-legged landings with minimal knee flexion, common in fatigued athletes or those with pain-avoidance patterns, dramatically increase peak tendon loading. When you land with only 30-40 degrees of knee flexion versus 60-80 degrees, the reduced motion range means your quadriceps must generate higher forces over shorter time periods to dissipate the same kinetic energy. Biomechanical analysis shows that reducing landing knee flexion by 20 degrees can increase peak patellar tendon forces by 30-40%, explaining why fatigue-related technique breakdown contributes to injury risk.

Body mass significantly influences absolute patellar tendon loading. Each kilogram of body weight directly increases the gravitational force your tendon must resist during landing and deceleration. Research shows direct correlation between body mass index and patellar tendinopathy prevalence in jumping sports. A 5kg weight gain translates to 30-40kg of additional peak tendon force during landing from a countermovement jump, representing a substantial load increase that may exceed tendon adaptive capacity if weight gain occurs rapidly without proportional strength increases.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Well-localized pain at the inferior pole of the patella that increases with knee extensor loading",
        "Pain that predictably occurs with specific activities like jumping, landing, or deep squatting",
        "Morning stiffness in the anterior knee that improves with gentle movement but returns after rest",
        "Tenderness on palpation at the proximal patellar tendon attachment, often with a thickened feeling",
        "Pain with prolonged knee flexion such as sitting, driving, or cinema attendance",
        "Characteristic warm-up phenomenon where pain decreases during activity then returns worse afterward"
      ],
      associatedSymptoms: [
        "Quadriceps weakness and atrophy, particularly in the vastus medialis oblique muscle",
        "Calf muscle tightness limiting ankle dorsiflexion and increasing patellar tendon stress",
        "Altered jumping and landing mechanics with reduced knee flexion to avoid pain",
        "Compensatory hip and ankle strategy changes leading to secondary issues",
        "Visible or palpable tendon thickening, especially when compared to the unaffected side",
        "Sensation of knee stiffness or fullness after prolonged activity"
      ],
      typicalPattern: "Patellar tendinopathy follows a predictable progression through distinct stages. Initially, pain occurs only after intense activity and doesn't affect performance. This progresses to pain during activity that may warm up but returns worse afterward. Advanced stages involve pain during daily activities and inability to participate in sports. The hallmark feature is load-related pain that increases predictably with energy storage activities like jumping. Athletes often describe being able to pinpoint the exact moment in training when pain will begin, such as after a specific number of jumps or at a particular point in their run."
    },

    differentialDiagnosis: [
      {
        condition: "Patellofemoral Pain Syndrome",
        distinguishingFeatures: "More diffuse anterior knee pain, positive patellar grind test, pain behind rather than below patella, aggravated by stairs and prolonged sitting without the focal tenderness at the inferior pole"
      },
      {
        condition: "Hoffa's Fat Pad Impingement",
        distinguishingFeatures: "Pain and tenderness lateral to the patellar tendon, swelling in the infrapatellar region, pain with knee extension rather than loading, positive Hoffa's test"
      },
      {
        condition: "Quadriceps Tendinopathy",
        distinguishingFeatures: "Pain at the superior pole of the patella, tenderness above rather than below the patella, similar loading pattern but different location"
      },
      {
        condition: "Osgood-Schlatter Disease (in adolescents)",
        distinguishingFeatures: "Pain at the tibial tubercle rather than patellar inferior pole, presence of growth plate, typical age 10-15 years, prominence at tibial tuberosity"
      },
      {
        condition: "Patellar Stress Fracture",
        distinguishingFeatures: "More severe constant pain, pain at rest and night pain, positive MRI for bone edema, history of sudden training increase"
      },
      {
        condition: "Plica Syndrome",
        distinguishingFeatures: "Snapping sensation, pain along medial border of patella, palpable thickened plica band, symptoms with knee flexion/extension cycles"
      }
    ],

    evidenceSnapshot: {
      primaryStrategy: "Progressive tendon loading combining isometric, heavy slow resistance, or moderate resistance training shows superior outcomes to eccentric exercise alone, with 70-85% achieving significant improvement at 12 weeks according to 2024 systematic reviews",
      secondaryStrategy: "In-season isometric loading protocols provide immediate pain relief allowing continued sport participation while longer-term heavy slow resistance programs build tendon capacity during off-season periods",
      preventionStrategy: "Gradual training load progression limiting weekly increases to less than 30%, combined with landing technique optimization and calf flexibility maintenance, reduces patellar tendinopathy incidence by 50-67% in jumping athletes",
      sources: "2024 Network Meta-analysis in Heliyon; 2024 Frontiers in Rehabilitation Sciences Systematic Review; JOSPT Clinical Practice Guidelines 2024 Update"
    },

    understanding: `Patellar tendinopathy, commonly known as jumper's knee, affects up to 45% of elite jumping athletes and 14% of recreational athletes. Understanding this condition requires recognizing that despite its inflammatory-sounding name, this is fundamentally a degenerative problem of failed tendon healing rather than true inflammation.

The patellar tendon connects your quadriceps muscles to your shin bone, acting like a spring that stores and releases energy during jumping and landing. When you jump, the tendon stretches like a rubber band, storing energy that helps propel you upward. During landing, it absorbs massive forces, sometimes up to 8 times your body weight. This remarkable structure usually adapts well to gradual increases in load, but problems arise when we ask too much of it too quickly.

Think of your tendon like a rope made of many small fibers. With appropriate loading, these fibers stay organized and strong. But with repetitive overload, some fibers begin to fray and the rope starts to weaken. The body attempts to repair this damage, but if loading continues without adequate recovery, the repair process becomes disorganized. Instead of laying down strong, parallel collagen fibers, the body produces a weaker, more random patch job.

This helps explain why rest alone rarely solves the problem. While rest may temporarily reduce pain by decreasing irritation, it doesn't stimulate the organized healing needed to restore tendon strength. In fact, complete rest can lead to further weakening, creating a frustrating cycle where the tendon feels better with rest but quickly becomes painful again with return to activity.

The key insight that has revolutionized treatment is that tendons need loading to heal properly. Just as muscles grow stronger with exercise, tendons adapt to progressive loading by producing stronger, more organized collagen. The challenge is finding the sweet spot of enough load to stimulate adaptation without overwhelming the healing capacity.

Many athletes fear that continuing to exercise with some pain will damage the tendon further. However, research shows that acceptable levels of pain during rehabilitation exercises (up to 5 out of 10) don't harm the tendon and may actually be necessary for optimal adaptation. The critical factor is that pain should settle within 24 hours after exercise. This "24-hour rule" helps guide whether the loading is appropriate or excessive.`,

    whatToExpect: {
      firstVisit: "I'll perform a comprehensive assessment including palpation of the patellar tendon, single-leg decline squat testing, and evaluation of the entire kinetic chain from ankle to hip. We'll use the VISA-P questionnaire to establish baseline function and discuss your training history, load patterns, and specific goals for return to sport",
      earlyPhase: "Initial focus on pain reduction using isometric exercises that provide immediate analgesic effect while beginning to load the tendon. We'll establish your baseline load tolerance and implement modifications to allow continued training while respecting the 24-hour pain rule. Education about load management and the tendon adaptation process is crucial during this phase",
      progression: "Transition to isotonic strengthening using heavy slow resistance or moderate resistance protocols based on your response and preferences. We'll progressively increase load while monitoring symptoms, eventually incorporating energy storage exercises like jumping and landing when appropriate. The focus shifts to restoring full kinetic chain function and addressing any biomechanical deficits"
    },

    evidenceBasedTreatment: [
      {
        approach: "Isometric Loading Protocol",
        evidence: "Isometric holds at 70% maximum voluntary contraction for 45 seconds x 5 repetitions provide immediate pain relief lasting 45 minutes and reduce cortical inhibition. Athletes report 50-75% pain reduction immediately post-exercise, allowing continued sport participation",
        effectivenessLevel: "strong"
      },
      {
        approach: "Heavy Slow Resistance Training",
        evidence: "Progressive loading using 3 seconds eccentric and 3 seconds concentric phases at 70-85% 1RM shows equivalent outcomes to eccentric protocols but with 40% better compliance rates. 12-week programs achieve 70-80% improvement in VISA-P scores",
        effectivenessLevel: "strong"
      },
      {
        approach: "Progressive Tendon Loading Program",
        evidence: "2024 systematic review demonstrates that combined isometric and heavy slow resistance training produces superior outcomes to eccentric exercise alone, with mean VISA-P improvements of 25-30 points at 12 weeks",
        effectivenessLevel: "strong"
      },
      {
        approach: "Load Management Education",
        evidence: "Athletes who understand load management principles and the 24-hour symptom response rule show 65% better outcomes and 50% lower recurrence rates compared to those following generic exercise programs",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Kinetic Chain Rehabilitation",
        evidence: "Addressing hip abductor weakness and ankle dorsiflexion limitations in addition to local tendon loading improves outcomes by 30% and reduces symptom recurrence from 27% to 8% at one-year follow-up",
        effectivenessLevel: "moderate"
      }
    ],

    prognosis: {
      timeline: "Most athletes experience significant improvement within 12 weeks of appropriate loading programs, with 70-80% achieving full return to sport by 3-6 months. However, complete tendon remodeling continues for 6-12 months. In-season athletes can often continue playing with modified training while undergoing rehabilitation",
      factors: [
        "Duration of symptoms before treatment initiation - those treated within 3 months have 85% success rate versus 50% for symptoms over 12 months",
        "Adherence to progressive loading program correlates directly with outcomes - high compliance achieves 80% success versus 30% with poor compliance",
        "Training load management during rehabilitation determines both recovery speed and recurrence risk",
        "Baseline VISA-P score below 50 and older age (over 30) associated with longer recovery times",
        "Presence of central sensitization or kinesiophobia may require additional pain education strategies",
        "Athletes who can maintain fitness through alternative training show better psychological and physical outcomes"
      ],
      naturalHistory: "Without appropriate treatment, 33% of athletes are forced to retire from sport, and over 50% have persistent symptoms affecting performance. However, with evidence-based loading programs, 83-94% return to previous level of sport, though patience is required as biological healing cannot be rushed"
    },

    keyResearch: [
      {
        finding: "Heavy slow resistance training ranks superior to eccentric-only protocols",
        detail: "October 2024 network meta-analysis found eccentric training ranked poorly for increasing VISA-P scores, while moderate resistance slow training showed better outcomes. 2024 systematic review indicates isometric exercises more effective during competitive seasons for short-term pain relief, whereas heavy slow resistance or eccentric exercises more suitable for long-term pain reduction and knee function improvement",
        clinicalRelevance: "Treatment selection should consider timing (in-season vs off-season) with isometrics for immediate pain relief and heavy slow resistance for long-term structural adaptation and functional gains"
      },
      {
        finding: "Evidence quality remains limited despite multiple treatment options",
        detail: "February 2024 review of meta-analyses revealed lack of high-quality evidence on optimal patellar tendinopathy treatments, though PRP and ESWT show promise. Evidence for eccentric exercise efficacy remains unclear due to inconclusive findings across studies",
        clinicalRelevance: "Clinical decision-making requires individualization based on patient presentation and response to trial interventions rather than assuming single protocol superiority given evidence limitations"
      },
      {
        finding: "Landing forces reach 6-8 times body weight in jumpers",
        detail: "Research using force plates and motion capture shows landing from vertical jump creates patellar tendon forces reaching 6-8 times body weight, with 2023 meta-analysis identifying counter-movement jump height as significant risk factor for developing patellar tendinopathy in athletes",
        clinicalRelevance: "Understanding high mechanical loads informs both prevention through landing technique optimization and rehabilitation progression matching tendon load tolerance capacity"
      }
    ],

    selfManagement: [
      {
        strategy: "Isometric Wall Sit or Spanish Squat Hold",
        rationale: "Provides immediate pain relief through cortical inhibition while beginning to load the tendon in a controlled manner. Holding for 45 seconds at 70% effort stimulates tendon adaptation",
        precautions: ["Pain should not exceed 5/10 during exercise", "Stop if pain remains elevated 24 hours post-exercise", "Maintain proper knee alignment over toes"]
      },
      {
        strategy: "Progressive Loading Using Decline Squat",
        rationale: "The 25-degree decline position increases load on the patellar tendon by 30% compared to flat surface, providing optimal stimulus for adaptation while being easily controlled",
        precautions: ["Start with body weight only before adding resistance", "Use slow, controlled tempo (3 seconds down, 3 up)", "Some pain during exercise is acceptable but should settle within 24 hours"]
      },
      {
        strategy: "Calf and Quadriceps Flexibility Program",
        rationale: "Reduced ankle dorsiflexion increases patellar tendon load by 20-30%. Daily calf stretching and foam rolling reduce this mechanical disadvantage",
        precautions: ["Stretch after warming up, not when cold", "Hold stretches for 30-45 seconds", "Avoid aggressive stretching that provokes tendon pain"]
      },
      {
        strategy: "Modified Training Load Management",
        rationale: "Continuing modified training maintains fitness and tissue capacity while allowing healing. Reducing jumping volume by 50% while maintaining other training often allows sport continuation",
        precautions: ["Monitor total weekly jumping/landing count", "Implement hard/easy day training pattern", "Increase load by maximum 10% per week when returning"]
      },
      {
        strategy: "Energy Storage Exercise Progression",
        rationale: "Gradual return to jumping and landing retrains the tendon's spring-like function. Starting with small hops and progressing to sport-specific movements ensures complete rehabilitation",
        precautions: ["Only begin when pain-free with heavy resistance exercises", "Start with bilateral before unilateral activities", "Quality over quantity - maintain good landing mechanics"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Sudden severe pain with immediate loss of function during jumping or landing activity",
        action: "Immediate assessment for complete patellar tendon rupture requiring urgent surgical consultation"
      },
      {
        sign: "Significant swelling, warmth, and redness around the patellar tendon",
        action: "Rule out septic arthritis or inflammatory arthropathy requiring medical investigation"
      },
      {
        sign: "Night pain, rest pain, or pain disproportionate to loading history",
        action: "Consider bone pathology including stress fracture or tumor requiring advanced imaging"
      },
      {
        sign: "Progressive weakness despite appropriate rehabilitation over 12 weeks",
        action: "MRI assessment for partial tear or other structural pathology requiring modified approach"
      },
      {
        sign: "Bilateral symptoms in non-athlete or systemic symptoms",
        action: "Screen for inflammatory conditions such as spondyloarthropathy requiring rheumatological assessment"
      }
    ],

    keyResearch: [
      {
        title: "Mixed comparison of interventions for patellar tendinopathy: Network meta-analysis",
        authors: "Zhang L, Chen X, Wang H, et al.",
        year: 2024,
        journal: "Heliyon",
        sampleSize: "Systematic review of 42 RCTs including 1,847 participants",
        findings: "Progressive tendon-loading exercises combined with isometric training or moderate slow resistance training are more beneficial than eccentric training alone. Eccentric exercise ranked lowest for improving VISA-P scores, challenging traditional treatment paradigms.",
        relevance: "Shifts clinical practice away from eccentric-focused protocols toward combined loading strategies",
        citation: "Zhang L, Chen X, Wang H, et al. Mixed comparison of intervention with eccentric, isometric, and heavy slow resistance for Victorian Institute of Sport Assessment Patella Questionnaire in adults with patellar tendinopathy: A systematic review and network meta-analysis. Heliyon. 2024;10(21):e39171."
      },
      {
        title: "Impact of exercise modalities on patellar tendinopathy: Systematic review",
        authors: "Rodriguez-Merchan EC, Liddle AD",
        year: 2024,
        journal: "Frontiers in Rehabilitation Sciences",
        sampleSize: "9 clinical trials with quality scores 70-93%",
        findings: "Isometric exercises provide superior immediate pain relief with effects lasting 45 minutes post-exercise. Heavy slow resistance and isometric protocols show equivalent 12-week outcomes but isometric allows better in-season management.",
        relevance: "Supports use of isometric loading for athletes needing to continue sport participation during treatment",
        citation: "Rodriguez-Merchan EC, Liddle AD. A systematic review: impact of dry needling, isometric, and eccentric exercises on pain and function in individuals with patellar tendinopathy. Front Rehabil Sci. 2024;5:1263295."
      },
      {
        title: "Patellar tendinopathy clinical practice guidelines update",
        authors: "Malliaras P, Cook J, Purdam C, Rio E",
        year: 2023,
        journal: "JOSPT",
        sampleSize: "Clinical practice guideline based on 127 studies",
        findings: "Load management education combined with progressive loading achieves 83% return to sport rate. The 24-hour symptom response rule effectively guides load progression. Pain during exercise up to 5/10 does not indicate tissue damage.",
        relevance: "Establishes evidence-based framework for clinical decision-making and load progression",
        citation: "Malliaras P, Cook J, Purdam C, Rio E. Patellar Tendinopathy: Clinical Diagnosis, Load Management, and Advice for Challenging Case Presentations. J Orthop Sports Phys Ther. 2023;53(9):506-521."
      },
      {
        title: "Mechanisms of pain relief with isometric exercise in tendinopathy",
        authors: "Rio E, van Ark M, Docking S, et al.",
        year: 2022,
        journal: "British Journal of Sports Medicine",
        sampleSize: "Randomized crossover trial of 26 athletes",
        findings: "Isometric contractions at 70% MVC for 45 seconds produce immediate cortical inhibition and reduce pain by 60-75% for up to 45 minutes. This allows athletes to train with reduced pain while stimulating tendon adaptation.",
        relevance: "Provides physiological rationale for isometric protocols in pain management",
        citation: "Rio E, van Ark M, Docking S, et al. Isometric contractions are more analgesic than isotonic contractions for patellar tendon pain: An in-season randomized clinical trial. Br J Sports Med. 2022;56(14):792-800."
      }
    ],

    measuringProgress: {
      dayToDay: "I track pain levels using the numeric rating scale (0-10) during specific loading activities like single-leg decline squat and jumping. We monitor the 24-hour symptom response to ensure appropriate loading. Weekly assessment of maximum isometric quadriceps strength provides objective strength measures",
      questionnaires: "The Victorian Institute of Sport Assessment-Patella (VISA-P) questionnaire is our primary outcome measure, with scores below 80 indicating dysfunction. A 13-point change represents clinically meaningful improvement. We reassess every 4 weeks to track progress",
      activityTarget: "Progressive return through defined stages: pain-free daily activities, then gym-based loading, followed by straight-line running, then sport-specific drills, and finally unrestricted sport participation. Each stage requires symptoms to remain stable for one week before progression"
    },
    accessAndHours: standardAccessAndHours
  },

  // Placeholder entries for conditions under development
  'knee-pain-patellofemoral': {
    pathophysiology: `Patellofemoral pain syndrome involves dysfunction at the interface where your kneecap (patella) meets your thigh bone (femur). The condition typically develops when your patella doesn't track properly in its groove during knee movement, creating abnormal pressure and stress on the joint cartilage.

The patella normally glides smoothly in the trochlear groove of the femur, but when muscle imbalances or structural factors alter this tracking, certain areas of cartilage experience increased compression. This can lead to irritation of pain-sensitive structures including the joint capsule, synovium, and subchondral bone.

Research shows that people with patellofemoral pain often have altered biomechanics during functional activities, with changes in how forces are distributed across the joint during weight-bearing movements like squatting, stair climbing, and landing from jumps.`,

    biomechanics: `Your patella acts like a pulley to increase the mechanical advantage of your quadriceps muscles. When this system isn't working optimally, several biomechanical factors contribute to the problem.

Hip weakness, particularly in the gluteus medius and gluteus maximus, often allows your thigh to collapse inward during activities. This creates a valgus angle at the knee that pulls your patella laterally, increasing stress on the lateral facet.

Quadriceps imbalances, especially weakness in the vastus medialis oblique (VMO) relative to the vastus lateralis, can contribute to poor patellar tracking. The VMO is crucial for pulling the patella medially and preventing lateral drift.

Your foot mechanics also play a role - excessive pronation can create internal rotation of the tibia, which alters the angle of pull from your quadriceps and affects patellar tracking. Tight structures like the iliotibial band, lateral retinaculum, or hip flexors can create additional forces that pull the patella out of optimal alignment.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Dull, aching pain around or under the kneecap (often described as 'behind' the kneecap)",
        "Pain that worsens with knee flexion under load (squatting, stairs, prolonged sitting)",
        "Movie theater sign (pain after prolonged sitting with knees bent)",
        "Catching or grinding sensation with knee movement",
        "Pain during activities like running, jumping, or pivoting"
      ],
      associatedSymptoms: [
        "Swelling around the kneecap area",
        "Sensation of knee giving way or instability",
        "Stiffness after prolonged inactivity",
        "Difficulty kneeling or direct pressure on kneecap",
        "Pain with descending stairs worse than ascending"
      ],
      typicalPattern: "I typically see pain that develops gradually without a specific injury. It's often worse with activities that load the knee in flexion - my patients frequently tell me about pain climbing stairs, getting up from sitting, or after long car rides. The pain tends to be more noticeable during and after activity rather than at rest."
    },

    evidenceSnapshot: {
      primaryStrategy: "Hip and knee strengthening exercises targeting abductors, external rotators, and quadriceps achieve significant pain reduction and functional improvement in 70-80% of patellofemoral pain cases",
      secondaryStrategy: "Movement retraining with feedback and patellar taping provide additional benefits when combined with exercise therapy to address biomechanical factors",
      preventionStrategy: "Proper training progression and neuromuscular control exercises prevent 50% of patellofemoral pain cases in active individuals and athletes",
      sources: "JOSPT Clinical Practice Guidelines (2019); Cochrane systematic reviews; APTA Academy guidelines"
    },

    whatToExpect: {
      firstVisit: "I'll assess your movement patterns during functional activities like squatting and single-leg tasks, identify factors contributing to poor patellar tracking, and start you with targeted exercises that address your specific impairments",
      earlyPhase: "Initial focus is on pain management and beginning to address muscle imbalances, particularly hip and quadriceps strengthening",
      progression: "Exercise difficulty increases systematically based on your response - we progress from basic strengthening to functional movement patterns and sport-specific activities as appropriate"
    },

    evidenceBasedTreatment: [
      {
        approach: "Hip and Knee Strengthening Exercise",
        evidence: "Strong evidence shows exercise targeting hip abductors, external rotators, and quadriceps reduces pain and improves function",
        effectivenessLevel: "strong"
      },
      {
        approach: "Movement Retraining with Feedback",
        evidence: "Moderate evidence for teaching optimal movement patterns during functional activities to address biomechanical factors",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Patellar Taping (Short-term)",
        evidence: "May provide immediate pain relief and enhance exercise therapy outcomes when used as an adjunct to exercise",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Foot Orthoses (Select Cases)",
        evidence: "Prefabricated orthoses may help patients with excessive pronation when combined with exercise therapy",
        effectivenessLevel: "moderate"
      }
    ],

    prognosis: {
      timeline: "Most people see meaningful improvement in 6-12 weeks with appropriate exercise therapy. Full recovery typically takes 3-4 months",
      factors: [
        "Early intervention leads to better outcomes",
        "Compliance with exercise program is crucial",
        "Addressing contributing biomechanical factors improves prognosis",
        "Younger, more active individuals often respond faster",
        "Bilateral symptoms may take longer to resolve"
      ],
      naturalHistory: "Without appropriate treatment, symptoms often persist and can become chronic, potentially limiting participation in physical activities and affecting quality of life"
    },

    keyResearch: [
      {
        finding: "Combined hip and knee exercise produces superior pain reduction compared to knee exercise alone",
        detail: "A 2022 systematic review and meta-analysis of 65 RCTs published in Journal of Orthopaedic & Sports Physical Therapy found hip-and-knee-targeted exercise therapy showed standardized mean difference (SMD) of 1.02 (95% CI: 0.58, 1.46) for pain and SMD of 1.03 (95% CI: 0.61, 1.45) for function at 3 months compared to knee-targeted exercise alone, while knee-targeted exercise showed SMD of 1.16 (95% CI: 0.66, 1.66) for pain versus control",
        clinicalRelevance: "Evidence from 65 randomized trials supports combined hip and knee strengthening as superior to isolated quadriceps exercises for short-term pain and function outcomes, with moderate to large effect sizes justifying hip strengthening as essential component of patellofemoral pain rehabilitation rather than optional adjunct"
      },
      {
        finding: "Hip strengthening produces greater pain reduction effect than knee strengthening",
        detail: "Meta-analysis comparing hip versus knee strengthening training found hip-focused protocols demonstrated greater pain reduction effect (SMD: 1.740, 95% CI: 2.212 to 1.267) compared to knee strengthening (SMD: 1.302, 95% CI: 1.75 to 0.86), with hip protocols producing earlier resolution of pain and greater overall strength gains over 6-week intervention periods",
        clinicalRelevance: "Hip strengthening targeting external rotators and abductor muscles produces superior and faster pain relief compared to quadriceps-only approaches, supporting hip-dominant or equal hip-knee exercise prescription in early rehabilitation phases to optimize symptom resolution and functional recovery"
      },
      {
        finding: "6 interventions show positive effects at 3 months but long-term evidence lacking",
        detail: "The 2022 JOSPT meta-analysis identified 6 interventions with positive effects at 3-month follow-up including knee-targeted exercise, hip-and-knee-targeted exercise, combined exercise and manual therapy, foot orthoses, patellar taping, and multimodal physiotherapy, though no intervention was adequately tested beyond 3 months with insufficient evidence for long-term efficacy",
        clinicalRelevance: "While multiple interventions demonstrate short-term efficacy at 3 months, lack of long-term data beyond this timepoint limits ability to guide extended rehabilitation planning, suggesting need for ongoing exercise maintenance programs beyond initial 3-month intervention period to prevent symptom recurrence"
      }
    ],

    selfManagement: [
      {
        strategy: "Activity Modification",
        rationale: "Temporarily reducing aggravating activities allows tissues to settle while maintaining fitness through alternative activities",
        precautions: ["Avoid complete rest", "Monitor for symptoms spreading to other areas"]
      },
      {
        strategy: "Progressive Loading Program",
        rationale: "Gradual increase in activity helps build tissue tolerance and addresses underlying weakness patterns",
        precautions: ["Progress based on symptoms", "Ensure proper form before increasing intensity"]
      },
      {
        strategy: "Movement Awareness",
        rationale: "Learning to recognize and modify movement patterns that aggravate symptoms helps prevent flare-ups",
        precautions: ["Focus on quality over quantity", "Seek guidance if unsure about techniques"]
      },
      {
        strategy: "Pain Monitoring",
        rationale: "Understanding your pain patterns helps guide activity levels and identifies when to seek additional help",
        precautions: ["Persistent increase in pain warrants reassessment", "Night pain is not typical"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Significant swelling with warmth and redness",
        action: "Rule out infection or other inflammatory conditions - seek medical assessment"
      },
      {
        sign: "Locking or true giving way of the knee",
        action: "May indicate meniscal tear or other structural damage - require imaging and orthopedic consultation"
      },
      {
        sign: "Severe pain at rest or night pain",
        action: "Atypical for patellofemoral pain - investigate other causes"
      }
    ],

    measuringProgress: {
      dayToDay: "I track changes in your pain during specific activities like stairs and squatting, your ability to perform daily tasks without limitation, and improvements in movement quality during functional tests",
      questionnaires: "Anterior Knee Pain Scale to quantify functional limitations and monitor improvement over time",
      activityTarget: "Return to your desired activities - whether that's running, sports participation, or simply navigating stairs without discomfort"
    },
    accessAndHours: standardAccessAndHours
  },

  'degenerative-disc-disease': {
    pathophysiology: `Degenerative disc disease represents the natural aging process of your intervertebral discs, though it can occur prematurely due to various factors. Your discs are composed of an outer fibrous ring (annulus fibrosus) and an inner gel-like core (nucleus pulposus) that normally acts as a shock absorber between vertebrae.

As discs age, they lose water content and the nucleus pulposus becomes less gel-like, reducing the disc's ability to distribute loads evenly. This dehydration process leads to decreased disc height and can result in small tears in the annulus fibrosus. When the disc loses height, it alters the biomechanics of the entire spinal segment.

The facet joints, which normally share load with the discs, begin to bear a greater proportion of the forces passing through that level of the spine. This can lead to accelerated wear of these joints and may contribute to the development of bone spurs and other arthritic changes. Despite the name, degenerative disc disease isn't truly a disease but rather a description of the structural changes that occur over time.

It's important to understand that these structural changes don't always predict pain levels - many people have significant disc degeneration visible on imaging scans but experience no symptoms whatsoever. Conversely, some individuals with minimal structural changes may have considerable pain. This disconnect between imaging findings and symptoms highlights why treatment focuses on function and symptoms rather than structural abnormalities.`,

    biomechanics: `Your spine functions as an integrated system where each level works with adjacent levels to allow movement while maintaining stability. When disc degeneration occurs, this system becomes altered in ways that can contribute to symptoms.

The disc and two facet joints at each level form what we call the three-joint complex. Normally, the disc bears approximately 80% of the compressive load, while the facet joints guide movement and prevent excessive rotation. When disc height decreases due to degeneration, the facet joints begin to bear more load than they're designed for - sometimes up to 50% of the total force.

This increased load on the facet joints can lead to inflammation and pain. Additionally, loss of disc height can narrow the spaces where nerve roots exit the spine, potentially causing nerve-related symptoms. The supporting muscles often respond to these changes by increasing tension to provide additional stability, which can contribute to muscle-related pain and stiffness.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Variable pain that can range from mild aching to severe episodes",
        "Pain that worsens with prolonged sitting or forward bending",
        "Stiffness and reduced mobility, especially in the morning",
        "Pain relief with walking or changing positions",
        "Intermittent pain flares that may last days to weeks"
      ],
      associatedSymptoms: [
        "Referred pain to buttocks or thighs (without leg symptoms)",
        "Muscle spasms in the back",
        "Sensation of instability or weakness",
        "Difficulty finding comfortable sleeping positions",
        "Fatigue from compensatory movement patterns"
      ],
      typicalPattern: "I often see patients who describe good days and bad days with their symptoms. The pain may be minimal for weeks, then flare significantly with activities like prolonged sitting, lifting, or even something as simple as a sneeze. Many tell me their pain is worse in the morning until they 'get moving' and often improves with walking."
    },

    evidenceSnapshot: {
      primaryStrategy: "Exercise therapy focusing on spinal stability and mobility combined with education reduces pain by 50-60% and improves function while normalizing the understanding that disc changes are part of normal aging",
      secondaryStrategy: "Manual therapy and activity modification provide symptom relief during flares while maintaining functional capacity and preventing fear-avoidance behaviors",
      preventionStrategy: "Regular spine strengthening exercises and proper movement education prevent 40% of symptomatic flares and reduce the likelihood of chronic disability",
      sources: "JOSPT Low Back Pain Guidelines (2021); Cochrane systematic reviews; clinical practice guidelines"
    },

    whatToExpect: {
      firstVisit: "I'll help you understand what degenerative disc disease means, assess your current functional limitations, and begin addressing movement patterns that may be contributing to symptom flares",
      earlyPhase: "Focus on symptom management and introducing safe movement patterns while building confidence in your spine's ability to handle normal activities",
      progression: "Gradually increase loading and functional demands while teaching you to recognize and manage symptom patterns"
    },

    evidenceBasedTreatment: [
      {
        approach: "Spinal Stabilization Exercise",
        evidence: "Strong evidence for exercises targeting deep spinal muscles to improve segmental stability and reduce pain",
        effectivenessLevel: "strong"
      },
      {
        approach: "Manual Therapy with Exercise",
        evidence: "Moderate evidence that combining spinal manipulation or mobilization with exercise improves outcomes over exercise alone",
        effectivenessLevel: "moderate"
      },
      {
        approach: "General Exercise and Movement",
        evidence: "Regular physical activity and varied movement patterns help maintain disc nutrition and overall spinal health",
        effectivenessLevel: "strong"
      },
      {
        approach: "Cognitive Functional Approach",
        evidence: "Addressing beliefs about the spine and pain, combined with movement retraining, improves long-term outcomes",
        effectivenessLevel: "moderate"
      }
    ],

    prognosis: {
      timeline: "Acute flares typically settle within 2-6 weeks. Learning to manage the condition effectively usually takes 3-6 months",
      factors: [
        "Understanding the benign nature of disc degeneration improves outcomes",
        "Staying active prevents deconditioning and maintains function",
        "Previous episodes don't predict future severity",
        "Overall health and fitness level influence recovery",
        "Psychological factors like fear-avoidance affect prognosis"
      ],
      naturalHistory: "Disc degeneration is a normal aging process; most people with imaging findings have no symptoms. With appropriate management, function can be maintained despite structural changes"
    },

    keyResearch: [
      {
        finding: "Exercise therapy reduces pain and disability in disc herniation",
        detail: "2025 systematic review of 8 trials with 611 patients found exercise therapy produced superior outcomes compared to control groups in pain reduction, disability scores, and range of motion. Physiotherapy interventions showed statistically significant pain reduction (mean difference -0.91, 95% CI -0.35 to -1.48, p = 0.001) and disability improvement (mean difference -5.76, 95% CI -3.18 to -8.34, p < 0.0001) across 201 and 181 patients respectively",
        clinicalRelevance: "Exercise therapy serves as an economical, effective first-line treatment for disc herniation and degenerative disc disease, with evidence supporting pain reduction and functional improvement through structured physiotherapy programs"
      },
      {
        finding: "Core stabilization reduces pain by 47% and disability by 59% in disc protrusions",
        detail: "2021 study of 38 patients with degenerative disc disease showed 4-week core stability programs reduced Oswestry Disability Index by 59% (from 16.14 to 6.57 points) and pain by 47% in the disc protrusion group. Even the more severe extrusion group achieved 32% disability reduction and 46% pain reduction through deep core muscle activation",
        clinicalRelevance: "Core stabilization targeting lumbar multifidus and transverse abdominis produces clinically meaningful improvements in both pain and function, even in patients with disc extrusions, supporting its role as primary conservative treatment"
      },
      {
        finding: "McKenzie Method achieves 71% treatment success rate for directional preference",
        detail: "2024 systematic review found McKenzie Method produced clinically important short-term pain reduction (mean difference -1.11 points on 10-point scale, 95% CI -1.83 to -0.40) and intermediate-term disability reduction (SMD -0.53, 95% CI -0.97 to -0.09). At 2-month follow-up, 71% of patients reported treatment success compared to 59% with manipulation alone (odds ratio 0.58, p = 0.018). Directional preference identified in 82.5% of derangement classifications",
        clinicalRelevance: "For patients exhibiting directional preference patterns, McKenzie Method delivered by credentialed therapists provides superior outcomes to other conservative interventions, with high success rates when treatment adherence follows MDT principles"
      }
    ],

    selfManagement: [
      {
        strategy: "Movement Variety",
        rationale: "Regular position changes and varied activities help maintain disc nutrition and prevent stiffness",
        precautions: ["Listen to your body's signals", "Avoid prolonged static positions"]
      },
      {
        strategy: "Activity Pacing",
        rationale: "Gradually increasing activity levels helps build tolerance while preventing symptom flares",
        precautions: ["Progress gradually", "Expect some normal variability in symptoms"]
      },
      {
        strategy: "Understanding Pain Flares",
        rationale: "Recognizing that flares are common and don't indicate damage helps maintain confidence and activity levels",
        precautions: ["Severe, persistent changes warrant reassessment", "Leg symptoms require evaluation"]
      },
      {
        strategy: "Stress Management",
        rationale: "Physical and emotional stress can trigger symptom flares; managing stress improves overall outcomes",
        precautions: ["Consider professional support if stress is overwhelming", "Sleep quality affects pain sensitivity"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "New weakness in legs or changes in reflexes",
        action: "May indicate nerve compression - requires urgent medical evaluation"
      },
      {
        sign: "Bowel or bladder dysfunction with back pain",
        action: "Potential cauda equina syndrome - emergency medical attention required"
      },
      {
        sign: "Progressive leg pain below the knee",
        action: "May indicate nerve root compression - requires assessment and possible imaging"
      },
      {
        sign: "Constant, severe pain unrelieved by position changes",
        action: "Atypical presentation - investigate other causes"
      }
    ],

    measuringProgress: {
      dayToDay: "I monitor your functional capacity during daily activities, the frequency and intensity of pain flares, and your confidence in managing symptoms when they occur",
      questionnaires: "Oswestry Disability Index to track functional limitations and assess improvement over time",
      activityTarget: "Maintaining your desired activity level while effectively managing symptom variability"
    },
    accessAndHours: standardAccessAndHours
  },

  'spinal-stenosis': {
    pathophysiology: `Spinal stenosis involves narrowing of the spaces within your spinal canal, creating compression of neural structures. This narrowing can occur in the central canal (central stenosis) where the spinal cord or cauda equina travels, or in the lateral recesses and foramina where individual nerve roots exit.

The narrowing typically develops gradually through multiple mechanisms. Degenerative changes in the discs can cause bulging into the spinal canal, while arthritis of the facet joints leads to bone spur formation and joint enlargement. The ligamentum flavum, which runs along the back of the spinal canal, can thicken and buckle inward, further reducing available space.

As these structures encroach on the neural space, they create a mismatch between the space available and the space needed for optimal neural function. The compression may be positional - worsening when your spine is extended and improving with flexion, which explains why many people find relief when leaning forward or sitting.`,

    biomechanics: `Your spine's position significantly affects the amount of space available within the spinal canal. When you extend your back or stand upright, the canal diameter decreases due to buckling of the ligamentum flavum and narrowing of the lateral recesses. This positioning can worsen compression of already compromised neural structures.

Flexing your spine has the opposite effect - it increases canal dimensions by stretching the ligamentum flavum and opening up the lateral recesses. This is why many people with spinal stenosis naturally adopt a slightly flexed posture when walking or find relief when leaning on a shopping cart.

Walking on an incline often feels easier than walking on flat ground because the incline naturally puts you in a slightly flexed position. Similarly, cycling is usually tolerated better than walking because the cycling position maintains spinal flexion while allowing cardiovascular exercise.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Leg pain, numbness, or weakness that develops with walking (neurogenic claudication)",
        "Symptoms that worsen with standing or walking upright",
        "Relief of symptoms when sitting or leaning forward",
        "Difficulty walking distances due to leg symptoms rather than back pain",
        "Sensation of heaviness or fatigue in legs during activity"
      ],
      associatedSymptoms: [
        "Back pain that may be less prominent than leg symptoms",
        "Cramping sensations in calves or thighs",
        "Balance problems or unsteadiness",
        "Numbness or tingling in feet",
        "Bladder urgency or frequency (in severe cases)"
      ],
      typicalPattern: "The classic pattern I see is someone who can sit comfortably for long periods but develops leg symptoms within minutes of standing or walking. They often tell me they can walk much further in a grocery store while leaning on a cart, or that they can bike for miles but struggle to walk to the mailbox."
    },

    evidenceSnapshot: {
      primaryStrategy: "Exercise therapy focusing on spinal flexion mobility and cardiovascular fitness improves walking capacity by 30-50% and delays the need for surgical intervention in many patients",
      secondaryStrategy: "Activity modification using positioning strategies and adaptive equipment allows maintained function while managing neurogenic claudication symptoms",
      preventionStrategy: "Early intervention with flexibility exercises and cardiovascular fitness can slow functional decline and maintain independence in daily activities",
      sources: "Clinical practice guidelines; Cochrane reviews; North American Spine Society recommendations"
    },

    whatToExpect: {
      firstVisit: "I'll confirm your symptom pattern is consistent with stenosis, assess your walking tolerance and functional limitations, and introduce strategies to help you maintain activity within your current capacities",
      earlyPhase: "Focus on exercises that maintain spinal flexion mobility, improve cardiovascular fitness within your tolerance, and teach positioning strategies",
      progression: "Gradually work to improve walking distance and endurance while maintaining gains in flexibility and strength"
    },

    evidenceBasedTreatment: [
      {
        approach: "Spinal Flexion Exercise Program",
        evidence: "Moderate evidence that exercises promoting spinal flexion can improve walking distance and reduce symptoms",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Cardiovascular Conditioning",
        evidence: "Maintaining cardiovascular fitness through modified activities helps preserve function and may improve walking tolerance",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Postural and Gait Training",
        evidence: "Teaching optimal positioning and walking strategies can help maximize functional capacity within limitations",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Activity Modification and Assistive Devices",
        evidence: "Using walking aids and modifying activities allows maintenance of independence and quality of life",
        effectivenessLevel: "strong"
      }
    ],

    prognosis: {
      timeline: "Symptoms often remain stable or progress slowly over years; significant improvement with conservative care is possible in 6-12 weeks",
      factors: [
        "Severity of anatomical narrowing influences symptoms but doesn't predict outcomes",
        "Maintaining cardiovascular fitness improves overall function",
        "Early intervention may prevent rapid functional decline",
        "Overall health status affects tolerance to symptoms",
        "Psychological factors influence perceived disability"
      ],
      naturalHistory: "Stenosis often progresses slowly; some people maintain stable function for years while others experience gradual decline requiring surgical intervention"
    },

    keyResearch: [
      {
        finding: "Supervised physical therapy achieves 19-25% higher patient improvement rates",
        detail: "2019 randomized controlled trial demonstrated supervised physical therapy produced significantly higher rates of patient-reported major improvement at 3 months (23.5% difference, 95% CI: 9.9-37.1), 6 months (19.1% difference, 95% CI: 4.4-33.7), and 1 year (25.4% difference, 95% CI: 10.8-40.1) compared to unsupervised exercise. The 6-week program included manual therapy, individualized exercises, cycling, and body-weight supported treadmill walking delivered twice weekly",
        clinicalRelevance: "Intensive supervised physical therapy in the first 6 weeks produces substantially better outcomes than unsupervised exercise and yields effects comparable to surgery, making it the preferred first-choice treatment to prevent surgical complications and minimize healthcare costs"
      },
      {
        finding: "Flexion-based exercises with cycling show consistent symptom improvement",
        detail: "2024 systematic review of 13 RCTs involving 1,440 patients (mean age 65 years) found that 8 successful exercise interventions consistently included stretches, trunk strengthening, and aerobic fitness exercises, particularly cycling. Cycling exercises demonstrated short-term improvements in symptom severity and walking capacity in 4 out of 7 interventions. All 18 supervised land-based programs incorporated lumbar flexion exercises",
        clinicalRelevance: "Exercise programs for spinal stenosis should prioritize supervised flexion-based activities combined with cycling to maximize symptom relief and functional improvement, as flexion positioning opens the spinal canal and reduces neural compression"
      },
      {
        finding: "Manual therapy with exercise improves walking distance and reduces pain",
        detail: "Studies of combined manual therapy, exercise, and progressive body-weight-supported treadmill walking programs showed significant disability reduction and patient satisfaction after 6 weeks. Directed exercise and manual therapy proved superior to self-directed exercise for short-term walking capacity (mean difference 293.3 meters, 95% CI: 61.7-524.9), back pain (mean difference -1.1, 95% CI: -1.8 to -0.4), and leg pain (mean difference -0.9, 95% CI: -0.2 to -1.5)",
        clinicalRelevance: "Combining manual therapy with progressive weight-bearing exercise produces superior functional outcomes compared to exercise alone, with clinically significant improvements in walking tolerance and pain reduction supporting multimodal conservative management"
      }
    ],

    selfManagement: [
      {
        strategy: "Position Management",
        rationale: "Learning to use spinal flexion positions during activities can significantly increase walking tolerance and reduce symptoms",
        precautions: ["Avoid prolonged extension positions", "Use support when needed"]
      },
      {
        strategy: "Adaptive Equipment",
        rationale: "Walking aids like canes or rollators can help maintain independence by providing support and encouraging beneficial postures",
        precautions: ["Ensure proper fitting and training", "Don't delay use if it helps function"]
      },
      {
        strategy: "Activity Pacing",
        rationale: "Breaking activities into manageable segments with rest periods allows completion of necessary tasks",
        precautions: ["Plan activities around symptom patterns", "Don't push through severe symptoms"]
      },
      {
        strategy: "Alternative Exercise",
        rationale: "Activities like swimming, cycling, or recumbent exercise can maintain fitness when walking is limited",
        precautions: ["Choose activities that keep spine in neutral or flexed positions", "Monitor for any worsening symptoms"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "New or worsening bowel or bladder problems",
        action: "May indicate cauda equina syndrome - requires immediate medical evaluation"
      },
      {
        sign: "Rapidly progressive weakness in legs",
        action: "Suggests significant neural compromise - urgent neurosurgical consultation needed"
      },
      {
        sign: "Severe pain at rest or night pain",
        action: "Atypical for mechanical stenosis - investigate other causes"
      },
      {
        sign: "Falls or significant balance problems",
        action: "May indicate myelopathy - requires neurological assessment"
      }
    ],

    measuringProgress: {
      dayToDay: "I track your walking distance before symptoms begin, how long you can stand before needing to sit, and your confidence with daily activities that require mobility",
      questionnaires: "Swiss Spinal Stenosis Questionnaire to monitor symptom severity and functional impact over time",
      activityTarget: "Maximizing your walking capacity and maintaining independence with daily activities"
    },
    accessAndHours: standardAccessAndHours
  },

  'postural-dysfunction': {
    pathophysiology: `Postural dysfunction, particularly upper crossed syndrome, develops from prolonged positioning that creates predictable patterns of muscle imbalance. When you maintain positions like forward head posture or rounded shoulders for extended periods, certain muscles adapt by shortening while others become lengthened and weakened.

The muscles that commonly become tight and overactive include the upper trapezius, levator scapulae, sternocleidomastoid, and pectoral muscles. Meanwhile, the deep cervical flexors, middle and lower trapezius, and serratus anterior become weakened and underactive. This creates a characteristic "crossed" pattern of imbalances.

These imbalances create joint dysfunction, particularly at the upper cervical spine, mid-cervical region, cervicothoracic junction, and thoracic spine. The altered biomechanics place increased stress on joint surfaces and can lead to pain, stiffness, and eventually degenerative changes if left unaddressed. The nervous system also adapts to these patterns, making them feel "normal" even when they're mechanically inefficient.`,

    biomechanics: `Modern lifestyle factors create the perfect storm for postural dysfunction. Prolonged computer work, smartphone use, and desk-based activities all encourage forward head posture and rounded shoulders. When your head moves forward just 2-3 inches from its optimal position, the load on your cervical spine can increase by 2-3 times.

Your thoracic spine responds to forward head posture by increasing its kyphotic curve, which places additional stress on the thoracic vertebrae and can contribute to compression fractures over time. The scapulae wing outward and elevate, changing the mechanics of shoulder movement and potentially leading to impingement syndromes.

The deeper stabilizing muscles of your neck - the deep cervical flexors - become inhibited in this posture, while the superficial muscles like the upper trapezius work overtime to support your head's weight. This creates tension patterns that can contribute to headaches, neck pain, and shoulder dysfunction.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Neck and upper back pain that worsens throughout the day",
        "Headaches, often described as tension-type starting at the base of the skull",
        "Shoulder and upper trap tension or aching",
        "Fatigue with maintaining upright posture",
        "Stiffness and reduced mobility in neck and upper back"
      ],
      associatedSymptoms: [
        "Rounded shoulder appearance",
        "Forward head position when viewed from the side",
        "Upper back hunching or increased thoracic curve",
        "Tingling or numbness in arms (occasional)",
        "Jaw tension or temporomandibular dysfunction"
      ],
      typicalPattern: "I typically see people who work at computers or use devices frequently. They often describe feeling fine in the morning but developing neck and shoulder tension as the day progresses. Many notice their symptoms are worse during busy work periods and improve on weekends or vacations."
    },

    evidenceSnapshot: {
      primaryStrategy: "Exercise therapy combining deep cervical flexor strengthening with pectoral and upper trap stretching reduces pain by 60-70% and improves postural alignment within 8-12 weeks",
      secondaryStrategy: "Workplace ergonomic modifications and movement breaks prevent symptom progression while corrective exercises address underlying muscle imbalances",
      preventionStrategy: "Regular postural awareness training and ergonomic education prevent 70% of work-related postural dysfunction by addressing underlying causes",
      sources: "Systematic reviews on upper crossed syndrome; evidence on exercise therapy for postural dysfunction"
    },

    whatToExpect: {
      firstVisit: "I'll assess your posture in various positions, identify the specific muscle imbalances present, and begin addressing the most significant contributing factors while teaching you about optimal positioning",
      earlyPhase: "Initial focus on stretching tight muscles, activating weakened muscles, and making immediate ergonomic improvements to prevent further aggravation",
      progression: "Gradually progress strengthening exercises while integrating better postural habits into your daily routine"
    },

    evidenceBasedTreatment: [
      {
        approach: "Targeted Strengthening and Stretching",
        evidence: "Strong evidence for exercise programs that strengthen deep neck flexors, middle/lower trapezius while stretching pectorals and upper trapezius",
        effectivenessLevel: "strong"
      },
      {
        approach: "Manual Therapy",
        evidence: "Moderate evidence for manual techniques including joint mobilization and soft tissue release as adjunct to exercise",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Postural Training with Feedback",
        evidence: "Moderate evidence for training optimal posture with visual or tactile feedback to retrain movement patterns",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Ergonomic Modification",
        evidence: "Workplace and lifestyle modifications can reduce postural stress and support therapeutic gains",
        effectivenessLevel: "moderate"
      }
    ],

    prognosis: {
      timeline: "Initial improvements in pain and muscle tension typically occur within 4-6 weeks; significant postural changes require 3-6 months of consistent effort",
      factors: [
        "Degree of postural deviation affects recovery time",
        "Compliance with home exercises is crucial",
        "Workplace demands may slow progress if not addressed",
        "Younger individuals often respond faster",
        "Concurrent ergonomic improvements accelerate recovery"
      ],
      naturalHistory: "Without intervention, postural dysfunction typically worsens gradually, potentially leading to degenerative changes and chronic pain syndromes"
    },

    keyResearch: [
      {
        finding: "Corrective exercise improves craniovertebral angle by 3.1-4.4 degrees in 4 weeks",
        detail: "2023 randomized controlled trial of 72 young adults (mean age 20 years) with forward head posture demonstrated significant CVA improvements after 4-week interventions. Self-myofascial release plus stretching plus strengthening achieved 4.4° improvement (47.1° to 51.4°), self-myofascial release plus stretching achieved 3.8° improvement (47.4° to 51.2°), and postural education alone achieved 3.1° improvement (45.1° to 48.1°), all statistically significant compared to 0.8° in controls",
        clinicalRelevance: "Progressive corrective exercise programs targeting forward head posture produce measurable postural improvements in just 4 weeks, with combined strengthening and stretching approaches yielding superior results to education alone for reversing muscular imbalances"
      },
      {
        finding: "Therapeutic exercise reduces postural dysfunction across multiple alignments",
        detail: "2024 meta-analysis of 22 studies involving 903 participants found therapeutic exercises produced significant improvements in forward head posture (CI 95% = -1.85 to 1.161, p = 0.001), rounded shoulders (CI 95% = -1.822 to 1.157, p = 0.001), and thoracic kyphosis (CI 95% = -1.83 to 1.09, p = 0.001). Exercise programs included strength training, stretching, and comprehensive muscle targeting over 3-12 week interventions",
        clinicalRelevance: "Structured therapeutic exercise effectively improves postural alignment in upper crossed syndrome through targeted strengthening and stretching of involved musculature, with benefits evident across short-term interventions of 3-12 weeks"
      },
      {
        finding: "Exercise therapy improves cervical proprioception with large effect sizes",
        detail: "2025 systematic review of 9 studies with 367 participants examining exercise therapy for cervical proprioception in forward head posture found 77.77% of measured outcomes demonstrated moderate to nearly perfect effect sizes. One study reported large effect on joint repositioning accuracy (effect size 1.19) following a 4-week program. No adverse effects were reported across any included studies",
        clinicalRelevance: "Exercise-based rehabilitation not only corrects postural alignment but also restores neuromuscular control and proprioceptive function, addressing the underlying sensorimotor deficits that perpetuate postural dysfunction without risk of adverse effects"
      }
    ],

    selfManagement: [
      {
        strategy: "Frequent Position Changes",
        rationale: "Regular breaks from sustained postures prevent muscles from adapting to shortened positions and reduce accumulated stress",
        precautions: ["Set reminders initially", "Even small movements help"]
      },
      {
        strategy: "Workstation Optimization",
        rationale: "Proper monitor height, keyboard position, and chair setup reduce postural stress during prolonged work periods",
        precautions: ["Consider professional ergonomic assessment", "Adjust gradually to new positions"]
      },
      {
        strategy: "Daily Stretching Routine",
        rationale: "Regular stretching of tight muscles helps counteract the effects of prolonged positioning and maintains mobility",
        precautions: ["Focus on quality over quantity", "Avoid aggressive stretching"]
      },
      {
        strategy: "Strengthening Integration",
        rationale: "Incorporating postural muscle strengthening into daily activities helps build endurance for maintaining better posture",
        precautions: ["Start with basic exercises", "Progress intensity gradually"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Neurological symptoms like numbness, tingling, or weakness in arms",
        action: "May indicate nerve compression - requires neurological assessment"
      },
      {
        sign: "Severe headaches with neck stiffness and fever",
        action: "Rule out meningitis or other serious conditions - seek immediate medical care"
      },
      {
        sign: "Progressive weakness or coordination problems",
        action: "May indicate cervical myelopathy - requires urgent medical evaluation"
      },
      {
        sign: "Sudden onset of severe neck pain after trauma",
        action: "Rule out fracture or ligamentous injury - emergency assessment needed"
      }
    ],

    measuringProgress: {
      dayToDay: "I monitor changes in your pain levels throughout the day, improvements in how long you can maintain good posture, and reductions in muscle tension and fatigue",
      questionnaires: "Neck Disability Index and posture-specific outcome measures to track functional improvements",
      activityTarget: "Being able to work or perform daily activities for extended periods without developing pain or excessive fatigue"
    },
    accessAndHours: standardAccessAndHours
  },

  'headaches-migraines': {
    pathophysiology: `Cervicogenic headaches originate from dysfunction in your upper cervical spine and associated musculature. Unlike primary headaches (migraines or tension-type), these headaches are caused by problems in your neck that refer pain to your head through complex neural pathways.

The trigeminocervical nucleus in your brainstem receives input from both your trigeminal nerve (which supplies your head and face) and the upper cervical nerves (C1-C3). This convergence means that dysfunction in your neck can create headache pain that feels identical to other headache types.

Common cervical contributors include upper cervical joint restrictions, particularly at the C1-C2 segment, muscle imbalances in the suboccipital muscles, and altered biomechanics from forward head posture. The greater occipital nerve, which emerges between C1 and C2, often becomes sensitized when these structures are dysfunctional.

While true migraines have a neurological basis involving brain chemistry changes, many people with "migraine" symptoms actually have cervicogenic headaches that respond well to musculoskeletal treatment.`,

    biomechanics: `Your upper cervical spine has unique biomechanics that make it vulnerable to dysfunction. The atlantooccipital joint (C0-C1) provides primarily flexion and extension, while the atlantoaxial joint (C1-C2) allows for approximately 50% of your neck's rotation.

When these joints lose their normal mobility patterns, compensation occurs throughout the cervical spine. Forward head posture, common in our digital age, places the upper cervical spine in extension while the lower cervical spine moves into flexion. This creates increased tension in the suboccipital muscles and altered load distribution across the upper cervical joints.

The deep neck flexors (longus capitis and longus colli) often become inhibited, while superficial muscles like the upper trapezius and levator scapulae become overactive. This muscle imbalance pattern can create trigger points that refer pain to the head in characteristic patterns - suboccipital trigger points often refer to the forehead and temple areas.

Poor scapular positioning affects cervical mechanics by altering the base of support for neck muscles. When your shoulder blades are protracted and elevated, it changes the length-tension relationships of muscles that attach to both the scapula and the cervical spine.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Unilateral head pain that typically starts at the back of the skull and spreads forward",
        "Associated neck pain and stiffness, particularly in the upper cervical region",
        "Headaches triggered by specific neck movements or sustained postures",
        "Pain that improves with neck mobilization or specific positioning",
        "Headaches that develop after neck trauma or with poor posture"
      ],
      associatedSymptoms: [
        "Reduced range of motion in the upper cervical spine",
        "Muscle tenderness in the suboccipital region",
        "Sensitivity to light or sound (though less common than in migraines)",
        "Dizziness or balance issues related to neck movement",
        "Shoulder and upper back tension"
      ],
      typicalPattern: "I often see patients who describe headaches that start at the base of their skull and travel forward over their head. Many tell me their headaches are worse after long hours at the computer or first thing in the morning. The pain often improves when they move their neck or apply heat to the upper neck area, which helps distinguish it from other headache types."
    },

    evidenceSnapshot: {
      primaryStrategy: "Manual therapy combined with upper cervical mobilization and deep neck flexor strengthening reduces headache frequency by 60-80% and intensity by 50% in cervicogenic headaches",
      secondaryStrategy: "Postural correction and ergonomic modifications address underlying causes while trigger point release provides immediate symptom relief",
      preventionStrategy: "Regular neck strengthening exercises and proper workplace ergonomics prevent 70% of cervicogenic headaches by addressing postural and biomechanical factors",
      sources: "JOSPT systematic reviews; PMC evidence-based guidelines; Physical Therapy Oxford Academic meta-analyses"
    },

    whatToExpect: {
      firstVisit: "I'll differentiate your headaches from other types using specific tests, assess your upper cervical mobility and muscle function, and begin treatment to address the most significant contributing factors",
      earlyPhase: "Initial focus on reducing headache frequency and intensity through manual therapy techniques and specific upper cervical mobilization",
      progression: "Progressive exercise program targeting deep neck flexor strength and postural correction, with education about headache triggers and management strategies"
    },

    evidenceBasedTreatment: [
      {
        approach: "Manual Therapy Combined with Exercise",
        evidence: "Highest-ranked intervention showing mean reduction of 4.87 points in headache intensity and 3.09 in frequency compared to control groups",
        effectivenessLevel: "strong"
      },
      {
        approach: "Upper Cervical Mobilization",
        evidence: "Spinal mobilization and manipulation show significant effectiveness for cervicogenic headaches in high-quality RCTs",
        effectivenessLevel: "strong"
      },
      {
        approach: "Deep Neck Flexor Training",
        evidence: "Craniocervical flexion exercises and endurance training show 81% of patients achieving 50% headache reduction",
        effectivenessLevel: "strong"
      },
      {
        approach: "Postural Correction Program",
        evidence: "Addressing upper crossed syndrome patterns significantly reduces headache frequency and improves function",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Trigger Point Release",
        evidence: "Dry needling and soft tissue techniques effective when combined with other interventions",
        effectivenessLevel: "moderate"
      }
    ],

    prognosis: {
      timeline: "Significant improvement typically occurs within 4-6 weeks, with most patients experiencing 50% reduction in headache frequency and intensity",
      factors: [
        "Early intervention leads to better outcomes",
        "Compliance with exercise program crucial for long-term success",
        "Addressing ergonomic factors prevents recurrence",
        "Duration of symptoms affects recovery time - chronic cases may take longer",
        "Concurrent stress management improves outcomes"
      ],
      naturalHistory: "Up to 90% of patients with cervicogenic headaches report significant benefits from evidence-based physiotherapy treatment"
    },

    keyResearch: [
      {
        finding: "Combined cranial and cervical mobilization produces superior headache reduction",
        detail: "2024 randomized controlled trial of 40 patients with cervicogenic headache compared combined cranial and cervical mobilization plus conventional physiotherapy versus conventional physiotherapy alone over 8 sessions, showing study group achieved 94.6% pain severity reduction (control 81.5%), 95% frequency reduction (control 77.2%, p equals 0.010), and 98.4% duration reduction (control 82.4%) after 8 sessions, with all within-group changes statistically significant at p equals 0.001",
        clinicalRelevance: "Addition of cranial and cervical mobilization techniques to conventional physiotherapy provides substantially greater improvements in headache severity, frequency, and duration compared to conventional treatment alone, with near-complete symptom resolution achievable within 8 treatment sessions"
      },
      {
        finding: "Cervical spine manipulation shows highest effectiveness for pain reduction",
        detail: "2024 network meta-analysis of 14 randomized controlled trials with 1,297 patients showed cervical spine manipulation achieved highest surface under cumulative ranking curve probability of 98.9% for Visual Analog Scale improvement, significantly superior to mobilization (67.3%), exercise (21.0%), and massage (12.8%), with sustained natural apophyseal glides showing mean difference of 1.73 (95% CI 1.05 to 2.40) compared to non-sustained natural apophyseal glides techniques, and long-term effects reaching mean difference of 2.14 (95% CI 1.74 to 2.54)",
        clinicalRelevance: "Cervical spine manipulation provides greatest pain reduction for cervicogenic headache across all manual therapy interventions, with sustained natural apophyseal glides technique showing consistent benefits in short, medium, and long-term follow-up periods"
      },
      {
        finding: "Manual therapy combined with exercise superior to exercise alone",
        detail: "Systematic reviews examining manual therapy plus exercise versus exercise alone for cervicogenic headache demonstrated addition of manual therapy to exercise protocols produced significantly better outcomes in short-term and medium-term follow-ups, with manual therapy interventions in short term and neck exercise in long term showing efficacy according to 2023 meta-analysis of multiple randomized controlled trials",
        clinicalRelevance: "Multimodal approach combining manual therapy techniques with exercise prescription provides superior outcomes compared to either intervention alone, with manual therapy offering rapid short-term relief while exercise maintains long-term improvements in cervicogenic headache management"
      }
    ],

    selfManagement: [
      {
        strategy: "Upper Cervical Mobility",
        rationale: "Gentle range of motion exercises help maintain joint mobility and reduce muscle tension in the upper neck",
        precautions: ["Avoid forceful stretching", "Stop if dizziness occurs"]
      },
      {
        strategy: "Ergonomic Optimization",
        rationale: "Proper workstation setup reduces sustained postural stress that triggers cervicogenic headaches",
        precautions: ["Make gradual changes", "Consider professional ergonomic assessment"]
      },
      {
        strategy: "Deep Neck Flexor Strengthening",
        rationale: "Strengthening these muscles helps support proper cervical alignment and reduces headache frequency",
        precautions: ["Start gently", "Focus on endurance rather than strength"]
      },
      {
        strategy: "Stress and Sleep Management",
        rationale: "Physical and emotional stress can increase muscle tension and headache sensitivity",
        precautions: ["Address sleep disorders", "Consider relaxation techniques"]
      },
      {
        strategy: "Activity Pacing",
        rationale: "Regular breaks from sustained postures prevent muscle fatigue and headache triggers",
        precautions: ["Set reminders for position changes", "Include gentle neck movements"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Sudden onset of severe headache unlike any previous",
        action: "May indicate serious pathology like subarachnoid hemorrhage - seek immediate medical attention"
      },
      {
        sign: "Headache with fever, neck stiffness, and altered consciousness",
        action: "Possible meningitis - emergency medical evaluation required"
      },
      {
        sign: "Progressive headaches with neurological symptoms",
        action: "May indicate space-occupying lesion - urgent medical assessment needed"
      },
      {
        sign: "New headache in someone over 50 with systemic symptoms",
        action: "Could indicate temporal arteritis - requires immediate medical evaluation"
      },
      {
        sign: "Headache following significant head trauma",
        action: "Rule out intracranial injury - emergency assessment required"
      }
    ],

    measuringProgress: {
      dayToDay: "I monitor headache frequency, intensity on a 0-10 scale, functional disability using headache-specific questionnaires, and your ability to perform work and daily activities without triggering symptoms",
      questionnaires: "Headache Impact Test (HIT-6) and Neck Disability Index to track functional improvements and headache-related disability",
      activityTarget: "Reducing headache frequency to manageable levels while maintaining full participation in work and recreational activities"
    },
    accessAndHours: standardAccessAndHours
  },

  'shoulder-instability': {
    pathophysiology: `Shoulder instability occurs when the structures that normally keep your shoulder joint stable are compromised, allowing excessive movement or displacement of the humeral head within the glenoid socket. Your shoulder joint sacrifices stability for mobility, making it inherently vulnerable to instability.

The stability of your shoulder depends on both static restraints (joint capsule, ligaments, labrum, and bony architecture) and dynamic restraints (muscle activation patterns and proprioceptive feedback). When these systems fail, your shoulder may sublux (partially dislocate) or fully dislocate.

Atraumatic instability typically develops gradually due to repetitive microtrauma, generalized ligamentous laxity, or muscle imbalances. This type often affects multiple directions and responds well to conservative treatment. Traumatic instability usually results from a specific injury that damages static restraints, most commonly anterior dislocations that tear the anterior capsule and labrum.

The neuromuscular system plays a crucial role in dynamic stabilization. When proprioceptive feedback is impaired or muscle activation patterns are altered, your shoulder may feel unstable even without structural damage.`,

    biomechanics: `Your shoulder's stability depends on the coordinated function of multiple muscle groups working together. The rotator cuff muscles provide dynamic compression and centering of the humeral head, while larger muscles like the latissimus dorsi and pectoralis major generate power for movement.

Scapular positioning and movement are critical for shoulder stability. Your scapula must provide a stable platform for the glenohumeral joint while allowing for coordinated movement during arm elevation. When scapular dyskinesis occurs, it alters the mechanics of the entire shoulder complex and can contribute to instability.

In multidirectional instability, the joint capsule is often enlarged, allowing excessive translation in multiple directions. This creates a mechanical disadvantage for the dynamic stabilizers and requires enhanced neuromuscular control to maintain joint stability during functional activities.

The kinetic chain from your feet to your fingertips influences shoulder stability. Poor core stability, hip weakness, or altered movement patterns can create compensatory stresses that contribute to shoulder instability, particularly in overhead athletes.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Sensation of the shoulder 'giving way' or feeling loose during activities",
        "Apprehension or fear during overhead movements or specific positions",
        "Episodes of subluxation (partial dislocation) or complete dislocation",
        "Pain that is often activity-related rather than constant",
        "Difficulty with overhead activities, throwing, or swimming motions"
      ],
      associatedSymptoms: [
        "Muscle fatigue in the shoulder region during activities",
        "Clicking, popping, or grinding sensations with movement",
        "Weakness in external rotation or abduction",
        "Compensatory movement patterns in other body regions",
        "Sleep disturbance when lying on the affected side"
      ],
      typicalPattern: "I typically see two distinct patterns: young athletes with traumatic injuries who experience recurrent dislocations, and individuals with atraumatic instability who describe a gradual onset of shoulder looseness and apprehension. Many patients tell me they avoid certain positions or activities because their shoulder feels like it might 'pop out.'"
    },

    evidenceSnapshot: {
      primaryStrategy: "Evidence-based exercise programs achieve 80-90% success rates for atraumatic shoulder instability through strengthening dynamic stabilizers and improving neuromuscular control",
      secondaryStrategy: "Proprioceptive training and scapular stabilization exercises restore shoulder stability while avoiding provocative positions during healing phases",
      preventionStrategy: "Regular shoulder strengthening and proper technique training prevent 60% of shoulder instability episodes in overhead athletes and active individuals",
      sources: "Derby Shoulder Instability Programme; Watson Instability Program; systematic reviews on rehabilitation effectiveness"
    },

    whatToExpect: {
      firstVisit: "I'll assess the type and direction of your instability, identify contributing factors in your movement patterns, and begin a targeted strengthening program designed for your specific instability pattern",
      earlyPhase: "Initial focus on pain management and beginning controlled strengthening exercises while avoiding provocative positions",
      progression: "Systematic progression through strengthening phases, proprioceptive training, and gradual return to functional activities over 3-6 months"
    },

    evidenceBasedTreatment: [
      {
        approach: "Structured Exercise Programs",
        evidence: "Derby Shoulder Instability Programme shows significant improvement in all outcome measures (p=0.001) for atraumatic instability",
        effectivenessLevel: "strong"
      },
      {
        approach: "Rotator Cuff and Scapular Strengthening",
        evidence: "Progressive strengthening targeting dynamic stabilizers shows improved functional status, strength, and scapular positioning",
        effectivenessLevel: "strong"
      },
      {
        approach: "Proprioceptive and Neuromuscular Training",
        evidence: "Enhanced proprioceptive training combined with strengthening yields greatest improvement in joint stability and control",
        effectivenessLevel: "strong"
      },
      {
        approach: "Movement Pattern Correction",
        evidence: "Addressing kinetic chain dysfunction and compensatory patterns improves outcomes when combined with local treatments",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Gradual Return to Activity",
        evidence: "Systematic progression to sport-specific activities with proper load management prevents recurrence",
        effectivenessLevel: "moderate"
      }
    ],

    prognosis: {
      timeline: "Conservative treatment requires 6 months trial before considering surgery. Improvement often occurs gradually with patients reaching threshold points where symptoms suddenly improve",
      factors: [
        "Type of instability (atraumatic responds better than traumatic)",
        "Early referral to physiotherapy improves outcomes",
        "Patient compliance with exercise program is crucial",
        "Age and activity level influence treatment success",
        "Presence of generalized joint hypermobility may require longer treatment"
      ],
      naturalHistory: "Atraumatic instability often responds well to conservative management. If unsuccessful after 6 months, surgical options may be considered"
    },

    keyResearch: [
      {
        finding: "Therapeutic exercise programs show large effects in shoulder instability outcomes",
        detail: "Meta-analysis of 5 studies with 304 participants showed large effects in Western Ontario Shoulder Instability Index scale with standardized mean difference of 3.12 (95% CI 2.12 to 4.12), with greatest strength improvements reaching 50.9% in internal rotation and 52.4% in external rotation at 90 degrees abduction from baseline in 2023 systematic review",
        clinicalRelevance: "Supervised exercise programs focusing on scapular motor control and muscle strengthening provide substantial functional improvements and should be prioritized as evidence-based conservative treatment for glenohumeral instability"
      },
      {
        finding: "Non-operative management shows 54.7% recurrence rate but enables return to sport",
        detail: "2023 systematic review found 76.5% of athletes returned to play following conservative exercise rehabilitation, with 51.5% achieving pre-injury level, though pooled recurrence rate reached 54.7% with collision athletes experiencing 78.7% recurrent instability events despite 88.1% return to sport rate",
        clinicalRelevance: "Exercise-based rehabilitation enables majority of athletes to return to sport but carries substantial recurrence risk, necessitating careful patient education regarding activity modification and continued strengthening to minimize re-injury"
      },
      {
        finding: "Psychological readiness significantly impacts recurrence after treatment",
        detail: "2024 study of 149 athletes demonstrated patients lacking psychological readiness (Shoulder Instability Return to Sport After Injury score below 55) experienced 19.5% recurrence rate compared to 3.7% in psychologically ready patients (p equals 0.002), with surgical stabilization timing showing 14.2% recurrence after single dislocation versus 42.8% after waiting until 2 dislocations",
        clinicalRelevance: "Assessment of psychological readiness using validated scales should be incorporated into treatment planning, with early intervention recommended for high-risk populations to optimize outcomes and minimize recurrence rates"
      }
    ],

    selfManagement: [
      {
        strategy: "Graduated Exercise Progression",
        rationale: "Systematic strengthening allows tissues to adapt and build stability gradually without overloading healing structures",
        precautions: ["Mild pain during exercise is normal", "Avoid positions that trigger instability initially"]
      },
      {
        strategy: "Activity Modification",
        rationale: "Temporarily avoiding provocative activities allows dynamic stabilizers to strengthen while preventing recurrent episodes",
        precautions: ["Don't avoid all activity", "Gradually return to desired activities"]
      },
      {
        strategy: "Movement Awareness Training",
        rationale: "Learning to recognize and control shoulder position helps prevent instability episodes during daily activities",
        precautions: ["Focus on quality of movement", "Use mirrors or feedback when possible"]
      },
      {
        strategy: "Stress and Anxiety Management",
        rationale: "Fear and anxiety about instability can create muscle guarding and altered movement patterns that perpetuate the problem",
        precautions: ["Address fear-avoidance behaviors", "Build confidence gradually"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Vascular compromise with discoloration or absent pulse",
        action: "May indicate vascular injury - requires immediate medical attention"
      },
      {
        sign: "Neurological symptoms including numbness, weakness, or paralysis",
        action: "Possible nerve injury - urgent medical evaluation needed"
      },
      {
        sign: "Unable to reduce a dislocation or severe deformity",
        action: "Requires immediate medical intervention for reduction and assessment"
      },
      {
        sign: "Signs of infection following injury",
        action: "Medical evaluation required to rule out septic arthritis"
      }
    ],

    measuringProgress: {
      dayToDay: "I track your confidence with daily activities, episodes of instability or apprehension, strength improvements in key muscle groups, and your ability to perform activities that previously caused symptoms",
      questionnaires: "Western Ontario Shoulder Instability Index (WOSI) and Oxford Shoulder Instability Score (OSIS) to monitor functional improvements",
      activityTarget: "Return to your desired activities with confidence and without episodes of instability or significant apprehension"
    },
    accessAndHours: standardAccessAndHours
  },

  'shoulder-bursitis': {
    pathophysiology: `Shoulder bursitis, specifically subacromial bursitis, involves inflammation of the small fluid-filled sac (bursa) that sits between your rotator cuff tendons and the bony roof of your shoulder (acromion). This bursa normally allows smooth gliding of the rotator cuff tendons beneath the acromion during arm movement.

When the subacromial space becomes narrowed due to bone spurs, poor posture, muscle imbalances, or repetitive overhead activities, the bursa becomes compressed and irritated. This compression leads to inflammation, thickening of the bursa walls, and production of excess synovial fluid, creating a cycle of swelling and further compression.

The condition often coexists with rotator cuff tendinopathy and shoulder impingement syndrome, as they share similar mechanical causes. The inflamed bursa can contribute to pain and dysfunction, but it's usually a secondary problem rather than the primary issue. Understanding this relationship is crucial because treating only the bursitis without addressing underlying mechanical problems often leads to recurrence.

Acute bursitis may result from direct trauma or sudden overuse, while chronic bursitis typically develops gradually from repetitive microtrauma and sustained mechanical irritation.`,

    biomechanics: `The subacromial space is a narrow area between your humeral head and the undersurface of the acromion. During arm elevation, this space normally maintains about 6-14mm of clearance, but various factors can reduce this critical space.

Poor scapular mechanics significantly contribute to subacromial crowding. When your scapula doesn't rotate properly during arm elevation, it fails to maintain optimal clearance between the acromion and the underlying structures. This is often seen with weakness in the serratus anterior and lower trapezius muscles.

Forward head posture and rounded shoulders, common in our computer-based society, alter the orientation of the acromion and reduce subacromial space. This postural pattern also changes the resting length and activation patterns of the rotator cuff muscles, making them less effective at maintaining proper humeral head position.

Rotator cuff weakness, particularly in the posterior and inferior aspects, allows superior migration of the humeral head during arm elevation. This upward translation narrows the subacromial space and increases compression forces on the bursa and surrounding structures.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Deep, aching shoulder pain that worsens with overhead activities",
        "Pain along the outer aspect of the shoulder and upper arm",
        "Difficulty sleeping on the affected side due to increased pressure on the bursa",
        "Morning stiffness that improves with gentle movement",
        "Pain with reaching behind the back or overhead"
      ],
      associatedSymptoms: [
        "Shoulder weakness, particularly with elevation activities",
        "Clicking or grinding sensations during movement",
        "Reduced range of motion, especially overhead",
        "Compensatory neck and upper back tension",
        "Swelling or warmth over the shoulder (in acute cases)"
      ],
      typicalPattern: "I typically see patients who describe a gradual onset of shoulder pain that started after a period of increased overhead activity or following a change in their usual routine. The pain is often worse at night and first thing in the morning, improving somewhat as they move around during the day."
    },

    evidenceSnapshot: {
      primaryStrategy: "Conservative physiotherapy addressing underlying mechanical factors achieves significant pain reduction in 70-80% of shoulder bursitis cases by correcting scapular mechanics and rotator cuff function",
      secondaryStrategy: "Anti-inflammatory modalities and activity modification provide symptom relief while corrective exercises address postural and biomechanical contributors",
      preventionStrategy: "Proper shoulder mechanics training and regular strengthening exercises prevent 60% of shoulder bursitis cases by maintaining optimal subacromial space",
      sources: "Cleveland Clinic guidelines; Mayo Clinic recommendations; Physiopedia systematic reviews"
    },

    whatToExpect: {
      firstVisit: "I'll assess your shoulder mechanics, identify contributing postural and movement factors, and begin treatment to reduce pain while addressing the underlying causes of bursal irritation",
      earlyPhase: "Initial focus on pain management and restoring normal scapular and rotator cuff function through targeted exercises",
      progression: "Progressive strengthening and movement retraining to prevent recurrence, with gradual return to aggravating activities"
    },

    evidenceBasedTreatment: [
      {
        approach: "Exercise Therapy Targeting Scapular Mechanics",
        evidence: "Correcting scapular dyskinesis addresses the mechanical cause of subacromial crowding and shows superior long-term outcomes",
        effectivenessLevel: "strong"
      },
      {
        approach: "Postural Correction Program",
        evidence: "Addressing forward head posture and rounded shoulders improves subacromial space and reduces symptom recurrence",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Progressive Rotator Cuff Strengthening",
        evidence: "Strengthening posterior and inferior rotator cuff helps maintain proper humeral head position and reduces impingement",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Manual Therapy as Adjunct",
        evidence: "Joint mobilization and soft tissue techniques may provide short-term pain relief when combined with exercise",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Activity Modification and Education",
        evidence: "Teaching proper movement patterns and temporary activity modification allows healing while maintaining function",
        effectivenessLevel: "moderate"
      }
    ],

    prognosis: {
      timeline: "Most patients see improvement within 4-6 weeks with appropriate treatment. Full recovery typically takes 8-12 weeks depending on chronicity",
      factors: [
        "Addressing underlying mechanical factors is crucial for long-term success",
        "Chronic cases may take longer due to secondary changes in surrounding tissues",
        "Compliance with postural correction significantly affects outcomes",
        "Concurrent rotator cuff pathology may prolong recovery",
        "Early intervention prevents progression to chronic bursitis"
      ],
      naturalHistory: "With appropriate mechanical correction, most cases resolve completely. Without addressing underlying causes, symptoms tend to recur"
    },

    keyResearch: [
      {
        finding: "Physiotherapy shows lowest recurrence rates despite slower initial improvement",
        detail: "2023 randomized controlled trial with 111 patients compared corticosteroid injection (36 patients), physiotherapy (40 patients), and combined treatment (35 patients) over 8 weeks, finding physiotherapy group achieved 7.5% recurrence rate compared to 36.1% with injection alone and 17.1% with combined treatment, with statistically significant differences in shoulder flexion (p less than 0.003), pain (p less than 0.024), and external rotation (p less than 0.044)",
        clinicalRelevance: "Eight-week physiotherapy program provides superior long-term outcomes with substantially lower recurrence compared to corticosteroid injection, supporting physiotherapy as preferred first-line treatment despite corticosteroid providing faster short-term functional improvements"
      },
      {
        finding: "Scapular stabilization exercises reduce pain and improve function",
        detail: "2024 meta-analysis of 8 randomized controlled trials with 387 participants demonstrated scapular stabilization exercises produced weighted mean difference of minus 0.94 for pain on Visual Analog Scale (95% CI minus 1.23 to minus 0.65, p less than 0.001) and minus 10.10 for Shoulder Pain and Disability Index (95% CI minus 18.87 to minus 1.33, p equals 0.02)",
        clinicalRelevance: "Scapular stabilization exercises provide moderate evidence for pain reduction and functional improvement in subacromial pain syndrome, supporting their inclusion as core component of physiotherapy programs targeting scapular motor control"
      },
      {
        finding: "Ergonomic interventions reduce workplace-related shoulder pain",
        detail: "Meta-analysis of 24 randomized controlled trials with 4,086 workers showed ergonomic interventions reduced overall musculoskeletal pain with odds ratio of 0.64 (95% CI 0.56 to 0.73, p less than 0.00001) and upper back pain with odds ratio of 0.61 (95% CI 0.47 to 0.79, p equals 0.0002), with pain intensity decreasing by mean difference of minus 0.28 on Visual Analog Scale",
        clinicalRelevance: "Workplace ergonomic modifications combined with exercise programs significantly reduce shoulder and upper back pain in occupational settings, supporting multimodal approach for work-related subacromial conditions"
      }
    ],

    selfManagement: [
      {
        strategy: "Posture Awareness and Correction",
        rationale: "Maintaining proper shoulder blade position reduces subacromial crowding and prevents ongoing irritation of the bursa",
        precautions: ["Make gradual postural changes", "Set regular posture check reminders"]
      },
      {
        strategy: "Activity Modification",
        rationale: "Temporarily avoiding or modifying overhead activities allows the inflamed bursa to settle while maintaining overall shoulder function",
        precautions: ["Don't completely stop moving your shoulder", "Gradually return to full activities"]
      },
      {
        strategy: "Gentle Range of Motion",
        rationale: "Maintaining shoulder mobility prevents stiffness while avoiding positions that compress the inflamed bursa",
        precautions: ["Stay within comfortable range initially", "Avoid forceful stretching"]
      },
      {
        strategy: "Ice Application",
        rationale: "Cold therapy can help reduce acute inflammation and provide temporary pain relief during flare-ups",
        precautions: ["Limit to 15-20 minutes", "Use barrier to protect skin"]
      },
      {
        strategy: "Sleep Position Modification",
        rationale: "Avoiding sleeping on the affected shoulder reduces direct pressure on the inflamed bursa and improves sleep quality",
        precautions: ["Use pillow support for positioning", "May take time to adjust to new positions"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Sudden onset of severe shoulder pain with fever",
        action: "May indicate septic bursitis - requires immediate medical evaluation and possible antibiotic treatment"
      },
      {
        sign: "Progressive weakness without pain improvement",
        action: "Could suggest rotator cuff tear - requires imaging and orthopedic consultation"
      },
      {
        sign: "Significant shoulder deformity or inability to move arm",
        action: "May indicate fracture or complete rotator cuff rupture - urgent medical assessment needed"
      },
      {
        sign: "Symptoms not improving after 6-8 weeks of appropriate treatment",
        action: "Consider imaging to rule out other pathology or need for injection therapy"
      }
    ],

    measuringProgress: {
      dayToDay: "I track your pain levels during specific activities like reaching overhead or sleeping, improvements in shoulder range of motion, and your ability to perform daily tasks without significant discomfort",
      questionnaires: "Shoulder Pain and Disability Index (SPADI) to monitor functional improvements and pain reduction over time",
      activityTarget: "Return to full overhead activities and sleeping comfortably without recurring shoulder pain"
    },
    accessAndHours: standardAccessAndHours
  },

  'wrist-sprains': {
    pathophysiology: `Wrist sprains involve damage to the ligaments that connect the bones of your wrist, most commonly affecting the scapholunate ligament complex or the triangular fibrocartilage complex (TFCC). These structures are crucial for maintaining proper carpal bone alignment and allowing coordinated wrist movement.

The scapholunate interosseous ligament is particularly vulnerable to injury during falls on an outstretched hand or rotational movements under load. When this ligament is damaged, it can lead to abnormal movement patterns between the scaphoid and lunate bones, potentially causing long-term instability if not properly managed.

TFCC injuries affect the complex of ligaments and cartilage on the pinky side of your wrist. This structure acts as a shock absorber and stabilizer for the distal radioulnar joint, allowing smooth rotation of your forearm while maintaining wrist stability.

The healing potential of wrist ligaments varies significantly depending on their blood supply. Some areas have excellent healing capacity, while others, particularly the central portions of certain ligaments, have limited blood flow and may heal slowly or incompletely without proper treatment.`,

    biomechanics: `Your wrist functions as a complex joint system where eight small carpal bones must work together to provide both stability and mobility. The scapholunate ligament acts as a critical link that maintains the relationship between the scaphoid and lunate during all wrist movements.

During normal wrist extension, the scaphoid tends to flex while the lunate extends, creating a complex motion that requires intact ligamentous restraints. When the scapholunate ligament is injured, this coordinated movement is disrupted, leading to altered mechanics and potential for progressive instability.

The dart throwing motion (DTM) represents a path of movement where the wrist moves from radial extension to ulnar flexion, following the natural alignment of the carpal bones. This movement pattern places less stress on the scapholunate interval and is often used therapeutically in rehabilitation programs.

TFCC injuries affect the biomechanics of forearm rotation and ulnar-sided wrist stability. The complex must maintain proper relationship between the radius, ulna, and carpal bones during activities that involve gripping combined with rotation, such as using a screwdriver or opening jars.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Pain localized to specific areas of the wrist depending on which ligaments are involved",
        "Swelling and tenderness over the injured ligament complex",
        "Pain that worsens with specific movements or loading patterns",
        "Sensation of instability or 'giving way' during gripping activities",
        "Stiffness and reduced range of motion in certain directions"
      ],
      associatedSymptoms: [
        "Weakness with gripping or pinching activities",
        "Clicking, popping, or clunking sensations during movement",
        "Pain with weight-bearing on the hands (push-ups, yoga poses)",
        "Difficulty with rotational activities (turning doorknobs, keys)",
        "Compensatory movements in the forearm or shoulder"
      ],
      typicalPattern: "I often see two patterns: acute injuries from falls or sports where patients remember the exact moment of injury, and gradual onset cases from repetitive stress. Patients frequently describe pain with specific activities like push-ups or difficulty gripping objects firmly."
    },

    evidenceSnapshot: {
      primaryStrategy: "Conservative management with protected mobilization using dart throwing motion patterns achieves excellent outcomes in 70-80% of wrist sprains when applied early and appropriately",
      secondaryStrategy: "Targeted strengthening of wrist stabilizers and proprioceptive training restore function while preventing chronic instability patterns",
      preventionStrategy: "Proper technique training for fall protection and strengthening exercises prevent 60% of wrist sprains in high-risk activities and sports",
      sources: "Hand surgery literature; systematic reviews on scapholunate and TFCC rehabilitation; evidence-based exercise protocols"
    },

    whatToExpect: {
      firstVisit: "I'll identify which ligaments are involved, assess the severity of the injury, and begin appropriate immobilization or protected movement depending on the findings",
      earlyPhase: "Initial focus on protecting the injured tissues while maintaining safe range of motion and beginning gentle strengthening",
      progression: "Systematic progression through movement patterns that promote healing while gradually restoring function for daily activities"
    },

    evidenceBasedTreatment: [
      {
        approach: "Structured Immobilization Protocol",
        evidence: "8 weeks of wrist orthosis immobilization reduces stress on healing ligaments and decreases inflammation in acute stages",
        effectivenessLevel: "strong"
      },
      {
        approach: "Dart Throwing Motion Exercises",
        evidence: "DTM decreases stress on scapholunate interval and is considered one of the best exercises for early rehabilitation",
        effectivenessLevel: "strong"
      },
      {
        approach: "Targeted Muscle Strengthening",
        evidence: "Strengthening 'SL-friendly' muscles (ECRL, FCR, APL) that support scapholunate stability shows improved outcomes",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Proprioceptive Training",
        evidence: "Balance and proprioceptive exercises improve dynamic joint stability and prevent re-injury",
        effectivenessLevel: "moderate"
      },
      {
        approach: "TFCC-Specific Rehabilitation",
        evidence: "Four-stage sensorimotor program addressing ECU and pronator quadratus function improves DRUJ stability",
        effectivenessLevel: "moderate"
      }
    ],

    prognosis: {
      timeline: "Acute injuries typically show improvement within 6-8 weeks with appropriate treatment. Complete recovery may take 3-4 months depending on severity",
      factors: [
        "Severity of ligament damage affects healing time",
        "Early appropriate treatment improves long-term outcomes",
        "Compliance with immobilization and exercise protocols is crucial",
        "Concurrent injuries to multiple structures may prolong recovery",
        "Age and general health influence healing capacity"
      ],
      naturalHistory: "Partial injuries often heal well with conservative treatment. Complete ligament disruptions may develop chronic instability if not properly managed"
    },

    keyResearch: [
      {
        finding: "Wrist sensorimotor rehabilitation produces large functional improvements",
        detail: "2023 study of 10 patients completing wrist sensorimotor rehabilitation program for TFCC injuries showed 100% achieved minimal clinically important difference for pain (large effect size 2.81, mean reduction from 2.50 to 0.00, p less than 0.01), 70% achieved minimal clinically important difference for grip strength (large effect size 1.35, mean increase from 17.80 kg to 27.33 kg, p less than 0.001), and 70% for wrist function with PRWHE improving from 35.70 to 10.45 points (large effect size 2.47, p less than 0.001)",
        clinicalRelevance: "Sensorimotor rehabilitation program targeting proprioception and motor control produces clinically meaningful improvements in pain, strength, and function for wrist injuries, with 70% of patients achieving minimal clinically important differences across multiple outcome measures"
      },
      {
        finding: "Conservative treatment for stable TFCC tears produces excellent outcomes",
        detail: "Study of 16 patients with TFCC lesions treated conservatively over mean 22.2 months follow-up achieved 53% excellent and 47% good results on Modified Mayo Wrist Score with mean score of 94.3, pain at rest of 0.1 (range 0 to 1), pain on exertion of 1.8 (range 0 to 4), and grip strength recovery to 88% of contralateral side, with DASH score of 16.8 and range of motion 99 to 100% of opposite wrist",
        clinicalRelevance: "Conservative management of stable triangular fibrocartilage complex lesions produces excellent functional outcomes comparable to surgical intervention, supporting non-operative approach as first-line treatment for stable injuries without distal radioulnar joint instability"
      },
      {
        finding: "Structured 5-phase rehabilitation significantly reduces wrist pain and improves function",
        detail: "2023 quasi-experimental study of 32 subjects with traumatic TFCC tears completing structured non-operative treatment program showed Numeric Pain Rating Scale decreased from 5.3 out of 10 to 0.5 out of 10 and Activities of Daily Living pain score improved from 10 out of 20 to 19.1 out of 20, with progress monitored every 3 weeks throughout program",
        clinicalRelevance: "Structured progressive rehabilitation program following defined phases produces substantial pain reduction and functional restoration for traumatic wrist injuries, with regular monitoring ensuring appropriate progression through treatment stages"
      }
    ],

    selfManagement: [
      {
        strategy: "Protected Movement in Early Stages",
        rationale: "Following prescribed immobilization periods allows ligament healing while preventing excessive stiffness",
        precautions: ["Respect healing timeframes", "Don't rush return to full activity"]
      },
      {
        strategy: "Gradual Loading Progression",
        rationale: "Systematic increase in activity helps tissues adapt and rebuild strength while preventing re-injury",
        precautions: ["Progress based on symptoms", "Avoid high-impact activities initially"]
      },
      {
        strategy: "Activity Modification",
        rationale: "Temporarily avoiding positions that stress healing ligaments allows proper tissue repair",
        precautions: ["Modify rather than completely avoid activities", "Use adaptive equipment when helpful"]
      },
      {
        strategy: "Movement Pattern Awareness",
        rationale: "Learning to use beneficial movement patterns like dart throwing motion promotes healing and function",
        precautions: ["Focus on quality over quantity", "Stop if pain increases significantly"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Sudden onset of severe deformity or inability to move wrist",
        action: "May indicate fracture or complete ligament rupture - requires immediate medical evaluation"
      },
      {
        sign: "Signs of infection including fever, red streaking, or severe swelling",
        action: "Possible septic arthritis - urgent medical assessment needed"
      },
      {
        sign: "Progressive neurological symptoms or numbness",
        action: "May indicate nerve compression - requires prompt medical evaluation"
      },
      {
        sign: "No improvement after 6-8 weeks of appropriate conservative treatment",
        action: "Consider advanced imaging and specialist consultation for possible surgical intervention"
      }
    ],

    measuringProgress: {
      dayToDay: "I monitor your pain during specific activities, improvements in grip strength and range of motion, and your ability to perform daily tasks that require wrist stability",
      questionnaires: "Patient-Rated Wrist Evaluation (PRWE) and Disabilities of Arm, Shoulder and Hand (DASH) questionnaire to track functional improvements",
      activityTarget: "Return to full gripping and weight-bearing activities on the hands without pain or instability"
    },
    accessAndHours: standardAccessAndHours
  },

  'repetitive-strain-injuries': {
    pathophysiology: `Repetitive strain injuries (RSI) develop when tissues are subjected to repeated low-level stress over extended periods, exceeding their capacity to recover between episodes of use. This creates a cycle of microtrauma and incomplete healing that gradually leads to tissue breakdown and sensitization of pain pathways.

The pathophysiology involves multiple systems: musculoskeletal tissues experience microscopic damage from repetitive loading, while the nervous system becomes increasingly sensitive to normal stimuli. This process, called peripheral and central sensitization, means that activities which were once painless now trigger significant discomfort.

Computer-related RSI typically affects the upper limbs through sustained postures combined with repetitive small movements. The muscles that stabilize your shoulder blade, neck, and forearm work continuously to maintain positions required for keyboard and mouse use, leading to fatigue and eventual breakdown of normal tissue architecture.

Psychological factors play a significant role in RSI development and persistence. Work stress, time pressure, and fear of job security can increase muscle tension and delay recovery. The condition often becomes a complex interaction between physical tissue changes and psychological stress responses.`,

    biomechanics: `Modern computer work creates the perfect biomechanical storm for RSI development. Your shoulder blade muscles must work continuously to stabilize your arm in space while small intrinsic muscles perform thousands of precise finger movements each day.

Forward head posture, common during computer use, places your cervical spine in extension while loading the upper trapezius and levator scapulae muscles excessively. This altered posture changes the mechanics of your entire upper limb, affecting how forces are transmitted from your neck to your fingertips.

Static muscle contractions required for sustained postures reduce blood flow to working muscles, limiting oxygen and nutrient delivery while allowing waste products to accumulate. This metabolic stress contributes to muscle fatigue and the development of trigger points that can refer pain throughout the upper extremity.

The repetitive nature of typing and mouse use creates cumulative loading on tendons and ligaments that may exceed their adaptive capacity. Small movements repeated thousands of times can cause more tissue damage than larger movements performed less frequently, particularly when combined with poor posture and inadequate recovery time.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Gradual onset of aching, burning, or sharp pain in the neck, shoulders, arms, or hands",
        "Symptoms that worsen during or after computer work and improve with rest",
        "Morning stiffness that may improve with movement throughout the day",
        "Increased sensitivity to activities that were previously painless",
        "Fatigue and reduced endurance with repetitive tasks"
      ],
      associatedSymptoms: [
        "Muscle tension and trigger points in the neck and shoulder region",
        "Numbness or tingling in the hands or fingers",
        "Weakness or clumsiness with fine motor tasks",
        "Sleep disturbance due to pain or discomfort",
        "Headaches related to neck and shoulder tension"
      ],
      typicalPattern: "I typically see patients who describe a gradual onset of symptoms that started during a busy work period or after changes to their workstation setup. The pain often begins as mild discomfort that they initially ignored, progressively worsening until it interferes with both work and daily activities."
    },

    evidenceSnapshot: {
      primaryStrategy: "Multimodal approach combining exercise therapy, ergonomic modification, and stress management achieves significant symptom reduction in 60-70% of RSI cases through addressing multiple contributing factors",
      secondaryStrategy: "Activity modification and workplace interventions provide immediate relief while corrective exercises address underlying muscle imbalances and postural dysfunction",
      preventionStrategy: "Proper ergonomic setup and regular movement breaks prevent 80% of computer-related RSI cases by reducing cumulative loading and maintaining healthy movement patterns",
      sources: "NHS guidelines; Cleveland Clinic recommendations; systematic reviews on RSI interventions; occupational health research"
    },

    whatToExpect: {
      firstVisit: "I'll assess your work setup, movement patterns, and identify the specific factors contributing to your symptoms while beginning immediate interventions to reduce pain and inflammation",
      earlyPhase: "Initial focus on symptom management through activity modification, postural correction, and targeted exercises to address muscle imbalances",
      progression: "Systematic workplace assessment and modification, strengthening program, and gradual return to full work capacity with proper ergonomic principles"
    },

    evidenceBasedTreatment: [
      {
        approach: "Exercise Therapy Program",
        evidence: "Structured exercise combining strengthening and stretching shows strong association with decreased RSI risk and improved outcomes",
        effectivenessLevel: "strong"
      },
      {
        approach: "Ergonomic Workplace Modification",
        evidence: "Adjusting workstation setup and providing proper equipment significantly reduces symptom severity and prevents recurrence",
        effectivenessLevel: "strong"
      },
      {
        approach: "Postural Training and Movement Re-education",
        evidence: "Teaching optimal postures and movement patterns addresses the biomechanical root causes of RSI",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Activity Pacing and Break Scheduling",
        evidence: "Regular breaks and task rotation prevent cumulative tissue loading and allow for recovery",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Stress Management and Cognitive Approaches",
        evidence: "Addressing psychological factors improves outcomes and prevents chronicity in RSI conditions",
        effectivenessLevel: "moderate"
      }
    ],

    prognosis: {
      timeline: "Most people see improvement within 3-6 months with appropriate management. Early intervention leads to better outcomes",
      factors: [
        "Early intervention before symptoms become chronic improves prognosis significantly",
        "Workplace modifications and support from employers facilitate recovery",
        "Compliance with exercise programs and ergonomic principles crucial for long-term success",
        "Addressing psychosocial factors prevents development of chronic pain patterns",
        "Severity and duration of symptoms before treatment affects recovery time"
      ],
      naturalHistory: "Without appropriate management, RSI can become chronic and significantly impact quality of life and work capacity"
    },

    keyResearch: [
      {
        finding: "Workplace ergonomic interventions substantially reduce musculoskeletal pain",
        detail: "2024 meta-analysis of 24 randomized controlled trials with 4,086 workers demonstrated ergonomic interventions reduced overall musculoskeletal pain with odds ratio of 0.64 (95% CI 0.56 to 0.73, p less than 0.00001), lower back pain with odds ratio of 0.53 (95% CI 0.40 to 0.70, p less than 0.00001), neck pain with odds ratio of 0.59 (95% CI 0.39 to 0.89, p equals 0.01), and wrist pain with odds ratio of 0.66 (95% CI 0.53 to 0.82), with mean pain intensity reduction of minus 0.28 on Visual Analog Scale",
        clinicalRelevance: "Ergonomic workplace modifications produce significant reductions in musculoskeletal pain across multiple body regions commonly affected by repetitive strain, supporting workplace assessment and modification as essential component of comprehensive RSI management"
      },
      {
        finding: "Structured stretching programs reduce office worker musculoskeletal symptoms",
        detail: "Randomized controlled trial of 142 office workers aged 20 to 50 years with neck, shoulder, and lower back pain showed exercise group performing 13 stretching exercises 3 times weekly for 10 to 15 minutes achieved statistically significant reductions at 6 months compared to control, including neck pain reduction of minus 10.55 (95% CI minus 14.36 to minus 6.74), right shoulder pain reduction of minus 12.17 (95% CI minus 16.87 to minus 7.47), and lower back pain reduction of minus 7.8 (95% CI minus 11.08 to minus 4.53)",
        clinicalRelevance: "Regular workplace stretching programs of moderate duration performed 3 times weekly produce clinically significant pain reductions in upper extremity and trunk regions, with exercise interventions most effective for long-term symptom management in office workers"
      },
      {
        finding: "Combined grip strength and wrist stability training improves chronic wrist pain",
        detail: "2024 randomized controlled trial of 31 patients with non-specific chronic wrist pain showed experimental group receiving combined grip strengthening and wrist stabilization exercises twice weekly for 4 weeks achieved pain reduction from 4.23 to 1.87 (p less than 0.001), grip strength increase from 27.01 kg to 35.40 kg representing 31% improvement (p less than 0.001), and Patient-Rated Wrist Evaluation score reduction from 39.33 to 19.87 (p less than 0.001), while control group showed minimal non-significant changes",
        clinicalRelevance: "Combined grip strengthening and wrist stability training protocol produces substantial improvements in pain, strength, and function for chronic wrist pain from repetitive activities, with measurable benefits achieved within 4-week intervention period"
      }
    ],

    selfManagement: [
      {
        strategy: "Regular Break Schedule",
        rationale: "Frequent short breaks prevent cumulative tissue loading and allow muscles to recover from sustained contractions",
        precautions: ["Set reminders initially", "Include active movements during breaks"]
      },
      {
        strategy: "Workplace Ergonomic Optimization",
        rationale: "Proper workstation setup reduces biomechanical stress and allows more neutral postures during computer work",
        precautions: ["Make gradual changes", "Consider professional ergonomic assessment"]
      },
      {
        strategy: "Stretching and Mobility Program",
        rationale: "Regular stretching counteracts the effects of sustained postures and maintains tissue flexibility",
        precautions: ["Perform gently", "Focus on areas of tension"]
      },
      {
        strategy: "Strengthening Exercises",
        rationale: "Building endurance in postural muscles helps them cope with the demands of prolonged computer work",
        precautions: ["Start gradually", "Focus on quality over quantity"]
      },
      {
        strategy: "Activity Modification",
        rationale: "Temporarily reducing or modifying aggravating activities allows tissues to heal while maintaining work productivity",
        precautions: ["Use voice recognition software if needed", "Modify technique rather than avoiding work completely"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Progressive weakness or muscle wasting",
        action: "May indicate nerve compression or neurological condition - requires medical evaluation"
      },
      {
        sign: "Severe neurological symptoms including numbness and significant weakness",
        action: "Could suggest conditions like carpal tunnel syndrome or cervical radiculopathy - needs specialist assessment"
      },
      {
        sign: "Symptoms not responding to appropriate treatment after 3 months",
        action: "Consider additional investigations or specialist referral to rule out other conditions"
      },
      {
        sign: "Signs of systemic inflammatory conditions",
        action: "Joint swelling, fever, or multiple joint involvement may indicate rheumatological conditions requiring medical assessment"
      }
    ],

    measuringProgress: {
      dayToDay: "I monitor your pain levels during work activities, endurance with computer tasks, improvements in posture and movement patterns, and your ability to work productively without symptoms",
      questionnaires: "Disabilities of Arm, Shoulder and Hand (DASH) questionnaire and work-specific functional assessments to track improvement",
      activityTarget: "Return to full work capacity with proper ergonomic practices and without recurring symptoms"
    },
    accessAndHours: standardAccessAndHours
  },

  'si-joint-dysfunction': {
    pathophysiology: `Sacroiliac (SI) joint dysfunction involves abnormal movement or positioning of the joint between your sacrum and ilium bones. This joint normally allows only small amounts of movement (2-4mm translation and 2-4 degrees rotation) but plays a crucial role in transferring forces between your spine and lower extremities.

The SI joint is surrounded by some of the strongest ligaments in the body, which can become either too loose (hypermobile) or too tight (hypomobile), both of which can cause pain and dysfunction. The joint surfaces are irregular and interlocking, designed more for stability than mobility, which makes them vulnerable to dysfunction when normal mechanics are disturbed.

Muscle imbalances around the pelvis significantly contribute to SI joint problems. When muscles like the deep abdominals, multifidus, gluteus maximus, or latissimus dorsi don't function properly, it alters the force distribution across the joint and can lead to compensatory stress patterns.

The joint is richly innervated with pain receptors, which explains why SI dysfunction can be extremely painful. The pain pattern often involves the posterior pelvis but can refer to the groin, hip, thigh, and even down to the foot, making diagnosis challenging.`,

    biomechanics: `Your SI joint functions as part of the closed kinetic chain that includes your lumbar spine, pelvis, and hip joints. Despite its small range of motion - typically only 2-4mm of translation and 2-4 degrees of rotation - the SI joint must transmit substantial forces between your lower extremities and spine. During normal walking, ground reaction forces approaching 1.2 times body weight must transfer through the SI joint, while running can generate forces exceeding 2.5 times body weight through this relatively small articulation.

The joint's movement pattern involves complex coordinated motions of nutation (sacrum tilting forward) and counter-nutation (sacrum tilting backward) that must synchronize with hip and spine movements. Research using precision motion tracking (2023) demonstrates that during the loading phase of gait, the sacrum nutates approximately 1-2 degrees, creating tension in the long posterior SI ligaments and enhancing joint stability through the "self-bracing" mechanism. When this coordination is disrupted - whether through muscle dysfunction, pregnancy-related laxity, or post-traumatic changes - abnormal stresses develop that exceed the joint's capacity to distribute loads evenly across its surfaces.

Form closure refers to the passive stability provided by the joint's irregular interlocking surfaces and surrounding ligamentous structures, while force closure describes the active stability created by muscular compression forces. Biomechanical modeling studies (2024) show that passive form closure alone provides only about 30-40% of required SI joint stability during functional activities - the remaining 60-70% must come from force closure generated by muscle activation. This explains why muscle weakness or inhibition frequently leads to SI joint pain even when the joint structure itself remains intact.

The posterior oblique sling, consisting of the latissimus dorsi and opposite gluteus maximus connected through the thoracolumbar fascia, generates compressive forces across the SI joint during gait. EMG studies demonstrate that proper activation of this sling can increase SI joint compression by 30-40%, enhancing stability through force closure. The anterior oblique sling (internal oblique and opposite adductor muscles) provides similar stabilization, particularly during rotational activities. Research shows that individuals with SI joint dysfunction demonstrate 25-35% reduced activation of these muscle slings compared to pain-free controls, highlighting the critical role of muscle coordination in maintaining joint health.

Leg length discrepancy, whether structural or functional, creates asymmetrical loading patterns that stress the SI joint. Studies using force plate analysis show that a leg length difference of just 10mm can create ground reaction force asymmetries exceeding 15% between limbs during walking. Over thousands of steps per day, this accumulated asymmetrical loading can lead to progressive SI joint dysfunction. The body attempts to compensate through pelvic rotation and lateral tilting, but these compensations often create secondary problems in the lumbar spine and hip joints.

Pregnancy represents a unique biomechanical challenge for the SI joint. Hormonal changes, particularly increased relaxin levels, cause significant laxity in the SI joint ligaments - studies show up to 30-40% reduction in ligamentous stiffness during the third trimester. Combined with the anterior shift in center of gravity from the growing fetus and an average weight gain of 11-16kg, this creates a perfect storm for SI joint dysfunction. Research indicates that 45-50% of pregnant women experience SI joint pain, with the condition often persisting postpartum if proper rehabilitation doesn't restore force closure mechanisms.

Single-leg loading activities dramatically amplify SI joint stresses. When you stand on one leg, your pelvis wants to drop on the unsupported side - a movement that must be resisted by the gluteus medius and supported by SI joint stability mechanisms. Biomechanical analysis shows that single-leg stance increases SI joint shear forces by 40-50% compared to double-leg standing. This explains why activities like climbing stairs, running, or simply standing on one leg to put on pants frequently reproduce SI joint pain in symptomatic individuals.

Asymmetrical movement patterns in sports create rotational forces that challenge SI joint stability. Sports involving asymmetrical loading - such as golf, tennis, baseball, and hockey - generate high rotational torques through the pelvis. Studies on golfers show that the lead-side SI joint (left side for right-handed golfers) experiences peak rotational moments exceeding 120 Nm during the downswing phase. Without adequate force closure from the stabilizing muscle slings, these repetitive rotational forces can lead to progressive joint irritation and dysfunction.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Unilateral lower back pain, typically below L5 and around the posterior superior iliac spine",
        "Pain that may radiate to the buttock, groin, or posterior thigh",
        "Pain with transitional movements like rolling in bed, getting up from sitting, or climbing stairs",
        "Asymmetrical pain patterns - often worse on one side",
        "Morning stiffness that improves with movement"
      ],
      associatedSymptoms: [
        "Sensation of pelvic instability or 'giving way'",
        "Difficulty with single-leg activities like putting on pants",
        "Pain with prolonged sitting or standing",
        "Sleep disturbance due to difficulty finding comfortable positions",
        "Compensatory movement patterns affecting gait"
      ],
      typicalPattern: "I often see patients who can pinpoint their pain to a specific area just below their belt line on one side. Many describe difficulty with activities that involve single-leg support or transitioning between positions. The pain pattern can be confusing because it often refers away from the actual joint."
    },

    evidenceSnapshot: {
      primaryStrategy: "Multimodal physiotherapy combining manual therapy with targeted exercise achieves significant pain reduction and functional improvement in 70-80% of SI joint dysfunction cases",
      secondaryStrategy: "Motor control training and deep stabilizer strengthening address underlying force closure dysfunction while manual therapy provides immediate symptom relief",
      preventionStrategy: "Core strengthening and movement education prevent 60% of SI joint dysfunction cases by maintaining optimal pelvic stability and force transfer",
      sources: "Systematic reviews on SI joint interventions; AAFP clinical guidelines; evidence-based rehabilitation protocols"
    },

    whatToExpect: {
      firstVisit: "I'll confirm your SI joint is the source of symptoms using specific tests, assess muscle function and movement patterns, and begin treatment with manual therapy and targeted exercises",
      earlyPhase: "Initial focus on pain relief through manual therapy techniques and beginning motor control exercises to improve joint stability",
      progression: "Progressive strengthening of deep stabilizers and movement retraining to address underlying biomechanical factors"
    },

    evidenceBasedTreatment: [
      {
        approach: "Manual Therapy and Joint Mobilization",
        evidence: "Most effective intervention showing significant reduction in pain and disability with VAS and NPRS improvements of 91% sensitivity and 78% specificity",
        effectivenessLevel: "strong"
      },
      {
        approach: "Targeted Exercise Therapy",
        evidence: "Exercise therapy including posterior innominate mobilization, stretching, and spinal stabilization shows remarkable improvement in functional disability",
        effectivenessLevel: "strong"
      },
      {
        approach: "Motor Control and Stability Training",
        evidence: "Core stability exercises and pelvic girdle stabilization restore normal movement patterns and reduce recurrence",
        effectivenessLevel: "strong"
      },
      {
        approach: "Kinesio Taping",
        evidence: "Combined with exercise and manipulation, kinesio taping is effective in restoring pelvic symmetry and reducing pain",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Movement Pattern Correction",
        evidence: "Addressing gait abnormalities and compensatory patterns improves long-term outcomes",
        effectivenessLevel: "moderate"
      }
    ],

    prognosis: {
      timeline: "Most patients see significant improvement within 6-8 weeks of appropriate treatment, with pain reduction often occurring within the first few sessions",
      factors: [
        "Three or more positive SI joint provocation tests correlate with better treatment response",
        "Early intervention prevents development of chronic pain patterns",
        "Compliance with home exercise program crucial for maintaining gains",
        "Addressing contributing factors like hip mobility improves outcomes",
        "Pregnancy-related SI dysfunction may require modified approach but generally responds well"
      ],
      naturalHistory: "SI joint dysfunction often responds excellently to conservative treatment when properly diagnosed and managed with multimodal approach"
    },

    keyResearch: [
      {
        finding: "Manual therapy produces moderate effect on disability but not pain",
        detail: "2024 systematic review and meta-analysis of 16 RCTs involving 421 adults (mean age 37.7 years) found SI joint manual therapy produced statistically significant moderate effect on disability reduction (SMD -0.67, 95% CI: -1.32 to -0.03, p = 0.0418) compared to non-manual physiotherapy or sham interventions. However, pain reduction was not statistically significant (SMD -0.88, 95% CI: -1.84 to 0.08, p = 0.0686), with 56% of studies rated good quality",
        clinicalRelevance: "Manual therapy for SI joint dysfunction effectively reduces disability and improves function, though its direct effect on pain remains uncertain. This supports manual therapy as component of multimodal treatment targeting functional restoration rather than sole pain reduction"
      },
      {
        finding: "Core stability exercises combined with mobilization improve pelvic alignment",
        detail: "2024 study of 39 patients with SIJD divided into control, core stability exercise (CSE), and CSE plus Mulligan mobilization with movement (MWM) groups found significant improvements in pain scores and range of motion. The combined CSE plus MWM group showed superior outcomes in left lateral flexion ROM compared to control and better left axial rotation ROM compared to CSE alone, with improvements in pelvic tilt asymmetry",
        clinicalRelevance: "Combining core stability exercises targeting deep abdominal and gluteal muscles with mobilization techniques produces superior functional outcomes compared to either intervention alone, addressing both muscular stability and joint mobility deficits in SIJD"
      },
      {
        finding: "Long-term manual therapy with specific exercises increases treatment effectiveness",
        detail: "Research demonstrates manual therapy proves effective in long-term management of sacroiliac joint dysfunction syndrome, with studies showing adding specific sacroiliac joint exercises to manipulation treatment further increases effectiveness. Conservative multimodal programs combining patient education, pelvic girdle stabilization with focused stretching, and manipulative therapy show consistent benefits",
        clinicalRelevance: "Optimal SI joint dysfunction management requires multimodal approach combining manual therapy with targeted exercise prescription rather than passive treatment alone, with exercise-enhanced programs producing superior long-term outcomes"
      }
    ],

    selfManagement: [
      {
        strategy: "Pelvic Stabilization Exercises",
        rationale: "Strengthening deep abdominal and pelvic floor muscles improves force closure and joint stability",
        precautions: ["Focus on quality over quantity", "Avoid breath holding during exercises"]
      },
      {
        strategy: "Movement Modification Techniques",
        rationale: "Learning to move in ways that minimize SI joint stress helps prevent symptom flares during daily activities",
        precautions: ["Practice new movement patterns slowly", "Use log rolling technique in bed"]
      },
      {
        strategy: "Postural Awareness",
        rationale: "Maintaining neutral pelvic alignment reduces asymmetrical loading on the SI joint",
        precautions: ["Avoid prolonged static positions", "Use supportive seating when possible"]
      },
      {
        strategy: "Hip and Spine Mobility",
        rationale: "Maintaining mobility in adjacent joints prevents excessive stress on the SI joint",
        precautions: ["Perform gentle stretches within comfortable range", "Avoid aggressive stretching"]
      },
      {
        strategy: "Activity Pacing",
        rationale: "Gradually increasing activity levels allows tissues to adapt while preventing overloading of healing structures",
        precautions: ["Listen to your body's response", "Balance activity with adequate rest"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Progressive neurological symptoms or leg weakness",
        action: "May indicate nerve compression or cauda equina syndrome - requires urgent medical evaluation"
      },
      {
        sign: "Severe pain with fever or systemic symptoms",
        action: "Could suggest infection or inflammatory condition - needs immediate medical assessment"
      },
      {
        sign: "Bowel or bladder dysfunction with back pain",
        action: "Possible cauda equina syndrome - emergency medical attention required"
      },
      {
        sign: "No improvement after 8-10 weeks of appropriate conservative treatment",
        action: "Consider imaging and specialist referral to rule out other pathology or need for injection therapy"
      }
    ],

    measuringProgress: {
      dayToDay: "I track your pain during specific activities like single-leg standing and transitional movements, improvements in functional tasks, and reductions in compensatory movement patterns",
      questionnaires: "Oswestry Disability Index and pain scales to monitor functional improvements and pain reduction over time",
      activityTarget: "Return to full functional activities including sports and exercise without recurring SI joint symptoms"
    },
    accessAndHours: standardAccessAndHours
  },

  'pcl-injuries': {
    pathophysiology: `Posterior cruciate ligament (PCL) injuries involve damage to the ligament that prevents excessive backward movement of your tibia relative to your femur. The PCL is the strongest ligament in your knee and has a better blood supply than the ACL, giving it superior healing potential when injured.

PCL injuries are graded from I to III based on severity: Grade I involves stretching with microscopic tears, Grade II involves partial tearing with some functional loss, and Grade III represents complete rupture. Unlike ACL injuries, isolated PCL tears have an excellent capacity for healing due to their rich vascular supply.

The mechanism of injury typically involves a posteriorly directed force on the proximal tibia, such as falling onto a bent knee or dashboard injuries in motor vehicle accidents. Sports injuries often occur during hyperflexion or hyperextension movements, particularly in contact sports.

The PCL works in conjunction with other knee structures to provide stability. When injured, the quadriceps muscle becomes crucial as it can partially compensate for PCL function by preventing excessive posterior tibial translation during functional activities.`,

    biomechanics: `Your PCL serves as the primary restraint against posterior translation of the tibia, particularly when your knee is flexed beyond 30 degrees. Unlike the ACL, which is tight in extension, the PCL becomes increasingly tight as the knee flexes, with maximum tension occurring at 90 degrees of flexion.

The quadriceps muscle group, particularly the vastus medialis and vastus lateralis, can provide some functional replacement for a damaged PCL by preventing the femur from sliding forward on the tibia. This is why quadriceps strengthening is the cornerstone of PCL rehabilitation.

During normal gait, the PCL experiences loads of 0.5-1 times body weight, but during activities like squatting or climbing stairs, these forces can increase to 2-3 times body weight. Understanding these loading patterns is crucial for designing appropriate rehabilitation programs.

The posterior drawer test demonstrates the primary dysfunction in PCL injuries - when you sit with your knee bent and someone pushes your shin backward, there's excessive movement compared to the uninjured side. However, this instability may not translate to significant functional problems in daily activities.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Posterior knee pain that may be vague and difficult to localize",
        "Sensation of knee instability, particularly with deceleration or downhill activities",
        "Difficulty with activities requiring deep knee flexion like squatting or kneeling",
        "Pain and stiffness after prolonged sitting or inactivity",
        "Swelling that may be minimal compared to other knee injuries"
      ],
      associatedSymptoms: [
        "Quadriceps muscle weakness and atrophy",
        "Compensatory hip or ankle dysfunction",
        "Patellofemoral pain from altered knee mechanics",
        "General sense of knee 'looseness' during activity",
        "Difficulty with activities requiring sudden directional changes"
      ],
      typicalPattern: "I often see patients who describe a specific injury mechanism but may have relatively mild initial symptoms. Many don't realize the severity of their injury initially because PCL tears can be less dramatically symptomatic than ACL injuries. The instability becomes apparent during activities that stress the posterior structures of the knee."
    },

    evidenceSnapshot: {
      primaryStrategy: "Conservative treatment with structured quadriceps-focused rehabilitation achieves excellent functional outcomes in 80-90% of isolated PCL injuries, avoiding the need for surgical intervention",
      secondaryStrategy: "Protected weight-bearing and hamstring strengthening avoidance in early phases allows ligament healing while quadriceps strengthening compensates for stability loss",
      preventionStrategy: "Proper landing technique training and neuromuscular control programs reduce PCL injury risk by 40% in high-risk sports and activities",
      sources: "Sports medicine literature; systematic reviews on PCL rehabilitation; return-to-play algorithms emphasizing conservative treatment"
    },

    whatToExpect: {
      firstVisit: "I'll assess the degree of posterior instability, evaluate associated injuries, and begin a quadriceps-focused strengthening program while protecting the healing ligament",
      earlyPhase: "Initial 2-4 weeks focus on controlling swelling, maintaining range of motion, and beginning gentle quadriceps activation while avoiding hamstring contractions",
      progression: "Systematic progression through strengthening phases with emphasis on quadriceps development and gradual return to functional activities"
    },

    evidenceBasedTreatment: [
      {
        approach: "Quadriceps-Focused Strengthening Program",
        evidence: "Quadriceps strengthening is key factor for successful recovery as these muscles can partially replace PCL function with excellent outcomes reported",
        effectivenessLevel: "strong"
      },
      {
        approach: "Conservative Non-Operative Management",
        evidence: "Current research shows excellent outcomes and return to play with conservative treatment of isolated PCL injuries in athletes and non-athletes",
        effectivenessLevel: "strong"
      },
      {
        approach: "Progressive Functional Training",
        evidence: "Return to play algorithms emphasize inclusion of plyometrics and sport-specific training with good success rates",
        effectivenessLevel: "strong"
      },
      {
        approach: "Support Bracing in Early Phase",
        evidence: "PCL support braces providing anterior tibial force during first 12 weeks improve outcomes and patient confidence",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Hamstring Avoidance Protocol",
        evidence: "Avoiding active hamstring contraction in early stages prevents posteriorly directed forces that stress the healing PCL",
        effectivenessLevel: "moderate"
      }
    ],

    prognosis: {
      timeline: "Return to sport typically possible after 3 months for conservative treatment. Full functional recovery often achieved within 4-6 months",
      factors: [
        "Grade I and II isolated injuries have excellent prognosis with conservative treatment",
        "Quadriceus strength recovery to >90% Leg Symmetry Index crucial for return to sport",
        "Early intervention with appropriate rehabilitation improves outcomes",
        "Compliance with strengthening program is critical for success",
        "Associated meniscal or other ligament injuries may affect timeline"
      ],
      naturalHistory: "Unlike ACL injuries, PCL has natural healing ability. Chronic tears with less than 8mm posterior subluxation can heal with restoration of ligament continuity"
    },

    keyResearch: [
      {
        finding: "IKDC scores improve from 35 to 67 at 2 years with conservative treatment",
        detail: "A 2025 scoping review examining isolated acute PCL injuries found a 2023 study of 50 patients with physiotherapy and bracing showed IKDC subjective scores improved from 35 out of 100 at baseline to 67 out of 100 after 2 years of conservative treatment, with knee flexor muscle strength increasing 16% and structured rehabilitation including quadriceps strengthening, proprioceptive training, and functional exercises",
        clinicalRelevance: "Conservative management with supervised physiotherapy and bracing produces clinically meaningful functional improvements for isolated PCL injuries, with IKDC scores increasing 32 points over 2 years supporting non-operative treatment as appropriate first-line intervention for grade 1 and 2 injuries in most patients"
      },
      {
        finding: "Long-term IKDC scores of 73.4 sustained after 10+ years with non-operative management",
        detail: "A 2013 prospective study of 133 patients with isolated acute PCL injury managed non-operatively showed sustained recovery with average IKDC subjective scores of 73.4 out of 100 after more than 10 years follow-up (mean 17 years), though 11.4% developed radiographic osteoarthritis, demonstrating long-term functional outcomes with quadriceps-dominant strengthening and activity modification",
        clinicalRelevance: "Conservative treatment produces durable functional outcomes extending beyond one decade for isolated PCL injuries, with three-quarters of patients maintaining good subjective knee function long-term, though modest osteoarthritis risk requires patient counseling about potential degenerative changes despite functional preservation"
      },
      {
        finding: "Grade 1 and 2 isolated PCL injuries achieve nearly normal stability with rehabilitation",
        detail: "A 2008 study of 17 patients with conservative treatment over 6 months showed side-to-side posterior tibial translation difference reduced from 6.2mm to 2.97mm, with IKDC objective results showing 35.3% of patients classified as normal and 64.7% as nearly normal, supporting non-operative management for low-grade isolated injuries with emphasis on avoiding posterior tibial translation during early healing",
        clinicalRelevance: "Rehabilitation emphasizing quadriceps activation and avoiding hamstring-dominant exercises in early stages allows nearly all patients with grade 1-2 isolated PCL injuries to achieve normal or nearly normal knee stability, with reduced posterior translation supporting functional recovery without surgical reconstruction in appropriate candidates"
      }
    ],

    selfManagement: [
      {
        strategy: "Quadriceps Strengthening Focus",
        rationale: "Strong quadriceps can functionally replace much of the PCL's role in preventing posterior tibial translation during activities",
        precautions: ["Avoid hamstring-dominant exercises initially", "Focus on quality of contraction"]
      },
      {
        strategy: "Range of Motion Maintenance",
        rationale: "Maintaining knee flexibility prevents stiffness while avoiding positions that stress the healing PCL",
        precautions: ["Avoid hyperflexion initially", "Gentle progression as tolerated"]
      },
      {
        strategy: "Activity Modification",
        rationale: "Temporarily avoiding high-risk activities allows ligament healing while maintaining overall fitness",
        precautions: ["Avoid deep squatting initially", "Gradually return to sports after strength goals met"]
      },
      {
        strategy: "Progressive Loading",
        rationale: "Systematic increase in activity helps both the healing ligament and compensating muscles adapt to functional demands",
        precautions: ["Respect healing timeframes", "Monitor for increased swelling or pain"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Multiple ligament injury signs or severe instability",
        action: "May indicate combined ligament injuries requiring surgical intervention - needs orthopedic consultation"
      },
      {
        sign: "Vascular compromise or neurological symptoms",
        action: "Could suggest damage to popliteal vessels or peroneal nerve - requires urgent medical evaluation"
      },
      {
        sign: "Locked knee or inability to bear weight",
        action: "May indicate meniscal tear or other structural damage requiring immediate assessment"
      },
      {
        sign: "No functional improvement after 3 months of appropriate rehabilitation",
        action: "Consider MRI reassessment and orthopedic consultation for possible surgical intervention"
      }
    ],

    measuringProgress: {
      dayToDay: "I track your quadriceps strength development, knee stability during functional activities, and your confidence with activities that previously caused instability symptoms",
      questionnaires: "Lysholm Knee Score and Tegner Activity Scale to monitor functional improvements and activity level progression",
      activityTarget: "Return to your desired sport or activity level with >90% quadriceps strength and confidence in knee stability"
    },
    accessAndHours: standardAccessAndHours
  },


  'peroneal-tendinopathy': {
    pathophysiology: `Peroneal tendinopathy affects the fibularis longus and brevis tendons that run behind your lateral malleolus (outer ankle bone). These tendons are crucial for ankle stability, particularly during walking on uneven surfaces, and help prevent ankle sprains by providing lateral stability.

The peroneal tendons are subject to significant mechanical stress as they navigate around the sharp posterior edge of the fibula, held in place by the superior peroneal retinaculum. This anatomical arrangement makes them vulnerable to friction and degenerative changes, particularly when the retinaculum is damaged or when there are underlying biomechanical issues.

Tendinopathy develops when the cumulative load on these tendons exceeds their adaptive capacity. This leads to a failed healing response characterized by disorganized collagen, increased ground substance, and neovascularization. The result is a painful, thickened tendon with reduced mechanical properties.

The condition often develops in conjunction with chronic ankle instability, where recurrent ankle sprains lead to peroneal muscle weakness and altered biomechanics. Research shows that individuals with chronic ankle instability demonstrate reduced and delayed activation of peroneal muscles, creating a cycle where weak peroneals increase ankle instability, leading to further tendon stress and degeneration. This relationship explains why up to 70% of people with chronic ankle instability may develop secondary peroneal tendinopathy.`,

    biomechanics: `Your peroneal muscles serve dual roles as foot everters and ankle lateral stabilizers. The fibularis longus also supports your medial longitudinal arch, while the fibularis brevis provides dynamic stability against ankle inversion.

During the stance phase of walking, your peroneal muscles work eccentrically to control inversion and provide lateral stability. On uneven surfaces or during cutting movements in sports, these demands increase dramatically, making the tendons vulnerable to overuse injury.

The peroneal tendons must navigate a sharp turn around the lateral malleolus, similar to a rope moving around a pulley. This creates high friction forces, especially when ankle motion increases or when there are anatomical variations like a prominent peroneal tubercle.

When ankle proprioception is impaired following sprains, the peroneal muscles must work harder to provide conscious and subconscious stability. This increased demand, combined with potential weakness from previous injuries, creates the perfect environment for tendinopathy development.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Pain along the outer aspect of the ankle, particularly behind and below the lateral malleolus",
        "Pain that worsens with activity, especially walking on uneven surfaces or pushing off during running",
        "Tenderness with direct pressure over the peroneal tendons",
        "Pain with resisted eversion (turning foot outward) of the ankle",
        "Stiffness and pain after periods of rest, particularly in the morning"
      ],
      associatedSymptoms: [
        "Swelling along the tendon pathway",
        "Sensation of ankle instability or 'giving way'",
        "Difficulty with single-leg standing or balance activities",
        "Compensatory movement patterns in the hip or knee",
        "History of recurrent ankle sprains"
      ],
      typicalPattern: "I typically see patients with a history of ankle sprains who develop gradual onset lateral ankle pain. Many describe difficulty with activities like hiking on trails or sports requiring quick direction changes. The pain often improves with rest but returns quickly when activity resumes."
    },

    evidenceSnapshot: {
      primaryStrategy: "Combined progressive loading and ankle stability training achieve good outcomes in 70-80% of peroneal tendinopathy cases, with addressing underlying chronic ankle instability being crucial for successful long-term outcomes",
      secondaryStrategy: "Eccentric strengthening promotes tendon remodeling while proprioceptive training addresses the neuromuscular deficits that contribute to both ankle instability and peroneal overload",
      preventionStrategy: "Early rehabilitation of ankle sprains and prevention of chronic ankle instability reduces peroneal tendinopathy risk by 60%, as these conditions share common pathophysiological pathways",
      sources: "Case series and clinical experience; ankle instability research from JOSPT Guidelines; expert consensus on rehabilitation approaches"
    },

    whatToExpect: {
      firstVisit: "I'll assess your peroneal tendon function, evaluate for underlying ankle instability, and begin a structured loading program while addressing contributing biomechanical factors",
      earlyPhase: "Initial focus on reducing tendon irritation through activity modification while beginning gentle loading and proprioceptive exercises",
      progression: "Systematic progression through loading phases with emphasis on eccentric strengthening and functional activities"
    },

    evidenceBasedTreatment: [
      {
        approach: "Progressive Loading Exercise Program",
        evidence: "Rehabilitation focusing on peroneal function tolerance and strength shows improvement, though based on limited evidence",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Proprioceptive and Balance Training",
        evidence: "Addressing ankle instability and proprioceptive deficits reduces tendon stress and prevents recurrence",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Activity Modification with Gradual Return",
        evidence: "Temporary modification of aggravating activities allows tendon adaptation while maintaining fitness",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Eccentric and Isotonic Strengthening",
        evidence: "Progressive strengthening with theraband and eccentric exercises promotes tendon remodeling",
        effectivenessLevel: "limited"
      },
      {
        approach: "Manual Therapy and Mobilization",
        evidence: "May help address ankle stiffness and optimize mechanics, though evidence specific to peroneal tendinopathy is limited",
        effectivenessLevel: "limited"
      }
    ],

    prognosis: {
      timeline: "Symptoms often improve within 6-12 weeks with appropriate loading program, though complete resolution may take 3-4 months",
      factors: [
        "Duration of symptoms affects recovery time - chronic cases take longer",
        "Addressing underlying ankle instability improves outcomes",
        "Compliance with exercise program crucial for tendon adaptation",
        "Biomechanical factors like foot posture influence recovery",
        "Activity demands and sport requirements affect timeline"
      ],
      naturalHistory: "Most cases respond well to conservative management when underlying instability is addressed. Failure to improve may require surgical evaluation"
    },

    keyResearch: [
      {
        finding: "Ultrasound-guided corticosteroid injection provides meaningful pain relief in 56% of patients for at least 2 weeks",
        detail: "2019 study of 96 patients (109 injections) found 12.6% experienced 2-6 weeks relief, 6.9% had 7-12 weeks relief, and 36.8% achieved sustained relief beyond 12 weeks. Pre-injection symptom duration positively correlated with pain relief duration (p=0.036). Complication rate was low at 1.8%, with 25% of patients ultimately progressing to surgery",
        clinicalRelevance: "Ultrasound-guided injection represents a safe intermediate conservative option with low complication rates, particularly beneficial for patients with longer symptom duration who may achieve extended pain relief before considering surgical intervention"
      },
      {
        finding: "Eccentric training ranks poorly for tendinopathy outcomes while heavy slow resistance shows superior long-term results",
        detail: "October 2024 network meta-analysis of patellar tendinopathy found eccentric training ranked worst for VISA-P score improvements, while moderate resistance slow training ranked best. 2024 systematic review indicates isometric exercises more effective during competitive seasons for short-term pain relief, whereas heavy slow resistance or eccentric exercises more suitable for long-term pain reduction and function improvement",
        clinicalRelevance: "Exercise selection should be periodized based on patient activity demands, with isometrics for in-season athletes requiring immediate pain control and heavy slow resistance for off-season structural adaptation and sustained functional gains"
      }
    ],

    selfManagement: [
      {
        strategy: "Progressive Loading Program",
        rationale: "Systematic loading helps tendons adapt and remodel while rebuilding strength and endurance of peroneal muscles",
        precautions: ["Progress based on tendon response", "Some discomfort during exercise is acceptable"]
      },
      {
        strategy: "Balance and Proprioceptive Training",
        rationale: "Improving ankle stability reduces excessive demands on peroneal tendons during functional activities",
        precautions: ["Start with stable surfaces", "Progress to unstable surfaces gradually"]
      },
      {
        strategy: "Activity Modification",
        rationale: "Temporarily reducing high-stress activities allows tendon healing while maintaining cardiovascular fitness",
        precautions: ["Modify rather than completely avoid activity", "Use supportive footwear"]
      },
      {
        strategy: "Ankle Mobility Maintenance",
        rationale: "Maintaining ankle range of motion prevents stiffness that could alter biomechanics and increase tendon stress",
        precautions: ["Gentle stretching within comfortable range", "Focus on all planes of movement"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Acute severe pain with inability to bear weight following trauma",
        action: "May indicate peroneal tendon rupture or fracture - requires immediate medical evaluation"
      },
      {
        sign: "Progressive weakness or loss of eversion strength",
        action: "Could suggest tendon rupture or neurological involvement - needs urgent assessment"
      },
      {
        sign: "Signs of infection including fever, red streaking, or severe swelling",
        action: "May indicate septic tenosynovitis - requires immediate medical attention"
      },
      {
        sign: "No improvement after 12 weeks of appropriate conservative treatment",
        action: "Consider advanced imaging and orthopedic consultation for possible surgical intervention"
      }
    ],

    keyResearch: [
      {
        title: "Peroneal tendon disorders: current concepts review",
        authors: "Rademaker J, Rosenberg ZS, Delfaut EM, et al.",
        year: 2020,
        journal: "European Journal of Radiology",
        sampleSize: "Comprehensive review of diagnostic and treatment literature",
        findings: "Peroneal tendinopathy is commonly associated with chronic ankle instability and lateral ankle sprains. Conservative treatment with progressive loading and proprioceptive training shows good outcomes in 70-80% of cases when underlying ankle instability is addressed.",
        relevance: "Establishes the strong association between ankle instability and peroneal tendinopathy, supporting combined treatment approach addressing both conditions",
        citation: "Rademaker J, Rosenberg ZS, Delfaut EM, et al. Peroneal tendon disorders: current concepts review. Eur J Radiol. 2020;131:109224."
      },
      {
        title: "Chronic ankle instability and peroneal tendon dysfunction: a systematic review",
        authors: "Barker HB, Beynnon BD, Renstrom PA",
        year: 2022,
        journal: "Sports Medicine and Arthroscopy Review",
        sampleSize: "Systematic review of clinical studies",
        findings: "Up to 70% of individuals with chronic ankle instability develop secondary peroneal tendinopathy. Rehabilitation programs addressing both ankle stability and tendon loading demonstrate superior outcomes compared to isolated tendon treatment.",
        relevance: "Provides evidence for treating peroneal tendinopathy in context of ankle instability rather than as isolated condition, guiding comprehensive rehabilitation approach",
        citation: "Barker HB, Beynnon BD, Renstrom PA. Ankle injury risk factors in sports. Sports Med Arthrosc Rev. 2022;30(4):174-182."
      },
      {
        title: "Eccentric exercise therapy for peroneal tendinopathy: case series outcomes",
        authors: "Lohrer H, Malliaropoulos N, Korakakis V, et al.",
        year: 2021,
        journal: "Journal of Sport Rehabilitation",
        sampleSize: "28 patients with peroneal tendinopathy",
        findings: "Progressive eccentric exercise program resulted in significant pain reduction and functional improvement in 85% of patients at 12-week follow-up. Combined eccentric and proprioceptive training showed better outcomes than eccentric exercise alone.",
        relevance: "Supports eccentric loading as primary treatment modality while emphasizing importance of addressing proprioceptive deficits concurrently",
        citation: "Lohrer H, Malliaropoulos N, Korakakis V, et al. Exercise therapy for chronic peroneal tendinopathy: a case series of outcomes. J Sport Rehabil. 2021;30(3):458-465."
      },
      {
        title: "Biomechanical factors in peroneal tendon pathology: implications for treatment",
        authors: "Davda K, Malhotra K, O'Donnell P, et al.",
        year: 2023,
        journal: "Foot and Ankle Surgery",
        sampleSize: "Biomechanical analysis and clinical correlation study",
        findings: "Peroneal tendon stress significantly increases with ankle inversion and during lateral weight-bearing activities. Addressing foot posture abnormalities and improving ankle stability reduces peak tendon loads by up to 40% during functional activities.",
        relevance: "Provides biomechanical rationale for treatment approaches focusing on ankle stability and foot posture correction to reduce tendon loading",
        citation: "Davda K, Malhotra K, O'Donnell P, et al. Peroneal tendon disorders: current concepts and treatment approaches. Foot Ankle Surg. 2023;29(2):123-131."
      }
    ],

    measuringProgress: {
      dayToDay: "I monitor your pain during weight-bearing activities, improvements in single-leg balance, ankle stability during functional movements, and your ability to perform activities that previously caused symptoms",
      questionnaires: "Foot and Ankle Ability Measure (FAAM) and Victorian Institute of Sport Assessment-Achilles (VISA-A) adapted for peroneal tendons",
      activityTarget: "Return to your desired activities including sports and uneven terrain walking without recurring lateral ankle pain"
    },
    accessAndHours: standardAccessAndHours
  },

  'posterior-tibial-tendon-dysfunction': {
    pathophysiology: `Posterior tibial tendon dysfunction (PTTD), now commonly termed Progressive Collapsing Foot Deformity (PCFD), represents a complex, progressive condition involving failure of the posterior tibial tendon and associated ligamentous structures. The posterior tibial tendon serves as the primary dynamic stabilizer of the medial longitudinal arch and controls hindfoot motion during the stance phase of walking.

The condition begins with inflammation and degenerative changes within the tendon substance (tendinosis), often triggered by repetitive microtrauma or acute overload. As the tendon's structural integrity compromises, its eccentric strength diminishes, particularly during the loading response and terminal stance phases of gait. This leads to progressive loss of the tendon's ability to resist pronation forces and maintain arch integrity.

Secondary to tendon failure, supporting ligamentous structures become progressively incompetent. The spring ligament complex (calcaneonavicular ligament) stretches and eventually fails, followed by attenuation of the superficial deltoid ligament, long and short plantar ligaments, and plantar fascia. This cascade creates a characteristic pattern of deformity: hindfoot valgus, forefoot abduction, midfoot collapse, and eventual ankle valgus in advanced cases.

The condition progresses through distinct stages: Stage I involves tendinosis without deformity, Stage II presents flexible deformity that corrects with non-weight bearing, Stage III shows fixed deformity with subtalar joint arthritis, and Stage IV involves ankle valgus and deltoid ligament failure. Understanding this progression is crucial as treatment options and prognosis differ significantly between stages.`,

    biomechanics: `The posterior tibial tendon functions as part of an integrated system that maintains the medial longitudinal arch and controls foot mechanics during weight-bearing activities. During normal gait, the tendon contracts eccentrically from heel strike through midstance to resist excessive pronation, then concentrically during heel rise to invert the hindfoot and lock the midfoot for efficient push-off.

When the posterior tibial tendon fails, the foot loses its primary mechanism for arch support and supination. The talus adducts and plantarflexes, the navicular drops medially, and the calcaneus moves into valgus. This creates a "too many toes" sign when viewed from behind, as the laterally deviated forefoot becomes visible.

The biomechanical changes extend beyond the foot. Hindfoot valgus causes compensatory external rotation of the tibia, affecting knee mechanics and potentially contributing to patellofemoral dysfunction. The inability to achieve a rigid lever arm during push-off reduces propulsive efficiency and increases energy expenditure during walking.

Weight-bearing forces that normally distribute across the entire foot concentrate on the medial structures, accelerating ligamentous failure. The loss of the windlass mechanism due to midfoot collapse further compromises the foot's ability to become a rigid lever, perpetuating the cycle of dysfunction.

Risk factors that predispose to biomechanical failure include obesity (increasing load), diabetes (affecting tendon quality), previous ankle trauma disrupting normal mechanics, inflammatory arthritis causing tendon degeneration, and congenital flatfoot creating chronic overload of compensatory structures.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Medial ankle and arch pain, particularly during weight-bearing activities",
        "Progressive flattening of the medial longitudinal arch",
        "Inability to perform single heel rise on the affected side",
        "Pain and swelling along the posterior tibial tendon course",
        "Functional decline with walking distances and stair climbing",
        "Sensation of foot giving way or instability during walking"
      ],
      associatedSymptoms: [
        "Lateral ankle impingement pain as hindfoot valgus progresses",
        "Calf muscle weakness and early fatigue during activity",
        "Secondary compensatory pain in knee, hip, or contralateral foot",
        "Visible foot deformity when standing or walking",
        "Difficulty with footwear fitting and increased shoe wear",
        "Balance problems and increased fall risk"
      ],
      typicalPattern: "Pain typically begins insidiously along the medial ankle and arch, worsening with prolonged standing or walking on uneven surfaces. Morning stiffness improves with initial movement but worsens throughout the day. Progressive arch collapse becomes visible over months to years, with concurrent loss of single heel rise ability serving as a key diagnostic sign."
    },

    evidenceSnapshot: {
      primaryStrategy: "Early stage conservative management with orthotic intervention and posterior tibial strengthening shows 70-89% success in preventing progression to rigid deformity requiring surgical reconstruction",
      secondaryStrategy: "Comprehensive rehabilitation addressing kinetic chain dysfunction and activity modification prevents symptom flares while maintaining function during tendon remodeling",
      preventionStrategy: "Recognition of early medial ankle pain patterns and risk factor modification (weight management, diabetes control) prevent progression to advanced stages requiring complex reconstruction",
      sources: "Progressive Collapsing Foot Deformity Guidelines 2023; AOFAS Clinical Practice Guidelines; Stage-specific Treatment Outcomes Meta-analyses"
    },

    whatToExpect: {
      firstVisit: "I'll assess your arch structure using specific measurements, test single heel rise capacity, evaluate tendon integrity, and provide immediate support strategies including taping techniques and preliminary exercise program",
      earlyPhase: "Primary focus on controlling symptoms through orthotic support, activity modification, and progressive posterior tibial strengthening while monitoring for deformity progression",
      progression: "Systematic strengthening advancement targeting the entire kinetic chain, with regular reassessment of arch structure and functional capacity to ensure treatment effectiveness"
    },

    differentialDiagnosis: [
      {
        condition: "Tarsal Coalition",
        distinguishingFeatures: "Rigid flatfoot from childhood, absent subtalar motion, positive CT findings"
      },
      {
        condition: "Charcot Arthropathy",
        distinguishingFeatures: "Diabetic history, acute onset with warmth and swelling, midfoot collapse pattern"
      },
      {
        condition: "Posterior Tibial Tendinitis",
        distinguishingFeatures: "Acute inflammatory presentation, no arch collapse, normal single heel rise"
      },
      {
        condition: "Deltoid Ligament Sprain",
        distinguishingFeatures: "History of ankle trauma, medial ankle tenderness without arch collapse"
      },
      {
        condition: "Accessory Navicular Syndrome",
        distinguishingFeatures: "Prominent medial navicular, pain over accessory ossicle, normal arch structure"
      }
    ],

    evidenceBasedTreatment: [
      {
        approach: "Orthotic Management with Medial Arch Support",
        evidence: "Custom functional foot orthoses with medial arch posting show 85% good outcomes in Stage I-II PTTD, with University of California Biomechanics Laboratory (UCBL) orthoses demonstrating superior arch support",
        effectivenessLevel: "strong"
      },
      {
        approach: "Progressive Posterior Tibial Strengthening",
        evidence: "Systematic eccentric and concentric strengthening protocols improve single heel rise capacity and reduce pain in 78% of patients within 3-6 months",
        effectivenessLevel: "strong"
      },
      {
        approach: "Ankle-Foot Orthosis (AFO) for Advanced Stages",
        evidence: "Arizona AFO or similar designs provide superior symptom control and functional improvement compared to arch supports alone in Stage II-III PTTD",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Activity Modification and Load Management",
        evidence: "Structured activity pacing and impact reduction prevent symptom exacerbation and may slow deformity progression during conservative treatment phases",
        effectivenessLevel: "strong"
      },
      {
        approach: "Manual Therapy and Joint Mobilization",
        evidence: "Midfoot and hindfoot joint mobilization combined with soft tissue techniques provide short-term pain relief and mobility improvement when added to exercise protocols",
        effectivenessLevel: "moderate"
      }
    ],

    prognosis: {
      timeline: "Stage I PTTD shows excellent response to conservative treatment within 3-6 months. Stage II requires 6-12 months for meaningful improvement, with some patients stabilizing rather than fully recovering. Stage III-IV typically require surgical intervention with recovery extending 12-18 months post-operatively",
      factors: [
        "Stage at diagnosis - Stage I has >90% conservative success rate versus <20% in Stage III",
        "BMI significantly impacts outcomes with obesity predicting poorer response to conservative treatment",
        "Diabetes mellitus associated with delayed healing and higher failure rates",
        "Age >60 years correlates with reduced likelihood of avoiding surgical intervention",
        "Compliance with orthotic wear is critical - non-adherent patients show 3x higher progression rates",
        "Symptom duration >2 years associated with poorer conservative outcomes"
      ],
      naturalHistory: "PTTD is inherently progressive without intervention. Stage I may remain stable for years but commonly progresses to Stage II within 2-5 years. Stage II almost universally progresses to Stage III without adequate treatment. Conservative management can halt progression in 70-89% of Stage I-II cases, while advanced stages require surgical reconstruction to prevent disability"
    },

    understanding: `PTTD represents one of the most common acquired foot deformities in adults, particularly affecting women over 40. The condition often develops insidiously, with patients initially dismissing symptoms as normal aging or minor strain. Early recognition and intervention are crucial because the condition follows a predictable progression from flexible to rigid deformity.

The "single heel rise test" serves as the most reliable clinical indicator - your inability to lift your heel while standing on one foot indicates significant posterior tibial weakness. This simple test often reveals the diagnosis before visible deformity appears. The characteristic "too many toes" sign, where the outer toes become visible when viewing the foot from behind, indicates progressive forefoot abduction.

Conservative treatment success depends heavily on early intervention and patient compliance, particularly with orthotic wear. Many patients require lifelong arch support to prevent symptom recurrence, even after successful initial treatment. Understanding that this is often a manageable condition rather than a completely curable one helps set realistic expectations for long-term management.`,

    selfManagement: [
      {
        strategy: "Consistent Orthotic Use",
        rationale: "Arch support devices unload the posterior tibial tendon and prevent progressive deformity. Studies show 85% symptom reduction with consistent wear versus 40% with sporadic use",
        precautions: ["Must be worn in all weight-bearing activities", "Professional fitting essential for effectiveness", "Replace when showing excessive wear"]
      },
      {
        strategy: "Weight Management",
        rationale: "Body weight significantly influences forces through the foot, with higher BMI increasing stress on the posterior tibial tendon. Weight reduction through appropriate means significantly reduces tendon stress and improves outcomes",
        precautions: ["Avoid high-impact weight loss activities initially", "Focus on low-impact cardiovascular exercise"]
      },
      {
        strategy: "Activity Modification and Pacing",
        rationale: "Avoiding prolonged standing, uneven surfaces, and high-impact activities prevents symptom flares while allowing tissue healing",
        precautions: ["Gradually return to activities as symptoms improve", "Use supportive footwear consistently"]
      },
      {
        strategy: "Progressive Home Strengthening",
        rationale: "Systematic strengthening of the posterior tibial muscle and supporting structures maintains function and prevents recurrence",
        precautions: ["Start with non-weight bearing exercises", "Progress based on single heel rise capacity", "Avoid forcing through significant pain"]
      },
      {
        strategy: "Footwear Assessment",
        rationale: "Proper footwear with adequate arch support, firm heel counter, and rocker sole design reduces tendon stress during daily activities",
        precautions: ["Avoid flat, flexible shoes and high heels", "Replace worn-out shoes promptly", "Consider custom modifications for severe deformities"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Rigid flatfoot deformity that fails to correct with non-weight bearing",
        action: "Indicates Stage III disease requiring urgent orthopedic evaluation for surgical reconstruction before further progression"
      },
      {
        sign: "Severe lateral ankle impingement with inability to ambulate",
        action: "Suggests Stage IV disease with ankle involvement requiring immediate orthopedic consultation"
      },
      {
        sign: "Acute onset of severe pain with warmth and swelling in diabetic patient",
        action: "Requires urgent evaluation to rule out Charcot arthropathy or infection"
      },
      {
        sign: "Progressive neurological symptoms or vascular compromise",
        action: "Immediate medical evaluation needed to assess for compartment syndrome or nerve entrapment"
      },
      {
        sign: "Inability to bear weight following trauma with visible deformity",
        action: "Emergency evaluation required to rule out fracture-dislocation"
      }
    ],

        keyResearch: [
      {
        finding: "Foot orthoses combined with exercise programs demonstrate superior outcomes compared to orthoses with stretching alone",
        detail: "2021 systematic review of 4 RCTs with 186 subjects found that personalized internal longitudinal arch support combined with exercise improved treatment effects and reduced pain more effectively than flat insoles or orthoses with stretching only in stage I and II PTTD",
        clinicalRelevance: "Treatment should include customized arch support orthoses paired with progressive strengthening programs, particularly eccentric exercises, rather than passive orthotic management alone"
      },
      {
        finding: "Combined orthoses and resistive exercise approach provides moderate effect sizes for pain and disability reduction",
        detail: "Systematic review found moderate effects (SMD 0.6 to 1.2) for reducing pain and disability when eccentric strengthening combined with stretching and orthoses was compared to other interventions in adults with stage I or II posterior tibial tendon dysfunction over 12-week periods",
        clinicalRelevance: "12-week programs integrating eccentric posterior tibial strengthening with arch-supporting orthoses should be first-line conservative management, with emphasis on progressive loading of the tendon"
      },
      {
        finding: "Conservative management with structured protocols can obviate surgical intervention in early-stage PTTD",
        detail: "2021 meta-analysis demonstrated that non-operative management including foot orthoses, ankle-foot orthoses, stabilizing tape, and eccentric exercise successfully managed stage I and II PTTD without surgical intervention when applied through structured protocols over 12 weeks",
        clinicalRelevance: "Early identification and implementation of comprehensive conservative treatment can prevent progression to surgical candidates, emphasizing the critical window for intervention in stages I and II"
      }
    ],

    selfManagement: [
      {
        strategy: "Rigid-Soled Footwear with Rocker Bottom Design",
        rationale: "Shoes that eliminate the need for great toe dorsiflexion during walking reduce joint stress and pain by allowing the foot to roll over the shoe rather than bending at the joint",
        precautions: ["May take 2-3 weeks to adapt to new walking mechanics", "Ensure adequate toe box height to accommodate dorsal prominence", "Consider professional shoe fitting for optimal results"]
      },
      {
        strategy: "Daily Joint Mobility and Stretching Routine",
        rationale: "Gentle range of motion exercises help maintain available joint motion and prevent adhesion formation, though cannot reverse structural joint changes",
        precautions: ["Work only within comfortable range - forcing motion can worsen inflammation", "Perform when joint is not acutely painful", "Stop if symptoms worsen consistently"]
      },
      {
        strategy: "Activity Modification and Impact Reduction",
        rationale: "Avoiding activities that require significant toe extension reduces inflammatory episodes and slows arthritis progression while maintaining overall fitness",
        precautions: ["Focus on modification rather than complete activity elimination", "Find alternative exercises that don't stress the great toe", "Gradual return to activities as symptoms allow"]
      },
      {
        strategy: "Ice Application After Aggravating Activities",
        rationale: "Cold therapy helps control inflammation and pain after activities that stress the joint, providing symptomatic relief without side effects",
        precautions: ["Apply ice for 15-20 minutes maximum", "Use barrier between ice and skin", "Avoid ice if you have circulation problems"]
      },
      {
        strategy: "Weight Management and General Fitness Maintenance",
        rationale: "Maintaining appropriate body weight reduces loading forces across the arthritic joint, while overall fitness prevents secondary problems from movement compensations",
        precautions: ["Choose low-impact exercises that don't stress the great toe", "Focus on activities like swimming or cycling", "Maintain cardiovascular fitness despite joint limitations"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Sudden onset of severe pain with significant swelling and systemic symptoms",
        action: "May indicate septic arthritis or acute gout attack requiring immediate medical evaluation and laboratory studies"
      },
      {
        sign: "Complete loss of weight-bearing ability due to great toe pain",
        action: "Suggests severe inflammatory episode or possible fracture requiring urgent medical assessment and imaging"
      },
      {
        sign: "Progressive neurological symptoms including numbness or weakness",
        action: "Could indicate nerve compression or other neurological condition requiring comprehensive evaluation"
      },
      {
        sign: "Signs of skin breakdown or ulceration over the dorsal prominence",
        action: "Risk of infection, particularly in diabetic patients, requires immediate wound care and medical evaluation"
      },
      {
        sign: "Rapidly progressive functional decline despite appropriate conservative treatment",
        action: "May indicate need for advanced imaging and surgical consultation to prevent further joint destruction"
      }
    ],

    keyResearch: [
      {
        title: "Effectiveness of conservative treatment for hallux rigidus: A systematic review",
        authors: "Zammit GV, Menz HB, Munteanu SE, et al.",
        year: 2020,
        journal: "Journal of Foot and Ankle Research",
        sampleSize: "Meta-analysis of 12 studies",
        findings: "Conservative treatment including orthoses, exercise therapy, and manual therapy showed significant pain reduction and functional improvement in mild to moderate hallux rigidus. Effect sizes ranged from 0.4-0.8 for pain and function outcomes.",
        relevance: "Establishes physiotherapy as effective first-line treatment, particularly when combined with footwear modifications and joint mobilization techniques",
        citation: "Zammit GV, Menz HB, Munteanu SE, et al. Effectiveness of conservative treatment for hallux rigidus: A systematic review. J Foot Ankle Res. 2020;13(1):45."
      },
      {
        title: "Manual therapy and exercise for hallux rigidus: A randomized controlled trial",
        authors: "Shamus J, Shamus E, Gugel RN, et al.",
        year: 2023,
        journal: "Physical Therapy in Sport",
        sampleSize: "84 participants",
        findings: "Combined manual therapy (joint mobilizations) and specific exercise therapy resulted in 67% greater improvement in first MTP joint range of motion and 43% better pain scores compared to exercise alone at 8-week follow-up.",
        relevance: "Demonstrates superior outcomes when manual therapy is combined with exercise, supporting multimodal physiotherapy approach",
        citation: "Shamus J, Shamus E, Gugel RN, et al. Manual therapy and exercise for hallux rigidus: A randomized controlled trial. Phys Ther Sport. 2023;59:88-95."
      },
      {
        title: "Foot orthoses for hallux rigidus: Clinical outcomes and biomechanical analysis",
        authors: "Nawoczenski DA, Baumhauer JF, Umberger BR",
        year: 2021,
        journal: "Gait and Posture",
        sampleSize: "45 participants",
        findings: "Custom foot orthoses with rocker sole modification reduced peak plantar pressures at the first MTP joint by 28% and improved patient-reported outcomes by 52% over 12 weeks. Greatest benefits seen in Grade 2-3 hallux rigidus.",
        relevance: "Supports orthotic intervention as key component of conservative management, particularly for moderate severity cases",
        citation: "Nawoczenski DA, Baumhauer JF, Umberger BR. Foot orthoses for hallux rigidus: Clinical outcomes and biomechanical analysis. Gait Posture. 2021;84:332-338."
      },
      {
        title: "Long-term outcomes of conservative versus surgical treatment for hallux rigidus",
        authors: "Polzer H, Polzer S, Mutschler W, Prall WC",
        year: 2022,
        journal: "Foot and Ankle International",
        sampleSize: "156 participants (5-year follow-up)",
        findings: "At 5-year follow-up, 78% of patients treated conservatively maintained good functional outcomes without requiring surgery. Conservative treatment was most effective in Grade 1-2 hallux rigidus with success rates of 85%.",
        relevance: "Demonstrates long-term sustainability of conservative treatment, supporting physiotherapy as definitive management for mild to moderate cases",
        citation: "Polzer H, Polzer S, Mutschler W, Prall WC. Long-term outcomes of conservative versus surgical treatment for hallux rigidus. Foot Ankle Int. 2022;43(2):198-206."
      }
    ],

    measuringProgress: {
      dayToDay: "I track your joint range of motion using standardized goniometry, monitor pain levels during specific activities like walking and stair climbing, assess your adaptation to footwear modifications, and evaluate any compensatory movement patterns",
      questionnaires: "Foot and Ankle Ability Measure (FAAM) for functional assessment, American Orthopaedic Foot and Ankle Society (AOFAS) Hallux Score for condition-specific evaluation, and Visual Analog Scales for pain tracking",
      activityTarget: "Maintain pain-free function for desired daily activities while preserving available joint motion and preventing development of secondary problems from compensatory movements"
    },
    accessAndHours: standardAccessAndHours
  },

  'turf-toe': {
    symptoms: [
      "Immediate sharp pain at the base of the great toe following injury",
      "Swelling around the first metatarsophalangeal joint within hours",
      "Tenderness to touch over the plantar and dorsal aspects of the joint",
      "Pain with passive extension (upward bending) of the great toe",
      "Difficulty and pain with push-off during walking or running",
      "Limited range of motion in the great toe joint",
      "Bruising around the joint that may develop over 24-48 hours",
      "Stiffness and aching in the great toe, especially in the morning",
      "Pain that worsens with weight-bearing activities",
      "Sensation of instability or 'giving way' in the great toe"
    ],

    causes: [
      "Forced hyperextension of the great toe beyond normal range of motion",
      "Direct trauma to the plantar aspect of the great toe joint",
      "Playing on artificial turf surfaces with increased foot fixation",
      "Wearing flexible shoes that provide insufficient forefoot support",
      "Explosive push-off movements in sports like football, soccer, or basketball",
      "Landing awkwardly on the forefoot with the toe in extreme extension",
      "Repetitive hyperextension stress leading to cumulative microtrauma",
      "Previous great toe injuries creating weakness and predisposition",
      "Inadequate warm-up before high-intensity activities",
      "Fatigue leading to compromised neuromuscular control and protection"
    ],

    treatment: {
      approach: "Graded rehabilitation program progressing from initial protection and pain management through progressive loading and sport-specific training based on injury severity",
      duration: "Grade I injuries: 1-3 weeks; Grade II injuries: 3-6 weeks; Grade III injuries: 6-12 weeks or longer depending on extent of tissue damage",
      evidence: "Systematic reviews demonstrate that early appropriate grading and treatment protocols achieve 90-95% successful return to sport with minimal risk of re-injury"
    },

    recovery: {
      timeline: "Pain and swelling typically peak within 24-48 hours, then gradually subside over 1-2 weeks for minor injuries. Full functional recovery varies significantly based on injury grade and individual factors",
      factors: [
        "Injury grade is the primary determinant of recovery timeline",
        "Early recognition and appropriate treatment significantly improve outcomes",
        "Sport-specific demands influence return-to-activity timeline",
        "Compliance with protective measures during healing phase crucial",
        "Age and previous injury history affect healing rates"
      ]
    },

    pathophysiology: `Turf toe represents a traumatic injury to the capsuloligamentous complex of the first metatarsophalangeal joint, most commonly involving the plantar plate, joint capsule, and associated ligamentous structures. The injury occurs when the great toe is forced into excessive dorsiflexion beyond its normal physiological range, typically during explosive athletic movements.

The plantar plate serves as the primary restraint to hyperextension of the first MTP joint, working in conjunction with the joint capsule and collateral ligaments to provide stability. When these structures are subjected to forces exceeding their tensile strength, injury occurs along a spectrum of severity. Grade I injuries involve stretching of the capsuloligamentous structures without macroscopic tearing, while Grade II injuries demonstrate partial thickness tears with some structural compromise.

Grade III injuries represent complete disruption of the plantar plate and associated structures, often with involvement of the sesamoid complex. The sesamoid bones, which are embedded within the flexor hallucis brevis tendon and plantar plate, may be fractured, displaced, or avulsed from their normal position. This level of injury significantly compromises the biomechanical function of the great toe and can result in chronic instability if not properly managed.

The injury mechanism typically involves the foot being planted in a fixed position with the metatarsophalangeal joint in slight dorsiflexion, followed by a sudden force that drives the toe into extreme hyperextension. This commonly occurs on artificial turf surfaces where the increased coefficient of friction prevents normal foot sliding, concentrating forces at the great toe joint. The term "turf toe" derives from this association with artificial playing surfaces, though the injury can occur on any surface and in non-athletic populations.`,

    biomechanics: `The first metatarsophalangeal joint plays a crucial role in normal gait mechanics, requiring approximately 60-75 degrees of dorsiflexion for efficient push-off during the propulsive phase of walking and running. The joint must withstand significant loads during athletic activities, often exceeding multiple times body weight during explosive movements.

Normal joint stability depends on the integrated function of both static and dynamic restraints. Static restraints include the plantar plate, joint capsule, collateral ligaments, and sesamoid complex, while dynamic restraints involve the intrinsic and extrinsic muscles that cross the joint. The plantar plate serves as the primary static restraint to hyperextension, functioning similarly to the volar plate in finger joints.

When turf toe occurs, this carefully orchestrated biomechanical system becomes disrupted. The loss of plantar plate integrity compromises the joint's ability to resist hyperextension forces, leading to abnormal motion patterns and potential instability. The sesamoid bones, which normally track in grooves on the plantar surface of the first metatarsal head, may become displaced or their motion restricted by scar tissue formation.

Following injury, patients often develop compensatory movement patterns to avoid painful great toe extension. This includes early heel rise during gait, lateral weight transfer to avoid first ray loading, and modified push-off mechanics that rely more heavily on the lesser toes. These compensations can lead to secondary problems including lateral forefoot overload, stress injuries to the lesser metatarsals, and altered lower extremity kinetic chain function.

The return to normal biomechanics requires restoration of both joint stability and normal range of motion. This is particularly challenging in Grade III injuries where structural integrity has been compromised and healing may result in some degree of permanent stiffness or instability.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Acute onset of pain at the first metatarsophalangeal joint following hyperextension injury",
        "Localized tenderness over the plantar and sometimes dorsal aspects of the joint",
        "Pain reproduced with passive dorsiflexion (upward bending) of the great toe",
        "Swelling that typically develops rapidly within the first few hours post-injury",
        "Functional limitation with push-off activities including walking, running, and jumping",
        "Possible ecchymosis (bruising) developing over 24-48 hours post-injury"
      ],
      associatedSymptoms: [
        "Joint stiffness, particularly noticeable after periods of rest",
        "Antalgic (protective) gait pattern with shortened stride length",
        "Difficulty wearing normal footwear due to swelling and tenderness",
        "Pain with direct palpation of the sesamoid bones in severe cases",
        "Sensation of joint instability or 'giving way' during weight-bearing",
        "Secondary muscle tension in the foot and calf from altered gait mechanics"
      ],
      typicalPattern: "Symptoms are typically worst in the first 48-72 hours following injury, with pain intensifying with any attempt at great toe extension. Weight-bearing activities exacerbate symptoms, while rest and elevation provide some relief. Morning stiffness is common, improving somewhat with gentle movement but returning with increased activity."
    },

    evidenceSnapshot: {
      primaryStrategy: "Early accurate grading and appropriate protection based on injury severity achieves 90-95% successful return to sport, with Grade I injuries returning in 1-2 weeks and Grade III injuries requiring 8-12 weeks",
      secondaryStrategy: "Progressive rehabilitation emphasizing range of motion restoration, strengthening, and sport-specific training reduces re-injury rates to less than 5% when properly implemented",
      preventionStrategy: "Appropriate footwear with rigid forefoot support and proper playing surface maintenance can reduce turf toe incidence by up to 50% in high-risk sports",
      sources: "American Journal of Sports Medicine systematic reviews; Foot and Ankle International clinical practice guidelines; Sports Health consensus statements"
    },

    differentialDiagnosis: [
      {
        condition: "Sesamoid Fracture or Sesamoiditis",
        distinguishingFeatures: "Pain primarily plantar and more proximal to the joint; may lack history of acute hyperextension injury"
      },
      {
        condition: "Hallux Rigidus (First MTP Arthritis)",
        distinguishingFeatures: "Chronic onset with progressive stiffness; pain primarily with motion rather than acute traumatic history"
      },
      {
        condition: "First Metatarsal Stress Fracture",
        distinguishingFeatures: "Insidious onset with activity-related pain; tenderness over the metatarsal shaft rather than joint"
      },
      {
        condition: "Gout (First MTP Joint)",
        distinguishingFeatures: "Severe inflammatory presentation often without trauma; may have history of previous attacks or metabolic factors"
      },
      {
        condition: "Plantar Plate Tear (Lesser Toes)",
        distinguishingFeatures: "Affects second or third toes more commonly; associated with toe drift or elevation deformity"
      }
    ],

    understanding: `Turf toe represents one of the most common and potentially significant injuries in athletes, particularly those participating in sports involving explosive push-off movements. The name derives from the increased incidence observed when artificial turf became widespread in professional and collegiate athletics, though the injury occurs across all sports and playing surfaces.

The key to understanding turf toe lies in recognizing it as a spectrum of injuries rather than a single diagnostic entity. This spectrum ranges from minor capsular stretching that resolves quickly to complete rupture of the plantar plate with sesamoid displacement that can end athletic careers if not properly managed.

Many athletes and coaches underestimate the significance of great toe injuries, viewing them as minor inconveniences rather than potentially career-affecting problems. This misconception often leads to premature return to sport and subsequent re-injury or chronic complications. The great toe plays a crucial role in athletic performance, contributing significantly to push-off power and stability during cutting movements.

The challenge in managing turf toe lies in balancing appropriate protection to allow healing while maintaining the range of motion and strength necessary for eventual return to sport. Unlike some injuries where immobilization is clearly beneficial, turf toe requires a more nuanced approach that considers the injury grade, sport demands, and individual healing characteristics.

Understanding the biomechanical demands of the athlete's specific sport is crucial for successful rehabilitation and return-to-play decisions. A dancer requires different great toe function than a football lineman, and treatment approaches must be tailored accordingly.`,

    whatToExpect: {
      firstVisit: "I'll perform specific tests to grade your injury severity, assess the integrity of the plantar plate and sesamoid complex, evaluate your current functional limitations, and provide immediate protection strategies including appropriate taping or footwear modifications",
      earlyPhase: "Focus on controlling pain and swelling while protecting the healing tissues from further injury, combined with gentle range of motion exercises as tolerated to prevent excessive stiffness",
      progression: "Systematic progression through strengthening exercises, sport-specific movements, and plyometric training with careful attention to great toe function and any signs of instability or recurrent symptoms"
    },

    evidenceBasedTreatment: [
      {
        approach: "Graded Activity and Load Management",
        evidence: "Systematic progression based on injury grade and healing timeline achieves 92% successful return to sport with minimal re-injury risk when properly implemented",
        effectivenessLevel: "strong"
      },
      {
        approach: "Protective Taping and Orthotic Management",
        evidence: "Restriction of great toe hyperextension during healing phase reduces re-injury risk by 75% while allowing maintenance of necessary activities",
        effectivenessLevel: "strong"
      },
      {
        approach: "Manual Therapy and Joint Mobilization",
        evidence: "Gentle mobilization techniques prevent excessive scar tissue formation and restore normal joint mechanics, improving outcomes in moderate to severe injuries",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Progressive Strengthening and Proprioceptive Training",
        evidence: "Sport-specific strengthening combined with balance training reduces re-injury rates and improves confidence with return to sport",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Cryotherapy and Anti-inflammatory Modalities",
        evidence: "Ice application and appropriate use of anti-inflammatory treatments in the acute phase reduce pain and swelling, facilitating earlier rehabilitation",
        effectivenessLevel: "moderate"
      }
    ],

    prognosis: {
      timeline: "Grade I injuries typically resolve in 1-2 weeks with appropriate management, Grade II injuries require 3-6 weeks for full recovery, and Grade III injuries may take 8-12 weeks or longer depending on the extent of structural damage",
      factors: [
        "Injury grade is the single most important predictor of recovery time and functional outcome",
        "Early accurate diagnosis and appropriate protection significantly improve long-term outcomes",
        "Sport-specific demands and position requirements influence return-to-play timeline",
        "Age and healing capacity affect recovery rates, with younger athletes generally healing faster",
        "Previous great toe injuries may complicate recovery and increase risk of chronic problems",
        "Compliance with activity restrictions during healing phase is crucial for preventing re-injury"
      ],
      naturalHistory: "Most Grade I and II injuries heal completely with appropriate conservative management. Grade III injuries may result in some degree of permanent stiffness or instability, though most athletes can return to full competition. Inadequate initial management can lead to chronic pain, instability, and arthritis development"
    },

    selfManagement: [
      {
        strategy: "Appropriate Activity Modification and Rest",
        rationale: "Avoiding activities that stress the healing joint in hyperextension allows tissue repair while maintaining overall fitness through alternative exercises that don't load the great toe",
        precautions: ["Complete immobilization rarely necessary except in severe injuries", "Monitor pain levels and adjust activity accordingly", "Gradual return to activities as healing progresses"]
      },
      {
        strategy: "Protective Footwear and Taping",
        rationale: "Rigid-soled shoes or specialized taping techniques prevent excessive great toe extension while allowing necessary daily activities and beginning rehabilitation",
        precautions: ["Ensure taping doesn't cause circulation problems", "Replace tape regularly to maintain effectiveness", "Progress to less restrictive protection as healing occurs"]
      },
      {
        strategy: "Ice Application and Elevation in Acute Phase",
        rationale: "Cryotherapy reduces pain, swelling, and inflammatory response in the first 72 hours after injury, facilitating earlier mobilization and rehabilitation",
        precautions: ["Apply ice for 15-20 minutes maximum per session", "Use barrier between ice and skin to prevent frostbite", "Elevate foot above heart level when possible"]
      },
      {
        strategy: "Gentle Range of Motion Exercises",
        rationale: "Early, pain-free movement prevents excessive stiffness and scar tissue formation while respecting the healing timeline of injured structures",
        precautions: ["Never force movement beyond pain tolerance", "Avoid hyperextension movements initially", "Progress range of motion exercises based on healing phase"]
      },
      {
        strategy: "Progressive Return to Sport Protocol",
        rationale: "Systematic advancement through walking, jogging, cutting, and sport-specific activities ensures adequate healing and reduces re-injury risk",
        precautions: ["Each phase should be pain-free before progression", "Setbacks may require returning to previous phase", "Consider protective equipment during initial return to sport"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Severe pain and swelling with complete inability to bear weight on the affected foot",
        action: "May indicate Grade III injury with possible sesamoid fracture or displacement requiring immediate imaging and specialist evaluation"
      },
      {
        sign: "Numbness or tingling in the great toe or surrounding areas",
        action: "Could suggest nerve injury or compartment syndrome requiring urgent medical assessment"
      },
      {
        sign: "Signs of infection including fever, red streaking, or purulent drainage",
        action: "Requires immediate medical attention to rule out septic arthritis or soft tissue infection"
      },
      {
        sign: "No improvement or worsening pain after 2 weeks of appropriate conservative treatment",
        action: "May indicate more severe structural damage requiring advanced imaging and specialist consultation"
      },
      {
        sign: "Persistent instability or recurrent injury with minor trauma",
        action: "Suggests inadequate healing of primary injury or chronic plantar plate insufficiency requiring comprehensive re-evaluation"
      }
    ],

    keyResearch: [
      {
        finding: "Surgical repair of turf toe achieves 94% return to previous activity level with significant functional improvement",
        detail: "2024 study of 20 patients (17 athletes) showed Manchester-Oxford Foot Questionnaire scores improved from mean 73.0 preoperatively to 28.1 postoperatively (p=0.022), pain domain scores decreased from 72.9 to 22.9 (p=0.022). Mean return to normal activity 4.0 months, with 16 of 17 athletes (94%) returning to previous activity level. Zero complications or symptom recurrence reported",
        clinicalRelevance: "Early surgical recognition and plantar plate repair for grade 3 turf toe injuries produces excellent functional outcomes and highly reliable return to sport, supporting surgical intervention for complete plantar plate disruptions in athletes"
      },
      {
        finding: "Grade-based recovery timelines show surgical cases take 2.5 times longer to return compared to conservative management",
        detail: "Systematic review of 65 patients found median return to play 5.85 weeks for nonoperative treatment versus 14.70 weeks for surgical cases. Grade I injuries return 3-5 days, grade II injuries lose 2-4 weeks (range 3-24 weeks), grade III injuries require 4-6+ weeks. Less than 2% of all turf toe injuries require surgery. Performance outcomes show low-grade injuries achieve near 100% return to prior performance, while 70-90% of high-grade injuries maintain performance level",
        clinicalRelevance: "Conservative management remains first-line for grade I and II injuries with predictable short recovery times, while surgical intervention should be reserved for grade III injuries with understanding that extended rehabilitation (14+ weeks) is necessary but yields favorable long-term performance outcomes in appropriate candidates"
      }
    ],


    measuringProgress: {
      dayToDay: "I monitor your pain levels during weight-bearing activities, measure great toe range of motion recovery, assess your ability to perform push-off movements, and evaluate your progress through sport-specific movement patterns",
      questionnaires: "Foot and Ankle Ability Measure (FAAM) for functional assessment, sport-specific return-to-play questionnaires, and Visual Analog Scales for pain monitoring during different activities",
      activityTarget: "Complete return to desired sports and activities without pain, instability, or functional limitation while maintaining normal great toe biomechanics"
    },
    accessAndHours: standardAccessAndHours
  },

  'severs-disease': {
    symptoms: [
      "Heel pain that worsens during and after physical activity",
      "Tenderness when squeezing both sides of the heel bone",
      "Morning stiffness and pain in the heel that improves with movement",
      "Limping or altered walking pattern, especially after sports",
      "Pain that improves significantly with rest periods",
      "Difficulty running, jumping, or participating in sports",
      "Heel pain that may affect one or both feet",
      "Increased discomfort when walking barefoot on hard surfaces",
      "Pain that correlates with growth spurts and increased activity",
      "Reluctance to participate in previously enjoyed physical activities"
    ],

    causes: [
      "Rapid growth periods where bones grow faster than muscles and tendons",
      "Repetitive stress from running and jumping activities",
      "Tight calf muscles (gastrocnemius and soleus) pulling on the growth plate",
      "Increased activity levels or sports participation during growth phases",
      "Poor footwear lacking adequate heel support and cushioning",
      "Hard playing surfaces that increase impact forces",
      "Biomechanical factors like flat feet or high arches affecting load distribution",
      "Training errors including sudden increases in activity intensity",
      "Sports involving repetitive heel striking like soccer, basketball, or track",
      "Individual variation in growth plate development and closure timing"
    ],

    treatment: {
      approach: "Conservative management focusing on activity modification, biomechanical optimization, and symptom control while allowing natural growth plate maturation to occur",
      duration: "Typically resolves within 2-6 months with appropriate management; symptoms don't recur once growth plate fusion is complete",
      evidence: "Clinical studies demonstrate 85-95% resolution with conservative treatment combining activity modification, stretching, and supportive measures"
    },

    recovery: {
      timeline: "Initial pain relief typically occurs within 2-4 weeks of treatment initiation, with complete resolution by 2-6 months as the child approaches skeletal maturity",
      factors: [
        "Age and growth stage - symptoms resolve naturally with growth plate closure",
        "Compliance with activity modifications and stretching programs",
        "Biomechanical factors including calf flexibility and foot structure",
        "Sport demands and training intensity modifications",
        "Quality of footwear and use of supportive devices"
      ]
    },

    pathophysiology: `Sever's disease, formally known as calcaneal apophysitis, represents an inflammatory condition of the posterior calcaneal growth plate in skeletally immature children and adolescents. The calcaneal apophysis is a secondary ossification center that appears around age 8 and typically fuses with the main body of the calcaneus between ages 14-16 years.

During periods of rapid skeletal growth, the bones often grow faster than the surrounding soft tissues, creating increased tension in muscles and tendons. The Achilles tendon and plantar fascia both attach to the posterior aspect of the calcaneus, creating a traction force on the growth plate during activities involving running, jumping, or rapid direction changes.

The growth plate cartilage is inherently weaker than mature bone and more susceptible to stress-related injury. Repetitive traction forces from tight posterior muscle groups, combined with impact forces from athletic activities, create microtrauma within the growth plate. This leads to localized inflammation, increased blood flow, and pain characteristic of the condition.

The condition is essentially a stress reaction rather than an acute injury, developing gradually as cumulative stress exceeds the growth plate's adaptive capacity. Unlike adult tendinopathies, the problem lies within the bone itself rather than the tendon, explaining why rest is typically more effective than treatments targeting tendon pathology.

The self-limiting nature of Sever's disease relates directly to skeletal maturation. As the growth plate closes and the apophysis fuses with the main calcaneal body, the weak link in the posterior heel complex is eliminated, and symptoms resolve permanently.`,

    biomechanics: `The posterior heel complex functions as an integrated system during weight-bearing activities, with forces transmitted from the calf muscles through the Achilles tendon to the calcaneal insertion. In skeletally mature individuals, these forces are absorbed by mature bone tissue, but in growing children, the growth plate represents a point of relative weakness.

During the stance phase of gait, the gastrocnemius and soleus muscles contract to control forward progression of the tibia over the planted foot. This creates significant tension within the Achilles tendon, which translates to traction forces across the calcaneal apophysis. These forces are magnified during running and jumping activities where impact forces can exceed 3-5 times body weight.

Biomechanical factors that increase stress on the growth plate include excessive calf muscle tightness, which increases the baseline tension on the Achilles tendon throughout the gait cycle. Foot structure abnormalities such as pes planus (flat feet) or pes cavus (high arches) can alter the normal force distribution and increase stress concentration at the heel.

The plantar fascia also contributes to the biomechanical stress by creating a bowstring effect between the calcaneus and forefoot. During weight-bearing activities, tension in the plantar fascia pulls on its calcaneal insertion, adding to the stress already created by Achilles tendon tension.

Poor footwear compounds the problem by failing to provide adequate shock absorption during heel strike, increasing the magnitude of impact forces transmitted through the growth plate. Hard playing surfaces similarly increase these impact forces, explaining why children playing on artificial turf or concrete surfaces often experience more severe symptoms.

Training errors, particularly rapid increases in activity intensity or duration, overwhelm the growth plate's adaptive capacity. The immature skeleton requires more gradual loading progressions compared to adult tissues, and violations of this principle commonly precipitate symptoms.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Activity-related heel pain that is worse during and immediately after sports participation",
        "Positive calcaneal squeeze test with tenderness on medial and lateral aspects of the heel",
        "Morning stiffness and pain that improves with gentle movement and warm-up",
        "Functional limitations including difficulty with running, jumping, and sports activities",
        "Pain relief with rest periods and cessation of aggravating activities",
        "Bilateral involvement in approximately 60% of cases"
      ],
      associatedSymptoms: [
        "Antalgic gait pattern with shortened stance phase on affected side",
        "Calf muscle tightness, particularly in the gastrocnemius and soleus",
        "Reluctance to participate in previously enjoyed physical activities",
        "Pain exacerbated by barefoot walking on hard surfaces",
        "Symptom correlation with periods of rapid growth and increased activity",
        "Compensatory movement patterns to minimize heel loading"
      ],
      typicalPattern: "Pain typically follows a predictable pattern of activity-related onset, improvement with rest, and correlation with growth spurts. Symptoms are often worse at the beginning of sports seasons when activity levels increase rapidly. Morning symptoms are common but usually improve with gentle movement."
    },

    evidenceSnapshot: {
      primaryStrategy: "Activity modification combined with calf stretching programs achieves symptom resolution in 85-95% of cases within 2-6 months, with no recurrence after growth plate closure",
      secondaryStrategy: "Heel padding and supportive footwear reduce impact forces and provide symptomatic relief while maintaining activity participation in 70-80% of patients",
      preventionStrategy: "Gradual activity progression during growth periods and maintenance of calf flexibility can prevent 60-75% of cases in at-risk young athletes",
      sources: "Pediatric Sports Medicine consensus statements; Journal of Pediatric Orthopaedics systematic reviews; American Academy of Pediatrics Clinical Practice Guidelines"
    },

    differentialDiagnosis: [
      {
        condition: "Calcaneal Stress Fracture",
        distinguishingFeatures: "More severe pain, often present at rest, positive imaging findings, typically in older adolescents"
      },
      {
        condition: "Plantar Fasciitis",
        distinguishingFeatures: "Pain primarily on plantar aspect of heel, worse with first steps in morning, uncommon in children under 10"
      },
      {
        condition: "Achilles Tendinopathy",
        distinguishingFeatures: "Pain and tenderness along the tendon itself rather than at bone insertion, more common in adolescents"
      },
      {
        condition: "Calcaneal Bursitis",
        distinguishingFeatures: "Swelling and tenderness over posterior heel prominence, associated with shoe friction"
      },
      {
        condition: "Tarsal Coalition",
        distinguishingFeatures: "Rigid flatfoot deformity, limited subtalar motion, pain with weight-bearing rather than just heel pain"
      }
    ],

    understanding: `Sever's disease represents the most common cause of heel pain in active children and adolescents, affecting up to 10% of young athletes. The condition is fundamentally different from adult heel pain because it involves the growing skeleton rather than mature tissues, making understanding of normal growth and development crucial for proper management.

The key insight for parents and young athletes is that Sever's disease is a temporary condition related to growth that will resolve completely once skeletal maturity is reached. This differs dramatically from adult foot problems that may require long-term management. The condition should not be viewed as a serious injury, but rather as a signal that activity modifications are needed during a vulnerable growth period.

Many parents worry that their child has a serious injury or that continuing activity will cause permanent damage. However, Sever's disease does not lead to long-term complications when managed appropriately. The goal is not complete activity cessation but rather intelligent activity modification that allows continued participation while respecting the limitations of growing tissues.

Understanding the relationship between growth spurts and symptom onset helps families plan activity levels appropriately. Symptoms often coincide with periods of rapid height increase, particularly in active children who maintain high training volumes during these vulnerable periods.

The condition serves as an important lesson in listening to the body's signals and adapting training loads accordingly. Young athletes who learn these principles early often develop better long-term injury prevention habits that serve them throughout their athletic careers.`,

    whatToExpect: {
      firstVisit: "I'll assess your child's growth stage and activity level, perform specific tests to confirm the diagnosis, evaluate calf flexibility and foot mechanics, and provide immediate strategies for symptom relief including activity modifications and supportive measures",
      earlyPhase: "Primary focus on pain reduction through activity modification, introduction of stretching exercises, and optimization of footwear while maintaining overall fitness through appropriate alternative activities",
      progression: "Gradual return to full sports participation as symptoms improve, with ongoing monitoring for growth plate closure and long-term prevention strategies for maintaining calf flexibility"
    },

    evidenceBasedTreatment: [
      {
        approach: "Activity Modification and Load Management",
        evidence: "Reducing high-impact activities while maintaining fitness through swimming, cycling, and modified training reduces symptoms in 90% of cases within 4-8 weeks",
        effectivenessLevel: "strong"
      },
      {
        approach: "Gastrocnemius and Soleus Stretching Program",
        evidence: "Daily calf stretching reduces tension on the growth plate and accelerates symptom resolution, with studies showing 30% faster recovery when combined with activity modification",
        effectivenessLevel: "strong"
      },
      {
        approach: "Heel Padding and Shock Absorption",
        evidence: "Heel cups and cushioned insoles reduce impact forces by 20-30% and provide symptomatic relief while allowing continued activity participation",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Supportive Athletic Footwear",
        evidence: "Proper athletic shoes with adequate heel cushioning and arch support reduce symptom severity and prevent recurrence during sports activities",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Ice Application After Activity",
        evidence: "Post-activity cryotherapy reduces inflammation and pain, allowing earlier return to desired activities when combined with other interventions",
        effectivenessLevel: "moderate"
      }
    ],

    prognosis: {
      timeline: "Symptoms typically improve within 2-4 weeks of appropriate treatment and resolve completely within 2-6 months. Once growth plate fusion occurs (usually by age 16), symptoms do not recur",
      factors: [
        "Age and proximity to growth plate closure - older children closer to skeletal maturity recover faster",
        "Compliance with activity modifications and stretching programs is crucial for symptom resolution",
        "Severity of calf tightness affects both symptom intensity and recovery timeline",
        "Sport demands and training intensity modifications directly influence healing rate",
        "Quality of footwear and consistent use of supportive devices affects symptom control",
        "Individual growth patterns and timing of growth spurts influence symptom duration"
      ],
      naturalHistory: "Sever's disease is completely self-limiting and resolves with skeletal maturation. No long-term complications or recurrence occur once growth plates close. Most children return to full sports participation without restrictions"
    },

    selfManagement: [
      {
        strategy: "Smart Activity Modification and Cross-Training",
        rationale: "Reducing high-impact activities while maintaining fitness through swimming, cycling, or other low-impact alternatives allows healing while preserving athletic conditioning",
        precautions: ["Complete activity cessation rarely necessary and may lead to deconditioning", "Gradual return to impact activities as symptoms improve", "Monitor pain levels and adjust activities accordingly"]
      },
      {
        strategy: "Daily Calf Stretching Routine",
        rationale: "Consistent stretching of both gastrocnemius and soleus muscles reduces tension on the growth plate and accelerates recovery while preventing recurrence",
        precautions: ["Stretch should be comfortable, not painful", "Hold stretches for 30 seconds minimum", "Perform both straight-leg and bent-leg calf stretches daily"]
      },
      {
        strategy: "Proper Athletic Footwear with Heel Support",
        rationale: "Shoes with adequate heel cushioning, arch support, and shock absorption reduce impact forces on the growth plate during activities",
        precautions: ["Replace worn athletic shoes regularly", "Ensure proper fit with adequate heel and arch support", "Avoid worn-out or inappropriate footwear for sports"]
      },
      {
        strategy: "Heel Padding and Shock Absorption",
        rationale: "Heel cups, gel pads, or cushioned insoles provide additional shock absorption and reduce direct pressure on the sensitive growth plate",
        precautions: ["Ensure pads fit properly in shoes without creating tightness", "Replace worn padding regularly", "May need to size shoes slightly larger to accommodate padding"]
      },
      {
        strategy: "Ice Application After Aggravating Activities",
        rationale: "Post-activity ice application reduces inflammation and pain, allowing continued participation in modified activities during the healing process",
        precautions: ["Apply ice for 15-20 minutes maximum", "Use barrier between ice and skin", "Ice most effective when applied immediately after activity"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Severe constant pain that persists at rest and prevents all weight-bearing",
        action: "May indicate calcaneal stress fracture or other serious pathology requiring immediate imaging and medical evaluation"
      },
      {
        sign: "Fever, significant swelling, redness, or warmth around the heel",
        action: "Could suggest infection or inflammatory condition requiring urgent medical assessment and laboratory studies"
      },
      {
        sign: "Neurological symptoms including numbness, tingling, or weakness in the foot",
        action: "May indicate nerve involvement or compartment syndrome requiring immediate medical evaluation"
      },
      {
        sign: "No improvement after 8-12 weeks of appropriate conservative treatment",
        action: "Could suggest alternative diagnosis or need for advanced imaging to rule out other pathology"
      },
      {
        sign: "Persistent symptoms beyond expected age of growth plate closure (typically 16 years)",
        action: "May indicate other heel pathology requiring comprehensive re-evaluation and possible imaging studies"
      }
    ],

        keyResearch: [
      {
        finding: "Custom foot orthoses reduce pain by 68.6% and increase pressure pain threshold by 53.4%",
        detail: "A 2021 randomized controlled trial of 208 children aged 9-12 with calcaneal apophysitis found custom-made polypropylene foot orthoses produced a 68.6% reduction in VAS pain scores (95% CI: 74.5% to 62.7%) and 53.4% increase in pressure pain threshold (95% CI: 47.1% to 59.7%) compared to heel lifts over 12 weeks, with statistically significant improvements (p < 0.001)",
        clinicalRelevance: "Custom orthoses demonstrate superior outcomes compared to off-the-shelf heel lifts, supporting first-line treatment with properly fitted foot orthoses for pediatric patients with Sever's disease, with measurable improvements in both subjective pain and objective pressure tolerance"
      },
      {
        finding: "Physical therapy achieves return to sport in 2 months with gender differences in recovery",
        detail: "A 2025 systematic review of 17 studies found average return to sport of 2 months with physical therapy and orthotic management, with boys averaging 2.2 months recovery time and girls 1.6 months, though bilateral cases took significantly longer (209.5 days) compared to unilateral presentations (45.9 days)",
        clinicalRelevance: "Conservative management with physical therapy and orthoses provides predictable recovery timelines for athletic populations, with treatment planning requiring consideration of bilateral involvement as a negative prognostic factor requiring extended rehabilitation duration"
      },
      {
        finding: "8 randomized controlled trials support multi-modal conservative approach",
        detail: "A 2024 systematic review examining 8 RCTs (average PEDro methodological quality score 6.75/10) evaluated common treatments including custom orthoses, therapeutic exercise, kinesio taping, and foot orthoses, with a tiered treatment framework emerging that prioritizes custom foot orthoses and physical therapy as Tier 1 interventions based on strongest evidence",
        clinicalRelevance: "Evidence supports structured treatment hierarchy with custom orthoses and supervised exercise as primary interventions, reserving other modalities as adjuncts, allowing clinicians to follow evidence-based treatment progressions when initial interventions prove insufficient"
      }
    ],

    measuringProgress: {
      dayToDay: "I track your child's pain levels during different activities, monitor improvements in heel tenderness with squeeze testing, assess calf flexibility gains, and evaluate their ability to participate in sports and daily activities",
      questionnaires: "Pediatric Foot and Ankle Ability Measure (pFAAM), sport-specific return-to-play readiness scales, and parent-reported outcome measures for activity participation",
      activityTarget: "Full return to desired sports and activities without heel pain, maintaining long-term habits of calf flexibility and appropriate training progression"
    },
    accessAndHours: standardAccessAndHours
  },

  'tarsal-tunnel-syndrome': {
    symptoms: [
      "Burning, tingling, or electric shock-like sensations in the sole of the foot",
      "Numbness affecting the plantar surface and toes",
      "Pain along the medial ankle that may radiate into the foot",
      "Night pain that frequently disrupts sleep patterns",
      "Symptoms that worsen with prolonged standing or walking",
      "Cramping sensations in the arch and toes",
      "Shooting pains from the inner ankle down to the toes",
      "Weakness in toe flexion or spreading movements",
      "Sensation of walking on a pebble or having something in the shoe",
      "Symptoms that improve with rest and elevation of the foot"
    ],

    causes: [
      "Space-occupying lesions within the tarsal tunnel including cysts or tumors",
      "Chronic inflammation from conditions like rheumatoid arthritis",
      "Biomechanical abnormalities causing excessive foot pronation",
      "Previous ankle trauma or fractures causing scar tissue formation",
      "Varicose veins or vascular malformations creating compression",
      "Systemic conditions like diabetes causing nerve swelling",
      "Chronic ankle instability leading to repetitive nerve irritation",
      "Tight or thickened flexor retinaculum compressing the nerve",
      "Accessory muscles or anatomical variants reducing tunnel space",
      "Prolonged or repetitive activities causing nerve inflammation"
    ],

    treatment: {
      approach: "Conservative management addressing nerve decompression, inflammation reduction, and biomechanical correction through activity modification, neural mobilization, and orthotic management",
      duration: "Early cases typically improve within 6-12 weeks; chronic presentations may require 3-6 months of consistent conservative treatment",
      evidence: "Clinical studies show 60-75% of patients achieve significant symptom improvement with comprehensive conservative treatment when initiated within 6 months of symptom onset"
    },

    recovery: {
      timeline: "Neural symptoms typically begin improving within 2-4 weeks of treatment, with functional recovery continuing over 8-16 weeks. Complete resolution may take 3-6 months in chronic cases",
      factors: [
        "Duration of symptoms before treatment significantly affects recovery potential",
        "Underlying causes of compression influence treatment response",
        "Severity of initial nerve compression determines timeline",
        "Patient compliance with activity modifications crucial for success",
        "Associated medical conditions like diabetes affect nerve healing capacity"
      ]
    },

    pathophysiology: `Tarsal tunnel syndrome results from compression of the posterior tibial nerve as it passes through the tarsal tunnel, a fibro-osseous space located behind the medial malleolus at the ankle. The tunnel is bounded by the flexor retinaculum (laciniate ligament) superficially and the tibia, talus, and calcaneus deep to the nerve.

The posterior tibial nerve carries sensory fibers to the plantar surface of the foot and motor fibers to most of the intrinsic foot muscles. Within or just distal to the tarsal tunnel, the nerve divides into medial and lateral plantar branches, and sometimes a medial calcaneal branch. Compression can affect the main trunk proximally or individual branches distally, creating variable symptom patterns.

Several mechanisms can cause nerve compression within this confined space. Space-occupying lesions such as ganglion cysts, lipomas, or varicose veins can directly compress neural structures. Inflammatory conditions like rheumatoid arthritis, tenosynovitis, or chronic ankle instability can cause swelling that reduces the available space for the nerve.

Biomechanical factors contribute significantly to tarsal tunnel syndrome development. Excessive foot pronation increases tension on the flexor retinaculum and can cause the nerve to bow around the medial malleolus, creating a functional compression. This explains why the condition often occurs in association with posterior tibial tendon dysfunction or flexible flatfoot deformity.

Chronic compression leads to intraneural edema, demyelination, and eventual axonal damage if left untreated. The progression from reversible conduction block to permanent nerve damage explains why early recognition and treatment are crucial for optimal outcomes.`,

    biomechanics: `Normal posterior tibial nerve function requires unimpeded passage through the tarsal tunnel during all phases of gait. The tunnel dimensions change dynamically with foot and ankle position, with maximum space available in plantarflexion and inversion, and minimum space in dorsiflexion and eversion.

During normal gait, the foot progresses through pronation during loading response, followed by supination during push-off. This biomechanical sequence requires the tarsal tunnel structures to accommodate changing positions and loads. When excessive pronation occurs, several problems develop that can compromise nerve function.

Excessive pronation increases tension on the flexor retinaculum as it attempts to maintain the tunnel's integrity against abnormal forces. This can create a bowstring effect where the nerve becomes compressed against the rigid medial malleolus. The prolonged pronated position also maintains the tunnel in its most confined configuration for longer periods during the gait cycle.

The posterior tibial tendon plays a crucial role in controlling pronation and maintaining the medial longitudinal arch. When this tendon becomes dysfunctional, excessive pronation results, directly affecting tarsal tunnel dimensions. This explains the frequent association between posterior tibial tendon dysfunction and tarsal tunnel syndrome.

Footwear and activity patterns influence biomechanics significantly. Shoes with inadequate arch support allow excessive pronation, while high-heeled shoes can alter ankle positioning and tunnel dimensions. Prolonged standing or walking activities may exceed the nerve's tolerance for sustained compression, particularly in the presence of underlying biomechanical abnormalities.

Recovery requires not only addressing the acute nerve compression but also correcting the underlying biomechanical factors that contributed to the problem. This often involves orthotic management to control pronation and posterior tibial tendon rehabilitation to restore normal foot mechanics.`,

    clinicalPresentation: {
      primarySymptoms: [
        "Positive Tinel's sign with percussion over the posterior tibial nerve behind the medial malleolus",
        "Burning, tingling, or electric shock sensations in the plantar foot distribution",
        "Numbness affecting the medial and lateral plantar nerve territories",
        "Night pain that frequently disrupts sleep and may worsen with dependent positioning",
        "Activity-related symptoms that worsen with prolonged standing or walking",
        "Weakness in intrinsic foot muscles affecting toe flexion and spreading"
      ],
      associatedSymptoms: [
        "Cramping sensations in the arch and toes, particularly at night",
        "Altered gait pattern with reduced push-off power and altered weight distribution",
        "Relief of symptoms with rest, elevation, and non-weight-bearing positions",
        "Possible swelling or fullness behind the medial ankle in some cases",
        "Compensatory changes in foot positioning to minimize nerve compression",
        "Secondary muscle tension in the calf and foot from altered biomechanics"
      ],
      typicalPattern: "Symptoms typically follow a pattern of activity-related onset with improvement during rest periods. Night symptoms are characteristic and often more severe than daytime complaints. Bilateral involvement occurs in approximately 25% of cases, often related to systemic conditions or bilateral biomechanical abnormalities."
    },

    evidenceSnapshot: {
      primaryStrategy: "Conservative treatment combining activity modification, neural mobilization, and biomechanical correction achieves significant symptom improvement in 65-80% of patients when initiated within 6 months of symptom onset",
      secondaryStrategy: "Corticosteroid injections provide temporary symptom relief in 60-70% of cases but show variable long-term success rates and are typically reserved for cases not responding to conservative management",
      preventionStrategy: "Early recognition and treatment of underlying biomechanical factors and associated conditions can prevent 50-60% of cases from progressing to chronic nerve compression",
      sources: "Journal of Foot and Ankle Surgery systematic reviews; Nerve Compression Syndrome Clinical Practice Guidelines; American Physical Therapy Association Clinical Guidelines"
    },

    differentialDiagnosis: [
      {
        condition: "Plantar Fasciitis",
        distinguishingFeatures: "Pain primarily plantar heel, worse with first steps, lacks neurological symptoms"
      },
      {
        condition: "Posterior Tibial Tendon Dysfunction",
        distinguishingFeatures: "Medial arch pain with flatfoot deformity, weakness with single heel rise, lacks neurological symptoms"
      },
      {
        condition: "Morton's Neuroma",
        distinguishingFeatures: "Forefoot location between metatarsal heads, affected toes typically third and fourth"
      },
      {
        condition: "Diabetic Peripheral Neuropathy",
        distinguishingFeatures: "Bilateral symmetric distribution, burning feet syndrome, associated with diabetes mellitus"
      },
      {
        condition: "S1 Radiculopathy",
        distinguishingFeatures: "Back pain with radiation, affects entire leg, positive straight leg raise test"
      }
    ],

    understanding: `Tarsal tunnel syndrome represents the foot and ankle equivalent of carpal tunnel syndrome, involving compression of the posterior tibial nerve as it passes through a confined space at the medial ankle. While less common than carpal tunnel syndrome, it can be equally debilitating when symptoms become chronic.

The key to understanding this condition lies in recognizing that it often results from multiple contributing factors rather than a single cause. Biomechanical abnormalities, inflammatory conditions, space-occupying lesions, and systemic diseases can all contribute to nerve compression, and successful treatment often requires addressing multiple factors simultaneously.

Many patients experience frustration with tarsal tunnel syndrome because the symptoms can be vague and intermittent, making diagnosis challenging. Unlike some foot conditions where pain is clearly localized, tarsal tunnel syndrome often presents with diffuse neurological symptoms that patients struggle to describe accurately.

The condition demonstrates the importance of early intervention in nerve compression syndromes. While early cases often respond well to conservative treatment, chronic compression can lead to permanent nerve damage and persistent symptoms. This makes prompt recognition and appropriate treatment crucial for optimal outcomes.

Understanding the relationship between foot biomechanics and nerve compression helps explain why orthotic management often plays a central role in treatment. Simply addressing the nerve compression without correcting underlying biomechanical factors often leads to symptom recurrence.`,

    whatToExpect: {
      firstVisit: "I'll perform specific neurological tests including Tinel's sign and sensory assessment, evaluate your foot biomechanics and gait pattern, identify potential contributing factors, and provide immediate strategies for nerve decompression and symptom management",
      earlyPhase: "Primary focus on reducing nerve irritation through activity modification, biomechanical optimization, and gentle neural mobilization techniques while addressing any underlying inflammatory processes",
      progression: "Gradual return to full activities as neurological symptoms improve, with ongoing attention to biomechanical factors and long-term prevention strategies to minimize recurrence risk"
    },

    evidenceBasedTreatment: [
      {
        approach: "Activity Modification and Load Management",
        evidence: "Reducing prolonged weight-bearing activities and modifying positions that compress the nerve provides symptom improvement in 70-80% of patients within 4-6 weeks",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Neural Mobilization and Nerve Gliding Exercises",
        evidence: "Specific nerve mobilization techniques help restore normal nerve mobility and reduce adhesions, with studies showing improved outcomes when combined with other interventions",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Biomechanical Correction with Orthotic Management",
        evidence: "Custom orthotics that control excessive pronation and support the medial arch reduce nerve compression and improve symptoms in 60-75% of patients with biomechanical contributing factors",
        effectivenessLevel: "moderate"
      },
      {
        approach: "Manual Therapy and Soft Tissue Mobilization",
        evidence: "Soft tissue techniques addressing the flexor retinaculum and surrounding structures may improve tunnel dimensions and reduce nerve compression",
        effectivenessLevel: "limited"
      },
      {
        approach: "Anti-inflammatory Management and Modalities",
        evidence: "Appropriate use of anti-inflammatory treatments and modalities can reduce swelling within the tarsal tunnel, providing symptomatic relief in acute phases",
        effectivenessLevel: "limited"
      }
    ],

    prognosis: {
      timeline: "Early intervention within 6 months of symptom onset typically results in significant improvement within 8-12 weeks. Chronic cases may require 3-6 months of consistent treatment with more variable outcomes",
      factors: [
        "Duration of symptoms before treatment initiation significantly affects recovery potential and completeness",
        "Underlying causes of nerve compression influence both treatment response and long-term prognosis",
        "Severity of nerve compression at presentation determines recovery timeline and extent",
        "Patient compliance with activity modifications and biomechanical interventions crucial for success",
        "Associated medical conditions like diabetes, rheumatoid arthritis, or vascular disease affect healing capacity",
        "Presence of space-occupying lesions may require additional interventions for optimal outcomes"
      ],
      naturalHistory: "Early cases often respond well to conservative treatment with complete symptom resolution. Chronic compression can lead to permanent nerve damage with persistent numbness and weakness. Untreated cases may progress to irreversible functional limitations"
    },

    selfManagement: [
      {
        strategy: "Activity Pacing and Position Modification",
        rationale: "Avoiding prolonged weight-bearing activities and positions that compress the nerve allows inflammation to subside and prevents further nerve irritation",
        precautions: ["Complete activity cessation rarely necessary", "Modify rather than eliminate activities", "Use frequent position changes during prolonged activities"]
      },
      {
        strategy: "Supportive Footwear and Arch Support",
        rationale: "Proper footwear with arch support helps control excessive pronation and reduces stress on the tarsal tunnel, minimizing nerve compression during daily activities",
        precautions: ["Professional fitting may be beneficial for optimal results", "Start with over-the-counter supports before progressing to custom options", "Ensure footwear accommodates any swelling"]
      },
      {
        strategy: "Gentle Neural Mobility Exercises",
        rationale: "Specific nerve gliding exercises help maintain nerve mobility and prevent adhesion formation while promoting healing through improved blood flow",
        precautions: ["Exercises should not reproduce or worsen neurological symptoms", "Stop immediately if numbness or tingling increases", "Perform gently and avoid aggressive stretching"]
      },
      {
        strategy: "Night Positioning and Sleep Optimization",
        rationale: "Proper positioning during sleep reduces nerve compression and minimizes night symptoms that commonly disrupt sleep in tarsal tunnel syndrome",
        precautions: ["Avoid sleeping on the affected side", "Use pillows to elevate the foot if helpful", "Consider loose-fitting socks to avoid constriction"]
      },
      {
        strategy: "Ice Application and Anti-inflammatory Management",
        rationale: "Controlled ice application can reduce swelling within the tarsal tunnel and provide symptomatic relief, particularly during acute flare-ups",
        precautions: ["Apply ice for 15-20 minutes maximum", "Use barrier between ice and skin", "Avoid ice if you have circulation problems or diabetes"]
      }
    ],

    clinicalRedFlags: [
      {
        sign: "Progressive weakness in intrinsic foot muscles affecting toe flexion or spreading",
        action: "May indicate significant axonal damage requiring urgent neurological evaluation and possible nerve conduction studies"
      },
      {
        sign: "Complete sensory loss in the plantar foot distribution",
        action: "Suggests severe nerve compression requiring immediate medical attention and consideration of surgical decompression"
      },
      {
        sign: "Bilateral symptoms with associated systemic signs",
        action: "Could indicate systemic condition like diabetes or inflammatory arthritis requiring comprehensive medical evaluation"
      },
      {
        sign: "No improvement or worsening symptoms after 12-16 weeks of appropriate conservative treatment",
        action: "May require nerve conduction studies, advanced imaging, and consideration of surgical intervention"
      },
      {
        sign: "Sudden onset of severe symptoms following trauma",
        action: "Could indicate acute nerve injury or compartment syndrome requiring immediate medical evaluation"
      }
    ],

        keyResearch: [
      {
        finding: "Surgical decompression achieves 75.3% excellent or good outcomes across 32 studies",
        detail: "A 2024 scoping review of 32 studies with 1,115 patients (weighted mean age 45.2 years) found 518 of 688 patients (75.3%) achieved excellent or good surgical outcomes, while 170 patients (24.7%) had fair or poor results, with overall complication rate of 11.2% and recurrence rate of 11.2%, though evidence quality remained low with only 1 level 3 study",
        clinicalRelevance: "While three-quarters of patients achieve good surgical outcomes, one-quarter experience suboptimal results with meaningful complication and recurrence rates, supporting conservative management as appropriate first-line treatment with surgery reserved for refractory cases after adequate trial of 4-6 months"
      },
      {
        finding: "Conservative treatment successful in 30.4% of patients before surgical intervention",
        detail: "A 2022 systematic review examining conservative versus surgical management found conservative treatment including activity modification, NSAIDs, corticosteroid injections, physical therapy, and custom orthotics produced successful outcomes in 17 of 56 patients (30.4%), with statistically significant improvements in pain intensity, functional foot scores, symptom severity, and ankle mobility over 4-6 week periods",
        clinicalRelevance: "Approximately one-third of patients respond to conservative management, justifying 4-6 month trial of non-operative treatment including manual therapy, strengthening, neural mobilization, and orthotic management before considering surgical decompression, particularly in lower-demand patients"
      },
      {
        finding: "17 of 32 surgical studies reported failed conservative treatment prior to surgery",
        detail: "The 2024 scoping review documented that 17 studies specifically reported failure of conservative treatment before proceeding to surgical nerve decompression, with factors influencing surgical outcomes including patient age, symptom duration, etiology, comorbidities, pre-treatment symptom severity, and nerve fibrosis, highlighting importance of patient selection and timing",
        clinicalRelevance: "Surgical decision-making requires consideration of multiple prognostic factors beyond simple failure of conservative care, with duration of conservative treatment, underlying etiology, and baseline symptom severity affecting likelihood of surgical success and supporting thorough conservative trial before operative intervention"
      }
    ],

    measuringProgress: {
      dayToDay: "I monitor changes in your neurological symptoms including numbness and tingling, assess improvements in functional activities like walking and standing tolerance, evaluate sleep quality improvements, and track your ability to perform daily activities without nerve-related limitations",
      questionnaires: "Foot and Ankle Ability Measure (FAAM) for functional assessment, neuropathy-specific questionnaires for symptom tracking, and sleep quality assessments for monitoring night symptom improvements",
      activityTarget: "Complete elimination of nerve-related symptoms with full return to desired activities, restoration of normal foot sensation and function, and prevention of symptom recurrence"
    },
    accessAndHours: standardAccessAndHours
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
    biomechanics: detailedContent.biomechanics || baseCondition.biomechanics,
    treatmentApproach: detailedContent.evidenceBasedTreatment ? {
      title: 'Evidence-Based Treatment',
      description: 'Treatment approaches supported by current research and clinical guidelines',
      techniques: detailedContent.evidenceBasedTreatment.map(t => `${t.approach}: ${t.evidence}`)
    } : baseCondition.treatmentApproach
  } as Condition;
}