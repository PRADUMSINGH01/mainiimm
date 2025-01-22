"use client";
import React, { useEffect, useState } from "react";
import LevelQuestions from "@/components/chat/LevelQuestions";
import usePayment from "@/hook/Payment";
const page = () => {
  const { dataa, loading, error } = usePayment();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <LevelQuestions
        FETCHURL={"/Quant/percentages/LevelTwo"}
        LEVELINFO={"Algebra Level-Two"}
        LEVELONE={"Level-One"}
        LEVELTWO={"Level-Three"}
        LevelTwoURL={"/Algebra/Level_three"}
        LevelOneURL={"/Algebra/"}
      />
    </div>
  );
};

export default page;
