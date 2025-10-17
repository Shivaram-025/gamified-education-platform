// export interface Question {
//   id: number
//   question: string
//   image?: string
//   options: string[]
//   correctAnswer: number
//   category: string
//   difficulty: "easy" | "medium" | "hard"
//   topic: "environment" | "health" | "economic" | "technology" | "social"
// }

// export const QUIZ_QUESTIONS: Question[] = [
//   // Environment Questions
//   {
//     id: 1,
//     question: "What happens when Earth's average temperature keeps rising?",
//     image: "/forest-ecosystem-with-trees.jpg",
//     options: ["More rainfall", "Natural disasters", "Climate change", "Urban development"],
//     correctAnswer: 0,
//     category: "Ecology",
//     difficulty: "medium",
//     topic: "environment",
//   },
//   {
//     id: 2,
//     question: "Which of these is a renewable energy source?",
//     image: "/renewable-energy-solar-wind.jpg",
//     options: ["Coal", "Natural gas", "Solar power", "Oil"],
//     correctAnswer: 2,
//     category: "Energy",
//     difficulty: "easy",
//     topic: "environment",
//   },
//   {
//     id: 3,
//     question: "What percentage of Earth's oxygen is produced by the ocean?",
//     image: "/ocean-marine-life-conservation.jpg",
//     options: ["10%", "30%", "50%", "70%"],
//     correctAnswer: 2,
//     category: "Marine",
//     difficulty: "hard",
//     topic: "environment",
//   },
//   {
//     id: 4,
//     question: "Which gas is the primary driver of climate change?",
//     image: "/climate-change-earth-warming.jpg",
//     options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Hydrogen"],
//     correctAnswer: 2,
//     category: "Climate",
//     difficulty: "easy",
//     topic: "environment",
//   },
//   {
//     id: 5,
//     question: "What is soil erosion primarily caused by?",
//     image: "/soil-erosion-bare-land-tree-stumps.jpg",
//     options: ["Rainfall", "Deforestation and overgrazing", "Temperature changes", "Volcanic activity"],
//     correctAnswer: 1,
//     category: "Ecology",
//     difficulty: "medium",
//     topic: "environment",
//   },
  
// ]

// // Filter by topic
// export const getQuestionsByTopic = (topic: Question['topic']): Question[] => {
//   return QUIZ_QUESTIONS.filter((q) => q.topic === topic);
// };

// // Filter by difficulty
// export const getQuestionsByDifficulty = (difficulty: Question['difficulty']): Question[] => {
//   return QUIZ_QUESTIONS.filter((q) => q.difficulty === difficulty);
// };

// // Filter by category (global across all topics)
// export const getQuestionsByCategory = (category: string): Question[] => {
//   return QUIZ_QUESTIONS.filter((q) => q.category === category);
// };

// // Get questions by category within a specific topic
// export const getQuestionsByCategoryInTopic = (topic: Question['topic'], category: string): Question[] => {
//   return QUIZ_QUESTIONS.filter((q) => q.topic === topic && q.category === category);
// };

// // Get all questions for a specific topic and difficulty
// export const getQuestionsByTopicAndDifficulty = (topic: Question['topic'], difficulty: Question['difficulty']): Question[] => {
//   return QUIZ_QUESTIONS.filter((q) => q.topic === topic && q.difficulty === difficulty);
// };

// // Get unique topics
// export const getAllTopics = (): Question['topic'][] => {
//   return [...new Set(QUIZ_QUESTIONS.map((q) => q.topic))] as Question['topic'][];
// };

// // Get unique categories globally
// export const getAllCategories = (): string[] => {
//   return [...new Set(QUIZ_QUESTIONS.map((q) => q.category))];
// };

// // Get unique categories for a specific topic
// export const getCategoriesByTopic = (topic: Question['topic']): string[] => {
//   return [...new Set(getQuestionsByTopic(topic).map((q) => q.category))];
// };

// // Get unique difficulties globally
// export const getAllDifficulties = (): Question['difficulty'][] => {
//   return [...new Set(QUIZ_QUESTIONS.map((q) => q.difficulty))] as Question['difficulty'][];
// };

// // Count questions per topic
// export const getQuestionCountByTopic = (topic: Question['topic']): number => {
//   return getQuestionsByTopic(topic).length;
// };

// // Get a random subset of questions (e.g., for mixed quizzes)
// export const getRandomQuestions = (count: number, topic?: Question['topic']): Question[] => {
//   const source = topic ? getQuestionsByTopic(topic) : QUIZ_QUESTIONS;
//   const shuffled = [...source].sort(() => 0.5 - Math.random());
//   return shuffled.slice(0, count);
// };

// // Example usage:
// // const environmentQuestions = getQuestionsByTopic('environment');
// // const easyEconomics = getQuestionsByTopicAndDifficulty('economic', 'easy');
// // const ecologyInEnv = getQuestionsByCategoryInTopic('environment', 'Ecology');


// quiz-data.ts
export interface Question {
  id: number;
  question: string;
  image?: string;
  options: string[];
  correctAnswer: number;
  category: string;
  difficulty: "easy" | "medium" | "hard";
  topic: "environment" | "health" | "economic" | "technology" | "social";
}

export const QUIZ_QUESTIONS: Question[] = [
  // Environment Questions
  {
    id: 1,
    question: "What happens when Earth's average temperature keeps rising?",
    image: "/forest-ecosystem-with-trees.jpg",
    options: ["More rainfall", "Natural disasters", "Climate change", "Urban development"],
    correctAnswer: 0,
    category: "Ecology",
    difficulty: "medium",
    topic: "environment",
  },
  {
    id: 2,
    question: "Which of these is a renewable energy source?",
    image: "/renewable-energy-solar-wind.jpg",
    options: ["Coal", "Natural gas", "Solar power", "Oil"],
    correctAnswer: 2,
    category: "Energy",
    difficulty: "easy",
    topic: "environment",
  },
  {
    id: 3,
    question: "What percentage of Earth's oxygen is produced by the ocean?",
    image: "/ocean-marine-life-conservation.jpg",
    options: ["10%", "30%", "50%", "70%"],
    correctAnswer: 2,
    category: "Marine",
    difficulty: "hard",
    topic: "environment",
  },
  {
    id: 4,
    question: "Which gas is the primary driver of climate change?",
    image: "/climate-change-earth-warming.jpg",
    options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Hydrogen"],
    correctAnswer: 2,
    category: "Climate",
    difficulty: "easy",
    topic: "environment",
  },
  {
    id: 5,
    question: "What is soil erosion primarily caused by?",
    image: "/soil-erosion-bare-land-tree-stumps.jpg",
    options: ["Rainfall", "Deforestation and overgrazing", "Temperature changes", "Volcanic activity"],
    correctAnswer: 1,
    category: "Ecology",
    difficulty: "medium",
    topic: "environment",
  },
  {
    id: 6,
    question: "Which animal is most affected by plastic pollution in oceans?",
    image: "/sea-turtle-with-plastic.jpg",
    options: ["Dolphins", "Sea turtles", "Whales", "All equally"],
    correctAnswer: 3,
    category: "Marine",
    difficulty: "medium",
    topic: "environment",
  },

  // Health Questions
  {
    id: 7,
    question: "What is the recommended daily water intake for an average adult?",
    image: "/water-glass-hydration.jpg",
    options: ["2 liters", "4 liters", "6 liters", "8 liters"],
    correctAnswer: 0,
    category: "Nutrition",
    difficulty: "easy",
    topic: "health",
  },
  {
    id: 8,
    question: "Which vitamin is primarily produced by sun exposure?",
    image: "/sun-vitamin-d.jpg",
    options: ["Vitamin A", "Vitamin B12", "Vitamin D", "Vitamin E"],
    correctAnswer: 2,
    category: "Nutrition",
    difficulty: "medium",
    topic: "health",
  },
  {
    id: 9,
    question: "What is the normal resting heart rate for adults?",
    image: "/heart-rate-monitor.png",
    options: ["40-60 bpm", "60-100 bpm", "100-120 bpm", "120-140 bpm"],
    correctAnswer: 1,
    category: "Fitness",
    difficulty: "easy",
    topic: "health",
  },
  {
    id: 10,
    question: "Which of these is a symptom of dehydration?",
    image: "/dehydration-symptoms.jpg",
    options: ["Increased energy", "Dark urine", "Excessive sweating", "Rapid weight gain"],
    correctAnswer: 1,
    category: "Nutrition",
    difficulty: "medium",
    topic: "health",
  },
  {
    id: 11,
    question: "How many hours of sleep do adults need per night?",
    image: "/sleep-rest-bed.jpg",
    options: ["5-6 hours", "7-9 hours", "10-12 hours", "12+ hours"],
    correctAnswer: 1,
    category: "Wellness",
    difficulty: "easy",
    topic: "health",
  },

  // Economic Questions
  {
    id: 12,
    question: "What is inflation?",
    image: "/inflation-economy-money.jpg",
    options: ["Decrease in prices", "Increase in general price levels", "Increase in employment", "Decrease in taxes"],
    correctAnswer: 1,
    category: "Economics",
    difficulty: "medium",
    topic: "economic",
  },
  {
    id: 13,
    question: "Which of these is a renewable resource?",
    image: "/renewable-resources.jpg",
    options: ["Oil", "Coal", "Forests", "Natural gas"],
    correctAnswer: 2,
    category: "Resources",
    difficulty: "easy",
    topic: "economic",
  },
  {
    id: 14,
    question: "What does GDP stand for?",
    image: "/gdp-economy-growth.jpg",
    options: [
      "Gross Domestic Product",
      "Gross Development Plan",
      "General Domestic Policy",
      "Global Development Program",
    ],
    correctAnswer: 0,
    category: "Economics",
    difficulty: "easy",
    topic: "economic",
  },
  {
    id: 15,
    question: "What is sustainable development?",
    image: "/sustainable-development.png",
    options: [
      "Only environmental protection",
      "Only economic growth",
      "Meeting present needs without compromising future generations",
      "Rapid industrialization",
    ],
    correctAnswer: 2,
    category: "Economics",
    difficulty: "hard",
    topic: "economic",
  },

  // Technology Questions
  {
    id: 16,
    question: "What does AI stand for?",
    image: "/artificial-intelligence-network.png",
    options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Integration", "Automated Integration"],
    correctAnswer: 1,
    category: "Technology",
    difficulty: "easy",
    topic: "technology",
  },
  {
    id: 17,
    question: "Which technology helps reduce carbon emissions?",
    image: "/green-technology.png",
    options: ["Coal power plants", "Electric vehicles", "Plastic production", "Oil refineries"],
    correctAnswer: 1,
    category: "Green Tech",
    difficulty: "medium",
    topic: "technology",
  },

  // Social Questions
  {
    id: 18,
    question: "What is social responsibility?",
    image: "/social-responsibility-community.jpg",
    options: [
      "Only government duty",
      "Only business duty",
      "Obligation to act for the benefit of society",
      "Individual wealth accumulation",
    ],
    correctAnswer: 2,
    category: "Society",
    difficulty: "medium",
    topic: "social",
  },
  {
    id: 19,
    question: "Which is an example of community development?",
    image: "/community-development.png",
    options: [
      "Building schools and hospitals",
      "Reducing public services",
      "Increasing pollution",
      "Decreasing employment",
    ],
    correctAnswer: 0,
    category: "Society",
    difficulty: "easy",
    topic: "social",
  },
];

// Export the filter function
export const getQuestionsByTopic = (topic: Question['topic']): Question[] => {
  return QUIZ_QUESTIONS.filter((q) => q.topic === topic);
};

// Optional: Additional exports for completeness (from previous enhancements)
export const getQuestionsByDifficulty = (difficulty: Question['difficulty']): Question[] => {
  return QUIZ_QUESTIONS.filter((q) => q.difficulty === difficulty);
};

export const getQuestionsByCategory = (category: string): Question[] => {
  return QUIZ_QUESTIONS.filter((q) => q.category === category);
};

export const getQuestionsByCategoryInTopic = (topic: Question['topic'], category: string): Question[] => {
  return QUIZ_QUESTIONS.filter((q) => q.topic === topic && q.category === category);
};

export const getQuestionsByTopicAndDifficulty = (topic: Question['topic'], difficulty: Question['difficulty']): Question[] => {
  return QUIZ_QUESTIONS.filter((q) => q.topic === topic && q.difficulty === difficulty);
};

export const getAllTopics = (): Question['topic'][] => {
  return [...new Set(QUIZ_QUESTIONS.map((q) => q.topic))] as Question['topic'][];
};

export const getAllCategories = (): string[] => {
  return [...new Set(QUIZ_QUESTIONS.map((q) => q.category))];
};

export const getCategoriesByTopic = (topic: Question['topic']): string[] => {
  return [...new Set(getQuestionsByTopic(topic).map((q) => q.category))];
};

export const getAllDifficulties = (): Question['difficulty'][] => {
  return [...new Set(QUIZ_QUESTIONS.map((q) => q.difficulty))] as Question['difficulty'][];
};

export const getQuestionCountByTopic = (topic: Question['topic']): number => {
  return getQuestionsByTopic(topic).length;
};

export const getRandomQuestions = (count: number, topic?: Question['topic']): Question[] => {
  const source = topic ? getQuestionsByTopic(topic) : QUIZ_QUESTIONS;
  const shuffled = [...source].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};