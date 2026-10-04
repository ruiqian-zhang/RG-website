# RoboGrinder website

Astro landing page for RoboGrinder at Virginia Tech. Page copy, subteams, industry marquee logos, and supporter logos live in JSON files under `src/content/`; Astro imports these files directly, and Decap CMS edits the same files through `/admin/`.

The visual tokens are centralized in `src/layouts/BaseLayout.astro`: 60% off-white (`#f0f0f0`), 30% orange (`#ed721e`), and 10% black (`#000000`). Keep interface corners square or cut them at 45°. Use the white logo on dark surfaces and the black logo on light surfaces; the styled SVG is intentionally excluded from the site.

## Develop

Use Node.js 22.12 or newer.

```sh
npm install
npm run dev
```

Open the local address printed by Astro (normally `http://localhost:4321`).

## Content management

The admin app is served from `public/admin/`. Before deploying it:

1. Set `backend.repo` in `public/admin/config.yml` to the GitHub owner and repository for this site.
2. Configure a GitHub OAuth provider (or Decap Turbo) and set `backend.base_url` to its authentication host. The GitHub backend requires repository write access for CMS editors.
3. Make sure the deployed branch matches the `branch` value (`main` by default).
4. Visit `/admin/` on the deployed site to edit homepage copy, links, photos, industry marquee logos, subteam cards, and sponsor information. Industry logos use local image paths and retain original source URLs. Sponsor names, logo paths, and destination URLs are managed in `src/content/sponsors.json`.

The Contact page opens a prefilled email draft to `contactEmail`; sponsorship inquiries use `sponsorEmail` when set.

Text size tokens live in `src/layouts/BaseLayout.astro`: body copy is at least 16px, controls at least 15px, and supporting labels at least 13px on desktop (14px on small screens). Use these tokens for new content styles.

Swipe fills are opt-in: add `button-swipe` only to a control intended to use that effect. Footer links and social icons have no hover effects. Member profile icons render only when a destination URL is supplied.

The careers, research, and graduate study section alphabetizes placement organizations and splits them into three consecutive groups for continuously moving logo rows. Logo names are available to screen readers. Reduced-motion preferences slow the ticker. Track organizations, university eligibility, and source links in [docs/placements.md](docs/placements.md); download configured logo originals with `node scripts/sync-placement-logos.mjs`. Both the homepage and Sponsors page reuse `SponsorLogos.astro` for large, borderless logo links. The shared footer groups team, community, and contact links, with configurable social destinations. The anniversary ribbon switches between off-white over orange sections and orange over light sections.

Photos are stored in `public/images/`; CMS uploads go to `public/uploads/`. Keep filenames descriptive and add alt text when changing image fields.

## Project structure

```text
public/
  admin/       Decap CMS admin app and collection configuration
  images/      Team logos and photography
src/
  components/  Shared header, footer, member profiles, and logo sections
  content/     CMS-editable homepage, subteam, and sponsor JSON
  layouts/     Shared page shell, fonts, color tokens, and global styles
  pages/       Astro routes
```
