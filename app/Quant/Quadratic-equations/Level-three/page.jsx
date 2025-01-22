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
        FETCHURL={"/Quant/Quadratic-equations/Level-three"}
        LEVELINFO={"Quadratic-equations Level-three"}
        LEVELONE={"Level-One"}
        LEVELTWO={"Level-Two"}
        LevelTwoURL={"/Quadratic-equations/Level-two"}
        LevelOneURL={"/Quadratic-equations/"}
      />
    </div>
  );
};

export default page;
