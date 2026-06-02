import type { Metadata } from "next";
import { UnderDevelopment } from "@/components/layout/under-development";

export const metadata: Metadata = {
  title: "Book Free Consultation",
  description:
    "Schedule your free discovery call with a certified women's health coach.",
};

export default function ConsultationPage() {
  return <UnderDevelopment pageName="Consultation" />;
}
