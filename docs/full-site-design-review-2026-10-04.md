# Full site design and interaction review

Reviewed October 4, 2026 at http://localhost:4321 using the in-app browser, generated HTML checks, and an independent source audit.

## Coverage

All six public pages: Home, Members, Sponsors, Contact, Gallery, and Join.

| Width | Device class | Coverage |
| --- | --- | --- |
| 320px | Compact phone | All six pages |
| 375px | Phone | All six pages |
| 768px | Portrait tablet | All six pages |
| 1024px | Landscape tablet / small desktop | All six pages |
| 1440px | Desktop | All six pages |
| 1920px | Wide desktop | All six pages |

36 page/viewport combinations. Full-page screenshots are saved in `C:/Users/mckra/.codex/visualizations/2026/10/04/01a10613-cd60-72e1-8a6a-710a0b999f05/review-{page}-{width}.png`. After fixes, all 36 combinations were checked again for horizontal overflow, failed images, and visible controls smaller than 44px. No failures were found. Below-the-fold photos on Home, Gallery, and Join were loaded through scrolling and checked separately; none failed.

## First impression and design system

The site reads as a student engineering team. The landing headline, anniversary pennant, and Join action are the strongest elements in the first screen. Orange sections, black navigation, large Chakra Petch headings, and clipped corners carry consistently across the pages. The supporting Inter text is readable and secondary to the headings. Gallery has a clear season structure; Sponsors progresses from team introduction to benefits, contributions, sponsors, and contact fields. Members is a directory rather than a marketing page.

The site is a marketing site with functional forms and disclosures. The six public pages have one H1 each. No new decorative cards, gradients, or redundant labels were added during this review. Existing user preferences take precedence over generic style rules, including static footer links, white button text on orange, the logo-only navbar, and unfiltered feature photos.

## Changes and verification

| Finding / request | Change | Result |
| --- | --- | --- |
| Join action missing below placement marquees | Added a Join us button linking to `/join/` | Clicked and confirmed navigation |
| RG logo tap target was 35px on phones and 42px on desktop | Set a 44px minimum link width, preserving the logo's visual size | All viewport checks pass |
| Black inset focus outline disappeared on black buttons | Use a paper focus outline for dark buttons | Keyboard navigation confirmed a visible paper outline; header and dark contact areas retain orange focus |
| Continuous placement motion had no pause control | Added a clipped icon pause/play button with an accessible label and pressed state | Clicked both states; animation play state changes between paused and running |
| Reduced-motion users still received automatic marquee motion | Start paused when reduced motion is requested; CSS also pauses before script initialization | Independent source verification; explicit Play can resume motion |

## Interaction review

| Interaction | Evidence / outcome |
| --- | --- |
| Desktop About us and Connect menus | Open/close states update; opening one closes the other |
| Escape key | Closes the menu and returns focus to its summary |
| Mobile navigation | All seven destinations present; selecting Subteams closes the menu |
| Section navigation | Mobile Subteams begins at 70.05px beneath a 70px header; desktop alignment follows the 76px header |
| Landing video control | Pause and Play labels, icon, and pressed state toggle; playback commands target the YouTube embed |
| Achievement history | Earlier results expands and collapses |
| Member archives | Previous seasons, nested season, and Alumni disclosures expand |
| Contact form | Empty submission focuses the first required field; malformed email is invalid; completed sample fields become valid |
| Sponsorship form | Sponsorship is selected by default; empty submission focuses the name field; optional company field fits mobile |
| Email routing | Shared form sends partnership drafts to the sponsor inbox and other topics to the general inbox; independently reviewed in source |
| Gallery | Explore the photos navigates to the season area; a photo opens its original image in a new tab |
| Sponsorship packet | Opens the approved PDF in a new tab |
| Footer | Links and social targets present; icons use three columns; links have 44px minimum height |
| Local links and assets | Generated HTML references and anchor targets checked; no missing destinations or duplicate IDs |
| Button states | Swipe colors and focus outlines reviewed; orange states retain white text as requested |

Form testing did not send email or submit a valid draft to an email client. No real personal data was used. Temporary photo and packet tabs were closed.

## Assessment

| Category | Before | After |
| --- | --- | --- |
| Composition and hierarchy | A− | A− |
| Typography and content | B+ | B+ |
| Cross-page consistency | A− | A− |
| Responsive layout | A− | A− |
| Interaction accessibility | B | A− |
| Motion accessibility | C | A− |

Overall design assessment: B+ → A−. These are qualitative judgments, not automated scores. Generic-template risk remains low: the established typography, geometry, orange/black palette, and team photography provide a consistent identity. No unresolved blocking layout issue was found.

## Limits and remaining concerns

- This covers representative viewport sizes in one browser engine, not every physical device or Safari/Firefox. Touch target measurements and phone layouts were emulated.
- Reduced-motion behavior was verified in source; the browser tool does not expose an OS motion-preference emulator.
- YouTube controls and loading overlays can still appear in the landing embed. Their appearance and autoplay availability depend on the external player. Control state was exercised, but player/network behavior was not exhaustively tested.
- Forms prepare email drafts and require a configured email app; delivery was not tested.
- External social services were checked for configured destinations, not availability or account ownership. No external messages were sent.
- White text on the existing bright-orange button states has lower contrast than AA body-text requirements. The explicitly requested colors were preserved; black text on orange section backgrounds remains readable.
- Many current members have initials in place of portraits. This is a content dependency, not a broken image.
- The build passed. Performance timing and field Core Web Vitals were not benchmarked in this design review.

Source fixes are in IndustryExperience.astro, SiteHeader.astro, and BaseLayout.astro. This workspace has no Git repository, so no atomic commits were created.

## Subsequent requested revisions

The global marquee pause button was subsequently removed at the user's request. Desktop hover now pauses only the row under the pointer. Browser checks confirmed `[paused, running, running]` on the first row and `[running, paused, running]` on the second. Reduced motion disables automatic marquee animation.

Join's support message now focuses on following competition updates and cheering for the team, without repeating the application status. Its buttons use a grid with a 24px desktop gap and stack on narrow screens; a 375px check found no overflow. Selection uses white text on orange, or white text on black within orange sections. The confirmed 2026–2027 roster now includes Tina's combined Vice President / Operations Branch Lead role, Rui as Software & Computer Vision Technical Advisor, and Patrick as Mechanical Project Lead. Other requested lead and advisor assignments were already present.
