import { QuoteForm } from "@/components/sections/quote-form";

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">Contact</p>
        <h1 className="text-3xl font-semibold text-slate-900">Book a visit or request a quote</h1>
        <p className="text-sm text-slate-700">Call, WhatsApp, or use the form. Same-day slots for Hampstead, Belsize Park, West Hampstead, Highgate, Swiss Cottage.</p>
        <div className="text-sm font-semibold text-slate-900">Call 020 7123 4567 • WhatsApp 020 7123 4567 • hello@hampsteadmaintenance.co.uk</div>
      </div>
      <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
        <div className="card-surface border-grid p-6">
          <h2 className="text-xl font-semibold text-slate-900">Send your request</h2>
          <p className="text-sm text-slate-700">Add photos where possible. We respond fastest to NW3/NW6/NW8/NW11/N6 postcodes.</p>
          <div className="mt-4">
            <QuoteForm />
          </div>
        </div>
        <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-subtle">
          <h3 className="text-lg font-semibold text-slate-900">Office & hours</h3>
          <p className="text-sm text-slate-700">250 Finchley Road, NW3 6DN. Weekdays 8am–6pm. Emergency lines 24/7 for locksmith and leaks.</p>
          <h4 className="text-sm font-semibold text-slate-900">Emergency response</h4>
          <p className="text-sm text-slate-700">Call 020 7123 4567. Night uplifts apply; confirm before dispatch.</p>
        </div>
      </div>
    </div>
  );
}
