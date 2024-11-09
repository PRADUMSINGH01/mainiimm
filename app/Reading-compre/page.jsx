

import ReadingBlog from '@/components/chat/ReadingBlog'
import React from 'react'
import { 
  FaCalculator, FaPercent, FaMoneyBillWave, FaBalanceScale, 
} from 'react-icons/fa';
import { TbMathOff  } from "react-icons/tb";
import Link from 'next/link';
const mathTopics = [
  { name: 'RC', icon: <TbMathOff  />, link: '/Reading-compre/RC', description: 'Master averages to solve tricky problems with ease.' },
  { name: 'Para-Jumbles', icon: <FaCalculator />, link: '/Reading-compre/Para-Jumbles', description: 'Master averages to solve tricky problems with ease.' },
  { name: 'Odd One Out', icon: <FaPercent />, link: '/Reading-compre/Odd-One-Out', description: 'Understand percentages to tackle real-world calculations.' },
  { name: 'Para-Summary', icon: <FaMoneyBillWave />, link: '/Reading-compre/Para-Summary', description: 'Learn the key formulas to ace profit and loss questions.' },
  { name: 'Sentence Elimination', icon: <FaBalanceScale />, link: '/Reading-compre/Sentence-Elimination', description: 'Get a solid grasp of ratios and proportions for quantitative problems.' },
];
const page = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">Explore RC  Topics</h1>

      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {mathTopics.map((topic, index) => (
          <Link 
            key={index} 
            href={topic.link} 
            className="bg-white border border-gray-200 rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-lg hover:border-gray-300 transform hover:scale-105 flex flex-col items-center justify-center text-center hover:bg-blue-50"
          >
            {/* Icon */}
            <div className="text-5xl text-indigo-500 mb-4 animate-pulse">
              {topic.icon}
            </div>

            {/* Topic Name */}
            <h2 className="text-2xl font-semibold text-blue-600 mb-3">{topic.name}</h2>
            
            {/* Unique Description */}
            <p className="text-gray-500 text-sm">{topic.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default page