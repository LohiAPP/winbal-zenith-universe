import { motion } from "framer-motion";
import luxuryImage from "@/assets/luxury-experience.png";

const features = [
  { icon: "🌍", title: "5000+ Destinations Worldwide", desc: "Access the most exclusive locations globally." },
  { icon: "🏨", title: "Premium Hotels & Resorts", desc: "Curated selection of 5-star properties." },
  { icon: "💰", title: "Save up to 60% on Travel Costs", desc: "Unmatched value and exclusive member rates." },
  { icon: "📅", title: "Flexible Travel Plans", desc: "Adaptable itineraries designed around you." },
  { icon: "🎯", title: "Personalized Travel Planning", desc: "Tailored journeys matching your exact taste." },
  { icon: "📞", title: "24/7 Concierge Support", desc: "Round-the-clock elite assistance anywhere." },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden bg-navy">
      {/* Subtle Background Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--gold)_0%,transparent_15%)] opacity-10 blur-[100px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.26_0.10_264/0.2),transparent_50%)]" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left: Luxury Image Display */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
              className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={luxuryImage}
                alt="Super luxury travel experience"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
            </motion.div>
            
            {/* Floating Glassmorphic Accent */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -bottom-8 -right-8 bg-black/60 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] hidden md:block max-w-[260px]"
            >
              <div className="text-gold-gradient font-display text-5xl mb-2">24/7</div>
              <div className="text-pearl/80 text-xs tracking-[0.2em] uppercase leading-relaxed">Dedicated Global Concierge</div>
            </motion.div>
          </div>

          {/* Right: Content & Features */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="eyebrow mb-6"
            >
              <span className="mr-2 text-champagne">🌟</span> Why Choose Winbal Travel Club
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 }}
              className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] mb-8 text-pearl"
            >
              The Ultimate <br />
              <span className="text-gold-gradient italic font-serif">Travel Privilege.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-pearl/70 text-lg font-light leading-relaxed mb-12 max-w-2xl"
            >
              Travel clubs simplify planning, offer cost-effective travel, and provide shared experiences for members.
              Members enjoy discounts, personalized services, and exclusive deals that create long-term value.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                  className="flex gap-5 group cursor-default"
                >
                  <div className="flex-shrink-0 mt-1 w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:bg-champagne/[0.08] group-hover:border-champagne/30 transition-all duration-500 shadow-inner">
                    <span className="text-xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-pearl text-lg mb-1.5 group-hover:text-champagne transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-pearl/50 font-light leading-relaxed group-hover:text-pearl/70 transition-colors duration-300">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
