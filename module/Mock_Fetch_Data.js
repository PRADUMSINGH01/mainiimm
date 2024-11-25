import { app } from "@/module/firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore";
const db = getFirestore(app);

export default async function Mock_Fetch_Data(){
  
try {
  const querySnapshot = await getDocs(collection(db, 'Quant/percentages/Questions'));
  const mockQuestions = querySnapshot.docs.map((doc) => ({
    id: doc.id, // Document ID
    ...doc.data(), // Document data
  }));

  const questions = [...mockQuestions];
  const numMocks = Math.ceil(questions.length / 26);

  const mocks = Array.from({ length: numMocks }, (_, index) => ({
    id: index + 1,
    questions: questions.splice(0, 26),
  }));

  return  mocks
} catch (error) {
  console.error('Error fetching mock questions: ', error);
}
}