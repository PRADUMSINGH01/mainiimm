import PropTypes from 'prop-types';

const StatsComponent = ({ stats }) => {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg space-y-4">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Subject Statistics</h3>
      
      {stats.map(({ subject, score, total }) => {
        const completionPercentage = total > 0 ? (score / total) * 100 : 0;
        
        return (
          <div key={subject} className="flex flex-col">
            <span className="text-lg font-medium text-gray-800 dark:text-white mb-1">{subject}</span>
            <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full bg-green-500 rounded-full transition-all duration-500 ease-in-out`}
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-1">
              <span>{score} / {total} ({completionPercentage.toFixed(2)}%)</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

StatsComponent.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      subject: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default StatsComponent;
