import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex items-center gap-2.5 font-display text-lg font-bold tracking-tight",
        className
      )}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-brand-amber)" />
            <stop offset="100%" stopColor="var(--color-brand-gold)" />
          </linearGradient>
          <linearGradient id="logo-shine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>

        <circle cx="20" cy="20" r="18" fill="url(#logo-gradient)" />
        <path d="M22 8L14 21H20L18 32L26 19H20L22 8Z" fill="white" fillOpacity="0.95" />
        <circle cx="20" cy="20" r="18" fill="url(#logo-shine)" />
      </svg>
      <span>
        Marketing<span className="text-brand-amber">Now</span>
      </span>
    </span>
  );
}
