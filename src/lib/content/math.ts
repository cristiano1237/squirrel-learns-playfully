import { Question, Lesson, Grade } from '@/types/game';

// Math content for all grades
export const mathContent: { [key in Grade]: Question[] } = {
  'pre-k': [
    {
      id: 'math-pk-1',
      type: 'multiple-choice',
      difficulty: 'easy',
      prompt: 'How many apples do you see?',
      answers: [
        { id: 'a', text: '1', isCorrect: false },
        { id: 'b', text: '2', isCorrect: false },
        { id: 'c', text: '3', isCorrect: true },
        { id: 'd', text: '4', isCorrect: false }
      ],
      hint: 'Count each apple carefully!',
      explanation: 'There are 3 apples in the picture.',
      xpReward: 10,
      acornReward: 2,
      mascotFeedback: {
        correct: "Great counting! You found all 3 apples! 🍎",
        incorrect: "Let's count together: 1... 2... 3! Try again!",
        encouragement: "Counting is fun! Let's practice more!"
      }
    },
    {
      id: 'math-pk-2',
      type: 'multiple-choice',
      difficulty: 'easy',
      prompt: 'Which shape is a circle?',
      answers: [
        { id: 'a', text: '🔺', isCorrect: false },
        { id: 'b', text: '⭕', isCorrect: true },
        { id: 'c', text: '⬜', isCorrect: false },
        { id: 'd', text: '⭐', isCorrect: false }
      ],
      hint: 'A circle is round like a ball!',
      explanation: 'A circle is perfectly round with no corners.',
      xpReward: 10,
      acornReward: 2,
      mascotFeedback: {
        correct: "Perfect! You know your shapes! ⭕",
        incorrect: "Look for the round shape with no corners!",
        encouragement: "Shapes are everywhere! Keep looking!"
      }
    },
    {
      id: 'math-pk-3',
      type: 'multiple-choice',
      difficulty: 'easy',
      prompt: 'What comes after 1?',
      answers: [
        { id: 'a', text: '0', isCorrect: false },
        { id: 'b', text: '2', isCorrect: true },
        { id: 'c', text: '3', isCorrect: false },
        { id: 'd', text: '5', isCorrect: false }
      ],
      hint: 'Count: 1, then what number comes next?',
      explanation: 'After 1 comes 2! Like counting: 1, 2, 3...',
      xpReward: 10,
      acornReward: 2,
      mascotFeedback: {
        correct: "Awesome! You know 1, 2! Let's keep counting!",
        incorrect: "Try counting on your fingers: 1, then 2!",
        encouragement: "Numbers are like a fun song! 1, 2, 3!"
      }
    }
  ],
  'kg': [
    {
      id: 'math-kg-1',
      type: 'multiple-choice',
      difficulty: 'easy',
      prompt: 'What is 2 + 1?',
      answers: [
        { id: 'a', text: '2', isCorrect: false },
        { id: 'b', text: '3', isCorrect: true },
        { id: 'c', text: '4', isCorrect: false },
        { id: 'd', text: '1', isCorrect: false }
      ],
      hint: 'Start with 2, then add 1 more!',
      explanation: 'When you have 2 things and add 1 more, you get 3 things total!',
      xpReward: 15,
      acornReward: 3,
      mascotFeedback: {
        correct: "Fantastic addition! 2 + 1 = 3! 🎉",
        incorrect: "Try using your fingers: hold up 2, then 1 more!",
        encouragement: "Adding is like putting groups together!"
      }
    },
    {
      id: 'math-kg-2',
      type: 'multiple-choice',
      difficulty: 'easy',
      prompt: 'Which number is bigger: 5 or 3?',
      answers: [
        { id: 'a', text: '3', isCorrect: false },
        { id: 'b', text: '5', isCorrect: true },
        { id: 'c', text: 'They are the same', isCorrect: false },
        { id: 'd', text: 'I don\'t know', isCorrect: false }
      ],
      hint: 'Count to 5: 1, 2, 3, 4, 5. Count to 3: 1, 2, 3. Which takes longer?',
      explanation: '5 is bigger than 3 because it comes after 3 when counting!',
      xpReward: 15,
      acornReward: 3,
      mascotFeedback: {
        correct: "You're right! 5 is bigger than 3! 🌟",
        incorrect: "Remember: the higher we count, the bigger the number!",
        encouragement: "Comparing numbers helps us understand size!"
      }
    }
  ],
  'class-1': [
    {
      id: 'math-c1-1',
      type: 'multiple-choice',
      difficulty: 'easy',
      prompt: 'What is 5 + 3?',
      answers: [
        { id: 'a', text: '6', isCorrect: false },
        { id: 'b', text: '7', isCorrect: false },
        { id: 'c', text: '8', isCorrect: true },
        { id: 'd', text: '9', isCorrect: false }
      ],
      hint: 'Count on from 5: 6, 7, 8!',
      explanation: 'Starting from 5 and counting 3 more: 6, 7, 8!',
      xpReward: 20,
      acornReward: 4,
      mascotFeedback: {
        correct: "Excellent! 5 + 3 = 8! You're becoming a math star! ⭐",
        incorrect: "Try counting on from 5: add 1 to get 6, add another 1 to get 7, add one more to get 8!",
        encouragement: "Addition is like counting forward!"
      }
    },
    {
      id: 'math-c1-2',
      type: 'multiple-choice',
      difficulty: 'easy',
      prompt: 'What is 10 - 2?',
      answers: [
        { id: 'a', text: '7', isCorrect: false },
        { id: 'b', text: '8', isCorrect: true },
        { id: 'c', text: '9', isCorrect: false },
        { id: 'd', text: '12', isCorrect: false }
      ],
      hint: 'Start with 10 and count backwards 2 steps!',
      explanation: 'Starting from 10 and going back 2: 9, 8!',
      xpReward: 20,
      acornReward: 4,
      mascotFeedback: {
        correct: "Great subtraction! 10 - 2 = 8! 🎯",
        incorrect: "Try counting backwards from 10: 9, 8!",
        encouragement: "Subtraction is like counting backwards!"
      }
    }
  ],
  'class-2': [
    {
      id: 'math-c2-1',
      type: 'multiple-choice',
      difficulty: 'medium',
      prompt: 'What is 15 + 7?',
      answers: [
        { id: 'a', text: '21', isCorrect: false },
        { id: 'b', text: '22', isCorrect: true },
        { id: 'c', text: '23', isCorrect: false },
        { id: 'd', text: '20', isCorrect: false }
      ],
      hint: 'Break it down: 15 + 5 = 20, then 20 + 2 = 22!',
      explanation: 'You can break 7 into 5 + 2. First: 15 + 5 = 20, then 20 + 2 = 22!',
      xpReward: 25,
      acornReward: 5,
      mascotFeedback: {
        correct: "Amazing! You solved 15 + 7 = 22! 🏆",
        incorrect: "Try breaking 7 into smaller parts: 5 + 2!",
        encouragement: "Breaking numbers apart makes adding easier!"
      }
    }
  ],
  'class-3': [
    {
      id: 'math-c3-1',
      type: 'multiple-choice',
      difficulty: 'medium',
      prompt: 'What is 6 × 4?',
      answers: [
        { id: 'a', text: '20', isCorrect: false },
        { id: 'b', text: '22', isCorrect: false },
        { id: 'c', text: '24', isCorrect: true },
        { id: 'd', text: '26', isCorrect: false }
      ],
      hint: 'Think of 6 groups of 4, or 4 + 4 + 4 + 4 + 4 + 4!',
      explanation: 'Multiplication means repeated addition: 4 + 4 + 4 + 4 + 4 + 4 = 24!',
      xpReward: 30,
      acornReward: 6,
      mascotFeedback: {
        correct: "Fantastic multiplication! 6 × 4 = 24! 🌟",
        incorrect: "Try adding 4 six times: 4 + 4 + 4 + 4 + 4 + 4!",
        encouragement: "Multiplication is repeated addition!"
      }
    }
  ],
  'class-4': [
    {
      id: 'math-c4-1',
      type: 'multiple-choice',
      difficulty: 'medium',
      prompt: 'What is 144 ÷ 12?',
      answers: [
        { id: 'a', text: '10', isCorrect: false },
        { id: 'b', text: '11', isCorrect: false },
        { id: 'c', text: '12', isCorrect: true },
        { id: 'd', text: '13', isCorrect: false }
      ],
      hint: 'How many groups of 12 can you make from 144?',
      explanation: '144 ÷ 12 = 12 because 12 × 12 = 144!',
      xpReward: 35,
      acornReward: 7,
      mascotFeedback: {
        correct: "Excellent division! 144 ÷ 12 = 12! 🎉",
        incorrect: "Think about the 12 times table: what times 12 equals 144?",
        encouragement: "Division and multiplication are opposite operations!"
      }
    }
  ],
  'class-5': [
    {
      id: 'math-c5-1',
      type: 'multiple-choice',
      difficulty: 'hard',
      prompt: 'What is 3/4 + 1/4?',
      answers: [
        { id: 'a', text: '4/8', isCorrect: false },
        { id: 'b', text: '4/4 or 1', isCorrect: true },
        { id: 'c', text: '3/4', isCorrect: false },
        { id: 'd', text: '1/4', isCorrect: false }
      ],
      hint: 'When the denominators are the same, just add the numerators!',
      explanation: '3/4 + 1/4 = (3+1)/4 = 4/4 = 1 whole!',
      xpReward: 40,
      acornReward: 8,
      mascotFeedback: {
        correct: "Perfect fraction addition! 3/4 + 1/4 = 1! 🏆",
        incorrect: "When denominators match, add the top numbers: 3 + 1 = 4!",
        encouragement: "Fractions show parts of a whole!"
      }
    }
  ],
  'class-6': [
    {
      id: 'math-c6-1',
      type: 'multiple-choice',
      difficulty: 'hard',
      prompt: 'If x + 8 = 15, what is x?',
      answers: [
        { id: 'a', text: '6', isCorrect: false },
        { id: 'b', text: '7', isCorrect: true },
        { id: 'c', text: '8', isCorrect: false },
        { id: 'd', text: '23', isCorrect: false }
      ],
      hint: 'What number plus 8 equals 15?',
      explanation: 'To find x, subtract 8 from both sides: x = 15 - 8 = 7!',
      xpReward: 45,
      acornReward: 9,
      mascotFeedback: {
        correct: "Amazing algebra! x = 7! You're solving equations! 🌟",
        incorrect: "Try subtracting 8 from 15 to find what x equals!",
        encouragement: "Algebra is like solving puzzles with numbers!"
      }
    }
  ]
};

export const mathLessons: { [key in Grade]: Lesson[] } = {
  'pre-k': [
    {
      id: 'math-pk-counting',
      title: 'Counting Fun',
      description: 'Learn to count objects and recognize numbers!',
      subject: 'math',
      grade: 'pre-k',
      difficulty: 'easy',
      questions: mathContent['pre-k'],
      estimatedTime: 10,
      xpReward: 30,
      acornReward: 6
    }
  ],
  'kg': [
    {
      id: 'math-kg-addition',
      title: 'First Addition',
      description: 'Start adding small numbers together!',
      subject: 'math',
      grade: 'kg',
      difficulty: 'easy',
      questions: mathContent['kg'],
      estimatedTime: 15,
      xpReward: 45,
      acornReward: 9
    }
  ],
  'class-1': [
    {
      id: 'math-c1-basics',
      title: 'Addition & Subtraction',
      description: 'Master basic addition and subtraction!',
      subject: 'math',
      grade: 'class-1',
      difficulty: 'easy',
      questions: mathContent['class-1'],
      estimatedTime: 20,
      xpReward: 60,
      acornReward: 12
    }
  ],
  'class-2': [
    {
      id: 'math-c2-twocdigit',
      title: 'Two-Digit Numbers',
      description: 'Work with bigger numbers!',
      subject: 'math',
      grade: 'class-2',
      difficulty: 'medium',
      questions: mathContent['class-2'],
      estimatedTime: 25,
      xpReward: 75,
      acornReward: 15
    }
  ],
  'class-3': [
    {
      id: 'math-c3-multiplication',
      title: 'Multiplication Magic',
      description: 'Learn multiplication tables!',
      subject: 'math',
      grade: 'class-3',
      difficulty: 'medium',
      questions: mathContent['class-3'],
      estimatedTime: 30,
      xpReward: 90,
      acornReward: 18
    }
  ],
  'class-4': [
    {
      id: 'math-c4-division',
      title: 'Division Mastery',
      description: 'Master division and long division!',
      subject: 'math',
      grade: 'class-4',
      difficulty: 'medium',
      questions: mathContent['class-4'],
      estimatedTime: 35,
      xpReward: 105,
      acornReward: 21
    }
  ],
  'class-5': [
    {
      id: 'math-c5-fractions',
      title: 'Fantastic Fractions',
      description: 'Understand fractions and decimals!',
      subject: 'math',
      grade: 'class-5',
      difficulty: 'hard',
      questions: mathContent['class-5'],
      estimatedTime: 40,
      xpReward: 120,
      acornReward: 24
    }
  ],
  'class-6': [
    {
      id: 'math-c6-algebra',
      title: 'Algebra Adventures',
      description: 'Start your journey with algebra!',
      subject: 'math',
      grade: 'class-6',
      difficulty: 'hard',
      questions: mathContent['class-6'],
      estimatedTime: 45,
      xpReward: 135,
      acornReward: 27
    }
  ]
};