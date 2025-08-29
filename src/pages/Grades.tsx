import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { QuirrelMascot } from '@/components/QuirrelMascot';
import { Button } from '@/components/ui/button';
import { Calculator, Atom, MessageSquare, Home, ArrowLeft, Star, Clock, Award } from 'lucide-react';
import { Subject } from '@/types/game';

const gradeInfo = [
  { id: 'pre-k', name: 'Pre-K', description: 'First steps into learning!', age: '3-4 years', color: 'bg-gradient-to-r from-pink-400 to-pink-500' },
  { id: 'kg', name: 'Kindergarten', description: 'Building basics with fun!', age: '4-5 years', color: 'bg-gradient-to-r from-purple-400 to-purple-500' },
  { id: 'class-1', name: 'Class 1', description: 'Growing stronger every day!', age: '5-6 years', color: 'bg-gradient-to-r from-blue-400 to-blue-500' },
  { id: 'class-2', name: 'Class 2', description: 'Exploring new concepts!', age: '6-7 years', color: 'bg-gradient-to-r from-green-400 to-green-500' },
  { id: 'class-3', name: 'Class 3', description: 'Mastering fundamentals!', age: '7-8 years', color: 'bg-gradient-to-r from-yellow-400 to-yellow-500' },
  { id: 'class-4', name: 'Class 4', description: 'Tackling bigger challenges!', age: '8-9 years', color: 'bg-gradient-to-r from-orange-400 to-orange-500' },
  { id: 'class-5', name: 'Class 5', description: 'Advanced problem solving!', age: '9-10 years', color: 'bg-gradient-to-r from-red-400 to-red-500' },
  { id: 'class-6', name: 'Class 6', description: 'Preparing for next level!', age: '10-11 years', color: 'bg-gradient-to-r from-indigo-400 to-indigo-500' }
];

const subjectIcons = {
  math: Calculator,
  science: Atom,
  languages: MessageSquare
};

const subjectNames = {
  math: 'Mathematics',
  science: 'Science', 
  languages: 'Languages'
};

export default function Grades() {
  const navigate = useNavigate();
  const { subject } = useParams<{ subject: string }>();
  
  const subjectKey = subject as Subject;
  const IconComponent = subjectIcons[subjectKey];
  const subjectName = subjectNames[subjectKey];

  if (!subject || !IconComponent) {
    return <div>Subject not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              onClick={() => navigate('/subjects')}
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
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-2xl flex items-center justify-center">
                <IconComponent className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gradient-primary">{subjectName}</h1>
                <p className="text-sm text-muted-foreground">Choose your grade level</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="xp-counter">
              <Star className="w-4 h-4 inline mr-1" />
              0 XP
            </div>
            <div className="acorn-counter">
              🌰 50
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Mascot Introduction */}
          <div className="text-center mb-12">
            <QuirrelMascot 
              size="lg"
              animation="bounce"
              message={`Time to pick your ${subjectName} level! Don't worry, I'll be with you every step of the way! 🎓`}
              className="mb-8"
            />
          </div>

          {/* Grade Grid */}
          <div className="grid md:grid-cols-4 gap-6">
            {gradeInfo.map((grade, index) => (
              <div key={grade.id} className="subject-card group">
                <div className="text-center">
                  {/* Grade Badge */}
                  <div className={`w-20 h-20 ${grade.color} rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 text-white font-bold text-lg shadow-lg`}>
                    {index + 1}
                  </div>
                  
                  {/* Grade Info */}
                  <h3 className="text-xl font-bold mb-2">{grade.name}</h3>
                  <p className="text-muted-foreground text-sm mb-1">
                    {grade.age}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {grade.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex justify-center gap-4 mb-4 text-xs">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>15-45min</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      <span>5+ lessons</span>
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <Button 
                    onClick={() => navigate(`/learn/${subject}/${grade.id}`)}
                    className="btn-game-primary w-full py-3 font-bold group-hover:shadow-xl transition-shadow duration-300"
                  >
                    Start Learning!
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Learning Path Info */}
          <div className="mt-16">
            <div className="game-card max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">🌟 Your Learning Journey</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="w-16 h-16 bg-gradient-to-r from-success to-success rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">📚</span>
                  </div>
                  <h4 className="font-bold mb-2">Learn Concepts</h4>
                  <p className="text-sm text-muted-foreground">
                    Master new topics with interactive lessons and fun examples
                  </p>
                </div>
                
                <div>
                  <div className="w-16 h-16 bg-gradient-to-r from-warning to-warning rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="font-bold mb-2">Practice Skills</h4>
                  <p className="text-sm text-muted-foreground">
                    Reinforce learning through gamified practice questions
                  </p>
                </div>
                
                <div>
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h4 className="font-bold mb-2">Earn Rewards</h4>
                  <p className="text-sm text-muted-foreground">
                    Collect XP, acorns, and badges as you progress!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}