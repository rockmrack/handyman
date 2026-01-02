import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";

export function ServiceGrid({ showCtas = true }: { showCtas?: boolean }) {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Services</p>
          <h2 className="text-2xl font-semibold text-slate-900">In-house teams for North London homes</h2>
        </div>
        <Link
          href="/services"
          className="hidden text-sm font-semibold text-slate-900 underline-offset-4 hover:underline md:inline"
        >
          View all services
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <div key={service.slug} className="card-surface flex h-full flex-col gap-3 p-6">
            <div className="relative h-48 w-full overflow-hidden rounded-xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">{service.categories.join(" • ")}</p>
                <h3 className="mt-1 text-xl font-semibold text-slate-900">{service.title}</h3>
              </div>
              {service.emergency && (
                <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-slate-900">24/7</span>
              )}
            </div>
            <p className="text-sm text-slate-700">{service.summary}</p>
            <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-600">
              {service.highlights.map((item) => (
                <span key={item} className="rounded-full bg-slate-50 px-3 py-1 ring-1 ring-slate-200/80">
                  {item}
                </span>
              ))}
            </div>
            {showCtas && (
              <div className="mt-auto flex flex-wrap gap-2 text-sm font-semibold">
                <Link
                  href={`/services/${service.slug}`}
                  className="rounded-full bg-slate-900 px-4 py-2 text-white hover:bg-slate-800"
                >
                  {service.cta}
                </Link>
                <Link
                  href="/pricing"
                  className="rounded-full border border-slate-200 px-4 py-2 text-slate-900 hover:border-slate-300"
                >
                  View pricing
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
