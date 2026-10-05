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

## GitHub Pages deployment

The repository is `ruiqian-zhang/RG-website`. Its default Pages address is
`https://ruiqian-zhang.github.io/RG-website/`.

1. Open repository **Settings → Pages** and select **GitHub Actions** under **Build and deployment → Source**.
2. Commit and push these setup changes to `main`.
3. Open **Actions → Deploy Astro to GitHub Pages** and wait for the deployment. Future pushes to `main` rebuild the website automatically. You can also use **Run workflow**.

The workflow installs dependencies with `npm ci`, builds Astro, and uploads only `dist/`. GitHub's Pages metadata supplies `SITE_URL` and `SITE_BASE`, supporting either the repository path or a configured custom domain. Local development stays at `/`. Local links and artwork use `src/lib/urls.ts` to respect the deployment path; use `withBase()` when adding new root-relative URLs.

To build and preview the default Pages path in PowerShell:

```powershell
$env:SITE_BASE = '/RG-website'
npm run build
npm run preview
```

Visit the printed preview origin with `/RG-website/` appended. Remove the variable afterward with `Remove-Item Env:SITE_BASE` to return to ordinary local builds.

GitHub Pages serves static files. The contact form uses the visitor's email app. CMS login needs a separate GitHub OAuth provider; configure its host in `public/admin/config.yml` before using the CMS online. Never put OAuth client secrets in this repository.

## Content management

### Local editor (no OAuth setup)

Run `npm run cms`, then open `http://127.0.0.1:4322/admin/index.html`. This starts the website on port 4322 and Decap's local content server on port 8081, bound to your computer. Choose a collection, edit fields, and save/publish. The local CMS writes the JSON files and uploads directly to this checkout; it does not publish to GitHub automatically.

Review the changes in GitHub Desktop or with `git diff`, then commit and push to `main` to publish through GitHub Pages. Press Ctrl+C in the terminal to stop both servers. After cloning on another computer, run `npm ci` first. Online CMS login still needs OAuth; local editing does not.

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
