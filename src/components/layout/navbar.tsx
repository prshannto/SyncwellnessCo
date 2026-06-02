"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const heroNav = isHome && !isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        heroNav
          ? "bg-transparent"
          : "border-b border-beige-200/80 bg-cream/95 shadow-sm backdrop-blur-md"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Logo variant={heroNav ? "light" : "default"} />

        <ul className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {siteConfig.navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "text-[11px] font-medium uppercase tracking-[0.14em] transition-colors",
                  heroNav
                    ? "text-cream/90 hover:text-cream"
                    : "text-sage-700 hover:text-charcoal"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 sm:gap-3 lg:flex">
          <Link
            href="/consultation"
            className={cn(
              "rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] transition-all",
              heroNav
                ? "border-cream/60 text-cream hover:bg-cream/10"
                : "border-charcoal/30 text-charcoal hover:bg-charcoal/5"
            )}
          >
            Member
          </Link>
          <Link
            href="/consultation"
            className={cn(
              "rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] transition-all",
              heroNav
                ? "bg-cream text-charcoal hover:bg-cream/90"
                : "bg-charcoal text-cream hover:bg-espresso"
            )}
          >
            Start Now
          </Link>
        </div>

        <button
          type="button"
          className={cn(
            "inline-flex items-center justify-center rounded-lg p-2 lg:hidden",
            heroNav ? "text-cream" : "text-charcoal"
          )}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-beige-200 bg-cream lg:hidden"
          >
            <ul className="flex flex-col gap-0.5 px-4 py-4">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium uppercase tracking-wide text-charcoal hover:bg-beige-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-3 flex gap-2 border-t border-beige-200 pt-4">
                <Link
                  href="/consultation"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 rounded-full border border-charcoal/25 py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-charcoal"
                >
                  Member
                </Link>
                <Link
                  href="/consultation"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 rounded-full bg-charcoal py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-cream"
                >
                  Start Now
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
