import React from 'react'
import LevelQuestions from '@/components/chat/LevelQuestions'
const page = () => {
  return (
    <div>
        <LevelQuestions FETCHURL={'/Quant/Averages/LevelThree'}  LEVELONE={"Level-One"} LEVELTWO={"Level-Three"} LevelTwoURL={"/Averages/Level-Two"} LevelOneURL={"/Averages/"}/>
        </div>
  )
}

export default page