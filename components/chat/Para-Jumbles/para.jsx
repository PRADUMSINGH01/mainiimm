"use client";
import { useState, useEffect } from "react";
import FETCHDATAID from "@/module/fetchdataId";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import { PiInfoBold } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const Para = ({ database }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const users = await FETCHDATAID(database);
      setData(users);
      setLoading(false);
    };
    fetchData();
  }, [database]);

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setShowAnswer(false);
    } else {
      setAlert(true);
      setTimeout(() => setAlert(false), 3000);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setShowAnswer(false);
    }
  };

  const currentQuestion = data[currentIndex] || {};

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Alert Notification */}
      <AnimatePresence>
        {alert && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="fixed top-4 left-4 right-4 sm:left-1/2 sm:-translate-x-1/2 max-w-md flex items-center bg-emerald-500 text-white px-4 py-3 rounded-lg shadow-lg text-sm"
          >
            <PiInfoBold className="mr-2 flex-shrink-0" />
            <span className="flex-grow">All questions completed!</span>
            <button
              onClick={() => setAlert(false)}
              className="ml-2 hover:bg-white/10 p-1 rounded-full"
              aria-label="Close notification"
            >
              <IoMdClose />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
              Para Jumble
            </h1>
            <div className="text-sm text-gray-500 bg-blue-100 px-3 py-1 rounded-full">
              {currentIndex + 1} / {data.length}
            </div>
          </div>
          <div className="mt-2 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / data.length) * 100}%` }}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-6">
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="space-y-6">
            {/* Questions */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-sm p-4 md:p-6 space-y-4"
            >
              {["One", "Two", "Three", "Four", "Five"].map((q, idx) => (
                <div key={q} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 bg-blue-50 rounded-md flex items-center justify-center">
                    <span className="text-blue-600 font-medium text-sm md:text-base">
                      {String.fromCharCode(65 + idx)}
                    </span>
                  </div>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed break-words">
                    {currentQuestion[`question_${q}`]}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Answer Reveal */}
            <AnimatePresence>
              {showAnswer && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-emerald-50 border border-emerald-200 rounded-xl p-4"
                >
                  <div className="flex items-center text-emerald-800 space-x-2">
                    <PiInfoBold className="flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Correct Sequence:</p>
                      <p className="font-medium text-base">
                        {currentQuestion.answerOne}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Controls */}
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="w-full md:w-auto flex items-center justify-center px-5 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white transition-all"
              >
                <FaCaretLeft className="mr-2" />
                Previous
              </button>

              <button
                onClick={() => setShowAnswer(!showAnswer)}
                className="w-full md:w-auto px-5 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-all"
              >
                {showAnswer ? "Hide Answer" : "Show Answer"}
              </button>

              <button
                onClick={handleNext}
                disabled={currentIndex === data.length - 1}
                className="w-full md:w-auto flex items-center justify-center px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-blue-600 transition-all"
              >
                Next
                <FaCaretRight className="ml-2" />
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Para;
