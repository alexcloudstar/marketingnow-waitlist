"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { FadeIn } from "@/components/motion/fade-in";
import { CountUp } from "@/components/motion/count-up";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { stats } from "@/lib/data";

export function SocialProof() {
  return (
    <SectionWrapper id="social-proof">
      <FadeIn>
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-cyan">
            Traction
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Join Hundreds of Founders{" "}
            <span className="text-gradient">Already Waiting</span>
          </h2>
        </div>
      </FadeIn>

      <StaggerContainer className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4" stagger={0.1}>
        {stats.map((stat) => (
          <StaggerItem key={stat.label}>
            <div className="text-center">
              <p className="font-mono text-3xl font-bold text-foreground sm:text-4xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeIn delay={0.3}>
        <div className="mx-auto mt-14 max-w-2xl rounded-xl border border-white/5 bg-surface-1 p-6 sm:p-8">
          <p className="text-center text-lg leading-relaxed italic text-muted-foreground">
            &ldquo;I was paying over $400/month for tools that barely worked
            together. MarketingNow feels like the future of startup
            marketing.&rdquo;
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-brand-indigo/20 text-sm font-bold text-brand-cyan">
              JD
            </div>
            <div>
              <p className="text-sm font-semibold">Jordan Davis</p>
              <p className="text-xs text-muted-foreground">
                Founder, SaaS Startup
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
