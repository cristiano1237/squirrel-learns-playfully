import React from 'react';
import { useNavigate } from 'react-router-dom';
import { QuirrelMascot } from '@/components/QuirrelMascot';
import { Button } from '@/components/ui/button';
import { Calculator, Atom, MessageSquare, Home, Star } from 'lucide-react';

const subjects = [
  {
    id: 'math',
    name: 'Mathematics',
    description: 'Numbers, patterns, and problem-solving adventures!',
    icon: Calculator,
    gradient: 'from-primary to-primary-light',
    lessons: 95,
    difficulty: 'All Levels'
  },
  {
    id: 'science',
    name: 'Science',
    description: 'Discover how the world works through experiments!',
    icon: Atom,
    gradient: 'from-secondary to-secondary-light',
    lessons: 78,
    difficulty: 'All Levels'
  },
  {
    id: 'languages',
    name: 'Languages',
    description: 'Master words, stories, and communication!',
    icon: MessageSquare,
    gradient: 'from-accent to-accent-light',
    lessons: 112,
    difficulty: 'All Levels'
  }
];

export default function Subjects() {
  const navigate = useNavigate();

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
                <h1 className="text-2xl font-bold text-gradient-primary">Choose Your Adventure!</h1>
                <p className="text-sm text-muted-foreground">Pick a subject to start learning</p>
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
              message="Which subject excites you the most? Each one is full of amazing discoveries! 🎯"
              className="mb-8"
            />
          </div>

          {/* Subject Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {subjects.map((subject) => {
              const IconComponent = subject.icon;
              
              return (
                <div key={subject.id} className="subject-card group">
                  <div className="text-center">
                    {/* Subject Icon */}
                    <div className={`w-24 h-24 bg-gradient-to-r ${subject.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-12 h-12 text-white" />
                    </div>
                    
                    {/* Subject Info */}
                    <h3 className="text-2xl font-bold mb-3">{subject.name}</h3>
                    <p className="text-muted-foreground mb-6 text-lg">
                      {subject.description}
                    </p>
                    
                    {/* Stats */}
                    <div className="flex justify-center gap-6 mb-6 text-sm">
                      <div>
                        <div className="font-bold text-primary">{subject.lessons}</div>
                        <div className="text-muted-foreground">Lessons</div>
                      </div>
                      <div>
                        <div className="font-bold text-secondary">{subject.difficulty}</div>
                        <div className="text-muted-foreground">Difficulty</div>
                      </div>
                    </div>
                    
                    {/* Action Button */}
                    <Button 
                      onClick={() => navigate(`/grades/${subject.id}`)}
                      className="btn-game-primary w-full py-4 text-lg font-bold group-hover:shadow-2xl transition-shadow duration-300"
                    >
                      Start {subject.name}!
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Fun Facts Section */}
          <div className="mt-16 text-center">
            <div className="game-card max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">🎉 Fun Learning Facts!</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl mb-2">🧮</div>
                  <p className="text-sm text-muted-foreground">
                    Math helps us count acorns and solve puzzles every day!
                  </p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🔬</div>
                  <p className="text-sm text-muted-foreground">
                    Science explains why squirrels can climb trees so well!
                  </p>
                </div>
                <div>
                  <div className="text-3xl mb-2">📚</div>
                  <p className="text-sm text-muted-foreground">
                    Languages let us share stories and make friends!
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