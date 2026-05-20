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
  {
    img: corporate,
    tag: "Business",
    title: "Global Executive",
    places: "London · Tokyo · Frankfurt · Hong Kong",
    note: "Seamless corporate travel with dedicated account managers and premium transit.",
  },
  {
    img: family,
    tag: "Education",
    title: "Enrichment Journeys",
    places: "Oxford · Boston · Kyoto · Florence",
    note: "Curated academic and cultural immersion tours for the next generation.",
  },
];

export function Packages() {
  return (
    <section id="packages" className="relative py-12 md:py-20">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: (i % 2) * 0.12, ease: [0.2, 0.7, 0.2, 1] }}
              className="group relative overflow-hidden glass-card aspect-[4/5] md:aspect-[4/3] min-h-[380px] md:min-h-0 cursor-pointer"
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
              <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 md:p-10 pointer-events-none">
                <div className="flex justify-between items-center text-[10px] tracking-[0.4em] uppercase drop-shadow-md">
                  <span className="text-champagne font-semibold">{p.tag}</span>
                  <span className="text-pearl/80 font-medium">0{i + 1}</span>
                </div>
                <div className="drop-shadow-lg pointer-events-auto">
                  <h3 className="font-display text-3xl md:text-4xl text-pearl mb-2 drop-shadow-xl">{p.title}</h3>
                  <div className="text-xs text-champagne font-medium tracking-[0.2em] uppercase mb-4 drop-shadow-md">{p.places}</div>
                  <div className="hairline mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-white/30" />
                  <p className="text-sm text-pearl/90 font-light leading-relaxed max-w-md transition-all duration-700 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 drop-shadow-md">
                    {p.note}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Smart pricing strip */}
        <div className="mt-20 relative rounded-2xl md:rounded-[2rem] border border-gold/30 bg-black/40 backdrop-blur-xl shadow-[0_0_50px_rgba(212,175,55,0.15)] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gold/[0.02] via-gold/[0.08] to-gold/[0.02]" />
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gold/20 relative z-10">
            {[
              { k: "Member vs Non-Member", v: "Up to 60% lower" },
              { k: "EMI Available", v: "0% on Gold+ tiers" },
              { k: "Early-Booking", v: "Extra 10% rebate" },
              { k: "Referral Cashback", v: "₹15,000 / referral" },
            ].map((s) => (
              <div key={s.k} className="py-8 px-6 text-center group hover:bg-gold/[0.05] transition-colors duration-500">
                <div className="text-[10px] tracking-[0.4em] uppercase text-champagne mb-3 drop-shadow-md">{s.k}</div>
                <div className="font-display text-xl md:text-2xl text-gold-gradient drop-shadow-lg group-hover:scale-105 transition-transform duration-500">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
