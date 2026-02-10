"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { FadeIn } from "@/components/motion/fade-in";
import { CountUp } from "@/components/motion/count-up";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/stagger-container";
import { tractionStats } from "@/lib/traction";

export function SocialProof() {
  return (
    <SectionWrapper id="social-proof" className="noise">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_40%_at_50%_60%,oklch(0.82_0.17_75_/_0.03),transparent)]" />

      <FadeIn>
        <div className="text-center">
          <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand-amber">
            Traction
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Join Hundreds of Founders{" "}
            <span className="text-gradient">Already Waiting</span>
          </h2>
        </div>
      </FadeIn>

      <StaggerContainer
        className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-3"
        stagger={0.1}
      >
        {tractionStats.map((stat) => (
          <StaggerItem key={stat.label}>
            <div className="group rounded-2xl border border-white/[0.06] bg-surface-1 p-6 text-center transition-all duration-300 hover:border-brand-violet/15 hover:shadow-lg hover:shadow-brand-violet/5">
              <p className="font-mono text-3xl font-bold text-foreground sm:text-4xl">
                {stat.label === "Avg. Savings ($)" && "$"}
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2.5 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
