import type { Metadata } from "next";
import { UnderDevelopment } from "@/components/layout/under-development";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Women's health, hormone balance, gut health, and wellness articles from SyncWellnessCo.",
};

export default function BlogPage() {
  return <UnderDevelopment pageName="Blog" />;
}
