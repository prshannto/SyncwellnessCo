import type { Metadata } from "next";
import { UnderDevelopment } from "@/components/layout/under-development";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Read client success stories from SyncWellnessCo women's health coaching.",
};

export default function TestimonialsPage() {
  return <UnderDevelopment pageName="Testimonials" />;
}
