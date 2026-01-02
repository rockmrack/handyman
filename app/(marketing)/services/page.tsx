import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">Services</p>
        <h1 className="text-3xl font-semibold text-slate-900">Handyman and maintenance services</h1>
        <p className="text-sm text-slate-700">In-house teams for small works, refurb support, and emergency call-outs. Transparent pricing and fast communication for NW3/NW6 clients.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <div key={service.slug} className="card-surface flex h-full flex-col gap-3 p-6">
            <div className="relative h-48 w-full overflow-hidden rounded-xl mb-2">
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
                <h2 className="text-xl font-semibold text-slate-900">{service.title}</h2>
              </div>
              {service.emergency && <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-slate-900">24/7</span>}
            </div>
            <p className="text-sm text-slate-700">{service.summary}</p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
              {service.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-auto flex flex-wrap gap-2 text-sm font-semibold">
              <Link href={`/services/${service.slug}`} className="rounded-full bg-slate-900 px-4 py-2 text-white">
                {service.cta}
              </Link>
              <Link href="/pricing" className="rounded-full border border-slate-200 px-4 py-2 text-slate-900">
                Pricing
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
