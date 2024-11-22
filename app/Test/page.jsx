'use client';

import { useEffect, useState } from 'react';

export default function MockQuestionsPage() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMockQuestions = async () => {
      try {
        const response = await fetch('/api/FetMock');
        if (!response.ok) {
          throw new Error('Failed to fetch mock questions');
        }

        const data = await response.json();
        setQuestions(data);
      } catch (err) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchMockQuestions();
  }, []);

  if (loading) {
    return <div className="p-4 text-center">Loading mock questions...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Mock Questions</h1>

      {questions.length === 0 ? (
        <p>No mock questions found.</p>
      ) : (
        <ul className="space-y-4">
          {questions.map((question, index) => (
            <li
              key={question.id}
              className="p-4 border rounded-md shadow-md hover:bg-gray-50 transition"
            >
              <h2 className="text-lg font-semibold">
                {index + 1}. {question.question}
              </h2>
              <ul className="mt-2 space-y-2">
                {question.options.map((option, idx) => (
                  <li
                    key={idx}
                    className={`p-2 rounded-md ${
                      question.correctAnswer === option
                        ? 'bg-green-100 border-l-4 border-green-500'
                        : 'bg-gray-100'
                    }`}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
