import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { X, Check } from "lucide-react";

const rows = [
  { label: "요구사항 전달", before: "현업→기획자→IT (3단계 왜곡)", after: "현업이 데모를 직접 보고 피드백 (1단계)" },
  { label: "1차 산출물", before: "4~8주", after: "3~4일" },
  { label: "요구사항 정제", before: "문서 검토 회의 (추상적)", after: "데모 시연→피드백→수정 반복 (구체적)" },
  { label: "RFP 형태", before: "텍스트 중심, 범위 모호", after: "데모 URL + 목업 + 설계서 첨부" },
  { label: "견적 편차", before: "업체 간 2배 이상 차이", after: "목업 기반 범위 명확, 편차 최소화" },
  { label: "개발 후 CR", before: "빈번 (\"원했던 게 아닌데\")", after: "최소화 (데모로 사전 합의)" },
  { label: "비용", before: "기획 컨설팅 수천만원", after: "AI 도구 月 수만원 + 내부 인력" },
];

const BeforeAfterSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="comparison" className="py-24 md:py-32 section-padding bg-background">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-sm font-semibold text-muted-foreground tracking-widest uppercase mb-4">비교</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">기존 방식 vs AI-Driven Working Backwards</h2>
        </div>

        <div className={`overflow-x-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left p-4 font-semibold text-muted-foreground">비교 항목</th>
                <th className="text-left p-4 font-semibold text-muted-foreground bg-muted/50 rounded-tl-lg">
                  <div className="flex items-center gap-2">
                    <X className="w-4 h-4 text-destructive" /> 기존 방식
                  </div>
                </th>
                <th className="text-left p-4 font-semibold text-primary bg-secondary rounded-tr-lg">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" /> AI-Driven WB
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
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
