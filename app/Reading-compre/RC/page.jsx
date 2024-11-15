'use client'

import React,{useEffect,useState} from 'react'
import RCBlog from '@/components/chat/RC/RCBlog'
import FETCHDATA from '@/module/fetchdata'



const page = () => {

const [data ,  setdata] = useState([])
const [More ,  SetMore] = useState(10)


useEffect(()=>{
async function data(){
 const res= await FETCHDATA('RC')
 setdata(res)
}
data()

},[])



function add(){
  if(data.length>More){
    SetMore(More+5)
  }
  else{
    return
  }
}


  return (
    <div className='flex flex-wrap justify-evenly items-center '>
      {data.slice(0 , More).map((item)=>(
        <RCBlog title={item.Title}  link={`/Reading-compre/RC/${item.Id}`} Id={item.Id} tag={item.Tag}/>
      ))
      
      }
{
  data?
  <button className='bg-green-500 p-1 rounded-md mb-5 text-white' onClick={add}>{data.length < More ? 'Completed this Section ' : "More"}</button>
:"Loading..."}
    </div>
  )
}

export default page