export type PriceItem = {
  name: string;
  description: string;
  unit: "hour" | "half-day" | "day" | "call-out" | "from";
  price: string;
  vatIncluded: boolean;
  minimum?: string;
  emergencyUplift?: string;
};

export type PricingCategory = {
  slug: string;
  title: string;
  items: PriceItem[];
};

export const pricingCategories: PricingCategory[] = [
  {
    slug: "handyman",
    title: "Handyman",
    items: [
      {
        name: "Standard hourly rate",
        description: "Ideal for small repairs, fittings, and punch lists.",
        unit: "hour",
        price: "£75–£95",
        vatIncluded: false,
        minimum: "1 hour minimum, then billed every 15 minutes",
        emergencyUplift: "+25% out of hours"
      },
      {
        name: "Half-day (up to 4h)",
        description: "Good for grouped tasks in one visit.",
        unit: "half-day",
        price: "£320–£360",
        vatIncluded: false,
        minimum: "Includes travel and setup",
        emergencyUplift: "+25% out of hours"
      },
      {
        name: "Full day (up to 8h)",
        description: "For planned maintenance and decorating prep.",
        unit: "day",
        price: "£600–£720",
        vatIncluded: false,
        minimum: "One operative",
        emergencyUplift: "+25% out of hours"
      }
    ]
  },
  {
    slug: "locksmith",
    title: "Locksmith",
    items: [
      {
        name: "Emergency call-out (day)",
        description: "Gain entry, non-destructive where possible.",
        unit: "call-out",
        price: "from £120",
        vatIncluded: false,
        minimum: "Includes first 30 minutes on site",
        emergencyUplift: "+50% night and bank holidays"
      },
      {
        name: "Lock replacement",
        description: "BS3621 and 3-star cylinders carried on vans; parts extra.",
        unit: "from",
        price: "from £95 + parts",
        vatIncluded: false,
        minimum: "Pricing varies by lock type"
      }
    ]
  },
  {
    slug: "plumbing",
    title: "Plumbing",
    items: [
      {
        name: "Leak response",
        description: "Trace and stop leaks, isolate, and make safe.",
        unit: "hour",
        price: "£85–£110",
        vatIncluded: false,
        minimum: "1 hour minimum",
        emergencyUplift: "+35% out of hours"
      },
      {
        name: "Radiator works",
        description: "Valve swaps, balancing, and bleeding.",
        unit: "hour",
        price: "£85–£110",
        vatIncluded: false,
        minimum: "1 hour minimum",
        emergencyUplift: "+35% out of hours"
      }
    ]
  },
  {
    slug: "electrical",
    title: "Electrical",
    items: [
      {
        name: "Minor works",
        description: "Fault finding, socket and lighting replacements.",
        unit: "hour",
        price: "£90–£115",
        vatIncluded: false,
        minimum: "1 hour minimum",
        emergencyUplift: "+35% out of hours"
      },
      {
        name: "Consumer unit check",
        description: "Visual inspection and report; not a full EICR.",
        unit: "from",
        price: "from £165",
        vatIncluded: false,
        minimum: "Pre-booked slots only"
      }
    ]
  }
];
