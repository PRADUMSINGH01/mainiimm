// pages/mock-test.js
'use client'
import { useState, useEffect } from "react";

export default function MockTest() {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showCalculator, setShowCalculator] = useState(false);

  // Mock Questions Data
  const questions = [
    { question: "What is 2 + 2 What is 2 + 2 What is 2 + 2 What is 2 + 2 What is 2 + 2 What is 2 + 2 What is 2 + 2 What is 2 + 2 What is 2 + 2 What is 2 + 2 What is 2 + 2 What is 2 + 2 What is 2 + 2 What is 2 + 2 What is 2 + 2 What is 2 + 2 What is 2 + 2 What is 2 + 2 ?", options: [3, 4, 5, 6], correctAnswer: 4 },
    { question: "What is 5 * 5?", options: [20, 25, 30, 35], correctAnswer: 25 },
    { question: "What is 12 / 4?", options: [2, 3, 4, 5], correctAnswer: 3 },
    { question: "What is 15 - 7?", options: [7, 8, 9, 6], correctAnswer: 8 },
  ];


  
  // Timer Logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        clearInterval(interval);
        alert("Time is up!");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSkipQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      const updatedAnswers = [...answers];
      updatedAnswers[currentQuestion] = 0+',';
      setAnswers(updatedAnswers);
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleAnswerSelect = (selectedAnswer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = selectedAnswer+',';
    setAnswers(updatedAnswers);
  };

  // Simple Calculator
  const handleToggleCalculator = () => {
    setShowCalculator(!showCalculator);
  };


  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-6">
      <div className="w-full max-w-4xl p-4 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <div className="text-xl font-bold">Mock Test</div>
          <div className="text-lg font-medium">
            Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60}
          </div>
        </div>

        {/* Question */}
        <div className="mb-4">
          <h2 className="text-2xl ">{questions[currentQuestion].question}</h2>
          <div className="mt-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="block w-full mb-2 p-2 border rounded-md hover:bg-gray-100"
                onClick={() => handleAnswerSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={handlePreviousQuestion}
            disabled={currentQuestion === 0}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 bg-yellow-500 text-white rounded-md"
            onClick={handleSkipQuestion}
          >
            Skip
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md"
            onClick={handleNextQuestion}
            disabled={currentQuestion === questions.length - 1}
          >
            Next
          </button>
          
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md"
            onClick={handleNextQuestion}
            disabled={currentQuestion === questions.length - 1}
          >
            Submit {answers}
          </button>

          
        </div>

        {/* Calculator Button }
        <div className="mt-4 text-center">
          <button
            className="px-4 py-2 bg-gray-700 text-white rounded-md"
            onClick={handleToggleCalculator}
          >
            {showCalculator ? "Hide Calculator" : "Show Calculator"}
          </button>
        </div>

        {/* Calculator
        {showCalculator && (
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-semibold">Calculator</h3>
            <div className="flex space-x-2">
              <input
                type="text"
                className="p-2 border rounded-md w-1/2"
                placeholder="Enter calculation"
              />
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Calculate</button>
            </div>
          </div>
        )}*/}
      </div>

      <div className="w-full h-full flex ">
     

      </div>
      
    </div>
  );
}
