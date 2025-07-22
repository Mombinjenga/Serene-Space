import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Calendar, Heart, Brain, Target, Award } from "lucide-react";

const ProgressDashboard = () => {
  // Mock data - in a real app, this would come from stored user data
  const progressData = {
    weeklyCheckins: 5,
    totalCheckins: 47,
    avgMoodScore: 7.2,
    improvementTrend: 15,
    streakDays: 12,
    completedExercises: 23
  };

  const recentMoods = [
    { date: 'Mon', mood: 8, color: 'bg-green-500' },
    { date: 'Tue', mood: 6, color: 'bg-yellow-500' },
    { date: 'Wed', mood: 7, color: 'bg-green-400' },
    { date: 'Thu', mood: 9, color: 'bg-green-600' },
    { date: 'Fri', mood: 8, color: 'bg-green-500' },
    { date: 'Sat', mood: 7, color: 'bg-green-400' },
    { date: 'Sun', mood: 8, color: 'bg-green-500' }
  ];

  const achievements = [
    { title: "First Check-in", description: "Completed your first emotional check-in", earned: true },
    { title: "Week Strong", description: "7 consecutive days of check-ins", earned: true },
    { title: "Breathing Master", description: "Completed 20 breathing exercises", earned: true },
    { title: "Mood Tracker", description: "Track mood for 30 days", earned: false },
    { title: "Wellness Warrior", description: "100 total check-ins", earned: false }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Your Wellness Journey</h2>
          <p className="text-xl text-muted-foreground">
            Track your progress and celebrate your mental health milestones
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gradient-card shadow-card border-0">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold mb-1">{progressData.streakDays}</div>
              <p className="text-sm text-muted-foreground">Day Streak</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-0">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-fuchsia-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6 text-fuchsia-primary" />
              </div>
              <div className="text-2xl font-bold mb-1">{progressData.avgMoodScore}/10</div>
              <p className="text-sm text-muted-foreground">Avg Mood</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-0">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gentle-purple/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold mb-1">+{progressData.improvementTrend}%</div>
              <p className="text-sm text-muted-foreground">Improvement</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-0">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-calming-blue/50 rounded-full flex items-center justify-center mx-auto mb-3">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold mb-1">{progressData.completedExercises}</div>
              <p className="text-sm text-muted-foreground">Exercises Done</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Weekly Mood Trend */}
          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-fuchsia-primary" />
                This Week's Mood Trend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentMoods.map((day, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <span className="w-8 text-sm font-medium text-muted-foreground">{day.date}</span>
                    <div className="flex-1">
                      <Progress value={day.mood * 10} className="h-3" />
                    </div>
                    <span className="w-8 text-sm font-medium">{day.mood}/10</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                <p className="text-sm text-primary font-medium">
                  Your mood has been consistently positive this week! Keep up the great work.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Check-in Progress */}
          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Weekly Goals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Daily Check-ins</span>
                    <span className="text-sm text-muted-foreground">{progressData.weeklyCheckins}/7</span>
                  </div>
                  <Progress value={(progressData.weeklyCheckins / 7) * 100} />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Breathing Exercises</span>
                    <span className="text-sm text-muted-foreground">4/5</span>
                  </div>
                  <Progress value={80} />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Coping Strategy Practice</span>
                    <span className="text-sm text-muted-foreground">3/3</span>
                  </div>
                  <Progress value={100} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <Card className="bg-gradient-card shadow-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-fuchsia-primary" />
              Achievements & Milestones
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    achievement.earned 
                      ? 'border-primary bg-primary/10' 
                      : 'border-border bg-muted/50'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      achievement.earned ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                    }`}>
                      <Award className="w-4 h-4" />
                    </div>
                    <h4 className={`font-semibold ${achievement.earned ? 'text-primary' : 'text-muted-foreground'}`}>
                      {achievement.title}
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProgressDashboard;