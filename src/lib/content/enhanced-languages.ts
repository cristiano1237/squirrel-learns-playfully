import { Question, Lesson, Grade } from '@/types/game';

export const enhancedLanguagesContent: { [key in Grade]: Question[] } = {
  'pre-k': [
    {
      id: 'lang-pk-1',
      type: 'word-builder',
      difficulty: 'easy',
      prompt: 'Build the word! What letter does "Apple" start with?',
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
        correct: "A-mazing! Apple starts with A! 🍎📝",
        incorrect: "Say it with me: A-A-Apple! What letter is that?",
        encouragement: "Letters are the building blocks of words!"
      },
      interactiveElements: {
        animations: [
          { type: 'letter-trace', trigger: 'correct-answer', duration: 2000 },
          { type: 'apple-appear', trigger: 'word-complete', duration: 1500 }
        ]
      }
    },
    {
      id: 'lang-pk-2',
      type: 'memory-match',
      difficulty: 'easy',
      prompt: 'Match the rhyming words! Find words that sound the same at the end!',
      answers: [
        { id: 'rhyme1', text: 'Cat ↔ Hat', isCorrect: true },
        { id: 'rhyme2', text: 'Dog ↔ Log', isCorrect: true },
        { id: 'rhyme3', text: 'Sun ↔ Fun', isCorrect: true }
      ],
      hint: 'Rhyming words sound similar at the end!',
      explanation: 'Rhyme time! All these words have matching endings!',
      xpReward: 15,
      acornReward: 3,
      mascotFeedback: {
        correct: "Rhyme master! These words sound like music! 🎵🎶",
        incorrect: "Listen to the ending sounds: cat... hat!",
        encouragement: "Rhyming words are like word music!"
      },
      interactiveElements: {
        memoryCards: [
          { id: 'cat', value: '🐱 Cat', pair: 'hat' },
          { id: 'dog', value: '🐕 Dog', pair: 'log' },
          { id: 'sun', value: '☀️ Sun', pair: 'fun' },
          { id: 'hat', value: '👒 Hat', pair: 'cat' },
          { id: 'log', value: '🪵 Log', pair: 'dog' },
          { id: 'fun', value: '🎉 Fun', pair: 'sun' }
        ],
        animations: [
          { type: 'rhyme-bounce', trigger: 'match-found', duration: 1000 }
        ]
      }
    },
    {
      id: 'lang-pk-3',
      type: 'drag-drop',
      difficulty: 'easy',
      prompt: 'Sort the pictures by their starting sound!',
      answers: [
        { id: 'b-sounds', text: 'B sounds', isCorrect: true },
        { id: 'c-sounds', text: 'C sounds', isCorrect: true },
        { id: 'd-sounds', text: 'D sounds', isCorrect: true }
      ],
      hint: 'Say each word slowly and listen to the first sound!',
      explanation: 'Sound sorting superstar! You know your letter sounds!',
      xpReward: 18,
      acornReward: 4,
      mascotFeedback: {
        correct: "Sound detective! You sorted all the letters perfectly! 🔍🔤",
        incorrect: "Listen carefully to the first sound of each word!",
        encouragement: "Letter sounds help us read and write!"
      },
      interactiveElements: {
        dragItems: [
          { id: 'ball', text: '⚽ Ball', category: 'b-sound' },
          { id: 'cat', text: '🐱 Cat', category: 'c-sound' },
          { id: 'dog', text: '🐕 Dog', category: 'd-sound' },
          { id: 'bird', text: '🐦 Bird', category: 'b-sound' },
          { id: 'car', text: '🚗 Car', category: 'c-sound' },
          { id: 'duck', text: '🦆 Duck', category: 'd-sound' }
        ],
        dropZones: [
          { id: 'b-zone', label: 'B sounds', accepts: ['b-sound'] },
          { id: 'c-zone', label: 'C sounds', accepts: ['c-sound'] },
          { id: 'd-zone', label: 'D sounds', accepts: ['d-sound'] }
        ]
      }
    },
    {
      id: 'lang-pk-4',
      type: 'tap-sequence',
      difficulty: 'easy',
      prompt: 'Tap the letters to spell C-A-T!',
      answers: [
        { id: 'spell-cat', text: 'C→A→T', isCorrect: true }
      ],
      hint: 'Start with C, then A, then T!',
      explanation: 'Perfect spelling! You spelled CAT!',
      xpReward: 20,
      acornReward: 4,
      mascotFeedback: {
        correct: "Spelling star! C-A-T spells cat! 🐱⭐",
        incorrect: "Remember: C comes first, then A, then T!",
        encouragement: "Spelling helps us write words!"
      },
      interactiveElements: {
        sequence: [
          { id: 'letter-c', text: 'C', order: 1 },
          { id: 'letter-a', text: 'A', order: 2 },
          { id: 'letter-t', text: 'T', order: 3 }
        ],
        animations: [
          { type: 'letter-glow', trigger: 'tap', duration: 500 },
          { type: 'word-form', trigger: 'complete', duration: 2000 }
        ]
      }
    },
    {
      id: 'lang-pk-5',
      type: 'bubble-pop',
      difficulty: 'easy',
      prompt: 'Pop the bubbles with UPPERCASE letters!',
      answers: [
        { id: 'uppercase', text: 'A, B, C', isCorrect: true }
      ],
      hint: 'Look for the BIG letters!',
      explanation: 'Capital letter champion! You found all the big letters!',
      xpReward: 12,
      acornReward: 3,
      mascotFeedback: {
        correct: "Capital performance! You know big letters! 🎪🔤",
        incorrect: "Look for the biggest, tallest letters!",
        encouragement: "Capital letters start sentences and names!"
      },
      interactiveElements: {
        bubbles: [
          { id: 'cap-a', value: 'A', position: { x: 20, y: 30 } },
          { id: 'low-a', value: 'a', position: { x: 35, y: 40 } },
          { id: 'cap-b', value: 'B', position: { x: 50, y: 25 } },
          { id: 'low-b', value: 'b', position: { x: 65, y: 45 } },
          { id: 'cap-c', value: 'C', position: { x: 80, y: 35 } }
        ]
      }
    }
    // Continue with 25+ more Pre-K language questions...
  ],

  'kg': [
    {
      id: 'lang-kg-1',
      type: 'word-builder',
      difficulty: 'easy',
      prompt: 'Build a sentence! Complete: "The big red ___"',
      answers: [
        { id: 'a', text: 'ball', isCorrect: true },
        { id: 'b', text: 'run', isCorrect: false },
        { id: 'c', text: 'happy', isCorrect: false },
        { id: 'd', text: 'jump', isCorrect: false }
      ],
      hint: 'What thing can be big and red?',
      explanation: 'Sentence builder! "The big red ball" makes perfect sense!',
      xpReward: 15,
      acornReward: 3,
      mascotFeedback: {
        correct: "Sentence superstar! The big red ball! ⚽📝",
        incorrect: "Think of something round that can be big and red!",
        encouragement: "Sentences tell us complete thoughts!"
      },
      interactiveElements: {
        animations: [
          { type: 'word-slide', trigger: 'correct-choice', duration: 1500 },
          { type: 'sentence-complete', trigger: 'word-placed', duration: 2000 }
        ]
      }
    },
    {
      id: 'lang-kg-2',
      type: 'story-order',
      difficulty: 'easy',
      prompt: 'Put the story pictures in the right order!',
      answers: [
        { id: 'story-order', text: 'Plant seed → Water → Grows → Flower blooms', isCorrect: true }
      ],
      hint: 'What happens first when growing a plant?',
      explanation: 'Story master! You know how stories should flow!',
      xpReward: 20,
      acornReward: 4,
      mascotFeedback: {
        correct: "Story genius! Your tale flows perfectly! 📚✨",
        incorrect: "Think about what happens first, then next, then next!",
        encouragement: "Stories have a beginning, middle, and end!"
      },
      interactiveElements: {
        dragItems: [
          { id: 'seed', text: '🌰 Plant Seed', category: 'story' },
          { id: 'water', text: '💧 Water Plant', category: 'story' },
          { id: 'grow', text: '🌱 Plant Grows', category: 'story' },
          { id: 'bloom', text: '🌸 Flower Blooms', category: 'story' }
        ],
        dropZones: [
          { id: 'story-timeline', label: 'Story Order', accepts: ['story'] }
        ]
      }
    },
    {
      id: 'lang-kg-3',
      type: 'memory-match',
      difficulty: 'medium',
      prompt: 'Match the opposite words!',
      answers: [
        { id: 'opp1', text: 'Big ↔ Small', isCorrect: true },
        { id: 'opp2', text: 'Hot ↔ Cold', isCorrect: true },
        { id: 'opp3', text: 'Happy ↔ Sad', isCorrect: true }
      ],
      hint: 'Opposites are words that mean the complete reverse!',
      explanation: 'Opposite expert! These words are total opposites!',
      xpReward: 25,
      acornReward: 5,
      mascotFeedback: {
        correct: "Opposite genius! You know all the contrasts! ⚡🔄",
        incorrect: "Think about words that mean the complete reverse!",
        encouragement: "Opposites help us describe differences!"
      },
      interactiveElements: {
        memoryCards: [
          { id: 'big', value: '🐘 Big', pair: 'small' },
          { id: 'hot', value: '🔥 Hot', pair: 'cold' },
          { id: 'happy', value: '😊 Happy', pair: 'sad' },
          { id: 'small', value: '🐭 Small', pair: 'big' },
          { id: 'cold', value: '❄️ Cold', pair: 'hot' },
          { id: 'sad', value: '😢 Sad', pair: 'happy' }
        ]
      }
    }
    // Continue with more KG questions...
  ],

  'class-1': [
    {
      id: 'lang-c1-1',
      type: 'word-builder',
      difficulty: 'easy',
      prompt: 'Word detective! Which word is a noun (person, place, or thing)?',
      answers: [
        { id: 'a', text: 'run', isCorrect: false },
        { id: 'b', text: 'happy', isCorrect: false },
        { id: 'c', text: 'book', isCorrect: true },
        { id: 'd', text: 'quickly', isCorrect: false }
      ],
      hint: 'A noun is something you can touch or see!',
      explanation: 'Noun detective! Book is a thing you can hold and read!',
      xpReward: 20,
      acornReward: 4,
      mascotFeedback: {
        correct: "Noun navigator! Book is definitely a thing! 📚🔍",
        incorrect: "Look for something you can touch and see!",
        encouragement: "Nouns name the world around us!"
      },
      interactiveElements: {
        animations: [
          { type: 'noun-highlight', trigger: 'correct-choice', duration: 1500 },
          { type: 'book-open', trigger: 'word-selected', duration: 2000 }
        ]
      }
    },
    {
      id: 'lang-c1-2',
      type: 'drag-drop',
      difficulty: 'medium',
      prompt: 'Sort the action words (verbs) into the action box!',
      answers: [
        { id: 'verbs', text: 'Action words', isCorrect: true }
      ],
      hint: 'Action words tell us what someone is doing!',
      explanation: 'Action hero! You found all the doing words!',
      xpReward: 25,
      acornReward: 5,
      mascotFeedback: {
        correct: "Action superstar! You know all the doing words! 🏃‍♂️⚡",
        incorrect: "Look for words that show what people do!",
        encouragement: "Verbs make sentences come alive with action!"
      },
      interactiveElements: {
        dragItems: [
          { id: 'run', text: '🏃 Run', category: 'verb' },
          { id: 'jump', text: '🦘 Jump', category: 'verb' },
          { id: 'sing', text: '🎤 Sing', category: 'verb' },
          { id: 'book', text: '📚 Book', category: 'noun' },
          { id: 'happy', text: '😊 Happy', category: 'adjective' }
        ],
        dropZones: [
          { id: 'verb-box', label: 'Action Words', accepts: ['verb'] },
          { id: 'other-box', label: 'Other Words', accepts: ['noun', 'adjective'] }
        ]
      }
    }
    // Continue with more Class 1 questions...
  ],

  'class-2': [
    {
      id: 'lang-c2-1',
      type: 'word-builder',
      difficulty: 'medium',
      prompt: 'Time travel with verbs! What is the past tense of "go"?',
      answers: [
        { id: 'a', text: 'goes', isCorrect: false },
        { id: 'b', text: 'going', isCorrect: false },
        { id: 'c', text: 'went', isCorrect: true },
        { id: 'd', text: 'gone', isCorrect: false }
      ],
      hint: 'Yesterday I ___ to the store.',
      explanation: 'Time traveler! "Went" is the past tense of "go"!',
      xpReward: 25,
      acornReward: 5,
      mascotFeedback: {
        correct: "Time master! Yesterday I went to school! ⏰📚",
        incorrect: "Think about yesterday: I go → yesterday I ___?",
        encouragement: "Verbs change to show when things happened!"
      },
      interactiveElements: {
        animations: [
          { type: 'time-machine', trigger: 'correct-answer', duration: 3000 },
          { type: 'verb-transform', trigger: 'tense-change', duration: 2000 }
        ]
      }
    },
    {
      id: 'lang-c2-2',
      type: 'story-order',
      difficulty: 'medium',
      prompt: 'Order the events to tell a complete story!',
      answers: [
        { id: 'story', text: 'Sarah woke up → Got dressed → Ate breakfast → Went to school', isCorrect: true }
      ],
      hint: 'What does Sarah do first in the morning?',
      explanation: 'Story architect! You built a perfect morning story!',
      xpReward: 30,
      acornReward: 6,
      mascotFeedback: {
        correct: "Story builder! Sarah's day flows perfectly! 🌅📖",
        incorrect: "Think about what you do first when you wake up!",
        encouragement: "Good stories follow a logical order!"
      }
    }
    // Continue with more Class 2 questions...
  ],

  'class-3': [
    {
      id: 'lang-c3-1',
      type: 'word-builder',
      difficulty: 'medium',
      prompt: 'Punctuation police! Which sentence has correct punctuation?',
      answers: [
        { id: 'a', text: 'What time is it', isCorrect: false },
        { id: 'b', text: 'What time is it?', isCorrect: true },
        { id: 'c', text: 'what time is it?', isCorrect: false },
        { id: 'd', text: 'What time is it.', isCorrect: false }
      ],
      hint: 'Questions need special punctuation marks and capital letters!',
      explanation: 'Punctuation perfect! Questions end with ? and start with capitals!',
      xpReward: 30,
      acornReward: 6,
      mascotFeedback: {
        correct: "Punctuation champion! Perfect question mark! ❓👮‍♀️",
        incorrect: "Questions need question marks and capital letters!",
        encouragement: "Punctuation helps readers understand our writing!"
      },
      interactiveElements: {
        animations: [
          { type: 'punctuation-pop', trigger: 'correct-choice', duration: 1000 },
          { type: 'capital-shine', trigger: 'sentence-complete', duration: 1500 }
        ]
      }
    }
    // Continue with more Class 3 questions...
  ],

  'class-4': [
    {
      id: 'lang-c4-1',
      type: 'memory-match',
      difficulty: 'medium',
      prompt: 'Match the synonyms (words that mean the same thing)!',
      answers: [
        { id: 'syn1', text: 'Happy ↔ Joyful', isCorrect: true },
        { id: 'syn2', text: 'Big ↔ Large', isCorrect: true },
        { id: 'syn3', text: 'Fast ↔ Quick', isCorrect: true }
      ],
      hint: 'Synonyms are different words that mean almost the same thing!',
      explanation: 'Synonym scholar! These words are meaning twins!',
      xpReward: 35,
      acornReward: 7,
      mascotFeedback: {
        correct: "Synonym superstar! These words are meaning twins! 👯‍♀️💫",
        incorrect: "Look for words that mean almost exactly the same thing!",
        encouragement: "Synonyms give us variety in our writing!"
      },
      interactiveElements: {
        memoryCards: [
          { id: 'happy', value: '😊 Happy', pair: 'joyful' },
          { id: 'big', value: '🐘 Big', pair: 'large' },
          { id: 'fast', value: '🏃 Fast', pair: 'quick' },
          { id: 'joyful', value: '🎉 Joyful', pair: 'happy' },
          { id: 'large', value: '🏢 Large', pair: 'big' },
          { id: 'quick', value: '⚡ Quick', pair: 'fast' }
        ]
      }
    }
    // Continue with more Class 4 questions...
  ],

  'class-5': [
    {
      id: 'lang-c5-1',
      type: 'word-builder',
      difficulty: 'hard',
      prompt: 'Metaphor detective! Which sentence uses a metaphor?',
      answers: [
        { id: 'a', text: 'The sun is like a giant ball', isCorrect: false },
        { id: 'b', text: 'Her voice is music to my ears', isCorrect: true },
        { id: 'c', text: 'He runs as fast as lightning', isCorrect: false },
        { id: 'd', text: 'The flower smells sweet', isCorrect: false }
      ],
      hint: 'A metaphor says one thing IS something else without "like" or "as"!',
      explanation: 'Metaphor master! "Her voice IS music" directly compares voice to music!',
      xpReward: 40,
      acornReward: 8,
      mascotFeedback: {
        correct: "Meta-phor-ific! That's poetry in motion! 🎵🔍",
        incorrect: "Look for a sentence that says one thing IS something else!",
        encouragement: "Metaphors paint beautiful pictures with words!"
      },
      interactiveElements: {
        animations: [
          { type: 'metaphor-magic', trigger: 'correct-choice', duration: 3000 },
          { type: 'word-transform', trigger: 'metaphor-found', duration: 2000 }
        ]
      }
    }
    // Continue with more Class 5 questions...
  ],

  'class-6': [
    {
      id: 'lang-c6-1',
      type: 'word-builder',
      difficulty: 'hard',
      prompt: 'Grammar guru! Identify the subject in: "The brave knight rescued the princess."',
      answers: [
        { id: 'a', text: 'brave', isCorrect: false },
        { id: 'b', text: 'knight', isCorrect: true },
        { id: 'c', text: 'rescued', isCorrect: false },
        { id: 'd', text: 'princess', isCorrect: false }
      ],
      hint: 'The subject is who or what does the action in the sentence!',
      explanation: 'Grammar genius! The knight is doing the rescuing action!',
      xpReward: 45,
      acornReward: 9,
      mascotFeedback: {
        correct: "Grammar guardian! The knight is the sentence star! ⚔️⭐",
        incorrect: "Who is doing the rescuing in this sentence?",
        encouragement: "Subjects are the main characters of sentences!"
      },
      interactiveElements: {
        animations: [
          { type: 'subject-spotlight', trigger: 'correct-choice', duration: 2000 },
          { type: 'knight-victory', trigger: 'grammar-mastered', duration: 2500 }
        ]
      }
    }
    // Continue with more Class 6 questions...
  ]
};

export const enhancedLanguagesLessons: { [key in Grade]: Lesson[] } = {
  'pre-k': [
    {
      id: 'lang-pk-letter-party',
      title: 'Letter Party',
      description: 'Dance with letters and discover the alphabet!',
      subject: 'languages',
      grade: 'pre-k',
      difficulty: 'easy',
      questions: enhancedLanguagesContent['pre-k'].slice(0, 15),
      estimatedTime: 15,
      xpReward: 150,
      acornReward: 30
    },
    {
      id: 'lang-pk-sound-safari',
      title: 'Sound Safari',
      description: 'Go on a safari to find letter sounds in the wild!',
      subject: 'languages',
      grade: 'pre-k',
      difficulty: 'easy',
      questions: enhancedLanguagesContent['pre-k'].slice(15, 25),
      estimatedTime: 12,
      xpReward: 120,
      acornReward: 24
    }
  ],
  'kg': [
    {
      id: 'lang-kg-word-workshop',
      title: 'Word Workshop',
      description: 'Build amazing sentences in our word construction site!',
      subject: 'languages',
      grade: 'kg',
      difficulty: 'easy',
      questions: enhancedLanguagesContent['kg'].slice(0, 20),
      estimatedTime: 20,
      xpReward: 200,
      acornReward: 40
    }
  ],
  'class-1': [
    {
      id: 'lang-c1-grammar-garden',
      title: 'Grammar Garden',
      description: 'Grow beautiful sentences with nouns and verbs!',
      subject: 'languages',
      grade: 'class-1',
      difficulty: 'easy',
      questions: enhancedLanguagesContent['class-1'].slice(0, 25),
      estimatedTime: 25,
      xpReward: 250,
      acornReward: 50
    }
  ],
  'class-2': [
    {
      id: 'lang-c2-story-studio',
      title: 'Story Studio',
      description: 'Create amazing stories with proper grammar!',
      subject: 'languages',
      grade: 'class-2',
      difficulty: 'medium',
      questions: enhancedLanguagesContent['class-2'].slice(0, 30),
      estimatedTime: 30,
      xpReward: 300,
      acornReward: 60
    }
  ],
  'class-3': [
    {
      id: 'lang-c3-punctuation-plaza',
      title: 'Punctuation Plaza',
      description: 'Master the art of punctuation in our grammar city!',
      subject: 'languages',
      grade: 'class-3',
      difficulty: 'medium',
      questions: enhancedLanguagesContent['class-3'].slice(0, 35),
      estimatedTime: 35,
      xpReward: 350,
      acornReward: 70
    }
  ],
  'class-4': [
    {
      id: 'lang-c4-vocabulary-voyage',
      title: 'Vocabulary Voyage',
      description: 'Sail the seas of synonyms and antonyms!',
      subject: 'languages',
      grade: 'class-4',
      difficulty: 'medium',
      questions: enhancedLanguagesContent['class-4'].slice(0, 30),
      estimatedTime: 40,
      xpReward: 400,
      acornReward: 80
    }
  ],
  'class-5': [
    {
      id: 'lang-c5-literary-laboratory',
      title: 'Literary Laboratory',
      description: 'Experiment with metaphors and advanced writing techniques!',
      subject: 'languages',
      grade: 'class-5',
      difficulty: 'hard',
      questions: enhancedLanguagesContent['class-5'].slice(0, 35),
      estimatedTime: 45,
      xpReward: 450,
      acornReward: 90
    }
  ],
  'class-6': [
    {
      id: 'lang-c6-composition-castle',
      title: 'Composition Castle',
      description: 'Rule the kingdom of advanced grammar and writing!',
      subject: 'languages',
      grade: 'class-6',
      difficulty: 'hard',
      questions: enhancedLanguagesContent['class-6'].slice(0, 40),
      estimatedTime: 50,
      xpReward: 500,
      acornReward: 100
    }
  ]
};