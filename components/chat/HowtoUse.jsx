import React from 'react';
import { FaLightbulb, FaCheckCircle, FaStar } from 'react-icons/fa';

const HowToUseComponent = () => {
  return (
    <div className="max-w-max mx-auto p-8 bg-gradient-to-r from-blue-100 to-white rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">How to Use This Website</h2>
      <p className="text-center mb-8 text-gray-700">
        Welcome to our e-learning platform! Follow these three levels to enhance your preparation for the IIM exam:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex items-start p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <FaLightbulb className="text-blue-500 text-3xl mr-4" />
          <div>
            <h3 className="text-xl font-semibold text-blue-600">1.Level-One Concept Building</h3>
            <p className="text-gray-600">
              Start with this foundational level where you can build your concepts. 
              Explore various topics and understand the fundamentals.
            </p>
          </div>
        </div>

        <div className="flex items-start p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <FaCheckCircle className="text-green-500 text-3xl mr-4" />
          <div>
            <h3 className="text-xl font-semibold text-blue-600">2. Level-Two Testing Your Concepts</h3>
            <p className="text-gray-600">
              Once you're comfortable with the basics, test your understanding with CAT-level questions.
              This will help you gauge your readiness for the actual exam.
            </p>
          </div>
        </div>

        <div className="flex items-start p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <FaStar className="text-yellow-500 text-3xl mr-4" />
          <div>
            <h3 className="text-xl font-semibold text-blue-600">3.Level-Three Most Difficult Level</h3>
            <p className="text-gray-600">
              This is the ultimate challenge! Tackle the most difficult questions to ensure you are fully prepared.
              Completing all three levels will give you the confidence to crack the IIM exam!
            </p>
          </div>
        </div>
      </div>

      <p className="text-center mt-8 text-lg font-semibold text-gray-800">
        Additionally, we offer <strong className="text-blue-600">200 mock tests</strong> to help you practice effectively.
      </p>
    </div>
  );
};

export default HowToUseComponent;
