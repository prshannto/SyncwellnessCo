export type Program = {
  id: string;
  name: string;
  duration: string;
  description: string;
  features: string[];
  featured?: boolean;
  cta: string;
};

export const programs: Program[] = [
  {
    id: "hormone-harmony",
    name: "Hormone Harmony Framework",
    duration: "12 Weeks",
    description:
      "Our signature comprehensive program designed to balance hormones, optimize metabolism, and restore vibrant energy through personalized protocols.",
    features: [
      "Weekly 1:1 coaching sessions",
      "Custom hormone-friendly meal plans",
      "Cycle-synced fitness guidance",
      "Lab review & interpretation",
      "Private community access",
      "Lifetime resource library",
    ],
    featured: true,
    cta: "Apply Now",
  },
  {
    id: "gut-cleanse",
    name: "Gut Cleanse Program",
    duration: "8 Weeks",
    description:
      "Heal your gut, reduce bloating, and restore digestive harmony with evidence-based protocols tailored to your unique microbiome needs.",
    features: [
      "Gut healing protocol",
      "Elimination & reintroduction guide",
      "Supplement recommendations",
      "Weekly check-ins",
      "Recipe collection",
      "Digestive health tracking",
    ],
    cta: "Learn More",
  },
  {
    id: "metabolic-kickstarter",
    name: "4-Week Metabolic Fat Loss Kickstarter",
    duration: "4 Weeks",
    description:
      "Jumpstart sustainable fat loss with metabolic reset strategies that work with your hormones — not against them.",
    features: [
      "Metabolic assessment",
      "Macro-balanced meal templates",
      "Movement prescriptions",
      "Accountability check-ins",
      "Quick-win strategies",
      "Transition plan included",
    ],
    cta: "Get Started",
  },
];
