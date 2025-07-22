import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smile, Meh, Frown, Heart, Star } from "lucide-react";

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const moods = [
    { id: 'excellent', label: 'Excellent', icon: Star, color: 'text-fuchsia-primary', bg: 'bg-fuchsia-primary/10' },
    { id: 'good', label: 'Good', icon: Smile, color: 'text-primary', bg: 'bg-primary/10' },
    { id: 'okay', label: 'Okay', icon: Meh, color: 'text-gentle-purple', bg: 'bg-gentle-purple/30' },
    { id: 'low', label: 'Low', icon: Frown, color: 'text-muted-foreground', bg: 'bg-muted' },
    { id: 'grateful', label: 'Grateful', icon: Heart, color: 'text-fuchsia-primary', bg: 'bg-fuchsia-primary/10' },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-gradient-card shadow-card border-0">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl font-bold mb-4">How are you feeling today?</CardTitle>
            <p className="text-muted-foreground">
              Track your emotional wellbeing and let our AI provide personalized support
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {moods.map((mood) => (
                <button
                  key={mood.id}
                  onClick={() => setSelectedMood(mood.id)}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                    selectedMood === mood.id
                      ? 'border-primary shadow-glow'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full ${mood.bg} flex items-center justify-center mx-auto mb-3`}>
                    <mood.icon className={`w-6 h-6 ${mood.color}`} />
                  </div>
                  <p className="text-sm font-medium">{mood.label}</p>
                </button>
              ))}
            </div>
            
            {selectedMood && (
              <div className="text-center animate-fade-in">
                <Button variant="gradient" size="lg">
                  Get AI Support for {moods.find(m => m.id === selectedMood)?.label} mood
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MoodTracker;