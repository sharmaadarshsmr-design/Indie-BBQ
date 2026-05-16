"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ocean-bright/15 pt-16 pb-10 relative z-10 bg-ocean-deep">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
        {/* Brand */}
        <div className="flex flex-col sm:col-span-2 lg:col-span-1">
          <div className="font-serif text-[30px] text-gold font-black">indie BBQ</div>
          <div className="font-cursive text-ocean-foam text-[17px] mt-1 mb-4">Dive into Flavour</div>
          <p className="text-textMuted text-[14px] leading-[1.7]">
            By Chef Rohan Chanda<br />
            Seafood · Grill · Tandoor
          </p>
          <div className="mt-5 flex gap-3">
            <span className="w-9 h-9 border border-ocean-bright/30 flex items-center justify-center cursor-pointer text-textMuted transition-all duration-300 hover:border-ocean-bright hover:text-ocean-bright">✦</span>
            <span className="w-9 h-9 border border-ocean-bright/30 flex items-center justify-center cursor-pointer text-textMuted transition-all duration-300 hover:border-ocean-bright hover:text-ocean-bright">◈</span>
          </div>
        </div>

        {/* Navigate */}
        <div className="flex flex-col">
          <h4 className="text-[11px] tracking-[3px] uppercase text-ocean-bright mb-5">Navigate</h4>
          <ul className="flex flex-col gap-3 list-none">
            {["Menu", "Seafood Boil", "Gallery", "Reservations"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-[14px] text-textMuted hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div className="flex flex-col">
          <h4 className="text-[11px] tracking-[3px] uppercase text-ocean-bright mb-5">Hours</h4>
          <ul className="flex flex-col gap-2 list-none">
            <li className="text-[14px] text-textMuted cursor-default">Mon – Sun</li>
            <li className="text-[14px] text-ocean-foam cursor-default font-medium">9:00 AM – 10:00 PM</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col">
          <h4 className="text-[11px] tracking-[3px] uppercase text-ocean-bright mb-5">Contact</h4>
          <address className="not-italic text-textMuted text-[14px] leading-[1.9]">
            Indie BBQ<br />
            By Chef Rohan Chanda<br />
            <br />
            <span className="text-ocean-bright">Reservations:</span><br />
            Book via our website<br />
            or visit us directly
          </address>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1200px] mx-auto mt-14 px-6 md:px-16 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
        <p className="text-[12px] text-textMuted">© 2026 Indie BBQ by Chef Rohan Chanda. All rights reserved.</p>
        <p className="text-[12px] text-ocean-bright">Seafood · Grill · Tandoor</p>
      </div>
    </footer>
  );
}
