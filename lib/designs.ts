// Registry of designs loaded from theme.
//
// The designs come from the handoff package `Stpatricks 3-handoff.tar.gz`.
// Each is a self-contained HTML document rendered in the viewer via an <iframe>,
// so the original CSS, fonts, the custom <image-slot> web component, and images
// render with full fidelity.
//
// Add another design by dropping its HTML into public/designs/ (plus any assets
// it references) and appending an entry here.

export type Design = {
  slug: string;
  title: string;
  description: string;
  /** Path to the standalone HTML file under /public. */
  file: string;
  /** Short list of the sections the page contains. */
  sections: string[];
  source: string;
};

export const designs: Design[] = [
  {
    slug: "st-patricks-school",
    title: "St. Patrick's School",
    description:
      "Editorial school landing page in a warm cream-and-forest-green palette (Schibsted Grotesk + Newsreader). Hero reads “A place where curiosity becomes character.” — a century-old school (est. 1912) with an animated image mosaic, count-up stats, and a principal's message. Served from the self-contained standalone build.",
    file: "/designs/st-patricks-school.html",
    sections: [
      "Floating glass nav",
      "Hero — “A place where curiosity becomes character.” + image mosaic",
      "Stats band (1912 · 980 students · 32+ programs · 98%)",
      "About — “An education built on substance, not show.”",
      "Principal's message — Bro. Ronish Mathew",
      "Gallery — “Life at St. Patrick's.”",
      "Admissions CTA — “Enrolment for 2027 is now open.”",
      "Footer (links to the Winter edition)",
    ],
    source: "Theme",
  },
  {
    slug: "st-patricks-school-winter",
    title: "St. Patrick's School — Winter",
    description:
      "Seasonal “Winter” edition of the same school site — the second design in the handoff, with a wintry treatment of the hero, stats, and gallery. Linked from the main page's footer.",
    file: "/designs/st-patricks-school-winter.html",
    sections: [
      "Floating glass nav (winter)",
      "Hero — “A place where curiosity becomes character.”",
      "Stats band — Winter Term",
      "About — “An education built on substance, not show.”",
      "Principal's message",
      "Gallery — “Life at St. Patrick's.”",
      "Admissions CTA",
      "Footer",
    ],
    source: "Theme",
  },
  {
    slug: "heronwood-academy",
    title: "Heronwood Academy",
    description:
      "Editorial “broadsheet” school landing page on a clean white palette (Newsreader serif + Archivo Expanded), with sky-blue as the signature accent. Hero reads “Where curiosity becomes character.” — a riverside, college-preparatory school (est. 1898) with a rotating wax-seal medallion, a scrolling values marquee, an index-style academics list, and a dark “Apply” close. Includes a live Tweaks panel (color lead, accent, dark hero, headline font, hero layout).",
    file: "/designs/heronwood-academy.html",
    sections: [
      "Top strip — “Ad Lucem · Founded 1898”",
      "Sticky nav with a typographic crest",
      "Hero — “Where curiosity becomes character.” + wax-seal medallion",
      "Values marquee (Inquiry · Stewardship · Craft …)",
      "Stats band (1898 · 14+ courses · 22 programs · 9:1)",
      "Academics index — “A curriculum of consequence.”",
      "Mission — Dr. Eleanor Vance, Head of School",
      "Admissions CTA — “Begin a Heronwood education.”",
      "Footer (Ad Lucem — toward the light.)",
    ],
    source: "Theme",
  },
];

export function getDesign(slug: string): Design | undefined {
  return designs.find((d) => d.slug === slug);
}
