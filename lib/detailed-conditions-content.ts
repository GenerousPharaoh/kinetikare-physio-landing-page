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
    overview: `Low back pain isn't just "a sore back". It involves muscles, joints, discs, and nerves working together. As a CAMPT-certified physiotherapist, I look at how you move, your posture, and what you do every day to understand your specific pain.

I don't use generic treatments. I find what's actually causing YOUR pain, whether that's a disc issue, facet joint problem, muscle imbalance, or movement dysfunction. This specific approach has helped over 600 patients in Burlington get better.`,
    
    biomechanics: `Your lower back has five vertebrae separated by discs that act like shock absorbers. These work with surrounding muscles to support your upper body while letting you bend, twist, and move.

When something disrupts this system (poor posture, repetitive strain, sudden injury, or wear and tear), you feel pain. That pain is telling us something specific about how your spine is working. We need to understand the message, not just cover it up.`,
    
    commonMisconceptions: [
      "Rest is always best: Actually, too much bed rest often makes back pain worse. The right movements and exercises help you heal faster.",
      "Pain means damage: Not really. Sometimes severe pain comes from muscle spasms or minor issues that heal quickly with treatment.",
      "You need an MRI immediately: Most back pain gets better without imaging. A hands-on assessment often tells me more than scans.",
      "Once you have back pain, you'll always have it: Most people recover completely and learn how to prevent it from coming back.",
      "Bending and lifting are always bad: When done properly, these movements actually strengthen your back. Bad technique is what causes problems."
    ],
    
    treatmentApproach: {
      title: "My Evidence-Based Treatment Approach",
      description: "Every treatment plan is personalized based on your specific condition, goals, and lifestyle. Here's what you can expect:",
      techniques: [
        "Manual Therapy: Hands-on techniques to restore joint mobility and reduce muscle tension using CAMPT-certified methods",
        "Dry Needling: Targeted treatment for trigger points and muscle tension that contributes to your pain",
        "McKenzie Method: Specific exercises and positions that centralize your pain and promote healing",
        "Movement Retraining: Correcting faulty movement patterns that perpetuate your pain cycle",
        "Core Stabilization: Progressive exercises to build the deep stability your spine needs",
        "Pain Education: Understanding your pain reduces fear and accelerates recovery",
        "Ergonomic Assessment: Practical modifications to your work and home setup"
      ]
    },
    
    timeline: [
      {
        phase: "Initial Relief",
        duration: "1-2 weeks",
        description: "We'll work on reducing your pain, getting you moving better, and starting gentle exercises. Most patients feel much better in this phase."
      },
      {
        phase: "Restoration",
        duration: "2-4 weeks",
        description: "We'll gradually increase your exercises, build strength, and fix movement patterns. You'll feel more confident doing daily activities."
      },
      {
        phase: "Resilience",
        duration: "4-8 weeks",
        description: "Advanced strengthening to get you back to sports or work, plus strategies to keep your spine healthy long-term."
      }
    ],
    
    redFlags: [
      "Numbness or tingling that extends below your knee",
      "Progressive weakness in your leg or foot",
      "Loss of bowel or bladder control",
      "Severe night pain that doesn't improve with position changes",
      "Unexplained weight loss with back pain",
      "Fever accompanying your back pain"
    ],
    
    whenToSeek: [
      "Pain persisting beyond 2-3 days despite rest and over-the-counter remedies",
      "Pain that's affecting your sleep or daily activities",
      "Recurring episodes of back pain",
      "Pain following a specific injury or trauma",
      "Back pain with leg symptoms"
    ],
    
    relatedConditions: ['sciatica', 'disc-herniation', 'si-joint-dysfunction', 'piriformis-syndrome'],
    
    faqs: [
      {
        question: "How many sessions will I need?",
        answer: "Most patients see significant improvement within 4-6 sessions. However, this varies based on your specific condition, how long you've had it, and your recovery goals. I'll give you a clearer timeline after your initial assessment."
      },
      {
        question: "Can I still exercise with back pain?",
        answer: "Yes, but it needs to be the RIGHT exercise. I'll guide you through safe movements that actually help your recovery. Many patients are surprised to learn that complete rest often delays healing."
      },
      {
        question: "Do you direct bill insurance?",
        answer: "Yes! I offer direct billing to most major insurance providers, making your treatment as convenient as possible. We'll verify your coverage during your first visit."
      },
      {
        question: "What makes your approach different?",
        answer: "My CAMPT certification means I use advanced manual therapy techniques backed by the latest research. Combined with dry needling and personalized exercise prescription, I address not just your pain, but what's causing it."
      }
    ]
  },

  'sciatica': {
    overview: `Sciatica isn't actually a diagnosis. It's a symptom telling us your sciatic nerve is irritated. That shooting pain down your leg, the numbness, the tingling? Your nerve is asking for help. I've treated hundreds of sciatica cases in Burlington and know how much it can limit your life.

The real question isn't "do you have sciatica?" but "what's causing it?" I've seen disc herniations, piriformis syndrome, stenosis, and other causes. Each needs a different treatment approach. That's why generic treatments often don't work.`,
    
    biomechanics: `Your sciatic nerve is the largest nerve in your body. It runs from your lower back through your buttock and down your leg. When something presses on or irritates this nerve (bulging disc, tight piriformis muscle, inflamed facet joint), you get sciatica symptoms.

Where and how you feel the pain tells me where the problem is. Sharp, electric pain often means disc involvement. Deep, achy pain might mean muscle compression. These details guide how I treat you.`,
    
    commonMisconceptions: [
      "Surgery is inevitable: Over 90% of sciatica cases get better with physiotherapy. Surgery is rarely needed.",
      "The pain is where the problem is: Leg pain doesn't mean your leg is injured. The problem is usually in your lower back.",
      "Sciatica is permanent: Most people recover completely and don't have it come back.",
      "All sciatica is from disc problems: Many things can irritate the sciatic nerve, not just discs.",
      "Stretching always helps: Wrong stretches can make it worse. You need specific exercises for your condition."
    ],
    
    treatmentApproach: {
      title: "Targeted Sciatica Treatment Protocol",
      description: "My approach addresses both immediate relief and long-term resolution:",
      techniques: [
        "Neural Mobilization: Gentle techniques to free up the sciatic nerve and reduce sensitivity",
        "Spinal Decompression: Manual therapy to reduce disc pressure and create space for the nerve",
        "Dry Needling: Precisely targeting muscles that may be compressing the nerve",
        "McKenzie Extensions: Specific positions that centralize leg pain back to the spine",
        "Core Stabilization: Building support to prevent future nerve irritation",
        "Posture Correction: Addressing the positions that aggravate your nerve",
        "Nerve Gliding Exercises: Gentle movements to improve nerve mobility and reduce adhesions"
      ]
    },
    
    timeline: [
      {
        phase: "Acute Management",
        duration: "1-2 weeks",
        description: "We'll work on bringing your leg pain back toward your spine (centralizing) and calming down the nerve."
      },
      {
        phase: "Progressive Loading",
        duration: "2-6 weeks",
        description: "We'll gradually increase your activity while watching how your nerve responds. Building strength without flaring things up."
      },
      {
        phase: "Return to Function",
        duration: "4-12 weeks",
        description: "Getting you back to everything you want to do and making sure it doesn't come back."
      }
    ],
    
    redFlags: [
      "Progressive muscle weakness or foot drop",
      "Complete numbness in the saddle area",
      "Loss of bowel or bladder control",
      "Severe, unrelenting pain despite position changes",
      "Symptoms in both legs simultaneously"
    ],
    
    whenToSeek: [
      "Leg pain that persists beyond a few days",
      "Numbness or tingling that's spreading",
      "Difficulty walking or standing due to leg symptoms",
      "Pain that's affecting your sleep",
      "Any weakness in your leg or foot"
    ],
    
    relatedConditions: ['low-back-pain', 'disc-herniation', 'piriformis-syndrome', 'spinal-stenosis'],
    
    faqs: [
      {
        question: "How long until my leg pain goes away?",
        answer: "Most patients experience significant reduction in leg pain within 2-4 weeks of targeted treatment. Complete resolution typically occurs within 6-12 weeks, though this varies based on the underlying cause and severity."
      },
      {
        question: "Should I get an MRI?",
        answer: "MRIs aren't always necessary and can sometimes show findings that aren't actually causing your symptoms. I'll perform specific tests to determine if imaging would change our treatment approach."
      },
      {
        question: "Can I prevent sciatica from coming back?",
        answer: "Absolutely. Once we resolve your current symptoms, I'll teach you specific exercises and movement strategies to maintain spine health and prevent recurrence. Most of my patients remain symptom-free long-term."
      },
      {
        question: "Is walking good for sciatica?",
        answer: "Usually yes, but it depends on your specific condition. Short, frequent walks often help, while prolonged walking might aggravate symptoms. I'll guide you on the right amount and intensity for your situation."
      }
    ]
  },

  'rotator-cuff-injuries': {
    overview: `Your rotator cuff is actually four muscles working together to control your shoulder. When these muscles are injured (suddenly or over time), simple things like reaching overhead or sleeping on your side become painful.

In my Burlington practice, I've treated everyone from weekend athletes with tears to office workers with chronic shoulder pain. Success comes from looking at your entire shoulder complex, including your shoulder blade, neck, and upper back, not just the rotator cuff alone.`,
    
    biomechanics: `The four rotator cuff muscles (supraspinatus, infraspinatus, teres minor, and subscapularis) keep your arm bone centered in the socket while allowing you to move your arm freely. They're small muscles but they work constantly.

When these muscles are overloaded, pinched, or torn, your shoulder mechanics change. Other muscles try to help out, which creates bad movement patterns that keep the problem going. That's why just treating where it hurts doesn't usually fix the problem.`,
    
    commonMisconceptions: [
      "A tear always needs surgery: Many partial and even complete tears get better with physiotherapy.",
      "Complete rest is necessary: The right exercises actually help healing. Complete rest makes you stiff and weak.",
      "Rotator cuff problems are just for athletes: Office workers and trades people get them just as often.",
      "Pain equals damage: You can have severe pain from minor issues, and some tears barely hurt.",
      "Cortisone injections are the solution: They provide temporary relief with small effect sizes. They don't address the underlying mechanical problem."
    ],
    
    treatmentApproach: {
      title: "Comprehensive Shoulder Rehabilitation",
      description: "My rotator cuff treatment protocol addresses all aspects of shoulder function:",
      techniques: [
        "Manual Therapy: Joint mobilizations to restore proper shoulder and scapular mechanics",
        "Dry Needling: Targeting trigger points in the rotator cuff and surrounding muscles",
        "Scapular Stabilization: Retraining the shoulder blade muscles for optimal positioning",
        "Progressive Loading: Carefully graded exercises to stimulate tendon healing",
        "Kinetic Chain Training: Addressing contributions from the core and lower body",
        "Movement Analysis: Correcting faulty patterns in work and sport activities",
        "Pain-Free Range Exercises: Maintaining mobility while respecting tissue healing"
      ]
    },
    
    timeline: [
      {
        phase: "Pain Control & Protection",
        duration: "1-3 weeks",
        description: "Reduce inflammation, get your shoulder moving without pain, and start gentle strengthening."
      },
      {
        phase: "Progressive Strengthening",
        duration: "3-8 weeks",
        description: "Gradually strengthen your rotator cuff with focus on doing exercises correctly."
      },
      {
        phase: "Functional Integration",
        duration: "6-12 weeks",
        description: "Training specific to your sport or work, making your shoulder strong for the long term."
      }
    ],
    
    redFlags: [
      "Complete inability to lift your arm (may indicate complete tear)",
      "Severe weakness that doesn't improve after a few days",
      "Signs of infection (fever, warmth, redness)",
      "Severe night pain with inability to find comfortable position",
      "Rapid onset of significant swelling"
    ],
    
    whenToSeek: [
      "Shoulder pain persisting beyond a week",
      "Difficulty with overhead activities",
      "Night pain affecting your sleep",
      "Weakness when lifting or rotating your arm",
      "Clicking or catching sensations with movement"
    ],
    
    relatedConditions: ['shoulder-impingement', 'frozen-shoulder', 'shoulder-bursitis', 'ac-joint-sprains'],
    
    faqs: [
      {
        question: "How do I know if my rotator cuff is torn?",
        answer: "Specific clinical tests can indicate a tear with high accuracy. During your assessment, I'll perform these tests and determine if imaging is necessary. Remember, even if there is a tear, many respond excellently to physiotherapy."
      },
      {
        question: "Can I still exercise with a rotator cuff injury?",
        answer: "Yes, but exercises need to be carefully selected and modified. I'll show you how to maintain fitness while protecting your shoulder. Many of my patients are surprised by how much they can still do safely."
      },
      {
        question: "Why does my shoulder hurt more at night?",
        answer: "Night pain is common with rotator cuff issues due to positioning and reduced blood flow when lying down. I'll teach you specific sleeping positions and provide strategies to improve your night comfort while healing."
      },
      {
        question: "How long before I can return to sports?",
        answer: "This varies greatly depending on your sport and injury severity. Generally, 8-12 weeks for return to non-overhead sports, and 12-16 weeks for overhead athletes. I'll guide you through a graduated return-to-sport protocol."
      }
    ]
  },

  'knee-pain-patellofemoral': {
    overview: `Patellofemoral pain syndrome, often called "runner's knee," is one of the most common knee problems I treat. But here's the thing: it's rarely just about the knee. Your kneecap (patella) slides in a groove on your thighbone. When this tracking goes off, you get pain.

In my Burlington practice, I've seen this in marathon runners and desk workers who just climbed too many stairs. Successful treatment isn't just about strengthening your quads. We need to look at everything from your feet to your hips that affects how your knee works.`,
    
    biomechanics: `Your kneecap acts as a fulcrum to increase the mechanical advantage of your quadriceps muscle. When forces become imbalanced (weak hips, tight IT band, poor foot mechanics), the kneecap doesn't track properly and you get pain.

Generic "knee exercises" often fail because they don't address what's actually causing the tracking problem. You end up just covering up symptoms instead of fixing the real issue.`,
    
    commonMisconceptions: [
      "It only affects runners: Research shows office workers and people with sedentary lifestyles develop it frequently due to muscle imbalances.",
      "Rest will cure it: Without fixing the underlying issues, pain comes back when you're active again.",
      "It's just growing pains in young athletes: Dismissing it can lead to chronic problems.",
      "Knee braces are the solution: They might help temporarily but don't fix the mechanical problems.",
      "Surgery is often needed: Conservative treatment is effective in most cases, with surgery rarely required."
    ],
    
    treatmentApproach: {
      title: "Comprehensive Knee Rehabilitation Program",
      description: "My approach addresses all contributing factors to your knee pain:",
      techniques: [
        "Biomechanical Assessment: Full lower body analysis to identify contributing factors",
        "Hip Strengthening: Targeting gluteal muscles that control knee alignment",
        "VMO Activation: Specific exercises for the inner quad muscle that stabilizes the patella",
        "Manual Therapy: Joint mobilizations and soft tissue work to improve mobility",
        "Taping Techniques: Strategic taping to improve patellar tracking during recovery",
        "Gait Retraining: Correcting movement patterns that stress the knee",
        "Load Management: Graduated return to activity protocol"
      ]
    },
    
    timeline: [
      {
        phase: "Pain Reduction",
        duration: "1-2 weeks",
        description: "Modify your activities, manage pain, and start corrective exercises."
      },
      {
        phase: "Strength Building",
        duration: "3-6 weeks",
        description: "Build strength in your hip and knee muscles with focus on good form."
      },
      {
        phase: "Functional Training",
        duration: "6-10 weeks",
        description: "Training specific to your sport or activities, gradually getting back to everything."
      }
    ],
    
    whenToSeek: [
      "Knee pain during or after activities like running, squatting, or stairs",
      "Pain when sitting with bent knees for extended periods",
      "Feeling of instability or giving way",
      "Swelling around the kneecap",
      "Grinding or clicking sensations"
    ],
    
    relatedConditions: ['it-band-syndrome', 'knee-ligament-injuries', 'meniscal-injuries'],
    
    faqs: [
      {
        question: "Can I still run with patellofemoral pain?",
        answer: "Often yes, but with modifications. I'll help you adjust your training load, improve your running mechanics, and provide exercises to do alongside your running. Complete rest is rarely necessary."
      },
      {
        question: "Why does sitting make my knee hurt?",
        answer: "Prolonged knee flexion increases pressure on the patellofemoral joint. This 'movie-goer's sign' is classic for this condition. I'll teach you strategies to manage this and exercises to reduce sensitivity."
      }
    ]
  },

  'plantar-fasciitis': {
    overview: `That sharp, stabbing heel pain when you first get up in the morning? That's likely plantar fasciitis, one of the most common foot problems I treat. But it's not just about your foot. It's about how your whole body moves when you walk and run.

After treating hundreds of cases in Burlington, I know that stretching your calf and rolling a tennis ball under your foot isn't enough. We need to figure out why your plantar fascia got overloaded and fix that.`,
    
    biomechanics: `Your plantar fascia is a thick band of tissue that acts like a spring with each step. It supports your arch and helps push you forward. When it gets overloaded (from doing too much too fast, bad shoes, or problems higher up in your body), it develops tiny tears and gets inflamed.

Morning pain happens because the fascia tightens overnight. Those first steps stretch the irritated tissue again. That's why it often feels better once you're moving but hurts again after you rest.`,
    
    commonMisconceptions: [
      "It's caused by heel spurs: Most people with heel spurs have no pain, and many with plantar fasciitis have no spurs.",
      "You need custom orthotics: While some benefit from orthotics, research shows many patients recover successfully with exercise therapy and footwear modifications alone.",
      "Complete rest is necessary: The right amount of loading actually helps healing.",
      "It only affects runners: Anyone who's on their feet a lot can get it.",
      "Cortisone injections are the best treatment: They give temporary relief but don't fix the cause."
    ],
    
    treatmentApproach: {
      title: "Evidence-Based Plantar Fasciitis Protocol",
      description: "Comprehensive treatment addressing both symptoms and causes:",
      techniques: [
        "Load Management: Progressive loading program to stimulate tissue healing",
        "Manual Therapy: Soft tissue mobilization and joint mobilizations",
        "Shockwave Therapy: When appropriate, to stimulate healing in chronic cases",
        "Strengthening Program: Intrinsic foot muscles and calf complex",
        "Biomechanical Correction: Addressing contributing factors from foot to hip",
        "Taping Strategies: Support techniques for symptom relief during healing",
        "Footwear Education: Guidance on appropriate shoes for your foot type"
      ]
    },
    
    timeline: [
      {
        phase: "Acute Management",
        duration: "1-3 weeks",
        description: "Reduce pain, modify activities, and start therapeutic exercises."
      },
      {
        phase: "Progressive Loading",
        duration: "3-8 weeks",
        description: "Build strength gradually while tracking your morning pain."
      },
      {
        phase: "Return to Activity",
        duration: "8-12 weeks",
        description: "Get back to all your activities with strategies to prevent it coming back."
      }
    ],
    
    whenToSeek: [
      "Heel pain lasting more than a few days",
      "Sharp pain with first steps in the morning",
      "Pain that worsens after activity",
      "Limping or altered walking pattern",
      "Heel pain affecting daily activities"
    ],
    
    relatedConditions: ['achilles-tendinopathy', 'ankle-sprains', 'shin-splints'],
    
    faqs: [
      {
        question: "How long does plantar fasciitis take to heal?",
        answer: "With early intervention, many recover within 6-8 weeks. Most patients see significant improvement within 6-8 weeks of proper treatment, with complete resolution typically occurring within 3-6 months. Some cases may take up to 12 months. The key is consistency with your exercise program and addressing contributing factors."
      },
      {
        question: "Should I stop all activity?",
        answer: "No! Complete rest often delays healing. I'll help you modify activities to maintain fitness while allowing healing. Swimming, cycling, and specific strength training can usually continue."
      }
    ]
  },

  'neck-pain': {
    overview: `Neck pain involves joints, muscles, nerves, and often your shoulders and upper back too. Whether you have tech neck from computer work or whiplash from an accident, I need to understand your specific pain pattern to treat it effectively.

I see how neck pain affects everything: your sleep, work productivity, even checking your blind spot while driving. My approach doesn't just give temporary relief. I find and fix what's actually causing your pain.`,
    
    biomechanics: `Your neck is very mobile but has to support your head (about 10-12 pounds) all day. Modern life with screens, driving, and desk work puts huge demands on your neck. Forward head posture can increase the load on your neck muscles significantly, causing fatigue, tension, and pain.

Because your neck contains important structures including vertebral arteries, nerves, and the spinal cord, neck problems can cause symptoms elsewhere like headaches, dizziness, or arm tingling. Vertebral artery dissection, though rare, is a serious concern requiring immediate medical attention.`,
    
    commonMisconceptions: [
      "Neck pain is just part of aging: Most neck pain can be treated at any age.",
      "Cracking your neck helps: This can actually make your neck unstable and worsen problems.",
      "Whiplash always shows on X-rays: Soft tissue injuries often don't show up on imaging.",
      "Neck collars are helpful: Using them too long weakens muscles and slows recovery.",
      "Poor posture is the only cause: Posture matters, but many things contribute to neck pain."
    ],
    
    treatmentApproach: {
      title: "Integrated Neck Pain Treatment",
      description: "Multi-faceted approach for lasting relief:",
      techniques: [
        "Cervical Manual Therapy: Specific mobilizations to restore joint movement",
        "Dry Needling: Targeting deep neck muscles and trigger points",
        "Postural Retraining: Correcting forward head posture and shoulder positioning",
        "Deep Neck Flexor Training: Strengthening the stabilizing muscles",
        "Thoracic Mobility: Addressing stiffness in the upper back that affects the neck",
        "Ergonomic Assessment: Workstation setup optimization",
        "Neural Mobilization: For cases with nerve involvement"
      ]
    },
    
    timeline: [
      {
        phase: "Symptom Relief",
        duration: "1-2 weeks",
        description: "Reduce pain and muscle tension, get your neck moving better."
      },
      {
        phase: "Restoration",
        duration: "2-6 weeks",
        description: "Get full movement back, strengthen muscles, fix your posture."
      },
      {
        phase: "Prevention",
        duration: "6-8 weeks",
        description: "Make your neck stronger to prevent future problems."
      }
    ],
    
    whenToSeek: [
      "Neck pain persisting beyond a few days",
      "Pain radiating to shoulders or arms",
      "Headaches associated with neck pain",
      "Numbness or tingling in arms or hands",
      "Neck stiffness limiting daily activities"
    ],
    
    relatedConditions: ['headaches-migraines', 'shoulder-impingement', 'postural-dysfunction'],
    
    faqs: [
      {
        question: "Is my neck pain from my pillow?",
        answer: "While pillows can contribute, they're rarely the sole cause. I'll assess your sleeping position and recommend appropriate support, but we'll also address the underlying mechanical issues causing your sensitivity to pillow changes."
      },
      {
        question: "Can neck problems cause headaches?",
        answer: "Absolutely. Cervicogenic headaches originate from the neck and are very responsive to physiotherapy. However, sudden severe headaches, especially after neck manipulation or trauma, require immediate medical evaluation. I'll perform specific tests to determine if your headaches are neck-related."
      }
    ]
  },

  'tennis-elbow': {
    overview: `Tennis elbow (lateral epicondylitis) has a misleading name. Less than 5% of my patients with this actually play tennis. Whether you're a painter, office worker, or weekend gardener, this condition can make holding a coffee cup painful.

Tennis elbow is challenging because the tendons involved have poor blood supply, so they heal slowly. Waiting it out often means months of unnecessary pain. With proper treatment, we can speed up healing and get you back to normal much faster.`,
    
    biomechanics: `Your forearm extensor muscles attach at a small point on the outside of your elbow. These muscles control wrist extension and grip. When overloaded by repetitive activities or doing too much too fast, the tendon develops tiny tears and starts to break down.

Research shows this isn't really inflammation but degeneration of the tendon. That's why anti-inflammatories don't help much. We need to stimulate the tendon to rebuild properly through the right exercises.`,
    
    commonMisconceptions: [
      "Only tennis players get it: Most cases come from work or daily activities.",
      "Complete rest is the cure: Evidence shows this actually weakens the tendon. Progressive loading through eccentric exercises is more effective.",
      "Braces fix the problem: They help with symptoms but don't heal the tendon.",
      "Cortisone injections are the best treatment: Research shows they may provide short-term relief but can potentially delay healing and weaken the tendon structure.",
      "Surgery is often necessary: Conservative treatment is successful in most cases, with surgery rarely required."
    ],
    
    treatmentApproach: {
      title: "Progressive Tennis Elbow Rehabilitation",
      description: "Evidence-based protocol for tendon healing:",
      techniques: [
        "Eccentric Strengthening: Specific loading program to stimulate tendon remodeling",
        "Manual Therapy: Mobilizations to address joint stiffness and muscle tension",
        "Dry Needling: Targeting the extensor muscles and trigger points",
        "Nerve Mobilization: Addressing any radial nerve irritation",
        "Grip Retraining: Correcting grip patterns that overload the tendon",
        "Kinetic Chain Assessment: Evaluating shoulder and wrist contributions",
        "Activity Modification: Temporary adjustments to allow healing while maintaining function"
      ]
    },
    
    timeline: [
      {
        phase: "Load Management",
        duration: "1-3 weeks",
        description: "Reduce activities that hurt, start isometric exercises, manage pain."
      },
      {
        phase: "Progressive Loading",
        duration: "3-8 weeks",
        description: "Build strength gradually while monitoring your symptoms."
      },
      {
        phase: "Functional Return",
        duration: "8-12 weeks",
        description: "Get back to all activities with good technique to prevent it coming back."
      }
    ],
    
    whenToSeek: [
      "Elbow pain persisting more than a week",
      "Pain with gripping or lifting",
      "Weakness in grip strength",
      "Pain radiating down the forearm",
      "Difficulty with daily activities"
    ],
    
    relatedConditions: ['golfers-elbow', 'carpal-tunnel-syndrome', 'de-quervains-tenosynovitis'],
    
    faqs: [
      {
        question: "Can I still work with tennis elbow?",
        answer: "Usually yes, with modifications. I'll show you ergonomic adjustments and provide strategies to manage symptoms while healing. Complete work cessation is rarely necessary and can actually delay recovery."
      },
      {
        question: "Why isn't the brace helping?",
        answer: "Braces redistribute load but don't heal the tendon. They're useful for symptom management during activities but should be combined with a proper rehabilitation program for actual healing."
      }
    ]
  },

  'frozen-shoulder': {
    overview: `Frozen shoulder (adhesive capsulitis) is one of the most frustrating conditions you can get. The capsule around your shoulder joint becomes thick, tight, and inflamed, limiting movement and causing significant pain. The timeline can be unpredictable, but with the right treatment, we can speed up recovery significantly.

I've helped many Burlington residents through frozen shoulder. While each case is different, understanding the three phases (freezing, frozen, and thawing) helps set realistic expectations and choose the right treatment.`,
    
    biomechanics: `Your shoulder joint is surrounded by a capsule, like a flexible bag holding the joint together. In frozen shoulder, this capsule gets inflamed then progressively tightens, forming adhesions that restrict movement. It goes through three phases: freezing (painful), frozen (stiff), and thawing (recovery).

We don't always know what triggers it, but certain things increase your risk: diabetes, thyroid problems, keeping your shoulder still too long, and being a woman between 40-60 years old.`,
    
    commonMisconceptions: [
      "It will resolve on its own quickly: Without treatment, frozen shoulder typically lasts 1-3 years with an average of 30 months.",
      "Aggressive stretching speeds recovery: This can make inflammation worse early on.",
      "Surgery is the only solution: Most cases respond well to physiotherapy.",
      "It's just a stiff shoulder: Frozen shoulder is a specific condition that needs specific treatment.",
      "Once it's better, it won't return: It rarely comes back, but can affect the other shoulder."
    ],
    
    treatmentApproach: {
      title: "Phase-Specific Frozen Shoulder Treatment",
      description: "Treatment tailored to your current phase:",
      techniques: [
        "Phase-Appropriate Mobilization: Gentle techniques in freezing phase, progressive in frozen phase",
        "Capsular Stretching: Specific stretches targeting capsular restrictions",
        "Joint Mobilization: Manual therapy to improve joint mechanics",
        "Modalities for Pain: Using appropriate tools for pain management",
        "Home Exercise Program: Daily exercises crucial for maintaining gains",
        "Corticosteroid Injection Referral: When appropriate, can significantly help in freezing phase",
        "Movement Retraining: Restoring normal shoulder rhythm"
      ]
    },
    
    timeline: [
      {
        phase: "Freezing Phase",
        duration: "6 weeks to 9 months",
        description: "Manage pain and keep moving within your comfort zone."
      },
      {
        phase: "Frozen Phase",
        duration: "4-12 months",
        description: "Gradually increase mobilization and stretching to get movement back."
      },
      {
        phase: "Thawing Phase",
        duration: "5-24 months",
        description: "Build strength and restore function as movement comes back."
      }
    ],
    
    whenToSeek: [
      "Progressive shoulder stiffness",
      "Night pain affecting sleep",
      "Inability to reach behind your back",
      "Difficulty with overhead activities",
      "Shoulder pain without specific injury"
    ],
    
    relatedConditions: ['rotator-cuff-injuries', 'shoulder-impingement', 'shoulder-bursitis'],
    
    faqs: [
      {
        question: "How long will my frozen shoulder last?",
        answer: "With proper treatment, most patients see significant improvement within 6-9 months, much faster than the natural 1-3 year course (average 30 months). Studies show 89.5% of patients respond well to conservative management. The key is consistent treatment appropriate to your current phase."
      },
      {
        question: "Should I push through the pain?",
        answer: "No, especially in the freezing phase. Respecting pain limits while maintaining gentle movement is crucial. As you progress to the frozen phase, we'll gradually increase stretch intensity based on your tolerance."
      }
    ]
  },

  'hip-pain': {
    overview: `Hip pain is often a detective story. The hip joint is deep, surrounded by powerful muscles, and can send pain to your groin, thigh, or even knee. What you call "hip pain" might actually be coming from your lower back, SI joint, or surrounding soft tissues. Proper assessment is crucial. Treating the wrong structure wastes time and delays recovery.

In my Burlington practice, I see runners with hip impingement, seniors with arthritis, new mothers with hip bursitis. Each needs a different approach, but all benefit from understanding how hip mechanics affect the entire lower body.`,
    
    biomechanics: `Your hip is a ball-and-socket joint that needs to be both stable and mobile. It bears 3-5 times your body weight when walking and up to 8 times when running. The surrounding muscles (glutes, hip flexors, deep rotators) must work together perfectly.

When this system breaks down from overuse, injury, or wear and tear, your hip can't transfer forces properly. This causes pain and problems not just at the hip but throughout your leg and back.`,
    
    commonMisconceptions: [
      "Hip pain always means arthritis: Many hip problems are muscular or mechanical, not arthritic.",
      "Hip replacement is inevitable: Many patients avoid surgery with proper treatment.",
      "Rest is the best treatment: The right movement and strengthening usually work better.",
      "Hip problems only affect older adults: Young athletes often get hip impingement and labral tears.",
      "The pain location indicates the problem: Hip joint problems often cause groin pain, not side hip pain."
    ],
    
    treatmentApproach: {
      title: "Comprehensive Hip Rehabilitation",
      description: "Multi-modal approach to hip pain:",
      techniques: [
        "Hip Joint Mobilization: Manual therapy to improve joint mechanics",
        "Muscle Energy Techniques: Addressing muscle imbalances around the hip",
        "Progressive Strengthening: Targeting hip stabilizers and movers",
        "Dry Needling: For trigger points in deep hip muscles",
        "Movement Pattern Correction: Retraining squats, lunges, and gait",
        "Core Integration: Connecting hip function with core stability",
        "Load Management: Graduated return to activities"
      ]
    },
    
    timeline: [
      {
        phase: "Assessment & Relief",
        duration: "1-3 weeks",
        description: "Find the pain source, reduce symptoms, start the right exercises."
      },
      {
        phase: "Mobility & Strength",
        duration: "3-8 weeks",
        description: "Get your movement back, strengthen key muscles."
      },
      {
        phase: "Function & Performance",
        duration: "6-12 weeks",
        description: "Get back to sports and activities with better movement patterns."
      }
    ],
    
    whenToSeek: [
      "Hip or groin pain lasting more than a few days",
      "Difficulty with stairs or getting in/out of cars",
      "Limping or altered walking pattern",
      "Night pain affecting sleep",
      "Clicking or catching sensations in the hip"
    ],
    
    relatedConditions: ['piriformis-syndrome', 'si-joint-dysfunction', 'groin-strains', 'low-back-pain'],
    
    faqs: [
      {
        question: "Is my hip pain actually from my back?",
        answer: "It's possible. Hip and back problems often coexist and can mimic each other. During your assessment, I'll perform specific tests to differentiate between hip joint, back, and soft tissue sources of pain."
      },
      {
        question: "Can hip problems be prevented?",
        answer: "Many hip issues can be prevented or minimized through proper strength training, flexibility work, and movement mechanics. I'll teach you specific exercises based on your risk factors and activity level."
      }
    ]
  },

  'disc-herniation': {
    overview: `Getting diagnosed with a disc herniation can be scary, but here's the truth: many people with herniations on MRI have no pain, and most painful herniations heal without surgery. What matters isn't that you have a herniation, but how we manage it and help it heal.

Your discs have a tough outer layer (annulus fibrosus) and gel-like center (nucleus pulposus), designed to absorb shock and allow spine movement. When the outer layer weakens and the inner gel pushes through, that's a herniation. Evidence shows most herniations naturally reabsorb over time and aren't necessarily permanent.`,
    
    biomechanics: `Think of your disc like a jelly donut. The outer ring (annulus) contains the inner gel (nucleus). A herniation happens when the gel pushes through a weak spot in the outer ring. This can irritate nearby nerves, causing pain, numbness, or weakness.

The size and location of the herniation matter less than you'd think. Small herniations can cause severe symptoms if they touch a nerve, while large ones might cause no symptoms. That's why I treat based on your symptoms and function, not just MRI findings.`,
    
    commonMisconceptions: [
      "Disc herniations require surgery: Studies show over 90% improve with conservative treatment. Surgery is typically only considered after 6-12 weeks of failed conservative treatment or with severe neurological symptoms.",
      "You must avoid bending forever: Proper bending is safe and good for disc health.",
      "Bed rest is essential: Too much rest actually delays healing and makes you weaker.",
      "Once herniated, always problematic: Most herniations naturally reabsorb over 6-12 months.",
      "Heavy lifting caused it: Research shows it's often repetitive light activities or sustained postures rather than single heavy lifts that cause problems."
    ],
    
    treatmentApproach: {
      title: "Active Disc Herniation Management",
      description: "Evidence-based approach for optimal healing:",
      techniques: [
        "McKenzie Method: Specific exercises to centralize symptoms and reduce disc pressure",
        "Manual Therapy: Gentle mobilizations to improve spinal mechanics",
        "Neural Mobilization: Techniques to reduce nerve sensitivity",
        "Core Stabilization: Building support to protect the healing disc",
        "Posture Education: Positions that promote disc healing",
        "Load Management: Graduated return to activities",
        "Pain Science Education: Understanding pain to reduce fear and improve outcomes"
      ]
    },
    
    timeline: [
      {
        phase: "Acute Management",
        duration: "1-2 weeks",
        description: "Calm down the nerve, bring symptoms back toward your spine, establish safe movements."
      },
      {
        phase: "Recovery Phase",
        duration: "2-8 weeks",
        description: "Gradually increase loading and activity, build strength."
      },
      {
        phase: "Remodeling Phase",
        duration: "8-12 weeks",
        description: "Get back to everything you want to do, prevent future problems."
      }
    ],
    
    whenToSeek: [
      "Back pain with leg symptoms",
      "Numbness or tingling in legs or feet",
      "Weakness in leg muscles",
      "Pain that worsens with sitting",
      "Severe back pain limiting daily activities"
    ],
    
    redFlags: [
      "Loss of bowel or bladder control (cauda equina syndrome - seek emergency care immediately)",
      "Progressive leg weakness",
      "Numbness in the saddle/groin area (seek emergency care immediately)",
      "Recent onset (within 2 weeks) of difficulty initiating urination",
      "Severe, unrelenting pain",
      "Symptoms in both legs simultaneously"
    ],
    
    relatedConditions: ['low-back-pain', 'sciatica', 'spinal-stenosis', 'degenerative-disc-disease'],
    
    faqs: [
      {
        question: "Will my disc heal completely?",
        answer: "Yes, research shows most herniations naturally reabsorb over 6-12 months. More importantly, symptoms typically resolve much faster with proper treatment. The goal isn't a perfect MRI but a pain-free, functional life."
      },
      {
        question: "Can I avoid surgery?",
        answer: "In most cases, yes. Clinical guidelines indicate surgery is typically only considered after 6-12 weeks of failed conservative treatment or in presence of severe neurological symptoms (cauda equina syndrome, progressive weakness). Studies show over 90% improve with conservative care."
      },
      {
        question: "Is it safe to exercise with a disc herniation?",
        answer: "Not only safe but essential when properly prescribed! Evidence shows the right exercises promote healing, reduce pain, and prevent recurrence. I'll guide you through a progressive program that respects your healing phases while building resilience."
      }
    ]
  },

  'it-band-syndrome': {
    overview: `IT band syndrome is that sharp pain on the outside of your knee that runners and cyclists know too well. Your IT band is a thick piece of tissue running from your hip to your knee. When it gets irritated where it crosses the knee joint, every step can hurt.

I've helped many runners in Burlington and Waterdown get back to their training. The trick isn't just treating the knee. We need to look at your hip strength, running form, and training habits to stop this from coming back.`,
    
    biomechanics: `Your IT band acts like a stabilizer for your knee during running and cycling. When your hip muscles (especially gluteus medius) are weak, your IT band has to work overtime. Add in sudden training increases, poor running mechanics, or worn-out shoes, and you get friction and inflammation at the knee.

The pain you feel isn't actually the IT band tearing or being "tight" in the traditional sense. It's irritation where the band crosses bone prominences at your knee. That's why foam rolling alone rarely fixes it.`,
    
    commonMisconceptions: [
      "You can stretch your IT band: The IT band is incredibly strong connective tissue that doesn't really stretch. You're actually stretching the muscles attached to it.",
      "Foam rolling the IT band fixes it: While it might feel good temporarily, you need to address hip weakness and running mechanics.",
      "Rest alone will cure it: Without fixing the cause, it usually comes back when you return to activity.",
      "It's just a knee problem: The root cause is usually at the hip, not the knee.",
      "You need to stop running forever: Most runners return to full training with proper rehab."
    ],
    
    treatmentApproach: {
      title: "Runner-Specific IT Band Treatment",
      description: "Getting you back to pain-free running:",
      techniques: [
        "Hip Strengthening: Targeting gluteus medius and hip external rotators to reduce IT band stress",
        "Running Gait Analysis: Identifying and correcting mechanical issues that overload the IT band",
        "Manual Therapy: Addressing restrictions in hip and knee joints",
        "Load Management: Adjusting training volume and intensity during recovery",
        "Cadence Training: Optimizing step rate to reduce impact forces",
        "Cross-Training Options: Maintaining fitness while tissues heal",
        "Progressive Return to Running: Structured program to safely build back mileage"
      ]
    },
    
    timeline: [
      {
        phase: "Pain Reduction",
        duration: "1-2 weeks",
        description: "Activity modification, manual therapy, and starting hip strengthening. You might need to reduce or pause running temporarily."
      },
      {
        phase: "Building Strength",
        duration: "2-4 weeks",
        description: "Progressive hip and core strengthening while gradually returning to running with modified volume."
      },
      {
        phase: "Return to Training",
        duration: "4-8 weeks",
        description: "Gradual return to full training with continued strength work and form corrections."
      }
    ],
    
    redFlags: [
      "Knee giving way or buckling",
      "Significant swelling around the knee",
      "Locking or catching sensation in the knee",
      "Pain at rest or night pain",
      "Numbness or tingling in the leg"
    ],
    
    whenToSeek: [
      "Sharp lateral knee pain during or after running",
      "Pain going down stairs or hills",
      "Pain that forces you to stop running",
      "Symptoms persisting despite 1-2 weeks of rest",
      "Recurring episodes of IT band pain"
    ],
    
    relatedConditions: ['knee-pain-patellofemoral', 'hip-pain', 'piriformis-syndrome'],
    
    faqs: [
      {
        question: "How long until I can run again?",
        answer: "Many runners can start a gradual return within 2-3 weeks if we catch it early. Complete return to previous mileage usually takes 4-8 weeks. The key is not rushing back too quickly."
      },
      {
        question: "Should I get new running shoes?",
        answer: "Worn shoes can contribute to IT band syndrome. I'll assess your current shoes and running pattern. Sometimes new shoes help, but they're not always the solution."
      }
    ]
  },

  'acl-injuries': {
    overview: `An ACL tear is one of those injuries that changes everything for an athlete. That pop you felt, the knee giving way, the swelling that came on fast: these are classic ACL injury signs. Whether you're facing surgery or trying conservative treatment, I'll guide you through recovery.

I've worked with athletes from weekend warriors to competitive players here in Burlington. ACL rehab isn't just about the knee. It's about rebuilding confidence, preventing re-injury, and getting you back to the activities you love.`,
    
    biomechanics: `Your ACL prevents your tibia (shin bone) from sliding forward on your femur (thigh bone). It's crucial for rotational stability, especially in cutting and pivoting sports. When it tears, usually from a plant-and-twist movement or direct impact, your knee loses this critical stability.

Not all ACL tears are the same. Partial tears, complete tears, and tears with other injuries (meniscus, MCL) all need different approaches. Your age, activity level, and goals determine whether surgery or conservative treatment is best.`,
    
    commonMisconceptions: [
      "Surgery is always necessary: Some people, especially less active individuals, do well without surgery with proper rehab.",
      "You can return to sports in 3 months: Safe return typically takes 9-12 months, even with surgery.",
      "The surgery fixes everything: Surgery reconstructs the ligament, but rehab rebuilds function.",
      "You'll never be the same: Many athletes return to their previous level with proper rehabilitation.",
      "Braces prevent ACL tears: While they might help post-injury, braces don't prevent initial ACL injuries."
    ],
    
    treatmentApproach: {
      title: "Comprehensive ACL Rehabilitation",
      description: "Whether surgical or conservative, the rehab principles remain similar:",
      techniques: [
        "Pre-operative Strengthening: 'Prehab' improves surgical outcomes if surgery is chosen",
        "Range of Motion Restoration: Regaining full knee extension is critical early on",
        "Neuromuscular Training: Retraining movement patterns to protect the knee",
        "Progressive Strengthening: Systematic loading of quadriceps, hamstrings, and hip muscles",
        "Plyometric Training: Preparing for jumping and landing in later stages",
        "Sport-Specific Training: Gradual return to cutting, pivoting, and sport movements",
        "Psychological Readiness: Building confidence for return to sport"
      ]
    },
    
    timeline: [
      {
        phase: "Acute Phase",
        duration: "0-2 weeks",
        description: "Control swelling, restore range of motion, activate quadriceps. If surgery is planned, this is 'prehab'."
      },
      {
        phase: "Early Rehabilitation",
        duration: "2-12 weeks",
        description: "Progressive strengthening, balance training, and beginning functional movements."
      },
      {
        phase: "Advanced Strengthening",
        duration: "3-6 months",
        description: "Building strength to 80% of uninjured side, starting running progression if appropriate."
      },
      {
        phase: "Return to Sport",
        duration: "6-12 months",
        description: "Sport-specific training, plyometrics, and meeting return-to-play criteria."
      }
    ],
    
    redFlags: [
      "Locked knee that won't straighten or bend",
      "Severe, uncontrolled pain",
      "Signs of blood clot (calf pain, swelling, warmth)",
      "Signs of infection post-surgery (fever, increasing pain, redness)",
      "Numbness or loss of pulse in foot"
    ],
    
    whenToSeek: [
      "Immediate treatment after injury for assessment",
      "Knee instability or giving way episodes",
      "Significant swelling that doesn't improve",
      "Unable to bear weight on the leg",
      "Planning return to sports or high-demand activities"
    ],
    
    relatedConditions: ['meniscus-tears', 'mcl-lcl-sprains', 'knee-pain-patellofemoral'],
    
    faqs: [
      {
        question: "Do I need surgery?",
        answer: "It depends on your age, activity level, and associated injuries. Young athletes returning to cutting sports usually benefit from surgery. Less active individuals might do well with conservative treatment. We'll discuss your specific situation."
      },
      {
        question: "When can I return to sports?",
        answer: "Return to sport typically takes 9-12 months post-surgery, sometimes longer. You need to pass specific strength, hop, and functional tests. Rushing back increases re-tear risk by up to 7 times."
      }
    ]
  },

  'meniscus-tears': {
    overview: `Your meniscus is the shock absorber in your knee. When it tears, you might feel catching, locking, or pain with twisting. I see meniscus tears in everyone from young athletes to older adults with degenerative changes.

The good news? Not all meniscus tears need surgery. Many heal well with the right physiotherapy approach. I'll assess your specific tear pattern, symptoms, and goals to create your treatment plan.`,
    
    biomechanics: `You have two menisci in each knee: medial (inside) and lateral (outside). They distribute load, provide stability, and protect your cartilage. Tears happen from acute twisting injuries or gradual degeneration over time.

Different tear patterns (bucket handle, radial, horizontal) affect treatment options. Tears in the outer third have blood supply and can heal. Inner tears have poor blood supply, making healing harder. Your age and tear location guide our approach.`,
    
    commonMisconceptions: [
      "All meniscus tears need surgery: Many tears, especially degenerative ones, respond well to physiotherapy.",
      "Surgery removes the whole meniscus: Modern surgery preserves as much meniscus as possible.",
      "You can't be active with a torn meniscus: Many people return to full activity without surgery.",
      "MRI findings always match symptoms: Some tears seen on MRI don't cause symptoms.",
      "Arthroscopy prevents arthritis: Removing meniscus tissue can actually increase arthritis risk."
    ],
    
    treatmentApproach: {
      title: "Evidence-Based Meniscus Treatment",
      description: "Conservative management focusing on function:",
      techniques: [
        "Load Management: Finding the right balance of activity to promote healing",
        "Range of Motion Exercises: Maintaining knee mobility without aggravating the tear",
        "Strengthening Program: Building quadriceps and hip strength to unload the meniscus",
        "Neuromuscular Training: Improving knee control during functional activities",
        "Manual Therapy: Addressing joint stiffness and muscle tension",
        "Activity Modification: Temporary changes to reduce meniscus stress",
        "Graduated Return: Progressive loading back to desired activities"
      ]
    },
    
    timeline: [
      {
        phase: "Acute Management",
        duration: "1-2 weeks",
        description: "Reduce swelling, restore range of motion, begin gentle strengthening."
      },
      {
        phase: "Progressive Loading",
        duration: "2-6 weeks",
        description: "Build strength, improve function, gradually increase activities."
      },
      {
        phase: "Return to Activity",
        duration: "6-12 weeks",
        description: "Sport-specific training, addressing any remaining deficits."
      }
    ],
    
    redFlags: [
      "Locked knee that won't fully straighten",
      "Severe swelling that doesn't improve",
      "Significant instability or giving way",
      "Progressive loss of range of motion",
      "Severe night pain"
    ],
    
    whenToSeek: [
      "Knee locking or catching sensation",
      "Swelling after twisting injury",
      "Pain with squatting or twisting",
      "Difficulty fully straightening knee",
      "Symptoms limiting daily activities"
    ],
    
    relatedConditions: ['acl-injuries', 'knee-osteoarthritis', 'mcl-lcl-sprains'],
    
    faqs: [
      {
        question: "Can my meniscus heal without surgery?",
        answer: "Many meniscus tears, particularly degenerative ones, improve with physiotherapy. Studies show similar outcomes between surgery and physio for many tear types. We'll monitor your progress and adjust if needed."
      },
      {
        question: "Will I get arthritis?",
        answer: "Meniscus tears can increase arthritis risk, especially if meniscus tissue is removed. That's why we try conservative treatment first. Maintaining strength and healthy weight helps protect your knee long-term."
      }
    ]
  },

  'achilles-tendinopathy': {
    overview: `Achilles pain that starts as morning stiffness and gets worse with activity is classic tendinopathy. Whether you're a runner dealing with mid-portion pain or someone with insertional pain at the heel, this condition needs specific loading strategies to heal.

I treat many Achilles problems here in Burlington, from weekend warriors to serious athletes. The key isn't rest. It's finding the right type and amount of loading to stimulate healing without overloading the tendon.`,
    
    biomechanics: `Your Achilles tendon connects your calf muscles to your heel bone. It's the strongest tendon in your body but also one of the most stressed. During running, it handles forces up to 8 times your body weight.

Tendinopathy develops when the tendon can't keep up with the demands placed on it. This causes degenerative changes in the tendon structure. Pain and stiffness result from these changes, not from inflammation like we once thought.`,
    
    commonMisconceptions: [
      "It's just inflammation: Tendinopathy involves tendon degeneration, not primarily inflammation.",
      "Complete rest fixes it: Rest alone leads to tendon weakening. Loading is essential for healing.",
      "Stretching is the solution: Aggressive stretching can actually irritate the tendon more.",
      "Cortisone injections cure it: These can provide temporary relief but may weaken the tendon.",
      "It will rupture if I exercise: Gradual loading actually strengthens the tendon and reduces rupture risk."
    ],
    
    treatmentApproach: {
      title: "Progressive Loading Protocol",
      description: "Evidence-based approach for tendon remodeling:",
      techniques: [
        "Isometric Loading: Initial pain relief and tendon stimulus without movement",
        "Eccentric Exercises: Gold standard for tendon remodeling (heel drops)",
        "Heavy Slow Resistance: Progressive strengthening for tendon capacity",
        "Energy Storage Loading: Preparing for return to running/jumping",
        "Gait Retraining: Optimizing running mechanics to reduce tendon stress",
        "Manual Therapy: Addressing calf and ankle restrictions",
        "Load Management: Balancing activity to stay within tendon capacity"
      ]
    },
    
    timeline: [
      {
        phase: "Pain Management",
        duration: "1-2 weeks",
        description: "Isometric exercises, activity modification, beginning structured loading."
      },
      {
        phase: "Progressive Loading",
        duration: "4-8 weeks",
        description: "Eccentric and heavy slow resistance training, gradual return to activities."
      },
      {
        phase: "Return to Sport",
        duration: "8-12 weeks",
        description: "Energy storage exercises, plyometrics, full return to running/sports."
      }
    ],
    
    redFlags: [
      "Sudden sharp pain with a 'pop' (possible rupture)",
      "Unable to point toes downward",
      "Significant gap felt in the tendon",
      "Unable to walk or push off",
      "Severe swelling with bruising"
    ],
    
    whenToSeek: [
      "Morning heel/calf stiffness lasting weeks",
      "Pain during or after running",
      "Swelling or thickening of the tendon",
      "Pain with heel raises or jumping",
      "Symptoms affecting daily activities"
    ],
    
    relatedConditions: ['plantar-fasciitis', 'ankle-sprains', 'shin-splints'],
    
    faqs: [
      {
        question: "How long does Achilles tendinopathy take to heal?",
        answer: "Most cases improve significantly within 12 weeks of proper loading exercises. Some chronic cases may take 3-6 months. The key is consistency with your exercise program, not rushing progression."
      },
      {
        question: "Can I keep running?",
        answer: "Often yes, with modifications. We might reduce distance, slow pace, or alternate with other activities. Complete rest usually isn't helpful. I'll help you find the right activity level for healing."
      }
    ]
  },

  'carpal-tunnel-syndrome': {
    overview: `Carpal tunnel syndrome is median nerve compression at your wrist. That numbness and tingling in your thumb, index, and middle fingers, especially at night, is your nerve asking for help. I see this often in office workers, new parents, and manual laborers in Burlington.

Good news: surgery isn't usually the first option. Many cases respond well to physiotherapy, especially when caught early. We'll work on reducing nerve pressure, improving nerve mobility, and addressing the activities causing compression.`,
    
    biomechanics: `Your median nerve travels through a narrow tunnel at your wrist, along with nine tendons. When the tunnel contents swell or the tunnel narrows, the nerve gets compressed. This causes the classic symptoms: numbness, tingling, and eventually weakness.

Repetitive wrist positions, pregnancy, thyroid issues, and arthritis can all contribute. Night symptoms happen because we sleep with bent wrists, increasing tunnel pressure. That's why splinting and positioning matter so much.`,
    
    commonMisconceptions: [
      "It's just from typing: Many factors contribute, not just computer use.",
      "Surgery is the only solution: Conservative treatment works for mild to moderate cases.",
      "Wrist braces weaken muscles: Night splinting actually helps without causing weakness.",
      "It will go away on its own: Without treatment, nerve damage can become permanent.",
      "Only affects older people: I see it in people of all ages, including new parents."
    ],
    
    treatmentApproach: {
      title: "Non-Surgical Carpal Tunnel Treatment",
      description: "Comprehensive approach to decompress the nerve:",
      techniques: [
        "Nerve Gliding Exercises: Improving median nerve mobility through the tunnel",
        "Tendon Gliding: Reducing adhesions and improving tendon movement",
        "Night Splinting: Keeping wrist neutral to reduce overnight compression",
        "Ergonomic Assessment: Modifying work setup and daily activities",
        "Manual Therapy: Mobilizing wrist bones and soft tissues",
        "Strengthening: Building support without increasing compression",
        "Activity Modification: Changing patterns that aggravate symptoms"
      ]
    },
    
    timeline: [
      {
        phase: "Symptom Relief",
        duration: "1-2 weeks",
        description: "Night splinting, nerve glides, activity modification for initial relief."
      },
      {
        phase: "Improving Function",
        duration: "2-6 weeks",
        description: "Progressive exercises, ergonomic changes, building strength."
      },
      {
        phase: "Maintenance",
        duration: "Ongoing",
        description: "Preventive strategies, continued exercises, monitoring symptoms."
      }
    ],
    
    redFlags: [
      "Constant numbness (not intermittent)",
      "Significant muscle wasting at thumb base",
      "Dropping objects frequently",
      "Complete loss of sensation",
      "Rapid progression of symptoms"
    ],
    
    whenToSeek: [
      "Numbness/tingling in thumb and first two fingers",
      "Night symptoms waking you up",
      "Weakness in grip or pinch",
      "Symptoms persisting over 2 weeks",
      "Pain radiating up the arm"
    ],
    
    relatedConditions: ['de-quervains-tenosynovitis', 'tennis-elbow', 'thoracic-outlet-syndrome'],
    
    faqs: [
      {
        question: "Do I need surgery?",
        answer: "Most mild to moderate cases respond to conservative treatment. Surgery is considered if symptoms are severe, there's muscle wasting, or conservative treatment fails after 3-6 months."
      },
      {
        question: "Can I prevent it from coming back?",
        answer: "Yes, with proper ergonomics, regular nerve gliding exercises, and avoiding prolonged wrist flexion. I'll teach you strategies specific to your work and activities."
      }
    ]
  },

  'piriformis-syndrome': {
    overview: `Piriformis syndrome is a literal pain in the butt that can mimic sciatica. Your piriformis muscle sits deep in your hip, and when it irritates the sciatic nerve, you get pain, numbness, or tingling down your leg. I've helped many Burlington runners and desk workers overcome this frustrating condition.

What makes piriformis syndrome tricky is that it's often missed or misdiagnosed. The key is understanding it's not just about stretching a tight muscle. We need to address why the piriformis is overworking in the first place.`,
    
    biomechanics: `Your piriformis muscle runs from your sacrum to your hip and helps rotate your leg outward. The sciatic nerve usually runs underneath it, but in 15-20% of people, the nerve goes through or over the muscle. When the piriformis gets tight or inflamed, it can compress the nerve.

This often happens because of hip weakness, poor pelvic control, or repetitive activities. Sitting on hard surfaces, running with poor form, or sudden increases in activity can all trigger it.`,
    
    commonMisconceptions: [
      "It's the same as sciatica: While symptoms are similar, the cause and treatment differ.",
      "Just stretch the piriformis: Stretching alone rarely solves it. Hip strengthening is crucial.",
      "It's rare: Actually quite common, just often misdiagnosed.",
      "Sitting doesn't matter: Prolonged sitting, especially on hard surfaces, is a major factor.",
      "You need injections: Most cases resolve with proper physiotherapy."
    ],
    
    treatmentApproach: {
      title: "Deep Hip Syndrome Treatment",
      description: "Addressing the root cause, not just symptoms:",
      techniques: [
        "Hip Strengthening: Targeting glutes to reduce piriformis overload",
        "Manual Therapy: Releasing piriformis and surrounding hip muscles",
        "Dry Needling: Direct treatment of piriformis trigger points",
        "Neural Mobilization: Freeing up the sciatic nerve",
        "Movement Retraining: Correcting patterns that overwork the piriformis",
        "Posture Correction: Addressing sitting and standing positions",
        "Progressive Loading: Gradual return to running or activities"
      ]
    },
    
    timeline: [
      {
        phase: "Pain Relief",
        duration: "1-2 weeks",
        description: "Manual therapy, activity modification, beginning hip exercises."
      },
      {
        phase: "Strengthening",
        duration: "2-4 weeks",
        description: "Progressive hip strengthening, improving movement patterns."
      },
      {
        phase: "Return to Activity",
        duration: "4-8 weeks",
        description: "Gradual return to full activities with maintained strength program."
      }
    ],
    
    redFlags: [
      "Loss of bowel or bladder control",
      "Progressive leg weakness",
      "Severe night pain unrelieved by position",
      "Numbness in groin/saddle area",
      "Signs of cauda equina syndrome"
    ],
    
    whenToSeek: [
      "Deep buttock pain with sitting",
      "Pain/tingling down the back of leg",
      "Pain worse with hip rotation",
      "Symptoms not improving with rest",
      "Difficulty sitting for work or driving"
    ],
    
    relatedConditions: ['sciatica', 'hip-pain', 'si-joint-dysfunction'],
    
    faqs: [
      {
        question: "How is this different from sciatica?",
        answer: "True sciatica comes from the spine. Piriformis syndrome is nerve irritation at the hip. Treatment focuses on the hip muscles rather than the back. Sometimes they coexist."
      },
      {
        question: "Why does sitting make it worse?",
        answer: "Sitting puts direct pressure on the piriformis and can compress the nerve. Hard surfaces, wallets in back pockets, and poor sitting posture all contribute. I'll help you optimize your sitting setup."
      }
    ]
  },

  'shin-splints': {
    overview: `Shin splints, or medial tibial stress syndrome, is that burning pain along your shin bone that many runners know. It's your body's way of saying the demand on your shin exceeds its capacity. I help Burlington runners overcome this common but frustrating injury.

The term "shin splints" is actually outdated. We now understand it's a bone stress reaction, not a muscle problem. This knowledge changes how we treat it: it's not about stretching or ice, it's about load management and strengthening.`,
    
    biomechanics: `Shin splints occur when repetitive stress on the tibia (shin bone) causes microdamage faster than your body can repair it. This leads to periosteal irritation and bone stress. Contributing factors include sudden training increases, poor running mechanics, inadequate footwear, and muscle imbalances.

The location of pain tells us a lot. Medial shin splints (inside) often relate to pronation and calf tightness. Anterior shin splints (front) usually involve the tibialis anterior muscle. Each needs a different approach.`,
    
    commonMisconceptions: [
      "It's just muscle soreness: It's actually a bone stress reaction that needs proper management.",
      "Push through the pain: This can progress to stress fractures if ignored.",
      "New shoes always fix it: Shoes might help, but biomechanics and training errors matter more.",
      "Only beginners get them: Even experienced runners get shin splints with training changes.",
      "Ice and rest cure it: While these help symptoms, addressing the cause prevents recurrence."
    ],
    
    treatmentApproach: {
      title: "Progressive Shin Splint Recovery",
      description: "Evidence-based approach for lasting resolution:",
      techniques: [
        "Load Management: Modifying training to allow healing while maintaining fitness",
        "Gait Analysis: Identifying and correcting running form issues",
        "Calf Strengthening: Building capacity to handle running demands",
        "Impact Modification: Adjusting cadence and foot strike patterns",
        "Cross-Training: Maintaining fitness with low-impact activities",
        "Progressive Return: Structured running program to prevent recurrence",
        "Bone Health: Addressing nutrition and recovery factors"
      ]
    },
    
    timeline: [
      {
        phase: "Acute Management",
        duration: "1-2 weeks",
        description: "Reduce running, start strengthening, address pain and inflammation."
      },
      {
        phase: "Building Capacity",
        duration: "2-4 weeks",
        description: "Progressive strengthening, gait retraining, gradual return to running."
      },
      {
        phase: "Return to Training",
        duration: "4-6 weeks",
        description: "Structured return to full training with continued strength work."
      }
    ],
    
    redFlags: [
      "Pain at rest or at night",
      "Pain in a very specific spot (possible stress fracture)",
      "Swelling that doesn't improve",
      "Pain that worsens despite rest",
      "Unable to hop on affected leg"
    ],
    
    whenToSeek: [
      "Shin pain limiting running",
      "Pain persisting after runs",
      "Symptoms over 2 weeks",
      "Recurring episodes",
      "Concerns about stress fractures"
    ],
    
    relatedConditions: ['achilles-tendinopathy', 'plantar-fasciitis', 'it-band-syndrome'],
    
    faqs: [
      {
        question: "When can I run again?",
        answer: "Often within 2-3 weeks with modified training. Complete rest isn't usually necessary. We'll use a walk-run program and monitor symptoms to guide progression."
      },
      {
        question: "How do I prevent them from coming back?",
        answer: "Gradual training progressions (10% rule), maintaining calf and hip strength, proper recovery between runs, and addressing running form issues. I'll create a prevention plan specific to your needs."
      }
    ]
  },

  'ankle-sprains': {
    overview: `Ankle sprains are one of the most common injuries I treat, but they're often managed poorly. That rolled ankle playing sports or stepping off a curb needs more than just rest and ice. Without proper rehab, you're likely to sprain it again.

I see the consequences of poorly treated ankle sprains all the time: chronic instability, recurring sprains, and early arthritis. Let's get your ankle properly rehabilitated the first time to avoid these problems.`,
    
    biomechanics: `Most ankle sprains (85%) affect the lateral ligaments when your foot rolls inward. The anterior talofibular ligament usually tears first, followed by the calcaneofibular ligament in more severe sprains. These ligaments provide stability and proprioceptive feedback.

After a sprain, you lose proprioception (position sense), strength, and range of motion. Without addressing all three, your ankle remains vulnerable. That's why "walk it off" advice leads to chronic problems.`,
    
    commonMisconceptions: [
      "Minor sprains don't need treatment: Even grade 1 sprains need proper rehab to prevent recurrence.",
      "X-rays always show the damage: Ligament injuries don't show on X-rays.",
      "Ankle braces prevent healing: Appropriate support early on actually helps healing.",
      "Once sprained, always weak: Proper rehab can make your ankle stronger than before.",
      "Surgery is needed for stability: Most unstable ankles improve with targeted physiotherapy."
    ],
    
    treatmentApproach: {
      title: "Complete Ankle Rehabilitation",
      description: "Beyond RICE to full recovery:",
      techniques: [
        "Early Mobilization: Appropriate movement speeds healing",
        "Balance Training: Restoring proprioception to prevent re-injury",
        "Progressive Strengthening: Building ankle and foot muscle support",
        "Manual Therapy: Restoring joint mobility and reducing stiffness",
        "Plyometric Training: Preparing for return to sports",
        "Sport-Specific Drills: Cutting, jumping, and landing mechanics",
        "Taping/Bracing: Strategic support during return to activity"
      ]
    },
    
    timeline: [
      {
        phase: "Acute Phase",
        duration: "0-72 hours",
        description: "Protection, optimal loading, ice, compression, elevation. Early movement as tolerated."
      },
      {
        phase: "Early Rehab",
        duration: "1-2 weeks",
        description: "Range of motion, beginning balance work, progressive weight bearing."
      },
      {
        phase: "Progressive Training",
        duration: "2-4 weeks",
        description: "Strengthening, advanced balance, beginning running if appropriate."
      },
      {
        phase: "Return to Sport",
        duration: "4-8 weeks",
        description: "Sport-specific training, plyometrics, full return with injury prevention strategies."
      }
    ],
    
    redFlags: [
      "Unable to bear any weight",
      "Severe pain over bone (not ligament)",
      "Numbness or tingling in foot",
      "Foot cold or color changes",
      "Deformity or obvious fracture"
    ],
    
    whenToSeek: [
      "Significant swelling or bruising",
      "Unable to walk normally after 24 hours",
      "Previous ankle sprains",
      "Feeling of instability",
      "Planning return to sports"
    ],
    
    relatedConditions: ['achilles-tendinopathy', 'peroneal-tendinopathy', 'plantar-fasciitis'],
    
    faqs: [
      {
        question: "Why do I keep spraining my ankle?",
        answer: "Recurring sprains usually mean incomplete rehab from previous injuries. Lost proprioception and strength make re-injury likely. Proper balance and strengthening exercises can break this cycle."
      },
      {
        question: "Should I use crutches?",
        answer: "Only if you can't walk without significant pain. Early weight bearing as tolerated actually speeds healing. I'll assess and guide you on appropriate loading."
      }
    ]
  },

  'whiplash': {
    overview: `Whiplash from a car accident affects more than just your neck. The rapid back-and-forth motion can injure muscles, ligaments, joints, and even cause concussion-like symptoms. I help many motor vehicle accident patients in Burlington recover fully from whiplash.

Early treatment makes a huge difference. The old advice of wearing a collar and resting actually slows recovery. Modern whiplash treatment focuses on guided movement, manual therapy, and addressing all affected areas, not just the neck.`,
    
    biomechanics: `Whiplash occurs when your head is suddenly accelerated then decelerated, like cracking a whip. This can stretch and tear soft tissues beyond their normal range. Even low-speed collisions (under 10 mph) can cause significant injury.

The injury affects multiple structures: facet joints, discs, muscles, and ligaments. Some people also experience vestibular (balance) and cognitive symptoms. Recovery involves addressing all affected systems, not just neck pain.`,
    
    commonMisconceptions: [
      "Minor accidents don't cause real injury: Even low-speed impacts can cause whiplash.",
      "Neck collars help healing: Prolonged collar use weakens muscles and delays recovery.",
      "Pain always starts immediately: Symptoms can develop over 24-72 hours.",
      "X-rays show everything: Soft tissue injuries don't appear on X-rays.",
      "It's just muscle soreness: Whiplash can affect joints, nerves, and cognitive function."
    ],
    
    treatmentApproach: {
      title: "Comprehensive Whiplash Recovery",
      description: "Multi-system approach for complete healing:",
      techniques: [
        "Early Mobilization: Gentle movement to prevent stiffness and central sensitization",
        "Manual Therapy: Restoring joint mobility and reducing muscle guarding",
        "Vestibular Rehabilitation: Addressing dizziness and balance issues",
        "Cognitive Strategies: Managing headaches and concentration difficulties",
        "Progressive Strengthening: Building neck and shoulder stability",
        "Postural Retraining: Correcting compensatory patterns",
        "Graded Activity: Systematic return to normal activities"
      ]
    },
    
    timeline: [
      {
        phase: "Acute Phase",
        duration: "0-72 hours",
        description: "Pain management, gentle movement, education about recovery expectations."
      },
      {
        phase: "Early Recovery",
        duration: "1-4 weeks",
        description: "Manual therapy, beginning exercises, addressing associated symptoms."
      },
      {
        phase: "Progressive Phase",
        duration: "4-12 weeks",
        description: "Strengthening, increasing activities, return to work/sports planning."
      }
    ],
    
    redFlags: [
      "Severe headache getting worse",
      "Progressive neurological symptoms",
      "Difficulty walking or severe dizziness",
      "Visual disturbances",
      "Signs of fracture or instability"
    ],
    
    whenToSeek: [
      "Any motor vehicle accident with neck symptoms",
      "Headaches following trauma",
      "Neck pain with arm symptoms",
      "Dizziness or balance problems",
      "Difficulty concentrating after accident"
    ],
    
    relatedConditions: ['neck-pain', 'headaches-migraines', 'thoracic-outlet-syndrome'],
    
    faqs: [
      {
        question: "How long does whiplash recovery take?",
        answer: "Most people recover within 3 months with proper treatment. Early physiotherapy (within 96 hours) significantly improves outcomes. Complex cases may take longer but still respond to treatment."
      },
      {
        question: "Will I have permanent damage?",
        answer: "Most whiplash injuries heal completely with proper treatment. Early, active treatment prevents chronic pain. Even if you've had symptoms for months, physiotherapy can still help."
      }
    ]
  },

  'golfers-elbow': {
    overview: `Golfer's elbow is pain on the inside of your elbow where your forearm muscles attach. Despite the name, I see it more in manual workers and weightlifters than golfers. That gripping and wrist flexion pain can really limit your activities.

Like its cousin tennis elbow, this is a tendinopathy that needs specific loading to heal. Rest and anti-inflammatories might help temporarily, but without addressing the tendon's capacity and your mechanics, it usually comes back.`,
    
    biomechanics: `The common flexor tendon attaches your wrist and finger flexor muscles to the medial epicondyle of your elbow. Repetitive gripping, wrist flexion, or forearm pronation overloads this tendon. Over time, the tendon develops degenerative changes, not inflammation.

Poor technique in sports or work, sudden activity increases, and grip-intensive tasks all contribute. The key is identifying which specific activities and positions trigger your pain so we can modify them during healing.`,
    
    commonMisconceptions: [
      "Only golfers get it: Any repetitive gripping activity can cause it.",
      "It's just inflammation: It's actually tendon degeneration that needs loading to heal.",
      "Cortisone shots cure it: They might help pain temporarily but don't fix the tendon.",
      "Complete rest is best: Rest weakens the tendon. Controlled loading promotes healing.",
      "Braces fix the problem: They help symptoms but don't address the underlying issue."
    ],
    
    treatmentApproach: {
      title: "Progressive Tendon Loading",
      description: "Evidence-based protocol for tendon healing:",
      techniques: [
        "Isometric Exercises: Initial loading without movement for pain relief",
        "Eccentric Strengthening: Gold standard for tendon remodeling",
        "Grip Strength Training: Progressive loading to build capacity",
        "Manual Therapy: Addressing forearm and wrist restrictions",
        "Dry Needling: Targeting trigger points in forearm muscles",
        "Technique Correction: Modifying sport or work activities",
        "Nerve Mobilization: The ulnar nerve can be involved"
      ]
    },
    
    timeline: [
      {
        phase: "Pain Reduction",
        duration: "1-2 weeks",
        description: "Isometric exercises, activity modification, manual therapy."
      },
      {
        phase: "Loading Phase",
        duration: "3-6 weeks",
        description: "Progressive eccentric exercises, building grip strength."
      },
      {
        phase: "Return to Activity",
        duration: "6-12 weeks",
        description: "Sport or work-specific training, technique refinement."
      }
    ],
    
    redFlags: [
      "Severe swelling or deformity",
      "Inability to bend elbow",
      "Numbness in ring and little fingers",
      "Severe night pain",
      "Signs of infection"
    ],
    
    whenToSeek: [
      "Inner elbow pain with gripping",
      "Pain with wrist flexion",
      "Weakness in grip strength",
      "Symptoms over 2 weeks",
      "Pain affecting work or sports"
    ],
    
    relatedConditions: ['tennis-elbow', 'carpal-tunnel-syndrome', 'de-quervains-tenosynovitis'],
    
    faqs: [
      {
        question: "Can I keep lifting weights?",
        answer: "Usually yes, with modifications. We'll adjust your grip, reduce load temporarily, and modify exercises that aggravate symptoms. Complete rest often delays healing."
      },
      {
        question: "Why isn't stretching helping?",
        answer: "Aggressive stretching can irritate the tendon. The tendon needs loading, not stretching, to remodel and heal. Gentle stretching is okay, but strengthening is key."
      }
    ]
  },

  'de-quervains-tenosynovitis': {
    overview: `De Quervain's is inflammation of the tendons that control your thumb. That sharp pain at your wrist when you grip, lift, or text is classic. I see this a lot in new parents (from lifting babies), office workers, and anyone doing repetitive thumb movements.

The good news is that De Quervain's usually responds really well to physiotherapy. With the right combination of rest from aggravating activities, splinting, and specific exercises, most people avoid needing steroid injections or surgery.`,
    
    biomechanics: `Two tendons (abductor pollicis longus and extensor pollicis brevis) run through a tight tunnel at your wrist's thumb side. Repetitive thumb movements, especially with wrist deviation, cause friction and inflammation in this tunnel.

Activities like lifting children, texting, gaming, or repetitive work tasks overload these tendons. Hormonal changes during pregnancy and breastfeeding also increase risk, which is why new mothers are particularly susceptible.`,
    
    commonMisconceptions: [
      "It's arthritis: De Quervain's is tendon inflammation, not joint arthritis.",
      "Surgery is usually needed: Most cases resolve with conservative treatment.",
      "Splints should be worn constantly: Strategic splinting is better than 24/7 use.",
      "It only affects the thumb: Pain often radiates up the forearm.",
      "Men don't get it: While more common in women, men get it too, especially from work or sports."
    ],
    
    treatmentApproach: {
      title: "Comprehensive Thumb Tendon Recovery",
      description: "Reducing inflammation and restoring function:",
      techniques: [
        "Activity Modification: Identifying and modifying triggering activities",
        "Splinting Strategy: Thumb spica splint use, especially during aggravating activities",
        "Tendon Gliding: Specific exercises to maintain mobility",
        "Eccentric Strengthening: Building tendon capacity once inflammation settles",
        "Manual Therapy: Addressing wrist and thumb restrictions",
        "Ergonomic Solutions: Modifying how you lift, grip, and use devices",
        "Gradual Return: Progressive loading back to full activities"
      ]
    },
    
    timeline: [
      {
        phase: "Inflammation Control",
        duration: "1-2 weeks",
        description: "Splinting, activity modification, gentle range of motion."
      },
      {
        phase: "Progressive Mobilization",
        duration: "2-4 weeks",
        description: "Tendon gliding, beginning strengthening, reducing splint dependence."
      },
      {
        phase: "Return to Function",
        duration: "4-8 weeks",
        description: "Full strengthening, activity-specific training."
      }
    ],
    
    redFlags: [
      "Severe swelling extending up arm",
      "Signs of infection (redness, warmth, fever)",
      "Numbness or tingling in thumb",
      "Sudden loss of thumb movement",
      "Severe pain unresponsive to rest"
    ],
    
    whenToSeek: [
      "Pain at thumb side of wrist",
      "Pain with gripping or lifting",
      "Positive Finkelstein test (pain with thumb in fist)",
      "Swelling over thumb tendons",
      "Pain limiting childcare or work"
    ],
    
    relatedConditions: ['carpal-tunnel-syndrome', 'tennis-elbow', 'golfers-elbow'],
    
    faqs: [
      {
        question: "Can I still care for my baby?",
        answer: "Yes! I'll show you modified lifting techniques that protect your thumb. Using your palms instead of thumbs for lifting, and strategic splint use during care tasks helps healing continue."
      },
      {
        question: "Do I need a cortisone injection?",
        answer: "Most cases resolve with physiotherapy. Injections are considered if conservative treatment doesn't help after 4-6 weeks. Some people respond better to therapy, others to injection."
      }
    ]
  },

  'mcl-lcl-sprains': {
    overview: `MCL and LCL sprains are common knee ligament injuries from sports or falls. The MCL (inside of knee) is injured more often, usually from a blow to the outside of the knee. The LCL (outside) is less common but can be more problematic. I help athletes in Burlington recover from these injuries and return to their sports safely.

Unlike ACL tears, most MCL and LCL injuries heal well without surgery. The key is protecting the healing ligament while maintaining strength and movement. Too much rest leads to stiffness, too much activity delays healing.`,
    
    biomechanics: `The MCL resists forces that would push your knee inward (valgus stress), while the LCL resists outward forces (varus stress). These ligaments work with your muscles to provide knee stability during cutting, pivoting, and contact sports.

Injury grades matter: Grade 1 is stretching, Grade 2 is partial tear, Grade 3 is complete tear. Each needs different management. Associated injuries (ACL, meniscus) affect treatment decisions and recovery time.`,
    
    commonMisconceptions: [
      "All ligament tears need surgery: Most MCL and many LCL injuries heal without surgery.",
      "Complete rest is required: Appropriate movement and loading speeds healing.",
      "Braces prevent healing: Proper bracing actually protects the ligament during healing.",
      "You can't play sports again: Most athletes return to full sports after proper rehab.",
      "MRI is always needed: Clinical testing often provides enough information for treatment."
    ],
    
    treatmentApproach: {
      title: "Ligament-Specific Rehabilitation",
      description: "Protecting healing while building strength:",
      techniques: [
        "Protective Bracing: Hinged brace for Grade 2-3 injuries during healing",
        "Range of Motion: Early movement to prevent stiffness",
        "Progressive Strengthening: Quadriceps, hamstrings, and hip muscles",
        "Proprioceptive Training: Balance and knee control exercises",
        "Manual Therapy: Maintaining joint mobility",
        "Sport-Specific Progression: Gradual return to cutting and contact",
        "Injury Prevention: Addressing factors that led to injury"
      ]
    },
    
    timeline: [
      {
        phase: "Protection Phase",
        duration: "0-2 weeks",
        description: "Bracing if needed, gentle range of motion, muscle activation."
      },
      {
        phase: "Early Strengthening",
        duration: "2-4 weeks",
        description: "Progressive loading, balance training, increasing activities."
      },
      {
        phase: "Advanced Training",
        duration: "4-8 weeks",
        description: "Sport-specific drills, plyometrics, preparing for return."
      },
      {
        phase: "Return to Sport",
        duration: "6-12 weeks",
        description: "Full training, contact progression, injury prevention strategies."
      }
    ],
    
    redFlags: [
      "Knee giving way repeatedly",
      "Large joint effusion (swelling)",
      "Unable to bear weight",
      "Multiple ligaments injured",
      "Signs of fracture"
    ],
    
    whenToSeek: [
      "Knee injury with immediate swelling",
      "Feeling of instability",
      "Pain on inside or outside of knee",
      "Difficulty walking normally",
      "Planning return to sports"
    ],
    
    relatedConditions: ['acl-injuries', 'meniscus-tears', 'knee-pain-patellofemoral'],
    
    faqs: [
      {
        question: "How long until I can play sports?",
        answer: "Grade 1: 2-4 weeks. Grade 2: 4-8 weeks. Grade 3: 8-12 weeks or longer. These are general timelines. Return depends on meeting specific strength and functional criteria, not just time."
      },
      {
        question: "Do I need a knee brace long-term?",
        answer: "Usually not. Braces help during healing and early return to sport. Most athletes wean off bracing once strength and control are restored. Some choose to wear one for psychological comfort."
      }
    ]
  },

  'hamstring-strains': {
    overview: `Hamstring strains are that sudden sharp pain in the back of your thigh during sprinting or stretching. Whether you're a Burlington soccer player or weekend warrior, these injuries need proper rehab to prevent them becoming chronic. I see too many people with recurring hamstring problems from incomplete initial treatment.

Hamstring injuries have high re-injury rates (up to 30%) when not properly rehabilitated. The key isn't just healing the tear, it's addressing why it happened: weakness, fatigue, poor mechanics, or previous injury.`,
    
    biomechanics: `Your hamstrings (biceps femoris, semitendinosus, semimembranosus) work both at the hip and knee. They're most vulnerable during high-speed running when they're lengthening while contracting (eccentric contraction) to control your leg swing.

Different activities cause different injury patterns. Sprinting typically injures the biceps femoris. Dancing or stretching injuries often affect the semimembranosus near the sit bone. Each needs specific rehabilitation approaches.`,
    
    commonMisconceptions: [
      "Hamstrings are just tight: Often they feel tight because they're weak or overworking.",
      "Stretching prevents strains: Flexibility alone doesn't prevent injury. Strength matters more.",
      "Rest until pain-free: Early appropriate loading speeds healing and reduces scar tissue.",
      "All hamstring injuries are the same: Location and muscle affected change treatment.",
      "You can't sprint again: Most athletes return to full speed with proper rehab."
    ],
    
    treatmentApproach: {
      title: "Hamstring-Specific Recovery Protocol",
      description: "From acute injury to return to sport:",
      techniques: [
        "Early Loading: Appropriate exercises even in acute phase",
        "Eccentric Strengthening: Key for preventing re-injury",
        "Running Progression: Gradual return from jogging to sprinting",
        "Lumbopelvic Control: Core and pelvis stability for hamstring protection",
        "Fascial Techniques: Addressing scar tissue and adhesions",
        "Sprint Mechanics: Correcting running form to reduce strain",
        "Fatigue Resistance: Building endurance to prevent late-game injuries"
      ]
    },
    
    timeline: [
      {
        phase: "Acute Phase",
        duration: "0-1 week",
        description: "Protect healing tissue, begin isometric exercises, maintain fitness with bike/pool."
      },
      {
        phase: "Progressive Loading",
        duration: "1-3 weeks",
        description: "Eccentric exercises, core work, beginning running progression."
      },
      {
        phase: "Return to Running",
        duration: "3-6 weeks",
        description: "Speed progression, sport-specific drills, building fatigue resistance."
      },
      {
        phase: "Return to Sport",
        duration: "4-12 weeks",
        description: "Full training, contact/competition with injury prevention program."
      }
    ],
    
    redFlags: [
      "Complete muscle rupture (gap in muscle)",
      "Large hematoma or severe bruising",
      "Numbness or tingling down leg",
      "Unable to walk",
      "Severe pain at sit bone"
    ],
    
    whenToSeek: [
      "Sudden sharp pain in hamstring",
      "Difficulty walking normally",
      "Bruising on back of thigh",
      "Recurring hamstring problems",
      "Need to return to sports"
    ],
    
    relatedConditions: ['groin-strains', 'hip-pain', 'piriformis-syndrome'],
    
    faqs: [
      {
        question: "Why do I keep straining my hamstring?",
        answer: "Recurring strains usually mean incomplete rehab, persistent weakness, or poor running mechanics. We need to address all factors: eccentric strength, running form, and fatigue resistance."
      },
      {
        question: "When can I return to sprinting?",
        answer: "Typically 3-6 weeks for Grade 1-2 strains, longer for Grade 3. You need to pass specific strength tests and complete a running progression. Rushing back is the main cause of re-injury."
      }
    ]
  },

  'groin-strains': {
    overview: `Groin strains are common in hockey, soccer, and any sport with quick direction changes. That sharp pain in your inner thigh when you push off or bring your leg across your body is typically an adductor strain. I help many Burlington athletes recover from these tricky injuries.

Groin injuries can become chronic if not properly treated. The hip and pelvis are complex, and what seems like a simple muscle strain might involve multiple structures. Proper assessment and targeted rehab are crucial.`,
    
    biomechanics: `Your adductor muscles (groin) work with your hip flexors and abdominals to control leg and pelvis movement. They're stressed during acceleration, deceleration, and direction changes. Weakness or fatigue in any part of this system overloads the adductors.

Hockey players are particularly susceptible due to the skating stride. Soccer players often injure their groin during kicking or sudden direction changes. Each sport requires specific rehabilitation approaches.`,
    
    commonMisconceptions: [
      "Just stretch it out: Aggressive stretching can worsen the injury.",
      "Groin injuries heal slowly: With proper treatment, most heal within 4-8 weeks.",
      "It's always the adductor muscle: Hip joint, pubic bone, and other structures can be involved.",
      "You need complete rest: Modified activity and appropriate loading speed healing.",
      "Surgery is often needed: Most groin strains respond to conservative treatment."
    ],
    
    treatmentApproach: {
      title: "Sport-Specific Groin Rehabilitation",
      description: "Comprehensive approach for full recovery:",
      techniques: [
        "Copenhagen Protocol: Evidence-based adductor strengthening program",
        "Core Stabilization: Addressing pelvis control and stability",
        "Hip Mobility: Ensuring full hip range of motion",
        "Progressive Loading: From isometric to sport-specific exercises",
        "Manual Therapy: Addressing hip and pelvis restrictions",
        "Movement Retraining: Sport-specific patterns (skating, kicking)",
        "Return to Sport Testing: Objective criteria for safe return"
      ]
    },
    
    timeline: [
      {
        phase: "Acute Management",
        duration: "0-1 week",
        description: "Pain control, gentle movement, begin isometric exercises."
      },
      {
        phase: "Progressive Strengthening",
        duration: "1-3 weeks",
        description: "Copenhagen adduction exercises, core work, increasing activities."
      },
      {
        phase: "Sport-Specific Training",
        duration: "3-6 weeks",
        description: "Return to skating/running, agility work, building power."
      },
      {
        phase: "Return to Competition",
        duration: "4-8 weeks",
        description: "Full training, contact progression, injury prevention."
      }
    ],
    
    redFlags: [
      "Severe pain in lower abdomen",
      "Testicular pain or swelling",
      "Unable to bear weight",
      "Signs of hernia",
      "Severe bruising or swelling"
    ],
    
    whenToSeek: [
      "Sharp groin pain during activity",
      "Pain with bringing leg across body",
      "Difficulty with skating or kicking",
      "Recurring groin problems",
      "Pain affecting sport performance"
    ],
    
    relatedConditions: ['hip-pain', 'hamstring-strains', 'si-joint-dysfunction'],
    
    faqs: [
      {
        question: "Can I keep playing through it?",
        answer: "Playing through groin pain often leads to chronic issues. Modified training is okay, but pushing through sharp pain delays healing and can cause compensatory injuries."
      },
      {
        question: "Why does my groin keep getting injured?",
        answer: "Recurring groin strains suggest hip weakness, core instability, or movement pattern issues. We need to address these underlying factors, not just treat the symptoms."
      }
    ]
  },

  'patellar-tendinopathy': {
    overview: `Jumper's knee is pain in the tendon connecting your kneecap to your shin bone. Common in basketball and volleyball players, this overuse injury responds well to the right loading program. I've helped many Burlington athletes overcome this frustrating condition and return to jumping sports.

The key with patellar tendinopathy isn't rest, it's progressive loading. Your tendon needs specific stress to remodel and strengthen. Too little and it weakens, too much and it gets worse. Finding that sweet spot is what I do.`,
    
    biomechanics: `Your patellar tendon handles enormous forces during jumping and landing, up to 8 times body weight. Repetitive loading without adequate recovery causes tendon degeneration. This isn't inflammation like we once thought, it's failed healing that needs specific treatment.

Poor landing mechanics, sudden training increases, and playing on hard surfaces all contribute. Weakness in your glutes and core makes your knee work harder, overloading the tendon.`,
    
    commonMisconceptions: [
      "It's just inflammation: It's actually tendon degeneration that needs loading to heal.",
      "Rest fixes it: Complete rest weakens the tendon further.",
      "Stretching the quads helps: While flexibility matters, loading is the key treatment.",
      "Surgery is inevitable: Most cases respond to progressive loading exercises.",
      "You can't jump anymore: Most athletes return to full jumping sports."
    ],
    
    treatmentApproach: {
      title: "Progressive Tendon Loading Protocol",
      description: "Evidence-based approach for tendon remodeling:",
      techniques: [
        "Isometric Loading: Initial pain relief and tendon stimulus",
        "Eccentric Decline Squats: Gold standard for patellar tendon rehabilitation",
        "Heavy Slow Resistance: Building tendon capacity",
        "Energy Storage Exercises: Preparing for return to jumping",
        "Landing Mechanics: Reducing tendon stress during sports",
        "Load Management: Balancing training and recovery",
        "Adjunct Treatments: Manual therapy, taping as needed"
      ]
    },
    
    timeline: [
      {
        phase: "Pain Reduction",
        duration: "1-2 weeks",
        description: "Isometric exercises, activity modification, beginning structured loading."
      },
      {
        phase: "Progressive Loading",
        duration: "4-8 weeks",
        description: "Eccentric exercises, heavy slow resistance, gradual activity increase."
      },
      {
        phase: "Return to Jumping",
        duration: "8-12 weeks",
        description: "Plyometric progression, sport-specific training, full return."
      }
    ],
    
    redFlags: [
      "Sudden complete inability to straighten knee",
      "Large gap above or below kneecap",
      "Severe swelling",
      "Complete loss of function",
      "Signs of tendon rupture"
    ],
    
    whenToSeek: [
      "Pain below kneecap with jumping",
      "Morning stiffness in knee",
      "Pain with stairs or squatting",
      "Symptoms limiting sports",
      "Recurring knee tendon pain"
    ],
    
    relatedConditions: ['knee-pain-patellofemoral', 'it-band-syndrome', 'acl-injuries'],
    
    faqs: [
      {
        question: "Can I keep playing while doing rehab?",
        answer: "Often yes, with load management. We might reduce jumping frequency, modify training, or adjust playing time. Complete rest usually isn't necessary if we manage load properly."
      },
      {
        question: "Why do decline squats work?",
        answer: "Decline squats increase load on the patellar tendon while reducing patellofemoral stress. The angle allows greater eccentric loading, which stimulates tendon remodeling."
      }
    ]
  },

  'shoulder-impingement': {
    overview: `Shoulder impingement is pain when you lift your arm overhead. It happens when tendons get pinched in the shoulder space. I see this constantly in swimmers, painters, and anyone doing overhead work in Burlington. The good news: it responds really well to the right treatment approach.

This isn't just about creating more space in your shoulder. It's about how your shoulder blade moves, your posture, and the strength balance around your shoulder. Fix these, and the impingement usually resolves.`,
    
    biomechanics: `Your rotator cuff tendons pass through a narrow space (subacromial space) between your shoulder bones. When this space narrows due to poor posture, weak muscles, or bone spurs, the tendons get pinched. This causes pain and can lead to tendon damage.

Poor shoulder blade (scapular) control is often the real culprit. When your shoulder blade doesn't move properly, it narrows the space and increases impingement. That's why shoulder blade exercises are so important.`,
    
    commonMisconceptions: [
      "Surgery is needed to create space: Most cases resolve with physiotherapy addressing movement patterns.",
      "It's just bursitis: While the bursa may be inflamed, it's usually secondary to impingement.",
      "Strengthen the rotator cuff only: Shoulder blade muscles are equally important.",
      "Avoid overhead activities forever: Proper rehab allows return to overhead sports/work.",
      "Injections fix it: They may help symptoms but don't address the cause."
    ],
    
    treatmentApproach: {
      title: "Comprehensive Shoulder Impingement Treatment",
      description: "Addressing all contributing factors:",
      techniques: [
        "Scapular Stabilization: Retraining shoulder blade movement patterns",
        "Rotator Cuff Strengthening: Building dynamic stability",
        "Posture Correction: Addressing forward head and rounded shoulders",
        "Manual Therapy: Improving shoulder and thoracic spine mobility",
        "Movement Retraining: Correcting overhead movement patterns",
        "Activity Modification: Temporary changes while building capacity",
        "Progressive Loading: Gradual return to overhead activities"
      ]
    },
    
    timeline: [
      {
        phase: "Pain Relief",
        duration: "1-2 weeks",
        description: "Activity modification, manual therapy, beginning scapular exercises."
      },
      {
        phase: "Movement Restoration",
        duration: "2-4 weeks",
        description: "Progressive strengthening, improving overhead mobility."
      },
      {
        phase: "Return to Function",
        duration: "4-8 weeks",
        description: "Sport or work-specific training, building endurance."
      }
    ],
    
    redFlags: [
      "Sudden loss of arm function",
      "Severe night pain unrelieved by position",
      "Signs of complete rotator cuff tear",
      "Neck symptoms with arm pain",
      "Progressive weakness"
    ],
    
    whenToSeek: [
      "Pain with overhead activities",
      "Difficulty sleeping on shoulder",
      "Weakness with lifting",
      "Pain not improving with rest",
      "Affecting work or sports"
    ],
    
    relatedConditions: ['rotator-cuff-injuries', 'frozen-shoulder', 'thoracic-outlet-syndrome'],
    
    faqs: [
      {
        question: "Why does it hurt more at night?",
        answer: "Lying down reduces blood flow to the shoulder and can increase pressure in the subacromial space. Side-lying compresses the shoulder. I'll show you positions and strategies for better sleep."
      },
      {
        question: "Can I still work out?",
        answer: "Yes, with modifications. We'll adjust exercises to avoid impingement positions while building strength. Many exercises can continue. I'll guide you on what's safe and beneficial."
      }
    ]
  },

  'thoracic-outlet-syndrome': {
    overview: `Thoracic outlet syndrome (TOS) is compression of nerves or blood vessels between your neck and shoulder. That numbness in your arm, the cold fingers, the aching that gets worse with overhead work: these are signs your neurovascular structures need more space.

I see TOS in office workers with poor posture, athletes with overdeveloped chest muscles, and people after car accidents. It's often misdiagnosed because symptoms can mimic other conditions. Proper assessment is crucial for effective treatment.`,
    
    biomechanics: `The thoracic outlet is the space between your first rib and collarbone where nerves and blood vessels pass from your neck to your arm. Tight scalene muscles, a dropped shoulder, an extra rib, or poor posture can compress these structures.

There are three types: neurogenic (95% - nerve compression), venous (3% - vein compression), and arterial (1% - artery compression). Each presents differently and needs specific treatment approaches.`,
    
    commonMisconceptions: [
      "It's just carpal tunnel: TOS affects the whole arm, not just the hand.",
      "Surgery is the only option: Most neurogenic TOS responds to conservative treatment.",
      "It's rare: Actually quite common, just often misdiagnosed.",
      "Only affects one arm: Poor posture often causes bilateral symptoms.",
      "Exercise makes it worse: The right exercises are essential for recovery."
    ],
    
    treatmentApproach: {
      title: "Neurogenic TOS Treatment Protocol",
      description: "Creating space and improving nerve mobility:",
      techniques: [
        "Scalene Stretching: Releasing tight neck muscles that compress nerves",
        "First Rib Mobilization: Manual therapy to improve rib mobility",
        "Nerve Gliding: Improving neural mobility through the thoracic outlet",
        "Postural Retraining: Correcting forward head and rounded shoulders",
        "Breathing Exercises: Reducing accessory breathing muscle overuse",
        "Strengthening: Building support to maintain improved posture",
        "Ergonomic Setup: Optimizing work station to reduce compression"
      ]
    },
    
    timeline: [
      {
        phase: "Decompression",
        duration: "1-2 weeks",
        description: "Manual therapy, stretching, beginning postural work."
      },
      {
        phase: "Mobilization",
        duration: "2-6 weeks",
        description: "Nerve gliding, progressive strengthening, ergonomic changes."
      },
      {
        phase: "Maintenance",
        duration: "6-12 weeks",
        description: "Building endurance, preventing recurrence."
      }
    ],
    
    redFlags: [
      "Severe arm swelling",
      "Color changes in arm (white or blue)",
      "Severe weakness or muscle wasting",
      "Blood clots",
      "Complete loss of pulse"
    ],
    
    whenToSeek: [
      "Arm numbness or tingling",
      "Symptoms worse with arms overhead",
      "Cold or color changes in fingers",
      "Arm fatigue with activity",
      "Neck pain with arm symptoms"
    ],
    
    relatedConditions: ['carpal-tunnel-syndrome', 'shoulder-impingement', 'neck-pain'],
    
    faqs: [
      {
        question: "Why are my symptoms worse at night?",
        answer: "Sleep positions can compress the thoracic outlet. Arms overhead or sleeping on your side increases compression. I'll teach you positions that keep the outlet open during sleep."
      },
      {
        question: "Is this related to my posture?",
        answer: "Absolutely. Forward head posture and rounded shoulders narrow the thoracic outlet. Improving posture is essential for long-term relief. We'll work on both flexibility and strength."
      }
    ]
  },

  'ac-joint-injuries': {
    overview: `AC joint injuries are common in contact sports and falls onto the shoulder. That bump on top of your shoulder and pain with overhead movement means your acromioclavicular joint needs attention. I help Burlington athletes recover from AC separations and get back to their sports.

Not all AC injuries need surgery. Even complete separations (Grade 3) often do well with physiotherapy. The key is rebuilding strength and stability around the joint while respecting healing timelines.`,
    
    biomechanics: `Your AC joint connects your collarbone to your shoulder blade. It's small but handles significant forces during overhead activities and contact. The ligaments holding it together can stretch (Grade 1), partially tear (Grade 2), or completely rupture (Grade 3-6).

This joint is crucial for overhead movements and horizontal adduction (reaching across your body). Even after healing, altered mechanics here can affect your whole shoulder complex.`,
    
    commonMisconceptions: [
      "The bump means surgery is needed: Even visible deformity often heals well without surgery.",
      "You can't return to contact sports: Most athletes return to full contact after proper rehab.",
      "Pain equals damage: AC joints can be painful long after healing due to arthritis.",
      "Taping doesn't help: Proper taping can significantly reduce pain during recovery.",
      "It's just a minor injury: AC injuries need proper rehab to prevent chronic problems."
    ],
    
    treatmentApproach: {
      title: "Grade-Specific AC Joint Rehabilitation",
      description: "Protecting the joint while building function:",
      techniques: [
        "Initial Protection: Sling use for Grade 2-3 injuries",
        "Range of Motion: Early movement to prevent stiffness",
        "Scapular Strengthening: Building support around the AC joint",
        "Progressive Loading: Gradual return to overhead activities",
        "Taping Techniques: Support during return to sport",
        "Contact Progression: Structured return for collision sports",
        "Preventive Strategies: Reducing re-injury risk"
      ]
    },
    
    timeline: [
      {
        phase: "Protection",
        duration: "0-2 weeks",
        description: "Sling if needed, pain management, gentle range of motion."
      },
      {
        phase: "Mobilization",
        duration: "2-4 weeks",
        description: "Increasing range of motion, beginning strengthening."
      },
      {
        phase: "Strengthening",
        duration: "4-8 weeks",
        description: "Progressive loading, sport-specific exercises."
      },
      {
        phase: "Return to Sport",
        duration: "6-12 weeks",
        description: "Contact progression, full training with protection if needed."
      }
    ],
    
    redFlags: [
      "Tenting of skin over clavicle",
      "Neurovascular compromise",
      "Open wound or fracture",
      "Grade 4-6 separation",
      "Associated injuries"
    ],
    
    whenToSeek: [
      "Direct blow to shoulder",
      "Visible deformity at AC joint",
      "Pain with overhead movement",
      "Unable to lift arm",
      "Planning return to sports"
    ],
    
    relatedConditions: ['shoulder-impingement', 'rotator-cuff-injuries', 'frozen-shoulder'],
    
    faqs: [
      {
        question: "Will the bump go away?",
        answer: "With Grade 2-3 injuries, some deformity often remains even after healing. This is usually cosmetic only and doesn't affect function after proper rehab."
      },
      {
        question: "When can I return to hockey/football?",
        answer: "Grade 1: 2-3 weeks. Grade 2: 4-6 weeks. Grade 3: 8-12 weeks. Return depends on strength recovery and sport demands. I'll guide you through a safe progression."
      }
    ]
  },

  'biceps-tendinopathy': {
    overview: `Biceps tendinopathy is pain in the front of your shoulder from an irritated biceps tendon. That deep ache with lifting, the painful clicking, the discomfort with overhead work: your long head biceps tendon is telling you it needs help.

I treat this often in weightlifters, swimmers, and overhead workers in Burlington. The biceps tendon runs through the shoulder joint, so it's affected by shoulder problems too. Treatment needs to address both the tendon and any shoulder issues.`,
    
    biomechanics: `Your biceps has two heads. The long head travels through the shoulder joint and attaches inside. This unique path makes it vulnerable to impingement, instability, and degeneration. It acts as a shoulder stabilizer, not just an elbow flexor.

Repetitive overhead activities, heavy lifting with poor form, and shoulder impingement all stress this tendon. Age-related changes and previous shoulder injuries increase risk.`,
    
    commonMisconceptions: [
      "It's just from doing too many curls: Overhead activities stress it more than curls.",
      "The tendon will rupture: Most tendinopathy doesn't progress to rupture.",
      "Rest fixes it: Like other tendinopathies, it needs progressive loading.",
      "Surgery is usually needed: Most cases respond to conservative treatment.",
      "It's isolated from shoulder problems: Often occurs with rotator cuff issues."
    ],
    
    treatmentApproach: {
      title: "Biceps-Specific Loading Program",
      description: "Treating the tendon and shoulder together:",
      techniques: [
        "Eccentric Loading: Progressive biceps strengthening for tendon remodeling",
        "Shoulder Stabilization: Addressing rotator cuff and scapular control",
        "Manual Therapy: Improving shoulder joint mobility",
        "Activity Modification: Adjusting lifting techniques",
        "Tendon Gliding: Maintaining biceps tendon mobility",
        "Postural Work: Reducing forward shoulder position",
        "Gradual Return: Progressive loading back to full activities"
      ]
    },
    
    timeline: [
      {
        phase: "Pain Reduction",
        duration: "1-2 weeks",
        description: "Activity modification, beginning isometric exercises."
      },
      {
        phase: "Progressive Loading",
        duration: "3-6 weeks",
        description: "Eccentric exercises, shoulder strengthening."
      },
      {
        phase: "Return to Activity",
        duration: "6-12 weeks",
        description: "Sport-specific training, technique refinement."
      }
    ],
    
    redFlags: [
      "Sudden pop with immediate bruising (rupture)",
      "Significant deformity (Popeye sign)",
      "Severe weakness",
      "Night pain unrelieved by position",
      "Rapid onset of symptoms"
    ],
    
    whenToSeek: [
      "Front shoulder pain with lifting",
      "Deep shoulder ache",
      "Painful clicking in shoulder",
      "Pain with overhead activities",
      "Not improving with rest"
    ],
    
    relatedConditions: ['shoulder-impingement', 'rotator-cuff-injuries', 'frozen-shoulder'],
    
    faqs: [
      {
        question: "Should I stop lifting weights?",
        answer: "Not necessarily. We'll modify exercises to reduce biceps stress while maintaining fitness. Some exercises continue, others need temporary substitution. Complete rest often delays healing."
      },
      {
        question: "What if the tendon ruptures?",
        answer: "Long head biceps ruptures often don't need surgery, especially in older adults. You lose about 20% biceps strength but function remains good. Young, active people might choose surgery."
      }
    ]
  },

  'facet-joint-syndrome': {
    overview: `Facet joint syndrome is arthritis or irritation in the small joints of your spine. That specific back pain that gets worse with extension or rotation is classic facet joint pain. I help many Burlington residents manage this condition and stay active.

These joints guide spinal movement and share the load with your discs. When they become inflamed or arthritic, every movement can hurt. The good news: facet joint pain responds well to manual therapy and specific exercises.`,
    
    biomechanics: `Facet joints connect each vertebra to the ones above and below. They allow your spine to bend and twist while preventing excessive movement. Each joint has a capsule, cartilage, and surrounding muscles that can all be pain sources.

Poor posture, repetitive movements, and age-related changes stress these joints. Extended standing, walking, or backward bending typically aggravates facet pain, while sitting or forward bending often relieves it.`,
    
    commonMisconceptions: [
      "It's just arthritis, nothing helps: Many treatments effectively manage facet joint pain.",
      "Facet joints don't cause leg pain: They can refer pain into the buttock and thigh.",
      "Surgery is needed: Most facet syndrome responds to conservative treatment.",
      "Activity makes it worse: The right activities actually help.",
      "It only affects older people: I see facet problems in people of all ages."
    ],
    
    treatmentApproach: {
      title: "Facet Joint-Specific Treatment",
      description: "Targeted approach for lasting relief:",
      techniques: [
        "Manual Therapy: Specific mobilizations for facet joint mobility",
        "Directional Exercises: Movements that reduce facet compression",
        "Core Stabilization: Reducing load on facet joints",
        "Postural Training: Positions that minimize facet stress",
        "Activity Modification: Adjusting aggravating activities",
        "Strengthening: Building support around affected segments",
        "Pain Management: Various strategies for flare-ups"
      ]
    },
    
    timeline: [
      {
        phase: "Pain Relief",
        duration: "1-2 weeks",
        description: "Manual therapy, pain-relieving positions, gentle exercises."
      },
      {
        phase: "Mobility and Strength",
        duration: "2-6 weeks",
        description: "Progressive exercises, improving function."
      },
      {
        phase: "Long-term Management",
        duration: "Ongoing",
        description: "Maintenance exercises, flare-up strategies, staying active."
      }
    ],
    
    redFlags: [
      "Progressive neurological symptoms",
      "Night pain with weight loss",
      "Fever with back pain",
      "Loss of bowel/bladder control",
      "Severe, unrelenting pain"
    ],
    
    whenToSeek: [
      "Back pain worse with extension",
      "Pain with rotation or side bending",
      "Morning stiffness over 30 minutes",
      "Pain affecting daily activities",
      "Recurring episodes of back pain"
    ],
    
    relatedConditions: ['low-back-pain', 'spinal-stenosis', 'degenerative-disc-disease'],
    
    faqs: [
      {
        question: "Are injections my only option?",
        answer: "Not at all. Manual therapy, specific exercises, and activity modification help most people. Injections are considered if conservative treatment doesn't provide adequate relief after 6-8 weeks."
      },
      {
        question: "Will I need this treatment forever?",
        answer: "Once we identify what helps your facet joints, you'll have tools to manage flare-ups independently. Most people need periodic tune-ups but not constant treatment."
      }
    ]
  }
};

// Export function to merge base condition with detailed content
export function getDetailedCondition(slug: string, baseCondition: Condition): Condition {
  const detailedContent = detailedConditionsContent[slug];
  if (!detailedContent) {
    return baseCondition;
  }
  
  return {
    ...baseCondition,
    ...detailedContent
  } as Condition;
}