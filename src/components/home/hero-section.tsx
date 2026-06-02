"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { heroContent, heroTrustBadges } from "@/data/home-content";

export function HeroSection() {
  return (
    <section className="relative w-full">
      {/* 16:9 full-bleed hero image */}
      <div className="relative aspect-video w-full min-h-[100svh] sm:min-h-0 sm:max-h-[92vh]">
        <Image
          src={heroContent.image}
          alt={heroContent.imageAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/55 via-charcoal/25 to-charcoal/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 via-transparent to-transparent" />

        {/* Mobile: Member + Start Now on top of image */}
        <div className="absolute top-[4.25rem] left-0 right-0 z-10 flex gap-2 px-4 sm:top-20 sm:gap-3 sm:px-6 lg:hidden">
          <Link
            href="/consultation"
            className="flex-1 rounded-full border border-cream/50 bg-charcoal/30 py-2.5 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-cream backdrop-blur-sm transition-colors hover:bg-charcoal/50"
          >
            Member
          </Link>
          <Link
            href="/consultation"
            className="flex-1 rounded-full bg-cream py-2.5 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-charcoal transition-colors hover:bg-cream/90"
          >
            Start Now
          </Link>
        </div>

        {/* Desktop: marketing line + Get Started */}
        <div className="absolute inset-0 hidden flex-col justify-end lg:flex">
          <div className="mx-auto w-full max-w-7xl px-8 pb-14 xl:px-12 xl:pb-16">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-cream/70">
                Women&apos;s Health Coaching
              </p>
              <h1 className="font-display text-4xl leading-[1.08] text-cream xl:text-5xl 2xl:text-[3.5rem]">
                {heroContent.marketingLine}
              </h1>
              <p className="mt-3 text-xl italic text-cream/85 sm:text-2xl xl:text-3xl">
                {heroContent.marketingSubline}
              </p>
              <Link
                href="/consultation"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-charcoal transition-all hover:bg-beige-100 hover:shadow-lg"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Mobile: compact tagline at bottom */}
        <div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-8 pt-24 lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h1 className="font-display text-2xl leading-tight text-cream sm:text-3xl">
              {heroContent.marketingLine}
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-cream/80">
              {heroContent.marketingSubline}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Trust strip */}
      <div className="relative bg-charcoal">
        <div className="mx-auto flex max-w-7xl flex-row flex-wrap items-center justify-between gap-2 px-4 py-2.5 sm:gap-4 sm:px-6 sm:py-4 lg:px-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-cream/60 sm:text-xs">
            Trusted by 100+ women worldwide
          </p>
          <ul className="flex flex-wrap items-center gap-3 sm:gap-6">
            {heroTrustBadges.map((badge, i) => (
              <motion.li
                key={badge}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.06 }}
                className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.15em] text-cream/85 sm:text-xs"
              >
                <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-sage-500">
                  <Check className="h-2 w-2 text-cream" />
                </span>
                {badge}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
