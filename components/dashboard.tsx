"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Gamepad2, Trophy, TrendingUp, Zap, Target, Clock } from "lucide-react"

export function Dashboard() {
  // Mock user data
  const userStats = {
    quizzesCompleted: 12,
    currentRank: 5,
    averageScore: 87,
    totalPoints: 2450,
    streak: 7,
    timeSpent: "12h 45m",
  }

  const recentQuizzes = [
    { id: 1, title: "Environmental Conservation", score: 92, date: "2 hours ago", category: "Ecology" },
    { id: 2, title: "Climate Change Basics", score: 88, date: "1 day ago", category: "Climate" },
    { id: 3, title: "Renewable Energy", score: 95, date: "3 days ago", category: "Energy" },
  ]

  const topicCategories = [
    { name: "Ecology", progress: 85, quizzes: 5 },
    { name: "Climate", progress: 72, quizzes: 4 },
    { name: "Energy", progress: 90, quizzes: 3 },
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Welcome back, User!</h2>
        <p className="text-muted-foreground">You're on a 7-day streak! Keep it up.</p>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Quizzes Completed</p>
              <p className="text-3xl font-bold text-foreground mt-2">{userStats.quizzesCompleted}</p>
            </div>
            <Gamepad2 className="h-8 w-8 text-primary" />
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Current Rank</p>
              <p className="text-3xl font-bold text-foreground mt-2">#{userStats.currentRank}</p>
            </div>
            <Trophy className="h-8 w-8 text-accent" />
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Avg Score</p>
              <p className="text-3xl font-bold text-foreground mt-2">{userStats.averageScore}%</p>
            </div>
            <TrendingUp className="h-8 w-8 text-secondary" />
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-ring/10 to-ring/5 border-ring/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Points</p>
              <p className="text-3xl font-bold text-foreground mt-2">{userStats.totalPoints}</p>
            </div>
            <Zap className="h-8 w-8 text-ring" />
          </div>
        </Card>
      </div>

      {/* Secondary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Current Streak</p>
              <p className="text-2xl font-bold text-foreground">{userStats.streak} days</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-accent/10 rounded-lg">
              <Clock className="h-6 w-6 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Time Spent</p>
              <p className="text-2xl font-bold text-foreground">{userStats.timeSpent}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-foreground">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button className="h-12 text-base gap-2" size="lg">
            <Gamepad2 className="h-5 w-5" />
            Start New Quiz
          </Button>
          <Button variant="outline" className="h-12 text-base gap-2 bg-transparent" size="lg">
            <Trophy className="h-5 w-5" />
            View Leaderboard
          </Button>
        </div>
      </div>

      {/* Topic Progress */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-foreground">Topic Progress</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {topicCategories.map((topic) => (
            <Card key={topic.name} className="p-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-foreground">{topic.name}</p>
                  <span className="text-sm text-muted-foreground">{topic.quizzes} quizzes</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full transition-all" style={{ width: `${topic.progress}%` }} />
                </div>
                <p className="text-sm text-muted-foreground">{topic.progress}% complete</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-foreground">Recent Activity</h3>
        <Card className="p-6">
          <div className="space-y-4">
            {recentQuizzes.map((quiz, index) => (
              <div
                key={quiz.id}
                className={`flex items-center justify-between ${index !== recentQuizzes.length - 1 ? "pb-4 border-b border-border" : ""}`}
              >
                <div className="flex-1">
                  <p className="font-medium text-foreground">{quiz.title}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">{quiz.category}</span>
                    <p className="text-sm text-muted-foreground">{quiz.date}</p>
                  </div>
                </div>
                <p className="text-lg font-semibold text-primary">{quiz.score}%</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
