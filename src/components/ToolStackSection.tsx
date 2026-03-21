import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { MessageSquare, Palette, Eye, GitBranch, Code, Rocket, Server, Cloud } from "lucide-react";

const tools = [
  { icon: MessageSquare, name: "ChatGPT / Claude", role: "기획 · 사고 정리" },
  { icon: Palette, name: "Behance / Dribbble", role: "UI 레퍼런스" },
  { icon: Eye, name: "Lovable", role: "UI 생성" },
  { icon: GitBranch, name: "GitHub", role: "코드 관리" },
  { icon: Code, name: "Claude Code / Codex", role: "개발 · 수정" },
  { icon: Rocket, name: "Firebase", role: "배포 · 시연" },
  { icon: Server, name: "AWS EC2", role: "인프라" },
  { icon: Cloud, name: "AI Tools", role: "전체 파이프라인 지원" },
];

const ToolStackSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="tools" className="py-24 md:py-32 section-padding bg-background">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-sm font-semibold text-muted-foreground tracking-widest uppercase mb-4">실무 도구 스택</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">파이프라인을 구성하는 도구들</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {tools.map((tool, i) => (
            <div
              key={i}
              className={`bg-muted/30 rounded-xl p-6 text-center hover:bg-muted/60 transition-all duration-700 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${300 + i * 80}ms` }}
            >
              <tool.icon className="w-8 h-8 text-primary mx-auto mb-3" strokeWidth={1.5} />
              <h3 className="font-semibold text-foreground text-sm mb-1">{tool.name}</h3>
              <p className="text-xs text-muted-foreground">{tool.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolStackSection;
