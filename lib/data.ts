import {
  Presentation,
  MousePointerClick,
  Twitter,
  MessageCircle,
  BarChart3,
  Image,
  Repeat,
  Rocket,
  Mail,
  type LucideIcon,
} from "lucide-react";

// --- Competitor tools replaced ---
export interface CompetitorTool {
  name: string;
  price: number;
  category: string;
}

export const competitorTools: CompetitorTool[] = [
  { name: "Slidebean", price: 49, category: "Pitch Decks" },
  { name: "Unbounce", price: 99, category: "Landing Pages" },
  { name: "Hypefury", price: 25, category: "Social Media" },
  { name: "Intercom", price: 74, category: "Customer Support" },
  { name: "SimilarWeb", price: 125, category: "Analytics" },
  { name: "DALL-E", price: 20, category: "Image Generation" },
];

export const totalCompetitorCost = competitorTools.reduce(
  (sum, t) => sum + t.price,
  0
);

// --- Features ---
export interface Feature {
  name: string;
  description: string;
  icon: LucideIcon;
}

export const features: Feature[] = [
  {
    name: "Pitch Deck Generator",
    description: "AI creates investor-ready pitch decks in minutes, not weeks.",
    icon: Presentation,
  },
  {
    name: "Landing Page Optimizer",
    description:
      "Generate, A/B test, and optimize landing pages that convert.",
    icon: MousePointerClick,
  },
  {
    name: "Twitter Assistant Pro",
    description:
      "Schedule, write, and grow your Twitter presence with AI.",
    icon: Twitter,
  },
  {
    name: "Customer Support AI",
    description:
      "Instant AI responses to customer questions, 24/7.",
    icon: MessageCircle,
  },
  {
    name: "Competitor Analysis",
    description: "Track competitors, analyze strategies, find opportunities.",
    icon: BarChart3,
  },
  {
    name: "AI Video Generation",
    description:
      "Turn blog posts into engaging short-form video content.",
    icon: Image,
  },
  {
    name: "Thread Generator",
    description:
      "Transform any content into viral Twitter/LinkedIn threads.",
    icon: Repeat,
  },
  {
    name: "Build-in-Public Automation",
    description:
      "Auto-share milestones, metrics, and updates with your audience.",
    icon: Rocket,
  },
  {
    name: "Email Templates",
    description:
      "AI-crafted email sequences for onboarding, sales, and retention.",
    icon: Mail,
  },
];

// --- Stats ---
export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 482, suffix: "+", label: "Founders on Waitlist" },
  { value: 33, suffix: "M", label: "Target Businesses" },
  { value: 140, suffix: "B", label: "Market Size ($)" },
  { value: 97, suffix: "%", label: "Projected Margin" },
];

// --- How it works steps ---
export interface Step {
  number: number;
  title: string;
  description: string;
}

export const steps: Step[] = [
  {
    number: 1,
    title: "Tell Us About Your Business",
    description:
      "Answer a few quick questions so our AI understands your industry, audience, and goals.",
  },
  {
    number: 2,
    title: "Choose Your Features",
    description:
      "Pick the tools you need from our suite of 15 AI-powered marketing features.",
  },
  {
    number: 3,
    title: "Start Creating",
    description:
      "Generate pitch decks, landing pages, social content, and more in minutes.",
  },
];
