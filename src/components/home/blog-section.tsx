"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const demoBlogs = [
  {
    id: "1",
    title: "5 Signs Your Hormones Need Attention",
    excerpt: "Learn the subtle signals your body sends when hormones are out of balance.",
    category: "Hormone Health",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
  },
  {
    id: "2",
    title: "Gut Health & Your Cycle: What's Connected",
    excerpt: "Why digestive wellness plays a bigger role in hormonal balance than you think.",
    category: "Gut Health",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
  },
  {
    id: "3",
    title: "Sustainable Fat Loss Without Restriction",
    excerpt: "A gentler approach to body composition that actually lasts.",
    category: "Nutrition",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525cd17?w=600&h=400&fit=crop",
  },
];

export function BlogSection() {
  return (
    <section className="bg-gold-muted/60 py-8 sm:py-16" id="blog">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="From the Blog"
          title="Wellness Insights & Tips"
          description="Practical reads on hormones, nutrition, and living well — curated for women like you."
        />

        <div className="mt-6 grid gap-5 sm:mt-8 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {demoBlogs.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="overflow-hidden rounded-2xl bg-cream shadow-sm"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4 sm:p-5">
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gold">
                  {post.category}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-charcoal sm:text-xl">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sage-600">
                  {post.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-6 text-center sm:mt-8">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-charcoal transition-colors hover:text-gold"
          >
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
