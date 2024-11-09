import Link from 'next/link'
import React from 'react'
import { AiFillTags } from "react-icons/ai";


const RCBlog = ({title , link , Id}) => {
  return (
    <Link href={link} className='w-full h-full m-5 border p-3 flex flex-col  shadow-lg rounded-md'>
        <div className="flex  justify-between items-center">
<span className=' border rounded-md flex p-1 h-[1.5rem] w-[1.5rem]  items-center justify-center text-center bg-yellow-100  text-black font-thin'>{Id}</span>

        <h1 className=' m-3 text-black md:text-xl text-sm font-serif'>
    {title}

        </h1>
<span className='text-green-500 font-semibold flex items-center'><AiFillTags/>Tages</span>
        </div>
<hr />
<button className=' bg-green-500 w-20 text-white rounded-md hover:bg-green-900 mt-1'>Solve...</button>
    </Link>
  )
}

export default RCBlog