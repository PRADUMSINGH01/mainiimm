"use client"
import Cookies from 'js-cookie'
import React,{useEffect ,useState} from 'react'
import { useRouter } from 'next/navigation'
import FETCHDATA from '@/module/fetchdata'
import { IoMdDoneAll } from "react-icons/io";

import { FaSearch, FaFilter, FaEye, FaEyeSlash, FaMoon, FaSun, FaLightbulb } from 'react-icons/fa';
import Link from 'next/link'
const LevelQuestions = ({FETCHURL ,LEVELINFO , LEVELONE,LEVELTWO, LevelOneURL,LevelTwoURL}) => {
const router = useRouter()


const [mathQuestions , SETDATA] = useState([])
const [searchTerm, setSearchTerm] = useState('');
const [selectedTopic, setSelectedTopic] = useState('All');
const [showAnswers, setShowAnswers] = useState({});
const [isDarkMode, setIsDarkMode] = useState(false);
const [currentPage, setCurrentPage] = useState(1);
const [Count , SetCount] = useState(0)

const questionsPerPage = 10;


    useEffect (()=>{
        const Auth = Cookies.get("Profile")

        const Payment = true
       
        if(!Payment){
            router.push('/sign')
        }
        else if(!Payment){
            router.push('/Membership')
        }
        else{
            const fetch =  FETCHDATA(FETCHURL).then((item)=>{
                SETDATA(item)

            })
        }
    

       

      },[])

  

    
  
  
  // State to track which tricks are visible
  const [showTricks, setShowTricks] = useState({});
  const [showSolution, SetshowSolution] = useState({});

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleTopicChange = (event) => {
    setSelectedTopic(event.target.value);
  };

  const toggleAnswer = (index) => {
    setShowAnswers(prevState => ({
      ...prevState,
      [index]: !prevState[index] 
    }));
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleTrick = (index) => {
    setShowTricks(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };


  const toggleSolution = (index) => {
    SetshowSolution(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };


  
  const Done  =()=>{
    SetCount(Count+1)
    
}






  const filteredQuestions = mathQuestions.filter((Question) => {
    const matchesSearch = Question.Question.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTopic = selectedTopic === 'All' || Question.topic === selectedTopic;
    return matchesSearch && matchesTopic;
  });

  const topics = Array.from(new Set(mathQuestions.map((question) => question.topic)));

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = filteredQuestions.slice(indexOfFirstQuestion, indexOfLastQuestion);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

 



  return (
    <div className={`container mx-auto p-4 md:p-8 font-roboto min-h-screen ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}> 
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#5cec93]">{LEVELINFO ||"Level-Two"}</h1>
      
       
        <button onClick={toggleDarkMode} className="text-2xl">
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
<hr className='mb-5 bg-[#5cec93] ' />
      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">

<Link href={`/Quant/${LevelOneURL}`} className='w-full md:w-auto'>
      <p className="w-full md:w-[10rem]   bg-blue-500  font-bold text-white p-2 text-md rounded-lg shadow-md font-semithin  font-roboto text-center">{LEVELONE}</p>
</Link>
<Link href={`/Quant/${LevelTwoURL}`} className='w-full md:w-auto'>
      <p className="w-full md:w-[10rem] text-md bg-blue-500  font-bold text-white p-2 rounded-lg shadow-md font-semithin font-roboto text-center">{LEVELTWO}</p>
</Link>
        <div className={`flex items-center rounded-lg shadow-md p-2 w-full md:w-auto ${isDarkMode ? 'bg-gray-700' : 'bg-white'} border `}>
          <FaSearch className={`${isDarkMode ? 'text-gray-300' : 'text-gray-400'} mr-2`} />
          <input 
            type="text" 
            placeholder="Search questions..."
            value={searchTerm}
            onChange={handleSearchChange}
            className={`focus:outline-none w-full  ${isDarkMode ? 'bg-gray-700 text-white  ' : ''}`} 
          />
        </div>
        <div className={`flex items-center rounded-lg shadow-md p-2 w-full md:w-auto ${isDarkMode ? 'bg-gray-700' : 'bg-white'} border `}>
          <FaFilter className={`${isDarkMode ? 'text-gray-300' : 'text-gray-400'} mr-2`} />
          <select 
            value={selectedTopic}
            onChange={handleTopicChange}
            className={`focus:outline-none w-full  ${isDarkMode ? 'bg-gray-700 text-white' : ''}`}
          >
            <option value="All">All </option>
            {topics.map((topic) => (
              <option key={topic} value={topic}>{topic}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-4">

        {currentQuestions.map((questionData, index) => (
          
          <div key={index} className={`rounded-lg shadow-lg p-4 transition-shadow duration-300 ${isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'border border-blue-300 hover:shadow-xl shadow-gray-100'}`}>
         
         <div className="flex  items-center justify-between p-1">

           <div className=' border-2 p-[1px] border-gray-200 rounded-full  shadow-md  w-8 items-center justify-center text-blue-700 flex text-sm bg-gray-100 font-bold '>{questionData.id}</div>
            <div className=" border  p-1 rounded-full cursor-pointer shadow-md text-md text-blue-700 bg-gray-100 font-bold" onClick={Done}><IoMdDoneAll/></div>
         </div>
            <p className="mb-2 text-lg md:text-2xl ml-3">{questionData.Question}</p>

<div className="flex flex-col  md:flex-row justify-between">


            <button 
              onClick={() => toggleAnswer(indexOfFirstQuestion + index)} 
              className={`flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 mx-3 my-3 rounded text-sm md:text-base transition-colors duration-300 ${showAnswers[indexOfFirstQuestion + index] ? 'bg-[#F2CC8F] hover:bg-[#264653]' : ''}`}
            >
              {showAnswers[indexOfFirstQuestion + index] ? <FaEyeSlash className="mr-2" /> : <FaEye className="mr-2" />}
              {showAnswers[indexOfFirstQuestion + index] ? 'Hide Answer' : 'Reveal Answer'}
            </button>

         
            <button
                  onClick={() => toggleTrick(indexOfFirstQuestion + index)}
                  className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 mx-3 my-3 rounded text-xs"
                >
                  {showTricks[indexOfFirstQuestion + index] ? 'Hide Trick' : 'Show Trick'}
                </button>

                <button
                  onClick={() => toggleSolution(indexOfFirstQuestion + index)}
                  className="mt-2 bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 mx-3 my-3 rounded text-xs"
                >
                  {showSolution[indexOfFirstQuestion + index] ? 'Hide Solution' : 'Show Solution'}
                </button>


    
</div>

            {showAnswers[indexOfFirstQuestion + index] && (
              <div className="mt-2">
                <p>{questionData.Answer}</p> 
              </div>
            )}


            
{showTricks[indexOfFirstQuestion + index] && (
                  <p className="mt-2  italic text-lg">{questionData.trick}</p>
                )}

                        
{showSolution[indexOfFirstQuestion + index] && (
                  <p className="mt-2  italic text-lg">{questionData.solution}</p>
                )}

          </div>
        ))}



      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        {Array.from({ length: Math.ceil(filteredQuestions.length / questionsPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-3 py-2 mx-1 rounded-lg ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Tricks Section */}
     
    </div>
  );
}

export default LevelQuestions



