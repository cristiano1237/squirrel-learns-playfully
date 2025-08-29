import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '@/contexts/GameContext';
import { QuirrelMascot } from '@/components/QuirrelMascot';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Home, Star, Trophy, Calendar, Target, BookOpen, Award } from 'lucide-react';

export default function Dashboard() {
  const navigate = useNavigate();
  const { state } = useGame();
  const { currentUser } = state;

  const totalLessonsCompleted = currentUser.completedLessons.length;
  const totalXP = currentUser.currentXP;
  const currentStreak = currentUser.streak;

  const subjectStats = [
    {
      subject: 'math',
      name: 'Mathematics',
      icon: '🧮',
      color: 'from-primary to-primary-light',
      progress: 15,
      completedLessons: 3,
      totalLessons: 20
    },
    {
      subject: 'science',
      name: 'Science',
      icon: '🔬',
      color: 'from-secondary to-secondary-light',
      progress: 8,
      completedLessons: 1,
      totalLessons: 15
    },
    {
      subject: 'languages',
      name: 'Languages',
      icon: '📚',
      color: 'from-accent to-accent-light',
      progress: 0,
      completedLessons: 0,
      totalLessons: 18
    }
  ];

  const badges = [
    { name: 'First Steps', icon: '👶', description: 'Complete your first lesson', earned: totalLessonsCompleted > 0 },
    { name: 'Math Whiz', icon: '🧮', description: 'Complete 5 math lessons', earned: false },
    { name: 'Science Explorer', icon: '🔬', description: 'Complete 5 science lessons', earned: false },
    { name: 'Word Master', icon: '📖', description: 'Complete 5 language lessons', earned: false },
    { name: 'Streak Master', icon: '🔥', description: '7 day learning streak', earned: currentStreak >= 7 },
    { name: 'XP Champion', icon: '⭐', description: 'Earn 1000 XP', earned: totalXP >= 1000 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              onClick={() => navigate('/')}
              className="btn-game-accent p-3"
            >
              <Home className="w-5 h-5" />
            </Button>
            
            <div className="flex items-center gap-3">
              <QuirrelMascot size="sm" />
              <div>
                <h1 className="text-2xl font-bold text-gradient-primary">My Learning Dashboard</h1>
                <p className="text-sm text-muted-foreground">Track your amazing progress!</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="xp-counter">
              <Star className="w-4 h-4 inline mr-1" />
              {currentUser.currentXP} XP
            </div>
            <div className="acorn-counter">
              🌰 {currentUser.currentAcorns}
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Welcome Section */}
          <div className="text-center">
            <QuirrelMascot 
              size="lg"
              animation="bounce"
              message={`Welcome back! You've completed ${totalLessonsCompleted} lessons and earned ${totalXP} XP! Keep up the amazing work! 🌟`}
              className="mb-8"
            />
          </div>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="game-card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-2xl font-bold text-gradient-primary mb-1">{totalLessonsCompleted}</div>
              <p className="text-muted-foreground text-sm">Lessons Completed</p>
            </div>

            <div className="game-card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-secondary-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-secondary-foreground" />
              </div>
              <div className="text-2xl font-bold text-gradient-primary mb-1">{totalXP}</div>
              <p className="text-muted-foreground text-sm">Total XP</p>
            </div>

            <div className="game-card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-accent-foreground" />
              </div>
              <div className="text-2xl font-bold text-gradient-primary mb-1">{currentStreak}</div>
              <p className="text-muted-foreground text-sm">Day Streak</p>
            </div>

            <div className="game-card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-warning to-warning rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌰</span>
              </div>
              <div className="text-2xl font-bold text-gradient-primary mb-1">{currentUser.currentAcorns}</div>
              <p className="text-muted-foreground text-sm">Acorns Saved</p>
            </div>
          </div>

          {/* Subject Progress */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center">Subject Progress</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {subjectStats.map((subject) => (
                <div key={subject.subject} className="game-card">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${subject.color} rounded-2xl flex items-center justify-center text-2xl`}>
                      {subject.icon}
                    </div>
                    <div>
                      <h3 className="font-bold">{subject.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {subject.completedLessons} of {subject.totalLessons} lessons
                      </p>
                    </div>
                  </div>
                  
                  <Progress value={subject.progress} className="mb-4" />
                  
                  <Button 
                    onClick={() => navigate(`/grades/${subject.subject}`)}
                    className="btn-game-primary w-full"
                  >
                    Continue Learning
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Badges Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center">Achievement Badges</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {badges.map((badge, index) => (
                <div key={index} className={`game-card text-center ${badge.earned ? 'ring-2 ring-primary' : 'opacity-60'}`}>
                  <div className={`text-4xl mb-3 ${badge.earned ? 'animate-bounce' : 'grayscale'}`}>
                    {badge.icon}
                  </div>
                  <h3 className="font-bold mb-2">{badge.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {badge.description}
                  </p>
                  {badge.earned ? (
                    <div className="inline-flex items-center gap-2 bg-success/10 text-success px-3 py-1 rounded-full text-sm font-medium">
                      <Award className="w-4 h-4" />
                      Earned!
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-2 bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm">
                      <Target className="w-4 h-4" />
                      In Progress
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="game-card text-center">
            <h3 className="text-xl font-bold mb-6">Ready for More Learning?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/subjects')}
                className="btn-game-primary"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Subjects
              </Button>
              
              <Button 
                onClick={() => navigate('/learn/math/class-1')}
                className="btn-game-secondary"
              >
                <Target className="w-5 h-5 mr-2" />
                Quick Practice
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}