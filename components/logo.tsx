import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2 font-bold text-lg tracking-tight", className)}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <rect
          width="28"
          height="28"
          rx="7"
          className="fill-brand-indigo"
        />
        <path
          d="M7 18L11 10L15 16L19 8L21 12"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>
        Marketing<span className="text-brand-cyan">Now</span>
      </span>
    </span>
  );
}
