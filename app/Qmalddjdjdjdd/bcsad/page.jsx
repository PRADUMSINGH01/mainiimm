'use client'
// AddDataComponent.js
import React, { useState } from 'react';
import { app } from '@/module/firebase';
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, Timestamp } from "firebase/firestore";


const db = getFirestore(app)
const AddDataComponent = () => {
   const [title, Settitle] = useState('');
   const [passage, Setpassage] = useState('');
   const [ImageUrl, setImageUrl] = useState('');
   const [subtitleOne, setsubtitleOne] = useState('');
   const [subtitletwo, setsubtitletwo] = useState('');
   const [subtitlethree, setsubtitlethree] = useState('');
   const [subtitlefour, setsubtitlefour] = useState('');
   const [subtitlefive, setsubtitlefive] = useState('');
   
   const [subpassageOne, setpassageOne] = useState('');
   const [subpassagetwo, setpassagetwo] = useState('');
   const [subpassagethree, setpassagethree] = useState('');
   const [subpassagefour, setpassagefour] = useState('');
   const [subpassagefive, setpassagefive] = useState('');
     const [slug,setslug] =useState('')
   const [Id , setId] = useState('')
   const [database , setdatabase] = useState('bcs')
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

const handleSubmit = async (e) => {
       e.preventDefault(); // Prevent default form submission


       setLoading(true);
       try {
           await addDoc(collection(db,database ), {
            title,
            subpassageOne,
            subpassagetwo,
            subpassagethree,
            subpassagefour,
            subpassagefive,
            passage,
            ImageUrl,
            subtitleOne,
            subtitletwo,
            subtitlethree,
            subtitlefour,
            subtitlefive,
            slug,
               Id,
               createdAt: Timestamp.now(),
           });
           
       } catch (e) {
           setError("Error adding document: " + e.message);
       } finally {
           setLoading(false);
       }
   };

   return (
       <div>
           <h1>Add Data to Firestore</h1>
           <form onSubmit={handleSubmit} className='w-full h-full flex flex-col justify-evenly items-center p-3'>

           <input
                   type="text"
                   value={database}
                   onChange={(e) => setdatabase(e.target.value)}
                   placeholder="database"
                   required
                   className='m-5'
                   
               />


<input
                   type="text"
                   value={Id}
                   onChange={(e) => setId(e.target.value)}
                   placeholder="id"
                   required
                    
                                      className='m-5 w-full h-10 bg-gray-300'

               />
               <input
                   type="text"
                   value={title}
                   onChange={(e) => Settitle(e.target.value)}
                   placeholder="Enter the title"
                   required 
                                      className='m-5 w-full h-10 bg-gray-300'

               />
               <input
                   type="text"
                   value={passage}
                   onChange={(e) => Setpassage(e.target.value)}
                   placeholder="Enter the passage"
                   required
                   className='m-5 w-full h-10 bg-gray-300'

               />
                <input
                   type="text"
                   value={subpassageOne}
                   onChange={(e) => setpassageOne(e.target.value)}
                   placeholder="Enter the passage"
                   required
                   className='m-5 w-full h-10 bg-gray-300'

               />
               <input
                   type="text"
                   value={subpassagetwo}
                   onChange={(e) => setpassagetwo(e.target.value)}
                   placeholder="Enter subpassagetwo passage"
                   required
                   className='m-5 w-full h-10 bg-gray-300'

               />
               <input
                   type="text"
                   value={subpassagethree}
                   onChange={(e) => setpassagethree(e.target.value)}
                   placeholder="Enter the setpassagethree"
                   required
                   className='m-5 w-full h-10 bg-gray-300'

               />
               <input
                   type="text"
                   value={subpassagefour}
                   onChange={(e) => setpassagefour(e.target.value)}
                   placeholder="Enter subpassagefour passage"
                   required
                   className='m-5 w-full h-10 bg-gray-300'

               />
               <input
                   type="text"
                   value={subpassagefive}
                   onChange={(e) => setpassagefive(e.target.value)}
                   placeholder="Enter subpassagefive passage"
                   required                                       className='m-5 w-full h-10 bg-gray-300'

               />
              
               <input
                   type="text"
                   value={ImageUrl}
                   onChange={(e) => setImageUrl(e.target.value)}
                   placeholder="Enter the Image"
                   required                                      className='m-5 w-full h-10 bg-gray-300'

               />
               <input
                   type="text"
                   value={subtitleOne}
                   onChange={(e) => setsubtitleOne(e.target.value)}
                   placeholder="Enter the subOne"
                   required                                      className='m-5 w-full h-10 bg-gray-300'

               />
               



               <input
                   type="text"
                   value={subtitletwo}
                   onChange={(e) => setsubtitletwo(e.target.value)}
                   placeholder="Enter the subtwe"
                   required                                      className='m-5 w-full h-10 bg-gray-300'

               />
               
               
               <input

               type="text"
               value={subtitlethree}
               onChange={(e) => setsubtitlethree(e.target.value)}
               placeholder="Enter the subthree"
               required                                       className='m-5 w-full h-10 bg-gray-300'

           />
<input

type="text"
value={subtitlefour}
onChange={(e) => setsubtitlefour(e.target.value)}
placeholder="Enter the subfou"
required                                      className='m-5 w-full h-10 bg-gray-300'

/>
<input

type="text"
value={subtitlefive}
onChange={(e) => setsubtitlefive(e.target.value)}
placeholder="Enter the five"
required                                      className='m-5 w-full h-10 bg-gray-300'

/>
<input

type="text"
value={slug}
onChange={(e) => setslug(e.target.value)}
placeholder="slug"
required                                      className='m-5 w-full h-10 bg-gray-300'

/>










               <button type="submit" disabled={loading} className='bg-blue-600 p-3 text-white rounded-md'>
                   {loading ? "Adding..." : "Add Data"}
               </button>
               {error && <p className="error">{error}</p>}
           </form>
       </div>
   );
};

export default AddDataComponent;
