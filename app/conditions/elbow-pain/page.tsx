import { JANE_BOOKING_URL } from '@/lib/booking';
import { serializeJsonLd } from '@/lib/structured-data';
import Link from 'next/link';
import Image from 'next/image';
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
  contentDateFor,
  SEO_AUTHOR,
  SEO_ORGANIZATION_ID,
  SEO_PERSON_ID,
  SEO_PUBLISHER,
} from '@/lib/seo-metadata';
import { getConditionBySlug } from '@/lib/conditions-data';
import { getTreatmentById } from '@/lib/treatments-data';
import ConsentNote from '@/components/conditions/ConsentNote';

import HoursList from '@/components/HoursList';
import { HUB_ILLUSTRATION, ILLUSTRATIONS } from '@/lib/illustrations';
import { inlineName } from '@/lib/text';
import RedFlagsBox, { RedFlagsLink } from '@/components/conditions/RedFlagsBox';
import SourceLinks from '@/components/conditions/SourceLinks';
import type { SourceRef } from '@/lib/source-refs';

const HUB_ART = ILLUSTRATIONS[HUB_ILLUSTRATION['elbow-pain']];
const PAGE_URL = 'https://www.kinetikarephysio.com/conditions/elbow-pain';
const PAGE_TITLE = 'Elbow Pain Treatment in Burlington | Kareem Hassanein';
const PAGE_DESCRIPTION =
  'Elbow pain treatment in Burlington with a Registered Physiotherapist. Tennis elbow, golfer\'s elbow, and forearm nerve symptoms assessed and treated.';

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
    ...(contentDateFor('/conditions/elbow-pain')
      ? { modifiedTime: contentDateFor('/conditions/elbow-pain') }
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
      'Point tenderness at the bony bump on the outside of the elbow, with pain on gripping, pouring a kettle, a firm handshake, or lifting a coffee cup by the handle. This often fits tennis elbow, and many people who have it do not play tennis. Loading the wrist extensors often reproduces the symptoms, and I also screen the nerves and the neck.',
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
        label: 'Golfer\'s elbow (medial epicondylopathy)',
        note: 'Pain on the inside of the elbow with wrist flexion, gripping, or throwing load. Often coexists with wrist flexor and pronator tightness.',
      },
    ],
  },
  {
    region: 'Numbness in the ring and little fingers',
    subtitle: 'Cubital tunnel pattern at the inner elbow',
    description:
      'Tingling or numbness in the ring and little fingers, often worse when the elbow is bent for long periods such as on the phone, reading, or sleeping with a bent elbow. Sometimes with weakness of grip or clumsiness with fine hand tasks. This pattern often fits cubital tunnel syndrome, where the ulnar nerve is irritated at the inner elbow, although the neck can produce similar symptoms. If symptoms are more in the thumb, index, and middle fingers, the source is often at the wrist instead: the contrasting pattern below.',
    commonSources: [
      {
        slug: 'carpal-tunnel-syndrome',
        label: 'Carpal tunnel syndrome (a contrasting pattern)',
        note: 'Median nerve compression at the wrist. Numbness in the thumb, index, and middle fingers, often worse at night, rather than the little finger. Sometimes mistaken for elbow or forearm pain.',
      },
    ],
  },
  {
    region: 'Diffuse forearm aching, no single spot',
    subtitle: 'Broad forearm fatigue with repetitive work',
    description:
      'Aching that spreads through the forearm without a clear single painful point, often linked to repetitive gripping, typing, or fine hand work. It often reflects more load than the forearm is currently used to rather than a specific structural injury, and it does not mean the tissue is being damaged. Wrist, elbow, neck, and shoulder contributions all need to be assessed together.',
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
    sign: 'New arm or elbow discomfort with chest pressure or pain, shortness of breath, sweating, nausea or light-headedness. Symptoms can affect either arm.',
    action: 'Call 911 now. These can be warning signs of a heart attack.',
  },
  {
    sign: 'Arm pain with neck pain, persistent numbness, or weakness that is slowly getting worse',
    action: 'Arrange a medical assessment before starting physiotherapy, since the source may be a nerve in the neck.',
  },
  {
    sign: 'New or worsening hand clumsiness, or trouble walking or balancing, alongside arm symptoms',
    action: 'Get a same-day medical assessment before any exercise. This can mean pressure on the spinal cord in the neck.',
  },
  {
    sign: 'Arm or hand weakness that gets worse rapidly, or clumsiness or balance changes that start suddenly, worsen rapidly or make walking difficult',
    action: 'Go to emergency now.',
  },
  {
    sign: 'Sudden unexplained weakness or numbness in an arm or leg, even if it improves',
    action: 'Call 911 now. This can be a stroke. Do not wait for a physiotherapy appointment.',
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
      'Most elbow pain does not need imaging to start physiotherapy. Tennis elbow and golfer\'s elbow are clinical diagnoses built from history and exam. Imaging becomes useful when the picture points to a structural problem that would change the plan: suspected fracture after trauma, progressive neurological symptoms, a case not responding the way a careful exam predicted, or when a ligament rupture is in question. When imaging would change the plan, I flag it to your family doctor or specialist and refer you.',
  },
  {
    question: 'Is it really tennis elbow if I have never played tennis?',
    answer:
      'Yes, tennis elbow can develop without playing tennis. The name sticks, but tennis elbow is a lateral elbow tendinopathy often associated with desk work, trades, gripping sports, or repetitive lifting. In a population study (Shiri et al., American Journal of Epidemiology 2006), definite lateral epicondylitis affected 1.3 percent of adults aged 30 to 64, and the odds were higher in people whose activities combined forceful work with repetitive arm movements. What matters is the pattern on exam, not the sport.',
  },
  {
    question: 'Are cortisone injections a good idea for tennis elbow?',
    answer:
      'Usually not as a first step. The Bisset BMJ 2006 trial compared physiotherapy, corticosteroid injection, and wait-and-see. Injections felt better at six weeks but produced worse outcomes at twelve months, with high recurrence. The Coombes JAMA 2013 trial reinforced this, showing that adding an injection to physiotherapy was no better than physiotherapy alone, and the injection group had higher recurrence. I usually start with structured rehabilitation, and any injection decision belongs with a physician.',
  },
  {
    question: 'How long does tennis elbow take to get better?',
    answer:
      'Many people improve over a few months of structured loading, though the timeline depends on how long the symptoms have been there and how well the load plan can sit alongside work and training demands. The 2022 JOSPT clinical practice guideline for lateral elbow pain (Lucado et al.) recommends resistance exercise for the wrist extensors, often combined with manual therapy such as elbow joint mobilization.',
  },
  {
    question: 'Can I keep working or lifting with elbow pain?',
    answer:
      'Usually yes, with adjustments. Complete rest does not usually build a tendon\'s tolerance for the work you need it to do. The typical move is to keep the activity but change the dose, grip diameter, tool weight, volume, or which arm leads, and pair it with a targeted loading program. A simple guide I use in clinic: pain under 3 out of 10 during an activity, settling inside 24 hours, is usually fine. Pain that lingers for days or swelling that keeps returning means the plan needs to change.',
  },
  {
    question: 'Why does my ring and little finger feel numb?',
    answer:
      'That pattern usually means the ulnar nerve is being irritated, most commonly at the inner elbow in what is called cubital tunnel syndrome. Prolonged elbow flexion, resting the elbow on hard surfaces, or sleeping with a bent elbow all provoke it. The plan focuses on unloading the nerve at the inner elbow, addressing wrist and shoulder positions in the day, and progressively adding strengthening exercises once symptoms settle. Progressive weakness or wasting in the hand needs medical review.',
  },
  {
    question: 'What is the difference between tennis elbow and golfer\'s elbow?',
    answer:
      'They are the same type of problem on opposite sides of the elbow. Tennis elbow is lateral epicondylopathy, involving the wrist extensor tendon origin on the outside of the elbow. Golfer\'s elbow is medial epicondylopathy, involving the wrist flexor and pronator tendon origin on the inside. Resisted tests help tell them apart: wrist extension against resistance often provokes tennis elbow, wrist flexion against resistance often provokes golfer\'s elbow. Inner elbow pain can also come from the ulnar nerve or a ligament, so I check those too. Treatment principles are similar but the loading target is different.',
  },
  {
    question: 'Do I need a referral to see you for elbow pain in Burlington?',
    answer:
      'No referral needed in Ontario. Most extended health plans cover physiotherapy and I offer direct billing where available. Initial assessments run about 45 minutes and include history, examination, a working diagnosis, and a clear plan. If I think something is outside physiotherapy scope, I coordinate with your family physician or an appropriate consultant rather than push on regardless.',
  },
];

// Evidence / research citations
interface ResearchItem {
  title: string;
  source: string;
  year: number;
  summary: string;
  refs?: SourceRef[];
}

const research: ResearchItem[] = [
  {
    title: 'Lateral elbow pain and muscle function impairments: clinical practice guideline',
    source: 'JOSPT (Lucado et al.)',
    year: 2022,
    summary:
      'Guideline from the APTA Academy of Hand and Upper Extremity Physical Therapy and Academy of Orthopaedic Physical Therapy on lateral elbow tendinopathy in adults. It recommends resistance exercise for the wrist extensors, often combined with manual therapy such as elbow joint mobilization, and suggests a phased return to demanding work, sport or hobbies.',
    refs: [{ pmid: '36453071' }],
  },
  {
    title: 'Mobilisation with movement and exercise, corticosteroid injection, or wait and see for tennis elbow: randomised trial',
    source: 'Bisset et al., BMJ',
    year: 2006,
    summary:
      'Single-blind randomised controlled trial in 198 adults with tennis elbow. Physiotherapy combining elbow mobilisation with exercise did better than wait and see at six weeks. Corticosteroid injection gave the most relief at six weeks, but 47 of the 65 people who did well after it (about 72 percent) relapsed, and long-term results were worse than with physiotherapy.',
    refs: [{ pmid: '17012266' }],
  },
  {
    title: 'Effect of corticosteroid injection, physiotherapy, or both on clinical outcomes in lateral epicondylalgia',
    source: 'Coombes et al., JAMA',
    year: 2013,
    summary:
      'Randomised 2x2 factorial trial in 165 adults with unilateral lateral epicondylalgia. A corticosteroid injection led to worse results at one year than a placebo injection, with more recurrence (54 percent vs 12 percent). Physiotherapy helped more people improve by four weeks in those who had the placebo injection, but made no significant difference at one year.',
    refs: [{ pmid: '23385272' }],
  },
  {
    title: 'Prevalence and determinants of lateral and medial epicondylitis: a population study',
    source: 'Shiri et al., American Journal of Epidemiology',
    year: 2006,
    summary:
      'Population study of 4,783 Finnish adults aged 30 to 64. Definite lateral epicondylitis affected 1.3 percent and medial epicondylitis 0.4 percent, highest at ages 45 to 54. Smoking, and repetitive arm movements combined with forceful activities, were linked to lateral epicondylitis; smoking, obesity, repetitive movements and forceful activities were each linked to medial epicondylitis.',
    refs: [{ pmid: '16968862' }],
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
    ...(contentDateFor('/conditions/elbow-pain')
      ? { dateModified: contentDateFor('/conditions/elbow-pain') }
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
        <section className="relative !bg-none pt-24 pb-6 lg:pb-0" style={{ backgroundColor: HUB_ART.paper }}>
          {/* The drawing on the page: the section takes the illustration's own paper colour so there is no edge. */}
          <div className="lg:grid lg:grid-cols-[42%_1fr] lg:items-stretch">
            <div className="relative h-[58vw] max-h-[460px] lg:h-auto lg:max-h-none lg:min-h-[600px] overflow-hidden mb-6 lg:mb-0" aria-hidden="true">
              <Image
                src={HUB_ART.src}
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
                style={{ objectPosition: '50% 30%' }}
              />
              <div className="absolute inset-0 hidden lg:block" style={{ background: `linear-gradient(to right, transparent 72%, ${HUB_ART.paper})` }} />
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:pt-10 lg:pb-12 lg:self-center">
            <div className="w-full max-w-5xl">
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-600 mb-4">
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
                Elbow pain often follows a few recognisable patterns. Pain on the outside often
                involves the tendons used for gripping. Pain on the inside can involve tendons, a
                nerve, or a ligament. Numbness in the fingers has its own map. This page is a
                guide I use with patients as a starting point for the assessment, what often
                drives the pain, and how I go about treating it.
              </p>

              <p className="text-xs text-slate-600 mt-3">
                Assessing and treating elbow pain at the Burlington clinic. Convenient for
                Waterdown, Oakville, Hamilton, Flamborough, and Carlisle residents.
              </p>

              <RedFlagsLink className="mt-3" />

              {/* Primary actions */}
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <Link
                  href={JANE_BOOKING_URL} data-booking-source="hub_page"
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
                  href="/conditions"
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-700 text-sm font-medium hover:border-[#B08D57] hover:text-[#B08D57] transition-colors"
                >
                  View All Conditions
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
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
                  Outside, inside, or nerve: a starting map for elbow pain
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p>
                  Pain location is a useful starting point. Outer elbow pain with gripping,
                  pouring, or a handshake often fits tennis elbow. Inner elbow pain can involve
                  the flexor tendons (golfer&rsquo;s elbow), the ulnar nerve, or a ligament.
                  Numbness centred on the little finger and the little-finger side of the ring
                  finger often involves the ulnar nerve at the inner elbow. Numbness in the
                  thumb, index, and middle fingers often involves the median nerve at the wrist,
                  even when the pain feels like it is coming from further up the arm. A diffuse
                  forearm ache without a clear single painful spot is often an overuse pattern.
                  Symptoms can overlap, so I check the movement pattern, the neck, and the rest
                  of the arm.
                </p>
                <p>
                  Much elbow pain in adults involves a tendon and can respond to structured
                  rehabilitation. For outer elbow pain, the JOSPT 2022 lateral elbow pain clinical
                  practice guideline, the Bisset BMJ 2006 trial, and the Coombes JAMA 2013 trial
                  point the same way. Graded exercise therapy, manual therapy as an adjunct,
                  and clear load management are supported for longer-term outcomes, while
                  corticosteroid injections tend to feel better short-term but were linked to
                  worse longer-term outcomes in those trials. What changes between people is the tissue, the work or sport demands
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

        <RedFlagsBox flags={redFlags} />

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
                  small details matter. Whether a new role, sport, or gym block ramped up
                  gripping faster than the tendon could adapt. Whether it came on after a specific
                  lift or fall, or gradually over weeks. What your typical day actually looks like
                  in terms of grip, typing, and tool use. Whether symptoms travel into the hand
                  or the fingers, and which fingers. By the time the history is done I usually
                  have two or three working hypotheses, and the physical exam is about confirming
                  or ruling them out.
                </p>
                <p>
                  From there, the exam goes region by region. I watch active elbow and wrist
                  range, check grip strength where useful, and run the targeted tests that help
                  separate the options: resisted wrist extension and middle-finger extension for
                  tennis elbow, resisted wrist flexion and pronation for golfer&rsquo;s elbow, Tinel and elbow
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
                  needling, or cupping can sit alongside that work where they help. I
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
                      <h3 className="text-base font-semibold text-slate-900 group-hover:text-[#B08D57] transition-colors">
                        {faq.question}
                      </h3>
                      <ChevronDownIcon className="h-4 w-4 text-slate-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                    </summary>
                    <div className="px-5 pb-5 pt-0">
                      <p className="text-base text-slate-700 leading-relaxed">
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
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#B08D57]/10 text-[#80650A] text-xs font-semibold uppercase tracking-wider">
                        {item.year}
                      </span>
                      <span className="text-xs text-slate-500">{item.source}</span>
                    </div>
                    <h3 className="text-base font-semibold text-slate-900 leading-snug mb-2">
                      {item.title}
                    </h3>
                    <p className="text-base text-slate-700 leading-relaxed">
                      {item.summary}
                    </p>
                    <SourceLinks refs={item.refs} title={item.title} />
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
                    <p className="text-base text-slate-600 leading-relaxed flex-grow">
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
                    I see patients for elbow pain at Endorphins Health & Wellness Centre in
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
                  <HoursList />

                  <div className="mt-6">
                    <Link
                      href={JANE_BOOKING_URL} data-booking-source="hub_page"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-gold inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium transition-colors"
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
      </main>
    </>
  );
}
