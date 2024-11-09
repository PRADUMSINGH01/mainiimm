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
    const [Answer, setAnswer] = useState('');
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
                <input
                    type="text"
                    value={Answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Enter the Answer"
                    required
                     className='w-full h-10 mt-10  text-center'
                />
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
