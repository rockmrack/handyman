import Link from "next/link";
import { notFound } from "next/navigation";
import { services, serviceMap } from "@/data/services";
import { pricingCategories } from "@/data/pricing";
import { QuoteForm } from "@/components/sections/quote-form";

interface ServicePageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = serviceMap[params.slug];
  if (!service) {
    return notFound();
  }

  const pricing = pricingCategories.find((cat) => cat.slug === service.slug);

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">{service.categories.join(" • ")}</p>
        <h1 className="text-3xl font-semibold text-slate-900">{service.title}</h1>
        <p className="text-sm text-slate-700">{service.summary}</p>
        <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-600">
          {service.highlights.map((highlight) => (
            <span key={highlight} className="rounded-full bg-slate-50 px-3 py-1 ring-1 ring-slate-200/80">
              {highlight}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4">
          <div className="card-surface border-grid space-y-3 p-6">
            <h2 className="text-xl font-semibold text-slate-900">What we handle</h2>
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
              <li>Emergency attendance for NW3/NW6 priority postcodes</li>
              <li>Photos and short report after each visit</li>
              <li>Materials at cost with receipts attached</li>
              <li>Respect for listed and period properties</li>
            </ul>
            <div className="flex flex-wrap gap-2 text-sm font-semibold">
              <Link href="/pricing" className="rounded-full bg-slate-900 px-4 py-2 text-white">
                View pricing
              </Link>
              <Link href="/areas" className="rounded-full border border-slate-200 px-4 py-2 text-slate-900">
                Areas we cover
              </Link>
            </div>
          </div>

          {pricing && (
            <div className="card-surface space-y-3 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Popular prices</h3>
              <div className="space-y-3">
                {pricing.items.map((item) => (
                  <div key={item.name} className="rounded-xl border border-slate-200 bg-white p-4 shadow-subtle">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold text-slate-900">{item.name}</div>
                        <div className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.unit}</div>
                      </div>
                      <div className="text-lg font-semibold text-slate-900">{item.price}</div>
                    </div>
                    <p className="mt-2 text-sm text-slate-700">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="card-surface border-grid p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">Book</p>
            <h3 className="text-xl font-semibold text-slate-900">{service.cta}</h3>
            <p className="text-sm text-slate-700">Share the job details and postcode for fastest scheduling. NW3/NW6 enquiries are prioritised.</p>
            <div className="mt-4">
              <QuoteForm variant="compact" />
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-subtle">
            <h4 className="text-sm font-semibold text-slate-900">Emergency?</h4>
            <p className="text-sm text-slate-700">Call 020 7123 4567. 30–60 minute ETA for Hampstead, Belsize Park, West Hampstead, Highgate.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
