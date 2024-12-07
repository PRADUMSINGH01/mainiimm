import app from "@/module/firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Initialize Firebase

const db = getFirestore(app);

async function addDataToFirebase(dataArray, collectionName) {
  try {
    const collectionRef = collection(db, collectionName);

    const promises = dataArray.map(async (data) => {
      if (data) {
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
const sampleData = [];

addDataToFirebase(sampleData, "/Quant/Number-System/LevelTwo");

export default addDataToFirebase;

/**


const test = ()=>{


  return (<>Test</>)
}

export default test 

*/
