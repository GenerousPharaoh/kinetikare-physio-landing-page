// Display names written mid-sentence: "Book an assessment for ACL injuries",
// "Read the Sever's disease guide". Plain .toLowerCase() turned these into
// "acl injuries" and "sever's disease". Acronyms (two or more capitals, e.g.
// ACL, MCL/LCL, OA, SI, IT) and eponyms keep their capitals; everything else
// is lowercased.

const EPONYMS = new Set([
  "achilles",
  "sever's",
  "morton's",
  "osgood",
  "schlatter",
  "osgood-schlatter",
  "quervain's",
  "baker's",
  "hoffa's",
  "haglund's",
  "sinding-larsen-johansson",
]);

function inlineWord(word: string): string {
  const letters = word.replace(/[^A-Za-z]/g, '');
  if (letters.length >= 2 && letters === letters.toUpperCase()) return word;
  const bare = word.replace(/^[^A-Za-z]+|[^A-Za-z']+$/g, '').toLowerCase();
  if (EPONYMS.has(bare)) return word;
  return word.toLowerCase();
}

export function inlineName(name: string): string {
  return name
    .split(' ')
    .map(inlineWord)
    .join(' ');
}
