import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Newspaper, ArrowRight, RefreshCw } from "lucide-react";

const steps = [
  "보도자료", "KPI", "프롬프트", "Lovable", "GitHub",
  "Claude Code", "데모", "배포", "시연", "반복", "설계서", "RFP"
];

const SolutionSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="solution" className="py-24 md:py-32 section-padding bg-secondary/40">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-sm font-semibold text-muted-foreground tracking-widest uppercase mb-4">해법</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-snug">
            Amazon은 20년 전에 답을 알고 있었습니다.
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Newspaper className="w-5 h-5 text-primary" />
            <p className="text-lg text-muted-foreground italic">
              "제품을 만들기 전에 보도자료를 먼저 써라." — Working Backwards
            </p>
          </div>
          <p className="text-xl font-semibold text-primary mb-6">저는 여기에 AI를 결합했습니다.</p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            <span className="font-semibold text-foreground">AI-Driven Working Backwards:</span><br/>
            보도자료에서 시작하여, AI 바이브코딩으로 목업을 만들고,<br/>
            현업이 직접 체험하고 피드백하는 반복 사이클을 거쳐,<br/>
            명확한 RFP까지 도달하는 12단계 파이프라인.
          </p>
        </div>

        {/* Pipeline flow */}
        <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {/* Desktop: horizontal */}
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

          {/* Mobile: vertical */}
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
            Step 9~10은 요구사항이 수렴될 때까지 <span className="font-semibold text-primary">반복</span>됩니다.<br/>
            이 반복 사이클이 방법론의 핵심 엔진입니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
