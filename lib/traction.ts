// --- User-facing traction stats (shown on landing page) ---
export interface TractionStat {
  value: number;
  suffix: string;
  label: string;
}

export const tractionStats: TractionStat[] = [
  { value: 482, suffix: "+", label: "Founders on Waitlist" },
  { value: 6, suffix: "", label: "Tools Replaced" },
  { value: 392, suffix: "/mo", label: "Avg. Savings ($)" },
];

// --- Investor metrics (not shown on landing page) ---
export const investorMetrics = {
  targetBusinesses: "33M",
  marketSize: "$140B",
  projectedMargin: "97%",
} as const;
