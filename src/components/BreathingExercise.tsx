import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Wind, Play, Pause, RotateCcw } from "lucide-react";

const BreathingExercise = () => {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [timeLeft, setTimeLeft] = useState(4);
  const [cycleCount, setCycleCount] = useState(0);
  const [selectedPattern, setSelectedPattern] = useState('478');

  const patterns = {
    '478': { inhale: 4, hold: 7, exhale: 8, name: '4-7-8 Relaxation' },
    'box': { inhale: 4, hold: 4, exhale: 4, name: 'Box Breathing' },
    'calm': { inhale: 6, hold: 2, exhale: 8, name: 'Calming Breath' }
  };

  const currentPattern = patterns[selectedPattern as keyof typeof patterns];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isActive) {
      interval = setInterval(() => {
        setTimeLeft((time) => {
          if (time <= 1) {
            // Move to next phase
            if (phase === 'inhale') {
              setPhase('hold');
              return currentPattern.hold;
            } else if (phase === 'hold') {
              setPhase('exhale');
              return currentPattern.exhale;
            } else {
              setPhase('inhale');
              setCycleCount(prev => prev + 1);
              return currentPattern.inhale;
            }
          }
          return time - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, phase, currentPattern]);

  const startExercise = () => {
    setIsActive(true);
    setPhase('inhale');
    setTimeLeft(currentPattern.inhale);
    setCycleCount(0);
  };

  const pauseExercise = () => {
    setIsActive(false);
  };

  const resetExercise = () => {
    setIsActive(false);
    setPhase('inhale');
    setTimeLeft(currentPattern.inhale);
    setCycleCount(0);
  };

  const getPhaseColor = () => {
    switch (phase) {
      case 'inhale': return 'text-blue-500';
      case 'hold': return 'text-purple-500';
      case 'exhale': return 'text-green-500';
      default: return 'text-primary';
    }
  };

  const getProgress = () => {
    const totalTime = phase === 'inhale' ? currentPattern.inhale : 
                     phase === 'hold' ? currentPattern.hold : currentPattern.exhale;
    return ((totalTime - timeLeft) / totalTime) * 100;
  };

  return (
    <section className="py-20 px-6 bg-gradient-gentle">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Guided Breathing Exercises
          </h2>
          <p className="text-xl text-muted-foreground">
            Use these techniques to reduce stress and find calm
          </p>
        </div>

        <Card className="bg-background shadow-card border-0 mb-8">
          <CardHeader>
            <CardTitle className="text-center">Choose Your Breathing Pattern</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {Object.entries(patterns).map(([key, pattern]) => (
                <button
                  key={key}
                  onClick={() => {
                    setSelectedPattern(key);
                    resetExercise();
                  }}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    selectedPattern === key 
                      ? 'border-primary bg-primary/10' 
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <h3 className="font-semibold mb-2">{pattern.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {pattern.inhale}s - {pattern.hold}s - {pattern.exhale}s
                  </p>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card shadow-card border-0">
          <CardContent className="p-8 text-center">
            {/* Breathing Visual */}
            <div className="mb-8">
              <div 
                className={`w-32 h-32 mx-auto rounded-full border-4 transition-all duration-1000 ${
                  isActive
                    ? phase === 'inhale' 
                      ? 'scale-125 border-blue-500 bg-blue-500/20' 
                      : phase === 'hold'
                      ? 'scale-125 border-purple-500 bg-purple-500/20'
                      : 'scale-100 border-green-500 bg-green-500/20'
                    : 'border-primary bg-primary/10'
                } flex items-center justify-center`}
              >
                <Wind className="w-12 h-12 text-primary" />
              </div>
            </div>

            {/* Phase Indicator */}
            <div className="mb-6">
              <h3 className={`text-3xl font-bold mb-2 capitalize ${getPhaseColor()}`}>
                {phase}
              </h3>
              <div className="text-6xl font-mono font-bold text-foreground mb-4">
                {timeLeft}
              </div>
              <Progress value={getProgress()} className="max-w-md mx-auto mb-4" />
              <p className="text-muted-foreground">
                Cycles completed: {cycleCount}
              </p>
            </div>

            {/* Instructions */}
            <div className="mb-8 max-w-md mx-auto">
              <p className="text-lg text-muted-foreground">
                {phase === 'inhale' && "Breathe in slowly through your nose"}
                {phase === 'hold' && "Hold your breath gently"}
                {phase === 'exhale' && "Exhale slowly through your mouth"}
              </p>
            </div>

            {/* Controls */}
            <div className="flex justify-center gap-4">
              {!isActive ? (
                <Button variant="gradient" size="lg" onClick={startExercise}>
                  <Play className="w-5 h-5 mr-2" />
                  Start Breathing
                </Button>
              ) : (
                <Button variant="gentle" size="lg" onClick={pauseExercise}>
                  <Pause className="w-5 h-5 mr-2" />
                  Pause
                </Button>
              )}
              
              <Button variant="outline" size="lg" onClick={resetExercise}>
                <RotateCcw className="w-5 h-5 mr-2" />
                Reset
              </Button>
            </div>

            {cycleCount >= 5 && (
              <div className="mt-8 p-4 bg-gradient-primary/10 rounded-xl animate-fade-in">
                <p className="text-primary font-semibold">
                  Great job! You've completed {cycleCount} breathing cycles. 
                  Notice how you feel right now.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BreathingExercise;