import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-navy overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '48px 48px'
      }} />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <p className="text-sky font-inter text-sm tracking-[0.2em] uppercase mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          AI-Driven Working Backwards
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          보도자료에서 RFP까지,
          <br />
          <span className="text-sky">3~4일.</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-12 opacity-0 animate-fade-up leading-relaxed" style={{ animationDelay: '0.5s' }}>
          Amazon Working Backwards + AI 바이브코딩
          <br className="hidden sm:block" />
          = 현업이 직접 만드는 시각적 요구사항
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up" style={{ animationDelay: '0.7s' }}>
          <Button variant="hero" size="lg" className="text-base px-8 py-6" onClick={() => scrollTo("problem")}>
            방법론 알아보기
          </Button>
          <Button variant="ghost" size="lg" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 py-6 border border-primary-foreground/20" onClick={() => scrollTo("cta")}>
            강의 문의하기
          </Button>
        </div>
      </div>

      <button
        onClick={() => scrollTo("problem")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors animate-bounce"
        aria-label="아래로 스크롤"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default HeroSection;
