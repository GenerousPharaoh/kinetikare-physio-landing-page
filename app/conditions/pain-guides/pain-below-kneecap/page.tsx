import { JANE_ASSESSMENT_URL } from '@/lib/booking';
import { serializeJsonLd } from '@/lib/structured-data';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRightIcon, PhoneIcon } from '@heroicons/react/24/outline';
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
  Thumb,
  WarningPanel,
} from '@/components/guides/GuideKit';
import type { SourceRef } from '@/lib/source-refs';
import { inlineName } from '@/lib/text';
const PAGE_URL = 'https://www.kinetikarephysio.com/conditions/pain-guides/pain-below-kneecap';
const PAGE_TITLE = 'Pain Right Below the Kneecap: What It Usually Is';
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
    siteName: 'Kinetikare',
    authors: [SEO_AUTHOR.name],
    ...(contentDateFor('/conditions/pain-guides/pain-below-kneecap')
      ? { modifiedTime: contentDateFor('/conditions/pain-guides/pain-below-kneecap') }
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
    note: 'Usually settles with modifying kneeling load and protecting the area. If it becomes warm or red, the skin over it is broken, or you feel unwell, get same-day medical assessment, because a bursa can become infected.',
  },
];

// Red flags
const redFlags: Array<{ sign: string; action: string }> = [
  {
    sign: 'A newly warm, red, swollen knee, with or without a fever',
    action: 'Seek same-day medical assessment, or go to emergency if you feel unwell. A joint infection is possible even without a fever. Infection and some inflammatory conditions need workup before physiotherapy.',
  },
  {
    sign: 'A sudden pop below the kneecap, then you cannot straighten the knee or lift the straight leg',
    action: 'Possible patellar tendon rupture. Go to emergency or urgent care the same day; a complete rupture needs an early surgical opinion.',
  },
  {
    sign: 'Sudden inability to straighten the knee, or a locked-feeling knee after a twist',
    action: 'See a physician or urgent care. A mechanically locked knee often needs orthopaedic review before rehabilitation can progress.',
  },
  {
    sign: 'A pop, sudden giving way, and immediate large swelling after trauma',
    action: 'Get same-day assessment at urgent care or emergency for a significant knee injury. The clinician examines the knee and, where appropriate, uses the Ottawa Knee Rules to decide whether an X-ray is needed for a fracture. Ligament or cartilage injuries need their own examination and sometimes later imaging.',
  },
  {
    sign: 'A child or teenager with a new limp that has no clear explanation',
    action: 'Get a prompt medical assessment before starting exercises. A hip problem can be felt only in the thigh or knee.',
  },
  {
    sign: 'A limping child or teenager with sudden hip, thigh or knee pain, who cannot put weight on the leg, whose leg looks deformed, or who has a fever and feels unwell',
    action: 'Go to emergency now. A limping child who is unwell can have a bone or joint infection.',
  },
  {
    sign: 'A suspected slipped growth plate at the hip (slipped capital femoral epiphysis, or SCFE)',
    action: 'Do not let the child walk on the leg, and seek emergency assessment today. In a teenager this can show up as a limp with hip, groin, thigh or knee pain, even when they can still walk.',
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
      'Not always. Patellar tendinopathy is one possible cause, especially when jumping or loading the tendon brings on pain in one small spot. Pain in that area can also come from other structures, such as the fat pad under the kneecap, a bursa, or, in growing athletes, the growth areas at either end of the tendon, so the location alone is not a diagnosis. The older term tendinitis implies active inflammation. Current research describes persistent tendon pain as involving changes in the tendon and in how pain is processed, with inflammation part of a more complex picture, which is why the preferred term is tendinopathy. When the tendon is the source, graded loading helps rebuild it; rest alone is often not enough.',
  },
  {
    question: 'Should I stop running or jumping if I have pain below the kneecap?',
    answer:
      'For an assessed patellar tendon problem, often not completely, but the dose needs to change; complete rest often does not settle tendon pain for long. After a new injury, or with swelling, giving way, or difficulty straightening the knee, get assessed before training through it. For tendon pain, a guide I use in clinic: pain under about 3 out of 10 during and just after the session, settling within 24 hours and not progressively worsening week to week, is usually fine to train through while I build capacity with you. Pain that climbs into a 5 or higher, or a knee that stiffens overnight, means the plan needs adjusting.',
  },
  {
    question: 'My teenager has a painful bump right below their kneecap. Is that serious?',
    answer:
      'A gradual, tender bump at the top of the shinbone can fit Osgood-Schlatter disease, an irritation of the growth area where the patellar tendon attaches. It is often managed with activity changes and knee strengthening: in a case series of 51 adolescents aged 10 to 14, Rathleff and colleagues (Orthopaedic Journal of Sports Medicine, 2020) reported 80 percent with a successful outcome at 12 weeks and 90 percent at one year with that approach. A sudden painful injury, being unable to straighten the knee, or difficulty bearing weight needs same-day medical assessment. An unexplained new limp in a child or teenager needs prompt medical assessment before starting exercises. Take them to emergency now for sudden hip, thigh or knee pain, being unable to bear weight, a leg that looks deformed, or a fever with feeling unwell. If a slipped growth plate at the hip (SCFE) is suspected, do not let the child walk on the leg, and seek emergency assessment today; in a teenager it can show up as a limp with hip, groin, thigh or knee pain, even when they can still walk.',
  },
  {
    question: 'Does imaging help if the pain is right below the kneecap?',
    answer:
      'Usually not as a starting point. The diagnosis of patellar tendinopathy is clinical, based on a careful history and a tender inferior pole that hurts with loaded knee extension. Imaging changes show up in pain-free tendons all the time, which can muddy rather than clarify the picture. When imaging would change the plan, such as after an acute trauma with swelling, a mechanically locked knee, or a case that is not tracking the way the clinical pattern predicted, I flag it to your family doctor or specialist and refer you.',
  },
  {
    question: 'How long does pain right below the kneecap take to resolve?',
    answer:
      'It depends on the tissue. An irritable patellar tendinopathy often needs three to six months or more of progressive, well-dosed loading to rebuild capacity. Patellofemoral pain often improves within six to twelve weeks, although some cases take longer. Osgood-Schlatter in a growing athlete usually improves within a few months of sensible activity modification and strengthening, even though the bump itself can persist. Rushing tends to lengthen the timeline.',
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
    title: 'Patellar tendinopathy: clinical diagnosis, load management, and advice for challenging case presentations',
    source: 'Malliaras, Cook, Purdam, Rio. JOSPT',
    year: 2015,
    summary:
      'Narrative review and clinical commentary published in the Journal of Orthopaedic & Sports Physical Therapy. Describes pain localised to the inferior pole of the patella and load-related pain with knee-extensor demand as the hallmark features of patellar tendinopathy, and positions progressive load management as the core of care.',
    refs: [{ pmid: '26390269' }],
  },
  {
    title: 'Is tendon pathology a continuum? A pathology model to explain the clinical presentation of load-induced tendinopathy',
    source: 'Cook & Purdam, British Journal of Sports Medicine',
    year: 2009,
    summary:
      'Proposes a continuum model of tendon pathology (reactive tendinopathy, tendon dysrepair, degenerative tendinopathy) to explain why tendon pain presents so differently from person to person, and to help match treatment to the stage of the tendon. The authors present it as a model for clinicians and researchers to test.',
    refs: [{ pmid: '18812414' }],
  },
  {
    title: 'Patellofemoral pain: clinical practice guidelines',
    source: 'Willy et al., JOSPT',
    year: 2019,
    summary:
      'APTA Academy of Orthopaedic Physical Therapy guideline. It supports exercise therapy that combines hip and knee strengthening as the core of care for patellofemoral pain, with education on managing load, gait retraining for runners, and taping or foot orthoses as short-term add-ons. Manual therapy is not recommended on its own, but mobilizing the kneecap can be combined with exercise.',
    refs: [{ pmid: '31475628' }],
  },
  {
    title: 'Activity modification and knee strengthening for Osgood-Schlatter disease: a prospective cohort study',
    source: 'Rathleff et al., Orthopaedic Journal of Sports Medicine',
    year: 2020,
    summary:
      'Prospective cohort of 51 adolescents (ages 10 to 14) with Osgood-Schlatter disease. A 12-week program of activity modification and knee strengthening produced self-reported successful outcomes in 80 percent of participants at 12 weeks and 90 percent at one year. The study had no comparison group.',
    refs: [{ pmid: '32284945' }],
  },
];

// Related condition slugs (must exist in conditions-data.ts)
const relatedConditionSlugs: string[] = [
  'patellar-tendinopathy',
  'knee-pain-patellofemoral',
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
    ...(contentDateFor('/conditions/pain-guides/pain-below-kneecap')
      ? { dateModified: contentDateFor('/conditions/pain-guides/pain-below-kneecap') }
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
                  { label: 'Pain Below the Kneecap' },
                ]}
              />

              <h1 className={cs.h1}>Pain Right Below the Kneecap: What It Usually Is</h1>

              <p className={cs.summary}>
                Patients describe this one very consistently: a tender spot right at the bottom
                tip of the kneecap that flares with running, jumping, stairs, or deep squats.
                In most active adults that pattern points toward patellar tendinopathy, but a
                few other things sit on the differential. This guide walks through how I sort
                them out and which condition page to read next.
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

            {/* The patellar tendon plate (no caption on this guide). */}
            <PlateFigure src="/images/conditions/patellar-tendinopathy.webp" priority />

            {/* Opening primer */}
            <section className={g.sec}>
              <Head title="A small anatomical area, a short list of likely causes" />
              <div className={`${cs.prose} ${g.prose}`}>
                <p>
                  When patients say the pain sits right below the kneecap, they are usually
                  pointing at the lower tip of the patella or the tendon that runs from there
                  down to the top of the shinbone. That is a small area with only a few
                  structures in it, which helps when sorting out what is going on.
                </p>
                <p>
                  In active adults, the most common driver is patellar tendinopathy. The
                  patellar tendon inserts into the inferior pole of the patella, and tendon
                  pain there is typically very focal, load-related, and provoked by jumping,
                  landing, deep squats, and the first few minutes of running. Malliaras and
                  colleagues in JOSPT (2015) describe pinpoint inferior-pole pain plus
                  load-related pain as the hallmark of this condition.
                </p>
                <p>
                  In growing athletes, the picture shifts. The two common patterns in this age
                  group are Osgood-Schlatter, where the tibial tubercle is pulled on by the
                  patellar tendon during a growth spurt, and Sinding-Larsen-Johansson
                  syndrome, which sits right at the lower tip of the kneecap itself. For
                  Osgood-Schlatter, Rathleff and colleagues showed in the Orthopaedic Journal of
                  Sports Medicine (2020) that structured activity modification and knee
                  strengthening can help; Sinding-Larsen-Johansson is managed on similar lines.
                </p>
                <p>
                  A few other patterns can mimic the tendon: fat pad irritation under the
                  kneecap, infrapatellar bursitis after heavy kneeling work, and sometimes a
                  broader patellofemoral pain presentation that creeps down toward the tendon.
                  Sorting between these is what the next section is about.
                </p>
              </div>
            </section>

            <WarningPanel flags={redFlags} />

            {/* One-finger test */}
            <section className={g.sec}>
              <Head title="The one-finger test" />
              <div className={`${cs.prose} ${g.prose}`}>
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
            </section>

            {/* Likely causes with links */}
            <section className={g.sec}>
              <Head
                title="Likely causes of pain below the kneecap"
                stand={
                  <>
                    The scenarios below cover most of what I see in clinic for this specific
                    complaint. Where a deeper condition page exists on this site, the card links
                    straight to it.
                  </>
                }
              />

              <div className={g.scenarios}>
                {linkedScenarios.map((scenario) => (
                  <Link key={scenario.slug} href={`/conditions/${scenario.slug}`} className={g.tile}>
                    <div className={g.tileTop}>
                      <Thumb slug={scenario.slug} />
                      <h3 className={g.tileName}>{scenario.label}</h3>
                    </div>
                    <div className={g.split}>
                      <div>
                        <span className={`${g.label} ${cs.mono}`}>Pattern</span>
                        <span className={g.tileText}>{scenario.pattern}</span>
                      </div>
                      <div>
                        <span className={`${g.label} ${cs.mono}`}>Why it fits</span>
                        <span className={g.tileText}>{scenario.note}</span>
                      </div>
                    </div>
                    <span className={g.tileMore}>
                      Read the {inlineName(scenario.conditionName)} guide
                      <ArrowRightIcon aria-hidden="true" />
                    </span>
                  </Link>
                ))}
              </div>

              {unlinkedScenarios.length > 0 && (
                <>
                  <h3 className={g.sub}>Also worth considering (assessed in clinic, no standalone page yet)</h3>
                  <ul className={g.rows} data-cols="2">
                    {unlinkedScenarios.map((scenario) => (
                      <li key={scenario.label}>
                        <h4 className={g.rowName}>{scenario.label}</h4>
                        <span className={`${g.label} ${cs.mono}`}>Pattern</span>
                        <p className={g.rowText}>{scenario.pattern}</p>
                        <span className={`${g.label} ${cs.mono}`}>Why it fits</span>
                        <p className={g.rowText}>{scenario.note}</p>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </section>

            {/* How I approach it */}
            <section className={g.sec}>
              <Head title="How I approach pain below the kneecap in clinic" />
              <div className={`${cs.prose} ${g.prose}`}>
                <p>
                  The first appointment starts with questions. Age, the
                  activity the pain is tied to, how long it has been there, whether jumping and
                  deep squatting are the main triggers, whether it eases as you warm up and then comes back, and
                  whether the pain is truly pinpoint or more spread out. The answers usually narrow it down to a few likely causes, and the examination helps tell them apart.
                </p>
                <p>
                  On examination I watch a double-leg squat, a single-leg squat, a step-down,
                  and, where appropriate, a controlled hop. I check hip and quadriceps strength,
                  because deficits there are often part of the load equation. Where palpation is
                  clinically indicated, it is directed by the working hypothesis from the
                  history and movement exam, not a routine sweep of every structure in the
                  region. A loaded knee-extension task, such as a decline squat, is useful for
                  tendon pain: it often reproduces the familiar spot pain in tendinopathy, and less often in the conditions that look like it.
                </p>
                <p>
                  The plan that comes out of that is individual. For patellar tendinopathy the plan usually centres on progressive, well-dosed loading across isometric, heavy slow
                  resistance, and energy-storage work as tolerance grows, paired with realistic
                  training adjustments. For Osgood-Schlatter, and on the same lines for
                  Sinding-Larsen-Johansson, I follow the approach Rathleff and colleagues
                  tested: modify load, rebuild strength, return to sport in stages. For fat pad irritation I first reduce the irritation, then rebuild tolerance for
                  extension loading. Joint mobilization, soft tissue therapy, dry needling, and
                  cupping can sit alongside the loading work where they help it progress.
                </p>
              </div>
              <Consent />
            </section>

            {/* FAQ */}
            <section className={g.sec}>
              <Head title="Pain-below-kneecap questions I hear most" />
              <Faqs faqs={faqs} />
            </section>

            {/* Evidence */}
            <section className={g.sec}>
              <Head
                title="Evidence this page is built on"
                stand={
                  <>
                    Published sources that underpin the recommendations above. Research evolves,
                    but these are the anchor references I rely on when I plan care for pain below
                    the kneecap.
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
                    Deeper pages for the specific conditions that most often explain pain below
                    the kneecap, plus a few neighbours worth knowing about.
                  </>
                }
              />
              <RelatedConditions conditions={relatedConditions} />
            </section>

            {/* Related treatments */}
            <section className={g.sec}>
              <Head
                title="Treatments that commonly sit inside a plan for pain below the kneecap"
                stand={
                  <>
                    None of these are stand-alone fixes. They are pieces that fit inside a plan
                    built around your specific diagnosis and goals.
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
              I see patients for knee pain at Endorphins Health & Wellness Centre in
              Burlington. The clinic serves people coming in from Burlington, Waterdown,
              Oakville, Hamilton, Flamborough, and Carlisle, with free parking on site
              and a ground-floor entrance.
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
