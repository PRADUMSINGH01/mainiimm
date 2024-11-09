import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import dino from './dino.jpg'
import {  FaArrowAltCircleRight } from 'react-icons/fa'
const BlogPost = ({URL , ImCheck , Question}) => {
  return (
    <div className='w-full md:w-[26rem] h-auto text-black   p-4 mb-5 flex items-center shadow-xl  border border-blue-500 rounded-md bg-[#cbcae650]'>
<Link href={URL} className='w-full flex flex-col'>
{
  ImCheck ?
  <Image src={dino} alt='' width={400} height={100}></Image>:""
}
        <span className='text-sm md:text-lg font-roboto  overflow-hidden h-11 md:h-16 '>{Question}</span>
  <hr  />
<div className="flex items-center justify-between mt-3">
  <p className='text-blue-600'>

       Read More...
  </p>
        <FaArrowAltCircleRight className='text-blue-600 text-center text-xl animate-pulse'/>

</div>
</Link>
    </div>
  )
}

export default BlogPost