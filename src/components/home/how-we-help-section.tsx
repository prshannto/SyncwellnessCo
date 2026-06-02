"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { howWeHelp } from "@/data/home-content";

export function HowWeHelpSection() {
  return (
    <section className="bg-sage-50/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How We Help"
          title="Comprehensive Support for Your Health Journey"
          description="Our integrated approach addresses every aspect of your wellness — from hormones to habits — with personalized guidance every step of the way."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {howWeHelp.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full border-beige-200/80 bg-cream transition-shadow hover:shadow-md">
                <CardHeader>
                  <span className="mb-2 inline-block font-display text-3xl font-light text-sage-400">
                    0{index + 1}
                  </span>
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
