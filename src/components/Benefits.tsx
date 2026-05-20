import { motion } from "framer-motion";

const groups = [
  {
    tag: "Travel",
    title: "On the move",
    items: ["Discounted flights & hotels", "Global resort access", "Free holiday nights", "Priority airport lounges"],
  },
  {
    tag: "Lifestyle",
    title: "Off the itinerary",
    items: ["Spa & wellness privileges", "Dining at member tables", "Private event invitations", "Fashion & retail partners"],
  },
  {
    tag: "Security",
    title: "Always cared for",
    items: ["24/7 emergency assistance", "Global medical support", "Travel insurance guidance", "Geopolitical risk monitoring"],
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="relative py-32 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <div className="eyebrow mb-6 justify-center inline-flex">Member Benefits</div>
          <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[1.05] max-w-[18ch] mx-auto">
            Privileges that extend <span className="italic font-serif text-gold-gradient">beyond the journey</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {groups.map((g, i) => (
            <motion.div
              key={g.tag}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: i * 0.12 }}
              className="glass-card p-10 group hover:-translate-y-1 transition-transform duration-700"
            >
              <div className="text-[10px] tracking-[0.4em] uppercase text-champagne/70 mb-3">{g.tag}</div>
              <h3 className="font-display text-2xl md:text-3xl mb-6 text-pearl group-hover:text-gold-gradient transition-colors">
                {g.title}
              </h3>
              <div className="hairline mb-6" />
              <ul className="space-y-3">
                {g.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm text-pearl/70 font-light">
                    <span className="text-gold mt-1.5 text-[8px]">◆</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
