"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Set launch date 8 weeks from now (persists per session via calculation)
const LAUNCH_DATE = new Date();
LAUNCH_DATE.setDate(LAUNCH_DATE.getDate() + 56);

function getTimeLeft() {
  const now = new Date().getTime();
  const distance = LAUNCH_DATE.getTime() - now;
  if (distance < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex size-14 items-center justify-center rounded-xl border border-white/[0.06] bg-surface-1 sm:size-16">
        <span className="font-mono text-xl font-bold text-brand-amber sm:text-2xl">
          {String(value).padStart(2, "0")}
        </span>
        <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/[0.03] to-transparent" />
      </div>
      <span className="mt-1.5 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

export function CountdownTimer() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
      className="flex items-center gap-2 sm:gap-3"
    >
      <TimeBlock value={time.days} label="Days" />
      <span className="mt-[-16px] text-lg text-muted-foreground/40">:</span>
      <TimeBlock value={time.hours} label="Hours" />
      <span className="mt-[-16px] text-lg text-muted-foreground/40">:</span>
      <TimeBlock value={time.minutes} label="Min" />
      <span className="mt-[-16px] text-lg text-muted-foreground/40">:</span>
      <TimeBlock value={time.seconds} label="Sec" />
    </motion.div>
  );
}
