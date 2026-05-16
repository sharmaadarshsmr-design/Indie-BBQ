"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ocean-bright/15 pt-20 pb-10 relative z-10 bg-ocean-deep">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
        <div className="flex flex-col">
          <div className="font-serif text-[32px] text-gold font-black">indie BBQ</div>
          <div className="font-cursive text-ocean-foam text-[18px] mt-1 mb-4">Dive into Flavour</div>
          <p className="text-textMuted text-[14px] leading-[1.7]">
            By Chef Rohan Chanda<br />
            Seafood · Grill · Tandoor<br />
            Noida, Uttar Pradesh
          </p>
          <div className="mt-5 flex gap-3">
            <span className="w-9 h-9 border border-ocean-bright/30 flex items-center justify-center cursor-pointer text-textMuted transition-all duration-300 hover:border-ocean-bright hover:text-ocean-bright">✦</span>
            <span className="w-9 h-9 border border-ocean-bright/30 flex items-center justify-center cursor-pointer text-textMuted transition-all duration-300 hover:border-ocean-bright hover:text-ocean-bright">◈</span>
          </div>
        </div>

        <div className="flex flex-col">
          <h4 className="text-[11px] tracking-[3px] uppercase text-ocean-bright mb-5">Navigate</h4>
          <ul className="flex flex-col gap-3 list-none">
            {["Menu", "Seafood Boil", "Gallery"].map((item) => (
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

        <div className="flex flex-col">
          <h4 className="text-[11px] tracking-[3px] uppercase text-ocean-bright mb-5">Hours</h4>
          <ul className="flex flex-col gap-2 list-none">
            <li className="text-[14px] text-textMuted cursor-default">Mon – Sun</li>
            <li className="text-[14px] text-ocean-foam cursor-default font-medium">12:00 PM – 11:30 PM</li>
            
            <li className="text-[14px] text-textMuted cursor-default mt-2">Lunch</li>
            <li className="text-[14px] text-ocean-foam cursor-default font-medium">12:00 – 3:30 PM</li>
            
            <li className="text-[14px] text-textMuted cursor-default mt-2">Dinner</li>
            <li className="text-[14px] text-ocean-foam cursor-default font-medium">7:00 – 11:30 PM</li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h4 className="text-[11px] tracking-[3px] uppercase text-ocean-bright mb-5">Contact</h4>
          <address className="not-italic text-textMuted text-[14px] leading-[1.9]">
            Indie BBQ<br />
            By Chef Rohan Chanda<br />
            Noida, Uttar Pradesh<br />
            <br />
            <span className="text-ocean-bright">Reservations:</span><br />
            Book via our website<br />
            or visit us directly
          </address>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-16 px-6 md:px-16 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
        <p className="text-[12px] text-textMuted">© 2026 Indie BBQ by Chef Rohan Chanda. All rights reserved.</p>
        <p className="text-[12px] text-ocean-bright">Seafood · Grill · Tandoor · Noida</p>
      </div>
    </footer>
  );
}
