export interface Question {
  id: number
  question: string
  image?: string
  options: string[]
  correctAnswer: number
  category: string
  difficulty: "easy" | "medium" | "hard"
  topic: "environment" | "health" | "economic" | "technology" | "social"
}

export const QUIZ_QUESTIONS: Question[] = [
  // Environment Questions
  {
    id: 1,
    question: "What is the primary cause of deforestation in tropical regions?",
    image: "/forest-ecosystem-with-trees.jpg",
    options: ["Agricultural expansion", "Natural disasters", "Climate change", "Urban development"],
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
]

export const getQuestionsByTopic = (topic: string) => {
  return QUIZ_QUESTIONS.filter((q) => q.topic === topic)
}

export const getQuestionsByDifficulty = (difficulty: string) => {
  return QUIZ_QUESTIONS.filter((q) => q.difficulty === difficulty)
}
