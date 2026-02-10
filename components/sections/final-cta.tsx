"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { FadeIn } from "@/components/motion/fade-in";
import { WaitlistForm } from "@/components/waitlist-form";
import { GradientOrb } from "@/components/motion/gradient-orb";

export function FinalCta() {
  return (
    <SectionWrapper
      id="waitlist"
      className="overflow-hidden"
    >
      <GradientOrb color="indigo" size="lg" className="-left-32 top-0" />
      <GradientOrb color="cyan" size="md" className="-right-24 bottom-0" style={{ animationDelay: "3s" }} />

      <div className="relative">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ready to Simplify{" "}
              <span className="text-gradient">Your Marketing?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Join our waitlist and be the first to experience the future of
              AI-powered startup marketing.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mx-auto mt-8 flex flex-col items-center">
            <WaitlistForm variant="cta" source="final-cta" />
            <div className="mt-6 flex flex-col items-center gap-2 text-center text-sm text-muted-foreground">
              <p className="font-mono text-xs text-brand-cyan">
                First 100 users get lifetime 50% discount
              </p>
              <p>Launching in 8 weeks</p>
              <p className="text-xs">No spam, ever. Unsubscribe anytime.</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
