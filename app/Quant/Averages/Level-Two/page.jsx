"use client";
import React, { useEffect, useState } from "react";
import LevelQuestions from "@/components/chat/LevelQuestions";

import { RiMoneyDollarCircleFill } from "react-icons/ri";
import usePayment from "@/hook/Payment";
const page = () => {
  const { dataa, loading, error } = usePayment();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <h1 className="w-full h-screen absolute top-0 flex items-center justify-center text-blue-500 z-10 bg-white shadow-xl text-xl text-center">
        {dataa}
        <RiMoneyDollarCircleFill size={24} />
      </h1>

      <LevelQuestions
        FETCHURL={"/Quant/Averages/LevelTwo"}
        LEVELONE={"Level-One"}
        LEVELTWO={"Level-Three"}
        LevelTwoURL={"/Averages/Level-Three"}
        LevelOneURL={"/Averages/"}
      />
    </div>
  );
};

export default page;
