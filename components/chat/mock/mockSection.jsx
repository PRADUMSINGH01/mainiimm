'use client'

import { useState, useEffect } from "react";
import { PiBoulesFill } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";

export default function MockTest() {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]); // Array to store answers for each question
  const [final, setfinal] = useState([]); // Array to store answers for each question
  const [total, settotal] = useState(0); // Array to store answers for each question
const [alert , setalert] = useState(false)
  const [submit , setsubmit] = useState(false)

  // Mock Questions Data
  const questions = [
    {
      question: "What is 2 + 2? What is 2 + 2? What is 2 + 2 ? What is 2 + 2?What is 2 + 2? What is 2 + 2? What is 2 + 2?",
      options: [3, 4, 5, 6],
      correctAnswer: 4,
    },
    {
      question: "What is 5 * 5?",
      options: [20, 25, 30, 35],
      correctAnswer: 25,
    },
    {
      question: "What is 12 / 4?",
      options: [2, 3, 4, 5],
      correctAnswer: 3,
    },
    {
      question: "What is 15 - 7?",
      options: [7, 8, 9, 6],
      correctAnswer: 8,
    },
  ];

  // Timer Logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        clearInterval(interval);
        alert("Time is up!");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1 ) {
      if(answers[currentQuestion]===undefined){
          setalert(true)
      }else{
        
      setCurrentQuestion(currentQuestion + 1);
      }
      
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSkipQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      const updatedAnswers = [...answers];
      updatedAnswers[currentQuestion] = null; // Skipping by setting answer as null
      setAnswers(updatedAnswers);
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleCheckboxChange = (option) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = option; // Set only the selected option
    setAnswers(updatedAnswers);
  };
   const submitAnswers = ()=>{
     setfinal(answers)
     setsubmit(true)
     setAnswers([])
   }


useEffect(()=>{
  
  function totatlnumber(numberss){
    let numtotal = 0;
    for(let i=0;i<numberss.length;i++){
      if (numberss[i]===true){
          numtotal+=1
      }else if(numberss[i]===null){
        i++
      }else{
          numtotal-=1
      }
    }

    return settotal(numtotal) 
  }

},[])

  return (
    <div className="flex flex-col h-screen items-center justify-center p-1 space-y-6">

      <div className={`${alert?"flex":"hidden"} absolute top-12 w-full h-20 bg-green-500 text-white  text-center items-center justify-center font-semibold `} > <PiBoulesFill />Please select an answer  <button onClick={()=>setalert(false)} className='items-left ml-10'> <IoMdClose />
      </button> </div> 

      <div className="w-full max-w-6xl p-4 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <div className="text-xl font-bold">Mock Test</div>
          <div className="text-lg font-medium">
            Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60}
          </div>
        </div>

        {/* Question */}
        <div className="mb-4">
          <h2 className="text-xl">{questions[currentQuestion].question}</h2>
          <div className="mt-4 flex flex-col">
            {questions[currentQuestion].options.map((option, index) => (
              <div key={index} className="ml-2 flex  items-center w-full ">
                <div className="w-full bg-gray-200 mt-2 p-2 flex  item-center hover:bg-blue-200 rounded-md">
                <label className="mr-2 text-xl">{option}</label>
                <input
                  type="checkbox"
                  checked={answers[currentQuestion] === option}
                  onChange={() => handleCheckboxChange(option)}
                  className="ml-2 w-[3rem] flex h-8 "
                />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md  hover:bg-blue-700"
            onClick={handlePreviousQuestion}
            disabled={currentQuestion === 0}
          >
            Prev
          </button>
          <button
            className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-700"
            onClick={handleSkipQuestion}
          >
            Skip
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700"
            onClick={handleNextQuestion}
            disabled={currentQuestion === questions.length - 1}
          >
            Next
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-700 "
            onClick={submitAnswers}
          >
            Submit
          </button>
        </div>
      </div>

      

<div>   
<div className={` ${submit?"w-full flex flex-col  h-full  bg-white shadow-md shadow-blue-500 rounded-md border":"hidden" }`}>

  <h1 className=" text-blue-600 w-full text-left p-2">  All Answers  </h1>
  <div className="w-full flex flex-wrap h-full ">
  {
    final.map((index, item)=>(
      <div className=" bg-gray-200 w-[6rem] flex    h-6 m-2 rounded-md text-white font-semibold bg-black "  >
        {questions[item].correctAnswer === index ?<div className="w-32 h-6 bg-green-600 rounded-md text-center">correct</div>: 
        <div className="  w-32 h-6 bg-red-500 rounded-md text-center"> wrong  </div>
        
        }
      </div>
    ))
  }
  </div>

  <hr/>
  <div className=" flex flex-col justify-between items-center w-full h-full p-2  bg-yellow-300">

<div className="flex h-full justify-between items-center    w-full m-2  ">

<section className="w-full h-full flex flex-col items-center justify-between  border-2 border-l-white">
  <p  className="font-bold">Total Questions</p>
  <p>26</p>
</section>

  <section className="w-full h-full flex flex-col items-center justify-between  border-2 border-l-white">
    <p  className="font-bold">Total Questions</p>
    <p>26</p>
  </section>
  
  <section className="w-full h-full flex flex-col items-center justify-between  border-2 border-l-white">
    <p  className="font-bold">Total Questions</p>
    <p>26</p>
  </section>
  
  <section className="w-full h-full flex flex-col items-center justify-between  border-2 border-l-white">
    <p  className="font-bold">Total Questions</p>
    <p>26</p>
  </section>

  
</div>

  


    
  </div>
   
  </div>




</div>

      
    </div>
  );
}
