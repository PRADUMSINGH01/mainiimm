// pages/dashboard.js

import Link from 'next/link';
import { FaChartBar, FaBrain, FaBookReader, FaBriefcase } from 'react-icons/fa'; // Assuming you're using Font Awesome
//import {FaChartBar, FaBrain, FaBookReader, FaBriefcase} from '@fortawesome/react-fontawesome'
export default function Dashboard() {
  return (
    <div className="container mx-auto p-8 font-roboto">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Quant Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-4">
          <FaChartBar className="mr-2 text-blue-500" /> {/* Icon */}

            <h2 className="text-2xl font-semibold text-gray-800">Quantitative Aptitude</h2>
          </div>
          <p className="text-gray-600 mb-4">Master the numerical skills required for CAT.</p> 
          <Link href="/Quant" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Start Learning
          </Link>
        </div>

        {/* DILR Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-4">
          <FaBrain className="mr-2 text-green-500" /> 
            <h2 className="text-2xl font-semibold text-gray-800">Data Interpretation & Logical Reasoning</h2>
          </div>
          <p className="text-gray-600 mb-4">Analyze and interpret data, solve complex puzzles.</p> 
          <Link href="/dilr" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Start Learning
          </Link>
        </div>

        {/* RC Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-4">
          <FaBookReader className="mr-2 text-yellow-500" /> 

            <h2 className="text-2xl font-semibold text-gray-800">Reading Comprehension</h2>
          </div>
          <p className="text-gray-600 mb-4">Improve your reading speed and comprehension skills.</p> 
          <Link href="/Reading-compre" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
            Start Learning
          </Link>
        </div>

        {/* Case Studies Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-4">
          <FaBriefcase className="mr-2 text-purple-500" /> 

            <h2 className="text-2xl font-semibold text-gray-800">Business Case Studies</h2>
          </div>
          <p className="text-gray-600 mb-4">Apply your knowledge to real-world business scenarios.</p> 
          <Link href="/Business-case-studies" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Start Learning
          </Link>
        </div>

      </div>
    </div>
  );
}