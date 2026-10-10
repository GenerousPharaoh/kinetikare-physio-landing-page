/**
 * A link from a research card to the source it summarises: a PubMed record
 * by PMID, or a page for sources PubMed does not index (NICE guidelines).
 * Every identifier on the hubs, guides and comparisons was matched to its
 * PubMed record (title, first author, journal, year) on 2026-10-10; the
 * check and its corrections are logged in the marketing folder,
 * site-review-2026-10-08/13-hub-guide-research-links.md.
 */
export type SourceRef = { pmid: string } | { href: string; label: string };

export const sourceRefHref = (ref: SourceRef) =>
  'pmid' in ref ? `https://pubmed.ncbi.nlm.nih.gov/${ref.pmid}/` : ref.href;

export const sourceRefLabel = (ref: SourceRef) => ('pmid' in ref ? `PubMed ${ref.pmid}` : ref.label);
