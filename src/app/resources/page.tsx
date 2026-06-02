import type { Metadata } from "next";
import { UnderDevelopment } from "@/components/layout/under-development";

export const metadata: Metadata = {
  title: "Resources",
  description: "Free guides, eBooks, and wellness resources for women's hormone health.",
};

export default function ResourcesPage() {
  return <UnderDevelopment pageName="Resources" />;
}
