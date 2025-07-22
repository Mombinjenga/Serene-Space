import { Button } from "@/components/ui/button";
import { MessageCircle, Heart, Brain } from "lucide-react";
import heroImage from "@/assets/hero-mental-health.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-gentle overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-gentle-float">
        <div className="w-16 h-16 bg-gradient-primary rounded-full opacity-20" />
      </div>
      <div className="absolute bottom-32 right-16 animate-gentle-float" style={{ animationDelay: '2s' }}>
        <div className="w-12 h-12 bg-fuchsia-primary rounded-full opacity-30" />
      </div>
      <div className="absolute top-40 right-20 animate-gentle-float" style={{ animationDelay: '4s' }}>
        <div className="w-8 h-8 bg-gentle-purple rounded-full opacity-25" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
        <div className="mb-6 flex justify-center">
          <div className="p-4 bg-gradient-card rounded-full shadow-card animate-pulse-glow">
            <Brain className="w-12 h-12 text-primary" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
          Serene Mind AI
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Your compassionate AI companion for mental wellness. 
          Get personalized support, track your mood, and find peace of mind.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="gradient" size="lg" className="w-full sm:w-auto">
            <MessageCircle className="mr-2" />
            Start Conversation
          </Button>
          <Button variant="gentle" size="lg" className="w-full sm:w-auto">
            <Heart className="mr-2" />
            Track Your Mood
          </Button>
        </div>
        
        <div className="text-sm text-muted-foreground">
          💜 Trusted by 10,000+ users seeking mental wellness
        </div>
      </div>
    </section>
  );
};

export default HeroSection;