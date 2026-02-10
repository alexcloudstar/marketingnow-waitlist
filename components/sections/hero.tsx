"use client";

import { WaitlistForm } from "@/components/waitlist-form";
import { LiveJoinTicker } from "@/components/motion/live-join-ticker";
import { AvatarStack } from "@/components/motion/avatar-stack";
import { GradientOrb } from "@/components/motion/gradient-orb";
import { CountUp } from "@/components/motion/count-up";
import { Logo } from "@/components/logo";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="noise-overlay relative flex h-dvh flex-col overflow-hidden bg-surface-0 px-5 sm:px-8 lg:px-12">
      {/* Animated mesh gradient background */}
      <div className="mesh-gradient-bg pointer-events-none absolute inset-0" />

      {/* Dot grid depth layer */}
      <div className="dot-grid pointer-events-none absolute inset-0" />

      {/* Ambient gradient orbs */}
      <GradientOrb color="violet" size="xl" className="-top-32 -right-32" />
      <GradientOrb color="magenta" size="lg" className="-bottom-24 -left-24" />
      <GradientOrb
        color="amber"
        size="md"
        className="top-1/2 right-[10%] -translate-y-1/2"
      />
      <GradientOrb color="gold" size="sm" className="top-[15%] left-[20%]" />

      {/* Gallery lighting — dual radial gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 80% 50% at 50% 0%, oklch(1 0 0 / 0.06), transparent)",
            "radial-gradient(ellipse 40% 40% at 15% 80%, oklch(0.55 0.27 300 / 0.04), transparent)",
          ].join(", "),
        }}
      />


      {/* ---- Header row ---- */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease }}
        className="relative z-10 flex shrink-0 items-center justify-between pt-5 sm:pt-6"
      >
        <Logo />
      </motion.header>

      {/* ---- Main content ---- */}
      <div className="relative z-10 flex flex-1 items-center">
        <div className="max-w-2xl lg:ml-[12%]">
          {/* "Marketing" */}
          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 1.04, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.1, duration: 0.7, ease }}
            className="text-gradient-headline font-serif text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] tracking-tight"
            style={{ textShadow: "0 0 80px oklch(1 0 0 / 0.05)" }}
          >
            Marketing
          </motion.h1>

          {/* "Now." — italic, amber, offset */}
          <motion.p
            initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.35, duration: 0.7, ease }}
            className="text-glow-amber ml-[2ch] font-serif text-[clamp(3.5rem,10vw,9rem)] italic leading-[0.9] tracking-tight text-brand-amber"
          >
            Now.
          </motion.p>

          {/* Shimmer amber line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0, width: 0 }}
            animate={{ opacity: 1, scaleX: 1, width: "16rem" }}
            transition={{ delay: 0.6, duration: 0.5, ease }}
            className="shimmer-line mt-4 h-[2px] origin-left"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.85, duration: 0.5, ease }}
            className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            One AI platform. Six tools replaced. Save $392/mo.
            {/* <CountUp
              value={392}
              prefix="$"
              suffix="/mo"
              duration={2.5}
              className="text-glow-red font-mono font-bold text-red-500"
            /> */}
          </motion.p>

          {/* Form with CTA glow */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.5, ease }}
            className="mt-6 max-w-lg"
          >
            <div className="cta-glow-container p-3 sm:p-5">
              <WaitlistForm />
            </div>
          </motion.div>

          {/* Live join ticker */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.4, ease }}
            className="mt-4"
          >
            <LiveJoinTicker />
          </motion.div> */}

          {/* Avatar stack social proof */}
          {/* <div className="mt-3">
            <AvatarStack />
          </div> */}
        </div>
      </div>

      {/* ---- Footer row ---- */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.5, ease }}
        className="relative z-10 flex shrink-0 items-end justify-between border-t border-white/[0.04] pb-5 pt-3 sm:pb-6"
      >
        <p className="font-display text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground/50 sm:text-[11px]">
          Your competitors aren&apos;t waiting
        </p>
        <div className="text-right text-[10px] tracking-wide text-muted-foreground/50">
          &copy; {new Date().getFullYear()} MarketingNow
        </div>
      </motion.footer>
    </section>
  );
}
