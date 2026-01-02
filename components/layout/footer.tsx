import Link from "next/link";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/areas", label: "Areas" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 text-lg font-semibold text-slate-900">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-slate-50 font-semibold">HM</span>
            Hampstead Maintenance
          </div>
          <p className="mt-4 text-sm text-slate-600">250 Finchley Road, NW3 6DN</p>
          <p className="text-sm text-slate-600">Serving Hampstead, Belsize Park, West Hampstead, Highgate, and wider North London.</p>
          <div className="mt-4 text-sm text-slate-700">
            <a className="hover:underline" href="tel:+442071234567">020 7123 4567</a>
            <span className="mx-2">•</span>
            <a className="hover:underline" href="mailto:hello@hampsteadmaintenance.co.uk">hello@hampsteadmaintenance.co.uk</a>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Navigation</h3>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-700">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-slate-900">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-900">Credentials</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>Fully insured • Public liability on request</li>
            <li>DBS-vetted in-house teams</li>
            <li>Partner electricians NICEIC-supervised</li>
            <li>Partner gas engineers Gas Safe registered</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200/60 bg-slate-50/70 py-4 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} Hampstead Maintenance. All rights reserved.
      </div>
    </footer>
  );
}
