"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials, testimonialStats } from "@/data/testimonials";
import { cn } from "@/lib/utils";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-4 w-4",
            i < rating
              ? "fill-amber-400 text-amber-400"
              : "fill-beige-200 text-beige-200"
          )}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", dragFree: true },
    [Autoplay({ delay: 6000, stopOnInteraction: true, stopOnMouseEnter: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-14 sm:py-20" id="testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client Stories"
          title="Real Women, Real Transformations"
          description="Hear from women who've walked this path and discovered what's possible when you work with your body — not against it."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {testimonialStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-charcoal/10 bg-charcoal px-6 py-8 text-center"
            >
              <p className="font-display text-3xl text-cream sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-cream/70">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="relative mt-14">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="min-w-0 flex-[0_0_100%] px-2 sm:flex-[0_0_85%] lg:flex-[0_0_70%]"
                >
                  <article className="mx-auto max-w-3xl rounded-3xl border border-beige-200 bg-cream p-8 shadow-sm sm:p-10">
                    <Quote className="h-8 w-8 text-sage-300" />
                    <div className="mt-6 flex items-center gap-4">
                      <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-sage-200">
                        <Image
                          src={t.image}
                          alt={t.name}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-sage-900">{t.name}</p>
                        <p className="text-sm text-sage-500">{t.location}</p>
                        <StarRating rating={t.rating} />
                      </div>
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-3">
                      <div className="rounded-xl bg-blush-100/60 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-blush-800">
                          Before
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-sage-700">
                          {t.before}
                        </p>
                      </div>
                      <div className="rounded-xl bg-sage-100/60 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-sage-700">
                          Process
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-sage-700">
                          {t.process}
                        </p>
                      </div>
                      <div className="rounded-xl bg-sage-600/10 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-sage-700">
                          Result
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-sage-700">
                          {t.result}
                        </p>
                      </div>
                    </div>

                    <blockquote className="mt-6 border-l-2 border-sage-400 pl-4 text-lg italic text-sage-800">
                      &ldquo;{t.highlight}&rdquo;
                    </blockquote>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={scrollPrev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-beige-300 bg-cream text-sage-700 transition-colors hover:bg-sage-100"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    i === selectedIndex
                      ? "w-8 bg-sage-600"
                      : "w-2 bg-beige-300 hover:bg-sage-300"
                  )}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={scrollNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-beige-300 bg-cream text-sage-700 transition-colors hover:bg-sage-100"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
