import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Headphones, Activity, Users } from "lucide-react";

const ResourceCards = () => {
  const resources = [
    {
      icon: BookOpen,
      title: "Guided Journaling",
      description: "Reflect on your thoughts and emotions with AI-powered prompts that help you process your day.",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      icon: Headphones,
      title: "Meditation Sessions",
      description: "Access personalized meditation and mindfulness exercises tailored to your current emotional state.",
      color: "text-fuchsia-primary",
      bg: "bg-fuchsia-primary/10"
    },
    {
      icon: Activity,
      title: "Wellness Tracking",
      description: "Monitor your mental health journey with insightful analytics and progress visualization.",
      color: "text-gentle-purple",
      bg: "bg-gentle-purple/30"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with others on similar journeys in a safe, moderated environment.",
      color: "text-calming-blue",
      bg: "bg-calming-blue/50"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Your Wellness Toolkit</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover a comprehensive suite of tools designed to support your mental health journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card shadow-card border-0 hover:shadow-glow transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 rounded-full ${resource.bg} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <resource.icon className={`w-8 h-8 ${resource.color}`} />
                </div>
                <CardTitle className="text-xl">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {resource.description}
                </p>
                <Button variant="gentle" className="w-full">
                  Explore
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceCards;