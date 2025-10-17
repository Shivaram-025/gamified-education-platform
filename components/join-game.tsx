// "use client"

// import { useState } from "react"
// import { Card } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Users, Clock, Trophy, Copy, Check } from "lucide-react"

// interface GameSession {
//   id: string
//   code: string
//   host: string
//   players: number
//   maxPlayers: number
//   difficulty: "easy" | "medium" | "hard"
//   category: string
//   status: "waiting" | "in-progress" | "completed"
//   createdAt: string
// }

// const ACTIVE_GAMES: GameSession[] = [
//   {
//     id: "1",
//     code: "QUIZ123",
//     host: "Alex Chen",
//     players: 3,
//     maxPlayers: 8,
//     difficulty: "medium",
//     category: "Ecology",
//     status: "waiting",
//     createdAt: "2 minutes ago",
//   },
//   {
//     id: "2",
//     code: "GAME456",
//     host: "Jordan Smith",
//     players: 5,
//     maxPlayers: 8,
//     difficulty: "hard",
//     category: "Climate",
//     status: "in-progress",
//     createdAt: "5 minutes ago",
//   },
//   {
//     id: "3",
//     code: "PLAY789",
//     host: "Casey Williams",
//     players: 2,
//     maxPlayers: 8,
//     difficulty: "easy",
//     category: "Energy",
//     status: "waiting",
//     createdAt: "1 minute ago",
//   },
//   {
//     id: "4",
//     code: "QUIZ999",
//     host: "Morgan Davis",
//     players: 6,
//     maxPlayers: 8,
//     difficulty: "medium",
//     category: "Marine",
//     status: "waiting",
//     createdAt: "3 minutes ago",
//   },
// ]

// export function JoinGame() {
//   const [gameCode, setGameCode] = useState("")
//   const [copiedCode, setCopiedCode] = useState<string | null>(null)
//   const [selectedDifficulty, setSelectedDifficulty] = useState<"all" | "easy" | "medium" | "hard">("all")
//   const [selectedCategory, setSelectedCategory] = useState<string>("all")

//   const handleCopyCode = (code: string) => {
//     navigator.clipboard.writeText(code)
//     setCopiedCode(code)
//     setTimeout(() => setCopiedCode(null), 2000)
//   }

//   const handleJoinGame = (code: string) => {
//     alert(`Joining game with code: ${code}`)
//   }

//   const handleCreateGame = () => {
//     alert("Creating new game session...")
//   }

//   const handleJoinByCode = () => {
//     if (gameCode.trim()) {
//       handleJoinGame(gameCode)
//       setGameCode("")
//     }
//   }

//   const filteredGames = ACTIVE_GAMES.filter((game) => {
//     const difficultyMatch = selectedDifficulty === "all" || game.difficulty === selectedDifficulty
//     const categoryMatch = selectedCategory === "all" || game.category === selectedCategory
//     return difficultyMatch && categoryMatch && game.status === "waiting"
//   })

//   const getDifficultyColor = (difficulty: string) => {
//     switch (difficulty) {
//       case "easy":
//         return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
//       case "medium":
//         return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
//       case "hard":
//         return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
//       default:
//         return ""
//     }
//   }

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case "waiting":
//         return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
//       case "in-progress":
//         return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
//       case "completed":
//         return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
//       default:
//         return ""
//     }
//   }

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="space-y-2">
//         <h2 className="text-3xl font-bold text-foreground">Join a Game</h2>
//         <p className="text-muted-foreground">Play multiplayer quizzes with other players in real-time</p>
//       </div>

//       {/* Join by Code Section */}
//       <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
//         <div className="space-y-4">
//           <h3 className="text-lg font-semibold text-foreground">Have a Game Code?</h3>
//           <div className="flex gap-2">
//             <input
//               type="text"
//               placeholder="Enter game code (e.g., QUIZ123)"
//               value={gameCode}
//               onChange={(e) => setGameCode(e.target.value.toUpperCase())}
//               onKeyPress={(e) => e.key === "Enter" && handleJoinByCode()}
//               className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
//             />
//             <Button onClick={handleJoinByCode} disabled={!gameCode.trim()} className="gap-2">
//               Join Game
//             </Button>
//           </div>
//         </div>
//       </Card>

//       {/* Create Game Section */}
//       <Card className="p-6">
//         <div className="flex items-center justify-between">
//           <div>
//             <h3 className="text-lg font-semibold text-foreground">Want to Host?</h3>
//             <p className="text-sm text-muted-foreground mt-1">Create a new game session and invite friends</p>
//           </div>
//           <Button onClick={handleCreateGame} variant="outline" className="gap-2 bg-transparent">
//             <Trophy className="h-4 w-4" />
//             Create Game
//           </Button>
//         </div>
//       </Card>

//       {/* Filters */}
//       <div className="space-y-4">
//         <div>
//           <p className="text-sm font-medium text-foreground mb-2">Filter by Difficulty</p>
//           <div className="flex gap-2 overflow-x-auto pb-2">
//             {["all", "easy", "medium", "hard"].map((diff) => (
//               <Button
//                 key={diff}
//                 variant={selectedDifficulty === diff ? "default" : "outline"}
//                 onClick={() => setSelectedDifficulty(diff as any)}
//                 size="sm"
//                 className="whitespace-nowrap"
//               >
//                 {diff.charAt(0).toUpperCase() + diff.slice(1)}
//               </Button>
//             ))}
//           </div>
//         </div>

//         <div>
//           <p className="text-sm font-medium text-foreground mb-2">Filter by Category</p>
//           <div className="flex gap-2 overflow-x-auto pb-2">
//             {["all", "Ecology", "Climate", "Energy", "Marine"].map((cat) => (
//               <Button
//                 key={cat}
//                 variant={selectedCategory === cat ? "default" : "outline"}
//                 onClick={() => setSelectedCategory(cat)}
//                 size="sm"
//                 className="whitespace-nowrap"
//               >
//                 {cat}
//               </Button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Active Games List */}
//       <div className="space-y-4">
//         <h3 className="text-xl font-semibold text-foreground">Available Games</h3>

//         {filteredGames.length === 0 ? (
//           <Card className="p-12 text-center">
//             <p className="text-muted-foreground">No games available with the selected filters</p>
//             <Button onClick={handleCreateGame} className="mt-4 gap-2">
//               <Trophy className="h-4 w-4" />
//               Create a Game
//             </Button>
//           </Card>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {filteredGames.map((game) => (
//               <Card key={game.id} className="p-6 hover:border-primary/50 transition-colors">
//                 <div className="space-y-4">
//                   {/* Header */}
//                   <div className="flex items-start justify-between">
//                     <div>
//                       <p className="text-sm text-muted-foreground">Game Code</p>
//                       <div className="flex items-center gap-2 mt-1">
//                         <p className="text-2xl font-bold text-foreground font-mono">{game.code}</p>
//                         <button
//                           onClick={() => handleCopyCode(game.code)}
//                           className="p-2 hover:bg-muted rounded-lg transition-colors"
//                         >
//                           {copiedCode === game.code ? (
//                             <Check className="h-4 w-4 text-green-600" />
//                           ) : (
//                             <Copy className="h-4 w-4 text-muted-foreground" />
//                           )}
//                         </button>
//                       </div>
//                     </div>
//                     <span className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(game.status)}`}>
//                       {game.status === "waiting"
//                         ? "Waiting"
//                         : game.status === "in-progress"
//                           ? "In Progress"
//                           : "Completed"}
//                     </span>
//                   </div>

//                   {/* Host Info */}
//                   <div>
//                     <p className="text-sm text-muted-foreground">Hosted by</p>
//                     <p className="font-medium text-foreground">{game.host}</p>
//                   </div>

//                   {/* Game Details */}
//                   <div className="grid grid-cols-2 gap-3">
//                     <div className="space-y-1">
//                       <p className="text-xs text-muted-foreground">Players</p>
//                       <div className="flex items-center gap-1">
//                         <Users className="h-4 w-4 text-primary" />
//                         <p className="font-semibold text-foreground">
//                           {game.players}/{game.maxPlayers}
//                         </p>
//                       </div>
//                     </div>

//                     <div className="space-y-1">
//                       <p className="text-xs text-muted-foreground">Difficulty</p>
//                       <span
//                         className={`text-xs px-2 py-1 rounded font-medium inline-block ${getDifficultyColor(game.difficulty)}`}
//                       >
//                         {game.difficulty.charAt(0).toUpperCase() + game.difficulty.slice(1)}
//                       </span>
//                     </div>

//                     <div className="space-y-1">
//                       <p className="text-xs text-muted-foreground">Category</p>
//                       <p className="font-medium text-foreground text-sm">{game.category}</p>
//                     </div>

//                     <div className="space-y-1">
//                       <p className="text-xs text-muted-foreground">Created</p>
//                       <div className="flex items-center gap-1">
//                         <Clock className="h-4 w-4 text-muted-foreground" />
//                         <p className="text-sm text-foreground">{game.createdAt}</p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Join Button */}
//                   <Button
//                     onClick={() => handleJoinGame(game.code)}
//                     className="w-full gap-2"
//                     disabled={game.players >= game.maxPlayers}
//                   >
//                     <Users className="h-4 w-4" />
//                     {game.players >= game.maxPlayers ? "Game Full" : "Join Game"}
//                   </Button>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <Card className="p-6">
//           <div className="space-y-2">
//             <p className="text-sm text-muted-foreground">Active Games</p>
//             <p className="text-3xl font-bold text-primary">
//               {ACTIVE_GAMES.filter((g) => g.status === "waiting").length}
//             </p>
//           </div>
//         </Card>

//         <Card className="p-6">
//           <div className="space-y-2">
//             <p className="text-sm text-muted-foreground">Total Players Online</p>
//             <p className="text-3xl font-bold text-accent">{ACTIVE_GAMES.reduce((sum, g) => sum + g.players, 0)}</p>
//           </div>
//         </Card>

//         <Card className="p-6">
//           <div className="space-y-2">
//             <p className="text-sm text-muted-foreground">Games Completed Today</p>
//             <p className="text-3xl font-bold text-secondary">24</p>
//           </div>
//         </Card>
//       </div>
//     </div>
//   )
// }


"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Clock, Copy, Trophy, Users } from "lucide-react"
import { useState } from "react"

interface GameSession {
  id: string
  code: string
  host: string
  players: number
  maxPlayers: number
  difficulty: "easy" | "medium" | "hard"
  category: string
  status: "waiting" | "in-progress" | "completed"
  createdAt: string
}

interface JoinGameProps {
  onJoinMultiplayer?: () => void
}

const ACTIVE_GAMES: GameSession[] = [
  {
    id: "1",
    code: "QUIZ123",
    host: "Alex Chen",
    players: 3,
    maxPlayers: 8,
    difficulty: "medium",
    category: "Ecology",
    status: "waiting",
    createdAt: "2 minutes ago",
  },
  {
    id: "2",
    code: "GAME456",
    host: "Jordan Smith",
    players: 5,
    maxPlayers: 8,
    difficulty: "hard",
    category: "Climate",
    status: "in-progress",
    createdAt: "5 minutes ago",
  },
  {
    id: "3",
    code: "PLAY789",
    host: "Casey Williams",
    players: 2,
    maxPlayers: 8,
    difficulty: "easy",
    category: "Energy",
    status: "waiting",
    createdAt: "1 minute ago",
  },
  {
    id: "4",
    code: "QUIZ999",
    host: "Morgan Davis",
    players: 6,
    maxPlayers: 8,
    difficulty: "medium",
    category: "Marine",
    status: "waiting",
    createdAt: "3 minutes ago",
  },
]

export function JoinGame({ onJoinMultiplayer }: JoinGameProps) {
  const [gameCode, setGameCode] = useState("")
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [selectedDifficulty, setSelectedDifficulty] = useState<"all" | "easy" | "medium" | "hard">("all")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const handleJoinGame = (code: string) => {
    if (onJoinMultiplayer) {
      onJoinMultiplayer()
    } else {
      alert(`Joining game with code: ${code}`)
    }
  }

  const handleCreateGame = () => {
    alert("Creating new game session...")
  }

  const handleJoinByCode = () => {
    if (gameCode.trim()) {
      handleJoinGame(gameCode)
      setGameCode("")
    }
  }

  const filteredGames = ACTIVE_GAMES.filter((game) => {
    const difficultyMatch = selectedDifficulty === "all" || game.difficulty === selectedDifficulty
    const categoryMatch = selectedCategory === "all" || game.category === selectedCategory
    return difficultyMatch && categoryMatch && game.status === "waiting"
  })

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "waiting":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "in-progress":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
      case "completed":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
      default:
        return ""
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Join a Game</h2>
        <p className="text-muted-foreground">Play multiplayer quizzes with other players in real-time</p>
      </div>

      {/* Join by Code Section */}
      <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Have a Game Code?</h3>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter game code (e.g., QUIZ123)"
              value={gameCode}
              onChange={(e) => setGameCode(e.target.value.toUpperCase())}
              onKeyPress={(e) => e.key === "Enter" && handleJoinByCode()}
              className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button onClick={handleJoinByCode} disabled={!gameCode.trim()} className="gap-2">
              Join Game
            </Button>
          </div>
        </div>
      </Card>

      {/* Create Game Section */}
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Want to Host?</h3>
            <p className="text-sm text-muted-foreground mt-1">Create a new game session and invite friends</p>
          </div>
          <Button onClick={handleCreateGame} variant="outline" className="gap-2 bg-transparent">
            <Trophy className="h-4 w-4" />
            Create Game
          </Button>
        </div>
      </Card>

      {/* Filters */}
      <div className="space-y-4">
        <div>
          <p className="text-sm font-medium text-foreground mb-2">Filter by Difficulty</p>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {["all", "easy", "medium", "hard"].map((diff) => (
              <Button
                key={diff}
                variant={selectedDifficulty === diff ? "default" : "outline"}
                onClick={() => setSelectedDifficulty(diff as any)}
                size="sm"
                className="whitespace-nowrap"
              >
                {diff.charAt(0).toUpperCase() + diff.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-foreground mb-2">Filter by Category</p>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {["all", "Ecology", "Climate", "Energy", "Marine"].map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat)}
                size="sm"
                className="whitespace-nowrap"
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Games List */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-foreground">Available Games</h3>

        {filteredGames.length === 0 ? (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground">No games available with the selected filters</p>
            <Button onClick={handleCreateGame} className="mt-4 gap-2">
              <Trophy className="h-4 w-4" />
              Create a Game
            </Button>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredGames.map((game) => (
              <Card key={game.id} className="p-6 hover:border-primary/50 transition-colors">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Game Code</p>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-2xl font-bold text-foreground font-mono">{game.code}</p>
                        <button
                          onClick={() => handleCopyCode(game.code)}
                          className="p-2 hover:bg-muted rounded-lg transition-colors"
                        >
                          {copiedCode === game.code ? (
                            <Check className="h-4 w-4 text-green-600" />
                          ) : (
                            <Copy className="h-4 w-4 text-muted-foreground" />
                          )}
                        </button>
                      </div>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(game.status)}`}>
                      {game.status === "waiting"
                        ? "Waiting"
                        : game.status === "in-progress"
                          ? "In Progress"
                          : "Completed"}
                    </span>
                  </div>

                  {/* Host Info */}
                  <div>
                    <p className="text-sm text-muted-foreground">Hosted by</p>
                    <p className="font-medium text-foreground">{game.host}</p>
                  </div>

                  {/* Game Details */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Players</p>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-primary" />
                        <p className="font-semibold text-foreground">
                          {game.players}/{game.maxPlayers}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Difficulty</p>
                      <span
                        className={`text-xs px-2 py-1 rounded font-medium inline-block ${getDifficultyColor(game.difficulty)}`}
                      >
                        {game.difficulty.charAt(0).toUpperCase() + game.difficulty.slice(1)}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Category</p>
                      <p className="font-medium text-foreground text-sm">{game.category}</p>
                    </div>

                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Created</p>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <p className="text-sm text-foreground">{game.createdAt}</p>
                      </div>
                    </div>
                  </div>

                  {/* Join Button */}
                  <Button
                    onClick={() => handleJoinGame(game.code)}
                    className="w-full gap-2"
                    disabled={game.players >= game.maxPlayers}
                  >
                    <Users className="h-4 w-4" />
                    {game.players >= game.maxPlayers ? "Game Full" : "Join Game"}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Active Games</p>
            <p className="text-3xl font-bold text-primary">
              {ACTIVE_GAMES.filter((g) => g.status === "waiting").length}
            </p>
          </div>
        </Card>

        <Card className="p-6">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Total Players Online</p>
            <p className="text-3xl font-bold text-accent">{ACTIVE_GAMES.reduce((sum, g) => sum + g.players, 0)}</p>
          </div>
        </Card>

        <Card className="p-6">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Games Completed Today</p>
            <p className="text-3xl font-bold text-secondary">24</p>
          </div>
        </Card>
      </div>
    </div>
  )
}
