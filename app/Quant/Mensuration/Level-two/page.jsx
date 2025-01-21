"use client";
import React, { useEffect } from "react";
import LevelQuestions from "@/components/chat/LevelQuestions";
import usePayment from "@/hook/usePayment";
const page = () => {
  const { dataa, loading, error } = usePayment();
  if (error) return <p>Error: {error}</p>;
  if (loading) return <p>Loading...</p>;
  useEffect(() => {
    const disableRightClick = (event) => {
      event.preventDefault();
    };

    const disableCopy = (event) => {
      event.preventDefault();
      alert("Copying is disabled on this website!");
    };

    const disableCut = (event) => {
      event.preventDefault();
      alert("Cutting is disabled on this website!");
    };

    const disablePaste = (event) => {
      event.preventDefault();
      alert("Pasting is disabled on this website!");
    };

    // Add event listeners
    document.addEventListener("contextmenu", disableRightClick);
    document.addEventListener("copy", disableCopy);
    document.addEventListener("cut", disableCut);
    document.addEventListener("paste", disablePaste);

    // Cleanup the event listeners on component unmount
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("copy", disableCopy);
      document.removeEventListener("cut", disableCut);
      document.removeEventListener("paste", disablePaste);
    };
  }, []);

  return (
    <div>
      <LevelQuestions
        FETCHURL={"/Quant/Mensuration/Leveltwo"}
        LEVELINFO={"Mensuration Level-Two"}
        LEVELONE={"Level-One"}
        LEVELTWO={"Level-three"}
        LevelTwoURL={"/Mensuration/Level-three"}
        LevelOneURL={"/Mensuration/"}
      />
    </div>
  );
};

export default page;
