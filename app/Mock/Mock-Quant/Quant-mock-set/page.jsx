'use client';

import { useEffect, useState } from 'react';
import Mock_Fetch_Data from '@/module/Mock_Fetch_Data'
import Link from 'next/link'
export default function MockQuestionsPage() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMockQuestions = async () => {
      try {
        const response = await Mock_Fetch_Data();
        if (!response) {
          throw new Error('Failed to fetch mock questions');
        }

        const data = await response ;
        //console.log(data)
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
                {question.id}. <button className=''> Attempt Mock {question.id} <Link href={`/FullMock/${question.id}`} > Click</Link></button>
              </h2>

            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
