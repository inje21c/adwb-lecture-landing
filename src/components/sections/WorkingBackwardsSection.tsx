import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const WorkingBackwardsSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
  const wb = t.workingBackwards;

  return (
    <section id="working-backwards" className="py-24 md:py-32 section-padding bg-secondary/40">
      <div ref={ref} className="max-w-5xl mx-auto">

        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="text-sm font-semibold text-muted-foreground tracking-widest uppercase mb-4">
            {wb.tag}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
            {wb.headline}
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-3">
            {wb.origin}
          </p>
          <p className="text-base text-foreground/80 max-w-2xl mx-auto leading-relaxed mb-6">
            {wb.description}
          </p>
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            {wb.corePrinciple}
          </div>
        </div>

        {/* 3 Core Steps */}
        <div
          className={`grid md:grid-cols-3 gap-6 mb-12 transition-all duration-700 delay-200
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {wb.steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Arrow connector — desktop only */}
              {i < wb.steps.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10
                  w-6 h-6 bg-secondary rounded-full items-center justify-center border border-border">
                  <ArrowDown className="w-3 h-3 text-muted-foreground -rotate-90" />
                </div>
              )}

              <div
                className={`bg-card rounded-xl p-6 border border-border shadow-sm
                  hover:shadow-md hover:-translate-y-1 transition-all duration-500 h-full
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${300 + i * 120}ms` }}
              >
                <span className="text-4xl font-extrabold text-primary/15 font-inter block mb-3 leading-none">
                  {step.num}
                </span>
                <h3 className="font-bold text-foreground mb-2">{step.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bridge: WB → ADWB */}
        <div
          className={`transition-all duration-700
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "650ms" }}
        >
          <div className="border-l-4 border-primary bg-card rounded-r-xl px-6 py-5 shadow-sm">
            <div className="flex items-start gap-3">
              <ArrowDown className="w-5 h-5 text-primary mt-0.5 shrink-0 rotate-90" />
              <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                {wb.connection}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkingBackwardsSection;
