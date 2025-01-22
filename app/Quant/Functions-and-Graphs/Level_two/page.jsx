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
        FETCHURL={"/Quant/Function-and-Graph/LevelTwo"}
        LEVELINFO={"Functions-and-Graphs Level-Two"}
        LEVELONE={"Level-One"}
        LEVELTWO={"Level-Three"}
        LevelTwoURL={"/Functions-and-Graphs/Level_three"}
        LevelOneURL={"/Functions-and-Graphs/"}
      />
    </div>
  );
};

export default page;
