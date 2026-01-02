export type Service = {
  slug: string;
  title: string;
  summary: string;
  categories: string[];
  highlights: string[];
  cta: string;
  emergency?: boolean;
  areaFocus?: string[];
};

export const services: Service[] = [
  {
    slug: "handyman",
    title: "Handyman Services",
    summary:
      "Same-day repairs, fittings, and installations by in-house Hampstead maintenance teams—no subcontractors.",
    categories: ["Repairs", "Installations", "Mounting", "Finishing"],
    highlights: ["DBS-vetted team", "1h minimum then 15-min billing", "Materials at cost + receipt"],
    cta: "Book a trusted handyman",
    emergency: false,
    areaFocus: ["NW3", "NW6", "NW8"]
  },
  {
    slug: "locksmith",
    title: "Emergency Locksmith",
    summary:
      "24/7 gain entry, lock repair, and replacement. British Standard locks carried on vans.",
    categories: ["Emergency entry", "Lock replacement", "Boarding"],
    highlights: ["30–60 minute ETA", "Transparent call-out", "Insurance-compliant parts"],
    cta: "Call an emergency locksmith",
    emergency: true,
    areaFocus: ["NW3", "NW6", "NW11"]
  },
  {
    slug: "plumbing",
    title: "Plumbing",
    summary:
      "Leak fixes, radiator work, unblocking, and sanitary ware repairs by experienced plumbers.",
    categories: ["Leaks", "Radiators", "Appliance hook-up", "Bathrooms"],
    highlights: ["Same-day leak response", "Gas Safe partners for boiler work", "Clean, careful work"],
    cta: "Book a plumber",
    emergency: true,
    areaFocus: ["NW3", "N6", "NW2"]
  },
  {
    slug: "electrical",
    title: "Electrical",
    summary:
      "Small power issues, lighting upgrades, consumer unit checks, and fault finding.",
    categories: ["Lighting", "Power", "Testing"],
    highlights: ["NICEIC-supervised partners", "Minor works certificates", "Safe fault finding"],
    cta: "Book an electrician",
    emergency: true,
    areaFocus: ["NW3", "NW11", "N2"]
  },
  {
    slug: "painting-decorating",
    title: "Painting & Decorating",
    summary: "Finish-quality decorating for homes and managed properties across North London.",
    categories: ["Walls", "Woodwork", "Feature walls"],
    highlights: ["Dust control & protection", "Premium paints specified", "Colour matching"],
    cta: "Plan a decorating visit",
    emergency: false,
    areaFocus: ["NW3", "NW8"]
  },
  {
    slug: "carpentry-joinery",
    title: "Carpentry & Joinery",
    summary: "Door easing, bespoke shelving, boxing-in, and snag fixes by careful carpenters.",
    categories: ["Doors", "Storage", "Repairs"],
    highlights: ["Scribed finishes", "Solid fixings", "Respect for listed homes"],
    cta: "Speak with a carpenter",
    emergency: false,
    areaFocus: ["NW3", "NW6"]
  },
  {
    slug: "property-maintenance",
    title: "Ongoing Property Maintenance",
    summary: "Retainer-based maintenance for landlords, agents, and estate portfolios across NW London.",
    categories: ["Planned visits", "Seasonal checks", "Rapid call-outs"],
    highlights: ["Dedicated account manager", "Monthly reporting", "Compliance reminders"],
    cta: "Arrange a maintenance plan",
    emergency: false,
    areaFocus: ["NW3", "NW6", "NW11"]
  }
];

export const serviceMap = Object.fromEntries(services.map((svc) => [svc.slug, svc]));
