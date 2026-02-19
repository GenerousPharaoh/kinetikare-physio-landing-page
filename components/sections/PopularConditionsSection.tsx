import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { getConditionBySlug } from '@/lib/conditions-data';

const featuredConditionSlugs = [
  'low-back-pain',
  'sciatica',
  'neck-pain',
  'knee-pain-patellofemoral',
  'rotator-cuff-injuries',
  'frozen-shoulder',
  'plantar-fasciitis',
  'tennis-elbow',
];

const categoryLabels: Record<string, string> = {
  'spinal-health': 'Neck & Back',
  shoulder: 'Shoulder',
  knee: 'Knee',
  'foot-ankle': 'Foot & Ankle',
  'elbow-wrist-hand': 'Elbow, Wrist & Hand',
  'hip-pelvis': 'Hip & Pelvis',
};

export default function PopularConditionsSection() {
  const popularConditions = featuredConditionSlugs
    .map((slug) => getConditionBySlug(slug))
    .filter((condition): condition is NonNullable<typeof condition> => Boolean(condition));

  return (
    <section className="py-16 md:py-20 bg-slate-50/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight">
              Popular Treatment Topics
            </h2>
            <p className="mt-3 text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
              Quick access to high-interest condition pages with symptoms, contributing factors, and management options.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {popularConditions.map((condition) => (
              <Link
                key={condition.slug}
                href={`/conditions/${condition.slug}`}
                className="group rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-[#B08D57] hover:shadow-lg hover:-translate-y-0.5"
              >
                <p className="text-xs font-medium tracking-wide uppercase text-[#B08D57] mb-2">
                  {categoryLabels[condition.category] || 'Condition'}
                </p>
                <h3 className="text-lg font-medium text-slate-900 leading-tight group-hover:text-[#B08D57] transition-colors">
                  {condition.name}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {condition.description}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-slate-800 group-hover:text-[#B08D57] transition-colors">
                  Read condition guide
                  <ArrowRightIcon className="ml-1.5 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/conditions"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 hover:border-[#B08D57] hover:text-[#B08D57] transition-colors"
            >
              Browse all condition pages
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
