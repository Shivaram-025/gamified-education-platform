// "use client"

// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { Check, Copy, Play, Users } from "lucide-react"
// import { useState } from "react"

// interface Participant {
//   id: string
//   name: string
//   avatar: string
//   status: "ready" | "waiting" | "playing"
//   score?: number
// }

// interface QuizSession {
//   code: string
//   host: string
//   category: string
//   difficulty: "easy" | "medium" | "hard"
//   totalQuestions: number
//   timePerQuestion: number
//   participants: Participant[]
//   status: "waiting" | "in-progress" | "completed"
// }

// export function MultiplayerQuizLobby() {
//   const [quizSession, setQuizSession] = useState<QuizSession>({
//     code: "ECO2024",
//     host: "Teacher Alex",
//     category: "Environmental Science",
//     difficulty: "medium",
//     totalQuestions: 5,
//     timePerQuestion: 30,
//     participants: [
//       { id: "1", name: "You", avatar: "👤", status: "ready" },
//       { id: "2", name: "Sarah Johnson", avatar: "👩", status: "ready" },
//       { id: "3", name: "Mike Chen", avatar: "👨", status: "waiting" },
//       { id: "4", name: "Emma Davis", avatar: "👩", status: "ready" },
//     ],
//     status: "waiting",
//   })

//   const [copiedCode, setCopiedCode] = useState(false)
//   const [isHost] = useState(false)

//   const handleCopyCode = () => {
//     navigator.clipboard.writeText(quizSession.code)
//     setCopiedCode(true)
//     setTimeout(() => setCopiedCode(false), 2000)
//   }

//   const handleToggleReady = () => {
//     setQuizSession((prev) => ({
//       ...prev,
//       participants: prev.participants.map((p) =>
//         p.id === "1" ? { ...p, status: p.status === "ready" ? "waiting" : "ready" } : p,
//       ),
//     }))
//   }

//   const handleStartQuiz = () => {
//     setQuizSession((prev) => ({
//       ...prev,
//       status: "in-progress",
//       participants: prev.participants.map((p) => ({ ...p, status: "playing" })),
//     }))
//   }

//   const readyCount = quizSession.participants.filter((p) => p.status === "ready").length
//   const allReady = readyCount === quizSession.participants.length

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="space-y-2">
//         <h2 className="text-3xl font-bold text-foreground">Quiz Lobby</h2>
//         <p className="text-muted-foreground">Waiting for players to join the quiz session</p>
//       </div>

//       {/* Quiz Info Card */}
//       <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Left Side - Quiz Details */}
//           <div className="space-y-4">
//             <div>
//               <p className="text-sm text-muted-foreground">Quiz Code</p>
//               <div className="flex items-center gap-2 mt-2">
//                 <p className="text-3xl font-bold text-foreground font-mono">{quizSession.code}</p>
//                 <button onClick={handleCopyCode} className="p-2 hover:bg-muted rounded-lg transition-colors">
//                   {copiedCode ? (
//                     <Check className="h-5 w-5 text-green-600" />
//                   ) : (
//                     <Copy className="h-5 w-5 text-muted-foreground" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <p className="text-xs text-muted-foreground">Category</p>
//                 <p className="font-semibold text-foreground mt-1">{quizSession.category}</p>
//               </div>
//               <div>
//                 <p className="text-xs text-muted-foreground">Difficulty</p>
//                 <p className="font-semibold text-foreground mt-1 capitalize">{quizSession.difficulty}</p>
//               </div>
//               <div>
//                 <p className="text-xs text-muted-foreground">Questions</p>
//                 <p className="font-semibold text-foreground mt-1">{quizSession.totalQuestions}</p>
//               </div>
//               <div>
//                 <p className="text-xs text-muted-foreground">Time/Question</p>
//                 <p className="font-semibold text-foreground mt-1">{quizSession.timePerQuestion}s</p>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Host Info */}
//           <div className="space-y-4">
//             <div>
//               <p className="text-sm text-muted-foreground">Hosted by</p>
//               <p className="font-semibold text-foreground mt-1">{quizSession.host}</p>
//             </div>

//             <div>
//               <p className="text-sm text-muted-foreground mb-2">Players Ready</p>
//               <div className="space-y-2">
//                 <div className="flex items-center justify-between">
//                   <span className="text-lg font-bold text-primary">
//                     {readyCount}/{quizSession.participants.length}
//                   </span>
//                   <span className="text-sm text-muted-foreground">players ready</span>
//                 </div>
//                 <div className="w-full bg-muted rounded-full h-2">
//                   <div
//                     className="bg-primary h-2 rounded-full transition-all"
//                     style={{ width: `${(readyCount / quizSession.participants.length) * 100}%` }}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Card>

//       {/* Participants Section */}
//       <div className="space-y-4">
//         <div className="flex items-center justify-between">
//           <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
//             <Users className="h-5 w-5" />
//             Participants ({quizSession.participants.length})
//           </h3>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {quizSession.participants.map((participant) => (
//             <Card key={participant.id} className="p-4">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                   <div className="text-3xl">{participant.avatar}</div>
//                   <div>
//                     <p className="font-semibold text-foreground">{participant.name}</p>
//                     <p className="text-xs text-muted-foreground capitalize">{participant.status}</p>
//                   </div>
//                 </div>
//                 <div
//                   className={`px-3 py-1 rounded-full text-xs font-medium ${
//                     participant.status === "ready"
//                       ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
//                       : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
//                   }`}
//                 >
//                   {participant.status === "ready" ? "✓ Ready" : "⏳ Waiting"}
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>

//       {/* Action Buttons */}
//       <div className="space-y-3">
//         <Button
//           onClick={handleToggleReady}
//           variant="outline"
//           className="w-full h-12 text-base bg-transparent"
//           size="lg"
//         >
//           {quizSession.participants[0].status === "ready" ? "Not Ready" : "Ready to Start"}
//         </Button>

//         {isHost && (
//           <Button onClick={handleStartQuiz} disabled={!allReady} className="w-full h-12 text-base gap-2" size="lg">
//             <Play className="h-5 w-5" />
//             Start Quiz
//           </Button>
//         )}
//       </div>

//       {/* Tips */}
//       <Card className="p-4 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
//         <div className="space-y-2">
//           <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">💡 Tips</p>
//           <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
//             <li>• Share the quiz code with other students to join</li>
//             <li>• Click "Ready to Start" when you're prepared</li>
//             <li>• The host will start the quiz once everyone is ready</li>
//             <li>• You'll have {quizSession.timePerQuestion} seconds per question</li>
//           </ul>
//         </div>
//       </Card>
//     </div>
//   )
// }

"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Copy, Play, Users } from "lucide-react"
import { useState } from "react"

interface Participant {
  id: string
  name: string
  avatar: string
  status: "ready" | "waiting" | "playing"
  score?: number
}

interface QuizSession {
  code: string
  host: string
  category: string
  difficulty: "easy" | "medium" | "hard"
  totalQuestions: number
  timePerQuestion: number
  participants: Participant[]
  status: "waiting" | "in-progress" | "completed"
}

export function MultiplayerQuizLobby() {
  const [quizSession, setQuizSession] = useState<QuizSession>({
    code: "ECO2024",
    host: "Teacher Alex",
    category: "Environmental Science",
    difficulty: "medium",
    totalQuestions: 5,
    timePerQuestion: 30,
    participants: [
      { id: "1", name: "You", avatar: "👤", status: "ready" },
      { id: "2", name: "Sarah Johnson", avatar: "👩", status: "ready" },
      { id: "3", name: "Mike Chen", avatar: "👨", status: "waiting" },
      { id: "4", name: "Emma Davis", avatar: "👩", status: "ready" },
    ],
    status: "waiting",
  })

  const [copiedCode, setCopiedCode] = useState(false)
  const [isHost, setIsHost] = useState(true)
  const [showSettings, setShowSettings] = useState(false)

  const handleCopyCode = () => {
    navigator.clipboard.writeText(quizSession.code)
    setCopiedCode(true)
    setTimeout(() => setCopiedCode(false), 2000)
  }

  const handleToggleReady = () => {
    setQuizSession((prev) => ({
      ...prev,
      participants: prev.participants.map((p) =>
        p.id === "1" ? { ...p, status: p.status === "ready" ? "waiting" : "ready" } : p,
      ),
    }))
  }

  const handleStartQuiz = () => {
    if (isHost && allReady) {
      setQuizSession((prev) => ({
        ...prev,
        status: "in-progress",
        participants: prev.participants.map((p) => ({ ...p, status: "playing" })),
      }))
    }
  }

  const handleKickPlayer = (id: string) => {
    setQuizSession((prev) => ({
      ...prev,
      participants: prev.participants.filter((p) => p.id !== id),
    }))
  }

  const readyCount = quizSession.participants.filter((p) => p.status === "ready").length
  const allReady = readyCount === quizSession.participants.length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground">Quiz Lobby</h2>
        <p className="text-muted-foreground">Waiting for players to join the quiz session</p>
      </div>

      {/* Quiz Info Card */}
      <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Side - Quiz Details */}
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Quiz Code</p>
              <div className="flex items-center gap-2 mt-2">
                <p className="text-3xl font-bold text-foreground font-mono">{quizSession.code}</p>
                <button onClick={handleCopyCode} className="p-2 hover:bg-muted rounded-lg transition-colors">
                  {copiedCode ? (
                    <Check className="h-5 w-5 text-green-600" />
                  ) : (
                    <Copy className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-muted-foreground">Category</p>
                <p className="font-semibold text-foreground mt-1">{quizSession.category}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Difficulty</p>
                <p className="font-semibold text-foreground mt-1 capitalize">{quizSession.difficulty}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Questions</p>
                <p className="font-semibold text-foreground mt-1">{quizSession.totalQuestions}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Time/Question</p>
                <p className="font-semibold text-foreground mt-1">{quizSession.timePerQuestion}s</p>
              </div>
            </div>
          </div>

          {/* Right Side - Host Info */}
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Hosted by</p>
              <p className="font-semibold text-foreground mt-1">{quizSession.host}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Players Ready</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">
                    {readyCount}/{quizSession.participants.length}
                  </span>
                  <span className="text-sm text-muted-foreground">players ready</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{ width: `${(readyCount / quizSession.participants.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {isHost && (
              <div className="space-y-3 pt-4 border-t border-border">
                <p className="text-sm font-semibold text-foreground">Host Controls</p>
                <Button
                  onClick={() => setShowSettings(!showSettings)}
                  variant="outline"
                  className="w-full bg-transparent"
                  size="sm"
                >
                  {showSettings ? "Hide Settings" : "Game Settings"}
                </Button>
              </div>
            )}
          </div>
        </div>
      </Card>

      {/* Game Settings Panel */}
      {showSettings && isHost && (
        <Card className="p-4 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-foreground">Adjust Game Settings</p>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-muted-foreground">Questions</label>
                <input
                  type="number"
                  defaultValue={quizSession.totalQuestions}
                  className="w-full mt-1 px-2 py-1 rounded border border-border bg-background text-foreground text-sm"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Time/Question</label>
                <input
                  type="number"
                  defaultValue={quizSession.timePerQuestion}
                  className="w-full mt-1 px-2 py-1 rounded border border-border bg-background text-foreground text-sm"
                />
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Participants Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
            <Users className="h-5 w-5" />
            Participants ({quizSession.participants.length})
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quizSession.participants.map((participant) => (
            <Card key={participant.id} className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{participant.avatar}</div>
                  <div>
                    <p className="font-semibold text-foreground">{participant.name}</p>
                    <p className="text-xs text-muted-foreground capitalize">{participant.status}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      participant.status === "ready"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                    }`}
                  >
                    {participant.status === "ready" ? "✓ Ready" : "⏳ Waiting"}
                  </div>
                  {isHost && participant.id !== "1" && (
                    <Button
                      onClick={() => handleKickPlayer(participant.id)}
                      variant="ghost"
                      size="sm"
                      className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950"
                    >
                      ✕
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button
          onClick={handleToggleReady}
          variant="outline"
          className="w-full h-12 text-base bg-transparent"
          size="lg"
        >
          {quizSession.participants[0].status === "ready" ? "Not Ready" : "Ready to Start"}
        </Button>

        {isHost && (
          <Button onClick={handleStartQuiz} disabled={!allReady} className="w-full h-12 text-base gap-2" size="lg">
            <Play className="h-5 w-5" />
            Start Quiz
          </Button>
        )}
      </div>

      {/* Tips */}
      <Card className="p-4 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">💡 Tips</p>
          <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
            <li>• Share the quiz code with other students to join</li>
            <li>• Click "Ready to Start" when you're prepared</li>
            <li>• The host will start the quiz once everyone is ready</li>
            <li>• You'll have {quizSession.timePerQuestion} seconds per question</li>
          </ul>
        </div>
      </Card>
    </div>
  )
}
