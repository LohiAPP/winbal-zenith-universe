import { motion } from "framer-motion";
import { useState } from "react";
import globe from "@/assets/universe-globe.jpg";

const nodes = [
  { key: "Luxury", angle: 0, desc: "Five-star residences, private jets, yachts and member-only retreats." },
  { key: "Security", angle: 51, desc: "24/7 global concierge, medical assistance and travel risk monitoring." },
  { key: "Technology", angle: 103, desc: "AI itinerary intelligence, real-time pricing and predictive planning." },
  { key: "Rewards", angle: 154, desc: "Lifetime tier benefits, compounding member savings and exclusive credits." },
  { key: "Experiences", angle: 206, desc: "Curated journeys, private events, gastronomy and cultural access." },
  { key: "Lifestyle", angle: 257, desc: "Wellness, sports, fashion and lifestyle partners across continents." },
  { key: "Community", angle: 309, desc: "A discreet society of founders, creatives and global leaders." },
];

export function Universe() {
  const [active, setActive] = useState(0);
  return (
    <section id="universe" className="relative py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.26_0.10_264/0.35),transparent_60%)]" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="eyebrow mb-6"
          >
            The Winbal Universe
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[1.05] max-w-[18ch]"
          >
            One membership. <span className="italic font-serif text-gold-gradient">An entire universe.</span>
          </motion.h2>
          <p className="mt-6 max-w-2xl text-pearl/65 text-base md:text-lg font-light leading-relaxed">
            Seven interconnected dimensions of luxury, intelligence and access — orchestrated into
            a single seamless experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Globe + orbit */}
          <div className="relative aspect-square max-w-[560px] mx-auto w-full">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 80, ease: "linear", repeat: Infinity }}
              className="absolute inset-0"
            >
              <img
                src={globe}
                alt="Connected global travel intelligence network"
                width={1600}
                height={1600}
                loading="lazy"
                className="w-full h-full object-cover rounded-full opacity-90"
              />
            </motion.div>
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,transparent_50%,var(--navy)_80%)]" />
            <div className="absolute inset-0 rounded-full shadow-gold" />

            {nodes.map((n, i) => {
              const isActive = i === active;
              const r = 48; // percent from center
              const a = (n.angle * Math.PI) / 180;
              const x = 50 + r * Math.cos(a);
              const y = 50 + r * Math.sin(a);
              return (
                <button
                  key={n.key}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group"
                  style={{ left: `${x}%`, top: `${y}%` }}
                  aria-label={n.key}
                >
                  <span className={`block rounded-full transition-all duration-500 ${
                    isActive ? "w-4 h-4 bg-champagne shadow-gold" : "w-2 h-2 bg-gold/70"
                  }`} />
                  <span className={`absolute ${x > 50 ? 'right-6' : 'left-6'} top-1/2 -translate-y-1/2 whitespace-nowrap text-xs font-medium tracking-[0.2em] uppercase transition-all duration-300 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border ${
                    isActive ? "text-champagne opacity-100 border-gold/40 shadow-lg z-20" : "text-pearl/90 opacity-90 border-white/15 group-hover:border-white/30 z-10"
                  }`}>{n.key}</span>
                </button>
              );
            })}

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <div className="text-center bg-black/60 backdrop-blur-md px-8 py-6 rounded-full border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                <div className="text-[10px] font-medium tracking-[0.5em] uppercase text-champagne/90">Member</div>
                <div className="font-display text-3xl text-pearl mt-2 drop-shadow-md">{nodes[active].key}</div>
              </div>
            </div>
          </div>

          {/* Active panel */}
          <div className="space-y-6">
            {nodes.map((n, i) => {
              const isActive = i === active;
              return (
                <button
                  key={n.key}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`w-full text-left p-6 border rounded-2xl transition-all duration-500 glass-card ${
                    isActive
                      ? "border-gold/50 bg-white/[0.08] shadow-[0_0_30px_rgba(212,175,55,0.15)] translate-x-2 md:translate-x-4"
                      : "border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20"
                  }`}
                >
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline gap-4">
                      <span className="text-xs font-semibold tracking-[0.4em] text-champagne/90">{`0${i + 1}`}</span>
                      <span className={`font-display text-xl md:text-2xl ${isActive ? "text-gold-gradient" : "text-pearl"}`}>
                        {n.key}
                      </span>
                    </div>
                    <span className={`text-gold transition-transform duration-500 ${isActive ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`}>→</span>
                  </div>
                  <p className={`text-sm text-pearl/65 mt-3 leading-relaxed transition-all duration-500 overflow-hidden ${
                    isActive ? "max-h-32 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
                  }`}>
                    {n.desc}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
