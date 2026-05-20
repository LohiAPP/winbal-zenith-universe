import { motion } from "framer-motion";
import luxuryImage from "@/assets/luxury-experience.png";

const features = [
  {
    icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />,
    title: "5000+ Destinations Worldwide",
    desc: "Unrestricted access to the most exclusive, hidden locations globally.",
  },
  {
    icon: <path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4M9 7h6M9 11h6M9 15h6" />,
    title: "Premium Hotels & Resorts",
    desc: "A strictly curated selection of elite 5-star properties and private villas.",
  },
  {
    icon: <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />,
    title: "Save up to 60% on Travel",
    desc: "Unmatched value and exclusive member-only pricing strategies.",
  },
  {
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    title: "Flexible Travel Plans",
    desc: "Adaptable itineraries expertly designed around your changing schedule.",
  },
  {
    icon: <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 8v4l3 3" />,
    title: "24/7 Concierge Support",
    desc: "Round-the-clock elite assistance, anywhere in the world.",
  },
  {
    icon: <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />,
    title: "Personalized Planning",
    desc: "Tailored journeys matching your exact taste, preferences, and desires.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden bg-navy">
      {/* Dramatic Luxury Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.26_0.10_264/0.4),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--gold)_0%,transparent_15%)] opacity-[0.03] blur-[120px]" />
      
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow mb-6 inline-flex"
          >
            Why Choose Winbal Travel Club
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-[1.05] text-pearl max-w-[20ch] drop-shadow-xl"
          >
            The Ultimate <br className="hidden md:block" />
            <span className="text-gold-gradient italic font-serif">Travel Privilege.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-pearl/60 text-lg md:text-xl font-light leading-relaxed mt-8 max-w-2xl"
          >
            Travel clubs simplify planning, offer cost-effective travel, and provide shared experiences. Members enjoy unrivaled discounts and personalized services that create long-term value.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left: Interactive Premium Feature Cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6 order-2 lg:order-1">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group relative bg-white/[0.015] border border-white/5 p-8 rounded-[2rem] hover:bg-gold/[0.04] hover:border-gold/30 transition-all duration-700 overflow-hidden shadow-lg"
              >
                {/* Internal Card Glow on Hover */}
                <div className="absolute -inset-20 bg-gold/10 opacity-0 group-hover:opacity-100 blur-[60px] transition-opacity duration-700 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center mb-6 text-gold shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-500">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      {feature.icon}
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl text-pearl mb-3 group-hover:text-champagne transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-pearl/50 font-light leading-relaxed group-hover:text-pearl/80 transition-colors duration-300 mt-auto">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Stunning Image Panel */}
          <div className="lg:col-span-5 relative order-1 lg:order-2 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
              className="relative aspect-[4/5] w-full rounded-[2.5rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)] border border-white/10 group cursor-pointer"
            >
              <img
                src={luxuryImage}
                alt="Super luxury travel experience"
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent opacity-80" />
              
              {/* Floating Stat Badge */}
              <div className="absolute bottom-8 left-8 right-8 bg-black/60 backdrop-blur-2xl p-6 rounded-3xl border border-white/10 shadow-2xl transition-transform duration-700 group-hover:-translate-y-2">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-gold-gradient flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                    <svg className="w-7 h-7 text-navy" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-pearl font-display text-2xl drop-shadow-md">Elite Standard</div>
                    <div className="text-champagne/80 text-[10px] tracking-[0.2em] uppercase mt-1">Recognized Globally</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
