"use client"
const WorkingOnItPage = () => {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
        <div className="text-center p-6 md:p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            We're Working On It
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6">
            Our team is working hard to give you access. You’ll be able to access it very soon!
          </p>
          <div className="flex justify-center mb-6">
            <svg
              className="animate-spin h-10 w-10 sm:h-12 sm:w-12 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
          </div>
          <button className="px-4 py-2 text-sm sm:text-base bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all">
            Go Back to Home
          </button>
        </div>
      </div>
    );
  };
  
  export default WorkingOnItPage;
  