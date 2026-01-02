import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hampstead Maintenance | North London Handyman & Property Maintenance",
  description:
    "Premium handyman, locksmith, plumbing, electrical, and property maintenance across Hampstead, Belsize Park, West Hampstead, Highgate, and wider North London.",
  metadataBase: new URL("https://hampstead-maintenance.example"),
  openGraph: {
    title: "Hampstead Maintenance",
    description:
      "Same-day property maintenance and handyman services across Hampstead and North London.",
    url: "https://hampstead-maintenance.example",
    siteName: "Hampstead Maintenance",
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Hampstead Maintenance",
    description: "Premium handyman and maintenance teams covering North London"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-slate-900">
        {children}
      </body>
    </html>
  );
}
