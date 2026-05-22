import logo from "@/assets/logo.jpg";

export function Footer() {
  return (
    <footer id="contact" className="relative pt-16 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,oklch(0.28_0.10_264/0.6),transparent_55%)]" />
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
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
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3.5 text-pearl placeholder:text-pearl/50 focus:outline-none focus:border-gold/50 focus:bg-black/40 focus:ring-1 focus:ring-gold/30 transition-all font-light text-base"
                />
              </div>
            ))}
            <div>
              <label className="block text-[10px] tracking-[0.4em] uppercase text-champagne/70 mb-2">Intention</label>
              <textarea
                rows={3}
                placeholder="Where would you like to begin?"
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3.5 text-pearl placeholder:text-pearl/50 focus:outline-none focus:border-gold/50 focus:bg-black/40 focus:ring-1 focus:ring-gold/30 transition-all font-light resize-none text-base"
              />
            </div>
            <button type="submit" className="btn-gold w-full justify-center mt-4">Submit Application</button>
          </form>
        </div>

        <div className="hairline mb-16" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <img src={logo} alt="Winbal Logo" className="h-14 w-auto object-contain rounded drop-shadow-lg opacity-90 mb-6" />
            <p className="text-sm text-pearl/60 font-light leading-relaxed pr-4">
              Exclusive travel memberships offering luxury holidays, rare destinations, and lifetime experiences — by invitation only.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-champagne/80 mb-6 font-bold">Contact</h4>
            <ul className="space-y-4 text-sm text-pearl/70 font-light">
              <li><a href="mailto:winbaltechmd@gmail.com" className="hover:text-champagne transition-colors">winbaltechmd@gmail.com</a></li>
              <li>+91 8143336440</li>
              <li><a href="https://winbaltravelclub.com" target="_blank" rel="noreferrer" className="hover:text-champagne transition-colors">winbaltravelclub.com</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-champagne/80 mb-6 font-bold">Offices</h4>
            <ul className="space-y-4 text-sm text-pearl/70 font-light">
              <li>London — Mayfair</li>
              <li>Dubai — DIFC</li>
              <li>Singapore — Marina Bay</li>
              <li>Zürich — Paradeplatz</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-champagne/80 mb-6 font-bold">Legal</h4>
            <ul className="space-y-4 text-sm text-pearl/70 font-light">
              <li><a href="#" className="hover:text-champagne transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-champagne transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-champagne transition-colors">Membership Rules</a></li>
            </ul>
          </div>
        </div>

        <div className="hairline mb-8" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 text-[10px] tracking-[0.3em] uppercase text-pearl/40">
          <div>© 2026 Winbal Travel Club. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-champagne transition-colors">Instagram</a>
            <a href="#" className="hover:text-champagne transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
