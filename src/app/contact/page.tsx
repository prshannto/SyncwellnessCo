import type { Metadata } from "next";
import { UnderDevelopment } from "@/components/layout/under-development";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with SyncWellnessCo for women's health coaching inquiries.",
};

export default function ContactPage() {
  return <UnderDevelopment pageName="Contact" />;
}
