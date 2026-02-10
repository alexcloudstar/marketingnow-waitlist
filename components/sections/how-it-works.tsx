"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { steps } from "@/lib/data";

export function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works">
      <FadeIn>
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-cyan">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            From Signup to Success{" "}
            <span className="text-gradient">in 3 Steps</span>
          </h2>
        </div>
      </FadeIn>

      <StaggerContainer className="relative mt-14" stagger={0.15}>
        {/* Connecting line */}
        <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-brand-indigo/40 via-brand-cyan/40 to-brand-teal/40 md:left-1/2 md:block" />

        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="relative text-center">
                <div className="relative z-10 mx-auto flex size-12 items-center justify-center rounded-full border border-brand-indigo/30 bg-surface-1 font-mono text-lg font-bold text-brand-cyan">
                  {step.number}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>
    </SectionWrapper>
  );
}
