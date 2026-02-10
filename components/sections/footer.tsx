import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.04] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-start">
          <div>
            <Logo />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              One AI-powered platform for all your startup marketing needs.
            </p>
          </div>

          <div className="flex gap-14 text-sm">
            <div className="flex flex-col gap-3">
              <p className="font-display font-bold">Product</p>
              <a
                href="#features"
                className="text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                Pricing
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-display font-bold">Connect</p>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                Twitter
              </a>
              <a
                href="https://producthunt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                Product Hunt
              </a>
              <a
                href="mailto:hello@marketingnow.app"
                className="text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/[0.04] pt-6 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} MarketingNow. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
