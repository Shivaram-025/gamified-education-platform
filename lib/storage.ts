export interface Participant {
  id: string
  name: string
  score: number
  joinedAt: number
  gameId: number
}

export interface GameSession {
  id: number
  title: string
  participants: Participant[]
  startedAt: number
  status: "active" | "completed"
}

export interface ProjectData {
  gameSessions: GameSession[]
  totalCreditsEarned: number
  totalGamesPlayed: number
  lastUpdated: number
}

const STORAGE_KEY = "gamified_education_data"

export const getProjectData = (): ProjectData => {
  if (typeof window === "undefined")
    return { gameSessions: [], totalCreditsEarned: 0, totalGamesPlayed: 0, lastUpdated: 0 }

  const data = localStorage.getItem(STORAGE_KEY)
  return data
    ? JSON.parse(data)
    : {
        gameSessions: [],
        totalCreditsEarned: 0,
        totalGamesPlayed: 0,
        lastUpdated: Date.now(),
      }
}

export const saveProjectData = (data: ProjectData): void => {
  if (typeof window === "undefined") return

  data.lastUpdated = Date.now()
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export const addParticipant = (gameId: number, participant: Omit<Participant, "id" | "joinedAt">): Participant => {
  const projectData = getProjectData()
  let gameSession = projectData.gameSessions.find((s) => s.id === gameId)

  if (!gameSession) {
    gameSession = {
      id: gameId,
      title: `Game ${gameId}`,
      participants: [],
      startedAt: Date.now(),
      status: "active",
    }
    projectData.gameSessions.push(gameSession)
  }

  const newParticipant: Participant = {
    ...participant,
    id: `${gameId}-${Date.now()}`,
    joinedAt: Date.now(),
  }

  gameSession.participants.push(newParticipant)
  saveProjectData(projectData)
  return newParticipant
}

export const updateParticipantScore = (gameId: number, participantId: string, scoreIncrease: number): void => {
  const projectData = getProjectData()
  const gameSession = projectData.gameSessions.find((s) => s.id === gameId)

  if (gameSession) {
    const participant = gameSession.participants.find((p) => p.id === participantId)
    if (participant) {
      participant.score += scoreIncrease
      projectData.totalCreditsEarned += scoreIncrease
      saveProjectData(projectData)
    }
  }
}

export const getGameParticipants = (gameId: number): Participant[] => {
  const projectData = getProjectData()
  const gameSession = projectData.gameSessions.find((s) => s.id === gameId)
  return gameSession?.participants || []
}

export const completeGameSession = (gameId: number): void => {
  const projectData = getProjectData()
  const gameSession = projectData.gameSessions.find((s) => s.id === gameId)

  if (gameSession) {
    gameSession.status = "completed"
    projectData.totalGamesPlayed += 1
    saveProjectData(projectData)
  }
}
