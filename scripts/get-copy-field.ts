// Prints the current value of condition-record fields by path, for writing
// edits for scripts/apply-copy-edits.ts.
// Usage: node_modules/.bin/jiti scripts/get-copy-field.ts slug:path [slug:path ...]
import { detailedConditionsContent } from '../lib/detailed-conditions-content';

for (const arg of process.argv.slice(2)) {
  const [slug, path] = arg.split(':');
  let v: unknown = detailedConditionsContent[slug];
  for (const seg of path.split(/\.|\[|\]/).filter(Boolean)) {
    v = (v as Record<string | number, unknown> | undefined)?.[/^\d+$/.test(seg) ? Number(seg) : seg];
  }
  console.log(`--- ${slug} ${path}\n${typeof v === 'string' ? v : JSON.stringify(v, null, 1)}`);
}
