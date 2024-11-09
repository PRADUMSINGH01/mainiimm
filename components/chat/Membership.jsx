import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';
import { GiNotebook } from 'react-icons/gi'; // Example for additional icons
import { AiFillDashboard } from 'react-icons/ai';

const MembershipCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 to-blue-600 p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm transform transition-transform duration-300 hover:scale-105">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-center rounded-t-lg">
          <h2 className="text-3xl font-bold text-white">Premium Membership</h2>
          <p className="mt-2 text-white opacity-80">
            Unlock exclusive content and resources to boost your preparation.
          </p>
          <div className="mt-4">
            <span className="text-4xl font-bold text-yellow-300">₹1999</span>
            <span className="text-white text-sm"> / year</span>
          </div>
        </div>
        <div className="p-6">
          <ul className="list-disc list-inside text-left text-gray-700 mb-4">
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              <span>Access to all mock tests</span>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              <span>Personalized study plan</span>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              <span>Real Life Business Case Studies </span>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              <span>Exclusive tips and tricks</span>
            </li>
            <li className="flex items-center">
              <GiNotebook className="text-green-500 mr-2" />
              <span>Additional formulas each chapter</span>
            </li>
            <li className="flex items-center">
              <AiFillDashboard className="text-green-500 mr-2" />
              <span>Dashboard to analyze mock tests</span>
            </li>
          </ul>
          <Link href="/Membership" className="w-full bg-yellow-500 hover:bg-yellow-400 text-white font-semibold py-2 rounded-lg transition duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center">
            Join Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MembershipCard;
