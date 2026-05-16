"use client";

import { motion } from "framer-motion";

export default function FloatingFish() {
  return (
    <>
      <motion.div
        className="fixed z-[1] opacity-10 pointer-events-none"
        style={{ top: "30%" }}
        animate={{
          x: ["-10vw", "110vw"],
          y: [0, -30, 0],
        }}
        transition={{
          x: { duration: 25, repeat: Infinity, ease: "linear" },
          y: { duration: 12.5, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" },
        }}
      >
        <svg width="80" height="30" viewBox="0 0 80 30" className="fill-ocean-foam">
          <path d="M70 15 Q55 5 40 15 Q25 25 10 15 L0 20 Q10 10 0 0 L10 5 Q25 -5 40 5 Q55 15 70 5 Z" />
          <circle cx="65" cy="12" r="2" />
        </svg>
      </motion.div>

      <motion.div
        className="fixed z-[1] opacity-[0.08] pointer-events-none"
        style={{ top: "65%" }}
        animate={{
          x: ["110vw", "-10vw"],
          y: [0, 20, 0],
          scaleX: [-1, -1]
        }}
        transition={{
          x: { duration: 35, repeat: Infinity, ease: "linear", delay: 8 },
          y: { duration: 17.5, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" },
        }}
      >
        <svg width="50" height="20" viewBox="0 0 50 20" className="fill-ocean-foam">
          <path d="M45 10 Q35 3 25 10 Q15 17 5 10 L0 14 Q8 7 0 0 L5 3 Q15 -3 25 4 Q35 11 45 4 Z" />
          <circle cx="41" cy="8" r="1.5" />
        </svg>
      </motion.div>

      <motion.div
        className="fixed z-[1] opacity-[0.12] pointer-events-none"
        style={{ top: "50%" }}
        animate={{
          x: ["-10vw", "110vw"],
          y: [0, -40, 0],
        }}
        transition={{
          x: { duration: 40, repeat: Infinity, ease: "linear", delay: 15 },
          y: { duration: 20, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" },
        }}
      >
        <svg width="100" height="36" viewBox="0 0 100 36" className="fill-ocean-foam">
          <path d="M90 18 Q70 5 50 18 Q30 31 10 18 L0 24 Q12 12 0 0 L10 6 Q30 -6 50 7 Q70 20 90 7 Z" />
          <circle cx="84" cy="14" r="2.5" />
        </svg>
      </motion.div>
    </>
  );
}
