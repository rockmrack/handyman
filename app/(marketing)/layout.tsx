import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { StickyCtaBar } from "@/components/layout/sticky-cta";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-brand-sand min-h-screen">
      <Header />
      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 md:py-14">{children}</main>
      <Footer />
      <StickyCtaBar />
    </div>
  );
}
