import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const { lang, t, toggle } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`font-bold text-lg font-inter transition-colors ${scrolled ? 'text-primary' : 'text-primary-foreground'}`}>
          ADWB
        </button>

        {/* Desktop nav + lang toggle */}
        <div className="hidden md:flex items-center gap-8">
          {t.nav.items.map(item => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className={`text-sm font-medium transition-colors hover:opacity-100 ${scrolled ? 'text-foreground/70 hover:text-foreground' : 'text-primary-foreground/70 hover:text-primary-foreground'}`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={toggle}
            className={`text-xs font-semibold font-inter px-2.5 py-1 rounded border transition-colors ${
              scrolled
                ? 'border-border text-foreground/70 hover:text-foreground'
                : 'border-primary-foreground/30 text-primary-foreground/70 hover:text-primary-foreground'
            }`}
          >
            {lang === "ko" ? "EN" : "KR"}
          </button>
        </div>

        {/* Mobile: lang toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggle}
            className={`text-xs font-semibold font-inter px-2 py-1 rounded border transition-colors ${
              scrolled
                ? 'border-border text-foreground/70'
                : 'border-primary-foreground/30 text-primary-foreground/70'
            }`}
          >
            {lang === "ko" ? "EN" : "KR"}
          </button>
          <button
            className="flex flex-col gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={t.nav.menuLabel}
          >
            {[0,1,2].map(i => (
              <span key={i} className={`block w-5 h-0.5 transition-all ${scrolled ? 'bg-foreground' : 'bg-primary-foreground'}`} />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          {t.nav.items.map(item => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="block w-full text-left px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
