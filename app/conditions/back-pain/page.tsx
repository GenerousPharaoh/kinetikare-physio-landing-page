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

const PAGE_URL = 'https://www.kinetikarephysio.com/conditions/back-pain';
const PAGE_TITLE = 'Back Pain Treatment in Burlington | Kareem Hassanein Physiotherapy';
const PAGE_DESCRIPTION =
  'Back pain treatment in Burlington. Lower back, sciatica, disc-related, and stiffness-dominant back pain assessed and treated by a Registered Physiotherapist.';

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
    siteName: 'Kareem Hassanein Physiotherapy',
    authors: [SEO_AUTHOR.name],
    ...(CONTENT_LAST_MODIFIED_ISO.conditions
      ? { modifiedTime: CONTENT_LAST_MODIFIED_ISO.conditions }
      : {}),
    images: [
      {
        url: 'https://www.kinetikarephysio.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Back Pain Treatment in Burlington - Kareem Hassanein Physiotherapy',
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
// Content (kept inline: this hub is a single-purpose landing page)
// ---------------------------------------------------------------------------

interface LocationGuide {
  region: string;
  subtitle: string;
  description: string;
  commonSources: Array<{
    slug: string;
    label: string;
    note: string;
  }>;
}

const locationGuides: LocationGuide[] = [
  {
    region: 'Lower back, no leg pain',
    subtitle: 'Aching, stiffness, or sharp pain confined to the lumbar region',
    description:
      'Most back pain sits here. It often starts after a specific lift, a long drive, or a stretch of unusually heavy activity, and sometimes it shows up for no obvious reason at all. The lumbar discs, facet joints, and surrounding muscles all share load and any of them can be the dominant driver. Pain is often worse with one direction of movement, usually bending forward or arching back, and eases with the opposite. Most cases settle within a few weeks of structured care.',
    commonSources: [
      {
        slug: 'low-back-pain',
        label: 'Mechanical low back pain',
        note: 'The most common presentation: aching, stiffness, or sharp catches that flare with specific movements and ease with others. Often resolves with structured loading and movement education.',
      },
      {
        slug: 'facet-joint-syndrome',
        label: 'Facet joint pain',
        note: 'Pain that worsens with arching back, twisting, or standing for long periods. Often localised to one side, eases with sitting or forward bending.',
      },
      {
        slug: 'degenerative-disc-disease',
        label: 'Degenerative disc changes',
        note: 'Stiffness and aching that builds with sustained postures, particularly sitting. Common after the third decade and not the same thing as a herniation.',
      },
    ],
  },
  {
    region: 'Back pain that travels down the leg',
    subtitle: 'Sciatic-pattern symptoms below the buttock',
    description:
      'When pain, numbness, tingling, or weakness travels from the back into the buttock and down the leg, the nerve roots that form the sciatic nerve are usually involved. The most common source is a lumbar disc pressing on a nerve root, but a narrowed nerve canal or deep gluteal compression can produce a similar picture. The pattern of leg symptoms, what makes them centralise back toward the spine, and whether reflexes and strength are intact all matter for sorting out the source and the plan.',
    commonSources: [
      {
        slug: 'sciatica',
        label: 'Sciatica',
        note: 'Pain, numbness, or tingling that follows the sciatic nerve path from back to leg. Most cases resolve with conservative care without surgery.',
      },
      {
        slug: 'disc-herniation',
        label: 'Lumbar disc herniation',
        note: 'A specific disc bulge or extrusion compressing a nerve root. Often produces leg symptoms that follow a recognisable dermatomal pattern.',
      },
      {
        slug: 'spinal-stenosis',
        label: 'Lumbar spinal stenosis',
        note: 'Leg symptoms that come on with standing or walking and ease with sitting or leaning forward. More common in older adults.',
      },
      {
        slug: 'piriformis-syndrome',
        label: 'Piriformis or deep gluteal syndrome',
        note: 'Buttock pain with referral down the leg from deep gluteal compression of the sciatic nerve, rather than spinal compression. Reflexes and strength are typically intact.',
      },
    ],
  },
  {
    region: 'Pain over the buttock or pelvis',
    subtitle: 'Sacroiliac and gluteal-dominant patterns',
    description:
      'Pain that points right to the dimple at the back of the pelvis, or aches deep in the buttock without clear back pain, often comes from the sacroiliac joint or the surrounding muscles rather than the lumbar spine. Pregnancy, prolonged single-leg stance, or asymmetric loading patterns commonly drive it. A cluster of provocation tests, combined with a clear pain map, usually sorts it from a lumbar source.',
    commonSources: [
      {
        slug: 'si-joint-dysfunction',
        label: 'Sacroiliac joint dysfunction',
        note: 'Pain that points to the dimple just below the belt line, often after pregnancy, asymmetric loading, or a fall onto the buttock. Usually below L5 and rarely refers past the knee.',
      },
      {
        slug: 'deep-gluteal-syndrome',
        label: 'Deep gluteal syndrome',
        note: 'Deep buttock pain that can refer down the back of the leg without clear back pain. Reproduced by prolonged sitting and direct palpation of the deep gluteal space.',
      },
      {
        slug: 'proximal-hamstring-tendinopathy',
        label: 'Proximal hamstring tendinopathy',
        note: 'Localised pain at the sit bone, worse with sitting on firm surfaces, lunging, or sprinting. A frequent mimic for sciatica that responds to a different plan.',
      },
    ],
  },
  {
    region: 'Stiffness-dominant or morning-stiff back',
    subtitle: 'Stiffness that takes time to ease at the start of the day',
    description:
      'Back pain that is worse first thing in the morning, takes twenty to thirty minutes to loosen up, and eases with gentle movement is a familiar story in adults over forty. Degenerative disc changes and facet joint arthrosis are the usual suspects. This pattern responds well to graded loading and sensible movement habits, and the imaging findings often look more dramatic than the symptoms warrant.',
    commonSources: [
      {
        slug: 'degenerative-disc-disease',
        label: 'Degenerative disc disease',
        note: 'Age-related disc changes that produce stiffness with sustained postures and aching with longer days. Common, manageable, and usually unrelated to the imaging severity.',
      },
      {
        slug: 'spinal-stenosis',
        label: 'Spinal stenosis (lumbar)',
        note: 'Narrowing of the spinal canal that produces leg-dominant symptoms with standing and walking, relieved by sitting or forward leaning.',
      },
      {
        slug: 'facet-joint-syndrome',
        label: 'Facet joint arthrosis',
        note: 'Pain with arching back, rotation, and prolonged standing. Often paired with disc-related stiffness in the same region.',
      },
    ],
  },
  {
    region: 'Upper or mid back',
    subtitle: 'Pain between the shoulder blades or along the thoracic spine',
    description:
      'Thoracic back pain is less common than lumbar pain but shows up regularly in desk workers, new parents, and anyone who has had a recent change in postural load. The ribs articulate with the thoracic spine and can be involved. Postural dysfunction and thoracic outlet patterns are worth screening for when arm or hand symptoms come with the back pain.',
    commonSources: [
      {
        slug: 'postural-dysfunction',
        label: 'Postural-driven thoracic pain',
        note: 'Aching between the shoulder blades or along the spine that builds with prolonged sitting and eases with movement. Responds well to thoracic mobility and postural strengthening.',
      },
      {
        slug: 'thoracic-outlet-syndrome',
        label: 'Thoracic outlet syndrome',
        note: 'Mid-back or shoulder-region symptoms with arm heaviness, numbness, or tingling. Position-dependent and often reproducible with specific overhead testing.',
      },
      {
        slug: 'neck-pain',
        label: 'Cervical-referred thoracic pain',
        note: 'Pain in the upper back referred from the neck. Often improves when the cervical spine is treated alongside.',
      },
    ],
  },
];

// Red flags: when to seek urgent medical care rather than physio
const redFlags: Array<{ sign: string; action: string }> = [
  {
    sign: 'Loss of bladder or bowel control, or numbness in the saddle area (inner thighs, groin, perineum)',
    action: 'Go to emergency immediately. These signs can indicate cauda equina syndrome, which requires urgent surgical assessment.',
  },
  {
    sign: 'Progressive leg weakness, foot drop, or rapidly worsening neurological symptoms',
    action: 'See a physician promptly. Significant nerve involvement may need imaging and surgical opinion before rehabilitation can progress safely.',
  },
  {
    sign: 'Severe back pain after a fall, motor vehicle accident, or significant trauma',
    action: 'Seek same-day medical assessment to rule out fracture, particularly if you have osteoporosis or are over 50.',
  },
  {
    sign: 'Back pain with fever, chills, or feeling systemically unwell',
    action: 'See your physician within 24 hours to rule out spinal infection (discitis, osteomyelitis) before starting physiotherapy.',
  },
  {
    sign: 'Unexplained weight loss, history of cancer, or constant unrelenting night pain',
    action: 'See your family physician for medical workup before starting physiotherapy. These can flag serious underlying pathology.',
  },
  {
    sign: 'New-onset back pain after age 50 with no obvious mechanical trigger',
    action: 'Discuss with your physician before starting physiotherapy. Most cases are still mechanical, but a screening workup is reasonable.',
  },
];

// FAQ content (answer length deliberately varied: short for simple questions, longer for complex)
const faqs: Array<{ question: string; answer: string }> = [
  {
    question: 'How long does back pain take to heal?',
    answer:
      'Most acute back pain settles meaningfully inside four to six weeks, and the majority of episodes resolve within three months. Recovery is rarely linear. Pain can ease in stages with the occasional flare along the way, which is normal and usually not a sign that you have re-injured anything. What I track in clinic is whether function is improving across the week, not whether every day is better than the last.',
  },
  {
    question: 'Should I get an MRI for my back pain?',
    answer:
      'Usually not in the first four to six weeks. NICE NG59 and the American College of Physicians guidelines both recommend reserving MRI for cases with red flags, progressive neurological loss, or symptoms that have not responded to conservative care where imaging would actually change the plan. Imaging too early often shows disc changes and degenerative findings that are present in pain-free people, which can lead to treatment you do not need and worry that does not match your prognosis.',
  },
  {
    question: 'Is bed rest helpful for back pain?',
    answer:
      'No. The evidence has been clear on this for over twenty years. Prolonged bed rest, beyond a day or two during a severe acute episode, slows recovery rather than speeds it. The Lancet Low Back Pain Series and NICE NG59 both recommend staying active and modifying load, not stopping it. Walking, gentle movement, and continuing as much normal activity as you can tolerate produces better outcomes than rest.',
  },
  {
    question: 'Can I keep working with back pain?',
    answer:
      'For most people, yes, and staying at work in some capacity is linked to better recovery. The usual move is to modify sitting time, lifting demands, and driving exposure during the acute phase. If your role is physically demanding, a temporary modified duties arrangement often bridges the gap better than full leave. Complete time off work for more than a few days tends to make eventual return harder, not easier.',
  },
  {
    question: 'Does back pain mean a disc is "out" or "slipped"?',
    answer:
      'No, and the language is misleading. Discs do not slip. They can bulge, herniate, or thin out, but those structural findings are common in people without any back pain. A 2015 study in the American Journal of Neuroradiology by Brinjikji and colleagues found disc bulges in 30 percent of pain-free 20-year-olds and 84 percent of pain-free 80-year-olds. Most back pain comes from a combination of tissue irritation, sensitivity, and load mismatch, not a single structure being out of place.',
  },
  {
    question: 'What positions make back pain worse?',
    answer:
      'It depends on what is driving the pain. Disc-pattern presentations often flare with sitting, forward bending, and coughing, and ease with standing or gentle extension. Facet-pattern presentations usually flare with arching back, twisting, and prolonged standing, and ease with sitting or forward leaning. Working out your directional preference is one of the first things I do in clinic because it tells us which positions to repeat and which to break up across the day.',
  },
  {
    question: 'Is walking good for back pain?',
    answer:
      'Usually yes. Walking promotes blood flow to spinal tissues, breaks up prolonged sitting, and is one of the most consistently helpful activities across back pain presentations. The exception is leg-dominant spinal stenosis, where walking can be a clear trigger. For most other back pain, short and frequent walks (5 to 15 minutes, multiple times per day) tend to be better tolerated than one long walk in the early phase, and you can build from there.',
  },
  {
    question: 'Do I need a referral to see you for back pain in Burlington?',
    answer:
      'No referral needed in Ontario. Most extended health plans cover physiotherapy and I offer direct billing where available. Initial assessments run about an hour and include history, a thorough examination, a working diagnosis, and a clear plan with markers to track. If your presentation needs medical imaging or a specialist opinion before rehabilitation, I coordinate that rather than push on regardless.',
  },
];

// Evidence / research citations
interface ResearchItem {
  title: string;
  source: string;
  year: number;
  summary: string;
}

const research: ResearchItem[] = [
  {
    title: 'Low back pain series: prevention and treatment of low back pain',
    source: 'Foster et al., The Lancet',
    year: 2018,
    summary:
      'A landmark three-paper series in The Lancet identifying that most low back pain is benign, often over-medicalised, and best managed with education, exercise, and a return to activity. The series highlights international gaps between guideline recommendations and routine practice, particularly the overuse of imaging, opioids, and passive interventions.',
  },
  {
    title: 'Low back pain and sciatica in over 16s: assessment and management',
    source: 'NICE NG59',
    year: 2020,
    summary:
      'UK national guideline that recommends self-management advice, group exercise, and manual therapy as part of a treatment package as first-line care for non-specific low back pain. Imaging is reserved for cases where the result would change management. Opioids and routine bed rest are not recommended.',
  },
  {
    title: 'Noninvasive treatments for acute, subacute, and chronic low back pain',
    source: 'Qaseem et al., American College of Physicians',
    year: 2017,
    summary:
      'A clinical practice guideline recommending non-pharmacological treatment as first-line care for acute and subacute low back pain, including superficial heat, massage, acupuncture, and spinal manipulation. For chronic low back pain, exercise, multidisciplinary rehabilitation, mindfulness-based stress reduction, and cognitive behavioural therapy carry the strongest recommendations.',
  },
  {
    title: 'Clinical practice guidelines for low back pain',
    source: 'JOSPT (Delitto et al.)',
    year: 2012,
    summary:
      'APTA Academy of Orthopaedic Physical Therapy guideline structuring low back pain into clinical categories matched to specific interventions, including treatment-based classification, directional preference exercises, and manual therapy. Foundational reference for physiotherapy-led care of mechanical back pain.',
  },
  {
    title: 'Exercise therapy for chronic low back pain',
    source: 'Hayden et al., Cochrane Database of Systematic Reviews',
    year: 2021,
    summary:
      'A Cochrane network meta-analysis of 249 trials examining exercise therapy for chronic low back pain. Pilates, McKenzie-based, and motor control exercise approaches produced the largest effects on pain and function compared with minimal treatment, supporting structured exercise as central to chronic back pain care.',
  },
  {
    title: 'Surgical versus nonoperative treatment for lumbar disc herniation (SPORT)',
    source: 'Weinstein et al., JAMA',
    year: 2006,
    summary:
      'A landmark randomised trial of 501 adults with persistent sciatica from a lumbar disc herniation. At one to two years, outcomes between surgery and structured non-operative care converged, though surgery produced faster early relief. Reinforces a stepped-care model where surgery is reserved for persistent, disabling symptoms after a fair trial of conservative treatment.',
  },
];

// Conditions to feature in the related block, in display order
const relatedConditionSlugs: string[] = [
  'low-back-pain',
  'sciatica',
  'disc-herniation',
  'spinal-stenosis',
  'facet-joint-syndrome',
  'degenerative-disc-disease',
  'si-joint-dysfunction',
  'piriformis-syndrome',
  'deep-gluteal-syndrome',
];

const relatedTreatmentIds: string[] = [
  'exercise-therapy',
  'pain-education',
  'joint-mobilization',
  'dry-needling',
  'soft-tissue-myofascial-release',
  'cupping-therapy',
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function BackPainHubPage() {
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
        name: 'Back Pain',
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
      name: 'Back pain',
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

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${PAGE_URL}#clinic`,
    name: 'Kareem Hassanein Physiotherapy',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4631 Palladium Way, Unit 6',
      addressLocality: 'Burlington',
      addressRegion: 'ON',
      postalCode: 'L7M 0W9',
      addressCountry: 'CA',
    },
    telephone: '+1-905-634-6000',
    areaServed: [
      { '@type': 'City', name: 'Burlington' },
      { '@type': 'City', name: 'Waterdown' },
      { '@type': 'City', name: 'Oakville' },
      { '@type': 'City', name: 'Hamilton' },
      { '@type': 'City', name: 'Flamborough' },
      { '@type': 'City', name: 'Carlisle' },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '25',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <div className="min-h-screen">
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
                <span className="text-slate-900 font-medium">Back Pain</span>
              </nav>

              <h1 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-slate-900 mb-4">
                Back Pain Treatment in Burlington
              </h1>

              <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl">
                Back pain is rarely one condition. The label covers everything from a sharp catch
                that shows up after lifting, to a deep ache that travels down the leg, to a stiff
                back that takes twenty minutes to loosen in the morning. This page is a guide I
                use with patients to map where the pain is, what usually drives it, and how I
                approach treating it.
              </p>

              <p className="text-xs text-slate-500 mt-3">
                Assessing and treating back pain at the Burlington clinic. Convenient for
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
                  href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg bg-[#B08D57] text-white text-sm font-medium hover:bg-[#997A4B] transition-colors"
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
                  href="/conditions"
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-700 text-sm font-medium hover:border-[#B08D57] hover:text-[#B08D57] transition-colors"
                >
                  View All Conditions
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
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
                  Most back pain follows a small set of patterns
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p>
                  Most of the back pain I see in clinic falls into a handful of recognisable
                  stories. A lifting strain that comes on overnight and refuses to ease for the
                  first few days. A familiar ache that builds with sitting and quietens with
                  standing. A sharper catch on the inside of one hip after a long drive. A
                  morning stiffness that takes the first hour of the day to unlock. Pain that
                  travels down the back of the leg after a particularly heavy week of bending.
                  These are different conditions with different plans, but each one has a
                  signature worth recognising.
                </p>
                <p>
                  The honest version: most back pain in adults is mechanical, benign, and
                  manageable. NICE, the American College of Physicians, and the Lancet Low Back
                  Pain Series all point the same direction. Education, graded movement, and
                  structured loading produce the strongest long-term outcomes. Bed rest, routine
                  imaging, and opioids all show net harm at the population level. Hands-on work
                  sits alongside exercise, not in place of it. What changes between people is
                  the tissue, the history, and how load needs to be dosed.
                </p>
                <p>
                  The rest of this page works through the common sources of back pain grouped by
                  pattern, the red flags that need medical review before physio, how I approach
                  the first assessment in clinic, and the questions patients ask me most. If you
                  already know which condition fits your picture, the related conditions block
                  at the bottom links straight to the deeper pages.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Where does it hurt? location guide */}
        <section className="py-12 bg-slate-50/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 bg-slate-900 rounded-xl">
                  <MapPinIcon className="h-5 w-5 text-[#B08D57]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">
                  Where and how does it hurt?
                </h2>
              </div>
              <p className="text-slate-600 max-w-3xl mb-8">
                A quick guide to the most common back pain patterns by location and behaviour.
                Use it to find the deeper page that most closely matches your picture. If your
                presentation overlaps a few of these, that is normal and worth an assessment.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {locationGuides.map((guide) => (
                  <div
                    key={guide.region}
                    className="relative bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
                  >
                    <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-4">
                      <h3 className="text-lg font-semibold text-white tracking-tight">{guide.region}</h3>
                      <p className="text-xs text-slate-300 mt-0.5">{guide.subtitle}</p>
                    </div>
                    <div className="p-6">
                      <p className="text-slate-700 text-sm leading-relaxed mb-5">
                        {guide.description}
                      </p>
                      <ul className="space-y-3">
                        {guide.commonSources.map((source) => (
                          <li key={`${guide.region}-${source.slug}-${source.label}`} className="group">
                            <Link
                              href={`/conditions/${source.slug}`}
                              className="block rounded-xl border border-slate-200 hover:border-[#B08D57] hover:shadow-sm transition-all p-3"
                            >
                              <div className="flex items-start gap-3">
                                <div className="mt-1 h-2 w-2 bg-[#B08D57] rounded-full flex-shrink-0" />
                                <div className="flex-1">
                                  <div className="flex items-center justify-between gap-3">
                                    <span className="font-medium text-slate-900 group-hover:text-[#B08D57] transition-colors text-sm">
                                      {source.label}
                                    </span>
                                    <ChevronRightIcon className="h-4 w-4 text-slate-400 group-hover:text-[#B08D57] transition-colors flex-shrink-0" />
                                  </div>
                                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                                    {source.note}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How I approach back pain */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-slate-900 rounded-xl">
                  <AcademicCapIcon className="h-5 w-5 text-[#B08D57]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">
                  How I approach back pain in clinic
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p>
                  The first appointment runs on questions before it runs on equipment. Where the
                  pain sits, how it started, what makes it worse, what makes it better. The
                  small details do real work. Whether the pain came on after a specific lift, a
                  long drive, or no obvious trigger. Whether sitting eases or aggravates it.
                  Whether the pain travels down the leg, and if so, how far. Whether there are
                  any changes in strength, sensation, or bladder and bowel function. By the time
                  the history is done I usually have one or two working hypotheses, and the
                  exam is about confirming or ruling them out.
                </p>
                <p>
                  From there the exam goes region by region. I watch how you move through
                  forward bending, back arching, side bending, and rotation, and I note which
                  directions reproduce or relieve your symptoms. I screen the neurological
                  picture with strength, reflex, and sensation testing. Specific tests, like
                  straight leg raise, slump, and the SI joint provocation cluster, help sort out
                  whether nerves, joints, discs, or soft tissue are driving the picture. I use
                  imaging guidance, including NICE NG59 criteria, to decide whether scans would
                  actually change the plan rather than ordering them by default.
                </p>
                <p>
                  The plan that comes out of that is individual but has a familiar shape. Settle
                  the irritable tissue with a short list of positions and movements that help,
                  and a small list of things to step away from for a couple of weeks. Build
                  capacity with progressive loading exercises dosed to your current tolerance,
                  usually across trunk control, hip strength, and the specific patterns your
                  daily life demands. Joint mobilization, dry needling, soft tissue work, or
                  cupping sit alongside that exercise work where they help things move faster. I
                  write the plan down with you and track a handful of markers across the weeks
                  so it is clear whether it is actually working. If it is not, I change direction
                  sooner rather than later.
                </p>
              </div>
              <ConsentNote />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 bg-slate-50/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-slate-900 rounded-xl">
                  <QuestionMarkCircleIcon className="h-5 w-5 text-[#B08D57]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">
                  Back pain questions I hear most
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

        {/* Evidence section */}
        <section className="py-12 bg-white">
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
                The recommendations above draw on national clinical guidelines and published
                trials. Research evolves, but these are the anchor sources I rely on when I
                plan back pain care.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {research.map((item) => (
                  <div
                    key={item.title}
                    className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-200"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#B08D57]/10 text-[#B08D57] text-xs font-semibold uppercase tracking-wider">
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
        <section className="py-12 bg-slate-50/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-slate-900 rounded-xl">
                  <HeartIcon className="h-5 w-5 text-[#B08D57]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">
                  Related back and pelvis conditions
                </h2>
              </div>
              <p className="text-slate-600 max-w-3xl mb-8">
                Deeper pages for each of the specific conditions that sit under back pain.
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
                    <div className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[#B08D57]">
                      Read the {condition.name.toLowerCase()} guide
                      <ArrowRightIcon className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related treatments */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-slate-900 rounded-xl">
                  <ShieldCheckIcon className="h-5 w-5 text-[#B08D57]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">
                  Treatments that commonly sit inside a back pain plan
                </h2>
              </div>
              <p className="text-slate-600 max-w-3xl mb-8">
                None of these are stand-alone fixes. They are pieces that fit inside a plan
                built around your specific diagnosis and goals.
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
                    <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#B08D57]">
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
                    I see patients for back pain at Endorphins Health & Wellness Centre in
                    Burlington. The clinic serves people coming in from Burlington, Waterdown,
                    Oakville, Hamilton, Flamborough, and Carlisle, with free parking on site
                    and a ground-floor entrance.
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
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-600">Monday</span>
                      <span className="text-slate-900 font-medium">1:30 PM - 7:30 PM</span>
                    </li>
                    <li className="flex items-center justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-600">Tuesday</span>
                      <span className="text-slate-900 font-medium">3:30 PM - 7:30 PM</span>
                    </li>
                    <li className="flex items-center justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-600">Wednesday</span>
                      <span className="text-slate-900 font-medium">2:00 PM - 7:30 PM</span>
                    </li>
                    <li className="flex items-center justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-600">Thursday</span>
                      <span className="text-slate-900 font-medium">1:30 PM - 7:30 PM</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-slate-600">Friday</span>
                      <span className="text-slate-900 font-medium">2:00 PM - 7:30 PM</span>
                    </li>
                  </ul>

                  <div className="mt-6">
                    <Link
                      href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#B08D57] text-white text-sm font-medium hover:bg-[#997A4B] transition-colors"
                    >
                      <CalendarIcon className="h-4 w-4" />
                      Book an Initial Back Assessment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
