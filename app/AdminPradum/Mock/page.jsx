"use client";
// AddDataComponent.js
import React, { useState } from "react";
import { app } from "@/module/firebase";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const db = getFirestore(app);

const AddDataComponent = () => {
  const [question, Setquestion] = useState("");
  const [correctans, setcorrectans] = useState(0);
  const [option, Setoption] = useState([]); // Initialize as an array

  const [Id, setId] = useState("");
  const [Tag, setTag] = useState("");

  const [database, setdatabase] = useState("Mock");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newOption, setNewOption] = useState(""); // For handling individual option input

  const handleAddOption = () => {
    if (newOption.trim() && !isNaN(newOption)) {
      Setoption([...option, Number(newOption)]); // Convert to number and add to array
      setNewOption(""); // Clear the input field
    } else {
      setError("Option must be a valid number!");
    }
  };
console.log(option)
  const handleRemoveOption = (index) => {
    const updatedOptions = option.filter((_, i) => i !== index);
    Setoption(updatedOptions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!question.trim() || option.length === 0) {
      setError("All fields are required, and at least one option must be added!");
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, database), {
        Tag,
        question,
        correctans,
        option, // Save the array of numbers
        Id,
        createdAt: Timestamp.now(),
      });

      // Clear inputs after submission
      Setquestion("");
      setcorrectans(0);
      Setoption([]);
      setId("");
      setTag("");
      setError(null);
    } catch (e) {
      setError("Error adding document: " + e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-col w-full h-max items-center justify-center">
      <h1>Add Data to Firestore</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-evenly items-center"
      >
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
          value={Tag}
          onChange={(e) => setTag(e.target.value)}
          placeholder="Tag"
          required
          className="w-full h-10 p-2 mb-4"
        />
        <input
          type="text"
          value={question}
          onChange={(e) => Setquestion(e.target.value)}
          placeholder="Enter the question"
          required
          className="w-full h-10 p-2 mb-4"
        />
        <input
          type="number"
          value={correctans}
          onChange={(e) => setcorrectans(Number(e.target.value))}
          placeholder="Enter the correct answer index"
          required
          className="w-full h-10 p-2 mb-4"
        />
        <div className="w-full mb-4">
          <input
            type="number"
            value={newOption}
            onChange={(e) => setNewOption(e.target.value)}
            placeholder="Add an option (number only)"
            className="w-full h-10 p-2 mb-2"
          />
          <button
            type="button"
            onClick={handleAddOption}
            className="bg-blue-500 text-white p-2"
          >
            Add Option
          </button>
          <div className="mt-2">
            <ul>
              {option.map((opt, index) => (
                <li key={index} className="flex justify-between">
                  {opt}
                  <button
                    type="button"
                    onClick={() => handleRemoveOption(index)}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-green-500 text-white p-2"
        >
          {loading ? "Adding..." : "Add Data"}
        </button>
        {error && <p className="error text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default AddDataComponent;
