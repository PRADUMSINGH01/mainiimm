'use client'
import { useState,useEffect } from 'react';
import FETCHDATA from '@/module/fetchdata';

const Para = ({ para }) => {

  const [show , setShow] =useState(false)
   const [data, setdata] =useState([])

  
useEffect(()=>{
async function fetchdata(){
  const userss = await FETCHDATA('/Jumble')
  return setdata(...userss)
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

  console.log(data)
  
  return (
    <div>

      
      <h1 className="w-full h-14 bg-white shadow-lg border border-b-blue-200 flex justify-center items-center text-2xl fixed ">
      
        Para Jumble
      </h1>

    <div className=" w-full h-screen flex flex-col justify-between items-center p-10"> 

    <div className="flex flex-col items-left w-full   justify-between  m-10 ">

      
      <div className='md:m-5 m-1   text-md md:text-2xl'>
      A : ) {data.question_One}
      </div>
      
      <div className='md:m-5 m-1   text-md md:text-2xl'>
        B : ) {data.question_Two}
        </div>

      <div className='md:m-5 m-1   text-md md:text-2xl'>
        C . {data.question_Three}
        </div>

      <div className='md:m-5 m-1   text-md md:text-2xl'>
        D . {data.question_Four}
        </div>
      <div className='md:m-5 m-1   text-md md:text-2xl'>
        E. {data.question_Five}
        </div>
    </div>


      <div className=' flex flex-wrap justify-between w-full text-white mb-10 '>  
         <button className='bg-yellow-500 p-2 rounded-md  shadow-lg ' >Prev </button>
         <button className='bg-red-500 p-2 rounded-md  shadow-lg '> Answer </button>
      <button className=' bg-green-500 p-2 rounded-md  shadow-lg  ' > Next </button>
      </div>
    </div>
    
    
    </div>
  );
};

export default Para;
