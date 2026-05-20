import { motion } from "framer-motion";

const tiers = [
  {
    name: "Starter",
    tag: "The Initiation",
    price: "₹25,000",
    priceNote: "one-time · ₹5,000 AMC",
    perks: ["3–4 nights stay per year", "Domestic destinations", "Member-only fares", "24/7 concierge access"],
    style: "border-white/15",
  },
  {
    name: "Silver",
    tag: "The Explorer",
    price: "₹75,000",
    priceNote: "from · ₹7,500 AMC",
    perks: ["6 nights stay per year", "Domestic + selected international", "Priority booking window", "Tier savings up to 40%"],
    style: "border-white/25",
  },
  {
    name: "Gold",
    tag: "The Standard of Travel",
    price: "₹1.5L",
    priceNote: "from · ₹10,000 AMC",
    perks: ["7 nights / year, split allowed", "Global destinations access", "Family package (4–6 members)", "Tier savings up to 55%"],
    style: "border-gold/50",
    featured: true,
  },
  {
    name: "Platinum",
    tag: "The Inner Circle",
    price: "₹3L+",
    priceNote: "10–25 yr or lifetime validity",
    perks: ["Unlimited booking priority", "Luxury resorts & private villas", "VIP concierge & upgrades", "Tier savings up to 60%"],
    style: "border-champagne/60",
  },
];

export function Membership() {
  return (
    <section id="membership" className="relative py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.30_0.10_264/0.6),transparent_55%)]" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <div className="eyebrow mb-6 justify-center inline-flex">Membership</div>
          <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[1.05] max-w-[20ch] mx-auto">
            Not a plan. <span className="italic font-serif text-gold-gradient">A position.</span>
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-pearl/65 font-light">
            Five ways to belong. Each tier compounds savings, access, and care — with predictable pricing and lifetime privileges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.1 }}
              className={`group relative flex flex-col ${
                t.featured ? "lg:scale-[1.05] z-10" : "z-0"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] font-bold uppercase bg-gold-gradient text-navy px-5 py-2 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.6)] border border-white/20 whitespace-nowrap z-20">
                  Most Popular
                </div>
              )}
              <div className={`flex-1 flex flex-col glass-card p-8 md:p-10 border rounded-3xl hover:-translate-y-2 transition-all duration-700 ${t.style} ${
                t.featured ? "shadow-[0_0_60px_rgba(212,175,55,0.2)] bg-gradient-to-b from-gold/[0.12] to-transparent ring-2 ring-gold/40 border-gold/60" : "bg-white/[0.02] hover:bg-white/[0.04]"
              }`}>
                <div className="text-[10px] tracking-[0.4em] uppercase text-champagne/70">{t.tag}</div>
                <h3 className="font-display text-4xl mt-3">{t.name}</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-3xl text-gold-gradient">{t.price}</span>
              </div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-pearl/50 mt-1">{t.priceNote}</div>
              <div className="hairline my-6" />
              <ul className="space-y-3 mb-8">
                {t.perks.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-pearl/75 font-light">
                    <span className="text-gold mt-1.5 text-[8px]">◆</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
                <div className="mt-auto pt-8">
                  <button className={`w-full justify-center text-[10px] tracking-[0.3em] uppercase py-3 rounded-xl transition-all ${t.featured ? 'bg-gold-gradient text-navy font-bold shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]' : 'border border-white/20 text-pearl hover:bg-white/10'}`}>Request Invitation</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subscription strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="glass-card p-8 md:p-10 mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-gold/30"
        >
          <div>
            <div className="text-[10px] tracking-[0.4em] uppercase text-champagne/80 mb-2">New · Monthly Subscription</div>
            <h3 className="font-display text-2xl md:text-3xl">
              From <span className="text-gold-gradient">₹2,999 / month</span> — travel credits accrued, redeemed anywhere.
            </h3>
            <p className="text-sm text-pearl/65 font-light mt-2 max-w-2xl">
              Designed for the modern traveler. Earn credits monthly, carry them forward, redeem against any membership journey.
            </p>
          </div>
          <button className="btn-gold whitespace-nowrap">
            Start Subscription
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
          </button>
        </motion.div>

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
                The most discreet stratum of travel society. Anonymous bookings, private aviation allowance, residential keys in twelve cities,
                and a single concierge line — answered on the first ring, anywhere in the world.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="btn-gold">Request Elite Pass</button>
                <span className="text-[10px] tracking-[0.4em] uppercase text-pearl/40 self-center">By referral · Vetted</span>
              </div>
            </div>
            <div className="relative aspect-square max-w-sm mx-auto w-full">
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
