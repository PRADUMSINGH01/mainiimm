// pages/math-questions.js

import { useState } from 'react';

const mathQuestions = [
  {
    topic: 'Averages',
    questions: [
      {
        question: "The average of 5 numbers is 20. If one number is excluded, the average becomes 15. The excluded number is:",
        answer: "30",
      },
      // Add more questions for Averages
    ],
  },
  {
    topic: 'Percentages',
    questions: [
      {
        question: "If 25% of a number is 60, then 50% of the same number is:",
        answer: "120",
      },
      // Add more questions for Percentages
    ],
  },
  // Add more topics and questions as needed
];

export default function MathQuestions() {
  const [activeTopicIndex, setActiveTopicIndex] = useState(null);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleTopic = (index) => {
    setActiveTopicIndex(index === activeTopicIndex ? null : index);
    setActiveQuestionIndex(null); // Close all questions when switching topics
  };

  const toggleQuestion = (index) => {
    setActiveQuestionIndex(index === activeQuestionIndex ? null : index);
  };

  return (
    <div className="container mx-auto p-8 font-roboto">
      <h1 className="text-3xl font-bold mb-6 text-center">CAT Math Questions</h1>

      <div className="space-y-6">
        {mathQuestions.map((topicData, topicIndex) => (
          <div key={topicIndex}>
            <div 
              className="bg-white rounded-lg shadow-md p-4 cursor-pointer flex justify-between items-center"
              onClick={() => toggleTopic(topicIndex)}
            >
              <h2 className="text-xl font-semibold">{topicData.topic}</h2>
              <span></span>
            </div>

            {activeTopicIndex === topicIndex && (
              <div className="mt-4 space-y-4">
                {topicData.questions.map((questionData, questionIndex) => (
                  <div key={questionIndex} className="border rounded-lg p-4">
                    <div 
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleQuestion(questionIndex)}
                    >
                      <p className="text-gray-800">{questionData.question}</p>
                    </div>
                    {activeQuestionIndex === questionIndex && (
                      <p className="mt-2 text-green-600 font-semibold">{questionData.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}