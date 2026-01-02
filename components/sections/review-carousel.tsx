import { reviews } from "@/data/reviews";

export function ReviewCarousel() {
  return (
    <section className="card-surface border-grid space-y-4 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">Reviews</p>
          <h2 className="text-xl font-semibold text-slate-900">North London clients, same-day wins</h2>
          <p className="text-sm text-slate-700">Real feedback from homeowners, landlords, and property managers.</p>
        </div>
        <div className="hidden rounded-full bg-amber-400 px-4 py-2 text-xs font-semibold text-slate-900 md:inline">Rated 5.0</div>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {reviews.map((review) => (
          <div key={review.name} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-subtle">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-slate-900">{review.name}</div>
                <div className="text-xs text-slate-600">{review.role} • {review.area}</div>
              </div>
              <div className="text-amber-500" aria-label={`${review.rating} star rating`}>
                {"★".repeat(review.rating)}
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-700">{review.quote}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
