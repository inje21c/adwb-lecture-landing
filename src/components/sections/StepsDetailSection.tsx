import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { FileEdit, BarChart3, Palette, Layout, FileText, Send, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const stepIcons: Record<number, React.ElementType> = {
  1: FileEdit,
  2: BarChart3,
  3: Palette,
  4: Layout,
  5: FileText,
  6: Send,
};

const StepsDetailSection = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("12");
  const { ref, isVisible } = useScrollReveal();
  const activeArea = t.steps.areas.find(a => a.key === activeTab)!;

  return (
    <section id="steps" className="py-24 md:py-32 section-padding bg-background">
      <div ref={ref} className="max-w-5xl mx-auto">

        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-sm font-semibold text-muted-foreground tracking-widest uppercase mb-4">{t.steps.tag}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t.steps.headline}</h2>
        </div>

        {/* Tabs */}
        <div className={`flex flex-col sm:flex-row justify-center gap-3 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {t.steps.areas.map(area => (
            <button
              key={area.key}
              onClick={() => setActiveTab(area.key)}
              className={`px-5 py-3 rounded-xl text-left sm:text-center transition-all active:scale-[0.97] border ${
                activeTab === area.key
                  ? 'bg-primary text-primary-foreground shadow-md border-primary'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80 border-transparent'
              }`}
            >
              <span className="block text-xs font-semibold opacity-80 mb-0.5">{area.phaseRange}</span>
              <span className="block font-bold text-sm">{area.label}</span>
              <span className="block text-xs opacity-70 mt-0.5 italic">{area.subtitle}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>

          {/* Description */}
          <p className="text-center text-base text-muted-foreground italic mb-10 max-w-2xl mx-auto leading-relaxed">
            "{activeArea.description}"
          </p>

          {/* Phase cards — 2 per group */}
          <div className="grid sm:grid-cols-2 gap-5">
            {activeArea.steps.map((step) => {
              const Icon = stepIcons[step.num] ?? Target;
              return (
                <div
                  key={step.num}
                  className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-extrabold text-primary/20 font-inter leading-none">
                      {String(step.num).padStart(2, '0')}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="font-bold text-foreground mb-1.5">{step.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{step.purpose}</p>
                  <p className="text-xs text-muted-foreground/70 font-inter">{step.tool}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsDetailSection;
