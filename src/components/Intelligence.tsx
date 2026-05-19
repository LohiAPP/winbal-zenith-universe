import { motion } from "framer-motion";

const features = [
  { k: "AI Recommendations", v: "Personalised journeys derived from 12M+ member signals." },
  { k: "Smart Pricing", v: "Predictive fare modelling locks rates up to 18 months ahead." },
  { k: "Risk Monitoring", v: "Real-time geopolitical, medical and weather intelligence." },
  { k: "Predictive Planning", v: "AI orchestrates itineraries across air, sea, land and stay." },
  { k: "Luxury Optimization", v: "Upgrade probability scoring across 800+ partner properties." },
  { k: "Personal Concierge", v: "Dedicated human + AI hybrid agent, available 24/7." },
];

export function Intelligence() {
  return (
    <section id="intelligence" className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--navy),oklch(0.22_0.07_264),var(--navy))]" />
      <div className="absolute inset-0 opacity-30 pointer-events-none"
           style={{
             backgroundImage:
               "linear-gradient(to right, oklch(0.78 0.13 84 / 0.08) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.78 0.13 84 / 0.08) 1px, transparent 1px)",
             backgroundSize: "60px 60px",
           }} />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <div className="eyebrow mb-6 justify-center inline-flex">Travel Intelligence</div>
          <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[1.05] max-w-[16ch] mx-auto">
            A command center for the <span className="italic font-serif text-gold-gradient">art of arriving</span>.
          </h2>
        </div>

        {/* Dashboard mock */}
        <div className="glass-card p-6 md:p-10 max-w-5xl mx-auto mb-20">
          <div className="flex items-center justify-between mb-6 text-[10px] tracking-[0.3em] uppercase text-pearl/50">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              Winbal · Live
            </div>
            <span>{new Date().toUTCString().slice(0, 16)}</span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="text-[10px] tracking-[0.4em] uppercase text-champagne/70 mb-2">Active Route</div>
              <div className="font-display text-3xl md:text-4xl">LHR → MLE → NRT</div>
              <div className="mt-6 relative h-24 rounded-sm bg-white/5 overflow-hidden border border-white/5">
                <svg viewBox="0 0 400 100" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="route" x1="0" x2="1">
                      <stop offset="0%" stopColor="oklch(0.78 0.13 84)" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="oklch(0.92 0.09 86)" stopOpacity="1" />
                      <stop offset="100%" stopColor="oklch(0.78 0.13 84)" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  <path d="M0,80 Q100,10 200,50 T400,30" stroke="url(#route)" strokeWidth="1.5" fill="none" />
                  <circle cx="0" cy="80" r="3" fill="oklch(0.92 0.09 86)" />
                  <circle cx="200" cy="50" r="3" fill="oklch(0.92 0.09 86)" />
                  <circle cx="400" cy="30" r="3" fill="oklch(0.92 0.09 86)" />
                </svg>
              </div>
              <div className="grid grid-cols-3 mt-4 text-xs">
                <div><div className="text-pearl/50 text-[10px] uppercase tracking-[0.3em]">Cost</div><div className="font-display text-xl text-gold-gradient mt-1">£2,140</div></div>
                <div><div className="text-pearl/50 text-[10px] uppercase tracking-[0.3em]">Saved</div><div className="font-display text-xl text-gold-gradient mt-1">£3,860</div></div>
                <div><div className="text-pearl/50 text-[10px] uppercase tracking-[0.3em]">Risk Index</div><div className="font-display text-xl text-gold-gradient mt-1">0.12</div></div>
              </div>
            </div>
            <div className="space-y-3">
              {["Auto-upgrade detected · J class", "Concierge confirmed villa transfer", "Forecast: clear, 28°C arrival"].map((m, i) => (
                <div key={i} className="flex items-start gap-3 text-xs text-pearl/70 border-l border-gold/40 pl-3 py-1">
                  <span className="text-[9px] tracking-[0.3em] text-champagne/70 mt-0.5">0{i + 1}</span>
                  <span className="font-light">{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {features.map((f, i) => (
            <motion.div
              key={f.k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="bg-navy/80 p-8 group hover:bg-royal/30 transition-colors duration-500"
            >
              <div className="text-[10px] tracking-[0.4em] uppercase text-champagne/60 mb-3">{`0${i + 1}`}</div>
              <h3 className="font-display text-xl text-pearl mb-3 group-hover:text-gold-gradient transition-colors">{f.k}</h3>
              <p className="text-sm text-pearl/60 font-light leading-relaxed">{f.v}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
