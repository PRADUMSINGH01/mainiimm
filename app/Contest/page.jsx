"use client";
import { useState, useEffect } from "react";
import {
  FiClock,
  FiArrowLeft,
  FiArrowRight,
  FiCheck,
  FiX,
  FiSun,
  FiMoon,
} from "react-icons/fi";
import { FaTrophy } from "react-icons/fa";
import { MdOutlineLeaderboard, MdQuestionAnswer } from "react-icons/md";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import Guidelines from "@/components/chat/OnStart";
import MobileMessage from "@/components/chat/MobileView";
import { app } from "@/module/firebase";
const db = getFirestore(app);

const ContestPage = () => {
  const [timeLeft, setTimeLeft] = useState(1800);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [examCompleted, setExamCompleted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Questions data
  const questions = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    question: `Which of the following best describes the primary purpose of ${
      [
        "quantitative analysis",
        "logical reasoning",
        "data interpretation",
        "verbal ability",
      ][i % 4]
    } in management education?`,
    options: [
      "Enhancing memorization skills",
      "Developing analytical thinking",
      "Improving communication speed",
      "Mastering technical jargon",
    ],
    correct: Math.floor(Math.random() * 4),
  }));

  // Leaderboard data
  const mockLeaderboard = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    name: `Candidate ${i + 1}`,
    score: Math.floor(Math.random() * 200) + 100,
    time: `${29 - Math.floor(i / 5)}:${String(60 - ((i * 2) % 60)).padStart(
      2,
      "0"
    )}`,
  })).sort((a, b) => b.score - a.score);

  // Timer
  useEffect(() => {
    let timer;
    if (!examCompleted && hasStarted) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setExamCompleted(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [examCompleted, hasStarted]);

  // Score calculation
  const calculateScore = () => {
    return Object.entries(selectedAnswers).reduce((acc, [qIndex, answer]) => {
      return questions[parseInt(qIndex)]?.correct === answer ? acc + 3 : acc;
    }, 0);
  };

  // Format time
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  // Answer selection
  const handleAnswerSelect = (qIndex, optionIndex) => {
    if (!examCompleted) {
      setSelectedAnswers((prev) => ({ ...prev, [qIndex]: optionIndex }));
    }
  };

  // Submit results
  const submitResults = async () => {
    setIsSubmitting(true);
    try {
      const resultsData = {
        score: calculateScore(),
        totalQuestions: questions.length,
        correctAnswers: Object.entries(selectedAnswers).reduce(
          (acc, [qIndex, answer]) => {
            return questions[parseInt(qIndex)]?.correct === answer
              ? acc + 1
              : acc;
          },
          0
        ),
        timeTaken: 1800 - timeLeft,
        answers: selectedAnswers,
        timestamp: serverTimestamp(),
      };
      console.log(resultsData);
      await addDoc(collection(db, "contestResults"), resultsData);
      setExamCompleted(true);
    } catch (error) {
      console.error("Error submitting results:", error);
    }
    setIsSubmitting(false);
  };

  const currentScore = calculateScore();
  const totalQuestions = questions.length;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  if (isMobile) return <MobileMessage />;
  if (!hasStarted) return <Guidelines onStart={() => setHasStarted(true)} />;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-900 p-6 font-sans">
      {/* Header */}
      <header className="max-w-7xl mx-auto mb-8">
        <div className="flex justify-between items-center bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-semibold text-slate-800 dark:text-gray-100">
              CAT 2024 Mock Test
              <span className="block text-sm font-normal text-slate-500 dark:text-gray-400">
                MBA Entrance Examination
              </span>
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {darkMode ? (
                <FiSun className="text-xl text-yellow-500" />
              ) : (
                <FiMoon className="text-xl text-gray-600 dark:text-gray-300" />
              )}
            </button>

            <div className="flex items-center gap-2 text-slate-600 dark:text-gray-300">
              <FiClock className="text-xl text-blue-600 dark:text-blue-400" />
              <span className="font-medium tabular-nums">
                {examCompleted ? "Exam Concluded" : formatTime(timeLeft)}
              </span>
            </div>

            <button
              onClick={() => setShowLeaderboard(!showLeaderboard)}
              className="flex items-center gap-2 bg-white dark:bg-gray-700 px-4 py-2 rounded-lg border border-slate-200 dark:border-gray-600 hover:border-blue-500 transition-colors"
            >
              <MdOutlineLeaderboard className="text-blue-600 dark:text-blue-400" />
              <span className="text-slate-700 dark:text-gray-200">
                {showLeaderboard ? "Hide" : "Show"} Rankings
              </span>
            </button>

            <button
              onClick={submitResults}
              disabled={examCompleted || isSubmitting}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg 
                        disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? "Submitting..." : "Submit Exam"}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        {/* Questions Section */}
        <section
          className={`md:col-span-2 ${
            showLeaderboard ? "hidden md:block" : ""
          }`}
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between text-sm text-slate-600 dark:text-gray-400 mb-2">
                <span>
                  Question {currentQuestion + 1} of {totalQuestions}
                </span>
                <span>{Math.round(progress)}% Completed</span>
              </div>
              <div className="h-2 bg-slate-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="space-y-6">
              <div className="p-4 bg-slate-50 dark:bg-gray-700 rounded-lg">
                <h3 className="text-lg font-medium text-slate-800 dark:text-gray-200">
                  {questions[currentQuestion].question}
                </h3>
              </div>

              <div className="grid gap-3">
                {questions[currentQuestion].options.map((option, index) => {
                  const isSelected = selectedAnswers[currentQuestion] === index;
                  const isCorrect =
                    index === questions[currentQuestion].correct;

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(currentQuestion, index)}
                      disabled={examCompleted}
                      className={`p-4 text-left rounded-lg border transition-all
                        ${
                          isSelected
                            ? "border-blue-600 bg-blue-50 dark:bg-blue-900/30"
                            : "border-slate-200 dark:border-gray-600 hover:border-blue-300"
                        }
                        ${
                          examCompleted &&
                          (isCorrect
                            ? "border-emerald-600 bg-emerald-50 dark:bg-emerald-900/30"
                            : isSelected
                            ? "border-rose-600 bg-rose-50 dark:bg-rose-900/30"
                            : "")
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`inline-block w-6 h-6 rounded flex items-center justify-center
                            ${
                              isSelected
                                ? "bg-blue-600 text-white"
                                : "bg-slate-100 dark:bg-gray-600 text-slate-600 dark:text-gray-200"
                            }
                            ${
                              examCompleted &&
                              (isCorrect
                                ? "bg-emerald-600"
                                : isSelected
                                ? "bg-rose-600"
                                : "")
                            }`}
                        >
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="text-slate-700 dark:text-gray-200">
                          {option}
                        </span>
                        {examCompleted && isCorrect && (
                          <FiCheck className="ml-auto text-emerald-600 dark:text-emerald-400" />
                        )}
                        {examCompleted && isSelected && !isCorrect && (
                          <FiX className="ml-auto text-rose-600 dark:text-rose-400" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-between mt-6">
              <button
                onClick={() => setCurrentQuestion((p) => Math.max(0, p - 1))}
                disabled={currentQuestion === 0}
                className="flex items-center gap-2 text-slate-600 dark:text-gray-400 px-4 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700 disabled:opacity-50"
              >
                <FiArrowLeft /> Previous
              </button>
              <button
                onClick={() =>
                  setCurrentQuestion((p) => Math.min(totalQuestions - 1, p + 1))
                }
                disabled={currentQuestion === totalQuestions - 1}
                className="flex items-center gap-2 text-slate-600 dark:text-gray-400 px-4 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700 disabled:opacity-50"
              >
                Next <FiArrowRight />
              </button>
            </div>
          </div>
        </section>

        {/* Leaderboard */}
        {showLeaderboard && (
          <aside className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 h-fit sticky top-6">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-800 dark:text-gray-200 mb-4">
              <FaTrophy className="text-amber-500" /> Live Rankings
            </h2>

            {/* User Summary */}
            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 mb-6">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="space-y-1">
                  <p className="text-slate-600 dark:text-gray-400">
                    Your Score
                  </p>
                  <p className="font-medium text-blue-700 dark:text-blue-400">
                    {currentScore}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-slate-600 dark:text-gray-400">Your Rank</p>
                  <p className="font-medium text-blue-700 dark:text-blue-400">
                    #
                    {mockLeaderboard.findIndex((u) => u.score <= currentScore) +
                      1 || "-"}
                  </p>
                </div>
              </div>
            </div>

            {/* Leaderboard List */}
            <div className="space-y-3">
              {mockLeaderboard.slice(0, 10).map((user, index) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-6 text-center ${
                        index < 3
                          ? "font-semibold"
                          : "text-slate-500 dark:text-gray-400"
                      }`}
                    >
                      {index === 0 ? (
                        <FaTrophy className="text-amber-500" />
                      ) : index === 1 ? (
                        <FaTrophy className="text-slate-400" />
                      ) : index === 2 ? (
                        <FaTrophy className="text-amber-700" />
                      ) : (
                        index + 1
                      )}
                    </span>
                    <span className="text-slate-700 dark:text-gray-200">
                      {user.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-medium text-slate-800 dark:text-gray-200">
                      {user.score}
                    </span>
                    <span className="text-slate-500 dark:text-gray-400 text-sm">
                      {user.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        )}

        {/* Question Grid */}
        <section className="md:col-span-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h3 className="flex items-center gap-2 text-slate-800 dark:text-gray-200 mb-4">
            <MdQuestionAnswer className="text-blue-600 dark:text-blue-400" />
            Question Navigation
          </h3>
          <div className="grid grid-cols-10 gap-2">
            {questions.map((_, index) => {
              const isAnswered = selectedAnswers[index] !== undefined;
              const isCurrent = index === currentQuestion;
              const isCorrect =
                examCompleted &&
                questions[index].correct === selectedAnswers[index];

              return (
                <button
                  key={index}
                  onClick={() => !examCompleted && setCurrentQuestion(index)}
                  className={`aspect-square rounded-lg flex items-center justify-center text-sm font-medium transition-all
                    ${
                      isCurrent
                        ? "bg-blue-600 text-white ring-2 ring-blue-300"
                        : examCompleted
                        ? isCorrect
                          ? "bg-emerald-600 text-white"
                          : isAnswered
                          ? "bg-rose-600 text-white"
                          : "bg-slate-100 dark:bg-gray-700"
                        : isAnswered
                        ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                        : "bg-slate-100 hover:bg-slate-200 dark:bg-gray-700 dark:hover:bg-gray-600"
                    }`}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContestPage;
