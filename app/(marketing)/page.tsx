import { AreaCoverage } from "@/components/sections/area-coverage";
import { FaqAccordion } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { PricingTable } from "@/components/sections/pricing-table";
import { QuoteForm } from "@/components/sections/quote-form";
import { ReviewCarousel } from "@/components/sections/review-carousel";
import { ServiceGrid } from "@/components/sections/service-grid";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <Hero
        eyebrow="North London Handyman"
        heading="Hampstead-based, in-house maintenance teams"
        subheading="Same-day handyman, locksmith, plumbing, electrical, and decorating across Hampstead, Belsize Park, West Hampstead, Highgate, Swiss Cottage, and nearby postcodes."
        primaryCta={{ label: "Book a visit", href: "/contact" }}
        secondaryCta={{ label: "View pricing", href: "/pricing" }}
      >
        <div className="space-y-4 text-sm text-slate-800">
          <div className="rounded-2xl bg-slate-900 p-4 text-white shadow-subtle">
            <div className="text-xs uppercase tracking-[0.2em] text-amber-200">Emergency</div>
            <div className="text-lg font-semibold">24/7 locksmith, leaks, and power faults</div>
            <p className="mt-2 text-sm text-slate-100">30–60 minute ETA in NW3, NW6, NW8, NW11, N6.</p>
            <a href="tel:+442071234567" className="mt-3 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900">
              Call 020 7123 4567
            </a>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-subtle">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">Lead funnel</div>
            <p className="text-sm text-slate-700">We prioritise calls and photo-backed quote requests. Expect rapid callbacks for NW3/NW6 emergencies.</p>
            <ul className="mt-2 space-y-1 text-xs text-slate-600">
              <li>• Transparent pricing ranges with minimum charges shown</li>
              <li>• DBS-vetted, insured, uniformed teams</li>
              <li>• Photo and report after each visit for landlords/agents</li>
            </ul>
          </div>
        </div>
      </Hero>

      <ServiceGrid />

      <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <PricingTable />
        <div className="space-y-4">
          <div className="card-surface border-grid p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">Fast quote</p>
            <h3 className="text-xl font-semibold text-slate-900">Send details for a fast estimate</h3>
            <p className="text-sm text-slate-700">Photo uploads recommended; we respond quicker for NW3/NW6/NW8/NW11/N6 postcodes.</p>
            <div className="mt-4">
              <QuoteForm />
            </div>
          </div>
          <AreaCoverage />
        </div>
      </div>

      <ReviewCarousel />
      <FaqAccordion />
    </div>
  );
}
