import { JANE_ASSESSMENT_URL } from '@/lib/booking';
import { serializeJsonLd } from '@/lib/structured-data';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRightIcon, ChevronRightIcon, PhoneIcon } from '@heroicons/react/24/outline';
import {
  contentDateFor,
  SEO_AUTHOR,
  SEO_ORGANIZATION_ID,
  SEO_PERSON_ID,
  SEO_PUBLISHER,
} from '@/lib/seo-metadata';
import { getConditionBySlug } from '@/lib/conditions-data';
import { getTreatmentById } from '@/lib/treatments-data';
import {
  AccessClosing,
  Consent,
  Crumbs,
  cs,
  Evidence,
  Faqs,
  FlagsLink,
  g,
  GuideMain,
  Head,
  PlateFigure,
  RelatedConditions,
  RelatedTreatments,
  WarningPanel,
} from '@/components/guides/GuideKit';
import type { SourceRef } from '@/lib/source-refs';
const PAGE_URL = 'https://www.kinetikarephysio.com/conditions/pain-guides/fluid-on-the-knee';
const PAGE_TITLE = 'Suprapatellar Effusion (Fluid on the Knee) in Burlington';
const PAGE_DESCRIPTION =
  'Suprapatellar effusion is fluid in the pouch above the kneecap. Causes, symptoms, when imaging is needed, and physiotherapy in Burlington. Direct billing.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  authors: [SEO_AUTHOR],
  creator: SEO_AUTHOR.name,
  publisher: SEO_PUBLISHER,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    type: 'article',
    siteName: 'Kinetikare',
    authors: [SEO_AUTHOR.name],
    ...(contentDateFor('/conditions/pain-guides/fluid-on-the-knee')
      ? { modifiedTime: contentDateFor('/conditions/pain-guides/fluid-on-the-knee') }
      : {}),
    images: [
      {
        url: 'https://www.kinetikarephysio.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fluid on the Knee - Kareem Hassanein Physiotherapy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['https://www.kinetikarephysio.com/images/og-image.jpg'],
  },
  alternates: {
    canonical: PAGE_URL,
  },
};

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

interface OnsetGroup {
  heading: string;
  subtitle: string;
  description: string;
  causes: Array<{
    slug?: string;
    label: string;
    note: string;
    urgency?: 'emergency' | 'medical' | 'routine';
  }>;
}

const onsetGroups: OnsetGroup[] = [
  {
    heading: 'Sudden, within hours of injury',
    subtitle: 'Acute traumatic effusion, often blood inside the joint',
    description:
      'A knee that balloons up within an hour or two of a pop, a twist, or a direct blow usually has blood inside the joint (a haemarthrosis). Johnson in American Family Physician (2000) notes that rapid effusion within a few hours of injury carries a high likelihood of significant intra-articular damage. Most of these warrant medical assessment before, or alongside, starting physiotherapy.',
    causes: [
      {
        slug: 'acl-injuries',
        label: 'ACL tear',
        note: 'A pop, immediate swelling, and a knee that feels unstable on pivots. ACL rupture is the single most common cause of traumatic haemarthrosis in adults.',
      },
      {
        label: 'Patellar dislocation',
        note: 'Usually a pivot or landing where the kneecap visibly shifts out of place, often relocating on its own. Swelling and bruising follow quickly. If the kneecap stays out of place, go to emergency now and do not push it back yourself; if it went back in, get assessed the same day.',
        urgency: 'medical',
      },
      {
        label: 'Tibial plateau or osteochondral fracture',
        note: 'High-energy trauma, falls from a height, or a direct blow to the knee. Marked pain on weight-bearing and rapid swelling. Ottawa Knee Rules help decide on X-ray.',
        urgency: 'medical',
      },
    ],
  },
  {
    heading: 'Over 24 to 48 hours after injury',
    subtitle: 'Delayed effusion, often soft tissue or joint surface',
    description:
      'Swelling that creeps in over the day or two after a twist or fall more commonly reflects synovial fluid accumulating in response to injury, rather than frank bleeding. Meniscus tears, ligament sprains, and bone bruises typically show this pattern. Most of these are manageable with structured physiotherapy once serious injury has been ruled out.',
    causes: [
      {
        slug: 'meniscus-tears',
        label: 'Meniscus tears',
        note: 'Twisting injury with joint-line pain, a sense of catching or locking, and swelling that builds over the next day or two.',
      },
      {
        slug: 'mcl-lcl-sprains',
        label: 'MCL or LCL sprains',
        note: 'A valgus or varus force, pain on the inside or outside of the knee, and modest swelling that appears in the day after injury.',
      },
      {
        slug: 'pcl-injuries',
        label: 'PCL injury',
        note: 'Dashboard-type trauma or a fall onto a bent knee. Often modest swelling with a deep posterior ache and a sense of instability going downstairs.',
      },
      {
        label: 'Bone bruise or minor osteochondral injury',
        note: 'Trauma without frank fracture, with a deep dull ache and modest delayed swelling. Usually confirmed on MRI when imaging is warranted.',
      },
    ],
  },
  {
    heading: 'Gradual and chronic',
    subtitle: 'Recurring or ongoing swelling without a new injury',
    description:
      'A knee that swells after longer walks, flares after a busy week, or sits mildly puffy most of the time usually has a non-traumatic driver. Osteoarthritis is the most common cause in adults over 50, often with a Baker\'s cyst behind the knee. Inflammatory arthritis and crystal-related conditions such as gout show up differently and need a medical workup alongside physiotherapy.',
    causes: [
      {
        slug: 'knee-osteoarthritis',
        label: 'Knee osteoarthritis',
        note: 'Gradual ache and stiffness that worsens with longer activity and can produce recurrent low-grade swelling, sometimes with a Baker\'s cyst behind the knee.',
      },
      {
        label: 'Baker\'s (popliteal) cyst',
        note: 'Fullness or a soft lump behind the knee, often secondary to an intra-articular problem that is producing extra fluid. Rarely the primary issue on its own.',
      },
      {
        label: 'Inflammatory arthritis (rheumatoid, psoriatic, other)',
        note: 'Morning stiffness that lasts well over half an hour, multiple joints involved, and persistent effusion. Needs medical workup, and physiotherapy sits alongside medical management.',
        urgency: 'medical',
      },
      {
        label: 'Gout or other crystal arthropathy',
        note: 'Sudden, hot, exquisitely painful swelling, often at night. Needs medical assessment and pharmacological management. Physiotherapy is not the first line in an acute flare.',
        urgency: 'medical',
      },
    ],
  },
  {
    heading: 'Hot, red, and systemically unwell',
    subtitle: 'Same-day emergency care, not physiotherapy',
    description:
      'A hot, red, swollen joint with fever, chills, or feeling generally unwell is a medical red flag until proven otherwise. Mathews and colleagues in the Lancet (2010) describe bacterial septic arthritis as a medical emergency with significant morbidity. Go to emergency or urgent care the same day. A newly hot, red, markedly swollen knee needs the same-day check even without a fever, because a joint infection does not always cause one.',
    causes: [
      {
        label: 'Septic arthritis',
        note: 'Rapid onset of severe pain, marked swelling, warmth, redness, and systemic illness. A medical emergency requiring joint aspiration and antibiotics.',
        urgency: 'emergency',
      },
      {
        label: 'Reactive or infection-related arthritis',
        note: 'Follows a recent infection elsewhere (gut, urinary, or respiratory). It can look like a joint infection, so it needs the same urgent assessment. Physiotherapy is a later-stage adjunct.',
        urgency: 'emergency',
      },
    ],
  },
];

// Extra local-swelling causes (extra-articular) that come up for patients
interface Mimic {
  label: string;
  note: string;
  urgency?: 'medical' | 'routine';
}

const extraArticular: Mimic[] = [
  {
    label: 'Prepatellar bursitis (housemaid\'s knee)',
    note: 'A localised fluid-filled bump over the front of the kneecap, usually after prolonged kneeling. Feels soft and superficial, and unlike a true joint effusion the rest of the knee is not tight or full.',
  },
  {
    label: 'Infrapatellar bursitis (clergyman\'s knee)',
    note: 'Similar to above but sits just below the kneecap. Often seen in flooring, plumbing, or religious practices involving long kneeling.',
  },
  {
    label: 'Quadriceps or patellar tendon thickening',
    note: 'Not truly swelling, but a firm fullness above or below the kneecap from chronic tendon-related change. No fluid wave, no effusion tests.',
  },
];

// Red flags
const redFlags: Array<{ sign: string; action: string }> = [
  {
    sign: 'A newly hot, red, or markedly swollen knee, with or without a fever, especially if you feel unwell',
    action: 'Seek same-day medical assessment to rule out a joint infection, or go to emergency if you feel unwell. Infection is possible even without a fever.',
  },
  {
    sign: 'After an injury, the kneecap is still out of place, the knee looks deformed, or the foot is cold, pale or numb',
    action: 'Go to emergency now. Do not try to put the kneecap or knee back yourself.',
  },
  {
    sign: 'Sudden large swelling within an hour or two of trauma, with inability to bear weight',
    action: 'Get same-day assessment at urgent care or emergency for a significant knee injury. The clinician examines the knee and, where appropriate, uses the Ottawa Knee Rules to decide whether an X-ray is needed for a fracture. An ACL or other ligament injury needs its own examination and sometimes later imaging.',
  },
  {
    sign: 'Locked knee that cannot be straightened or bent fully after a twist',
    action: 'See a physician promptly. A mechanically locked knee often needs orthopaedic review before rehabilitation can progress safely.',
  },
  {
    sign: 'Calf pain, warmth, or swelling behind the knee, particularly after travel, surgery, or long periods of bed rest',
    action: 'Seek same-day medical assessment to rule out a blood clot (deep vein thrombosis) before starting physiotherapy. Sudden shortness of breath or chest pain means go to emergency now.',
  },
  {
    sign: 'Unexplained weight loss, night pain, or a history of cancer with new knee swelling',
    action: 'See your family physician for medical workup before starting physiotherapy.',
  },
  {
    sign: 'Numbness, weakness, or foot drop alongside the knee swelling that is getting worse',
    action: 'Get medical assessment the same day to check for nerve involvement or a nerve root problem in the lower back.',
  },
];

// FAQ
const faqs: Array<{ question: string; answer: string }> = [
  {
    question: 'What is a suprapatellar effusion?',
    answer:
      'It is extra fluid inside the knee joint, seen in the suprapatellar pouch, the pocket of the joint just above the kneecap. Scans pick up knee fluid most easily there because it is the largest pocket in the joint. The finding describes where the fluid is. The cause is something else, such as osteoarthritis, a meniscus or ligament injury, or an inflammatory condition, and the rest of the report and the history of the knee usually point to it.',
  },
  {
    question: 'Is a small suprapatellar effusion normal?',
    answer:
      'Every knee holds a small amount of fluid, and a trace or small effusion is a common finding on scans. On its own it does not mean the knee is damaged. It matters more if the knee is painful, stiff or visibly swollen, if it followed an injury, or if the report lists other findings such as a meniscus tear or osteoarthritis. If the knee feels fine and the report mentions only a small effusion, it is often an incidental finding.',
  },
  {
    question: 'How is a suprapatellar effusion treated?',
    answer:
      'By treating what is causing it. The fluid usually settles as the underlying problem settles. For an osteoarthritis flare, that means adjusting load for a while and then a graded exercise program, in line with the OARSI and NICE guidance. After an injury, it means a staged rehabilitation plan once a significant injury has been ruled out or managed. Compression, elevation and gentle movement help with comfort in the short term. Draining the knee is a medical decision, usually considered when the joint is very tense or the fluid needs testing. A newly hot or red knee needs same-day medical care, with or without a fever.',
  },
  {
    question: 'Is fluid on the knee the same as a knee effusion?',
    answer:
      'Yes. Fluid on the knee is the everyday term for a knee joint effusion, which simply means extra fluid inside the knee joint. Joint fluid tends to collect in the suprapatellar pouch above the kneecap. A larger effusion can make the whole knee feel full or tight; a small one can be much subtler. A bump directly over the front of the kneecap is usually prepatellar bursitis, which sits outside the joint and behaves differently.',
  },
  {
    question: 'Does knee swelling always mean a serious injury?',
    answer:
      'No. Most chronic, low-grade knee swelling in adults is driven by osteoarthritis or an irritable joint adapting to load. Swelling that comes on within an hour or two of a twist, a pop, or a direct blow is more concerning because it often means blood inside the joint, which points toward injuries like ACL tears or fractures. Those deserve a medical check before you lean into rehab.',
  },
  {
    question: 'Should I drain fluid from my knee?',
    answer:
      'That is a medical decision, not a physiotherapy one. Aspiration is mostly considered when a joint is very tense and painful, when diagnostic fluid analysis is needed (for example to confirm or exclude septic arthritis or gout), or when it is part of a corticosteroid injection. For most osteoarthritis effusions, the fluid settles as the underlying flare settles. I can help you decide whether it is worth raising with your physician, and I do not perform aspiration myself.',
  },
  {
    question: 'Will physiotherapy help if my knee keeps swelling?',
    answer:
      'Often yes, once serious or systemic causes have been ruled out. For osteoarthritis, the OARSI 2019 guidelines and NICE NG226 both position structured exercise, education, and self-management as first-line care, and recurrent low-grade swelling usually settles as the joint becomes better conditioned and load is better managed. For post-traumatic cases, structured rehabilitation is usually part of the pathway, sometimes alongside surgery for specific injuries.',
  },
  {
    question: 'Is ice or heat better for knee swelling?',
    answer:
      'Both are comfort measures. Ice is more useful in the first 48 to 72 hours after an acute injury or a reactive flare with obvious swelling, in short 10 to 15 minute bouts. Heat tends to be more comfortable for chronic stiffness and for osteoarthritis between flares. Neither changes the underlying pathology on its own. Compression, elevation, and getting the knee gently moving in a tolerable range tend to do more.',
  },
  {
    question: 'Do I need an MRI if my knee keeps filling with fluid?',
    answer:
      'Not always. Osteoarthritis-pattern swelling is usually diagnosed from the history and exam without routine imaging, and if imaging is needed, an X-ray comes before MRI. After acute trauma, the Ottawa Knee Rules help decide whether an X-ray is sensible, and MRI is considered when a significant internal injury is suspected or when a case is not tracking the way the clinical pattern predicted. When imaging would change the plan, I flag it to your family doctor or specialist and refer you.',
  },
];

// Evidence / research
interface ResearchItem {
  title: string;
  source: string;
  year: number;
  summary: string;
  refs?: SourceRef[];
}

const research: ResearchItem[] = [
  {
    title: 'Acute knee effusions: a systematic approach to diagnosis',
    source: 'Johnson MW, American Family Physician',
    year: 2000,
    summary:
      'Clinical review in American Family Physician describing a structured approach to acute knee effusion. Notes that swelling within about four hours of an injury carries a high likelihood of a major bone, ligament or meniscal injury, while swelling without an injury can reflect causes such as arthritis, infection or crystal deposits.',
    refs: [{ pmid: '10794580' }],
  },
  {
    title: 'Bacterial septic arthritis in adults',
    source: 'Mathews et al., The Lancet',
    year: 2010,
    summary:
      'Lancet review of septic arthritis in adults. Treats it as a medical emergency with high morbidity and mortality, and stresses prompt diagnostic joint aspiration and treatment.',
    refs: [{ pmid: '20206778' }],
  },
  {
    title: 'OARSI guidelines for the non-surgical management of knee, hip, and polyarticular osteoarthritis',
    source: 'OARSI (Bannuru et al.), Osteoarthritis and Cartilage',
    year: 2019,
    summary:
      'International guideline. Its core treatments for knee osteoarthritis are arthritis education and a structured land-based exercise program, with or without dietary weight management.',
    refs: [{ pmid: '31278997' }],
  },
  {
    title: 'Knee effusions, popliteal cysts, and synovial thickening: association with knee pain in osteoarthritis',
    source: 'Hill CL et al., Journal of Rheumatology',
    year: 2001,
    summary:
      'MRI study of older adults with and without knee pain. Moderate or larger effusions were far more common in painful osteoarthritic knees, but about 1 in 10 people with no knee pain and a normal X-ray also had one, so an effusion on a scan is not always the source of pain.',
    refs: [{ pmid: '11409127' }],
  },
  {
    title: 'Evaluation of a quantitative measurement of suprapatellar effusion by ultrasonography and its association with symptoms of radiographic knee osteoarthritis',
    source: 'Chiba D et al., Arthritis Research & Therapy',
    year: 2016,
    summary:
      'Cross-sectional ultrasound study in knee osteoarthritis. Notes that a categorical cut-off, such as a suprapatellar pouch at least 4 mm deep, is the recommended way to call an effusion, and links a larger effusion area to worse pain and symptom scores.',
    refs: [{ pmid: '27487832' }],
  },
  {
    title: 'Quadriceps arthrogenic muscle inhibition: neural mechanisms and treatment perspectives',
    source: 'Rice DA, McNair PJ, Seminars in Arthritis and Rheumatism',
    year: 2010,
    summary:
      'Review of why the quadriceps switch off after knee injury or in arthritis. Joint swelling, inflammation, laxity and damage alter the signals from the joint and reflexively inhibit the muscle, which is why restoring quadriceps activation is an early rehabilitation goal.',
    refs: [{ pmid: '19954822' }],
  },
  {
    title: 'Implementation of the Ottawa Knee Rule for the use of radiography in acute knee injuries',
    source: 'Stiell et al., JAMA',
    year: 1997,
    summary:
      'Validated clinical decision rule for when an acutely injured knee needs an X-ray to look for a fracture. It does not rule out ligament or cartilage injuries. Criteria include age 55 or over, inability to flex the knee to 90 degrees, isolated tenderness over the patella or fibular head, and inability to bear weight for four steps. Sensitivity approaches 100 percent for clinically important fractures.',
    refs: [{ pmid: '9403421' }],
  },
];

// Related condition slugs (must exist)
const relatedConditionSlugs: string[] = [
  'knee-osteoarthritis',
  'acl-injuries',
  'meniscus-tears',
  'mcl-lcl-sprains',
  'pcl-injuries',
  'knee-pain-patellofemoral',
];

const relatedTreatmentIds: string[] = [
  'exercise-therapy',
  'sports-rehab-return-to-sport',
  'joint-mobilization',
  'soft-tissue-myofascial-release',
  'post-surgical-rehabilitation',
  'cupping-therapy',
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function FluidOnTheKneeGuidePage() {
  const relatedConditions = relatedConditionSlugs
    .map((slug) => getConditionBySlug(slug))
    .filter((condition): condition is NonNullable<ReturnType<typeof getConditionBySlug>> => Boolean(condition));

  const relatedTreatments = relatedTreatmentIds
    .map((id) => getTreatmentById(id))
    .filter((treatment): treatment is NonNullable<ReturnType<typeof getTreatmentById>> => Boolean(treatment));

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.kinetikarephysio.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Conditions',
        item: 'https://www.kinetikarephysio.com/conditions',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Pain Guides',
        item: 'https://www.kinetikarephysio.com/conditions/pain-guides',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Fluid on the Knee',
        item: PAGE_URL,
      },
    ],
  };

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    '@id': `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    author: {
      '@id': SEO_PERSON_ID,
    },
    publisher: {
      '@id': SEO_ORGANIZATION_ID,
    },
    about: {
      '@type': 'MedicalCondition',
      name: 'Knee joint effusion (fluid on the knee)',
      alternateName: ['Suprapatellar effusion', 'Fluid on the knee'],
    },
    audience: {
      '@type': 'PeopleAudience',
      geographicArea: {
        '@type': 'AdministrativeArea',
        name: 'Burlington, Ontario',
      },
    },
    inLanguage: 'en-CA',
    ...(contentDateFor('/conditions/pain-guides/fluid-on-the-knee')
      ? { dateModified: contentDateFor('/conditions/pain-guides/fluid-on-the-knee') }
      : {}),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };


  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }}
      />

      <GuideMain>
        <div className={g.frame}>
          <div className={g.layout} data-rail="true">
            <header className={g.opening}>
              <Crumbs
                items={[
                  { href: '/', label: 'Home' },
                  { href: '/conditions', label: 'Conditions' },
                  { href: '/conditions/knee-pain', label: 'Knee Pain' },
                  { label: 'Fluid on the Knee' },
                ]}
              />

              <h1 className={cs.h1}>Suprapatellar Effusion (Fluid on the Knee)</h1>

              <p className={cs.summary}>
                A suprapatellar effusion is extra fluid inside the knee joint, seen in the
                pouch just above the kneecap. &ldquo;Fluid on the knee&rdquo;, &ldquo;knee
                effusion&rdquo; and &ldquo;joint effusion&rdquo; all describe the same thing.
                The term says where the fluid is, not what caused it. This guide covers what
                the wording on a scan report means, the usual causes by how quickly the
                swelling came on, and when to see a doctor before physiotherapy.
              </p>

              <p className={g.local}>
                Assessing and treating knee pain at the Burlington clinic. Convenient for
                Waterdown, Oakville, Hamilton, Flamborough, and Carlisle residents.
              </p>

              <FlagsLink />

              <div className={`${cs.actions} ${g.acts}`}>
                <Link
                  href={JANE_ASSESSMENT_URL} data-booking-source="guide_page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cs.btnInk}
                >
                  Book Initial Assessment
                  <ArrowRightIcon aria-hidden="true" />
                </Link>
                <Link href="tel:+19056346000" className={cs.btnLine}>
                  <PhoneIcon aria-hidden="true" />
                  Call Clinic
                </Link>
              </div>
              <Link href="/conditions/knee-pain" className={g.more}>
                Broader Knee Pain Guide
                <ArrowRightIcon aria-hidden="true" />
              </Link>
            </header>

            {/* The knee joint plate (no caption on this guide). */}
            <PlateFigure src="/images/conditions/knee-osteoarthritis.webp" priority />

            {/* Scan report wording */}
            <section className={g.sec}>
              <Head title={<>What &ldquo;suprapatellar effusion&rdquo; means on a scan report</>} />
              <div className={`${cs.prose} ${g.prose}`}>
                <p>
                  <strong>Where the fluid is.</strong>{' '}The suprapatellar pouch (also called the
                  suprapatellar recess or bursa) is a pocket of the knee joint above the
                  kneecap, under the quadriceps tendon. In most adults it is open to the rest
                  of the joint, so when the knee holds extra fluid, the pouch fills. It is the
                  largest pocket in the knee and the easiest place for ultrasound and MRI to
                  see fluid, which is why reports so often use this wording.
                  &ldquo;Suprapatellar effusion&rdquo; and &ldquo;joint effusion&rdquo; mean
                  the same thing: more fluid than usual inside the knee joint.
                </p>
                <p>
                  <strong>The size words.</strong>{' '}Reports grade the amount by eye:
                </p>
                <ul>
                  <li>
                    Trace or minimal: a very small amount. Every knee holds a little fluid, so
                    this can be within what a healthy knee contains.
                  </li>
                  <li>
                    Small or mild: a little more than usual. On its own it does not show that
                    anything is damaged.
                  </li>
                  <li>Moderate: clearly more than usual.</li>
                  <li>
                    Large or marked: the pouch is distended, and the knee usually looks and
                    feels full and tight.
                  </li>
                </ul>
                <p>
                  These are estimates, and radiologists do not all draw the lines in the same
                  place. On ultrasound, a pouch at least about 4 mm deep is one commonly used
                  cut-off for calling it an effusion (Chiba et al., Arthritis Research &amp;
                  Therapy, 2016).
                </p>
                <p>
                  <strong>What the size does and does not tell you.</strong>{' '}Size does not
                  identify the cause. The same amount of fluid can come from an osteoarthritis
                  flare, a meniscus or ligament injury, or an inflammatory problem. Effusions
                  also turn up in knees that do not hurt: in one MRI study of adults averaging
                  67 years old, about 1 in 10 people with no knee pain and a normal X-ray had a
                  moderate or larger effusion (Hill et al., Journal of Rheumatology, 2001). In
                  knees with osteoarthritis, more fluid tends to go with more pain and
                  stiffness (Hill et al., 2001; Chiba et al., 2016). After an injury, how fast
                  the swelling appeared tells you more than its size on a later scan: swelling
                  within a few hours points to bleeding inside the joint and a more
                  significant injury (Johnson, American Family Physician, 2000).
                </p>
                <p>
                  <strong>Why it matters for rehab, even when it is small.</strong>{' '}Fluid in
                  the knee can switch off part of the quadriceps through a reflex called
                  arthrogenic muscle inhibition. It is one reason the thigh weakens quickly
                  after a knee injury or flare (Rice and McNair, Seminars in Arthritis and
                  Rheumatism, 2010). Settling the swelling and getting the quadriceps working
                  again is usually an early goal.
                </p>
                <p>
                  <strong>When the report deserves a closer look:</strong>
                </p>
                <ul>
                  <li>
                    It also lists a tear, a bone bruise, a fracture or osteoarthritis. The
                    cause of the fluid is usually among those findings.
                  </li>
                  <li>The swelling came on within a few hours of an injury.</li>
                  <li>
                    The knee is hot or red, or you feel feverish or unwell. Seek same-day
                    medical care.
                  </li>
                  <li>The knee is locked and will not fully straighten.</li>
                  <li>
                    The swelling keeps coming back, or does not settle as activity is adjusted.
                  </li>
                </ul>
              </div>
            </section>

            {/* Opening primer */}
            <section className={g.sec}>
              <Head title="Inside the joint or outside the joint" />
              <div className={`${cs.prose} ${g.prose}`}>
                <p>
                  The first thing I sort out is where the swelling actually sits. A true knee
                  effusion is inside the joint capsule and collects in the suprapatellar pouch
                  above the kneecap. A larger effusion can make the whole knee feel tight and
                  full, restrict bending and straightening, and let the kneecap be pushed
                  gently down onto the underlying bone and bounce back up (the ballottable
                  patella sign, which I check in the clinic). A small effusion can be much
                  subtler. That is different from a soft, well-defined bump directly over the
                  front of the kneecap, which is usually prepatellar bursitis sitting outside
                  the joint capsule.
                </p>
                <p>
                  The difference matters for what comes next. Intra-articular effusions
                  reflect something happening inside the joint, whether that is an injury, an
                  arthritic flare, a crystal arthropathy, or, rarely, an infection.
                  A localised swelling may come from a bursa or another soft tissue rather
                  than fluid inside the joint. Many of these are manageable, but redness,
                  warmth, broken skin over the swelling, rapidly increasing pain or feeling
                  unwell need medical assessment, because a bursa can become infected too.
                </p>
                <p>
                  From there the next question is how quickly the swelling came on, because
                  the pace of onset is a surprisingly good clue to the driver. The sections
                  below walk through the four common onset patterns I see and what each one
                  usually points toward.
                </p>
              </div>
            </section>

            <WarningPanel flags={redFlags} />

            {/* Onset groups */}
            <section className={g.sec}>
              <Head
                title="When did the swelling come on?"
                stand={
                  <>
                    Onset pattern is a strong first clue. Use this guide to find the group that
                    most closely matches your story, then use the linked condition pages to go deeper.
                  </>
                }
              />

              <div className={g.groups}>
                {onsetGroups.map((group) => (
                  <div
                    key={group.heading}
                    className={g.group}
                    data-tone={group.causes.every((cause) => cause.urgency === 'emergency') ? 'emergency' : undefined}
                  >
                    <h3 className={g.groupName}>{group.heading}</h3>
                    <p className={g.groupSub}>{group.subtitle}</p>
                    <p className={g.groupText}>{group.description}</p>
                    <ul className={g.causes}>
                      {group.causes.map((cause) => {
                        const content = (
                          <>
                            <span className={g.causeName}>{cause.label}</span>
                            <span className={g.causeNote}>{cause.note}</span>
                            {cause.urgency === 'emergency' && (
                              <span className={g.causeFlag} data-u="emergency">
                                <i aria-hidden="true" />
                                Same-day emergency care. Do not wait for a physiotherapy appointment.
                              </span>
                            )}
                            {cause.urgency === 'medical' && (
                              <span className={g.causeFlag} data-u="medical">
                                <i aria-hidden="true" />
                                Warrants medical review before or alongside physiotherapy.
                              </span>
                            )}
                            {cause.slug && <ChevronRightIcon aria-hidden="true" />}
                          </>
                        );

                        return (
                          <li key={`${group.heading}-${cause.label}`}>
                            {cause.slug ? (
                              <Link href={`/conditions/${cause.slug}`} className={g.cause}>
                                {content}
                              </Link>
                            ) : (
                              <div className={g.cause}>{content}</div>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Extra-articular mimics */}
            <section className={g.sec}>
              <Head
                title="Swelling outside the joint (common mimics)"
                stand={
                  <>
                    These are not true knee effusions, but patients often describe them as fluid
                    on the knee because of how they look and feel. Many are manageable, but a
                    bursa can become infected: redness, warmth, broken skin over the swelling,
                    rapidly increasing pain or feeling unwell need same-day medical assessment.
                  </>
                }
              />
              <ul className={g.rows}>
                {extraArticular.map((item) => (
                  <li key={item.label}>
                    <h3 className={g.rowName}>{item.label}</h3>
                    <p className={g.rowText}>{item.note}</p>
                  </li>
                ))}
              </ul>
            </section>

            {/* How I approach it */}
            <section className={g.sec}>
              <Head title="How I approach a swollen knee in clinic" />
              <div className={`${cs.prose} ${g.prose}`}>
                <p>
                  The first appointment starts with questions. How
                  quickly did it swell. Was there a twist, a pop, or a direct blow. Does it go down overnight or stay full. Is the knee hot. Are any other joints
                  involved. Is there fever or feeling systemically unwell. How quickly it swelled and the signs that came with it often do much of the diagnostic work.
                </p>
                <p>
                  On examination I look at the knee in standing and lying. I check for a true
                  effusion with the sweep test and the ballottable patella sign, compare
                  warmth side-to-side, look at range of motion, and assess gait. Where the
                  story points toward structural injury, I use targeted tests: Lachman and
                  anterior drawer for the ACL, McMurray and joint-line tenderness for the
                  meniscus, varus and valgus stress for the collaterals. After acute trauma I
                  use the Ottawa Knee Rules to decide whether an X-ray for a fracture is needed, and I tell you when the picture calls for a medical review before rehab.
                </p>
                <p>
                  The plan depends on the driver. For osteoarthritis-pattern effusions the plan usually centres on graded exercise and self-management, in line with OARSI and
                  NICE. For effusions after an injury the work is usually staged: ease the irritated tissue, restore range and gait, rebuild strength, and return to
                  function. For any picture that looks septic, crystal-related, or
                  inflammatory in a new way, I refer you for medical care first, and rehab follows after that. Joint mobilization, soft tissue therapy,
                  and cupping can sit alongside that work where they help.
                </p>
              </div>
              <Consent />
            </section>

            {/* FAQ */}
            <section className={g.sec}>
              <Head title="Fluid-on-the-knee questions I hear most" />
              <Faqs faqs={faqs} />
            </section>

            {/* Evidence */}
            <section className={g.sec}>
              <Head
                title="Evidence this page is built on"
                stand={
                  <>
                    Published sources that underpin the triage logic and care recommendations
                    above. Research evolves, but these are the anchor references I rely on for
                    patients presenting with fluid on the knee.
                  </>
                }
              />
              <Evidence items={research} />
            </section>

            {/* Related conditions */}
            <section className={g.sec}>
              <Head
                title="Related knee conditions"
                stand={
                  <>
                    Deeper pages for the conditions that most often produce fluid on the knee.
                  </>
                }
              />
              <RelatedConditions conditions={relatedConditions} />
            </section>

            {/* Related treatments */}
            <section className={g.sec}>
              <Head
                title="Treatments that commonly sit inside a plan for a swollen knee"
                stand={
                  <>
                    None of these are stand-alone fixes. They are pieces that fit inside a plan
                    built around the underlying cause of your knee swelling.
                  </>
                }
              />
              <RelatedTreatments treatments={relatedTreatments} />
            </section>
          </div>
        </div>

        <AccessClosing
          title="Access, hours, and how to book"
          text={
            <>
              I see patients for knee pain and swelling at Endorphins Health & Wellness
              Centre in Burlington. The clinic serves people coming in from Burlington,
              Waterdown, Oakville, Hamilton, Flamborough, and Carlisle, with free
              parking on site and a ground-floor entrance.
            </>
          }
          phoneNote="Direct insurance billing available. No physician referral needed."
          book={
            <Link
              href={JANE_ASSESSMENT_URL} data-booking-source="guide_page"
              target="_blank"
              rel="noopener noreferrer"
              className={cs.btnLight}
            >
              Book an Initial Knee Assessment
              <ArrowRightIcon aria-hidden="true" />
            </Link>
          }
        />
      </GuideMain>
    </>
  );
}
