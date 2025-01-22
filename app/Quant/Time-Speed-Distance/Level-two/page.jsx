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
        FETCHURL={"/Quant/Time-Speed-Distance/Leveletwo"}
        LEVELINFO={"Time-Speed-Distance Level-Two"}
        LEVELONE={"Level-One"}
        LEVELTWO={"Level-three"}
        LevelTwoURL={"/Time-Speed-Distance/Level-three"}
        LevelOneURL={"/Time-Speed-Distance/Level-two"}
      />
    </div>
  );
};

export default page;
