# Theme Loader

A simple [Next.js](https://nextjs.org) (App Router) app that loads designs from
**theme** and renders them faithfully.

## Source

The designs come from the theme handoff package
`Stpatricks 3-handoff.tar.gz` (the share URL returns a gzipped tarball).
Its README describes a school-website prototype with several builds plus a
seasonal variant:

- `St. Patrick's School.html` — main design; references a `./uploads/` image
  folder and an `image-slot.js` web component
- `St. Patrick's School (standalone).html` — self-contained build of the main
  design with assets inlined
- `St. Patrick's School - Winter.html` — seasonal "Winter" edition

## How it works

Each design uses a custom `<image-slot>` web component, Google Fonts (Schibsted
Grotesk + Newsreader), inline `<style>`, and a small inline script (sticky nav,
scroll reveal, count-up stats). Rather than re-implementing the markup by hand
and risking lost fidelity, the app:

1. Stores each design as a standalone file under [`public/designs/`](public/designs/).
2. Registers it in [`lib/designs.ts`](lib/designs.ts) with title/description/sections.
3. Renders a gallery on `/` and a full-screen viewer at `/designs/<slug>` using an
   `<iframe>`, so the original styles, fonts, and images render exactly as designed.

## Implemented designs

### St. Patrick's School — `/designs/st-patricks-school`

The main design: an editorial school landing page in a warm cream-and-forest-green
palette. Hero — _"A place where curiosity becomes character."_ Sections:

- Floating glass navigation bar
- Hero with an animated image mosaic
- Stats band — _1912 founded · 980 students · 32+ programs · 98% to higher ed_
- About — _"An education built on substance, not show."_
- Principal's message — Bro. Ronish Mathew
- Gallery — _"Life at St. Patrick's."_
- Admissions CTA — _"Enrolment for 2027 is now open."_
- Footer (links to the Winter edition)

Served from the **standalone** build (assets inlined):
[`public/designs/st-patricks-school.html`](public/designs/st-patricks-school.html).

### St. Patrick's School — Winter — `/designs/st-patricks-school-winter`

The seasonal "Winter" edition of the same layout — the second of the two designs
in the handoff. It references `./uploads/*.jpg` and `./image-slot.js`, which are
shipped alongside it under `public/designs/`.

### Heronwood Academy — `/designs/heronwood-academy`

A third design, from a separate handoff (`stpatricks4`): an editorial
"broadsheet" school landing page on a clean white palette (Newsreader serif +
Archivo Expanded) with sky-blue as the signature accent. Hero — _"Where
curiosity becomes character."_ — a riverside college-prep school (est. 1898).
Sections:

- Top strip — _"Ad Lucem · Founded 1898"_
- Sticky nav with a typographic crest (monogram)
- Hero with a rotating wax-seal medallion and a photo slot
- Scrolling values marquee — _Inquiry · Stewardship · Craft …_
- Stats band — _1898 · 14+ advanced courses · 22 programs · 9:1 class size_
- Academics index — _"A curriculum of consequence."_ (hover to expand)
- Mission pull-quote — Dr. Eleanor Vance, Head of School
- Admissions CTA — _"Begin a Heronwood education."_
- Footer (motto _"Ad Lucem — toward the light."_)

It loads `./image-slot.js` and `./tweaks-panel.jsx` (the live Tweaks panel:
color lead, accent, dark-hero toggle, headline font, hero layout), both shipped
under `public/designs/`. The hero and Head-of-School photos that the designer
dropped in are inlined as `src` data URLs so they render without the editor host.

### St. Patrick's Academy, Meerut — `/designs/saint-patricks-academy`

The **final design for client feedback**, from the `saint-patricks` handoff. A
motion-forward navigation system + landing page in the "Academic Excellence &
Prestige" language: **Royal Navy + Academic Gold**, **Playfair Display + Plus
Jakarta Sans**. Hero — _"Where tradition meets tomorrow."_ — a sixty-year-old
school (estd 1965) with a Ken-Burns photo backdrop. Sections:

- Loader splash — spinning gold ring + crest, rotating taglines, 0 → 100%
- Scroll-transform header — transparent over the navy hero, frosting to solid
  white on scroll; desktop mega-menus, announcement ticker, utility bar
- Mobile drawer with accordion navigation (below 1080px)
- Hero — headline, stat strip, dual CTAs, bouncing scroll cue
- Welcome — _"An education that shapes the whole child"_ (3 cards)
- About Us — animated crest medallion (rotating motto) + video glimpse card
- ICSE 2025 high scorers — achievers carousel with photo drop-slots
- Our Facilities — floating image cards
- Our Motto — _"For God and Country"_ + the Principal's message
- Footer (crest + © St. Patrick's Academy)

Unlike the other designs, this is a Claude Design `.dc.html` document: it ships
with its own runtime (`support.js`, which loads React from a CDN and renders the
`<x-dc>` template) and the `<image-slot>` component (`image-slot.js`), so it's
served from its own folder with its relative assets intact:
[`public/designs/saint-patricks-academy/`](public/designs/saint-patricks-academy/).
All copy, stats, names and photos are placeholders pending real content.

## Adding another design

The app is built to host multiple designs. To add another one:

1. Drop its HTML file (and any assets it references) into `public/designs/`.
2. Append an entry to the `designs` array in `lib/designs.ts`.

It then appears in the gallery automatically.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build && npm start   # production build
```
