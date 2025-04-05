import { useState } from "react";
import {
  FiAlertTriangle,
  FiClock,
  FiBook,
  FiCheckCircle,
} from "react-icons/fi";

const Guidelines = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-2xl bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
            <FiAlertTriangle className="text-yellow-500" />
            CAT Mock Exam Guidelines
          </h1>
          <p className="text-gray-600">
            Please read the instructions carefully before starting
          </p>
        </div>

        <div className="space-y-6 mb-8">
          <div className="flex items-start gap-4">
            <FiClock className="text-xl text-blue-600 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Time Limit
              </h3>
              <p className="text-gray-600">
                • Total duration: 30 minutes
                <br />
                • 20 questions to attempt
                <br />• Clock will start immediately after clicking "Start Exam"
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FiBook className="text-xl text-green-600 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Exam Rules
              </h3>
              <p className="text-gray-600">
                • All questions are mandatory
                <br />
                • +3 marks for correct answers
                <br />
                • No negative marking
                <br />• Can't revisit questions after submission
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FiCheckCircle className="text-xl text-purple-600 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Important Notes
              </h3>
              <p className="text-gray-600">
                • Don't refresh the page during exam
                <br />
                • Stable internet connection required
                <br />• Results available immediately after submission
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg 
                    transition-all duration-300 transform hover:scale-[1.02]"
        >
          Start CAT Mock Exam Now
        </button>
      </div>
    </div>
  );
};
export default Guidelines;
