import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const PositioningSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="positioning" className="py-24 md:py-32 section-padding bg-secondary/40">
      <div ref={ref} className="max-w-3xl mx-auto text-center">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-sm font-semibold text-muted-foreground tracking-widest uppercase mb-4">핵심 포지셔닝</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">바이브코딩은 개발 도구가 아닙니다.</h2>
          <blockquote className="text-xl md:text-2xl leading-relaxed text-foreground/80 mb-8">
            "엔터프라이즈 시스템을 처음부터 끝까지 바이브코딩만으로 개발하는 것은 현실적이지 않습니다.
            <br /><br />
            그러나 현업의 생각을 <span className="text-primary font-semibold">'보이게'</span> 만들고,
            반복적으로 정제하여 명확한 RFP까지 도달하는 데 쓰면 —
            <span className="text-primary font-bold"> 매우 효율적입니다.</span>"
          </blockquote>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />
          <p className="text-2xl md:text-3xl font-bold text-primary">
            기술은 도구이고, 사람이 중심입니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PositioningSection;
