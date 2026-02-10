import { cn } from "@/lib/utils";

interface GradientOrbProps {
  className?: string;
  color?: "indigo" | "cyan" | "teal";
  size?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
}

const colorMap = {
  indigo: "bg-brand-indigo/30",
  cyan: "bg-brand-cyan/20",
  teal: "bg-brand-teal/20",
};

const sizeMap = {
  sm: "h-48 w-48",
  md: "h-72 w-72",
  lg: "h-96 w-96",
};

export function GradientOrb({
  className,
  color = "indigo",
  size = "md",
  style,
}: GradientOrbProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl",
        colorMap[color],
        sizeMap[size],
        className
      )}
      style={{ animation: "float 8s ease-in-out infinite, pulse-glow 4s ease-in-out infinite", ...style }}
    />
  );
}
