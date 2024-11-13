'use client'

import { useState, useEffect } from "react";

export default function MockTest() {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]); // Array to store answers for each question
  const [final, setfinal] = useState([]); // Array to store answers for each question

  // Mock Questions Data
  const questions = [
    {
      question: "What is 2 + 2?",
      options: [3, 4, 5, 6],
      correctAnswer: 4,
    },
    {
      question: "What is 5 * 5?",
      options: [20, 25, 30, 35],
      correctAnswer: 25,
    },
    {
      question: "What is 12 / 4?",
      options: [2, 3, 4, 5],
      correctAnswer: 3,
    },
    {
      question: "What is 15 - 7?",
      options: [7, 8, 9, 6],
      correctAnswer: 8,
    },
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
      updatedAnswers[currentQuestion] = null; // Skipping by setting answer as null
      setAnswers(updatedAnswers);
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleCheckboxChange = (option) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = option; // Set only the selected option
    setAnswers(updatedAnswers);
  };
   const submitAnswers = ()=>{
     setfinal(answers)
     setAnswers([])
   }



  
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
          <h2 className="text-xl">{questions[currentQuestion].question}</h2>
          <div className="mt-4 flex flex-col">
            {questions[currentQuestion].options.map((option, index) => (
              <div key={index} className="ml-2 flex items-center">
                <label className="mr-2">{option}</label>
                <input
                  type="checkbox"
                  checked={answers[currentQuestion] === option}
                  onChange={() => handleCheckboxChange(option)}
                  className="ml-2"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-4">
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
            onClick={submitAnswers}
          >
            Submit
          </button>
        </div>
      </div>

      

<div>   
  <div className="w-full flex ">
  {
    final.map((index, item)=>(
      <div className=" bg-gray-200 w-full  h-6 m-2 rounded-md text-white font-semibold "  >
        {questions[item].correctAnswer === index ?<div className="w-32 h-6 bg-green-600 rounded-md text-center">correct</div>: 
        <div className="  w-32 h-6 bg-red-500 rounded-md text-center">wrong  </div>
        
        }
      </div>
    ))
  }
  </div>




</div>

      
    </div>
  );
}
