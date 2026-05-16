"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center text-center overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_50%_120%,rgba(14,107,168,0.4)_0%,transparent_60%),radial-gradient(ellipse_at_20%_50%,rgba(4,29,53,0.8)_0%,transparent_50%),linear-gradient(180deg,#020d1a_0%,#041d35_40%,#062a4a_70%,#041d35_100%)]" />

      <div className="relative z-10 max-w-[800px] px-5 flex flex-col items-center">
        <motion.p
          className="text-[11px] tracking-[5px] uppercase text-ocean-bright mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Seafood &nbsp;·&nbsp; Grill &nbsp;·&nbsp; Tandoor &nbsp;·&nbsp; Noida
        </motion.p>

        <motion.h1
          className="font-serif text-[clamp(52px,9vw,110px)] font-black leading-[0.9] text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          <span className="text-gold italic">indie</span><br />
          BBQ
        </motion.h1>

        <motion.p
          className="font-cursive text-[clamp(24px,4vw,42px)] text-ocean-foam mt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
        >
          Dive into Flavour
        </motion.p>

        <motion.p
          className="text-[12px] tracking-[3px] text-textMuted uppercase mt-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1 }}
        >
          By <span className="text-ocean-bright">Chef Rohan Chanda</span>
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-5 justify-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2 }}
        >
          <Link href="#menu" className="btn-primary">
            Explore Menu
          </Link>
          <Link href="#reservations" className="btn-outline">
            Book a Table
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.6 }}
      >
        <span className="text-[10px] tracking-[3px] text-textMuted uppercase">Scroll</span>
        <div className="w-[1px] h-[50px] bg-gradient-to-b from-ocean-bright to-transparent animate-scroll-pulse" />
      </motion.div>
    </section>
  );
}
