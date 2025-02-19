"use client";
import React, { useEffect } from "react";
import LevelQuestions from "@/components/chat/LevelQuestions";
import usePayment from "@/hook/Payment";
const page = () => {
  const { dataa, loading, error } = usePayment();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <LevelQuestions
        FETCHURL={"/Quant/Work-and-Time/LevelThree"}
        LEVELINFO={"Work-and-Time Level-Three"}
        LEVELONE={"Level-One"}
        LEVELTWO={"Level-Two"}
        LevelTwoURL={"/Time-work/Level-two"}
        LevelOneURL={"/Time-work/"}
      />
    </div>
  );
};

export default page;
