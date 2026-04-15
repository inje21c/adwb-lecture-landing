import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Newspaper } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SolutionSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
  const phases = t.solution.phases;

  return (
    <section id="solution" className="py-24 md:py-32 section-padding bg-secondary/40">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-sm font-semibold text-muted-foreground tracking-widest uppercase mb-4">{t.solution.tag}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-snug">
            {t.solution.headline}
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Newspaper className="w-5 h-5 text-primary" />
            <p className="text-lg text-muted-foreground italic">{t.solution.quote}</p>
          </div>
          <p className="text-xl font-semibold text-primary mb-6">{t.solution.aiIntro}</p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            <span className="font-semibold text-foreground">{t.solution.descTitle}</span><br/>
            {t.solution.descLines.map((line, i) => (
              <span key={i}>{line}<br/></span>
            ))}
          </p>
        </div>

        {/* 6-Phase Grid */}
        <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {phases.map((phase, i) => (
              <div
                key={i}
                className={`relative rounded-xl p-5 border bg-background border-border shadow-sm transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${500 + i * 100}ms` }}
              >
                {/* Phase badge */}
                <div className="inline-flex items-center gap-1 bg-primary/10 text-primary text-xs font-bold px-2.5 py-1 rounded-full mb-3">
                  Phase {phase.phase}
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-foreground mb-1.5">{phase.title}</h3>

                {/* Tool */}
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{phase.tool}</p>

                {/* Tag chip */}
                <span className="inline-block text-xs bg-secondary text-secondary-foreground px-2.5 py-0.5 rounded-full font-medium border border-border">
                  {phase.tag}
                </span>
              </div>
            ))}
          </div>

          {/* Summary */}
          <p className="text-center text-sm font-medium text-muted-foreground mt-8">
            {t.solution.summary}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
