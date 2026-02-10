"use client";

import { Badge } from "@/components/ui/badge";
import { WaitlistForm } from "@/components/waitlist-form";
import { FadeIn } from "@/components/motion/fade-in";
import { GradientOrb } from "@/components/motion/gradient-orb";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20 sm:px-6 lg:px-8"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.488_0.243_264.376_/_0.3),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(1 0 0 / 0.05) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <GradientOrb color="indigo" size="lg" className="-left-48 -top-24" />
      <GradientOrb color="cyan" size="md" className="-right-32 top-1/3" style={{ animationDelay: "2s" }} />
      <GradientOrb color="teal" size="sm" className="bottom-20 left-1/4" style={{ animationDelay: "4s" }} />

      <div className="relative mx-auto max-w-4xl text-center">
        <FadeIn delay={0}>
          <Badge
            variant="outline"
            className="mb-6 border-brand-indigo/30 bg-brand-indigo/10 px-3 py-1 text-xs font-medium text-brand-cyan"
          >
            <span className="mr-1.5 inline-block size-1.5 animate-pulse rounded-full bg-brand-cyan" />
            Launching Soon
          </Badge>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Stop Paying for{" "}
            <span className="text-gradient">6 Marketing Tools.</span>
            <br />
            Start Using One.
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            One AI-powered platform that replaces Slidebean, Unbounce, Hypefury,
            Intercom, SimilarWeb & DALL-E. Everything you need to market your
            startup, at a fraction of the cost.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-8 flex flex-col items-center gap-4">
            <WaitlistForm source="hero" />
            <div className="flex flex-col items-center gap-2 text-sm">
              <a
                href="#problem"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                See How It Works &darr;
              </a>
              <p className="font-mono text-xs text-brand-cyan">
                Early Bird: 50% off for first 100 users
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
