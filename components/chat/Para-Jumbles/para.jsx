'use client'
import { useState,useEffect } from 'react';
import FETCHDATA from '@/module/fetchdata';
import { FaCaretRight } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa";
import { PiBoulesFill } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";

const Para = ({ para }) => {

  const [show , setShow] =useState(false)
   const [data, setdata] =useState([])
const [next , setnext] = useState(0)
  const [Loading , setLoading] = useState(true)
  const [alert , setalert ]= useState(false)
useEffect(()=>{
async function fetchdata(){
  const userss = await FETCHDATA('/Jumble')
  setLoading(false)
  return setdata(userss)
}

  fetchdata()
  
},[])

  
  const showpara = ()=>{
    
if(show){
  setShow(false)
}else{
  setShow(true)
}

  
} 


const Next =()=>{
  if(next<data.length){
    setnext(next+1)
  }else{
    setalert(true)
  }
  
}

  const Prev =()=>{
    if(next>0) setnext(next-1)
  }


  
  return (
    <div>
      
<div className={`${alert?"flex":"hidden"} absolute top-12 w-full h-16 bg-green-500 text-white  text-center items-center justify-center font-semibold `} > <PiBoulesFill />You have Completed this section  <button onClick={()=>setalert(false)} className='items-left ml-10'> <IoMdClose />
</button> </div> 
      
      <h1 className="w-full h-14 bg-white shadow-lg border border-b-blue-200 flex justify-center items-center text-2xl fixed ">
      
        Para Jumble
      </h1>

    <div className=" w-full h-screen flex flex-col justify-between items-center p-10"> 


{
  Loading ? <span className=' animate-spin w-10 h-10 border rounded-full border-black mt-20 ' >   </span>:     data.slice(next,next+1).map((data)=>(
    <div className="flex flex-col items-left w-full   justify-between  mt-10 ">
          
      <div className='md:m-5 m-1   text-md md:text-2xl'>
        <span className='text-red-500'>A : ) </span>
       {data.question_One}
      </div>
      
      <div className='md:m-5 m-1   text-md md:text-2xl'>
        <span className='text-yellow-500'>B : ) </span>
        {data.question_Two}
        </div>

      <div className='md:m-5 m-1   text-md md:text-2xl'>
        <span className='text-orange-500'>C : ) </span>
        {data.question_Three}
        </div>

      <div className='md:m-5 m-1   text-md md:text-2xl'>
        
        <span className='text-blue-500'>D : ) </span>
        {data.question_Four}
        </div>
      <div className='md:m-5 m-1   text-md md:text-2xl'>
        <span className='text-green-500'>E : ) </span>
         {data.question_Five}
        </div>
      <div className={`${show?"flex":"hidden"} text-green-500 shadow-md border border-green-500 p-2 mt-2 `}> Correct  Answer  { data.answerOne}</div>
 
    </div> 
        ))
      }


      <div className=' flex flex-wrap justify-around w-full text-white mt-4 '>  
         <button className=' w-[4rem] flex items-center bg-yellow-500 p-2 rounded-md  shadow-lg ' onClick={Prev} > <FaCaretLeft/> Prev  </button>
         <button className=' w-[4.3rem] flex items-center bg-red-500 p-2 rounded-md  shadow-lg ' onClick={showpara}> Answer {next} </button>
      <button className='w-[4rem] flex items-center bg-green-500 p-2 rounded-md  shadow-lg  '   onClick={Next} > Next <FaCaretRight/> </button>
      </div>
    </div>
    
    
    </div>
  );
};

export default Para;
