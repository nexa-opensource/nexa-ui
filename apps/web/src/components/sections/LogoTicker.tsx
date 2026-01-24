"use client";

import { motion } from "framer-motion";

const logos = [
  "Acme Corp",
  "Quantum",
  "Echo",
  "Celestial",
  "Pulse",
  "Apex",
  "Horizon",
  "Nebula",
];

import { useTranslations } from "next-intl";

export function LogoTicker() {
  const t = useTranslations("LogoTicker");

  return (
    <section className="py-16 border-y bg-background/50 backdrop-blur-sm overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-small-black/[0.05] dark:bg-grid-small-white/[0.05] -z-10" />

      <div className="container mx-auto flex flex-col items-center gap-8 text-center">
        <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest opacity-70">
          {t("trustedBy")}
        </span>

        <div className="w-full overflow-hidden relative max-w-5xl mx-auto mask-gradient-x">
          {/* Left Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          {/* Right Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          <motion.div
            className="flex gap-20 min-w-max items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30,
            }}
          >
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center gap-2 group cursor-default grayscale hover:grayscale-0 transition-all duration-500 opacity-50 hover:opacity-100 hover:scale-110"
              >
                <div className="h-8 w-8 rounded-lg bg-foreground shadow-sm group-hover:bg-primary transition-colors" />
                <span className="font-bold text-xl tracking-tight">{logo}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
