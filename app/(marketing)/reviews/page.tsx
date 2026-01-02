import Image from "next/image";
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
            <div className="flex items-center gap-3 mb-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-slate-900">{review.name}</div>
                  <div className="text-amber-500 text-xs" aria-label={`${review.rating} star rating`}>
                    {"★".repeat(review.rating)}
                  </div>
                </div>
                <div className="text-xs text-slate-600">{review.role} • {review.area}</div>
              </div>
            </div>
            <p className="text-sm text-slate-700">{review.quote}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
