"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { FadeIn } from "@/components/motion/fade-in";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/stagger-container";
import { SpotlightCard } from "@/components/motion/spotlight-card";
import { featuredFeatures, additionalFeatureCount } from "@/lib/data";

export function FeaturesGrid() {
  return (
    <SectionWrapper id="features" className="noise">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_30%_50%,oklch(0.55_0.27_300_/_0.03),transparent)]" />

      <FadeIn>
        <div className="text-center">
          <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand-amber">
            Features
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Everything You Need.{" "}
            <span className="text-gradient">Nothing You Don&apos;t.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            AI-powered tools built for founders who need to move fast
            and ship marketing that works.
          </p>
        </div>
      </FadeIn>

      <StaggerContainer
        className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        stagger={0.06}
      >
        {featuredFeatures.map((f) => (
          <StaggerItem key={f.name}>
            <SpotlightCard className="h-full">
              <div className="p-6">
                <div className="flex size-11 items-center justify-center rounded-xl bg-brand-violet/10">
                  <f.icon className="size-5 text-brand-violet" />
                </div>
                <h3 className="mt-4 font-display font-bold">{f.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.description}
                </p>
              </div>
            </SpotlightCard>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeIn delay={0.5}>
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-violet/15 bg-brand-violet/[0.04] px-5 py-2 text-sm">
            <span className="font-mono font-bold text-brand-violet">
              +{additionalFeatureCount}
            </span>
            <span className="text-muted-foreground">
              more features coming at launch
            </span>
          </div>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
