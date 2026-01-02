import { faqs } from "@/data/faqs";

export function FaqAccordion() {
  return (
    <section className="space-y-3">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">FAQs</p>
        <h2 className="text-2xl font-semibold text-slate-900">Clarity before we visit</h2>
      </div>
      <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-subtle">
        {faqs.map((faq) => (
          <details key={faq.question} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-4 text-sm font-semibold text-slate-900">
              <span>{faq.question}</span>
              <span className="text-slate-500 transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="px-4 pb-4 text-sm text-slate-700">{faq.answer}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
