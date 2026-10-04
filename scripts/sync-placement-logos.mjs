import { access, mkdir, writeFile } from 'node:fs/promises';
import site from '../src/content/site.json' with { type: 'json' };

await mkdir(new URL('../public/images/placements/', import.meta.url), { recursive: true });
let failures = 0;
for (const company of site.industryCompanies) {
  const destination = new URL('../public' + company.logo, import.meta.url);
  try { await access(destination); continue; } catch {}
  await new Promise(resolve => setTimeout(resolve, 2500));
  try {
  const response = await fetch(company.source, { headers: { 'User-Agent': 'RoboGrinderWebsite/1.0 (logo asset download)' } });
  if (!response.ok) throw new Error(company.name + ': HTTP ' + response.status);
  await writeFile(destination, new Uint8Array(await response.arrayBuffer()));
  console.log('Saved ' + company.name);
  } catch (error) { failures++; console.error(error.message); }
}
await import('./measure-placement-logos.mjs');
if (failures) process.exitCode = 1;
