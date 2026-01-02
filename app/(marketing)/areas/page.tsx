import Link from "next/link";
import { areas } from "@/data/areas";

export default function AreasPage() {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">Areas</p>
        <h1 className="text-3xl font-semibold text-slate-900">North London coverage</h1>
        <p className="text-sm text-slate-700">Rapid attendance for NW3, NW6, NW8, NW11, N6, and neighbouring postcodes. Transparent parking and congestion recharges.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {areas.map((area) => (
          <div key={area.slug} className="card-surface space-y-3 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">{area.postcodePrefixes.join(", ")}</p>
                <h2 className="text-xl font-semibold text-slate-900">{area.name}</h2>
              </div>
              <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-slate-900">Priority</span>
            </div>
            <p className="text-sm text-slate-700">{area.intro}</p>
            <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-600">
              {area.landmarks.map((landmark) => (
                <span key={landmark} className="rounded-full bg-slate-50 px-3 py-1 ring-1 ring-slate-200/80">
                  {landmark}
                </span>
              ))}
            </div>
            <Link href={`/areas/${area.slug}`} className="inline-flex text-sm font-semibold text-slate-900 underline-offset-4 hover:underline">
              View area page
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
