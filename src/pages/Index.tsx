import HeroSection from "@/components/HeroSection";
import PresaleWidget from "@/components/PresaleWidget";
import TokenomicsSection from "@/components/TokenomicsSection";
import RoadmapSection from "@/components/RoadmapSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PresaleWidget />
      <TokenomicsSection />
      <RoadmapSection />
    </div>
  );
};

export default Index;
