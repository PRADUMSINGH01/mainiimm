/*
this is Quant and LI-RI Questions admin
Question 
Answer 
Tricks
Solution
Id
 */









'use client'
 // AddDataComponent.js
import React, { useState } from 'react';
import { app } from '@/module/firebase';
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, Timestamp } from "firebase/firestore";


const db = getFirestore(app)
const AddDataComponent = () => {
    const [Question, setQuestion] = useState('');
      const [option, Setoption] = useState([]); // Initialize as an array
    const [Answer, setAnswer] = useState('');
      const [newOption, setNewOption] = useState([
          
      ]); // For handling individual option input

    const [trick, setTrick] = useState('');
    const [solution, setSolution] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
const [database , setdatabase] = useState('')
const [Id , setId] = useState('')

const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        if (!Question.trim() || !Answer.trim() || !trick.trim() || !solution.trim()) {
            setError("All fields are required!");
            return;
        }

        setLoading(true);
        try {
            await addDoc(collection(db,database ), {
                Question,
                Answer,
                trick,
                solution,
                option,
                Id,
                createdAt: Timestamp.now(),
            });
            // Clear inputs after submission
            setQuestion('');
            setAnswer('');
            setTrick('');
            setSolution('');
        } catch (e) {
            setError("Error adding document: " + e.message);
        } finally {
            setLoading(false);
        }
    };



      const handleAddOption = () => {
        if (newOption.trim() && !isNaN(newOption)) {
          Setoption([...option, Number(newOption)]); // Convert to number and add to array
          setNewOption(""); // Clear the input field
        } else {
          setError("Option must be a valid number!");
        }
      };

      const handleRemoveOption = (index) => {
        const updatedOptions = option.filter((_, i) => i !== index);
        Setoption(updatedOptions);
      };

    return (
        <div className='p-10 flex flex-col items-center'>
            <h1>Add Data to Firestore</h1>
            <form onSubmit={handleSubmit}>

            <input
                    type="text"
                    value={database}
                    onChange={(e) => setdatabase(e.target.value)}
                    placeholder="database"
                    required

                    className='w-full h-10 mt-10 text-center'
                />


<input
                    type="text"
                    value={Id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="id"
                    required
                     className='w-full h-10 mt-10 text-center'
                />
                <input
                    type="text"
                    value={Question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Enter the Question"
                    required
                     className='w-full h-10 mt-10  text-center'
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

                <input
                    type="text"
                    value={Answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Enter the Answer"
                    required
                     className='w-full h-10 mt-10  text-center'
                />


<div>
<span> Added options</span>
    

</div>
                
                <input
                    type="text"
                    value={trick}
                    onChange={(e) => setTrick(e.target.value)}
                    placeholder="Enter the Trick"
                    required 
                    className='w-full h-10 mt-10  text-center'

                />
                <input
                    type="text"
                    value={solution}
                    onChange={(e) => setSolution(e.target.value)}
                    placeholder="Enter the Solution"
                    required
                     className='w-full h-10 mt-10 text-center'
                />
                <button type="submit" disabled={loading} className='mt-2 bg-blue-600 p-1 text-white text-center '>
                    {loading ? "Adding..." : "Add Data"}
                </button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
};

export default AddDataComponent;
