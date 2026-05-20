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
    <section id="how" className="relative py-32 md:py-48 overflow-hidden">
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

        <div className="relative grid md:grid-cols-4 gap-px bg-white/5 border border-white/10">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className="relative bg-navy/80 backdrop-blur-md p-8 md:p-10 group hover:bg-royal/30 transition-colors duration-700"
            >
              <div className="font-display text-5xl text-gold-gradient mb-6">{s.n}</div>
              <h3 className="font-display text-xl md:text-2xl text-pearl mb-3 group-hover:text-champagne transition-colors duration-500">
                {s.t}
              </h3>
              <div className="hairline mb-4 opacity-50" />
              <p className="text-sm text-pearl/65 font-light leading-relaxed">{s.d}</p>
              <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-gold/40 group-hover:bg-champagne group-hover:shadow-gold transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
