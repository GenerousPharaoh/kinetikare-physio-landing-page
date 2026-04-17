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
