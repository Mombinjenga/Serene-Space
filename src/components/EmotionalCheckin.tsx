import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Circle, Heart, Brain, Shield, Sparkles } from "lucide-react";

const EmotionalCheckin = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState<{ [key: number]: string }>({});

  const questions = [
    {
      id: 0,
      question: "How would you describe your overall mood today?",
      options: ["Energetic & positive", "Content & stable", "Neutral", "Low or drained", "Struggling today"]
    },
    {
      id: 1,
      question: "What's been on your mind lately?",
      options: ["Work/school stress", "Relationships", "Health concerns", "Future worries", "Past experiences", "Nothing specific"]
    },
    {
      id: 2,
      question: "How well have you been sleeping?",
      options: ["Great, feeling rested", "Pretty good", "Okay, some issues", "Poor sleep quality", "Very restless nights"]
    },
    {
      id: 3,
      question: "What would help you most right now?",
      options: ["Someone to talk to", "Relaxation techniques", "Physical activity", "Creative expression", "Time alone", "Professional support"]
    }
  ];

  const handleResponse = (answer: string) => {
    setResponses(prev => ({ ...prev, [currentStep]: answer }));
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const isComplete = Object.keys(responses).length === questions.length;
  const progress = (Object.keys(responses).length / questions.length) * 100;

  return (
    <section className="py-20 px-6 bg-gradient-gentle">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Daily Emotional Check-in
          </h2>
          <p className="text-xl text-muted-foreground">
            Take a moment to reflect on your emotional well-being
          </p>
        </div>

        <Card className="bg-background shadow-card border-0">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-fuchsia-primary" />
                Check-in Progress
              </CardTitle>
              <span className="text-sm text-muted-foreground">
                {Object.keys(responses).length} / {questions.length}
              </span>
            </div>
            <Progress value={progress} className="mb-6" />
          </CardHeader>
          
          <CardContent>
            {!isComplete ? (
              <div className="animate-fade-in">
                <h3 className="text-xl font-semibold mb-6 text-center">
                  {questions[currentStep].question}
                </h3>
                
                <div className="grid gap-3 max-w-2xl mx-auto">
                  {questions[currentStep].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleResponse(option)}
                      className="p-4 text-left border-2 border-border rounded-xl hover:border-primary hover:bg-gradient-card transition-all duration-300 hover:scale-[1.02]"
                    >
                      <div className="flex items-center gap-3">
                        <Circle className="w-5 h-5 text-muted-foreground" />
                        <span>{option}</span>
                      </div>
                    </button>
                  ))}
                </div>
                
                {currentStep > 0 && (
                  <div className="text-center mt-6">
                    <Button 
                      variant="gentle" 
                      onClick={() => setCurrentStep(prev => prev - 1)}
                    >
                      Previous Question
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center animate-fade-in">
                <div className="mb-6">
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Check-in Complete!</h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for taking time to reflect. Based on your responses, here are some personalized suggestions:
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <Card className="bg-gentle-purple/30">
                    <CardContent className="p-4 text-center">
                      <Brain className="w-8 h-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold mb-2">Recommended Activity</h4>
                      <p className="text-sm">Try a 5-minute breathing exercise</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-calming-blue/50">
                    <CardContent className="p-4 text-center">
                      <Sparkles className="w-8 h-8 text-fuchsia-primary mx-auto mb-2" />
                      <h4 className="font-semibold mb-2">Mood Insight</h4>
                      <p className="text-sm">You're showing resilience today</p>
                    </CardContent>
                  </Card>
                </div>
                
                <Button 
                  variant="gradient" 
                  onClick={() => {
                    setCurrentStep(0);
                    setResponses({});
                  }}
                >
                  Start New Check-in
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EmotionalCheckin;