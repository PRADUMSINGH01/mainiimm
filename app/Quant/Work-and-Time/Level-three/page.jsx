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
        FETCHURL={"/Quant/percentages/Questions"}
        LEVELINFO={"Percentages Level-One"}
        LEVELONE={"Level-two"}
        LEVELTWO={"Level-three"}
        LevelTwoURL={"/Percentages/Level-three"}
        LevelOneURL={"/Percentages/Level-two"}
      />
    </div>
  );
};

export default page;
