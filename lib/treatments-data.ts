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
    description: 'Pain neuroscience education teaches the science behind persistent pain and develops practical management strategies. You\'ll learn how pain signals work in the nervous system, why pain can persist after tissue healing, and how to approach movement with greater confidence. This education complements hands-on treatment and exercise therapy.',
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
    expectations: 'Sessions combine discussion, visual aids, and practical exercises. You\'ll learn why pain persists, how thoughts and emotions influence pain, and develop specific strategies for your situation. The focus is on active learning with immediate practical application.',
    faqs: [
      {
        question: 'How can education reduce my pain?',
        answer: 'Pain is processed in the brain, and your brain\'s interpretation is influenced by your beliefs, fears, and understanding. When you learn that pain doesn\'t always equal damage, and that tissues heal even when pain persists, your brain becomes less protective. This reduces the threat signal, which can lower pain intensity. Research shows pain education can reduce pain by changing how your nervous system processes signals, not just by changing your thoughts about it.'
      },
      {
        question: 'Is this just positive thinking?',
        answer: 'No. This is neuroscience education that explains the biological mechanisms of pain. You learn about actual physiological processes: how nerves become sensitized, why pain can persist after healing, and how movement affects your nervous system. The goal is accurate understanding, not optimism. Understanding why you hurt helps you respond differently to pain, which creates real physiological changes in your nervous system.'
      },
      {
        question: 'Will I still need hands-on treatment?',
        answer: 'Usually yes. Pain education works best when combined with movement therapy and manual treatment. Education addresses the nervous system\'s interpretation of threat, while hands-on treatment addresses tissue restrictions and movement quality. Together, they create a comprehensive approach where you understand what\'s happening and have the physical capacity to move better. Most people benefit from both approaches.'
      }
    ],
    relatedConditions: ['chronic-back-pain', 'fibromyalgia', 'neck-pain', 'arthritis'],
    metaDescription: 'Pain neuroscience education in Burlington. Understanding pain mechanisms and developing practical strategies for persistent pain conditions.',
    keywords: ['pain education', 'pain science', 'self-management', 'chronic pain', 'pain neuroscience education']
  },
  {
    id: 'sports-rehab-return-to-sport',
    name: 'Sports Rehabilitation & Return to Sport',
    shortDescription: 'Evidence-based recovery programs for athletes to safely return to sport after injury.',
    description: 'Sports rehabilitation combines objective assessment with sport-specific training for safe return to competition. Validated testing protocols and progressive criteria determine physical and psychological readiness at each stage. Evidence-based programs follow structured phases from acute care through sport-specific training.',
    benefits: [
      'Safe, structured return to competition',
      'Validated objective readiness testing',
      'Sport-specific conditioning',
      'May reduce re-injury risk with proper progression',
      'Progressive return toward pre-injury performance',
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
        answer: 'Return timelines depend on injury type, severity, and your sport\'s demands. A muscle strain might allow return in 3-6 weeks, while ACL reconstruction typically requires 9-12 months. The timeline is determined by objective testing, not arbitrary dates. You progress through phases: pain-free movement, full strength, sport-specific drills, then competition. Rushing back increases re-injury risk significantly, which ultimately extends your time away from sport.'
      },
      {
        question: 'What tests determine if I\'m ready to play?',
        answer: 'Testing includes bilateral strength comparison (typically 90% of uninjured side), hop tests for power and landing mechanics, agility drills specific to your sport, and psychological readiness questionnaires. For lower body injuries, single-leg hop distance, triple hop, and crossover hop are standard. Upper body injuries require strength testing and sport-specific movements under load. You must pass each phase\'s criteria before progressing to avoid setbacks.'
      },
      {
        question: 'Can I train while injured?',
        answer: 'Yes, and you should. If you have a lower body injury, you can maintain upper body and core strength. With an upper body injury, you can focus on lower body and cardiovascular fitness. This maintains your conditioning, prevents deconditioning, and keeps you mentally engaged. Training is modified to protect the injured area while maintaining everything else. This approach significantly reduces total recovery time.'
      },
      {
        question: 'Do you work with recreational athletes?',
        answer: 'Yes. The principles are the same whether you\'re training for the NHL or playing pickup basketball on weekends. Your program is scaled to your sport\'s demands and your personal goals. A weekend runner doesn\'t need the same volume as a competitive athlete, but both need proper progression, objective testing, and sport-specific preparation to return safely.'
      }
    ],
    relatedConditions: ['acl-injuries', 'ankle-sprains', 'hamstring-strains', 'rotator-cuff-injuries', 'tennis-elbow', 'shoulder-instability'],
    metaDescription: 'Sports rehabilitation in Burlington. Evidence-based return to sport programs with objective testing and progressive training protocols.',
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
      'May improve blood flow to tissues',
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
        answer: 'No. Dry needling is based on Western medicine, targeting specific anatomical trigger points in muscles that refer pain in predictable patterns. Acupuncture follows traditional Chinese medicine principles, inserting needles along meridians to influence energy flow. The needles look similar, but the reasoning, target locations, and intended mechanisms are completely different. Dry needling aims to release muscle tension and reduce local inflammation.'
      },
      {
        question: 'How deep do the needles go?',
        answer: 'Depth depends on the target muscle and your body composition. Superficial muscles like forearm extensors might only need 5-10mm depth. Deep muscles like piriformis or glutes can require 40-60mm to reach the trigger point. The needle must contact the dysfunctional tissue to be effective. Deeper doesn\'t mean better - it means reaching the correct depth for that specific muscle.'
      },
      {
        question: 'Are there any risks?',
        answer: 'Serious complications are rare when performed by trained practitioners. Common side effects include temporary soreness (like after exercise), minor bruising, or brief lightheadedness. The main risk is pneumothorax (collapsed lung) with needling near the ribcage, but this is extremely uncommon with proper technique. Infection risk is minimal with sterile, single-use needles. Most people experience only mild soreness that resolves in 24-48 hours.'
      }
    ],
    relatedConditions: ['tennis-elbow', 'plantar-fasciitis', 'shoulder-impingement', 'neck-pain'],
    metaDescription: 'Dry needling in Burlington. Trigger point therapy using thin needles to address muscle tension, referred pain, and movement restrictions.',
    keywords: ['dry needling', 'trigger point therapy', 'IMS', 'intramuscular stimulation', 'myofascial release']
  },
  {
    id: 'exercise-therapy',
    name: 'Exercise Therapy',
    shortDescription: 'Personalized exercise programs designed to restore strength, flexibility, and function.',
    description: 'Exercise therapy is a cornerstone of effective musculoskeletal rehabilitation. Individualized programs progressively build strength, improve flexibility, and restore function. Using evidence-based protocols, exercises are safe, effective, and tailored to your specific goals and abilities. Sustained benefits require ongoing participation, which is why programs focus on long-term maintenance you can continue independently.',
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
    expectations: 'Programs start at your current ability level and progress systematically. Sessions include instruction on proper form, practice with feedback, and modifications as needed. You\'ll receive a home program with clear instructions and demonstration. Therapeutic exercise should produce muscle fatigue without sharp pain.',
    faqs: [
      {
        question: 'What if I\'ve never exercised before?',
        answer: 'No problem. Programs start with basic movements you can do safely, often using just your body weight. You learn proper form before adding difficulty. Many people start with simple exercises like sit-to-stand from a chair, wall pushes, or lying leg slides. The progression is gradual - you build capacity before increasing challenge. Previous exercise experience is not required, just willingness to practice consistently.'
      },
      {
        question: 'Will exercises make my pain worse?',
        answer: 'Properly dosed exercise shouldn\'t increase your pain beyond mild, temporary discomfort. You should feel muscles working, but not sharp pain. Some increase in symptoms during or after is acceptable if it settles within 24 hours. If pain increases and doesn\'t settle, the exercise is modified or replaced. The goal is progressive loading that builds tolerance without exceeding your tissue\'s current capacity.'
      },
      {
        question: 'How long until I see results?',
        answer: 'Movement quality and pain often improve in 2-3 weeks with consistent practice. Strength gains become noticeable around 4-6 weeks. Significant structural changes (muscle size, tendon properties) take 8-12 weeks. This timeline assumes 3-4 sessions weekly. Less frequent practice extends the timeline. Early improvements come from nervous system adaptations (better coordination), while later improvements reflect actual tissue changes.'
      }
    ],
    relatedConditions: ['rotator-cuff-injuries', 'knee-pain-patellofemoral', 'hip-osteoarthritis', 'postural-dysfunction'],
    metaDescription: 'Exercise therapy in Burlington. Individualized rehabilitation programs to build strength, improve flexibility, and restore function progressively.',
    keywords: ['exercise therapy', 'therapeutic exercise', 'strength training', 'rehabilitation exercises', 'physiotherapy programs']
  },
  {
    id: 'joint-mobilization',
    name: 'Joint Mobilization',
    shortDescription: 'Graded techniques to restore joint movement and reduce stiffness.',
    description: 'Joint mobilization uses specific graded movements to restore normal joint mechanics, reduce pain, and improve range of motion. These precise techniques target joint restrictions that limit movement and cause discomfort. Controlled forces are applied to help joints move more freely within their normal range.',
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
        answer: 'No. Mobilization uses controlled, rhythmic movements that stay within your available range and comfort level. You remain in control and can stop the technique at any time. Manipulation involves a quick thrust beyond the current range, often producing a cracking sound. Mobilization is gentler, more gradual, and allows your nervous system to relax rather than triggering a protective response. Both have evidence for effectiveness, but mobilization is generally better tolerated.'
      },
      {
        question: 'How quickly will I see results?',
        answer: 'Many people notice immediate improvement in range of motion after the first session - movements that felt restricted become easier. Pain relief may be immediate or develop over 24-48 hours as inflammation settles. Sustained improvements typically require 3-6 sessions as your nervous system learns the joint can move safely in the new range. Chronic stiffness takes longer than acute restrictions.'
      },
      {
        question: 'Is it safe for arthritis?',
        answer: 'Yes, when applied appropriately. Arthritic joints benefit from gentle mobilization that maintains available movement without forcing range. The techniques reduce joint stiffness, decrease pain signals, and help maintain cartilage nutrition through joint fluid circulation. Treatment focuses on pain-free range rather than pushing into restricted movement. Gentle, regular mobilization is often more effective than aggressive treatment for arthritic joints.'
      }
    ],
    relatedConditions: ['frozen-shoulder', 'facet-joint-syndrome', 'si-joint-dysfunction', 'ankle-sprains'],
    metaDescription: 'Joint mobilization in Burlington. Graded manual techniques to restore movement, reduce joint stiffness, and improve range of motion.',
    keywords: ['joint mobilization', 'joint stiffness', 'range of motion', 'manual therapy', 'joint therapy']
  },
  {
    id: 'soft-tissue-myofascial-release',
    name: 'Soft Tissue & Myofascial Therapy',
    shortDescription: 'Targeted hands-on techniques to address muscle tension, pain, and movement restrictions.',
    description: 'Soft tissue therapy uses manual techniques to address muscle tightness, pain, and movement restrictions. Techniques include specific pressure, sustained holds, and movement-based approaches to reduce pain sensitivity and improve tissue mobility. Applies to both acute muscle injuries and chronic soft tissue conditions.',
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
        answer: 'Fascia is a continuous web of connective tissue that wraps around every muscle, organ, nerve, and blood vessel in your body. It provides structural support and allows tissues to slide against each other during movement. When fascia becomes restricted from injury, inflammation, or poor movement patterns, it loses its elastic quality and can bind tissues together. This creates pulling sensations, limits movement, and can refer pain to distant areas through fascial connections. Addressing fascial restrictions often relieves pain that hasn\'t responded to other treatments.'
      },
      {
        question: 'How is this different from massage?',
        answer: 'Massage typically uses flowing strokes for general relaxation and circulation. Myofascial release uses sustained pressure (30-90 seconds) to target specific restrictions, often combining pressure with active movement to release adhesions. The pressure is deeper and held longer to allow fascia to release, and treatment follows fascial lines rather than individual muscles. Sessions focus on dysfunction rather than relaxation, though many find it relaxing despite the targeted nature.'
      },
      {
        question: 'Why do some techniques feel gentle while others are more intense?',
        answer: 'Superficial fascia and sensitive areas respond to lighter, sustained pressure that allows tissue to release gradually. Deeper restrictions or dense adhesions may require firmer pressure to create change. Intensity is also adjusted based on your nervous system\'s response - if you\'re bracing against the pressure, lighter touch is more effective. The goal is finding the pressure that creates tissue change without triggering protective muscle guarding.'
      },
      {
        question: 'How often should I get treatment?',
        answer: 'Acute restrictions (recent injuries) often respond to 2-3 sessions over 1-2 weeks. Chronic restrictions may need weekly treatment for 4-6 weeks, then spacing to biweekly as tissues improve. Treatment frequency depends on how quickly tissue changes occur and how well changes are maintained between sessions. Most people transition to monthly maintenance once primary restrictions resolve.'
      }
    ],
    relatedConditions: ['it-band-syndrome', 'plantar-fasciitis', 'tennis-elbow', 'hamstring-strains', 'chronic-back-pain', 'fibromyalgia'],
    metaDescription: 'Myofascial release in Burlington. Manual techniques addressing fascial restrictions, muscle tension, and movement limitations.',
    keywords: ['soft tissue release', 'myofascial release', 'muscle tension', 'fascial therapy', 'tissue mobility', 'fascial restrictions', 'chronic pain treatment']
  },
  {
    id: 'trigger-point-therapy',
    name: 'Trigger Point Therapy',
    shortDescription: 'Focused pressure techniques to address painful trigger points and reduce muscle pain.',
    description: 'Trigger point therapy targets specific tender areas in muscles that contribute to local and regional pain. Sustained pressure techniques address these points to reduce muscle pain and tension. Used for chronic muscle pain and muscle-related discomfort.',
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
        answer: 'Trigger points send pain signals along predictable nerve pathways, creating referred pain patterns. For example, a trigger point in your upper trap muscle commonly refers pain to your temple and behind your eye, even though the problem is in your neck. The trigger point sensitizes nerve pathways, so releasing the trigger point eliminates both the local tenderness and the distant referred pain. This explains why rubbing your neck might relieve a headache.'
      },
      {
        question: 'How many treatments are needed?',
        answer: 'Acute trigger points (developed recently) often resolve in 1-3 sessions. Chronic trigger points that have been present for months or years typically need 4-8 sessions. The number depends on how long the trigger point has existed, what keeps reactivating it (posture, overuse, stress), and whether you practice self-treatment between sessions. Improvement is usually progressive, with pain reducing and referral patterns shrinking after each session.'
      },
      {
        question: 'Can I treat trigger points myself?',
        answer: 'Yes, and self-treatment significantly improves outcomes. You can use tennis balls, foam rollers, or specialized tools to apply sustained pressure to trigger points. The technique involves finding the tender spot, applying moderate pressure for 30-90 seconds until it releases, then stretching the muscle. This maintains improvements between professional sessions. However, some trigger points (like deep hip rotators) are difficult to reach effectively on your own.'
      }
    ],
    relatedConditions: ['neck-pain', 'shoulder-impingement', 'piriformis-syndrome', 'tennis-elbow'],
    metaDescription: 'Trigger point therapy in Burlington. Release painful muscle knots, address referred pain, and restore normal movement patterns.',
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
        answer: 'No, the marks themselves are painless. They look like circular bruises but are actually caused by the suction drawing blood to the surface, not tissue damage. The area may feel slightly tender to touch immediately after treatment, similar to post-massage soreness. The marks fade from purple to green to yellow over 3-10 days. Darker marks indicate more stagnation in that area, not more intense treatment.'
      },
      {
        question: 'How long do cups stay on?',
        answer: 'Static cupping involves leaving cups in place for 5-15 minutes, allowing sustained decompression of tissues. Dynamic cupping (sliding cups across the skin with oil) lasts 5-10 minutes per area treated. Flash cupping (rapid cup application and removal) is used for more sensitive areas. Duration depends on treatment goals, tissue response, and your tolerance. Longer isn\'t necessarily better - adequate decompression time matters more than duration.'
      },
      {
        question: 'Is cupping safe?',
        answer: 'Yes, cupping is safe when performed properly. Contraindications include skin conditions, blood clotting disorders, and certain medications. The main side effects are temporary marks, mild soreness, and occasional lightheadedness. Burns can occur with fire cupping (not used in this practice). Excessive suction can cause blistering, which is avoided by using appropriate pressure. The marks look dramatic but represent normal tissue response to decompression.'
      }
    ],
    relatedConditions: ['low-back-pain', 'it-band-syndrome', 'shoulder-impingement', 'neck-pain'],
    metaDescription: 'Cupping therapy in Burlington. Negative pressure technique to address muscle tension, fascial restrictions, and tissue mobility.',
    keywords: ['cupping therapy', 'cupping treatment', 'myofascial cupping', 'vacuum therapy', 'traditional cupping']
  },
  {
    id: 'iastm',
    name: 'IASTM (Instrument Assisted Soft Tissue Mobilization)',
    shortDescription: 'Instrument-assisted techniques to address soft tissue restrictions and pain.',
    description: 'IASTM uses specially designed instruments to apply controlled pressure to soft tissues. Research shows moderate-quality evidence that IASTM may help reduce pain and improve range of motion in certain musculoskeletal conditions. The technique is thought to have neurophysiological effects on pain perception and may influence tissue sensitivity.',
    benefits: [
      'May help address tissue restrictions',
      'Improved tissue mobility',
      'May support tissue adaptation',
      'Reduced pain sensitivity',
      'Better movement patterns',
      'Progressive functional improvement'
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
        answer: 'Instruments provide several advantages: they detect tissue restrictions more precisely through vibration feedback, they can apply sustained pressure without therapist fatigue, and the beveled edges can target specific tissue layers that hands cannot isolate. The tools also allow treatment of larger areas more efficiently. Some restrictions require the focused pressure and tissue manipulation that instruments provide. However, instruments are used alongside hands, not instead of them - assessment and feedback still require manual palpation.'
      },
      {
        question: 'Will it leave marks?',
        answer: 'Mild to moderate redness (petechiae) is common and actually indicates effective treatment - it shows increased blood flow to the area. The redness typically fades within hours to a day. Unlike bruising from trauma, this represents a controlled inflammatory response that promotes healing. Excessive marking is avoided by using appropriate pressure and treatment duration. The amount of marking varies by tissue condition - chronic, dense restrictions often produce more marking initially.'
      },
      {
        question: 'How many sessions are needed?',
        answer: 'Acute conditions (recent injuries, post-surgical scar tissue) often respond in 4-6 sessions. Chronic conditions like long-standing tendinopathy may need 8-12 sessions. Treatment frequency is typically twice weekly initially, then weekly as tissues improve. Progress is monitored through objective measures like pain levels, tissue quality, and functional improvements. Some conditions require periodic maintenance sessions after primary resolution.'
      }
    ],
    relatedConditions: ['plantar-fasciitis', 'achilles-tendinopathy', 'it-band-syndrome', 'tennis-elbow'],
    metaDescription: 'IASTM in Burlington. Instrument-assisted soft tissue mobilization addressing scar tissue, adhesions, and chronic movement restrictions.',
    keywords: ['IASTM', 'instrument assisted soft tissue', 'Graston technique', 'soft tissue mobilization', 'scar tissue treatment']
  },
  {
    id: 'postural-assessment',
    name: 'Postural Assessment & Movement Strategies',
    shortDescription: 'Analysis of posture and movement patterns to develop adaptable positioning strategies.',
    description: 'Postural assessment involves analyzing your body alignment, movement patterns, and ergonomics to identify habits that may contribute to discomfort. Rather than pursuing a single ideal posture, the focus is on improving postural awareness and developing the ability to move comfortably through different positions. This approach helps you adapt your posture to different activities and reduces sustained positions that may contribute to pain.',
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
    expectations: 'The assessment involves observation and measurement of your posture in various positions. Photos are taken for comparison and education. You\'ll learn specific exercises and receive ergonomic recommendations. Changes in posture take time and conscious effort, with noticeable improvements typically occurring within 4-6 weeks.',
    faqs: [
      {
        question: 'Can posture really be changed?',
        answer: 'Yes, but not in the way most people think. You can\'t permanently change your bone structure or passive tissue length dramatically. However, you can improve muscle balance, movement control, and postural awareness significantly. The goal isn\'t achieving a rigid "perfect" posture, but developing the capacity to vary your position throughout the day and the awareness to notice when you\'re in sustained, uncomfortable positions. Most postural pain comes from lack of movement, not from a specific position.'
      },
      {
        question: 'How long before I see results?',
        answer: 'Awareness and comfort in new positions often improve within 1-2 weeks. Strength changes that support better posture take 4-6 weeks of consistent exercise. Visible changes in how you naturally hold yourself typically emerge over 8-12 weeks as new patterns become automatic. Pain reduction often occurs earlier than visible postural changes because reducing sustained positions matters more than achieving perfect alignment. Workplace ergonomic changes can provide immediate relief.'
      },
      {
        question: 'Do I need special equipment?',
        answer: 'Most postural exercises use minimal equipment: resistance bands, a foam roller, or just your body weight. Workplace modifications might include a monitor stand, ergonomic mouse, or lumbar support, but these are assessed individually. Equipment recommendations are specific to your work setup and movement patterns. Many people see significant improvement with just awareness training and simple exercises - expensive equipment isn\'t required for results.'
      }
    ],
    relatedConditions: ['postural-dysfunction', 'neck-pain', 'shoulder-impingement', 'low-back-pain'],
    metaDescription: 'Postural assessment in Burlington. Comprehensive analysis of alignment, movement patterns, and muscle imbalances contributing to pain.',
    keywords: ['postural assessment', 'posture correction', 'ergonomic assessment', 'body alignment', 'postural dysfunction']
  },
  {
    id: 'post-surgical-rehabilitation',
    name: 'Post-Surgical Rehabilitation',
    shortDescription: 'Evidence-based recovery programs following surgery to restore function and strength.',
    description: 'Post-surgical rehabilitation follows evidence-based protocols designed to protect healing tissues while progressively restoring movement, strength, and function. Treatment is phase-appropriate, respecting tissue healing timelines (typically inflammatory phase 0-7 days, proliferative phase 2-3 weeks, maturation phase 12-26 weeks). Progression is individualized based on surgical technique, tissue quality, and your response to treatment.',
    benefits: [
      'Structured, progressive recovery',
      'May help reduce post-operative complications',
      'Scar tissue management strategies',
      'Progressive strength and function restoration',
      'Safe, guided return to activities',
      'May help reduce chronic pain risk'
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
        answer: 'Timing depends on the procedure and surgical technique. ACL reconstruction typically starts within days post-surgery to prevent stiffness. Rotator cuff repair may wait 4-6 weeks to protect the repair. Meniscus repair and meniscectomy have different timelines despite both being knee surgeries. Your surgeon provides specific guidelines based on what was done during surgery, tissue quality found, and repair strength. Starting too early can damage repairs; starting too late can lead to permanent stiffness. Follow your surgeon\'s timeline.'
      },
      {
        question: 'Will therapy be painful after surgery?',
        answer: 'You should feel tissue stretching and muscle fatigue, but not sharp pain that makes you want to stop. Pain that lingers or worsens afterward indicates you\'ve exceeded tissue tolerance. Post-surgical rehabilitation pushes boundaries carefully - tissues need stress to heal properly, but too much stress damages the repair. Your pain levels guide progression. Sharp pain means stop; moderate discomfort that settles quickly is acceptable. Communication about your pain experience is crucial for appropriate progression.'
      },
      {
        question: 'How long is post-surgical rehabilitation?',
        answer: 'Simple arthroscopic procedures (like meniscectomy) typically need 6-8 weeks. Rotator cuff repair takes 4-6 months. ACL reconstruction requires 9-12 months before return to sport. Joint replacement rehab is intensive for 3 months, with continued improvement up to a year. Timeline depends on surgical complexity, tissue healing capacity, pre-surgery condition, and how consistently you follow the program. These are typical ranges - your surgeon and physiotherapist determine your specific timeline based on objective measures.'
      }
    ],
    relatedConditions: ['acl-injuries', 'rotator-cuff-injuries', 'meniscus-tears', 'shoulder-instability'],
    metaDescription: 'Post-surgical rehabilitation in Burlington. Progressive protocols for orthopedic surgery recovery, from acute care to functional restoration.',
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