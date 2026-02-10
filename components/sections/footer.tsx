import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div>
            <Logo />
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              One AI-powered platform for all your startup marketing needs.
            </p>
          </div>

          <div className="flex gap-12 text-sm">
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Product</p>
              <a href="#features" className="text-muted-foreground transition-colors hover:text-foreground">
                Features
              </a>
              <a href="#comparison" className="text-muted-foreground transition-colors hover:text-foreground">
                Compare
              </a>
              <a href="#how-it-works" className="text-muted-foreground transition-colors hover:text-foreground">
                How It Works
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Connect</p>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Twitter
              </a>
              <a
                href="https://producthunt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Product Hunt
              </a>
              <a
                href="mailto:hello@marketingnow.app"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} MarketingNow. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
