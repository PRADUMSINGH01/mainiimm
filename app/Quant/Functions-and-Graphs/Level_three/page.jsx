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
        FETCHURL={"/Quant/Function-and-Graph/LevelThree"}
        LEVELINFO={"Functions-and-Graphs Level-Three"}
        LEVELONE={"Level-One"}
        LEVELTWO={"Level-Two"}
        LevelTwoURL={"/Functions-and-Graphs/Level_two"}
        LevelOneURL={"/Functions-and-Graphs/"}
      />
    </div>
  );
};

export default page;
