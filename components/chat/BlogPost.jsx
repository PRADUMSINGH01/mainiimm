import React from 'react'
import Link from 'next/link'
import {  FaArrowAltCircleRight } from 'react-icons/fa'
const BlogPost = ({URL , Id, Question}) => {
  return (
    <div className='w-full h-auto text-black hover:bg-white hover:border-blue-200 p-4 mb-5 flex   items-center shadow-xl  border border-gray-100 rounded-md bg-[#cbcae650]'>
<Link href={URL} className='w-full flex justify-between items-center'>
  <span className='text-sm md:text-xl font-bold w-20  overflow-hidden '>{Id }</span>

        <span className='text-sm md:text-xl font-bold    overflow-hidden '>{Question}</span>
 
 
        <FaArrowAltCircleRight className='text-red-600 text-center text-2xl w-20'/>


</Link>
    </div>
  )
}

export default BlogPost