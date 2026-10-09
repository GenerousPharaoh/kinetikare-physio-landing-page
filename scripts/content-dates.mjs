// Records the date each page's content last changed, for the sitemap's <lastmod>
// and the schema's dateModified.
//
// Why: both used to come from file modification times, and on Vercel every file
// is checked out fresh, so every page claimed to have changed at every deploy.
// Google learns to ignore a lastmod that moves on every build.
//
// How: after `next build`, read each prerendered page in .next/server/app,
// fingerprint what a reader sees (title, meta description and the visible body
// text, with scripts, styles and markup removed), and compare it with
// lib/content-dates.json. A changed fingerprint gets today's date (Toronto);
// an unchanged one keeps its recorded date. Runs in `postbuild` before
// next-sitemap, so a Vercel build dates the pages it changed even when the
// updated JSON was not committed; commit the JSON after local builds so the
// dates are also in the schema of the next build.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const ROOT = process.cwd();
const APP = path.join(ROOT, '.next', 'server', 'app');
const OUT = path.join(ROOT, 'lib', 'content-dates.json');
const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Toronto' }).format(new Date());

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : e.name.endsWith('.html') ? [p] : [];
  });
}

const decode = (s) => s.replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ');

function fingerprint(html) {
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  const body = (html.match(/<body[\s\S]*<\/body>/) || [''])[0]
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<svg[\s\S]*?<\/svg>/g, ' ')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<[^>]+>/g, ' ');
  const text = decode(`${title}\n${desc}\n${body}`).replace(/\s+/g, ' ').trim();
  return crypto.createHash('sha1').update(text).digest('hex').slice(0, 16);
}

if (!fs.existsSync(APP)) {
  console.log('[content-dates] no .next/server/app, skipped');
  process.exit(0);
}

const previous = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, 'utf8')) : {};
const next = {};
let changed = 0;
for (const file of walk(APP)) {
  const rel = path.relative(APP, file).replace(/\\/g, '/').replace(/\.html$/, '');
  if (rel.startsWith('_') || rel.includes('[')) continue; // _not-found, _global-error, dynamic templates
  const route = rel === 'index' ? '/' : `/${rel}`;
  const hash = fingerprint(fs.readFileSync(file, 'utf8'));
  const before = previous[route];
  if (before && before.hash === hash) next[route] = before;
  else { next[route] = { hash, date: today }; changed++; }
}
const sorted = Object.fromEntries(Object.keys(next).sort().map((k) => [k, next[k]]));
const serialized = JSON.stringify(sorted, null, 2) + '\n';
if (!fs.existsSync(OUT) || fs.readFileSync(OUT, 'utf8') !== serialized) fs.writeFileSync(OUT, serialized);
console.log(`[content-dates] ${Object.keys(sorted).length} pages, ${changed} dated ${today}`);
