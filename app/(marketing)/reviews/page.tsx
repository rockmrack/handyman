import { reviews } from "@/data/reviews";

export default function ReviewsPage() {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">Reviews</p>
        <h1 className="text-3xl font-semibold text-slate-900">Clients across Hampstead and North London</h1>
        <p className="text-sm text-slate-700">Selected comments from homeowners, landlords, and property managers who rely on our in-house teams.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {reviews.map((review) => (
          <div key={review.name} className="card-surface space-y-2 p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-slate-900">{review.name}</div>
                <div className="text-xs text-slate-600">{review.role} • {review.area}</div>
              </div>
              <div className="text-amber-500" aria-label={`${review.rating} star rating`}>
                {"★".repeat(review.rating)}
              </div>
            </div>
            <p className="text-sm text-slate-700">{review.quote}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
