# Alumni backup

`alumni-2026-10-06.json` is a snapshot of the original `alumni` array in `src/content/members.json`, saved before adding current-member filtering. Preserve this file unchanged. It is not used by the website or CMS.

The website filters alumni at render time against the current roster, matching names without case or extra whitespace. Current members are excluded except for presidents (including past presidency records). The live source list stays intact so alumni reappear when they leave the current roster.
