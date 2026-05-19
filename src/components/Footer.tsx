export function Footer() {
  return (
    <footer id="contact" className="relative pt-32 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,oklch(0.28_0.10_264/0.6),transparent_55%)]" />
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <div className="eyebrow mb-6">Begin your application</div>
            <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.05]">
              The journey starts with <span className="italic font-serif text-gold-gradient">a single word.</span>
            </h2>
            <p className="mt-6 text-pearl/65 max-w-md font-light leading-relaxed">
              Tell us who you are. A member of the Winbal council will respond within 48 hours,
              in complete confidence.
            </p>
          </div>

          <form className="glass-card p-8 md:p-10 space-y-5" onSubmit={(e) => e.preventDefault()}>
            {[
              { l: "Full Name", t: "text", p: "Your name" },
              { l: "Email", t: "email", p: "you@private.com" },
              { l: "City", t: "text", p: "Where you live" },
            ].map((f) => (
              <div key={f.l}>
                <label className="block text-[10px] tracking-[0.4em] uppercase text-champagne/70 mb-2">{f.l}</label>
                <input
                  type={f.t}
                  placeholder={f.p}
                  className="w-full bg-transparent border-b border-white/15 py-3 text-pearl placeholder:text-pearl/30 focus:outline-none focus:border-gold transition-colors font-light"
                />
              </div>
            ))}
            <div>
              <label className="block text-[10px] tracking-[0.4em] uppercase text-champagne/70 mb-2">Intention</label>
              <textarea
                rows={3}
                placeholder="Where would you like to begin?"
                className="w-full bg-transparent border-b border-white/15 py-3 text-pearl placeholder:text-pearl/30 focus:outline-none focus:border-gold transition-colors font-light resize-none"
              />
            </div>
            <button type="submit" className="btn-gold w-full justify-center mt-4">Submit Application</button>
          </form>
        </div>

        <div className="hairline mb-10" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 text-[10px] tracking-[0.3em] uppercase text-pearl/40">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-gold-gradient flex items-center justify-center">
              <span className="font-display text-navy text-xs font-bold">W</span>
            </div>
            <span className="text-pearl/60">Winbal Travel Club</span>
            <span>·</span>
            <span>Est. MMXXVI</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-champagne transition-colors">Privacy</a>
            <a href="#" className="hover:text-champagne transition-colors">Terms</a>
            <a href="#" className="hover:text-champagne transition-colors">Press</a>
            <a href="#" className="hover:text-champagne transition-colors">Careers</a>
          </div>
          <div>London · Dubai · Singapore · Zürich</div>
        </div>
      </div>
    </footer>
  );
}
