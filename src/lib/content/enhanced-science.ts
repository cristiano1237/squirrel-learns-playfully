import { Question, Lesson, Grade } from '@/types/game';

export const enhancedScienceContent: { [key in Grade]: Question[] } = {
  'pre-k': [
    {
      id: 'science-pk-1',
      type: 'science-lab',
      difficulty: 'easy',
      prompt: 'Help the plant grow! What does it need?',
      answers: [
        { id: 'a', text: 'Water and sunlight', isCorrect: true },
        { id: 'b', text: 'Only toys', isCorrect: false },
        { id: 'c', text: 'Only candy', isCorrect: false },
        { id: 'd', text: 'TV shows', isCorrect: false }
      ],
      hint: 'Think about what helps flowers grow in a garden!',
      explanation: 'Perfect! Plants need water and sunlight to grow big and strong!',
      xpReward: 10,
      acornReward: 2,
      mascotFeedback: {
        correct: "Great gardening! Plants love water and sunshine! 🌱☀️",
        incorrect: "Plants are living things - they need water and sunlight!",
        encouragement: "You're learning about nature! Keep exploring!"
      },
      minigameConfig: {
        type: 'puzzle',
        settings: { theme: 'garden', interactive: true }
      },
      interactiveElements: {
        animations: [
          { type: 'grow', trigger: 'correct-answer', duration: 3000 },
          { type: 'water-pour', trigger: 'water-drop', duration: 1500 },
          { type: 'sun-shine', trigger: 'sun-click', duration: 2000 }
        ]
      }
    },
    {
      id: 'science-pk-2',
      type: 'drag-drop',
      difficulty: 'easy',
      prompt: 'Sort the animals by where they live!',
      answers: [
        { id: 'land', text: 'Land animals', isCorrect: true },
        { id: 'water', text: 'Water animals', isCorrect: true },
        { id: 'air', text: 'Flying animals', isCorrect: true }
      ],
      hint: 'Think about where each animal feels most at home!',
      explanation: 'Amazing sorting! Animals live in different places!',
      xpReward: 15,
      acornReward: 3,
      mascotFeedback: {
        correct: "Animal habitat hero! You know where they belong! 🏠🐾",
        incorrect: "Think about where you might see each animal!",
        encouragement: "Animals have special homes just like you!"
      },
      interactiveElements: {
        dragItems: [
          { id: 'fish', text: '🐠', category: 'water' },
          { id: 'bird', text: '🐦', category: 'air' },
          { id: 'dog', text: '🐕', category: 'land' },
          { id: 'whale', text: '🐋', category: 'water' },
          { id: 'cat', text: '🐱', category: 'land' },
          { id: 'eagle', text: '🦅', category: 'air' }
        ],
        dropZones: [
          { id: 'land-zone', label: '🌍 Land', accepts: ['land'] },
          { id: 'water-zone', label: '🌊 Water', accepts: ['water'] },
          { id: 'air-zone', label: '☁️ Sky', accepts: ['air'] }
        ]
      }
    },
    {
      id: 'science-pk-3',
      type: 'bubble-pop',
      difficulty: 'easy',
      prompt: 'Pop the weather bubbles! What do you see outside today?',
      answers: [
        { id: 'sunny', text: 'Sunny ☀️', isCorrect: true },
        { id: 'rainy', text: 'Rainy 🌧️', isCorrect: true },
        { id: 'cloudy', text: 'Cloudy ☁️', isCorrect: true },
        { id: 'snowy', text: 'Snowy ❄️', isCorrect: true }
      ],
      hint: 'All weather types are correct! Pop them all!',
      explanation: 'Weather watcher! You found all the weather types!',
      xpReward: 12,
      acornReward: 3,
      mascotFeedback: {
        correct: "Weather wizard! You know all the weather! 🌤️",
        incorrect: "Keep popping! Weather changes every day!",
        encouragement: "Watching weather is like being a scientist!"
      },
      interactiveElements: {
        bubbles: [
          { id: 'sun-bubble', value: '☀️', position: { x: 20, y: 25 } },
          { id: 'rain-bubble', value: '🌧️', position: { x: 40, y: 35 } },
          { id: 'cloud-bubble', value: '☁️', position: { x: 60, y: 30 } },
          { id: 'snow-bubble', value: '❄️', position: { x: 80, y: 40 } }
        ]
      }
    },
    {
      id: 'science-pk-4',
      type: 'memory-match',
      difficulty: 'easy',
      prompt: 'Match the baby animals with their parents!',
      answers: [
        { id: 'match1', text: 'Kitten ↔ Cat', isCorrect: true },
        { id: 'match2', text: 'Puppy ↔ Dog', isCorrect: true },
        { id: 'match3', text: 'Chick ↔ Hen', isCorrect: true }
      ],
      hint: 'Baby animals grow up to look like their parents!',
      explanation: 'Perfect matching! Baby animals have families too!',
      xpReward: 18,
      acornReward: 4,
      mascotFeedback: {
        correct: "Family finder! Baby animals love their parents! 👨‍👩‍👧‍👦",
        incorrect: "Think about which baby grows up to be which adult!",
        encouragement: "Animal families are just like human families!"
      },
      interactiveElements: {
        memoryCards: [
          { id: 'kitten', value: '🐱', pair: 'cat' },
          { id: 'puppy', value: '🐶', pair: 'dog' },
          { id: 'chick', value: '🐤', pair: 'hen' },
          { id: 'cat', value: '🐈', pair: 'kitten' },
          { id: 'dog', value: '🐕', pair: 'puppy' },
          { id: 'hen', value: '🐓', pair: 'chick' }
        ]
      }
    },
    {
      id: 'science-pk-5',
      type: 'tap-sequence',
      difficulty: 'easy',
      prompt: 'Touch the parts of your body: Head, Arms, Legs!',
      answers: [
        { id: 'body-parts', text: 'Head→Arms→Legs', isCorrect: true }
      ],
      hint: 'Start at the top and work your way down!',
      explanation: 'Body brilliant! You know your body parts!',
      xpReward: 15,
      acornReward: 3,
      mascotFeedback: {
        correct: "Body builder! You know all your parts! 🫶",
        incorrect: "Start with your head, then arms, then legs!",
        encouragement: "Your body is amazing and special!"
      }
    }
    // Continue with 25+ more Pre-K science questions...
  ],

  'kg': [
    {
      id: 'science-kg-1',
      type: 'science-lab',
      difficulty: 'easy',
      prompt: 'Conduct the ice experiment! What happens to water when it gets very cold?',
      answers: [
        { id: 'a', text: 'It disappears', isCorrect: false },
        { id: 'b', text: 'It turns to ice', isCorrect: true },
        { id: 'c', text: 'It gets hot', isCorrect: false },
        { id: 'd', text: 'It changes color', isCorrect: false }
      ],
      hint: 'Think about what happens in the freezer!',
      explanation: 'Ice-cellent experiment! Cold water becomes ice!',
      xpReward: 15,
      acornReward: 3,
      mascotFeedback: {
        correct: "Ice scientist! Cold water becomes ice! ❄️🧊",
        incorrect: "Think about ice cubes in the freezer!",
        encouragement: "Water can change forms - that's amazing!"
      },
      minigameConfig: {
        type: 'puzzle',
        settings: { theme: 'ice-lab', temperature: 'cold' }
      },
      interactiveElements: {
        animations: [
          { type: 'freeze', trigger: 'temperature-drop', duration: 3000 },
          { type: 'crystallize', trigger: 'ice-form', duration: 2000 }
        ]
      }
    },
    {
      id: 'science-kg-2',
      type: 'drag-drop',
      difficulty: 'easy',
      prompt: 'Help the seeds grow into plants! Drag them in the right order!',
      answers: [
        { id: 'growth', text: 'Seed→Sprout→Plant→Flower', isCorrect: true }
      ],
      hint: 'Plants start small and grow bigger!',
      explanation: 'Growth genius! You know how plants develop!',
      xpReward: 20,
      acornReward: 4,
      mascotFeedback: {
        correct: "Plant life expert! Seeds become beautiful flowers! 🌱🌸",
        incorrect: "Start with the tiny seed, then watch it grow!",
        encouragement: "Growing things is like magic!"
      },
      interactiveElements: {
        dragItems: [
          { id: 'seed', text: '🌰', category: 'stage1' },
          { id: 'sprout', text: '🌱', category: 'stage2' },
          { id: 'plant', text: '🪴', category: 'stage3' },
          { id: 'flower', text: '🌸', category: 'stage4' }
        ],
        dropZones: [
          { id: 'timeline', label: 'Plant Growth Timeline', accepts: ['stage1', 'stage2', 'stage3', 'stage4'] }
        ]
      }
    }
    // Continue with more KG questions...
  ],

  'class-1': [
    {
      id: 'science-c1-1',
      type: 'science-lab',
      difficulty: 'easy',
      prompt: 'Investigate plant parts! Which part drinks water for the plant?',
      answers: [
        { id: 'a', text: 'Leaves', isCorrect: false },
        { id: 'b', text: 'Flowers', isCorrect: false },
        { id: 'c', text: 'Roots', isCorrect: true },
        { id: 'd', text: 'Stem', isCorrect: false }
      ],
      hint: 'This part grows underground like tree branches!',
      explanation: 'Root researcher! Roots drink water for the plant!',
      xpReward: 20,
      acornReward: 4,
      mascotFeedback: {
        correct: "Root-ally awesome! Roots are the plant's water system! 🌳💧",
        incorrect: "Look underground - what part of the plant is there?",
        encouragement: "Plants have different parts with different jobs!"
      },
      minigameConfig: {
        type: 'puzzle',
        settings: { theme: 'plant-anatomy', interactive: true }
      }
    },
    {
      id: 'science-c1-2',
      type: 'memory-match',
      difficulty: 'medium',
      prompt: 'Match the animals with what they eat!',
      answers: [
        { id: 'match1', text: 'Rabbit ↔ Carrots', isCorrect: true },
        { id: 'match2', text: 'Lion ↔ Meat', isCorrect: true },
        { id: 'match3', text: 'Bee ↔ Nectar', isCorrect: true }
      ],
      hint: 'Think about what each animal likes to munch on!',
      explanation: 'Food chain champion! You know what animals eat!',
      xpReward: 25,
      acornReward: 5,
      mascotFeedback: {
        correct: "Feeding time! You know everyone's favorite food! 🍽️",
        incorrect: "Think about what you've seen animals eat!",
        encouragement: "Food chains connect all living things!"
      }
    }
    // Continue with more Class 1 questions...
  ],

  'class-2': [
    {
      id: 'science-c2-1',
      type: 'science-lab',
      difficulty: 'medium',
      prompt: 'Animal diet lab! What do we call animals that eat only plants?',
      answers: [
        { id: 'a', text: 'Carnivores', isCorrect: false },
        { id: 'b', text: 'Herbivores', isCorrect: true },
        { id: 'c', text: 'Omnivores', isCorrect: false },
        { id: 'd', text: 'Insectivores', isCorrect: false }
      ],
      hint: 'These animals love eating grass, leaves, and vegetables!',
      explanation: 'Herbivore expert! These animals eat only plants!',
      xpReward: 25,
      acornReward: 5,
      mascotFeedback: {
        correct: "Herb-alicious! Herbivores munch on plants all day! 🥬🐰",
        incorrect: "Think of animals like rabbits - what do they eat?",
        encouragement: "Different animals have different diets!"
      },
      minigameConfig: {
        type: 'puzzle',
        settings: { theme: 'animal-diet', categories: ['herbivore', 'carnivore', 'omnivore'] }
      }
    }
    // Continue with more Class 2 questions...
  ],

  'class-3': [
    {
      id: 'science-c3-1',
      type: 'science-lab',
      difficulty: 'medium',
      prompt: 'Solar system investigation! What is the center of our solar system?',
      answers: [
        { id: 'a', text: 'Earth', isCorrect: false },
        { id: 'b', text: 'Moon', isCorrect: false },
        { id: 'c', text: 'Sun', isCorrect: true },
        { id: 'd', text: 'Mars', isCorrect: false }
      ],
      hint: 'This bright star gives us light and warmth every day!',
      explanation: 'Space scientist! The Sun is our solar system\'s center!',
      xpReward: 30,
      acornReward: 6,
      mascotFeedback: {
        correct: "Sun-sational! The Sun rules our solar system! ☀️🌌",
        incorrect: "What gives us light and warmth every day?",
        encouragement: "Space is full of amazing things to discover!"
      },
      minigameConfig: {
        type: 'puzzle',
        settings: { theme: 'solar-system', planets: true }
      },
      interactiveElements: {
        animations: [
          { type: 'orbital', trigger: 'planet-click', duration: 5000 },
          { type: 'solar-flare', trigger: 'sun-click', duration: 2000 }
        ]
      }
    }
    // Continue with more Class 3 questions...
  ],

  'class-4': [
    {
      id: 'science-c4-1',
      type: 'science-lab',
      difficulty: 'medium',
      prompt: 'Water cycle laboratory! What happens during evaporation?',
      answers: [
        { id: 'a', text: 'Water turns to ice', isCorrect: false },
        { id: 'b', text: 'Water turns to vapor', isCorrect: true },
        { id: 'c', text: 'Water stays the same', isCorrect: false },
        { id: 'd', text: 'Water becomes solid', isCorrect: false }
      ],
      hint: 'Think about what happens to puddles on a hot day!',
      explanation: 'Evaporation expert! Water becomes invisible vapor!',
      xpReward: 35,
      acornReward: 7,
      mascotFeedback: {
        correct: "Evap-oration explanation! Water becomes vapor! 💨🌡️",
        incorrect: "Watch a pot of boiling water - what do you see rising?",
        encouragement: "The water cycle happens everywhere around us!"
      },
      minigameConfig: {
        type: 'puzzle',
        settings: { theme: 'water-cycle', animated: true }
      },
      interactiveElements: {
        animations: [
          { type: 'evaporate', trigger: 'heat-applied', duration: 3000 },
          { type: 'condense', trigger: 'cooling', duration: 2500 },
          { type: 'precipitate', trigger: 'cloud-full', duration: 2000 }
        ]
      }
    }
    // Continue with more Class 4 questions...
  ],

  'class-5': [
    {
      id: 'science-c5-1',
      type: 'science-lab',
      difficulty: 'hard',
      prompt: 'Blood cell research! What is the main job of red blood cells?',
      answers: [
        { id: 'a', text: 'Fight infections', isCorrect: false },
        { id: 'b', text: 'Carry oxygen', isCorrect: true },
        { id: 'c', text: 'Help blood clot', isCorrect: false },
        { id: 'd', text: 'Make antibodies', isCorrect: false }
      ],
      hint: 'These cells help bring something essential from your lungs!',
      explanation: 'Blood biology brilliant! Red cells carry life-giving oxygen!',
      xpReward: 40,
      acornReward: 8,
      mascotFeedback: {
        correct: "Blood-y brilliant! Red cells are oxygen taxis! 🩸🫁",
        incorrect: "Think about what you breathe in that your body needs!",
        encouragement: "Your body is an incredible machine!"
      },
      minigameConfig: {
        type: 'puzzle',
        settings: { theme: 'circulatory-system', microscopic: true }
      }
    }
    // Continue with more Class 5 questions...
  ],

  'class-6': [
    {
      id: 'science-c6-1',
      type: 'science-lab',
      difficulty: 'hard',
      prompt: 'Photosynthesis laboratory! What is photosynthesis?',
      answers: [
        { id: 'a', text: 'How animals breathe', isCorrect: false },
        { id: 'b', text: 'How plants make food using sunlight', isCorrect: true },
        { id: 'c', text: 'How water evaporates', isCorrect: false },
        { id: 'd', text: 'How rocks form', isCorrect: false }
      ],
      hint: 'This process helps plants create their own food from sunlight!',
      explanation: 'Photosynthesis phenomenon! Plants are solar-powered food makers!',
      xpReward: 45,
      acornReward: 9,
      mascotFeedback: {
        correct: "Photo-fantastic! Plants are nature's solar panels! 🌿☀️⚡",
        incorrect: "Think about how plants get energy without eating like animals!",
        encouragement: "Photosynthesis feeds the entire planet!"
      },
      minigameConfig: {
        type: 'puzzle',
        settings: { theme: 'cellular-processes', molecular: true }
      },
      interactiveElements: {
        animations: [
          { type: 'photosynthesis', trigger: 'sunlight-absorption', duration: 4000 },
          { type: 'glucose-production', trigger: 'chemical-reaction', duration: 3000 }
        ]
      }
    }
    // Continue with more Class 6 questions...
  ]
};

export const enhancedScienceLessons: { [key in Grade]: Lesson[] } = {
  'pre-k': [
    {
      id: 'science-pk-nature-explorer',
      title: 'Nature Explorer',
      description: 'Discover plants, animals, and weather through fun experiments!',
      subject: 'science',
      grade: 'pre-k',
      difficulty: 'easy',
      questions: enhancedScienceContent['pre-k'].slice(0, 15),
      estimatedTime: 15,
      xpReward: 150,
      acornReward: 30
    },
    {
      id: 'science-pk-body-parts',
      title: 'My Amazing Body',
      description: 'Learn about your body parts and how they help you!',
      subject: 'science',
      grade: 'pre-k',
      difficulty: 'easy',
      questions: enhancedScienceContent['pre-k'].slice(15, 25),
      estimatedTime: 12,
      xpReward: 120,
      acornReward: 24
    }
  ],
  'kg': [
    {
      id: 'science-kg-matter-magic',
      title: 'Matter Magic',
      description: 'Explore how things change with temperature and time!',
      subject: 'science',
      grade: 'kg',
      difficulty: 'easy',
      questions: enhancedScienceContent['kg'].slice(0, 20),
      estimatedTime: 20,
      xpReward: 200,
      acornReward: 40
    }
  ],
  'class-1': [
    {
      id: 'science-c1-living-lab',
      title: 'Living Things Lab',
      description: 'Study plants and animals in our virtual laboratory!',
      subject: 'science',
      grade: 'class-1',
      difficulty: 'easy',
      questions: enhancedScienceContent['class-1'].slice(0, 25),
      estimatedTime: 25,
      xpReward: 250,
      acornReward: 50
    }
  ],
  'class-2': [
    {
      id: 'science-c2-animal-kingdom',
      title: 'Animal Kingdom',
      description: 'Classify animals by their diets and habitats!',
      subject: 'science',
      grade: 'class-2',
      difficulty: 'medium',
      questions: enhancedScienceContent['class-2'].slice(0, 30),
      estimatedTime: 30,
      xpReward: 300,
      acornReward: 60
    }
  ],
  'class-3': [
    {
      id: 'science-c3-space-station',
      title: 'Space Station',
      description: 'Journey through our solar system and beyond!',
      subject: 'science',
      grade: 'class-3',
      difficulty: 'medium',
      questions: enhancedScienceContent['class-3'].slice(0, 35),
      estimatedTime: 35,
      xpReward: 350,
      acornReward: 70
    }
  ],
  'class-4': [
    {
      id: 'science-c4-weather-center',
      title: 'Weather Research Center',
      description: 'Investigate the water cycle and weather patterns!',
      subject: 'science',
      grade: 'class-4',
      difficulty: 'medium',
      questions: enhancedScienceContent['class-4'].slice(0, 30),
      estimatedTime: 40,
      xpReward: 400,
      acornReward: 80
    }
  ],
  'class-5': [
    {
      id: 'science-c5-human-body',
      title: 'Human Body Systems',
      description: 'Explore the amazing systems that keep you alive!',
      subject: 'science',
      grade: 'class-5',
      difficulty: 'hard',
      questions: enhancedScienceContent['class-5'].slice(0, 35),
      estimatedTime: 45,
      xpReward: 450,
      acornReward: 90
    }
  ],
  'class-6': [
    {
      id: 'science-c6-cellular-world',
      title: 'Cellular World',
      description: 'Discover the microscopic world of cells and molecules!',
      subject: 'science',
      grade: 'class-6',
      difficulty: 'hard',
      questions: enhancedScienceContent['class-6'].slice(0, 40),
      estimatedTime: 50,
      xpReward: 500,
      acornReward: 100
    }
  ]
};