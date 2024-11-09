import React from 'react'
import LevelQuestions from '@/components/chat/LevelQuestions'
const page = () => {
  return (
    <div>
        <LevelQuestions FETCHURL={'/Quant/Averages/LevelTwo'}  LEVELONE={"Level-One"} LEVELTWO={"Level-Two"} LevelTwoURL={"/Averages/Level-Two"} LevelOneURL={"/Averages/"}/>
        </div>
  )
}

export default page