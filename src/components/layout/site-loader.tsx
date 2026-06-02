"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const lines = [
  "Balance Hormones.",
  "Heal Your Gut.",
  "Feel Strong Again.",
];

export function SiteLoader({ children }: { children: React.ReactNode }) {
  const [showLoader, setShowLoader] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const rotate = window.setInterval(() => {
      setLineIndex((prev) => (prev + 1) % lines.length);
    }, 550);

    const hide = window.setTimeout(() => {
      setShowLoader(false);
      window.clearInterval(rotate);
    }, 2000);

    return () => {
      window.clearTimeout(hide);
      window.clearInterval(rotate);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {showLoader && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.45 } }}
            className="fixed inset-0 z-[999] isolate flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f4e7df] via-[#eddcd3] to-[#e4d7ce]"
          >
            <div className="pointer-events-none absolute -top-20 -left-20 z-0 h-64 w-64 rounded-full bg-blush-200/60 blur-3xl sm:h-72 sm:w-72" />
            <div className="pointer-events-none absolute -right-24 top-1/3 z-0 h-72 w-72 rounded-full bg-sage-100/60 blur-3xl sm:h-80 sm:w-80" />
            <div className="pointer-events-none absolute -bottom-6 left-1/3 z-0 h-48 w-48 rounded-full bg-beige-200/70 blur-3xl sm:h-56 sm:w-56" />
            <div className="relative z-10 px-6 text-center">
              <p className="font-display text-4xl tracking-tight text-charcoal sm:text-5xl">
                SyncwellnessCo
              </p>
              <motion.p
                key={lineIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 text-sm uppercase tracking-[0.18em] text-sage-700 sm:text-base"
              >
                {lines[lineIndex]}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
