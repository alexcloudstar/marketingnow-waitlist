import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Solution } from "@/components/sections/solution";
import { FeaturesGrid } from "@/components/sections/features-grid";
import { PricingComparison } from "@/components/sections/pricing-comparison";
import { SocialProof } from "@/components/sections/social-proof";
import { HowItWorks } from "@/components/sections/how-it-works";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <FeaturesGrid />
        <PricingComparison />
        <SocialProof />
        <HowItWorks />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
