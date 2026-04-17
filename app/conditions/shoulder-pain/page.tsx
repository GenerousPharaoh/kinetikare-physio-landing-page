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

const PAGE_URL = 'https://www.kinetikarephysio.com/conditions/shoulder-pain';
const PAGE_TITLE = 'Shoulder Pain Treatment in Burlington | Kareem Hassanein Physiotherapy';
const PAGE_DESCRIPTION =
  'Shoulder pain treatment in Burlington with Kareem Hassanein, Registered Physiotherapist. Rotator cuff, frozen shoulder, AC joint, and biceps pain assessed and treated.';

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
        alt: 'Shoulder Pain Treatment in Burlington - Kareem Hassanein Physiotherapy',
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
    region: 'Top of the shoulder (AC joint)',
    subtitle: 'Tenderness at the bony bump on the top of the shoulder',
    description:
      'Pain sits right on top of the shoulder over the acromioclavicular joint, often after a fall onto the tip of the shoulder or years of overhead pressing. Reaching across the body to the opposite shoulder is a classic aggravator, as is lying directly on that side. Point tenderness over that bump is a strong clue.',
    commonSources: [
      {
        slug: 'ac-joint-injuries',
        label: 'AC joint injuries',
        note: 'Sprains, separations, or degenerative AC joint pain, tender on top with cross-body reach.',
      },
    ],
  },
  {
    region: 'Front of the shoulder (anterior / biceps groove)',
    subtitle: 'Ache in the front of the shoulder or down the biceps',
    description:
      'Pain sits in the front of the shoulder, sometimes tracking into the biceps muscle. Often worse with overhead reaching, pulling, or lifting away from the body. Speed and Yergason tests that load the biceps at the front of the shoulder tend to reproduce the symptoms.',
    commonSources: [
      {
        slug: 'biceps-tendinopathy',
        label: 'Biceps tendinopathy',
        note: 'Anterior shoulder pain with overhead work, pulling, and biceps loading. Often coexists with rotator cuff issues.',
      },
      {
        slug: 'shoulder-instability',
        label: 'Shoulder instability',
        note: 'Anterior apprehension with overhead positions, sometimes a sense the shoulder wants to slip.',
      },
    ],
  },
  {
    region: 'Side of the arm (deltoid / lateral)',
    subtitle: 'Ache down the outside of the upper arm, painful arc on lifting',
    description:
      'Pain referred into the side of the upper arm, with a painful arc between roughly 60 and 120 degrees of shoulder elevation, weakness reaching into a cupboard, and trouble sleeping on that side. This is the classic rotator cuff and subacromial picture, and it is the most common shoulder presentation I see in clinic.',
    commonSources: [
      {
        slug: 'rotator-cuff-injuries',
        label: 'Rotator cuff injuries',
        note: 'Tendinopathy or tears of the rotator cuff. Lateral deltoid referral, painful arc, and weakness with elevation.',
      },
      {
        slug: 'shoulder-impingement',
        label: 'Shoulder impingement',
        note: 'Subacromial pain with overhead reaching and reaching behind the back, often tied to scapular mechanics.',
      },
      {
        slug: 'shoulder-bursitis',
        label: 'Shoulder bursitis',
        note: 'Subacromial bursal irritation that usually sits within a broader rotator cuff and impingement picture.',
      },
    ],
  },
  {
    region: 'Whole shoulder, stiff in every direction',
    subtitle: 'Global loss of range with passive external rotation restricted',
    description:
      'A shoulder that cannot get anywhere. Tucking in a shirt, fastening a bra, reaching for a seatbelt, putting on a jacket all become difficult. Night pain is common in the earlier inflammatory phase. The hallmark on exam is passive external rotation that is clearly restricted compared with the other side, often with little difference whether you relax or try to help.',
    commonSources: [
      {
        slug: 'frozen-shoulder',
        label: 'Frozen shoulder (adhesive capsulitis)',
        note: 'Gradual loss of active and passive range in every direction. Can follow a period of underloading or injury, more common in people aged 40 to 60 and in people with diabetes.',
      },
    ],
  },
  {
    region: 'With cervical or neck symptoms',
    subtitle: 'Shoulder pain paired with neck stiffness or arm symptoms',
    description:
      'Pain that sits in the upper trap and top of the shoulder blade, sometimes with pins and needles into the arm or hand, often has a cervical driver rather than a shoulder one. Head position, neck movement, and certain loaded positions change the symptoms. A careful screen separates a true shoulder problem from referred neck pain or cervical radiculopathy.',
    commonSources: [
      {
        slug: 'shoulder-bursitis',
        label: 'Shoulder bursitis',
        note: 'Sometimes sits alongside cervical pain and altered scapular mechanics in desk-based workers.',
      },
      {
        slug: 'rotator-cuff-injuries',
        label: 'Rotator cuff injuries with cervical component',
        note: 'Rotator cuff pain can coexist with stiff or irritable cervical segments and needs screening for both.',
      },
    ],
  },
];

// Red flags: when to seek urgent medical care rather than physio
const redFlags: Array<{ sign: string; action: string }> = [
  {
    sign: 'Sudden inability to lift the arm after trauma, especially with bruising or obvious deformity',
    action: 'Go to emergency or urgent care to rule out fracture, dislocation, or a significant rotator cuff rupture.',
  },
  {
    sign: 'Numbness, tingling, or weakness travelling into the hand',
    action: 'See your physician to investigate possible cervical radiculopathy or peripheral nerve involvement before rehabilitation.',
  },
  {
    sign: 'Hot, red, swollen shoulder with fever or feeling systemically unwell',
    action: 'Seek same-day medical review to rule out septic arthritis or other inflammatory joint conditions.',
  },
  {
    sign: 'Night pain that is severe, constant, and disproportionate to daytime activity',
    action: 'Book a physician review to investigate for other sources such as bone, cardiac referral, or inflammatory disease.',
  },
  {
    sign: 'Left shoulder pain with chest tightness, breathlessness, or nausea',
    action: 'Call 911 or go to emergency. Shoulder pain can be a referred symptom of a cardiac event.',
  },
  {
    sign: 'Unexplained weight loss, night sweats, or a history of cancer with new shoulder pain',
    action: 'See your family physician for medical workup before starting physiotherapy.',
  },
];

// FAQ content (answer length deliberately varied: short for simple questions, longer for complex)
const faqs: Array<{ question: string; answer: string }> = [
  {
    question: 'Do I need an MRI for shoulder pain?',
    answer:
      'Most shoulder pain does not need imaging to start physiotherapy. Rotator cuff tendinopathy, shoulder impingement, and early frozen shoulder are clinical diagnoses built from history and exam. MRI is most useful when the picture points to a structural problem that would change the plan: suspected full-thickness cuff tear in a younger patient, progressive neurological symptoms, or a case not responding the way a careful exam predicted. I flag when imaging will actually change management rather than ordering it by default.',
  },
  {
    question: 'Can physiotherapy fix a rotator cuff tear?',
    answer:
      'Many atraumatic rotator cuff tears respond well to structured rehabilitation. The MOON cohort study (Kuhn et al., JSES 2013) followed patients with atraumatic full-thickness cuff tears through a specific physical therapy protocol and found roughly 75 percent avoided surgery at two years, with long-term follow-up holding at around ten years. Tears after significant trauma in younger patients, or tears that fail a proper rehab block, are different situations, and I refer on for a surgical opinion when that is the right call.',
  },
  {
    question: 'Why does my shoulder hurt at night?',
    answer:
      'Lying on the affected side compresses the rotator cuff and subacromial structures, and rolling off it in your sleep pulls the arm into provocative positions. Rotator cuff tendinopathy and frozen shoulder both tend to flare at night for this reason. Sleep positioning, pillow setup, and a progressive loading plan usually settle it over a few weeks, without needing to rely on anti-inflammatories long-term. Severe, constant night pain that does not ease in any position warrants medical review.',
  },
  {
    question: 'How long does frozen shoulder take to recover?',
    answer:
      'Frozen shoulder runs a long course. The older literature described three phases totalling up to two or three years, though most people see meaningful progress much sooner with structured care. The UK FROST trial (Rangan et al., Lancet 2020) compared early structured physiotherapy with a steroid injection against two surgical options and found no superiority of the surgical treatments on patient-reported outcomes at twelve months. Physiotherapy with a steroid injection where appropriate is a reasonable first-line path for most people.',
  },
  {
    question: 'Is it safe to keep training at the gym with shoulder pain?',
    answer:
      'Usually yes, with adjustments. Full rest tends to make most shoulder conditions more reactive, not less. The typical move is to drop the specific provoking positions, bench pressing below the shoulder line, deep overhead pressing, or behind-the-neck work, and build around tolerable variations. I pair that with targeted rotator cuff and scapular strengthening exercises dosed to your current tolerance. Pain under 3 out of 10 during a session that settles inside 24 hours is usually fine.',
  },
  {
    question: 'What is the difference between impingement and a rotator cuff tear?',
    answer:
      'They sit on a spectrum. Shoulder impingement describes a pattern of subacromial pain, often from altered scapular mechanics, cuff weakness, or overhead load that has outgrown current capacity. Rotator cuff tendinopathy and partial tears are the tissue findings that often accompany it. A full-thickness tear is a different category, with weakness out of proportion to pain and sometimes a clear injury behind it. The assessment clarifies which side of that spectrum your picture sits on.',
  },
  {
    question: 'Does shoulder surgery work better than physiotherapy?',
    answer:
      'For most non-traumatic shoulder pain, no. The CSAW trial (Beard et al., Lancet 2018) compared arthroscopic subacromial decompression against placebo surgery and against no treatment in patients who had already completed non-operative care. Decompression offered no clinically meaningful advantage over placebo. The JOSPT 2022 rotator cuff guideline specifically recommends against subacromial decompression for rotator cuff tendinopathy. Structured rehabilitation is first-line, and surgery is reserved for cases where it is genuinely indicated.',
  },
  {
    question: 'Do I need a referral to see you for shoulder pain in Burlington?',
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
    title: 'Diagnosing, managing, and supporting return to work of adults with rotator cuff disorders: clinical practice guideline',
    source: 'JOSPT (Lafrance, Desmeules et al.)',
    year: 2022,
    summary:
      'International clinical practice guideline recommending active, task-oriented rehabilitation combining exercise and education as first-line care for rotator cuff disorders. The guideline specifically recommends against subacromial decompression for rotator cuff tendinopathy and positions surgery as appropriate only for selected full-thickness tears.',
  },
  {
    title: 'Shoulder pain and mobility deficits: adhesive capsulitis clinical practice guideline',
    source: 'JOSPT (Kelley et al.)',
    year: 2013,
    summary:
      'APTA Orthopaedic Section guideline on frozen shoulder. Supports patient education on the natural course, stretching matched to the current irritability stage, joint mobilization, and modalities for pain modulation, with intra-articular corticosteroid injection considered for more severe pain in the inflammatory phase.',
  },
  {
    title: 'Management of adults with primary frozen shoulder in secondary care (UK FROST): a three-arm randomised trial',
    source: 'Rangan et al., The Lancet',
    year: 2020,
    summary:
      'Multicentre pragmatic trial in 503 adults with primary frozen shoulder comparing early structured physiotherapy with steroid injection, manipulation under anaesthesia, and arthroscopic capsular release. None of the three treatments were superior on patient-reported outcomes at twelve months, supporting a physiotherapy-first pathway for most patients.',
  },
  {
    title: 'Arthroscopic subacromial decompression for subacromial shoulder pain (CSAW): a placebo-controlled randomised trial',
    source: 'Beard et al., The Lancet',
    year: 2018,
    summary:
      'Placebo-controlled trial of 313 adults with subacromial shoulder pain who had already completed non-operative care. Arthroscopic decompression was no better than placebo arthroscopy, questioning the added value of this surgery over conservative management for rotator cuff related shoulder pain.',
  },
  {
    title: 'Effectiveness of physical therapy in treating atraumatic full-thickness rotator cuff tears (MOON cohort)',
    source: 'Kuhn et al., Journal of Shoulder and Elbow Surgery',
    year: 2013,
    summary:
      'Multicenter prospective cohort study following a specific physical therapy protocol in 452 patients with atraumatic full-thickness rotator cuff tears. Approximately 75 percent avoided surgery at two years, with long-term follow-up from the same cohort showing outcomes holding beyond a decade.',
  },
];

// Conditions to feature in the related block, in display order
const relatedConditionSlugs: string[] = [
  'rotator-cuff-injuries',
  'shoulder-impingement',
  'frozen-shoulder',
  'shoulder-instability',
  'biceps-tendinopathy',
  'ac-joint-injuries',
  'shoulder-bursitis',
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

export default function ShoulderPainHubPage() {
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
        name: 'Shoulder Pain',
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
      name: 'Shoulder pain',
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
                <span className="text-slate-900 font-medium">Shoulder Pain</span>
              </nav>

              <h1 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-slate-900 mb-4">
                Shoulder Pain Treatment in Burlington
              </h1>

              <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl">
                Shoulder pain is rarely one condition. The label covers everything from a rotator
                cuff that no longer tolerates overhead work, to an AC joint bruised from a fall,
                to a whole shoulder that has gradually locked down. This page is a guide I use
                with patients to map where the pain is, what usually drives it, and how I go
                about treating it.
              </p>

              <p className="text-xs text-slate-500 mt-3">
                Assessing and treating shoulder pain at the Burlington clinic. Convenient for
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
                  Shoulder pain tells its story by location, movement, and age
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p>
                  &ldquo;My shoulder hurts&rdquo; can mean half a dozen different things. One
                  person points to the top of the shoulder and tells me they cannot lie on that
                  side anymore. Another describes a painful arc partway through lifting the arm
                  and a weakness reaching into the cupboard. A third cannot tuck in a shirt and
                  has lost range in every direction. A fourth fell on the tip of the shoulder
                  last weekend and now cannot reach across the body. All common, all real, and
                  all treated very differently. So the first job on your first visit is simply
                  sorting out which of these pictures is actually yours.
                </p>
                <p>
                  The honest version: most shoulder pain in adults is mechanical and manageable.
                  The JOSPT rotator cuff guideline, the Kelley adhesive capsulitis guideline, the
                  UK FROST trial in the Lancet, and the CSAW trial of subacromial decompression
                  all point the same way. Education, graded strengthening, and sensible load
                  management produce the strongest long-term outcomes. Hands-on work sits
                  alongside that, not in place of it. What changes between people is the tissue,
                  the history, and how load needs to be dosed.
                </p>
                <p>
                  The rest of this page walks through the common sources of shoulder pain grouped
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
                A quick guide to the most common sources of shoulder pain by location. Use it to
                find the deeper page that most closely matches your pattern. If your picture
                overlaps a few of these, that is normal and worth an assessment.
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

        {/* How I approach shoulder pain */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-slate-900 rounded-xl">
                  <AcademicCapIcon className="h-5 w-5 text-[#B08D57]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">
                  How I approach shoulder pain in clinic
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p>
                  The first appointment runs on questions before it runs on equipment. Where does
                  the pain sit, how did it start, what makes it worse, what makes it better. The
                  small details do real work. Whether you can sleep on that side. Whether
                  overhead work at the gym, painting a ceiling, or unloading a shelf flared it.
                  Whether there was a fall onto the shoulder or the tip of the shoulder. Whether
                  range has been gradually closing down rather than just being painful. By the
                  end of the history I usually have two or three working hypotheses, and the
                  physical exam is about confirming or ruling them out.
                </p>
                <p>
                  I look at how you move before I test what hurts. Watching you reach overhead,
                  behind the back, and across the body tells me more than any single provocation
                  test. From there I check shoulder range actively and passively, strength
                  through the rotator cuff and scapular muscles, and the targeted tests that
                  separate the usual patterns: Neer and Hawkins-Kennedy and the painful arc for
                  subacromial pain, external rotation strength and the drop-arm test for the cuff,
                  Speed and Yergason for the biceps, cross-body adduction and tenderness for the
                  AC joint, and clearly restricted passive external rotation as the hallmark of
                  frozen shoulder. I screen the cervical spine every time, because neck-driven
                  pain masquerades as shoulder pain more often than people realise.
                </p>
                <p>
                  The plan that comes out of that is individual, but it tends to have the same
                  shape. Settle the irritable tissue with a short list of things to stop doing
                  and a few things to add in, including adjusting training volume, press
                  variations, or overhead work at home. Build capacity with progressive
                  strengthening exercises dosed to your current tolerance, usually across the
                  rotator cuff, the scapular stabilisers, the thoracic spine, and the wider
                  kinetic chain. Joint mobilization, soft tissue therapy, dry needling, or
                  cupping sit alongside that work where they speed things along. I write the plan
                  down with you and track a handful of markers so you can see whether it is
                  actually working. If it is not, I change direction sooner rather than later.
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
                  Shoulder pain questions I hear most
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
                shoulder pain care.
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
                  Related shoulder and upper limb conditions
                </h2>
              </div>
              <p className="text-slate-600 max-w-3xl mb-8">
                Deeper pages for each of the specific conditions that sit under shoulder pain.
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
                  Treatments that commonly sit inside a shoulder plan
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
                    I see patients for shoulder pain at Endorphins Health & Wellness Centre in
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
                      <span className="text-white">1:30 PM - 7:30 PM</span>
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
                      Book an Initial Shoulder Assessment
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
