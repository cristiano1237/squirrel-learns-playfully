import { mathContent, mathLessons } from './math';
import { scienceContent } from './science';
import { languagesContent } from './languages';
import { Subject, Grade, Question, Lesson } from '@/types/game';

// Export all content
export { mathContent, mathLessons, scienceContent, languagesContent };

// Helper functions to get content
export function getSubjectContent(subject: Subject): { [key in Grade]: Question[] } {
  switch (subject) {
    case 'math':
      return mathContent;
    case 'science':
      return scienceContent;
    case 'languages':
      return languagesContent;
    default:
      return mathContent;
  }
}

export function getSubjectLessons(subject: Subject, grade: Grade): Lesson[] {
  switch (subject) {
    case 'math':
      return mathLessons[grade] || [];
    case 'science':
      // For demo, return math structure but with science content
      return [{
        id: `science-${grade}-basics`,
        title: `Science Basics - ${grade.replace('-', ' ').toUpperCase()}`,
        description: 'Explore the wonders of science!',
        subject: 'science',
        grade,
        difficulty: grade.includes('class-4') || grade.includes('class-5') || grade.includes('class-6') ? 'hard' : 
                   grade.includes('class-2') || grade.includes('class-3') ? 'medium' : 'easy',
        questions: scienceContent[grade] || [],
        estimatedTime: 20,
        xpReward: 50,
        acornReward: 10
      }];
    case 'languages':
      // For demo, return math structure but with language content
      return [{
        id: `languages-${grade}-basics`,
        title: `Language Skills - ${grade.replace('-', ' ').toUpperCase()}`,
        description: 'Master words and communication!',
        subject: 'languages',
        grade,
        difficulty: grade.includes('class-4') || grade.includes('class-5') || grade.includes('class-6') ? 'hard' : 
                   grade.includes('class-2') || grade.includes('class-3') ? 'medium' : 'easy',
        questions: languagesContent[grade] || [],
        estimatedTime: 15,
        xpReward: 40,
        acornReward: 8
      }];
    default:
      return mathLessons[grade] || [];
  }
}

export function getAllSubjects(): Array<{
  id: Subject;
  name: string;
  description: string;
  icon: string;
  totalLessons: number;
}> {
  return [
    {
      id: 'math',
      name: 'Mathematics',
      description: 'Numbers, patterns, and problem-solving adventures!',
      icon: '🧮',
      totalLessons: 95
    },
    {
      id: 'science',
      name: 'Science',
      description: 'Discover how the world works through experiments!',
      icon: '🔬',
      totalLessons: 78
    },
    {
      id: 'languages',
      name: 'Languages',
      description: 'Master words, stories, and communication!',
      icon: '📚',
      totalLessons: 112
    }
  ];
}

export function getAllGrades(): Array<{
  id: Grade;
  name: string;
  description: string;
  ageRange: string;
  difficulty: string;
}> {
  return [
    { id: 'pre-k', name: 'Pre-K', description: 'First steps into learning!', ageRange: '3-4 years', difficulty: 'Beginner' },
    { id: 'kg', name: 'Kindergarten', description: 'Building basics with fun!', ageRange: '4-5 years', difficulty: 'Beginner' },
    { id: 'class-1', name: 'Class 1', description: 'Growing stronger every day!', ageRange: '5-6 years', difficulty: 'Elementary' },
    { id: 'class-2', name: 'Class 2', description: 'Exploring new concepts!', ageRange: '6-7 years', difficulty: 'Elementary' },
    { id: 'class-3', name: 'Class 3', description: 'Mastering fundamentals!', ageRange: '7-8 years', difficulty: 'Intermediate' },
    { id: 'class-4', name: 'Class 4', description: 'Tackling bigger challenges!', ageRange: '8-9 years', difficulty: 'Intermediate' },
    { id: 'class-5', name: 'Class 5', description: 'Advanced problem solving!', ageRange: '9-10 years', difficulty: 'Advanced' },
    { id: 'class-6', name: 'Class 6', description: 'Preparing for next level!', ageRange: '10-11 years', difficulty: 'Advanced' }
  ];
}