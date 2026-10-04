# Responsive design review

Reviewed October 4, 2026 using browser viewport emulation and an independent source review. Scope: Home, Sponsors, and Contact. This covers representative device sizes, not every physical device or browser engine.

## Coverage

| Width | Device class | Pages reviewed |
| --- | --- | --- |
| 320px | Compact phone | Home, Sponsors, Contact |
| 375px | Phone | Home, Sponsors, Contact |
| 768px | Tablet portrait | Home, Sponsors, Contact |
| 1024px | Small desktop / tablet landscape | Home, Sponsors, Contact |
| 1440px | Desktop | Home, Sponsors, Contact |

Reviewed hierarchy, typography, spacing, image framing, sponsor logos, forms, footer, mobile navigation, and horizontal overflow. The marquee remains continuous in opposite directions. Email submission was not performed.

## Findings fixed

| Finding | Change |
| --- | --- |
| Barclays stretched inside its measured frame | Preserve the source image aspect ratio inside SVG frames. |
| CAS asset needed replacement | Use the supplied replacement wordmark and regenerate its visible bounds. |
| Compact phones could scroll sideways | Remove the body's fixed 320px minimum width. Verified client and content widths match at 320px. |
| Phone subteam columns were cramped | Use one column at 520px and below. |
| Five subteam columns were narrow at 1024px | Switch to three columns through 1100px. |
| Mobile menu covered anchored content after selection | Close the menu when its navigation links are selected. Verified Subteams closes the menu. |
| Brand and email link tap targets were small | Give both a minimum 44px height; allow long email text to wrap. |
| Anniversary numeral contrast was low | Use black on the light badge. |
| Join paragraph contrast was marginal on orange | Use black text. |
| Mobile current-page indication was absent | Add the same current-page semantics used by desktop navigation. |

## Assessment

Hierarchy and brand identity are clear. Body copy is at least 16px. Forms fit the reviewed widths and use square controls with explicit labels. Layout changes preserve the requested 90-degree and 45-degree geometry. No unresolved blocking visual defect was identified in the reviewed layouts.

The supplied CAS replacement is a raster thumbnail; its small text will be less crisp than an official vector asset. Sponsor image backgrounds are part of the supplied assets. Contact and newsletter actions continue to open an email app.
