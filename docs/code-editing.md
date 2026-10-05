# Editing the website in code

Astro frontmatter (between `---` lines) holds imports, editable display settings, and derived values. Markup and styles for a section stay together below it. Content JSON files are the shared editable settings, similar to a header of variables; the CMS edits those same files.

## Recruiting and competition seasons

Set `recruitment.open` in `src/content/site.json` to `true` for recruiting season or `false` when recruiting is closed. In the CMS, use **Landing page → Homepage content → Recruiting season → Recruiting is open**.

The standalone navbar CTA and homepage hero share `src/lib/season.ts`: `true` uses `recruitment.joinLabel` and `recruitment.joinUrl`; `false` uses `recruitment.supportLabel` and `recruitment.supportUrl`. The Connect dropdown, footer, industry section, and lower homepage Join section always link to the Join page, regardless of recruitment status.

On `/join/`, `true` shows **Application forms** using `recruitment.applicationLabel` and `recruitment.applicationUrl`. Replace the temporary Rickroll link with your actual form URL before opening recruiting. `false` shows **Explore our subteams**. Edit `recruitment.openDescription` and `closedDescription` for the matching Join page messages. The lower homepage Join section always uses `join.title` and `join.description`. Sponsor-specific links still lead to sponsors in both seasons.

## Site settings

`src/content/site.json` is grouped by purpose. The CMS uses these same groups.

| Group | What to edit |
| --- | --- |
| `recruitment` | Open/closed toggle, shared Join and Support button text and destinations |
| `hero` | Headline, introduction, YouTube ID, loading photo, delay before fading into playback |
| `mission` | Heading, tagline, description, photo, photo alt text |
| `join` | Lower-page joining section copy, photo, photo alt text |
| `contact` | General and sponsorship inboxes |
| `links` | ARC, Linktree, and social destinations |

All banner settings live under `hero.anniversaryBanner`. Set `enabled` to `false` to hide it. `founded` and `anniversaryYear` supply the dates and automatically calculate the large year count. `teamName` and `university` supply the accessible banner description. The CMS group is **Hero → Anniversary banner**. The hero headline is edited separately.

Change `hero.poster` to a photo path under `/images/` or `/uploads/`. Control the background with:

```json
"videoEnabled": true,
"videoSource": "youtube",
"videoId": "gSamMUlUCaA",
"videoFile": "",
"videoRevealDelayMs": 2000
```

- `videoEnabled: true` loads video when the hero is visible. The photo stays visible while loading, then for `videoRevealDelayMs` milliseconds after playback starts before fading into video. Use `2000` for two seconds, `1500` for one and a half seconds, or `0` for an immediate fade.
- `videoEnabled: false` keeps the photo permanently. No video iframe or play/pause button is rendered, and no YouTube API is loaded. The hold duration is ignored.
- `videoSource: "youtube"` uses `videoId` and continuously loops that video.
- `videoSource: "file"` uses `videoFile`, such as `/videos/hero.mp4` (place the file in `public/videos/`) or a CMS upload under `/uploads/`. MP4 and WebM files loop continuously using the browser's video player, with no YouTube connection. Both sources share the loading photo, millisecond delay, muted playback, and pause/play control. If the selected source is blank, the hero falls back to the photo with no playback button.

Both settings are in **Landing page → Homepage content → Hero** in the CMS.

JSON does not allow comments. Keep editing instructions here; keep `site.json` focused on values used by the site.

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
