"use client";
// AddDataComponent.js
import React, { useState } from "react";
import { app } from "@/module/firebase";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const db = getFirestore(app);
const AddDataComponent = () => {
  const [Question, setQuestion] = useState("");
  const [question_One, setQuestion_One] = useState("");
  const [question_Two, setQuestion_Two] = useState("");
  const [question_Three, setQuestion_Three] = useState("");
  const [question_Four, setQuestion_Four] = useState("");
  const [question_Five, setQuestion_Five] = useState("");

  const [answer, setAnswer] = useState("");
  const [answerOne, setAnswerOne] = useState("");
  const [answerTwo, setAnswerTwo] = useState("");
  const [answerThree, setAnswerThree] = useState("");
  const [answerFour, setAnswerFour] = useState("");

  const [Section_One, setSection_One] = useState("");
  const [Section_Two, setSection_Two] = useState("");
  const [Section_Three, setSection_Three] = useState("");
  const [Section_Four, setSection_Four] = useState("");
  const [Section_Five, setSection_Five] = useState("");

  const [Id, setId] = useState("");
  const [database, setdatabase] = useState("Reading");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (
      !Question.trim() ||
      !answer.trim() 
    ) {
      setError("All fields are required!");
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, database), {
        Question,
        question_One,
        question_Two,
        question_Three,
        question_Four,
        question_Five,
        answer,
        answerOne,
        answerTwo,
        answerThree,
        answerFour,
        Id,
        createdAt: Timestamp.now(),
        Section_One,
        Section_Two,
        Section_Three,
        Section_Four,
        Section_Five,
      });
      // Clear inputs after submission
      setQuestion("");
      setAnswer("");
      setTrick("");
      setSolution("");
    } catch (e) {
      setError("Error adding document: " + e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" flex-col w-full h-max items-center justify-center ">
      <h1>Add Data to Firestore</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-evenly items-center"
      >
        <input
          type="text"
          value={database}
          onChange={(e) => setdatabase(e.target.value)}
          placeholder="database"
          required
          className="w-full h-10 p-10"
        />
        <input
          type="text"
          value={Id}
          onChange={(e) => setId(e.target.value)}
          placeholder="id"
          required
          className="w-full h-10 p-10"
        />
        <input
          type="text"
          value={Question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter the Question"
          required
          className="w-full h-10 p-10"
        />
        <input
          type="text"
          value={question_One}
          onChange={(e) => setQuestion_One(e.target.value)}
          placeholder="Enter the Question"
          required
          className="w-full h-10 p-10"
        />{" "}
        <input
          type="text"
          value={question_Two}
          onChange={(e) => setQuestion_Two(e.target.value)}
          placeholder="Enter the Question"
          required
          className="w-full h-10 p-10"
        />{" "}
        <input
          type="text"
          value={question_Three}
          onChange={(e) => setQuestion_Three(e.target.value)}
          placeholder="Enter the Question"
          required
          className="w-full h-10 p-10"
        />
        <input
          type="text"
          value={question_Four}
          onChange={(e) => setQuestion_Four(e.target.value)}
          placeholder="Enter the Question"
          required
          className="w-full h-10 p-10"
        />
        <input
          type="text"
          value={question_Five}
          onChange={(e) => setQuestion_Five(e.target.value)}
          placeholder="Enter the Question"
          required
          className="w-full h-10 p-10"
        />
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Enter the Answer"
          required
          className="w-full h-10 p-10"
        />
        <input
          type="text"
          value={answerOne}
          onChange={(e) => setAnswerOne(e.target.value)}
          placeholder="Enter the Answer"
          required
          className="w-full h-10 p-10"
        />
        <input
          type="text"
          value={answerTwo}
          onChange={(e) => setAnswerTwo(e.target.value)}
          placeholder="Enter the Answer"
          required
          className="w-full h-10 p-10"
        />
        <input
          type="text"
          value={answerThree}
          onChange={(e) => setAnswerThree(e.target.value)}
          placeholder="Enter the Answer"
          required
          className="w-full h-10 p-10"
        />
        <input
          type="text"
          value={answerFour}
          onChange={(e) => setAnswerFour(e.target.value)}
          placeholder="Enter the Answer"
          required
          className="w-full h-10 p-10"
        />
        <input
          type="text"
          value={Section_One}
          onChange={(e) => setSection_One(e.target.value)}
          placeholder="Enter the Solution"
          required
          className="w-full h-10 p-10 m-5"
        />
        <input
          type="text"
          value={Section_Two}
          onChange={(e) => setSection_Two(e.target.value)}
          placeholder="Enter the Solution"
          required
          className="w-full h-10 p-10 m-5"
        />
        <input
          type="text"
          value={Section_Three}
          onChange={(e) => setSection_Three(e.target.value)}
          placeholder="Enter the Solution"
          required
          className="w-full h-10 p-10 m-5"
        />
        <input
          type="text"
          value={Section_Four}
          onChange={(e) => setSection_Four(e.target.value)}
          placeholder="Enter the Solution"
          required
          className="w-full h-10 p-10 m-5"
        />
        <input
          type="text"
          value={Section_Five}
          onChange={(e) => setSection_Five(e.target.value)}
          placeholder="Enter the Solution"
          required
          className="w-full h-10 p-10 m-5"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Data"}
        </button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default AddDataComponent;
