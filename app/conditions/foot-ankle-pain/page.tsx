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
  CONTENT_LAST_MODIFIED_ISO,
  SEO_AUTHOR,
  SEO_ORGANIZATION_ID,
  SEO_PERSON_ID,
  SEO_PUBLISHER,
} from '@/lib/seo-metadata';
import { getConditionBySlug } from '@/lib/conditions-data';
import { getTreatmentById } from '@/lib/treatments-data';
import { JANE_BOOKING_URL } from '@/lib/booking';
import ConsentNote from '@/components/conditions/ConsentNote';

import HoursList from '@/components/HoursList';
import { HUB_ILLUSTRATION, ILLUSTRATIONS } from '@/lib/illustrations';

const HUB_ART = ILLUSTRATIONS[HUB_ILLUSTRATION['foot-ankle-pain']];
const PAGE_URL = 'https://www.kinetikarephysio.com/conditions/foot-ankle-pain';
const PAGE_TITLE = 'Foot & Ankle Pain Treatment in Burlington | Kareem Hassanein';
const PAGE_DESCRIPTION =
  'Foot and ankle pain treatment in Burlington with Kareem Hassanein, Registered Physiotherapist. Heel pain, Achilles, ankle sprains, forefoot and shin pain assessed and treated.';

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
        alt: 'Foot and Ankle Pain Treatment in Burlington - Kareem Hassanein Physiotherapy',
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
    region: 'Under the heel',
    subtitle: 'Worst on the first steps of the morning',
    description:
      'Sharp or bruised pain under the heel that bites hardest on the first few steps out of bed, eases as you warm up, then returns after sitting or late in the day. Often tender to press on the inside of the heel bone. This is the classic plantar heel pain picture. In active children and teenagers the same area can hurt for a different reason, where the growth plate at the back of the heel is the source rather than the fascia.',
    commonSources: [
      {
        slug: 'plantar-fasciitis',
        label: 'Plantar fasciitis and heel spurs',
        note: 'First-step morning pain under the heel that eases with walking and returns after rest. Calf tightness and a recent jump in walking or standing load are common contributors.',
      },
      {
        slug: 'severs-disease',
        label: "Sever's disease",
        note: 'Heel pain in active children and adolescents, usually during a growth spurt and in running or jumping sports. Squeezing the sides of the heel is typically sore.',
      },
    ],
  },
  {
    region: 'Back of the heel and the Achilles',
    subtitle: 'Pain in the cord above the heel',
    description:
      'Stiffness and pain in the tendon above the heel, worst first thing in the morning and at the start of a run, sometimes easing once warm and then flaring afterwards. May be tender to pinch, and occasionally thickened. Pain sitting in the middle of the tendon behaves differently from pain right at the bone, and that distinction changes how loading is dosed.',
    commonSources: [
      {
        slug: 'achilles-tendinopathy',
        label: 'Achilles tendinopathy',
        note: 'Morning stiffness and load-related pain in the Achilles. Responds well to progressive loading, with dosing that differs for mid-portion and insertional pain.',
      },
    ],
  },
  {
    region: 'Outside of the ankle',
    subtitle: 'After a roll, or with repeated load',
    description:
      'Pain on the outer ankle, most often after the foot has rolled inwards. Swelling and bruising in the first days, then lingering tenderness, a feeling of giving way, or reluctance on uneven ground. When there was no single injury, pain that tracks behind and below the outer ankle bone and builds with walking or running load points at the tendons running around that bony point instead.',
    commonSources: [
      {
        slug: 'ankle-sprains',
        label: 'Ankle sprains',
        note: 'Outer ankle ligament injury from a rolled ankle. Early movement and balance work matter more than rest, and incomplete rehabilitation is strongly linked to repeat sprains.',
      },
      {
        slug: 'peroneal-tendinopathy',
        label: 'Peroneal tendinopathy',
        note: 'Pain behind and below the outer ankle bone that builds with load. Often follows an old sprain that never fully rehabilitated.',
      },
    ],
  },
  {
    region: 'Inside of the ankle and the arch',
    subtitle: 'Inner ankle pain or an arch that is changing shape',
    description:
      'Aching along the inner ankle and into the arch, sometimes with swelling behind the inner ankle bone, difficulty rising onto the toes on one leg, or an arch that is visibly flattening compared with the other side. A different pattern in the same area, burning or tingling that spreads into the sole and toes rather than a dull ache, points at nerve irritation as it passes through the inner ankle.',
    commonSources: [
      {
        slug: 'posterior-tibial-tendon-dysfunction',
        label: 'Posterior tibial tendon dysfunction',
        note: 'Inner ankle and arch pain with progressive arch flattening. Single-leg heel raise is usually difficult or painful, and early loading matters because the pattern is progressive.',
      },
      {
        slug: 'tarsal-tunnel-syndrome',
        label: 'Tarsal tunnel syndrome',
        note: 'Burning, tingling, or numbness spreading into the sole and toes from the inner ankle. Often worse with prolonged standing or at night.',
      },
    ],
  },
  {
    region: 'Ball of the foot and the toes',
    subtitle: 'Forefoot pain, numbness between toes, or a stiff big toe',
    description:
      'Pain under the ball of the foot that feels like standing on a pebble or a bunched sock, sometimes with numbness or an electric zing between the toes, and often relieved by taking the shoe off. Separately, pain and stiffness at the big toe joint, whether from a joint that is losing motion, a drifting toe with a bony prominence, or a toe that was forced backwards in a push-off injury.',
    commonSources: [
      {
        slug: 'mortons-neuroma',
        label: "Morton's neuroma",
        note: 'Burning or electric pain between the third and fourth toes with numbness, eased by removing the shoe. Narrow toe boxes and high heels aggravate it.',
      },
      {
        slug: 'metatarsalgia',
        label: 'Metatarsalgia',
        note: 'Diffuse aching or burning under the ball of the foot that builds with standing and walking, without the distinct nerve quality of a neuroma.',
      },
      {
        slug: 'hallux-rigidus',
        label: 'Hallux rigidus',
        note: 'Stiffness and pain at the big toe joint, most obvious pushing off or going up on the toes. Motion loss is the defining feature rather than the angle of the toe.',
      },
      {
        slug: 'hallux-valgus',
        label: 'Hallux valgus (bunions)',
        note: 'Big toe drifting towards the smaller toes with a bony prominence on the inner border. Footwear width and load distribution matter more than the size of the bump.',
      },
      {
        slug: 'turf-toe',
        label: 'Turf toe',
        note: 'Big toe joint sprain from the toe being forced backwards, typically in a push-off on a firm surface. Grading guides how quickly loading progresses.',
      },
      {
        slug: 'hammer-toe-deformities',
        label: 'Hammer toe deformities',
        note: 'Buckled lesser toes with rubbing on the top of the joint and pressure under the ball of the foot. Often sits alongside forefoot pain rather than causing it alone.',
      },
    ],
  },
  {
    region: 'Along the shin',
    subtitle: 'Running-related shin pain and bone stress',
    description:
      'Aching along the inner border of the shin that appears with running and settles with rest, typically spread over a hand-width or more of bone. A more worrying version is pain that narrows to a single point you can cover with a fingertip, keeps hurting after you stop, or starts waking you at night, which raises the question of bone stress rather than a load-tolerance problem. In growing athletes, pain at the bony attachment points has its own pattern.',
    commonSources: [
      {
        slug: 'shin-splints',
        label: 'Shin splints (medial tibial stress syndrome)',
        note: 'Diffuse inner shin pain that builds with running volume. Load management and calf and foot strengthening exercises sit at the centre of the plan.',
      },
      {
        slug: 'stress-fractures',
        label: 'Stress fractures',
        note: 'Focal bone pain that persists after activity stops. Needs medical assessment and imaging rather than a push through the symptoms.',
      },
      {
        slug: 'growth-plate-injuries',
        label: 'Growth plate injuries',
        note: 'Pain at the bony attachment points in growing athletes. Timelines and loading differ from adults, and clearance often needs medical input.',
      },
    ],
  },
];

// Red flags: when to seek urgent medical care rather than physiotherapy
const redFlags: Array<{ sign: string; action: string }> = [
  {
    sign: 'Unable to put weight through the foot for four steps straight after an injury and still unable in clinic, with tenderness over the ankle or foot bones',
    action: 'Seek medical assessment for imaging. The Ottawa Ankle Rules are used to decide whether an X-ray is warranted after an acute ankle or foot injury.',
  },
  {
    sign: 'Obvious deformity, an open wound, or a foot that is numb, cold, or pale after trauma',
    action: 'Go to emergency. These point to fracture, dislocation, or a compromised blood or nerve supply that needs immediate care.',
  },
  {
    sign: 'A sudden pop or a feeling of being kicked at the back of the ankle, with difficulty pushing off or rising onto the toes',
    action: 'Seek same-day medical assessment for a possible Achilles tendon rupture. Early diagnosis changes the treatment options available.',
  },
  {
    sign: 'Calf pain with swelling, warmth, or redness, particularly after surgery, immobilisation, or long-distance travel',
    action: 'Seek urgent medical assessment to rule out a deep vein thrombosis before any physiotherapy begins.',
  },
  {
    sign: 'A hot, red, swollen joint with fever or feeling unwell, or sudden severe big toe pain with redness',
    action: 'Seek same-day medical review for possible septic arthritis or gout, both of which need medical management rather than rehabilitation.',
  },
  {
    sign: 'Diabetes or peripheral neuropathy with a new foot wound, numbness, colour change, or a foot changing shape',
    action: 'Contact your physician or foot care team promptly. Reduced sensation means damage can progress without the usual pain warning.',
  },
  {
    sign: 'Progressive numbness or weakness, a foot that catches or drops when walking, or symptoms spreading up the leg',
    action: 'See your physician for nerve assessment, since the source may sit at the back or the knee rather than the foot.',
  },
  {
    sign: 'Night pain that wakes you, unexplained weight loss, or new foot pain with a history of cancer',
    action: 'See your family physician for medical workup before starting physiotherapy.',
  },
];

// FAQ content (answer length deliberately varied: short for simple questions, longer for complex)
const faqs: Array<{ question: string; answer: string }> = [
  {
    question: 'Why does my heel hurt most on the first steps in the morning?',
    answer:
      'That pattern is the signature of plantar heel pain. Overnight the foot rests in a pointed position and the plantar fascia sits short, so the first loading of the day stretches tissue that has stiffened up. It typically eases over five or ten minutes as the tissue accommodates, then returns after a period of sitting or towards the end of a long day on your feet. The pattern itself is diagnostically useful, which is why I ask about it specifically. It usually points away from a bone stress problem, where pain tends to build with activity rather than ease off.',
  },
  {
    question: 'Do I need an X-ray for a rolled ankle?',
    answer:
      'Most rolled ankles do not need one. The Ottawa Ankle Rules are the standard screening tool, and they key on whether you could bear weight immediately after the injury and in clinic, and whether there is bone tenderness at specific points on the ankle and foot. If those are negative, a fracture is very unlikely and rehabilitation can start straight away. I apply that screen at the first visit and refer for imaging when it is positive rather than by default.',
  },
  {
    question: 'How long does plantar fasciitis take to settle?',
    answer:
      'Longer than most people expect, and the honest answer is that it is usually measured in months rather than weeks. The 2023 JOSPT clinical practice guideline for plantar heel pain (Koc et al.) supports a combination of loading, manual therapy, stretching, taping, and footwear or orthotic advice rather than any single intervention. Rathleff et al. (Scandinavian Journal of Medicine & Science in Sports 2015) found that adding high-load strength training produced better function scores at three months than stretching alone, though the groups had converged by six and twelve months. The practical read is that loading can speed up the early part of the recovery, not that it changes the destination.',
  },
  {
    question: 'Should Achilles pain be treated with eccentric heel drops or heavy slow resistance?',
    answer:
      'Either can work, and the better question is which one you will actually do. Beyer et al. (American Journal of Sports Medicine 2015) compared the two directly and found comparable outcomes at twelve months, with higher patient satisfaction in the heavy slow resistance group at twelve weeks. Murphy et al. (British Journal of Sports Medicine 2019) reached a similar conclusion about eccentric protocols for mid-portion pain. What matters more than the protocol label is whether the dose suits your tendon, whether pain during and after loading stays inside sensible limits, and whether the pain sits in the mid-portion or right at the heel bone, because insertional pain does not tolerate the same range.',
  },
  {
    question: 'Do I need custom orthotics?',
    answer:
      'Sometimes, but far less often than they get sold. Orthotics can be a useful way to change how load is distributed while the tissue builds tolerance, and they can be genuinely helpful in forefoot pain, posterior tibial tendon problems, and some heel pain. What they are not is a substitute for building capacity in the foot and calf. My usual approach is to see what changes with footwear adjustments, loading, and technique first, then consider orthotics if load distribution is still the limiting factor. If you already have a pair that helps, there is no reason to abandon them.',
  },
  {
    question: 'Can I keep running with shin pain?',
    answer:
      'Often yes, with the dose changed rather than running removed, provided the picture is a load-tolerance one rather than bone stress. The distinction matters. Diffuse aching spread along the inner shin that settles with rest usually tolerates a reduced and rebuilt running plan alongside calf and foot strengthening exercises. Pain that narrows to a point you can cover with a fingertip, keeps hurting after you stop, or wakes you at night is a different problem and needs medical assessment before loading continues. I sort which of those you are dealing with at the first visit.',
  },
  {
    question: 'What is the difference between a bunion and big toe arthritis?',
    answer:
      'A bunion, or hallux valgus, is about the direction the big toe is pointing. The toe drifts towards the smaller toes and a bony prominence develops on the inner border of the foot. Hallux rigidus is about how far the joint moves. The toe stays reasonably straight but the joint loses extension, so pushing off, going up on the toes, or squatting becomes the painful moment. They can coexist, and the treatment emphasis differs: bunions are usually managed around footwear width and load distribution, while a stiffening joint is managed around preserving what motion is there and adjusting how push-off is loaded.',
  },
  {
    question: 'Do I need a referral to see you for foot or ankle pain in Burlington?',
    answer:
      'No referral needed in Ontario. Most extended health plans cover physiotherapy and I offer direct billing where available. Initial assessments run about an hour and include history, examination, a working diagnosis, and a clear plan. If the picture points outside physiotherapy scope, whether that is a suspected fracture, a wound in a diabetic foot, or something needing a chiropodist or a surgical opinion, I coordinate with your family physician or an appropriate consultant rather than push on regardless.',
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
    title: 'Heel Pain - Plantar Fasciitis: Revision 2023',
    source: 'JOSPT (Koc, Bise, Neville, Carreira, Martin)',
    year: 2023,
    summary:
      'APTA Academy of Orthopaedic Physical Therapy clinical practice guideline on plantar heel pain. Supports a combined approach of manual therapy, stretching, taping, foot orthoses, and progressive loading, with education on the expected timeline. Reinforces that plantar heel pain is typically a months-long recovery rather than a weeks-long one.',
  },
  {
    title: 'Ankle Stability and Movement Coordination Impairments: Lateral Ankle Ligament Sprains Revision 2021',
    source: 'JOSPT (Martin et al.)',
    year: 2021,
    summary:
      'Clinical practice guideline for lateral ankle sprains. Supports early mobilisation over immobilisation, with functional rehabilitation and balance training to reduce the development of chronic ankle instability. Neuromuscular training also reduces first-time sprains in higher-risk populations.',
  },
  {
    title: 'Diagnosis, treatment and prevention of ankle sprains: update of an evidence-based clinical guideline',
    source: 'Vuurberg et al., British Journal of Sports Medicine',
    year: 2018,
    summary:
      'International guideline update covering diagnosis, management, and prevention of lateral ankle sprains. Supports functional treatment over immobilisation, the use of exercise and bracing for prevention of recurrence, and the Ottawa Ankle Rules for deciding when radiography is indicated after acute injury.',
  },
  {
    title: 'High-load strength training improves outcome in patients with plantar fasciitis: a randomised controlled trial with 12-month follow-up',
    source: 'Rathleff et al., Scandinavian Journal of Medicine & Science in Sports',
    year: 2015,
    summary:
      'Randomised trial comparing high-load strength training with plantar-specific stretching in adults with plantar fasciitis. The strength training group had superior Foot Function Index scores at three months, with the groups converging at six and twelve months. Supports loading as a way to speed early recovery rather than change the eventual outcome.',
  },
  {
    title: 'Heavy Slow Resistance Versus Eccentric Training as Treatment for Achilles Tendinopathy: a randomised controlled trial',
    source: 'Beyer et al., American Journal of Sports Medicine',
    year: 2015,
    summary:
      'Randomised trial in adults with mid-portion Achilles tendinopathy. Both protocols produced comparable improvement at twelve months, with greater patient satisfaction in the heavy slow resistance group at twelve weeks. Supports choosing the loading protocol the patient can adhere to rather than insisting on one format.',
  },
  {
    title: 'Re-sprains during the first 3 months after initial ankle sprain are related to incomplete recovery: an observational study',
    source: 'van Middelkoop et al., Journal of Physiotherapy',
    year: 2012,
    summary:
      'Observational study following adults after an acute lateral ankle sprain. Re-sprains in the first three months were associated with incomplete recovery from the original injury, supporting the case for completing rehabilitation rather than stopping once the pain settles.',
  },
];

// Conditions to feature in the related block, in display order
const relatedConditionSlugs: string[] = [
  'plantar-fasciitis',
  'achilles-tendinopathy',
  'ankle-sprains',
  'shin-splints',
  'peroneal-tendinopathy',
  'posterior-tibial-tendon-dysfunction',
  'mortons-neuroma',
  'metatarsalgia',
  'tarsal-tunnel-syndrome',
  'hallux-rigidus',
  'hallux-valgus',
  'turf-toe',
  'hammer-toe-deformities',
  'severs-disease',
  'stress-fractures',
  'growth-plate-injuries',
];

const relatedTreatmentIds: string[] = [
  'exercise-therapy',
  'joint-mobilization',
  'soft-tissue-myofascial-release',
  'dry-needling',
  'sports-rehab-return-to-sport',
  'iastm',
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function FootAnklePainHubPage() {
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
        name: 'Foot & Ankle Pain',
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
      name: 'Foot and ankle pain',
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
                <span className="text-slate-900 font-medium">Foot &amp; Ankle Pain</span>
              </nav>

              <h1 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-slate-900 mb-4">
                Foot &amp; Ankle Pain Treatment in Burlington
              </h1>

              <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl">
                The foot and ankle carry more distinct pain patterns than anywhere else in the
                lower limb, and where it hurts narrows the field fast. Under the heel, at the
                Achilles, on the outside after a roll, along the inner arch, under the ball of the
                foot, or along the shin. This page is the map I use with patients to sort which
                one they are dealing with and what usually changes it.
              </p>

              <p className="text-xs text-slate-500 mt-3">
                Assessing and treating foot and ankle pain at the Burlington clinic. Convenient
                for Waterdown, Oakville, Hamilton, Flamborough, and Carlisle residents.
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
                  href={JANE_BOOKING_URL}
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
                  Where it hurts does most of the diagnostic work
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p>
                  Foot and ankle pain sorts by location more cleanly than almost anywhere else.
                  Pain under the heel that is worst on the first steps of the morning is plantar
                  heel pain. Stiffness in the cord above the heel that eases as you warm up and
                  flares afterwards is the Achilles. Outer ankle pain after the foot rolled inwards
                  is a ligament sprain, and the same area hurting without an injury usually
                  involves the tendons running behind that bony point. Inner ankle and arch pain
                  with difficulty rising onto the toes points at the posterior tibial tendon.
                  Forefoot pain with numbness between the toes behaves like a nerve. Shin pain is
                  either a load-tolerance problem or a bone stress one, and those two need
                  separating before anything else happens.
                </p>
                <p>
                  Two things are worth saying plainly. The first is that timelines here tend to be
                  longer than people expect, particularly for plantar heel pain and Achilles
                  tendinopathy, and knowing that upfront changes how the plan feels. The second is
                  that the foot is where incomplete rehabilitation shows up most clearly. Ankle
                  sprains are the obvious case, where stopping once the pain settles leaves the
                  balance and strength deficits that predict the next sprain, and van Middelkoop
                  and colleagues found exactly that link between re-spraining and incomplete
                  recovery.
                </p>
                <p>
                  The rest of this page walks through the common sources grouped by where they
                  sit, the signs that belong with a physician rather than a physiotherapist, how I
                  work through a first assessment, and the questions I am asked most. If you
                  already know which pattern fits, the related conditions block at the bottom
                  links straight to the deeper pages.
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
                A guide to the most common sources of foot, ankle, and shin pain by location. Use
                it to find the deeper page that most closely matches your pattern. If your picture
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

        {/* How I approach foot and ankle pain */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-slate-900 rounded-xl">
                  <AcademicCapIcon className="h-5 w-5 text-[#B08D57]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">
                  How I approach foot and ankle pain in clinic
                </h2>
              </div>

              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p>
                  The first appointment runs on questions before it runs on equipment. Where
                  exactly does it hurt, and can you put a finger on it. What does the first step
                  in the morning feel like. Does it ease as you warm up or build as you go. Was
                  there a single moment or did it creep in. What changed in the weeks before it
                  started, whether that is running volume, a new job on your feet, a different
                  shoe, or a return to sport after time off. For anyone with diabetes or reduced
                  sensation I ask a different set of questions, because pain is a less reliable
                  guide there. By the time the history is done I usually have two or three working
                  hypotheses, and the examination is about confirming or ruling them out.
                </p>
                <p>
                  The examination works from the ground up and outwards. I look at how you stand
                  and how the arch behaves under load, watch you walk, and where relevant watch a
                  single-leg heel raise, a squat, or a hop. After an acute injury I apply the
                  Ottawa Ankle Rules before anything else and refer for imaging if they are
                  positive. Targeted tests follow the hypothesis rather than a routine sweep:
                  ligament stress tests for the sprained ankle, single-leg heel raise for the
                  posterior tibial tendon and the Achilles, forefoot squeeze and toe-space testing
                  for a suspected neuroma, big toe extension range for a stiffening joint, and
                  focal bone palpation when bone stress is on the list. I screen the knee, hip,
                  and low back when the picture suggests the foot is carrying a problem that
                  starts further up, and nerve symptoms in the foot always get a look at the back.
                </p>
                <p>
                  The plan that comes out of that is individual, but it tends to have the same
                  shape. Settle the irritable tissue by adjusting load rather than removing it,
                  which might mean changing running volume or surface, footwear width or heel
                  height, standing breaks at work, or how push-off is loaded. Build capacity with
                  progressive strengthening exercises for the calf, foot, and hip, dosed to your
                  current tolerance. Restore the balance and control work that acute ankle injuries
                  reliably need and rarely get. Joint mobilization, soft tissue therapy, dry
                  needling, or instrument-assisted work sit alongside that where they help it move
                  faster. I write the plan down with you and track a handful of markers so it is
                  clear whether it is working. If it is not, I change direction sooner rather than
                  later.
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
                  Foot and ankle questions I hear most
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
                foot and ankle care.
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
                  Related foot, ankle, and shin conditions
                </h2>
              </div>
              <p className="text-slate-600 max-w-3xl mb-8">
                Deeper pages for each of the specific conditions that sit under foot and ankle pain.
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
                  Treatments that commonly sit inside a foot and ankle plan
                </h2>
              </div>
              <p className="text-slate-600 max-w-3xl mb-8">
                None of these are stand-alone fixes. They are pieces that fit inside a plan built
                around your specific diagnosis and goals.
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
                    I see patients for foot and ankle pain at Endorphins Health &amp; Wellness
                    Centre in Burlington. The clinic serves people coming in from Burlington,
                    Waterdown, Oakville, Hamilton, Flamborough, and Carlisle, with free parking on
                    site and a ground-floor entrance.
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
                      href={JANE_BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-gold inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium transition-colors"
                    >
                      <CalendarIcon className="h-4 w-4" />
                      Book an Initial Foot or Ankle Assessment
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
