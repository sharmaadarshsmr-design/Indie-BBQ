"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 w-full z-50 flex items-center justify-between px-6 md:px-16 transition-all duration-400",
        scrolled
          ? "py-3 md:py-4 bg-ocean-deep/95 backdrop-blur-xl border-b border-ocean-bright/20"
          : "py-5 md:py-6 bg-transparent"
      )}
    >
      <div className="flex flex-col font-serif">
        <span className="text-[28px] font-black text-gold tracking-[2px] leading-none">
          indie BBQ
        </span>
        <span className="text-[9px] tracking-[5px] text-textMuted uppercase mt-1">
          By Chef Rohan Chanda
        </span>
      </div>

      <ul className="hidden md:flex gap-9 list-none">
        {["Menu", "Seafood Boil", "Gallery"].map((item) => (
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
      </ul>

      <button
        className="bg-transparent border border-gold text-gold py-2.5 px-7 text-[12px] tracking-[2px] uppercase cursor-pointer font-sans transition-all duration-300 hover:bg-gold hover:text-ocean-deep hidden sm:block"
        onClick={() => document.getElementById("reservations")?.scrollIntoView({ behavior: "smooth" })}
      >
        Reserve a Table
      </button>
    </nav>
  );
}
