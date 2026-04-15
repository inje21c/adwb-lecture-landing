import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";
import { GraduationCap, Package, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ContactFormDialog from "@/components/ContactFormDialog";

const cardIcons = [GraduationCap, Package, Users];

const CTASection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
  const [formOpen, setFormOpen] = useState(false);

  return (
    <section id="cta" className="py-24 md:py-32 section-padding gradient-navy">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-sky/70 text-sm tracking-widest uppercase mb-4 font-semibold">{t.cta.tag}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">{t.cta.headline}</h2>
          <p className="text-primary-foreground/60 text-base max-w-xl mx-auto leading-relaxed">{t.cta.subtext}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {t.cta.cards.map((card, i) => {
            const Icon = cardIcons[i];
            return (
              <div
                key={i}
                className={`bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-8 transition-all duration-700 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${300 + i * 120}ms` }}
              >
                <Icon className="w-8 h-8 text-sky mb-4" strokeWidth={1.5} />
                <h3 className="font-bold text-primary-foreground text-lg mb-3">{card.title}</h3>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">{card.desc}</p>
              </div>
            );
          })}
        </div>

        <div className={`text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <Button variant="hero" size="lg" className="text-lg px-12 py-7" onClick={() => setFormOpen(true)}>{t.cta.button}</Button>
          <p className="text-sm text-primary-foreground/50 mt-4">{t.cta.contactNote}</p>
        </div>
      </div>

      <ContactFormDialog open={formOpen} onOpenChange={setFormOpen} />
    </section>
  );
};

export default CTASection;
