import React from 'react'
import Link from 'next/link'
import {  FaArrowAltCircleRight } from 'react-icons/fa'
const BlogPost = ({URL , Id, Question}) => {
  return (
    <div className='w-full h-[6rem] text-black hover:bg-gray-100 hover:border-gray-600 p-4 mb-5 flex   items-center  border border-gray-300 rounded-md '>
<Link href={URL} className='w-full flex justify-between items-center'>
  <span className='text-sm md:text-xl font-bold w-20  overflow-hidden '>{Id }</span>

        <span className='text-xl font-bold    overflow-hidden '>{Question}</span>
 
 
        <FaArrowAltCircleRight className='text-red-600 text-center text-2xl w-20'/>


</Link>
    </div>
  )
}

export default BlogPost