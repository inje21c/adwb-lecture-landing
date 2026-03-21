import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { RefreshCw, MessageSquare, Target, Code, Rocket, Eye, FileEdit, BarChart3, Palette, GitBranch, Server, FileCheck } from "lucide-react";

type Step = { num: number; name: string; purpose: string; tool: string; icon: React.ElementType };

const areas: { key: string; label: string; subtitle: string; steps: Step[] }[] = [
  {
    key: "A", label: "영역 A", subtitle: "목표 선명화 + 프롬프트 설계",
    steps: [
      { num: 1, name: "보도자료 작성", purpose: "고객가치 정의", tool: "ChatGPT / Claude", icon: FileEdit },
      { num: 2, name: "KPI 구체화", purpose: "성공 기준 정의", tool: "ChatGPT / Claude", icon: BarChart3 },
      { num: 3, name: "UI 생성 프롬프트 개발", purpose: "시각화 설계도 확보", tool: "ChatGPT + Behance/Dribbble", icon: Palette },
    ],
  },
  {
    key: "B", label: "영역 B", subtitle: "반복적 구체화 — 핵심 엔진",
    steps: [
      { num: 4, name: "Lovable UI 생성", purpose: "화면 가시화", tool: "Lovable", icon: Eye },
      { num: 5, name: "GitHub 푸시·클론", purpose: "코드 확보", tool: "GitHub", icon: GitBranch },
      { num: 6, name: "소스 정리", purpose: "반복 가능 구조화", tool: "Claude Code", icon: Code },
      { num: 7, name: "데모 기능 구현", purpose: "실행 가능성 부여", tool: "Codex + Claude Code", icon: Rocket },
      { num: 8, name: "Firebase 배포", purpose: "시연 가능 상태", tool: "Firebase", icon: Server },
      { num: 9, name: "시연 및 피드백", purpose: "요구사항 탐색", tool: "사람 + 데모", icon: MessageSquare },
      { num: 10, name: "반복 수정", purpose: "요구사항 수렴", tool: "Claude Code", icon: RefreshCw },
    ],
  },
  {
    key: "C", label: "영역 C", subtitle: "산출물 확정",
    steps: [
      { num: 11, name: "설계서 작성", purpose: "최종 구조 문서화", tool: "Claude Code + ChatGPT", icon: FileCheck },
      { num: 12, name: "RFP 작성", purpose: "발주 준비", tool: "ChatGPT / Claude", icon: Target },
    ],
  },
];

const StepsDetailSection = () => {
  const [activeTab, setActiveTab] = useState("A");
  const { ref, isVisible } = useScrollReveal();
  const activeArea = areas.find(a => a.key === activeTab)!;

  return (
    <section id="steps" className="py-24 md:py-32 section-padding bg-background">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-sm font-semibold text-muted-foreground tracking-widest uppercase mb-4">12단계 상세</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">3개 영역으로 보는 방법론</h2>
        </div>

        {/* Tabs */}
        <div className={`flex justify-center gap-3 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {areas.map(area => (
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

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {activeArea.steps.map((step, i) => (
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
                  <step.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                {(step.num === 9 || step.num === 10) && (
                  <span className="text-[10px] bg-primary/10 text-primary px-2 py-1 rounded-full font-semibold flex items-center gap-1">
                    <RefreshCw className="w-3 h-3" /> 반복
                  </span>
                )}
              </div>
              <h3 className="font-bold text-foreground mb-1">{step.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{step.purpose}</p>
              <p className="text-xs text-muted-foreground/70 font-inter">{step.tool}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsDetailSection;
