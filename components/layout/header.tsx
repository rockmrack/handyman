import Link from "next/link";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/emergency", label: "Emergency 24/7" },
  { href: "/pricing", label: "Pricing" },
  { href: "/areas", label: "Areas" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/80 border-b border-slate-200/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-slate-50 font-semibold">HM</span>
          <div className="leading-tight">
            <div>Hampstead Maintenance</div>
            <div className="text-xs text-slate-500">North London Handyman</div>
          </div>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+442071234567"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-subtle hover:bg-slate-800"
          >
            Call 020 7123 4567
          </a>
        </div>
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="tel:+442071234567"
            aria-label="Call Hampstead Maintenance"
            className="rounded-full bg-slate-900 px-3 py-2 text-sm font-semibold text-white shadow-subtle"
          >
            Call
          </a>
        </div>
      </div>
    </header>
  );
}
