"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import FETCHDATA from "@/module/fetchdata";
import { MathJaxContext, MathJax } from "better-react-mathjax";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiSearch,
  FiFilter,
  FiChevronDown,
  FiCheckCircle,
  FiSun,
  FiMoon,
  FiAlertTriangle,
  FiBookOpen,
  FiInfo,
  FiCheckSquare,
} from "react-icons/fi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Link from "next/link";

const mathJaxConfig = {
  loader: { load: ["input/tex", "output/chtml"] },
  tex: {
    inlineMath: [["$", "$"]],
    displayMath: [["$$", "$$"]],
  },
};

const LevelQuestions = ({
  FETCHURL,
  LEVELINFO,
  LevelOneURL,
  LevelTwoURL,
  LEVELONE,
  LEVELTWO,
}) => {
  const [mathQuestions, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [expandedId, setExpandedId] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await FETCHDATA(FETCHURL);
      setData(data);
      setIsLoading(false);
    };
    fetchData();
  }, [FETCHURL]);

  const handleMarkDone = async (questionId) => {
    await QuestionDone(FETCHURL, questionId);
    const updatedData = await FETCHDATA(FETCHURL);
    setData(updatedData);
  };

  const filteredQuestions = mathQuestions.filter((question) => {
    const matchesSearch = question.Question.toLowerCase().includes(
      searchTerm.toLowerCase()
    );
    const matchesTopic =
      selectedTopic === "All" || question.topic === selectedTopic;
    return matchesSearch && matchesTopic;
  });

  const topics = [...new Set(mathQuestions.map((q) => q.topic))];

  return (
    <MathJaxContext config={mathJaxConfig}>
      <div
        className={`min-h-screen transition-colors duration-200 ${
          isDarkMode ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header with Level Navigation */}
          <div className="mb-8 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start">
              <div className="mb-4 sm:mb-0">
                <h1
                  className={`text-2xl font-semibold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {LEVELINFO}
                </h1>
                <p
                  className={`mt-1 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {filteredQuestions.length} problems available
                </p>
              </div>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg ${
                  isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
                }`}
              >
                {isDarkMode ? (
                  <FiSun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <FiMoon className="w-5 h-5 text-gray-600" />
                )}
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {LevelOneURL && (
                <Link href={`/Quant/${LevelOneURL}`}>
                  <div
                    className={`p-3 rounded-lg transition-colors ${
                      LEVELINFO.includes("One")
                        ? isDarkMode
                          ? "bg-blue-800/30 border border-blue-400"
                          : "bg-blue-100 border border-blue-300"
                        : isDarkMode
                        ? "hover:bg-gray-800"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <p
                      className={`text-sm font-medium ${
                        LEVELINFO.includes("One")
                          ? "text-blue-600 text-blue-400"
                          : isDarkMode
                          ? "text-gray-400 bg-blue-800/30 border border-blue-400"
                          : "text-gray-600"
                      }`}
                    >
                      {LEVELONE}
                    </p>
                  </div>
                </Link>
              )}

              {LevelTwoURL && (
                <Link href={`/Quant/${LevelTwoURL}`}>
                  <div
                    className={`p-3 rounded-lg transition-colors ${
                      LEVELINFO.includes("One")
                        ? isDarkMode
                          ? "bg-blue-800/30 border border-blue-400"
                          : "bg-blue-100 border border-blue-300"
                        : isDarkMode
                        ? "hover:bg-gray-800"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <p
                      className={`text-sm font-medium ${
                        LEVELINFO.includes("One")
                          ? "text-blue-600 text-blue-400"
                          : isDarkMode
                          ? "text-gray-400 bg-blue-800/30 border border-blue-400"
                          : "text-gray-600"
                      }`}
                    >
                      {LEVELTWO}
                    </p>
                  </div>
                </Link>
              )}
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <div
              className={`flex items-center rounded-lg p-3 flex-1 ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <FiSearch
                className={`mx-2 ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              />
              <input
                type="text"
                placeholder="Search problems..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`flex-1 bg-transparent focus:outline-none ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              />
            </div>
            <div
              className={`flex items-center rounded-lg p-3 ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <FiFilter
                className={`mx-2 ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              />
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className={`bg-transparent focus:outline-none ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                <option value="All">All Topics</option>
                {topics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Questions List */}
          <div className="space-y-3">
            <AnimatePresence>
              {isLoading
                ? Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className={`rounded-lg p-4 ${
                        isDarkMode ? "bg-gray-800" : "bg-white"
                      }`}
                    >
                      <Skeleton height={20} width="60%" />
                      <Skeleton count={2} className="mt-2" />
                    </div>
                  ))
                : filteredQuestions.map((question) => (
                    <motion.div
                      key={question.Id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`rounded-lg transition-colors ${
                        isDarkMode
                          ? "bg-gray-800 hover:bg-gray-700"
                          : "bg-white hover:bg-gray-50"
                      }`}
                    >
                      <div className="p-4">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center space-x-3">
                            <span
                              className={`text-sm font-medium ${
                                isDarkMode ? "text-gray-400" : "text-gray-600"
                              }`}
                            >
                              #{question.Id}
                            </span>
                            <button
                              onClick={() => handleMarkDone(question.Id)}
                              className={`p-1 rounded-full transition-colors ${
                                question.done
                                  ? "text-green-600 bg-green-100/50"
                                  : isDarkMode
                                  ? "text-gray-400 hover:bg-gray-600"
                                  : "text-gray-400 hover:bg-gray-100"
                              }`}
                            >
                              {question.done ? (
                                <FiCheckSquare className="w-5 h-5" />
                              ) : (
                                <FiCheckCircle className="w-5 h-5" />
                              )}
                            </button>
                          </div>
                          <button
                            onClick={() =>
                              setExpandedId(
                                expandedId === question.Id ? null : question.Id
                              )
                            }
                            className={`p-1 rounded-lg ${
                              isDarkMode
                                ? "hover:bg-gray-600"
                                : "hover:bg-gray-100"
                            }`}
                          >
                            <FiChevronDown
                              className={`w-5 h-5 transition-transform ${
                                expandedId === question.Id ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        </div>

                        <div className="mt-3">
                          <MathJax
                            dynamic
                            className={`text-lg ${
                              isDarkMode ? "text-gray-100" : "text-gray-900"
                            }`}
                          >
                            {question.Question}
                          </MathJax>
                        </div>

                        <AnimatePresence>
                          {expandedId === question.Id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-4 space-y-4"
                            >
                              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
                                {/* Answer Section */}
                                <div
                                  className={`p-3 rounded-lg ${
                                    isDarkMode
                                      ? "bg-green-900/20 border-l-4 border-green-400"
                                      : "bg-green-50 border-l-4 border-green-600"
                                  }`}
                                >
                                  <div className="flex items-center gap-2 mb-2">
                                    <FiAlertTriangle
                                      className={`w-4 h-4 ${
                                        isDarkMode
                                          ? "text-green-400"
                                          : "text-green-600"
                                      }`}
                                    />
                                    <h3
                                      className={`text-sm font-semibold ${
                                        isDarkMode
                                          ? "text-green-400"
                                          : "text-green-600"
                                      }`}
                                    >
                                      Answer
                                    </h3>
                                  </div>
                                  <MathJax
                                    dynamic
                                    className={`overflow-x-auto ${
                                      isDarkMode
                                        ? "text-gray-300"
                                        : "text-gray-700"
                                    }`}
                                  >
                                    {question.Answer}
                                  </MathJax>
                                </div>

                                {/* Trick Section */}
                                {question.trick && (
                                  <div
                                    className={`p-3 rounded-lg ${
                                      isDarkMode
                                        ? "bg-blue-900/20 border-l-4 border-blue-400"
                                        : "bg-blue-50 border-l-4 border-blue-600"
                                    }`}
                                  >
                                    <div className="flex items-center gap-2 mb-2">
                                      <FiBookOpen
                                        className={`w-4 h-4 ${
                                          isDarkMode
                                            ? "text-blue-400"
                                            : "text-blue-600"
                                        }`}
                                      />
                                      <h3
                                        className={`text-sm font-semibold ${
                                          isDarkMode
                                            ? "text-blue-400"
                                            : "text-blue-600"
                                        }`}
                                      >
                                        Solving Technique
                                      </h3>
                                    </div>
                                    <MathJax
                                      dynamic
                                      className={`overflow-x-auto italic ${
                                        isDarkMode
                                          ? "text-gray-400"
                                          : "text-gray-600"
                                      }`}
                                    >
                                      {question.trick}
                                    </MathJax>
                                  </div>
                                )}

                                {/* Solution Section */}
                                {question.solution && (
                                  <div
                                    className={`p-3 rounded-lg ${
                                      isDarkMode
                                        ? "bg-purple-900/20 border-l-4 border-purple-400"
                                        : "bg-purple-50 border-l-4 border-purple-600"
                                    }`}
                                  >
                                    <div className="flex items-center gap-2 mb-2">
                                      <FiInfo
                                        className={`w-4 h-4 ${
                                          isDarkMode
                                            ? "text-purple-400"
                                            : "text-purple-600"
                                        }`}
                                      />
                                      <h3
                                        className={`text-sm font-semibold ${
                                          isDarkMode
                                            ? "text-purple-400"
                                            : "text-purple-600"
                                        }`}
                                      >
                                        Detailed Solution
                                      </h3>
                                    </div>
                                    <MathJax
                                      dynamic
                                      className={`overflow-x-auto ${
                                        isDarkMode
                                          ? "text-gray-300"
                                          : "text-gray-700"
                                      }`}
                                    >
                                      {question.solution}
                                    </MathJax>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  ))}
            </AnimatePresence>
          </div>

          {!isLoading && filteredQuestions.length === 0 && (
            <div
              className={`text-center py-12 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              No matching problems found
            </div>
          )}
        </div>
      </div>
    </MathJaxContext>
  );
};

export default LevelQuestions;
