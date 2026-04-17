// Condition-vs-condition comparison pages.
// Each entry powers a single `/conditions/compare/[pair]` page that helps
// patients orient themselves before booking an assessment. The pages do not
// replace a clinical exam; they explain the pattern differences between two
// conditions that commonly get mistaken for each other.

export interface ConditionRef {
  slug: string;
  name: string;
  shortName: string;
}

export interface DistinguishingRow {
  aspect: string;
  aForA: string; // applies to conditionA
  aForB: string; // applies to conditionB
}

export interface SpecificTest {
  test: string;
  whatItShows: string;
}

export interface EvidenceNote {
  claim: string;
  source: string;
}

export interface ComparisonFAQ {
  question: string;
  answer: string;
}

export interface ConditionComparison {
  pair: string; // URL slug, e.g. 'tennis-elbow-vs-golfers-elbow'
  title: string; // <title> and H1 driver
  h1: string; // question-style heading on the page
  description: string; // meta description (<=158 chars)
  conditionA: ConditionRef;
  conditionB: ConditionRef;
  atAGlance: string; // 2-3 sentence primer on why these get confused
  distinguishing: DistinguishingRow[];
  specificTests?: SpecificTest[];
  whenItIsA: string; // "Your pattern more likely fits A if..."
  whenItIsB: string; // "Your pattern more likely fits B if..."
  whenUncertain: string; // honest: "If you can't tell, here's what to do"
  overlap: string; // short note on how these can coexist
  relatedTreatmentIds: string[]; // ids from treatments-data
  faqs: ComparisonFAQ[]; // 4-6 specific "how do I tell them apart" questions
  evidenceNotes?: EvidenceNote[];
}

export const CONDITION_COMPARISONS: ConditionComparison[] = [
  // ---------------------------------------------------------------------------
  // 1. Tennis elbow vs. golfer's elbow
  // ---------------------------------------------------------------------------
  {
    pair: 'tennis-elbow-vs-golfers-elbow',
    title: 'Tennis Elbow vs. Golfer\'s Elbow: How to Tell Them Apart',
    h1: "Is it tennis elbow or golfer's elbow?",
    description:
      "Tennis elbow vs. golfer's elbow: how to tell them apart by location, grip, and tests. Written by Kareem Hassanein, Registered Physiotherapist, Burlington.",
    conditionA: {
      slug: 'tennis-elbow',
      name: 'Tennis Elbow',
      shortName: 'Tennis elbow',
    },
    conditionB: {
      slug: 'golfers-elbow',
      name: "Golfer's Elbow",
      shortName: "Golfer's elbow",
    },
    atAGlance:
      "Both are tendinopathies at the elbow, and the names are misleading. Tennis elbow sits on the outside of the elbow at the lateral epicondyle, where the wrist extensor tendons meet the bone. Golfer's elbow sits on the inside, at the medial epicondyle, where the wrist flexor and forearm pronator tendons attach. Same tissue type, opposite sides, different provocation patterns. People end up confusing them because the pain can spread down the forearm in both cases.",
    distinguishing: [
      {
        aspect: 'Where it hurts',
        aForA: 'Outside of the elbow, over the bony point on the lateral side. Often spreads down the back of the forearm toward the wrist.',
        aForB: 'Inside of the elbow, over the bony point on the medial side. Often spreads down the front of the forearm toward the palm side of the wrist.',
      },
      {
        aspect: 'Movement that provokes it',
        aForA: 'Gripping, lifting with the palm down, backhand strokes, wringing a towel, opening jars. Wrist extension against resistance is the classic trigger.',
        aForB: 'Gripping hard, wrist flexion, forearm rotation on the golf downswing, carrying heavy bags with the palm up, throwing.',
      },
      {
        aspect: 'Who typically gets it',
        aForA: 'Trades, office workers with sustained mouse and keyboard loads, racquet sports players (especially faulty backhand technique), new guitarists.',
        aForB: 'Golfers, pitchers, climbers, weightlifters doing heavy pulling and grip work, tradespeople with repeated hammering or screwing.',
      },
      {
        aspect: 'What it feels like with a cup of coffee',
        aForA: 'Pain at the outside of the elbow when lifting the mug with the palm facing down. This is a reliable real-world screen.',
        aForB: 'Pain at the inside of the elbow when lifting the mug with the palm facing up or carrying groceries with the arm at the side.',
      },
      {
        aspect: 'How tender the bone is',
        aForA: 'Sharp tenderness when I press on the lateral epicondyle, the bony bump on the outside of the elbow.',
        aForB: 'Sharp tenderness when I press on the medial epicondyle, the bony bump on the inside of the elbow.',
      },
      {
        aspect: 'Nerve-type symptoms',
        aForA: 'Rarely involves numbness or tingling. If that is present, the radial nerve can be irritated as a secondary issue.',
        aForB: "Can overlap with ulnar nerve irritation at the cubital tunnel, producing tingling into the ring and little fingers. That changes the plan.",
      },
      {
        aspect: 'How common it is',
        aForA: 'Far more common in clinic than golfer\'s elbow. Lateral elbow pain affects roughly 1 to 3 percent of adults.',
        aForB: 'Less common, roughly one fifth as frequent as tennis elbow in the general population.',
      },
    ],
    specificTests: [
      {
        test: "Cozen's test (resisted wrist extension)",
        whatItShows:
          "With the elbow straight and the forearm turned palm-down, I resist you extending the wrist. Pain at the outside of the elbow points to tennis elbow.",
      },
      {
        test: "Mill's test (passive wrist flexion with the elbow straight)",
        whatItShows:
          'Stretching the wrist extensors by bending the wrist down while the elbow is straight reproduces lateral elbow pain in tennis elbow.',
      },
      {
        test: 'Resisted wrist flexion with the forearm palm-up',
        whatItShows:
          "Pain at the inside of the elbow on resisted wrist flexion is the primary screen for golfer's elbow.",
      },
      {
        test: 'Resisted forearm pronation',
        whatItShows:
          "Resisted turning of the palm down against my hand reproduces medial elbow pain in golfer's elbow because pronator teres shares that origin.",
      },
      {
        test: 'Tinel\'s at the cubital tunnel',
        whatItShows:
          "Tapping behind the medial epicondyle. Tingling into the ring and little fingers suggests the ulnar nerve is involved, which changes management and sometimes sits on top of golfer's elbow.",
      },
    ],
    whenItIsA:
      "Your pattern more likely fits tennis elbow if the pain sits on the outside of the elbow, lifting a coffee mug with the palm down hurts, gripping and wrist extension trigger it, and the bony bump on the outside is tender. It often starts after an increase in gripping work, a change in racquet technique, or a heavy stretch of yard work or trades.",
    whenItIsB:
      "Your pattern more likely fits golfer's elbow if the pain sits on the inside of the elbow, carrying a shopping bag or lifting with the palm up hurts, wrist flexion and forearm rotation trigger it, and the bony bump on the inside is tender. It often flares after heavier grip work, a change in a golf or throwing motion, or climbing volume going up.",
    whenUncertain:
      "If you cannot tell whether the pain is on the inside or the outside of the elbow, or if it feels like both, do not keep pushing through. A brief in-person assessment sorts this in about ten minutes. I localise the tenderness, run the resisted tests, screen the ulnar nerve, and look upstream at the shoulder and neck because elbow pain can be referred. Self-directed stretching the wrong tendon can drag the condition out.",
    overlap:
      "Both conditions can coexist in the same arm, particularly in tradespeople and climbers. It is also common to see a tennis elbow picture with a partly irritable neck or a stiff thoracic spine contributing to forearm overload. That is why I always screen the whole upper quadrant on the first visit rather than only treating the elbow.",
    relatedTreatmentIds: [
      'exercise-therapy',
      'dry-needling',
      'soft-tissue-myofascial-release',
      'joint-mobilization',
      'cupping-therapy',
    ],
    faqs: [
      {
        question: "Can I have tennis elbow and golfer's elbow at the same time?",
        answer:
          "Yes, and it happens more than people expect. Tradespeople, climbers, and anyone doing heavy repeated gripping can overload both the extensor and flexor tendons in the same arm. The tender points sit on opposite sides of the elbow, so the exam still separates them, but the plan needs to address both origins at once.",
      },
      {
        question: "I don't play tennis or golf. Can I still have these conditions?",
        answer:
          "Absolutely. Most people I see with lateral or medial epicondyle tendinopathy have never picked up a racquet or a club. The sports lent their names to the conditions, not their exclusive causes. Gripping, lifting, computer work, trades, gardening, guitar playing, and parenting a heavy toddler are all common real-world triggers.",
      },
      {
        question: "Why does the pain travel down my forearm?",
        answer:
          "The forearm muscles that attach at the epicondyles run most of the way to the wrist. When the tendon origin is irritable, the muscle belly picks up protective tone, which can feel like a dull ache extending toward the wrist. It does not usually mean something separate is wrong, but if there is numbness, tingling, or weakness in the hand, that warrants a nerve screen.",
      },
      {
        question: "Does a cortisone injection fix this?",
        answer:
          "It can reduce pain in the short term, but the published evidence is not kind to cortisone for tennis elbow in the longer term. The 2013 Coombes et al. trial in JAMA showed corticosteroid injection had worse one-year outcomes than placebo. For most patients, a progressive loading program plus sensible load adjustment gives a better medium-term result.",
      },
      {
        question: "How long does each usually take to settle with physiotherapy?",
        answer:
          "Tendinopathies are patient. I tell people to expect real change across six to twelve weeks of dosed loading, with earlier wins in pain and grip as the irritation calms. Severe or long-standing cases can take longer. If symptoms are getting worse rather than better over three to four weeks of good rehab, I re-examine rather than just pushing on.",
      },
      {
        question: "Can I keep training or working while I rehab this?",
        answer:
          "Usually yes, with modifications. I adjust the specific provoking movements, change grip width or handle size where possible, and keep the tendon working at a load it can tolerate. Complete rest tends to make tendons more reactive, not less, so the aim is better dosing rather than no activity.",
      },
    ],
    evidenceNotes: [
      {
        claim:
          'Corticosteroid injection was worse than placebo at one year for lateral elbow pain, with a higher recurrence rate.',
        source: 'Coombes BK et al., JAMA 2013; 309(5): 461-469.',
      },
      {
        claim:
          'Progressive resistance exercise is a recommended first-line conservative treatment for lateral and medial elbow tendinopathy.',
        source:
          'Lucado AM et al., "Clinical Practice Guideline for Elbow Tendinopathy," JOSPT 2022; 52(12): CPG1-CPG110.',
      },
      {
        claim:
          'Lateral epicondyle tendinopathy affects roughly 1 to 3 percent of the general adult population and is several times more common than medial epicondyle tendinopathy.',
        source:
          'Shiri R, Viikari-Juntura E. "Lateral and medial epicondylitis: role of occupational factors." Best Practice & Research Clinical Rheumatology 2011; 25(1): 43-57.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 2. Rotator cuff vs. frozen shoulder
  // ---------------------------------------------------------------------------
  {
    pair: 'rotator-cuff-vs-frozen-shoulder',
    title: 'Rotator Cuff vs. Frozen Shoulder: Key Differences',
    h1: 'Is it a rotator cuff problem or frozen shoulder?',
    description:
      "Rotator cuff injury or frozen shoulder? How to tell them apart by pain pattern, stiffness, and range. By Kareem Hassanein, Registered Physiotherapist, Burlington.",
    conditionA: {
      slug: 'rotator-cuff-injuries',
      name: 'Rotator Cuff Injuries',
      shortName: 'Rotator cuff',
    },
    conditionB: {
      slug: 'frozen-shoulder',
      name: 'Frozen Shoulder',
      shortName: 'Frozen shoulder',
    },
    atAGlance:
      "Both cause shoulder pain and both make it hard to use the arm, but the mechanics are different. Rotator cuff problems are tendon and muscle driven, which means the cuff hurts and weakens but the joint can usually still be moved by someone else. Frozen shoulder (adhesive capsulitis) is a capsule problem, which means the whole joint stiffens up so badly that even a physio cannot move it past a certain point. That is the crucial separator, and it is why they need very different plans.",
    distinguishing: [
      {
        aspect: 'Typical age and onset',
        aForA: 'Any adult age. Often starts after a specific overuse episode, a lift that went badly, or a fall onto an outstretched arm.',
        aForB: 'Usually 40 to 60. Often starts for no obvious reason. Strongly linked to diabetes, thyroid disease, and the non-dominant side of a recent upper-limb injury.',
      },
      {
        aspect: 'How the range of motion looks',
        aForA: 'You can often move the arm to nearly full range when I lift it for you, even if it hurts. Active range is limited mostly by pain and weakness, not a hard stop.',
        aForB: 'A clear hard block. Both your active and my passive movement stop well short of normal, particularly on external rotation with the arm at your side.',
      },
      {
        aspect: 'External rotation (turning the palm out with the elbow tucked)',
        aForA: 'Usually preserved unless there is a large cuff tear affecting infraspinatus specifically.',
        aForB: 'Dramatically lost. This is the single most useful bedside finding. A loss of passive external rotation is the hallmark of frozen shoulder.',
      },
      {
        aspect: 'Night pain',
        aForA: 'Common, especially lying on that side. Usually reduces when you find a comfortable position.',
        aForB: 'Classic, severe, and position-independent. Often wakes people multiple times a night during the painful phase, even on the other side.',
      },
      {
        aspect: 'Strength',
        aForA: 'Weakness on specific tests is central. External rotation, elevation in the plane of the scapula, and lift-off tests pick up cuff deficits.',
        aForB: 'Strength within the available small range is reasonable. The problem is range, not power. If I bring the arm into a position where strength can be tested, it usually grades close to normal.',
      },
      {
        aspect: 'Timeline',
        aForA: 'Can settle in weeks to months with the right loading program. A true full-thickness tear may not fully close but is often manageable without surgery.',
        aForB: 'Follows a slow three-phase course: painful (2 to 9 months), stiff (4 to 12 months), thawing (5 to 24 months). Total natural history is 1 to 3 years, though rehab accelerates recovery.',
      },
      {
        aspect: 'What imaging usually shows',
        aForA: 'MRI or ultrasound shows tendinopathy or partial or full-thickness tears of supraspinatus, infraspinatus, subscapularis, or teres minor.',
        aForB: 'Imaging is often unremarkable. The diagnosis is clinical. MRI arthrogram can show a thickened, contracted capsule, but scans are not usually needed to confirm it.',
      },
    ],
    specificTests: [
      {
        test: 'Passive external rotation with the arm at the side',
        whatItShows:
          "I hold your elbow into your side, support the forearm, and rotate the hand outward. A firm capsular block well short of normal (usually less than 30 degrees on the affected side compared with the other arm) is the strongest bedside marker of frozen shoulder.",
      },
      {
        test: 'Drop arm / empty can / external rotation strength (rotator cuff battery)',
        whatItShows:
          'These isolate the main cuff muscles. Weakness or pain on resisted external rotation and elevation in the plane of the scapula is classic for rotator cuff pathology.',
      },
      {
        test: 'Hawkins-Kennedy and Neer impingement signs',
        whatItShows:
          'Positive in rotator cuff and subacromial pain. Can also be positive in the painful phase of frozen shoulder, so they are supportive rather than definitive.',
      },
      {
        test: 'Active versus passive range comparison',
        whatItShows:
          'In rotator cuff problems, what I can move the arm through passively is usually much greater than what you can move actively. In frozen shoulder, the two are almost identical and both are limited.',
      },
      {
        test: 'Scapular assist and relocation tests',
        whatItShows:
          'Improving active range by manually positioning the shoulder blade suggests scapular and cuff contributions. A frozen capsule does not budge with scapular assistance.',
      },
    ],
    whenItIsA:
      "Your pattern more closely matches a rotator cuff problem if the pain is sharpest with specific movements (reaching overhead, behind the back, or across the body), you can still get reasonable passive range when someone else lifts your arm, external rotation with the elbow at your side is preserved, and specific cuff tests reproduce weakness or pain. A recent fall, lift, or ramp-up in overhead activity often sits in the history.",
    whenItIsB:
      "Your pattern more closely matches frozen shoulder if the shoulder has progressively stiffened up over weeks to months with no single clear injury, night pain is severe, and both active and passive external rotation at the side are strikingly reduced. A history of diabetes or thyroid disease raises the probability. The arm may actually hurt less as it stiffens, which misleads some people into thinking they are getting better.",
    whenUncertain:
      "The two can look similar in the early painful phase, which is exactly when an honest assessment helps. I check passive external rotation first (it does most of the separating work), then run the cuff battery, compare active and passive range, and ask targeted history questions. If I am still unsure, I will tell you that and re-check at the next visit, because frozen shoulder declares itself more clearly with time.",
    overlap:
      "A stiff, painful shoulder after a rotator cuff strain can progress into secondary stiffness that looks like early frozen shoulder. It also works the other way: people with true frozen shoulder often have co-existing cuff tendinopathy from years of compensation. Treating one and ignoring the other is a common reason shoulders do not fully recover.",
    relatedTreatmentIds: [
      'exercise-therapy',
      'joint-mobilization',
      'dry-needling',
      'soft-tissue-myofascial-release',
      'post-surgical-rehabilitation',
    ],
    faqs: [
      {
        question: "My shoulder is stiff and painful. Is it just a rotator cuff injury that needs more time?",
        answer:
          "Maybe, but there is a specific test that helps. Try to externally rotate your shoulder with the elbow tucked into your side, then compare it to the other arm. If that motion is strikingly limited and painful on the affected side and the other side looks normal, frozen shoulder is very much in the picture. If external rotation at the side is similar to the other arm, rotator cuff issues become more likely. Either way, an exam sorts it in one visit.",
      },
      {
        question: 'Does frozen shoulder get better on its own?',
        answer:
          "Most cases eventually resolve, but the natural timeline is long. Published series show one to three years from onset to full recovery without treatment, with meaningful functional loss in the stiff phase. Structured physiotherapy focused on capsular mobility, pain control, and progressive loading consistently shortens this and reduces residual stiffness.",
      },
      {
        question: "Should I get an MRI before starting physiotherapy?",
        answer:
          "For most shoulder pain, no. Frozen shoulder is a clinical diagnosis. Rotator cuff problems are often managed well without imaging, and incidental findings on MRI in pain-free adults are extremely common. I order imaging when the exam raises specific concerns, when symptoms are not improving on the expected timeline, or when surgery is a real consideration.",
      },
      {
        question: 'Can I strengthen my way out of frozen shoulder?',
        answer:
          "Not in the usual strengthening sense. In the painful phase, loading into an already irritable, contracted capsule tends to flare things. The early work is about restoring range through careful mobilisation, sleep-tolerant positions, and gentle movement. Strengthening comes in later as range returns. The order matters, which is the opposite of most rotator cuff rehab.",
      },
      {
        question: 'What if I have both a rotator cuff tear and a frozen shoulder?',
        answer:
          "Common, and manageable. The plan addresses the stiffer pattern first because you cannot strengthen into range you do not have. As capsular mobility improves, the rotator cuff rehab layers in. Skipping the capsular work early usually stalls the whole rehab.",
      },
      {
        question: 'I have diabetes. Does that change anything?',
        answer:
          "Yes. Frozen shoulder is several times more common in people with diabetes, it tends to be more severe, and it takes longer to recover. That is not a reason to abandon rehab, it is a reason to start earlier, pace more carefully, and protect sleep aggressively through the painful phase.",
      },
    ],
    evidenceNotes: [
      {
        claim:
          'Loss of passive external rotation with the arm at the side is the most useful clinical finding for identifying adhesive capsulitis.',
        source:
          'Kelley MJ et al., "Shoulder Pain and Mobility Deficits: Adhesive Capsulitis" (JOSPT Clinical Practice Guideline), 2013.',
      },
      {
        claim:
          'Adhesive capsulitis progresses through painful, stiff, and thawing phases lasting a combined one to three years without treatment, with residual symptoms possible long-term.',
        source:
          'Hand C, Clipsham K, Rees JL, Carr AJ. "Long-term outcome of frozen shoulder." Journal of Shoulder and Elbow Surgery 2008; 17(2): 231-236.',
      },
      {
        claim:
          'Rotator cuff tendinopathy and tears are often managed successfully with structured exercise and loading, with surgical and non-surgical outcomes comparable for many degenerative tears at two to five years.',
        source:
          'Kuhn JE et al., "Effectiveness of physical therapy in treating atraumatic full-thickness rotator cuff tears." Journal of Shoulder and Elbow Surgery 2013; 22(10): 1371-1379.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 3. Patellar tendinopathy vs. patellofemoral pain
  // ---------------------------------------------------------------------------
  {
    pair: 'patellar-tendinopathy-vs-patellofemoral',
    title: 'Patellar Tendinopathy vs. Patellofemoral Pain: How to Tell',
    h1: 'Is it patellar tendinopathy or patellofemoral pain?',
    description:
      "Patellar tendinopathy or patellofemoral pain? How to tell them apart by pain location and triggers. By Kareem Hassanein, Registered Physiotherapist, Burlington.",
    conditionA: {
      slug: 'patellar-tendinopathy',
      name: "Patellar Tendinopathy (Jumper's Knee)",
      shortName: 'Patellar tendinopathy',
    },
    conditionB: {
      slug: 'knee-pain-patellofemoral',
      name: 'Patellofemoral Pain',
      shortName: 'Patellofemoral pain',
    },
    atAGlance:
      "Both sit at the front of the knee and both flare with loaded knee bending. The difference comes down to where the pain points and what triggers it. Patellar tendinopathy is a localised tendon overload problem. The pain sits at the bottom tip of the kneecap on the tendon, flares with jumping and changes of direction, and eases as the tendon warms up. Patellofemoral pain is a loading and tracking problem at the joint surface behind the kneecap. The pain is more diffuse, flares with stairs, prolonged sitting, and running, and does not warm up in the same way.",
    distinguishing: [
      {
        aspect: 'Where you point to when asked',
        aForA: 'One finger directly on the bottom tip of the kneecap, at the top of the patellar tendon. Very localised.',
        aForB: 'A vaguer arc around the kneecap, often described by circling with the whole hand. People rarely point to a single spot.',
      },
      {
        aspect: 'The "warm-up" phenomenon',
        aForA: 'Classic. Hurts for the first few minutes of activity, often feels better through the middle, then flares afterwards or the next day.',
        aForB: 'Pain tends to build with continued loading rather than warm out, and is often worse on descent (stairs down, downhill running).',
      },
      {
        aspect: 'Triggers',
        aForA: 'Jumping, landing, accelerating, deep squats under load, hill sprints. Sudden volume spikes in jumping sports are a classic setup.',
        aForB: 'Stairs (often worse going down), prolonged sitting with bent knees ("theatre sign"), running, squatting, and anything that loads the kneecap repeatedly.',
      },
      {
        aspect: 'Sitting with bent knees',
        aForA: 'Usually fine, unless the knee is deeply bent under load.',
        aForB: "Classic aggravator. The so-called 'movie sign', where the knee aches after 20 minutes in a cinema seat or on a long drive, is highly suggestive.",
      },
      {
        aspect: 'Clicking, grinding, or catching',
        aForA: 'Not typical. The tendon does not usually produce joint noises.',
        aForB: 'Grinding or clicking behind the kneecap (crepitus) is common, although not diagnostic on its own.',
      },
      {
        aspect: 'Typical sport or activity',
        aForA: 'Volleyball, basketball, high jump, tennis, soccer, any sport with repeated jumping or cutting. Heavy squatters.',
        aForB: 'Runners (especially those ramping up volume), cyclists with a saddle too low, desk workers returning to training, recreational athletes.',
      },
      {
        aspect: 'What a single-leg squat shows',
        aForA: 'Pain at the bottom tip of the kneecap as the knee flexes under load. Usually reproduces the symptom cleanly.',
        aForB: 'Pain around or behind the kneecap, often with a visible knee-in (valgus) collapse or a hip drop on the stance side. Reproduction is typical but less focal.',
      },
    ],
    specificTests: [
      {
        test: 'Palpation of the inferior pole of the patella',
        whatItShows:
          'Pinpoint tenderness right where the patellar tendon attaches to the bottom of the kneecap. This is the single most specific finding for patellar tendinopathy.',
      },
      {
        test: 'Single-leg decline squat (25 degrees)',
        whatItShows:
          'Squatting on one leg on a 25-degree decline board selectively loads the patellar tendon. Clear pain at the bottom of the kneecap during this test is strongly suggestive of patellar tendinopathy.',
      },
      {
        test: 'Step-down from a stair, 20 to 30 cm height',
        whatItShows:
          'Reproducing your anterior knee pain on a single-leg step-down, particularly with visible knee-in collapse or hip drop, is a reliable in-clinic trigger for patellofemoral pain.',
      },
      {
        test: 'Clarke\'s sign and patellar compression',
        whatItShows:
          'Gentle compression of the kneecap against the femur, with and without active quad contraction. Pain behind the kneecap (not below it) supports patellofemoral pain, although specificity is limited.',
      },
      {
        test: 'Hip strength screen (abduction and external rotation)',
        whatItShows:
          'Weakness in the glutes, particularly gluteus medius and the deep rotators, is strongly associated with patellofemoral pain. It can be a contributor to patellar tendinopathy too, but it is a more consistent finding in patellofemoral cases.',
      },
    ],
    whenItIsA:
      "Your pattern more closely matches patellar tendinopathy if you can put one finger on the bottom tip of the kneecap where it hurts, the pain warms up as you keep going and flares afterwards, jumping and changes of direction reliably bring it on, and sitting with a bent knee is fine. A recent spike in training volume, a new sport, or a preseason return are common setups.",
    whenItIsB:
      "Your pattern more closely matches patellofemoral pain if the pain is more diffuse around or behind the kneecap, going down stairs and sitting with bent knees for a while both bother it, and you notice a feeling of the knee giving or buckling going downhill. It often starts after a running ramp-up, a life change that added a lot more stairs or walking, or after a period of detraining.",
    whenUncertain:
      "These genuinely overlap and they can coexist, so a brief assessment matters. I localise the tenderness first, because one finger on the inferior pole of the patella is worth a lot of diagnostic weight. Then I run the single-leg decline squat and the step-down, check hip strength, and look at your running or squat mechanics if relevant. That usually sorts it. Where they coexist, I dose the tendon work and the patellofemoral rehab in parallel rather than arguing about which is primary.",
    overlap:
      "It is common to see both in the same knee, particularly in jumping athletes who also sit at a desk all day. Hip and trunk weakness feeds both. Chronic patellofemoral pain can also alter loading at the patellar tendon over time, and a grumbling tendon can change how you squat, which feeds the patellofemoral side. The rehab for both has a lot of shared elements, so the plan is rarely either-or.",
    relatedTreatmentIds: [
      'exercise-therapy',
      'sports-rehab-return-to-sport',
      'dry-needling',
      'joint-mobilization',
      'soft-tissue-myofascial-release',
    ],
    faqs: [
      {
        question: 'Can I have both at the same time?',
        answer:
          "Yes, and in jumping sports it is probably the most common pattern I see in younger athletes. The good news is that the two rehabs overlap heavily, with hip strengthening, quad loading, and load management all doing double duty. The key is dosing both tissues within their current tolerance rather than pretending only one is the problem.",
      },
      {
        question: "Why does my patellar tendon hurt more the day after training, not during?",
        answer:
          "That is the classic tendon pattern. Tendons often tolerate load during the session because they warm up, then flare 24 to 48 hours later as the tissue responds. If your post-session and next-morning pain is rising over several sessions, the tendon is telling you the load has exceeded its current capacity. The fix is changing the dose, not stopping completely.",
      },
      {
        question: 'Why do stairs down hurt more than stairs up with patellofemoral pain?',
        answer:
          "Going down loads the kneecap more. The quads work eccentrically to control descent, and the compressive force behind the kneecap is substantially higher going down than going up. That is why stairs down, downhill running, and decelerating are the classic aggravators.",
      },
      {
        question: "Does my tracking or alignment actually matter?",
        answer:
          "Less than older theories suggested, but it is not nothing. What matters more in current evidence is strength and control. Hip abductor and external rotator weakness, poor trunk control, quad weakness, and sudden spikes in training load are bigger drivers than small anatomical differences. The rehab focuses on the pieces you can change.",
      },
      {
        question: "Is squatting bad for my knees with either condition?",
        answer:
          "No, provided the load is dosed to what the knee tolerates today. Complete avoidance of knee flexion usually makes both conditions worse over time because the tissue loses capacity. The real questions are depth, load, tempo, and frequency. I adjust those to keep you training without flaring the symptom.",
      },
      {
        question: 'How long does each usually take to settle with physiotherapy?',
        answer:
          "Patellofemoral pain typically improves meaningfully over six to twelve weeks of targeted hip and quad work with sensible load management. Patellar tendinopathy is slower because tendons are slower tissues. Expect three to six months of progressive loading before full return to jumping sport, with earlier wins in day-to-day function along the way.",
      },
    ],
    evidenceNotes: [
      {
        claim:
          'Hip and knee strengthening is more effective than knee strengthening alone for reducing pain and improving function in patellofemoral pain.',
        source:
          'Willy RW et al., "Patellofemoral Pain" (JOSPT Clinical Practice Guideline), 2019.',
      },
      {
        claim:
          'Progressive heavy slow resistance training produces equivalent or superior outcomes to eccentric-only protocols for patellar tendinopathy.',
        source:
          "Kongsgaard M et al., \"Corticosteroid injections, eccentric decline squat training and heavy slow resistance training in patellar tendinopathy.\" Scandinavian Journal of Medicine & Science in Sports 2009; 19(6): 790-802.",
      },
      {
        claim:
          'Pinpoint tenderness at the inferior pole of the patella and pain on a single-leg decline squat have the best clinical value for identifying patellar tendinopathy.',
        source:
          'Malliaras P, Cook J, Purdam C, Rio E. "Patellar tendinopathy: clinical diagnosis, load management, and advice for challenging case presentations." JOSPT 2015; 45(11): 887-898.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 4. Sciatica vs. piriformis syndrome
  // ---------------------------------------------------------------------------
  // Note on slug choice: the modern clinical framing prefers "deep gluteal
  // syndrome" as a broader umbrella for extrapelvic sciatic nerve entrapment,
  // with piriformis syndrome treated as one pattern within it. I chose
  // `piriformis-syndrome` here because that is the higher-traffic patient
  // search term and matches the existing condition page slug. The deep gluteal
  // syndrome framing is acknowledged inside the body copy (atAGlance and
  // overlap) so patients searching either label land on the right content.
  {
    pair: 'sciatica-vs-piriformis-syndrome',
    title: 'Sciatica vs. Piriformis Syndrome: How to Tell Them Apart',
    h1: 'Is it sciatica or piriformis syndrome?',
    description:
      'Sciatica or piriformis syndrome? How to tell nerve-root pain from deep gluteal referral by pattern, tests, and exam. By Kareem Hassanein, Registered Physiotherapist, Burlington.',
    conditionA: {
      slug: 'sciatica',
      name: 'Sciatica',
      shortName: 'Sciatica',
    },
    conditionB: {
      slug: 'piriformis-syndrome',
      name: 'Piriformis Syndrome',
      shortName: 'Piriformis syndrome',
    },
    atAGlance:
      "Both can send pain from the buttock down the back of the leg, and both get lumped together as 'sciatica' in everyday language. True sciatica is nerve-root irritation at the lumbar spine, most often from a disc, that produces a dermatomal pattern of symptoms and, in more involved cases, changes in reflexes, strength, or sensation. Piriformis syndrome, now often discussed under the broader heading of deep gluteal syndrome, is compression or irritation of the sciatic nerve in the buttock itself, below the spine. Same nerve, different location. The leg symptoms can look similar on the surface, but the history, provocation pattern, and exam findings separate them.",
    distinguishing: [
      {
        aspect: 'Where the pain starts',
        aForA: 'Usually in the low back or sacral area first, then travels down the buttock and leg. Many people can draw a line showing the path of the pain from spine to foot.',
        aForB: 'Starts in the deep buttock, often one focal area under or beside the sit-bone. Low back is typically not the primary complaint.',
      },
      {
        aspect: 'Nerve-type signs in the leg',
        aForA: 'Numbness, tingling, or weakness in a dermatomal pattern (for example L5 causing weakness lifting the big toe, or S1 causing a reduced ankle reflex). Present in the more clearly radicular cases.',
        aForB: 'Numbness and tingling can occur but are usually vaguer and less mappable. Reflex changes and true myotomal weakness are uncommon. If they are clearly present, a spinal source is more likely.',
      },
      {
        aspect: 'What provokes it',
        aForA: 'Bending forward, sitting for long periods, coughing or sneezing (because these raise pressure on an irritated nerve root), morning stiffness after lying down.',
        aForB: 'Prolonged sitting on a hard seat, crossing the legs, getting up from the car, running, and direct pressure on the deep buttock. Wallet-in-the-back-pocket flares are classic.',
      },
      {
        aspect: 'How lumbar positions change it',
        aForA: 'Often shifts with spine positions. Repeated extension (lying on the stomach, standing tall) can centralise the leg pain back toward the spine. This is a useful positive sign.',
        aForB: 'Spinal movements do not meaningfully change the symptom. The pain is tied to piriformis loading, sitting pressure, and hip rotation rather than to spine position.',
      },
      {
        aspect: 'Straight leg raise',
        aForA: 'Classic reproduction of leg pain between roughly 30 and 70 degrees of passive hip flexion. Strongly suggestive of nerve-root irritation, especially when it reproduces your familiar leg pain rather than just tightness.',
        aForB: 'Can be uncomfortable in the buttock, particularly with added internal rotation, but true reproduction of leg pain in the radicular pattern is less consistent.',
      },
      {
        aspect: 'Local buttock tenderness',
        aForA: 'Usually not strikingly tender when I press into the deep buttock at the greater sciatic notch. The problem is upstream at the spine.',
        aForB: 'Focal tenderness when I press into the deep buttock near the greater sciatic notch, often reproducing your familiar pain. This is one of the most helpful bedside findings.',
      },
      {
        aspect: 'Sitting behaviour',
        aForA: 'Sitting is often uncomfortable because of the lumbar load, and you may shift position frequently. Leg pain may build with sustained sitting but is not strictly one-sided from seat pressure.',
        aForB: 'A specific pattern: pain builds the longer you sit on that cheek, and relief comes from shifting weight to the other side. Long drives and movie seats are common aggravators.',
      },
      {
        aspect: 'Red-flag screening',
        aForA: 'Saddle numbness, progressive weakness in the leg, or bladder and bowel changes are urgent and send someone straight to emergency care for cauda equina screening. Rare, but the screen is always part of the first visit.',
        aForB: 'Red flags are uncommon from piriformis alone. Persistent deep buttock pain with night pain or systemic symptoms still warrants a broader screen.',
      },
    ],
    specificTests: [
      {
        test: 'Straight leg raise (Lasegue)',
        whatItShows:
          'I lift your straight leg passively while you lie on your back. Reproduction of your familiar leg pain between roughly 30 and 70 degrees points to nerve-root irritation. Tightness only in the hamstring is not a positive test.',
      },
      {
        test: 'Slump test',
        whatItShows:
          'You sit slumped, tuck the chin, and straighten the knee. This tensions the neural system from the spine down. Reproduction of your leg pain is another signal of radicular involvement. It is more sensitive than straight leg raise in some patterns.',
      },
      {
        test: 'FAIR test (Flexion, Adduction, Internal Rotation)',
        whatItShows:
          'With the hip flexed and the knee pulled across the body into internal rotation, the piriformis is stretched against the sciatic nerve. Reproduction of deep buttock pain and sciatic-type referral supports piriformis syndrome.',
      },
      {
        test: 'Seated piriformis stretch test',
        whatItShows:
          'You sit, I passively adduct and internally rotate the flexed hip while palpating over the piriformis. Reproduction of your familiar pain is supportive. A 2008 cadaver and clinical study reported reasonable sensitivity and specificity for piriformis-type sciatic nerve entrapment.',
      },
      {
        test: 'Pace sign (resisted hip abduction and external rotation in sitting)',
        whatItShows:
          'Resisted contraction of the piriformis from a seated position reproduces deep buttock pain when the muscle is irritable. Useful alongside palpation and the FAIR test rather than as a standalone.',
      },
      {
        test: 'Neurological screen (reflexes, myotomes, dermatomes)',
        whatItShows:
          'Ankle and knee reflexes, big-toe extension and plantarflexion strength, and sensation mapping help identify a specific nerve root. Clear objective deficits in a nerve-root pattern strongly support a spinal source over piriformis.',
      },
    ],
    whenItIsA:
      "Your pattern more closely matches sciatica if the pain started in the low back or the sacral area before spreading down the leg, it follows a clean strip down the leg rather than sitting in the buttock, coughing or sneezing makes it worse, and you have objective nerve signs like dermatomal numbness, a reduced reflex, or big-toe weakness. Bending forward provokes it and lying down or repeated extension often eases it over minutes. A recent bend-and-lift episode, a long drive, or a gradual onset over a few days is a common setup.",
    whenItIsB:
      "Your pattern more closely matches piriformis syndrome if the pain is centred in the deep buttock rather than the back, sitting on that side for any length of time reliably flares it, direct pressure into the deep buttock reproduces your familiar pain, and spinal movements do not really change anything. Objective nerve-root signs are absent or vague. A recent increase in running volume, new long drives, a new bike fit, or sitting on a thick wallet are common triggers.",
    whenUncertain:
      "These two can look similar on the surface, and about 5 to 10 percent of sciatic-type presentations are thought to come from a non-discogenic source in the deep gluteal region. The exam does most of the work. I run the neurological screen first, then the tension tests (straight leg raise and slump), then the piriformis-specific tests (FAIR, seated piriformis stretch, Pace, deep palpation). If the neurological screen is clean and the piriformis tests reproduce your pain cleanly, piriformis syndrome moves up the list. If the neurological screen shows dermatomal numbness, a lost reflex, or clear myotomal weakness, the spine is the more likely source and I plan around that. MRI is not needed in most cases to start treatment. I reserve it for progressive neurological loss, red-flag features, or symptoms that are not changing on the expected timeline.",
    overlap:
      "Both can coexist, and chronic lumbar dysfunction often sits alongside piriformis and deep gluteal irritability because the whole posterior chain compensates together. A person with a previous disc episode can later develop piriformis-dominant symptoms, and someone with long-standing piriformis pain can eventually pick up secondary low-back stiffness. That is why I screen the lumbar spine, SI joint, hip, and deep gluteal region on the first visit rather than assuming the label.",
    relatedTreatmentIds: [
      'exercise-therapy',
      'joint-mobilization',
      'soft-tissue-myofascial-release',
      'dry-needling',
      'sports-rehab-return-to-sport',
    ],
    faqs: [
      {
        question: 'My doctor said I have sciatica. Could it actually be piriformis syndrome?',
        answer:
          "Possibly. 'Sciatica' is often used as a general label for any leg pain that travels down from the buttock, which includes both nerve-root irritation from the spine and sciatic nerve irritation in the deep gluteal region. A focused exam sorts it. If the low back is not tender, spinal movements do not change the symptom, and pressing into the deep buttock reproduces your familiar pain, piriformis or deep gluteal involvement moves up the list.",
      },
      {
        question: 'Do I need an MRI to find out which one it is?',
        answer:
          "Usually no. MRI is useful when there are progressive neurological signs, red-flag features, or when symptoms are not responding on the expected rehab timeline. For most people, a careful history and exam distinguishes the two well enough to start treatment. Imaging also picks up incidental findings in pain-free adults very often, so it is not a shortcut to a diagnosis.",
      },
      {
        question: 'Why does sitting make piriformis pain so much worse?',
        answer:
          "The sciatic nerve runs either under or through the piriformis muscle, right at the greater sciatic notch. Sitting compresses the nerve and the surrounding deep gluteal structures against the chair, which irritates the tissue further if the muscle is already guarding. That is why soft seats, shifting weight frequently, and breaking up long drives help more than stretching alone in the short term.",
      },
      {
        question: 'Will stretching my piriformis fix it?',
        answer:
          "Stretching alone rarely fixes it. A short window of gentle nerve glides and piriformis stretching can calm things, but the sustainable plan usually includes strengthening the gluteus medius and deep hip rotators, changing the loading that set it off (long sitting, running volume, bike fit, wallet), and sometimes dry needling into the deep gluteal region for symptom relief. Stretching a guarding muscle without changing its job tends to give short-lived results.",
      },
      {
        question: 'Is sciatica dangerous?',
        answer:
          "Most sciatica is not dangerous and settles with time and targeted rehab. The specific situations that need urgent attention are saddle numbness (numbness in the groin or inner thighs), loss of bladder or bowel control, and progressive weakness in the leg. Those features raise concern for cauda equina syndrome and warrant emergency assessment rather than a physiotherapy visit.",
      },
      {
        question: 'How long does each typically take to settle?',
        answer:
          "Straightforward sciatica from a disc often improves meaningfully over four to twelve weeks of targeted rehab, though tissue healing can take several months even after pain has resolved. Piriformis or deep gluteal pain usually responds faster to load-change plus specific strengthening, often within four to eight weeks, provided the provoking loads are actually modified. Longer-standing cases of either take longer, and I reassess rather than push on if progress stalls by about four weeks.",
      },
    ],
    evidenceNotes: [
      {
        claim:
          'Deep gluteal syndrome describes extrapelvic sciatic nerve entrapment in the posterior hip and is an important non-discogenic cause of sciatic-type pain. Piriformis syndrome is one pattern within this spectrum.',
        source:
          'Martin HD, Reddy M, Gomez-Hoyos J. "Deep gluteal syndrome." Journal of Hip Preservation Surgery 2015; 2(2): 99-107.',
      },
      {
        claim:
          'For most people with low back pain and sciatica, imaging is not routinely required at first assessment. A structured history and physical examination guide management, and imaging is reserved for situations where it would change the plan.',
        source:
          'National Institute for Health and Care Excellence. "Low back pain and sciatica in over 16s: assessment and management." NICE Guideline NG59, 2016 (updated 2020).',
      },
      {
        claim:
          'A systematic review identified buttock pain, pain aggravated by sitting, tenderness near the greater sciatic notch, and pain with manoeuvres that tension the piriformis as the most consistent clinical features of piriformis syndrome.',
        source:
          'Hopayian K, Danielyan A. "Four symptoms define the piriformis syndrome: an updated systematic review of its clinical features." European Journal of Orthopaedic Surgery & Traumatology 2018; 28(2): 155-164.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 5. Hip osteoarthritis vs. greater trochanteric pain syndrome (GTPS)
  // ---------------------------------------------------------------------------
  // Note on slug choice: the GTPS page on this site uses the slug
  // `greater-trochanteric-pain-syndrome`. That term has been largely replaced
  // in the modern literature by "gluteal tendinopathy" as the primary driver
  // of lateral hip pain, with bursitis considered secondary. The comparison
  // copy reflects the current tendinopathy framing while keeping the familiar
  // GTPS label so patients searching either term find the page.
  {
    pair: 'hip-osteoarthritis-vs-greater-trochanteric-pain-syndrome',
    title: 'Hip Osteoarthritis vs. Lateral Hip Pain (GTPS): How to Tell',
    h1: 'Is it hip osteoarthritis or lateral hip pain (GTPS)?',
    description:
      'Hip osteoarthritis or GTPS / gluteal tendinopathy? How to tell them apart by pain location, stiffness, and exam. By Kareem Hassanein, Registered Physiotherapist, Burlington.',
    conditionA: {
      slug: 'hip-osteoarthritis',
      name: 'Hip Osteoarthritis',
      shortName: 'Hip OA',
    },
    conditionB: {
      slug: 'greater-trochanteric-pain-syndrome',
      name: 'Greater Trochanteric Pain Syndrome (Lateral Hip Pain)',
      shortName: 'GTPS / lateral hip',
    },
    atAGlance:
      "Both present as hip pain in middle-aged and older adults, and both get called 'a hip problem' casually, but they live in different tissues. Hip osteoarthritis is a joint problem. Pain sits deep in the groin, range of motion is restricted, and internal rotation is the movement that suffers first. Greater trochanteric pain syndrome, which is mostly gluteal tendinopathy with or without associated bursitis, is a tendon and soft tissue problem on the outside of the hip. The point of tenderness is on the bony bump of the greater trochanter, range of motion at the hip is usually preserved, and the pain pattern is dominated by compression, side-lying, and single-leg loading rather than by stiffness.",
    distinguishing: [
      {
        aspect: 'Where the pain sits',
        aForA: 'Deep in the groin, sometimes wrapping to the front of the thigh or referring to the knee. When I ask people to point, they often cup the front of the hip rather than the side.',
        aForB: 'Right on the outside of the hip, over the bony point of the greater trochanter. People can usually put one finger on the spot. Pain may refer down the outside of the thigh but rarely into the groin.',
      },
      {
        aspect: 'Stiffness pattern',
        aForA: 'Morning stiffness that eases with movement, typically lasting under 30 minutes. Stiffness also after prolonged sitting, with a characteristic "start-up" feeling getting out of a chair.',
        aForB: 'Not a stiffness-dominant presentation. The hip does not feel globally tight. The issue is sharp, localised pain with specific loads and positions.',
      },
      {
        aspect: 'Hip internal rotation',
        aForA: 'Restricted and often painful, especially in flexion. Loss of internal rotation is one of the most reliable clinical markers for hip OA.',
        aForB: 'Usually preserved and comfortable. If internal rotation is significantly limited, a co-existing or primary intra-articular problem should be considered.',
      },
      {
        aspect: 'Lying on the affected side',
        aForA: 'Often tolerable or mildly uncomfortable. Sleep disturbance tends to come from overall stiffness rather than from direct side pressure.',
        aForB: 'Classic aggravator. Night pain lying on the painful side is one of the strongest pointers to GTPS, and lying on the opposite side with the top knee falling across the body can hurt too because it compresses the tendons.',
      },
      {
        aspect: 'Single-leg stance',
        aForA: 'Usually manageable for 30 seconds, although prolonged standing can ache in the groin. A Trendelenburg drop is not the main finding.',
        aForB: 'Reproduces pain over the greater trochanter within 30 seconds in many cases. A visible pelvic drop on the stance side (Trendelenburg sign) supports gluteal tendon involvement because the glutes are failing to hold the pelvis level.',
      },
      {
        aspect: 'Stairs, hills, and uneven ground',
        aForA: 'Stairs are often uncomfortable, particularly going up with the affected leg, because of the demand on hip flexion and rotation in the groin.',
        aForB: 'Walking uphill, climbing stairs, and stepping off a curb all compress the gluteal tendons against the trochanter. These are classic aggravators and often describe why running flared it.',
      },
      {
        aspect: 'Imaging findings',
        aForA: 'X-ray shows joint space narrowing, subchondral sclerosis, cysts, or osteophytes. Radiographs are more informative than MRI for OA and are usually sufficient.',
        aForB: 'Imaging is usually not needed. When obtained, MRI or ultrasound may show gluteus medius or minimus tendinopathy, partial tears, or trochanteric bursa fluid. Incidental findings are common in asymptomatic adults.',
      },
      {
        aspect: 'Typical age and sex',
        aForA: 'Commonly 50 plus, rising sharply with age. Affects men and women. Prior hip injury, FAI, or dysplasia raise the odds.',
        aForB: 'Most common in women aged 40 to 60. Women outnumber men by roughly 2 to 4 to 1 in published series. Often coincides with changes in running volume, new walking programs, or long periods of sitting with crossed legs.',
      },
    ],
    specificTests: [
      {
        test: 'Hip internal rotation range of motion in flexion',
        whatItShows:
          'With you on your back and the hip and knee bent to 90 degrees, I rotate the lower leg outward to measure internal rotation at the hip. A painful, hard block short of the other side is one of the most useful bedside markers for hip OA.',
      },
      {
        test: 'FABER test (Flexion, Abduction, External Rotation)',
        whatItShows:
          "You lie on your back and I place the ankle of the affected leg on the opposite knee in a figure-four position. Deep groin pain points toward the hip joint (OA or labral irritation). Pain felt over the lateral hip or sacroiliac region points elsewhere.",
      },
      {
        test: 'FADIR test (Flexion, Adduction, Internal Rotation)',
        whatItShows:
          "The hip is flexed, then pulled across the body and internally rotated. Sharp groin pain supports an intra-articular source such as hip OA or labral pathology. It is sensitive but not specific, so I combine it with range and history.",
      },
      {
        test: 'Single-leg stance test (30 seconds)',
        whatItShows:
          "You stand on the affected leg for up to 30 seconds. Reproduction of focal pain over the greater trochanter within that window, with or without a visible pelvic drop, is one of the best clinical pointers to gluteal tendinopathy and GTPS.",
      },
      {
        test: 'Palpation over the greater trochanter',
        whatItShows:
          'Direct pressure over the greater trochanter reproduces the familiar pain in GTPS. Pain with palpation plus positive single-leg stance and pain on resisted hip abduction is a strong clinical triad for gluteal tendinopathy.',
      },
    ],
    whenItIsA:
      "Your pattern more closely matches hip osteoarthritis if the pain sits in the groin or front of the hip, morning stiffness lasts around half an hour before easing, internal rotation feels blocked and painful, and stairs or sitting for a long time start the hip up stiffly. Getting out of a car or putting on socks and shoes is often awkward. Pain referring to the knee from the groin is not uncommon, which is why knee pain in an older adult always deserves a hip screen.",
    whenItIsB:
      "Your pattern more closely matches GTPS or gluteal tendinopathy if the pain is on the outside of the hip and you can put a finger on it, lying on that side at night wakes you, walking uphill or climbing stairs flares it, and standing on one leg reproduces it within thirty seconds. There is often a recent change in walking or running volume, a new weight-loss ramp-up, or a long stretch of sitting with crossed legs.",
    whenUncertain:
      "The two can coexist, and occasionally present together in one hip, which is exactly when an exam earns its keep. I check passive internal rotation first because it does most of the work separating OA from soft-tissue lateral pain. Then I palpate the greater trochanter, run single-leg stance, and test resisted hip abduction. If internal rotation is clean and lateral palpation reproduces your familiar pain, GTPS moves up the list. If internal rotation is clearly limited and groin pain dominates, imaging with plain x-rays (not MRI first) is reasonable to confirm OA and plan accordingly.",
    overlap:
      "Older adults with hip OA often develop secondary gluteal tendinopathy because the joint changes shift load patterns through the pelvis and the glutes work under tougher conditions. Equally, a person with long-standing GTPS can protect the hip in ways that feed stiffness and eventually reveal or accelerate early OA. Treating one and ignoring the other is a common reason lateral hip pain or post-arthroplasty stiffness lingers longer than expected.",
    relatedTreatmentIds: [
      'exercise-therapy',
      'joint-mobilization',
      'soft-tissue-myofascial-release',
      'dry-needling',
      'post-surgical-rehabilitation',
    ],
    faqs: [
      {
        question: "I have pain on the outside of my hip. Is that always GTPS or bursitis?",
        answer:
          "Usually it is gluteal tendinopathy rather than pure bursitis. The modern framing of lateral hip pain, including on imaging, points to the gluteus medius and minimus tendons as the main drivers, with any bursal irritation considered secondary. The rehab target is the same: calm the compressive positions that squash the tendons against the trochanter, then build load capacity through progressive strengthening exercises.",
      },
      {
        question: 'Do I need an X-ray or MRI to find out which one it is?',
        answer:
          "Often not to start. Hip OA is suspected clinically from groin pain with restricted internal rotation and morning stiffness, and confirmed with a plain x-ray if imaging is needed. GTPS is a clinical diagnosis from lateral tenderness, night pain on that side, and positive single-leg stance. MRI is reserved for cases that are not responding, that suggest a significant tendon tear, or when surgical decisions are on the table. Incidental findings on MRI are common in pain-free adults, so imaging is not a substitute for a careful exam.",
      },
      {
        question: "Why does my hip OA pain show up in my knee?",
        answer:
          "Referral from the hip to the knee is common because the nerves supplying the hip joint also supply parts of the knee. It is one of the classic reasons older adults with isolated knee pain get an unexpected hip finding on exam. When the knee hurts but internal rotation of the hip is limited and painful, I always screen the hip before settling on a knee diagnosis.",
      },
      {
        question: "Will strengthening make my GTPS worse before it gets better?",
        answer:
          "It can flare briefly if the early dose is wrong. The common mistake is starting with stretching or standing abductions, both of which compress the tendons. The better sequence is reducing the compressive loads first (sleep position, crossed legs, wide standing base, walking cadence), then introducing isometric holds, and only then progressing to functional strengthening. Done in that order, pain usually eases within a few weeks and the tendon capacity builds over the next two to three months.",
      },
      {
        question: 'Can hip OA be managed without surgery?',
        answer:
          "Yes, often for a long time. The current clinical guideline for hip OA recommends education, exercise therapy, and weight management as first-line care, with manual therapy, strengthening exercises, and gait work all having a role. Injections and surgery sit as later options for those whose function and sleep are significantly affected despite a proper rehab trial. I plan around keeping you active, not around managing decline.",
      },
      {
        question: "I was told it is just bursitis and given an injection. It came back. Why?",
        answer:
          "Because the underlying driver was likely gluteal tendinopathy, and injections can quiet the pain without changing the load pattern that irritated the tendons in the first place. The 2018 LEAP trial compared education plus exercise, corticosteroid injection, and wait-and-see for gluteal tendinopathy. At both 8 weeks and 12 months, education plus exercise outperformed injection on global improvement and pain. Injections have a role, but they are not the whole plan.",
      },
    ],
    evidenceNotes: [
      {
        claim:
          'The current clinical practice guideline for hip osteoarthritis recommends patient education, exercise therapy, weight management, manual therapy, and gait training as first-line non-surgical management.',
        source:
          'Koc TA Jr, Cibulka M, Enseki KR, et al. "Hip Pain and Mobility Deficits - Hip Osteoarthritis: Revision 2025." JOSPT Clinical Practice Guideline. Journal of Orthopaedic & Sports Physical Therapy 2025; 55(11): CPG1-CPG95.',
      },
      {
        claim:
          'For gluteal tendinopathy, education plus a progressive loading program outperformed corticosteroid injection and a wait-and-see approach at 8 weeks and 52 weeks for global improvement and pain.',
        source:
          'Mellor R, Bennell K, Grimaldi A, et al. "Education plus exercise versus corticosteroid injection use versus a wait and see approach on global outcome and pain from gluteal tendinopathy: prospective, single blinded, randomised clinical trial." BMJ 2018; 361: k1662.',
      },
      {
        claim:
          'Lateral hip pain traditionally labelled trochanteric bursitis is primarily driven by gluteal tendinopathy. Clinical diagnosis relies on localised tenderness, pain with single-leg loading, and pain on resisted abduction rather than on imaging.',
        source:
          'Grimaldi A, Fearon A. "Gluteal Tendinopathy: Integrating Pathomechanics and Clinical Features in Its Management." JOSPT 2015; 45(11): 910-922.',
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 6. ACL injuries vs. meniscus tears
  // ---------------------------------------------------------------------------
  {
    pair: 'acl-injuries-vs-meniscus-tears',
    title: 'ACL Injury vs. Meniscus Tear: How to Tell Them Apart',
    h1: 'Is it an ACL injury or a meniscus tear?',
    description:
      'ACL injury or meniscus tear? How to tell them apart by mechanism, swelling timing, and tests. By Kareem Hassanein, Registered Physiotherapist, Burlington.',
    conditionA: {
      slug: 'acl-injuries',
      name: 'ACL Injuries',
      shortName: 'ACL injury',
    },
    conditionB: {
      slug: 'meniscus-tears',
      name: 'Meniscus Tears',
      shortName: 'Meniscus tear',
    },
    atAGlance:
      "Both commonly follow a twisting knee injury, and both show up frequently in skiers, court sports, and soccer. They often travel together too. The classic O'Donoghue triad combines ACL rupture, medial collateral ligament injury, and a medial meniscus tear. Despite the overlap, the mechanism, swelling timing, exam findings, and natural history differ enough that the two can usually be separated clinically in the first visit. The reason this matters is practical: the management decisions, timelines, and return-to-sport plans look quite different.",
    distinguishing: [
      {
        aspect: 'Typical mechanism',
        aForA: 'A non-contact pivot, deceleration, or awkward landing with the knee in slight flexion and the tibia rotating. Many people describe a loud pop and an immediate sense that something gave way.',
        aForB: 'A twisting motion with the foot planted, often in a squat or deep flexion (getting up from gardening, rotating in a scrum, ski bindings not releasing cleanly). A pop is less common and, when present, is usually quieter.',
      },
      {
        aspect: 'Swelling timing',
        aForA: 'Rapid. Significant swelling within 0 to 6 hours reflects blood in the joint (haemarthrosis) and is strongly associated with ACL rupture, intra-articular fracture, or patellar dislocation.',
        aForB: 'Slower. Swelling typically builds over 12 to 48 hours as joint fluid accumulates, and is often more modest than in an acute ACL injury.',
      },
      {
        aspect: 'Ability to weight-bear and walk immediately after',
        aForA: 'Often very difficult in the first minutes, with a feeling that the knee will buckle. Many athletes cannot continue play. Some regain enough control to limp off, but the knee rarely feels trustworthy.',
        aForB: "Usually possible to walk, sometimes with a limp. Many people finish the activity and only notice significant trouble the next morning. If the knee is truly locked and will not straighten, that is a different picture (a displaced bucket-handle tear).",
      },
      {
        aspect: 'Mechanical symptoms',
        aForA: "Giving way or buckling with change of direction. Catching and true locking are less typical from the ACL itself unless there is an associated meniscus tear or loose body.",
        aForB: 'Catching, clicking, or locking with specific movements, particularly in deep flexion or pivoting. Some patients describe a sense of the knee getting stuck briefly and then releasing.',
      },
      {
        aspect: 'Lachman test',
        aForA: 'Positive. Increased anterior translation of the tibia with a soft or absent end-feel. Lachman is the most sensitive and specific bedside test for ACL rupture.',
        aForB: 'Negative. A torn meniscus does not change anterior laxity. If Lachman is positive in someone you suspect of a meniscus tear, ACL involvement needs to be ruled out.',
      },
      {
        aspect: 'McMurray and Thessaly',
        aForA: 'Usually negative unless there is a co-existing meniscus tear. An irritable knee after ACL rupture can still be painful with these tests, but without a mechanical click.',
        aForB: 'Often positive. A palpable or audible click plus reproduced pain at the joint line during McMurray, or pain with weight-bearing rotation on the Thessaly test, supports a meniscal source.',
      },
      {
        aspect: 'Joint-line tenderness',
        aForA: 'Not typically a dominant finding unless the cruciate injury is sitting alongside a meniscus tear.',
        aForB: 'Focal tenderness along the medial or lateral joint line is one of the most useful clinical pointers to a meniscus tear, particularly when combined with a consistent history.',
      },
      {
        aspect: 'Imaging findings',
        aForA: 'MRI is the standard confirmatory test. It shows full-thickness or partial rupture of the ACL, plus associated bone bruising, meniscus tears, and collateral ligament damage.',
        aForB: 'MRI shows the tear location, pattern (radial, horizontal, bucket-handle, root tear), and any displaced fragments. Incidental meniscal changes are very common on MRI in pain-free adults over 40, so imaging always has to be interpreted alongside the clinical picture.',
      },
    ],
    specificTests: [
      {
        test: 'Lachman test',
        whatItShows:
          'With your knee bent to about 20 to 30 degrees, I stabilise the thigh and pull the tibia forward. Increased forward translation with a soft or absent end-feel compared to the other side is the most accurate bedside sign of ACL rupture.',
      },
      {
        test: 'Anterior drawer test',
        whatItShows:
          'With the knee bent to 90 degrees and the foot stabilised, I pull the tibia forward. Less sensitive than Lachman in the acute setting because hamstring guarding masks laxity, but useful when Lachman findings are ambiguous.',
      },
      {
        test: 'Pivot shift test',
        whatItShows:
          "A provocative test for rotational instability from ACL rupture. It is difficult to tolerate in the acute setting because of pain and muscle guarding, but is highly specific when clearly positive.",
      },
      {
        test: "McMurray test",
        whatItShows:
          "With you on your back, I flex and rotate the knee while palpating the joint line. A palpable click with reproduction of your familiar pain at the joint line supports a meniscus tear. Pain alone without a click is less specific.",
      },
      {
        test: 'Thessaly test (20 degrees)',
        whatItShows:
          "You stand on the affected leg with the knee bent to about 20 degrees and rotate your body left and right. Reproduction of joint-line pain, catching, or locking during the rotation supports a meniscal source. Reasonable accuracy in middle-aged patients, though not perfect.",
      },
      {
        test: 'Joint-line palpation',
        whatItShows:
          "I press carefully along the medial and lateral joint lines with the knee flexed. Focal tenderness, especially posteromedial or posterolateral, is a useful clinical pointer to a meniscus tear and correlates with arthroscopic findings more than any single provocation test.",
      },
    ],
    whenItIsA:
      "Your pattern more closely matches an ACL injury if there was a non-contact pivot or deceleration, you felt or heard a loud pop, the knee swelled up significantly within hours, and you felt the knee give way. Returning to cutting or pivoting since the event has felt unsafe, and the Lachman test reproduces increased laxity on the affected side. The history often sits on top of sports like soccer, basketball, skiing, or volleyball.",
    whenItIsB:
      "Your pattern more closely matches a meniscus tear if the injury happened while twisting with the foot planted, often in a squat or deep flexion, the swelling built up slowly over a day or two rather than immediately, and you now notice catching, clicking, or a feeling of the knee briefly locking. Joint-line tenderness and a positive McMurray or Thessaly reinforce the picture. Degenerative meniscal tears can also appear with no clear injury in adults over 40.",
    whenUncertain:
      "The two genuinely overlap, and they co-occur often enough that a clean split is not always possible clinically. I take a careful mechanism history, look at swelling timing, run Lachman first (it does most of the work on the ACL question), then McMurray, Thessaly, and joint-line palpation for the meniscus. If Lachman is clearly positive or the knee is grossly unstable, I refer for MRI and orthopaedic review on an expedited basis. If the clinical picture is a clean meniscus pattern and the knee is not locked, a trial of exercise-based physiotherapy is reasonable first, because recent trials show that for many degenerative and non-obstructive tears, rehabilitation is comparable to arthroscopy over two to five years.",
    overlap:
      "The O'Donoghue triad is a real clinical pattern: ACL rupture, MCL injury, and medial meniscus tear from a valgus-pivot mechanism. That is why I always screen for a meniscus in someone with a confirmed ACL injury, and I always check ligamentous stability in someone presenting with meniscus symptoms after a bigger twist than their history first suggests. In middle-aged adults, degenerative meniscal changes also sit alongside early knee OA, which changes the rehab plan and pushes strongly toward exercise-first management.",
    relatedTreatmentIds: [
      'exercise-therapy',
      'sports-rehab-return-to-sport',
      'post-surgical-rehabilitation',
      'joint-mobilization',
      'soft-tissue-myofascial-release',
    ],
    faqs: [
      {
        question: 'Do I need surgery for an ACL tear?',
        answer:
          "Not automatically. The decision depends on your activity demands, knee stability during daily life and sport, and whether other structures (meniscus root tears, significant collateral injury) are involved. Structured rehabilitation first, sometimes called cross-bracing or the Cross Bracing Protocol in newer literature, is a reasonable path for many patients. Competitive pivoting athletes and people with persistent instability despite good rehab are stronger surgical candidates. I plan around your goals and how the knee behaves, not around the MRI image alone.",
      },
      {
        question: 'Do I need surgery for a meniscus tear?',
        answer:
          "Often no, particularly for degenerative tears in middle-aged adults. Three major randomised trials (METEOR, FIDELITY, and ESCAPE) showed that exercise-based physiotherapy is comparable to arthroscopic partial meniscectomy for degenerative and non-obstructive meniscal tears over two to five years. The exceptions that still lean surgical are a truly locked knee (bucket-handle displacement), large traumatic tears in younger athletes, and some root tears where early repair protects the joint.",
      },
      {
        question: 'Why did my knee swell up so fast after my injury?',
        answer:
          "Fast swelling within six hours usually reflects bleeding into the joint, which comes from a vascular structure. The ACL is the most common cause, followed by intra-articular fracture and acute patellar dislocation. A classic meniscus tear typically produces slower joint effusion over twelve to forty-eight hours as synovial fluid accumulates. The timing is one of the most helpful pieces of history you can give me in the first visit.",
      },
      {
        question: "Can I test my ACL myself?",
        answer:
          "Not reliably. Self-Lachman is difficult because you cannot relax the hamstrings on the injured leg while also applying the force. What you can do is compare how safe the knee feels on deceleration, single-leg squats, and slow changes of direction versus the other leg. If there is a real sense that the knee is moving beneath you or could buckle, that warrants a proper exam rather than self-diagnosis.",
      },
      {
        question: 'My MRI shows a meniscus tear but I cannot remember an injury. Is that normal?',
        answer:
          "Yes, and more common than people expect. Degenerative meniscal tears appear on MRI in a large proportion of asymptomatic adults over 40, and the frequency rises with age. An MRI tear alone does not decide management. What matters is the clinical picture: joint-line tenderness, mechanical symptoms, response to an exercise trial, and whether the knee is functionally limiting you. Imaging guides, it does not lead.",
      },
      {
        question: 'How long does rehab take for each?',
        answer:
          "Meniscus tear rehabilitation for non-surgical management often sees meaningful gains over 8 to 12 weeks with progressive strengthening exercises and load management. Post-meniscectomy rehab is similar. ACL timelines are longer because the tissue itself is more involved. Non-surgical ACL rehab commonly runs 4 to 9 months depending on activity goals, and post-operative ACL reconstruction rehab typically targets 9 to 12 months before return to cutting and pivoting sport, with the Aspetar 2023 guideline recommending objective return-to-sport criteria rather than time alone.",
      },
    ],
    evidenceNotes: [
      {
        claim:
          'Rehabilitation after ACL reconstruction should progress using objective criteria rather than time alone, with exercise therapy as the mainstay and psychological readiness assessed alongside physical milestones before return to sport.',
        source:
          'Kotsifaki R, Korakakis V, King E, et al. "Aspetar clinical practice guideline on rehabilitation after anterior cruciate ligament reconstruction." British Journal of Sports Medicine 2023; 57(9): 500-514.',
      },
      {
        claim:
          'In patients with a meniscal tear and mild to moderate knee osteoarthritis, arthroscopic partial meniscectomy plus physical therapy did not produce better functional outcomes at 6 or 12 months than a structured physical therapy program alone.',
        source:
          'Katz JN, Brophy RH, Chaisson CE, et al. "Surgery versus Physical Therapy for a Meniscal Tear and Osteoarthritis" (METEOR trial). New England Journal of Medicine 2013; 368(18): 1675-1684.',
      },
      {
        claim:
          'For patients with symptoms of a degenerative medial meniscus tear and no knee osteoarthritis, outcomes after arthroscopic partial meniscectomy were no better than after sham surgery.',
        source:
          'Sihvonen R, Paavola M, Malmivaara A, et al. "Arthroscopic Partial Meniscectomy versus Sham Surgery for a Degenerative Meniscal Tear" (FIDELITY trial). New England Journal of Medicine 2013; 369(26): 2515-2524.',
      },
      {
        claim:
          'For middle-aged patients with non-obstructive meniscal tears, exercise-based physical therapy was non-inferior to arthroscopic partial meniscectomy for patient-reported knee function at 24 months, with non-inferiority maintained at 5-year follow-up.',
        source:
          'van de Graaf VA, Noorduyn JCA, Willigenburg NW, et al. "Effect of Early Surgery vs Physical Therapy on Knee Function Among Patients With Nonobstructive Meniscal Tears" (ESCAPE trial). JAMA 2018; 320(13): 1328-1337.',
      },
    ],
  },
];

export function getComparisonByPair(pair: string): ConditionComparison | undefined {
  return CONDITION_COMPARISONS.find((c) => c.pair === pair);
}

export function getAllComparisonPairs(): string[] {
  return CONDITION_COMPARISONS.map((c) => c.pair);
}

/**
 * Returns any comparison page that features the given condition slug as
 * either conditionA or conditionB. Used by the condition detail page to
 * cross-link its "X vs. Y" page when one exists.
 */
export function getComparisonsForCondition(
  conditionSlug: string,
): ConditionComparison[] {
  return CONDITION_COMPARISONS.filter(
    (c) =>
      c.conditionA.slug === conditionSlug ||
      c.conditionB.slug === conditionSlug,
  );
}
