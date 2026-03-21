import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";
import { GraduationCap, Package, Users } from "lucide-react";

const cards = [
  {
    icon: GraduationCap,
    title: "1일 워크숍 (8시간)",
    desc: "하루 만에 보도자료에서 RFP까지 — End-to-End 파이프라인을 직접 체험합니다.",
  },
  {
    icon: Package,
    title: "수강 후 가져가는 것",
    desc: "확정 보도자료 + KPI 정의서, Lovable 목업, 작동하는 데모 사이트, 설계서 + RFP 초안",
  },
  {
    icon: Users,
    title: "대상",
    desc: "개발자, 비개발자(기획/영업/PM), AI 시대 IT 조달 프로세스 혁신에 관심 있는 리더",
  },
];

const CTASection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="cta" className="py-24 md:py-32 section-padding gradient-navy">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-sky/70 text-sm tracking-widest uppercase mb-4 font-semibold">강의 안내</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            이 방법론을 직접 배워보세요.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-8 transition-all duration-700 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${300 + i * 120}ms` }}
            >
              <card.icon className="w-8 h-8 text-sky mb-4" strokeWidth={1.5} />
              <h3 className="font-bold text-primary-foreground text-lg mb-3">{card.title}</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <Button variant="hero" size="lg" className="text-lg px-12 py-7">
            강의 문의하기
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
