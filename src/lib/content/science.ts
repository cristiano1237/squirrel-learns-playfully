import { Question, Lesson, Grade } from '@/types/game';

export const scienceContent: { [key in Grade]: Question[] } = {
  'pre-k': [
    {
      id: 'science-pk-1',
      type: 'multiple-choice',
      difficulty: 'easy',
      prompt: 'What do plants need to grow?',
      answers: [
        { id: 'a', text: 'Water and sunlight', isCorrect: true },
        { id: 'b', text: 'Only toys', isCorrect: false },
        { id: 'c', text: 'Only candy', isCorrect: false },
        { id: 'd', text: 'TV shows', isCorrect: false }
      ],
      hint: 'Think about what helps flowers grow in a garden!',
      explanation: 'Plants need water and sunlight to grow big and strong!',
      xpReward: 10,
      acornReward: 2,
      mascotFeedback: {
        correct: "Great! Plants love water and sunshine! 🌱☀️",
        incorrect: "Plants are living things - they need water and sunlight!",
        encouragement: "You're learning about nature! Keep exploring!"
      }
    },
    {
      id: 'science-pk-2',
      type: 'multiple-choice',
      difficulty: 'easy',
      prompt: 'Which animal says "Moo"?',
      answers: [
        { id: 'a', text: 'Dog', isCorrect: false },
        { id: 'b', text: 'Cat', isCorrect: false },
        { id: 'c', text: 'Cow', isCorrect: true },
        { id: 'd', text: 'Duck', isCorrect: false }
      ],
      hint: 'This animal gives us milk!',
      explanation: 'Cows say "Moo" and they give us milk!',
      xpReward: 10,
      acornReward: 2,
      mascotFeedback: {
        correct: "Moo-nificent! Cows say moo! 🐄",
        incorrect: "Listen carefully - which animal goes moo and gives milk?",
        encouragement: "Animals make different sounds! So fun to learn!"
      }
    }
  ],
  'kg': [
    {
      id: 'science-kg-1',
      type: 'multiple-choice',
      difficulty: 'easy',
      prompt: 'What happens to water when it gets very cold?',
      answers: [
        { id: 'a', text: 'It disappears', isCorrect: false },
        { id: 'b', text: 'It turns to ice', isCorrect: true },
        { id: 'c', text: 'It gets hot', isCorrect: false },
        { id: 'd', text: 'It changes color', isCorrect: false }
      ],
      hint: 'Think about what happens in the freezer!',
      explanation: 'When water gets very cold, it freezes and becomes ice!',
      xpReward: 15,
      acornReward: 3,
      mascotFeedback: {
        correct: "Ice-cellent! Cold water becomes ice! ❄️",
        incorrect: "Think about ice cubes in the freezer!",
        encouragement: "Water can change forms - that's amazing!"
      }
    }
  ],
  'class-1': [
    {
      id: 'science-c1-1',
      type: 'multiple-choice',
      difficulty: 'easy',
      prompt: 'Which part of a plant takes in water?',
      answers: [
        { id: 'a', text: 'Leaves', isCorrect: false },
        { id: 'b', text: 'Flowers', isCorrect: false },
        { id: 'c', text: 'Roots', isCorrect: true },
        { id: 'd', text: 'Stem', isCorrect: false }
      ],
      hint: 'This part grows underground like tree branches!',
      explanation: 'Roots grow underground and drink water for the plant!',
      xpReward: 20,
      acornReward: 4,
      mascotFeedback: {
        correct: "Root-ally awesome! Roots drink water! 🌳",
        incorrect: "Look underground - what part of the plant is there?",
        encouragement: "Plants have different parts with different jobs!"
      }
    }
  ],
  'class-2': [
    {
      id: 'science-c2-1',
      type: 'multiple-choice',
      difficulty: 'medium',
      prompt: 'What do we call animals that eat only plants?',
      answers: [
        { id: 'a', text: 'Carnivores', isCorrect: false },
        { id: 'b', text: 'Herbivores', isCorrect: true },
        { id: 'c', text: 'Omnivores', isCorrect: false },
        { id: 'd', text: 'Insectivores', isCorrect: false }
      ],
      hint: 'These animals love eating grass, leaves, and vegetables!',
      explanation: 'Herbivores are animals that eat only plants, like rabbits and deer!',
      xpReward: 25,
      acornReward: 5,
      mascotFeedback: {
        correct: "Herb-alicious! Herbivores eat plants! 🥬",
        incorrect: "Think of animals like rabbits - what do they eat?",
        encouragement: "Different animals eat different foods!"
      }
    }
  ],
  'class-3': [
    {
      id: 'science-c3-1',
      type: 'multiple-choice',
      difficulty: 'medium',
      prompt: 'What is the center of our solar system?',
      answers: [
        { id: 'a', text: 'Earth', isCorrect: false },
        { id: 'b', text: 'Moon', isCorrect: false },
        { id: 'c', text: 'Sun', isCorrect: true },
        { id: 'd', text: 'Mars', isCorrect: false }
      ],
      hint: 'This bright star gives us light and warmth!',
      explanation: 'The Sun is the center of our solar system and all planets orbit around it!',
      xpReward: 30,
      acornReward: 6,
      mascotFeedback: {
        correct: "Sun-sational! The Sun is our solar system's center! ☀️",
        incorrect: "What gives us light and warmth every day?",
        encouragement: "Space is full of amazing things to discover!"
      }
    }
  ],
  'class-4': [
    {
      id: 'science-c4-1',
      type: 'multiple-choice',
      difficulty: 'medium',
      prompt: 'What happens during evaporation?',
      answers: [
        { id: 'a', text: 'Water turns to ice', isCorrect: false },
        { id: 'b', text: 'Water turns to vapor', isCorrect: true },
        { id: 'c', text: 'Water stays the same', isCorrect: false },
        { id: 'd', text: 'Water becomes solid', isCorrect: false }
      ],
      hint: 'Think about what happens to puddles on a hot day!',
      explanation: 'During evaporation, liquid water changes into water vapor and rises into the air!',
      xpReward: 35,
      acornReward: 7,
      mascotFeedback: {
        correct: "Evap-oration explanation! Water becomes vapor! 💨",
        incorrect: "Watch a pot of boiling water - what do you see rising?",
        encouragement: "The water cycle is happening all around us!"
      }
    }
  ],
  'class-5': [
    {
      id: 'science-c5-1',
      type: 'multiple-choice',
      difficulty: 'hard',
      prompt: 'What is the function of red blood cells?',
      answers: [
        { id: 'a', text: 'Fight infections', isCorrect: false },
        { id: 'b', text: 'Carry oxygen', isCorrect: true },
        { id: 'c', text: 'Help blood clot', isCorrect: false },
        { id: 'd', text: 'Make antibodies', isCorrect: false }
      ],
      hint: 'These cells help bring something essential from your lungs to your body!',
      explanation: 'Red blood cells carry oxygen from your lungs to all parts of your body!',
      xpReward: 40,
      acornReward: 8,
      mascotFeedback: {
        correct: "Blood-y brilliant! Red cells carry oxygen! 🩸",
        incorrect: "Think about what you breathe in that your body needs!",
        encouragement: "Your body is an amazing machine!"
      }
    }
  ],
  'class-6': [
    {
      id: 'science-c6-1',
      type: 'multiple-choice',
      difficulty: 'hard',
      prompt: 'What is photosynthesis?',
      answers: [
        { id: 'a', text: 'How animals breathe', isCorrect: false },
        { id: 'b', text: 'How plants make food using sunlight', isCorrect: true },
        { id: 'c', text: 'How water evaporates', isCorrect: false },
        { id: 'd', text: 'How rocks form', isCorrect: false }
      ],
      hint: 'This process helps plants make their own food using sunlight!',
      explanation: 'Photosynthesis is how plants use sunlight, water, and carbon dioxide to make glucose (their food)!',
      xpReward: 45,
      acornReward: 9,
      mascotFeedback: {
        correct: "Photo-fantastic! Plants make food from sunlight! 🌿☀️",
        incorrect: "Think about how plants get energy without eating like animals do!",
        encouragement: "Plants are nature's solar panels!"
      }
    }
  ]
};