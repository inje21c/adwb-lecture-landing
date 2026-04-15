import { Navbar } from "@/components/common";
import {
  HeroSection,
  ProblemSection,
  SolutionSection,
  WorkingBackwardsSection,
  StepsDetailSection,
  PositioningSection,
  MethodologyContextSection,
  BeforeAfterSection,
  AcademicSection,
  ToolStackSection,
  CTASection,
  FooterSection,
} from "@/components/sections";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <WorkingBackwardsSection />
      <StepsDetailSection />
      <PositioningSection />
      <MethodologyContextSection />
      <BeforeAfterSection />
      <AcademicSection />
      <ToolStackSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
