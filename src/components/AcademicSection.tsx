import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Star, BookOpen } from "lucide-react";

const references = [
  { source: "IEEE Software", author: "Borg, Bjarnason & Hedin (2025)", summary: "바이브코딩을 요구공학 관점의 프로토타이핑 도구로 분석", stars: 5 },
  { source: "Empirical Software Engineering", author: "Bjarnason et al. (2023)", summary: "프로토타이핑 측면 모델(PAM) 5가지 측면 제시", stars: 4 },
  { source: "IET Software", author: "Pacheco & Garcia (2018)", summary: "시나리오+프로토타이핑 결합이 요구사항 결함 예방에 효과적", stars: 4 },
  { source: "The Pragmatic Engineer", author: "구독자 100만+ 매체 (2025)", summary: "바이브코딩은 프로토타이핑에 가장 적합", stars: 5 },
  { source: "Martin Fowler Blog", author: "Martin Fowler (2025)", summary: "바이브코딩의 '좁지만 유용한 활용 사례' 인정", stars: 4 },
];

const AcademicSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="academic" className="py-24 md:py-32 section-padding bg-secondary/40">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-sm font-semibold text-muted-foreground tracking-widest uppercase mb-4">학술적 근거</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">IEEE와 학계가 주목하는 방향</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {references.map((ref_item, i) => (
            <div
              key={i}
              className={`bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-700 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold text-primary">{ref_item.source}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">{ref_item.author}</p>
              <p className="text-sm text-foreground leading-relaxed mb-3">{ref_item.summary}</p>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className={`w-3.5 h-3.5 ${s < ref_item.stars ? 'text-primary fill-primary' : 'text-border'}`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicSection;
