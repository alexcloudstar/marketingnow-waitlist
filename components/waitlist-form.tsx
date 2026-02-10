"use client";

import { useState, useTransition } from "react";
import { joinWaitlist } from "@/app/actions/waitlist";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

interface WaitlistFormProps {
  variant?: "hero" | "cta";
  source?: string;
  className?: string;
}

export function WaitlistForm({
  variant = "hero",
  source = "hero",
  className,
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    startTransition(async () => {
      const result = await joinWaitlist(email, source);
      setStatus(result.success ? "success" : "error");
      setMessage(result.message);
      if (result.success) setEmail("");
    });
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "flex items-center gap-2 rounded-lg border border-brand-teal/30 bg-brand-teal/10 px-4 py-3 text-sm text-brand-teal",
          className
        )}
      >
        <CheckCircle2 className="size-4 shrink-0" />
        {message}
      </div>
    );
  }

  const isCtaVariant = variant === "cta";

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex w-full gap-2",
        isCtaVariant
          ? "max-w-lg flex-col sm:flex-row"
          : "max-w-md flex-col sm:flex-row",
        className
      )}
    >
      <div className="relative flex-1">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          required
          className={cn(
            "h-11 rounded-lg border-white/10 bg-white/5 text-sm placeholder:text-muted-foreground",
            isCtaVariant && "h-12 text-base",
            status === "error" && "border-destructive/50"
          )}
        />
        {status === "error" && (
          <p className="mt-1.5 flex items-center gap-1 text-xs text-destructive">
            <AlertCircle className="size-3" />
            {message}
          </p>
        )}
      </div>
      <Button
        type="submit"
        disabled={isPending}
        className={cn(
          "relative h-11 shrink-0 overflow-hidden rounded-lg bg-brand-indigo px-6 font-semibold text-white hover:bg-brand-indigo/90",
          isCtaVariant && "h-12 px-8 text-base"
        )}
      >
        {isPending ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          "Join the Waitlist"
        )}
        <span
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(135deg, transparent 40%, oklch(0.75 0.15 194 / 0.3) 50%, transparent 60%)",
            animation: "shimmer 3s ease-in-out infinite",
          }}
        />
      </Button>
    </form>
  );
}
