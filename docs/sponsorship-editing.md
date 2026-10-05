# Editing sponsorship content

Open the CMS at `/admin/`, then **Sponsors → Sponsors page**. The same content is stored in `src/content/sponsors.json` for direct editing.

- **Team numbers:** edit labels, reorder entries, and choose a value source. **Current member count** and **Subteam count** update automatically from site data. Choose **Manual** and fill **Manual value** to enter any number or text, such as `Top 4`.
- Edit section headings, introductions, hero photo and alternative text, button labels and destinations, and sponsorship packet PDF in this collection.
- **Partnership benefits** and **Ways to support the team** control their cards and descriptions.
- **Current partners** controls names, logos, websites, categories, and display order. These partners are also used on the homepage.
- **Sponsorship form text** controls the visible labels, topic names, submit button, and helper text. Topic routing remains stable when labels change.
- The form recipient addresses are configured under the site's general settings (`contactEmail` and `sponsorEmail` in `src/content/site.json`).

Use a new line in **Team introduction heading** to control its line break.
