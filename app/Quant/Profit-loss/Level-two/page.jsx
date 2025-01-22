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
        FETCHURL={"/Quant/Compound-interest/Level-three"}
        LEVELINFO={"Profit and Loss LEVEL-TWO"}
        LEVELONE={"Level-One"}
        LEVELTWO={"Level-three"}
        LevelTwoURL={"/Profit-loss/Level-three"}
        LevelOneURL={"/Profit-loss/"}
      />
    </div>
  );
};

export default page;
