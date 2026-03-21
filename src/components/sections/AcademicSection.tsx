import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Star, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const starCounts = [5, 4, 4, 5, 4];

const AcademicSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="academic" className="py-24 md:py-32 section-padding bg-secondary/40">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-sm font-semibold text-muted-foreground tracking-widest uppercase mb-4">{t.academic.tag}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t.academic.headline}</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.academic.references.map((ref_item, i) => (
            <div
              key={i}
              className={`bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-700 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold text-primary">{ref_item.source}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">{ref_item.author}</p>
              <p className="text-sm text-foreground leading-relaxed mb-3">{ref_item.summary}</p>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className={`w-3.5 h-3.5 ${s < starCounts[i] ? 'text-primary fill-primary' : 'text-border'}`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicSection;
