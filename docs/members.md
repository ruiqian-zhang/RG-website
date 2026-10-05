# Members roster

Edit `src/content/members.json` or the CMS Members collection. `rosterYear` identifies the featured roster; `people` contains its members. `seasons` contains previous recorded rosters. `alumni` holds earlier names without inferred year assignments. The display order is president, vice president, branch leads and technical advisors, project leads, members, then faculty advisors. Other members are alphabetized by displayed first name. Past presidents appear by term year, newest first. Majors use full names without abbreviations. Archived lists display roles without majors; majors remain stored in the data. The 2026-2027 roster combines retained 2025-2026 members with accepted Fall 2026 members and the requested leadership updates.

The featured season is 2025-2026, followed by the recorded 2024-2025 roster and undated alumni. Leadership roles, supplied subteams, and degree abbreviations are retained. See [roster-records.md](roster-records.md) for the compiled lists and unresolved name variants.

Photos and `linkedin`, `github`, and `portfolio` URLs are optional. Blank photos render initials. Profile icons appear only when their URLs are supplied. Mobile cards remain two per row.

The header has About us and Sponsors dropdowns and an orange Join us button. On mobile, About us contains all destinations. Dropdowns expand without changing colors. The anniversary years are hidden on screens 360px wide or narrower.

Footer social destinations live in `src/content/site.json` under `links.social`, or in the CMS Social links list. A blank URL leaves that platform's borderless icon disabled until a destination is supplied.
