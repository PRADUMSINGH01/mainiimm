"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiCalendar,
  FiBookOpen,
  FiFileText,
  FiDownloadCloud,
  FiAward,
} from "react-icons/fi";

const PreviousYearPapers = () => {
  // Sample data - replace with your actual data
  const questionSets = [
    {
      year: "2023",
      subjects: [
        {
          name: "Mathematics",
          papers: [
            { title: "Paper I - Set A", link: "#", downloads: 234 },
            { title: "Paper II - Set B", link: "#", downloads: 189 },
          ],
        },
        {
          name: "Physics",
          papers: [
            { title: "Core Physics Paper", link: "#", downloads: 156 },
            { title: "Applied Physics", link: "#", downloads: 142 },
          ],
        },
      ],
    },
    {
      year: "2022",
      subjects: [
        {
          name: "Chemistry",
          papers: [
            { title: "Organic Chemistry", link: "#", downloads: 278 },
            { title: "Inorganic Chemistry", link: "#", downloads: 201 },
          ],
        },
        {
          name: "Biology",
          papers: [
            { title: "Genetics Paper", link: "#", downloads: 165 },
            { title: "Microbiology", link: "#", downloads: 132 },
          ],
        },
      ],
    },
  ];

  // Animation configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const hoverEffect = {
    hover: {
      y: -5,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center mb-6">
            <FiAward className="h-12 w-12 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-white p-3">
              Previous Year Papers
            </h1>
          </div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Access curated collection of past examination papers with detailed
            solutions and performance analytics
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {questionSets.map((set, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              {/* Year Header */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 flex items-center gap-4 border-b border-gray-100">
                <FiCalendar className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">{set.year}</h2>
              </div>

              {/* Subjects List */}
              <div className="p-6 space-y-8">
                {set.subjects.map((subject, sIndex) => (
                  <div key={sIndex} className="space-y-4">
                    {/* Subject Header */}
                    <div className="flex items-center gap-3">
                      <FiBookOpen className="h-5 w-5 text-blue-600" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        {subject.name}
                      </h3>
                    </div>

                    {/* Papers List */}
                    <div className="space-y-3">
                      {subject.papers.map((paper, pIndex) => (
                        <motion.div
                          key={pIndex}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="group relative"
                        >
                          <Link
                            href={paper.link}
                            className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-all duration-200"
                          >
                            {/* Paper Info */}
                            <div className="flex items-center gap-3">
                              <FiFileText className="h-5 w-5 text-blue-600 flex-shrink-0" />
                              <div>
                                <p className="text-sm font-medium text-gray-900">
                                  {paper.title}
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                  {paper.downloads} downloads
                                </p>
                              </div>
                            </div>

                            {/* Download Button */}
                            <div className="flex items-center gap-2 text-blue-600 group-hover:text-blue-700 transition-colors">
                              <FiDownloadCloud className="h-5 w-5" />
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PreviousYearPapers;
