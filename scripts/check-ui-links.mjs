import { readFile, mkdir, writeFile, access } from 'node:fs/promises';
import path from 'node:path';

// Run after a production build. Inspect the actual generated anchors without
// contacting Jane, opening telephone/email links, or submitting a form.
const root = process.cwd();
const manifest = JSON.parse(await readFile(path.join(root, '.next/prerender-manifest.json'), 'utf8'));
const routes = Object.keys(manifest.routes).filter(route => !route.startsWith('/_'));
const documents = new Map();
const decode = value => value.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'");
const attribute = (tag, name) => tag.match(new RegExp(`(?:^|\\s)${name}="([^"]*)"`, 'i'))?.[1];

for (const route of routes) {
  const file = route === '/' ? 'index.html' : `${route.slice(1)}.html`;
  const html = await readFile(path.join(root, '.next/server/app', file), 'utf8');
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => decode(match[1]));
  const anchors = [...html.matchAll(/<a\b[^>]*>/gi)].map(match => ({
    href: decode(attribute(match[0], 'href') ?? ''),
    target: attribute(match[0], 'target'),
    rel: attribute(match[0], 'rel') ?? '',
  }));
  documents.set(route, { ids: new Set(ids), duplicates: ids.filter((id, i) => ids.indexOf(id) !== i), anchors });
}

const failures = [];
let anchorsChecked = 0;
let contactLinksInspected = 0;
let internalTargetsChecked = 0;
let externalLinksNotOpened = 0;
const pages = [];
for (const [route, doc] of documents) {
  const pageFailures = [];
  for (const id of doc.duplicates) pageFailures.push(`Duplicate id: ${id}`);
  for (const anchor of doc.anchors) {
    anchorsChecked++;
    const { href } = anchor;
    if (/^(tel:|mailto:)/i.test(href)) {
      contactLinksInspected++;
      continue;
    }
    if (!href || href === '#' || /^javascript:/i.test(href)) {
      pageFailures.push(`Empty or placeholder link: ${href || '(empty)'}`);
      continue;
    }
    const url = new URL(href, `https://www.kinetikarephysio.com${route}`);
    if (!['www.kinetikarephysio.com', 'kinetikarephysio.com'].includes(url.hostname)) {
      externalLinksNotOpened++;
      continue;
    }
    internalTargetsChecked++;
    const target = documents.get(url.pathname);
    if (!target) {
      try { await access(path.join(root, 'public', decodeURIComponent(url.pathname))); }
      catch { pageFailures.push(`Missing route: ${href}`); }
    } else if (url.hash && !target.ids.has(decodeURIComponent(url.hash.slice(1)))) {
      pageFailures.push(`Missing anchor: ${href}`);
    }
  }
  pages.push({ route, anchors: doc.anchors.length, failures: pageFailures });
  failures.push(...pageFailures.map(problem => ({ route, problem })));
}

const result = { pages: pages.length, anchorsChecked, internalTargetsChecked, contactLinksInspected, externalLinksNotOpened, failures, routes: pages };
const output = path.join(root, 'output/interaction-audit');
await mkdir(output, { recursive: true });
await writeFile(path.join(output, 'links.json'), `${JSON.stringify(result, null, 2)}\n`);
console.log(JSON.stringify({ pages: pages.length, anchorsChecked, internalTargetsChecked, contactLinksInspected, externalLinksNotOpened, failures }, null, 2));
if (failures.length) process.exitCode = 1;
