# Design and accessibility review — October 5, 2026

Reviewed all seven pages at 375px and 1440px viewport widths, with an independent source review. Retained the orange, black, and off-white palette, Chakra Petch headings, compact subteam icons, and cut-corner swipe buttons.

## Changes

- Kept the navbar visible when it contains keyboard-visible focus. Same-page menu links now move focus to their destination as well as scrolling there.
- Added `--orange-action: #a84400` for buttons carrying white or off-white text. The brighter section orange remains unchanged. Applied this to the header, gallery close control, and shared button hover states; added a white focus outline to the header CTA.
- Added a visible pause/play control for the company-logo marquee. Reduced-motion styles show every unique logo in wrapping rows, hide duplicates, and remove edge fades and motion.
- Strengthened the hero video overlay behind the copy, increased headline line spacing, and allowed the logo action buttons to wrap on narrow screens.

## Validation

- Each page had one main heading, Chakra Petch heading typography, no horizontal overflow at the audited widths, and no main images missing an alt attribute.
- Verified menu navigation to Subteams transfers focus and aligns the section below the 60px mobile header.
- Verified the logo pause control changes its label and pressed state and pauses the tracks.
- Production build generated all seven routes successfully; Git whitespace checks passed.

## Remaining considerations

- Reduced-motion wrapping was checked in source, but not through an operating-system preference change.
- Some lower-page recruitment CTAs still lead to the Join page while the shared hero/navbar CTA says Support us. Decide whether informational recruitment links should remain available during competition season before changing those sections' messaging.
- This focused review does not constitute a full screen-reader or WCAG conformance audit.
