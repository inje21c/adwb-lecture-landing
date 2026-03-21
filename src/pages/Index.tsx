import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import StepsDetailSection from "@/components/StepsDetailSection";
import PositioningSection from "@/components/PositioningSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import AcademicSection from "@/components/AcademicSection";
import ToolStackSection from "@/components/ToolStackSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <StepsDetailSection />
      <PositioningSection />
      <BeforeAfterSection />
      <AcademicSection />
      <ToolStackSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
