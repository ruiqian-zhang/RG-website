import { readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
const site = JSON.parse(await readFile(new URL('../src/content/site.json', import.meta.url), 'utf8'));
const sponsorsMode = process.argv.includes('--sponsors');
const sponsors = sponsorsMode ? JSON.parse(await readFile(new URL('../src/content/sponsors.json', import.meta.url), 'utf8')) : undefined;
const organizations = sponsorsMode ? sponsors.partners.map((partner) => ({ ...partner, slug: partner.logo })) : site.industryCompanies;
const frames = {};
for (const company of organizations) {
  try {
    // Measure artwork only; the original logo file remains unchanged.
    const { data, info } = await sharp(fileURLToPath(new URL('../public' + company.logo, import.meta.url))).resize({ width: 1000 }).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    const { width, height, channels } = info;
    const isWhite = (offset) => data[offset] > 235 && data[offset + 1] > 235 && data[offset + 2] > 235 && data[offset + 3] > 240;
    const corners = [0, (width - 1) * channels, (height - 1) * width * channels, (height * width - 1) * channels];
    const whiteCanvas = corners.filter(isWhite).length >= 3;
    let left = width, top = height, right = -1, bottom = -1;
    for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
      const offset = (y * width + x) * channels;
      if (data[offset + 3] < 32 || (whiteCanvas && isWhite(offset))) continue;
      left = Math.min(left, x); right = Math.max(right, x);
      top = Math.min(top, y); bottom = Math.max(bottom, y);
    }
    if (right < left) continue;
    // Tiny clearance protects antialiased edges from clipping.
    left = Math.max(0, left - 2); top = Math.max(0, top - 2);
    right = Math.min(width - 1, right + 2); bottom = Math.min(height - 1, bottom + 2);
    frames[company.slug] = { width, height, viewBox: `${left} ${top} ${right - left + 1} ${bottom - top + 1}`, ratio: (right - left + 1) / (bottom - top + 1) };
  } catch (error) { console.warn(`${company.name}: ${error.message}`); }
}
await writeFile(new URL(sponsorsMode ? '../src/content/sponsor-artwork-frames.json' : '../src/content/placement-logo-frames.json', import.meta.url), JSON.stringify(frames, null, 2) + '\n');
console.log(`Measured ${Object.keys(frames).length} logo frames.`);
