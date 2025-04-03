import { FaCalculator, FaChartBar, FaBook, FaClock } from "react-icons/fa";
import { HiOutlineBookOpen } from "react-icons/hi";

const CATCourseSections = () => {
  const sections = [
    {
      title: "Quantitative Aptitude",
      icon: FaCalculator,
      color: "blue",
      topics: [
        "Arithmetic Fundamentals",
        "Algebra & Equations",
        "Geometry & Mensuration",
        "Number Systems",
        "Percentages & Ratios",
        "Probability & Statistics",
        "Trigonometry",
        "Permutations & Combinations",
        "Quadratic Equations",
        "Surds & Indices",
      ],
      description:
        "Master essential math concepts with structured curriculum and problem-solving techniques.",
      stats: { chapters: 24, hours: 120 },
    },
    {
      title: "Logical Reasoning & Data Interpretation",
      icon: FaChartBar,
      color: "orange",
      topics: [
        "Data Tables & Graphs",
        "Caselets & Puzzles",
        "Venn Diagrams",
        "Seating Arrangements",
        "Blood Relations",
        "Logical Connectives",
        "Data Sufficiency",
        "Syllogisms",
        "Bar & Pie Charts",
        "Network Diagrams",
      ],
      description:
        "Develop critical thinking through real-world data analysis and logical puzzles.",
      stats: { chapters: 18, hours: 90 },
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          Comprehensive CAT Exam Preparation
        </h2>
        <p className="text-lg text-gray-500">
          Structured curriculum covering all key aptitude areas
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {sections.map((section, index) => (
          <div
            key={index}
            className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-out group"
          >
            <div
              className={`absolute inset-x-0 top-0 h-2 bg-${section.color}-500 rounded-t-xl`}
            ></div>

            <div className="p-8">
              <div className="flex items-start mb-6">
                <div
                  className={`flex-shrink-0 bg-${section.color}-100 p-4 rounded-2xl`}
                >
                  <section.icon
                    className={`text-${section.color}-600 w-8 h-8`}
                  />
                </div>
                <div className="ml-5">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {section.title}
                  </h3>
                  <p className="text-gray-500">{section.description}</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <HiOutlineBookOpen className="w-6 h-6 text-gray-400 mr-2" />
                  <h4 className="font-semibold text-gray-700">
                    Key Learning Areas
                  </h4>
                </div>
                <div className="grid gap-3">
                  {section.topics.map((topic, idx) => (
                    <div
                      key={idx}
                      className="flex items-center px-4 py-3 bg-gray-50 rounded-lg hover:bg-white hover:ring-1 hover:ring-gray-200 transition-all"
                    >
                      <div
                        className={`w-2 h-2 bg-${section.color}-500 rounded-full mr-3`}
                      ></div>
                      <span className="text-gray-600">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-gray-500">
                    <FaBook className="w-5 h-5 mr-2" />
                    <span className="font-medium">
                      {section.stats.chapters} Chapters
                    </span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <FaClock className="w-5 h-5 mr-2" />
                    <span className="font-medium">
                      {section.stats.hours} Hours
                    </span>
                  </div>
                </div>
              </div>

              <button
                className={`w-full mt-6 bg-${section.color}-500 hover:bg-${section.color}-600 text-white font-semibold py-3 px-6 rounded-lg 
                  transition-colors duration-200 transform hover:scale-[1.02]`}
              >
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CATCourseSections;
