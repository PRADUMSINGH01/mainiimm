import {app} from '@/module/firebase'
import { getFirestore, collection,getDocs  } from "firebase/firestore";
const db = getFirestore(app);

export async function GET() {
  try {
    const querySnapshot = await getDocs(collection(db, 'Quant/percentages/Questions'));
    const questions = querySnapshot.docs.map((doc) => ({
      id: doc.id, // Document ID
      ...doc.data(), // Document data
    }));

    return new Response(JSON.stringify(questions), {
      status: 200,
    });
  } catch (error) {
    console.error('Error fetching mock questions: ', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch mock questions' }), {
      status: 500,
    });
  }
}