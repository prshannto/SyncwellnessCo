import type { Metadata } from "next";
import { UnderDevelopment } from "@/components/layout/under-development";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about SyncWellnessCo coaching programs.",
};

export default function FAQPage() {
  return <UnderDevelopment pageName="FAQ" />;
}
