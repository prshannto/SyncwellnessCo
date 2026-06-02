"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="mb-2 inline-block text-[11px] font-semibold uppercase tracking-[0.18em] text-sage-500">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-2xl leading-tight text-charcoal sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-[15px] leading-relaxed text-sage-600 sm:text-base">
          {description}
        </p>
      )}
    </motion.div>
  );
}
