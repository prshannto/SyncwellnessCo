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
    <section className="py-8 sm:py-16" id="programs" style={{ backgroundColor: "#E8DDD9" }}>
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
              className="relative flex flex-col rounded-3xl border border-white/20 bg-gradient-to-br from-charcoal/90 to-espresso/80 p-5 text-white shadow-[0_8px_32px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-xl sm:p-8 lg:col-span-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition-shadow duration-300"
            >
              <Badge className="mb-3 w-fit border-white/40 bg-white/15 text-[10px] text-white/90 sm:mb-4 backdrop-blur-md">
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

          {others.map((program, index) => (
            <motion.article
              key={program.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex flex-col rounded-3xl border border-gold/20 bg-cream/70 p-5 text-charcoal shadow-[0_4px_20px_rgba(179,140,80,0.08),inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-lg sm:p-8 hover:shadow-[0_8px_32px_rgba(179,140,80,0.15)] hover:bg-cream/80 transition-all duration-300"
            >
              <h3 className="font-display text-xl font-semibold sm:text-3xl text-charcoal">
                {program.name}
              </h3>
              <p className="mt-1 text-sage-600 font-medium">{program.duration}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-sage-700 sm:mt-4 sm:text-base">
                {program.description}
              </p>
              <ul className="mt-4 space-y-1.5 sm:mt-6 sm:space-y-2">
                {program.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-sage-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-sage-600" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="mt-5 sm:mt-8"
              >
                <Link href="/consultation">{program.cta}</Link>
              </Button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
