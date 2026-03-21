import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { RefreshCw, MessageSquare, Target, Code, Rocket, Eye, FileEdit, BarChart3, Palette, GitBranch, Server, FileCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const stepIcons: Record<number, React.ElementType> = {
  1: FileEdit, 2: BarChart3, 3: Palette, 4: Eye, 5: GitBranch, 6: Code,
  7: Rocket, 8: Server, 9: MessageSquare, 10: RefreshCw, 11: FileCheck, 12: Target,
};

const StepsDetailSection = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("A");
  const { ref, isVisible } = useScrollReveal();
  const activeArea = t.steps.areas.find(a => a.key === activeTab)!;

  return (
    <section id="steps" className="py-24 md:py-32 section-padding bg-background">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-sm font-semibold text-muted-foreground tracking-widest uppercase mb-4">{t.steps.tag}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t.steps.headline}</h2>
        </div>

        <div className={`flex justify-center gap-3 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {t.steps.areas.map(area => (
            <button
              key={area.key}
              onClick={() => setActiveTab(area.key)}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all active:scale-[0.97] ${
                activeTab === area.key
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <span className="block font-bold">{area.label}</span>
              <span className="block text-xs opacity-80 mt-0.5">{area.subtitle}</span>
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {activeArea.steps.map((step, i) => {
            const Icon = stepIcons[step.num] || Target;
            return (
              <div
                key={step.num}
                className={`bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-500 ${
                  (step.num === 9 || step.num === 10) ? 'ring-2 ring-primary/20' : ''
                }`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-extrabold text-primary/20 font-inter">{String(step.num).padStart(2, '0')}</span>
                    <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  {(step.num === 9 || step.num === 10) && (
                    <span className="text-[10px] bg-primary/10 text-primary px-2 py-1 rounded-full font-semibold flex items-center gap-1">
                      <RefreshCw className="w-3 h-3" /> {t.solution.iterateLabel}
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-foreground mb-1">{step.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{step.purpose}</p>
                <p className="text-xs text-muted-foreground/70 font-inter">{step.tool}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StepsDetailSection;
