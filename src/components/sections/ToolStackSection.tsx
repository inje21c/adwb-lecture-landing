import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { MessageSquare, Palette, Eye, GitBranch, Code, Rocket, Server } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const toolMeta = [
  { icon: MessageSquare, name: "ChatGPT, Claude" },
  { icon: Palette, name: "Behance, Dribbble" },
  { icon: Eye, name: "Lovable" },
  { icon: GitBranch, name: "GitHub" },
  { icon: Code, name: "Claude Code, Codex" },
  { icon: Rocket, name: "Firebase" },
  { icon: Server, name: "AWS EC2" },
];

const ToolStackSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="tools" className="py-24 md:py-32 section-padding bg-background">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-sm font-semibold text-muted-foreground tracking-widest uppercase mb-4">{t.tools.tag}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t.tools.headline}</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {toolMeta.map((tool, i) => (
            <div
              key={i}
              className={`bg-muted/30 rounded-xl p-6 text-center hover:bg-muted/60 transition-all duration-700 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${300 + i * 80}ms` }}
            >
              <tool.icon className="w-8 h-8 text-primary mx-auto mb-3" strokeWidth={1.5} />
              <h3 className="font-semibold text-foreground text-sm mb-1">{tool.name}</h3>
              <p className="text-xs text-muted-foreground">{t.tools.items[i].role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolStackSection;
