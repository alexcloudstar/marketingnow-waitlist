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
  featured: boolean;
}

export const features: Feature[] = [
  {
    name: "Pitch Deck Generator",
    description: "AI creates investor-ready pitch decks in minutes, not weeks.",
    icon: Presentation,
    featured: true,
  },
  {
    name: "Landing Page Optimizer",
    description:
      "Generate, A/B test, and optimize landing pages that convert.",
    icon: MousePointerClick,
    featured: true,
  },
  {
    name: "Twitter Assistant Pro",
    description:
      "Schedule, write, and grow your Twitter presence with AI.",
    icon: Twitter,
    featured: true,
  },
  {
    name: "Customer Support AI",
    description:
      "Instant AI responses to customer questions, 24/7.",
    icon: MessageCircle,
    featured: false,
  },
  {
    name: "Competitor Analysis",
    description: "Track competitors, analyze strategies, find opportunities.",
    icon: BarChart3,
    featured: true,
  },
  {
    name: "AI Video Generation",
    description:
      "Turn blog posts into engaging short-form video content.",
    icon: Image,
    featured: true,
  },
  {
    name: "Thread Generator",
    description:
      "Transform any content into viral Twitter/LinkedIn threads.",
    icon: Repeat,
    featured: false,
  },
  {
    name: "Build-in-Public Automation",
    description:
      "Auto-share milestones, metrics, and updates with your audience.",
    icon: Rocket,
    featured: false,
  },
  {
    name: "Email Templates",
    description:
      "AI-crafted email sequences for onboarding, sales, and retention.",
    icon: Mail,
    featured: false,
  },
];

export const featuredFeatures = features.filter((f) => f.featured);
export const additionalFeatureCount = features.length - featuredFeatures.length;
