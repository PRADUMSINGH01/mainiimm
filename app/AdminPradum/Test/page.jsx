<<<<<<< HEAD
=======


>>>>>>> aed51d819786bc4a6e1ff7d3a35ef4d5e89ecadb
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

<<<<<<< HEAD
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
**/
const tapp = () => {
  return <> hello welcome to iim </>;
};

export default tapp;
=======

const Questions =[
  {
    "Id": 1,
    "Question": "What is 30% of 120?",
    "Answer": "36",
    "option": ["30", "36", "40", "42"],
    "solution": `
      \\[ \\text{To find 30% of 120, we can multiply 120 by 0.30 (which is the decimal equivalent of 30%):} \\\\ 120 \\times 0.30 = 36 \\]
    `,
    "trick": "Think of 30% as 3/10. Calculate 3/10 of 120, which is 36."
  },
  {
    "Id": 2,
    "Question": "A book originally priced at $20 is on sale for 15% off. What is the sale price?",
    "Answer": "$17",
    "option": ["$15", "$16", "$17", "$18"],
    "solution":`\\[ \\text{Calculate the discount amount.} \\\\  \\text{Discount} = \\text{Original Price} \\times \\left( \\frac{\\text{Discount Rate}}{100} \\right) \\\\ \\text{Substitute the values:}\\ 20 \\times \\left( \\frac{15}{100} \\right) \\\\ \\text{Simplify:}\\ 20 \\times 0.15 = 3  \\]\\[ \\text{Find the discounted price.} \\\\ \\text{Discounted Price} = \\text{Original Price} - \\text{Discount} \\\\ \\text{Substitute the values:}\\ 20 - 3 = 17 \\\\ \\text{Final Answer: The discounted price is \\$17.} \\]`,
    "trick": "Find 10% of $20, which is $2. Then find half of that (5%), which is $1. Add those together ($2 + $1 = $3) and subtract from $20."
  },
  {
    "Id": 3,
    "Question": "A bicycle's price is increased from $150 to $180. What is the percentage increase?",
    "Answer": "20%",
    "option": ["10%", "15%", "20%", "25%"],
    "solution": `
      \\[ \\text{Calculate the price increase.} \\\\ \\text{Increase} = \\text{New Price} - \\text{Original Price} \\\\ \\text{Substitute the values:}\\ 180 - 150 = 30 \\]",
      \\[ \\text{Calculate the percentage increase.} \\\\ \\text{Percentage Increase} = \\left( \\frac{\\text{Increase}}{\\text{Original Price}} \\right) \\times 100 \\\\ \\text{Substitute the values:}\\ \\left( \\frac{30}{150} \\right) \\times 100 \\\\ \\text{Simplify:}\\ 0.2 \\times 100 = 20% \\]"
    `,
    "trick": "The increase of $30 is one-fifth of the original price ($150), and one-fifth is the same as 20%."
  },
  {
    "Id": 4,
    "Question": "If 40% of a class of 25 students are girls, how many boys are in the class?",
    "Answer": "15",
    "option": ["10", "12", "15", "18"],
    "solution": `
      \\[ \\text{Calculate the number of girls in the class.} \\\\ \\text{Number of girls} = \\text{Total students} \\times \\left( \\frac{\\text{Percentage of girls}}{100} \\right) \\\\ \\text{Substitute the values:}\\ 25 \\times \\left( \\frac{40}{100} \\right) \\\\ \\text{Simplify:}\\ 25 \\times 0.40 = 10 \\]
      \\[ \\text{Calculate the number of boys in the class.} \\\\ \\text{Number of boys} = \\text{Total students} - \\text{Number of girls} \\\\ \\text{Substitute the values:}\\ 25 - 10 = 15 \\]
   `,
    "trick": "If 40% are girls, then 60% are boys. Calculate 60% of 25 directly: 25 * 0.60 = 15."
  },
  {
    "Id": 5,
    "Question": "A store sold 60% of its inventory of 200 shirts. How many shirts are left?",
    "Answer": "80",
    "option": ["40", "60", "80", "120"],
    "solution": `
      \\[ \\text{Calculate the number of shirts sold.} \\\\ \\text{Shirts sold} = \\text{Total shirts} \\times \\left( \\frac{\\text{Percentage sold}}{100} \\right) \\\\ \\text{Substitute the values:}\\ 200 \\times \\left( \\frac{60}{100} \\right) \\\\ \\text{Simplify:}\\ 200 \\times 0.60 = 120 \\]
      \\[ \\text{Calculate the number of shirts left.} \\\\ \\text{Shirts left} = \\text{Total shirts} - \\text{Shirts sold} \\\\ \\text{Substitute the values:}\\ 200 - 120 = 80 \\]
    `,
    "trick": "If 60% were sold, then 40% are left. Calculate 40% of 200 directly: 200 * 0.40 = 80."
  },
  
{
    "Id": 6,
    "Question": "If 35% of a number is 70, what is the number?",
    "Answer": "200",
    "option": ["150", "175", "200", "225"],
    "solution":`
      \\[ \\text{Let the number be } x. \\\\ \\text{We know that 35% of } x \\text{ is 70, so we can write the equation:} \\\\ \\frac{35}{100} \\times x = 70 \\\\ \\text{Simplify:}\\ 0.35x = 70 \\\\ \\text{Solve for } x: \\\\ x = \\frac{70}{0.35} = 200 \\]
    `,
    "trick": "Think: '35% of what number equals 70?'  Since 35% is close to one-third, and 70 is about one-third of 210, the answer is close to 200."
  },

  {
    "Id": 7,
    "Question": "A restaurant bill is $80. If you want to leave a 20% tip, how much should you tip?",
    "Answer": "$16",
    "option": ["$12", "$16", "$20", "$24"],
    "solution": `\\[ \\text{To calculate the tip amount, multiply the bill amount by the tip percentage:} \\\\ \\text{Tip} = \\text{Bill Amount} \\times \\left( \\frac{\\text{Tip Percentage}}{100} \\right) \\\\ \\text{Substitute the values:}\\ 80 \\times \\left( \\frac{20}{100} \\right) \\\\ \\text{Simplify:}\\ 80 \\times 0.20 = 16 \\]
    `,
    "trick": "Calculate 10% of $80, which is $8. Double that to find 20%: $8 * 2 = $16."
  },

  {
    "Id": 8,
    "Question": "A car's price is decreased by 10% one year and then increased by 10% the next year. Is the final price the same as the original price?",
    "Answer": "No",
    "option": ["Yes", "No"],
    "solution": `\\[ \\text{No. Let's assume the original price is \\$100.} \\\\ \\text{After a 10% decrease, the price becomes:} \\\\ 100 - (10/100)*100 = 90 \\\\ \\text{After a 10% increase on the new price, the price becomes:} \\\\ 90 + (10/100)*90 = 99 \\\\ \\text{The final price (\\$99) is less than the original price (\\$100).} \\]`,
    "trick": "Increasing and decreasing by the same percentage consecutively does not return to the original value because the percentage change is calculated on different base amounts."
  },
  
  
  {
    "Id": 9,
    "Question": "In a survey, 45 out of 150 people preferred Brand A. What percentage of people preferred Brand A?",
    "Answer": "30%",
    "option": ["20%", "25%", "30%", "35%"],
    "solution": `
      \\[ \\text{To find the percentage, divide the number of people who preferred Brand A by the total number of people and multiply by 100:} \\\\ \\left( \\frac{45}{150} \\right) \\times 100 = 30% \\]"
    `,
    "trick": "Simplify the fraction 45/150 to 3/10, which is easily recognizable as 30%."
  },
  {
    "Id": 10,
    "Question": "A company's profits increased by 20% this year compared to last year. If last year's profit was $50,000, what is this year's profit?",
    "Answer": "$60,000",
    "option": ["$55,000", "$60,000", "$65,000", "$70,000"],
    "solution": `
      \\[ \\text{Calculate the increase in profit:} \\\\ \\text{Increase} = \\text{Original Profit} \\times \\left( \\frac{\\text{Percentage Increase}}{100} \\right) \\\\ \\text{Substitute the values:}\\ 50000 \\times \\left( \\frac{20}{100} \\right) = 10000 \\]
      \\[ \\text{Calculate this year's profit:} \\\\ \\text{This year's profit} = \\text{Original profit} + \\text{Increase} \\\\ \\text{Substitute the values:}\\ 50000 + 10000 = 60000 \\]
    `,
    "trick": "Calculate 10% of $50,000, which is $5,000. Double that to find 20%: $5,000 * 2 = $10,000. Add that to $50,000."
  },


  {
    "Id": 10,
    "Question": "A company's profits increased by 20% this year compared to last year. If last year's profit was $50,000, what is this year's profit?",
    "Answer": "$60,000",
    "option": ["$55,000", "$60,000", "$65,000", "$70,000"],
    "solution": `
      "line1": "\\[ \\text{Calculate the increase in profit:} \\\\ \\text{Increase} = \\text{Original Profit} \\times \\left( \\frac{\\text{Percentage Increase}}{100} \\right) \\\\ \\text{Substitute the values:}\\ 50000 \\times \\left( \\frac{20}{100} \\right) = 10000 \\]",
      "line2": "\\[ \\text{Calculate this year's profit:} \\\\ \\text{This year's profit} = \\text{Original profit} + \\text{Increase} \\\\ \\text{Substitute the values:}\\ 50000 + 10000 = 60000 \\]"
    `,
    "trick": "Calculate 10% of $50,000, which is $5,000. Double that to find 20%: $5,000 * 2 = $10,000. Add that to $50,000."
  },

  {
    "Id": 11,
    "Question": "If 60% of a number is 36, what is 25% of the same number?",
    "Answer": "15",
    "option": ["10", "12", "15", "18"],
    "solution": 
     ` \\[ \\text{Let the number be } x. \\\\ \\text{We know 60% of } x \\text{ is 36, so we can write the equation:} \\\\ \\frac{60}{100} \\times x = 36 \\\\ 0.6x = 36 \\\\ x = \\frac{36}{0.6} = 60 \\]",
      \\[ \\text{Now, calculate 25% of 60:} \\\\ \\frac{25}{100} \\times 60 = 15 \\]"
    `,
    "trick": "Recognize that 60% is 6 times larger than 10%. So, 10% of the number is 36 / 6 = 6.  25% is 2.5 times 10%, so 2.5 times 6 is 15."
  },
  {
    "Id": 12,
    "Question": "A shop offers a discount of 10% on an item, and then another 20% discount on the already discounted price. What is the total percentage discount?",
    "Answer": "28%",
    "option": ["28%", "30%", "32%", "40%"],
    "solution": 
    `  \\[ \\text{Let the original price be } P. \\\\ \\text{After the first discount (10% off), the price becomes:} \\\\ P - (10/100) * P = 0.9P \\]",
      \\[ \\text{The second discount (20% off) is calculated on the new price (0.9P):} \\\\ 0.9P - (20/100) * 0.9P = 0.9P - 0.18P = 0.72P \\]",
      \\[ \\text{The final price (0.72P) represents a total discount of:} \\\\ P - 0.72P = 0.28P \\\\ \\text{To express this as a percentage:} \\\\ (0.28P / P) * 100 = 28% \\]"
    `,
    "trick": "Discounts don't add up directly.  You have to calculate them step-by-step."
  },
  {
    "Id": 13,
    "Question": "If the price of a stock increases by 25% and then decreases by 20%, will it return to its original price?",
    "Answer": "Yes",
    "option": ["Yes", "No"],
    "solution": 
    `  \\[ \\text{Let the original price be } P. \\\\ \\text{After a 25% increase, the price becomes:} \\\\ P + (25/100)*P = 1.25P \\]
      \\[ \\text{After a 20% decrease on the new price, the price becomes:} \\\\ 1.25P - (20/100)*1.25P = 1.25P - 0.25P = P \\]
      \\[ \\text{The final price is equal to the original price, so the answer is yes.} \\]`
    ,
    "trick": "A 25% increase is the same as multiplying by 1.25. A 20% decrease is the same as multiplying by 0.8. 1.25 * 0.8 = 1, which means the price returns to the original."
  },

  {
    "Id": 14,
    "Question": "A town's population increased from 20,000 to 25,000 in a year. What is the percentage increase?",
    "Answer": "25%",
    "option": ["20%", "25%", "30%", "35%"],
    "solution": 
`      \\[ \\text{Calculate the increase in population:} \\\\ \\text{Increase} = \\text{New Population} - \\text{Original Population} \\\\ \\text{Substitute the values:}\\ 25000 - 20000 = 5000 \\]
      \\[ \\text{Calculate the percentage increase:} \\\\ \\text{Percentage Increase} = \\left( \\frac{\\text{Increase}}{\\text{Original Population}} \\right) \\times 100 \\\\ \\text{Substitute the values:}\\ \\left( \\frac{5000}{20000} \\right) \\times 100 = 25% \\]
    `,
    "trick": "The increase of 5,000 is one-fourth of the original population (20,000), and one-fourth is the same as 25%."
  },

  {
    "Id": 15,
    "Question": "If 80% of a number is 120, what is 120% of the same number?",
    "Answer": "180",
    "option": ["140", "160", "180", "200"],
    "solution": 
    `  \\[ \\text{Let the number be } x. \\\\ \\text{We know 80% of } x \\text{ is 120, so we can write the equation:} \\\\ \\frac{80}{100} \\times x = 120 \\\\ 0.8x = 120 \\\\ x = \\frac{120}{0.8} = 150 \\]
      \\[ \\text{Now, calculate 120% of 150:} \\\\ \\frac{120}{100} \\times 150 = 180 \\]
    `,
    "trick": "If 80% is 120, then 20% is 120 / 4 = 30.  100% is 120 + 30 + 30 + 30 + 30 = 150.  120% is 150 + 30 = 180."
  },

  {
    "Id": 16,
    "Question": "A mixture contains 40% water and 60% juice. If the mixture has 20 liters of water, how many liters of juice are there?",
    "Answer": "30",
    "option": ["20", "25", "30", "35"],
    "solution": `
      \\[ \\text{Let the total volume of the mixture be } x \\text{ liters.} \\\\ \\text{We know 40% of the mixture is water, which is 20 liters:} \\\\ \\frac{40}{100} \\times x = 20 \\\\ 0.4x = 20 \\\\ x = \\frac{20}{0.4} = 50 \\]
      \\[ \\text{Now, calculate the volume of juice, which is 60% of the mixture:} \\\\ \\frac{60}{100} \\times 50 = 30 \\text{ liters} \\]`,
    
    "trick": "The ratio of water to juice is 40:60, which simplifies to 2:3. If water is 20 liters, juice is 30 liters to maintain the ratio."
  },

  {
    "Id": 17,
    "Question": "A company's revenue decreased by 15% this year compared to last year. If this year's revenue is $170,000, what was last year's revenue?",
    "Answer": "$200,000",
    "option": ["$180,000", "$190,000", "$200,000", "$210,000"],
    "solution":
    ` \\[ \\text{Let last year's revenue be } x. \\\\ \\text{This year's revenue is 85% of last year's revenue (100% - 15% = 85%):} \\\\ \\frac{85}{100} \\times x = 170000 \\\\ 0.85x = 170000 \\\\ x = \\frac{170000}{0.85} = 200000 \\],
    `,
    "trick": "Think: '85% of what number equals $170,000?' Since 85% is close to 80% (4/5), try dividing $170,000 by 4 and then multiplying by 5 to get close to the answer."
  },

  {
    "Id": 18,
    "Question": "A shirt is marked up by 20% and then put on sale for 20% off. Will the final price be the same as the original price?",
    "Answer": "No",
    "option": ["Yes", "No"],
    "solution": 
     ` \\[ \\text{No. Let's assume the original price is \\$100.} \\\\ \\text{After a 20% markup, the price becomes:} \\\\ 100 + (20/100)*100 = 120 \\\\ \\text{After a 20% discount on the new price, the price becomes:} \\\\ 120 - (20/100)*120 = 120 - 24 = 96 \\\\ \\text{The final price (\\$96) is less than the original price (\\$100).} \\]
    `,
    "trick": "Similar to question 8, consecutive markup and discount of the same percentage do not cancel out because they operate on different values."
  },

  {
    "Id": 19,
    "Question": "In a class, 40% of the students are boys and 60% are girls. If there are 12 more girls than boys, how many students are in the class?",
    "Answer": "60",
    "option": ["40", "50", "60", "70"],
    "solution":
    ` \\[ \\text{The difference between the percentage of girls and boys is 20% (60% - 40% = 20%).} \\\\ \\text{This 20% difference represents 12 students.} \\\\ \\text{If 20% represents 12 students, then 10% represents 6 students.} \\\\ \\text{Since 10% represents 6 students, then 100% (the whole class) represents:} \\\\ 10 \\times 6 = 60 \\text{ students} \\]
    `,
    "trick": "Focus on the difference in percentages. 20% represents the extra 12 girls.  Work from there to find the total."
  },

  {
    "Id": 20,
    "Question": "A train ticket costs $50. If the price is increased by 10% and then decreased by 10%, what is the final price of the ticket?",
    "Answer": "$49.50",
    "option": ["$49.50", "$50", "$50.50", "$51"],
    "solution": 
      `\\[ \\text{First, calculate the price after the 10% increase:} \\\\ 50 + (10/100)*50 = 50 + 5 = 55 \\]
      \\[ \\text{Now, calculate the price after the 10% decrease from the increased price:} \\\\ 55 - (10/100)*55 = 55 - 5.5 = 49.5 \\]
      `,
    "trick": "Again, remember that percentage changes are calculated on different bases.  A 10% decrease of $55 is more than a 10% increase of $50."
  },

  {
    "Id": 21,
    "Question": "If 30% of A is equal to 40% of B, what is the ratio of A to B?",
    "Answer": "4:3",
    "option": ["3:4", "4:3", "2:3", "3:2"],
    "solution": 
  `    \\[ \\text{We can write the given information as an equation:} \\\\ \\frac{30}{100}A = \\frac{40}{100}B \\\\ \\text{Simplify:}\\ 0.3A = 0.4B \\]
      \\[ \\text{Divide both sides by 0.3 and then by } B \\text{ to get the ratio of } A \\text{ to } B: \\\\ \\frac{A}{B} = \\frac{0.4}{0.3} = \\frac{4}{3} \\\\ \\text{Therefore, the ratio of A to B is 4:3} \\]
    `,
    "trick": "Set up a proportion: 0.3A = 0.4B. Divide both sides by 0.3 and then by B to get A/B = 0.4/0.3 = 4/3."
  },

  {
    "Id": 22,
    "Question": "A fruit seller had 100 apples. He sold 20% of them and then bought 20% more apples than he had left. How many apples does he have now?",
    "Answer": "112",
    "option": ["96", "100", "112", "120"],
    "solution": 
    `  \\[ \\text{Calculate the number of apples sold:} \\\\ 100 \\times (20/100) = 20 \\]
      \\[ \\text{Calculate the number of apples left after selling:} \\\\ 100 - 20 = 80 \\]
      \\[ \\text{Calculate how many more apples he bought (20% more than what he had left):} \\\\ 80 \\times (20/100) = 16 \\]
      \\[ \\text{Calculate the total number of apples after buying more:} \\\\ 80 + 16 = 96 \\]
      \\[ \\text{Calculate how many more apples he bought (20% more than his current total):} \\\\ 96 \\times (20/100) = 19.2 \\approx 20 \\text{ (rounding up since you can't have a fraction of an apple)} \\]
      \\[ \\text{Calculate the final total number of apples:} \\\\ 96 + 20 = 116 \\]`
    ,
    "trick": "Break the problem into steps. Calculate the number of apples sold, then the number remaining, then the number bought, and finally the total number."
  },
  
   
]

addDataToFirebase(Questions, "/Quant/percentages/Questions");

export default addDataToFirebase;
**/
const tapp =()=>{
  return (<> hello welcome to iim </>)
}

export default tapp
>>>>>>> aed51d819786bc4a6e1ff7d3a35ef4d5e89ecadb
