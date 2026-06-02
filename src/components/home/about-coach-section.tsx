"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { coachHighlights } from "@/data/home-content";

export function AboutCoachSection() {
  const coachImageSrc = "/neha_arora_coach.png";

  useEffect(() => {
    // #region agent log
    fetch("http://127.0.0.1:7549/ingest/3b4cb57e-473b-43c7-96be-d8535731c4c3", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Debug-Session-Id": "9adf1d",
      },
      body: JSON.stringify({
        sessionId: "9adf1d",
        runId: "post-fix",
        hypothesisId: "H1",
        location: "about-coach-section.tsx:13",
        message: "Coach image source selected",
        data: { coachImageSrc },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion
  }, []);

  return (
    <section className="bg-beige-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-1 lg:order-1"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-beige-200">
              <Image
                src={coachImageSrc}
                alt="SyncWellnessCo Women's Health Coach"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                onError={() => {
                  // #region agent log
                  fetch("http://127.0.0.1:7549/ingest/3b4cb57e-473b-43c7-96be-d8535731c4c3", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      "X-Debug-Session-Id": "9adf1d",
                    },
                    body: JSON.stringify({
                      sessionId: "9adf1d",
                      runId: "post-fix",
                      hypothesisId: "H1",
                      location: "about-coach-section.tsx:47",
                      message: "Coach image failed to load",
                      data: { coachImageSrc },
                      timestamp: Date.now(),
                    }),
                  }).catch(() => {});
                  // #endregion
                }}
              />
            </div>
            <div className="absolute -bottom-3 -right-2 rounded-xl border border-beige-200 bg-cream px-3 py-2 shadow-md sm:-bottom-5 sm:-right-5 sm:px-4 sm:py-3">
              <p className="font-display text-sm font-semibold text-sage-900 sm:text-base">
                Certified Coach
              </p>
              <p className="text-xs text-sage-600 sm:text-sm">
                Women&apos;s Health & Hormone Specialist
              </p>
            </div>
          </motion.div>

          <div className="order-2 lg:order-2">
            <SectionHeading
              eyebrow="Meet Your Coach"
              title="Compassionate Expertise for Your Unique Journey"
              description="I'm passionate about helping women reclaim their health without sacrificing their lifestyle. Every protocol is personalized, every client is supported."
              align="left"
            />

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
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
