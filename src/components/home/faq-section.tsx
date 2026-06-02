"use client";

import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";

export function FAQSection() {
  return (
    <section className="bg-sage-50/50 py-8 sm:py-16" id="faq">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about working with SyncWellnessCo."
        />

        <Accordion type="single" collapsible className="mt-7 w-full sm:mt-12">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="text-left font-display text-base sm:text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="mt-6 text-center text-xs text-sage-600 sm:mt-8 sm:text-sm">
          Have more questions?{" "}
          <Link
            href="/faq"
            className="font-medium text-sage-700 underline-offset-4 hover:underline"
          >
            View all FAQs
          </Link>{" "}
          or{" "}
          <Link
            href="/contact"
            className="font-medium text-sage-700 underline-offset-4 hover:underline"
          >
            contact us
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
