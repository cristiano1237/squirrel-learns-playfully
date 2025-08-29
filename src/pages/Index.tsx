import React from 'react';
import { useNavigate } from 'react-router-dom';
import { QuirrelMascot } from '@/components/QuirrelMascot';
import { Button } from '@/components/ui/button';
import { BookOpen, Calculator, Atom, MessageSquare, Users, Trophy, Star } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <QuirrelMascot size="sm" />
            <div>
              <h1 className="text-2xl font-bold text-gradient-primary">SquirrelLearn</h1>
              <p className="text-sm text-muted-foreground">Learn • Play • Grow</p>
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

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <div className="max-w-4xl mx-auto">
          <QuirrelMascot 
            size="xl" 
            animation="float" 
            message="Hi there! I'm Quirrel! Ready to learn something amazing today? 🌟"
            className="mb-8"
          />
          
          <h2 className="text-5xl font-bold text-gradient-hero mb-6">
            Learning Made Fun!
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join millions of students on an epic learning adventure! Master Math, Science, and Languages 
            through gamified lessons designed just for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/subjects')}
              className="btn-game-primary text-lg px-8 py-6"
            >
              <BookOpen className="w-6 h-6 mr-2" />
              Start Learning
            </Button>
            
            <Button 
              onClick={() => navigate('/dashboard')}
              className="btn-game-secondary text-lg px-8 py-6"
            >
              <Trophy className="w-6 h-6 mr-2" />
              My Progress
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="game-card text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Calculator className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">Mathematics</h3>
            <p className="text-muted-foreground">
              From counting to algebra! Master numbers through fun, interactive challenges.
            </p>
          </div>
          
          <div className="game-card text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-secondary to-secondary-light rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Atom className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">Science</h3>
            <p className="text-muted-foreground">
              Explore the wonders of nature, space, and how things work around us!
            </p>
          </div>
          
          <div className="game-card text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent-light rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-2">Languages</h3>
            <p className="text-muted-foreground">
              Build vocabulary, grammar, and communication skills through engaging activities.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div>
            <div className="text-4xl font-bold text-gradient-primary mb-2">8</div>
            <p className="text-muted-foreground">Grade Levels</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-gradient-primary mb-2">3</div>
            <p className="text-muted-foreground">Core Subjects</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-gradient-primary mb-2">500+</div>
            <p className="text-muted-foreground">Interactive Questions</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <QuirrelMascot size="sm" />
            <span className="font-bold text-gradient-primary">SquirrelLearn</span>
          </div>
          <p className="text-muted-foreground text-sm">
            Making learning an adventure, one acorn at a time! 🌰
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
