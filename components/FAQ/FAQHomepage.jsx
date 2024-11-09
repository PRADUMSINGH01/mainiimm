"use client"
import React,{useState} from 'react'

const FAQHomepage = () => {

  const [open , setclose] = useState(false)


  const openClose = (e)=>{
    if(!open){
      setclose(true)
    }else{
      setclose(false)
    }
  }
  return (
    <div className='flex-col text-center bg-[#1A3636] rounded-xl m-6'>

<h1 className='text-2xl font-mono text-white'>Some Important F&Q</h1>




<div className="bg-white m-2 rounded-lg">



<div className="flex justify-around">

  <h1>Question  </h1><button onClick={()=>openClose()}> + </button>
</div>



  {
    open ? 
    <span>Ans</span> : <></>
  }












</div>





</div>
  )
}

export default FAQHomepage