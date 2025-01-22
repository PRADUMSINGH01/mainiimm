"use client";
import React, { useEffect } from "react";
import LevelQuestions from "@/components/chat/LevelQuestions";
import usePayment from "@/hook/Payment";
import { AiOutlineLoading3Quarters } from "react-icons/ai"; // Example icon

const page = () => {
  const { dataa, error, loading } = usePayment();
  if (loading)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <AiOutlineLoading3Quarters className="animate-spin text-4xl mb-4" />
        <p>Loading...</p>
      </div>
    );
  if (error) return <p>Error: {error}</p>;

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
