import { motion } from "framer-motion";
import leisureImg from "@/assets/package-leisure.jpg";
import adventureImg from "@/assets/package-adventure.jpg";
import familyImg from "@/assets/package-family.jpg";
import corporateImg from "@/assets/package-corporate.jpg";

const structure = [
  {
    icon: "🏝",
    title: "Leisure Packages",
    desc: "Goa, Maldives, Bali & Honeymoon Escapes.",
    img: leisureImg,
  },
  {
    icon: "🏔",
    title: "Adventure Packages",
    desc: "Trekking, Skiing & Wildlife Tours.",
    img: adventureImg,
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family Packages",
    desc: "Premium Resorts & Kids-friendly stays.",
    img: familyImg,
  },
  {
    icon: "💼",
    title: "Corporate Travel",
    desc: "Business & Leisure (Bleisure).",
    img: corporateImg,
  },
];

export function PackageStructure() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-navy">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.26_0.10_264/0.25),transparent_70%)]" />
      
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="eyebrow mb-6"
            >
              <span className="mr-2 text-champagne">🔹</span> Travel Structure
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 }}
              className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] text-pearl max-w-[16ch]"
            >
              Travel Packages <br />
              <span className="text-gold-gradient italic font-serif">Structure.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-md p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex gap-4 items-start shadow-lg backdrop-blur-sm"
          >
            <span className="text-xl mt-0.5">👉</span>
            <p className="text-sm md:text-base text-pearl/80 font-light leading-relaxed">
              Modern travelers demand flexible experiences like adventure, luxury, and business-leisure travel. Our structure is built to cater to these evolving demands.
            </p>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {structure.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/5 hover:border-gold/30 hover:bg-white/[0.04] transition-all duration-500 shadow-xl"
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute bottom-4 left-5 text-3xl drop-shadow-lg group-hover:-translate-y-1 transition-transform duration-500">
                  {item.icon}
                </div>
              </div>
              
              <div className="p-6 pt-5">
                <h3 className="font-display text-2xl text-pearl mb-3 group-hover:text-champagne transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-pearl/60 font-light leading-relaxed group-hover:text-pearl/80 transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
