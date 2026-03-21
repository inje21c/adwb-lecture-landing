import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { AlertTriangle, FileText, Users, TrendingDown } from "lucide-react";

const painPoints = [
  { icon: FileText, title: "텍스트 중심 RFP", desc: "업체마다 다르게 해석하는 모호한 문서" },
  { icon: TrendingDown, title: "견적 2배 차이", desc: "범위 불명확으로 인한 비용 편차" },
  { icon: Users, title: "3단계 왜곡", desc: "현업→기획자→IT를 거치며 의도 소실" },
  { icon: AlertTriangle, title: "개발 후 분쟁", desc: "\"약속이 달랐다\" — 반복되는 CR" },
];

const ProblemSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="problem" className="py-24 md:py-32 section-padding bg-background">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Big number */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <p className="text-sm font-semibold text-muted-foreground tracking-widest uppercase mb-4">문제 정의</p>
            <div className="text-8xl md:text-9xl font-extrabold text-primary/10 leading-none select-none">80%</div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-4 leading-snug">
              IT 프로젝트의 80%는
              <br />
              <span className="text-primary">기술이 아닌 요구사항</span>에서 실패합니다.
            </h2>
          </div>

          {/* Right: narrative + distortion diagram */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed mb-8">
              <p>현업은 자기가 원하는 것을 텍스트, 혹여 PPT 정도로밖에 표현하지 못합니다.</p>
              <p>그 문서를 기획자가 듣고 → 문서로 만들고 → IT가 해석합니다.<br/>3단계를 거치면서 원래 의도의 절반은 사라지고, 나머지 절반은 왜곡됩니다.</p>
              <p>RFP는 텍스트로 가득 차 있고,<br/>개발업체마다 이걸 다르게 읽고,<br/>견적은 2배씩 차이가 나고,<br/>개발이 끝나면 서로 "약속이 달랐다"고 합니다.</p>
              <p className="font-medium text-foreground/70">요구공학에서 말하는 전형적인 페인포인트들입니다.</p>
            </div>
            <div className="space-y-0">
              {[
                { label: "현업의 말", pct: "100%", width: "w-full", color: "bg-primary" },
                { label: "기획자 문서", pct: "60%", width: "w-[70%]", color: "bg-navy-light" },
                { label: "IT 해석", pct: "30%", width: "w-[40%]", color: "bg-muted-foreground" },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-4 py-3">
                  <div className="w-24 text-sm font-medium text-foreground shrink-0">{step.label}</div>
                  <div className="flex-1 bg-muted rounded-full h-8 overflow-hidden">
                    <div className={`h-full ${step.color} rounded-full flex items-center justify-end pr-3 transition-all duration-1000 ${isVisible ? step.width : 'w-0'}`}>
                      <span className="text-xs font-semibold text-primary-foreground">{step.pct}</span>
                    </div>
                  </div>
                </div>
              ))}
              <p className="text-sm text-muted-foreground mt-4 pl-28">
                → 3단계를 거치며 원래 의도의 절반은 사라지고, 나머지 절반은 왜곡됩니다.
              </p>
            </div>
          </div>
        </div>

        {/* Pain point cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className={`bg-muted/50 rounded-lg p-6 transition-all duration-700 hover:shadow-md hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${400 + i * 100}ms` }}
            >
              <point.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="font-semibold text-foreground mb-2">{point.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
