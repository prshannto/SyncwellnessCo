"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, User, X } from "lucide-react";
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
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <button
          type="button"
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors lg:hidden",
            heroNav
              ? "border-cream/50 text-cream hover:bg-cream/10"
              : "border-charcoal/20 text-charcoal hover:bg-charcoal/5"
          )}
          aria-label="Profile placeholder"
        >
          <User className="h-5 w-5" />
        </button>

        <Logo
          variant={heroNav ? "light" : "default"}
          className="absolute left-1/2 -translate-x-1/2 lg:hidden"
        />

        <Logo
          variant={heroNav ? "light" : "default"}
          className="hidden lg:flex"
        />

        <ul className="hidden items-center gap-6 xl:gap-8 lg:flex lg:ml-auto">
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
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              className="fixed top-16 right-0 bottom-0 left-0 z-40 bg-charcoal/30 backdrop-blur-[2px] lg:hidden"
              aria-label="Close menu overlay"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-16 right-0 z-40 h-[calc(100svh-4rem)] w-[86%] max-w-sm border-l border-beige-200 bg-[#f4f2f0] shadow-2xl lg:hidden"
            >
              <div className="flex h-full flex-col">
                <div className="flex-1 overflow-y-auto px-5 py-5">
                  <ul className="space-y-1">
                    {siteConfig.navLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-md px-2 py-3 text-[15px] font-medium uppercase tracking-[0.16em] text-charcoal transition-colors hover:bg-beige-100"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 border-t border-beige-200 pt-6">
                    <div className="space-y-3">
                      <Link
                        href="/consultation"
                        onClick={() => setMobileOpen(false)}
                        className="block w-full rounded-md border border-[#cdb9a3] bg-[#ebe8e4] py-3 text-center text-sm font-semibold uppercase tracking-[0.14em] text-[#b49777] transition-colors hover:bg-[#e2ddd7]"
                      >
                        Start For Free
                      </Link>
                      <Link
                        href="/consultation"
                        onClick={() => setMobileOpen(false)}
                        className="block w-full rounded-md bg-[#b49777] py-3 text-center text-sm font-semibold uppercase tracking-[0.14em] text-cream transition-colors hover:bg-[#a98b6f]"
                      >
                        Member Login
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
