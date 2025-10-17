// "use client"

// import { useState } from "react"
// import { Card } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Progress } from "@/components/ui/progress"
// import { ChevronRight, RotateCcw } from "lucide-react"

// interface Question {
//   id: number
//   question: string
//   image?: string
//   options: string[]
//   correctAnswer: number
//   category: string
//   difficulty: "easy" | "medium" | "hard"
// }

// interface QuizState {
//   currentQuestion: number
//   score: number
//   answers: (number | null)[]
//   showResults: boolean
// }

// const QUIZ_QUESTIONS: Question[] = [
//   {
//     id: 1,
//     question: "What is the primary cause of deforestation in tropical regions?",
//     image: "/forest-ecosystem-with-trees.jpg",
//     options: ["Agricultural expansion", "Natural disasters", "Climate change", "Urban development"],
//     correctAnswer: 0,
//     category: "Ecology",
//     difficulty: "medium",
//   },
//   {
//     id: 2,
//     question: "Which of these is a renewable energy source?",
//     image: "/renewable-energy-solar-wind.jpg",
//     options: ["Coal", "Natural gas", "Solar power", "Oil"],
//     correctAnswer: 2,
//     category: "Energy",
//     difficulty: "easy",
//   },
//   {
//     id: 3,
//     question: "What percentage of Earth's oxygen is produced by the ocean?",
//     image: "/ocean-marine-life-conservation.jpg",
//     options: ["10%", "30%", "50%", "70%"],
//     correctAnswer: 2,
//     category: "Marine",
//     difficulty: "hard",
//   },
//   {
//     id: 4,
//     question: "Which gas is the primary driver of climate change?",
//     image: "/climate-change-earth-warming.jpg",
//     options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Hydrogen"],
//     correctAnswer: 2,
//     category: "Climate",
//     difficulty: "easy",
//   },
//   {
//     id: 5,
//     question: "What is soil erosion primarily caused by?",
//     image: "/soil-erosion-bare-land-tree-stumps.jpg",
//     options: ["Rainfall", "Deforestation and overgrazing", "Temperature changes", "Volcanic activity"],
//     correctAnswer: 1,
//     category: "Ecology",
//     difficulty: "medium",
//   },
// ]

// export function QuizSystem() {
//   const [quizState, setQuizState] = useState<QuizState>({
//     currentQuestion: 0,
//     score: 0,
//     answers: Array(QUIZ_QUESTIONS.length).fill(null),
//     showResults: false,
//   })

//   const currentQuestion = QUIZ_QUESTIONS[quizState.currentQuestion]
//   const progress = ((quizState.currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100

//   const handleAnswerSelect = (optionIndex: number) => {
//     const newAnswers = [...quizState.answers]
//     newAnswers[quizState.currentQuestion] = optionIndex

//     const isCorrect = optionIndex === currentQuestion.correctAnswer
//     const newScore = isCorrect ? quizState.score + 1 : quizState.score

//     setQuizState({
//       ...quizState,
//       answers: newAnswers,
//       score: newScore,
//     })
//   }

//   const handleNext = () => {
//     if (quizState.currentQuestion < QUIZ_QUESTIONS.length - 1) {
//       setQuizState({
//         ...quizState,
//         currentQuestion: quizState.currentQuestion + 1,
//       })
//     } else {
//       setQuizState({
//         ...quizState,
//         showResults: true,
//       })
//     }
//   }

//   const handleRestart = () => {
//     setQuizState({
//       currentQuestion: 0,
//       score: 0,
//       answers: Array(QUIZ_QUESTIONS.length).fill(null),
//       showResults: false,
//     })
//   }

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

//   if (quizState.showResults) {
//     const percentage = Math.round((quizState.score / QUIZ_QUESTIONS.length) * 100)
//     const passed = percentage >= 70

//     return (
//       <div className="space-y-6">
//         <div className="text-center space-y-4">
//           <h2 className="text-3xl font-bold text-foreground">Quiz Complete!</h2>
//           <div className="space-y-2">
//             <p className="text-6xl font-bold text-primary">{percentage}%</p>
//             <p className="text-xl text-muted-foreground">
//               You scored {quizState.score} out of {QUIZ_QUESTIONS.length}
//             </p>
//           </div>
//         </div>

//         <Card className={`p-8 text-center ${passed ? "bg-green-50 dark:bg-green-950" : "bg-red-50 dark:bg-red-950"}`}>
//           <p
//             className={`text-lg font-semibold ${passed ? "text-green-700 dark:text-green-200" : "text-red-700 dark:text-red-200"}`}
//           >
//             {passed ? "Congratulations! You passed!" : "Keep practicing to improve your score!"}
//           </p>
//         </Card>

//         <div className="space-y-4">
//           <h3 className="text-xl font-semibold text-foreground">Review Your Answers</h3>
//           <div className="space-y-3">
//             {QUIZ_QUESTIONS.map((q, index) => {
//               const userAnswer = quizState.answers[index]
//               const isCorrect = userAnswer === q.correctAnswer

//               return (
//                 <Card
//                   key={q.id}
//                   className={`p-4 ${isCorrect ? "border-green-200 bg-green-50 dark:bg-green-950" : "border-red-200 bg-red-50 dark:bg-red-950"}`}
//                 >
//                   <div className="space-y-2">
//                     <div className="flex items-start justify-between gap-4">
//                       <p className="font-medium text-foreground">{q.question}</p>
//                       <span
//                         className={`text-sm font-semibold ${isCorrect ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
//                       >
//                         {isCorrect ? "✓" : "✗"}
//                       </span>
//                     </div>
//                     <p className="text-sm text-muted-foreground">
//                       Your answer: <span className="font-medium">{q.options[userAnswer!]}</span>
//                     </p>
//                     {!isCorrect && (
//                       <p className="text-sm text-muted-foreground">
//                         Correct answer:{" "}
//                         <span className="font-medium text-green-600 dark:text-green-400">
//                           {q.options[q.correctAnswer]}
//                         </span>
//                       </p>
//                     )}
//                   </div>
//                 </Card>
//               )
//             })}
//           </div>
//         </div>

//         <Button onClick={handleRestart} className="w-full h-12 text-base gap-2" size="lg">
//           <RotateCcw className="h-5 w-5" />
//           Retake Quiz
//         </Button>
//       </div>
//     )
//   }

//   return (
//     <div className="space-y-6">
//       {/* Progress Bar */}
//       <div className="space-y-2">
//         <div className="flex items-center justify-between">
//           <p className="text-sm font-medium text-muted-foreground">
//             Question {quizState.currentQuestion + 1} of {QUIZ_QUESTIONS.length}
//           </p>
//           <span className="text-sm font-medium text-primary">{Math.round(progress)}%</span>
//         </div>
//         <Progress value={progress} className="h-2" />
//       </div>

//       {/* Question Card */}
//       <Card className="p-8 space-y-6">
//         {/* Category and Difficulty */}
//         <div className="flex items-center gap-2">
//           <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
//             {currentQuestion.category}
//           </span>
//           <span
//             className={`text-xs px-3 py-1 rounded-full font-medium ${getDifficultyColor(currentQuestion.difficulty)}`}
//           >
//             {currentQuestion.difficulty.charAt(0).toUpperCase() + currentQuestion.difficulty.slice(1)}
//           </span>
//         </div>

//         {/* Question Image */}
//         {currentQuestion.image && (
//           <div className="relative w-full h-64 rounded-lg overflow-hidden bg-muted">
//             <img
//               src={currentQuestion.image || "/placeholder.svg"}
//               alt="Question illustration"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         )}

//         {/* Question Text */}
//         <h3 className="text-2xl font-bold text-foreground">{currentQuestion.question}</h3>

//         {/* Options */}
//         <div className="space-y-3">
//           {currentQuestion.options.map((option, index) => {
//             const isSelected = quizState.answers[quizState.currentQuestion] === index
//             const isCorrect = index === currentQuestion.correctAnswer

//             return (
//               <button
//                 key={index}
//                 onClick={() => handleAnswerSelect(index)}
//                 className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
//                   isSelected
//                     ? isCorrect
//                       ? "border-green-500 bg-green-50 dark:bg-green-950"
//                       : "border-red-500 bg-red-50 dark:bg-red-950"
//                     : "border-border bg-card hover:border-primary/50"
//                 }`}
//               >
//                 <p
//                   className={`font-medium ${isSelected && !isCorrect ? "text-red-700 dark:text-red-200" : "text-foreground"}`}
//                 >
//                   {option}
//                 </p>
//               </button>
//             )
//           })}
//         </div>

//         {/* Score Display */}
//         <div className="pt-4 border-t border-border">
//           <p className="text-sm text-muted-foreground">
//             Current Score:{" "}
//             <span className="font-bold text-primary">
//               {quizState.score}/{quizState.currentQuestion + 1}
//             </span>
//           </p>
//         </div>
//       </Card>

//       {/* Navigation */}
//       <Button
//         onClick={handleNext}
//         disabled={quizState.answers[quizState.currentQuestion] === null}
//         className="w-full h-12 text-base gap-2"
//         size="lg"
//       >
//         {quizState.currentQuestion === QUIZ_QUESTIONS.length - 1 ? "Finish Quiz" : "Next Question"}
//         <ChevronRight className="h-5 w-5" />
//       </Button>
//     </div>
//   )
// }

"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { getQuestionsByTopic, QUIZ_QUESTIONS } from "@/lib/quiz-data"
import { ChevronRight, RotateCcw } from "lucide-react"
import { useState } from "react"

interface Question {
  id: number
  question: string
  image?: string
  options: string[]
  correctAnswer: number
  category: string
  difficulty: "easy" | "medium" | "hard"
  topic: "environment" | "health" | "economic" | "technology" | "social"
}

interface QuizState {
  currentQuestion: number
  score: number
  answers: (number | null)[]
  showResults: boolean
  hasStarted: boolean
  selectedTopic?: Question['topic']
  filteredQuestions: Question[] // Track filtered questions in state
}

export function QuizSystem() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    score: 0,
    answers: [],
    showResults: false,
    hasStarted: false,
    selectedTopic: undefined,
    filteredQuestions: [],
  })

  const handleStartQuiz = (topic?: Question['topic']) => {
    const filtered = topic ? getQuestionsByTopic(topic) : QUIZ_QUESTIONS
    setQuizState({
      currentQuestion: 0,
      score: 0,
      answers: Array(filtered.length).fill(null),
      showResults: false,
      hasStarted: true,
      selectedTopic: topic,
      filteredQuestions: filtered,
    })
  }

  const currentQuestionData = quizState.filteredQuestions[quizState.currentQuestion]
  const totalQuestions = quizState.filteredQuestions.length
  const progress = totalQuestions > 0 ? ((quizState.currentQuestion + 1) / totalQuestions) * 100 : 0

  const handleAnswerSelect = (optionIndex: number) => {
    const newAnswers = [...quizState.answers]
    newAnswers[quizState.currentQuestion] = optionIndex

    const isCorrect = optionIndex === currentQuestionData.correctAnswer
    const newScore = isCorrect ? quizState.score + 1 : quizState.score

    setQuizState({
      ...quizState,
      answers: newAnswers,
      score: newScore,
    })
  }

  const handleNext = () => {
    if (quizState.currentQuestion < totalQuestions - 1) {
      setQuizState({
        ...quizState,
        currentQuestion: quizState.currentQuestion + 1,
      })
    } else {
      setQuizState({
        ...quizState,
        showResults: true,
      })
    }
  }

  const handleRestart = () => {
    setQuizState({
      currentQuestion: 0,
      score: 0,
      answers: [],
      showResults: false,
      hasStarted: false,
      selectedTopic: undefined,
      filteredQuestions: [],
    })
  }

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

  if (!quizState.hasStarted) {
    return (
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-foreground">Start a Quiz</h2>
          <p className="text-muted-foreground">Choose a topic to begin</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card
            className="p-6 cursor-pointer hover:border-primary transition-colors"
            onClick={() => handleStartQuiz("environment")}
          >
            <h3 className="text-xl font-semibold text-foreground mb-2">Environment</h3>
            <p className="text-sm text-muted-foreground">Learn about ecology and climate ({getQuestionsByTopic('environment').length} questions)</p>
          </Card>

          <Card
            className="p-6 cursor-pointer hover:border-primary transition-colors"
            onClick={() => handleStartQuiz("health")}
          >
            <h3 className="text-xl font-semibold text-foreground mb-2">Health</h3>
            <p className="text-sm text-muted-foreground">Wellness and nutrition topics ({getQuestionsByTopic('health').length} questions)</p>
          </Card>

          <Card
            className="p-6 cursor-pointer hover:border-primary transition-colors"
            onClick={() => handleStartQuiz("economic")}
          >
            <h3 className="text-xl font-semibold text-foreground mb-2">Economic</h3>
            <p className="text-sm text-muted-foreground">Economics and sustainability ({getQuestionsByTopic('economic').length} questions)</p>
          </Card>

          <Card
            className="p-6 cursor-pointer hover:border-primary transition-colors"
            onClick={() => handleStartQuiz("technology")}
          >
            <h3 className="text-xl font-semibold text-foreground mb-2">Technology</h3>
            <p className="text-sm text-muted-foreground">Innovation and green tech ({getQuestionsByTopic('technology').length} questions)</p>
          </Card>

          <Card
            className="p-6 cursor-pointer hover:border-primary transition-colors"
            onClick={() => handleStartQuiz("social")}
          >
            <h3 className="text-xl font-semibold text-foreground mb-2">Social</h3>
            <p className="text-sm text-muted-foreground">Community and society ({getQuestionsByTopic('social').length} questions)</p>
          </Card>

          <Card className="p-6 cursor-pointer hover:border-primary transition-colors" onClick={() => handleStartQuiz()}>
            <h3 className="text-xl font-semibold text-foreground mb-2">All Topics</h3>
            <p className="text-sm text-muted-foreground">Mixed questions from all topics ({QUIZ_QUESTIONS.length} questions)</p>
          </Card>
        </div>
      </div>
    )
  }

  if (quizState.showResults) {
    const percentage = totalQuestions > 0 ? Math.round((quizState.score / totalQuestions) * 100) : 0
    const passed = percentage >= 70

    return (
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-foreground">Quiz Complete!</h2>
          <div className="space-y-2">
            <p className="text-6xl font-bold text-primary">{percentage}%</p>
            <p className="text-xl text-muted-foreground">
              You scored {quizState.score} out of {totalQuestions}
            </p>
            {quizState.selectedTopic && (
              <p className="text-lg text-muted-foreground">
                Topic: {quizState.selectedTopic.charAt(0).toUpperCase() + quizState.selectedTopic.slice(1)}
              </p>
            )}
          </div>
        </div>

        <Card className={`p-8 text-center ${passed ? "bg-green-50 dark:bg-green-950" : "bg-red-50 dark:bg-red-950"}`}>
          <p
            className={`text-lg font-semibold ${passed ? "text-green-700 dark:text-green-200" : "text-red-700 dark:text-red-200"}`}
          >
            {passed ? "Congratulations! You passed!" : "Keep practicing to improve your score!"}
          </p>
        </Card>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">Review Your Answers</h3>
          <div className="space-y-3">
            {quizState.filteredQuestions.map((q, index) => {
              const userAnswer = quizState.answers[index]
              const isCorrect = userAnswer === q.correctAnswer

              return (
                <Card
                  key={q.id}
                  className={`p-4 ${isCorrect ? "border-green-200 bg-green-50 dark:bg-green-950" : "border-red-200 bg-red-50 dark:bg-red-950"}`}
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <p className="font-medium text-foreground">{q.question}</p>
                      <span
                        className={`text-sm font-semibold ${isCorrect ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
                      >
                        {isCorrect ? "Correct" : "Wrong"}
                      </span>
                    </div>
                    {userAnswer !== null && (
                      <p className="text-sm text-muted-foreground">
                        Your answer: <span className="font-medium">{q.options[userAnswer]}</span>
                      </p>
                    )}
                    {userAnswer === null && (
                      <p className="text-sm text-muted-foreground">
                        Your answer: <span className="font-medium">Skipped</span>
                      </p>
                    )}
                    {!isCorrect && userAnswer !== null && (
                      <p className="text-sm text-muted-foreground">
                        Correct answer:{" "}
                        <span className="font-medium text-green-600 dark:text-green-400">
                          {q.options[q.correctAnswer]}
                        </span>
                      </p>
                    )}
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        <Button onClick={handleRestart} className="w-full h-12 text-base gap-2" size="lg">
          <RotateCcw className="h-5 w-5" />
          Retake Quiz
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-muted-foreground">
            Question {quizState.currentQuestion + 1} of {totalQuestions}
          </p>
          <span className="text-sm font-medium text-primary">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question Card */}
      <Card className="p-8 space-y-6">
        {/* Category and Difficulty */}
        <div className="flex items-center gap-2">
          <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
            {currentQuestionData.category}
          </span>
          <span
            className={`text-xs px-3 py-1 rounded-full font-medium ${getDifficultyColor(currentQuestionData.difficulty)}`}
          >
            {currentQuestionData.difficulty.charAt(0).toUpperCase() + currentQuestionData.difficulty.slice(1)}
          </span>
        </div>

        {/* Question Image */}
        {currentQuestionData.image && (
          <div className="relative w-full h-64 rounded-lg overflow-hidden bg-muted">
            <img
              src={currentQuestionData.image || "/placeholder.svg"}
              alt="Question illustration"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Question Text */}
        <h3 className="text-2xl font-bold text-foreground">{currentQuestionData.question}</h3>

        {/* Options */}
        <div className="space-y-3">
          {currentQuestionData.options.map((option, index) => {
            const isSelected = quizState.answers[quizState.currentQuestion] === index
            const isCorrect = index === currentQuestionData.correctAnswer

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                  isSelected
                    ? isCorrect
                      ? "border-green-500 bg-green-50 dark:bg-green-950"
                      : "border-red-500 bg-red-50 dark:bg-red-950"
                    : "border-border bg-card hover:border-primary/50"
                }`}
              >
                <p
                  className={`font-medium ${isSelected && !isCorrect ? "text-red-700 dark:text-red-200" : "text-foreground"}`}
                >
                  {option}
                </p>
              </button>
            )
          })}
        </div>

        {/* Score Display */}
        <div className="pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Current Score:{" "}
            <span className="font-bold text-primary">
              {quizState.score}/{quizState.currentQuestion + 1}
            </span>
          </p>
        </div>
      </Card>

      {/* Navigation */}
      <Button
        onClick={handleNext}
        disabled={quizState.answers[quizState.currentQuestion] === null}
        className="w-full h-12 text-base gap-2"
        size="lg"
      >
        {quizState.currentQuestion === totalQuestions - 1 ? "Finish Quiz" : "Next Question"}
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  )
}