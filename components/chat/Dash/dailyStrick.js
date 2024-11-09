import { useState, useEffect } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import PropTypes from 'prop-types';

const DailyStreak = ({ streakDays, maxDays }) => {
  const [streak, setStreak] = useState(streakDays);

  useEffect(() => {
    // Animate the streak update (can be customized)
    setStreak(streakDays);
  }, [streakDays]);

  const progress = Math.min((streak / maxDays) * 100, 100);

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Daily Streak</h3>
      <div className="relative h-40 w-40 mx-auto">
        <svg className="w-full h-full">
          <circle
            cx="50%"
            cy="50%"
            r="45%"
            stroke="gray"
            strokeWidth="10"
            fill="none"
            className="text-gray-300"
          />
          <circle
            cx="50%"
            cy="50%"
            r="45%"
            stroke="currentColor"
            strokeWidth="10"
            fill="none"
            strokeDasharray="283"
            strokeDashoffset={`${283 - (progress / 100) * 283}`}
            className={`transition-all duration-500 ease-out ${progress === 100 ? 'text-green-500' : 'text-blue-500'}`}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-800 dark:text-white">
          {streak} / {maxDays}
        </span>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mt-4">
        Keep it up! {maxDays - streak > 0 ? `${maxDays - streak} more days to reach your goal!` : 'Goal achieved!'}
      </p>
      <FiCheckCircle
        className={`mt-4 text-3xl ${progress === 100 ? 'text-green-500 animate-bounce' : 'text-blue-500'}`}
      />
    </div>
  );
};

DailyStreak.propTypes = {
  streakDays: PropTypes.number.isRequired,
  maxDays: PropTypes.number.isRequired,
};

export default DailyStreak;
