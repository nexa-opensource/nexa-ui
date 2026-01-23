export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice?: number;
  features: {
    text: string;
    included: boolean;
  }[];
  isPopular?: boolean;
  buttonText: string;
  buttonVariant?:
    | "default"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "destructive";
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "hobby",
    name: "Hobby",
    description: "Perfect for personal projects.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    buttonText: "Get Started",
    buttonVariant: "outline",
    features: [
      { text: "Access to all core components", included: true },
      { text: "Community support", included: true },
      { text: "Basic theming", included: true },
      { text: "Advanced charts", included: false },
      { text: "Priority support", included: false },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    description: "For professional developers.",
    monthlyPrice: 15,
    yearlyPrice: 12,
    buttonText: "Subscribe Now",
    buttonVariant: "default",
    isPopular: true,
    features: [
      { text: "Everything in Hobby", included: true },
      { text: "Advanced charts & maps", included: true },
      { text: "Multiple themes", included: true },
      { text: "Priority email support", included: true },
      { text: "Removing attribution", included: true },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For large teams and organizations.",
    monthlyPrice: 49,
    yearlyPrice: 49,
    buttonText: "Contact Sales",
    buttonVariant: "outline",
    features: [
      { text: "Everything in Pro", included: true },
      { text: "Unlimited projects", included: true },
      { text: "Dedicated support channel", included: true },
      { text: "Custom component requests", included: true },
      { text: "SLA & Contracts", included: true },
    ],
  },
];
