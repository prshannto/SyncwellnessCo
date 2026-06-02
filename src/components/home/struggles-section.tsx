"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { struggles } from "@/data/home-content";

export function StrugglesSection() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Sound Familiar?"
          title="You're Not Alone in These Struggles"
          description="Thousands of women experience these symptoms daily. The good news? They're often connected — and healable with the right support."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {struggles.map((struggle, index) => (
            <motion.span
              key={struggle}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="cursor-default rounded-full border border-blush-200 bg-blush-100 px-5 py-2.5 text-sm font-medium text-blush-800 transition-colors hover:border-sage-300 hover:bg-sage-100 hover:text-sage-800"
            >
              {struggle}
            </motion.span>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-2xl text-center text-lg text-sage-600"
        >
          These symptoms aren&apos;t random — they&apos;re signals your body is
          sending. Let&apos;s decode them together and create your path to
          vibrant health.
        </motion.p>
      </div>
    </section>
  );
}
