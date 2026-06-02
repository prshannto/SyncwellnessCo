import type { Metadata } from "next";
import { UnderDevelopment } from "@/components/layout/under-development";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about SyncWellnessCo and our approach to women's health coaching.",
};

export default function AboutPage() {
  return <UnderDevelopment pageName="About" />;
}
