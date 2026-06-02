"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { programs } from "@/data/programs";

export function ProgramsSection() {
  const featured = programs.find((p) => p.featured);
  const others = programs.filter((p) => !p.featured);

  return (
    <section className="py-8 sm:py-16" id="programs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Signature Programs"
          title="Transform Your Health with Expert Guidance"
          description="Choose the program that meets you where you are — each designed to deliver real, sustainable results."
        />

        <div className="mt-6 grid gap-5 sm:mt-8 sm:gap-8 lg:grid-cols-3">
          {featured && (
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex flex-col rounded-3xl border-2 border-charcoal bg-gradient-to-br from-charcoal to-espresso p-5 text-white shadow-xl sm:p-8 lg:col-span-1 lg:row-span-2"
            >
              <Badge className="mb-3 w-fit border-white/30 bg-white/20 text-[10px] text-white sm:mb-4">
                <Star className="mr-1 h-3 w-3 fill-current" />
                Featured Program
              </Badge>
              <h3 className="font-display text-xl font-semibold sm:text-3xl">
                {featured.name}
              </h3>
              <p className="mt-1 text-sage-100">{featured.duration}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-sage-50/90 sm:mt-4 sm:text-base">
                {featured.description}
              </p>
              <ul className="mt-4 space-y-1.5 sm:mt-6 sm:space-y-2">
                {featured.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="mt-5 bg-cream text-sage-800 hover:bg-beige-100 sm:mt-8"
              >
                <Link href="/consultation">{featured.cta}</Link>
              </Button>
            </motion.article>
          )}

          <div className="flex flex-col gap-5 sm:gap-8 lg:col-span-2">
            {others.map((program, index) => (
              <motion.article
                key={program.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col rounded-2xl border border-beige-200 bg-cream p-5 transition-shadow hover:shadow-lg sm:flex-row sm:gap-8 sm:p-8"
              >
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold text-sage-900 sm:text-2xl">
                    {program.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-sage-500">
                    {program.duration}
                  </p>
                  <p className="mt-2 text-sm text-sage-600 sm:mt-3 sm:text-base">{program.description}</p>
                  <ul className="mt-3 grid gap-1 sm:mt-4 sm:grid-cols-2">
                    {program.features.slice(0, 4).map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-sage-700"
                      >
                        <Check className="h-3.5 w-3.5 text-sage-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 flex items-end sm:mt-0">
                  <Button asChild variant="outline">
                    <Link href="/programs">{program.cta}</Link>
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
