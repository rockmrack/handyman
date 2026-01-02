export type Area = {
  slug: string;
  name: string;
  postcodePrefixes: string[];
  intro: string;
  landmarks: string[];
  heroCopy: string;
  image: string;
};

export const areas: Area[] = [
  {
    slug: "hampstead-nw3",
    name: "Hampstead (NW3)",
    postcodePrefixes: ["NW3"],
    intro:
      "Base of operations at 250 Finchley Road, serving period homes, mansion blocks, and managed properties across Hampstead and Belsize Park.",
    landmarks: ["Hampstead Heath", "Finchley Road", "Belsize Park"],
    heroCopy: "Same-day handyman, locksmith, and maintenance teams in NW3.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "west-hampstead-nw6",
    name: "West Hampstead (NW6)",
    postcodePrefixes: ["NW6"],
    intro: "Fast response to mansion blocks and contemporary apartments around West End Lane and Finchley Road.",
    landmarks: ["West End Lane", "Fortune Green", "Kilburn Borders"],
    heroCopy: "Reliable trades for NW6 flats and Victorian conversions.",
    image: "https://images.unsplash.com/photo-1572085313466-6710de0d76bd?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "belsize-park-nw3",
    name: "Belsize Park (NW3)",
    postcodePrefixes: ["NW3"],
    intro: "Discreet, careful work in period apartments with strict protection of finishes and common areas.",
    landmarks: ["England's Lane", "Haverstock Hill"],
    heroCopy: "Detail-focused repairs and refurb assistance in Belsize Park.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "highgate-n6",
    name: "Highgate (N6)",
    postcodePrefixes: ["N6"],
    intro: "Trusted by homeowners and estate managers for careful works in conservation areas.",
    landmarks: ["Highgate Village", "Hampstead Heath Extension"],
    heroCopy: "Respectful teams for Highgate homes and estates.",
    image: "https://images.unsplash.com/photo-1449824913929-2b3a3e3dd452?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "swiss-cottage-nw3",
    name: "Swiss Cottage (NW3)",
    postcodePrefixes: ["NW3"],
    intro: "Rapid attendance for apartments and commercial units along Finchley Road.",
    landmarks: ["Swiss Cottage Station", "O2 Centre"],
    heroCopy: "Dependable maintenance for Swiss Cottage apartments.",
    image: "https://images.unsplash.com/photo-1596367407072-f68e8c2d9249?auto=format&fit=crop&q=80&w=800"
  }
];

export const areaMap = Object.fromEntries(areas.map((area) => [area.slug, area]));
