"use client";

import { useState, useEffect } from "react";
import { PiBoulesFill } from "react-icons/pi";
import { IoMdClose, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";

export default function MockTest({ Propsdata }) {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load questions and initialize answers.
  useEffect(() => {
    if (Propsdata?.questions) {
      setQuestions(Propsdata.questions);
      setAnswers(Array(Propsdata.questions.length).fill(null));
      setLoading(false);
    }
  }, [Propsdata]);

  // Countdown timer.
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime > 0) return prevTime - 1;
        clearInterval(timer);
        alert("Time is up!");
        return 0;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Handle answer selection.
  const handleAnswer = (option) => {
    setAnswers((prev) => {
      const updated = [...prev];
      updated[currentQuestion] = option;
      return updated;
    });
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Navigation between questions.
  const handleNavigation = (direction) => {
    if (direction === "next" && currentQuestion < questions.length - 1) {
      if (answers[currentQuestion] === null) {
        setShowAlert(true);
      } else {
        setShowAlert(false);
        setCurrentQuestion((prev) => prev + 1);
      }
    } else if (direction === "prev" && currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  // Skip current question.
  const handleSkip = () => {
    setAnswers((prev) => {
      const updated = [...prev];
      updated[currentQuestion] = "Skipped";
      return updated;
    });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  // Submit answers.
  const handleSubmit = () => {
    setSubmitted(true);
  };

  // Loading skeleton.
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6">
        <div className="w-full max-w-3xl p-4 sm:p-6 bg-white rounded-lg shadow-lg animate-pulse">
          <div className="h-8 bg-gray-300 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
          <div className="h-10 bg-gray-300 rounded w-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 p-4 sm:p-6">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <h1 className="text-lg sm:text-xl font-bold text-gray-800">
            Certification Exam
          </h1>
          <div className="flex items-center gap-2">
            <FaRegClock className="text-gray-600" />
            <span className="text-sm font-medium text-gray-600">
              Time Remaining: {formatTime(timeLeft)}
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-3xl mt-20 sm:mt-24 bg-white rounded-xl shadow-lg overflow-hidden">
        {!submitted ? (
          <div className="p-4 sm:p-8">
            {/* Question Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-0">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs sm:text-sm font-medium">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-xs sm:text-sm text-gray-500">
                  {questions[currentQuestion]?.category}
                </span>
              </div>
            </div>

            {/* Question Content */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-base sm:text-lg font-semibold text-gray-800 leading-relaxed">
                {questions[currentQuestion]?.Question}
              </h2>
              {questions[currentQuestion]?.image && (
                <div className="my-4 p-3 sm:p-4 bg-gray-50 rounded-lg">
                  <img
                    src={questions[currentQuestion].image}
                    alt="Question diagram"
                    className="max-h-40 sm:max-h-48 mx-auto"
                  />
                </div>
              )}
            </div>

            {/* Answer Options */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {questions[currentQuestion]?.option?.map((option, index) => {
                const isSelected = answers[currentQuestion] === option;
                return (
                  <button
                    key={`option-${index}`}
                    onClick={() => handleAnswer(option)}
                    className={`w-full p-3 sm:p-4 text-left rounded-lg border-2 transition-all
                    ${
                      isSelected
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                    }
                    ${answers[currentQuestion] ? "cursor-pointer" : ""}`}
                  >
                    <div className="flex items-center">
                      <span
                        className={`mr-3 sm:mr-4 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center 
                        rounded-full ${
                          isSelected ? "bg-blue-500 text-white" : "bg-gray-100"
                        }`}
                      >
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="text-gray-700 text-xs sm:text-sm">
                        {option}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Navigation Controls */}
            <div className="flex flex-col sm:flex-row items-stretch justify-between border-t pt-4 sm:pt-6">
              <div className="flex gap-2 sm:gap-3 mb-4 sm:mb-0">
                <button
                  onClick={() => handleNavigation("prev")}
                  disabled={currentQuestion === 0}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-600 
                  hover:bg-gray-50 disabled:opacity-50 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm"
                >
                  <IoIosArrowBack className="text-lg" /> Previous
                </button>
                <button
                  onClick={handleSkip}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-600 
                  hover:bg-gray-50 text-xs sm:text-sm"
                >
                  Skip Question
                </button>
              </div>

              <div className="flex gap-2 sm:gap-3">
                {currentQuestion < questions.length - 1 ? (
                  <button
                    onClick={() => handleNavigation("next")}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                    flex items-center gap-1 sm:gap-2 text-xs sm:text-sm"
                  >
                    Next <IoIosArrowForward className="text-lg" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-xs sm:text-sm"
                  >
                    Submit Exam
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          // Improved Results Section
          <div className="p-4 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">
              Exam Results
            </h2>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="p-3 sm:p-4 bg-green-50 rounded-lg text-center">
                <p className="text-xl sm:text-2xl font-bold text-green-600">
                  {
                    answers.filter((ans, i) => ans === questions[i]?.Answer)
                      .length
                  }
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  Correct Answers
                </p>
              </div>
              <div className="p-3 sm:p-4 bg-red-50 rounded-lg text-center">
                <p className="text-xl sm:text-2xl font-bold text-red-600">
                  {
                    answers.filter(
                      (ans, i) =>
                        ans && ans !== "Skipped" && ans !== questions[i]?.Answer
                    ).length
                  }
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  Incorrect Answers
                </p>
              </div>
              <div className="p-3 sm:p-4 bg-gray-50 rounded-lg text-center">
                <p className="text-xl sm:text-2xl font-bold text-gray-600">
                  {answers.filter((ans) => ans === "Skipped").length}
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  Skipped Questions
                </p>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 sm:px-6 py-2 text-left text-xs sm:text-sm font-medium text-gray-500">
                      Question
                    </th>
                    <th className="px-4 sm:px-6 py-2 text-left text-xs sm:text-sm font-medium text-gray-500">
                      Your Answer
                    </th>
                    <th className="px-4 sm:px-6 py-2 text-left text-xs sm:text-sm font-medium text-gray-500">
                      Correct Answer
                    </th>
                    <th className="px-4 sm:px-6 py-2 text-left text-xs sm:text-sm font-medium text-gray-500">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {answers.map((ans, index) => {
                    const isCorrect = ans === questions[index]?.Answer;
                    const isSkipped = ans === "Skipped";
                    return (
                      <tr key={index}>
                        <td className="px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium text-gray-900">
                          Q{index + 1}
                        </td>
                        <td className="px-4 sm:px-6 py-2 text-xs sm:text-sm text-gray-600">
                          {isSkipped ? "Skipped" : ans}
                        </td>
                        <td className="px-4 sm:px-6 py-2 text-xs sm:text-sm text-gray-600">
                          {questions[index]?.Answer}
                        </td>
                        <td className="px-4 sm:px-6 py-2">
                          <span
                            className={`inline-flex items-center px-2 py-1 rounded-full text-xs 
                            ${
                              isCorrect
                                ? "bg-green-100 text-green-800"
                                : isSkipped
                                ? "bg-gray-100 text-gray-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {isCorrect
                              ? "Correct"
                              : isSkipped
                              ? "Skipped"
                              : "Incorrect"}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-4 sm:mt-8 text-center">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                transition-colors text-xs sm:text-sm"
              >
                Retake Exam
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Alert Notification */}
      {showAlert && (
        <div
          className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 bg-white border border-red-200 shadow-lg rounded-lg p-3 sm:p-4 
          flex items-center gap-3 sm:gap-4 animate-slide-up"
        >
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-100 rounded-full flex items-center justify-center">
            <PiBoulesFill className="text-red-500" />
          </div>
          <div>
            <p className="text-sm sm:text-base font-medium text-gray-900">
              Answer Required
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              Please select an answer to continue
            </p>
          </div>
          <button
            onClick={() => setShowAlert(false)}
            className="text-gray-400 hover:text-gray-500"
          >
            <IoMdClose className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
