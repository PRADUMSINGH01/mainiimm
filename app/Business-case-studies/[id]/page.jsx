import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FiBookmark } from 'react-icons/fi';
import FETCHDATA from '@/module/fetchdata';
const caseStudies = await FETCHDATA('/bcs');  // Assuming this fetches your array
// console.log(caseStudies)
export async function generateStaticParams() {
  
  if (!caseStudies || caseStudies.length === 0) {
    throw new Error('No case studies found');
  }

  // Generate static parameters for each case study based on the `id` field
  return caseStudies.map(study => ({
    id: study.Id,  // Make sure that `id` corresponds to the correct dynamic parameter
  }));
}


const CaseStudyPage = async ({ params }) => {
  
  const caseStudy = caseStudies.find(user => user.Id === params.id); // Find the user by ID

  if (!caseStudy) {
    return <div>Case Study not found</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col font-sans">

      {/* Header Section */}
      <header className="bg-white shadow-md py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-blue-600">
            {caseStudy.title}
          </h1>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto px-4 py-8 flex flex-col lg:flex-row mt-10 gap-8">

        {/* Main Content Column */}
        <div className="w-full lg:w-3/4 bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <p className="text-white text-sm bg-green-600 font-semibold tracking-widest p-1 rounded-lg ">
              {new Date(caseStudy.createdAt.seconds * 1000).toLocaleDateString()}
            </p>
            <div className="flex gap-4">
              <button className="text-gray-400 hover:text-blue-500">
                <AiOutlineArrowRight className="h-5 w-5" />
              </button>
              <button className="text-gray-400 hover:text-yellow-500"> 
                <FiBookmark className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Content Sections */}
          <div className="mb-10">
            <p className="text-lg leading-relaxed text-gray-800 tracking-wide">
              {caseStudy.passage}
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold text-green-600 mb-4"> {/* Green subheading */}
              {caseStudy.subtitleOne}
            </h2>
            <p className="text-lg leading-relaxed text-gray-800">
              {caseStudy.subpassageOne}
            </p>
          </div>



          <div className="mb-10">
            <h2 className="text-2xl font-bold text-green-600 mb-4"> {/* Green subheading */}
              {caseStudy.subtitletwo}
            </h2>
            <p className="text-lg leading-relaxed text-gray-800">
              {caseStudy.subpassagetwo}
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold text-green-600 mb-4"> {/* Green subheading */}
              {caseStudy.subtitlethree}
            </h2>
            <p className="text-lg leading-relaxed text-gray-800">
              {caseStudy.subpassagethree}
            </p>
          </div>


          {/* ... more content sections (use varied colors) ... */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-purple-600 mb-4"> {/* Purple subheading */}
              {caseStudy.subtitlefour}
            </h2>
            <p className="text-lg leading-relaxed text-gray-800">
              {caseStudy.subpassagefour}
            </p>
          </div> 

        </div>

        {/* Sidebar Section */}
        <aside className="w-full lg:w-1/4">
          <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
            <h3 className="text-xl font-bold text-gray-700 mb-4">
              Related Case Studies
            </h3>
            <ul>

              {
                caseStudies.slice(params.id+1 ,params.id+3 ).map((item)=>(

        <li className="mb-2">
                <a href={item.Id} className="text-blue-500 hover:underline">
                  {item.title}
                </a>
              </li>
              ))}
              {/* ... more list items ... */}
            </ul>
          </div>
        </aside>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 IIM Target. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CaseStudyPage;
