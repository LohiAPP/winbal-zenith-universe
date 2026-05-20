import { motion } from "framer-motion";
import journey from "@/assets/howitworks-journey.jpg";

const steps = [
  { n: "01", t: "Choose Your Membership", d: "Select from Starter to Platinum — each tier curated to a different way of moving through the world." },
  { n: "02", t: "Receive Travel Credits", d: "Annual credits and points are issued, redeemable across 5,000+ destinations and resorts." },
  { n: "03", t: "Book Any Time", d: "Reserve flights, suites and villas at locked member rates — up to 18 months in advance." },
  { n: "04", t: "Arrive in Luxury", d: "Concierge, upgrades and transfers handled. You step off the plane into your story." },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={journey}
          alt="Aerial journey through golden forest at sunrise"
          loading="lazy"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/85 to-navy" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <div className="eyebrow mb-6 justify-center inline-flex">How It Works</div>
          <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[1.05] max-w-[18ch] mx-auto">
            Four steps. <span className="italic font-serif text-gold-gradient">A lifetime</span> of journeys.
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-pearl/65 font-light">
            A membership-and-credits system designed for flexibility, predictable pricing, and effortless travel.
          </p>
        </div>

        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="relative overflow-hidden bg-black/50 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10 hover:border-gold/40 hover:bg-black/70 hover:-translate-y-2 transition-all duration-700 shadow-2xl group"
            >
              <div className="absolute -right-4 -bottom-8 font-display text-[140px] leading-none text-white/[0.03] group-hover:text-gold/[0.05] transition-colors duration-700 pointer-events-none select-none">
                {s.n}
              </div>
              <div className="font-display text-4xl text-gold-gradient mb-8 drop-shadow-lg">{s.n}</div>
              <h3 className="font-display text-2xl text-pearl mb-4 group-hover:text-champagne transition-colors duration-500 relative z-10 drop-shadow-md">
                {s.t}
              </h3>
              <div className="h-px w-12 bg-gold/50 mb-6 group-hover:w-full transition-all duration-700 ease-out" />
              <p className="text-base text-pearl/90 font-light leading-relaxed relative z-10 drop-shadow-md">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
