"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Clock, Target, Trophy, Zap } from "lucide-react"
import { useState } from "react"

interface Challenge {
  id: number
  title: string
  description: string
  type: "daily" | "weekly" | "special"
  reward: number
  progress: number
  total: number
  icon: string
  difficulty: "easy" | "medium" | "hard"
  timeRemaining?: string
  completed: boolean
}

const CHALLENGES: Challenge[] = [
  {
    id: 1,
    title: "Daily Quiz Master",
    description: "Complete 3 quizzes today",
    type: "daily",
    reward: 50,
    progress: 1,
    total: 3,
    icon: "📚",
    difficulty: "easy",
    timeRemaining: "18h 45m",
    completed: false,
  },
  {
    id: 2,
    title: "Perfect Score",
    description: "Get 100% on any quiz",
    type: "daily",
    reward: 100,
    progress: 0,
    total: 1,
    icon: "⭐",
    difficulty: "hard",
    timeRemaining: "18h 45m",
    completed: false,
  },
  {
    id: 3,
    title: "Environmental Expert",
    description: "Complete all environment quizzes",
    type: "weekly",
    reward: 250,
    progress: 4,
    total: 6,
    icon: "🌍",
    difficulty: "medium",
    timeRemaining: "5d 12h",
    completed: false,
  },
  {
    id: 4,
    title: "Health Warrior",
    description: "Score 80%+ on 5 health quizzes",
    type: "weekly",
    reward: 200,
    progress: 3,
    total: 5,
    icon: "💪",
    difficulty: "medium",
    timeRemaining: "5d 12h",
    completed: false,
  },
  {
    id: 5,
    title: "Multiplayer Champion",
    description: "Win 3 multiplayer quiz sessions",
    type: "weekly",
    reward: 300,
    progress: 1,
    total: 3,
    icon: "🏆",
    difficulty: "hard",
    timeRemaining: "5d 12h",
    completed: false,
  },
  {
    id: 6,
    title: "Knowledge Seeker",
    description: "Learn from 5 different topics",
    type: "special",
    reward: 500,
    progress: 3,
    total: 5,
    icon: "🎓",
    difficulty: "hard",
    timeRemaining: "30d",
    completed: false,
  },
]

export function Challenges() {
  const [challenges, setChallenges] = useState<Challenge[]>(CHALLENGES)
  const [selectedFilter, setSelectedFilter] = useState<"all" | "daily" | "weekly" | "special">("all")

  const filteredChallenges = selectedFilter === "all" ? challenges : challenges.filter((c) => c.type === selectedFilter)

  const totalRewards = challenges.reduce((sum, c) => sum + (c.completed ? c.reward : 0), 0)
  const completedCount = challenges.filter((c) => c.completed).length

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

  const handleClaimReward = (id: number) => {
    setChallenges(challenges.map((c) => (c.id === id ? { ...c, completed: true } : c)))
  }

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Completed Challenges</p>
              <p className="text-3xl font-bold text-primary">{completedCount}</p>
            </div>
            <Trophy className="h-12 w-12 text-primary/30" />
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-yellow-100/20 to-yellow-50/20 dark:from-yellow-900/20 dark:to-yellow-950/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Rewards</p>
              <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">{totalRewards}</p>
            </div>
            <Zap className="h-12 w-12 text-yellow-500/30" />
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-blue-100/20 to-blue-50/20 dark:from-blue-900/20 dark:to-blue-950/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Active Challenges</p>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {challenges.filter((c) => !c.completed).length}
              </p>
            </div>
            <Target className="h-12 w-12 text-blue-500/30" />
          </div>
        </Card>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 flex-wrap">
        {["all", "daily", "weekly", "special"].map((filter) => (
          <Button
            key={filter}
            variant={selectedFilter === filter ? "default" : "outline"}
            onClick={() => setSelectedFilter(filter as any)}
            className="capitalize"
          >
            {filter}
          </Button>
        ))}
      </div>

      {/* Challenges List */}
      <div className="space-y-4">
        {filteredChallenges.map((challenge) => (
          <Card
            key={challenge.id}
            className={`p-6 ${challenge.completed ? "bg-green-50 dark:bg-green-950 border-green-200" : ""}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4 flex-1">
                <div className="text-4xl">{challenge.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{challenge.title}</h3>
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium ${getDifficultyColor(challenge.difficulty)}`}
                    >
                      {challenge.difficulty}
                    </span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium capitalize">
                      {challenge.type}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{challenge.description}</p>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        Progress: {challenge.progress}/{challenge.total}
                      </span>
                      {challenge.timeRemaining && (
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {challenge.timeRemaining}
                        </span>
                      )}
                    </div>
                    <Progress value={(challenge.progress / challenge.total) * 100} className="h-2" />
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="mb-3">
                  <p className="text-sm text-muted-foreground">Reward</p>
                  <p className="text-2xl font-bold text-primary">{challenge.reward}</p>
                </div>
                <Button
                  onClick={() => handleClaimReward(challenge.id)}
                  disabled={challenge.progress < challenge.total || challenge.completed}
                  variant={challenge.completed ? "outline" : "default"}
                  size="sm"
                >
                  {challenge.completed ? "Claimed" : challenge.progress >= challenge.total ? "Claim" : "In Progress"}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
