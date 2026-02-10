"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { features } from "@/lib/data";

export function FeaturesGrid() {
  return (
    <SectionWrapper id="features">
      <FadeIn>
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-cyan">
            Features
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            15 AI-Powered Features.{" "}
            <span className="text-gradient">One Platform.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Everything you need to market your startup, from pitch decks to
            social media to customer support.
          </p>
        </div>
      </FadeIn>

      <StaggerContainer className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
        {features.map((f) => (
          <StaggerItem key={f.name}>
            <div className="group relative rounded-xl border border-white/5 bg-surface-1 p-6 transition-all hover:-translate-y-1 hover:border-brand-indigo/20 hover:shadow-lg hover:shadow-brand-indigo/5">
              <div className="flex size-10 items-center justify-center rounded-lg bg-brand-indigo/10">
                <f.icon className="size-5 text-brand-cyan" />
              </div>
              <h3 className="mt-4 font-semibold">{f.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeIn delay={0.5}>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          +6 more features coming at launch
        </p>
      </FadeIn>
    </SectionWrapper>
  );
}
