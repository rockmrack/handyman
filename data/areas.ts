export type Area = {
  slug: string;
  name: string;
  postcodePrefixes: string[];
  intro: string;
  landmarks: string[];
  heroCopy: string;
};

export const areas: Area[] = [
  {
    slug: "hampstead-nw3",
    name: "Hampstead (NW3)",
    postcodePrefixes: ["NW3"],
    intro:
      "Base of operations at 250 Finchley Road, serving period homes, mansion blocks, and managed properties across Hampstead and Belsize Park.",
    landmarks: ["Hampstead Heath", "Finchley Road", "Belsize Park"],
    heroCopy: "Same-day handyman, locksmith, and maintenance teams in NW3."
  },
  {
    slug: "west-hampstead-nw6",
    name: "West Hampstead (NW6)",
    postcodePrefixes: ["NW6"],
    intro: "Fast response to mansion blocks and contemporary apartments around West End Lane and Finchley Road.",
    landmarks: ["West End Lane", "Fortune Green", "Kilburn Borders"],
    heroCopy: "Reliable trades for NW6 flats and Victorian conversions."
  },
  {
    slug: "belsize-park-nw3",
    name: "Belsize Park (NW3)",
    postcodePrefixes: ["NW3"],
    intro: "Discreet, careful work in period apartments with strict protection of finishes and common areas.",
    landmarks: ["England's Lane", "Haverstock Hill"],
    heroCopy: "Detail-focused repairs and refurb assistance in Belsize Park."
  },
  {
    slug: "highgate-n6",
    name: "Highgate (N6)",
    postcodePrefixes: ["N6"],
    intro: "Trusted by homeowners and estate managers for careful works in conservation areas.",
    landmarks: ["Highgate Village", "Hampstead Heath Extension"],
    heroCopy: "Respectful teams for Highgate homes and estates."
  },
  {
    slug: "swiss-cottage-nw3",
    name: "Swiss Cottage (NW3)",
    postcodePrefixes: ["NW3"],
    intro: "Rapid attendance for apartments and commercial units along Finchley Road.",
    landmarks: ["Swiss Cottage Station", "O2 Centre"],
    heroCopy: "Dependable maintenance for Swiss Cottage apartments."
  }
];

export const areaMap = Object.fromEntries(areas.map((area) => [area.slug, area]));
