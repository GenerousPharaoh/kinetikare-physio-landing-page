// The name as filled outlines (opentype.js) and as a raster for the skeleton.
const fs = require('fs'); const opentype = require('opentype.js');
const sharp = require('sharp');
const [fontFile, text, outBase] = process.argv.slice(2);
const font = opentype.loadSync(fontFile);
const SIZE = 600; // font size in px for the raster; outlines are scaled from this too
const path = font.getPath(text, 0, 0, SIZE, { kerning: true });
const bb = path.getBoundingBox();
const pad = 40;
const ox = -bb.x1 + pad, oy = -bb.y1 + pad;
const W = Math.ceil(bb.x2 - bb.x1 + pad * 2), H = Math.ceil(bb.y2 - bb.y1 + pad * 2);
const shifted = font.getPath(text, ox, oy, SIZE, { kerning: true });
const d = shifted.toPathData(2);
fs.writeFileSync(outBase + '.json', JSON.stringify({ W, H, SIZE, ox, oy, d }));
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><rect width="100%" height="100%" fill="#000"/><path d="${d}" fill="#fff"/></svg>`;
sharp(Buffer.from(svg)).png().toFile(outBase + '.png').then(() => console.log(W, H));
