/**
import app from '@/module/firebase'
import { getFirestore, collection, addDoc } from "firebase/firestore"; 

// Initialize Firebase
   

const db = getFirestore(app);

// * Function to add data from an array to a Firebase Firestore collection.
// * @param {Array} dataArray - Array of objects to be added.
// * @param {string} collectionName - The name of the Firestore collection.
 
   
   
   
   async function addDataToFirebase(dataArray, collectionName) {
  try {
    if (!Array.isArray(dataArray)) {
      throw new Error("Input data must be an array.");
    }

    const collectionRef = collection(db, collectionName);

    const promises = dataArray.map(async (data) => {
      if (typeof data == "object") {
        return await addDoc(collectionRef, data);
      } else {
        throw new Error("Each item in the array must be an object.");
      }
    });

    const results = await Promise.all(promises);
    console.log("Data added successfully:", results);
  } catch (error) {
    console.error("Error adding data to Firebase:", error.message);
  }
}

// Example usage
const sampleData = [


  {
    "Id": "3", 
    "Section_Five": "Thank You",
    "Section_Four": "To mitigate the potential negative consequences of AI-driven job displacement, governments, educational institutions, and businesses need to collaborate on initiatives that promote lifelong learning and skills development.  Investing in education and training programs that focus on AI-related fields and transferable skills will be essential for ensuring a smooth transition for the workforce.",
    "Section_One": "Artificial intelligence (AI) is rapidly transforming the global job market, automating tasks and reshaping industries in unprecedented ways.  From self-driving cars to AI-powered customer service chatbots, technology is changing the nature of work across various sectors. While AI has the potential to increase productivity and efficiency, it also raises concerns about job displacement and the need for workforce adaptation.",
    "Section_Three": "The impact of AI on the job market is not uniform across all sectors.  Industries such as manufacturing, transportation, and customer service are experiencing significant automation, while fields requiring creativity, critical thinking, and emotional intelligence are likely to see increased demand for human workers.  The ability to adapt and acquire new skills will be crucial for individuals navigating this evolving landscape.",
    "Section_Two": "One of the key benefits of AI is its ability to automate repetitive and mundane tasks, freeing up human workers to focus on more complex and creative endeavors. This can lead to increased job satisfaction and the creation of new roles in fields such as AI development, data analysis, and algorithm ethics. However, the transition may be challenging for workers in industries heavily reliant on manual or routine-based labor.",
    "Tag": "Hard",
    "Title": "The Impact of Artificial Intelligence on the Job Market",
    "answerOne": "Potential for job displacement and the need for workforce reskilling.",
    "answerTwo": "Manufacturing, transportation, and customer service.",
    "answerThree": "Adaptability and continuous learning of new skills.",
    "createdAt": "December 3, 2024 at 1:05:00 PM UTC+5:30", 
    "question_One": "What is the main concern associated with the rise of AI in the job market?",
    "question_One_option_One": "Increased productivity and efficiency.",
    "question_One_option_Two": "Potential for job displacement and the need for workforce reskilling.",
    "question_One_option_Three": "Creation of new jobs in AI development and data analysis.",
    "question_Two": "Which industries are most likely to be impacted by AI-driven automation?",
    "question_Two_option_One": "Creative industries like art and music.",
    "question_Two_option_Two": "Industries requiring critical thinking and problem-solving.",
    "question_Two_option_Three": "Manufacturing, transportation, and customer service.",
    "question_Three": "What is crucial for individuals to thrive in the AI-driven job market?",
    "question_Three_option_One": "Resisting technological advancements.",
    "question_Three_option_Two": "Focusing solely on manual labor skills.",
    "question_Three_option_Three": "Adaptability and continuous learning of new skills."
  }




















































  

   
]
  
   


addDataToFirebase(sampleData, "RC");




export default addDataToFirebase
*/
const test = ()=>{


  return (<>Test</>)
}

export default test 
