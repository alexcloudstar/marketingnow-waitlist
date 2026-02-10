"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { FadeIn } from "@/components/motion/fade-in";
import { competitorTools, totalCompetitorCost } from "@/lib/data";
import { Check, X } from "lucide-react";

const marketingNowBenefits = [
  "All 6 tools unified in one AI platform",
  "Built specifically for startups & founders",
  "AI-powered — 10x faster than doing it manually",
  "One subscription, one dashboard, zero friction",
];

export function ValueProp() {
  return (
    <SectionWrapper id="pricing" className="noise">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,oklch(0.55_0.27_300_/_0.04),transparent)]" />

      <FadeIn>
        <div className="text-center">
          <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand-amber">
            Why Switch
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            One Platform.{" "}
            <span className="text-gradient">Zero Bloat.</span>
          </h2>
        </div>
      </FadeIn>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {/* The Old Way */}
        <FadeIn direction="left" delay={0.1}>
          <div className="rounded-2xl border border-red-500/10 bg-red-500/[0.03] p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-red-500/10">
                <X className="size-5 text-red-400" />
              </div>
              <h3 className="font-display text-lg font-bold text-red-400">
                The Old Way
              </h3>
            </div>
            <ul className="space-y-3">
              {competitorTools.map((tool) => (
                <li
                  key={tool.name}
                  className="flex items-center justify-between rounded-xl border border-white/[0.04] bg-white/[0.02] px-4 py-3"
                >
                  <div>
                    <span className="text-sm font-medium text-foreground">
                      {tool.name}
                    </span>
                    <span className="ml-2 text-xs text-muted-foreground">
                      {tool.category}
                    </span>
                  </div>
                  <span className="font-mono text-sm font-bold text-red-400">
                    ${tool.price}/mo
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center justify-between border-t border-red-500/10 pt-4">
              <span className="text-sm font-medium text-muted-foreground">
                Total monthly cost
              </span>
              <span className="font-mono text-xl font-bold text-red-400">
                ${totalCompetitorCost}/mo
              </span>
            </div>
          </div>
        </FadeIn>

        {/* The MarketingNow Way */}
        <FadeIn direction="right" delay={0.2}>
          <div className="rounded-2xl border border-brand-amber/15 bg-brand-amber/[0.03] p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-brand-amber/10">
                <Check className="size-5 text-brand-amber" />
              </div>
              <h3 className="font-display text-lg font-bold text-brand-amber">
                The MarketingNow Way
              </h3>
            </div>
            <ul className="space-y-4">
              {marketingNowBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-amber/15">
                    <Check className="size-3 text-brand-amber" />
                  </div>
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl border border-brand-violet/20 bg-brand-violet/[0.06] px-5 py-4 text-center">
              <p className="text-sm text-muted-foreground">
                Early access pricing
              </p>
              <p className="mt-1 font-display text-2xl font-extrabold text-foreground">
                Starting at{" "}
                <span className="text-gradient">$49/mo</span>
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Savings pill */}
      <FadeIn delay={0.4}>
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-amber/20 bg-brand-amber/[0.06] px-6 py-3 text-sm">
            <span className="font-mono font-bold text-brand-amber">
              Save ${totalCompetitorCost - 49}/mo
            </span>
            <span className="text-muted-foreground">
              compared to buying separately
            </span>
          </div>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
