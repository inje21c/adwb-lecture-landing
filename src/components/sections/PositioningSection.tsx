import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useLanguage } from "@/contexts/LanguageContext";

const PositioningSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="positioning" className="py-24 md:py-32 section-padding bg-secondary/40">
      <div ref={ref} className="max-w-3xl mx-auto text-center">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-sm font-semibold text-muted-foreground tracking-widest uppercase mb-4">{t.positioning.tag}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">{t.positioning.headline}</h2>
          <blockquote className="text-xl md:text-2xl leading-relaxed text-foreground/80 mb-8 space-y-4">
            <p>{t.positioning.quote1}</p>
            <p>
              {t.positioning.quote2Pre}
              <span className="text-primary font-semibold">{t.positioning.quote2Highlight}</span>
              {t.positioning.quote2Mid}
              <span className="text-primary font-bold">{t.positioning.quote2Bold}</span>
              {t.positioning.quote2End}
            </p>
          </blockquote>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />
          <p className="text-2xl md:text-3xl font-bold text-primary">{t.positioning.tagline}</p>
        </div>
      </div>
    </section>
  );
};

export default PositioningSection;
