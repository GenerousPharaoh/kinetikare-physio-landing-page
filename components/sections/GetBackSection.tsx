import Print from '@/components/Print';
import { GET_BACK_ROW, ILLUSTRATIONS } from '@/lib/illustrations';

/**
 * Six of Kareem's life illustrations as prints on navy, after Care Journey.
 * No captions: he said the activities are obvious. Server component.
 *
 * Hung, not tabled: two print sizes, bottoms aligned in every row. Phones get
 * three rows of two with the larger print alternating sides; tablets three
 * across; desktop all six on one shelf, large, small, large, small.
 */
function phoneSpan(i: number) {
  const row = Math.floor(i / 2);
  const first = i % 2 === 0;
  const large = row % 2 === 0 ? first : !first;
  return large ? 'col-span-5' : 'col-span-4';
}

export default function GetBackSection() {
  return (
    <section className="!bg-[#020617] !bg-none py-16 md:py-24" aria-labelledby="get-back-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <h2 id="get-back-heading" className="font-playfair !text-white text-4xl md:text-5xl tracking-tight mb-8 md:mb-12">
          Get back to it.
        </h2>
        <ul className="grid grid-cols-9 gap-3 items-end sm:grid-cols-[5fr_4fr_5fr] sm:gap-4 lg:grid-cols-[5fr_4fr_5fr_4fr_5fr_4fr] lg:gap-5">
          {GET_BACK_ROW.map((key, i) => (
            <li key={key} className={`${phoneSpan(i)} sm:col-span-1`}>
              <Print {...ILLUSTRATIONS[key]} sizes="(min-width: 1024px) 220px, (min-width: 640px) 32vw, 54vw" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
