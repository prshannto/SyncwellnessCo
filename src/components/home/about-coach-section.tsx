"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { coachHighlights } from "@/data/home-content";

export function AboutCoachSection() {
  return (
    <section className="bg-beige-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-beige-200">
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=1000&fit=crop"
                alt="SyncWellnessCo Women's Health Coach"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-beige-200 bg-cream p-6 shadow-lg sm:block">
              <p className="font-display text-lg font-semibold text-sage-900">
                Certified Coach
              </p>
              <p className="text-sm text-sage-600">
                Women&apos;s Health & Hormone Specialist
              </p>
            </div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Meet Your Coach"
              title="Compassionate Expertise for Your Unique Journey"
              description="I'm passionate about helping women reclaim their health without sacrificing their lifestyle. Every protocol is personalized, every client is supported."
              align="left"
            />

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {coachHighlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-xl border border-beige-200 bg-cream p-5"
                >
                  <h3 className="font-display text-lg font-semibold text-sage-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-sage-600">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
