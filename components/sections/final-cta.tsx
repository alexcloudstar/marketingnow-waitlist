"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { FadeIn } from "@/components/motion/fade-in";
import { WaitlistForm } from "@/components/waitlist-form";
import { GradientOrb } from "@/components/motion/gradient-orb";
import { Shield } from "lucide-react";
import { tractionStats } from "@/lib/traction";

const waitlistCount = tractionStats[0].value;

export function FinalCta() {
  return (
    <SectionWrapper id="waitlist" className="noise overflow-hidden">
      <GradientOrb color="violet" size="xl" className="-left-48 top-0" />

      <div className="relative">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand-amber">
              Don&apos;t Miss Out
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Join{" "}
              <span className="text-gradient-amber">{waitlistCount}+ Founders</span>{" "}
              on the Waitlist
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mx-auto mt-10 flex flex-col items-center">
            <WaitlistForm />

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Shield className="size-3.5 text-brand-amber/60" />
                <span>No spam, ever. Unsubscribe anytime.</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
