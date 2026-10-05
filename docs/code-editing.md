# Editing the website in code

Astro frontmatter (between `---` lines) holds imports, editable display settings, and derived values. Markup and styles for a section stay together below it. Content JSON files are the shared editable settings, similar to a header of variables; the CMS edits those same files.

## Recruiting and competition seasons

Set `recruiting` in `src/content/site.json` to `true` for recruiting season or `false` when recruiting is closed. In the CMS, use **Landing page → Homepage content → Recruiting is open**.

The navbar and hero share `src/lib/season.ts`: `true` shows **Join us** linking to `joinLink`; `false` shows **Support us** linking to `/sponsors/`. The navbar has one seasonal primary button. Edit the Join page's application information in `src/pages/join.astro` when opening a new recruiting season.

## Shared team numbers

Edit **`src/content/team-numbers.json`** to change numbers on both the homepage and Sponsors & Partners. Each entry has a `label`, a `source`, and a `value`. List order is display order on both pages.

```json
{ "label": "Shared mission", "source": "manual", "value": "1" }
```

- `members` counts unique names in the featured roster in `members.json`.
- `subteams` counts entries in `subteams.json`.
- `manual` displays `value` as written. Use this to override automatic values, or enter text such as `#2`.

`title` controls the homepage's numbers heading. The current `#2` placement is a manually rounded figure, not an automatically calculated average.

**`src/components/TeamOverview.astro`** contains the featured team introduction, number resolution, and both page layouts. Its frontmatter points to the content files; its styles mark the home and sponsor sections. `index.astro` uses `<TeamOverview />`; `sponsors.astro` uses `<TeamOverview variant="sponsors" />`.

## Where to edit other sections

| Section | Content/settings | Markup and styles |
| --- | --- | --- |
| Home hero, subteams, joining call to action | `site.json`, `subteams.json` | `pages/index.astro` |
| Team introductions | `site.json` (home), `sponsors.json` (sponsors) | `components/TeamOverview.astro` |
| Achievements | `achievements.json`; `visibleSeasons` at top of component | `components/Achievements.astro` |
| Sponsors and departmental supporters | `sponsors.json` → `partners` | `components/OurSponsors.astro` |
| Sponsor benefits, support options, contact | `sponsors.json` | `pages/sponsors.astro` |
| Career and university logos | `industry-placements.json` | `components/IndustryExperience.astro` |
| Roster and alumni | `members.json` | `pages/members.astro`, `components/RosterNames.astro` |
| Shared photo introductions | Each page's content JSON | `components/OrangeFeature.astro` |
| Header, footer, social icons | `site.json`; navigation in component frontmatter | `SiteHeader.astro`, `SiteFooter.astro`, `ProfileIcon.astro` |
| Number animation | Animation settings in component | `components/AnimatedStat.astro` |
| Fonts, colors, global interactions | CSS variables and scripts | `layouts/BaseLayout.astro` |

Files above are under `src/`; content/settings JSON files are under `src/content/`.

The sponsor section now includes its logo rendering, and the achievement section includes its timeline rendering. The unused `Members.astro` component was removed. Shared rendering and behavior used across pages remain components so fixes propagate to every consumer.
