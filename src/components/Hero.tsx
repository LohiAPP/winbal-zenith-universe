import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroJet from "@/assets/hero-jet.jpg";
import logo from "@/assets/logo.jpg";

const stats = [
  { value: "5000+", label: "Destinations" },
  { value: "10000+", label: "Members" },
  { value: "60%", label: "Member Savings" },
  { value: "24/7", label: "Concierge" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section ref={ref} id="top" className="relative min-h-[100vh] overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={heroJet}
          alt="Private jet soaring above golden clouds at sunrise"
          className="w-full h-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/50 to-navy" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/30 to-navy/60" />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-champagne animate-float"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 100}%`,
              width: `${(i % 3) + 2}px`,
              height: `${(i % 3) + 2}px`,
              opacity: 0.3 + ((i % 4) * 0.1),
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${6 + (i % 5)}s`,
              filter: "blur(0.5px)",
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pt-40 pb-20 min-h-[100vh] flex flex-col justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="absolute top-28 md:top-40 right-6 md:right-12"
        >
          <img src={logo} alt="Winbal Travel Club Logo" className="h-20 md:h-28 w-auto object-contain rounded drop-shadow-2xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="eyebrow mb-8"
        >
          Private Travel Membership · Since 2026
        </motion.div>

        <h1 className="font-display text-[clamp(2.6rem,7vw,6.5rem)] leading-[0.98] tracking-tight max-w-[18ch] drop-shadow-2xl">
          {["Travel Smarter.", "Experience More.", "Pay Less."].map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.1, delay: 0.5 + i * 0.18, ease: [0.2, 0.7, 0.2, 1] }}
              className="block"
            >
              {i === 2 ? <span className="text-gold-gradient italic font-serif">{line}</span> : line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-10 max-w-xl text-pearl/90 text-base md:text-lg leading-relaxed font-light drop-shadow-lg"
        >
          Exclusive travel memberships offering luxury holidays, 5,000+ global destinations,
          and lifetime experiences at unbeatable member prices.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.7 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a href="#membership" className="btn-gold">
            Join Membership
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#packages" className="btn-ghost">Explore Packages</a>
          <a href="#how" className="text-[11px] tracking-[0.3em] uppercase text-pearl/60 hover:text-champagne transition-colors ml-2 underline-offset-8 hover:underline decoration-gold/40">
            Book your holiday →
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border-t border-white/10"
        >
          {stats.map((s, i) => (
            <div key={s.label} className="bg-navy/60 backdrop-blur-md py-6 px-4 md:px-8">
              <div className="text-[10px] tracking-[0.4em] uppercase text-champagne/80 mb-2">{`0${i + 1}`}</div>
              <div className="font-display text-3xl md:text-4xl text-gold-gradient">{s.value}</div>
              <div className="text-xs text-pearl/60 mt-1 tracking-wide">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 text-pearl/40">
        <div className="text-[9px] tracking-[0.4em] uppercase">Scroll</div>
        <div className="w-px h-12 bg-gradient-to-b from-champagne to-transparent animate-pulse" />
      </div>
    </section>
  );
}
