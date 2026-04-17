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
  HandRaisedIcon,
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

const PAGE_URL = 'https://www.kinetikarephysio.com/conditions/pain-guides/pain-below-kneecap';
const PAGE_TITLE = 'Pain Right Below the Kneecap: What It Usually Is | Kareem Hassanein';
const PAGE_DESCRIPTION =
  'A Registered Physiotherapist\'s guide to pain right below the kneecap in Burlington. Likely causes, a simple one-finger test, and when to seek care.';

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
        alt: 'Pain Right Below the Kneecap - Kareem Hassanein Physiotherapy',
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

interface Scenario {
  slug: string;
  label: string;
  pattern: string;
  note: string;
}

const scenarios: Scenario[] = [
  {
    slug: 'patellar-tendinopathy',
    label: 'Patellar tendinopathy (jumper\'s knee)',
    pattern: 'A single tender spot right at the bottom tip of the kneecap, worse with jumping, landing, deep squats, and the first few minutes of running. Usually warms up briefly, then settles back in afterwards.',
    note: 'The classic pattern for pain right below the kneecap in active adults. Load-related, localised, and slow to rebuild once it has set in.',
  },
  {
    slug: 'knee-pain-patellofemoral',
    label: 'Patellofemoral pain',
    pattern: 'More diffuse ache around or under the kneecap, not pinpoint. Worse with stairs, prolonged sitting with bent knees, running downhill, and deep squatting. Often both knees over time.',
    note: 'When the pain is not a single fingertip spot and smears around the kneecap margins, patellofemoral pain is more likely than tendinopathy.',
  },
  {
    slug: 'severs-disease',
    label: 'Sever\'s disease (growing athletes, heel version)',
    pattern: 'Heel pain in a child or young adolescent during a growth spurt, worse with running, jumping, and cleated sports. Sits at the back of the heel rather than below the kneecap, but often comes up in the same conversation.',
    note: 'Different site than pain below the kneecap, but the same growth-plate mechanism as Osgood-Schlatter and often confused in young athletes.',
  },
  {
    slug: 'knee-osteoarthritis',
    label: 'Early knee osteoarthritis',
    pattern: 'Aching around the knee that stiffens up after sitting and takes a few minutes to ease with movement. Worse with longer walks, stairs, and kneeling. Common from the mid-forties onward.',
    note: 'Less typical as a pure pain-below-the-kneecap picture, but worth considering when the pain is diffuse, joint-feeling, and age fits.',
  },
];

// Scenarios we describe but cannot deep-link to (no dedicated condition page on the site yet)
interface UnlinkedScenario {
  label: string;
  pattern: string;
  note: string;
}

const unlinkedScenarios: UnlinkedScenario[] = [
  {
    label: 'Osgood-Schlatter disease (growing athletes)',
    pattern: 'A tender bump at the top of the shinbone, just below the kneecap, in a child or young adolescent, often 10 to 15 years old. Worse with running, jumping, kneeling, and cleated sports. The bump is actually the tibial tubercle being pulled on during a growth spurt.',
    note: 'This is the most common reason a young athlete has pain just below the kneecap. Usually self-limiting with activity modification and guided strengthening, based on Rathleff and colleagues in the Orthopaedic Journal of Sports Medicine (2020).',
  },
  {
    label: 'Sinding-Larsen-Johansson syndrome',
    pattern: 'Pain right at the bottom tip of the kneecap in a growing athlete, with tenderness on pressing the inferior pole. Same age group as Osgood-Schlatter, same triggers, slightly different anatomical site.',
    note: 'Think of this as the kneecap-end version of Osgood-Schlatter. Managed on similar lines: modify load, rebuild strength, return to sport in stages.',
  },
  {
    label: 'Infrapatellar fat pad irritation',
    pattern: 'Pain right under the kneecap that feels worse with the knee held fully straight, especially during prolonged standing or walking on level ground. Often tender when pinched directly under the kneecap on either side of the tendon.',
    note: 'A common mimic of patellar tendinopathy. Tends to dislike hyperextension, whereas tendinopathy tends to dislike deep knee bends under load.',
  },
  {
    label: 'Infrapatellar bursitis (clergyman\'s knee)',
    pattern: 'A soft, fluid-filled swelling just below the kneecap after kneeling work, gardening, flooring, or plumbing. Localised, tender, and usually without the load-related pattern of a tendon problem.',
    note: 'Usually settles with modifying kneeling load and protecting the area. Worth flagging if it becomes warm, red, or systemic, which points elsewhere.',
  },
];

// Red flags
const redFlags: Array<{ sign: string; action: string }> = [
  {
    sign: 'Warm, red, swollen knee with fever or feeling systemically unwell',
    action: 'Seek same-day medical assessment. Septic arthritis and certain inflammatory conditions need workup before physiotherapy.',
  },
  {
    sign: 'Sudden inability to straighten the knee, or a locked-feeling knee after a twist',
    action: 'See a physician or urgent care. A mechanically locked knee often needs orthopaedic review before rehabilitation can progress.',
  },
  {
    sign: 'A pop, sudden giving way, and immediate large swelling after trauma',
    action: 'Go to emergency or urgent care to rule out a significant ligament or osteochondral injury, in line with the Ottawa Knee Rules.',
  },
  {
    sign: 'Pain right below the kneecap in a child who is also limping and unwell',
    action: 'See a physician. Paediatric hip or systemic conditions sometimes refer pain toward the knee and need medical workup.',
  },
  {
    sign: 'Night pain that is not related to position, with unexplained weight loss',
    action: 'See your family physician for medical workup before starting physiotherapy.',
  },
];

// FAQ
const faqs: Array<{ question: string; answer: string }> = [
  {
    question: 'Why does the pain sit right under my kneecap and nowhere else?',
    answer:
      'The patellar tendon inserts into the bottom tip of the kneecap, and tendon pain tends to be very focal. A single fingertip can usually cover the tender spot. Malliaras and colleagues in JOSPT (2015) call this pinpoint inferior-pole pain, plus load-related pain, the hallmark of patellar tendinopathy. If the pain is more diffuse and wraps around the kneecap margin, the pattern fits patellofemoral pain better.',
  },
  {
    question: 'Is pain below the kneecap the same as patellar tendinitis?',
    answer:
      'Clinically, yes, most of the time. The older term tendinitis implies active inflammation, and current tendon research shows that load-related tendon pain is more about structural change and a failed healing response than classic inflammation. That is why the preferred term is tendinopathy. The practical point is the same: graded loading rebuilds the tendon, rest alone rarely does.',
  },
  {
    question: 'Should I stop running or jumping if I have pain below the kneecap?',
    answer:
      'Usually no, but the dose needs to change. Full rest tends to make patellar tendon pain more reactive, not less. A rule I use in clinic: pain under about 3 out of 10 during and just after the session, settling within 24 hours and not progressively worsening week to week, is usually fine to train through while I build capacity with you. Pain that climbs into a 5 or higher, or a knee that stiffens overnight, means the plan needs adjusting.',
  },
  {
    question: 'My teenager has a painful bump right below their kneecap. Is that serious?',
    answer:
      'The most common reason is Osgood-Schlatter, a growth-plate irritation at the top of the shinbone where the patellar tendon attaches. It is not dangerous, almost always settles with age and guided management, and responds well to activity modification plus knee strengthening. Rathleff and colleagues in the Orthopaedic Journal of Sports Medicine (2020) showed 80 percent reporting a successful outcome at 12 weeks and 90 percent at one year with that approach.',
  },
  {
    question: 'Does imaging help if the pain is right below the kneecap?',
    answer:
      'Usually not as a starting point. The diagnosis of patellar tendinopathy is clinical, based on a careful history and a tender inferior pole that hurts with loaded knee extension. Imaging changes show up in pain-free tendons all the time, which can muddy rather than clarify the picture. I order imaging when it will change the plan, such as after an acute trauma with swelling, a mechanically locked knee, or a case that is not tracking the way the clinical pattern predicted.',
  },
  {
    question: 'How long does pain right below the kneecap take to resolve?',
    answer:
      'It depends on the tissue. An irritable patellar tendinopathy typically needs three to six months of progressive, well-dosed loading to rebuild capacity reliably. Patellofemoral pain and fat pad irritation often respond inside six to twelve weeks. Osgood-Schlatter in a growing athlete usually improves within a few months of sensible activity modification and strengthening, even though the bump itself can persist. Rushing tends to lengthen the timeline.',
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
    title: 'Patellar tendinopathy: clinical diagnosis, load management, and advice for challenging case presentations',
    source: 'Malliaras, Cook, Purdam, Rio. JOSPT',
    year: 2015,
    summary:
      'Narrative review and clinical commentary published in the Journal of Orthopaedic & Sports Physical Therapy. Describes pain localised to the inferior pole of the patella and load-related pain with knee-extensor demand as the hallmark features of patellar tendinopathy, and positions progressive load management as the core of care.',
  },
  {
    title: 'Is tendon pathology a continuum? A pathology model to explain the clinical presentation of load-induced tendinopathy',
    source: 'Cook & Purdam, British Journal of Sports Medicine',
    year: 2009,
    summary:
      'Proposes a continuum model of tendon pathology (reactive, disrepair, degenerative) that has shaped current tendon rehabilitation. Reinforces why graded loading, rather than passive rest, is the foundation of patellar tendon care.',
  },
  {
    title: 'Patellofemoral pain: clinical practice guidelines',
    source: 'Willy et al., JOSPT',
    year: 2019,
    summary:
      'APTA Academy of Orthopaedic Physical Therapy clinical practice guideline supporting combined hip and knee strengthening, patient education, gait retraining where appropriate, and activity modification as first-line management for patellofemoral pain, with manual therapy as an adjunct.',
  },
  {
    title: 'Activity modification and knee strengthening for Osgood-Schlatter disease: a prospective cohort study',
    source: 'Rathleff et al., Orthopaedic Journal of Sports Medicine',
    year: 2020,
    summary:
      'Prospective cohort of 51 adolescents (ages 10 to 14) with Osgood-Schlatter disease. A 12-week program of activity modification and knee strengthening produced self-reported successful outcomes in 80 percent of participants at 12 weeks and 90 percent at one year, supporting structured conservative care.',
  },
];

// Related condition slugs (must exist in conditions-data.ts)
const relatedConditionSlugs: string[] = [
  'patellar-tendinopathy',
  'knee-pain-patellofemoral',
  'severs-disease',
  'knee-osteoarthritis',
  'meniscus-tears',
  'it-band-syndrome',
];

const relatedTreatmentIds: string[] = [
  'exercise-therapy',
  'sports-rehab-return-to-sport',
  'joint-mobilization',
  'dry-needling',
  'soft-tissue-myofascial-release',
  'cupping-therapy',
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function PainBelowKneecapGuidePage() {
  const linkedScenarios = scenarios
    .map((scenario) => {
      const condition = getConditionBySlug(scenario.slug);
      return condition ? { ...scenario, conditionName: condition.name } : null;
    })
    .filter((value): value is Scenario & { conditionName: string } => Boolean(value));

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
        name: 'Pain Right Below the Kneecap',
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
      name: 'Pain right below the kneecap',
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
                <Link href="/conditions/knee-pain" className="hover:text-[#B08D57] transition-colors duration-200">
                  Knee Pain
                </Link>
                <ChevronRightIcon className="h-3 w-3" />
                <span className="text-slate-900 font-medium">Pain Below the Kneecap</span>
              </nav>

              <h1 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-slate-900 mb-4">
                Pain Right Below the Kneecap: What It Usually Is
              </h1>

              <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl">
                Patients describe this one very consistently: a tender spot right at the bottom
                tip of the kneecap that flares with running, jumping, stairs, or deep squats.
                In most active adults that pattern points toward patellar tendinopathy, but a
                few other things sit on the differential. This guide walks through how I sort
                them out and which condition page to read next.
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

        {/* Opening primer */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-slate-900 rounded-xl">
                  <InformationCircleIcon className="h-5 w-5 text-[#B08D57]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">
                  A small anatomical area, a short list of likely causes
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p>
                  When patients say the pain sits right below the kneecap, they are usually
                  pointing at the lower tip of the patella or the tendon that runs from there
                  down to the top of the shinbone. That is a small area with only a few
                  structures in it, which is actually good news for sorting out what is going on.
                </p>
                <p>
                  In active adults, the most common driver is patellar tendinopathy. The
                  patellar tendon inserts into the inferior pole of the patella, and tendon
                  pain there is typically very focal, load-related, and cranky with jumping,
                  landing, deep squats, and the first few minutes of running. Malliaras and
                  colleagues in JOSPT (2015) describe pinpoint inferior-pole pain plus
                  load-related pain as the hallmark of this condition.
                </p>
                <p>
                  In growing athletes, the picture shifts. The two common patterns in this age
                  group are Osgood-Schlatter, where the tibial tubercle is pulled on by the
                  patellar tendon during a growth spurt, and Sinding-Larsen-Johansson
                  syndrome, which sits right at the lower tip of the kneecap itself. Both
                  respond well to structured activity modification and knee strengthening, as
                  Rathleff and colleagues showed in the Orthopaedic Journal of Sports Medicine
                  (2020).
                </p>
                <p>
                  A few other patterns can mimic the tendon: fat pad irritation under the
                  kneecap, infrapatellar bursitis after heavy kneeling work, and sometimes a
                  broader patellofemoral pain presentation that creeps down toward the tendon.
                  Sorting between these is what the next section is about.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* One-finger test */}
        <section className="py-12 bg-slate-50/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-slate-900 rounded-xl">
                  <HandRaisedIcon className="h-5 w-5 text-[#B08D57]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">
                  The one-finger test
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p>
                  A simple thing I ask patients to do in the first visit: sit with the knee
                  comfortably bent and try to point to the single most tender spot with one
                  fingertip. Where the finger lands carries real diagnostic information.
                </p>
                <ul>
                  <li>
                    <strong>Fingertip lands on the very bottom tip of the kneecap:</strong>
                    {' '}
                    patellar tendinopathy is the most likely candidate. Expect the pain to flare
                    with jumping, landing, deep squatting, and the first few minutes of
                    running, and to be load-related in a predictable way.
                  </li>
                  <li>
                    <strong>Fingertip lands on the bump at the top of the shinbone:</strong>
                    {' '}
                    in a child or young adolescent, this is classic for Osgood-Schlatter
                    disease. In an adult, it is worth assessing for distal patellar tendon
                    involvement or a localised bursitis.
                  </li>
                  <li>
                    <strong>Tenderness is more around the edges of the kneecap than one
                    spot:</strong>
                    {' '}
                    the pattern fits patellofemoral pain more than a tendon problem. Stairs,
                    prolonged sitting, and deep squats are the usual triggers.
                  </li>
                  <li>
                    <strong>Tenderness right under the kneecap, worse when the knee is held
                    fully straight:</strong>
                    {' '}
                    fat pad irritation is more likely. This one often dislikes standing with
                    a locked knee, whereas a tendon tends to dislike loaded knee bending.
                  </li>
                </ul>
                <p>
                  No single test is perfect in isolation. I use the fingertip location
                  alongside a careful history and a handful of loaded movement tests to build
                  the working picture. The short list above is a useful way to narrow things
                  down before an assessment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Likely causes with links */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 bg-slate-900 rounded-xl">
                  <MapPinIcon className="h-5 w-5 text-[#B08D57]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">
                  Likely causes of pain below the kneecap
                </h2>
              </div>
              <p className="text-slate-600 max-w-3xl mb-8">
                The scenarios below cover most of what I see in clinic for this specific
                complaint. Where a deeper condition page exists on this site, the card links
                straight to it.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {linkedScenarios.map((scenario) => (
                  <Link
                    key={scenario.slug}
                    href={`/conditions/${scenario.slug}`}
                    className="group relative bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-[#B08D57] hover:shadow-md transition-all overflow-hidden"
                  >
                    <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-4">
                      <h3 className="text-lg font-semibold text-white tracking-tight group-hover:text-[#B08D57] transition-colors">
                        {scenario.label}
                      </h3>
                    </div>
                    <div className="p-6">
                      <p className="text-sm font-semibold text-slate-900 mb-1">Pattern</p>
                      <p className="text-slate-700 text-sm leading-relaxed mb-4">
                        {scenario.pattern}
                      </p>
                      <p className="text-sm font-semibold text-slate-900 mb-1">Why it fits</p>
                      <p className="text-slate-700 text-sm leading-relaxed">
                        {scenario.note}
                      </p>
                      <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#B08D57]">
                        Read the {scenario.conditionName.toLowerCase()} guide
                        <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {unlinkedScenarios.length > 0 && (
                <div className="mt-10">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">
                    Also worth considering (assessed in clinic, no standalone page yet)
                  </h3>
                  <div className="grid md:grid-cols-2 gap-5">
                    {unlinkedScenarios.map((scenario) => (
                      <div
                        key={scenario.label}
                        className="bg-slate-50 rounded-xl p-5 border border-slate-200"
                      >
                        <h4 className="text-base font-semibold text-slate-900 mb-2">
                          {scenario.label}
                        </h4>
                        <p className="text-sm font-semibold text-slate-700 mb-1">Pattern</p>
                        <p className="text-sm text-slate-700 leading-relaxed mb-3">
                          {scenario.pattern}
                        </p>
                        <p className="text-sm font-semibold text-slate-700 mb-1">Why it fits</p>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          {scenario.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
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
                  How I approach pain below the kneecap in clinic
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p>
                  The first appointment runs on questions before it runs on equipment. Age, the
                  activity the pain is tied to, how long it has been there, whether jumping and
                  deep squatting are the main triggers, whether it warms up then resettles, and
                  whether the pain is truly pinpoint or more spread out. By the time the history
                  is done I usually have two working hypotheses, and the exam confirms or rules
                  them out.
                </p>
                <p>
                  On examination I watch a double-leg squat, a single-leg squat, a step-down,
                  and, where appropriate, a controlled hop. I check hip and quadriceps strength,
                  because deficits there are often part of the load equation. Where palpation is
                  clinically indicated, it is directed by the working hypothesis from the
                  history and movement exam, not a routine sweep of every structure in the
                  region. A loaded knee-extension task, such as a decline squat, is useful for
                  tendon pain: it typically reproduces the familiar spot pain in tendinopathy
                  and not in most of the mimics.
                </p>
                <p>
                  The plan that comes out of that is individual. For patellar tendinopathy the
                  backbone is progressive, well-dosed loading across isometric, heavy slow
                  resistance, and energy-storage work as tolerance grows, paired with honest
                  training adjustments. For Osgood-Schlatter and Sinding-Larsen-Johansson I lean
                  on the Rathleff framework: modify load, rebuild strength, return to sport in
                  stages. For fat pad irritation I settle the tissue, then rebuild tolerance for
                  extension loading. Joint mobilization, soft tissue therapy, dry needling, and
                  cupping sit alongside the loading work where they help it progress.
                </p>
              </div>
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
                  Pain-below-kneecap questions I hear most
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
                Published sources that underpin the recommendations above. Research evolves,
                but these are the anchor references I rely on when I plan care for pain below
                the kneecap.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {research.map((item) => (
                  <div
                    key={item.title}
                    className="bg-gradient-to-br from-white to-slate-50 rounded-xl p-6 border border-slate-200"
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
                Deeper pages for the specific conditions that most often explain pain below
                the kneecap, plus a few neighbours worth knowing about.
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
        <section className="py-12 bg-slate-50/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-slate-900 rounded-xl">
                  <ShieldCheckIcon className="h-5 w-5 text-[#B08D57]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">
                  Treatments that commonly sit inside a plan for pain below the kneecap
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
