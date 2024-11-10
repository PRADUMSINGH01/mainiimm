'use client'
import { useState } from 'react';
const Para = ({ para }) => {

  const [show , setShow] =useState(false)

  const showpara = ()=>{
if(show){
  setShow(false)
}else{
  setShow(true)
}

  
} 
    
  
  return (
    <div>

      
      <h1 className="w-full h-14 bg-yellow-300 flex justify-center items-center text-2xl fixed ">
      
        Para Jumble
      </h1>

    <div className=" w-full h-screen flex flex-col justify-between items-center p-10"> 

    <div className="flex items-center w-full   justify-around m-10">
      
    <p className="p-1 ml-10 rounded-full border bg-yellow-300  W-[8%] item-center h-8">A</p>
      <span className="w-[90%]">Lorem20  ddddddddddd  dddddddddddd  dddddddddd  dddddddd
        
        dddddddddddddddddddd dddddddddddddddd  ddddddddd ddddddddd
        
        ddddd dddddddddddddddddddd  dddddddddddddddddd dddddddddddd
        
        ddddddddddd ddd ddddddddd ddddd ddddd</span>
    </div>

      
      <div className="flex items-center w-full  justify-around   m-10 ">

      <p className="p-1 ml-10 rounded-full border bg-yellow-300  W-[8%] item-center h-8">B</p>
        <span className="w-[90%]">Lorem20  ddddddddddd  dddddddddddd  dddddddddd  dddddddd

          dddddddddddddddddddd dddddddddddddddd  ddddddddd ddddddddd

          ddddd dddddddddddddddddddd  dddddddddddddddddd dddddddddddd

          ddddddddddd ddd ddddddddd ddddd ddddd</span>
      </div>
      <div className="flex items-center w-full  justify-around  m-10">

      <p className="p-1 ml-10 rounded-full border bg-yellow-300  W-[8%] items-center h-8">C</p>
        <span className="w-[90%]">Lorem20  ddddddddddd  dddddddddddd  dddddddddd  dddddddd

          dddddddddddddddddddd dddddddddddddddd  ddddddddd ddddddddd

          ddddd dddddddddddddddddddd  dddddddddddddddddd dddddddddddd

          ddddddddddd ddd ddddddddd ddddd ddddd</span>
      </div>
      <div className="flex items-center w-full  justify-around  m-10">

      <p className="p-1 ml-10 rounded-full border bg-yellow-300  W-[8%] item-center h-8">D</p>
        <span className="w-[90%]">Lorem20  ddddddddddd  dddddddddddd  dddddddddd  dddddddd

          dddddddddddddddddddd dddddddddddddddd  ddddddddd ddddddddd

          ddddd dddddddddddddddddddd  dddddddddddddddddd dddddddddddd

          ddddddddddd ddd ddddddddd ddddd ddddd</span>
      </div>
      <div className = {show ?"flex w-[80%] ml-20 h-10" :"hidden "}>
      <span>  Answer </span>
      </div>
    <div className = 'flex w-full justify-around'>
      <button onClick={showpara} className =' bg-yellow-300  shadow-md font-semibold w-[10rem] p-1 rounded-md hover:bg-yellow-600 hover:text-white' > {`  ${show?"Hide":"Check Answer" }`} </button>

       <button onClick={showpara} className =' bg-yellow-300  shadow-md font-semibold w-[10rem] p-1 rounded-md hover:bg-yellow-600 hover:text-white' > Next </button>
    </div>

      
    </div>
    
    
    </div>
  );
};

export default Para;
