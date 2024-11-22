'use client';

import { useState } from 'react';

export default function AddMockDataPage() {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleAddData = async () => {
    setLoading(true);
    setMessage('');

    const mockData = {
      question,
      options,
      correct: correctAnswer,
    };

    try {
      const response = await fetch('/api/Mock-generated', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mockData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('Mock question added successfully!');
        setQuestion('');
        setOptions(['', '', '', '']);
        setCorrectAnswer('');
      } else {
        setMessage(data.error || 'Failed to add mock data');
      }
    } catch (error) {
      setMessage('Error occurred while adding mock data');
    } finally {
      setLoading(false);
    }
  };

  const handleOptionChange = (e, index) => {
    const updatedOptions = [...options];
    updatedOptions[index] = e.target.value;
    setOptions(updatedOptions);
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-4 border rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-6">Add Mock Question</h1>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2" htmlFor="question">
          Question
        </label>
        <input
          id="question"
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="Enter the question"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Options</label>
        {options.map((option, index) => (
          <input
            key={index}
            type="number"
            value={option}
            onChange={(e) => handleOptionChange(e, index)}
            className="w-full p-2 border rounded-md mb-2"
            placeholder={`Option ${index + 1}`}
          />
        ))}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2" htmlFor="correctAnswer">
          Correct Answer
        </label>
        <input
          id="correctAnswer"
          type="number"
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="Enter the correct answer"
        />
      </div>

      <button
        onClick={handleAddData}
        disabled={loading}
        className={`w-full p-2 rounded-md text-white ${
          loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        {loading ? 'Adding data...' : 'Add Mock Question'}
      </button>

      {message && <p className="mt-4 text-center text-lg">{message}</p>}
    </div>
  );
}
