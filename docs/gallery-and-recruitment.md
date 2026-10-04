# Gallery and recruitment

`/gallery/` groups photos by season and competition. Edit `src/content/gallery.json` or the Gallery CMS collection to add photos and captions. Photo links open the larger image.

`/join/` shows that applications for 2026–2027 are closed and asks visitors to return next fall. All joining links use `site.joinLink`, now `/join/`. Update the status copy in `src/pages/join.astro` when recruitment opens.

Both pages reuse the orange photo-and-copy layout in `OrangeFeature.astro`. The Join page uses a separate Gobblerfest photo, while the homepage keeps its original competition photo.

The homepage mission copy summarizes page 3 of the 2026–2027 information packet: apply classroom knowledge, collaborate across disciplines, and prepare for industry. The user-confirmed founding year remains 2016.
