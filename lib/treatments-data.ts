export interface Treatment {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  conditions: string[];
  process: {
    title: string;
    description: string;
  }[];
  expectations: string;
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedConditions: string[];
  metaDescription: string;
  keywords: string[];
}

export const treatments: Treatment[] = [
  {
    id: 'pain-education',
    name: 'Pain Education & Self-Management',
    shortDescription: 'Understanding pain science to reduce fear and improve movement confidence alongside active rehabilitation.',
    description: 'Pain neuroscience education helps you understand the science behind your pain experience and develop effective strategies for managing it. I teach you how pain works in the nervous system, why it can persist beyond tissue healing, and how to approach movement and activity more confidently. This education is integrated with hands-on treatment and exercise to help you take control of your recovery.',
    benefits: [
      'Better understanding of your pain',
      'Reduced fear and anxiety about movement',
      'Improved confidence in daily activities',
      'More active participation in your recovery',
      'Better long-term outcomes when combined with exercise',
      'Enhanced quality of life'
    ],
    conditions: [
      'Chronic pain',
      'Persistent back pain',
      'Central sensitization',
      'Complex pain conditions',
      'Post-injury pain that has lasted beyond normal healing',
      'Recurring pain patterns'
    ],
    process: [
      {
        title: 'Pain Assessment',
        description: 'Understanding your unique pain experience and contributing factors'
      },
      {
        title: 'Education Sessions',
        description: 'Learning about pain neuroscience in understandable terms'
      },
      {
        title: 'Strategy Development',
        description: 'Creating personalized coping and management strategies'
      },
      {
        title: 'Implementation',
        description: 'Putting strategies into practice with ongoing support'
      }
    ],
    expectations: 'Pain education sessions involve discussion, visual aids, and practical exercises. You\'ll learn why pain persists, how thoughts and emotions affect pain, and specific strategies for your situation. This isn\'t just talking - it\'s active learning with immediate practical applications. Most people find this knowledge reduces their fear and improves their confidence.',
    faqs: [
      {
        question: 'How can education reduce my pain?',
        answer: 'Understanding pain reduces fear and anxiety, which are pain amplifiers. Knowledge about pain science helps you make better decisions and feel more in control.'
      },
      {
        question: 'Is this just positive thinking?',
        answer: 'No, this is evidence-based neuroscience education combined with practical strategies. It\'s about understanding your nervous system and using that knowledge effectively.'
      },
      {
        question: 'Will I still need hands-on treatment?',
        answer: 'Often yes. Pain education complements other treatments and makes them more effective by addressing the cognitive and emotional aspects of pain.'
      }
    ],
    relatedConditions: ['chronic-back-pain', 'fibromyalgia', 'neck-pain', 'arthritis'],
    metaDescription: 'Pain education and self-management strategies in Burlington. Learn to understand and control your pain with expert physiotherapy guidance.',
    keywords: ['pain education', 'pain science', 'self-management', 'chronic pain', 'pain neuroscience education']
  },
  {
    id: 'sports-rehab-return-to-sport',
    name: 'Sports Rehabilitation & Return to Sport',
    shortDescription: 'Evidence-based recovery programs for athletes to safely return to sport after injury.',
    description: 'Sports rehabilitation combines objective assessment with sport-specific training to help athletes recover from injury and return to competition. I use validated testing protocols and progressive criteria to ensure you\'re physically and psychologically ready to return. These evidence-based programs minimize re-injury risk while restoring your pre-injury performance level, getting you back to what you love safely.',
    benefits: [
      'Safe, structured return to competition',
      'Validated objective readiness testing',
      'Sport-specific conditioning',
      'Reduced re-injury risk (up to 85% reduction with proper criteria)',
      'Return to pre-injury performance level',
      'Psychological readiness assessment',
      'Biomechanical assessment and correction',
      'Injury prevention strategies'
    ],
    conditions: [
      'ACL reconstruction',
      'Ankle sprains',
      'Muscle strains',
      'Overuse injuries',
      'Post-surgical recovery',
      'Shoulder injuries',
      'Tennis elbow',
      'Any sports injury'
    ],
    process: [
      {
        title: 'Sport-Specific Assessment',
        description: 'Evaluating movement patterns, strength deficits, and current function specific to your sport'
      },
      {
        title: 'Acute Care & Early Rehab',
        description: 'Managing initial injury with appropriate protection while maintaining fitness'
      },
      {
        title: 'Progressive Loading',
        description: 'Gradually building strength, power, and endurance through structured phases'
      },
      {
        title: 'Sport-Specific Training',
        description: 'Incorporating movements and demands specific to your sport and position'
      },
      {
        title: 'Return to Play Testing',
        description: 'Objective testing to confirm readiness for practice and competition'
      }
    ],
    expectations: 'Sports rehabilitation progresses through distinct phases: initial healing, restoration of movement, strength building, power development, and sport-specific training. You\'ll undergo regular testing to track progress and ensure safety at each phase. Training intensity progressively matches your sport\'s demands, preparing both body and mind for return to competition. The timeline varies by injury and sport, but the systematic approach ensures you return when truly ready.',
    faqs: [
      {
        question: 'How long until I can return to my sport?',
        answer: 'Timelines vary by injury severity and sport demands. I use objective testing rather than just time to determine readiness, typically ranging from weeks for minor injuries to months for major ones.'
      },
      {
        question: 'What tests determine if I\'m ready to play?',
        answer: 'Sport-specific tests including strength comparisons, hop tests, agility drills, and psychological readiness scales. You need to meet specific benchmarks before progressing to each phase.'
      },
      {
        question: 'Can I train while injured?',
        answer: 'Yes! I modify training to maintain fitness in uninjured areas while the injured area heals, keeping you as game-ready as possible.'
      },
      {
        question: 'Do you work with recreational athletes?',
        answer: 'Absolutely. My programs are tailored to your level and goals, whether you\'re a weekend warrior or competitive athlete.'
      }
    ],
    relatedConditions: ['acl-injuries', 'ankle-sprains', 'hamstring-strains', 'rotator-cuff-injuries', 'tennis-elbow', 'shoulder-instability'],
    metaDescription: 'Sports rehabilitation and return to sport programs in Burlington. Safe, structured protocols to get athletes back to competition after injury.',
    keywords: ['sports rehabilitation', 'return to sport', 'athletic rehabilitation', 'sports injury recovery', 'return to play', 'sports physiotherapy']
  },
  {
    id: 'dry-needling',
    name: 'Dry Needling',
    shortDescription: 'Precise needle therapy targeting trigger points for effective pain relief and improved muscle function.',
    description: 'Dry needling uses thin filiform needles to target myofascial trigger points and tight muscle bands. This technique can create a local twitch response that helps reduce muscle tension, increase blood flow, and decrease pain. Unlike acupuncture, dry needling is based on Western medicine principles and neuroanatomy. Evidence shows short-term effectiveness for musculoskeletal pain conditions.',
    benefits: [
      'Trigger point release',
      'Decreased muscle tension',
      'Increased blood flow to tissues (up to 72% above baseline)',
      'Reduced referred pain patterns',
      'Short-term pain reduction',
      'Improved functional outcomes'
    ],
    conditions: [
      'Myofascial pain',
      'Neck pain with trigger points',
      'Tennis elbow',
      'Plantar fasciitis',
      'Shoulder pain',
      'Chronic muscle tightness'
    ],
    process: [
      {
        title: 'Trigger Point Assessment',
        description: 'Identifying specific points of muscle dysfunction and referred pain patterns'
      },
      {
        title: 'Needle Insertion',
        description: 'Precise placement of thin needles into trigger points'
      },
      {
        title: 'Twitch Response',
        description: 'Brief muscle contraction that signals successful trigger point release'
      },
      {
        title: 'Recovery',
        description: 'Light stretching and movement to maintain improvements'
      }
    ],
    expectations: 'During dry needling, you\'ll feel a small prick as the needle enters, then potentially a deep ache or twitch when the trigger point is contacted. This sensation is brief and indicates effective treatment. Some people experience immediate relief, while others notice improvements over 24-48 hours. Mild soreness afterward is normal.',
    faqs: [
      {
        question: 'Is dry needling the same as acupuncture?',
        answer: 'No, dry needling targets specific muscle trigger points based on anatomy, while acupuncture follows traditional Chinese medicine meridians.'
      },
      {
        question: 'How deep do the needles go?',
        answer: 'Needle depth varies from a few millimeters to several centimeters, depending on the target muscle and your body type.'
      },
      {
        question: 'Are there any risks?',
        answer: 'When performed by trained physiotherapists, dry needling is very safe. Minor bruising or soreness may occur but serious complications are extremely rare.'
      }
    ],
    relatedConditions: ['tennis-elbow', 'plantar-fasciitis', 'shoulder-impingement', 'neck-pain'],
    metaDescription: 'Dry needling therapy in Burlington for trigger point release and pain relief. Expert physiotherapy using IMS techniques. Book today.',
    keywords: ['dry needling', 'trigger point therapy', 'IMS', 'intramuscular stimulation', 'myofascial release']
  },
  {
    id: 'exercise-therapy',
    name: 'Exercise Therapy',
    shortDescription: 'Personalized exercise programs designed to restore strength, flexibility, and function.',
    description: 'Exercise therapy is a cornerstone of effective musculoskeletal rehabilitation. I design individualized programs that progressively build strength, improve flexibility, and restore function. Using evidence-based protocols, I ensure exercises are safe, effective, and tailored to your specific goals and abilities. Sustained benefits require ongoing participation, which is why I focus on creating programs you can maintain long-term.',
    benefits: [
      'Progressive strength building',
      'Improved flexibility and range of motion',
      'Enhanced balance and coordination',
      'Reduced pain and improved function',
      'Facilitated return to activities',
      'Long-term symptom management with continued practice'
    ],
    conditions: [
      'Post-surgical recovery',
      'Sports injuries',
      'Chronic pain',
      'Muscle weakness',
      'Balance disorders',
      'Arthritis'
    ],
    process: [
      {
        title: 'Movement Assessment',
        description: 'Detailed evaluation of strength, flexibility, and movement patterns'
      },
      {
        title: 'Program Design',
        description: 'Creating a customized exercise plan matching your goals and abilities'
      },
      {
        title: 'Guided Practice',
        description: 'Learning proper form and technique with hands-on guidance'
      },
      {
        title: 'Progressive Loading',
        description: 'Gradually advancing exercises as you improve'
      }
    ],
    expectations: 'Your exercise program will start at an appropriate level for your current abilities and gradually progress. Sessions include instruction on proper form, practice with feedback, and modifications as needed. You\'ll receive a home program with clear instructions. Expect to feel muscles working but not sharp pain.',
    faqs: [
      {
        question: 'What if I\'ve never exercised before?',
        answer: 'No problem! I start at your current level and progress gradually. Every program is individualized, and I teach proper form step-by-step.'
      },
      {
        question: 'Will exercises make my pain worse?',
        answer: 'Therapeutic exercises are carefully selected to help, not harm. Some muscle soreness is normal, but I monitor your response and adjust as needed.'
      },
      {
        question: 'How long until I see results?',
        answer: 'Many people notice improvements in 2-4 weeks with consistent practice. Significant strength gains typically occur within 6-8 weeks.'
      }
    ],
    relatedConditions: ['rotator-cuff-injuries', 'knee-pain-patellofemoral', 'hip-osteoarthritis', 'postural-dysfunction'],
    metaDescription: 'Personalized exercise therapy programs in Burlington. Build strength, improve flexibility, and restore function with expert physiotherapy guidance.',
    keywords: ['exercise therapy', 'therapeutic exercise', 'strength training', 'rehabilitation exercises', 'physiotherapy programs']
  },
  {
    id: 'joint-mobilization',
    name: 'Joint Mobilization',
    shortDescription: 'Graded techniques to restore joint movement and reduce stiffness.',
    description: 'Joint mobilization uses specific graded movements to restore normal joint mechanics, reduce pain, and improve range of motion. These precise techniques target joint restrictions that limit movement and cause discomfort. I apply controlled forces to help joints move more freely within their normal range.',
    benefits: [
      'Increased joint range of motion',
      'Reduced joint stiffness',
      'Decreased pain and inflammation',
      'Improved joint nutrition',
      'Better movement quality',
      'Prevention of compensatory patterns'
    ],
    conditions: [
      'Frozen shoulder',
      'Ankle stiffness',
      'Neck restrictions',
      'Back stiffness',
      'Hip impingement',
      'Post-surgical stiffness'
    ],
    process: [
      {
        title: 'Joint Assessment',
        description: 'Testing joint mobility in all planes of movement to identify restrictions'
      },
      {
        title: 'Graded Mobilization',
        description: 'Applying specific grades of movement based on your condition and tolerance'
      },
      {
        title: 'Combined Techniques',
        description: 'Integrating mobilization with movement to enhance effectiveness'
      },
      {
        title: 'Maintenance Exercises',
        description: 'Teaching self-mobilization techniques to maintain gains'
      }
    ],
    expectations: 'During joint mobilization, you\'ll feel rhythmic movements or sustained pressure at the joint. The techniques are generally comfortable and often provide immediate relief. Some people experience mild soreness afterward, similar to post-exercise soreness. Improvements in movement are often noticed immediately.',
    faqs: [
      {
        question: 'Is joint mobilization the same as manipulation?',
        answer: 'No, mobilization uses gentle, controlled movements within your comfort range, while manipulation involves high-velocity thrusts. I focus on mobilization techniques.'
      },
      {
        question: 'How quickly will I see results?',
        answer: 'Many people notice improved movement immediately after treatment, with continued improvements over several sessions.'
      },
      {
        question: 'Is it safe for arthritis?',
        answer: 'Yes, gentle joint mobilization is safe and beneficial for arthritic joints, helping maintain mobility and reduce stiffness.'
      }
    ],
    relatedConditions: ['frozen-shoulder', 'facet-joint-syndrome', 'si-joint-dysfunction', 'ankle-sprains'],
    metaDescription: 'Joint mobilization physiotherapy in Burlington. Expert techniques to restore movement, reduce stiffness, and improve joint function.',
    keywords: ['joint mobilization', 'joint stiffness', 'range of motion', 'manual therapy', 'joint therapy']
  },
  {
    id: 'soft-tissue-myofascial-release',
    name: 'Soft Tissue & Myofascial Therapy',
    shortDescription: 'Targeted hands-on techniques to address muscle tension, pain, and movement restrictions.',
    description: 'Soft tissue therapy combines various manual techniques to address muscle tightness, pain, and movement restrictions. I use specific pressure, sustained holds, and movement to reduce pain sensitivity and improve tissue mobility. This approach effectively treats both acute muscle injuries and chronic soft tissue problems.',
    benefits: [
      'Reduced muscle tension',
      'Improved tissue mobility',
      'Enhanced circulation',
      'Better posture alignment',
      'Increased flexibility',
      'Reduced chronic pain',
      'Improved movement patterns'
    ],
    conditions: [
      'Muscle strains',
      'IT band syndrome',
      'Plantar fasciitis',
      'Chronic back pain',
      'Chronic neck pain',
      'Tennis elbow',
      'Post-surgical scarring',
      'Chronic muscle tightness'
    ],
    process: [
      {
        title: 'Tissue & Fascial Assessment',
        description: 'Evaluating tissue mobility and identifying restriction patterns, adhesions, and dysfunction'
      },
      {
        title: 'Release Techniques',
        description: 'Applying specific pressure, sustained holds, and cross-hand stretching to release restrictions'
      },
      {
        title: 'Active Participation',
        description: 'Incorporating your movement to enhance release effectiveness'
      },
      {
        title: 'Movement Integration',
        description: 'Combining release with stretching and strengthening for lasting change'
      }
    ],
    expectations: 'During treatment, you\'ll feel firm to moderate pressure, stretching sensations, and sustained holds. The technique ranges from targeted deep work to gentle sustained pressure depending on the area. You may feel warmth, tingling, or softening as tissues release. Some areas may be tender initially but should feel better as restriction releases. The process can range from intense to relaxing. Most people experience immediate improvements in flexibility and reduced tension, with cumulative benefits over multiple sessions.',
    faqs: [
      {
        question: 'What is fascia and why does it matter?',
        answer: 'Fascia is connective tissue that surrounds all muscles and organs. When restricted, it can cause pain and limit movement throughout the body, even in distant areas.'
      },
      {
        question: 'How is this different from massage?',
        answer: 'This treatment is more targeted, combines pressure with specific movements and sustained holds, and addresses the fascial system rather than just muscles. It focuses on particular restrictions rather than general relaxation.'
      },
      {
        question: 'Why do some techniques feel gentle while others are more intense?',
        answer: 'Different tissues respond to different approaches. Fascia responds better to gentle, sustained pressure, while adhesions may need firmer targeted work. I adjust based on your tissue response and tolerance.'
      },
      {
        question: 'How often should I get treatment?',
        answer: 'Initially, weekly sessions are beneficial. As tissues improve, we can space treatments further apart.'
      }
    ],
    relatedConditions: ['it-band-syndrome', 'plantar-fasciitis', 'tennis-elbow', 'hamstring-strains', 'chronic-back-pain', 'fibromyalgia'],
    metaDescription: 'Soft tissue and myofascial release therapy in Burlington. Expert treatment for muscle tension, fascial restrictions, chronic pain, and improved mobility.',
    keywords: ['soft tissue release', 'myofascial release', 'muscle tension', 'fascial therapy', 'tissue mobility', 'fascial restrictions', 'chronic pain treatment']
  },
  {
    id: 'trigger-point-therapy',
    name: 'Trigger Point Therapy',
    shortDescription: 'Focused pressure techniques to address painful trigger points and reduce muscle pain.',
    description: 'Trigger point therapy targets specific tender areas in muscles that contribute to local and regional pain. Using sustained pressure techniques, I address these painful points to help reduce muscle pain and tension. This approach can be helpful for chronic muscle pain and muscle-related discomfort.',
    benefits: [
      'Reduced trigger point tenderness',
      'Decreased referred pain',
      'Improved muscle function',
      'Better posture',
      'Enhanced flexibility',
      'Reduced muscle tension'
    ],
    conditions: [
      'Neck and shoulder pain',
      'Lower back pain',
      'Hip pain',
      'Myofascial pain syndrome',
      'Chronic muscle tension'
    ],
    process: [
      {
        title: 'Trigger Point Mapping',
        description: 'Locating active and latent trigger points through palpation'
      },
      {
        title: 'Pressure Application',
        description: 'Applying sustained pressure to deactivate trigger points'
      },
      {
        title: 'Release Techniques',
        description: 'Using various methods to ensure complete trigger point release'
      },
      {
        title: 'Prevention Strategies',
        description: 'Teaching self-treatment and prevention techniques'
      }
    ],
    expectations: 'During trigger point therapy, you\'ll feel focused pressure on tender spots that may initially reproduce your familiar pain pattern. This pressure is maintained until the trigger point releases, usually within 30-90 seconds. You may experience immediate relief or gradual improvement over 24-48 hours.',
    faqs: [
      {
        question: 'Why does pressure on one spot cause pain elsewhere?',
        answer: 'Trigger points have characteristic referred pain patterns. Treating the trigger point resolves both local and referred pain.'
      },
      {
        question: 'How many treatments are needed?',
        answer: 'Active trigger points often improve significantly in 3-6 sessions, though chronic cases may require more treatment.'
      },
      {
        question: 'Can I treat trigger points myself?',
        answer: 'Yes, I\'ll teach you self-treatment techniques using tools like tennis balls for maintenance between sessions.'
      }
    ],
    relatedConditions: ['neck-pain', 'shoulder-impingement', 'piriformis-syndrome', 'tennis-elbow'],
    metaDescription: 'Trigger point therapy in Burlington. Expert treatment for muscle knots, referred pain, and chronic tension. Get lasting relief today.',
    keywords: ['trigger point therapy', 'trigger point release', 'myofascial trigger points', 'muscle knots', 'referred pain']
  },
  {
    id: 'cupping-therapy',
    name: 'Cupping Therapy',
    shortDescription: 'Technique using controlled suction to address muscle tension and localized pain.',
    description: 'Cupping therapy uses controlled suction to create negative pressure on the skin and underlying tissues. Research shows low to moderate quality evidence that cupping may help reduce pain in certain musculoskeletal conditions, particularly in the short term (2-8 weeks). While the exact mechanisms remain under investigation, this technique is used to address muscle tension and localized pain.',
    benefits: [
      'Enhanced blood circulation',
      'Reduced muscle tension',
      'Improved lymphatic drainage',
      'Decreased inflammation',
      'Fascial release',
      'Pain reduction'
    ],
    conditions: [
      'Low back pain',
      'Neck pain',
      'Shoulder tension',
      'Chronic muscle pain'
    ],
    process: [
      {
        title: 'Assessment',
        description: 'Identifying areas of tension and determining cupping placement'
      },
      {
        title: 'Cup Application',
        description: 'Placing cups with appropriate suction for your condition'
      },
      {
        title: 'Treatment Variations',
        description: 'Using static or dynamic cupping based on treatment goals'
      },
      {
        title: 'Post-Treatment Care',
        description: 'Providing aftercare instructions and movement recommendations'
      }
    ],
    expectations: 'During cupping, you\'ll feel a pulling sensation as the cups create suction. This is generally comfortable and often relaxing. Cups may be left stationary or moved across the skin. Temporary circular marks are common and typically fade within 3-10 days. Most people experience immediate relief of muscle tension.',
    faqs: [
      {
        question: 'Do the marks hurt?',
        answer: 'No, the circular marks are painless. They\'re caused by increased blood flow to the area and are actually a sign of the therapeutic effect.'
      },
      {
        question: 'How long do cups stay on?',
        answer: 'Typically 5-15 minutes for static cupping, or cups may be moved dynamically during treatment for different effects.'
      },
      {
        question: 'Is cupping safe?',
        answer: 'Yes, when performed by trained professionals, cupping is very safe with minimal side effects.'
      }
    ],
    relatedConditions: ['low-back-pain', 'it-band-syndrome', 'shoulder-impingement', 'neck-pain'],
    metaDescription: 'Cupping therapy in Burlington. Professional treatment for pain relief, improved circulation, and muscle tension release.',
    keywords: ['cupping therapy', 'cupping treatment', 'myofascial cupping', 'vacuum therapy', 'traditional cupping']
  },
  {
    id: 'iastm',
    name: 'IASTM (Instrument Assisted Soft Tissue Mobilization)',
    shortDescription: 'Instrument-assisted techniques to address soft tissue restrictions and pain.',
    description: 'IASTM uses specially designed instruments to apply controlled pressure to soft tissues. Research shows moderate-quality evidence that IASTM may help reduce pain and improve range of motion in certain musculoskeletal conditions. The technique is thought to have neurophysiological effects on pain perception and may influence tissue sensitivity.',
    benefits: [
      'Breaking down scar tissue',
      'Improved tissue mobility',
      'Enhanced healing response',
      'Reduced chronic inflammation',
      'Better movement patterns',
      'Faster recovery'
    ],
    conditions: [
      'Plantar fasciitis',
      'Achilles tendinopathy',
      'IT band syndrome',
      'Tennis elbow',
      'Chronic tendinopathies'
    ],
    process: [
      {
        title: 'Tissue Scanning',
        description: 'Using instruments to detect areas of restriction and dysfunction'
      },
      {
        title: 'Treatment Application',
        description: 'Applying specific techniques to break down adhesions'
      },
      {
        title: 'Tissue Response',
        description: 'Monitoring tissue changes and adjusting pressure accordingly'
      },
      {
        title: 'Movement Integration',
        description: 'Combining IASTM with exercises for optimal results'
      }
    ],
    expectations: 'During IASTM, you\'ll feel the instruments gliding over your skin with varying pressure. Some areas may feel gritty or tender initially. Mild redness and warmth are normal responses indicating increased blood flow. Some people experience temporary soreness, similar to deep tissue work, followed by improved mobility.',
    faqs: [
      {
        question: 'Why use tools instead of hands?',
        answer: 'The instruments allow for more precise treatment, better tissue detection, and can reduce therapist fatigue while maintaining consistent pressure.'
      },
      {
        question: 'Will it leave marks?',
        answer: 'Mild redness is common and beneficial, indicating increased blood flow. This typically fades within a few hours to a day.'
      },
      {
        question: 'How many sessions are needed?',
        answer: 'Most conditions respond well within 6-8 sessions, though chronic issues may require additional treatment.'
      }
    ],
    relatedConditions: ['plantar-fasciitis', 'achilles-tendinopathy', 'it-band-syndrome', 'tennis-elbow'],
    metaDescription: 'IASTM therapy in Burlington. Instrument assisted soft tissue mobilization for scar tissue, adhesions, and chronic pain.',
    keywords: ['IASTM', 'instrument assisted soft tissue', 'Graston technique', 'soft tissue mobilization', 'scar tissue treatment']
  },
  {
    id: 'postural-assessment',
    name: 'Postural Assessment & Movement Strategies',
    shortDescription: 'Analysis of posture and movement patterns to develop adaptable positioning strategies.',
    description: 'Postural assessment involves analyzing your body alignment, movement patterns, and ergonomics to identify habits that may contribute to discomfort. Rather than pursuing a single ideal posture, I focus on improving postural awareness and developing the ability to move comfortably through different positions. This approach helps you adapt your posture to different activities and reduces sustained positions that may contribute to pain.',
    benefits: [
      'Improved postural awareness',
      'Greater movement variability',
      'Reduced sustained strain',
      'Better ergonomic strategies',
      'Enhanced body awareness',
      'Adaptable positioning for daily activities'
    ],
    conditions: [
      'Chronic neck pain',
      'Upper crossed syndrome',
      'Lower back pain',
      'Shoulder impingement',
      'Headaches',
      'Postural dysfunction'
    ],
    process: [
      {
        title: 'Static Assessment',
        description: 'Analyzing standing and sitting posture from multiple angles'
      },
      {
        title: 'Dynamic Analysis',
        description: 'Evaluating movement patterns and functional positions'
      },
      {
        title: 'Correction Strategy',
        description: 'Developing specific exercises and awareness techniques'
      },
      {
        title: 'Ergonomic Advice',
        description: 'Optimizing work and home environments'
      }
    ],
    expectations: 'The assessment involves observation and measurement of your posture in various positions. I\'ll take photos for comparison and education. You\'ll learn specific exercises and receive ergonomic recommendations. Changes in posture take time and conscious effort, with noticeable improvements typically occurring within 4-6 weeks.',
    faqs: [
      {
        question: 'Can posture really be changed?',
        answer: 'Yes! With targeted exercises, awareness training, and consistency, significant postural improvements are achievable at any age.'
      },
      {
        question: 'How long before I see results?',
        answer: 'You\'ll feel different within days, but visible changes and reduced pain typically occur within 4-6 weeks of consistent practice.'
      },
      {
        question: 'Do I need special equipment?',
        answer: 'Most postural exercises require minimal equipment. I\'ll recommend simple tools if needed for your specific program.'
      }
    ],
    relatedConditions: ['postural-dysfunction', 'neck-pain', 'shoulder-impingement', 'low-back-pain'],
    metaDescription: 'Postural assessment and correction in Burlington. Expert analysis and treatment for better alignment, reduced pain, and improved function.',
    keywords: ['postural assessment', 'posture correction', 'ergonomic assessment', 'body alignment', 'postural dysfunction']
  },
  {
    id: 'post-surgical-rehabilitation',
    name: 'Post-Surgical Rehabilitation',
    shortDescription: 'Evidence-based recovery programs following surgery to restore function and strength.',
    description: 'Post-surgical rehabilitation follows evidence-based protocols designed to protect healing tissues while progressively restoring movement, strength, and function. Treatment is phase-appropriate, respecting tissue healing timelines (typically inflammatory phase 0-7 days, proliferative phase 2-3 weeks, maturation phase 12-26 weeks). Progression is individualized based on surgical technique, tissue quality, and your response to treatment.',
    benefits: [
      'Faster recovery timelines',
      'Reduced post-operative complications',
      'Optimal scar tissue management',
      'Restored strength and function',
      'Safe return to activities',
      'Reduced chronic pain risk'
    ],
    conditions: [
      'ACL reconstruction',
      'Rotator cuff repair',
      'Joint replacements (hip, knee)',
      'Spinal surgery',
      'Fracture fixation',
      'Tendon repairs'
    ],
    process: [
      {
        title: 'Protection Phase',
        description: 'Managing swelling and pain while protecting surgical site'
      },
      {
        title: 'Mobility Restoration',
        description: 'Gradually recovering range of motion within surgical precautions'
      },
      {
        title: 'Strengthening Phase',
        description: 'Progressive loading to rebuild muscle strength and endurance'
      },
      {
        title: 'Functional Training',
        description: 'Sport or activity-specific training for full return to life'
      }
    ],
    expectations: 'Post-surgical rehabilitation follows specific protocols based on your surgery type and surgeon\'s guidelines. Early phases focus on protection and gentle movement, progressing to strengthening and functional training. Treatment frequency is typically higher initially (2-3 times per week) then decreases as independence improves.',
    faqs: [
      {
        question: 'When should I start physiotherapy after surgery?',
        answer: 'This varies by procedure. Some surgeries benefit from therapy within days, others require several weeks of healing first. Your surgeon will advise.'
      },
      {
        question: 'Will therapy be painful after surgery?',
        answer: 'Some discomfort is normal as tissues heal and mobilize, but I work within your pain tolerance and surgical precautions.'
      },
      {
        question: 'How long is post-surgical rehabilitation?',
        answer: 'Recovery timelines vary greatly: simple procedures may need 6-8 weeks, while complex surgeries like ACL reconstruction require 6-9 months.'
      }
    ],
    relatedConditions: ['acl-injuries', 'rotator-cuff-injuries', 'meniscus-tears', 'shoulder-instability'],
    metaDescription: 'Expert post-surgical rehabilitation in Burlington. Optimize your recovery after orthopedic surgery with specialized physiotherapy protocols.',
    keywords: ['post-surgical rehab', 'post-operative physiotherapy', 'surgical recovery', 'orthopedic rehabilitation']
  }
];

export function getTreatmentById(id: string): Treatment | undefined {
  return treatments.find(treatment => treatment.id === id);
}

export function getTreatmentsByCondition(conditionId: string): Treatment[] {
  return treatments.filter(treatment => 
    treatment.relatedConditions.includes(conditionId)
  );
}

export function getAllTreatments(): Treatment[] {
  return treatments;
}