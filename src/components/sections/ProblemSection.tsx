import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { AlertTriangle, FileText, Users, TrendingDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [FileText, TrendingDown, Users, AlertTriangle];
const widths = ["w-full", "w-[70%]", "w-[40%]"];
const colors = ["bg-primary", "bg-navy-light", "bg-muted-foreground"];

const ProblemSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="problem" className="py-24 md:py-32 section-padding bg-background">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <p className="text-sm font-semibold text-muted-foreground tracking-widest uppercase mb-4">{t.problem.tag}</p>
            <div className="text-8xl md:text-9xl font-extrabold text-primary/10 leading-none select-none">80%</div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-4 leading-snug">
              {t.problem.headlinePre}
              <br className="hidden md:block" />
              <span className="text-primary">{t.problem.headlineHighlight}</span>{t.problem.headlinePost}
            </h2>
          </div>

          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed mb-8">
              {t.problem.narratives.map((text, i) => (
                <p key={i} className={i === t.problem.narratives.length - 1 ? "font-medium text-foreground/70" : undefined}>
                  {text.split("\n").map((line, j) => (
                    <span key={j}>{j > 0 && <br/>}{line}</span>
                  ))}
                </p>
              ))}
            </div>
            <div className="space-y-0">
              {t.problem.distortion.map((step, i) => (
                <div key={i} className="flex items-center gap-4 py-3">
                  <div className="w-24 text-sm font-medium text-foreground shrink-0">{step.label}</div>
                  <div className="flex-1 bg-muted rounded-full h-8 overflow-hidden">
                    <div className={`h-full ${colors[i]} rounded-full flex items-center justify-end pr-3 transition-all duration-1000 ${isVisible ? widths[i] : 'w-0'}`}>
                      <span className="text-xs font-semibold text-primary-foreground">{step.pct}</span>
                    </div>
                  </div>
                </div>
              ))}
              <p className="text-sm text-muted-foreground mt-4 pl-28">{t.problem.distortionNote}</p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.problem.painPoints.map((point, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className={`bg-muted/50 rounded-lg p-6 transition-all duration-700 hover:shadow-md hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${400 + i * 100}ms` }}
              >
                <Icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="font-semibold text-foreground mb-2">{point.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{point.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
