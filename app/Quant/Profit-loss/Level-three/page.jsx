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
        FETCHURL={"/Quant/Profit-&-Loss/Levelthree"}
        LEVELINFO={"Profit and Loss LEVEL-Three"}
        LEVELONE={"Level-One"}
        LEVELTWO={"Level-two"}
        LevelTwoURL={"/Profit-loss/Level-two"}
        LevelOneURL={"/Profit-loss/"}
      />
    </div>
  );
};

export default page;
