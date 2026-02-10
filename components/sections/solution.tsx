"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { Sparkles, Zap, PiggyBank } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "AI-Powered",
    description: "Every feature is supercharged with AI that learns your brand voice and style.",
  },
  {
    icon: Zap,
    title: "10x Faster",
    description: "What used to take hours now takes minutes. Ship marketing at startup speed.",
  },
  {
    icon: PiggyBank,
    title: "Way Cheaper",
    description: "One platform replaces six separate tools. Save big every month.",
  },
];

export function Solution() {
  return (
    <SectionWrapper id="solution" className="overflow-hidden">
      <FadeIn>
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-cyan">
            The Solution
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Meet Your AI{" "}
            <span className="text-gradient">Marketing Co-Founder</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            One unified platform. All your marketing tools. Powered by AI that
            actually understands your business.
          </p>
        </div>
      </FadeIn>

      {/* Dashboard mockup */}
      <FadeIn delay={0.2}>
        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="rounded-xl border border-white/10 bg-surface-1 p-1 shadow-2xl shadow-brand-indigo/10">
            <div className="flex items-center gap-1.5 px-3 py-2">
              <div className="size-2.5 rounded-full bg-red-500/60" />
              <div className="size-2.5 rounded-full bg-yellow-500/60" />
              <div className="size-2.5 rounded-full bg-green-500/60" />
              <span className="ml-2 text-xs text-muted-foreground">
                MarketingNow Dashboard
              </span>
            </div>
            <div className="rounded-lg bg-surface-0 p-6">
              <div className="grid grid-cols-3 gap-3">
                {["Pitch Decks", "Landing Pages", "Social Media"].map(
                  (label) => (
                    <div
                      key={label}
                      className="rounded-lg border border-white/5 bg-surface-2 p-4"
                    >
                      <div className="mb-2 h-2 w-16 rounded bg-brand-indigo/40" />
                      <p className="text-xs text-muted-foreground">{label}</p>
                      <p className="mt-1 font-mono text-lg font-bold text-brand-cyan">
                        Active
                      </p>
                    </div>
                  )
                )}
              </div>
              <div className="mt-3 flex items-center justify-between rounded-lg border border-brand-teal/20 bg-brand-teal/5 px-4 py-3">
                <span className="text-sm text-muted-foreground">Status</span>
                <span className="font-mono text-lg font-bold text-brand-teal">
                  All-in-One Platform
                </span>
              </div>
            </div>
          </div>
          <div className="absolute -inset-px -z-10 rounded-xl bg-gradient-to-b from-brand-indigo/20 to-transparent blur-xl" />
        </div>
      </FadeIn>

      {/* Benefits */}
      <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-3" stagger={0.1}>
        {benefits.map((b) => (
          <StaggerItem key={b.title}>
            <div className="text-center">
              <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-brand-indigo/10">
                <b.icon className="size-6 text-brand-cyan" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {b.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
