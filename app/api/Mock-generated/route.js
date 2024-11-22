// app/api/addMockData/route.js

import {app} from '@/module/firebase'
import { getFirestore, collection,addDoc } from "firebase/firestore";
const db = getFirestore(app);
export async function POST(request) {
  const body = await request.json();
  const { question, options, correct } = body;

  if (!question || !options || !correct) {
    return new Response(JSON.stringify({ error: 'Invalid input data' }), {
      status: 400,
    });
  }

  try {
    await addDoc(collection(db, 'mocktest'), {
      question,
      options,
      correctAnswer: correct,
      createdAt: new Date(),
    });

    return new Response(JSON.stringify({ message: 'Mock question added successfully!' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error adding document: ', error);
    return new Response(JSON.stringify({ error: 'Failed to add mock question' }), {
      status: 500,
    });
  }
}
