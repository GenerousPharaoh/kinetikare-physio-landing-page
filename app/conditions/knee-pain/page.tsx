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

const PAGE_URL = 'https://www.kinetikarephysio.com/conditions/knee-pain';
const PAGE_TITLE = 'Knee Pain Treatment in Burlington | Kareem Hassanein Physiotherapy';
const PAGE_DESCRIPTION =
  'Knee pain treatment in Burlington with Kareem Hassanein, Registered Physiotherapist. Front, medial, lateral, and posterior knee pain assessed and treated. Direct billing.';

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
        alt: 'Knee Pain Treatment in Burlington - Kareem Hassanein Physiotherapy',
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
    region: 'Front of the knee (anterior)',
    subtitle: 'Pain around or under the kneecap',
    description:
      'Aches at the front of the knee that flare with stairs, prolonged sitting, squatting, or running downhill. Pain under the kneecap often points to patellofemoral pain, while pain right at the tendon just below the kneecap points more toward patellar tendinopathy. Both are common in active adults and often share underlying strength and load patterns.',
    commonSources: [
      {
        slug: 'knee-pain-patellofemoral',
        label: 'Patellofemoral pain (runner\'s knee)',
        note: 'Diffuse pain around or under the kneecap, worse with stairs, squats, and sitting with bent knees.',
      },
      {
        slug: 'patellar-tendinopathy',
        label: 'Patellar tendinopathy (jumper\'s knee)',
        note: 'Well-localised pain at the tendon just below the kneecap, worse with jumping, landing, or deep knee bends.',
      },
    ],
  },
  {
    region: 'Inside of the knee (medial)',
    subtitle: 'Pain along the inner joint line',
    description:
      'Pain along the inner edge of the knee can come from the medial meniscus, the MCL after a valgus stress, or medial compartment osteoarthritis in older adults. Twisting injuries, a knock to the outer knee, or a gradual increase in walking and standing loads can all provoke this area. Swelling, catching, or locking raises the index of suspicion for a meniscal issue.',
    commonSources: [
      {
        slug: 'meniscus-tears',
        label: 'Meniscus tears',
        note: 'Joint-line pain with twisting, squatting, or pivoting. Can include catching, locking, or a sense of giving way.',
      },
      {
        slug: 'mcl-lcl-sprains',
        label: 'MCL sprains',
        note: 'Inner-knee pain after a valgus force, such as a tackle or awkward landing. Often improves well with guided rehabilitation.',
      },
      {
        slug: 'knee-osteoarthritis',
        label: 'Knee osteoarthritis (medial compartment)',
        note: 'Gradual inner-knee pain and stiffness with longer walks, stairs, or kneeling. Very common in adults over 50.',
      },
    ],
  },
  {
    region: 'Outside of the knee (lateral)',
    subtitle: 'Pain along the outer joint line',
    description:
      'Lateral knee pain in runners and cyclists is most often iliotibial band syndrome, where pain comes on predictably after a set distance or time. Sharper pain after a direct blow to the inner knee or a twist points toward the LCL or the lateral meniscus. Runners who recently bumped up volume, changed surfaces, or added hills are the classic IT band presentation.',
    commonSources: [
      {
        slug: 'it-band-syndrome',
        label: 'IT band syndrome',
        note: 'Sharp or burning pain on the outside of the knee that appears after a consistent running distance or downhill riding.',
      },
      {
        slug: 'mcl-lcl-sprains',
        label: 'LCL sprains',
        note: 'Outer-knee pain after a varus force, often with a sense of instability on uneven ground.',
      },
      {
        slug: 'meniscus-tears',
        label: 'Lateral meniscus tears',
        note: 'Outer joint-line pain with twisting or deep squatting, sometimes with clicking.',
      },
    ],
  },
  {
    region: 'Back of the knee (posterior)',
    subtitle: 'Pain, tightness, or swelling behind the knee',
    description:
      'Posterior knee pain can feel tight or full, especially after long walks or runs. Common sources include a Baker\'s cyst, which is usually a sign of something else going on inside the joint, hamstring or calf-origin pain, or, after dashboard-type trauma, a PCL injury. Sudden swelling behind the knee with calf pain warrants medical review to rule out a deep vein thrombosis before starting physiotherapy.',
    commonSources: [
      {
        slug: 'pcl-injuries',
        label: 'PCL injuries',
        note: 'Typically follows dashboard trauma or a fall onto a bent knee. Often produces deep posterior ache and a sense of instability going downstairs.',
      },
      {
        slug: 'hamstring-strains',
        label: 'Hamstring strains (distal)',
        note: 'Pain at the back of the knee after a sprint or stretch, often with localised tenderness just above the joint line.',
      },
      {
        slug: 'meniscus-tears',
        label: 'Posterior horn meniscus tears',
        note: 'Deep back-of-knee pain with deep squatting, kneeling, or rising from a chair.',
      },
    ],
  },
  {
    region: 'Diffuse or whole-knee pain',
    subtitle: 'Stiffness and aching that does not sit in one spot',
    description:
      'When the pain does not sit neatly in one corner of the knee, the two most common pictures are osteoarthritis and a broader pattern of patellofemoral pain. Osteoarthritis shows up as morning stiffness that eases within about thirty minutes, swelling after longer activity, and discomfort with stairs or kneeling. A thorough assessment helps separate joint-driven pain from soft-tissue overload.',
    commonSources: [
      {
        slug: 'knee-osteoarthritis',
        label: 'Knee osteoarthritis',
        note: 'Gradual onset of stiffness and aching with activity, common in adults over 50. Typically responds well to exercise-based care.',
      },
      {
        slug: 'knee-pain-patellofemoral',
        label: 'Patellofemoral pain',
        note: 'Diffuse pain around the front of the knee, often bilateral in runners and active adults.',
      },
      {
        slug: 'acl-injuries',
        label: 'ACL injuries',
        note: 'Whole-knee swelling and a sense of instability after a twisting injury with a pop. Warrants prompt assessment.',
      },
    ],
  },
];

// Red flags: when to seek urgent medical care rather than physio
const redFlags: Array<{ sign: string; action: string }> = [
  {
    sign: 'Unable to bear weight after trauma, or the knee gave way with a pop and immediate swelling',
    action: 'Go to emergency or urgent care to rule out fracture or a significant ligament rupture, in line with the Ottawa Knee Rules.',
  },
  {
    sign: 'Hot, red, swollen knee with fever or feeling systemically unwell',
    action: 'Seek same-day medical assessment to rule out septic arthritis, gout, or other inflammatory joint conditions.',
  },
  {
    sign: 'Locked knee that cannot be straightened or bent fully',
    action: 'See a physician promptly. A mechanically locked knee often needs orthopaedic review before rehabilitation can progress safely.',
  },
  {
    sign: 'Calf pain, warmth, or swelling behind the knee, particularly after travel or surgery',
    action: 'Seek urgent medical assessment to rule out deep vein thrombosis before starting physiotherapy.',
  },
  {
    sign: 'Progressive numbness, weakness, or foot drop alongside the knee pain',
    action: 'See your physician to investigate potential nerve injury or lumbar radiculopathy before rehabilitation.',
  },
  {
    sign: 'Unexplained weight loss, night pain, or a history of cancer with new knee pain',
    action: 'See your family physician for medical workup before starting physiotherapy.',
  },
];

// FAQ content (answer length deliberately varied: short for simple questions, longer for complex)
const faqs: Array<{ question: string; answer: string }> = [
  {
    question: 'Why does my knee hurt going down stairs?',
    answer:
      'Stair negotiation loads the front of the knee heavily: patellofemoral joint forces sit around three times body weight, climbing a touch higher on descent in many people. That position is classic for patellofemoral pain, patellar tendinopathy, and early knee osteoarthritis, and it usually tells me quadriceps and hip strength are not yet matched to the demand. Structured loading, not avoidance, is what changes it.',
  },
  {
    question: 'Is it safe to keep running with knee pain?',
    answer:
      'Often yes, with adjustments. Full rest tends to make most knee conditions more reactive, not less. The usual move is to modify volume, surface, and pace, and add hip and quadriceps strengthening. A simple rule I use in clinic: pain under 3 out of 10 during the run, settling inside 24 hours, is usually fine to train through. Pain that lingers for days, or a knee that swells after a run, means the plan needs to change.',
  },
  {
    question: 'When do I need an MRI for knee pain?',
    answer:
      'Most knee pain does not need imaging to start physiotherapy. For acute trauma, the Ottawa Knee Rules guide whether an X-ray is sensible. MRI is most useful when a significant internal injury is suspected: an ACL tear, a mechanically locked knee, or persistent mechanical symptoms that are not responding to conservative care. I flag when imaging will actually change the plan rather than ordering it by default.',
  },
  {
    question: 'Can physiotherapy fix a meniscus tear?',
    answer:
      'Many degenerative meniscal tears do well without surgery. The METEOR trial (NEJM 2013) and the ESCAPE trial (JAMA 2018) both showed that structured physiotherapy produced outcomes comparable to arthroscopic partial meniscectomy, with ESCAPE holding at five-year follow-up. Surgery is still the right call for certain presentations, for example a true mechanical lock or specific tear patterns in younger athletes, and I flag when a surgical opinion is worth pursuing.',
  },
  {
    question: 'How long does knee pain take to heal?',
    answer:
      'The tissue drives it. Simple muscle strains and mild MCL sprains often settle in four to eight weeks. Patellofemoral pain and IT band syndrome usually respond to six to twelve weeks of structured loading. Patellar tendinopathy typically needs three to six months of progressive rehab to rebuild capacity. Knee osteoarthritis is longer-term management, but most people see meaningful gains in pain and function inside eight to twelve weeks of guided exercise.',
  },
  {
    question: 'Will knee pain go away on its own?',
    answer:
      'Short-lived knee pain after a new activity often does, with a few days of sensible load reduction. Pain that has been there more than a few weeks, pain with swelling, or pain that keeps coming back with the same activity usually needs a structured plan. Waiting it out often prolongs things and lets strength deficits and movement habits settle in, which makes eventual recovery slower.',
  },
  {
    question: 'Should I use ice or heat for knee pain?',
    answer:
      'Both are comfort measures, and neither changes the underlying pathology. Ice helps most in the first 48 to 72 hours after an acute injury or a flare with swelling, in short 10 to 15 minute bouts. Heat tends to be more comfortable for chronic stiffness and muscle guarding, like osteoarthritis or tendon-related pain. I treat them as things that help you keep moving, not as treatments in themselves.',
  },
  {
    question: 'Do I need a referral to see you for knee pain in Burlington?',
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
    title: 'Ottawa Knee Rules for decision-making on knee radiography',
    source: 'Stiell et al., JAMA',
    year: 1997,
    summary:
      'A validated clinical decision rule for when to image an acutely injured knee. Criteria include age 55 or over, inability to flex the knee to 90 degrees, isolated tenderness over the patella or fibular head, and inability to bear weight for four steps. Sensitivity approaches 100 percent for clinically important fractures.',
  },
  {
    title: 'NICE guideline on osteoarthritis assessment and management',
    source: 'NICE NG226',
    year: 2022,
    summary:
      'UK national guidance identifying therapeutic exercise as a first-line intervention for knee osteoarthritis, alongside information, weight management where relevant, and manual therapy as an adjunct. Surgery is reserved for people who have not responded to a structured course of non-surgical care.',
  },
  {
    title: 'OARSI guidelines for non-surgical management of knee osteoarthritis',
    source: 'OARSI (Bannuru et al.), Osteoarthritis and Cartilage',
    year: 2019,
    summary:
      'International guideline that strongly recommends land-based exercise, structured education, and self-management as core treatments for knee osteoarthritis. Weight management and supervised strengthening programs are supported as high-value additions.',
  },
  {
    title: 'Physical therapy versus arthroscopic partial meniscectomy for meniscal tear with osteoarthritis',
    source: 'Katz et al., New England Journal of Medicine (METEOR trial)',
    year: 2013,
    summary:
      'A randomised trial of 351 adults with degenerative meniscal tear and knee osteoarthritis. Structured physical therapy produced functional outcomes comparable to arthroscopic partial meniscectomy at six and twelve months, supporting a conservative-first approach for this population.',
  },
  {
    title: 'Exercise therapy versus arthroscopic surgery for non-obstructive meniscal tears (ESCAPE)',
    source: 'van de Graaf et al., JAMA',
    year: 2018,
    summary:
      'A non-inferiority randomised trial in adults aged 45 to 70 with non-obstructive meniscal tears. Exercise therapy was non-inferior to arthroscopic partial meniscectomy for knee function at 24 months, reinforcing a stepped-care model that prioritises structured rehabilitation first.',
  },
  {
    title: 'JOSPT clinical practice guideline on patellofemoral pain',
    source: 'JOSPT (Willy et al.)',
    year: 2019,
    summary:
      'APTA Academy of Orthopaedic Physical Therapy guideline supporting combined hip and knee strengthening, gait retraining where appropriate, patient education, and activity modification as first-line management for patellofemoral pain, with manual therapy considered as an adjunct.',
  },
];

// Conditions to feature in the related block, in display order
const relatedConditionSlugs: string[] = [
  'knee-pain-patellofemoral',
  'patellar-tendinopathy',
  'it-band-syndrome',
  'meniscus-tears',
  'acl-injuries',
  'mcl-lcl-sprains',
  'pcl-injuries',
  'knee-osteoarthritis',
  'hamstring-strains',
];

const relatedTreatmentIds: string[] = [
  'exercise-therapy',
  'sports-rehab-return-to-sport',
  'joint-mobilization',
  'dry-needling',
  'cupping-therapy',
  'soft-tissue-myofascial-release',
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function KneePainHubPage() {
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
        name: 'Knee Pain',
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
      name: 'Knee pain',
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
                <span className="text-slate-900 font-medium">Knee Pain</span>
              </nav>

              <h1 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-slate-900 mb-4">
                Knee Pain Treatment in Burlington
              </h1>

              <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl">
                Knee pain is rarely one condition. The label covers everything from a kneecap
                that hurts on stairs, to a locked sensation after a twist, to a gradual ache
                that builds with longer walks. This page is a guide I use with patients to map
                where the pain is, what usually drives it, and how I go about treating it.
              </p>

              <p className="text-xs text-slate-500 mt-3">
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
                  The knee has a small number of common stories
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p>
                  Most of the knee pain I see in clinic falls into a handful of recognisable
                  stories. Stairs being the worst part of a runner&rsquo;s day. A sharp catch on
                  the inside of the joint the first time you pivot in a game since a twist last
                  week. A whole-knee stiffness that takes twenty minutes to unlock in the
                  morning and then eases until bedtime. A burning outer-knee pain that shows up
                  at roughly the same point in every long run. These are different conditions
                  with different treatment plans, but each one has a signature.
                </p>
                <p>
                  The honest version: most knee pain in adults is mechanical and manageable.
                  NICE, OARSI, and the JOSPT patellofemoral CPG all agree, and the big trials
                  on degenerative meniscal tears, METEOR in the New England Journal of Medicine
                  and ESCAPE in JAMA, point the same way. Education, graded strengthening, and
                  sensible load management produce the strongest long-term outcomes. Hands-on
                  work sits alongside that, not in place of it. What changes between people is
                  the tissue, the history, and how load needs to be dosed.
                </p>
                <p>
                  The rest of this page works through the common sources of knee pain grouped
                  by where they sit, the red flags that need medical review before physio, how
                  I approach the first assessment in clinic, and the questions patients ask me
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
                A quick guide to the most common sources of knee pain by location. Use it to
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

        {/* How I approach knee pain */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-slate-900 rounded-xl">
                  <AcademicCapIcon className="h-5 w-5 text-[#B08D57]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">
                  How I approach knee pain in clinic
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p>
                  The first appointment runs on questions before it runs on equipment. Where
                  does the pain sit, how did it start, what makes it worse, what makes it
                  better. The small details do real work. Whether a new running block pushed
                  weekly mileage up faster than the tissue could adapt. Whether this came on
                  after a specific twist or a direct blow. How stairs feel compared with flat
                  ground. Whether the knee has been swelling, clicking, or giving way. By the
                  time the history is done I usually have two or three working hypotheses, and
                  the exam is about confirming or ruling them out.
                </p>
                <p>
                  From there, the exam goes region by region. I watch how you walk, squat, step
                  down, and if it is relevant, land from a small hop. I check range, quadriceps
                  and hip strength, and the targeted tests that actually move the needle:
                  Lachman and anterior drawer for the ACL, posterior drawer for the PCL, valgus
                  and varus stress for the collaterals, McMurray and joint-line tenderness for
                  the meniscus, and compression and inhibition tests for the patellofemoral
                  joint. After acute trauma I use the Ottawa Knee Rules to decide whether an
                  X-ray is worth chasing, and I am upfront when the picture warrants imaging
                  rather than more rehab time.
                </p>
                <p>
                  The plan that comes out of that is individual, but it has a familiar shape.
                  Settle the irritable tissue with a short list of things to stop doing and a
                  few things to add in, which might include adjusting training surface, volume,
                  or footwear. Build capacity with progressive strengthening exercises dosed to
                  your current tolerance, usually across quadriceps, hip abductors, glutes,
                  hamstrings, and calves. Joint mobilization, soft tissue therapy, dry needling,
                  or cupping sit alongside that work where they help it move faster. I write
                  the plan down with you and track a handful of markers so it is clear whether
                  it is actually working. If it is not, I change direction sooner rather than
                  later.
                </p>
              </div>
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
                  Knee pain questions I hear most
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
                plan knee pain care.
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
                  Related knee and leg conditions
                </h2>
              </div>
              <p className="text-slate-600 max-w-3xl mb-8">
                Deeper pages for each of the specific conditions that sit under knee pain.
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
                  Treatments that commonly sit inside a knee plan
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
                    I see patients for knee pain at Endorphins Health & Wellness Centre in
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
                      Book an Initial Knee Assessment
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
