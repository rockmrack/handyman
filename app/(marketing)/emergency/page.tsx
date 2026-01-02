import Link from "next/link";
import { QuoteForm } from "@/components/sections/quote-form";

export default function EmergencyPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">Emergency</p>
        <h1 className="text-3xl font-semibold text-slate-900">24/7 emergency locksmith, leaks, and power issues</h1>
        <p className="text-sm text-slate-700">30–60 minute ETA for Hampstead, Belsize Park, West Hampstead, Highgate, Swiss Cottage. Transparent emergency uplifts and call-out rules.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4">
          <div className="card-surface border-grid space-y-3 p-6">
            <h2 className="text-xl font-semibold text-slate-900">Emergency call flow</h2>
            <ol className="list-decimal space-y-2 pl-5 text-sm text-slate-700">
              <li>Call 020 7123 4567 — speak directly with the coordinator.</li>
              <li>We confirm address, access, and lock/type of issue; share ETA.</li>
              <li>Engineer arrives with ID, provides upfront call-out and uplift rate.</li>
              <li>After completion, you receive photos and a brief report by email.</li>
            </ol>
            <div className="flex flex-wrap gap-2 text-sm font-semibold">
              <a href="tel:+442071234567" className="rounded-full bg-amber-400 px-4 py-2 text-slate-900">
                Call now
              </a>
              <Link href="/pricing" className="rounded-full border border-slate-200 px-4 py-2 text-slate-900">
                Emergency rates
              </Link>
            </div>
          </div>
          <div className="card-surface space-y-2 p-6">
            <h3 className="text-lg font-semibold text-slate-900">What we cover</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
              <li>Lock-outs and gain entry (non-destructive where possible)</li>
              <li>Lock changes to BS3621 and 3-star cylinders</li>
              <li>Leak isolation and make-safe works</li>
              <li>Partial power faults and RCD tripping diagnosis</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <div className="card-surface border-grid p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">Callback request</p>
            <h3 className="text-xl font-semibold text-slate-900">Request an emergency callback</h3>
            <p className="text-sm text-slate-700">Share the issue, postcode, and best number. We prioritise emergencies above all other requests.</p>
            <div className="mt-4">
              <QuoteForm variant="compact" />
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-subtle">
            <h4 className="text-sm font-semibold text-slate-900">Night work</h4>
            <p className="text-sm text-slate-700">Night uplifts apply (typically +50% to +100%). Call for an exact quote before dispatch.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
