import React from 'react';
import { FaCalculator, FaChartBar, FaBookReader } from 'react-icons/fa';
import Link from 'next/link'

const MockLanding = () => {
  const topics = [
    {
      id: 1,
      name: 'Quantitative Aptitude',
      icon: <FaCalculator size={40} className="text-indigo-500" />,
      description: 'Practice arithmetic, algebra, geometry, and more.',
       link:"/Mock/Mock-Quant/"
    },
    {
      id: 2,
      name: 'Data Interpretation & Logical Reasoning',
      icon: <FaChartBar size={40} className="text-green-500" />,
      description: 'Sharpen your logical thinking and data analysis skills.',
       link:"/Mock/Mock-LRDI/"
    },
    {
      id: 3,
      name: 'Reading Comprehension',
      icon: <FaBookReader size={40} className="text-orange-500" />,
      description: 'Improve your reading speed and comprehension.',
       link:"/Mock/Mock-RC/"
    },
  ];

  return (
    <div className="bg-gray-100 py-10 px-6 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Mock Tests
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <div className="flex items-center justify-center mb-4">
              {topic.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
              {topic.name}
            </h3>
            <p className="text-gray-600 text-center">{topic.description}</p>
            <div className="mt-4 text-center">
              <Link href={topic.link} className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-colors">
                Start Test
              </Link >
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MockLanding;
