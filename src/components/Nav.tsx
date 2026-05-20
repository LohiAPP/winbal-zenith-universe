import { useEffect, useState } from "react";
import logo from "@/assets/logo.jpg";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#universe", label: "Universe" },
  { href: "#how", label: "How It Works" },
  { href: "#packages", label: "Packages" },
  { href: "#destinations", label: "Destinations" },
  { href: "#membership", label: "Membership" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3 bg-navy/80 backdrop-blur-xl border-b border-white/5 shadow-xl" : "py-6"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#top" className="flex items-center group">
            <img src={logo} alt="Winbal Travel Club Logo" className="h-10 md:h-12 w-auto object-contain rounded drop-shadow-xl opacity-90 group-hover:opacity-100 transition-opacity" />
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

          <div className="flex items-center gap-4">
            <a href="#membership" className="hidden md:inline-flex btn-ghost py-2.5 px-5 text-[10px]">
              Become a Member
            </a>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-pearl/70 hover:text-champagne focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                {menuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-navy/95 backdrop-blur-3xl pt-32 px-6 flex flex-col lg:hidden border-b border-white/10 shadow-2xl"
          >
            <nav className="flex flex-col gap-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-3xl text-pearl/80 hover:text-champagne transition-colors border-b border-white/5 pb-4"
                >
                  {l.label}
                </a>
              ))}
              <a 
                href="#membership" 
                onClick={() => setMenuOpen(false)}
                className="btn-gold justify-center mt-6 py-4 text-xs"
              >
                Become a Member
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
