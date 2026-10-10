// Condition-vs-condition comparison pages.
// Each entry powers a single `/conditions/compare/[pair]` page that helps
// patients orient themselves before booking an assessment. The pages do not
// replace a clinical exam; they explain the pattern differences between two
// conditions that commonly get mistaken for each other.

import type { SourceRef } from './source-refs';

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
  refs?: SourceRef[];
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
  redFlags?: Array<{ sign: string; action: string }>; // "When to see a doctor first"
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
      "Tennis elbow vs. golfer's elbow: how to tell them apart by location, grip, and tests. Written by a Registered Physiotherapist in Burlington.",
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
        aForA: 'Pain at the outside of the elbow when lifting the mug with the palm facing down. This is one useful clue, but it cannot confirm the diagnosis on its own.',
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
        aForA: 'More common than golfer\'s elbow. Lateral elbow pain affects roughly 1 to 3 percent of adults.',
        aForB: 'Less common, roughly a third as frequent as tennis elbow in the general population.',
      },
    ],
    specificTests: [
      {
        test: "Cozen's test (resisted wrist extension)",
        whatItShows:
          "With the elbow straight and the forearm turned palm-down, I resist you extending the wrist. Pain at the outside of the elbow suggests tennis elbow.",
      },
      {
        test: "Mill's test (passive wrist flexion with the elbow straight)",
        whatItShows:
          'Stretching the wrist extensors by bending the wrist down while the elbow is straight often reproduces lateral elbow pain in tennis elbow.',
      },
      {
        test: 'Resisted wrist flexion with the forearm palm-up',
        whatItShows:
          "Pain at the inside of the elbow on resisted wrist flexion is the main resisted test for golfer's elbow.",
      },
      {
        test: 'Resisted forearm pronation',
        whatItShows:
          "Resisted turning of the palm down against my hand often reproduces medial elbow pain in golfer's elbow because pronator teres shares that origin.",
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
      "Your pattern more likely fits golfer's elbow if the pain sits on the inside of the elbow, carrying a shopping bag or lifting with the palm up hurts, wrist flexion and forearm rotation trigger it, and the bony bump on the inside is tender. It often flares after heavier grip work, a change in a golf or throwing motion, or climbing volume going up. Inner elbow pain can also come from the ulnar nerve or, in throwers, a ligament, so I check those too.",
    whenUncertain:
      "If you cannot tell whether the pain is on the inside or the outside of the elbow, or if it feels like both, do not keep pushing through. The mug-lifting pattern is one useful clue, but it cannot confirm the diagnosis. An assessment combines your history, the tender area, strength and movement tests, and a nerve screen, and I look upstream at the shoulder and neck because elbow pain can be referred. Self-directed stretching of the wrong tendon can drag the condition out.",
    overlap:
      "Both conditions can coexist in the same arm, particularly in tradespeople and climbers. It is also common to see a tennis elbow picture with a partly irritable neck or a stiff thoracic spine contributing to forearm overload. That is why I always screen the whole upper quadrant on the first visit rather than only treating the elbow.",
    redFlags: [
      {
        sign: 'A fall onto the arm with swelling, an obvious change in shape, or inability to bend or straighten the elbow',
        action: 'Go to emergency or urgent care to rule out a fracture or dislocation.',
      },
      {
        sign: 'A pop at the elbow during a heavy lift, with sudden weakness or bruising',
        action: 'See a doctor within a few days. A tendon rupture needs prompt assessment.',
      },
      {
        sign: 'Numbness, tingling, or weakness in the hand that is getting worse',
        action: 'See your family doctor before starting physiotherapy.',
      },
      {
        sign: 'A hot, red, swollen elbow with fever or feeling unwell',
        action: 'Seek same-day medical care to rule out an infection.',
      },
    ],
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
          "Yes, and it happens more than people expect. Tradespeople, climbers, and anyone doing heavy repeated gripping can overload both the extensor and flexor tendons in the same arm. The tender points sit on opposite sides of the elbow, so the exam can usually tell them apart, but the plan needs to address both origins at once.",
      },
      {
        question: "I don't play tennis or golf. Can I still have these conditions?",
        answer:
          "Yes. Many people with lateral or medial epicondyle tendinopathy have never played tennis or golf. The sports lent their names to the conditions, not their exclusive causes. Gripping, lifting, computer work, trades, gardening, guitar playing, and parenting a heavy toddler are all common real-world triggers.",
      },
      {
        question: "Why does the pain travel down my forearm?",
        answer:
          "The forearm muscles that attach at the epicondyles run most of the way to the wrist. When the tendon origin is irritable, the muscle belly picks up protective tone, which can feel like a dull ache extending toward the wrist. It does not usually mean something separate is wrong, but if there is numbness, tingling, or weakness in the hand, that warrants a nerve screen.",
      },
      {
        question: "Does a cortisone injection fix this?",
        answer:
          "It can reduce pain in the short term, but the longer-term results for cortisone in tennis elbow are poor. The 2013 Coombes et al. trial in JAMA showed corticosteroid injection had worse one-year outcomes than placebo. For many people, a progressive loading program plus sensible load adjustment is the better medium-term option, and any injection decision belongs with a physician.",
      },
      {
        question: "How long does each usually take to settle with physiotherapy?",
        answer:
          "Tendons recover slowly. Many people notice real change over a few months of dosed loading, with earlier wins in pain and grip as the irritation calms. Severe or long-standing cases can take longer. If symptoms are getting worse rather than better over three to four weeks of good rehab, I re-examine rather than just pushing on.",
      },
      {
        question: "Can I keep training or working while I rehab this?",
        answer:
          "Usually yes, with modifications. I adjust the specific provoking movements, change grip width or handle size where possible, and keep the tendon working at a load it can tolerate. Complete rest does not usually build a tendon's tolerance, so the aim is better dosing rather than no activity.",
      },
    ],
    evidenceNotes: [
      {
        claim:
          'Corticosteroid injection was worse than placebo at one year for lateral elbow pain, with a higher recurrence rate.',
        source: 'Coombes BK et al., JAMA 2013; 309(5): 461-469.',
        refs: [{ pmid: '23385272' }],
      },
      {
        claim:
          'Therapeutic exercise, including progressive resistance exercise, is part of the recommended conservative care for lateral elbow pain.',
        source:
          'Lucado AM et al., "Lateral Elbow Pain and Muscle Function Impairments: Clinical Practice Guidelines." JOSPT 2022; 52(12): CPG1-CPG111.',
        refs: [{ pmid: '36453071' }],
      },
      {
        claim:
          'Lateral epicondyle tendinopathy affects roughly 1 to 4 percent of the general adult population and is several times more common than medial epicondyle tendinopathy.',
        source:
          'Shiri R, Viikari-Juntura E. "Lateral and medial epicondylitis: role of occupational factors." Best Practice & Research Clinical Rheumatology 2011; 25(1): 43-57.',
        refs: [{ pmid: '21663849' }],
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
      "Rotator cuff injury or frozen shoulder? How to tell them apart by pain pattern, stiffness, and range. Written by a Registered Physiotherapist in Burlington.",
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
      "Both cause shoulder pain and both make it hard to use the arm, but the mechanics are different. Rotator cuff problems are tendon and muscle driven, which means the cuff hurts and weakens but the joint can usually still be moved by someone else. Frozen shoulder (adhesive capsulitis) is a capsule problem, which means the whole joint stiffens, so even when someone else moves the arm it stops well short of normal. That difference is one of the most useful clues, and it is why the plans differ.",
    distinguishing: [
      {
        aspect: 'Typical age and onset',
        aForA: 'Any adult age. Often starts after a specific overuse episode, a lift that went badly, or a fall onto an outstretched arm.',
        aForB: 'Usually 40 to 60. Often starts for no obvious reason. Strongly linked to diabetes and thyroid disease.',
      },
      {
        aspect: 'How the range of motion looks',
        aForA: 'You can often move the arm to nearly full range when I lift it for you, even if it hurts. Active range is limited mostly by pain and weakness, not a hard stop.',
        aForB: 'A clear hard block. Both your active and my passive movement stop well short of normal, particularly on external rotation with the arm at your side.',
      },
      {
        aspect: 'External rotation (turning the forearm outward with the elbow bent and kept at your side)',
        aForA: 'Usually preserved when someone else moves the arm, even if turning it out yourself is weak or painful.',
        aForB: 'Markedly reduced, both when you try and when someone else moves the arm. That loss is one of the most useful clinical findings for frozen shoulder.',
      },
      {
        aspect: 'Night pain',
        aForA: 'Common, especially lying on that side. Usually reduces when you find a comfortable position.',
        aForB: 'Night pain can be prominent, especially early on, and may persist despite changing position. It often wakes people during the painful phase.',
      },
      {
        aspect: 'Strength',
        aForA: 'Weakness on specific tests is central. External rotation, elevation in the plane of the scapula, and lift-off tests pick up cuff deficits.',
        aForB: 'Strength within the available small range is reasonable. The problem is range, not power. If I bring the arm into a position where strength can be tested, it usually grades close to normal.',
      },
      {
        aspect: 'Timeline',
        aForA: 'Can settle in weeks to months with the right loading program. A true full-thickness tear may not fully close but is often manageable without surgery.',
        aForB: 'Many people improve over months to years, but recovery can be incomplete and does not always follow three neat phases. Physiotherapy can help with pain and range while it changes.',
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
          "I hold your elbow against your side, support the forearm, and turn it outward. A firm stop well short of the other arm is one of the most useful clinical signs of frozen shoulder.",
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
          'Improving active range by manually positioning the shoulder blade suggests scapular and cuff contributions. In frozen shoulder, range usually changes little with this help, although pain and guarding can also limit it.',
      },
    ],
    whenItIsA:
      "Your pattern more closely matches a rotator cuff problem if the pain is sharpest with specific movements (reaching overhead, behind the back, or across the body), you can still get reasonable passive range when someone else lifts your arm, external rotation with the elbow at your side is preserved, and specific cuff tests reproduce weakness or pain. A recent fall, lift, or ramp-up in overhead activity often sits in the history.",
    whenItIsB:
      "Your pattern more closely matches frozen shoulder if the shoulder has progressively stiffened up over weeks to months with no single clear injury, night pain is severe, and both active and passive external rotation at the side are strikingly reduced. A history of diabetes or thyroid disease raises the probability. The arm may actually hurt less as it stiffens, which misleads some people into thinking they are getting better.",
    whenUncertain:
      "The two can look similar in the early painful phase, which is when an assessment helps most. I check passive external rotation first (it does most of the separating work), then run the cuff battery, compare active and passive range, and ask targeted history questions. If I am still unsure, I will tell you that and re-check at the next visit, because frozen shoulder declares itself more clearly with time.",
    overlap:
      "A stiff, painful shoulder after a rotator cuff strain can progress into secondary stiffness that looks like early frozen shoulder. It also works the other way: people with frozen shoulder can also have cuff tendinopathy. So the assessment checks for both, and the plan covers whichever is present.",
    redFlags: [
      {
        sign: 'Sudden inability to lift the arm after a fall, or an obvious change in the shape of the shoulder',
        action: 'Go to emergency or urgent care to rule out a fracture, dislocation, or large tendon tear.',
      },
      {
        sign: 'Shoulder or arm pain on either side with chest discomfort, shortness of breath, sweating, nausea, or light-headedness',
        action: 'Call 911. Shoulder pain can come from the heart.',
      },
      {
        sign: 'A hot, red, swollen shoulder with fever or feeling unwell',
        action: 'Go to emergency now. This can be a joint infection.',
      },
      {
        sign: 'Unexplained weight loss, night sweats, or a history of cancer with new shoulder pain',
        action: 'See your family doctor before starting physiotherapy.',
      },
    ],
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
          "Maybe. One movement gives a useful clue. Bend both elbows to a right angle and keep them against your sides, then turn both forearms outward as far as is comfortable, without letting the elbows leave your sides, and compare the two. Do not force it, and skip this if the shoulder was recently injured. If the sore side turns out much less than the other, frozen shoulder becomes more likely. If both sides turn out about the same, a rotator cuff problem is more likely. An examination usually narrows the possibilities. Early frozen shoulder can remain uncertain, and a follow-up assessment may make the pattern clearer.",
      },
      {
        question: 'Does frozen shoulder get better on its own?',
        answer:
          "Many people improve over months to years, but recovery can be incomplete and does not always follow three neat phases. In one long-term follow-up averaging 4.4 years, 41 percent still had some symptoms, mostly mild (Hand and colleagues, 2008). Physiotherapy focused on pain control, mobility and progressive loading can help with pain and movement along the way, and in the UK FROST trial people improved with early physiotherapy plus a steroid injection about as much as with surgery.",
      },
      {
        question: "Should I get an MRI before starting physiotherapy?",
        answer:
          "For most shoulder pain, no. Frozen shoulder is a clinical diagnosis. Rotator cuff problems are often managed well without imaging, and incidental findings on MRI in pain-free adults are extremely common. When the exam raises specific concerns, symptoms are not improving on the expected timeline, or surgery is a real consideration, I flag it to your family doctor or specialist and refer you for imaging.",
      },
      {
        question: 'Can I strengthen my way out of frozen shoulder?',
        answer:
          "Not in the usual strengthening sense. In the painful phase, loading into an already irritable, contracted capsule tends to flare things. The early work is about restoring range through careful mobilisation, sleep-tolerant positions, and gentle movement. Strengthening comes in later as range returns. The order matters, which is the opposite of most rotator cuff rehab.",
      },
      {
        question: 'What if I have both a rotator cuff tear and a frozen shoulder?',
        answer:
          "Common, and manageable. The plan addresses the stiffer pattern first because you cannot strengthen into range you do not have. As capsular mobility improves, the rotator cuff rehab layers in. Leaving out the mobility work early can stall progress.",
      },
      {
        question: 'I have diabetes. Does that change anything?',
        answer:
          "Yes. Frozen shoulder is several times more common in people with diabetes, and it can be more severe and take longer to recover. That is not a reason to abandon rehab. It is a reason to start earlier, pace more carefully, and protect sleep through the painful phase.",
      },
    ],
    evidenceNotes: [
      {
        claim:
          'Adhesive capsulitis typically causes a loss of both active and passive shoulder movement, most often turning the arm outward with the elbow at the side, followed by lifting the arm out to the side and turning it inward.',
        source:
          'Kelley MJ et al., "Shoulder Pain and Mobility Deficits: Adhesive Capsulitis" (JOSPT Clinical Practice Guideline), 2013.',
        refs: [{ pmid: '23636125' }],
      },
      {
        claim:
          'In 223 people followed for a mean of 4.4 years after frozen shoulder began, 59 percent had normal or near-normal shoulders and 41 percent had some ongoing symptoms, mostly mild.',
        source:
          'Hand C, Clipsham K, Rees JL, Carr AJ. "Long-term outcome of frozen shoulder." Journal of Shoulder and Elbow Surgery 2008; 17(2): 231-236.',
        refs: [{ pmid: '17993282' }],
      },
      {
        claim:
          'In 452 people with atraumatic full-thickness rotator cuff tears, a structured physiotherapy programme improved symptoms, and about 75 percent had not chosen surgery at two years.',
        source:
          'Kuhn JE et al., "Effectiveness of physical therapy in treating atraumatic full-thickness rotator cuff tears." Journal of Shoulder and Elbow Surgery 2013; 22(10): 1371-1379.',
        refs: [{ pmid: '23540577' }],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 3. Patellar tendinopathy vs. patellofemoral pain
  // ---------------------------------------------------------------------------
  {
    pair: 'patellar-tendinopathy-vs-patellofemoral',
    title: 'Patellar Tendonitis vs. Patellofemoral Pain Syndrome',
    h1: 'Is it patellar tendinopathy or patellofemoral pain?',
    description:
      "Patellar tendonitis or patellofemoral pain syndrome? How to tell them apart by pain location and what sets it off. Registered Physiotherapist, Burlington.",
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
      "Both sit at the front of the knee and both flare with loaded knee bending. The difference comes down to where the pain points and what triggers it. Patellar tendinopathy is a localised tendon overload problem. The pain usually sits at the bottom tip of the kneecap on the tendon, flares with jumping and changes of direction, and often eases as the tendon warms up. Patellofemoral pain is pain around or behind the kneecap, often aggravated by squatting, stairs and running. It tends to be more diffuse and often does not warm up in the same way. These patterns overlap and the two can coexist, so an assessment looks at the full history and examination rather than one feature.",
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
        aForA: 'Pain at the bottom tip of the kneecap as the knee bends under load. It often reproduces the familiar pain.',
        aForB: 'Pain around or behind the kneecap, sometimes with the knee falling inward (valgus) or the pelvis dropping on the opposite side. The pain is often less focal.',
      },
    ],
    specificTests: [
      {
        test: 'Palpation of the inferior pole of the patella',
        whatItShows:
          'Pinpoint tenderness right where the patellar tendon attaches to the bottom of the kneecap. A useful finding, but not enough on its own: many pain-free athletes are tender there too, so I read it alongside the decline squat and the history.',
      },
      {
        test: 'Single-leg decline squat (25 degrees)',
        whatItShows:
          'Squatting on one leg on a 25-degree decline board puts more load through the patellar tendon. Clear pain at the bottom of the kneecap during this test fits patellar tendinopathy, although no single test confirms it.',
      },
      {
        test: 'Step-down from a stair, 20 to 30 cm height',
        whatItShows:
          'Reproducing your familiar pain around or behind the kneecap on a single-leg step-down supports the patellofemoral pattern. I also watch how the knee and pelvis are controlled during the movement. No single test confirms it.',
      },
      {
        test: 'Clarke\'s sign and patellar compression',
        whatItShows:
          'Gentle compression of the kneecap against the thigh bone, with and without a quad contraction. Pain behind the kneecap (not below it) can fit patellofemoral pain, but these tests have limited accuracy, so they carry less weight than reproducing your familiar pain during squatting or stepping.',
      },
      {
        test: 'Hip strength screen (abduction and external rotation)',
        whatItShows:
          'Weakness in the glutes, particularly gluteus medius and the deep rotators, is often found in people with patellofemoral pain, though not in everyone, and pain itself can reduce strength. It can play a part in patellar tendinopathy too.',
      },
    ],
    whenItIsA:
      "Your pattern more closely matches patellar tendinopathy if you can put one finger on the bottom tip of the kneecap where it hurts, the pain warms up as you keep going and flares afterwards, jumping and changes of direction bring it on, and sitting with a bent knee is fine. A recent spike in training volume, a new sport, or a preseason return are common setups.",
    whenItIsB:
      "Your pattern more closely matches patellofemoral pain if the pain is more diffuse around or behind the kneecap, going down stairs and sitting with bent knees for a while both bother it, and you notice a feeling of the knee giving or buckling going downhill. It often starts after a running ramp-up, a life change that added a lot more stairs or walking, or after a period of detraining.",
    whenUncertain:
      "These genuinely overlap and they can coexist, so a brief assessment matters. I localise the tenderness first, because pain you can cover with one finger at the bottom tip of the kneecap is a useful first clue. Then I run the single-leg decline squat and the step-down, check hip strength, and look at your running or squat mechanics if relevant. That helps narrow it down; when the picture stays mixed, I reassess as the knee responds to the first few weeks of loading. Where they coexist, I dose the tendon work and the patellofemoral rehab in parallel rather than arguing about which is primary.",
    overlap:
      "It is common to see both in the same knee, particularly in jumping athletes who also sit at a desk all day. Hip and trunk strength can play a part in both. Chronic patellofemoral pain can also alter loading at the patellar tendon over time, and a grumbling tendon can change how you squat, which feeds the patellofemoral side. The rehab for both has a lot of shared elements, so the plan is rarely either-or.",
    redFlags: [
      {
        sign: 'A pop below the kneecap, then sudden inability to straighten the knee or lift the straight leg',
        action: 'Go to emergency or urgent care. A patellar tendon rupture needs early surgical assessment.',
      },
      {
        sign: 'A newly hot, red, markedly swollen knee, with or without a fever',
        action: 'Seek same-day medical care to rule out a joint infection, or go to emergency if you feel unwell. Infection is possible even without a fever.',
      },
      {
        sign: 'A knee that locks and will not fully straighten',
        action: 'See your family doctor promptly.',
      },
      {
        sign: 'A child or teenager with a new limp that has no clear explanation',
        action: 'Get a prompt medical assessment before starting exercises. A hip problem can be felt only in the thigh or knee.',
      },
      {
        sign: 'A limping child or teenager with sudden hip, thigh or knee pain, who cannot put weight on the leg, whose leg looks deformed, or who has a fever and feels unwell',
        action: 'Go to emergency now.',
      },
      {
        sign: 'A suspected slipped growth plate at the hip (slipped capital femoral epiphysis, or SCFE)',
        action: 'Do not let the child walk on the leg, and seek emergency assessment today. In a teenager this can show up as a limp with hip, groin, thigh or knee pain, even when they can still walk.',
      },
    ],
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
          "Yes, and in jumping sports it is a common pattern in younger athletes. The two rehabs overlap heavily, with hip strengthening, quad loading, and load management all doing double duty. What matters is dosing both tissues within their current tolerance rather than pretending only one is the problem.",
      },
      {
        question: "Why does my patellar tendon hurt more the day after training, not during?",
        answer:
          "That is the classic tendon pattern. Tendons often tolerate load during the session because they warm up, then flare 24 to 48 hours later as the tissue responds. If your post-session and next-morning pain is rising over several sessions, the tendon is telling you the load has exceeded its current capacity. The fix is changing the dose, not stopping completely.",
      },
      {
        question: 'Why do stairs down hurt more than stairs up with patellofemoral pain?',
        answer:
          "Both going up and going down stairs load the kneecap joint more than level walking. Going down also asks the quads to control the lowering, which many people with patellofemoral pain find harder. That is why stairs down, downhill running, and decelerating are common aggravators, although some people notice going up more.",
      },
      {
        question: "Does my tracking or alignment actually matter?",
        answer:
          "Less than older theories suggested, but it is not nothing. Current guidance puts more weight on how much load the knee is handling and on quad and hip strength than on small differences in alignment, and a visible tracking problem is not needed for the diagnosis. Strength, control and training load are things rehab can change, so the plan focuses there.",
      },
      {
        question: "Is squatting bad for my knees with either condition?",
        answer:
          "Not usually, provided the load is dosed to what the knee tolerates today. Avoiding knee bending completely can leave both tissues less able to handle load over time. The real questions are depth, load, tempo, and frequency. I adjust those to keep you training without flaring the symptom.",
      },
      {
        question: 'How long does each usually take to settle with physiotherapy?',
        answer:
          "Many people with patellofemoral pain improve over six to twelve weeks of targeted hip and quad work with sensible load management, although symptoms can persist or come back for some. Patellar tendinopathy is often slower because tendons adapt slowly. A return to jumping sport often takes three to six months or longer of progressive loading, with earlier gains in day-to-day function along the way.",
      },
    ],
    evidenceNotes: [
      {
        claim:
          'The guideline recommends combined hip and knee strengthening over knee strengthening alone to reduce pain and improve function in patellofemoral pain.',
        source:
          'Willy RW et al., "Patellofemoral Pain" (JOSPT Clinical Practice Guideline), 2019.',
        refs: [{ pmid: '31475628' }],
      },
      {
        claim:
          'In a 12-week trial in 39 men with patellar tendinopathy, heavy slow resistance training and eccentric decline squats both improved symptoms and held at six months, with the most satisfied patients in the heavy slow resistance group. Steroid injection helped short term but deteriorated by six months.',
        source:
          "Kongsgaard M et al., \"Corticosteroid injections, eccentric decline squat training and heavy slow resistance training in patellar tendinopathy.\" Scandinavian Journal of Medicine & Science in Sports 2009; 19(6): 790-802.",
        refs: [{ pmid: '19793213' }],
      },
      {
        claim:
          'The hallmark features of patellar tendinopathy are pain localised to the inferior pole of the patella and load-related pain that rises with demand on the knee extensors. The diagnosis is clinical, because tendon changes on imaging also occur in people without tendon pain.',
        source:
          'Malliaras P, Cook J, Purdam C, Rio E. "Patellar tendinopathy: clinical diagnosis, load management, and advice for challenging case presentations." JOSPT 2015; 45(11): 887-898.',
        refs: [{ pmid: '26390269' }],
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
      'Sciatica or piriformis syndrome? How to tell nerve-root pain from deep buttock nerve pain by pattern, tests, and exam. Registered Physiotherapist, Burlington.',
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
      "Both can send pain from the buttock down the back of the leg, and both get lumped together as 'sciatica' in everyday language. Sciatica from the spine is irritation of a nerve root in the lower back, most often from a disc. Its symptoms often follow the strip of the leg that nerve root supplies (a dermatome), in more involved cases with changes in reflexes, strength, or sensation, and it can occur with or without much back pain. Piriformis syndrome, now often discussed under the broader heading of deep gluteal syndrome, is compression or irritation of the sciatic nerve in the buttock itself, below the spine. Same nerve, different location. The leg symptoms can look similar, and the history, what provokes the pain, and the exam findings help tell them apart. Neither a pain map nor a single nerve-tension test establishes the source on its own.",
    distinguishing: [
      {
        aspect: 'Where the pain starts',
        aForA: 'Often in the low back or sacral area first, then travels down the buttock and leg, although leg pain from a nerve root can come with little or no back pain. Many people can draw a line showing the path of the pain down the leg.',
        aForB: 'Starts deep in the middle of the buttock, over the piriformis, above the sitting bone. Low back is typically not the primary complaint.',
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
        aForA: 'Often shifts with spine positions. In some people, repeated extension (lying on the stomach, standing tall) draws the leg pain back toward the spine, which is a useful sign. Others are aggravated by extension, so this is something I test in the clinic, not a rule to treat yourself by.',
        aForB: 'Spinal movements often change the symptom very little. The pain tends to follow sitting pressure, hip rotation and loading of the deep buttock rather than spine position.',
      },
      {
        aspect: 'Straight leg raise',
        aForA: 'Classic reproduction of leg pain between roughly 30 and 70 degrees of passive hip flexion. Suggests nerve-root irritation, especially when it reproduces your familiar leg pain rather than just tightness.',
        aForB: 'Can be uncomfortable in the buttock, particularly with added internal rotation, but true reproduction of leg pain in the radicular pattern is less consistent.',
      },
      {
        aspect: 'Local buttock tenderness',
        aForA: 'The deep buttock can be tender, but often less strikingly than with a buttock source.',
        aForB: 'Focal tenderness when I press into the deep buttock near the greater sciatic notch, often reproducing your familiar pain. It is one of the more consistent features reported, although tenderness alone does not confirm the source.',
      },
      {
        aspect: 'Sitting behaviour',
        aForA: 'Sitting is often uncomfortable because of the lumbar load, and you may shift position frequently. Leg pain may build with sustained sitting but is not strictly one-sided from seat pressure.',
        aForB: 'A specific pattern: pain builds the longer you sit on that cheek, and relief comes from shifting weight to the other side. Long drives and movie seats are common aggravators.',
      },
      {
        aspect: 'Red-flag screening',
        aForA: 'New numbness between the legs, new bladder or bowel changes, or severe or rapidly worsening weakness in both legs mean going to emergency now to check for cauda equina syndrome. Pain that suddenly starts down both legs needs contact with a medical clinician today, and a new foot drop or worsening weakness in one leg needs same-day medical assessment. These are rare, but the screen is always part of the first visit.',
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
          'You sit, I passively adduct and internally rotate the flexed hip while palpating over the piriformis. Reproduction of your familiar pain is supportive. In a 2014 clinical study (Martin et al.), the test was fairly specific but only moderately sensitive for sciatic nerve entrapment in the buttock, and more accurate combined with an active piriformis test.',
      },
      {
        test: 'Pace sign (resisted hip abduction and external rotation in sitting)',
        whatItShows:
          'Resisted contraction of the piriformis from a seated position reproduces deep buttock pain when the muscle is irritable. Useful alongside palpation and the FAIR test rather than as a standalone.',
      },
      {
        test: 'Neurological screen (reflexes, myotomes, dermatomes)',
        whatItShows:
          'Ankle and knee reflexes, big-toe extension and plantarflexion strength, and sensation mapping help identify a specific nerve root. Clear deficits in a nerve-root pattern point toward a spinal source rather than the buttock.',
      },
    ],
    whenItIsA:
      "Your pattern more closely matches sciatica if the pain started in the low back or the sacral area before spreading down the leg, it follows a clean strip down the leg rather than sitting in the buttock, coughing or sneezing makes it worse, and you have objective nerve signs like dermatomal numbness, a reduced reflex, or big-toe weakness. Bending forward provokes it and lying down or repeated extension often eases it over minutes. A recent bend-and-lift episode, a long drive, or a gradual onset over a few days is a common setup.",
    whenItIsB:
      "Your pattern more closely matches piriformis syndrome if the pain is centred in the deep buttock rather than the back, sitting on that side for any length of time flares it, direct pressure into the deep buttock reproduces your familiar pain, and spinal movements do not really change anything. Objective nerve-root signs are absent or vague. A recent increase in running volume, new long drives, a new bike fit, or sitting on a thick wallet are common triggers.",
    whenUncertain:
      "These two can look similar on the surface, and a smaller share of sciatic-type pain is thought to come from a non-discogenic source in the deep gluteal region. The history and exam help narrow it down. I run the neurological screen first, then the tension tests (straight leg raise and slump), then the piriformis-specific tests (FAIR, seated piriformis stretch, Pace, deep palpation). If the neurological screen is clear and the piriformis tests reproduce your familiar pain, piriformis syndrome moves up the list. If the neurological screen shows dermatomal numbness, a lost reflex, or clear myotomal weakness, the spine is the more likely source and I plan around that. Sometimes the pattern stays uncertain, and I reassess as you respond or flag it for medical investigation. MRI is usually not needed to start treatment. With progressive neurological loss, red-flag features, or symptoms that are not changing on the expected timeline, I flag it to your family doctor or specialist and refer you.",
    overlap:
      "Both can coexist, and a long-standing low back problem can sit alongside deep gluteal irritability. A person with a previous disc episode can later develop piriformis-dominant symptoms, and someone with long-standing piriformis pain can eventually pick up secondary low-back stiffness. That is why I screen the lumbar spine, SI joint, hip, and deep gluteal region on the first visit rather than assuming the label.",
    redFlags: [
      {
        sign: 'New trouble starting to pass urine or feeling it pass, new loss of bladder or bowel control, new numbness between the legs or around the back passage, new loss of genital sensation or sexual function, or severe or rapidly worsening weakness in both legs',
        action: 'Go to emergency now. These can be signs of cauda equina syndrome.',
      },
      {
        sign: 'Pain that suddenly starts down both legs, or spreads from one leg to both, even without the signs above',
        action: 'Contact a medical clinician today for a same-day assessment.',
      },
      {
        sign: 'A new foot drop (the foot catches or slaps when you walk), or weakness in one leg that is getting worse',
        action: 'Same-day medical assessment.',
      },
      {
        sign: 'Sudden unexplained weakness or numbness in an arm or leg, even if it improves',
        action: 'Call 911 now. This can be a stroke. Do not wait for a physiotherapy appointment.',
      },
      {
        sign: 'Fever, unexplained weight loss, a history of cancer, or constant pain at night that does not ease with rest',
        action: 'See your family doctor before starting physiotherapy.',
      },
    ],
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
          "Possibly. 'Sciatica' is often used as a general label for any leg pain that travels down from the buttock, which includes both nerve-root irritation from the spine and sciatic nerve irritation in the deep gluteal region. A focused exam helps tell them apart. If the low back is not tender, spinal movements do not change the symptom, and pressing into the deep buttock reproduces your familiar pain, piriformis or deep gluteal involvement moves up the list.",
      },
      {
        question: 'Do I need an MRI to find out which one it is?',
        answer:
          "Usually no. MRI is useful when there are progressive neurological signs, red-flag features, or when symptoms are not responding on the expected rehab timeline. For many people, a careful history and exam give enough information to start treatment, with reassessment if the response is not as expected. Imaging also picks up incidental findings in pain-free adults very often, so it is not a shortcut to a diagnosis.",
      },
      {
        question: 'Why does sitting make piriformis pain so much worse?',
        answer:
          "The sciatic nerve runs either under or through the piriformis muscle, right at the greater sciatic notch. Sitting compresses the nerve and the surrounding deep gluteal structures against the chair, which irritates the tissue further if the muscle is already guarding. That is why soft seats, shifting weight frequently, and breaking up long drives help more than stretching alone in the short term.",
      },
      {
        question: 'Will stretching my piriformis fix it?',
        answer:
          "Stretching alone is often not enough. A short window of gentle nerve glides and piriformis stretching can calm things, but the sustainable plan usually includes strengthening the gluteus medius and deep hip rotators, changing the loading that set it off (long sitting, running volume, bike fit, wallet), and sometimes dry needling into the deep gluteal region for symptom relief. Stretching a guarding muscle without changing its job tends to give short-lived results.",
      },
      {
        question: 'Is sciatica dangerous?',
        answer:
          "Most sciatica is not dangerous and settles with time and targeted rehab. Go to emergency now, rather than booking a physiotherapy visit, for new trouble starting to pass urine or feeling it pass, new loss of bladder or bowel control, new numbness between the legs or around the back passage, new loss of genital sensation or sexual function, or severe or rapidly worsening weakness in both legs. These can be signs of cauda equina syndrome. Contact a medical clinician today if pain suddenly starts down both legs or spreads from one leg to both, even without those signs. A new foot drop or worsening weakness in one leg needs same-day medical assessment. Sudden unexplained weakness or numbness in an arm or leg, even if it improves, can be a stroke: call 911 now.",
      },
      {
        question: 'How long does each typically take to settle?',
        answer:
          "Straightforward sciatica from a disc often improves meaningfully over four to twelve weeks of targeted rehab, though tissue healing can take several months even after pain has resolved. Piriformis or deep gluteal pain can improve over several weeks once the provoking loads are changed and strengthening starts, but the research on it is limited and recovery times vary. Longer-standing cases of either take longer, and I reassess rather than push on if progress stalls by about four weeks.",
      },
    ],
    evidenceNotes: [
      {
        claim:
          'Deep gluteal syndrome describes extrapelvic sciatic nerve entrapment in the posterior hip and is an important non-discogenic cause of sciatic-type pain. Piriformis syndrome is one pattern within this spectrum.',
        source:
          'Martin HD, Reddy M, Gomez-Hoyos J. "Deep gluteal syndrome." Journal of Hip Preservation Surgery 2015; 2(2): 99-107.',
        refs: [{ pmid: '27011826' }],
      },
      {
        claim:
          'In first-contact care, imaging is not routinely offered for low back pain with or without sciatica. Assessment focuses on ruling out serious causes and judging the risk of a slow recovery, and imaging is considered in hospital or musculoskeletal clinic settings only when the result is likely to change management.',
        source:
          'National Institute for Health and Care Excellence. "Low back pain and sciatica in over 16s: assessment and management." NICE Guideline NG59, 2016 (updated 2020).',
        refs: [{ href: 'https://www.nice.org.uk/guidance/ng59', label: 'NICE NG59' }],
      },
      {
        claim:
          'A systematic review identified buttock pain, pain aggravated by sitting, tenderness near the greater sciatic notch, and pain with manoeuvres that tension the piriformis as the most consistent clinical features of piriformis syndrome.',
        source:
          'Hopayian K, Danielyan A. "Four symptoms define the piriformis syndrome: an updated systematic review of its clinical features." European Journal of Orthopaedic Surgery & Traumatology 2018; 28(2): 155-164.',
        refs: [{ pmid: '28836092' }],
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
      'Hip osteoarthritis or GTPS / gluteal tendinopathy? How to tell them apart by pain location, stiffness, and exam. Registered Physiotherapist, Burlington.',
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
        aForA: 'Morning stiffness that eases with movement, absent or usually lasting no more than 30 minutes. Stiffness also after prolonged sitting, with a characteristic "start-up" feeling getting out of a chair.',
        aForB: 'Not a stiffness-dominant presentation. The hip does not feel globally tight. The issue is sharp, localised pain with specific loads and positions.',
      },
      {
        aspect: 'Hip internal rotation',
        aForA: 'Restricted and often painful, especially in flexion. Loss of internal rotation is one of the more useful clinical signs of hip OA.',
        aForB: 'Usually preserved and comfortable. If internal rotation is significantly limited, a co-existing or primary intra-articular problem should be considered.',
      },
      {
        aspect: 'Lying on the affected side',
        aForA: 'Often tolerable or mildly uncomfortable. Sleep disturbance tends to come from overall stiffness rather than from direct side pressure.',
        aForB: 'Classic aggravator. Night pain lying on the painful side is a common pointer to GTPS, and lying on the opposite side with the top knee falling across the body can hurt too because it compresses the tendons.',
      },
      {
        aspect: 'Single-leg stance',
        aForA: 'Usually manageable for 30 seconds, although prolonged standing can ache in the groin. A Trendelenburg drop is not the main finding.',
        aForB: 'Reproduces pain over the greater trochanter within 30 seconds in many cases. A drop of the pelvis on the opposite, unsupported side (Trendelenburg sign) can point to difficulty with the hip abductors of the standing leg, but it is not specific to a gluteal tendon problem.',
      },
      {
        aspect: 'Stairs, hills, and uneven ground',
        aForA: 'Stairs are often uncomfortable, particularly going up with the affected leg, because of the demand on hip flexion and rotation in the groin.',
        aForB: 'Walking uphill, climbing stairs, and stepping off a curb all load the gluteal tendons and are common aggravators.',
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
          'With you on your back and the hip and knee bent to 90 degrees, I rotate the lower leg outward to measure internal rotation at the hip. A painful, hard block short of the other side is a useful bedside sign of hip OA.',
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
          "You stand on the affected leg for up to 30 seconds. Reproduction of focal pain over the greater trochanter within that window, with or without a visible pelvic drop, is a useful clinical pointer to gluteal tendinopathy and GTPS.",
      },
      {
        test: 'Palpation over the greater trochanter',
        whatItShows:
          'Direct pressure over the greater trochanter reproduces the familiar pain in GTPS. Pain with palpation, a positive single-leg stance and pain on resisted hip abduction together support gluteal tendinopathy, although no single finding confirms it.',
      },
    ],
    whenItIsA:
      "Your pattern more closely matches hip osteoarthritis if the pain sits in the groin or front of the hip, morning stiffness lasts around half an hour before easing, internal rotation feels blocked and painful, and stairs or sitting for a long time start the hip up stiffly. Getting out of a car or putting on socks and shoes is often awkward. Pain referring to the knee from the groin is not uncommon, which is why knee pain in an older adult always deserves a hip screen.",
    whenItIsB:
      "Your pattern more closely matches GTPS or gluteal tendinopathy if the pain is on the outside of the hip and you can put a finger on it, lying on that side at night wakes you, walking uphill or climbing stairs flares it, and standing on one leg reproduces it within thirty seconds. There is often a recent change in walking or running volume, a new weight-loss ramp-up, or a long stretch of sitting with crossed legs.",
    whenUncertain:
      "The two can coexist, and occasionally present together in one hip, which is when an exam helps most. I check passive internal rotation first because it is one of the more useful signs for telling OA from soft-tissue pain on the outside of the hip. Then I palpate the greater trochanter, run single-leg stance, and test resisted hip abduction. If internal rotation is clean and lateral palpation reproduces your familiar pain, GTPS moves up the list. If internal rotation is clearly limited and groin pain dominates, hip OA moves up the list. It is usually diagnosed from the history and exam; when an X-ray would change the plan, I flag it to your family doctor or specialist and refer you (an X-ray, not MRI, comes first).",
    overlap:
      "Hip OA and gluteal tendinopathy can occur together in older adults, and changes in how the joint is loaded may play a part. Equally, a person with long-standing GTPS can protect the hip in ways that add stiffness. Treating one and missing the other can be one reason lateral hip pain or post-arthroplasty stiffness lingers longer than expected.",
    redFlags: [
      {
        sign: 'A fall followed by hip or groin pain and difficulty putting weight on the leg',
        action: 'Go to emergency to rule out a hip fracture.',
      },
      {
        sign: 'Groin or hip pain in a runner that builds with each run, hurts when hopping on that leg, or aches at rest or at night',
        action: 'Possible femoral neck stress fracture. Stop running and all impact exercise, keep weight off the leg, and get medical assessment today. If you cannot put weight on the leg or the pain is severe, go to emergency. An early X-ray can look normal.',
      },
      {
        sign: 'A hot, swollen or very painful hip, with or without a fever, or feeling unwell',
        action: 'Seek same-day medical care to rule out a joint infection, or go to emergency if you feel unwell. Infection is possible even without a fever.',
      },
      {
        sign: 'A child or teenager with a new limp that has no clear explanation',
        action: 'Get a prompt medical assessment before starting exercises. A hip problem can be felt only in the thigh or knee.',
      },
      {
        sign: 'A limping child or teenager with sudden hip, thigh or knee pain, who cannot put weight on the leg, whose leg looks deformed, or who has a fever and feels unwell',
        action: 'Go to emergency now.',
      },
      {
        sign: 'A suspected slipped growth plate at the hip (slipped capital femoral epiphysis, or SCFE)',
        action: 'Do not let the child walk on the leg, and seek emergency assessment today. In a teenager this can show up as a limp with hip, groin, thigh or knee pain, even when they can still walk.',
      },
      {
        sign: 'Unexplained weight loss, a history of cancer, or constant night pain',
        action: 'See your family doctor before starting physiotherapy.',
      },
    ],
    relatedTreatmentIds: [
      'exercise-therapy',
      'joint-mobilization',
      'soft-tissue-myofascial-release',
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
          "Often not to start. Hip OA is suspected clinically from groin pain with restricted internal rotation and morning stiffness, and confirmed with a plain X-ray if imaging is needed. GTPS is a clinical diagnosis from lateral tenderness, night pain on that side, and positive single-leg stance. MRI is reserved for cases that are not responding, that suggest a significant tendon tear, or when surgical decisions are on the table. Incidental findings on MRI are common in pain-free adults, so imaging is not a substitute for a careful exam.",
      },
      {
        question: "Why does my hip OA pain show up in my knee?",
        answer:
          "Referral from the hip to the knee is common because the nerves supplying the hip joint also supply parts of the knee. It is one of the classic reasons older adults with isolated knee pain get an unexpected hip finding on exam. When the knee hurts but internal rotation of the hip is limited and painful, I always screen the hip before settling on a knee diagnosis.",
      },
      {
        question: "Will strengthening make my GTPS worse before it gets better?",
        answer:
          "It can flare briefly if the early dose or position is wrong. Some stretches and exercise positions aggravate the outer hip, particularly when the hip drops into adduction (the thigh drifting across the body). I start by reducing the compressive positions (sleep position, crossed legs, hanging your weight onto one hip), begin strengthening in a position and dose the hip tolerates, often with isometric holds, and progress according to how it responds. Many people notice the pain easing over several weeks, while tendon capacity keeps building over the following months.",
      },
      {
        question: 'Can hip OA be managed without surgery?',
        answer:
          "Yes, often for a long time. Current guidelines such as NICE and OARSI recommend education, exercise therapy, and weight management as first-line care, with manual therapy, strengthening exercises, and gait work all having a role. Injections and surgery sit as later options for those whose function and sleep are significantly affected despite a proper rehab trial. I plan around keeping you active, not around managing decline.",
      },
      {
        question: "I was told it is just bursitis and given an injection. It came back. Why?",
        answer:
          "Often because the pain involves the gluteal tendons, and injections can quiet the pain without changing the load pattern that irritated the tendons in the first place. The 2018 LEAP trial compared education plus exercise, corticosteroid injection, and wait-and-see for gluteal tendinopathy. At both 8 weeks and 12 months, more people reported overall improvement with education plus exercise than with the injection; pain was lower with exercise at 8 weeks and similar at 12 months. Injections have a role, but they are not the whole plan.",
      },
    ],
    evidenceNotes: [
      {
        claim:
          'The current physical therapy guideline for hip osteoarthritis covers patient education, exercise, manual therapy, and gait training as non-surgical management.',
        source:
          'Koc TA Jr, Cibulka M, Enseki KR, et al. "Hip Pain and Mobility Deficits - Hip Osteoarthritis: Revision 2025." JOSPT Clinical Practice Guideline. Journal of Orthopaedic & Sports Physical Therapy 2025; 55(11): CPG1-CPG31.',
        refs: [{ pmid: '41165671' }],
      },
      {
        claim:
          'For gluteal tendinopathy, education plus a progressive loading program gave more people overall improvement than a corticosteroid injection or wait and see at 8 and 52 weeks. Pain was lower than with the injection at 8 weeks and similar at 52 weeks.',
        source:
          'Mellor R, Bennell K, Grimaldi A, et al. "Education plus exercise versus corticosteroid injection use versus a wait and see approach on global outcome and pain from gluteal tendinopathy: prospective, single blinded, randomised clinical trial." BMJ 2018; 361: k1662.',
        refs: [{ pmid: '29720374' }],
      },
      {
        claim:
          'Lateral hip pain once labelled trochanteric bursitis is now thought to come mainly from the gluteal tendons. Diagnosis is based on a careful clinical examination, including tenderness over the side of the hip and tests such as standing on one leg and resisted hip movements. Imaging is used when the picture is unclear, because tendon changes on scans are also common in people without pain.',
        source:
          'Grimaldi A, Fearon A. "Gluteal Tendinopathy: Integrating Pathomechanics and Clinical Features in Its Management." JOSPT 2015; 45(11): 910-922.',
        refs: [{ pmid: '26381486' }],
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
      "Both commonly follow a twisting knee injury, and both show up frequently in skiers, court sports, and soccer. They often travel together too. The classic O'Donoghue triad combines ACL rupture, medial collateral ligament injury, and a medial meniscus tear. Despite the overlap, the mechanism, swelling timing, exam findings, and natural history often point more toward one than the other, and imaging through a doctor fills the gap when it would change the plan. The reason this matters is practical: the management decisions, timelines, and return-to-sport plans look quite different.",
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
        aForA: 'Positive. Increased anterior translation of the tibia with a soft or absent end-feel. Lachman is the most sensitive bedside test for ACL rupture; the pivot shift is more specific.',
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
          "I press carefully along the medial and lateral joint lines with the knee flexed. Focal tenderness, especially posteromedial or posterolateral, is a useful clinical pointer to a meniscus tear, best read alongside the history and the other tests.",
      },
    ],
    whenItIsA:
      "Your pattern more closely matches an ACL injury if there was a non-contact pivot or deceleration, you felt or heard a loud pop, the knee swelled up significantly within hours, and you felt the knee give way. Returning to cutting or pivoting since the event has felt unsafe, and the Lachman test reproduces increased laxity on the affected side. The history often sits on top of sports like soccer, basketball, skiing, or volleyball.",
    whenItIsB:
      "Your pattern more closely matches a meniscus tear if the injury happened while twisting with the foot planted, often in a squat or deep flexion, the swelling built up slowly over a day or two rather than immediately, and you now notice catching, clicking, or a feeling of the knee briefly locking. Joint-line tenderness and a positive McMurray or Thessaly reinforce the picture. Degenerative meniscal tears can also appear with no clear injury in adults over 40.",
    whenUncertain:
      "The two genuinely overlap, and they co-occur often enough that a clean split is not always possible clinically. I take a careful mechanism history, look at swelling timing, run Lachman first (it is the most useful single bedside test for the ACL), then McMurray, Thessaly, and joint-line palpation for the meniscus. If Lachman is clearly positive or the knee is grossly unstable, I flag it to your family doctor and refer you promptly for an orthopaedic opinion, where an MRI can be arranged if it would change the plan. If the clinical picture fits a meniscus pattern and the knee is not locked, a trial of exercise-based physiotherapy is reasonable first, because trials show that for many degenerative and non-obstructive tears, rehabilitation is comparable to arthroscopy over one to five years.",
    overlap:
      "The O'Donoghue triad is a real clinical pattern: ACL rupture, MCL injury, and medial meniscus tear from a valgus-pivot mechanism. That is why I always screen for a meniscus in someone with a confirmed ACL injury, and I always check ligamentous stability in someone presenting with meniscus symptoms after a bigger twist than their history first suggests. In middle-aged adults, degenerative meniscal changes also sit alongside early knee OA, which changes the rehab plan and favours exercise-first management.",
    redFlags: [
      {
        sign: 'Unable to take four steps on the leg after the injury, or tenderness on the kneecap or the bony point on the outside of the knee',
        action: 'Go to urgent care or emergency to rule out a fracture (the Ottawa Knee Rules).',
      },
      {
        sign: 'A knee that is locked and will not straighten',
        action: 'See a doctor promptly. A displaced meniscus tear can need early surgical review.',
      },
      {
        sign: 'After a major injury, the knee looked dislocated or feels loose in more than one direction',
        action: 'Go to emergency now, even if the knee has moved back into place. A knee dislocation can damage the blood vessels and nerves behind the knee.',
      },
      {
        sign: 'Numbness, coldness, or colour change in the foot after a major knee injury',
        action: 'Go to emergency now. A severe ligament injury can damage the blood supply to the leg.',
      },
      {
        sign: 'Calf pain, swelling, or warmth in the days after the injury or after surgery',
        action: 'Seek same-day medical assessment to rule out a blood clot. Sudden shortness of breath or chest pain means go to emergency now.',
      },
      {
        sign: 'A newly hot, red, swollen knee, with or without a fever, or redness and discharge around a surgical wound',
        action: 'Seek same-day medical care to rule out infection, or go to emergency if you feel unwell. Infection is possible even without a fever.',
      },
    ],
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
          "Not automatically. The decision depends on your activity demands, knee stability during daily life and sport, and whether other structures (meniscus root tears, significant collateral injury) are involved. Structured rehabilitation first is a reasonable path for many patients, and reconstruction can still follow if the knee keeps giving way. Competitive pivoting athletes and people with persistent instability despite good rehab are stronger surgical candidates. I plan around your goals and how the knee behaves, not around the MRI image alone.",
      },
      {
        question: 'Do I need surgery for a meniscus tear?',
        answer:
          "Often no, particularly for degenerative tears in middle-aged adults. Two major randomised trials (METEOR and ESCAPE) found exercise-based physiotherapy comparable to arthroscopic partial meniscectomy for degenerative and non-obstructive meniscal tears, at one year in METEOR and up to five years in ESCAPE. A third (FIDELITY) found the operation no better than sham surgery. The exceptions that still lean surgical are a truly locked knee (bucket-handle displacement), large traumatic tears in younger athletes, and some root tears where early repair protects the joint.",
      },
      {
        question: 'Why did my knee swell up so fast after my injury?',
        answer:
          "Fast swelling within six hours usually reflects bleeding into the joint, which comes from a vascular structure. The ACL is the most common cause, followed by intra-articular fracture and acute patellar dislocation. A classic meniscus tear typically produces slower joint effusion over twelve to forty-eight hours as synovial fluid accumulates. The timing is one of the most helpful pieces of history you can give me in the first visit.",
      },
      {
        question: "Can I test my ACL myself?",
        answer:
          "Not reliably, and I would not try. Self-Lachman is difficult because you cannot relax the hamstrings on the injured leg while also applying the force. Do not try to prove the knee is stable by cutting, twisting, landing, or repeatedly testing it, because a knee that gives way can cause a fall or further damage. Notice whether it gives way during ordinary activity, and arrange an assessment, especially after a new injury or rapid swelling. Functional testing belongs later in rehab, once the knee has been assessed.",
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
          'Recommends that rehabilitation after ACL reconstruction progress using specific criteria, with time since surgery necessary but not enough on its own, and exercise as the mainstay. Proposed return-to-sport criteria include psychological readiness alongside physical tests. These points rest mainly on expert agreement, as research has not yet shown which criteria work best.',
        source:
          'Kotsifaki R, Korakakis V, King E, et al. "Aspetar clinical practice guideline on rehabilitation after anterior cruciate ligament reconstruction." British Journal of Sports Medicine 2023; 57(9): 500-514.',
        refs: [{ pmid: '36731908' }],
      },
      {
        claim:
          'In patients with a meniscal tear and mild to moderate knee osteoarthritis, arthroscopic partial meniscectomy plus physical therapy did not produce better functional outcomes at 6 or 12 months than a structured physical therapy program alone.',
        source:
          'Katz JN, Brophy RH, Chaisson CE, et al. "Surgery versus Physical Therapy for a Meniscal Tear and Osteoarthritis" (METEOR trial). New England Journal of Medicine 2013; 368(18): 1675-1684.',
        refs: [{ pmid: '23506518' }],
      },
      {
        claim:
          'For patients with symptoms of a degenerative medial meniscus tear and no knee osteoarthritis, outcomes after arthroscopic partial meniscectomy were no better than after sham surgery.',
        source:
          'Sihvonen R, Paavola M, Malmivaara A, et al. "Arthroscopic Partial Meniscectomy versus Sham Surgery for a Degenerative Meniscal Tear" (FIDELITY trial). New England Journal of Medicine 2013; 369(26): 2515-2524.',
        refs: [{ pmid: '24369076' }],
      },
      {
        claim:
          'For middle-aged patients with non-obstructive meniscal tears, exercise-based physical therapy was non-inferior to arthroscopic partial meniscectomy for patient-reported knee function at 24 months.',
        source:
          'van de Graaf VA, Noorduyn JCA, Willigenburg NW, et al. "Effect of Early Surgery vs Physical Therapy on Knee Function Among Patients With Nonobstructive Meniscal Tears" (ESCAPE trial). JAMA 2018; 320(13): 1328-1337.',
        refs: [{ pmid: '30285177' }],
      },
      {
        claim:
          'At five years, exercise-based physical therapy remained non-inferior to arthroscopic partial meniscectomy for patient-reported knee function.',
        source:
          'Noorduyn JCA, van de Graaf VA, Willigenburg NW, et al. "Effect of Physical Therapy vs Arthroscopic Partial Meniscectomy in People With Degenerative Meniscal Tears: Five-Year Follow-up of the ESCAPE Randomized Clinical Trial." JAMA Network Open 2022; 5(7): e2220394.',
        refs: [{ pmid: '35802374' }],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 7. Proximal hamstring tendinopathy vs. piriformis syndrome
  // ---------------------------------------------------------------------------
  {
    pair: 'proximal-hamstring-tendinopathy-vs-piriformis-syndrome',
    title: 'Proximal Hamstring Tendinopathy vs. Piriformis Syndrome',
    h1: 'Is your deep buttock pain the hamstring tendon or the piriformis?',
    description:
      'Hamstring tendinopathy or piriformis syndrome? Telling deep buttock pain apart by location, sitting, and nerve signs. Registered Physiotherapist, Burlington.',
    conditionA: {
      slug: 'proximal-hamstring-tendinopathy',
      name: 'Proximal Hamstring Tendinopathy',
      shortName: 'Hamstring tendinopathy',
    },
    conditionB: {
      slug: 'piriformis-syndrome',
      name: 'Piriformis Syndrome',
      shortName: 'Piriformis syndrome',
    },
    atAGlance:
      'Both cause deep buttock pain that is worse with sitting, which is exactly why they get mixed up. Proximal hamstring tendinopathy is a load problem in the tendon where the hamstrings attach to the sitting bone, so the pain is pinpoint and local. Piriformis syndrome is a deep gluteal nerve problem, where the piriformis and nearby muscles irritate the sciatic nerve, so the pain tends to sit higher in the buttock and often travels down the leg. One is a tendon under too much load; the other is a nerve under too much pressure.',
    distinguishing: [
      {
        aspect: 'Where it hurts',
        aForA: 'Pinpoint, right on the sitting bone (the ischial tuberosity) low in the crease of the buttock. You can usually put one finger on it.',
        aForB: 'Deeper and higher in the middle of the buttock, over the piriformis. Harder to localise with one finger, often described as a deep cramp.',
      },
      {
        aspect: 'Does it travel down the leg',
        aForA: 'Usually stays local to the sitting bone, though it can ache down the back of the thigh. It rarely behaves like a nerve.',
        aForB: 'Often radiates down the back of the leg with a nerve quality, sometimes with tingling or numbness, because the sciatic nerve is involved.',
      },
      {
        aspect: 'Sitting',
        aForA: 'Worse the longer you sit, especially on hard surfaces, because sitting compresses the tendon directly against the sitting bone. Perching on the edge of the seat helps.',
        aForB: 'Also worse with prolonged sitting, but driven by pressure on the deep gluteal muscles and nerve. Crossing the legs or a wallet in the back pocket can be a clear trigger.',
      },
      {
        aspect: 'What makes it flare',
        aForA: 'Running, especially uphill or at speed, lunging, deep squatting, and stretching the hamstring by reaching for the toes.',
        aForB: 'Positions that load the piriformis: prolonged sitting, climbing stairs or hills, and getting in and out of a car. A straight hamstring stretch is less specifically provocative.',
      },
      {
        aspect: 'Stretching it',
        aForA: 'Deep hamstring stretches, such as reaching for the toes, often aggravate it, because they squeeze and pull on an already irritable tendon at the sitting bone.',
        aForB: 'Some people find a gentle hip stretch, knee drawn toward the opposite shoulder, eases it briefly; for others, stretches that tension the nerve make the leg symptoms worse.',
      },
      {
        aspect: 'Nerve symptoms',
        aForA: 'Numbness, pins and needles, and true nerve pain are not typical. If they appear, the sciatic nerve next to the tendon may be secondarily irritated.',
        aForB: 'Nerve-type symptoms are part of the picture: a sciatica-like ache, tingling, or a sense of the leg being heavy or asleep.',
      },
      {
        aspect: 'Typical story',
        aForA: 'A runner who added hills or speed, or someone whose job or commute turned sitting-heavy, with pain creeping in at the sitting bone.',
        aForB: 'Insidious deep buttock pain, often after long periods of sitting, sometimes after a fall onto the buttock, with leg symptoms that come and go.',
      },
    ],
    specificTests: [
      {
        test: 'Pointing to the pain',
        whatItShows:
          'A single finger landing right on the sitting bone points to the hamstring tendon. A flatter hand over the middle of the buttock points more to the deep gluteal muscles.',
      },
      {
        test: 'Bent-knee stretch and Puranen-Orava tests',
        whatItShows:
          'Loaded hamstring-lengthening tests that reproduce pain at the sitting bone support proximal hamstring tendinopathy.',
      },
      {
        test: 'Hamstring load tests, such as a long-lever or single-leg bridge',
        whatItShows:
          'Pain at the sitting bone when the hamstring has to produce force points to the tendon, since tendinopathy is load-related.',
      },
      {
        test: 'FAIR position and seated piriformis tests',
        whatItShows:
          'Taking the hip into flexion, adduction, and internal rotation tensions the piriformis and can reproduce deep buttock and leg symptoms in piriformis syndrome.',
      },
      {
        test: 'Neural tests, including straight leg raise and slump',
        whatItShows:
          'I use these to judge how much the sciatic nerve is involved. A clearly neural response shifts the picture toward a deep gluteal or nerve-driven problem rather than a pure tendon.',
      },
    ],
    whenItIsA:
      'Your pattern more likely fits proximal hamstring tendinopathy if the pain is pinpoint on the sitting bone, sitting on a hard chair is the worst part of your day, running or lunging provokes it, stretching the hamstring makes it worse rather than better, and there are no real nerve symptoms. It often starts after a jump in running volume, hills, or speed, or a new sitting-heavy routine.',
    whenItIsB:
      'Your pattern more likely fits piriformis syndrome if the pain sits deeper and higher in the buttock, travels down the leg with a nerve quality, is hard to put a finger on, and comes with tingling or a heavy, asleep feeling. Prolonged sitting, crossing the legs, or driving tend to set it off, and a gentle piriformis stretch may give brief relief.',
    whenUncertain:
      'These genuinely overlap, and it is common to be unsure, because both hurt with sitting and both sit in the deep buttock. A short in-person assessment can narrow the possibilities, and some cases need reassessment as they respond. I localise the tender point, load the hamstring to see if the tendon is the driver, put the hip through the positions that tension the piriformis, and run neural tests to judge how much the sciatic nerve is involved. I also clear the lower back first, since a disc or nerve root can mimic both. Stretching the wrong structure, particularly repeated hard hamstring stretches when the tendon is the problem, can keep it going.',
    overlap:
      'These can coexist, and they share a neighbourhood: the sciatic nerve runs right beside both the hamstring origin and the piriformis. A tendon problem at the sitting bone can secondarily irritate the nerve, and a sensitive nerve can make the whole area guard. The umbrella term deep gluteal syndrome is sometimes used precisely because these structures sit so close together and can be hard to separate. That is why I treat the dominant driver first rather than chasing every tender spot.',
    redFlags: [
      {
        sign: 'A sudden pop or tearing feeling at the sitting bone during a sprint, slip, or forced split, often with bruising down the back of the thigh',
        action: 'Possible proximal hamstring avulsion. Get an urgent surgical opinion within days, through your family doctor, a sports medicine physician or emergency. Not every avulsion needs surgery, but if repair is chosen it is easier when done early.',
      },
      {
        sign: 'New trouble starting to pass urine or feeling it pass, new loss of bladder or bowel control, new numbness between the legs or around the back passage, new loss of genital sensation or sexual function, or severe or rapidly worsening weakness in both legs',
        action: 'Go to emergency now. These can be signs of cauda equina syndrome.',
      },
      {
        sign: 'A new foot drop (the foot catches or slaps when you walk), or weakness in one leg that is getting worse',
        action: 'Same-day medical assessment.',
      },
      {
        sign: 'Fever, unexplained weight loss, a history of cancer, or constant pain at night that does not ease with rest',
        action: 'See your family doctor before starting physiotherapy.',
      },
    ],
    relatedTreatmentIds: [
      'exercise-therapy',
      'soft-tissue-myofascial-release',
      'dry-needling',
      'sports-rehab-return-to-sport',
    ],
    faqs: [
      {
        question: 'Both hurt when I sit. How is that supposed to help me tell them apart?',
        answer:
          'Sitting is the overlap, so I look at what else is going on. Tendon pain is pinpoint on the sitting bone and gets worse with running and hamstring stretching. Piriformis pain sits higher and deeper, is harder to localise, and tends to send symptoms down the leg. If sitting plus a nerve quality down the leg is the story, it leans piriformis. If sitting plus pinpoint sitting-bone pain that hates running and stretching is the story, it leans tendon.',
      },
      {
        question: 'I have tingling down my leg. Does that rule out the hamstring tendon?',
        answer:
          'Not entirely, but it shifts the odds. A true tendon problem is usually local and does not produce nerve symptoms on its own. When tingling or numbness is present, the sciatic nerve is involved, which points toward piriformis syndrome or the broader deep gluteal picture, or toward a source in the lower back. That is worth assessing properly rather than guessing.',
      },
      {
        question: 'Should I stretch it?',
        answer:
          'Avoid stretches that bring on your familiar sitting-bone pain or increase pain or tingling down the leg. Deep hamstring stretches often aggravate an irritable hamstring tendon. With a deep gluteal problem, some people find a gentle hip stretch eases it, while for others stretching irritates the nerve. Exercise choice and range depend on the assessment and how you respond, not just on the label, so it is worth knowing what you are dealing with before you build a routine around stretching.',
      },
      {
        question: 'Could it be my back instead?',
        answer:
          'Yes, and that is the first thing I rule out. A lower lumbar disc or an irritated nerve root can refer pain into the buttock and down the leg and mimic both of these. The clues are whether bending, coughing, or sneezing change your symptoms and whether the pain follows a clear nerve path. Clearing the back first stops a lot of buttock pain being treated in the wrong place.',
      },
      {
        question: 'Can I have both at once?',
        answer:
          'You can. The hamstring origin and the piriformis sit close together with the sciatic nerve running between them, so an irritable tendon and a guarded, sensitive deep gluteal region can travel together. When that happens, I work out which one is driving most of your symptoms and treat that first, then address the other as it settles.',
      },
      {
        question: 'How long does each take to settle?',
        answer:
          'Both ask for patience. Proximal hamstring tendinopathy often improves over a few months rather than weeks, with gradual loading and changes to sitting. Piriformis and deep gluteal symptoms can settle sooner once the aggravating positions and nerve sensitivity are managed, but they can come back if the load and habits that set them off do not change. Rest alone is often not enough for either.',
      },
    ],
    evidenceNotes: [
      {
        claim:
          'Proximal hamstring tendinopathy typically presents as deep buttock pain where the hamstrings attach to the sitting bone, is load-related, and is commonly managed with education and progressive tendon loading rather than rest. Research has not established a single best program.',
        source:
          'Goom TS, Malliaras P, Reiman MP, Purdam CR. "Proximal Hamstring Tendinopathy: Clinical Aspects of Assessment and Management." J Orthop Sports Phys Ther 2016; 46(6): 483-493.',
        refs: [{ pmid: '27084841' }],
      },
      {
        claim:
          'In a randomised trial of 100 people with proximal hamstring tendinopathy, six sessions of individualised physiotherapy and six sessions of shockwave therapy, both with standardised education, gave similar results on the main outcomes up to 52 weeks.',
        source:
          'Rich A, Ford J, Cook J, Hahne A. "Physiotherapy Compared With Shockwave Therapy for the Treatment of Proximal Hamstring Tendinopathy: A Randomized Controlled Trial." Am J Sports Med 2025; 53(14): 3396-3407.',
        refs: [{ pmid: '41243328' }],
      },
      {
        claim:
          'Piriformis syndrome is characterised by a cluster of features: buttock pain, pain aggravated by sitting, tenderness near the greater sciatic notch, and pain on maneuvers that increase piriformis tension. A straight leg raise does not rule it out.',
        source:
          'Hopayian K, Danielyan A. "Four symptoms define the piriformis syndrome: an updated systematic review of its clinical features." Eur J Orthop Surg Traumatol 2018; 28(2): 155-164.',
        refs: [{ pmid: '28836092' }],
      },
      {
        claim:
          'Deep gluteal syndrome is an umbrella for non-discogenic posterior hip pain from sciatic nerve entrapment and explicitly includes both piriformis syndrome and a proximal hamstring source, which is one reason these are frequently confused. Excluding spinal causes and imaging the pelvis aid diagnosis.',
        source:
          'Park JW, Lee YK, Lee YJ, et al. "Deep gluteal syndrome as a cause of posterior hip pain and sciatica-like pain." Bone Joint J 2020; 102-B(5): 556-567.',
        refs: [{ pmid: '32349600' }],
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
