"use client";
import React, { useEffect } from "react";
import LevelQuestions from "@/components/chat/LevelQuestions";
import usePayment from "@/hook/Payment";

const page = () => {
  const res = usePayment();
  useEffect(() => {
    console.log(res);
  }, []);

  return (
    <div>
      <LevelQuestions
        FETCHURL={"/Quant/Averages/Questions"}
        LEVELINFO={" LRDI Level-One"}
        LEVELONE={"Level-Two"}
        LEVELTWO={"Level-Three"}
      />
    </div>
  );
};

export default page;
