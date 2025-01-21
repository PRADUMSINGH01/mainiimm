/**
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

const Questions = [
  {
    Id: 2,
    titles: [
      "Why Time Management is Crucial for CAT Preparation",
      "Start Early and Set Clear Goals",
      "Prioritize Topics Based on Weightage",
      "Allocate Time Slots Based on Productivity",
      "Use the Pomodoro Technique",
      "Balance Mock Tests and Analysis",
      "Take Care of Your Mental and Physical Health",
    ],
    paragraph: [
      "Preparing for the Common Admission Test (CAT), one of India’s most competitive MBA entrance exams, requires not only hard work but also smart time management. With lakhs of aspirants competing for a limited number of seats, managing your time effectively can set you apart.",
      "Starting early allows you to cover the syllabus comprehensively and leaves room for revisions. Set milestones by breaking your preparation into phases—foundation building, advanced preparation, and revision. Create a study plan allocating specific time for each subject weekly and track your progress using tools like Google Sheets or habit-tracking apps.",
      "Not all topics are equally important for CAT. Focus on high-weightage topics to maximize your score. For Quantitative Ability, prioritize Arithmetic and Algebra. In VARC, spend more time on Reading Comprehension. For DILR, practice sets involving caselets, arrangements, and puzzles.",
      "Each individual has different energy levels throughout the day. Identify your most productive hours and schedule intensive tasks like mock tests or solving complex problems during that time. For working professionals, aim to dedicate at least two focused hours on weekdays and longer sessions on weekends.",
      "The Pomodoro Technique involves 25 minutes of focused work followed by a 5-minute break. Customize it for CAT preparation by studying for 50 minutes and taking a 10-minute break. During breaks, avoid distractions like social media; do light stretching or take a walk instead.",
      "Mock tests are a game-changer for CAT aspirants. Attempt a mock test weekly and gradually increase the frequency as the exam approaches. Analyze your performance by spending twice the time of the test duration to understand errors, strengths, and areas for improvement.",
      "While CAT preparation demands rigorous efforts, neglecting your health can lead to burnout. Engage in light activities like jogging or yoga, follow a balanced diet with brain-boosting foods like nuts and green vegetables, and aim for 7-8 hours of sleep to ensure better concentration.",
    ],
    headline: ["Effective Time Management Strategies for CAT Aspirants"],
    links: [
      "https://iimcat.ac.in",
      "https://www.mbauniverse.com/cat",
      "https://www.pagalguy.com/cat",
    ],
    slug: "effective-time-management-for-cat",
  },
];

addDataToFirebase(Questions, "/Interview");

export default addDataToFirebase;
*/

import PaymentChecker from "@/module/PaymentCheck/paymentChecker";
const tapp = async () => {
  const pay = await PaymentChecker("hs947518@gmail.com");
  console.log(pay);
  return <> hello welcome to iim </>;
};

export default tapp;
