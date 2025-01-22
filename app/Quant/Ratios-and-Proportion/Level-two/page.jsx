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
        FETCHURL={"/Quant/Ratios-and-Proportion/Level-two"}
        LEVELINFO={"Ratios-and-Proportion Level-Two"}
        LEVELONE={"Level-One"}
        LEVELTWO={"Level-three"}
        LevelTwoURL={"/Ratios-and-Proportion/Level-three"}
        LevelOneURL={"/Ratios-and-Proportion/"}
      />
    </div>
  );
};

export default page;
