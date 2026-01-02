import Link from "next/link";
import { notFound } from "next/navigation";
import { areas, areaMap } from "@/data/areas";
import { services } from "@/data/services";
import { QuoteForm } from "@/components/sections/quote-form";

interface AreaPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export default function AreaPage({ params }: AreaPageProps) {
  const area = areaMap[params.slug];
  if (!area) {
    return notFound();
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">{area.postcodePrefixes.join(", ")}</p>
        <h1 className="text-3xl font-semibold text-slate-900">{area.name}</h1>
        <p className="text-sm text-slate-700">{area.intro}</p>
        <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-600">
          {area.landmarks.map((landmark) => (
            <span key={landmark} className="rounded-full bg-slate-50 px-3 py-1 ring-1 ring-slate-200/80">
              {landmark}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4">
          <div className="card-surface border-grid space-y-3 p-6">
            <h2 className="text-xl font-semibold text-slate-900">Priority response</h2>
            <p className="text-sm text-slate-700">Same-day handyman, locksmith, plumbing, and electrical teams local to {area.name}. Emergency ETA: 30–60 minutes where traffic allows.</p>
            <div className="flex flex-wrap gap-2 text-sm font-semibold">
              <a href="tel:+442071234567" className="rounded-full bg-slate-900 px-4 py-2 text-white">
                Call 020 7123 4567
              </a>
              <Link href="/pricing" className="rounded-full border border-slate-200 px-4 py-2 text-slate-900">
                Pricing
              </Link>
            </div>
          </div>
          <div className="card-surface space-y-3 p-6">
            <h3 className="text-lg font-semibold text-slate-900">Popular services here</h3>
            <div className="grid gap-2 md:grid-cols-2">
              {services.slice(0, 4).map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-subtle hover:border-slate-300"
                >
                  <div className="text-sm font-semibold text-slate-900">{service.title}</div>
                  <div className="text-xs text-slate-600">{service.categories.join(" • ")}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="card-surface border-grid p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">Book</p>
            <h3 className="text-xl font-semibold text-slate-900">Request a visit in {area.name}</h3>
            <p className="text-sm text-slate-700">Tell us the issue, add photos, and we will call back with the earliest window.</p>
            <div className="mt-4">
              <QuoteForm variant="compact" />
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-subtle">
            <h4 className="text-sm font-semibold text-slate-900">Need emergency help?</h4>
            <p className="text-sm text-slate-700">Locksmith and leak response are 24/7. Night uplifts apply; shown on the pricing page.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
