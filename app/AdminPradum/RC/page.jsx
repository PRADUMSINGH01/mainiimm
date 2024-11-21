"use client";
// AddDataComponent.js
import React, { useState } from "react";
import { app } from "@/module/firebase";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const db = getFirestore(app);
const AddDataComponent = () => {
  const [Title, settitle] = useState("");
  const [question_One, setQuestion_One] = useState("");
  const [question_Two, setQuestion_Two] = useState("");
  const [question_Three, setQuestion_Three] = useState("");
  const [question_Four, setQuestion_Four] = useState("");
  const [question_Five, setQuestion_Five] = useState("");

  const [answerFive, setAnswerFive] = useState("");
  const [answerOne, setAnswerOne] = useState("");
  const [answerTwo, setAnswerTwo] = useState("");
  const [answerThree, setAnswerThree] = useState("");
  const [answerFour, setAnswerFour] = useState("");

const [question_One_option_One , Setquestion_One_option_One] = useState('')
const [question_One_option_Two , Setquestion_One_option_Two] = useState('')
const [question_One_option_Three , Setquestion_One_option_Three] = useState('')


const [question_Two_option_One , Setquestion_Two_option_One] = useState('')
const [question_Two_option_Two , Setquestion_Two_option_Two] = useState('')
const [question_Two_option_Three , Setquestion_Two_option_Three] = useState('')

const [question_Three_option_One , Setquestion_Three_option_One] = useState('')
const [question_Three_option_Two , Setquestion_Three_option_Two] = useState('')
const [question_Three_option_Three , Setquestion_Three_option_Three] = useState('')


const [question_Four_option_One , Setquestion_Four_option_One] = useState('')
const [question_Four_option_Two , Setquestion_Four_option_Two] = useState('')
const [question_Four_option_Three , Setquestion_Four_option_Three] = useState('')



  const [Section_One, setSection_One] = useState("");
  const [Section_Two, setSection_Two] = useState("");
  const [Section_Three, setSection_Three] = useState("");
  const [Section_Four, setSection_Four] = useState("");
  const [Section_Five, setSection_Five] = useState("");

  const [Id, setId] = useState("");
  const [Tag, setTag] = useState("");

  const [database, setdatabase] = useState("RC");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (
      !Title.trim() ||
      !answerOne.trim() 
    ) {
      setError("All fields are required!");
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, database), {
        Title,
        Tag,
        question_One,
        question_Two,
        question_Three,
        question_Four,

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


question_One_option_One,
question_One_option_Two,
question_One_option_Three,


question_Two_option_One,
question_Two_option_Two,
question_Two_option_Three,



question_Three_option_One,
question_Three_option_Two,
question_Three_option_Three,


question_Four_option_One,
question_Four_option_Two,
question_Four_option_Three

      });
      // Clear inputs after submission
      settitle("");
      setAnswerOne("");
      
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
          value={Tag}
          onChange={(e) => setTag(e.target.value)}
          placeholder="Tag"
          required
          className="w-full h-10 p-10"
        />
        <input
          type="text"
          value={Title}
          onChange={(e) => settitle(e.target.value)}
          placeholder="Enter the Title"
          required
          className="w-full h-10 p-10"
        />
        <input
          type="text"
          value={question_One}
          onChange={(e) => setQuestion_One(e.target.value)}
          placeholder="Enter the Question One"
          required
          className="w-full h-10 p-10"
        />{" "}
        <input
          type="text"
          value={question_Two}
          onChange={(e) => setQuestion_Two(e.target.value)}
          placeholder="Enter the Question Two"
          required
          className="w-full h-10 p-10"
        />{" "}
        <input
          type="text"
          value={question_Three}
          onChange={(e) => setQuestion_Three(e.target.value)}
          placeholder="Enter the Question Three"
          required
          className="w-full h-10 p-10"
        />
        <input
          type="text"
          value={question_Four}
          onChange={(e) => setQuestion_Four(e.target.value)}
          placeholder="Enter the Question Four"
          required
          className="w-full h-10 p-10"
        />
        
        
        <input
          type="text"
          value={answerOne}
          onChange={(e) => setAnswerOne(e.target.value)}
          placeholder="Enter the Answer One"
          required
          className="w-full h-10 p-10"
        />
     
<input
          type="text"
          value={question_One_option_One}
          onChange={(e) => Setquestion_One_option_One(e.target.value)}
          placeholder="Enter the question_One_option_One"
          required
          className="w-full h-10 p-10"
        />


<input
          type="text"
          value={question_One_option_Two}
          onChange={(e) => Setquestion_One_option_Two(e.target.value)}
          placeholder="Enter the question_One_option_One"
          className="w-full h-10 p-10"
        />
        <input
          type="text"
          value={question_One_option_Three}
          onChange={(e) => Setquestion_One_option_Three(e.target.value)}
          placeholder="Enter the question_One_option_One"
          required
          className="w-full h-10 p-10"
        />
        <input
          type="text"
          value={answerTwo}
          onChange={(e) => setAnswerTwo(e.target.value)}
          placeholder="Enter the Answer Two"
          required
          className="w-full h-10 p-10"
        />

<input
          type="text"
          value={question_Two_option_One}
          onChange={(e) => Setquestion_Two_option_One(e.target.value)}
          placeholder="Enter the question_One_option_One"
          required
          className="w-full h-10 p-10"
        />
<input
          type="text"
          value={question_Two_option_Two}
          onChange={(e) => Setquestion_Two_option_Two(e.target.value)}
          placeholder="Enter the question_One_option_One"
          required
          className="w-full h-10 p-10"
        />

<input
          type="text"
          value={question_Two_option_Three}
          onChange={(e) => Setquestion_Two_option_Three(e.target.value)}
          placeholder="Enter the question_One_option_One"
          required
          className="w-full h-10 p-10"
        />









        <input
          type="text"
          value={answerThree}
          onChange={(e) => setAnswerThree(e.target.value)}
          placeholder="Enter the Answer Three"
          required
          className="w-full h-10 p-10"
        />

<input
          type="text"
          value={question_Three_option_One}
          onChange={(e) => Setquestion_Three_option_One(e.target.value)}
          placeholder="Enter the question_One_option_One"
          required
          className="w-full h-10 p-10"
        />

<input
          type="text"
          value={question_Three_option_Two}
          onChange={(e) => Setquestion_Three_option_Two(e.target.value)}
          placeholder="Enter the question_One_option_One"
          required
          className="w-full h-10 p-10"
        />
        <input
          type="text"
          value={question_Three_option_Three}
          onChange={(e) => Setquestion_Three_option_Three(e.target.value)}
          placeholder="Enter the question_One_option_One"
          required
          className="w-full h-10 p-10"
        />



        <input
          type="text"
          value={answerFour}
          onChange={(e) => setAnswerFour(e.target.value)}
          placeholder="Enter the Answer Four"
          required
          className="w-full h-10 p-10"
        />





<input
          type="text"
          value={question_Four_option_One}
          onChange={(e) => Setquestion_Four_option_One(e.target.value)}
          placeholder="Enter the question_One_option_One"
          required
          className="w-full h-10 p-10"
        />

<input
          type="text"
          value={question_Four_option_Two}
          onChange={(e) => Setquestion_Four_option_Two(e.target.value)}
          placeholder="Enter the question_One_option_One"
          required
          className="w-full h-10 p-10"
        />

<input
          type="text"
          value={question_Four_option_Three}
          onChange={(e) => Setquestion_Four_option_Three(e.target.value)}
          placeholder="Enter the question_One_option_One"
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
