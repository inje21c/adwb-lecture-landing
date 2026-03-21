import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Newspaper, ArrowRight, RefreshCw } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SolutionSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
  const steps = t.solution.pipelineSteps;

  return (
    <section id="solution" className="py-24 md:py-32 section-padding bg-secondary/40">
      <div ref={ref} className="max-w-6xl mx-auto">
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

        <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {/* Desktop */}
          <div className="hidden lg:flex items-center justify-center flex-wrap gap-2">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center" style={{ animationDelay: `${i * 80}ms` }}>
                <div className={`relative px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-500 ${
                  i === 8 || i === 9
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-background text-foreground shadow-sm border border-border'
                } ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                  style={{ transitionDelay: `${500 + i * 80}ms` }}
                >
                  <span className="text-[10px] text-muted-foreground block leading-none mb-0.5 font-inter">{i + 1}</span>
                  {step}
                  {(i === 8 || i === 9) && (
                    <RefreshCw className="absolute -top-2 -right-2 w-4 h-4 text-primary-foreground bg-primary rounded-full p-0.5" />
                  )}
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-muted-foreground mx-1 shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex flex-col items-center gap-3">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`w-full max-w-xs px-4 py-3 rounded-lg text-sm font-medium text-center transition-all duration-500 ${
                  i === 8 || i === 9
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-background text-foreground shadow-sm border border-border'
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${500 + i * 60}ms` }}
              >
                <span className="text-xs text-muted-foreground font-inter mr-2">{i + 1}</span>
                {step}
                {(i === 8 || i === 9) && <RefreshCw className="inline w-3.5 h-3.5 ml-2" />}
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            {t.solution.repeatNote}<span className="font-semibold text-primary">{t.solution.repeatHighlight}</span>{t.solution.repeatSuffix}<br/>
            {t.solution.repeatEngine}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
