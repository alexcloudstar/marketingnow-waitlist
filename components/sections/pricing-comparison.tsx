"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { FadeIn } from "@/components/motion/fade-in";
import { CountUp } from "@/components/motion/count-up";
import { competitorTools, totalCompetitorCost } from "@/lib/data";
import { X, Check } from "lucide-react";

export function PricingComparison() {
  return (
    <SectionWrapper id="comparison">
      <FadeIn>
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-cyan">
            Compare
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Do the Math.{" "}
            <span className="text-gradient">We Did.</span>
          </h2>
        </div>
      </FadeIn>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {/* Old Way */}
        <FadeIn direction="left" delay={0.1}>
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-red-400">
              The Old Way
            </p>
            <div className="mt-4 space-y-3">
              {competitorTools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center justify-between rounded-lg border border-white/5 bg-surface-0/50 px-4 py-2.5"
                >
                  <div className="flex items-center gap-2">
                    <X className="size-3.5 text-red-400" />
                    <span className="text-sm">{tool.name}</span>
                  </div>
                  <span className="font-mono text-sm text-red-400">
                    ${tool.price}/mo
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-red-500/20 pt-4">
              <span className="font-semibold">Total</span>
              <span className="font-mono text-2xl font-bold text-red-400">
                $<CountUp value={totalCompetitorCost} />/mo
              </span>
            </div>
          </div>
        </FadeIn>

        {/* MarketingNow */}
        <FadeIn direction="right" delay={0.2}>
          <div className="rounded-xl border border-brand-teal/20 bg-brand-teal/5 p-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-teal">
              The MarketingNow Way
            </p>
            <div className="mt-4 space-y-3">
              {[
                "All 15 AI features in one place",
                "No juggling between tools",
                "Everything talks to each other",
                "One login, one dashboard",
                "Built for startups & founders",
                "Fraction of the cost",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-lg border border-white/5 bg-surface-0/50 px-4 py-2.5"
                >
                  <Check className="size-3.5 text-brand-teal" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-brand-teal/20 pt-4">
              <span className="font-semibold">Total</span>
              <span className="font-mono text-xl font-bold text-brand-teal">
                One simple plan
              </span>
            </div>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.4}>
        <div className="mt-8 text-center">
          <p className="text-lg font-semibold">
            Stop overpaying for tools that don&apos;t talk to each other.
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Pricing details coming soon. Join the waitlist to lock in early-bird rates.
          </p>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
