# Partnership page design review

## Scope

Reviewed `/sponsors/` as a marketing page at 320, 375, 768, 1024, 1440, and 1920px widths. Used live browser screenshots, rendered DOM measurements, and an independent source review. Screenshot artifacts are in `C:/Users/mckra/.codex/visualizations/2026/10/04/01a10613-cd60-72e1-8a6a-710a0b999f05/partnership-*.png`.

## First impression and hierarchy

The page communicates a company partnership with a Virginia Tech student engineering team. The first visual anchors are the RG identity, team photograph, and partnership headline. Contact and packet actions are adjacent to the introduction. The remaining sections answer who the team is, what the company gains, what it can contribute, who already partners with the team, and how to start a conversation.

The page uses the existing Chakra Petch/Inter typography, orange/black/paper palette, clipped buttons and photos, and restrained swipe transitions. Benefits are numbered editorial rows, rather than decorative cards. Body copy stays at 16px or above. The heading sequence uses one h1, section h2s, and benefit/contribution h3s.

## Findings and fixes

| Finding | Impact | Resolution |
| --- | --- | --- |
| Three statistic columns crowd labels at 320px | Medium | Stack facts as compact number-and-label rows below 420px. Reviewed the resulting phone layout. |
| Default black keyboard outline disappears against the black contact section | Medium | Use an orange focus outline within the contact section. |
| Packet was initially a text link, rather than the requested button | Medium | Apply the established clipped button style in the hero and contact section. |

The long email button wraps cleanly on small phones and maintains a 52px target. Packet targets are at least 48px high. No horizontal overflow was detected at the reviewed widths. Phone and tablet screenshots show clear section spacing; desktop and wide desktop screenshots retain readable text measures. The wide team photo crops to its container, while smaller screens stack the image above the introduction.

## Actions and content

- Start a conversation scrolls to the contact section beneath the sticky header.
- The email action targets the configured sponsorship email, currently `tina22@vt.edu`, with a partnership inquiry subject. No email was sent during review.
- Packet buttons point to `/packets/robogrinder-partnership-2026-2027.pdf` and open a new tab. This is the user-approved information packet until a dedicated packet is supplied.
- Current member and subteam counts are derived from the same records as the rest of the site.
- Recognition and recruiting are presented as opportunities to discuss, rather than guarantees of employment or a fixed sponsorship package.
- The homepage callout now says “Interested in partnering with us?” and “Partner with us.”

## Maintenance and limits

Update `packetUrl`, benefits, contribution options, and partner logos in `src/content/sponsors.json` or the Sponsors CMS collection. Replace the PDF at its existing path to keep published links stable.

This review sampled the six listed viewport widths in the desktop browser; it is not a physical-device certification or a complete accessibility audit. Existing site hover color preferences are retained. This workspace has no Git repository, so fixes remain in the working files without commits.
