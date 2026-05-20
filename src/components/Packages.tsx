import { motion } from "framer-motion";
import leisure from "@/assets/package-leisure.jpg";
import adventure from "@/assets/package-adventure.jpg";
import family from "@/assets/package-family.jpg";
import corporate from "@/assets/package-corporate.jpg";

const packages = [
  {
    img: leisure,
    tag: "Leisure",
    title: "Honeymoon & Retreat",
    places: "Maldives · Bali · Goa · Santorini",
    note: "Overwater villas, private islands, and slow mornings designed for two.",
  },
  {
    img: adventure,
    tag: "Adventure",
    title: "Summit & Wild",
    places: "Aspen · Patagonia · Wadi Rum · Iceland",
    note: "Heli-skiing, wildlife expeditions and curated trekking with private guides.",
  },
  {
    img: family,
    tag: "Family",
    title: "Generations",
    places: "Maldives · Phuket · Tuscany · Mauritius",
    note: "Family villas, kids' programmes and chefs who cook for everyone at the table.",
  },
  {
    img: corporate,
    tag: "Bleisure",
    title: "Executive & Corporate",
    places: "Singapore · Dubai · Zurich · New York",
    note: "Business itineraries layered with restorative escapes — for the modern executive.",
  },
];

export function Packages() {
  return (
    <section id="packages" className="relative py-32 md:py-48">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div>
            <div className="eyebrow mb-6">Curated Packages</div>
            <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[1.05] max-w-[16ch]">
              Journeys tailored to <span className="italic font-serif text-gold-gradient">how you travel</span>.
            </h2>
          </div>
          <p className="max-w-md text-pearl/65 leading-relaxed font-light">
            Four distinct collections — leisure, adventure, family, and bleisure — each priced at member rates with EMI, early-booking
            advantages, and referral rewards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {packages.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: (i % 2) * 0.12, ease: [0.2, 0.7, 0.2, 1] }}
              className="group relative overflow-hidden glass-card aspect-[4/3] cursor-pointer"
            >
              <img
                src={p.img}
                alt={p.title}
                width={1280}
                height={960}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/60 to-black/20 group-hover:from-navy group-hover:via-navy/80 transition-colors duration-700" />
              <div className="absolute top-6 left-6 right-6 flex justify-between items-center text-[10px] tracking-[0.4em] uppercase drop-shadow-md z-10">
                <span className="text-champagne font-semibold">{p.tag}</span>
                <span className="text-pearl/80 font-medium">0{i + 1}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 drop-shadow-lg z-10">
                <h3 className="font-display text-3xl md:text-4xl text-pearl mb-2 drop-shadow-xl">{p.title}</h3>
                <div className="text-xs text-champagne font-medium tracking-[0.2em] uppercase mb-4 drop-shadow-md">{p.places}</div>
                <div className="hairline mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-white/30" />
                <p className="text-sm text-pearl/90 font-light leading-relaxed max-w-md transition-all duration-700 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 drop-shadow-md">
                  {p.note}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Smart pricing strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/10">
          {[
            { k: "Member vs Non-Member", v: "Up to 60% lower" },
            { k: "EMI Available", v: "0% on Gold+ tiers" },
            { k: "Early-Booking", v: "Extra 10% rebate" },
            { k: "Referral Cashback", v: "₹15,000 / referral" },
          ].map((s) => (
            <div key={s.k} className="bg-navy/70 backdrop-blur-md py-6 px-6">
              <div className="text-[10px] tracking-[0.4em] uppercase text-champagne/70 mb-2">{s.k}</div>
              <div className="font-display text-xl text-gold-gradient">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
