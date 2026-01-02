import { PricingTable } from "@/components/sections/pricing-table";
import { QuoteForm } from "@/components/sections/quote-form";

export default function PricingPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">Pricing</p>
        <h1 className="text-3xl font-semibold text-slate-900">Transparent North London pricing</h1>
        <p className="text-sm text-slate-700">From prices aligned with Hampstead, Belsize Park, West Hampstead, Swiss Cottage, Highgate, and NW London markets. Materials and parking recharged at cost.</p>
      </div>
      <PricingTable />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card-surface border-grid p-6">
          <h2 className="text-xl font-semibold text-slate-900">How we price</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>• Minimum charges shown; further time billed in 15-minute increments.</li>
            <li>• Emergency uplifts clearly stated; night and bank holidays attract higher uplifts.</li>
            <li>• VAT status shown for each line. Materials supplied at cost with receipts.</li>
            <li>• Parking, congestion, and ULEZ are recharged where applicable.</li>
          </ul>
        </div>
        <div className="card-surface border-grid p-6">
          <h2 className="text-xl font-semibold text-slate-900">Send details for a fixed estimate</h2>
          <p className="text-sm text-slate-700">Upload photos where possible. We respond fastest to NW3/NW6/NW8/NW11/N6 postcodes.</p>
          <div className="mt-4">
            <QuoteForm />
          </div>
        </div>
      </div>
    </div>
  );
}
