import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-navy overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '48px 48px'
      }} />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <p className="text-sky font-inter text-sm tracking-[0.2em] uppercase mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          {t.hero.tag}
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          {t.hero.headline}
          <br />
          <span className="text-sky">{t.hero.highlight}</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-12 opacity-0 animate-fade-up leading-relaxed" style={{ animationDelay: '0.5s' }}>
          {t.hero.subhead}
          <br className="hidden sm:block" />
          {t.hero.subheadCont}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up" style={{ animationDelay: '0.7s' }}>
          <Button variant="hero" size="lg" className="text-base px-8 py-6" onClick={() => scrollTo("problem")}>
            {t.hero.ctaPrimary}
          </Button>
          <Button variant="ghost" size="lg" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 py-6 border border-primary-foreground/20" onClick={() => scrollTo("cta")}>
            {t.hero.ctaSecondary}
          </Button>
        </div>
      </div>

      <button
        onClick={() => scrollTo("problem")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors animate-bounce"
        aria-label={t.hero.scrollLabel}
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default HeroSection;
