import HeroSection from "@/components/HeroSection";
import MoodTracker from "@/components/MoodTracker";
import AIChat from "@/components/AIChat";
import ResourceCards from "@/components/ResourceCards";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MoodTracker />
      <AIChat />
      <ResourceCards />
    </div>
  );
};

export default Index;
