export type Review = {
  name: string;
  role: string;
  quote: string;
  rating: number;
  area: string;
};

export const reviews: Review[] = [
  {
    name: "Rachel, Hampstead",
    role: "Homeowner",
    quote: "They protected every surface, solved a leak the same evening, and followed up with a clear report for insurance.",
    rating: 5,
    area: "NW3"
  },
  {
    name: "Alex, Property Manager",
    role: "Block Management",
    quote: "The team handles resident call-outs, keeps costs transparent, and delivers photos after each visit.",
    rating: 5,
    area: "NW6"
  },
  {
    name: "Priya, Landlord",
    role: "Portfolio Landlord",
    quote: "Reliable for small fixes and larger refresh projects—communication is fast and tidy.",
    rating: 5,
    area: "NW8"
  }
];
