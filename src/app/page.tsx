"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import BubbleCanvas from "@/components/ui/BubbleCanvas";
import FloatingFish from "@/components/ui/FloatingFish";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const menuData = {
  fresh: [
    { name: "Prawns", price: "₹690", sub: "Butter Garlic / Tandoori / Crispy Fried / Masala Tawa" },
    { name: "Mud Crab", price: "₹950 / 1490", sub: "Butter Garlic / Masala / Coriander" },
    { name: "Pomfret", price: "₹790", sub: "320–350gm · Tandoori / Tawa / Stuffed" },
    { name: "Sole Fish", price: "₹690", sub: "Butter Garlic / Tandoori / Crispy Fried" },
    { name: "Lobster", price: "₹600/100g", sub: "Butter Garlic / Tandoori" },
    { name: "Octopus", price: "₹690", sub: "Tandoori / Crispy Fried" },
    { name: "Calamari (Squid)", price: "₹690", sub: "Butter Garlic / Crispy Fried" },
    { name: "Salmon", price: "₹1400", sub: "Butter Garlic" },
    { name: "Grilled Red Snapper", price: "₹1490", sub: "1kg – 1.5kg whole fish" }
  ],
  frypan: [
    { name: "Fish Finger", price: "₹590" },
    { name: "Ajwain Fish Pakoda", price: "₹590" },
    { name: "Fish Amritsari", price: "₹590" },
    { name: "Prawn Momo", price: "₹690" },
    { name: "Jumbo Prawn Gravy", price: "₹690" },
    { name: "Fish Masala Gravy", price: "₹590 / 690 / 790", sub: "Basa / Sole / Pomfret" },
    { name: "Seafood Platter", price: "₹1599", sub: "Sole(2pc) + Bassa(2pc) + Octopus(3pc) + Prawns(2pc) + Calamari(100g) + Pomfret(1pc)" },
    { name: "Seafood Platter (Crab)", price: "₹1999", sub: "Same as above with Mud Crab(1pc) replacing Pomfret" }
  ],
  chicken: [
    { name: "Tandoori Chicken Tikka", price: "₹490" },
    { name: "Chicken Malai Tikka", price: "₹590" },
    { name: "Chicken Afghan", price: "₹490 / 690" },
    { name: "Chicken Seekh Kebab", price: "₹290 / 490" },
    { name: "Tandoori Chicken Tangri", price: "₹490 / 690" },
    { name: "Tandoori Chicken", price: "₹490 / 690" },
    { name: "Tandoori Wings", price: "₹490 / 690" },
    { name: "Crispy Fried Chicken", price: "₹490 / 690" },
    { name: "Chicken Alfaham", price: "₹490 / 790" },
    { name: "Mutton Seekh Kebab", price: "₹350 / 590" },
    { name: "Tandoori Mutton Barra", price: "₹590" },
    { name: "Tandoori Chicken Platter", price: "₹980" }
  ]
};

const tabs = [
  { id: "fresh", label: "Fresh Catch" },
  { id: "frypan", label: "Fisherman's Frypan" },
  { id: "chicken", label: "Cluck & Char" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("fresh");
  const [resSuccess, setResSuccess] = useState(false);

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault();
    setResSuccess(true);
  };

  return (
    <main className="relative min-h-screen">
      <BubbleCanvas />
      <FloatingFish />
      <Navbar />
      <HeroSection />

      {/* MENU SECTION */}
      <section id="menu" className="relative z-10 py-[80px] md:py-[120px] bg-gradient-to-b from-transparent via-[#041d3580] to-transparent">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}>
            <p className="section-label">The Full Experience</p>
            <h2 className="section-title">Our Menu</h2>
            <div className="divider" />
          </motion.div>

          <div className="flex gap-0 mb-16 border-b border-ocean-bright/20 overflow-x-auto scrollbar-hide justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={clsx(
                  "bg-transparent border-none py-3.5 px-7 text-[12px] tracking-[2px] uppercase cursor-pointer whitespace-nowrap relative transition-colors duration-300 font-sans border-b-2 mb-[-1px]",
                  activeTab === tab.id ? "text-ocean-bright border-ocean-bright" : "text-textMuted border-transparent hover:text-ocean-foam"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px]">
            {menuData[activeTab as keyof typeof menuData]?.map((item, idx) => (
              <motion.div
                key={idx}
                className="p-6 md:p-7 border border-white/5 transition-all duration-300 relative overflow-hidden group hover:bg-[#0e6ba814]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-ocean-bright transition-all duration-300 group-hover:w-full" />
                <div className="flex justify-between items-start gap-3 mb-1.5">
                  <span className="text-[16px] font-medium text-white">{item.name}</span>
                  <span className="font-serif text-[18px] text-gold whitespace-nowrap">{item.price}</span>
                </div>
                {'sub' in item && item.sub && <div className="text-[12px] text-textMuted leading-[1.5]">{item.sub}</div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEAFOOD BOIL SPOTLIGHT */}
      <section id="seafood-boil" className="relative z-10 py-[80px] md:py-[120px] bg-[radial-gradient(ellipse_at_center,rgba(14,107,168,0.15)_0%,transparent_70%)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}>
              <span className="inline-block bg-gold text-ocean-deep py-1.5 px-5 text-[10px] tracking-[3px] uppercase font-bold mb-6">★ Newly Launched</span>
              <p className="section-label">The Main Event</p>
              <h2 className="section-title">Seafood<br /><em className="italic text-ocean-bright">Boil</em></h2>
              <div className="divider" />
              <p className="text-textMuted leading-[1.8] text-[16px] my-5 mb-8">
                A feast designed for sharing. Fresh catch cooked together in your choice of
                Indian Masala Gravy or Lemon Butter Garlic — served in the traditional boil
                style, right at your table.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { title: "For 2 People", price: "₹2,890", people: "5 Prawns · 5 Octopus · Crab · Clams · Lobster · Squid · Potato · Corn" },
                  { title: "For 4 People", price: "₹5,590", people: "Double portions of everything · Add Pomfret/Bhetki +₹590" },
                  { title: "For 6 People", price: "₹8,590", people: "Full feast for the whole table" }
                ].map((pkg, i) => (
                  <div key={i} className="border border-ocean-bright/30 p-5 md:p-7 relative overflow-hidden transition-all duration-300 hover:border-ocean-bright/70 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-ocean-bright/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="text-[11px] tracking-[3px] uppercase text-textMuted relative z-10">{pkg.title}</div>
                    <div className="font-serif text-[36px] text-gold font-bold my-1 relative z-10">{pkg.price}</div>
                    <div className="text-[13px] text-ocean-bright relative z-10">{pkg.people}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div className="relative flex items-center justify-center mt-6 lg:mt-0" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } } }}>
              <div className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] rounded-full border border-ocean-bright/30 flex items-center justify-center relative shrink-0">
                <div className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[360px] md:h-[360px] rounded-full border border-dashed border-ocean-bright/15 animate-spin-slow" />
                <div className="w-[190px] h-[190px] sm:w-[240px] sm:h-[240px] md:w-[300px] md:h-[300px] rounded-full bg-[radial-gradient(circle,rgba(14,107,168,0.3)_0%,rgba(4,29,53,0.8)_100%)] flex flex-col items-center justify-center text-center p-4 sm:p-6 md:p-[30px] border border-ocean-bright/40 relative z-10">
                  <div className="font-cursive text-[16px] sm:text-[18px] md:text-[20px] text-gold mb-2 sm:mb-3">What&apos;s in the pot</div>
                  <div className="text-[10px] sm:text-[11px] md:text-[12px] text-textMuted leading-[2] tracking-[0.5px]">
                    <strong className="text-ocean-foam font-medium">5 pcs Prawns</strong><br />
                    <strong className="text-ocean-foam font-medium">5 pcs Octopus</strong><br />
                    <strong className="text-ocean-foam font-medium">1 full Crab</strong><br />
                    200g Clams<br />
                    200g Lobster<br />
                    200g Squid (Calamari)<br />
                    Corn on the Cob
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AMBIENCE SECTION */}
      <section id="gallery" className="relative z-10 py-[80px] md:py-[120px] bg-gradient-to-b from-transparent via-[#062a4a66] to-transparent">
        <div className="max-w-[1200px] mx-auto px-6 md:px-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}>
            <p className="section-label">The Space</p>
            <h2 className="section-title">Ocean Meets<br /><em className="text-ocean-bright italic">Flavour</em></h2>
            <div className="divider" />
            <p className="text-textMuted max-w-[500px] leading-[1.8] mt-4">
              Step into an underwater world. Our hand-painted murals, dramatic lighting,
              and open tandoor create an atmosphere unlike any other.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[300px_300px] gap-1 mt-12">
            <div className="relative overflow-hidden lg:row-span-2 lg:col-span-2 bg-gradient-to-br from-[#041d35] to-[#0a3352] min-h-[300px]">
               <div className="absolute inset-0 bg-[#020d1a80] flex flex-col items-center justify-center gap-2">
                 <div className="text-[32px]">🐙</div>
                 <div className="text-[11px] tracking-[3px] uppercase text-ocean-foam">Hand-painted murals</div>
               </div>
            </div>
            <div className="relative overflow-hidden bg-gradient-to-br from-[#062a4a] to-[#041d35] min-h-[300px]">
               <div className="absolute inset-0 bg-[#020d1a80] flex flex-col items-center justify-center gap-2">
                 <div className="text-[32px]">🦞</div>
                 <div className="text-[11px] tracking-[3px] uppercase text-ocean-foam">Live counter</div>
               </div>
            </div>
            <div className="relative overflow-hidden bg-gradient-to-br from-[#0a3352] to-[#062a4a] min-h-[300px]">
               <div className="absolute inset-0 bg-[#020d1a80] flex flex-col items-center justify-center gap-2">
                 <div className="text-[32px]">🔥</div>
                 <div className="text-[11px] tracking-[3px] uppercase text-ocean-foam">Open tandoor</div>
               </div>
            </div>
            <div className="relative overflow-hidden bg-gradient-to-br from-[#041d35] to-[#020d1a] min-h-[300px]">
               <div className="absolute inset-0 bg-[#020d1a80] flex flex-col items-center justify-center gap-2">
                 <div className="text-[32px]">🎨</div>
                 <div className="text-[11px] tracking-[3px] uppercase text-ocean-foam">Indie BBQ art</div>
               </div>
            </div>
            <div className="relative overflow-hidden bg-gradient-to-br from-[#062a4a] to-[#0a3352] min-h-[300px]">
               <div className="absolute inset-0 bg-[#020d1a80] flex flex-col items-center justify-center gap-2">
                 <div className="text-[32px]">🌊</div>
                 <div className="text-[11px] tracking-[3px] uppercase text-ocean-foam">Intimate seating</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESERVATIONS */}
      <section id="reservations" className="relative z-10 py-[80px] md:py-[120px] bg-[radial-gradient(ellipse_at_center_bottom,rgba(14,107,168,0.2)_0%,transparent_70%)]">
        <div className="max-w-[700px] mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}>
            <p className="section-label">Book Your Experience</p>
            <h2 className="section-title">Reserve a Table</h2>
            <div className="divider mx-auto my-5" />
            <p className="text-textMuted leading-[1.8]">
              Join us for an unforgettable evening at Indie BBQ. For large groups (8+) or
              the Seafood Boil experience, we recommend reserving in advance.
            </p>
          </motion.div>

          {!resSuccess ? (
            <motion.form 
              className="mt-16 text-left grid grid-cols-1 md:grid-cols-2 gap-5"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
              onSubmit={handleReservation}
            >
              <div className="flex flex-col gap-2">
                <label className="text-[11px] tracking-[2px] uppercase text-textMuted">Your Name</label>
                <input required type="text" placeholder="Full name" className="bg-[#041d35cc] border border-ocean-bright/20 text-white p-3.5 text-[15px] outline-none transition-colors duration-300 focus:border-ocean-bright w-full" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] tracking-[2px] uppercase text-textMuted">Phone Number</label>
                <input required type="tel" placeholder="+91 00000 00000" className="bg-[#041d35cc] border border-ocean-bright/20 text-white p-3.5 text-[15px] outline-none transition-colors duration-300 focus:border-ocean-bright w-full" />
              </div>
              <div className="flex flex-col gap-2 col-span-1 md:col-span-2">
                <label className="text-[11px] tracking-[2px] uppercase text-textMuted">Email Address</label>
                <input required type="email" placeholder="your@email.com" className="bg-[#041d35cc] border border-ocean-bright/20 text-white p-3.5 text-[15px] outline-none transition-colors duration-300 focus:border-ocean-bright w-full" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] tracking-[2px] uppercase text-textMuted">Number of Guests</label>
                <select className="bg-[#041d35cc] border border-ocean-bright/20 text-white p-3.5 text-[15px] outline-none transition-colors duration-300 focus:border-ocean-bright">
                  <option className="bg-ocean-mid">1–2 Guests</option>
                  <option className="bg-ocean-mid">3–4 Guests</option>
                  <option className="bg-ocean-mid">5–6 Guests</option>
                  <option className="bg-ocean-mid">7–8 Guests</option>
                  <option className="bg-ocean-mid">9+ Guests</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] tracking-[2px] uppercase text-textMuted">Preferred Date</label>
                <input required type="date" className="bg-[#041d35cc] border border-ocean-bright/20 text-white p-3.5 text-[15px] outline-none transition-colors duration-300 focus:border-ocean-bright [color-scheme:dark]" />
              </div>
              <div className="flex flex-col gap-2 col-span-1 md:col-span-2 mt-3">
                <button type="submit" className="w-full bg-gold text-ocean-deep border-none p-4.5 text-[13px] tracking-[3px] uppercase font-bold cursor-pointer transition-colors duration-300 hover:bg-gold-light py-4">
                  Confirm Reservation
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.div 
              className="py-10 text-center"
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
            >
              <div className="text-[48px] mb-4">🎉</div>
              <h3 className="font-serif text-[28px] text-gold mb-3">Reservation Confirmed!</h3>
              <p className="text-textMuted">We&apos;ll send a confirmation to your email shortly. See you at Indie BBQ!</p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
