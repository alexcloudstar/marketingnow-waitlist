"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "glass border-b border-white/5 shadow-lg shadow-black/10" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" aria-label="Home">
          <Logo />
        </a>

        <div className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <a href="#features" className="transition-colors hover:text-foreground">
            Features
          </a>
          <a href="#comparison" className="transition-colors hover:text-foreground">
            Compare
          </a>
          <a href="#how-it-works" className="transition-colors hover:text-foreground">
            How It Works
          </a>
        </div>

        <Button
          asChild
          size="sm"
          className="rounded-lg bg-brand-indigo px-4 font-semibold text-white hover:bg-brand-indigo/90"
        >
          <a href="#waitlist">Join Waitlist</a>
        </Button>
      </div>
    </nav>
  );
}
