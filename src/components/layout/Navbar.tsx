"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["Menu", "Seafood Boil", "Gallery"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeAndScroll = (id: string) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <nav
      className={clsx(
        "fixed top-0 w-full z-50 flex items-center justify-between px-5 sm:px-8 md:px-12 lg:px-16 transition-all duration-400",
        scrolled
          ? "py-3 md:py-4 bg-ocean-deep/95 backdrop-blur-xl border-b border-ocean-bright/20 shadow-lg"
          : "py-5 md:py-6 bg-transparent"
      )}
    >
      {/* Logo */}
      <div className="flex flex-col font-serif z-50 relative">
        <span className="text-[24px] sm:text-[28px] font-black text-gold tracking-[2px] leading-none">
          indie BBQ
        </span>
        <span className="text-[8px] sm:text-[9px] tracking-[4px] sm:tracking-[5px] text-textMuted uppercase mt-1">
          By Chef Rohan Chanda
        </span>
      </div>

      {/* Desktop Nav */}
      <ul className="hidden lg:flex gap-9 list-none items-center">
        {navLinks.map((item) => (
          <li key={item}>
            <Link
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-white/80 text-[13px] tracking-[1.5px] uppercase relative group hover:text-ocean-foam transition-colors duration-300"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-ocean-bright transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
        ))}
        <li>
          <button
            className="bg-transparent border border-gold text-gold py-2.5 px-7 text-[12px] tracking-[2px] uppercase cursor-pointer font-sans transition-all duration-300 hover:bg-gold hover:text-ocean-deep"
            onClick={() => closeAndScroll("reservations")}
          >
            Reserve a Table
          </button>
        </li>
      </ul>

      {/* Hamburger Button */}
      <button
        className="lg:hidden flex flex-col gap-[5px] p-2 z-50 relative cursor-pointer"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle mobile menu"
        aria-expanded={mobileMenuOpen}
      >
        <span className={clsx("block w-6 h-[2px] bg-gold rounded-full transition-all duration-300 origin-center", mobileMenuOpen ? "rotate-45 translate-y-[7px]" : "")} />
        <span className={clsx("block w-6 h-[2px] bg-gold rounded-full transition-all duration-300", mobileMenuOpen ? "opacity-0 scale-x-0" : "")} />
        <span className={clsx("block w-6 h-[2px] bg-gold rounded-full transition-all duration-300 origin-center", mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : "")} />
      </button>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-full left-0 w-full bg-ocean-deep/97 backdrop-blur-2xl border-b border-ocean-bright/20 shadow-2xl flex flex-col items-center py-10 gap-7 lg:hidden"
          >
            {navLinks.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.25 }}
              >
                <Link
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-white/80 text-[15px] tracking-[3px] uppercase hover:text-ocean-foam transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07, duration: 0.25 }}
              className="mt-2"
            >
              <button
                className="bg-gold text-ocean-deep py-3.5 px-10 text-[13px] tracking-[2px] uppercase cursor-pointer font-sans font-bold transition-all duration-300 hover:bg-gold-light active:scale-95"
                onClick={() => closeAndScroll("reservations")}
              >
                Reserve a Table
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
