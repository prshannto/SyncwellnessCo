"use client";

import { motion } from "framer-motion";
import { Flower2, Leaf, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { transformationPillars } from "@/data/home-content";

const iconMap = {
  flower: Flower2,
  leaf: Leaf,
  sparkles: Sparkles,
};

export function TransformationSection() {
  return (
    <section className="bg-beige-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Your Transformation"
          title="Holistic Wellness for Lasting Change"
          description="We address the root causes of your symptoms — not just the surface — through three interconnected pillars of women's health."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {transformationPillars.map((pillar, index) => {
            const Icon = iconMap[pillar.icon];
            return (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-beige-200 bg-cream p-8 transition-shadow hover:shadow-lg hover:shadow-sage-900/5"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-100 text-sage-600 transition-colors group-hover:bg-sage-600 group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-sage-900">
                  {pillar.title}
                </h3>
                <p className="mt-3 leading-relaxed text-sage-600">
                  {pillar.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
