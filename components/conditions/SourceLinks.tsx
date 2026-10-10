import { sourceRefHref, sourceRefLabel, type SourceRef } from '@/lib/source-refs';

/**
 * The source links under a research card on the hubs, guides and
 * comparisons ("PubMed 23506518", "NICE NG226"). A div, not a p: the global
 * paragraph rule's margin and font size would override the classes here.
 */
export default function SourceLinks({
  refs,
  title,
  className = 'mt-3 text-sm',
}: {
  refs?: readonly SourceRef[];
  title: string;
  className?: string;
}) {
  if (!refs?.length) return null;
  return (
    <div className={`${className} text-slate-500`}>
      {refs.map((ref, i) => (
        <span key={sourceRefHref(ref)}>
          {i > 0 && <span aria-hidden="true"> · </span>}
          <a
            href={sourceRefHref(ref)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${sourceRefLabel(ref)}: ${title} (opens in a new tab)`}
            className="underline underline-offset-2 hover:text-[#8A6F0A]"
          >
            {sourceRefLabel(ref)}
          </a>
        </span>
      ))}
    </div>
  );
}
