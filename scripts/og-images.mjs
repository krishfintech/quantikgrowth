// Generates branded 1200x630 PNG Open Graph images per key page, from SVG
// templates rasterised with sharp. Runs before `vite build` so the PNGs in
// public/og/ are copied into dist/.

import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = dirname(fileURLToPath(import.meta.url)) + '/..';
const outDir = join(root, 'public', 'og');

const BRAND_DEEP = '#0A3F29';
const BRAND = '#0F5A39';
const PAPER = '#FBFBF8';
const MUTED = '#9FD9B8';

// crude word-wrap to a max char count per line
function wrap(text, max) {
  const words = text.split(' ');
  const lines = [];
  let line = '';
  for (const w of words) {
    if ((line + ' ' + w).trim().length > max) {
      lines.push(line.trim());
      line = w;
    } else {
      line = (line + ' ' + w).trim();
    }
  }
  if (line) lines.push(line.trim());
  return lines;
}

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function svg(headline) {
  const lines = wrap(headline, 26);
  const lineHeight = 78;
  const startY = 300 - ((lines.length - 1) * lineHeight) / 2;
  const tspans = lines
    .map((l, i) => `<tspan x="90" y="${startY + i * lineHeight}">${esc(l)}</tspan>`)
    .join('');

  const chips = ['Website design', 'On-page SEO', 'Content engine'];
  let cx = 90;
  const chipEls = chips
    .map((c) => {
      const w = 40 + c.length * 13;
      const el = `<g>
        <rect x="${cx}" y="528" rx="22" ry="22" width="${w}" height="44" fill="none" stroke="${MUTED}" stroke-opacity="0.5"/>
        <text x="${cx + 22}" y="556" font-family="Helvetica, Arial, sans-serif" font-size="21" fill="${MUTED}">${esc(c)}</text>
      </g>`;
      cx += w + 16;
      return el;
    })
    .join('');

  return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="630" fill="${BRAND_DEEP}"/>
    <rect x="0" y="0" width="1200" height="8" fill="${BRAND}"/>
    <circle cx="1080" cy="150" r="220" fill="${BRAND}" fill-opacity="0.18"/>
    <text x="90" y="120" font-family="Helvetica, Arial, sans-serif" font-size="34" font-weight="600" fill="${PAPER}">Quantik<tspan fill="${MUTED}">growth</tspan></text>
    <text x="90" y="120" opacity="0"> </text>
    <text font-family="Georgia, 'Times New Roman', serif" font-size="66" font-weight="400" fill="${PAPER}" letter-spacing="-1">${tspans}</text>
    ${chipEls}
    <text x="1110" y="585" text-anchor="end" font-family="Helvetica, Arial, sans-serif" font-size="20" fill="${MUTED}" fill-opacity="0.8">quantikgrowth.in</text>
  </svg>`;
}

// One image per key page (filename -> headline).
const IMAGES = {
  default: 'Websites, SEO & a content engine for venture firms',
  home: 'A venture firm, presented as well as it invests',
  approach: 'Website design, on-page SEO, and a content engine',
  'how-we-work': 'How we work — voicenote to content, everywhere',
  writing: 'Writing on how venture firms present themselves',
  contact: 'See the design before you pay',
  'think-like-a-publisher': 'Think like a publisher, not a marketer',
  'logo-wall-is-dead': 'The logo wall is dead. Long live the case study.',
  'what-founders-read': 'What founders read before they take your call',
  // Portfolio (PMS) track
  'portfolio-home': 'A PMS firm, presented as well as it performs',
  'portfolio-approach': 'Website design, on-page SEO & a content engine for PMS firms',
  'portfolio-how-we-work': 'How we work — for PMS firms',
  'portfolio-writing': 'Writing on how PMS firms earn trust online',
  'what-hni-investors-read': 'What an HNI reads before trusting a PMS',
  'seo-for-pms-firms': 'On-page SEO for PMS firms',
};

async function main() {
  await mkdir(outDir, { recursive: true });
  for (const [name, headline] of Object.entries(IMAGES)) {
    const buf = Buffer.from(svg(headline));
    const out = join(outDir, `${name}.png`);
    await sharp(buf).png().toFile(out);
    console.log(`og-image ${name}.png`);
  }
}

main().catch((err) => {
  console.error('[og-images] failed:', err);
  process.exit(1);
});
