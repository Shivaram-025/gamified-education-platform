"use client"

import LoginPage from "@/components/auth/login-page"
import { Challenges } from "@/components/challenges"
import { Dashboard } from "@/components/dashboard"
import { JoinGame } from "@/components/join-game"
import { Leaderboard } from "@/components/leaderboard"
import { MultiplayerQuizGame } from "@/components/multiplayer-quiz-game"
import { MultiplayerQuizLobby } from "@/components/multiplayer-quiz-lobby"
import { Navigation } from "@/components/navigation"
import { QuizSystem } from "@/components/quiz-system"
import { Sidebar } from "@/components/sidebar"
import { useState } from "react"

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [currentPage, setCurrentPage] = useState("dashboard")
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [multiplayerState, setMultiplayerState] = useState<{
    mode: "lobby" | "game" | null
    gameCode?: string
    gameData?: any
  }>({ mode: null })

  const [challengeState, setChallengeState] = useState<{
    active: boolean
    challengeId?: number
  }>({ active: false })

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

  const handleJoinMultiplayer = (gameCode?: string) => {
    setMultiplayerState({ mode: "lobby", gameCode })
  }

  const handleStartMultiplayerGame = () => {
    setMultiplayerState({ mode: "game" })
  }

  const handleStartChallenge = (challengeId: number) => {
    setChallengeState({ active: true, challengeId })
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
          {/* Multiplayer Modes */}
          {multiplayerState.mode === "lobby" && (
            <div>
              <button
                onClick={() => setMultiplayerState({ mode: null })}
                className="mb-4 text-sm text-primary hover:underline flex items-center gap-1"
              >
                ← Back to Menu
              </button>
              <MultiplayerQuizLobby />
            </div>
          )}

          {multiplayerState.mode === "game" && (
            <div>
              <button
                onClick={() => setMultiplayerState({ mode: null })}
                className="mb-4 text-sm text-primary hover:underline flex items-center gap-1"
              >
                ← Back to Lobby
              </button>
              <MultiplayerQuizGame />
            </div>
          )}

          {/* Challenge Mode */}
          {challengeState.active && (
            <div>
              <button
                onClick={() => setChallengeState({ active: false })}
                className="mb-4 text-sm text-primary hover:underline flex items-center gap-1"
              >
                ← Back to Challenges
              </button>
              <QuizSystem />
            </div>
          )}

          {/* Normal Pages */}
          {multiplayerState.mode === null && !challengeState.active && (
            <>
              {currentPage === "dashboard" && <Dashboard />}
              {currentPage === "quiz" && <QuizSystem />}
              {currentPage === "challenges" && <Challenges />}
              {currentPage === "leaderboard" && <Leaderboard />}
              {currentPage === "profile" && <JoinGame onJoinMultiplayer={handleJoinMultiplayer} />}
            </>
          )}
        </main>
      </div>
    </div>
  )
}


// "use client"

// import { useState } from "react"
// import { Navigation } from "@/components/navigation"
// import { Sidebar } from "@/components/sidebar"
// import { Dashboard } from "@/components/dashboard"
// import { QuizSystem } from "@/components/quiz-system"
// import { Leaderboard } from "@/components/leaderboard"
// import { JoinGame } from "@/components/join-game"
// import { MultiplayerQuizLobby } from "@/components/multiplayer-quiz-lobby"
// import { MultiplayerQuizGame } from "@/components/multiplayer-quiz-game"
// import LoginPage from "@/components/auth/login-page"

// export default function Home() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false)
//   const [currentUser, setCurrentUser] = useState(null)
//   const [currentPage, setCurrentPage] = useState("dashboard")
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true)
//   const [multiplayerMode, setMultiplayerMode] = useState<"lobby" | "game" | null>(null)

//   const handleLogin = (userData) => {
//     setCurrentUser(userData)
//     setIsLoggedIn(true)
//     setCurrentPage("dashboard")
//   }

//   const handleLogout = () => {
//     setCurrentUser(null)
//     setIsLoggedIn(false)
//     setCurrentPage("dashboard")
//   }

//   if (!isLoggedIn) {
//     return <LoginPage onLogin={handleLogin} />
//   }

//   return (
//     <div className="flex h-screen bg-background">
//       {/* Sidebar */}
//       <Sidebar isOpen={isSidebarOpen} onNavigate={setCurrentPage} currentPage={currentPage} />

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Navigation Bar */}
//         <Navigation
//           onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
//           isSidebarOpen={isSidebarOpen}
//           currentUser={currentUser}
//           onLogout={handleLogout}
//         />

//         {/* Page Content */}
//         <main className="flex-1 overflow-auto p-6">
//           {multiplayerMode === "lobby" && (
//             <div>
//               <button onClick={() => setMultiplayerMode(null)} className="mb-4 text-sm text-primary hover:underline">
//                 ← Back
//               </button>
//               <MultiplayerQuizLobby />
//             </div>
//           )}
//           {multiplayerMode === "game" && (
//             <div>
//               <button onClick={() => setMultiplayerMode(null)} className="mb-4 text-sm text-primary hover:underline">
//                 ← Back
//               </button>
//               <MultiplayerQuizGame />
//             </div>
//           )}
//           {multiplayerMode === null && (
//             <>
//               {currentPage === "dashboard" && <Dashboard />}
//               {currentPage === "quiz" && <QuizSystem />}
//               {currentPage === "leaderboard" && <Leaderboard />}
//               {currentPage === "profile" && <JoinGame onJoinMultiplayer={() => setMultiplayerMode("lobby")} />}
//             </>
//           )}
//         </main>
//       </div>
//     </div>
//   )
// }
