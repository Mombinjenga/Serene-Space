import HeroSection from "@/components/HeroSection";
import MoodTracker from "@/components/MoodTracker";
import EmotionalCheckin from "@/components/EmotionalCheckin";
import AIChat from "@/components/AIChat";
import BreathingExercise from "@/components/BreathingExercise";
import CopingStrategies from "@/components/CopingStrategies";
import ProgressDashboard from "@/components/ProgressDashboard";
import ResourceCards from "@/components/ResourceCards";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MoodTracker />
      <EmotionalCheckin />
      <BreathingExercise />
      <AIChat />
      <CopingStrategies />
      <ProgressDashboard />
      <ResourceCards />
    </div>
  );
};

export default Index;
