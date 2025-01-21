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
        FETCHURL={"/Quant/Averages/LevelThree"}
        LEVELONE={"Level-One"}
        LEVELTWO={"Level-Three"}
        LevelTwoURL={"/Averages/Level-Two"}
        LevelOneURL={"/Averages/"}
      />
    </div>
  );
};

export default page;
