export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "Do you cover emergency call-outs?",
    answer: "Yes. Locksmith, electrical, and leak response are available 24/7. Out-of-hours uplifts apply and are shown on the pricing page."
  },
  {
    question: "Do you use subcontractors?",
    answer: "The core handyman and decorating teams are in-house. Specialist gas and electrical work is delivered with accredited partners under Hampstead Maintenance supervision."
  },
  {
    question: "How do you charge for parking and congestion?",
    answer: "Where visitor permits or pay-by-phone bays are required, parking is recharged at cost. Congestion charge applies when applicable."
  },
  {
    question: "Can I send photos for a quote?",
    answer: "Yes. Use the quote form to upload images so we can confirm scope and provide a clearer estimate before attending."
  }
];
