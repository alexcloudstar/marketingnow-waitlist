import { cn } from "@/lib/utils";

interface GradientOrbProps {
  className?: string;
  color?: "violet" | "magenta" | "amber" | "gold";
  size?: "sm" | "md" | "lg" | "xl";
  style?: React.CSSProperties;
}

const colorMap = {
  violet: "bg-brand-violet/25",
  magenta: "bg-brand-magenta/20",
  amber: "bg-brand-amber/15",
  gold: "bg-brand-gold/15",
};

const sizeMap = {
  sm: "h-48 w-48",
  md: "h-72 w-72",
  lg: "h-96 w-96",
  xl: "h-[32rem] w-[32rem]",
};

export function GradientOrb({
  className,
  color = "violet",
  size = "md",
  style,
}: GradientOrbProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute rounded-full blur-[100px]",
        colorMap[color],
        sizeMap[size],
        className
      )}
      style={{
        animation:
          "float 10s ease-in-out infinite, pulse-glow 5s ease-in-out infinite",
        ...style,
      }}
    />
  );
}
