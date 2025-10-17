"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Medal, Flame } from "lucide-react"
import { cn } from "@/lib/utils"

interface LeaderboardEntry {
  rank: number
  name: string
  score: number
  quizzesCompleted: number
  averageScore: number
  streak: number
  category: string
}

const LEADERBOARD_DATA: LeaderboardEntry[] = [
  {
    rank: 1,
    name: "Alex Chen",
    score: 3850,
    quizzesCompleted: 28,
    averageScore: 94,
    streak: 15,
    category: "Ecology",
  },
  {
    rank: 2,
    name: "Jordan Smith",
    score: 3620,
    quizzesCompleted: 26,
    averageScore: 91,
    streak: 12,
    category: "Climate",
  },
  {
    rank: 3,
    name: "Casey Williams",
    score: 3450,
    quizzesCompleted: 24,
    averageScore: 89,
    streak: 10,
    category: "Energy",
  },
  {
    rank: 4,
    name: "Morgan Davis",
    score: 3280,
    quizzesCompleted: 22,
    averageScore: 87,
    streak: 8,
    category: "Marine",
  },
  {
    rank: 5,
    name: "Taylor Johnson",
    score: 3100,
    quizzesCompleted: 20,
    averageScore: 85,
    streak: 6,
    category: "Ecology",
  },
  {
    rank: 6,
    name: "You",
    score: 2450,
    quizzesCompleted: 12,
    averageScore: 87,
    streak: 7,
    category: "Mixed",
  },
  {
    rank: 7,
    name: "Riley Martinez",
    score: 2380,
    quizzesCompleted: 18,
    averageScore: 83,
    streak: 5,
    category: "Climate",
  },
  {
    rank: 8,
    name: "Sam Anderson",
    score: 2200,
    quizzesCompleted: 16,
    averageScore: 81,
    streak: 4,
    category: "Energy",
  },
  {
    rank: 9,
    name: "Jordan Lee",
    score: 2050,
    quizzesCompleted: 14,
    averageScore: 79,
    streak: 3,
    category: "Marine",
  },
  {
    rank: 10,
    name: "Casey Brown",
    score: 1900,
    quizzesCompleted: 12,
    averageScore: 77,
    streak: 2,
    category: "Ecology",
  },
]

type FilterType = "all" | "friends" | "category"

export function Leaderboard() {
  const [filterType, setFilterType] = useState<FilterType>("all")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", "Ecology", "Climate", "Energy", "Marine", "Mixed"]

  const filteredData = LEADERBOARD_DATA.filter((entry) => {
    if (selectedCategory === "all") return true
    return entry.category === selectedCategory
  })

  const getMedalIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-500" />
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />
      case 3:
        return <Medal className="h-5 w-5 text-orange-600" />
      default:
        return <span className="text-sm font-bold text-muted-foreground w-5 text-center">{rank}</span>
    }
  }

  const getRankColor = (rank: number) => {
    if (rank === 1) return "bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800"
    if (rank === 2) return "bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800"
    if (rank === 3) return "bg-orange-50 dark:bg-orange-950 border-orange-200 dark:border-orange-800"
    return "bg-card border-border"
  }

  const isCurrentUser = (name: string) => name === "You"

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Leaderboard</h2>
        <p className="text-muted-foreground">Compete with other players and climb the ranks</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        <Button
          variant={filterType === "all" ? "default" : "outline"}
          onClick={() => setFilterType("all")}
          className="whitespace-nowrap"
        >
          Global
        </Button>
        <Button
          variant={filterType === "friends" ? "default" : "outline"}
          onClick={() => setFilterType("friends")}
          className="whitespace-nowrap"
        >
          Friends
        </Button>
      </div>

      {/* Category Filter */}
      <div className="space-y-3">
        <p className="text-sm font-medium text-foreground">Filter by Category</p>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              size="sm"
              className="whitespace-nowrap"
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      {/* Top 3 Podium */}
      {filterType === "all" && selectedCategory === "all" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredData.slice(0, 3).map((entry, index) => (
            <Card
              key={entry.rank}
              className={cn(
                "p-6 text-center space-y-4 border-2 relative",
                getRankColor(entry.rank),
                index === 0 && "md:col-span-1 md:order-2 md:scale-105",
              )}
            >
              <div className="flex justify-center">{getMedalIcon(entry.rank)}</div>
              <div>
                <p className="text-2xl font-bold text-foreground">{entry.name}</p>
                <p className="text-sm text-muted-foreground">#{entry.rank}</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-bold text-primary">{entry.score}</p>
                <p className="text-xs text-muted-foreground">Total Points</p>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border/50">
                <div>
                  <p className="text-sm font-semibold text-foreground">{entry.quizzesCompleted}</p>
                  <p className="text-xs text-muted-foreground">Quizzes</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{entry.averageScore}%</p>
                  <p className="text-xs text-muted-foreground">Avg Score</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Full Leaderboard Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Rank</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Player</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">Points</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">Quizzes</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">Avg Score</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">Streak</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((entry, index) => (
                <tr
                  key={entry.rank}
                  className={cn(
                    "border-b border-border transition-colors hover:bg-muted/50",
                    isCurrentUser(entry.name) && "bg-primary/10",
                    index === 0 &&
                      filterType === "all" &&
                      selectedCategory === "all" &&
                      "bg-yellow-50 dark:bg-yellow-950",
                  )}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {getMedalIcon(entry.rank)}
                      <span className="font-semibold text-foreground">{entry.rank}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className={cn("font-medium", isCurrentUser(entry.name) && "text-primary")}>{entry.name}</p>
                      <p className="text-xs text-muted-foreground">{entry.category}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <p className="font-bold text-foreground">{entry.score}</p>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <p className="text-foreground">{entry.quizzesCompleted}</p>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <p className="text-foreground">{entry.averageScore}%</p>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Flame className="h-4 w-4 text-orange-500" />
                      <p className="text-foreground font-semibold">{entry.streak}</p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Your Rank</p>
            <p className="text-3xl font-bold text-primary">#6</p>
            <p className="text-xs text-muted-foreground">Out of {filteredData.length} players</p>
          </div>
        </Card>

        <Card className="p-6">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Points to Next Rank</p>
            <p className="text-3xl font-bold text-accent">1170</p>
            <p className="text-xs text-muted-foreground">Keep playing to advance</p>
          </div>
        </Card>

        <Card className="p-6">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Your Best Category</p>
            <p className="text-3xl font-bold text-secondary">Ecology</p>
            <p className="text-xs text-muted-foreground">92% average score</p>
          </div>
        </Card>
      </div>
    </div>
  )
}
