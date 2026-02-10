import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex items-center gap-2.5 font-display text-lg font-bold tracking-tight",
        className
      )}
    >
      <Image
        src="/logo.svg"
        alt="MarketingNow"
        width={32}
        height={32}
        className="shrink-0"
      />
      <span>
        Marketing<span className="text-brand-amber">Now</span>
      </span>
    </span>
  );
}
