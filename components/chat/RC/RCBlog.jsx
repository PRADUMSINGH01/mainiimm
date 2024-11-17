import Link from 'next/link'
import React from 'react'
import { AiFillTags } from "react-icons/ai";


const RCBlog = ({title , link , Id ,tag}) => {
  return (
    <Link href={link} className='border border-gray-300 w-full md:w-[30rem] h-[10rem]  m-5  p-3 flex flex-col shadow-gray-700   shadow-md rounded-md'>
        <div className="flex  justify-between items-center">
<span className=' border rounded-full flex p-2 h-[2rem] w-[2rem] bg-gray-700  items-center justify-center text-center   text-white font-bold'>{Id}</span>

        <h1 className=' m-3 text-black md:text-lg md:h-[5rem] overflow-hidden  text-sm font-firstfont '>
    {title}

        </h1>
<span className=' font-semibold flex items-center'>{tag==="Easy" ?<p className='text-green-500 items-center flex   '><AiFillTags />Easy</p>:<p className='text-red-500 items-center flex'><AiFillTags />Hard</p>}</span>
        </div>
        <div className='w-full flex justify-center'>
<button className=' bg-blue-500 w-40 text-white shadow-md rounded-md shadow-md shadow-gray-700 hover:bg-blue-700 mt-1'>Solve</button>
        </div>
    </Link>
  )
}

export default RCBlog