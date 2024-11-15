import Link from 'next/link'
import React from 'react'
import { AiFillTags } from "react-icons/ai";


const RCBlog = ({title , link , Id ,tag}) => {
  return (
    <Link href={link} className='border border-gray-300 w-full md:w-[25rem] h-full md:h-max m-5  p-3 flex flex-col  shadow-lg rounded-md'>
        <div className="flex  justify-between items-center">
<span className=' border rounded-md flex p-2 h-[2rem] w-[1rem] bg-red-500  items-center justify-center text-center   text-white font-bold'>{Id}</span>

        <h1 className=' m-3 text-black md:text-lg md:h-[7rem] overflow-hidden  text-sm font-firstfont uppercase'>
    {title}

        </h1>
<span className=' font-semibold flex items-center'>{tag==="Easy" ?<p className='text-green-500 items-center flex '><AiFillTags />Easy</p>:<p className='text-red-500 items-center flex'><AiFillTags />Hard</p>}</span>
        </div>
        <div className='w-full flex justify-center'>
<button className=' bg-green-500 w-20 text-white shadow-md rounded-md hover:bg-green-900 mt-1'>Solve</button>
        </div>
    </Link>
  )
}

export default RCBlog