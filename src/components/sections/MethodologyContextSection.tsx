import { Flag, Users, FileText, Lightbulb } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const cardIcons = [Flag, Users, FileText] as const;

const MethodologyContextSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
  const mc = t.methodologyContext;

  return (
    <section id="methodology-context" className="py-24 md:py-32 section-padding bg-background">
      <div ref={ref} className="max-w-5xl mx-auto">

        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="text-sm font-semibold text-muted-foreground tracking-widest uppercase mb-4">
            {mc.tag}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
            {mc.headline}
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {mc.intro}
          </p>
        </div>

        {/* Differentiator cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {mc.differentiators.map((d, i) => {
            const Icon = cardIcons[i];
            return (
              <div
                key={i}
                className={`bg-card rounded-xl p-6 border border-border shadow-sm
                  hover:shadow-md hover:-translate-y-1 transition-all duration-700
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${200 + i * 120}ms` }}
              >
                {/* Card header */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-bold text-foreground tracking-wide">
                    {d.dimension}
                  </span>
                </div>

                {/* Traditional row */}
                <div className="space-y-3">
                  <div className="rounded-lg bg-muted/50 px-4 py-3">
                    <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-1">
                      {mc.labelTraditional}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {d.traditional}
                    </p>
                  </div>

                  {/* ADWB row */}
                  <div className="rounded-lg bg-secondary/60 px-4 py-3">
                    <p className="text-[10px] font-semibold text-primary uppercase tracking-widest mb-1">
                      {mc.labelAdwb}
                    </p>
                    <p className="text-sm text-foreground font-medium leading-relaxed">
                      {d.adwb}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Honest positioning callout */}
        <div
          className={`transition-all duration-700
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "580ms" }}
        >
          <div className="border-l-4 border-primary bg-card rounded-r-xl px-6 py-5 shadow-sm">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                {mc.honestPositioning}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MethodologyContextSection;
