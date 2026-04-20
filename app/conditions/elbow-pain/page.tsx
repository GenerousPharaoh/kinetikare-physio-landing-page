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

const PAGE_URL = 'https://www.kinetikarephysio.com/conditions/elbow-pain';
const PAGE_TITLE = 'Elbow Pain Treatment in Burlington | Kareem Hassanein Physiotherapy';
const PAGE_DESCRIPTION =
  'Elbow pain treatment in Burlington with Kareem Hassanein, Registered Physiotherapist. Tennis elbow, golfers elbow, and forearm nerve symptoms assessed and treated.';

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
        alt: 'Elbow Pain Treatment in Burlington - Kareem Hassanein Physiotherapy',
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
    region: 'Outside of the elbow (lateral epicondyle)',
    subtitle: 'Pain on the bony point on the outside of the elbow',
    description:
      'Point tenderness at the bony bump on the outside of the elbow, with pain on gripping, pouring a kettle, a firm handshake, or lifting a coffee cup by the handle. This is the classic tennis elbow picture, and it is far more common in desk workers and tradespeople than in people who actually play tennis. Wrist extension loading reproduces the symptoms.',
    commonSources: [
      {
        slug: 'tennis-elbow',
        label: 'Tennis elbow (lateral epicondylopathy)',
        note: 'Pain on the outside of the elbow with gripping, pouring, and wrist extension loading. Gradual onset is more common than a single injury.',
      },
    ],
  },
  {
    region: 'Inside of the elbow (medial epicondyle)',
    subtitle: 'Pain on the bony point on the inside of the elbow',
    description:
      'Point tenderness on the inside of the elbow, with pain on wrist flexion loading, gripping rotating forces, throwing, or a golf swing. Pain often settles further down into the forearm flexor mass. Sensitive to a direct knock on the inner elbow. Ulnar nerve symptoms into the ring and pinky fingers can coexist and need screening.',
    commonSources: [
      {
        slug: 'golfers-elbow',
        label: 'Golfers elbow (medial epicondylopathy)',
        note: 'Pain on the inside of the elbow with wrist flexion, gripping, or throwing load. Often coexists with wrist flexor and pronator tightness.',
      },
    ],
  },
  {
    region: 'Numbness in the ring and little fingers',
    subtitle: 'Cubital tunnel pattern at the inner elbow',
    description:
      'Tingling or numbness in the ring and little fingers, often worse when the elbow is bent for long periods such as on the phone, reading, or sleeping with a bent elbow. Sometimes with weakness of grip or clumsiness with fine hand tasks. This is a cubital tunnel picture, where the ulnar nerve is irritated at the inner elbow. No dedicated condition page for cubital tunnel sits on the site yet, but the broader nerve-entrapment context applies. If symptoms are more in the thumb, index, and middle fingers, the source is usually at the wrist.',
    commonSources: [
      {
        slug: 'carpal-tunnel-syndrome',
        label: 'Carpal tunnel syndrome',
        note: 'Median nerve compression at the wrist. Numbness in the thumb, index, and middle fingers, often worse at night. Sometimes mistaken for elbow or forearm pain.',
      },
    ],
  },
  {
    region: 'Diffuse forearm aching, no single spot',
    subtitle: 'Broad forearm fatigue with repetitive work',
    description:
      'Aching that spreads through the forearm without a clear single painful point, usually tied to repetitive gripping, typing, or fine hand work that has outgrown the forearm tissues capacity. The pattern is overload rather than a specific structural injury. Wrist, elbow, and shoulder contributions all need to be assessed together.',
    commonSources: [
      {
        slug: 'repetitive-strain-injuries',
        label: 'Repetitive strain injuries',
        note: 'Overuse-related forearm and wrist pain from cumulative load in work, training, or ergonomic set-ups that have drifted.',
      },
    ],
  },
];

// Red flags: when to seek urgent medical care rather than physio
const redFlags: Array<{ sign: string; action: string }> = [
  {
    sign: 'Sudden inability to straighten or bend the elbow after a fall or direct trauma',
    action: 'Go to emergency or urgent care to rule out fracture or dislocation, especially with obvious deformity, bruising, or swelling.',
  },
  {
    sign: 'Numbness, tingling, or weakness travelling into the hand, or grip weakness developing over time',
    action: 'See your physician for nerve testing and to decide whether imaging or EMG is appropriate before rehabilitation.',
  },
  {
    sign: 'Hot, red, swollen elbow with fever or feeling systemically unwell',
    action: 'Seek same-day medical review to rule out septic arthritis, gout, or other inflammatory joint conditions.',
  },
  {
    sign: 'Elbow pain with neck, shoulder, or chest symptoms, or with left arm radiation',
    action: 'Seek urgent medical assessment. Elbow pain can occasionally be a referred symptom of a cervical or cardiac issue.',
  },
  {
    sign: 'A snap or pop at the inner elbow during a hard throw, lift, or pull, with immediate pain and weakness',
    action: 'See a physician or urgent care promptly to assess for ligament or tendon rupture.',
  },
  {
    sign: 'Unexplained weight loss, night pain, or a history of cancer with new elbow pain',
    action: 'See your family physician for medical workup before starting physiotherapy.',
  },
];

// FAQ content (answer length deliberately varied: short for simple questions, longer for complex)
const faqs: Array<{ question: string; answer: string }> = [
  {
    question: 'Do I need an MRI or X-ray for elbow pain?',
    answer:
      'Most elbow pain does not need imaging to start physiotherapy. Tennis elbow and golfers elbow are clinical diagnoses built from history and exam. Imaging becomes useful when the picture points to a structural problem that would change the plan: suspected fracture after trauma, progressive neurological symptoms, a case not responding the way a careful exam predicted, or when a ligament rupture is in question. I flag when imaging will actually change management rather than ordering it by default.',
  },
  {
    question: 'Is it really tennis elbow if I have never played tennis?',
    answer:
      'Almost certainly. The name sticks, but tennis elbow is a lateral elbow tendinopathy most often driven by desk work, trades, gripping sports, or repetitive lifting. In population studies (Shiri et al., American Journal of Epidemiology 2006) prevalence sits around 1 to 1.3 percent in the general population, rising sharply in occupations that combine forceful gripping with repetition. What matters is the pattern on exam, not the sport.',
  },
  {
    question: 'Are cortisone injections a good idea for tennis elbow?',
    answer:
      'Usually not as a first step. The Bisset BMJ 2006 trial compared physiotherapy, corticosteroid injection, and wait-and-see. Injections felt better at six weeks but produced worse outcomes at twelve months, with high recurrence. The Coombes JAMA 2013 trial reinforced this, showing that adding an injection to physiotherapy was no better than physiotherapy alone, and the injection group had higher recurrence. Structured rehabilitation is the more reliable path.',
  },
  {
    question: 'How long does tennis elbow take to get better?',
    answer:
      'Most cases respond to eight to twelve weeks of structured loading, though the timeline is dictated by how long the symptoms have been there and how well the load plan can sit alongside work and training demands. The 2022 JOSPT clinical practice guideline for lateral elbow pain (Lucado et al.) supports progressive exercise therapy combined with manual therapy and education as first-line care, with clear dosing rather than long avoidance.',
  },
  {
    question: 'Can I keep working or lifting with elbow pain?',
    answer:
      'Usually yes, with adjustments. Full rest tends to make tendinopathy more reactive, not less. The typical move is to keep the activity but change the dose, grip diameter, tool weight, volume, or which arm leads, and pair it with a targeted loading program. A simple guide I use in clinic: pain under 3 out of 10 during an activity, settling inside 24 hours, is usually fine. Pain that lingers for days or swelling that keeps returning means the plan needs to change.',
  },
  {
    question: 'Why does my ring and little finger feel numb?',
    answer:
      'That pattern usually means the ulnar nerve is being irritated, most commonly at the inner elbow in what is called cubital tunnel syndrome. Prolonged elbow flexion, resting the elbow on hard surfaces, or sleeping with a bent elbow all provoke it. The plan focuses on unloading the nerve at the inner elbow, addressing wrist and shoulder positions in the day, and progressively adding strengthening exercises once symptoms settle. Progressive weakness or wasting in the hand needs medical review.',
  },
  {
    question: 'What is the difference between tennis elbow and golfers elbow?',
    answer:
      'They are the same type of problem on opposite sides of the elbow. Tennis elbow is lateral epicondylopathy, involving the wrist extensor tendon origin on the outside of the elbow. Golfers elbow is medial epicondylopathy, involving the wrist flexor and pronator tendon origin on the inside. Loading tests distinguish them: wrist extension against resistance provokes tennis elbow, wrist flexion against resistance provokes golfers elbow. Treatment principles are similar but the loading target is different.',
  },
  {
    question: 'Do I need a referral to see you for elbow pain in Burlington?',
    answer:
      'No referral needed in Ontario. Most extended health plans cover physiotherapy and I offer direct billing where available. Initial assessments run about an hour and include history, examination, a working diagnosis, and a clear plan. If I think something is outside physiotherapy scope, I coordinate with your family physician or an appropriate consultant rather than push on regardless.',
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
    title: 'Lateral elbow pain and muscle function impairments: clinical practice guideline',
    source: 'JOSPT (Lucado et al.)',
    year: 2022,
    summary:
      'APTA Academy of Hand and Upper Extremity Physical Therapy and Academy of Orthopaedic Physical Therapy guideline on lateral elbow tendinopathy in adults aged 18 to 65. Supports progressive exercise therapy, manual therapy, patient education, and graded return to work and activity, with clear recommendations on dosing and against passive-only approaches.',
  },
  {
    title: 'Mobilisation with movement and exercise, corticosteroid injection, or wait and see for tennis elbow: randomised trial',
    source: 'Bisset et al., BMJ',
    year: 2006,
    summary:
      'Single-blind randomised controlled trial in 198 adults with tennis elbow. Physiotherapy combining elbow mobilisation with exercise outperformed wait and see at six weeks. Corticosteroid injection was superior at six weeks but produced significantly worse outcomes than physiotherapy at twelve months, with a recurrence rate of roughly 72 percent in the injection group.',
  },
  {
    title: 'Effect of corticosteroid injection, physiotherapy, or both on clinical outcomes in lateral epicondylalgia',
    source: 'Coombes et al., JAMA',
    year: 2013,
    summary:
      'Randomised 2x2 factorial trial in 165 adults with unilateral lateral epicondylalgia. Adding corticosteroid injection to physiotherapy did not improve outcomes and was associated with higher recurrence. Physiotherapy alone produced better longer-term results than injection alone, reinforcing a structured rehabilitation-first approach.',
  },
  {
    title: 'Prevalence and determinants of lateral and medial epicondylitis: a population study',
    source: 'Shiri et al., American Journal of Epidemiology',
    year: 2006,
    summary:
      'Population-based study reporting definite lateral epicondylitis prevalence of 1.3 percent and medial epicondylitis prevalence of 0.4 percent, peaking in adults aged 45 to 54. Smoking, obesity, repetitive work, and forceful activities were identified as independent risk factors, with rates substantially higher in occupational cohorts exposed to sustained gripping.',
  },
  {
    title: 'Effectiveness of physical therapy in treating atraumatic full-thickness rotator cuff tears (MOON cohort)',
    source: 'Kuhn et al., Journal of Shoulder and Elbow Surgery',
    year: 2013,
    summary:
      'Included here because elbow pain in overhead athletes and lifters frequently sits inside a shoulder-driven chain. Around 75 percent of patients with atraumatic cuff tears avoided surgery at two years with a specific physical therapy protocol, supporting shoulder-first thinking when elbow symptoms travel up the chain.',
  },
];

// Conditions to feature in the related block, in display order
const relatedConditionSlugs: string[] = [
  'tennis-elbow',
  'golfers-elbow',
  'carpal-tunnel-syndrome',
  'repetitive-strain-injuries',
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

export default function ElbowPainHubPage() {
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
        name: 'Elbow Pain',
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
      name: 'Elbow pain',
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
                <span className="text-slate-900 font-medium">Elbow Pain</span>
              </nav>

              <h1 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-slate-900 mb-4">
                Elbow Pain Treatment in Burlington
              </h1>

              <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl">
                Elbow pain breaks down into a small number of recognisable patterns. Pain on the
                outside is usually tennis elbow. Pain on the inside is usually golfers elbow.
                Numbness in the fingers has its own distinct map. This page is a guide I use with
                patients to sort where the pain is, what usually drives it, and how I go about
                treating it.
              </p>

              <p className="text-xs text-slate-500 mt-3">
                Assessing and treating elbow pain at the Burlington clinic. Convenient for
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
                  Outside, inside, or nerve: elbow pain has a simple map
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p>
                  Elbow pain sorts itself cleanly. Pain on the outside of the elbow that flares
                  when you grip, pour, or shake a hand is almost always tennis elbow. Pain on the
                  inside that flares with wrist flexion, a golf swing, or a heavy pull is almost
                  always golfers elbow. Numbness in the ring and little finger points to the
                  ulnar nerve at the inner elbow. Numbness in the thumb, index, and middle
                  fingers points to the median nerve at the wrist, even when the pain feels like
                  it is coming from further up the arm. A diffuse forearm aching without a clear
                  single painful spot is usually an overuse pattern. Those five pictures cover
                  most of what walks into clinic.
                </p>
                <p>
                  The honest version: most elbow pain in adults is tendon-driven and responds
                  well to structured rehabilitation. The JOSPT 2022 lateral elbow pain clinical
                  practice guideline, the Bisset BMJ 2006 trial, and the Coombes JAMA 2013 trial
                  all point the same way. Graded exercise therapy, manual therapy as an adjunct,
                  and clear load management produce the strongest long-term outcomes, while
                  corticosteroid injections tend to feel better short-term but worsen longer-term
                  outcomes. What changes between people is the tissue, the work or sport demands
                  driving it, and how load needs to be dosed.
                </p>
                <p>
                  The rest of this page walks through the common sources of elbow pain grouped
                  by where they sit, the red flags that sit outside physiotherapy scope, how I
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
                A quick guide to the most common sources of elbow and forearm pain by location.
                Use it to find the deeper page that most closely matches your pattern. If your
                picture overlaps a few of these, that is normal and worth an assessment.
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

        {/* How I approach elbow pain */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-slate-900 rounded-xl">
                  <AcademicCapIcon className="h-5 w-5 text-[#B08D57]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">
                  How I approach elbow pain in clinic
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p>
                  The first appointment runs on questions before it runs on equipment. Where does
                  the pain sit, how did it start, what makes it worse, what makes it better. The
                  small details do real work. Whether a new role, sport, or gym block ramped up
                  gripping faster than the tendon could adapt. Whether it came on after a specific
                  lift or fall, or gradually over weeks. What your typical day actually looks like
                  in terms of grip, typing, and tool use. Whether symptoms travel into the hand
                  or the fingers, and which fingers. By the time the history is done I usually
                  have two or three working hypotheses, and the physical exam is about confirming
                  or ruling them out.
                </p>
                <p>
                  From there, the exam goes region by region. I watch active elbow and wrist
                  range, check grip strength where useful, and run the targeted tests that move
                  the needle: resisted wrist extension and middle-finger extension for tennis
                  elbow, resisted wrist flexion and pronation for golfers elbow, Tinel and elbow
                  flexion tests for cubital tunnel, and Phalen and median nerve tests if the
                  picture points further down the arm. Where palpation is relevant, it is
                  directed by the working hypothesis rather than applied as a routine sweep. I
                  screen the neck and shoulder every time, because cervical radiculopathy and
                  shoulder mechanics can drive apparent elbow pain.
                </p>
                <p>
                  The plan that comes out of that is individual, but it tends to have the same
                  shape. Settle the irritable tissue by adjusting load rather than removing it,
                  which might include changing grip diameter, tool choice, desk setup, training
                  volume, or lifting technique. Build capacity with progressive strengthening
                  exercises dosed to your current tolerance, usually isometric first if the
                  tissue is reactive, then slow heavy loading through the wrist extensors or
                  flexors as tolerance improves. Joint mobilization, soft tissue therapy, dry
                  needling, or cupping sit alongside that work where they help it move faster. I
                  write the plan down with you and track a handful of markers so it is clear
                  whether it is actually working. If it is not, I change direction sooner rather
                  than later.
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
                  Elbow pain questions I hear most
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
                The recommendations above draw on clinical practice guidelines and published
                trials. Research evolves, but these are the anchor sources I rely on when I plan
                elbow pain care.
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
                  Related elbow, forearm, and wrist conditions
                </h2>
              </div>
              <p className="text-slate-600 max-w-3xl mb-8">
                Deeper pages for each of the specific conditions that sit under elbow pain.
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
                  Treatments that commonly sit inside an elbow plan
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
                    I see patients for elbow pain at Endorphins Health & Wellness Centre in
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
                      Book an Initial Elbow Assessment
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
