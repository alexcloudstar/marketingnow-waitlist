"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAMES = [
  { name: "Sarah K.", location: "San Francisco" },
  { name: "Marcus T.", location: "New York" },
  { name: "Priya S.", location: "London" },
  { name: "Alex R.", location: "Berlin" },
  { name: "Yuki M.", location: "Tokyo" },
  { name: "Carlos D.", location: "Austin" },
  { name: "Emma L.", location: "Toronto" },
  { name: "James W.", location: "Sydney" },
  { name: "Sofia P.", location: "Barcelona" },
  { name: "Daniel F.", location: "Singapore" },
  { name: "Olivia H.", location: "Amsterdam" },
  { name: "Noah B.", location: "Chicago" },
];

function randomTime() {
  return `${Math.floor(Math.random() * 5) + 1} min ago`;
}

export function LiveJoinTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % NAMES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const current = NAMES[index];

  return (
    <div className="flex h-8 items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          className="flex items-center gap-2 text-xs"
        >
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-amber opacity-75" />
            <span className="relative inline-flex size-1.5 rounded-full bg-brand-amber" />
          </span>
          <span className="text-muted-foreground">
            <span className="font-medium text-foreground">{current.name}</span>
            {" "}from {current.location} joined{" "}
            <span className="text-brand-amber">{randomTime()}</span>
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
