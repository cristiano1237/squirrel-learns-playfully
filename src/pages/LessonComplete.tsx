import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGame } from '@/contexts/GameContext';
import { QuirrelMascot } from '@/components/QuirrelMascot';
import { Button } from '@/components/ui/button';
import { Home, RotateCcw, ArrowRight, Star, Trophy, Zap } from 'lucide-react';

export default function LessonComplete() {
  const navigate = useNavigate();
  const { subject, grade } = useParams<{ subject: string; grade: string }>();
  const { state, dispatch } = useGame();

  const sessionXP = state.sessionXP;
  const sessionAcorns = state.sessionAcorns;

  useEffect(() => {
    // Update streak when lesson is completed
    dispatch({ type: 'UPDATE_STREAK' });
  }, [dispatch]);

  const handleContinue = () => {
    // Reset session and go to grades
    dispatch({ type: 'RESET_SESSION' });
    navigate(`/grades/${subject}`);
  };

  const handlePlayAgain = () => {
    // Reset session and replay lesson
    dispatch({ type: 'RESET_SESSION' });
    navigate(`/learn/${subject}/${grade}`);
  };

  const handleGoHome = () => {
    dispatch({ type: 'RESET_SESSION' });
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5 flex items-center justify-center">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Celebration */}
          <div className="mb-8">
            <QuirrelMascot 
              size="xl"
              animation="bounce"
              message="🎉 Fantastic work! You've completed the lesson! You're becoming a real learning champion! 🏆"
              className="mb-8"
            />
          </div>

          {/* Results Card */}
          <div className="game-card mb-8 relative overflow-hidden">
            {/* Celebration Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 animate-glow" />
            
            <div className="relative z-10 py-8">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Trophy className="w-8 h-8 text-primary" />
                <h1 className="text-3xl font-bold text-gradient-primary">Lesson Complete!</h1>
                <Trophy className="w-8 h-8 text-primary" />
              </div>

              {/* Rewards Display */}
              <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg animate-bounce">
                    <Star className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-purple-600 mb-1">+{sessionXP}</div>
                  <p className="text-sm text-muted-foreground">XP Earned</p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg animate-bounce [animation-delay:0.2s]">
                    <span className="text-3xl">🌰</span>
                  </div>
                  <div className="text-2xl font-bold text-amber-600 mb-1">+{sessionAcorns}</div>
                  <p className="text-sm text-muted-foreground">Acorns Collected</p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg animate-bounce [animation-delay:0.4s]">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-green-600 mb-1">{state.currentUser.streak}</div>
                  <p className="text-sm text-muted-foreground">Day Streak</p>
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-muted/30 rounded-2xl p-6 max-w-2xl mx-auto">
                <h3 className="font-bold mb-4">🏅 Achievements Unlocked!</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  <div className="bg-white rounded-full px-4 py-2 text-sm font-medium border border-primary/20">
                    ✅ Lesson Master
                  </div>
                  <div className="bg-white rounded-full px-4 py-2 text-sm font-medium border border-secondary/20">
                    🎯 Question Solver
                  </div>
                  <div className="bg-white rounded-full px-4 py-2 text-sm font-medium border border-accent/20">
                    ⭐ XP Collector
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <Button 
              onClick={handleContinue}
              className="btn-game-primary flex-1 py-4 text-lg"
            >
              <ArrowRight className="w-6 h-6 mr-2" />
              Continue Learning
            </Button>
            
            <Button 
              onClick={handlePlayAgain}
              className="btn-game-secondary flex-1 py-4 text-lg"
            >
              <RotateCcw className="w-6 h-6 mr-2" />
              Play Again
            </Button>
            
            <Button 
              onClick={handleGoHome}
              className="btn-game-accent py-4 px-6 text-lg"
            >
              <Home className="w-6 h-6" />
            </Button>
          </div>

          {/* Fun Fact */}
          <div className="mt-12 game-card max-w-2xl mx-auto">
            <h4 className="font-bold mb-2">🧠 Did You Know?</h4>
            <p className="text-muted-foreground text-sm">
              Your brain forms new connections every time you learn something new! 
              Keep practicing to make those connections even stronger! 🌟
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}