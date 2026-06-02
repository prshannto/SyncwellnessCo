"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCTASection() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-charcoal via-espresso to-charcoal px-8 py-16 text-center sm:px-16 sm:py-20"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blush-200 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-sage-300 blur-3xl" />
          </div>

          <div className="relative">
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              Your Health Transformation Starts Today
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-sage-100">
              Take the first step toward balanced hormones, a healed gut, and
              sustainable energy. Your future self will thank you.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-cream text-sage-800 hover:bg-beige-100"
              >
                <Link href="/consultation">
                  Book Free Call
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/consultation">Apply For Coaching</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
