export type Review = {
  name: string;
  role: string;
  quote: string;
  rating: number;
  area: string;
  avatar: string;
};

export const reviews: Review[] = [
  {
    name: "Rachel, Hampstead",
    role: "Homeowner",
    quote: "They protected every surface, solved a leak the same evening, and followed up with a clear report for insurance.",
    rating: 5,
    area: "NW3",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Alex, Property Manager",
    role: "Block Management",
    quote: "The team handles resident call-outs, keeps costs transparent, and delivers photos after each visit.",
    rating: 5,
    area: "NW6",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    name: "Priya, Landlord",
    role: "Portfolio Landlord",
    quote: "Reliable for small fixes and larger refresh projects—communication is fast and tidy.",
    rating: 5,
    area: "NW8",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
  }
];
