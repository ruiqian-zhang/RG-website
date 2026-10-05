# Editing sponsorship content

Open the CMS at `/admin/`, then **Sponsors → Sponsors page**. The same content is stored in `src/content/sponsors.json` for direct editing.

- **Team numbers:** open **Team numbers (all pages)** in the CMS or edit `src/content/team-numbers.json`. Labels, values, and order update on both pages. Automatic member and subteam counts follow the roster and subteam files. Choose Manual to supply a custom value.
- Edit section headings, introductions, hero photo and alternative text, button labels and destinations, and sponsorship packet PDF in this collection.
- **Partnership benefits** and **Ways to support the team** control their cards and descriptions.
- **Current partners** controls names, logos, websites, categories, and display order. These partners are also used on the homepage.
- **Sponsorship form text** controls the visible labels, topic names, submit button, and helper text. Topic routing remains stable when labels change.
- The form recipient addresses are configured under the site's general settings (`contactEmail` and `sponsorEmail` in `src/content/site.json`).

Use a new line in **Team introduction heading** to control its line break.

For layout changes, edit `src/components/TeamOverview.astro`. It contains the featured introduction and numbers for both pages, with clearly marked home and sponsor styles. Sponsor numbers are no longer stored separately in `sponsors.json`. See [Editing in code](code-editing.md) for the full file map.
