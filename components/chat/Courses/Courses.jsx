import { FaCalculator, FaChartBar, FaBook, FaClock } from "react-icons/fa";

const CATCourseSections = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        CAT Exam Preparation
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Quantitative Aptitude Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <FaCalculator className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Quantitative Aptitude
            </h3>
          </div>

          <p className="text-gray-600 mb-4">
            Master arithmetic, algebra, geometry, and advanced math concepts
            with our structured curriculum and practice problems.
          </p>

          <div className="flex items-center text-sm text-gray-500 mb-4">
            <FaBook className="mr-2" />
            <span>24 Chapters</span>
            <FaClock className="ml-4 mr-2" />
            <span>120+ Hours</span>
          </div>

          <div className="bg-gray-200 rounded-full h-2 mb-4">
            <div
              className="bg-blue-600 rounded-full h-2 w-3/4"
              role="progressbar"
            ></div>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
            Start Learning
          </button>
        </div>

        {/* LRDI Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-orange-100 p-3 rounded-full mr-4">
              <FaChartBar className="text-orange-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Logical Reasoning & Data Interpretation
            </h3>
          </div>

          <p className="text-gray-600 mb-4">
            Develop critical thinking and data analysis skills through case
            studies, logical puzzles, and real-world data sets.
          </p>

          <div className="flex items-center text-sm text-gray-500 mb-4">
            <FaBook className="mr-2" />
            <span>18 Chapters</span>
            <FaClock className="ml-4 mr-2" />
            <span>90+ Hours</span>
          </div>

          <div className="bg-gray-200 rounded-full h-2 mb-4">
            <div
              className="bg-orange-600 rounded-full h-2 w-2/3"
              role="progressbar"
            ></div>
          </div>

          <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg transition-colors">
            Start Learning
          </button>
        </div>
      </div>
    </section>
  );
};

export default CATCourseSections;
