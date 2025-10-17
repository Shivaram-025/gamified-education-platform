"use client"

import { Zap, Award, TrendingUp, Clock } from "lucide-react"

export default function DashboardPage({ user }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-emerald-900 mb-2">Welcome back, {user.name}!</h1>
        <p className="text-emerald-700">Keep learning and climbing the ranks</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Credits Card */}
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-emerald-600">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-emerald-600 text-sm font-medium">Credit Points</p>
              <p className="text-3xl font-bold text-emerald-900 mt-2">{user.credits}</p>
            </div>
            <Zap className="w-10 h-10 text-emerald-600 opacity-20" />
          </div>
        </div>

        {/* Level Card */}
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-600">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-600 text-sm font-medium">Current Level</p>
              <p className="text-3xl font-bold text-blue-900 mt-2">{user.level}</p>
            </div>
            <TrendingUp className="w-10 h-10 text-blue-600 opacity-20" />
          </div>
        </div>

        {/* Levels Completed Card */}
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-teal-600">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-teal-600 text-sm font-medium">Levels Completed</p>
              <p className="text-3xl font-bold text-teal-900 mt-2">{user.levelsCompleted}</p>
            </div>
            <Award className="w-10 h-10 text-teal-600 opacity-20" />
          </div>
        </div>

        {/* Rank Card */}
        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-amber-600">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-amber-600 text-sm font-medium">Your Rank</p>
              <p className="text-3xl font-bold text-amber-900 mt-2">#42</p>
            </div>
            <Award className="w-10 h-10 text-amber-600 opacity-20" />
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-emerald-100">
        <h2 className="text-xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5" />
          Recent Activity
        </h2>

        <div className="space-y-3">
          {user.recentActivity.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-100 hover:shadow-md transition-all duration-200"
            >
              <div className="flex-1">
                <p className="font-semibold text-emerald-900">{activity.action}</p>
                <p className="text-sm text-emerald-700">{activity.title}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-emerald-600">+{activity.points}</p>
                <p className="text-xs text-emerald-600">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
