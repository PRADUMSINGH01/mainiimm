import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiBookmark } from "react-icons/fi";
import FETCHDATA from "@/module/fetchdata";

const caseStudies = await FETCHDATA("/bcs"); // Assuming this fetches your array

export async function generateStaticParams() {
  if (!caseStudies || caseStudies.length === 0) {
    throw new Error("No case studies found");
  }

  return caseStudies.map((study) => ({
    id: study.Id,
  }));
}

const CaseStudyPage = async ({ params }) => {
  const caseStudy = caseStudies.find((study) => study.Id === params.id);

  if (!caseStudy) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl text-red-600">Case Study not found</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
      {/* Header Section */}
      <header className="bg-indigo-600 py-6 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold">{caseStudy.title}</h1>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Main Content Column */}
        <div className="w-full lg:w-3/4 bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm bg-green-100 text-green-800 font-semibold px-2 py-1 rounded">
              {new Date(caseStudy.createdAt.seconds * 1000).toLocaleDateString()}
            </p>
            <div className="flex gap-4">
              <button className="text-gray-500 hover:text-indigo-600">
                <AiOutlineArrowRight className="h-5 w-5" />
              </button>
              <button className="text-gray-500 hover:text-yellow-500">
                <FiBookmark className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Content Sections */}
          {[
            { title: "Passage", content: caseStudy.passage },
            { title: caseStudy.subtitleOne, content: caseStudy.subpassageOne },
            { title: caseStudy.subtitletwo, content: caseStudy.subpassagetwo },
            { title: caseStudy.subtitlethree, content: caseStudy.subpassagethree },
            { title: caseStudy.subtitlefour, content: caseStudy.subpassagefour },
          ].map((section, idx) => (
            <div className="mb-10" key={idx}>
              <h2 className="text-xl md:text-2xl font-bold bg-indigo-500 text-white p-2 rounded mb-4">
                {section.title}
              </h2>
              <p className="text-gray-800 text-lg leading-relaxed md:text-xl">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Sidebar Section */}
        <aside className="w-full lg:w-1/4">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-bold text-gray-700 mb-4">Related Case Studies</h3>
            <ul className="space-y-3">
              {caseStudies
                .slice(params.id + 1, params.id + 3)
                .map((item) => (
                  <li key={item.Id}>
                    <a
                      href={item.Id}
                      className="text-indigo-600 hover:underline hover:text-indigo-800"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </aside>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; 2024 IIM Target. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CaseStudyPage;
