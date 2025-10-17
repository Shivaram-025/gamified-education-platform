"use client"

import { useState } from "react"
import { Menu, X, Leaf, LogOut } from "lucide-react"

export default function Navbar({ user, currentPage, onNavigate, onLogout }) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "quiz", label: "Quizzes", icon: "❓" },
    { id: "leaderboard", label: "Leaderboard", icon: "🏆" },
    { id: "join-game", label: "Join Game", icon: "🎮" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md border-b border-emerald-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate("dashboard")}>
            <Leaf className="w-6 h-6 text-emerald-600" />
            <span className="text-xl font-bold text-emerald-900">EcoLearn</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  currentPage === item.id ? "bg-emerald-600 text-white" : "text-emerald-900 hover:bg-emerald-100"
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>

          {/* User Info & Logout */}
          <div className="hidden md:flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-semibold text-emerald-900">{user.name}</p>
              <p className="text-xs text-emerald-600">{user.credits} Credits</p>
            </div>
            <button
              onClick={onLogout}
              className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-all duration-200"
              title="Logout"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg hover:bg-emerald-100">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id)
                  setIsOpen(false)
                }}
                className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  currentPage === item.id ? "bg-emerald-600 text-white" : "text-emerald-900 hover:bg-emerald-100"
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                onLogout()
                setIsOpen(false)
              }}
              className="w-full text-left px-4 py-2 rounded-lg font-medium text-red-600 hover:bg-red-50 transition-all duration-200"
            >
              <LogOut className="w-4 h-4 inline mr-2" />
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
