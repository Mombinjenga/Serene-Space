import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Lightbulb, 
  Heart, 
  Activity, 
  Users, 
  BookOpen, 
  Music, 
  Palette,
  Phone,
  Shield,
  AlertCircle
} from "lucide-react";

const CopingStrategies = () => {
  const [selectedStrategy, setSelectedStrategy] = useState<string | null>(null);

  const strategiesByCategory = {
    immediate: [
      {
        title: "Deep Breathing",
        description: "4-7-8 breathing technique for instant calm",
        icon: Activity,
        steps: [
          "Inhale through your nose for 4 counts",
          "Hold your breath for 7 counts", 
          "Exhale through your mouth for 8 counts",
          "Repeat 3-4 times"
        ]
      },
      {
        title: "Grounding Technique",
        description: "5-4-3-2-1 sensory grounding method",
        icon: Shield,
        steps: [
          "Name 5 things you can see",
          "Name 4 things you can touch",
          "Name 3 things you can hear",
          "Name 2 things you can smell",
          "Name 1 thing you can taste"
        ]
      },
      {
        title: "Progressive Muscle Relaxation",
        description: "Release physical tension step by step",
        icon: Heart,
        steps: [
          "Start with your toes, tense for 5 seconds",
          "Release and notice the relaxation",
          "Move up through each muscle group",
          "End with your face and scalp"
        ]
      }
    ],
    daily: [
      {
        title: "Mindful Journaling",
        description: "Process thoughts and emotions through writing",
        icon: BookOpen,
        steps: [
          "Set aside 10-15 minutes daily",
          "Write without judgment or editing",
          "Focus on thoughts, feelings, and gratitude",
          "Review patterns over time"
        ]
      },
      {
        title: "Movement Therapy",
        description: "Use physical activity to boost mood",
        icon: Activity,
        steps: [
          "Choose activities you enjoy",
          "Start with 10-15 minutes daily",
          "Focus on how movement feels",
          "Celebrate small accomplishments"
        ]
      },
      {
        title: "Creative Expression",
        description: "Channel emotions through art and creativity",
        icon: Palette,
        steps: [
          "Choose any creative medium",
          "Express without perfectionism",
          "Focus on the process, not outcome",
          "Use colors and forms that feel right"
        ]
      }
    ],
    social: [
      {
        title: "Reach Out to Support",
        description: "Connect with trusted friends or family",
        icon: Users,
        steps: [
          "Identify your support network",
          "Be specific about what you need",
          "Schedule regular check-ins",
          "Offer support to others too"
        ]
      },
      {
        title: "Join Support Groups",
        description: "Connect with others who understand",
        icon: Heart,
        steps: [
          "Look for local or online groups",
          "Start by listening and observing",
          "Share when you feel comfortable",
          "Be consistent in attendance"
        ]
      }
    ]
  };

  const crisisResources = [
    {
      name: "National Suicide Prevention Lifeline",
      number: "988",
      description: "24/7 crisis support"
    },
    {
      name: "Crisis Text Line",
      number: "Text HOME to 741741",
      description: "24/7 text-based crisis support"
    },
    {
      name: "SAMHSA National Helpline",
      number: "1-800-662-4357",
      description: "Mental health and substance abuse"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Coping Strategies & Support</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover evidence-based techniques to manage stress, anxiety, and difficult emotions
          </p>
        </div>

        <Tabs defaultValue="immediate" className="mb-12">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="immediate">Immediate Relief</TabsTrigger>
            <TabsTrigger value="daily">Daily Practices</TabsTrigger>
            <TabsTrigger value="social">Social Support</TabsTrigger>
          </TabsList>

          {Object.entries(strategiesByCategory).map(([category, strategies]) => (
            <TabsContent key={category} value={category}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {strategies.map((strategy, index) => (
                  <Card 
                    key={index}
                    className="bg-gradient-card shadow-card border-0 hover:shadow-glow transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedStrategy(`${category}-${index}`)}
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <strategy.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{strategy.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{strategy.description}</p>
                    </CardHeader>
                    <CardContent>
                      {selectedStrategy === `${category}-${index}` && (
                        <div className="animate-fade-in">
                          <h4 className="font-semibold mb-3 text-primary">Steps to follow:</h4>
                          <ol className="space-y-2">
                            {strategy.steps.map((step, stepIndex) => (
                              <li key={stepIndex} className="text-sm flex items-start gap-2">
                                <span className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center text-xs font-medium text-primary mt-0.5">
                                  {stepIndex + 1}
                                </span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}
                      <Button 
                        variant="gentle" 
                        className="w-full mt-4"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedStrategy(selectedStrategy === `${category}-${index}` ? null : `${category}-${index}`);
                        }}
                      >
                        {selectedStrategy === `${category}-${index}` ? 'Hide Steps' : 'Show Steps'}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Crisis Support Section */}
        <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-red-200 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-700">
              <AlertCircle className="w-5 h-5" />
              Crisis Support Resources
            </CardTitle>
            <p className="text-red-600">
              If you're in immediate danger or having thoughts of self-harm, please reach out for help right away.
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {crisisResources.map((resource, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg border border-red-200">
                  <Phone className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-red-700 mb-1">{resource.name}</h4>
                  <p className="font-mono text-lg text-red-800 mb-1">{resource.number}</p>
                  <p className="text-sm text-red-600">{resource.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CopingStrategies;