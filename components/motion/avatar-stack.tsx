"use client";

import { motion } from "framer-motion";

const AVATARS = [
  { initials: "SK", bg: "bg-brand-violet/30" },
  { initials: "MT", bg: "bg-brand-magenta/30" },
  { initials: "PS", bg: "bg-brand-amber/30" },
  { initials: "AR", bg: "bg-brand-gold/30" },
  { initials: "YM", bg: "bg-brand-violet/30" },
];

export function AvatarStack({ count = 482 }: { count?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1, ease: [0.25, 0.4, 0.25, 1] }}
      className="flex items-center gap-3"
    >
      <div className="flex -space-x-2.5">
        {AVATARS.map((a, i) => (
          <motion.div
            key={a.initials}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1.1 + i * 0.08 }}
            className={`flex size-8 items-center justify-center rounded-full border-2 border-surface-0 text-xs font-bold ${a.bg}`}
          >
            {a.initials}
          </motion.div>
        ))}
      </div>
      <div className="text-sm">
        <span className="font-mono font-bold text-brand-amber">{count}+</span>
        <span className="text-muted-foreground"> founders waiting</span>
      </div>
    </motion.div>
  );
}
