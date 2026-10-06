import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL || 'https://robogrinder.org',
  base: process.env.SITE_BASE || '/',
  output: 'static',
});
