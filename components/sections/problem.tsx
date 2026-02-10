"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { FadeIn } from "@/components/motion/fade-in";
import { CountUp } from "@/components/motion/count-up";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { competitorTools, totalCompetitorCost } from "@/lib/data";

const rotations = ["-2deg", "1.5deg", "-1deg", "2deg", "-1.5deg", "1deg"];
const colors = [
  "border-red-500/20 bg-red-500/5",
  "border-orange-500/20 bg-orange-500/5",
  "border-red-400/20 bg-red-400/5",
  "border-orange-400/20 bg-orange-400/5",
  "border-red-500/20 bg-red-500/5",
  "border-orange-500/20 bg-orange-500/5",
];

export function Problem() {
  return (
    <SectionWrapper id="problem">
      <FadeIn>
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-red-400">
            The Problem
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            You&apos;re Spending{" "}
            <span className="font-mono text-red-400">
              $<CountUp value={totalCompetitorCost} duration={2} />
              /mo
            </span>{" "}
            on This Mess
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Six different tools. Six different logins. Six different bills.
            And they don&apos;t even talk to each other.
          </p>
        </div>
      </FadeIn>

      <StaggerContainer className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3" stagger={0.1}>
        {competitorTools.map((tool, i) => (
          <StaggerItem key={tool.name}>
            <div
              className={`relative rounded-xl border p-5 transition-transform hover:scale-105 ${colors[i]}`}
              style={{ transform: `rotate(${rotations[i]})` }}
            >
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {tool.category}
              </p>
              <p className="mt-1 text-lg font-semibold">{tool.name}</p>
              <p className="mt-2 font-mono text-2xl font-bold text-red-400">
                ${tool.price}
                <span className="text-sm font-normal text-muted-foreground">
                  /mo
                </span>
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeIn delay={0.4}>
        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Plus <span className="font-semibold text-foreground">hours of manual work</span> switching
            between tools every single day.
          </p>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
