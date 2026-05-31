# Claude Design Loader

A simple [Next.js](https://nextjs.org) (App Router) app that loads designs from
**Claude Design** and renders them faithfully.

## Source

The designs come from the Claude Design handoff package
`Stpatricks 3-handoff.tar.gz` (the design share URL returns a gzipped tarball).
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
