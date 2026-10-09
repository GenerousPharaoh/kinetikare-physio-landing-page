export interface Treatment {
  id: string;
  name: string;
  /** Short name for the H1, breadcrumb and headings when `name` is long. */
  shortName?: string;
  /** Page title when `${name} Burlington | Kareem Hassanein Physiotherapy` runs over 60 characters. */
  seoTitle?: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  conditions: string[];
  process: {
    title: string;
    description: string;
  }[];
  expectations: string;
  inDepth?: {
    heading: string;
    paragraphs: string[];
  }[];
  /** Warning signs shown as a "When to get medical help" list. */
  redFlags?: {
    sign: string;
    action: string;
  }[];
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
    seoTitle: 'Pain Education Burlington | Kareem Hassanein Physiotherapy',
    shortDescription: 'Understanding pain science to reduce fear and improve movement confidence alongside active rehabilitation.',
    description: 'Pain neuroscience education teaches the science behind persistent pain and develops practical management strategies. You\'ll learn how pain signals work in the nervous system, why pain can persist after tissue healing, and how to approach movement with greater confidence. This education complements hands-on treatment and exercise therapy.',
    benefits: [
      'A clearer understanding of your pain',
      'Less fear of movement for many people',
      'More confidence in daily activities',
      'A bigger part in your own recovery',
      'Used alongside exercise, not instead of it'
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
        answer: 'Pain is processed in the brain, and your brain\'s interpretation is influenced by your beliefs, fears, and understanding. When you learn that pain doesn\'t always equal damage, and that tissues heal even when pain persists, your brain becomes less protective. This reduces the threat signal, which can lower pain intensity. Research on persistent low back pain suggests that pain education, combined with exercise, can modestly reduce pain and disability in the short term.'
      },
      {
        question: 'Is this just positive thinking?',
        answer: 'No. This is neuroscience education that explains the biological mechanisms of pain. You learn about actual physiological processes: how nerves become sensitized, why pain can persist after healing, and how movement affects your nervous system. The goal is accurate understanding, not optimism. Understanding why you hurt helps you respond differently to pain and makes it easier to keep moving.'
      },
      {
        question: 'Will I still need hands-on treatment?',
        answer: 'Often, yes, though exercise matters more. Pain education is used alongside exercise, and sometimes alongside hands-on treatment. Education helps you understand what is happening, exercise builds the capacity to do more, and hands-on treatment can make movement more comfortable while you rebuild.'
      }
    ],
    relatedConditions: ['knee-osteoarthritis', 'hip-osteoarthritis', 'knee-pain-patellofemoral', 'greater-trochanteric-pain-syndrome', 'low-back-pain', 'sciatica', 'disc-herniation', 'degenerative-disc-disease', 'spinal-stenosis'],
    metaDescription: 'Pain neuroscience education in Burlington. Understanding pain mechanisms and developing practical strategies for persistent pain conditions.',
    keywords: ['pain education', 'pain science', 'self-management', 'chronic pain', 'pain neuroscience education']
  },
  {
    id: 'sports-rehab-return-to-sport',
    name: 'Sports Rehabilitation & Return to Sport',
    seoTitle: 'Sports Injury Rehab Burlington | Kareem Hassanein',
    shortDescription: 'Staged rehabilitation to help you get back to your sport after injury.',
    description: 'Sports rehabilitation combines assessment with sport-specific training to prepare you to return to competition. Strength, hop and confidence testing, together with clear criteria at each stage, guide decisions about readiness. The program moves in stages from early care through to sport-specific training.',
    benefits: [
      'A structured, staged return to competition',
      'Objective strength, hop and confidence testing',
      'Sport-specific conditioning',
      'May reduce re-injury risk with proper progression',
      'Progressive return toward pre-injury performance',
      'Assessment of movement and landing technique',
      'Injury prevention strategies'
    ],
    conditions: [
      'ACL reconstruction',
      'Knee and hip injuries',
      'Ankle sprains',
      'Muscle strains',
      'Tendon pain',
      'Overuse injuries',
      'Shoulder injuries'
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
    expectations: 'Sports rehabilitation progresses through distinct phases: initial healing, restoration of movement, strength building, power development, and sport-specific training. You\'ll be retested regularly to track progress and check you are ready for the next phase. Training intensity builds toward your sport\'s demands, preparing both body and mind for return to competition. The timeline varies by injury and sport; the aim is to go back when you are ready, not when a date arrives.',
    inDepth: [
      {
        heading: 'Return to sport is a decision, not a date',
        paragraphs: [
          'The most common reason rehabilitation falls short is returning to sport on a timeline rather than on readiness. A muscle strain might be ready in a few weeks and a reconstructed knee might take the better part of a year, but in both cases the question is the same: can the injured side do what the other side can do, under the speed and load your sport demands. That is something you test, not something you assume from the calendar.',
          'Going back before those boxes are ticked is one of the clearest risks for re-injury. In a cohort of 106 people who played pivoting sports, followed for two years after ACL reconstruction (Grindem and colleagues, British Journal of Sports Medicine, 2016), the re-injury rate fell for each month the return was delayed up to nine months after surgery, and more symmetrical quadriceps strength before returning was linked to fewer re-injuries. A re-injury usually costs far more time than the extra few weeks of preparation would have. So the work is structured to answer a clear question at each stage before moving on to the next.',
        ],
      },
      {
        heading: 'How a return to sport program is built',
        paragraphs: [
          'The early phase protects the injury while keeping the rest of you fit. From there the focus moves to rebuilding strength and the capacity of the injured tissue, then to power and the fast, repeated, often awkward demands of real sport, and finally to drills that look like your sport before you step back into it. Each phase has criteria to meet, and the program is shaped around your sport and your level rather than a generic template.',
          'The same principles apply whether you are a competitive athlete or someone who plays recreational hockey or runs on the weekend. I work with athletes across Burlington and the surrounding area at every level, and the goal is the same for all of them: to return when the body is genuinely ready, not just when the pain has gone quiet.',
        ],
      },
      {
        heading: 'Testing readiness',
        paragraphs: [
          'Objective testing is what separates a guess from a decision. For lower limb injuries that usually means comparing the strength of the injured and uninjured sides, a battery of single-leg hop tests for distance and control, and watching landing mechanics for the patterns linked to re-injury. For the knee in particular, psychological readiness matters too, because confidence often lags behind physical recovery and can be measured. You progress when you pass the criteria, not when a set number of weeks has gone by.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How long until I can return to my sport?',
        answer: 'Return timelines depend on injury type, severity, and your sport\'s demands. A muscle strain may allow a return within weeks, while after ACL reconstruction a return to pivoting sport is generally not considered before nine months. The timeline is set by testing, not by the calendar. You progress through phases: pain-free movement, full strength, sport-specific drills, then competition. Rushing back raises the risk of re-injury, which usually means more time away from sport.'
      },
      {
        question: 'What tests determine if I\'m ready to play?',
        answer: 'Testing includes comparing the strength of the injured and uninjured sides (commonly a target of 90% or more of the uninjured side), hop tests for power and landing mechanics, agility drills specific to your sport, and psychological readiness questionnaires. For lower body injuries, single-leg hop distance, triple hop, and crossover hop are standard. Upper body injuries require strength testing and sport-specific movements under load. You must pass each phase\'s criteria before progressing to avoid setbacks.'
      },
      {
        question: 'Can I train while injured?',
        answer: 'Yes, and you should. If you have a lower body injury, you can maintain upper body and core strength. With an upper body injury, you can focus on lower body and cardiovascular fitness. This maintains your conditioning, prevents deconditioning, and keeps you mentally engaged. Training is modified to protect the injured area while maintaining everything else, so there is less fitness to rebuild when you go back.'
      },
      {
        question: 'Do you work with recreational athletes?',
        answer: 'Yes. The principles are the same whether you\'re training for the NHL or playing pickup basketball on weekends. Your program is scaled to your sport\'s demands and your personal goals. A weekend runner doesn\'t need the same volume as a competitive athlete, but both need proper progression, objective testing, and sport-specific preparation to return safely.'
      },
      {
        question: 'How is sports rehabilitation different from regular physiotherapy?',
        answer: 'General physiotherapy usually aims to get you out of pain and back to everyday activities. Sports rehabilitation carries that further, to the point where the injured area can handle the speed, power, change of direction, and repeated load that your sport demands. The early treatment can look similar, but the later stages are where they diverge: objective return-to-sport testing, sport-specific drills, and a higher physical standard before you go back. The aim is not just a pain-free knee or shoulder, but one that holds up under competition.'
      }
    ],
    relatedConditions: ['acl-injuries', 'meniscus-tears', 'mcl-lcl-sprains', 'patellar-tendinopathy', 'knee-pain-patellofemoral', 'proximal-hamstring-tendinopathy', 'hamstring-strains', 'groin-strains', 'achilles-tendinopathy', 'ankle-sprains', 'plantar-fasciitis', 'shin-splints', 'rotator-cuff-injuries', 'shoulder-instability'],
    metaDescription: 'Sports injury rehab in Burlington: return-to-sport programs for knee, hip, ankle and tendon injuries, with strength and hop testing before you go back.',
    keywords: ['sports rehabilitation', 'return to sport', 'athletic rehabilitation', 'sports injury recovery', 'return to play', 'sports physiotherapy']
  },
  {
    id: 'dry-needling',
    name: 'Dry Needling',
    shortDescription: 'Thin needles placed in tight, tender bands of muscle. It can help ease pain and muscle tension in the short term.',
    description: 'Dry needling uses thin filiform needles to reach myofascial trigger points and tight bands of muscle. When the needle reaches a tight band, the muscle often gives a brief twitch. Unlike acupuncture, dry needling is based on Western anatomy and physiology. The evidence suggests it can help some musculoskeletal pain in the short term, particularly alongside exercise, and the quality of that evidence varies between conditions.',
    benefits: [
      'Can ease pain in the short term',
      'Can reduce muscle tension',
      'Can make exercise more comfortable afterward',
      'Used alongside exercise, not instead of it'
    ],
    conditions: [
      'Lateral hip pain',
      'Calf and Achilles pain',
      'Plantar heel pain',
      'Low back pain',
      'Shoulder pain',
      'Myofascial pain'
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
        description: 'A brief involuntary contraction that often happens when the needle reaches the tight band'
      },
      {
        title: 'Movement',
        description: 'Movement and exercise straight afterward, while the area is more comfortable'
      }
    ],
    expectations: 'During dry needling, you\'ll feel a small prick as the needle enters, then possibly a deep ache or a twitch when the needle reaches the tight band. The sensation is brief. Some people feel easier straight away, others over the next day or two, and some notice no change. Mild soreness for a day or two afterward is common.',
    inDepth: [
      {
        heading: 'What dry needling actually does',
        paragraphs: [
          'Dry needling uses a thin filiform needle, the same kind used in acupuncture but with completely different reasoning, to reach a taut band of muscle or an active trigger point. When the needle contacts the band, the muscle often gives a brief involuntary twitch. That local twitch response is the goal. It tends to coincide with a drop in the resting tension of the band and a short-term reduction in local and referred pain.',
          'The mechanisms are still being worked out. The most supported explanations involve a local effect on blood flow and muscle chemistry, a reduction in the electrical irritability of the trigger point, and changes in how the nervous system processes pain from that area. In practice the point is simple: needling can open a window where a muscle moves more freely and hurts less, but it does not by itself rebuild capacity.',
        ],
      },
      {
        heading: 'Where needling fits in a plan',
        paragraphs: [
          'I rarely use dry needling on its own. It works best as one part of a session, used to settle a stubborn area of tension so that the movement and loading work that follows is more comfortable and more productive. The lasting change comes from the exercise, not the needle. If needling is helping, you should be able to do something afterward that you could not do as well before, whether that is a fuller range, a stronger contraction, or a movement with less guarding.',
          'Most people I see in Burlington for needling come in with a clear muscular driver behind their pain, for example a calf that keeps overloading a healing Achilles, or tight gluteal muscles around a sore hip. No referral is needed to book, and direct billing is available for most extended health plans.',
        ],
      },
      {
        heading: 'What the evidence supports',
        paragraphs: [
          'Current research points to dry needling being useful for short-term relief of certain myofascial and musculoskeletal pain problems, particularly when it is combined with exercise rather than used alone. The quality of the evidence varies between conditions, and the effect on long-term outcomes is less certain. I am honest about that. Needling is a reasonable tool to try when there is a clear muscular component, and it is usually easy to tell within a session or two whether it is adding anything for you.',
          'I completed formal certification in dry needling, and every treatment uses sterile, single-use needles with standard clean technique. The area is prepared with antiseptic, and extra care is taken around the ribcage and other sensitive regions.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is dry needling the same as acupuncture?',
        answer: 'No. Dry needling is based on Western medicine, targeting specific anatomical trigger points in muscles that refer pain in predictable patterns. Acupuncture follows traditional Chinese medicine principles, inserting needles along meridians to influence energy flow. The needles look similar, but the reasoning, target locations, and intended mechanisms are completely different. Dry needling aims to ease muscle tension and pain so that movement and exercise are more comfortable.'
      },
      {
        question: 'How deep do the needles go?',
        answer: 'Depth depends on the target muscle and your body composition. A muscle that sits just under the skin needs only a shallow insertion, while deep muscles such as the gluteals or piriformis need a longer needle to reach the tight band. Deeper is not better. The right depth is the one that reaches the band in that muscle.'
      },
      {
        question: 'Are there any risks?',
        answer: 'Serious complications are rare when performed by trained practitioners. Common side effects include temporary soreness (like after exercise), minor bruising, or brief lightheadedness. The main risk is pneumothorax (collapsed lung) with needling near the ribcage, but this is extremely uncommon with proper technique. Infection risk is minimal with sterile, single-use needles. Most people have only mild soreness that settles within a day or two.'
      },
      {
        question: 'How do you ensure the needles are clean and safe?',
        answer: 'All needles are sterile, single-use, and individually packaged. They are disposed of immediately after treatment in a sharps container. Before and after needling, the treatment area is wiped with chlorhexidine (stanhexidine) antiseptic solution. Needles are only purchased from reputable medical supply vendors that meet Health Canada standards. Each needle is used once on one patient and then safely discarded. No needle is ever reused.'
      },
      {
        question: 'How many dry needling sessions will I need?',
        answer: 'It varies, and you should not need many. Dry needling is a tool to unlock progress, not an ongoing treatment you keep coming back for. If it is going to help, you usually notice within one or two sessions, and from there it is used a handful of times alongside your exercise program as the underlying problem improves. If two or three sessions change nothing, I stop and spend the time on something that helps more.'
      },
      {
        question: 'Is dry needling covered by insurance?',
        answer: 'When I perform dry needling it is part of a physiotherapy appointment, so it is covered the same way your physiotherapy treatment is covered. There is no separate charge for the needling itself. Direct billing is available for most extended health plans, and no physician referral is required to book.'
      }
    ],
    relatedConditions: ['greater-trochanteric-pain-syndrome', 'proximal-hamstring-tendinopathy', 'piriformis-syndrome', 'patellar-tendinopathy', 'achilles-tendinopathy', 'plantar-fasciitis', 'low-back-pain', 'sciatica', 'shoulder-impingement', 'rotator-cuff-injuries', 'biceps-tendinopathy'],
    metaDescription: 'Dry needling physiotherapy in Burlington: thin needles for tight, tender muscle bands, used alongside exercise to help ease pain and muscle tension.',
    keywords: ['dry needling', 'trigger point therapy', 'myofascial release']
  },
  {
    id: 'exercise-therapy',
    name: 'Exercise Therapy',
    shortDescription: 'Personalized exercise programs designed to restore strength, flexibility, and function.',
    description: 'Exercise is the core of most musculoskeletal rehabilitation. Individualized programs build strength, improve flexibility, and restore function step by step. Exercises are chosen from current evidence and fitted to your goals and current ability. The benefits last only as long as you keep training, which is why the program is built around something you can continue on your own.',
    benefits: [
      'Progressive strength building',
      'Improved flexibility and range of motion',
      'Better balance and coordination',
      'Can reduce pain and improve function',
      'A planned return to your activities',
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
        answer: 'No problem. Programs start with basic movements you can do safely, often using just your body weight. You learn proper form before adding difficulty. Many people start with simple exercises like sit-to-stand from a chair, wall pushes, or lying leg slides. The progression is gradual: you build capacity before increasing the challenge. Previous exercise experience is not required, just willingness to practice consistently.'
      },
      {
        question: 'Will exercises make my pain worse?',
        answer: 'Properly dosed exercise shouldn\'t increase your pain beyond mild, temporary discomfort. You should feel muscles working, but not sharp pain. Some increase in symptoms during or after is acceptable if it settles by the next day. If pain increases and doesn\'t settle, the exercise is modified or replaced. The goal is progressive loading that builds tolerance without exceeding your tissue\'s current capacity.'
      },
      {
        question: 'How long until I see results?',
        answer: 'Movement and pain often start to change within the first few weeks of regular practice. Strength takes longer to build, and changes in the muscle and tendon themselves take a few months. Early improvements come mostly from the nervous system getting better at using the muscle; later ones reflect changes in the tissue. Practising regularly matters more than any single session, and less frequent practice slows things down.'
      }
    ],
    relatedConditions: ['knee-osteoarthritis', 'hip-osteoarthritis', 'knee-pain-patellofemoral', 'patellar-tendinopathy', 'acl-injuries', 'meniscus-tears', 'greater-trochanteric-pain-syndrome', 'proximal-hamstring-tendinopathy', 'achilles-tendinopathy', 'plantar-fasciitis', 'ankle-sprains', 'shin-splints', 'low-back-pain', 'sciatica', 'disc-herniation', 'rotator-cuff-injuries', 'frozen-shoulder', 'shoulder-instability'],
    metaDescription: 'Exercise therapy in Burlington. Individualized rehabilitation programs to build strength, improve flexibility, and restore function progressively.',
    keywords: ['exercise therapy', 'therapeutic exercise', 'strength training', 'rehabilitation exercises', 'physiotherapy programs']
  },
  {
    id: 'joint-mobilization',
    name: 'Joint Mobilization',
    seoTitle: 'Joint Mobilization Burlington | Kareem Hassanein',
    shortDescription: 'Graded techniques to restore joint movement and reduce stiffness.',
    description: 'Joint mobilization uses graded, controlled movements of a joint to ease stiffness and pain and help it move more freely within its normal range. It is used alongside exercise, which does most of the long-term work.',
    benefits: [
      'Can ease joint stiffness',
      'Can ease pain in the short term',
      'Can improve range of motion',
      'Can make exercise more comfortable'
    ],
    conditions: [
      'Hip and knee stiffness',
      'Ankle stiffness after a sprain',
      'Frozen shoulder',
      'Back stiffness',
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
        description: 'Combining mobilization with active movement'
      },
      {
        title: 'Maintenance Exercises',
        description: 'Teaching self-mobilization techniques to maintain gains'
      }
    ],
    expectations: 'During joint mobilization, you\'ll feel rhythmic movements or sustained pressure at the joint. The techniques are generally comfortable. Many people find the joint moves more easily straight afterward; how long that lasts depends on the exercise that follows. Some people have mild soreness afterward, similar to post-exercise soreness.',
    faqs: [
      {
        question: 'How is joint mobilization different from high-velocity joint techniques?',
        answer: 'Joint mobilization uses controlled, rhythmic movements that stay within your available range and comfort level. You remain in control and can stop the technique at any time. High-velocity techniques use a quick thrust movement, sometimes with an audible joint cavitation. Mobilization is gentler, more gradual, and often better tolerated.'
      },
      {
        question: 'How quickly will I see results?',
        answer: 'Many people notice that movement is easier after the first session. Pain relief may be immediate or come over the next day or two. Lasting change usually takes several sessions, with exercise in between to use the new range. Long-standing stiffness takes longer than a recent restriction.'
      },
      {
        question: 'Is it safe for arthritis?',
        answer: 'Yes, when applied appropriately. Gentle mobilization can ease stiffness and pain in an arthritic joint, working within a comfortable range rather than forcing it. It is used alongside strengthening exercises, which current osteoarthritis guidelines put at the centre of treatment.'
      }
    ],
    relatedConditions: ['hip-osteoarthritis', 'knee-osteoarthritis', 'ankle-sprains', 'si-joint-dysfunction', 'low-back-pain', 'facet-joint-syndrome', 'disc-herniation', 'spinal-stenosis', 'degenerative-disc-disease', 'frozen-shoulder', 'shoulder-impingement', 'rotator-cuff-injuries', 'ac-joint-injuries', 'thoracic-outlet-syndrome'],
    metaDescription: 'Joint mobilization in Burlington. Graded manual techniques to restore movement, reduce joint stiffness, and improve range of motion.',
    keywords: ['joint mobilization', 'joint stiffness', 'range of motion', 'manual therapy', 'joint therapy']
  },
  {
    id: 'soft-tissue-myofascial-release',
    name: 'Soft Tissue & Myofascial Therapy',
    seoTitle: 'Soft Tissue Therapy Burlington | Kareem Hassanein',
    shortDescription: 'Targeted hands-on techniques to ease muscle tension, tenderness, and stiffness.',
    description: 'Soft tissue therapy uses hands-on techniques for muscle tightness, tenderness, and stiffness. Techniques include specific pressure, sustained holds, and pressure combined with movement. They can reduce pain sensitivity and make movement more comfortable in the short term, and are followed by exercise for the same problem. They are used for both recent muscle injuries and longer-standing soft tissue problems.',
    benefits: [
      'Short-term easing of muscle tension',
      'Less tenderness in sore areas',
      'Easier, more comfortable movement',
      'Can make exercise more comfortable',
      'Used alongside a home exercise program'
    ],
    conditions: [
      'Lateral hip pain',
      'Muscle strains',
      'IT band syndrome',
      'Calf and Achilles tightness',
      'Plantar fasciitis',
      'Chronic back pain',
      'Post-surgical scarring',
      'Chronic muscle tightness'
    ],
    process: [
      {
        title: 'Assessment',
        description: 'Finding the tender, tight or guarded areas that relate to your symptoms'
      },
      {
        title: 'Hands-On Techniques',
        description: 'Applying specific pressure, sustained holds, and stretching to ease tension and tenderness'
      },
      {
        title: 'Active Participation',
        description: 'Moving the area while pressure is applied'
      },
      {
        title: 'Movement Integration',
        description: 'Following hands-on work with stretching and strengthening exercises, which is where lasting change comes from'
      }
    ],
    expectations: 'During treatment, you\'ll feel firm to moderate pressure, stretching sensations, and sustained holds. The technique ranges from targeted deeper work to gentle sustained pressure depending on the area. Some areas may be tender at first and ease as the pressure is held. The process can range from intense to relaxing. Many people feel looser and less tense afterward; that window is used for exercise.',
    faqs: [
      {
        question: 'What is fascia and why does it matter?',
        answer: 'Fascia is a continuous web of connective tissue that wraps around every muscle, organ, nerve, and blood vessel in your body. It provides structural support and allows tissues to slide against each other during movement. Hands-on pressure does not physically stretch or reshape dense fascia; studies suggest the forces needed are far greater than anything applied by hand. What hands-on work can change is how sensitive the area feels and how comfortably it moves, which is why it is followed by exercise.'
      },
      {
        question: 'How is this different from massage?',
        answer: 'Massage therapy covers a wide range of techniques and goals. In a physiotherapy session, hands-on work is short and targeted at the problem you came in with, often combined with you moving the area, and it is followed by exercise for the same problem.'
      },
      {
        question: 'Why do some techniques feel gentle while others are more intense?',
        answer: 'Sensitive areas respond better to lighter, sustained pressure, while larger, less sensitive muscles may tolerate firmer work. Intensity is also adjusted to your response: if you are bracing against the pressure, lighter touch works better. The goal is a pressure you can relax into, without triggering protective muscle guarding.'
      },
      {
        question: 'How often should I get treatment?',
        answer: 'Hands-on work is used for a limited number of sessions while the exercise program takes over, not as ongoing maintenance. A recent injury may need only a few sessions; a longer-standing problem may need a few more, spaced further apart as you improve. Once things settle, the exercise program carries on without regular hands-on sessions.'
      }
    ],
    relatedConditions: ['greater-trochanteric-pain-syndrome', 'it-band-syndrome', 'piriformis-syndrome', 'proximal-hamstring-tendinopathy', 'hamstring-strains', 'groin-strains', 'patellar-tendinopathy', 'achilles-tendinopathy', 'plantar-fasciitis', 'peroneal-tendinopathy', 'posterior-tibial-tendon-dysfunction', 'low-back-pain', 'rotator-cuff-injuries', 'shoulder-impingement', 'thoracic-outlet-syndrome'],
    metaDescription: 'Soft tissue and myofascial therapy in Burlington: hands-on techniques to ease muscle tension and tenderness, used alongside exercise.',
    keywords: ['soft tissue release', 'myofascial release', 'muscle tension', 'fascial therapy', 'tissue mobility', 'fascial restrictions', 'chronic pain treatment']
  },
  {
    id: 'trigger-point-therapy',
    name: 'Trigger Point Therapy',
    seoTitle: 'Trigger Point Therapy Burlington | Kareem Hassanein',
    shortDescription: 'Focused pressure on tender spots in muscle to help ease muscle pain and tension.',
    description: 'Trigger point therapy targets specific tender spots in muscles that contribute to local and referred pain. Steady pressure on these spots can ease muscle pain and tension for a while, and the time is then used for movement and exercise. It is used for persistent muscle pain and muscle-related discomfort.',
    benefits: [
      'Less tenderness in the sore spot',
      'Can ease referred pain from a tight muscle',
      'Easier movement afterward',
      'A self-treatment method you can use at home'
    ],
    conditions: [
      'Hip and buttock pain',
      'Lower back pain',
      'Shoulder pain',
      'Myofascial pain syndrome',
      'Chronic muscle tension'
    ],
    process: [
      {
        title: 'Finding the Tender Spots',
        description: 'Locating tender spots in the muscle by hand and checking whether they reproduce your pain'
      },
      {
        title: 'Pressure Application',
        description: 'Applying steady pressure to the tender spot'
      },
      {
        title: 'Stretch and Movement',
        description: 'Moving and stretching the muscle after pressure'
      },
      {
        title: 'Self-Treatment',
        description: 'Teaching you how to do this at home, and what tends to aggravate it'
      }
    ],
    expectations: 'During trigger point therapy, you\'ll feel focused pressure on tender spots that may at first reproduce your familiar pain. The pressure is held until the tenderness starts to ease. Some people feel easier straight away, others over the next day or two.',
    faqs: [
      {
        question: 'Why does pressure on one spot cause pain elsewhere?',
        answer: 'Some tender spots in a muscle refer pain to other areas in fairly predictable patterns. For example, a tender spot in the gluteus minimus, a small muscle on the side of the hip, can refer pain down the outside of the thigh and leg, which can feel like sciatica. Easing the tender spot can reduce both the local tenderness and the referred pain for some people, which also helps confirm where the pain is coming from.'
      },
      {
        question: 'How many treatments are needed?',
        answer: 'Usually a few. A recent problem tends to settle faster than one that has been there for months or years. The number also depends on what keeps aggravating the muscle (overuse, long periods in one position, stress) and whether you practise self-treatment and your exercises between sessions. If a few sessions change nothing, I stop and use the time on something that helps more.'
      },
      {
        question: 'Can I treat trigger points myself?',
        answer: 'Yes, and it helps keep the gains between sessions. You can use a tennis ball, a foam roller, or a massage tool to apply steady pressure. Find the tender spot, apply moderate pressure until the tenderness starts to ease, then move and stretch the muscle. Some spots, such as the deep hip rotators, are hard to reach well on your own.'
      }
    ],
    relatedConditions: ['greater-trochanteric-pain-syndrome', 'piriformis-syndrome', 'proximal-hamstring-tendinopathy', 'low-back-pain', 'sciatica', 'shoulder-impingement', 'rotator-cuff-injuries', 'frozen-shoulder', 'biceps-tendinopathy', 'ac-joint-injuries', 'thoracic-outlet-syndrome', 'postural-dysfunction'],
    metaDescription: 'Trigger point therapy in Burlington: steady pressure on tender spots in muscle to help ease local and referred pain, followed by movement and exercise.',
    keywords: ['trigger point therapy', 'trigger point release', 'myofascial trigger points', 'muscle knots', 'referred pain']
  },
  {
    id: 'cupping-therapy',
    name: 'Cupping Therapy',
    shortDescription: 'Technique using controlled suction to address muscle tension and localized pain.',
    description: 'Cupping therapy uses controlled suction to lift the skin and the tissue just beneath it. A 2020 review of 21 trials (Wood and colleagues, Journal of Bodywork and Movement Therapies) found low to moderate quality evidence that dry cupping may reduce pain in chronic neck pain and non-specific low back pain, and could not draw firm conclusions beyond that. The mechanisms are still unclear. I use it to ease muscle tension and localized pain alongside exercise.',
    benefits: [
      'Short-term easing of muscle tension',
      'May reduce pain in the short term',
      'Can make movement and exercise more comfortable',
      'Used alongside exercise, not instead of it'
    ],
    conditions: [
      'Low back pain',
      'Hip and buttock tension',
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
    expectations: 'During cupping, you\'ll feel a pulling sensation as the cups create suction. This is generally comfortable and often relaxing. Cups may be left stationary or moved across the skin. Round marks are common and fade over several days to a week or more. Many people find the area feels looser afterward.',
    inDepth: [
      {
        heading: 'What cupping does to the tissue',
        paragraphs: [
          'Cupping uses a cup and a vacuum to lift the skin and the layer of tissue beneath it, the opposite of the downward pressure of most hands-on treatment. That decompression draws blood into the area, which is what produces the round marks. The marks are not bruises in the usual sense and they are not a sign of injury. They fade through the normal colours of reabsorbed blood over several days.',
          'Whether that decompression changes anything beyond the short term is still debated. The likely effects are on local circulation, on the sensitivity of the tissue, and on how the area feels and moves immediately afterward. I treat it as a way to make tight, guarded tissue more comfortable to work with, not as a treatment that fixes a problem on its own.',
        ],
      },
      {
        heading: 'How I use cupping in practice',
        paragraphs: [
          'In a session I most often use cupping over areas that are tight and protective, for example the upper traps, the low back, or a calf, and I usually pair it with movement. Sliding the cups or asking you to move the area underneath tends to be more useful than leaving them static, because the goal is to change how the tissue moves and then load it while it is more willing. On its own, cupping can feel good and ease tension for a few days. Paired with the right exercise, that relief becomes something you can build on.',
          'If you have an event coming up, it helps to know the marks can last a week or more, so treatment can be timed around a competition or a photo. Cupping is offered as part of a regular physiotherapy appointment in Burlington, with direct billing for most plans.',
        ],
      },
      {
        heading: 'What the evidence says',
        paragraphs: [
          'The research on cupping is modest. Reviews suggest it may reduce pain in the short term for some musculoskeletal complaints, but the studies are generally small and of low to moderate quality, and the long-term picture is unclear. That is roughly where I place it: a reasonable adjunct that some people respond to well, used inside a plan that is still built around active rehabilitation. If it is not adding anything for you after a couple of sessions, I would rather spend the time on what is.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do the marks hurt?',
        answer: 'No, the marks themselves are painless. They look like circular bruises but are actually caused by the suction drawing blood to the surface, not tissue damage. The area may feel slightly tender to touch immediately after treatment, similar to post-massage soreness. The marks fade from purple to green to yellow over several days. Mark colour varies between people and areas, and it does not show how well the treatment worked.'
      },
      {
        question: 'How long do cups stay on?',
        answer: 'Usually a few minutes. Static cups are left in place for a short time, while dynamic cupping (sliding the cups across the skin with oil) is done over each area for a few minutes. Flash cupping (rapid cup application and removal) is used for more sensitive areas. Timing depends on the area, how your skin responds, and your comfort. Longer is not better.'
      },
      {
        question: 'Is cupping safe?',
        answer: 'It is generally low risk when done properly. I avoid it over broken, irritated or fragile skin, with bleeding disorders or blood-thinning medication, and in a few other situations I check for first. The main side effects are temporary marks, mild soreness, and occasional lightheadedness. Fire cupping, which can cause burns, is not used. Too much suction can cause blistering, which is avoided by using moderate pressure.'
      },
      {
        question: 'How many cupping sessions will I need?',
        answer: 'Cupping is not something you should need indefinitely. It is used to take the edge off tight, guarded tissue so the active part of your rehabilitation goes better, and most people need it for only a handful of sessions while the underlying issue settles. If it is helping, you will feel the difference quickly. If it is not, it is not worth continuing.'
      }
    ],
    relatedConditions: ['greater-trochanteric-pain-syndrome', 'it-band-syndrome', 'proximal-hamstring-tendinopathy', 'hamstring-strains', 'groin-strains', 'piriformis-syndrome', 'achilles-tendinopathy', 'low-back-pain', 'shoulder-impingement', 'rotator-cuff-injuries'],
    metaDescription: 'Cupping therapy in Burlington: controlled suction to help ease muscle tension, used as part of a physiotherapy session alongside exercise.',
    keywords: ['cupping therapy', 'cupping treatment', 'myofascial cupping', 'vacuum therapy', 'traditional cupping']
  },
  {
    id: 'iastm',
    name: 'IASTM (Instrument-Assisted Soft Tissue Mobilization)',
    shortName: 'IASTM',
    seoTitle: 'IASTM Soft Tissue Mobilization Burlington | Kareem Hassanein',
    shortDescription: 'Instrument-assisted soft tissue mobilization: a smooth-edged instrument used to apply controlled pressure to sore, stiff soft tissue.',
    description: 'IASTM uses specially designed instruments to apply controlled pressure to soft tissues. The evidence is mixed and mostly of low quality. Earlier reviews reported short-term gains in range of motion, but the largest recent review (Nazari and colleagues, Disability and Rehabilitation, 2023, 46 trials) found that adding IASTM to other treatment made no meaningful difference to pain, function or range of motion. I use it occasionally, for comfort alongside exercise, and stop if it is not helping.',
    benefits: [
      'May ease tenderness for a short time',
      'May give a short-term gain in range of motion',
      'Can make exercise more comfortable for some people',
      'Used alongside exercise, not instead of it'
    ],
    conditions: [
      'Plantar fasciitis',
      'Achilles tendinopathy',
      'IT band syndrome',
      'Chronic tendinopathies'
    ],
    process: [
      {
        title: 'Assessment',
        description: 'Finding the tender or stiff areas linked to your symptoms, by hand'
      },
      {
        title: 'Treatment Application',
        description: 'Applying the instrument with graded pressure'
      },
      {
        title: 'Tissue Response',
        description: 'Checking your comfort and response, and adjusting pressure'
      },
      {
        title: 'Movement Integration',
        description: 'Following treatment with exercise for the same area'
      }
    ],
    expectations: 'During IASTM, you\'ll feel the instrument gliding over your skin with varying pressure. Some areas may feel tender at first. Mild redness and warmth are common and settle the same day. Some people have temporary soreness, similar to deep tissue work.',
    faqs: [
      {
        question: 'Why use tools instead of hands?',
        answer: 'The instrument lets me apply steady, controlled pressure over a wider area with less effort, and some people find it more comfortable than hands on a sensitive area. It is used alongside hands, not instead of them: assessment still relies on examining the area by hand.'
      },
      {
        question: 'Will it leave marks?',
        answer: 'Some redness is common and usually fades within a day. Firmer pressure can cause small red dots under the skin (petechiae), so I keep the pressure moderate to avoid them. Redness is not a sign that the treatment worked or did not.'
      },
      {
        question: 'How many sessions are needed?',
        answer: 'Usually only a few, alongside your exercise program. If it is going to help, you usually notice within a couple of sessions. If two or three sessions change nothing, I stop and spend the time on something that helps more.'
      }
    ],
    relatedConditions: ['greater-trochanteric-pain-syndrome', 'it-band-syndrome', 'patellar-tendinopathy', 'achilles-tendinopathy', 'plantar-fasciitis', 'peroneal-tendinopathy', 'posterior-tibial-tendon-dysfunction', 'shin-splints', 'rotator-cuff-injuries', 'biceps-tendinopathy', 'wrist-sprains'],
    metaDescription: 'IASTM in Burlington: instrument-assisted soft tissue mobilization, used alongside exercise for sore, stiff muscles and tendons.',
    keywords: ['IASTM', 'instrument assisted soft tissue', 'Graston technique', 'soft tissue mobilization', 'scar tissue treatment']
  },
  {
    id: 'postural-assessment',
    name: 'Postural Assessment & Movement Strategies',
    seoTitle: 'Postural Assessment Burlington | Kareem Hassanein',
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
      'Lower back pain',
      'Shoulder pain with desk work',
      'Upper back discomfort with desk work',
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
    expectations: 'The assessment involves observation and measurement of your posture in various positions. Photos are taken for comparison and education. You\'ll learn specific exercises and receive ergonomic recommendations. Changing habits takes time and practice.',
    faqs: [
      {
        question: 'Can posture really be changed?',
        answer: 'Yes, but not in the way most people think. You can\'t permanently change your bone structure, and passive tissue length changes little. You can improve strength, movement control, and postural awareness. The goal isn\'t a rigid "perfect" posture, but the capacity to vary your position through the day and the awareness to notice when you have been still for too long. Discomfort linked to posture is more often about staying in one position for a long time than about the position itself.'
      },
      {
        question: 'How long before I see results?',
        answer: 'Comfort often improves first, sometimes within days, because changing position more often matters more than reaching perfect alignment. Workplace changes can help straight away. Strength that supports how you sit and stand takes several weeks of regular exercise, and new habits take longer still to become automatic.'
      },
      {
        question: 'Do I need special equipment?',
        answer: 'Most postural exercises use minimal equipment: resistance bands, a foam roller, or just your body weight. Workplace changes might include a monitor stand, a different mouse, or lumbar support, but these are assessed individually and depend on your work setup. Many people improve with awareness training and simple exercises; expensive equipment is not required.'
      }
    ],
    relatedConditions: ['postural-dysfunction', 'low-back-pain', 'sciatica', 'disc-herniation', 'degenerative-disc-disease', 'facet-joint-syndrome', 'shoulder-impingement', 'rotator-cuff-injuries', 'thoracic-outlet-syndrome'],
    metaDescription: 'Postural assessment in Burlington: how you sit, stand and move, with practical ways to vary position and ease discomfort at work and home.',
    keywords: ['postural assessment', 'posture correction', 'ergonomic assessment', 'body alignment', 'postural dysfunction']
  },
  {
    id: 'post-surgical-rehabilitation',
    name: 'Post-Surgical Rehabilitation',
    seoTitle: 'Post-Surgery Physiotherapy Burlington | Kareem Hassanein',
    shortDescription: 'Physiotherapy after orthopedic surgery, from the first weeks to full activity, working to your surgeon\'s protocol.',
    description: 'Rehabilitation after surgery protects the repair while it heals, then rebuilds movement, strength and confidence in stages. I work to your surgeon\'s protocol and adjust the pace to how you respond. Healing moves through overlapping stages: inflammation over the first few days, repair over the following weeks, and remodelling that carries on for months. That is why strength and confidence keep improving long after the wound has healed, and why the later stages of rehabilitation matter as much as the first.',
    benefits: [
      'A staged plan that follows your surgeon\'s protocol',
      'Early help with swelling, pain and getting moving',
      'Range of motion recovered within your surgical precautions',
      'Progressive strengthening exercises',
      'A planned return to work, sport and daily activities',
      'Clear guidance on warning signs after surgery'
    ],
    conditions: [
      'Knee replacement',
      'Hip replacement',
      'ACL reconstruction',
      'Meniscus repair and meniscectomy',
      'Hip arthroscopy',
      'Rotator cuff repair',
      'Shoulder stabilization',
      'Achilles tendon repair',
      'Fracture fixation',
      'Spinal surgery'
    ],
    process: [
      {
        title: 'Protection',
        description: 'Controlling swelling and pain, getting moving safely, and protecting the repair within your surgeon\'s precautions'
      },
      {
        title: 'Movement',
        description: 'Recovering range of motion and normal walking or arm use, within the limits your surgeon set'
      },
      {
        title: 'Strength',
        description: 'Progressive strengthening exercises to rebuild the muscles that weaken after surgery'
      },
      {
        title: 'Return to Activity',
        description: 'Training for the stairs, work, sport or hobbies you want back, with testing before higher-demand activity'
      }
    ],
    expectations: 'Rehabilitation follows the protocol for your operation and your surgeon\'s instructions. Early sessions focus on swelling, pain and gentle movement, then move to strengthening and the activities you need. Visits are usually more frequent early on and spaced out as you become more independent with your exercises.',
    inDepth: [
      {
        heading: 'Working with your surgeon\'s protocol',
        paragraphs: [
          'Every operation comes with precautions: how much weight you can put through the leg, how far a joint can move, whether you need a brace or sling and for how long. These depend on what was done during surgery, and only your surgical team knows those details. Bring your operative report or discharge papers and any written protocol to your first visit.',
          'I follow those limits and progress within them. If something does not look right, or a question needs the surgeon\'s answer, I contact the surgical team rather than guess.',
        ],
      },
      {
        heading: 'Knee and hip replacement',
        paragraphs: [
          'After a knee replacement, the early priorities are controlling swelling, getting the knee fully straight, recovering bend, and walking with less support. Thigh strength drops sharply in the first weeks. In a study of 20 people about a month after knee replacement (Mizner and colleagues, Journal of Bone and Joint Surgery, 2005), quadriceps strength was 62% lower than before surgery, mostly because the nervous system was not fully switching the muscle on. Rebuilding that strength is a large part of how well you later manage stairs, chairs and longer walks.',
          'After a hip replacement, the focus is walking, strength around the hip, and getting in and out of chairs, cars and bed comfortably. Some hip replacements come with movement precautions and some do not; it depends on the surgical approach and your surgeon\'s preference, so I follow what you were given. In both operations, people usually keep improving for months after the wound has healed.',
        ],
      },
      {
        heading: 'ACL reconstruction and other knee surgery',
        paragraphs: [
          'After ACL reconstruction, the first goals are a fully straight knee, settling the swelling, and getting the quadriceps working again. Strength work builds from there, then running, jumping and change of direction, and finally sport-specific training. Return to sport is decided by testing rather than the calendar. In a cohort of 106 people who played pivoting sports, followed for two years after ACL reconstruction (Grindem and colleagues, British Journal of Sports Medicine, 2016), the re-injury rate fell for each month the return was delayed up to nine months after surgery.',
          'Meniscus surgery varies. When part of the meniscus is trimmed (meniscectomy), you can usually load the knee early. When it is repaired, the repair is protected for longer, often with limits on weight bearing or deep bending, even though both are knee operations. Your surgeon\'s instructions set the pace.',
        ],
      },
      {
        heading: 'Shoulder, tendon and fracture surgery',
        paragraphs: [
          'After a rotator cuff repair, the repaired tendon is protected while it heals back onto the bone. Early work is usually gentle movement within the sling precautions, with active use and strengthening added later. Shoulder stabilization follows a similar pattern of protection first, then range, then strength.',
          'After an Achilles repair or fracture fixation, the early stages are set by the boot, cast or weight-bearing limits you leave hospital with. Once those lift, the work is restoring range, calf and leg strength, and normal walking before anything faster.',
        ],
      },
    ],
    redFlags: [
      {
        sign: 'Pain, swelling, warmth or redness in the calf or thigh, especially in one leg',
        action: 'Same-day medical assessment: call your surgeon\'s office, or go to emergency if you cannot reach them. These can be signs of a blood clot (deep vein thrombosis).'
      },
      {
        sign: 'Sudden shortness of breath, chest pain, or coughing up blood',
        action: 'Call 911. A blood clot can travel to the lungs.'
      },
      {
        sign: 'Fever or chills, or a wound that becomes more red, hot, swollen or painful, or leaks pus or cloudy fluid',
        action: 'Contact your surgeon\'s office the same day, or go to emergency if you cannot reach them. These can be signs of infection.'
      },
      {
        sign: 'The wound opens, or bleeding soaks through the dressing',
        action: 'Contact your surgeon\'s office or go to emergency the same day.'
      },
      {
        sign: 'A foot or hand that becomes pale, cold, numb or increasingly painful inside a cast, boot or tight bandage',
        action: 'Go to emergency now.'
      },
      {
        sign: 'Sudden loss of movement or strength, a pop with sudden pain, a new deformity, or suddenly being unable to put weight on a leg you could stand on before',
        action: 'Stop exercising and contact your surgeon the same day. The repair or joint replacement may have been damaged or dislocated.'
      },
      {
        sign: 'After spinal surgery: new numbness around the genitals, buttocks or inner thighs, new loss of bladder or bowel control, or new weakness in the legs',
        action: 'Go to emergency now.'
      }
    ],
    faqs: [
      {
        question: 'When should I start physiotherapy after surgery?',
        answer: 'It depends on the operation and your surgeon\'s instructions. After knee replacement, hip replacement and ACL reconstruction, rehabilitation usually begins within days. After a rotator cuff repair, early work is usually gentle movement within the sling precautions, with active exercise added later. Meniscus repair is protected for longer than a meniscectomy, even though both are knee operations. Starting too aggressively can damage a repair, and waiting too long can leave a joint stiff, so follow your surgeon\'s timeline. I work within it.'
      },
      {
        question: 'Can I start physiotherapy before surgery?',
        answer: 'Yes. Building strength and range before an operation, often called prehabilitation, can give you a better starting point, and it means you already know your exercises before the hard first weeks. Before ACL reconstruction, many surgeons want the knee straight, the swelling settled and the quadriceps working well before they operate.'
      },
      {
        question: 'Will therapy be painful after surgery?',
        answer: 'You should feel stretching and muscle fatigue, but not sharp pain that makes you want to stop. Healing tissue needs gradual load to recover, but too much too soon can damage the repair. Moderate discomfort that settles quickly is acceptable; sharp pain, or pain that lingers and worsens afterward, means the load was too much and the plan is adjusted. Tell me how your pain responds so the progression stays right for you.'
      },
      {
        question: 'How long is post-surgical rehabilitation?',
        answer: 'It varies with the operation. Recovery from a meniscectomy is usually measured in weeks, while a rotator cuff repair or a joint replacement takes months. Return to pivoting sport after ACL reconstruction is generally not considered before nine months. The pace also depends on how you were before surgery and how consistently you do your exercises. Your surgeon\'s protocol and your progress on testing set your timeline.'
      },
      {
        question: 'What should I bring to my first visit?',
        answer: 'Your operative report or discharge papers, any protocol or precautions from your surgeon, a list of your medications, and clothing that lets me see and move the area, such as shorts for a knee or hip. If you have a brace, sling or walking aid, bring it too.'
      },
      {
        question: 'Is physiotherapy after surgery covered by insurance?',
        answer: 'It is billed like any other physiotherapy appointment. Direct billing is available at Endorphins for most extended health plans. No referral is needed to book, although some insurance plans ask for one before they reimburse, so check your plan.'
      }
    ],
    relatedConditions: ['knee-osteoarthritis', 'hip-osteoarthritis', 'acl-injuries', 'meniscus-tears', 'pcl-injuries', 'patella-fractures', 'hip-labral-tears', 'rotator-cuff-injuries', 'shoulder-instability', 'disc-herniation', 'spinal-stenosis'],
    metaDescription: 'Physiotherapy after surgery in Burlington: knee and hip replacement, ACL, meniscus and rotator cuff repair, working to your surgeon\'s protocol.',
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
