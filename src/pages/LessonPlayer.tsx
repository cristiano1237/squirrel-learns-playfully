import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGame } from '@/contexts/GameContext';
import { QuirrelMascot } from '@/components/QuirrelMascot';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Home, ArrowLeft, Star, Heart, Timer, CheckCircle2 } from 'lucide-react';
import { Subject, Grade } from '@/types/game';
import { getSubjectLessons } from '@/lib/content';
import { toast } from '@/hooks/use-toast';

export default function LessonPlayer() {
  const navigate = useNavigate();
  const { subject, grade } = useParams<{ subject: string; grade: string }>();
  const { state, dispatch } = useGame();
  
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [mascotMessage, setMascotMessage] = useState('');

  const subjectKey = subject as Subject;
  const gradeKey = grade as Grade;

  // Load lesson on mount
  useEffect(() => {
    if (subjectKey && gradeKey) {
      const lessons = getSubjectLessons(subjectKey, gradeKey);
      if (lessons && lessons.length > 0) {
        dispatch({ type: 'START_LESSON', lesson: lessons[0] });
      }
    }
  }, [subjectKey, gradeKey, dispatch]);

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0 && !showFeedback) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, showFeedback]);

  const currentQuestion = state.currentQuestion;
  const currentLesson = state.currentLesson;
  const progress = currentLesson ? 
    ((state.currentQuestionIndex + 1) / currentLesson.questions.length) * 100 : 0;

  if (!currentLesson || !currentQuestion) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5 flex items-center justify-center">
        <div className="text-center">
          <QuirrelMascot 
            size="lg" 
            message="Oops! I can't find that lesson. Let's go back and try again!" 
          />
          <Button 
            onClick={() => navigate('/subjects')}
            className="btn-game-primary mt-4"
          >
            Back to Subjects
          </Button>
        </div>
      </div>
    );
  }

  const handleAnswerSelect = (answerId: string) => {
    if (showFeedback) return;
    setSelectedAnswer(answerId);
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) {
      toast({
        title: "Pick an answer first!",
        description: "Choose one of the options before submitting.",
      });
      return;
    }

    const correctAnswer = currentQuestion.answers.find(a => a.isCorrect);
    const selectedAnswerObj = currentQuestion.answers.find(a => a.id === selectedAnswer);
    const correct = selectedAnswerObj?.isCorrect || false;
    
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      dispatch({ type: 'ADD_XP', amount: currentQuestion.xpReward });
      dispatch({ type: 'ADD_ACORNS', amount: currentQuestion.acornReward });
      setMascotMessage(currentQuestion.mascotFeedback.correct);
      
      toast({
        title: "Correct! 🎉",
        description: `+${currentQuestion.xpReward} XP, +${currentQuestion.acornReward} acorns`,
      });
    } else {
      setMascotMessage(currentQuestion.mascotFeedback.incorrect);
    }

    dispatch({ 
      type: 'ANSWER_QUESTION', 
      questionId: currentQuestion.id, 
      answer: selectedAnswer 
    });
  };

  const handleNextQuestion = () => {
    if (state.currentQuestionIndex + 1 >= currentLesson.questions.length) {
      // Lesson complete
      dispatch({ type: 'COMPLETE_LESSON' });
      navigate(`/lesson-complete/${subject}/${grade}`);
    } else {
      dispatch({ type: 'NEXT_QUESTION' });
      setSelectedAnswer('');
      setShowFeedback(false);
      setTimeLeft(30);
      setMascotMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      {/* Header */}
      <header className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              onClick={() => navigate(`/grades/${subject}`)}
              className="btn-game-accent p-3"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            
            <Button 
              onClick={() => navigate('/')}
              className="btn-game-secondary p-3"
            >
              <Home className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1">
              <Timer className="w-4 h-4" />
              <span className="font-bold">{timeLeft}s</span>
            </div>
            
            <div className="xp-counter">
              <Star className="w-4 h-4 inline mr-1" />
              {state.currentUser.currentXP} XP
            </div>
            
            <div className="acorn-counter">
              🌰 {state.currentUser.currentAcorns}
            </div>
            
            <div className="flex items-center gap-1 bg-red-500/10 rounded-full px-3 py-1">
              <Heart className="w-4 h-4 text-red-500" />
              <Heart className="w-4 h-4 text-red-500" />
              <Heart className="w-4 h-4 text-red-500" />
            </div>
          </div>
        </nav>
      </header>

      {/* Progress Bar */}
      <div className="container mx-auto px-4 mb-6">
        <div className="flex items-center gap-4 mb-2">
          <span className="text-sm font-medium">Progress</span>
          <span className="text-sm text-muted-foreground">
            {state.currentQuestionIndex + 1} of {currentLesson.questions.length}
          </span>
        </div>
        <Progress value={progress} className="h-3" />
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          {/* Question Section */}
          <div className="game-card mb-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-medium text-primary">
                  {currentQuestion.difficulty.toUpperCase()}
                </span>
              </div>
              
              <h2 className="text-2xl font-bold mb-4">
                {currentQuestion.prompt}
              </h2>
              
              {currentQuestion.hint && !showFeedback && (
                <p className="text-muted-foreground">
                  💡 Hint: {currentQuestion.hint}
                </p>
              )}
            </div>

            {/* Answer Options */}
            <div className="grid gap-4 mb-8">
              {currentQuestion.answers.map((answer) => {
                let buttonClass = 'option-button';
                
                if (showFeedback) {
                  if (answer.isCorrect) {
                    buttonClass += ' option-correct';
                  } else if (answer.id === selectedAnswer && !answer.isCorrect) {
                    buttonClass += ' option-incorrect';
                  }
                } else if (answer.id === selectedAnswer) {
                  buttonClass += ' option-selected';
                }

                return (
                  <button
                    key={answer.id}
                    onClick={() => handleAnswerSelect(answer.id)}
                    className={buttonClass}
                    disabled={showFeedback}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center font-bold">
                        {answer.id.toUpperCase()}
                      </div>
                      <span className="text-lg">{answer.text}</span>
                      {showFeedback && answer.isCorrect && (
                        <CheckCircle2 className="w-6 h-6 text-success ml-auto" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4">
              {!showFeedback ? (
                <Button 
                  onClick={handleSubmitAnswer}
                  disabled={!selectedAnswer}
                  className="btn-game-primary px-8 py-4 text-lg"
                >
                  Submit Answer
                </Button>
              ) : (
                <Button 
                  onClick={handleNextQuestion}
                  className="btn-game-primary px-8 py-4 text-lg"
                >
                  {state.currentQuestionIndex + 1 >= currentLesson.questions.length ? 
                    'Complete Lesson!' : 'Next Question'}
                </Button>
              )}
            </div>
          </div>

          {/* Mascot Feedback */}
          {showFeedback && (
            <div className="text-center">
              <QuirrelMascot 
                size="lg"
                animation={isCorrect ? 'bounce' : 'wiggle'}
                message={mascotMessage}
              />
              
              {!isCorrect && (
                <div className="game-card mt-6 max-w-2xl mx-auto">
                  <h4 className="font-bold mb-2">Explanation:</h4>
                  <p className="text-muted-foreground">{currentQuestion.explanation}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}