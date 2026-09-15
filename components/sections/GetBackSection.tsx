import Print from '@/components/Print';
import { GET_BACK_ROW, ILLUSTRATIONS } from '@/lib/illustrations';

/**
 * Six of Kareem's life illustrations as prints on navy, after Care Journey.
 * No captions: he said the activities are obvious. Server component.
 */
export default function GetBackSection() {
  return (
    <section className="!bg-[#020617] !bg-none py-16 md:py-24" aria-labelledby="get-back-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <h2 id="get-back-heading" className="font-playfair !text-white text-4xl md:text-5xl tracking-tight mb-8 md:mb-10">
          Get back to it.
        </h2>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {GET_BACK_ROW.map((key) => (
            <li key={key}>
              <Print {...ILLUSTRATIONS[key]} sizes="(min-width: 1024px) 200px, (min-width: 640px) 30vw, 45vw" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
