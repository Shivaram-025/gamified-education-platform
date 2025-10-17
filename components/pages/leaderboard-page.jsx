"use client"

import { Trophy, Medal } from "lucide-react"

export default function LeaderboardPage() {
  const leaderboardData = [
    { rank: 1, name: "Alex Green", credits: 5420, level: 12, badge: "🥇" },
    { rank: 2, name: "Emma Earth", credits: 4890, level: 11, badge: "🥈" },
    { rank: 3, name: "Noah Nature", credits: 4560, level: 10, badge: "🥉" },
    { rank: 4, name: "Sophia Solar", credits: 4120, level: 9, badge: "⭐" },
    { rank: 5, name: "Liam Leaf", credits: 3890, level: 8, badge: "⭐" },
    { rank: 6, name: "Olivia Ocean", credits: 3450, level: 7, badge: "⭐" },
    { rank: 7, name: "Ethan Eco", credits: 3120, level: 7, badge: "⭐" },
    { rank: 8, name: "Ava Air", credits: 2890, level: 6, badge: "⭐" },
    { rank: 9, name: "Mason Mountain", credits: 2560, level: 6, badge: "⭐" },
    { rank: 10, name: "Isabella Island", credits: 2340, level: 5, badge: "⭐" },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-emerald-900 mb-2 flex items-center gap-3">
          <Trophy className="w-10 h-10 text-amber-600" />
          Global Leaderboard
        </h1>
        <p className="text-emerald-700">See where you rank among environmental champions</p>
      </div>

      {/* Leaderboard Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-emerald-100">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                <th className="px-6 py-4 text-left font-semibold">Rank</th>
                <th className="px-6 py-4 text-left font-semibold">Player</th>
                <th className="px-6 py-4 text-left font-semibold">Credits</th>
                <th className="px-6 py-4 text-left font-semibold">Level</th>
                <th className="px-6 py-4 text-left font-semibold">Badge</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((player, index) => (
                <tr
                  key={player.rank}
                  className={`border-t border-emerald-100 hover:bg-emerald-50 transition-all duration-200 ${
                    index < 3 ? "bg-gradient-to-r from-amber-50 to-transparent" : ""
                  }`}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {player.rank <= 3 ? (
                        <Medal className="w-5 h-5 text-amber-600" />
                      ) : (
                        <span className="text-emerald-900 font-bold">{player.rank}</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-emerald-900">{player.name}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-bold text-emerald-600">{player.credits}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                      Level {player.level}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-2xl">{player.badge}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Your Rank Section */}
      <div className="mt-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-lg p-6 text-white">
        <h2 className="text-xl font-bold mb-4">Your Current Position</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-4xl font-bold">#42</p>
            <p className="text-emerald-100 text-sm mt-1">Your Rank</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold">1250</p>
            <p className="text-emerald-100 text-sm mt-1">Your Credits</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold">5</p>
            <p className="text-emerald-100 text-sm mt-1">Your Level</p>
          </div>
        </div>
      </div>
    </div>
  )
}
