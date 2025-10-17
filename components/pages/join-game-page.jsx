// "use client"

// import { Users, Zap, Clock } from "lucide-react"

// export default function JoinGamePage() {
//   const activeGames = [
//     {
//       id: 1,
//       title: "Climate Challenge",
//       description: "Race against other players to answer climate questions",
//       players: 24,
//       maxPlayers: 50,
//       difficulty: "Intermediate",
//       duration: "10 mins",
//       reward: 250,
//       status: "Starting Soon",
//     },
//     {
//       id: 2,
//       title: "Biodiversity Battle",
//       description: "Test your knowledge about wildlife and ecosystems",
//       players: 18,
//       maxPlayers: 30,
//       difficulty: "Beginner",
//       duration: "8 mins",
//       reward: 150,
//       status: "In Progress",
//     },
//     {
//       id: 3,
//       title: "Ocean Odyssey",
//       description: "Learn about marine conservation and ocean health",
//       players: 12,
//       maxPlayers: 40,
//       difficulty: "Intermediate",
//       duration: "12 mins",
//       reward: 300,
//       status: "Starting Soon",
//     },
//     {
//       id: 4,
//       title: "Renewable Energy Rush",
//       description: "Compete in questions about sustainable energy sources",
//       players: 35,
//       maxPlayers: 50,
//       difficulty: "Advanced",
//       duration: "15 mins",
//       reward: 400,
//       status: "Starting Soon",
//     },
//   ]

//   const getDifficultyColor = (difficulty) => {
//     switch (difficulty) {
//       case "Beginner":
//         return "bg-green-100 text-green-700"
//       case "Intermediate":
//         return "bg-yellow-100 text-yellow-700"
//       case "Advanced":
//         return "bg-red-100 text-red-700"
//       default:
//         return "bg-gray-100 text-gray-700"
//     }
//   }

//   const getStatusColor = (status) => {
//     return status === "In Progress" ? "bg-blue-100 text-blue-700" : "bg-emerald-100 text-emerald-700"
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       {/* Header */}
//       <div className="mb-8">
//         <h1 className="text-4xl font-bold text-emerald-900 mb-2">Join a Game</h1>
//         <p className="text-emerald-700">Compete with other players and earn rewards</p>
//       </div>

//       {/* Games Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {activeGames.map((game) => (
//           <div
//             key={game.id}
//             className="bg-white rounded-xl shadow-md border border-emerald-100 overflow-hidden hover:shadow-lg transition-all duration-200"
//           >
//             {/* Game Header */}
//             <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white">
//               <h3 className="text-xl font-bold mb-2">{game.title}</h3>
//               <p className="text-emerald-100 text-sm">{game.description}</p>
//             </div>

//             {/* Game Details */}
//             <div className="p-6 space-y-4">
//               {/* Players */}
//               <div className="flex items-center gap-3">
//                 <Users className="w-5 h-5 text-emerald-600" />
//                 <span className="text-emerald-900 font-medium">
//                   {game.players}/{game.maxPlayers} Players
//                 </span>
//                 <div className="flex-1 bg-emerald-100 rounded-full h-2">
//                   <div
//                     className="bg-emerald-600 h-2 rounded-full"
//                     style={{ width: `${(game.players / game.maxPlayers) * 100}%` }}
//                   ></div>
//                 </div>
//               </div>

//               {/* Difficulty & Duration */}
//               <div className="flex gap-3">
//                 <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(game.difficulty)}`}>
//                   {game.difficulty}
//                 </span>
//                 <span className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
//                   <Clock className="w-3 h-3" />
//                   {game.duration}
//                 </span>
//               </div>

//               {/* Reward & Status */}
//               <div className="flex items-center justify-between pt-4 border-t border-emerald-100">
//                 <div className="flex items-center gap-2">
//                   <Zap className="w-5 h-5 text-amber-600" />
//                   <span className="font-bold text-emerald-900">+{game.reward} Credits</span>
//                 </div>
//                 <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(game.status)}`}>
//                   {game.status}
//                 </span>
//               </div>

//               {/* Join Button */}
//               <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold py-2 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 mt-4">
//                 Join Game
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }


"use client"

import { addParticipant, getProjectData } from "@/lib/storage"
import { Clock, Trash2, Users, Zap } from "lucide-react"
import { useEffect, useState } from "react"

export default function JoinGamePage() {
  const [participants, setParticipants] = useState({})
  const [projectData, setProjectData] = useState(null)

  useEffect(() => {
    const data = getProjectData()
    setProjectData(data)

    const participantMap = {}
    data.gameSessions.forEach((session) => {
      participantMap[session.id] = session.participants
    })
    setParticipants(participantMap)
  }, [])

  const activeGames = [
    {
      id: 1,
      title: "Climate Challenge",
      description: "Race against other players to answer climate questions",
      players: 24,
      maxPlayers: 50,
      difficulty: "Intermediate",
      duration: "10 mins",
      reward: 250,
      status: "Starting Soon",
    },
    {
      id: 2,
      title: "Biodiversity Battle",
      description: "Test your knowledge about wildlife and ecosystems",
      players: 18,
      maxPlayers: 30,
      difficulty: "Beginner",
      duration: "8 mins",
      reward: 150,
      status: "In Progress",
    },
    {
      id: 3,
      title: "Ocean Odyssey",
      description: "Learn about marine conservation and ocean health",
      players: 12,
      maxPlayers: 40,
      difficulty: "Intermediate",
      duration: "12 mins",
      reward: 300,
      status: "Starting Soon",
    },
    {
      id: 4,
      title: "Renewable Energy Rush",
      description: "Compete in questions about sustainable energy sources",
      players: 35,
      maxPlayers: 50,
      difficulty: "Advanced",
      duration: "15 mins",
      reward: 400,
      status: "Starting Soon",
    },
  ]

  const handleJoinGame = (gameId) => {
    const participantName = prompt("Enter your name:")
    if (participantName) {
      const newParticipant = addParticipant(gameId, {
        name: participantName,
        score: 0,
      })

      setParticipants((prev) => ({
        ...prev,
        [gameId]: [...(prev[gameId] || []), newParticipant],
      }))

      const updatedData = getProjectData()
      setProjectData(updatedData)
    }
  }

  const handleRemoveParticipant = (gameId, participantId) => {
    setParticipants((prev) => ({
      ...prev,
      [gameId]: prev[gameId].filter((p) => p.id !== participantId),
    }))
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-700"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-700"
      case "Advanced":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getStatusColor = (status) => {
    return status === "In Progress" ? "bg-blue-100 text-blue-700" : "bg-emerald-100 text-emerald-700"
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-emerald-900 mb-2">Join a Game</h1>
        <p className="text-emerald-700">Compete with other players and earn rewards</p>
        {projectData && (
          <div className="mt-4 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
            <p className="text-sm text-emerald-700">
              <strong>Total Games Played:</strong> {projectData.totalGamesPlayed} |{" "}
              <strong>Total Credits Earned:</strong> {projectData.totalCreditsEarned}
            </p>
          </div>
        )}
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {activeGames.map((game) => {
          const gameParticipants = participants[game.id] || []
          const totalPlayers = game.players + gameParticipants.length

          return (
            <div
              key={game.id}
              className="bg-white rounded-xl shadow-md border border-emerald-100 overflow-hidden hover:shadow-lg transition-all duration-200"
            >
              {/* Game Header */}
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{game.title}</h3>
                <p className="text-emerald-100 text-sm">{game.description}</p>
              </div>

              {/* Game Details */}
              <div className="p-6 space-y-4">
                {/* Players */}
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-emerald-600" />
                  <span className="text-emerald-900 font-medium">
                    {totalPlayers}/{game.maxPlayers} Players
                  </span>
                  <div className="flex-1 bg-emerald-100 rounded-full h-2">
                    <div
                      className="bg-emerald-600 h-2 rounded-full"
                      style={{ width: `${(totalPlayers / game.maxPlayers) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Difficulty & Duration */}
                <div className="flex gap-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(game.difficulty)}`}
                  >
                    {game.difficulty}
                  </span>
                  <span className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
                    <Clock className="w-3 h-3" />
                    {game.duration}
                  </span>
                </div>

                {/* Reward & Status */}
                <div className="flex items-center justify-between pt-4 border-t border-emerald-100">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-amber-600" />
                    <span className="font-bold text-emerald-900">+{game.reward} Credits</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(game.status)}`}>
                    {game.status}
                  </span>
                </div>

                {/* Participants List */}
                {gameParticipants.length > 0 && (
                  <div className="pt-4 border-t border-emerald-100">
                    <h4 className="text-sm font-semibold text-emerald-900 mb-2">Your Participants:</h4>
                    <div className="space-y-2 max-h-32 overflow-y-auto">
                      {gameParticipants.map((participant) => (
                        <div
                          key={participant.id}
                          className="flex items-center justify-between bg-emerald-50 p-2 rounded text-sm"
                        >
                          <div>
                            <p className="font-medium text-emerald-900">{participant.name}</p>
                            <p className="text-xs text-emerald-600">Score: {participant.score}</p>
                          </div>
                          <button
                            onClick={() => handleRemoveParticipant(game.id, participant.id)}
                            className="text-red-600 hover:text-red-700 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Join Button */}
                <button
                  onClick={() => handleJoinGame(game.id)}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold py-2 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 mt-4"
                >
                  Join Game
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
