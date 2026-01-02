import Link from "next/link";

export function StickyCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-900 text-white shadow-[0_-4px_24px_rgba(0,0,0,0.2)] md:hidden">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-sm font-semibold">
        <a href="tel:+442071234567" className="rounded-full bg-white px-4 py-2 text-slate-900">
          Call now
        </a>
        <a href="https://wa.me/442071234567" className="rounded-full border border-white/40 px-4 py-2">
          WhatsApp
        </a>
        <Link href="/contact" className="rounded-full bg-amber-400 px-4 py-2 text-slate-900">
          Get quote
        </Link>
      </div>
    </div>
  );
}
