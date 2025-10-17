// "use client"

// import { useState } from "react"
// import { CheckCircle, XCircle, ChevronRight } from "lucide-react"

// export default function QuizPage({ user }) {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
//   const [selectedAnswer, setSelectedAnswer] = useState(null)
//   const [showResult, setShowResult] = useState(false)
//   const [score, setScore] = useState(0)
//   const [quizStarted, setQuizStarted] = useState(false)

//   const quizzes = [
//     {
//       id: 1,
//       title: "Deforestation Impact",
//       description: "Learn about the effects of cutting down trees",
//       difficulty: "Beginner",
//       questions: [
//         {
//           id: 1,
//           question: "What happens when too many trees are cut down?",
//           image: "/bare-land-with-tree-stumps-and-eroding-soil-near-h.jpg",
//           options: [
//             { id: "A", text: "Air improves" },
//             { id: "B", text: "Soil erodes", correct: true },
//             { id: "C", text: "Rain increases" },
//             { id: "D", text: "Rivers freeze" },
//           ],
//         },
//         {
//           id: 2,
//           question: "Which of the following is a consequence of deforestation?",
//           image: "/forest-being-cleared-with-heavy-machinery.jpg",
//           options: [
//             { id: "A", text: "Increased biodiversity" },
//             { id: "B", text: "Loss of wildlife habitat", correct: true },
//             { id: "C", text: "More oxygen production" },
//             { id: "D", text: "Cooler climate" },
//           ],
//         },
//         {
//           id: 3,
//           question: "What is the primary cause of deforestation?",
//           image: "/logging-industry-cutting-trees-for-timber.jpg",
//           options: [
//             { id: "A", text: "Natural disasters" },
//             { id: "B", text: "Human activities like logging and agriculture", correct: true },
//             { id: "C", text: "Animal migration" },
//             { id: "D", text: "Climate change alone" },
//           ],
//         },
//       ],
//     },
//     {
//       id: 2,
//       title: "Climate Change Basics",
//       description: "Understand the fundamentals of climate change",
//       difficulty: "Beginner",
//       questions: [
//         {
//           id: 1,
//           question: "What is the main greenhouse gas responsible for climate change?",
//           image: "/factory-emissions-and-pollution-in-the-sky.jpg",
//           options: [
//             { id: "A", text: "Oxygen" },
//             { id: "B", text: "Nitrogen" },
//             { id: "C", text: "Carbon Dioxide", correct: true },
//             { id: "D", text: "Hydrogen" },
//           ],
//         },
//       ],
//     },
//   ]

//   const handleStartQuiz = (quizIndex) => {
//     setCurrentQuestionIndex(0)
//     setSelectedAnswer(null)
//     setShowResult(false)
//     setScore(0)
//     setQuizStarted(quizIndex)
//   }

//   const handleAnswerSelect = (optionId) => {
//     if (!showResult) {
//       setSelectedAnswer(optionId)
//       setShowResult(true)
//     }
//   }

//   const handleNextQuestion = () => {
//     const quiz = quizzes[quizStarted]
//     if (currentQuestionIndex < quiz.questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1)
//       setSelectedAnswer(null)
//       setShowResult(false)
//     } else {
//       setQuizStarted(false)
//     }
//   }

//   if (quizStarted !== false) {
//     const quiz = quizzes[quizStarted]
//     const currentQuestion = quiz.questions[currentQuestionIndex]
//     const selectedOption = currentQuestion.options.find((opt) => opt.id === selectedAnswer)
//     const isCorrect = selectedOption?.correct

//     return (
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Quiz Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-emerald-900 mb-2">{quiz.title}</h1>
//           <div className="flex items-center gap-4">
//             <div className="w-full bg-emerald-100 rounded-full h-2">
//               <div
//                 className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
//                 style={{
//                   width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%`,
//                 }}
//               ></div>
//             </div>
//             <span className="text-emerald-900 font-semibold whitespace-nowrap">
//               {currentQuestionIndex + 1}/{quiz.questions.length}
//             </span>
//           </div>
//         </div>

//         {/* Question Card */}
//         <div className="bg-white rounded-xl shadow-lg p-8 border border-emerald-100">
//           {/* Question Image */}
//           <img
//             src={currentQuestion.image || "/placeholder.svg"}
//             alt="Question illustration"
//             className="w-full h-64 object-cover rounded-lg mb-6"
//           />

//           {/* Question Text */}
//           <h2 className="text-2xl font-bold text-emerald-900 mb-6">{currentQuestion.question}</h2>

//           {/* Options */}
//           <div className="space-y-3 mb-6">
//             {currentQuestion.options.map((option) => {
//               const isSelected = selectedAnswer === option.id
//               const isCorrectOption = option.correct

//               return (
//                 <button
//                   key={option.id}
//                   onClick={() => handleAnswerSelect(option.id)}
//                   disabled={showResult}
//                   className={`w-full p-4 rounded-lg border-2 font-semibold transition-all duration-200 text-left flex items-center justify-between ${
//                     isSelected
//                       ? isCorrect
//                         ? "border-green-500 bg-green-50 text-green-900"
//                         : "border-red-500 bg-red-50 text-red-900"
//                       : showResult && isCorrectOption
//                         ? "border-green-500 bg-green-50 text-green-900"
//                         : "border-emerald-200 bg-white text-emerald-900 hover:border-emerald-400"
//                   } ${showResult ? "cursor-not-allowed" : "cursor-pointer"}`}
//                 >
//                   <span>
//                     {option.id}. {option.text}
//                   </span>
//                   {isSelected && isCorrect && <CheckCircle className="w-5 h-5" />}
//                   {isSelected && !isCorrect && <XCircle className="w-5 h-5" />}
//                   {showResult && isCorrectOption && !isSelected && <CheckCircle className="w-5 h-5" />}
//                 </button>
//               )
//             })}
//           </div>

//           {/* Result Message */}
//           {showResult && (
//             <div
//               className={`p-4 rounded-lg mb-6 font-semibold ${
//                 isCorrect
//                   ? "bg-green-50 text-green-900 border border-green-200"
//                   : "bg-red-50 text-red-900 border border-red-200"
//               }`}
//             >
//               {isCorrect ? "✓ Correct! Great job!" : "✗ Incorrect. Try the next question!"}
//             </div>
//           )}

//           {/* Next Button */}
//           {showResult && (
//             <button
//               onClick={handleNextQuestion}
//               className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold py-3 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 flex items-center justify-center gap-2"
//             >
//               {currentQuestionIndex === quiz.questions.length - 1 ? "Finish Quiz" : "Next Question"}
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           )}
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       {/* Header */}
//       <div className="mb-8">
//         <h1 className="text-4xl font-bold text-emerald-900 mb-2">Environmental Quizzes</h1>
//         <p className="text-emerald-700">Test your knowledge and earn credits</p>
//       </div>

//       {/* Quiz Cards Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {quizzes.map((quiz, index) => (
//           <div
//             key={quiz.id}
//             className="bg-white rounded-xl shadow-md p-6 border border-emerald-100 hover:shadow-lg transition-all duration-200"
//           >
//             <div className="flex items-start justify-between mb-4">
//               <div>
//                 <h3 className="text-xl font-bold text-emerald-900">{quiz.title}</h3>
//                 <p className="text-sm text-emerald-600 mt-1">{quiz.description}</p>
//               </div>
//               <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold">
//                 {quiz.difficulty}
//               </span>
//             </div>

//             <div className="flex items-center justify-between">
//               <p className="text-sm text-emerald-700">{quiz.questions.length} Questions</p>
//               <button
//                 onClick={() => handleStartQuiz(index)}
//                 className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-200"
//               >
//                 Start Quiz
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }


"use client"

import { CheckCircle, ChevronRight, XCircle } from "lucide-react"
import { useState } from "react"

export default function QuizPage({ user }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [quizStarted, setQuizStarted] = useState(false)
  const [currentTopic, setCurrentTopic] = useState(null)

  const quizzes = [
    {
      id: 1,
      title: "Environmental Science",
      description: "Comprehensive environmental knowledge",
      difficulty: "Intermediate",
      topics: [
        {
          name: "Deforestation Impact",
          questions: [
            {
              id: 1,
              question: "What happens when too many trees are cut down?",
              image: "/bare-land-with-tree-stumps-and-eroding-soil-near-h.jpg",
              options: [
                { id: "A", text: "Air improves" },
                { id: "B", text: "Soil erodes", correct: true },
                { id: "C", text: "Rain increases" },
                { id: "D", text: "Rivers freeze" },
              ],
            },
            {
              id: 2,
              question: "Which of the following is a consequence of deforestation?",
              image: "/forest-being-cleared-with-heavy-machinery.jpg",
              options: [
                { id: "A", text: "Increased biodiversity" },
                { id: "B", text: "Loss of wildlife habitat", correct: true },
                { id: "C", text: "More oxygen production" },
                { id: "D", text: "Cooler climate" },
              ],
            },
            {
              id: 3,
              question: "What is the primary cause of deforestation?",
              image: "/logging-industry-cutting-trees-for-timber.jpg",
              options: [
                { id: "A", text: "Natural disasters" },
                { id: "B", text: "Human activities like logging and agriculture", correct: true },
                { id: "C", text: "Animal migration" },
                { id: "D", text: "Climate change alone" },
              ],
            },
            {
              id: 4,
              question: "How does deforestation affect carbon dioxide levels?",
              image: "/forest-carbon-cycle.jpg",
              options: [
                { id: "A", text: "Decreases CO2" },
                { id: "B", text: "Increases CO2 in atmosphere", correct: true },
                { id: "C", text: "No effect on CO2" },
                { id: "D", text: "Eliminates CO2" },
              ],
            },
            {
              id: 5,
              question: "Which region experiences the most deforestation?",
              image: "/amazon-rainforest.jpg",
              options: [
                { id: "A", text: "Amazon Rainforest", correct: true },
                { id: "B", text: "Sahara Desert" },
                { id: "C", text: "Arctic Tundra" },
                { id: "D", text: "Australian Outback" },
              ],
            },
          ],
        },
        {
          name: "Climate Change Basics",
          questions: [
            {
              id: 1,
              question: "What is the main greenhouse gas responsible for climate change?",
              image: "/factory-emissions-and-pollution-in-the-sky.jpg",
              options: [
                { id: "A", text: "Oxygen" },
                { id: "B", text: "Nitrogen" },
                { id: "C", text: "Carbon Dioxide", correct: true },
                { id: "D", text: "Hydrogen" },
              ],
            },
            {
              id: 2,
              question: "What is the greenhouse effect?",
              image: "/greenhouse-effect-diagram.jpg",
              options: [
                { id: "A", text: "Growing plants in glass houses" },
                { id: "B", text: "Trapping of heat in atmosphere", correct: true },
                { id: "C", text: "Cooling of the planet" },
                { id: "D", text: "Ozone layer depletion" },
              ],
            },
            {
              id: 3,
              question: "Which human activity contributes most to climate change?",
              image: "/industrial-emissions.jpg",
              options: [
                { id: "A", text: "Burning fossil fuels", correct: true },
                { id: "B", text: "Planting trees" },
                { id: "C", text: "Building dams" },
                { id: "D", text: "Recycling waste" },
              ],
            },
            {
              id: 4,
              question: "What is a consequence of global warming?",
              image: "/melting-ice-caps.jpg",
              options: [
                { id: "A", text: "Rising sea levels", correct: true },
                { id: "B", text: "Increased snowfall" },
                { id: "C", text: "Colder winters" },
                { id: "D", text: "More oxygen" },
              ],
            },
            {
              id: 5,
              question: "What is the Paris Agreement?",
              image: "/climate-conference.jpg",
              options: [
                { id: "A", text: "A peace treaty" },
                { id: "B", text: "International climate accord", correct: true },
                { id: "C", text: "A trade agreement" },
                { id: "D", text: "A sports event" },
              ],
            },
          ],
        },
      ],
    },
  ]

  const handleStartQuiz = (quizIndex) => {
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setQuizStarted(quizIndex)
    setCurrentTopic(0)
  }

  const handleStartTopic = (topicIndex) => {
    setCurrentTopic(topicIndex)
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowResult(false)
  }

  const handleAnswerSelect = (optionId) => {
    if (!showResult) {
      setSelectedAnswer(optionId)
      setShowResult(true)
    }
  }

  const handleNextQuestion = () => {
    const quiz = quizzes[quizStarted]
    const topic = quiz.topics[currentTopic]

    if (currentQuestionIndex < topic.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else if (currentTopic < quiz.topics.length - 1) {
      setCurrentTopic(currentTopic + 1)
      setCurrentQuestionIndex(0)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setQuizStarted(false)
      setCurrentTopic(null)
    }
  }

  if (quizStarted !== false && currentTopic === null) {
    const quiz = quizzes[quizStarted]

    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => setQuizStarted(false)}
          className="mb-4 text-sm text-primary hover:underline flex items-center gap-1"
        >
          ← Back to Quizzes
        </button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-emerald-900 mb-2">{quiz.title}</h1>
          <p className="text-emerald-700">{quiz.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quiz.topics.map((topic, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 border border-emerald-100 hover:shadow-lg transition-all duration-200"
            >
              <h3 className="text-lg font-bold text-emerald-900 mb-2">{topic.name}</h3>
              <p className="text-sm text-emerald-600 mb-4">{topic.questions.length} Questions</p>
              <button
                onClick={() => handleStartTopic(index)}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold py-2 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-200"
              >
                Start Topic
              </button>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (quizStarted !== false && currentTopic !== null) {
    const quiz = quizzes[quizStarted]
    const topic = quiz.topics[currentTopic]
    const currentQuestion = topic.questions[currentQuestionIndex]
    const selectedOption = currentQuestion.options.find((opt) => opt.id === selectedAnswer)
    const isCorrect = selectedOption?.correct

    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quiz Header */}
        <div className="mb-8">
          <button
            onClick={() => setCurrentTopic(null)}
            className="mb-4 text-sm text-primary hover:underline flex items-center gap-1"
          >
            ← Back to Topics
          </button>

          <h1 className="text-3xl font-bold text-emerald-900 mb-2">{topic.name}</h1>
          <div className="flex items-center gap-4">
            <div className="w-full bg-emerald-100 rounded-full h-2">
              <div
                className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${((currentQuestionIndex + 1) / topic.questions.length) * 100}%`,
                }}
              ></div>
            </div>
            <span className="text-emerald-900 font-semibold whitespace-nowrap">
              {currentQuestionIndex + 1}/{topic.questions.length}
            </span>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-emerald-100">
          {/* Question Image */}
          <img
            src={currentQuestion.image || "/placeholder.svg"}
            alt="Question illustration"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />

          {/* Question Text */}
          <h2 className="text-2xl font-bold text-emerald-900 mb-6">{currentQuestion.question}</h2>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {currentQuestion.options.map((option) => {
              const isSelected = selectedAnswer === option.id
              const isCorrectOption = option.correct

              return (
                <button
                  key={option.id}
                  onClick={() => handleAnswerSelect(option.id)}
                  disabled={showResult}
                  className={`w-full p-4 rounded-lg border-2 font-semibold transition-all duration-200 text-left flex items-center justify-between ${
                    isSelected
                      ? isCorrect
                        ? "border-green-500 bg-green-50 text-green-900"
                        : "border-red-500 bg-red-50 text-red-900"
                      : showResult && isCorrectOption
                        ? "border-green-500 bg-green-50 text-green-900"
                        : "border-emerald-200 bg-white text-emerald-900 hover:border-emerald-400"
                  } ${showResult ? "cursor-not-allowed" : "cursor-pointer"}`}
                >
                  <span>
                    {option.id}. {option.text}
                  </span>
                  {isSelected && isCorrect && <CheckCircle className="w-5 h-5" />}
                  {isSelected && !isCorrect && <XCircle className="w-5 h-5" />}
                  {showResult && isCorrectOption && !isSelected && <CheckCircle className="w-5 h-5" />}
                </button>
              )
            })}
          </div>

          {/* Result Message */}
          {showResult && (
            <div
              className={`p-4 rounded-lg mb-6 font-semibold ${
                isCorrect
                  ? "bg-green-50 text-green-900 border border-green-200"
                  : "bg-red-50 text-red-900 border border-red-200"
              }`}
            >
              {isCorrect ? "✓ Correct! Great job!" : "✗ Incorrect. Try the next question!"}
            </div>
          )}

          {/* Next Button */}
          {showResult && (
            <button
              onClick={handleNextQuestion}
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold py-3 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 flex items-center justify-center gap-2"
            >
              {currentQuestionIndex === topic.questions.length - 1
                ? currentTopic === quizzes[quizStarted].topics.length - 1
                  ? "Finish Quiz"
                  : "Next Topic"
                : "Next Question"}
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-emerald-900 mb-2">Environmental Quizzes</h1>
        <p className="text-emerald-700">Test your knowledge and earn credits</p>
      </div>

      {/* Quiz Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {quizzes.map((quiz, index) => (
          <div
            key={quiz.id}
            className="bg-white rounded-xl shadow-md p-6 border border-emerald-100 hover:shadow-lg transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-emerald-900">{quiz.title}</h3>
                <p className="text-sm text-emerald-600 mt-1">{quiz.description}</p>
              </div>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold">
                {quiz.difficulty}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-emerald-700">
                {quiz.topics.reduce((sum, topic) => sum + topic.questions.length, 0)} Questions
              </p>
              <button
                onClick={() => handleStartQuiz(index)}
                className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-200"
              >
                Start Quiz
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
