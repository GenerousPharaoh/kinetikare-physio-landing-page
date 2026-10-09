import { JANE_BOOKING_URL } from '@/lib/booking';
import { serializeJsonLd } from '@/lib/structured-data';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  ChevronRightIcon,
  ExclamationTriangleIcon,
  ChevronDownIcon,
  InformationCircleIcon,
  MapPinIcon,
  AcademicCapIcon,
  BeakerIcon,
  QuestionMarkCircleIcon,
  HeartIcon,
  CalendarIcon,
  PhoneIcon,
  ArrowRightIcon,
  ClockIcon,
  ShieldCheckIcon,
  ClipboardDocumentListIcon,
} from '@heroicons/react/24/outline';
import {
  CONTENT_LAST_MODIFIED_ISO,
  SEO_AUTHOR,
  SEO_ORGANIZATION_ID,
  SEO_PERSON_ID,
  SEO_PUBLISHER,
} from '@/lib/seo-metadata';
import { getConditionBySlug } from '@/lib/conditions-data';
import { getTreatmentById } from '@/lib/treatments-data';
import ConsentNote from '@/components/conditions/ConsentNote';

import HoursList from '@/components/HoursList';
import { inlineName } from '@/lib/text';
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
    ...(CONTENT_LAST_MODIFIED_ISO.conditions
      ? { modifiedTime: CONTENT_LAST_MODIFIED_ISO.conditions }
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
        note: 'Usually a pivot or landing where the kneecap visibly shifts out of place, often relocating on its own. Swelling and bruising follow quickly.',
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
      'A hot, red, swollen joint with fever, chills, or feeling generally unwell is a medical red flag until proven otherwise. Mathews and colleagues in the Lancet (2010) describe bacterial septic arthritis as a medical emergency with significant morbidity. Go to emergency or urgent care the same day.',
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
    sign: 'Hot, red, and swollen knee with fever or feeling systemically unwell',
    action: 'Seek same-day medical assessment to rule out septic arthritis or another infection-driven process.',
  },
  {
    sign: 'Sudden large swelling within an hour or two of trauma, with inability to bear weight',
    action: 'Go to emergency or urgent care to rule out ACL rupture, fracture, or significant ligament injury, in line with the Ottawa Knee Rules.',
  },
  {
    sign: 'Locked knee that cannot be straightened or bent fully after a twist',
    action: 'See a physician promptly. A mechanically locked knee often needs orthopaedic review before rehabilitation can progress safely.',
  },
  {
    sign: 'Calf pain, warmth, or swelling behind the knee, particularly after travel, surgery, or long periods of bed rest',
    action: 'Seek urgent medical assessment to rule out deep vein thrombosis before starting physiotherapy.',
  },
  {
    sign: 'Unexplained weight loss, night pain, or a history of cancer with new knee swelling',
    action: 'See your family physician for medical workup before starting physiotherapy.',
  },
  {
    sign: 'Progressive numbness, weakness, or foot drop alongside the knee swelling',
    action: 'See your physician to investigate potential nerve involvement or lumbar radiculopathy before rehabilitation.',
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
      'By treating what is causing it. The fluid usually settles as the underlying problem settles. For an osteoarthritis flare, that means adjusting load for a while and then a graded exercise programme, in line with the OARSI and NICE guidance. After an injury, it means a staged rehabilitation plan once a significant injury has been ruled out or managed. Compression, elevation and gentle movement help with comfort in the short term. Draining the knee is a medical decision, usually considered when the joint is very tense or the fluid needs testing. A hot, red knee with fever needs same-day medical care.',
  },
  {
    question: 'Is fluid on the knee the same as a knee effusion?',
    answer:
      'Yes. Fluid on the knee is the everyday term for a knee joint effusion, which simply means extra fluid inside the knee joint. A true effusion sits in the suprapatellar pouch and makes the whole knee feel tight and full. A bump directly over the front of the kneecap is usually prepatellar bursitis, which sits outside the joint and behaves differently.',
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
      'Often yes, once serious or systemic causes have been ruled out. For osteoarthritis, the OARSI 2019 guidelines and NICE NG226 both position structured exercise, education, and self-management as first-line care, and recurrent low-grade swelling usually settles as the joint becomes better conditioned and load is better managed. For post-traumatic cases, structured rehabilitation is almost always part of the pathway, sometimes alongside surgery for specific injuries.',
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
}

const research: ResearchItem[] = [
  {
    title: 'Acute knee effusions: a systematic approach to diagnosis',
    source: 'Johnson MW, American Family Physician',
    year: 2000,
    summary:
      'Clinical review in American Family Physician describing a structured approach to acute knee effusion. Notes that effusion within a few hours of injury carries a high likelihood of significant osseous, ligamentous, or meniscal injury, while atraumatic effusions more often reflect arthritis, infection, or crystal disease.',
  },
  {
    title: 'Bacterial septic arthritis in adults',
    source: 'Mathews et al., The Lancet',
    year: 2010,
    summary:
      'Lancet review of native-joint septic arthritis in adults. Frames septic arthritis as a medical emergency with significant morbidity and mortality, emphasising the need for urgent assessment and joint aspiration in any hot, acutely swollen, systemically unwell joint.',
  },
  {
    title: 'OARSI guidelines for the non-surgical management of knee, hip, and polyarticular osteoarthritis',
    source: 'OARSI (Bannuru et al.), Osteoarthritis and Cartilage',
    year: 2019,
    summary:
      'International guideline strongly recommending land-based exercise, structured education, and self-management as core treatments for knee osteoarthritis, which is the most common driver of recurrent low-grade effusion in adults over 50.',
  },
  {
    title: 'Knee effusions, popliteal cysts, and synovial thickening: association with knee pain in osteoarthritis',
    source: 'Hill CL et al., Journal of Rheumatology',
    year: 2001,
    summary:
      'MRI study of older adults with and without knee pain. Moderate or larger effusions were far more common in painful osteoarthritic knees, but about 1 in 10 people with no knee pain and a normal X-ray also had one, so an effusion on a scan is not always the source of pain.',
  },
  {
    title: 'Evaluation of a quantitative measurement of suprapatellar effusion by ultrasonography and its association with symptoms of radiographic knee osteoarthritis',
    source: 'Chiba D et al., Arthritis Research & Therapy',
    year: 2016,
    summary:
      'Cross-sectional ultrasound study in knee osteoarthritis. Notes that a categorical cut-off, such as a suprapatellar pouch at least 4 mm deep, is the recommended way to call an effusion, and links a larger effusion area to worse pain and symptom scores.',
  },
  {
    title: 'Quadriceps arthrogenic muscle inhibition: neural mechanisms and treatment perspectives',
    source: 'Rice DA, McNair PJ, Seminars in Arthritis and Rheumatism',
    year: 2010,
    summary:
      'Review of why the quadriceps switch off after knee injury or in arthritis. Joint swelling, inflammation, laxity and damage alter the signals from the joint and reflexively inhibit the muscle, which is why restoring quadriceps activation is an early rehabilitation goal.',
  },
  {
    title: 'Implementation of the Ottawa Knee Rule for the use of radiography in acute knee injuries',
    source: 'Stiell et al., JAMA',
    year: 1997,
    summary:
      'Validated clinical decision rule for when to image an acutely injured knee. Criteria include age 55 or over, inability to flex the knee to 90 degrees, isolated tenderness over the patella or fibular head, and inability to bear weight for four steps. Sensitivity approaches 100 percent for clinically important fractures.',
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
    ...(CONTENT_LAST_MODIFIED_ISO.conditions
      ? { dateModified: CONTENT_LAST_MODIFIED_ISO.conditions }
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

      <main className="min-h-screen">
        {/* Hero */}
        <section className="pt-24 pb-6 bg-gradient-to-b from-slate-50 via-white to-transparent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-5xl">
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-slate-600 mb-4">
                <Link href="/" className="hover:text-[#B08D57] transition-colors duration-200">
                  Home
                </Link>
                <ChevronRightIcon className="h-3 w-3" />
                <Link href="/conditions" className="hover:text-[#B08D57] transition-colors duration-200">
                  Conditions
                </Link>
                <ChevronRightIcon className="h-3 w-3" />
                <Link href="/conditions/knee-pain" className="hover:text-[#B08D57] transition-colors duration-200">
                  Knee Pain
                </Link>
                <ChevronRightIcon className="h-3 w-3" />
                <span className="text-slate-900 font-medium">Fluid on the Knee</span>
              </nav>

              <h1 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-slate-900 mb-4">
                Suprapatellar Effusion (Fluid on the Knee)
              </h1>

              <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl">
                A suprapatellar effusion is extra fluid inside the knee joint, seen in the
                pouch just above the kneecap. &ldquo;Fluid on the knee&rdquo;, &ldquo;knee
                effusion&rdquo; and &ldquo;joint effusion&rdquo; all describe the same thing.
                The term says where the fluid is, not what caused it. This guide covers what
                the wording on a scan report means, the usual causes by how quickly the
                swelling came on, and when to see a doctor before physiotherapy.
              </p>

              <p className="text-xs text-slate-600 mt-3">
                Assessing and treating knee pain at the Burlington clinic. Convenient for
                Waterdown, Oakville, Hamilton, Flamborough, and Carlisle residents.
              </p>

              {/* Red flags collapsible */}
              <details className="group mt-3">
                <summary className="flex items-center gap-1.5 cursor-pointer list-none text-xs text-red-700 hover:text-red-800 transition-colors">
                  <ExclamationTriangleIcon className="h-3.5 w-3.5" />
                  <span className="underline">Important: when to seek medical care before physiotherapy</span>
                  <ChevronDownIcon className="h-3.5 w-3.5 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="mt-2 p-4 bg-red-50 rounded-lg border border-red-200">
                  <div className="grid md:grid-cols-2 gap-3">
                    {redFlags.map((flag, index) => (
                      <div key={index} className="flex items-start gap-2 text-xs">
                        <div className="mt-[5px] h-1.5 w-1.5 bg-red-500 rounded-full flex-shrink-0" />
                        <div className="flex-1">
                          <p className="font-medium text-red-900 leading-snug">{flag.sign}</p>
                          <p className="text-red-700 mt-0.5 leading-snug">{flag.action}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </details>

              {/* Primary actions */}
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <Link
                  href={JANE_BOOKING_URL} data-booking-source="guide_page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-gold inline-flex items-center gap-1.5 px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                >
                  <CalendarIcon className="h-4 w-4" />
                  Book Initial Assessment
                </Link>
                <Link
                  href="tel:+19056346000"
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-700 text-sm font-medium hover:border-[#B08D57] hover:text-[#B08D57] transition-colors"
                >
                  <PhoneIcon className="h-4 w-4" />
                  Call Clinic
                </Link>
                <Link
                  href="/conditions/knee-pain"
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-700 text-sm font-medium hover:border-[#B08D57] hover:text-[#B08D57] transition-colors"
                >
                  Broader Knee Pain Guide
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Scan report wording */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-slate-900 rounded-xl">
                  <ClipboardDocumentListIcon className="h-5 w-5 text-[#B08D57]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">
                  What &ldquo;suprapatellar effusion&rdquo; means on a scan report
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
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
                <ul className="list-disc pl-5 space-y-1.5 mb-5 text-slate-700">
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
                <ul className="list-disc pl-5 space-y-1.5 mb-5 text-slate-700">
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
            </div>
          </div>
        </section>

        {/* Opening primer */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-slate-900 rounded-xl">
                  <InformationCircleIcon className="h-5 w-5 text-[#B08D57]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">
                  Inside the joint or outside the joint
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p>
                  The first thing I sort out is where the swelling actually sits. A true knee
                  effusion is inside the joint capsule. It fills the suprapatellar pouch
                  above the kneecap, the whole knee feels tight and full, bending and
                  straightening feel restricted, and the kneecap can be pushed gently down
                  onto the underlying bone and bounced back up (the ballottable patella
                  sign). That is different from a soft, well-defined bump directly over the
                  front of the kneecap, which is usually prepatellar bursitis sitting outside
                  the joint capsule.
                </p>
                <p>
                  The difference matters for what comes next. Intra-articular effusions
                  reflect something happening inside the joint, whether that is an injury, an
                  arthritic flare, a crystal arthropathy, or, rarely, an infection.
                  Extra-articular bursae and tendon-related fullness behave more like
                  localised soft-tissue problems and usually settle without any concern about
                  the joint itself.
                </p>
                <p>
                  From there the next question is how quickly the swelling came on, because
                  the pace of onset is a surprisingly good clue to the driver. The sections
                  below walk through the four common onset patterns I see and what each one
                  usually points toward.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Onset groups */}
        <section className="py-12 bg-slate-50/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 bg-slate-900 rounded-xl">
                  <ClipboardDocumentListIcon className="h-5 w-5 text-[#B08D57]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">
                  When did the swelling come on?
                </h2>
              </div>
              <p className="text-slate-600 max-w-3xl mb-8">
                Onset pattern is a strong first clue. Use this guide to find the group that
                most closely matches your story, then use the linked condition pages to go deeper.
              </p>

              <div className="space-y-6">
                {onsetGroups.map((group) => (
                  <div
                    key={group.heading}
                    className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
                  >
                    <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-4">
                      <h3 className="text-lg font-semibold text-white tracking-tight">{group.heading}</h3>
                      <p className="text-xs text-slate-300 mt-0.5">{group.subtitle}</p>
                    </div>
                    <div className="p-6">
                      <p className="text-slate-700 text-sm leading-relaxed mb-5">
                        {group.description}
                      </p>
                      <ul className="space-y-3">
                        {group.causes.map((cause) => {
                          const content = (
                            <>
                              <div className="mt-1 h-2 w-2 bg-[#B08D57] rounded-full flex-shrink-0" />
                              <div className="flex-1">
                                <div className="flex items-center justify-between gap-3">
                                  <span className="font-medium text-slate-900 text-sm">
                                    {cause.label}
                                  </span>
                                  {cause.slug && (
                                    <ChevronRightIcon className="h-4 w-4 text-slate-400 flex-shrink-0" />
                                  )}
                                </div>
                                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                                  {cause.note}
                                </p>
                                {cause.urgency === 'emergency' && (
                                  <p className="text-[11px] text-red-700 mt-1 font-medium">
                                    Same-day emergency care. Do not wait for a physiotherapy appointment.
                                  </p>
                                )}
                                {cause.urgency === 'medical' && (
                                  <p className="text-[11px] text-red-700 mt-1 font-medium">
                                    Warrants medical review before or alongside physiotherapy.
                                  </p>
                                )}
                              </div>
                            </>
                          );

                          if (cause.slug) {
                            return (
                              <li key={`${group.heading}-${cause.label}`} className="group">
                                <Link
                                  href={`/conditions/${cause.slug}`}
                                  className="flex items-start gap-3 rounded-xl border border-slate-200 hover:border-[#B08D57] hover:shadow-sm transition-all p-3"
                                >
                                  {content}
                                </Link>
                              </li>
                            );
                          }

                          return (
                            <li
                              key={`${group.heading}-${cause.label}`}
                              className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3"
                            >
                              {content}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Extra-articular mimics */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-slate-900 rounded-xl">
                  <InformationCircleIcon className="h-5 w-5 text-[#B08D57]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">
                  Swelling outside the joint (common mimics)
                </h2>
              </div>
              <p className="text-slate-600 mb-6">
                These are not true knee effusions, but patients often describe them as fluid
                on the knee because of how they look and feel. They are generally more benign
                and easier to settle than an intra-articular effusion.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {extraArticular.map((item) => (
                  <div
                    key={item.label}
                    className="bg-slate-50 rounded-xl p-5 border border-slate-200"
                  >
                    <h3 className="text-base font-semibold text-slate-900 mb-2">
                      {item.label}
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {item.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How I approach it */}
        <section className="py-12 bg-slate-50/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-slate-900 rounded-xl">
                  <AcademicCapIcon className="h-5 w-5 text-[#B08D57]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">
                  How I approach a swollen knee in clinic
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p>
                  The first appointment runs on questions before it runs on equipment. How
                  quickly did it swell. Was there a twist, a pop, or a direct blow. Does it
                  settle overnight or just stay full. Is the knee hot. Are any other joints
                  involved. Is there fever or feeling systemically unwell. The pace of onset
                  and the associated signs do most of the diagnostic work here.
                </p>
                <p>
                  On examination I look at the knee in standing and lying. I check for a true
                  effusion with the sweep test and the ballottable patella sign, compare
                  warmth side-to-side, look at range of motion, and assess gait. Where the
                  story points toward structural injury, I use targeted tests: Lachman and
                  anterior drawer for the ACL, McMurray and joint-line tenderness for the
                  meniscus, varus and valgus stress for the collaterals. After acute trauma I
                  use the Ottawa Knee Rules to decide whether an X-ray is worth chasing, and
                  I am upfront when the picture warrants medical review before rehab.
                </p>
                <p>
                  The plan depends on the driver. For osteoarthritis-pattern effusions the
                  backbone is graded exercise and self-management, in line with OARSI and
                  NICE. For post-traumatic effusions the work is staged: settle the
                  irritable tissue, restore range and gait, rebuild strength, and return to
                  function. For any picture that looks septic, crystal-related, or
                  inflammatory in a new way, I route you to medical care first and come
                  back to rehab in the right order afterwards. Joint mobilization, soft tissue therapy,
                  and cupping can sit alongside that work where they help.
                </p>
              </div>
              <ConsentNote />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-slate-900 rounded-xl">
                  <QuestionMarkCircleIcon className="h-5 w-5 text-[#B08D57]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">
                  Fluid-on-the-knee questions I hear most
                </h2>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-colors overflow-hidden"
                  >
                    <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 py-4">
                      <h3 className="text-sm md:text-base font-semibold text-slate-900 group-hover:text-[#B08D57] transition-colors">
                        {faq.question}
                      </h3>
                      <ChevronDownIcon className="h-4 w-4 text-slate-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                    </summary>
                    <div className="px-5 pb-5 pt-0">
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Evidence */}
        <section className="py-12 bg-slate-50/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-slate-900 rounded-xl">
                  <BeakerIcon className="h-5 w-5 text-[#B08D57]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">
                  Evidence this page is built on
                </h2>
              </div>
              <p className="text-slate-600 max-w-3xl mb-8">
                Published sources that underpin the triage logic and care recommendations
                above. Research evolves, but these are the anchor references I rely on for
                patients presenting with fluid on the knee.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {research.map((item) => (
                  <div
                    key={item.title}
                    className="bg-gradient-to-br from-white to-slate-50 rounded-xl p-6 border border-slate-200"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#B08D57]/10 text-[#80650A] text-xs font-semibold uppercase tracking-wider">
                        {item.year}
                      </span>
                      <span className="text-xs text-slate-500">{item.source}</span>
                    </div>
                    <h3 className="text-base font-semibold text-slate-900 leading-snug mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related conditions */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-slate-900 rounded-xl">
                  <HeartIcon className="h-5 w-5 text-[#B08D57]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">
                  Related knee conditions
                </h2>
              </div>
              <p className="text-slate-600 max-w-3xl mb-8">
                Deeper pages for the conditions that most often produce fluid on the knee.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedConditions.map((condition) => (
                  <Link
                    key={condition.slug}
                    href={`/conditions/${condition.slug}`}
                    className="group bg-white rounded-xl p-5 border border-slate-200 hover:border-[#B08D57] hover:shadow-md transition-all flex flex-col"
                  >
                    <h3 className="text-base font-semibold text-slate-900 group-hover:text-[#B08D57] transition-colors mb-1">
                      {condition.name}
                    </h3>
                    {condition.description && (
                      <p className="text-xs text-slate-600 leading-relaxed flex-grow">
                        {condition.description}
                      </p>
                    )}
                    <div className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[#8A6F0A]">
                      Read the {inlineName(condition.name)} guide
                      <ArrowRightIcon className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related treatments */}
        <section className="py-12 bg-slate-50/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-slate-900 rounded-xl">
                  <ShieldCheckIcon className="h-5 w-5 text-[#B08D57]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">
                  Treatments that commonly sit inside a plan for a swollen knee
                </h2>
              </div>
              <p className="text-slate-600 max-w-3xl mb-8">
                None of these are stand-alone fixes. They are pieces that fit inside a plan
                built around the underlying cause of your knee swelling.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {relatedTreatments.map((treatment) => (
                  <Link
                    key={treatment.id}
                    href={`/treatments/${treatment.id}`}
                    className="group bg-gradient-to-br from-white to-amber-50/30 rounded-xl p-6 border border-amber-100 hover:border-[#B08D57] hover:shadow-lg transition-all flex flex-col"
                  >
                    <h3 className="text-base font-semibold text-slate-900 group-hover:text-[#B08D57] transition-colors mb-2">
                      {treatment.name}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                      {treatment.shortDescription}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#8A6F0A]">
                      Explore {treatment.name}
                      <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Access and hours */}
        <section className="py-12 bg-slate-50/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-[#B08D57] rounded-xl">
                  <MapPinIcon className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">
                  Access, hours, and how to book
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-slate-600 leading-relaxed">
                    I see patients for knee pain and swelling at Endorphins Health & Wellness
                    Centre in Burlington. The clinic serves people coming in from Burlington,
                    Waterdown, Oakville, Hamilton, Flamborough, and Carlisle, with free
                    parking on site and a ground-floor entrance.
                  </p>
                  <div className="mt-6 space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPinIcon className="h-5 w-5 text-[#B08D57] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-900">4631 Palladium Way, Unit 6</p>
                        <p className="text-slate-600">Burlington, ON L7M 0W9</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <PhoneIcon className="h-5 w-5 text-[#B08D57] flex-shrink-0 mt-0.5" />
                      <div>
                        <a href="tel:+19056346000" className="font-medium text-slate-900 hover:text-[#B08D57] transition-colors">
                          (905) 634-6000
                        </a>
                        <p className="text-slate-500 text-xs">Direct insurance billing available. No physician referral needed.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3 text-sm text-[#8A6F0A] font-semibold uppercase tracking-wider">
                    <ClockIcon className="h-4 w-4" />
                    Burlington hours
                  </div>
                  <HoursList />

                  <div className="mt-6">
                    <Link
                      href={JANE_BOOKING_URL} data-booking-source="guide_page"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-gold inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium transition-colors"
                    >
                      <CalendarIcon className="h-4 w-4" />
                      Book an Initial Knee Assessment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
