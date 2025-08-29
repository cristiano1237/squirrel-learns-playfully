import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { GameState, UserProgress, Lesson, Question } from '@/types/game';

// Initial user progress
const initialUserProgress: UserProgress = {
  userId: 'demo-user',
  currentXP: 0,
  currentAcorns: 50,
  streak: 0,
  lastActivityDate: new Date().toISOString(),
  completedLessons: [],
  unlockedBadges: [],
  subjectProgress: {
    math: {
      'pre-k': { completedLessons: 0, totalLessons: 5, xpEarned: 0, accuracy: 0 },
      kg: { completedLessons: 0, totalLessons: 8, xpEarned: 0, accuracy: 0 },
      'class-1': { completedLessons: 0, totalLessons: 10, xpEarned: 0, accuracy: 0 },
      'class-2': { completedLessons: 0, totalLessons: 12, xpEarned: 0, accuracy: 0 },
      'class-3': { completedLessons: 0, totalLessons: 15, xpEarned: 0, accuracy: 0 },
      'class-4': { completedLessons: 0, totalLessons: 15, xpEarned: 0, accuracy: 0 },
      'class-5': { completedLessons: 0, totalLessons: 18, xpEarned: 0, accuracy: 0 },
      'class-6': { completedLessons: 0, totalLessons: 20, xpEarned: 0, accuracy: 0 }
    },
    science: {
      'pre-k': { completedLessons: 0, totalLessons: 5, xpEarned: 0, accuracy: 0 },
      kg: { completedLessons: 0, totalLessons: 8, xpEarned: 0, accuracy: 0 },
      'class-1': { completedLessons: 0, totalLessons: 10, xpEarned: 0, accuracy: 0 },
      'class-2': { completedLessons: 0, totalLessons: 12, xpEarned: 0, accuracy: 0 },
      'class-3': { completedLessons: 0, totalLessons: 15, xpEarned: 0, accuracy: 0 },
      'class-4': { completedLessons: 0, totalLessons: 15, xpEarned: 0, accuracy: 0 },
      'class-5': { completedLessons: 0, totalLessons: 18, xpEarned: 0, accuracy: 0 },
      'class-6': { completedLessons: 0, totalLessons: 20, xpEarned: 0, accuracy: 0 }
    },
    languages: {
      'pre-k': { completedLessons: 0, totalLessons: 5, xpEarned: 0, accuracy: 0 },
      kg: { completedLessons: 0, totalLessons: 8, xpEarned: 0, accuracy: 0 },
      'class-1': { completedLessons: 0, totalLessons: 10, xpEarned: 0, accuracy: 0 },
      'class-2': { completedLessons: 0, totalLessons: 12, xpEarned: 0, accuracy: 0 },
      'class-3': { completedLessons: 0, totalLessons: 15, xpEarned: 0, accuracy: 0 },
      'class-4': { completedLessons: 0, totalLessons: 15, xpEarned: 0, accuracy: 0 },
      'class-5': { completedLessons: 0, totalLessons: 18, xpEarned: 0, accuracy: 0 },
      'class-6': { completedLessons: 0, totalLessons: 20, xpEarned: 0, accuracy: 0 }
    }
  }
};

const initialGameState: GameState = {
  currentUser: initialUserProgress,
  currentQuestionIndex: 0,
  answers: {},
  isLessonComplete: false,
  sessionXP: 0,
  sessionAcorns: 0
};

type GameAction = 
  | { type: 'START_LESSON'; lesson: Lesson }
  | { type: 'NEXT_QUESTION' }
  | { type: 'ANSWER_QUESTION'; questionId: string; answer: string | string[] }
  | { type: 'COMPLETE_LESSON' }
  | { type: 'RESET_SESSION' }
  | { type: 'ADD_XP'; amount: number }
  | { type: 'ADD_ACORNS'; amount: number }
  | { type: 'UPDATE_STREAK' };

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'START_LESSON':
      return {
        ...state,
        currentLesson: action.lesson,
        currentQuestion: action.lesson.questions[0],
        currentQuestionIndex: 0,
        answers: {},
        isLessonComplete: false,
        sessionXP: 0,
        sessionAcorns: 0
      };

    case 'NEXT_QUESTION':
      if (!state.currentLesson) return state;
      
      const nextIndex = state.currentQuestionIndex + 1;
      const isComplete = nextIndex >= state.currentLesson.questions.length;
      
      return {
        ...state,
        currentQuestionIndex: nextIndex,
        currentQuestion: isComplete ? undefined : state.currentLesson.questions[nextIndex],
        isLessonComplete: isComplete
      };

    case 'ANSWER_QUESTION':
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.questionId]: action.answer
        }
      };

    case 'ADD_XP':
      return {
        ...state,
        sessionXP: state.sessionXP + action.amount,
        currentUser: {
          ...state.currentUser,
          currentXP: state.currentUser.currentXP + action.amount
        }
      };

    case 'ADD_ACORNS':
      return {
        ...state,
        sessionAcorns: state.sessionAcorns + action.amount,
        currentUser: {
          ...state.currentUser,
          currentAcorns: state.currentUser.currentAcorns + action.amount
        }
      };

    case 'COMPLETE_LESSON':
      if (!state.currentLesson) return state;
      
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          completedLessons: [...state.currentUser.completedLessons, state.currentLesson.id],
          lastActivityDate: new Date().toISOString()
        },
        isLessonComplete: true
      };

    case 'RESET_SESSION':
      return {
        ...state,
        currentLesson: undefined,
        currentQuestion: undefined,
        currentQuestionIndex: 0,
        answers: {},
        isLessonComplete: false,
        sessionXP: 0,
        sessionAcorns: 0
      };

    case 'UPDATE_STREAK':
      const today = new Date().toISOString().split('T')[0];
      const lastActivity = state.currentUser.lastActivityDate.split('T')[0];
      const daysDiff = Math.floor((new Date(today).getTime() - new Date(lastActivity).getTime()) / (1000 * 60 * 60 * 24));
      
      let newStreak = state.currentUser.streak;
      if (daysDiff === 1) {
        newStreak += 1;
      } else if (daysDiff > 1) {
        newStreak = 1;
      }
      
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          streak: newStreak,
          lastActivityDate: new Date().toISOString()
        }
      };

    default:
      return state;
  }
}

const GameContext = createContext<{
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
} | null>(null);

export function GameProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}