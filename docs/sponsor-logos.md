# Sponsor logos

Edit partners in src/content/sponsors.json or the Sponsors CMS section. Logos remain in full color and link to each organization’s website. The desktop layout has three logos per row, tablets two, and narrow phones one. Incomplete rows center automatically. Sponsor order is shared by Home and Sponsors.

The provided originals are stored in public/images/partners. SVG viewports frame visible artwork so unused transparent canvas does not shrink the department logos. Original image files are not modified.

After adding or replacing a local logo, run:

```sh
node scripts/measure-placement-logos.mjs --sponsors
```

This refreshes src/content/sponsor-artwork-frames.json. Logos without framing metadata use a standard contained image until measured.