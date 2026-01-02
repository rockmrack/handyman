import { pricingCategories } from "@/data/pricing";

export function PricingTable() {
  return (
    <section className="space-y-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">Pricing</p>
        <h2 className="text-2xl font-semibold text-slate-900">Transparent, North London-aligned pricing</h2>
        <p className="text-sm text-slate-700">
          Prices shown as ranges and “from” rates to reflect typical North London work. Parking and materials are recharged at cost.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {pricingCategories.map((category) => (
          <div key={category.slug} className="card-surface flex h-full flex-col gap-3 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-slate-900">{category.title}</h3>
              <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">From</span>
            </div>
            <div className="space-y-3">
              {category.items.map((item) => (
                <div key={item.name} className="rounded-xl border border-slate-200 bg-white p-4 shadow-subtle">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{item.name}</div>
                      <div className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.unit}</div>
                    </div>
                    <div className="text-right text-lg font-semibold text-slate-900">{item.price}</div>
                  </div>
                  <p className="mt-2 text-sm text-slate-700">{item.description}</p>
                  <ul className="mt-2 space-y-1 text-xs text-slate-600">
                    <li>VAT included: {item.vatIncluded ? "yes" : "no"}</li>
                    {item.minimum && <li>Minimum: {item.minimum}</li>}
                    {item.emergencyUplift && <li>Emergency uplift: {item.emergencyUplift}</li>}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
