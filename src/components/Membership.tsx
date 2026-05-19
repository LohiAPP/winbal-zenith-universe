import { motion } from "framer-motion";

const tiers = [
  {
    name: "Silver",
    tag: "The Initiation",
    perks: ["Member-only fares", "Global concierge", "Curated quarterly journeys", "Tier savings up to 35%"],
    style: "border-white/15",
  },
  {
    name: "Gold",
    tag: "The Standard of Travel",
    perks: ["All Silver privileges", "Priority airport lounges", "Annual signature journey", "Tier savings up to 50%"],
    style: "border-gold/40",
  },
  {
    name: "Platinum",
    tag: "The Inner Circle",
    perks: ["Personal travel director", "Private jet credits", "Suite & villa guarantees", "Tier savings up to 60%"],
    style: "border-champagne/60",
  },
];

export function Membership() {
  return (
    <section id="membership" className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.30_0.10_264/0.6),transparent_55%)]" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <div className="eyebrow mb-6 justify-center inline-flex">Membership</div>
          <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[1.05] max-w-[20ch] mx-auto">
            Not a plan. <span className="italic font-serif text-gold-gradient">A position.</span>
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-pearl/65 font-light">
            Membership is an act of belonging, not a transaction. Each tier unlocks a deeper
            stratum of access, privacy, and care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.12 }}
              className={`group relative glass-card p-8 md:p-10 border ${t.style} hover:-translate-y-2 transition-all duration-700`}
            >
              <div className="text-[10px] tracking-[0.4em] uppercase text-champagne/70">{t.tag}</div>
              <h3 className="font-display text-4xl md:text-5xl mt-4 mb-2">{t.name}</h3>
              <div className="hairline my-6" />
              <ul className="space-y-3 mb-8">
                {t.perks.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-pearl/75 font-light">
                    <span className="text-gold mt-1.5">◆</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <button className="btn-ghost w-full justify-center text-[10px]">Request Invitation</button>
            </motion.div>
          ))}
        </div>

        {/* Black Elite */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1 }}
          className="relative overflow-hidden rounded-sm border border-gold/30 grain"
          style={{
            background:
              "radial-gradient(ellipse at top left, oklch(0.30 0.10 264 / 0.6), transparent 60%), radial-gradient(ellipse at bottom right, oklch(0.78 0.13 84 / 0.18), transparent 60%), oklch(0.10 0.03 264)",
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

          <div className="grid md:grid-cols-2 gap-10 p-10 md:p-16 items-center">
            <div>
              <div className="text-[10px] tracking-[0.5em] uppercase text-gold mb-4">Invitation Only · Limited to 100 Members</div>
              <h3 className="font-display text-5xl md:text-6xl text-gold-gradient italic font-serif mb-4">Black Elite</h3>
              <p className="text-pearl/70 font-light leading-relaxed max-w-md">
                The most discreet stratum of travel society. Anonymous bookings, private aviation
                allowance, residential keys in twelve cities, and a single concierge line to a real
                human — answered on the first ring, anywhere in the world.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="btn-gold">Request Audience</button>
                <span className="text-[10px] tracking-[0.4em] uppercase text-pearl/40 self-center">By referral · Vetted</span>
              </div>
            </div>
            <div className="relative aspect-square max-w-sm mx-auto w-full">
              {/* Elite emblem */}
              <div className="absolute inset-0 rounded-full border border-gold/30 animate-pulse-gold" />
              <div className="absolute inset-6 rounded-full border border-gold/20" />
              <div className="absolute inset-12 rounded-full border border-gold/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-display text-7xl text-gold-gradient">W</div>
                  <div className="text-[10px] tracking-[0.5em] text-champagne/80 mt-2">ELITE · MMXXVI</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
