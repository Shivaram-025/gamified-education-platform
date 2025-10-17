"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Clock, Trophy, Users } from "lucide-react"
import { useEffect, useState } from "react"

interface QuizQuestion {
  id: number
  question: string
  image?: string
  options: string[]
  correctAnswer: number
  category: string
  difficulty: "easy" | "medium" | "hard"
}

interface PlayerScore {
  id: string
  name: string
  avatar: string
  score: number
  answered: boolean
  correct: boolean
}

interface MultiplayerGameState {
  currentQuestion: number
  timeRemaining: number
  playerScores: PlayerScore[]
  userAnswer: number | null
  showResults: boolean
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the primary cause of deforestation in tropical regions?",
    image: "/forest-ecosystem-with-trees.jpg",
    options: ["Agricultural expansion", "Natural disasters", "Climate change", "Urban development"],
    correctAnswer: 0,
    category: "Ecology",
    difficulty: "medium",
  },
  {
    id: 2,
    question: "Which of these is a renewable energy source?",
    image: "/renewable-energy-solar-wind.jpg",
    options: ["Coal", "Natural gas", "Solar power", "Oil"],
    correctAnswer: 2,
    category: "Energy",
    difficulty: "easy",
  },
  {
    id: 3,
    question: "What percentage of Earth's oxygen is produced by the ocean?",
    image: "/ocean-marine-life-conservation.jpg",
    options: ["10%", "30%", "50%", "70%"],
    correctAnswer: 2,
    category: "Marine",
    difficulty: "hard",
  },
  {
    id: 4,
    question: "Which gas is the primary driver of climate change?",
    image: "/climate-change-earth-warming.jpg",
    options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Hydrogen"],
    correctAnswer: 2,
    category: "Climate",
    difficulty: "easy",
  },
  {
    id: 5,
    question: "What is soil erosion primarily caused by?",
    image: "/soil-erosion-bare-land-tree-stumps.jpg",
    options: ["Rainfall", "Deforestation and overgrazing", "Temperature changes", "Volcanic activity"],
    correctAnswer: 1,
    category: "Ecology",
    difficulty: "medium",
  },
]

export function MultiplayerQuizGame() {
  const [gameState, setGameState] = useState<MultiplayerGameState>({
    currentQuestion: 0,
    timeRemaining: 30,
    playerScores: [
      { id: "1", name: "You", avatar: "👤", score: 2, answered: true, correct: true },
      { id: "2", name: "Sarah Johnson", avatar: "👩", score: 2, answered: true, correct: true },
      { id: "3", name: "Mike Chen", avatar: "👨", score: 1, answered: true, correct: false },
      { id: "4", name: "Emma Davis", avatar: "👩", score: 2, answered: true, correct: true },
    ],
    userAnswer: null,
    showResults: false,
  })

  const currentQuestion = QUIZ_QUESTIONS[gameState.currentQuestion]
  const progress = ((gameState.currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100

  useEffect(() => {
    if (gameState.timeRemaining <= 0) {
      handleNext()
      return
    }

    const timer = setTimeout(() => {
      setGameState((prev) => ({
        ...prev,
        timeRemaining: prev.timeRemaining - 1,
      }))
    }, 1000)

    return () => clearTimeout(timer)
  }, [gameState.timeRemaining])

  const handleAnswerSelect = (optionIndex: number) => {
    if (gameState.userAnswer !== null) return

    const isCorrect = optionIndex === currentQuestion.correctAnswer
    const newScore = isCorrect ? 1 : 0

    setGameState((prev) => ({
      ...prev,
      userAnswer: optionIndex,
      playerScores: prev.playerScores.map((p) =>
        p.id === "1" ? { ...p, score: p.score + newScore, answered: true, correct: isCorrect } : p,
      ),
    }))
  }

  const handleNext = () => {
    if (gameState.currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setGameState((prev) => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
        timeRemaining: 30,
        userAnswer: null,
      }))
    } else {
      setGameState((prev) => ({
        ...prev,
        showResults: true,
      }))
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "hard":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      default:
        return ""
    }
  }

  const getTimeColor = () => {
    if (gameState.timeRemaining > 15) return "text-green-600"
    if (gameState.timeRemaining > 5) return "text-yellow-600"
    return "text-red-600"
  }

  const sortedPlayers = [...gameState.playerScores].sort((a, b) => b.score - a.score)

  if (gameState.showResults) {
    const userRank = sortedPlayers.findIndex((p) => p.id === "1") + 1
    const userScore = gameState.playerScores.find((p) => p.id === "1")?.score || 0

    return (
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-foreground">Quiz Complete!</h2>
          <div className="space-y-2">
            <p className="text-6xl font-bold text-primary">
              {userScore}/{QUIZ_QUESTIONS.length}
            </p>
            <p className="text-xl text-muted-foreground">
              You ranked #{userRank} out of {gameState.playerScores.length}
            </p>
          </div>
        </div>

        <Card className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            Final Rankings
          </h3>
          <div className="space-y-3">
            {sortedPlayers.map((player, index) => (
              <div key={player.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-muted-foreground w-8 text-center">
                    {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : index + 1}
                  </span>
                  <div className="text-2xl">{player.avatar}</div>
                  <div>
                    <p className="font-semibold text-foreground">{player.name}</p>
                    <p className="text-xs text-muted-foreground">{player.id === "1" ? "You" : "Player"}</p>
                  </div>
                </div>
                <p className="text-2xl font-bold text-primary">{player.score}</p>
              </div>
            ))}
          </div>
        </Card>

        <Button className="w-full h-12 text-base" size="lg">
          Return to Lobby
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header with Timer and Players */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">
            Question {gameState.currentQuestion + 1} of {QUIZ_QUESTIONS.length}
          </p>
          <Progress value={progress} className="h-2 w-48" />
        </div>

        <div className={`text-center ${getTimeColor()}`}>
          <div className="flex items-center gap-2 justify-center">
            <Clock className="h-5 w-5" />
            <span className="text-3xl font-bold font-mono">{gameState.timeRemaining}s</span>
          </div>
        </div>
      </div>

      {/* Main Question Card */}
      <Card className="p-8 space-y-6">
        {/* Category and Difficulty */}
        <div className="flex items-center gap-2">
          <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
            {currentQuestion.category}
          </span>
          <span
            className={`text-xs px-3 py-1 rounded-full font-medium ${getDifficultyColor(currentQuestion.difficulty)}`}
          >
            {currentQuestion.difficulty.charAt(0).toUpperCase() + currentQuestion.difficulty.slice(1)}
          </span>
        </div>

        {/* Question Image */}
        {currentQuestion.image && (
          <div className="relative w-full h-64 rounded-lg overflow-hidden bg-muted">
            <img
              src={currentQuestion.image || "/placeholder.svg"}
              alt="Question illustration"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Question Text */}
        <h3 className="text-2xl font-bold text-foreground">{currentQuestion.question}</h3>

        {/* Options */}
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            const isSelected = gameState.userAnswer === index
            const isCorrect = index === currentQuestion.correctAnswer

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={gameState.userAnswer !== null}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                  isSelected
                    ? isCorrect
                      ? "border-green-500 bg-green-50 dark:bg-green-950"
                      : "border-red-500 bg-red-50 dark:bg-red-950"
                    : "border-border bg-card hover:border-primary/50"
                } ${gameState.userAnswer !== null ? "cursor-not-allowed" : "cursor-pointer"}`}
              >
                <p
                  className={`font-medium ${isSelected && !isCorrect ? "text-red-700 dark:text-red-200" : "text-foreground"}`}
                >
                  {option}
                </p>
              </button>
            )
          })}
        </div>
      </Card>

      {/* Live Leaderboard */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Users className="h-5 w-5" />
          Live Scores
        </h3>
        <div className="space-y-2">
          {sortedPlayers.map((player, index) => (
            <div key={player.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold text-muted-foreground w-6 text-center">{index + 1}</span>
                <div className="text-2xl">{player.avatar}</div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{player.name}</p>
                  <p className="text-xs text-muted-foreground">{player.answered ? "Answered" : "Waiting"}</p>
                </div>
              </div>
              <p className="text-lg font-bold text-primary">{player.score}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Next Button */}
      {gameState.userAnswer !== null && (
        <Button onClick={handleNext} className="w-full h-12 text-base" size="lg">
          {gameState.currentQuestion === QUIZ_QUESTIONS.length - 1 ? "See Results" : "Next Question"}
        </Button>
      )}
    </div>
  )
}
