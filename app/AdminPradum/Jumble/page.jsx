"use client";
// AddDataComponent.js
import React, { useState } from "react";
import { app } from "@/module/firebase";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const db = getFirestore(app);

const AddDataComponent = () => {
  
  const [question_One, Setquestion_One] = useState("");
   const [question_Two, Setquestion_Two] = useState(""); 
  const [question_Three, Setquestion_Three] = useState("");
   const [question_Four, Setquestion_Four] = useState("");
   const [question_Five, Setquestion_Five] = useState("");
  const [answerOne, SetanswerOne] = useState("");
  const [Id, setId] = useState("");

  const [loading , setLoading] =useState(false)
  const [data, setdata] = useState("Jumble");
 
  

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    setLoading(true);
    try {
      await addDoc(collection(db, data), {
        
        question_Five,
        question_Four,
        question_Three,
        question_Two,
        question_One,
        answerOne,
        Id,
        createdAt: Timestamp.now(),
      });
      
      setLoading(false)
       Setquestion_Five(""),
        Setquestion_Four(""),
        Setquestion_Three(""),
        Setquestion_Two(""),
        Setquestion_One(""),
        SetanswerOne(""),
        setId("")
    }
    catch{
    alert("some thing wrong ")
      
    }
      
     
      
     
    } 


  return (
    <div className="flex-col w-full h-max items-center justify-center">
      <h1>Add Data to Firestore</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-evenly items-center"
      >
        <input
          type="text"
          value={data}
          onChange={(e) => setdata(e.target.value)}
          placeholder="database name "
          required
          className="w-full h-10 p-2 mb-4"
        />
        <input
          type="text"
          value={Id}
          onChange={(e) => setId(e.target.value)}
          placeholder="ID"
          required
          className="w-full h-10 p-2 mb-4"
        />
 
        <input
          type="text"
          value={question_One}
          onChange={(e) => Setquestion_One(e.target.value)}
          placeholder="One"
          required
          className="w-full h-10 p-2 mb-4"
        />
        <input
          type="text"
          value={question_Two}
          onChange={(e) => Setquestion_Two(e.target.value)}
          placeholder="two"
          required
          className="w-full h-10 p-2 mb-4"
        />
        <input
          type="text"
          value={question_Three}
          onChange={(e) => Setquestion_Three(e.target.value)}
          placeholder="three"
          required
          className="w-full h-10 p-2 mb-4"
        />
        <input
          type="text"
          value={question_Four}
          onChange={(e) => Setquestion_Four(e.target.value)}
          placeholder="four"
          required
          className="w-full h-10 p-2 mb-4"
        />
        <input
          type="text"
          value={question_Five}
          onChange={(e) => Setquestion_Five(e.target.value)}
          placeholder="five"
          required
          className="w-full h-10 p-2 mb-4"
        />

        
        <input
          type="text"
          value={answerOne}
          onChange={(e) => SetanswerOne(e.target.value)}
          placeholder="Enter the correct answer "
          required
          className="w-full h-10 p-2 mb-4"
        />
  

        <button
          type="submit"
         
          className="bg-green-500 text-white p-2"
        >
          {loading ? "Adding..." : "Add Data"}
        </button>

      </form>
    </div>
  );
};

export default AddDataComponent;
