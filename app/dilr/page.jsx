
import React from "react";
import LevelQuestions from "@/components/chat/LevelQuestions";
import usePayment from "@/hook/usePayment";
const page = () => {
  const { dataa, loading, error } = usePayment();
  if (loading) return <p>Loading...</p>;
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
