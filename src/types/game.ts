export type Grade = 'pre-k' | 'kg' | 'class-1' | 'class-2' | 'class-3' | 'class-4' | 'class-5' | 'class-6';

export type Subject = 'math' | 'science' | 'languages';

export type QuestionType = 'multiple-choice' | 'drag-drop' | 'fill-blank' | 'true-false' | 'sequence' | 'match-pairs';

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Answer {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: string;
  type: QuestionType;
  difficulty: Difficulty;
  prompt: string;
  answers: Answer[];
  hint: string;
  explanation: string;
  xpReward: number;
  acornReward: number;
  mascotFeedback: {
    correct: string;
    incorrect: string;
    encouragement: string;
  };
  imageUrl?: string;
  audioUrl?: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  subject: Subject;
  grade: Grade;
  difficulty: Difficulty;
  questions: Question[];
  estimatedTime: number;
  xpReward: number;
  acornReward: number;
  prerequisites?: string[];
}

export interface UserProgress {
  userId: string;
  currentXP: number;
  currentAcorns: number;
  streak: number;
  lastActivityDate: string;
  completedLessons: string[];
  unlockedBadges: string[];
  subjectProgress: {
    [key in Subject]: {
      [key in Grade]: {
        completedLessons: number;
        totalLessons: number;
        xpEarned: number;
        accuracy: number;
      };
    };
  };
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  requirement: string;
  xpRequired?: number;
  lessonsRequired?: number;
  subjectSpecific?: Subject;
}

export interface GameState {
  currentUser: UserProgress;
  currentLesson?: Lesson;
  currentQuestion?: Question;
  currentQuestionIndex: number;
  answers: { [questionId: string]: string | string[] };
  isLessonComplete: boolean;
  sessionXP: number;
  sessionAcorns: number;
}