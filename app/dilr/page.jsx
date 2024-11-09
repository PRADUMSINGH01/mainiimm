import React from 'react'
import LevelQuestions from '@/components/chat/LevelQuestions'
const page = () => {
  return (
    <div>
        <LevelQuestions FETCHURL={ '/Quant/Averages/Questions'} LEVELINFO={" LRDI Level-One"} LEVELONE={"Level-Two"} LEVELTWO={"Level-Three"}/>
    </div>
  )
}

export default page