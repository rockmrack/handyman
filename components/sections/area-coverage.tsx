import Link from "next/link";
import { areas } from "@/data/areas";

export function AreaCoverage() {
  return (
    <section className="card-surface border-grid space-y-4 p-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">Areas</p>
          <h2 className="text-xl font-semibold text-slate-900">North London coverage with a Hampstead base</h2>
          <p className="text-sm text-slate-700">Fast attendance to NW3, NW6, NW8, NW11, and N6 with transparent travel and parking policies.</p>
        </div>
        <Link href="/areas" className="hidden text-sm font-semibold text-slate-900 underline-offset-4 hover:underline md:inline">
          Explore areas
        </Link>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {areas.map((area) => (
          <div key={area.slug} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-subtle">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">{area.postcodePrefixes.join(", ")}</p>
                <h3 className="text-lg font-semibold text-slate-900">{area.name}</h3>
              </div>
              <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-slate-900">Priority</span>
            </div>
            <p className="mt-2 text-sm text-slate-700">{area.intro}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium text-slate-600">
              {area.landmarks.map((landmark) => (
                <span key={landmark} className="rounded-full bg-slate-50 px-3 py-1 ring-1 ring-slate-200/80">
                  {landmark}
                </span>
              ))}
            </div>
            <Link
              href={`/areas/${area.slug}`}
              className="mt-4 inline-flex text-sm font-semibold text-slate-900 underline-offset-4 hover:underline"
            >
              View area details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
