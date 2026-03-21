import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { X, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const BeforeAfterSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="comparison" className="py-24 md:py-32 section-padding bg-background">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-sm font-semibold text-muted-foreground tracking-widest uppercase mb-4">{t.comparison.tag}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t.comparison.headline}</h2>
        </div>

        <div className={`overflow-x-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left p-4 font-semibold text-muted-foreground">{t.comparison.colLabel}</th>
                <th className="text-left p-4 font-semibold text-muted-foreground bg-muted/50 rounded-tl-lg">
                  <div className="flex items-center gap-2">
                    <X className="w-4 h-4 text-destructive" /> {t.comparison.colBefore}
                  </div>
                </th>
                <th className="text-left p-4 font-semibold text-primary bg-secondary rounded-tr-lg">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" /> {t.comparison.colAfter}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {t.comparison.rows.map((row, i) => (
                <tr key={i} className="border-t border-border">
                  <td className="p-4 font-medium text-foreground">{row.label}</td>
                  <td className="p-4 text-muted-foreground bg-muted/30">{row.before}</td>
                  <td className="p-4 text-primary font-medium bg-secondary/50">{row.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
