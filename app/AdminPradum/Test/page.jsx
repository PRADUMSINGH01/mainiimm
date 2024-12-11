/**import app from "@/module/firebase";
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
      "Id": 1,
      "Question": "A coin is tossed. What is the probability of getting heads?",
      "Answer": "1/2",
      "solution": "Possible outcomes = {H, T}\nFavorable outcome = {H}\nProbability =  Favorable outcomes / Total possible outcomes = 1/2",
      "option": ["1/2", "1/4", "1", "0"]
  },
  {
      "Id": 2,
      "Question": "A die is rolled. What is the probability of getting an even number?",
      "Answer": "1/2",
      "solution": "Possible outcomes = {1, 2, 3, 4, 5, 6}\nFavorable outcomes = {2, 4, 6}\nProbability = 3/6 = 1/2",
      "option": ["1/2", "1/3", "1/6", "1"]
  },
  {
      "Id": 3,
      "Question": "A bag contains 3 red balls and 5 blue balls. What is the probability of drawing a red ball?",
      "Answer": "3/8",
      "solution": "Total balls = 3 + 5 = 8\nProbability = Favorable outcomes / Total possible outcomes = 3/8",
      "option": ["3/8", "5/8", "3/5", "5/3"]
  },
  {
      "Id": 4,
      "Question": "Two coins are tossed simultaneously. What is the probability of getting two heads?",
      "Answer": "1/4",
      "solution": "Possible outcomes = {HH, HT, TH, TT}\nFavorable outcome = {HH}\nProbability = 1/4",
      "option": ["1/4", "1/2", "1", "0"]
  },
  {
      "Id": 5,
      "Question": "A card is drawn from a deck of 52 cards. What is the probability of getting a king?",
      "Answer": "1/13",
      "solution": "Number of kings = 4\nProbability = 4/52 = 1/13",
      "option": ["1/13", "1/52", "4/13", "1/4"]
  },
  {
      "Id": 6,
      "Question": "A bag contains 4 green balls and 6 yellow balls. Two balls are drawn at random. What is the probability that both balls are green?",
      "Answer": "2/15",
      "solution": "Probability of drawing one green ball = 4/10\nProbability of drawing another green ball (without replacement) = 3/9\nProbability of drawing two green balls = (4/10) * (3/9) = 2/15",
      "option": ["2/15", "3/25", "4/25", "1/15"]
  },
  {
      "Id": 7,
      "Question": "In a class of 30 students, 18 are boys and 12 are girls. If a student is selected at random, what is the probability that the student is a girl?",
      "Answer": "2/5",
      "solution": "Probability = Favorable outcomes / Total possible outcomes = 12/30 = 2/5",
      "option": ["2/5", "3/5", "1/2", "1/3"]
  },
  {
      "Id": 8,
      "Question": "A letter is chosen at random from the word 'PROBABILITY'. What is the probability that the letter is a vowel?",
      "Answer": "4/11",
      "solution": "Number of vowels = 4 (O, A, I, I)\nProbability = 4/11",
      "option": ["4/11", "7/11", "1/11", "2/11"]
  },
  {
      "Id": 9,
      "Question": "A number is selected at random from the first 20 natural numbers. What is the probability that the number is a prime number?",
      "Answer": "2/5",
      "solution": "Prime numbers between 1 and 20 = {2, 3, 5, 7, 11, 13, 17, 19}\nProbability = 8/20 = 2/5",
      "option": ["2/5", "1/2", "3/5", "4/5"]
  },
  {
      "Id": 10,
      "Question": "Two dice are rolled simultaneously. What is the probability of getting a sum of 7?",
      "Answer": "1/6",
      "solution": "Possible outcomes with sum 7 = {(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)}\nTotal possible outcomes = 6 * 6 = 36\nProbability = 6/36 = 1/6",
      "option": ["1/6", "1/12", "1/36", "1/9"]
  },
  {
      "Id": 11,
      "Question": "A bag contains 5 red, 3 blue and 2 green balls. If two balls are drawn at random, what is the probability that both are red?",
      "Answer": "1/9",
      "solution": "Probability of drawing one red ball = 5/10\nProbability of drawing another red ball (without replacement) = 4/9\nProbability of drawing two red balls = (5/10) * (4/9) = 2/9",
      "option": ["2/9", "1/9", "5/9", "2/5"]
  },
  {
      "Id": 12,
      "Question": "Three coins are tossed simultaneously. What is the probability of getting at least two heads?",
      "Answer": "1/2",
      "solution": "Possible outcomes = {HHH, HHT, HTH, THH, HTT, THT, TTH, TTT}\nFavorable outcomes = {HHH, HHT, HTH, THH}\nProbability = 4/8 = 1/2",
      "option": ["1/2", "1/4", "3/8", "1/8"]
  },
  {
      "Id": 13,
      "Question": "A card is drawn from a deck of 52 cards. What is the probability of getting a face card (Jack, Queen or King)?",
      "Answer": "3/13",
      "solution": "Number of face cards = 12\nProbability = 12/52 = 3/13",
      "option": ["3/13", "1/13", "4/13", "1/4"]
  },
  {
      "Id": 14,
      "Question": "Two dice are rolled. What is the probability that the sum of the numbers is greater than 9?",
      "Answer": "1/6",
      "solution": "Possible outcomes with sum greater than 9 = {(4,6), (5,5), (6,4), (5,6), (6,5), (6,6)}\nTotal possible outcomes = 6 * 6 = 36\nProbability = 6/36 = 1/6",
      "option": ["1/6", "1/9", "1/12", "5/36"]
  },
  {
      "Id": 15,
      "Question": "A box contains 4 red balls, 5 white balls and 6 black balls. One ball is drawn at random. What is the probability that it is not black?",
      "Answer": "2/3",
      "solution": "Probability of drawing a black ball = 6/15\nProbability of not drawing a black ball = 1 - (6/15) = 9/15 = 3/5",
      "option": ["3/5", "2/3", "2/5", "1/3"]
  },
  {
      "Id": 16,
      "Question": "A and B are two independent events such that P(A) = 0.6 and P(B) = 0.7. Find P(A and B).",
      "Answer": "0.42",
      "solution": "For independent events, P(A and B) = P(A) * P(B) = 0.6 * 0.7 = 0.42",
      "option": ["0.42", "1.3", "0.13", "0.88"]
  },
  {
      "Id": 17,
      "Question": "A problem is given to three students A, B and C whose chances of solving it are 1/2, 1/3 and 1/4 respectively. What is the probability that the problem will be solved?",
      "Answer": "3/4",
      "solution": "Probability that A fails to solve = 1 - (1/2) = 1/2\nProbability that B fails to solve = 1 - (1/3) = 2/3\nProbability that C fails to solve = 1 - (1/4) = 3/4\nProbability that all fail to solve = (1/2) * (2/3) * (3/4) = 1/4\nProbability that at least one solves = 1 - (1/4) = 3/4",
      "option": ["3/4", "1/4", "1/2", "1/3"]
  },
  {
      "Id": 18,
      "Question": "If P(A) = 0.4, P(B) = 0.5 and P(A or B) = 0.7, find P(A and B).",
      "Answer": "0.2",
      "solution": "P(A or B) = P(A) + P(B) - P(A and B)\n0.7 = 0.4 + 0.5 - P(A and B)\nP(A and B) = 0.9 - 0.7 = 0.2",
      "option": ["0.2", "0.9", "0.1", "0.3"]
  },
  {
      "Id": 19,
      "Question": "A bag contains 6 red and 4 blue balls.  Three balls are drawn one by one without replacement. What is the probability that the first two are red and the third is blue?",
      "Answer": "3/20",
      "solution": "Probability of drawing a red ball = 6/10\nProbability of drawing another red ball (without replacement) = 5/9\nProbability of drawing a blue ball (without replacement) = 4/8\nProbability of the sequence Red-Red-Blue = (6/10) * (5/9) * (4/8) = 1/6",
      "option": ["1/6", "3/20", "1/2", "2/5"]
  },
  {
      "Id": 20,
      "Question": "What is the probability of getting a sum of 8 when two dice are thrown?",
      "Answer": "5/36",
      "solution": "Possible outcomes with sum 8 = {(2,6), (3,5), (4,4), (5,3), (6,2)}\nTotal possible outcomes = 6 * 6 = 36\nProbability = 5/36",
      "option": ["5/36", "1/6", "7/36", "1/9"]
  }
]

addDataToFirebase(Questions, "/Quant/Probability/Questions");

export default addDataToFirebase;
**/


const tapp =()=>{
    return (<> hello welcome to iim </>)
}

export default tapp