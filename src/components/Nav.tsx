import { useEffect, useState } from "react";

const links = [
  { href: "#universe", label: "Universe" },
  { href: "#destinations", label: "Destinations" },
  { href: "#intelligence", label: "Intelligence" },
  { href: "#membership", label: "Membership" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 bg-navy/70 backdrop-blur-xl border-b border-white/5" : "py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-gold-gradient grain shadow-gold flex items-center justify-center">
              <span className="font-display text-navy text-sm font-bold">W</span>
            </div>
            <div className="absolute inset-0 rounded-full animate-pulse-gold" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-[15px] tracking-[0.28em] text-pearl">WINBAL</div>
            <div className="text-[9px] tracking-[0.5em] text-champagne/80 uppercase">Travel Club</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-[11px] tracking-[0.3em] uppercase text-pearl/70 hover:text-champagne transition-colors duration-300 group"
            >
              {l.label}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a href="#membership" className="hidden md:inline-flex btn-ghost py-2.5 px-5 text-[10px]">
          Become a Member
        </a>
      </div>
    </header>
  );
}
