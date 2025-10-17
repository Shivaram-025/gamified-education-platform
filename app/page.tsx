// "use client"

// import { Dashboard } from "@/components/dashboard"
// import { JoinGame } from "@/components/join-game"
// import { Leaderboard } from "@/components/leaderboard"
// import { Navigation } from "@/components/navigation"
// import { QuizSystem } from "@/components/quiz-system"
// import { Sidebar } from "@/components/sidebar"
// import { useState } from "react"

// export default function Home() {
//   const [currentPage, setCurrentPage] = useState("dashboard")
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true)

//   return (
//     <div className="flex h-screen bg-background">
//       {/* Sidebar */}
//       <Sidebar isOpen={isSidebarOpen} onNavigate={setCurrentPage} currentPage={currentPage} />

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Navigation Bar */}
//         <Navigation onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} isSidebarOpen={isSidebarOpen} />

//         {/* Page Content */}
//         <main className="flex-1 overflow-auto p-6">
//           {currentPage === "dashboard" && <Dashboard />}
//           {currentPage === "quiz" && <QuizSystem />}
//           {currentPage === "leaderboard" && <Leaderboard />}
//           {currentPage === "profile" && <JoinGame />}
//         </main>
//       </div>
//     </div>
//   )
// }

"use client"

import LoginPage from "@/components/auth/login-page"
import { Dashboard } from "@/components/dashboard"
import { JoinGame } from "@/components/join-game"
import { Leaderboard } from "@/components/leaderboard"
import { Navigation } from "@/components/navigation"
import { QuizSystem } from "@/components/quiz-system"
import { Sidebar } from "@/components/sidebar"
import { useState } from "react"

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [currentPage, setCurrentPage] = useState("dashboard")
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const handleLogin = (userData) => {
    setCurrentUser(userData)
    setIsLoggedIn(true)
    setCurrentPage("dashboard")
  }

  const handleLogout = () => {
    setCurrentUser(null)
    setIsLoggedIn(false)
    setCurrentPage("dashboard")
  }

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onNavigate={setCurrentPage} currentPage={currentPage} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navigation Bar */}
        <Navigation
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          isSidebarOpen={isSidebarOpen}
          currentUser={currentUser}
          onLogout={handleLogout}
        />

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">
          {currentPage === "dashboard" && <Dashboard />}
          {currentPage === "quiz" && <QuizSystem />}
          {currentPage === "leaderboard" && <Leaderboard />}
          {currentPage === "profile" && <JoinGame />}
        </main>
      </div>
    </div>
  )
}
