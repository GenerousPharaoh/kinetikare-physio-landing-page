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
    shortDescription: 'Understanding pain science and developing effective strategies for long-term pain management.',
    description: 'Pain education helps you understand the neuroscience behind your pain experience and develop effective self-management strategies. I teach you how pain works, why it persists, and most importantly, how to take control of it. This approach empowers you with knowledge and practical tools for lasting improvement.',
    benefits: [
      'Better understanding of your pain',
      'Reduced fear and anxiety about movement',
      'Improved self-efficacy',
      'Decreased reliance on medications',
      'Better long-term outcomes',
      'Enhanced quality of life'
    ],
    conditions: [
      'Chronic pain',
      'Persistent back pain',
      'Fibromyalgia',
      'Complex pain conditions',
      'Post-injury sensitization',
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
    metaDescription: 'Pain education and self-management strategies in Ottawa. Learn to understand and control your pain with expert physiotherapy guidance.',
    keywords: ['pain education', 'pain science', 'self-management', 'chronic pain', 'pain neuroscience education']
  },
  {
    id: 'return-to-sport',
    name: 'Return to Sport Programs',
    shortDescription: 'Structured protocols to safely return athletes to their sport after injury.',
    description: 'Return to sport programs provide systematic progression from injury to full competition. I use sport-specific testing and training to ensure you\'re physically and mentally ready to return. These evidence-based protocols minimize re-injury risk while optimizing performance, getting you back to what you love safely.',
    benefits: [
      'Safe, structured return to competition',
      'Objective readiness testing',
      'Reduced re-injury risk',
      'Restored confidence',
      'Sport-specific conditioning',
      'Performance optimization'
    ],
    conditions: [
      'ACL reconstruction',
      'Post-concussion',
      'Ankle sprains',
      'Muscle strains',
      'Shoulder injuries',
      'Any sports injury'
    ],
    process: [
      {
        title: 'Baseline Testing',
        description: 'Establishing current function and identifying deficits'
      },
      {
        title: 'Progressive Loading',
        description: 'Gradually increasing demands through structured phases'
      },
      {
        title: 'Sport-Specific Training',
        description: 'Incorporating movements and demands of your sport'
      },
      {
        title: 'Return Testing',
        description: 'Objective testing to confirm readiness for return'
      }
    ],
    expectations: 'Return to sport follows clear phases with specific criteria to progress. You\'ll undergo regular testing to track progress and ensure safety. Training progressively mimics sport demands, from basic movements to game-speed activities. The timeline varies by injury and sport, but the systematic approach ensures you return when truly ready.',
    faqs: [
      {
        question: 'How long until I can play again?',
        answer: 'Timelines vary significantly by injury and sport. We use objective testing rather than just time to determine readiness, ensuring safe return.'
      },
      {
        question: 'What tests determine if I\'m ready?',
        answer: 'Sport-specific tests including strength, hop tests, agility, and psychological readiness scales. You need to meet specific benchmarks before return.'
      },
      {
        question: 'Can I train while injured?',
        answer: 'Yes! We modify training to maintain fitness in uninjured areas while the injured area heals, keeping you as game-ready as possible.'
      }
    ],
    relatedConditions: ['acl-injuries', 'ankle-sprains', 'hamstring-strains', 'shoulder-instability'],
    metaDescription: 'Return to sport programs in Ottawa. Safe, structured protocols to get athletes back to competition after injury. Expert physiotherapy guidance.',
    keywords: ['return to sport', 'sports injury recovery', 'athletic rehabilitation', 'return to play', 'sports physiotherapy']
  },
  {
    id: 'dry-needling',
    name: 'Dry Needling',
    shortDescription: 'Precise needle therapy targeting trigger points for rapid pain relief and improved muscle function.',
    description: 'Dry needling uses thin filiform needles to target myofascial trigger points and tight muscle bands. This technique creates a local twitch response that helps reset muscle tension, improve blood flow, and reduce pain. Unlike acupuncture, dry needling is based on Western medicine principles and neuroanatomy.',
    benefits: [
      'Rapid trigger point release',
      'Decreased muscle tension',
      'Improved blood flow to tissues',
      'Reduced referred pain patterns',
      'Enhanced muscle activation',
      'Faster recovery from overuse'
    ],
    conditions: [
      'Myofascial pain',
      'Tension headaches',
      'Tennis elbow',
      'Plantar fasciitis',
      'Shoulder impingement',
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
    metaDescription: 'Dry needling therapy in Ottawa for trigger point release and pain relief. Expert physiotherapy using IMS techniques. Book today.',
    keywords: ['dry needling', 'trigger point therapy', 'IMS', 'intramuscular stimulation', 'myofascial release']
  },
  {
    id: 'exercise-therapy',
    name: 'Exercise Therapy',
    shortDescription: 'Personalized exercise programs designed to restore strength, flexibility, and function.',
    description: 'Exercise therapy forms the foundation of lasting recovery. I design individualized programs that progressively build strength, improve flexibility, and restore function. Using evidence-based protocols, I ensure exercises are safe, effective, and tailored to your specific goals and abilities.',
    benefits: [
      'Progressive strength building',
      'Improved flexibility and range of motion',
      'Enhanced balance and coordination',
      'Injury prevention',
      'Faster return to activities',
      'Long-term pain management'
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
    metaDescription: 'Personalized exercise therapy programs in Ottawa. Build strength, improve flexibility, and restore function with expert physiotherapy guidance.',
    keywords: ['exercise therapy', 'therapeutic exercise', 'strength training', 'rehabilitation exercises', 'physiotherapy programs']
  },
  {
    id: 'sports-rehabilitation',
    name: 'Sports Rehabilitation',
    shortDescription: 'Specialized recovery programs for athletes to return to peak performance after injury.',
    description: 'Sports rehabilitation combines advanced assessment techniques with sport-specific training to help athletes recover from injury and return to competition. I understand the demands of your sport and create targeted programs that address not just healing, but also performance optimization and injury prevention.',
    benefits: [
      'Faster return to sport',
      'Sport-specific conditioning',
      'Reduced re-injury risk',
      'Performance optimization',
      'Biomechanical correction',
      'Mental confidence restoration'
    ],
    conditions: [
      'ACL injuries',
      'Ankle sprains',
      'Muscle strains',
      'Overuse injuries',
      'Post-surgical recovery',
      'Tennis elbow'
    ],
    process: [
      {
        title: 'Sport-Specific Assessment',
        description: 'Evaluating movement patterns specific to your sport and position'
      },
      {
        title: 'Acute Care',
        description: 'Managing initial injury with appropriate protection and healing strategies'
      },
      {
        title: 'Progressive Loading',
        description: 'Gradually building strength and power through sport-specific exercises'
      },
      {
        title: 'Return to Play',
        description: 'Structured progression through practice and competition levels'
      }
    ],
    expectations: 'Sports rehabilitation progresses through distinct phases: initial healing, restoration of movement, strength building, power development, and sport-specific training. You\'ll work through functional tests to ensure readiness for each phase. Training intensity matches your sport\'s demands, preparing both body and mind for return to competition.',
    faqs: [
      {
        question: 'When can I return to my sport?',
        answer: 'Timeline varies by injury severity and sport demands. I use objective testing to determine readiness, typically ranging from weeks for minor injuries to months for major ones.'
      },
      {
        question: 'Can you help prevent future injuries?',
        answer: 'Yes! I identify and address risk factors like muscle imbalances, poor movement patterns, and training errors to reduce injury risk.'
      },
      {
        question: 'Do you work with recreational athletes?',
        answer: 'Absolutely. My programs are tailored to your level and goals, whether you\'re a weekend warrior or competitive athlete.'
      }
    ],
    relatedConditions: ['acl-injuries', 'ankle-sprains', 'tennis-elbow', 'rotator-cuff-injuries'],
    metaDescription: 'Expert sports rehabilitation in Ottawa. Get back to your game faster with specialized physiotherapy for athletes. Professional care for all levels.',
    keywords: ['sports rehabilitation', 'athletic therapy', 'sports injury', 'return to sport', 'performance training']
  },
  {
    id: 'joint-mobilization',
    name: 'Joint Mobilization',
    shortDescription: 'Specialized techniques to restore joint movement and reduce stiffness.',
    description: 'Joint mobilization uses specific graded movements to restore normal joint mechanics, reduce pain, and improve range of motion. These precise techniques target joint restrictions and adhesions that limit movement and cause discomfort. I apply controlled forces to help joints move more freely within their normal range.',
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
    metaDescription: 'Joint mobilization physiotherapy in Ottawa. Expert techniques to restore movement, reduce stiffness, and improve joint function.',
    keywords: ['joint mobilization', 'joint stiffness', 'range of motion', 'manual therapy', 'joint therapy']
  },
  {
    id: 'soft-tissue-release',
    name: 'Soft Tissue Release',
    shortDescription: 'Targeted techniques to release muscle tension and improve tissue flexibility.',
    description: 'Soft tissue release combines various hands-on techniques to address muscle tightness, fascial restrictions, and scar tissue. I use specific pressure and movement combinations to release adhesions, improve tissue mobility, and restore normal muscle function. This approach effectively treats both acute and chronic soft tissue problems.',
    benefits: [
      'Reduced muscle tension',
      'Improved tissue flexibility',
      'Enhanced circulation',
      'Decreased scar tissue',
      'Better muscle function',
      'Faster recovery'
    ],
    conditions: [
      'Muscle strains',
      'IT band syndrome',
      'Plantar fasciitis',
      'Tennis elbow',
      'Chronic muscle tightness',
      'Post-surgical scarring'
    ],
    process: [
      {
        title: 'Tissue Assessment',
        description: 'Identifying areas of restriction, adhesion, and dysfunction'
      },
      {
        title: 'Release Techniques',
        description: 'Applying specific pressure and movement to release restrictions'
      },
      {
        title: 'Active Participation',
        description: 'Incorporating your movement to enhance release effectiveness'
      },
      {
        title: 'Integration',
        description: 'Combining release with stretching and strengthening'
      }
    ],
    expectations: 'During soft tissue release, you\'ll feel firm pressure and stretching sensations. Some areas may be tender initially but should feel better as the tissue releases. The treatment can be intense but should not cause sharp pain. Most people experience immediate improvements in flexibility and reduced tension.',
    faqs: [
      {
        question: 'How is this different from massage?',
        answer: 'Soft tissue release is more targeted and combines pressure with specific movements to address particular restrictions, rather than general relaxation.'
      },
      {
        question: 'Why do some areas hurt more than others?',
        answer: 'Areas with more adhesions or chronic tension tend to be more sensitive initially but improve with treatment.'
      },
      {
        question: 'How often should I get treatment?',
        answer: 'Initially, weekly sessions are beneficial. As tissues improve, we can space treatments further apart.'
      }
    ],
    relatedConditions: ['it-band-syndrome', 'plantar-fasciitis', 'tennis-elbow', 'hamstring-strains'],
    metaDescription: 'Soft tissue release therapy in Ottawa. Expert treatment for muscle tension, fascial restrictions, and improved flexibility.',
    keywords: ['soft tissue release', 'myofascial release', 'muscle tension', 'fascial therapy', 'tissue mobility']
  },
  {
    id: 'trigger-point-therapy',
    name: 'Trigger Point Therapy',
    shortDescription: 'Focused pressure techniques to deactivate painful trigger points and restore muscle function.',
    description: 'Trigger point therapy targets specific knots in muscles that cause local and referred pain. Using sustained pressure and precise techniques, I deactivate these painful points to restore normal muscle function and reduce pain patterns. This approach is highly effective for chronic muscle pain and tension headaches.',
    benefits: [
      'Elimination of trigger points',
      'Reduced referred pain',
      'Improved muscle function',
      'Decreased headaches',
      'Better posture',
      'Enhanced flexibility'
    ],
    conditions: [
      'Tension headaches',
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
    metaDescription: 'Trigger point therapy in Ottawa. Expert treatment for muscle knots, referred pain, and chronic tension. Get lasting relief today.',
    keywords: ['trigger point therapy', 'trigger point release', 'myofascial trigger points', 'muscle knots', 'referred pain']
  },
  {
    id: 'myofascial-release',
    name: 'Myofascial Release',
    shortDescription: 'Gentle sustained pressure to release fascial restrictions and restore tissue mobility.',
    description: 'Myofascial release addresses the fascial system - the connective tissue that surrounds and supports all muscles and organs. Using sustained, gentle pressure and stretching, I release fascial restrictions that cause pain and limit movement. This whole-body approach recognizes that fascial restrictions in one area can affect distant body parts.',
    benefits: [
      'Improved tissue mobility',
      'Reduced chronic pain',
      'Better posture alignment',
      'Enhanced circulation',
      'Increased flexibility',
      'Whole-body integration'
    ],
    conditions: [
      'Chronic back pain',
      'Fibromyalgia',
      'Plantar fasciitis',
      'IT band syndrome',
      'Chronic neck pain',
      'Post-surgical adhesions'
    ],
    process: [
      {
        title: 'Fascial Assessment',
        description: 'Evaluating tissue mobility and identifying restriction patterns'
      },
      {
        title: 'Sustained Pressure',
        description: 'Applying gentle, sustained pressure to allow fascia to release'
      },
      {
        title: 'Cross-Hand Stretching',
        description: 'Using specific techniques to stretch and mobilize fascia'
      },
      {
        title: 'Movement Integration',
        description: 'Combining release with movement for lasting change'
      }
    ],
    expectations: 'Myofascial release feels like a slow, gentle stretch with light to moderate pressure. You may feel warmth, tingling, or softening sensations as tissues release. The process is generally relaxing, though some areas may be tender. Results are often cumulative, with improvements building over multiple sessions.',
    faqs: [
      {
        question: 'What is fascia and why is it important?',
        answer: 'Fascia is connective tissue that surrounds all muscles and organs. When restricted, it can cause pain and limit movement throughout the body.'
      },
      {
        question: 'Why does the treatment feel so gentle?',
        answer: 'Fascia responds better to gentle, sustained pressure than aggressive force. This allows it to release naturally without creating defensive tension.'
      },
      {
        question: 'How is this different from massage?',
        answer: 'Myofascial release uses sustained holds and specific techniques to address the fascial system, while massage typically focuses on muscles with rhythmic movements.'
      }
    ],
    relatedConditions: ['plantar-fasciitis', 'it-band-syndrome', 'chronic-back-pain', 'fibromyalgia'],
    metaDescription: 'Myofascial release therapy in Ottawa. Gentle, effective treatment for fascial restrictions, chronic pain, and improved mobility.',
    keywords: ['myofascial release', 'fascial therapy', 'connective tissue', 'chronic pain treatment', 'fascial restrictions']
  },
  {
    id: 'cupping-therapy',
    name: 'Cupping Therapy',
    shortDescription: 'Ancient technique using suction to promote healing, reduce pain, and improve circulation.',
    description: 'Cupping therapy uses controlled suction to lift and separate tissue layers, promoting blood flow and facilitating healing. This technique effectively addresses muscle tension, fascial restrictions, and chronic pain. Modern cupping combines traditional principles with contemporary understanding of tissue mechanics and neurophysiology.',
    benefits: [
      'Enhanced blood circulation',
      'Reduced muscle tension',
      'Improved lymphatic drainage',
      'Decreased inflammation',
      'Fascial release',
      'Pain reduction'
    ],
    conditions: [
      'Back pain',
      'Shoulder tension',
      'IT band syndrome',
      'Chronic muscle tightness',
      'Sports injuries',
      'Scar tissue'
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
    metaDescription: 'Cupping therapy in Ottawa. Professional treatment for pain relief, improved circulation, and muscle tension release.',
    keywords: ['cupping therapy', 'cupping treatment', 'myofascial cupping', 'vacuum therapy', 'traditional cupping']
  },
  {
    id: 'iastm',
    name: 'IASTM (Instrument Assisted Soft Tissue Mobilization)',
    shortDescription: 'Specialized tools to detect and treat soft tissue dysfunction and restrictions.',
    description: 'IASTM uses specially designed instruments to detect and treat fascial restrictions, scar tissue, and chronic inflammation. The tools allow me to apply precise pressure and identify areas of tissue dysfunction that may be difficult to detect by hand. This technique effectively breaks down adhesions and stimulates healing.',
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
      'Chronic tendinopathies',
      'Post-surgical scarring'
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
    metaDescription: 'IASTM therapy in Ottawa. Instrument assisted soft tissue mobilization for scar tissue, adhesions, and chronic pain.',
    keywords: ['IASTM', 'instrument assisted soft tissue', 'Graston technique', 'soft tissue mobilization', 'scar tissue treatment']
  },
  {
    id: 'postural-assessment',
    name: 'Postural Assessment & Correction',
    shortDescription: 'Comprehensive analysis and correction of posture to prevent pain and improve function.',
    description: 'Postural assessment involves detailed analysis of your body alignment, movement patterns, and ergonomics. I identify postural deviations that contribute to pain and dysfunction, then develop targeted correction strategies. This proactive approach prevents future problems and optimizes body mechanics for daily activities.',
    benefits: [
      'Reduced chronic pain',
      'Improved body alignment',
      'Better breathing patterns',
      'Enhanced athletic performance',
      'Injury prevention',
      'Increased energy efficiency'
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
    metaDescription: 'Postural assessment and correction in Ottawa. Expert analysis and treatment for better alignment, reduced pain, and improved function.',
    keywords: ['postural assessment', 'posture correction', 'ergonomic assessment', 'body alignment', 'postural dysfunction']
  },
  {
    id: 'post-surgical-rehabilitation',
    name: 'Post-Surgical Rehabilitation',
    shortDescription: 'Comprehensive recovery programs following surgery to restore function and strength.',
    description: 'Post-surgical rehabilitation is crucial for optimal recovery after orthopedic procedures. I work closely with your surgical team to provide phase-appropriate treatment that protects healing tissues while progressively restoring movement, strength, and function according to surgical protocols.',
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
      'Joint replacements',
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
    metaDescription: 'Expert post-surgical rehabilitation in Ottawa. Optimize your recovery after orthopedic surgery with specialized physiotherapy protocols.',
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