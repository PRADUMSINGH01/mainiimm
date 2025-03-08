"use client";
import { useState, useEffect } from "react";
import {
  FiClock,
  FiBookOpen,
  FiChevronLeft,
  FiChevronRight,
  FiCheckCircle,
  FiSkipForward,
} from "react-icons/fi";

const MockTest = () => {
  // Sample questions data
  const mockQuestions = [
    {
      id: 1,
      question: "What is the value of π (pi) up to two decimal places?",
      options: ["3.14", "3.16", "3.12", "3.18"],
      correctAnswer: 0,
      marks: 1,
    },
    {
      id: 2,
      question: "Which of the following is a prime number?",
      options: ["4", "9", "11", "15"],
      correctAnswer: 2,
      marks: 1,
    },
    {
      id: 2,
      question: "Which of the following is a prime number?",
      options: ["4", "9", "11", "15"],
      correctAnswer: 2,
      marks: 1,
    },
    {
      id: 2,
      question: "Which of the following is a prime number?",
      options: ["4", "9", "11", "15"],
      correctAnswer: 2,
      marks: 1,
    },
    {
      id: 2,
      question: "Which of the following is a prime number?",
      options: ["4", "9", "11", "15"],
      correctAnswer: 2,
      marks: 1,
    },
    {
      id: 2,
      question: "Which of the following is a prime number?",
      options: ["4", "9", "11", "15"],
      correctAnswer: 2,
      marks: 1,
    },
    {
      id: 2,
      question: "Which of the following is a prime number?",
      options: ["4", "9", "11", "15"],
      correctAnswer: 2,
      marks: 1,
    },
  ];

  // Component state with proper initialization
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(() =>
    mockQuestions.map((question) => ({
      questionId: question.id,
      selectedOption: null,
      skipped: false,
    }))
  );
  const [timeLeft, setTimeLeft] = useState(3600);
  const [isTestSubmitted, setIsTestSubmitted] = useState(false);
  const handleSkipQuestion = () => {
    const newAnswers = [...answers];
    if (newAnswers[currentQuestion]) {
      newAnswers[currentQuestion].skipped = true;
      setAnswers(newAnswers);
    }
    handleNextQuestion();
  };
  // Timer effect
  useEffect(() => {
    if (!isTestSubmitted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isTestSubmitted, timeLeft]);

  // Answer selection handler with safety check
  const handleAnswerSelect = (optionIndex) => {
    const newAnswers = [...answers];
    if (newAnswers[currentQuestion]) {
      newAnswers[currentQuestion].selectedOption = optionIndex;
      setAnswers(newAnswers);
    }
  };

  // Navigation handlers
  const handleNextQuestion = () => {
    if (currentQuestion < mockQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  // Test submission
  const handleSubmitTest = () => {
    setIsTestSubmitted(true);
  };

  // Calculate score
  const calculateScore = () => {
    return answers.reduce((acc, answer) => {
      if (answer.skipped) return acc;
      const question = mockQuestions.find((q) => q.id === answer.questionId);
      return answer.selectedOption === question?.correctAnswer
        ? acc + question.marks
        : acc;
    }, 0);
  };

  // Format time display
  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  if (isTestSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
          <div className="text-center mb-8">
            <FiCheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Test Submitted!
            </h1>
            <p className="text-xl text-gray-600">
              Your Score: {calculateScore()} /{" "}
              {mockQuestions.reduce((acc, q) => acc + q.marks, 0)}
            </p>
          </div>

          <div className="space-y-6">
            {mockQuestions.map((question, index) => (
              <div key={question.id} className="border-b pb-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-blue-600 font-semibold">
                    Question {index + 1}
                  </span>
                  {answers[index]?.selectedOption === question.correctAnswer ? (
                    <span className="text-green-500">✓ Correct</span>
                  ) : (
                    <span className="text-red-500">✕ Incorrect</span>
                  )}
                </div>
                <p className="text-gray-800 mb-4">{question.question}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {question.options.map((option, optIndex) => (
                    <div
                      key={optIndex}
                      className={`p-3 rounded-lg ${
                        optIndex === question.correctAnswer
                          ? "bg-green-100 border border-green-300"
                          : answers[index]?.selectedOption === optIndex
                          ? "bg-red-100 border border-red-300"
                          : "bg-gray-100"
                      }`}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Mobile-optimized header */}
        <div className="bg-blue-600 text-white p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-2 sm:mb-0">
            <FiBookOpen className="h-5 w-5 sm:h-6 sm:w-6" />
            <h1 className="text-lg sm:text-xl font-bold">Mock Test</h1>
          </div>
          <div className="flex items-center gap-2">
            <FiClock className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="text-sm sm:text-base font-medium">
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-4 sm:p-8">
          {/* Progress Indicator */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
            <span className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-0">
              Q{currentQuestion + 1} of {mockQuestions.length}
            </span>
            <div className="w-full sm:w-1/2 bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all"
                style={{
                  width: `${
                    ((currentQuestion + 1) / mockQuestions.length) * 100
                  }%`,
                }}
              />
            </div>
          </div>

          {/* Current Question */}
          <div className="mb-6">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
              {mockQuestions[currentQuestion]?.question ||
                "Question not available"}
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {mockQuestions[currentQuestion]?.options?.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`p-3 sm:p-4 text-left rounded-lg border transition-all text-sm sm:text-base ${
                    answers[currentQuestion]?.selectedOption === index
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-200 hover:border-blue-400"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile-optimized Navigation Controls */}
          <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
            <div className="w-full sm:w-auto flex items-center justify-between gap-3">
              <button
                onClick={handlePreviousQuestion}
                disabled={currentQuestion === 0}
                className="flex-1 sm:flex-none flex items-center gap-1 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                <FiChevronLeft className="h-4 w-4" /> Prev
              </button>

              <button
                onClick={handleSkipQuestion}
                className="flex-1 sm:flex-none flex items-center gap-1 px-4 py-2 rounded-lg bg-orange-100 text-orange-700 hover:bg-orange-200 text-sm sm:text-base"
              >
                <FiSkipForward className="h-4 w-4" /> Skip
              </button>
            </div>

            {currentQuestion === mockQuestions.length - 1 ? (
              <button
                onClick={handleSubmitTest}
                className="w-full sm:w-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm sm:text-base"
              >
                Submit Test
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="w-full sm:w-auto flex items-center gap-1 px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-sm sm:text-base"
              >
                Next <FiChevronRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  // Updated results display with skip status
  if (isTestSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-4 sm:p-8">
          {/* ... keep header same ... */}

          <div className="space-y-4 sm:space-y-6">
            {mockQuestions.map((question, index) => (
              <div key={question.id} className="border-b pb-4 sm:pb-6">
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <span className="text-blue-600 font-semibold text-sm sm:text-base">
                    Q{index + 1}
                  </span>
                  {answers[index]?.skipped ? (
                    <span className="text-gray-500 text-sm sm:text-base">
                      ⏩ Skipped
                    </span>
                  ) : answers[index]?.selectedOption ===
                    question.correctAnswer ? (
                    <span className="text-green-500 text-sm sm:text-base">
                      ✓ Correct
                    </span>
                  ) : (
                    <span className="text-red-500 text-sm sm:text-base">
                      ✕ Incorrect
                    </span>
                  )}
                </div>
                {/* ... keep options display same ... */}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default MockTest;
