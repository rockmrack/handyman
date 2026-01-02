import Link from "next/link";
import Image from "next/image";
import type { Route } from "next";
import { ReactNode } from "react";

interface HeroProps {
  eyebrow?: string;
  heading: string;
  subheading: string;
  primaryCta?: { label: string; href: Route };
  secondaryCta?: { label: string; href: Route };
  backgroundImage?: string;
  children?: ReactNode;
}

export function Hero({ eyebrow, heading, subheading, primaryCta, secondaryCta, backgroundImage, children }: HeroProps) {
  return (
    <section className="gradient-hero relative overflow-hidden rounded-3xl border border-slate-200/60 px-6 py-12 shadow-card md:px-10 md:py-16">
      {backgroundImage ? (
        <>
          <Image
            src={backgroundImage}
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px]" />
        </>
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(11,28,44,0.08),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(244,163,44,0.10),transparent_26%)]" aria-hidden />
      )}
      
      <div className="relative z-10 grid gap-8 md:grid-cols-2 md:items-center">
        <div className="space-y-5">
          {eyebrow && <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">{eyebrow}</div>}
          <h1 className="text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">{heading}</h1>
          <p className="text-lg text-slate-700 md:text-xl">{subheading}</p>
          <div className="flex flex-wrap gap-3">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-subtle hover:bg-slate-800"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="rounded-full border border-slate-900/10 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:border-slate-900/30"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-slate-600">
            <span className="rounded-full bg-white/80 px-3 py-1 shadow-subtle backdrop-blur-sm">Same-day slots</span>
            <span className="rounded-full bg-white/80 px-3 py-1 shadow-subtle backdrop-blur-sm">In-house teams</span>
            <span className="rounded-full bg-white/80 px-3 py-1 shadow-subtle backdrop-blur-sm">Fully insured</span>
          </div>
        </div>
        {children && <div className="card-surface border-grid relative overflow-hidden p-6 md:p-8 bg-white/80 backdrop-blur-sm">{children}</div>}
      </div>
    </section>
  );
}
