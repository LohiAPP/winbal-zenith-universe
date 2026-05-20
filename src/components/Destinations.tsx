import { motion } from "framer-motion";
import island from "@/assets/destination-island.jpg";
import alps from "@/assets/destination-alps.jpg";
import desert from "@/assets/destination-desert.jpg";

const destinations = [
  { img: island, name: "Maldives Atoll", region: "Private Island", code: "01", note: "Overwater villas reachable only by member yacht." },
  { img: alps, name: "Aspen Reserve", region: "Alpine Penthouse", code: "02", note: "Helicopter-access chalets at 3,400m elevation." },
  { img: desert, name: "Wadi Rum Palace", region: "Desert Sanctuary", code: "03", note: "Restored royal residence under the starlit Nefud." },
];

export function Destinations() {
  return (
    <section id="destinations" className="relative py-12 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div>
            <div className="eyebrow mb-6">Member Destinations</div>
            <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[1.05] max-w-[14ch]">
              Places that <span className="italic font-serif text-gold-gradient">refuse</span> ordinary guests.
            </h2>
          </div>
          <p className="max-w-md text-pearl/65 leading-relaxed font-light">
            A discreet portfolio of 5,000 destinations — private islands, residences,
            heritage estates and unlisted retreats — opened by invitation alone.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {destinations.map((d, i) => (
            <motion.article
              key={d.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: i * 0.15, ease: [0.2, 0.7, 0.2, 1] }}
              className="group relative overflow-hidden glass-card aspect-[3/4] cursor-pointer"
            >
              <img
                src={d.img}
                alt={d.name}
                width={1280}
                height={1600}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-navy/40 mix-blend-multiply" />

              <div className="absolute top-6 left-6 right-6 flex justify-between items-start text-[10px] tracking-[0.4em] uppercase">
                <span className="text-champagne/80">{d.region}</span>
                <span className="text-pearl/40">{d.code}</span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-display text-2xl md:text-3xl text-pearl mb-2">{d.name}</h3>
                <div className="hairline mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <p className="text-sm text-pearl/70 font-light leading-relaxed transition-all duration-700 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  {d.note}
                </p>
                <div className="mt-5 text-[10px] tracking-[0.4em] uppercase text-gold flex items-center gap-2">
                  Reveal Access
                  <span className="inline-block transition-transform duration-500 group-hover:translate-x-2">→</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a href="#membership" className="btn-ghost">View the full portfolio</a>
        </div>
      </div>
    </section>
  );
}
