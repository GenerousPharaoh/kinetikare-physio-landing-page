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

const PAGE_URL = 'https://www.kinetikarephysio.com/conditions/hip-pain';
const PAGE_TITLE = 'Hip Pain Treatment in Burlington | Kareem Hassanein Physiotherapy';
const PAGE_DESCRIPTION =
  'Hip pain treatment in Burlington with Kareem Hassanein, Registered Physiotherapist. Lateral, groin, and deep hip pain assessed and treated. Direct billing.';

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
        alt: 'Hip Pain Treatment in Burlington - Kareem Hassanein Physiotherapy',
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
    region: 'Side of the hip (lateral)',
    subtitle: 'Pain over the bony point on the outside of the hip',
    description:
      'Tender over the greater trochanter, worse lying on that side at night, and cranky when standing on one leg. This is the most common presentation in people over 40, especially post-menopausal women and runners who recently increased volume.',
    commonSources: [
      {
        slug: 'greater-trochanteric-pain-syndrome',
        label: 'Lateral hip pain / gluteal tendinopathy (GTPS)',
        note: 'Gluteus medius and minimus tendon irritation at the greater trochanter.',
      },
      {
        slug: 'hip-bursitis',
        label: 'Hip bursitis',
        note: 'Secondary bursal irritation, usually part of the broader GTPS picture.',
      },
    ],
  },
  {
    region: 'Front of the hip and groin',
    subtitle: 'Deep anterior pain, sometimes a pinch with flexion',
    description:
      'Often described as a pinch or ache deep in the front of the hip or groin. Worse with deep squats, sitting low, getting out of a car, or cutting and pivoting in sport. Stiffness first thing in the morning or after sitting is common with joint-related causes.',
    commonSources: [
      {
        slug: 'hip-osteoarthritis',
        label: 'Hip osteoarthritis',
        note: 'Joint stiffness and groin pain that worsens with activity and improves with gentle movement.',
      },
      {
        slug: 'femoroacetabular-impingement',
        label: 'Femoroacetabular impingement (FAI)',
        note: 'A mechanical pinch at end-range hip flexion, common in younger athletes.',
      },
      {
        slug: 'hip-labral-tears',
        label: 'Hip labral tears',
        note: 'Clicking, catching, or a sharp groin pain with rotation or deep flexion.',
      },
      {
        slug: 'groin-strains',
        label: 'Adductor (groin) strains',
        note: 'Inner-thigh pain after a sudden change of direction or kick, common in hockey and soccer.',
      },
    ],
  },
  {
    region: 'Back of the hip and deep buttock',
    subtitle: 'Deep posterior ache, sit bone tenderness, or nerve-like pain',
    description:
      'Pain sitting on hard surfaces, aching in the deep buttock, or a sciatic-type symptom that travels down the back of the leg. The source can sit in the joint, in deep gluteal muscles, or in the lumbar spine referring pain into the buttock, so careful assessment matters here.',
    commonSources: [
      {
        slug: 'proximal-hamstring-tendinopathy',
        label: 'Proximal hamstring tendinopathy',
        note: 'Sit-bone pain that flares with sitting, driving, and hill running.',
      },
      {
        slug: 'piriformis-syndrome',
        label: 'Piriformis syndrome',
        note: 'Deep buttock pain, sometimes with radiating leg symptoms from sciatic nerve irritation.',
      },
      {
        slug: 'deep-gluteal-syndrome',
        label: 'Deep gluteal syndrome',
        note: 'Broader sciatic nerve entrapment in the deep gluteal space, can mimic lumbar radiculopathy.',
      },
      {
        slug: 'si-joint-dysfunction',
        label: 'Sacroiliac (SI) joint dysfunction',
        note: 'Pain over the SI joint or upper buttock, provoked by single-leg loading.',
      },
    ],
  },
  {
    region: 'Hamstrings, and pain that travels down the leg',
    subtitle: 'Referred and nerve-related symptoms',
    description:
      'Sometimes what people call hip pain is actually referred from the low back. A burning or electric quality, numbness, or pain that runs past the knee points toward a nerve source rather than the hip joint itself. A careful history and physical exam help sort this out.',
    commonSources: [
      {
        slug: 'hamstring-strains',
        label: 'Hamstring strains',
        note: 'Sudden pull or ache in the back of the thigh, usually after a sprint or acceleration.',
      },
      {
        slug: 'sciatica',
        label: 'Sciatica',
        note: 'Nerve root irritation from the lumbar spine producing buttock and leg pain.',
      },
      {
        slug: 'low-back-pain',
        label: 'Low back pain with referral',
        note: 'Lumbar joints and discs can refer pain into the hip and buttock without true leg nerve symptoms.',
      },
    ],
  },
];

// Red flags: when to seek urgent medical care rather than physio
const redFlags: Array<{ sign: string; action: string }> = [
  {
    sign: 'Sudden inability to bear weight after a fall or trauma',
    action: 'Go to emergency to rule out hip or pelvic fracture, especially if over 65 or on bone-affecting medication.',
  },
  {
    sign: 'Hip pain with fever, chills, or feeling systemically unwell',
    action: 'See a physician or urgent care to rule out joint infection.',
  },
  {
    sign: 'Severe, constant pain that is not relieved by any position, particularly at night',
    action: 'Book a physician review to investigate for stress fracture or other bone pathology.',
  },
  {
    sign: 'Progressive numbness, weakness, or changes in bowel or bladder control',
    action: 'Seek emergency care to rule out cauda equina syndrome.',
  },
  {
    sign: 'Unexplained weight loss or a history of cancer with new hip pain',
    action: 'See your family physician for medical workup before starting physiotherapy.',
  },
  {
    sign: 'Hip pain in a child or adolescent that limits walking',
    action: 'See a physician to rule out conditions such as slipped capital femoral epiphysis or Perthes disease.',
  },
];

// FAQ content (answer length deliberately varied: short for simple questions, longer for complex)
const faqs: Array<{ question: string; answer: string }> = [
  {
    question: 'How do I know if my hip pain is arthritis?',
    answer:
      'Hip osteoarthritis usually sits in the groin or deep front of the hip, feels stiff for the first twenty to thirty minutes after rest, and gets cranky with longer walks or stairs. Rotation is often the first range to drop off, which is why people notice it when putting on socks or getting out of a car. I build a working diagnosis from the history and exam, and order imaging only when it is going to change the plan.',
  },
  {
    question: 'Can physiotherapy help hip pain without surgery?',
    answer:
      'For most hip pain, yes. NICE and OARSI guidelines put exercise, education, and load management as first-line care for hip osteoarthritis, and the LEAP trial (BMJ 2018) showed education plus exercise beat a corticosteroid injection for lateral hip pain at one year. Surgery is still the right call for some labral tears and advanced arthritis, but a structured rehab block almost always comes first.',
  },
  {
    question: 'When should I worry about hip pain?',
    answer:
      'Most hip pain is mechanical. Get medical review before physiotherapy if you have had a fall with sudden inability to weight-bear, fever with joint pain, progressive neurological changes, unexplained weight loss, or pain that is severe and unrelieved by any position.',
  },
  {
    question: 'What causes hip pain at night?',
    answer:
      'Lying on that side compresses the gluteal tendons against the bony point on the outside of the hip. That is the classic night-pain picture, and it is a hallmark of gluteal tendinopathy. Hip osteoarthritis can also ache at night when the joint loses its capacity to dampen load. The fix is rarely more rest. Sleep position, sitting and standing habits, and a progressive loading program are what usually settle it over a few weeks.',
  },
  {
    question: 'Is it safe to keep exercising with hip pain?',
    answer:
      'Usually yes, with adjustments. Full rest tends to make most hip conditions more reactive, not less. I modify load rather than remove it: adjust volume, drop the specific provoking positions, and swap in pain-tolerant options like cycling, pool work, or lower-load strength training while the irritable tissue rebuilds capacity. I set clear guardrails at the first visit so the dosing is obvious.',
  },
  {
    question: 'Do I need imaging before starting physiotherapy?',
    answer:
      'For most people, no. Labral fraying, mild cartilage wear, and tendon signal changes show up in pain-free adults all the time, so scans often muddy the picture rather than clarify it. I order imaging when it is going to change management: suspected fracture, progressive neurological symptoms, or a case not progressing the way a thorough exam predicted.',
  },
  {
    question: 'How long does hip pain take to recover with physiotherapy?',
    answer:
      'The tissue drives the timeline. Muscle strains often settle in four to eight weeks. Gluteal tendinopathy and other tendon-related hip pain typically needs three to six months of progressive loading to rebuild capacity. Hip osteoarthritis is longer-term management, but most people notice meaningful improvement in pain and function inside eight to twelve weeks of structured exercise and hands-on work.',
  },
  {
    question: 'Do you treat hip pain after a hip replacement?',
    answer:
      'Yes. Post-surgical hip rehab runs in stages: protect the joint early, restore range and gait, then build strength and confidence under load. I follow your surgeon\'s protocol where one exists and adapt based on how your tissues respond. Most people progress through guided exercise work across the first three to four months after surgery.',
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
    title: 'Education and exercise outperform corticosteroid injection for lateral hip pain',
    source: 'Mellor et al., BMJ (LEAP trial)',
    year: 2018,
    summary:
      'In a randomised trial of 204 adults with gluteal tendinopathy, education plus a progressive exercise program produced greater improvements in pain and global rating of change than a single corticosteroid injection at both eight weeks and one year.',
  },
  {
    title: 'OARSI guidelines for non-surgical management of hip osteoarthritis',
    source: 'OARSI (Bannuru et al.)',
    year: 2019,
    summary:
      'International guideline recommending land-based exercise, education, and self-management as core treatments for hip osteoarthritis, with weight management and structured strengthening as strongly supported adjuncts.',
  },
  {
    title: 'NICE guideline on osteoarthritis assessment and management',
    source: 'NICE NG226',
    year: 2022,
    summary:
      'UK national guidance identifying therapeutic exercise as a first-line intervention for people with osteoarthritis, alongside information and support, with surgery considered when conservative care has not produced adequate response.',
  },
  {
    title: 'Hip pain and mobility deficits: hip osteoarthritis clinical practice guideline (Revision 2025)',
    source: 'JOSPT (Koc, Cibulka et al.)',
    year: 2025,
    summary:
      'Updated APTA Academy of Orthopaedic Physical Therapy guideline recommending progressive strengthening, manual therapy, patient education, and gait and functional training for hip osteoarthritis, with dry needling newly supported for short-term relief in pain, range, strength, and function.',
  },
  {
    title: 'Improving function in people with hip-related pain: a systematic review and meta-analysis of physiotherapist-led interventions',
    source: 'Kemp et al., British Journal of Sports Medicine',
    year: 2020,
    summary:
      'Systematic review synthesising physiotherapist-led exercise, manual therapy, and education for hip-related pain. Found improvements in function, pain, and strength, with hip arthroscopy showing only small short-term benefit over physiotherapy and no significant difference at 24 months.',
  },
];

// Conditions to feature in the related block, in display order
const relatedConditionSlugs: string[] = [
  'greater-trochanteric-pain-syndrome',
  'hip-osteoarthritis',
  'femoroacetabular-impingement',
  'hip-labral-tears',
  'hip-bursitis',
  'proximal-hamstring-tendinopathy',
  'piriformis-syndrome',
  'deep-gluteal-syndrome',
  'si-joint-dysfunction',
  'groin-strains',
  'hamstring-strains',
  'sciatica',
];

const relatedTreatmentIds: string[] = [
  'exercise-therapy',
  'joint-mobilization',
  'dry-needling',
  'cupping-therapy',
  'soft-tissue-myofascial-release',
  'sports-rehab-return-to-sport',
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function HipPainHubPage() {
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
        name: 'Hip Pain',
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
      name: 'Hip pain',
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
      reviewCount: '22',
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
                <span className="text-slate-900 font-medium">Hip Pain</span>
              </nav>

              <h1 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-slate-900 mb-4">
                Hip Pain Treatment in Burlington
              </h1>

              <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl">
                Hip pain is rarely one condition. The label covers everything from a gluteal
                tendon that cannot tolerate side-lying to a deep joint-related pinch in the
                groin. This page is a guide I use with patients to map where the pain is, what
                usually drives it, and how I go about treating it.
              </p>

              <p className="text-xs text-slate-500 mt-3">
                Assessing and treating hip pain at the Burlington clinic. Convenient for
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
                  First, figure out which hip problem you actually have
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p>
                  &ldquo;My hip hurts&rdquo; can mean half a dozen different things. One person
                  points to the bony spot on the side and tells me they cannot sleep on that
                  side anymore. Another points into the groin and describes a pinch every time
                  they sink into a deep squat. A third points into the deep buttock and asks
                  whether this is sciatica. All common, all real, and all treated very
                  differently. So the first job on your first visit is simply sorting out which
                  of these pictures is actually yours.
                </p>
                <p>
                  The honest version: most hip pain in adults is mechanical and manageable.
                  NICE and OARSI guidelines, the JOSPT hip osteoarthritis CPG revised in 2025,
                  and the 2018 LEAP trial in the BMJ all point the same way. Education, graded
                  strengthening, and sensible load management produce the strongest long-term
                  outcomes. Hands-on work sits alongside that, not in place of it. What changes
                  between people is the tissue, the history, and how load needs to be dosed.
                </p>
                <p>
                  The rest of this page walks through the common sources of hip pain grouped by
                  where they sit, the red flags that sit outside physiotherapy scope, how I
                  approach the first assessment in clinic, and the questions patients ask me
                  most. If you already know which condition fits your picture, the related
                  conditions block at the bottom links straight to the deeper pages.
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
                  Where does it hurt?
                </h2>
              </div>
              <p className="text-slate-600 max-w-3xl mb-8">
                A quick guide to the most common sources of hip pain by location. Use it to find
                the deeper page that most closely matches your pattern. If your picture overlaps a few
                of these, that is normal and worth an assessment.
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
                          <li key={source.slug} className="group">
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

        {/* How I approach hip pain */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-slate-900 rounded-xl">
                  <AcademicCapIcon className="h-5 w-5 text-[#B08D57]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">
                  How I approach hip pain in clinic
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p>
                  The first appointment runs on questions before it runs on equipment. Where
                  does it actually hurt, how did it start, what makes it worse, what makes it
                  better. The small details do real work here. How you cross your legs on the
                  couch. Whether you can sleep on that side. Whether a recent running block
                  pushed weekly volume up faster than the tissue could adapt. Whether sitting,
                  standing, or walking is the main trigger. By the end of the history I usually
                  have two or three working hypotheses, and the physical exam is about
                  confirming or ruling them out.
                </p>
                <p>
                  I look at how you move before I test what hurts. Watching you walk, squat, and
                  step tells me more than any single provocation test. From there I check hip
                  range, strength through the key muscle groups, and the targeted tests that
                  separate lateral tendon pain from joint pain from posterior nerve-related
                  pain. Where palpation is clinically indicated, it is directed by the working
                  hypothesis from the history and movement exam, not a routine sweep of every
                  landmark.
                </p>
                <p>
                  The plan that comes out of that is individual, but it tends to have the same
                  shape. Settle the irritable tissue with a short list of things to stop doing
                  and a few things to add in. Build capacity with progressive strengthening
                  exercises dosed to your current tolerance, usually across hip abductors, deep
                  rotators, glutes, and the trunk. Joint mobilization, soft tissue therapy, dry
                  needling, or cupping sit alongside that work where they speed things along. I
                  write the plan down with you and track a handful of markers so you can see
                  whether it is actually working. If it is not, I change direction sooner
                  rather than later.
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
                  Hip pain questions I hear most
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
                trials. Research evolves, but these are the anchor sources I rely on when I plan
                hip pain care.
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
                  Related hip and pelvis conditions
                </h2>
              </div>
              <p className="text-slate-600 max-w-3xl mb-8">
                Deeper pages for each of the specific conditions that sit under hip pain.
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
                  Treatments that commonly sit inside a hip plan
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
        <section className="py-12 bg-slate-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-[#B08D57] rounded-xl">
                  <MapPinIcon className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white">
                  Access, hours, and how to book
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-slate-300 leading-relaxed">
                    I see patients for hip pain at Endorphins Health & Wellness Centre in
                    Burlington. The clinic serves people coming in from Burlington, Waterdown,
                    Oakville, Hamilton, Flamborough, and Carlisle, with free parking on site
                    and a ground-floor entrance.
                  </p>
                  <div className="mt-6 space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPinIcon className="h-5 w-5 text-[#B08D57] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-white">4631 Palladium Way, Unit 6</p>
                        <p className="text-slate-400">Burlington, ON L7M 0W9</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <PhoneIcon className="h-5 w-5 text-[#B08D57] flex-shrink-0 mt-0.5" />
                      <div>
                        <a href="tel:+19056346000" className="font-medium text-white hover:text-[#B08D57] transition-colors">
                          (905) 634-6000
                        </a>
                        <p className="text-slate-400 text-xs">Direct insurance billing available. No physician referral needed.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3 text-sm text-[#B08D57] font-semibold uppercase tracking-wider">
                    <ClockIcon className="h-4 w-4" />
                    Burlington hours
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-300">Monday</span>
                      <span className="text-white">1:30 PM - 7:30 PM</span>
                    </li>
                    <li className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-300">Tuesday</span>
                      <span className="text-white">3:30 PM - 7:30 PM</span>
                    </li>
                    <li className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-300">Wednesday</span>
                      <span className="text-white">2:00 PM - 7:30 PM</span>
                    </li>
                    <li className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="text-slate-300">Thursday</span>
                      <span className="text-white">1:30 PM - 7:30 PM</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-slate-300">Friday</span>
                      <span className="text-white">2:00 PM - 7:30 PM</span>
                    </li>
                  </ul>

                  <div className="mt-6">
                    <Link
                      href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                      target="_blank"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#B08D57] text-white text-sm font-medium hover:bg-[#997A4B] transition-colors"
                    >
                      <CalendarIcon className="h-4 w-4" />
                      Book an Initial Hip Assessment
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
