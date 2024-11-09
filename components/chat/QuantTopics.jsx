import Link from 'next/link';
import { 
  FaCalculator, FaPercent, FaMoneyBillWave, FaBalanceScale, 
  FaClock, FaTachometerAlt, FaSortNumericUp, FaSuperscript, 
  FaDrawPolygon, FaRulerCombined, FaChartPie, FaRandom, 
  FaDice, FaCube, FaWaveSquare, FaInfinity 
} from 'react-icons/fa';
import { TbMathOff  } from "react-icons/tb";

const mathTopics = [
  { name: 'Algebra', icon: <TbMathOff  />, link: '/Quant/Algebra', description: 'Master averages to solve tricky problems with ease.' },
  { name: 'Averages', icon: <FaCalculator />, link: '/Quant/Averages', description: 'Master averages to solve tricky problems with ease.' },
  { name: 'Percentages', icon: <FaPercent />, link: '/Quant/Percentages', description: 'Understand percentages to tackle real-world calculations.' },
  { name: 'Profit & Loss', icon: <FaMoneyBillWave />, link: '/Quant/Profit-loss', description: 'Learn the key formulas to ace profit and loss questions.' },
  { name: 'Ratio & Proportion', icon: <FaBalanceScale />, link: '/Quant/Ratios-and-Proportion', description: 'Get a solid grasp of ratios and proportions for quantitative problems.' },
  { name: 'Simple & Compound Interest', icon: <FaMoneyBillWave />, link: '/Quant/Interest', description: 'Calculate interest efficiently with powerful techniques.' },
  { name: 'Time & Work', icon: <FaClock />, link: '/Quant/Time-work', description: 'Learn time and work problems step-by-step to improve speed.' },
  { name: 'Time, Speed & Distance', icon: <FaTachometerAlt />, link: '/Quant/Time-Speed-Distance', description: 'Solve motion-related problems by mastering speed and distance.' },
  { name: 'Number System', icon: <FaSortNumericUp />, link: '/Quant/Number-System', description: 'Strengthen your basics in number theory for complex questions.' },
  { name: 'Algebra', icon: <FaSuperscript />, link: '/Quant/Algebra', description: 'Conquer algebraic equations and enhance your problem-solving.' },
  { name: 'Geometry', icon: <FaDrawPolygon />, link: '/Quant/Geometry', description: 'Unlock geometric shapes and properties for advanced problems.' },
  { name: 'Mensuration', icon: <FaRulerCombined />, link: '/Quant/Mensuration', description: 'Measure areas and volumes with accuracy and confidence.' },
  { name: 'Trigonometry', icon: <FaChartPie />, link: '/Quant/Trigonometry', description: 'Master trigonometric identities and functions for tough problems.' },
  { name: 'Permutation & Combination', icon: <FaRandom />, link: '/Quant/Permutation-Combination', description: 'Dive into permutations and combinations to solve probability puzzles.' },
  { name: 'Probability', icon: <FaDice />, link: '/Quant/Probability', description: 'Calculate probabilities for real-world and exam-related problems.' },
  { name: 'Surds & Indices', icon: <FaWaveSquare />, link: '/Quant/surds-indices', description: 'Handle surds and indices like a pro with simplified methods.' },
  { name: 'Logarithms', icon: <FaCube />, link: '/Quant/Logarithms', description: 'Simplify logarithmic calculations with expert strategies.' },
  { name: 'Linear Equations', icon: <FaInfinity />, link: '/Quant/Linear-Equations', description: 'Solve linear equations with speed and precision.' },
  { name: 'Quadratic Equations', icon: <FaSuperscript />, link: '/Quant/Quadratic-equations', description: 'Master quadratic equations with easy-to-apply techniques.' },
  { name: 'Functions & Graphs', icon: <FaCube />, link: '/Quant/Functions-and-Graphs', description: 'Interpret functions and graphs to solve tricky CAT questions.' },
];

export default function MathTopics() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">Explore CAT Math Topics</h1>

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
  );
}
