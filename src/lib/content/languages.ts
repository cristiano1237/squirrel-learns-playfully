import { Question, Lesson, Grade } from '@/types/game';

export const languagesContent: { [key in Grade]: Question[] } = {
  'pre-k': [
    {
      id: 'lang-pk-1',
      type: 'multiple-choice',
      difficulty: 'easy',
      prompt: 'What letter does "Apple" start with?',
      answers: [
        { id: 'a', text: 'B', isCorrect: false },
        { id: 'b', text: 'A', isCorrect: true },
        { id: 'c', text: 'C', isCorrect: false },
        { id: 'd', text: 'D', isCorrect: false }
      ],
      hint: 'Say "Apple" slowly - what sound comes first?',
      explanation: 'Apple starts with the letter A! A-A-Apple!',
      xpReward: 10,
      acornReward: 2,
      mascotFeedback: {
        correct: "A-mazing! Apple starts with A! 🍎",
        incorrect: "Say it with me: A-A-Apple! What letter is that?",
        encouragement: "Letters are the building blocks of words!"
      }
    },
    {
      id: 'lang-pk-2',
      type: 'multiple-choice',
      difficulty: 'easy',
      prompt: 'Which word rhymes with "Cat"?',
      answers: [
        { id: 'a', text: 'Dog', isCorrect: false },
        { id: 'b', text: 'Hat', isCorrect: true },
        { id: 'c', text: 'Sun', isCorrect: false },
        { id: 'd', text: 'Car', isCorrect: false }
      ],
      hint: 'Rhyming words sound similar at the end!',
      explanation: 'Cat and Hat rhyme because they both end with "at"!',
      xpReward: 10,
      acornReward: 2,
      mascotFeedback: {
        correct: "Hat's off to you! Cat and Hat rhyme! 👒",
        incorrect: "Listen to the ending sounds: cat... hat!",
        encouragement: "Rhyming words are like word music!"
      }
    }
  ],
  'kg': [
    {
      id: 'lang-kg-1',
      type: 'multiple-choice',
      difficulty: 'easy',
      prompt: 'Complete the sentence: "The big red ___"',
      answers: [
        { id: 'a', text: 'ball', isCorrect: true },
        { id: 'b', text: 'run', isCorrect: false },
        { id: 'c', text: 'happy', isCorrect: false },
        { id: 'd', text: 'jump', isCorrect: false }
      ],
      hint: 'What thing can be big and red?',
      explanation: 'A ball can be big and red! It makes sense in the sentence.',
      xpReward: 15,
      acornReward: 3,
      mascotFeedback: {
        correct: "Ball-istic! The big red ball! ⚽",
        incorrect: "Think of something round that can be big and red!",
        encouragement: "Sentences tell us complete thoughts!"
      }
    }
  ],
  'class-1': [
    {
      id: 'lang-c1-1',
      type: 'multiple-choice',
      difficulty: 'easy',
      prompt: 'Which word is a noun?',
      answers: [
        { id: 'a', text: 'run', isCorrect: false },
        { id: 'b', text: 'happy', isCorrect: false },
        { id: 'c', text: 'book', isCorrect: true },
        { id: 'd', text: 'quickly', isCorrect: false }
      ],
      hint: 'A noun is a person, place, or thing!',
      explanation: 'Book is a noun because it\'s a thing you can touch and read!',
      xpReward: 20,
      acornReward: 4,
      mascotFeedback: {
        correct: "Book-smart! Book is definitely a noun! 📚",
        incorrect: "Look for a person, place, or thing you can see or touch!",
        encouragement: "Nouns name the world around us!"
      }
    }
  ],
  'class-2': [
    {
      id: 'lang-c2-1',
      type: 'multiple-choice',
      difficulty: 'medium',
      prompt: 'What is the past tense of "go"?',
      answers: [
        { id: 'a', text: 'goes', isCorrect: false },
        { id: 'b', text: 'going', isCorrect: false },
        { id: 'c', text: 'went', isCorrect: true },
        { id: 'd', text: 'gone', isCorrect: false }
      ],
      hint: 'Yesterday I ___ to the store.',
      explanation: 'Went is the past tense of go. Yesterday I went to school!',
      xpReward: 25,
      acornReward: 5,
      mascotFeedback: {
        correct: "Went well! You know past tense! ⏰",
        incorrect: "Think about yesterday: I go → yesterday I ___?",
        encouragement: "Verbs change to show when things happened!"
      }
    }
  ],
  'class-3': [
    {
      id: 'lang-c3-1',
      type: 'multiple-choice',
      difficulty: 'medium',
      prompt: 'Which sentence has correct punctuation?',
      answers: [
        { id: 'a', text: 'What time is it', isCorrect: false },
        { id: 'b', text: 'What time is it?', isCorrect: true },
        { id: 'c', text: 'what time is it?', isCorrect: false },
        { id: 'd', text: 'What time is it.', isCorrect: false }
      ],
      hint: 'Questions need special punctuation marks!',
      explanation: 'Questions end with question marks (?) and start with capital letters!',
      xpReward: 30,
      acornReward: 6,
      mascotFeedback: {
        correct: "Question-ably correct! Questions need question marks! ❓",
        incorrect: "When asking a question, what punctuation mark do you need?",
        encouragement: "Punctuation helps readers understand our writing!"
      }
    }
  ],
  'class-4': [
    {
      id: 'lang-c4-1',
      type: 'multiple-choice',
      difficulty: 'medium',
      prompt: 'What is a synonym for "happy"?',
      answers: [
        { id: 'a', text: 'sad', isCorrect: false },
        { id: 'b', text: 'angry', isCorrect: false },
        { id: 'c', text: 'joyful', isCorrect: true },
        { id: 'd', text: 'tired', isCorrect: false }
      ],
      hint: 'Synonyms are words that mean almost the same thing!',
      explanation: 'Joyful and happy both mean feeling good and cheerful!',
      xpReward: 35,
      acornReward: 7,
      mascotFeedback: {
        correct: "Joy-fully correct! Happy and joyful mean the same! 😊",
        incorrect: "Which word means the same as feeling happy and good?",
        encouragement: "Synonyms give us different ways to say the same thing!"
      }
    }
  ],
  'class-5': [
    {
      id: 'lang-c5-1',
      type: 'multiple-choice',
      difficulty: 'hard',
      prompt: 'Which sentence uses a metaphor?',
      answers: [
        { id: 'a', text: 'The sun is like a giant ball', isCorrect: false },
        { id: 'b', text: 'Her voice is music to my ears', isCorrect: true },
        { id: 'c', text: 'He runs as fast as lightning', isCorrect: false },
        { id: 'd', text: 'The flower smells sweet', isCorrect: false }
      ],
      hint: 'A metaphor says one thing IS something else without using "like" or "as"!',
      explanation: 'A metaphor directly compares two things. "Her voice IS music" compares voice to music!',
      xpReward: 40,
      acornReward: 8,
      mascotFeedback: {
        correct: "Meta-phor-ific! That's a perfect metaphor! 🎵",
        incorrect: "Look for a sentence that says one thing IS something else!",
        encouragement: "Metaphors paint pictures with words!"
      }
    }
  ],
  'class-6': [
    {
      id: 'lang-c6-1',
      type: 'multiple-choice',
      difficulty: 'hard',
      prompt: 'Identify the subject in: "The brave knight rescued the princess."',
      answers: [
        { id: 'a', text: 'brave', isCorrect: false },
        { id: 'b', text: 'knight', isCorrect: true },
        { id: 'c', text: 'rescued', isCorrect: false },
        { id: 'd', text: 'princess', isCorrect: false }
      ],
      hint: 'The subject is who or what does the action in the sentence!',
      explanation: 'The knight is the subject because the knight is doing the action (rescuing)!',
      xpReward: 45,
      acornReward: 9,
      mascotFeedback: {
        correct: "Knightly done! The knight is the subject! ⚔️",
        incorrect: "Who is doing the rescuing in this sentence?",
        encouragement: "Subjects are the stars of sentences!"
      }
    }
  ]
};