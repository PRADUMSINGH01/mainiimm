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

// Example usage
const sampleData = [
  {
    Id: 51,
    Question:
      "How many integers between 1 and 500 are divisible by both 3 and 4 but not by 5?",
    Answer: "33",
    Options: ["30", "32", "33", "35"],
    trick: "Find the LCM of 3 and 4, exclude those divisible by 5.",
    solution:
      "\\( \\text{LCM}(3, 4) = 12. \\text{Numbers divisible by 12: } \\lfloor \\frac{500}{12} \\rfloor = 41. \\text{Divisible by 12 and 5 (LCM 60): } \\lfloor \\frac{500}{60} \\rfloor = 8. \\text{Final: } 41 - 8 = 33. \\)",
  },
  {
    Id: 52,
    Question: "What is the sum of all two-digit numbers divisible by 11?",
    Answer: "715",
    option: ["715", "720", "725", "730"],
    trick: "Use the arithmetic progression formula for multiples of 11.",
    solution:
      "\\( \\text{AP: 11, ..., 99.} \\) \\( n = \\lfloor \\frac{99 - 11}{11} \\rfloor + 1 = 9. \\text{Sum: } \\frac{n}{2} \\times (\\text{First term} + \\text{Last term}) = \\frac{9}{2} \\times (11 + 99) = 715. \\)",
  },
  {
    Id: 53,
    Question: "What is the largest 4-digit number divisible by both 8 and 9?",
    Answer: "9992",
    Options: ["9960", "9984", "9992", "9900"],
    trick: "Find the LCM of 8 and 9 and the largest multiple below 10000.",
    solution:
      "\\( \\text{LCM}(8, 9) = 72. \\text{Largest multiple of 72 below 10000: } 9992. \\)",
  },
  {
    Id: 54,
    Question:
      "How many integers between 1 and 1000 are divisible by neither 2 nor 5?",
    Answer: "400",
    Options: ["400", "410", "390", "420"],
    trick: "Use the inclusion-exclusion principle to remove overlaps.",
    solution:
      "\\( \\text{Divisible by 2: } \\lfloor \\frac{1000}{2} \\rfloor = 500. \\text{Divisible by 5: } \\lfloor \\frac{1000}{5} \\rfloor = 200. \\text{Divisible by 10: } \\lfloor \\frac{1000}{10} \\rfloor = 100. \\text{Neither: } 1000 - (500 + 200 - 100) = 400. \\)",
  },
  {
    Id: 55,
    Question:
      "What is the smallest positive integer divisible by 7 that leaves a remainder of 3 when divided by 5?",
    Answer: "23",
    Options: ["23", "28", "33", "38"],
    trick:
      "Solve the simultaneous congruences using trial or modular arithmetic.",
    solution:
      "\\( x \\equiv 0 \\mod 7, \\ x \\equiv 3 \\mod 5. \\text{Smallest: } x = 23. \\)",
  },
  {
    Id: 56,
    Question: "How many trailing zeroes are there in the factorial of 125?",
    Answer: "31",
    Options: ["30", "31", "32", "33"],
    trick: "Count the number of multiples of 5 in the factorial.",
    solution:
      "\\( \\text{Trailing zeroes: } \\lfloor \\frac{125}{5} \\rfloor + \\lfloor \\frac{125}{25} \\rfloor + \\lfloor \\frac{125}{125} \\rfloor = 25 + 5 + 1 = 31. \\)",
  },
  {
    Id: 57,
    Question:
      "How many numbers between 1 and 1000 are divisible by exactly two prime numbers from the set {2, 3, 5}?",
    Answer: "105",
    Options: ["100", "105", "110", "115"],
    trick: "Find the LCM of each pair and exclude overlaps.",
    solution:
      "\\( \\text{Pairs: } \\text{LCM}(2, 3) = 6, \\ \\text{LCM}(2, 5) = 10, \\ \\text{LCM}(3, 5) = 15. \\text{Exclude: } \\text{LCM}(2, 3, 5) = 30. \\text{Total: } (\\lfloor \\frac{1000}{6} \\rfloor + \\lfloor \\frac{1000}{10} \\rfloor + \\lfloor \\frac{1000}{15} \\rfloor - 3 \\times \\lfloor \\frac{1000}{30} \\rfloor) = 105. \\)",
  },
  {
    Id: 58,
    Question: "What is the smallest 5-digit number divisible by 16?",
    Answer: "10016",
    Options: ["10008", "10016", "10024", "10032"],
    trick: "Divide the smallest 5-digit number by 16 and round up.",
    solution:
      "\\( \\lfloor \\frac{10000}{16} \\rfloor + 1 = 625. \\text{Smallest: } 16 \\times 625 = 10016. \\)",
  },
  {
    Id: 59,
    Question:
      "How many 4-digit numbers have exactly three distinct prime factors?",
    Answer: "84",
    Options: ["80", "84", "88", "92"],
    trick: "Use combinations of three prime factors under 10000.",
    solution:
      "\\( \\text{Prime factors: Choose 3 such that } p_1 \\times p_2 \\times p_3 < 10000. \\text{Count: } 84. \\)",
  },
  {
    Id: 60,
    Question:
      "Find the number of integers between 1 and 1000 that are divisible by at least one of 2, 3, or 5.",
    Answer: "733",
    option: ["730", "733", "735", "740"],
    trick: "Use the inclusion-exclusion principle.",
    solution:
      "\\( \\text{Divisible by 2: } 500, \\text{by 3: } 333, \\text{by 5: } 200. \\text{By pairs: } 166, 100, 66. \\text{By all three: } 33. \\text{Total: } 500 + 333 + 200 - 166 - 100 - 66 + 33 = 733. \\)",
  },
];
addDataToFirebase(sampleData, "/Quant/Number-System/LevelTwo");

export default addDataToFirebase;



const test = ()=>{


  return (<>Test</>)
}

export default test 

*/
