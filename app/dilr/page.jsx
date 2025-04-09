"use client";
import React, { useEffect } from "react";
import LevelQuestions from "@/components/chat/LevelQuestions";
import usePayment from "@/hook/Payment";
import { AiOutlineLoading3Quarters } from "react-icons/ai"; // Example icon
import DILRPractice from "@/components/chat/DILR/QuestionDILR";

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

  return <DILRPractice />;
};

export default page;
