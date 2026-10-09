// Scan-report guides: pages that explain a phrase people read on their own
// X-ray, ultrasound or MRI report. They use the pain-guide look (same hero,
// section badges, cards, FAQ and evidence blocks) but are data, rendered by
// components/guides/ReportGuidePage.tsx, so a new guide is an entry here
// rather than another hand-built page. The two older guides
// (fluid-on-the-knee, pain-below-kneecap) are still hand-built and are left
// alone on purpose.
//
// Copy rules: first person singular, plain, no em dashes, "can" rather than
// "is effective", every study named in the text appears in `research` or is a
// guideline. Inline links use [text](/path).

export type GuideIcon =
  | 'clipboard'
  | 'info'
  | 'scale'
  | 'shield'
  | 'warning'
  | 'academic';

export type GuideBlock =
  | { type: 'p'; lead?: string; text: string }
  | { type: 'list'; items: Array<{ lead?: string; text: string }> }
  | {
      type: 'table';
      columns: [string, string];
      rows: Array<{ term: string; meaning: string }>;
    };

export interface GuideSection {
  id: string;
  heading: string;
  icon: GuideIcon;
  intro?: string;
  blocks: GuideBlock[];
  /** Float the guide's engraved plate beside this section's text. */
  showPlate?: boolean;
  consentNote?: boolean;
}

export interface ReportGuide {
  slug: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  breadcrumbLabel: string;
  /** Used in "Assessing and treating {region} pain" lines. */
  region: string;
  hub: { label: string; href: string };
  plate?: { src: string; caption: string };
  about: { name: string; alternateName: string[] };
  redFlags: Array<{ sign: string; action: string }>;
  sections: GuideSection[];
  faqHeading: string;
  faqs: Array<{ question: string; answer: string }>;
  research: Array<{ title: string; source: string; year: number; summary: string }>;
  relatedHeading: string;
  relatedIntro: string;
  relatedConditionSlugs: string[];
  treatmentsHeading: string;
  treatmentsIntro: string;
  relatedTreatmentIds: string[];
}

export const REPORT_GUIDES: ReportGuide[] = [
  {
    slug: 'joint-space-narrowing',
    title: 'Joint Space Narrowing in the Knee (X-Ray) in Burlington',
    description:
      'Joint space narrowing on a knee X-ray report: what the wording means, how it relates to pain, and physiotherapy in Burlington. Direct billing.',
    h1: 'Joint Space Narrowing in the Knee',
    lede:
      'Joint space narrowing means the gap between the bones of the knee looks thinner than expected on an X-ray. It is one of the usual X-ray signs of knee osteoarthritis. The phrase describes the picture, not how much the knee hurts or what it can still do. This guide covers what the wording on the report means, what it does and does not tell you, and what the treatment guidelines recommend.',
    breadcrumbLabel: 'Joint Space Narrowing',
    region: 'knee',
    hub: { label: 'Knee Pain', href: '/conditions/knee-pain' },
    plate: { src: '/images/guides/joint-space-narrowing.webp', caption: 'Knee joint' },
    about: {
      name: 'Knee joint space narrowing',
      alternateName: ['Joint space narrowing', 'Joint space loss', 'Reduced joint space in the knee'],
    },
    redFlags: [
      {
        sign: 'A newly hot, swollen knee, with or without a fever, or feeling unwell',
        action: 'Seek same-day medical assessment to rule out infection, or go to emergency if you feel unwell. Infection is possible even without a fever.',
      },
      {
        sign: 'Sudden severe pain or inability to bear weight, with or without a recent injury',
        action: 'Seek same-day medical assessment and keep weight off the leg until it is checked. A fracture, including an insufficiency fracture, needs to be ruled out.',
      },
      {
        sign: 'Morning stiffness lasting over half an hour, or several swollen joints',
        action: 'See your family doctor to check for an inflammatory arthritis.',
      },
      {
        sign: 'Rapid worsening, or a knee that is changing shape',
        action: 'Ask your doctor for a review before starting or changing rehab.',
      },
      {
        sign: 'A history of cancer, unexplained weight loss, or pain at night',
        action: 'See your family doctor for a medical workup before starting physiotherapy.',
      },
      {
        sign: 'Calf pain, warmth or swelling, particularly after surgery, travel or bed rest',
        action: 'Seek urgent medical assessment to rule out a blood clot.',
      },
    ],
    sections: [
      {
        id: 'report-wording',
        heading: 'What “joint space narrowing” means on an X-ray report',
        icon: 'clipboard',
        showPlate: true,
        blocks: [
          {
            type: 'p',
            lead: 'Where the gap is.',
            text: 'On an X-ray, bone shows up white, while cartilage and the menisci do not show at all. The dark band between the end of the thigh bone and the top of the shin bone is the joint space. When that band looks thinner than expected, the report calls it joint space narrowing. It is read as a sign that the cartilage has thinned, or that a meniscus has worn or shifted out of the joint, because the gap is made up of both (Hunter et al., 2006).',
          },
          {
            type: 'p',
            lead: 'The words that come with it.',
            text: 'Reports describe where the narrowing is and how much there is. These are the terms you are most likely to see.',
          },
          {
            type: 'table',
            columns: ['On the report', 'What it means'],
            rows: [
              {
                term: 'Medial compartment',
                meaning:
                  'The inner side of the knee, between the thigh bone and shin bone. The most common place for narrowing in osteoarthritis.',
              },
              { term: 'Lateral compartment', meaning: 'The outer side of the knee.' },
              {
                term: 'Patellofemoral',
                meaning:
                  'The joint between the kneecap and the front of the thigh bone. It only shows on a side or skyline view, so a single front view can miss it (Duncan et al., 2006).',
              },
              {
                term: 'Bicompartmental or tricompartmental',
                meaning: 'Two, or all three, of those areas are involved. It describes where, not how severe.',
              },
              { term: 'Minimal, mild or early', meaning: 'A small reduction in the gap.' },
              { term: 'Moderate', meaning: 'Definite narrowing.' },
              {
                term: 'Severe, marked or “bone on bone”',
                meaning: 'Little or no visible gap left in that part of the knee.',
              },
              {
                term: 'Osteophytes or spurring',
                meaning:
                  'Small bony lips at the edges of the joint. Together with narrowing, they are the main X-ray signs of osteoarthritis.',
              },
              { term: 'Subchondral sclerosis', meaning: 'Denser bone just under the joint surface.' },
              {
                term: 'Joint effusion',
                meaning:
                  'Extra fluid in the joint. The [suprapatellar effusion guide](/conditions/pain-guides/fluid-on-the-knee) covers this one.',
              },
              {
                term: 'Standing or weight-bearing view',
                meaning:
                  'The X-ray was taken standing. Standing views show more narrowing than lying views and are the better guide to it.',
              },
            ],
          },
          {
            type: 'p',
            lead: 'Kellgren-Lawrence grades.',
            text: 'Some reports give an overall grade from 0 to 4. Grade 0 means no changes of osteoarthritis and grade 1 means doubtful changes. Grade 2 means definite bony spurs and possible narrowing, and is the usual threshold for calling it osteoarthritis on an X-ray. Grade 3 means definite narrowing with several spurs, and grade 4 means marked narrowing with changes in the shape of the bone ends (Kellgren and Lawrence, 1957).',
          },
          {
            type: 'p',
            lead: 'The same knee can be worded differently.',
            text: 'The severity words are not standardised, and agreement between readers varies (Riddle et al., 2013). A change in wording from one report to the next is not proof that the knee has changed.',
          },
        ],
      },
      {
        id: 'what-it-tells-you',
        heading: 'What it does and does not tell you',
        icon: 'scale',
        blocks: [
          {
            type: 'p',
            lead: 'It is not a measure of pain.',
            text: 'Across groups of people, X-ray findings and pain match loosely. In a large US survey, fewer than half of the people whose X-rays showed knee osteoarthritis reported knee pain, and most people with knee pain had X-rays that did not show it (Hannan et al., 2000).',
          },
          {
            type: 'p',
            lead: 'Within one person, it does relate to pain.',
            text: 'When researchers compared the two knees of the same person, the knee with more narrowing was much more likely to be the painful one, and narrowing was linked to pain more strongly than bony spurs were (Neogi et al., 2009).',
          },
          {
            type: 'p',
            lead: 'It is common with age.',
            text: 'In the Framingham study, 27 percent of people under 70 and 44 percent of people 80 and older had X-ray changes of knee osteoarthritis, most of them without knee symptoms (Felson et al., 1987).',
          },
          {
            type: 'p',
            lead: 'It does not predict a steady decline.',
            text: 'In a study that followed people with knee osteoarthritis for six years, pain stayed fairly stable for most of them, and none of the groups showed substantial worsening (Collins et al., 2014).',
          },
          {
            type: 'p',
            lead: 'An X-ray cannot see cartilage.',
            text: 'The gap is an indirect measure, and it includes the menisci. X-rays also miss most of the cartilage change that MRI can show (Amin et al., 2005).',
          },
          {
            type: 'p',
            lead: 'Where the grade does matter.',
            text: 'If knee replacement is being considered, people with more severe X-ray changes tend to do better after surgery than people with early changes (Keurentjes et al., 2013). The decision to refer is still based on symptoms and how much they affect your life, not on the X-ray grade (NICE, 2022).',
          },
          {
            type: 'p',
            lead: 'It is not expected to reverse.',
            text: 'No standard treatment has been shown to restore the joint space on X-ray. Pain and function can still improve without the X-ray changing.',
          },
        ],
      },
      {
        id: 'guidelines',
        heading: 'What the treatment guidelines recommend',
        icon: 'shield',
        intro:
          'The main guidelines agree on the first line of care at every X-ray grade: information about the condition, exercise, and weight management where weight is a factor (NICE, 2022; OARSI, 2019).',
        blocks: [
          {
            type: 'list',
            items: [
              {
                lead: 'Exercise.',
                text: 'Exercise had a similar effect whatever the X-ray grade, and programmes that focused on the quadriceps and were supervised at least three times a week did better (Juhl et al., 2014). Loading exercise did not harm cartilage on MRI (Bricca et al., 2019). Pain can rise a little when you start. Across trials the average benefit is modest, and people with more pain at the start tend to gain more (Lawford et al., 2024; Holden et al., 2023).',
              },
              {
                lead: 'Even with severe changes.',
                text: 'In a trial of people already eligible for knee replacement, a 12-week programme of exercise, education and diet support improved pain and function, and two in three of them had not had the operation two years later (Skou et al., 2015 and 2018).',
              },
              {
                lead: 'Weight.',
                text: 'For people carrying extra weight, losing more than 5 percent of body weight can improve function, and around 10 percent or more tends to give larger benefits (Christensen et al., 2007; Messier et al., 2018).',
              },
              {
                lead: 'Medication and injections.',
                text: 'Topical anti-inflammatories are a common next step, and a steroid injection can give short-term relief. These are arranged through your doctor (NICE, 2022).',
              },
              {
                lead: 'Not recommended.',
                text: 'Arthroscopic “clean-out” surgery for arthritic knees (Siemieniuk et al., 2017), hyaluronic acid injections (NICE, 2022), and platelet-rich plasma or stem cell injections (OARSI, 2019).',
              },
              {
                lead: 'A surgical opinion.',
                text: 'Worth asking for when symptoms substantially affect your quality of life and non-surgical care has not been enough. Your family doctor can arrange the referral.',
              },
            ],
          },
        ],
      },
      {
        id: 'closer-look',
        heading: 'When the report deserves a closer look',
        icon: 'warning',
        blocks: [
          {
            type: 'list',
            items: [
              {
                text: 'The narrowing is even across both sides of the knee, especially with “erosions”, or you have morning stiffness lasting well over half an hour or several swollen joints. That pattern can point to an inflammatory arthritis.',
              },
              {
                text: 'The report mentions chondrocalcinosis, calcium deposits in the cartilage, which can go with a crystal arthritis.',
              },
              {
                text: 'It describes collapse, flattening or a fracture line, or the pain came on suddenly and severely without an injury. Ask a doctor to review it promptly, the same day if the pain came on suddenly or you cannot bear weight. If an insufficiency fracture is suspected, the doctor may arrange an MRI, including when an initial X-ray does not explain the symptoms.',
              },
              {
                text: 'The changes have progressed quickly between reports, or the knee has started to change shape.',
              },
              {
                text: 'The knee is newly hot and swollen, with or without a fever, or you feel unwell. Seek same-day medical care.',
              },
              {
                text: 'The report says there is no narrowing but the symptoms continue. A normal X-ray does not rule out cartilage or meniscus problems, and a single front view can miss the kneecap joint (Guermazi et al., 2012; Duncan et al., 2006).',
              },
            ],
          },
        ],
      },
      {
        id: 'approach',
        heading: 'How I approach joint space narrowing in clinic',
        icon: 'academic',
        consentNote: true,
        blocks: [
          {
            type: 'p',
            text: 'I start with the knee, not the report. Where the pain sits and whether it matches the part of the joint the report names, how long the knee is stiff in the morning, whether it swells, gives way or locks, and what you have already tried. I also ask what you were told about the X-ray, because words like “bone on bone” shape what people feel safe doing.',
          },
          {
            type: 'p',
            text: 'On examination I look at alignment and walking, check for swelling and warmth, measure range of motion, and test quadriceps and hip strength, balance and single-leg control. I screen the hip and lower back, because both can send pain to the knee. I record a few measures I can repeat, such as a 30-second sit-to-stand and a timed walk, so you can see whether the plan is working.',
          },
          {
            type: 'p',
            text: 'The plan is built around strengthening, especially the quadriceps, with walking or cycling and balance work, progressed as the knee tolerates it. Joint mobilization and soft tissue work sit alongside the exercise where they make it easier. I explain what to expect when the knee flares, and I coordinate with your family doctor when medication, an injection or a surgical opinion is worth discussing.',
          },
        ],
      },
    ],
    faqHeading: 'Joint space narrowing questions I hear most',
    faqs: [
      {
        question: 'What does joint space narrowing in the knee mean?',
        answer:
          'The gap between the thigh bone and shin bone, or between the kneecap and thigh bone, looks thinner than expected on an X-ray. It is read as thinning of the cartilage or a worn or shifted meniscus, and it is one of the standard X-ray signs of knee osteoarthritis.',
      },
      {
        question: 'Is joint space narrowing the same as arthritis?',
        answer:
          'It is one X-ray feature of osteoarthritis, not the diagnosis on its own. Osteoarthritis is diagnosed from your age, symptoms and examination, and the usual X-ray threshold also needs definite bony spurs. Narrowing that is even across the whole knee can come from an inflammatory arthritis instead, which needs a doctor’s assessment.',
      },
      {
        question: 'Does joint space narrowing cause pain?',
        answer:
          'Not reliably. Many people with narrowing have little or no pain, and many people with knee pain have normal X-rays. Within one person, the more narrowed knee does tend to be the more painful one.',
      },
      {
        question: 'What does mild joint space narrowing mean?',
        answer:
          'A small reduction in the gap. Severity words are not standardised between radiologists, and mild narrowing on its own may not meet the usual X-ray definition of osteoarthritis if there are no definite bony spurs.',
      },
      {
        question: 'What is medial joint space narrowing?',
        answer:
          'Narrowing on the inner side of the knee, between the thigh bone and shin bone. It is the most common pattern in knee osteoarthritis.',
      },
      {
        question: 'Does joint space narrowing mean bone on bone?',
        answer:
          '“Bone on bone” describes little or no visible gap in one part of the knee. “Severe” on a report may or may not mean that. Even at that stage, people eligible for knee replacement improved with structured non-surgical care in trials.',
      },
      {
        question: 'Can joint space narrowing be reversed?',
        answer:
          'No standard treatment has been shown to restore the gap on X-ray. Pain and function can improve with exercise and weight management without the X-ray changing.',
      },
      {
        question: 'Is it safe to exercise with joint space narrowing?',
        answer:
          'For most people, yes. Exercise had a similar effect whatever the X-ray grade, and loading exercise did not harm cartilage on MRI. Pain can rise a little when you start, so the plan is progressed gradually.',
      },
      {
        question: 'Do I need an MRI?',
        answer:
          'Usually not. Guidelines do not recommend routine imaging to diagnose or monitor osteoarthritis, and MRI shows changes in most knees over 50, including painless ones. MRI is useful when something else is suspected, such as an insufficiency fracture.',
      },
      {
        question: 'What does “no joint space narrowing” mean?',
        answer:
          'The gap looks normal on that view. It does not rule out cartilage or meniscus problems, and a single front view can miss changes behind the kneecap.',
      },
      {
        question: 'Do I need a knee replacement?',
        answer:
          'That depends on your symptoms and how much they affect your life after a fair trial of non-surgical care, not on the X-ray grade alone. If you get there, a surgical opinion is a reasonable next step, and your family doctor can arrange it.',
      },
    ],
    research: [
      {
        title: 'Osteoarthritis in over 16s: diagnosis and management (NG226)',
        source: 'National Institute for Health and Care Excellence (NICE)',
        year: 2022,
        summary:
          'National guideline. Diagnose osteoarthritis clinically without routine imaging, offer exercise and education to everyone, support weight loss where relevant, and base surgical referral on symptoms and quality of life rather than X-ray scores.',
      },
      {
        title: 'Association between radiographic features of knee osteoarthritis and pain: results from two cohort studies',
        source: 'Neogi T et al., BMJ',
        year: 2009,
        summary:
          'Comparing each person’s two knees, X-ray severity was strongly linked to knee pain, and joint space narrowing more strongly than bony spurs.',
      },
      {
        title: 'The discordance between clinical and radiographic knee osteoarthritis: a systematic search and summary of the literature',
        source: 'Bedson J, Croft PR, BMC Musculoskeletal Disorders',
        year: 2008,
        summary:
          'Across studies, between 15 and 81 percent of people with X-ray knee osteoarthritis had pain. The authors advise against using knee X-ray results in isolation.',
      },
      {
        title: 'Impact of exercise type and dose on pain and disability in knee osteoarthritis',
        source: 'Juhl C et al., Arthritis & Rheumatology',
        year: 2014,
        summary:
          'Systematic review and meta-regression of 48 trials. Exercise had a similar effect regardless of X-ray severity; quadriceps-focused and supervised programmes did better.',
      },
      {
        title: 'A randomized, controlled trial of total knee replacement',
        source: 'Skou ST et al., New England Journal of Medicine',
        year: 2015,
        summary:
          'People eligible for knee replacement who had 12 weeks of non-surgical care improved, and at two years two in three had not had the operation (2-year follow-up, Osteoarthritis and Cartilage, 2018).',
      },
      {
        title: 'Exercise for osteoarthritis of the knee',
        source: 'Lawford BJ et al., Cochrane Database of Systematic Reviews',
        year: 2024,
        summary:
          'Review of 139 trials. Compared with usual care, exercise improved function and may improve pain; on average the benefits were modest.',
      },
    ],
    relatedHeading: 'Related knee conditions',
    relatedIntro: 'Condition pages for the problems most often behind a report that mentions joint space narrowing.',
    relatedConditionSlugs: ['knee-osteoarthritis', 'knee-pain-patellofemoral', 'meniscus-tears'],
    treatmentsHeading: 'Treatments that commonly sit inside a plan for knee osteoarthritis',
    treatmentsIntro: 'None of these is a stand-alone fix. They are pieces that fit inside a plan built around exercise.',
    relatedTreatmentIds: ['exercise-therapy', 'joint-mobilization', 'post-surgical-rehabilitation'],
  },
];

export function getReportGuide(slug: string): ReportGuide | undefined {
  return REPORT_GUIDES.find((g) => g.slug === slug);
}

export const reportGuideUrl = (slug: string) =>
  `https://www.kinetikarephysio.com/conditions/pain-guides/${slug}`;
