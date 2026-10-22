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

import type { SourceRef } from './source-refs';

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
  /** A plate of this section's own, used instead of the guide's plate. */
  plate?: { src: string; caption: string };
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
  research: Array<{ title: string; source: string; year: number; summary: string; refs?: SourceRef[] }>;
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
                text: 'Exercise had a similar effect whatever the X-ray grade, and programs that focused on the quadriceps and were supervised at least three times a week did better (Juhl et al., 2014). Loading exercise did not harm cartilage on MRI (Bricca et al., 2019). Pain can rise a little when you start. Across trials the average benefit is modest, and people with more pain at the start tend to gain more (Lawford et al., 2024; Holden et al., 2023).',
              },
              {
                lead: 'Even with severe changes.',
                text: 'In a trial of people already eligible for knee replacement, a 12-week program of exercise, education and diet support improved pain and function, and two in three of them had not had the operation two years later (Skou et al., 2015 and 2018).',
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
            text: 'I begin with how the knee feels and behaves: where the pain sits and whether it matches the part of the joint the report names, how long the knee is stiff in the morning, whether it swells, gives way or locks, and what you have already tried. I also ask what you were told about the X-ray, because words like “bone on bone” can affect what people feel safe doing.',
          },
          {
            type: 'p',
            text: 'On examination I look at alignment and walking, check for swelling and warmth, measure range of motion, and test quadriceps and hip strength, balance and single-leg control. I screen the hip and lower back, because both can send pain to the knee. I record a few measures I can repeat, such as a 30-second sit-to-stand and a timed walk, so you can see whether the plan is working.',
          },
          {
            type: 'p',
            text: 'The plan is usually built around strengthening, especially the quadriceps, with walking or cycling and balance work, progressed as the knee tolerates it. Joint mobilization and soft tissue work can sit alongside the exercise where they make it easier. I explain what to expect when the knee flares, and I coordinate with your family doctor when medication, an injection or a surgical opinion is worth discussing.',
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
          'National guideline. Diagnose osteoarthritis clinically without routine imaging in people aged 45 or over with typical symptoms, offer tailored therapeutic exercise to everyone with osteoarthritis along with information and support, support weight loss where relevant, and base referral for joint replacement on a clinical assessment of symptoms and quality of life rather than on numerical severity scores.',
        refs: [{ href: 'https://www.nice.org.uk/guidance/ng226', label: 'NICE NG226' }],
      },
      {
        title: 'Association between radiographic features of knee osteoarthritis and pain: results from two cohort studies',
        source: 'Neogi T et al., BMJ',
        year: 2009,
        summary:
          'Comparing each person’s two knees, X-ray severity was strongly linked to knee pain, and joint space narrowing more strongly than bony spurs.',
        refs: [{ pmid: '19700505' }],
      },
      {
        title: 'The discordance between clinical and radiographic knee osteoarthritis: a systematic search and summary of the literature',
        source: 'Bedson J, Croft PR, BMC Musculoskeletal Disorders',
        year: 2008,
        summary:
          'Across studies, between 15 and 81 percent of people with X-ray knee osteoarthritis had pain. The authors advise against using knee X-ray results in isolation.',
        refs: [{ pmid: '18764949' }],
      },
      {
        title: 'Impact of exercise type and dose on pain and disability in knee osteoarthritis',
        source: 'Juhl C et al., Arthritis & Rheumatology',
        year: 2014,
        summary:
          'Systematic review and meta-regression of 48 trials. Exercise had a similar effect regardless of X-ray severity; quadriceps-focused and supervised programs did better.',
        refs: [{ pmid: '24574223' }],
      },
      {
        title: 'A randomized, controlled trial of total knee replacement',
        source: 'Skou ST et al., New England Journal of Medicine',
        year: 2015,
        summary:
          'People eligible for knee replacement who had 12 weeks of non-surgical care improved, and at two years two in three had not had the operation (2-year follow-up, Osteoarthritis and Cartilage, 2018). Those who had the replacement followed by the same program improved more, with more serious adverse events.',
        refs: [{ pmid: '26488691' }, { pmid: '29723634' }],
      },
      {
        title: 'Exercise for osteoarthritis of the knee',
        source: 'Lawford BJ et al., Cochrane Database of Systematic Reviews',
        year: 2024,
        summary:
          'Review of 139 trials. Compared with usual care, exercise improved function and may improve pain; on average the benefits were modest.',
        refs: [{ pmid: '39625083' }],
      },
    ],
    relatedHeading: 'Related knee conditions',
    relatedIntro: 'Condition pages for the problems most often behind a report that mentions joint space narrowing.',
    relatedConditionSlugs: ['knee-osteoarthritis', 'knee-pain-patellofemoral', 'meniscus-tears'],
    treatmentsHeading: 'Treatments that commonly sit inside a plan for knee osteoarthritis',
    treatmentsIntro: 'None of these is a stand-alone fix. They are pieces that fit inside a plan built around exercise.',
    relatedTreatmentIds: ['exercise-therapy', 'joint-mobilization', 'post-surgical-rehabilitation'],
  },
  {
    slug: 'heel-spur',
    title: 'Plantar Calcaneal Spur (Heel Spur) on X-Ray in Burlington',
    description:
      'A plantar calcaneal spur on a foot X-ray report: what the wording means, how it relates to heel pain, and physiotherapy in Burlington. Direct billing.',
    h1: 'Plantar Calcaneal Spur (Heel Spur)',
    lede:
      'A plantar calcaneal spur is a small ledge of extra bone on the underside of the heel bone, seen on a side view X-ray. Heel spurs often show up in people who have no heel pain. The phrase describes the shape of the bone; on its own it does not explain the pain or decide the treatment. This guide covers what the wording on the report means, what it does and does not tell you, and what the treatment guidelines recommend.',
    breadcrumbLabel: 'Heel Spur',
    region: 'foot and ankle',
    hub: { label: 'Foot & Ankle Pain', href: '/conditions/foot-ankle-pain' },
    plate: { src: '/images/guides/heel-spur.webp', caption: 'Heel bone and sole' },
    about: {
      name: 'Plantar calcaneal spur',
      alternateName: [
        'Heel spur',
        'Calcaneal spur',
        'Calcaneal enthesophyte',
        'Plantar calcaneal enthesophyte',
        'Inferior calcaneal spur',
      ],
    },
    redFlags: [
      {
        sign: 'Heel pain after a fall, a jump from a height or a snap or pop, or you cannot walk or stand on tiptoe',
        action: 'Seek same-day medical assessment and keep weight off the foot until it is checked.',
      },
      {
        sign: 'A newly hot, red or swollen heel or foot, with or without a fever, or feeling unwell',
        action: 'Seek same-day medical assessment to rule out infection, or go to emergency if you feel unwell.',
      },
      {
        sign: 'Diabetes and a new wound, blister or change in skin colour on the foot',
        action: 'Get it seen today by your doctor or diabetes foot care team. Foot problems can be more serious with diabetes.',
      },
      {
        sign: 'Pain that keeps building after more walking or running, or a move to harder ground, with pain when the sides of the heel are squeezed',
        action: 'See your doctor to rule out a stress fracture of the heel bone before loading it further.',
      },
      {
        sign: 'Burning, tingling or numbness in the heel or sole',
        action: 'See your family doctor. A trapped nerve in the foot, or a nerve from the lower back, needs to be checked.',
      },
      {
        sign: 'Pain in both heels with morning stiffness over half an hour, back pain at night, or other swollen joints',
        action: 'See your family doctor to check for an inflammatory arthritis.',
      },
      {
        sign: 'A history of cancer, unexplained weight loss, or constant pain at night that is not linked to activity',
        action: 'See your family doctor for a medical workup before starting physiotherapy.',
      },
    ],
    sections: [
      {
        id: 'report-wording',
        heading: 'What “plantar calcaneal spur” means on an X-ray report',
        icon: 'clipboard',
        showPlate: true,
        blocks: [
          {
            type: 'p',
            lead: 'What it is.',
            text: 'The calcaneus is the heel bone. A plantar calcaneal spur is a small outgrowth of bone on its underside, pointing forward toward the arch. It shows on a side view of the foot or ankle, usually taken standing. It usually grows roughly parallel to the ground rather than down into the sole.',
          },
          {
            type: 'p',
            lead: 'Where it sits.',
            text: 'A spur is often pictured growing where the plantar fascia pulls on the heel. In anatomy studies, most spurs sat just above the plantar fascia, among the attachments of the small muscles of the sole, and only a few sat inside the fascia itself (Abreu et al., 2003; Kumai and Benjamin, 2002). The internal structure of the bone lines up with the load of standing and walking rather than with the pull of the fascia, which has led researchers to read the spur as a response to load through the heel (Li and Muehleman, 2007; Menz et al., 2008). The samples were small, and the cause is still debated.',
          },
          {
            type: 'p',
            lead: 'The words that come with it.',
            text: 'Reports name the same finding several ways and add a few standard words. These are the ones you are most likely to see.',
          },
          {
            type: 'table',
            columns: ['On the report', 'What it means'],
            rows: [
              {
                term: 'Plantar calcaneal spur, plantar heel spur, inferior or subcalcaneal spur',
                meaning: 'Bony outgrowth on the underside of the heel bone. All of these name the same finding.',
              },
              {
                term: 'Calcaneal enthesophyte or plantar calcaneal enthesophyte',
                meaning:
                  'The same finding, named after where it grows. An enthesis is the place where a tendon, ligament or fascia attaches to bone.',
              },
              {
                term: 'Calcaneal spurring',
                meaning: 'The same finding. “Spurring” is the usual radiology wording.',
              },
              {
                term: 'Is noted, is seen, is present, is evident',
                meaning: 'The radiologist saw it. On their own, these words do not signal concern or urgency.',
              },
              {
                term: 'Small, moderate or large',
                meaning:
                  'The reader’s own description of size. There is no standard cut-off. Research sometimes sorts spurs as under 5 mm, 5 to 10 mm and over 10 mm (Ahmad et al., 2016).',
              },
              {
                term: 'A measurement in millimetres',
                meaning: 'The length of the spur from its base to its tip on the side view.',
              },
              {
                term: 'Bilateral',
                meaning: 'Spurs on both heels. Common, especially with age.',
              },
              {
                term: 'Degenerative or enthesopathic change',
                meaning: 'Change at the attachment that tends to come with load and age. It is not a diagnosis on its own.',
              },
              {
                term: 'Posterior, dorsal or Achilles enthesophyte',
                meaning:
                  'A spur at the back of the heel, where the Achilles tendon attaches. A different place and a different problem, covered in the next section.',
              },
              {
                term: 'Plantar fascia thickening (ultrasound or MRI)',
                meaning:
                  'The fascia is thicker than usual where it attaches to the heel. More than 4 mm is the usual research threshold (McMillan et al., 2009). It often comes with a spur.',
              },
            ],
          },
        ],
      },
      {
        id: 'back-of-heel',
        heading: 'A spur at the back of the heel is a separate finding',
        icon: 'info',
        plate: { src: '/images/guides/posterior-heel-spur.webp', caption: 'Achilles attachment' },
        blocks: [
          {
            type: 'p',
            lead: 'Where it sits.',
            text: 'A posterior, dorsal or Achilles enthesophyte grows where the Achilles tendon attaches to the back of the heel bone, pointing up into the lowest fibres of the tendon. It is a different place from a spur under the heel, and a different problem.',
          },
          {
            type: 'p',
            lead: 'What it goes with.',
            text: 'It is also common in people without symptoms. When the back of the heel hurts, it goes with insertional Achilles tendinopathy, which has its own plan. The [Achilles tendinopathy page](/conditions/achilles-tendinopathy) covers it. Reports often mention spurs at both sites together.',
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
            lead: 'It is common without pain.',
            text: 'How often spurs turn up depends on age and on who was X-rayed. In one study of people with pain in one heel, spurs were found in 85 percent of the painful feet and in 72 percent of the painless feet on the other side (Okcu et al., 2023). Spurs become more common with age and with higher body weight (Menz et al., 2008).',
          },
          {
            type: 'p',
            lead: 'It travels with heel pain, but is not shown to cause it.',
            text: 'People with heel pain on the underside of the heel are more likely to have a spur. A review of the imaging studies judged this “an association only and unlikely to be the cause of pain”, and found the spur of limited relevance to treatment unless it is fractured (Drake et al., 2022).',
          },
          {
            type: 'p',
            lead: 'It rarely comes alone.',
            text: 'In adults over 50 with foot pain, a spur on its own was found in 6 percent of feet. Much more often it sat alongside a thickened plantar fascia (Menz et al., 2019).',
          },
          {
            type: 'p',
            lead: 'Size is not a reliable guide on its own.',
            text: 'Some studies link longer spurs with more pain and others find no link, and in some treatment studies larger spurs improved more. Size has not shown a consistent link with how much it hurts or how well it recovers.',
          },
          {
            type: 'p',
            lead: 'It did not change the long-term outlook.',
            text: 'In a study that followed people with plantar fasciitis for 5 to 15 years, having a spur at the start made no difference to how they recovered (Hansen et al., 2018).',
          },
          {
            type: 'p',
            lead: 'It usually stays on the X-ray.',
            text: 'In treatment studies the spur mostly looked the same afterwards while the pain improved (Lee et al., 2003; Yalcin et al., 2012). Heel pain can improve without the spur changing.',
          },
        ],
      },
      {
        id: 'guidelines',
        heading: 'What the treatment guidelines recommend',
        icon: 'shield',
        intro:
          'Treatment is aimed at the painful heel, most often plantar fasciitis, not at the spur. The guidelines below do not change the plan because a spur is present (Koc et al., 2023; Morrissey et al., 2021).',
        blocks: [
          {
            type: 'list',
            items: [
              {
                lead: 'Education and load.',
                text: 'Understanding what the spur is and is not, and adjusting how much standing, walking and running the heel takes for a while, are part of core care in a best practice guide built from trials, clinicians and patients (Morrissey et al., 2021).',
              },
              {
                lead: 'Stretching and taping.',
                text: 'Plantar fascia and calf stretching and taping of the foot carry the strongest grade in the physical therapy guideline for heel pain, taping for short-term relief alongside other care (Koc et al., 2023).',
              },
              {
                lead: 'Strengthening.',
                text: 'The guideline recommends resistance training for the foot and ankle muscles. In one trial, high-load heel raises improved function faster than stretching at three months, with no difference at one year (Rathleff et al., 2015).',
              },
              {
                lead: 'Hands-on care.',
                text: 'Joint mobilization and soft tissue work for the foot, ankle and calf are recommended alongside exercise to ease pain and restore movement (Koc et al., 2023).',
              },
              {
                lead: 'Night splints and insoles.',
                text: 'Night splints are recommended for people who keep getting pain with the first steps in the morning. Insoles and heel cups are not recommended on their own for short-term relief, but can be added to other care (Koc et al., 2023).',
              },
              {
                lead: 'Shockwave.',
                text: 'Shockwave can be effective for heel pain that has not improved with core care, on low to moderate certainty evidence (Morrissey et al., 2021). Results were similar with and without a spur in several studies, and it does not reliably remove the spur.',
              },
              {
                lead: 'Injections.',
                text: 'A steroid injection may slightly reduce heel pain for about a month, on low quality evidence, and rare risks include rupture of the plantar fascia (David et al., 2017). It is arranged through your doctor.',
              },
              {
                lead: 'Surgery.',
                text: 'Considered for a small number of people after a long period of well-run non-surgical care, and decided with a surgeon. Removing the spur is not usually the aim, and in one series adding spur removal to fascia surgery was linked with slower recovery (Cooperman et al., 2025).',
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
                text: 'The report describes the spur as fractured or broken. That is rare, and it is managed as a fracture.',
              },
              {
                text: 'It describes an ill-defined spur, erosions, or spurs at several attachments, or mentions an inflammatory arthritis. That pattern can point to a reactive or psoriatic arthritis and needs a doctor’s assessment.',
              },
              {
                text: 'An MRI shows bone marrow oedema through the body of the heel bone, which can be a stress reaction, or a tear of the plantar fascia.',
              },
              {
                text: 'An MRI mentions wasting of a small muscle on the outer side of the sole (abductor digiti minimi), which can go with irritation of a nerve under the heel (Chundru et al., 2008).',
              },
              {
                text: 'The report flags something unrelated to the spur elsewhere in the bone. Ask the doctor who ordered the X-ray to go through it with you.',
              },
              {
                text: 'The pain does not follow the usual pattern of first-step pain under the heel, or has not improved after a fair trial of well-run care. Imaging and other diagnoses are worth reconsidering then (Koc et al., 2023).',
              },
            ],
          },
        ],
      },
      {
        id: 'approach',
        heading: 'How I approach a heel spur in clinic',
        icon: 'academic',
        consentNote: true,
        blocks: [
          {
            type: 'p',
            text: 'I begin with the heel itself: where exactly it hurts, whether the first steps in the morning or after sitting are the worst, how long you are on your feet in a day and on what surfaces, what shoes you wear, what changed before it started, and what you have already tried. I also ask what you were told about the spur, because the picture of a sharp point of bone can make people wary of walking on or loading the foot.',
          },
          {
            type: 'p',
            text: 'On examination I check where the tenderness is, test ankle and big toe movement, calf strength with single-leg heel raises, balance and how you walk. I screen for a stress fracture, a trapped nerve and a problem at the back of the heel, and for the lower back when the symptoms suggest it. I record a few measures I can repeat so you can see whether the plan is working.',
          },
          {
            type: 'p',
            text: 'The plan usually centres on the painful heel and can include explaining what the spur means, adjusting load for a while, calf and plantar fascia stretching, taping for short-term relief, and progressive strengthening of the calf and foot. Joint mobilization, soft tissue work and dry needling to the calf can sit alongside the exercise when they help. If the heel has not improved with that, shockwave can be a reasonable next step, and I can coordinate with your family doctor when an injection or a surgical opinion is worth discussing.',
          },
        ],
      },
    ],
    faqHeading: 'Heel spur questions I hear most',
    faqs: [
      {
        question: 'What does a plantar calcaneal spur mean on an X-ray?',
        answer:
          'A small outgrowth of bone on the underside of the heel bone, seen on the side view. It is common in people without heel pain, and it describes the shape of the bone rather than the cause of any pain.',
      },
      {
        question: 'What does “small plantar calcaneal spur is noted” mean?',
        answer:
          '“Noted” means the radiologist saw it, and “small” is their own description of size. There is no standard cut-off. A small spur is a common finding and does not by itself mean anything needs to be done.',
      },
      {
        question: 'Is a heel spur the same as plantar fasciitis?',
        answer:
          'No. They often turn up together, but a heel spur is a finding on the bone and plantar fasciitis is irritation of the thick band under the foot. People with heel pain are more likely to have a spur, but the spur is not shown to cause the pain.',
      },
      {
        question: 'Do heel spurs cause pain?',
        answer:
          'The evidence does not show that a spur causes pain on its own. Spurs are common in painless feet, and having one did not change long-term recovery in a 5 to 15 year study. The pain usually comes from the tissues around the heel.',
      },
      {
        question: 'Can a heel spur go away?',
        answer:
          'The spur usually stays on the X-ray. In treatment studies it mostly looked the same afterwards while the pain improved, so the aim is a heel that hurts less and works better, rather than a different X-ray.',
      },
      {
        question: 'What is the difference between a calcaneal enthesophyte and a heel spur?',
        answer:
          'They are two names for the same thing. “Enthesophyte” is the radiology word for bone growing where a tendon, ligament or fascia attaches. “Heel spur” is the everyday name for the same thing. An osteophyte is different: it forms at the edge of a joint.',
      },
      {
        question: 'What is a posterior calcaneal enthesophyte?',
        answer:
          'A spur at the back of the heel, where the Achilles tendon attaches. It is common without symptoms, and when it hurts it goes with insertional Achilles tendinopathy, which is managed differently from heel pain under the foot.',
      },
      {
        question: 'Does stretching help a heel spur?',
        answer:
          'Calf and plantar fascia stretching are recommended for heel pain under the foot. They treat the painful tissue, not the spur, which usually stays the same.',
      },
      {
        question: 'Does shockwave therapy work for heel spurs?',
        answer:
          'Shockwave can be effective for heel pain that has not improved with core care. It does not reliably remove the spur, and results were similar with and without a spur in several studies.',
      },
      {
        question: 'Do I need surgery to remove a heel spur?',
        answer:
          'Usually not. Removing the spur is not usually the aim of heel pain surgery, which is considered only after a long period of well-run non-surgical care, and decided with a surgeon.',
      },
      {
        question: 'Do I need an MRI or ultrasound?',
        answer:
          'Usually not. Imaging is generally not needed when the symptoms fit plantar fasciitis, unless care is not working or something else is suspected, such as a stress fracture, a tear or a trapped nerve.',
      },
    ],
    research: [
      {
        title: 'Heel Pain - Plantar Fasciitis: Revision 2023',
        source: 'Koc TA Jr et al., Journal of Orthopaedic & Sports Physical Therapy',
        year: 2023,
        summary:
          'Clinical practice guideline. Recommends manual therapy, plantar fascia and calf stretching and taping (strongest grade), resistance training for the foot and ankle, night splints for first-step pain, and orthoses only alongside other care. Imaging is usually not needed for typical plantar fasciitis unless care is not working.',
        refs: [{ pmid: '38037331' }],
      },
      {
        title: 'Management of plantar heel pain: a best practice guide informed by a systematic review, expert clinical reasoning and patient values',
        source: 'Morrissey D et al., British Journal of Sports Medicine',
        year: 2021,
        summary:
          'Core care is taping, stretching and individualised education, with footwear and load advice. People who do not improve may be offered shockwave, followed by custom orthoses. Imaging is confirmatory, not diagnostic.',
        refs: [{ pmid: '33785535' }],
      },
      {
        title: 'Medical imaging for plantar heel pain: a systematic review and meta-analysis',
        source: 'Drake C et al., Journal of Foot and Ankle Research',
        year: 2022,
        summary:
          'People with plantar heel pain were more likely to have a spur on X-ray, but the authors judged it an association only and unlikely to be the cause of pain, with limited relevance to treatment unless fractured.',
        refs: [{ pmid: '35065676' }],
      },
      {
        title: 'Coexistence of plantar calcaneal spurs and plantar fascial thickening in individuals with plantar heel pain',
        source: 'Menz HB et al., Rheumatology',
        year: 2019,
        summary:
          'In adults aged 50 and over with foot pain, spurs were usually found together with a thickened plantar fascia; a spur on its own was found in 6 percent of feet.',
        refs: [{ pmid: '30204912' }],
      },
      {
        title: 'Long-term prognosis of plantar fasciitis: a 5- to 15-year follow-up study of 174 patients with ultrasound examination',
        source: 'Hansen L et al., Orthopaedic Journal of Sports Medicine',
        year: 2018,
        summary: 'Having a heel spur at the start had no effect on long-term recovery.',
        refs: [{ pmid: '29536022' }],
      },
      {
        title: 'High-load strength training improves outcome in patients with plantar fasciitis: a randomized controlled trial with 12-month follow-up',
        source: 'Rathleff MS et al., Scandinavian Journal of Medicine & Science in Sports',
        year: 2015,
        summary:
          'High-load heel raises plus shoe inserts improved function more than stretching plus shoe inserts at three months, with no difference between the groups at one, six and twelve months.',
        refs: [{ pmid: '25145882' }],
      },
    ],
    relatedHeading: 'Related foot and ankle conditions',
    relatedIntro: 'Condition pages for the problems most often behind a report that mentions a heel spur.',
    relatedConditionSlugs: ['plantar-fasciitis', 'achilles-tendinopathy', 'tarsal-tunnel-syndrome'],
    treatmentsHeading: 'Treatments that commonly sit inside a plan for heel pain',
    treatmentsIntro: 'None of these is a stand-alone fix. They are pieces that fit inside a plan built around load, stretching and strengthening.',
    relatedTreatmentIds: ['exercise-therapy', 'joint-mobilization', 'dry-needling'],
  },
];

export function getReportGuide(slug: string): ReportGuide | undefined {
  return REPORT_GUIDES.find((g) => g.slug === slug);
}

export const reportGuideUrl = (slug: string) =>
  `https://www.kinetikarephysio.com/conditions/pain-guides/${slug}`;
