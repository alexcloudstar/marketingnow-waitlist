"use client";

import { useState, useTransition } from "react";
import { joinWaitlist } from "@/app/actions/waitlist";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Loader2, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface WaitlistFormProps {
  className?: string;
}

export function WaitlistForm({ className }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    startTransition(async () => {
      const result = await joinWaitlist(email);
      setStatus(result.success ? "success" : "error");
      setMessage(result.message);
      if (result.success) setEmail("");
    });
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn(
          "flex items-center gap-3 rounded-2xl border border-brand-amber/30 bg-brand-amber/[0.07] px-6 py-4 text-sm font-medium text-brand-amber",
          className
        )}
      >
        <CheckCircle2 className="size-5 shrink-0" />
        {message}
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex w-full max-w-md gap-2 flex-col sm:flex-row", className)}
    >
      <div className="relative flex-1">
        <Input
          type="email"
          placeholder="Enter your best email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          required
          className={cn(
            "h-12 rounded-xl border-white/[0.06] bg-transparent text-sm placeholder:text-muted-foreground/60 focus:border-brand-amber/30 focus:ring-brand-amber/10",
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
        className="btn-amber group relative h-12 shrink-0 rounded-xl px-7 font-semibold"
      >
        {isPending ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <span className="flex items-center gap-2">
            Claim Your Spot
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        )}
      </Button>
    </form>
  );
}
