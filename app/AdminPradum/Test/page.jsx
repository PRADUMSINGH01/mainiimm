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
const sampleData = [
  {
    Answer: 40,
  Question
: "If 20% of a number is 8, what is the number?",
    Id: 1,
    option: [16, 40, 80, 160],
    solution:
      "Let the number be 'x'.\n20% of x = 8\n(20/100) * x = 8\nx = (8 * 100) / 20\nx = 40",
    trick:
      "Remember that 'of' in percentage problems usually means multiplication.",
  },
  {
    Answer: 40,
    Question:
      "A shirt is originally priced at $50. It is on sale for 20% off. What is the sale price of the shirt?",
    Id: 5,
    option: [10, 40, 45, 60],
    solution:
      "Discount = 20% of $50 = (20/100) * $50 = $10\nSale price = Original price - Discount = $50 - $10 = $40",
    trick:
      "Calculate the discount amount first, then subtract it from the original price.",
  },
  {
    Answer: 20,
    Question:
      "A store increased the price of a book by 20%. If the new price is $24, what was the original price of the book?",
    Id: 6,
    option: [19.2, 20, 22, 28.8],
    solution:
      "Let the original price be 'x'.\nNew price = Original price + 20% of Original price\n$24 = x + (20/100) * x\n$24 = 1.2x\nx = $24 / 1.2\nx = $20",
    trick: "Think of the increased price as 120% of the original price.",
  },
  {
    Answer: 10,
    Question:
      "In a class of 50 students, 20% are absent.  Of the students present, 25% wear glasses. How many students in the class wear glasses?",
    Id: 7,
    option: [10, 12.5, 25, 40],
    solution:
      "Number of absent students = 20% of 50 = (20/100) * 50 = 10\nNumber of present students = 50 - 10 = 40\nNumber of students wearing glasses = 25% of 40 = (25/100) * 40 = 10",
    trick:
      "This problem involves two separate percentage calculations. Solve them step-by-step.",
  },
  {
    Answer: 200,
    Question:
      "A fruit seller had some mangoes. He sold 20% of them and still had 160 mangoes left. How many mangoes dId he have at first?",
    Id: 8,
    option: [128, 192, 200, 320],
    solution:
      "Let the original number of mangoes be 'x'.\nMangoes left = 100% - 20% = 80% of the original amount\n160 = (80/100) * x\nx = (160 * 100) / 80\nx = 200",
    trick: "The remaining mangoes represent 80% of the original amount.",
  },
  {
    Answer: 60,
    Question: "If 20% of a number is 12, what is the number?",
    Id: 9,
    option: [2.4, 24, 60, 240],
    solution:
      "Let the number be 'x'.\n20% of x = 12\n(20/100) * x = 12\nx = (12 * 100) / 20\nx = 60",
    trick:
      "Set up a simple equation to represent the relationship between the percentage and the unknown number.",
  },
  {
    Answer: 30,
    Question:
      "A dress is on sale for 20% off its original price of $37.50. What is the sale price of the dress?",
    Id: 10,
    option: [7.5, 22.5, 30, 45],
    solution:
      "Discount = 20% of $37.50 = (20/100) * $37.50 = $7.50\nSale price = Original price - Discount = $37.50 - $7.50 = $30",
    trick:
      "Calculate the discount amount first, then subtract it from the original price to find the sale price.",
  },
  {
    Answer: 25,
    Question:
      "The price of a toy was increased by 20%. If the new price is $30, what was the original price of the toy?",
    Id: 11,
    option: [6, 24, 25, 36],
    solution:
      "Let the original price be 'x'.\nNew price = Original price + 20% of Original price\n$30 = x + (20/100) * x\n$30 = 1.2x\nx = $30 / 1.2\nx = $25",
    trick:
      "ConsIder the new price as 120% of the original price to set up the equation.",
  },
  {
    Answer: 32,
    Question:
      "In a basket of 40 apples, 20% are rotten. How many apples are not rotten?",
    Id: 12,
    option: [8, 16, 24, 32],
    solution:
      "Number of rotten apples = 20% of 40 = (20/100) * 40 = 8\nNumber of apples not rotten = Total apples - Rotten apples = 40 - 8 = 32",
    trick:
      "First find the number of rotten apples, then subtract that from the total to find the number of good apples.",
  },
  {
    Answer: 150,
    Question:
      "A shopkeeper sold 20% of his oranges and still had 120 oranges left. How many oranges dId he have at first?",
    Id: 13,
    option: [24, 96, 150, 180],
    solution:
      "Let the original number of oranges be 'x'.\nOranges left = 100% - 20% = 80% of the original amount\n120 = (80/100) * x\nx = (120 * 100) / 80\nx = 150",
    trick:
      "The remaining oranges represent 80% of the original amount. Use this to form an equation.",
  },
  {
    Answer: 18,
    Question: "If 30% of a number is 27, what is 20% of the same number?",
    Id: 14,
    option: [18, 20, 54, 90],
    solution:
      "Let the number be 'x'.\n30% of x = 27\n(30/100) * x = 27\nx = (27 * 100) / 30\nx = 90\nNow, 20% of 90 = (20/100) * 90 = 18",
    trick: "First find the whole number, then calculate 20% of that number.",
  },
  {
    Answer: 50.4,
    Question:
      "A sweater originally priced at $70 is on sale for 20% off.  If there is an additional 10% discount on the sale price, what is the final price of the sweater?",
    Id: 15,
    option: [44.8, 50.4, 56, 63],
    solution:
      "First discount = 20% of $70 = (20/100) * $70 = $14\nPrice after first discount = $70 - $14 = $56\nSecond discount = 10% of $56 = (10/100) * $56 = $5.60\nFinal price = $56 - $5.60 = $50.40",
    trick:
      "This involves successive discounts. Calculate each discount step-by-step.",
  },
  {
    Answer: 180,
    Question:
      "A farmer had some chickens. After selling 20% of them, he had 144 chickens left. How many chickens dId he have at first?",
    Id: 16,
    option: [28.8, 115.2, 180, 216],
    solution:
      "Let the original number of chickens be 'x'.\nChickens left = 100% - 20% = 80% of the original amount\n144 = (80/100) * x\nx = (144 * 100) / 80\nx = 180",
    trick:
      "The remaining chickens represent 80% of the original amount. Set up an equation to find the original number.",
  },
  {
    Answer: 120,
    Question:
      "In a school, 60% of the students are girls. If there are 24 more girls than boys, how many students are there in the school?",
    Id: 17,
    option: [40, 120, 100, 144],
    solution:
      "Let the total number of students be 'x'.\nNumber of girls = 60% of x = (60/100) * x\nNumber of boys = 40% of x = (40/100) * x\nDifference = Number of girls - Number of boys = (60/100)x - (40/100)x = (20/100)x\n(20/100)x = 24\nx = (24 * 100) / 20\nx = 120",
    trick:
      "The difference in the number of girls and boys represents 20% of the total students.",
  },
  {
    Answer: 50,
    Question:
      "A container is 20% full of water. If 15 liters of water are added, it becomes 50% full. What is the capacity of the container?",
    Id: 18,
    option: [30, 37.5, 50, 75],
    solution:
      "The added water represents 50% - 20% = 30% of the container's capacity.\nLet the capacity be 'x'.\n30% of x = 15 liters\n(30/100) * x = 15\nx = (15 * 100) / 30\nx = 50 liters",
    trick:
      "The change in the percentage of water level represents a portion of the container's capacity.",
  },
  {
    Answer: 840,
    Question:
      "A man spends 20% of his income on rent and 30% on food. If he has $420 left, what is his total income?",
    Id: 19,
    option: [546, 700, 840, 1080],
    solution:
      "Total percentage spent = 20% + 30% = 50%\nPercentage of income left = 100% - 50% = 50%\nLet his total income be 'x'.\n50% of x = $420\n(50/100) * x = $420\nx = ($420 * 100) / 50\nx = $840",
    trick:
      "Calculate the total percentage spent and the percentage of income remaining to set up the equation.",
  },
  {
    Answer: 72,
    Question:
      "A shopkeeper bought a watch for $60 and wants to sell it at a profit of 20%. What should be the selling price of the watch?",
    Id: 20,
    option: [12, 48, 72, 80],
    solution:
      "Profit = 20% of $60 = (20/100) * $60 = $12\nSelling price = Cost price + Profit = $60 + $12 = $72",
    trick:
      "Calculate the profit amount and add it to the cost price to find the selling price.",
  },
  {
    Answer: "4% decrease",
    Question:
      "A number is increased by 20% and then decreased by 20%.  What is the percentage change in the number?",
    Id: 21,
    option: ["0", "4% increase", "4% decrease", "6.25"],
    solution:
      "Let the original number be 100.\nAfter a 20% increase, the number becomes 120.\nAfter a 20% decrease from 120, the number becomes 96.\nOverall decrease = 100 - 96 = 4\nPercentage change = (4 / 100) * 100 = 4% decrease",
    trick:
      "This Question involves successive percentage changes.  Assume a convenient number (like 100) to make calculations easier.",
  },
  {
    Answer: 300,
    Question:
      "In an exam, a student scored 80% marks. If the passing marks were 60% and the student passed by 60 marks, find the maximum marks in the exam.",
    Id: 22,
    option: [150, 240, 300, 360],
    solution:
      "Difference in percentages = 80% - 60% = 20%\n20% of the maximum marks = 60 marks\nLet the maximum marks be 'x'.\n(20/100) * x = 60\nx = (60 * 100) / 20\nx = 300",
    trick:
      "The difference between the student's score and the passing marks represents 20% of the maximum marks.",
  },
  {
    Answer: 36,
    Question:
      "A mixture contains 20% alcohol and the rest is water. If the mixture contains 9 liters of alcohol, how much water does it contain?",
    Id: 23,
    option: [1.8, 18, 36, 45],
    solution:
      "Let the total quantity of the mixture be 'x'.\n20% of x = 9 liters\n(20/100) * x = 9\nx = (9 * 100) / 20\nx = 45 liters\nQuantity of water = Total quantity - Quantity of alcohol = 45 liters - 9 liters = 36 liters",
    trick:
      "First find the total quantity of the mixture, then subtract the quantity of alcohol to find the quantity of water.",
  },

  {
    Answer: 4.67,
    Question:
      "A train covers 20% of its journey at a speed of 60 km/h and the remaining 80% at a speed of 80 km/h.  If the total distance of the journey is 350 km, find the total time taken to complete the journey.",
    Id: 24,
    option: [3.5, 4, 4.67, 7],
    solution:
      "Distance covered at 60 km/h = 20% of 350 km = (20/100) * 350 km = 70 km\nTime taken for this part = Distance / Speed = 70 km / 60 km/h = 7/6 hours\nDistance covered at 80 km/h = 80% of 350 km = (80/100) * 350 km = 280 km\nTime taken for this part = Distance / Speed = 280 km / 80 km/h = 7/2 hours\nTotal time = 7/6 hours + 7/2 hours = 28/6 hours = 4.67 hours (approximately)",
    trick:
      "This problem combines percentages with speed, distance, and time concepts. Calculate the time taken for each part of the journey separately.",
  },
  {
    Answer: 144000,
    Question:
      "The population of a town increases by 20% every year. If the current population is 100,000, what will be the population after 2 years?",
    Id: 25,
    option: [120000, 140000, 144000, 125000],
    solution:
      "Population after 1 year = 100,000 + 20% of 100,000 = 100,000 + 20,000 = 120,000\nPopulation after 2 years = 120,000 + 20% of 120,000 = 120,000 + 24,000 = 144,000",
    trick:
      "This involves calculating compound increase.  Calculate the increase step-by-step for each year.",
  },
  {
    Answer: "4% loss",
    Question:
      "A man sold two articles for $120 each. On one he gained 20% and on the other he lost 20%. What is his overall gain or loss percentage in the whole transaction?",
    Id: 26,
    option: ["4% gain", "4% loss", "No gain, no loss", "20% loss"],
    solution:
      "For the article with gain:\nSelling price = $120, Gain = 20%\nLet the cost price be 'x'.\nSelling price = Cost price + 20% of Cost price\n$120 = x + (20/100) * x\n$120 = 1.2x\nx = $120 / 1.2\nx = $100\nFor the article with loss:\nSelling price = $120, Loss = 20%\nLet the cost price be 'y'.\nSelling price = Cost price - 20% of Cost price\n$120 = y - (20/100) * y\n$120 = 0.8y\ny = $120 / 0.8\ny = $150\nTotal cost price = $100 + $150 = $250\nTotal selling price = $120 + $120 = $240\nOverall loss = $250 - $240 = $10\nLoss percentage = (10 / 250) * 100 = 4% loss",
    trick:
      "This Question involves calculating profit and loss percentages on different articles. Calculate the cost price for each article separately, then find the overall gain or loss.",
  },
  {
    Answer: 100,
    Question:
      "In a class, 40% of the students are boys. If there are 60 girls in the class, find the total number of students in the class.",
    Id: 27,
    option: [100, 150, 240, 400],
    solution:
      "Percentage of girls in the class = 100% - 40% = 60%\nLet the total number of students be 'x'.\n60% of x = 60\n(60/100) * x = 60\nx = (60 * 100) / 60\nx = 100\nTotal number of students = 100",
    trick:
      "The number of girls represents 60% of the total students. Use this information to form an equation.",
  },
  {
    Answer: 80,
    Question:
      "A fruit seller had some apples. He sold 20% of them and then bought 20% more apples than he had originally. If he now has 80 apples, how many apples dId he have at first?",
    Id: 28,
    option: [80, 64, 100, 128],
    solution:
      "Let the original number of apples be 'x'.\nAfter selling 20%, he had 80% of x = (80/100) * x apples.\nHe then bought 20% more than 'x', which is 120% of x = (120/100) * x apples.\nNow he has (80/100) * x + (120/100) * x = 80\n(200/100) * x = 80\n2x = 80\nx = 80 / 2\nx = 40\nHe had 40 apples at first.\nAfter selling 20%, he had 40 - (20/100) * 40 = 32 apples.\nHe then bought 20% more than 40, which is 40 + (20/100) * 40 = 48 apples.\nTherefore, he now has 32 + 48 = 80 apples.",
    trick:
      "This problem involves multiple steps of selling and buying. Carefully calculate the changes in the number of apples at each step.",
  },
  {
    Answer: 40,
    Question:
      "A shopkeeper marks up the price of an item by 60% and then offers a discount of 25%. If the selling price after the discount is $48, what was the original cost price of the item?",
    Id: 29,
    option: [25, 32, 38.4, 40],
    solution:
      "Let the original cost price be 'x'.\nMarked price = x + 60% of x = x + (60/100) * x = 1.6x\nSelling price = Marked price - 25% of Marked price = 1.6x - (25/100) * 1.6x = 1.2x\n1.2x = $48\nx = $48 / 1.2\nx = $40\nTherefore, the original cost price was $40.",
    trick:
      "This Question involves both markup and discount percentages.  Work backward from the selling price to find the original cost price.",
  },
  {
    Answer: 6000,
    Question:
      "In an election with two candIdates, 60% of the eligible voters cast their votes.  The winning candIdate received 55% of the votes cast, and won by 360 votes. Find the total number of eligible voters.",
    Id: 30,
    option: [2000, 2400, 3000, 600],
    solution:
      "Let the total number of eligible voters be 'x'.\nNumber of votes cast = 60% of x = (60/100) * x\nThe winning candIdate received 55% of the votes cast = (55/100) * (60/100) * x = (33/100) * x\nThe losing candIdate received 45% of the votes cast = (45/100) * (60/100) * x = (27/100) * x\nDifference in votes = (33/100) * x - (27/100) * x = (6/100) * x\n(6/100) * x = 360\nx = (360 * 100) / 6\nx = 6000\nTherefore, the total number of eligible voters is 6000.",
    trick:
      "This problem combines percentages with election scenarios. Carefully calculate the number of votes received by each candIdate and then use the difference to find the total number of eligible voters.",
  },
  {
    Answer: 20,
    Question:
      "A solution contains 40% acId. If 30 liters of water is added to the solution, the concentration of acId becomes 25%. What was the initial quantity of acId in the solution?",
    Id: 31,
    option: [20, 30, 50, 75],
    solution:
      "Let the initial quantity of the solution be 'x' liters.\nInitial quantity of acId = 40% of x = (40/100) * x liters\nAfter adding water, the total quantity of the solution becomes x + 30 liters.\nNew quantity of acId = 25% of (x + 30) = (25/100) * (x + 30) liters\nSince the quantity of acId remains the same, we have:\n(40/100) * x = (25/100) * (x + 30)\n40x = 25x + 750\n15x = 750\nx = 50 liters\nTherefore, the initial quantity of acId = (40/100) * 50 liters = 20 liters.",
    trick:
      "This Question involves mixtures and concentrations. Remember that the amount of acId remains constant even after adding water.",
  },
  {
    Answer: 666.67,
    Question:
      "A man spends 20% of his income on rent, 25% of the remaining on food, and 30% of the remaining on education. If he saves $280, what is his total income?",
    Id: 32,
    option: [666.67, 1000, 1600, 2000],
    solution:
      "Let the man's total income be 'x'.\nAmount spent on rent = 20% of x = (20/100) * x\nRemaining income after rent = x - (20/100) * x = (80/100) * x\nAmount spent on food = 25% of (80/100) * x = (20/100) * x\nRemaining income after food = (80/100) * x - (20/100) * x = (60/100) * x\nAmount spent on education = 30% of (60/100) * x = (18/100) * x\nRemaining income after education = (60/100) * x - (18/100) * x = (42/100) * x\n(42/100) * x = $280\nx = ($280 * 100) / 42\nx = $666.67 (approximately)\nTherefore, his total income is approximately $666.67.",
    trick:
      "This is a multi-step percentage problem where you need to calculate the remaining income after each expense. Work step-by-step to arrive at the solution.",
  },
  {
    Answer: "4% decrease",
    Question:
      "The length of a rectangle is increased by 20% and its breadth is decreased by 20%. What is the percentage change in the area of the rectangle?",
    Id: 33,
    option: ["4% increase", "4% decrease", "12.5% increase", "12.5% decrease"],
    solution:
      "Let the original length of the rectangle be 'l' and the original breadth be 'b'.\nOriginal area = l * b\nNew length = l + 20% of l = 1.2l\nNew breadth = b - 20% of b = 0.8b\nNew area = 1.2l * 0.8b = 0.96lb\nChange in area = 0.96lb - lb = -0.04lb\nPercentage change in area = (-0.04lb / lb) * 100 = -4%\nTherefore, the area of the rectangle decreases by 4%.",
    trick:
      "This Question involves calculating the combined effect of percentage changes on length and breadth. Remember that the percentage change in area is not simply the difference between the percentage changes in length and breadth.",
  },
  {
    Answer: 15,
    Question:
      "A vessel contains a mixture of milk and water in the ratio 3:1. 20% of the mixture is removed and replaced with water. If the resulting mixture contains 12 liters of milk, what was the initial quantity of milk in the vessel?",
    Id: 34,
    option: [15, 18, 20, 24],
    solution:
      "Let the initial quantity of the mixture be 'x' liters.\nInitial quantity of milk = (3/4) * x liters\nInitial quantity of water = (1/4) * x liters\nQuantity of mixture removed = 20% of x = (20/100) * x = (1/5) * x liters\nQuantity of milk removed = (3/4) * (1/5) * x = (3/20) * x liters\nQuantity of water removed = (1/4) * (1/5) * x = (1/20) * x liters\nQuantity of milk remaining = (3/4) * x - (3/20) * x = (12/20) * x = (3/5) * x liters\nQuantity of water remaining = (1/4) * x - (1/20) * x + (1/5) * x = (1/4) * x + (3/20) * x = (8/20) * x = (2/5) * x liters\nSince the resulting mixture contains 12 liters of milk:\n(3/5) * x = 12 liters\nx = (12 * 5) / 3 = 20 liters\nTherefore, the initial quantity of milk = (3/4) * 20 liters = 15 liters.",
    trick:
      "This problem involves mixtures, ratios, and replacements. Carefully calculate the quantities of milk and water at each step.",
  },
  {
    Answer: 56.25,
    Question:
      "A man bought a certain number of articles at 5 for $4 and sold them at 4 for $5.  What is his profit percentage?",
    Id: 35,
    option: [25, 33.33, 56.25, 62.5],
    solution:
      "Let the man buy 20 articles (LCM of 4 and 5).\nCost price of 20 articles = (20/5) * $4 = $16\nSelling price of 20 articles = (20/4) * $5 = $25\nProfit = $25 - $16 = $9\nProfit percentage = (Profit / Cost price) * 100 = (9/16) * 100 = 56.25%",
    trick:
      "This Question involves calculating profit percentage when buying and selling in different groups. Find the LCM of the group sizes to make calculations easier.",
  },

  {
    Answer: 1152,
    Question:
      "A person invested a certain amount of money at 10% per annum simple interest. After 3 years, the interest earned is $240. If the same amount is invested at 20% per annum compound interest for 2 years, what will be the amount at the end of 2 years?",
    Id: 36,
    option: [880, 968, 1152, 1056],
    solution:
      "Let the principal amount be 'P'.\nSimple interest = (P * R * T) / 100\n$240 = (P * 10 * 3) / 100\nP = ($240 * 100) / 30 = $800\nNow, using compound interest formula:\nAmount = P * (1 + R/100)^T\nAmount = $800 * (1 + 20/100)^2\nAmount = $800 * (1.2)^2\nAmount = $800 * 1.44\nAmount = $1152",
    trick:
      "This Question combines simple and compound interest. First, find the principal amount using the simple interest formula, then calculate the amount using the compound interest formula.",
  },
  {
    Answer: 10000,
    Question:
      "The population of a town increases by 20% in the first year, decreases by 10% in the second year, and increases by 30% in the third year. If the final population is 13104, what was the initial population?",
    Id: 37,
    option: [8000, 9000, 10000, 11000],
    solution:
      "Let the initial population be 'P'.\nPopulation after the first year = P + 20% of P = 1.2P\nPopulation after the second year = 1.2P - 10% of 1.2P = 1.08P\nPopulation after the third year = 1.08P + 30% of 1.08P = 1.3104P\n1.3104P = 13104\nP = 13104 / 1.3104\nP = 10000\nTherefore, the initial population was 10000.",
    trick:
      "This Question involves successive percentage changes over multiple years.  Work backward from the final population to find the initial population.",
  },
  {
    Answer: 80,
    Question:
      "Two numbers are respectively 20% and 50% more than a third number. What percentage is the first number of the second number?",
    Id: 38,
    option: [60, 70, 80, 90],
    solution:
      "Let the third number be 'x'.\nFirst number = x + 20% of x = 1.2x\nSecond number = x + 50% of x = 1.5x\nRequired percentage = (First number / Second number) * 100 = (1.2x / 1.5x) * 100 = 80%",
    trick:
      "This Question involves expressing one number as a percentage of another. Assume a convenient value for the third number to make calculations easier.",
  },
  {
    Answer: "4%",
    Question:
      "A shopkeeper sells two articles at the same price. On one he gains 20% and on the other he loses 20%.  What is his overall loss percentage in the whole transaction?",
    Id: 39,
    option: ["0", "4%", "20%", "25%"],
    solution:
      "Let the selling price of each article be $100.\nFor the article with gain:\nSelling price = $100, Gain = 20%\nCost price = $100 / 1.2 = $83.33 (approximately)\nFor the article with loss:\nSelling price = $100, Loss = 20%\nCost price = $100 / 0.8 = $125\nTotal cost price = $83.33 + $125 = $208.33 (approximately)\nTotal selling price = $100 + $100 = $200\nOverall loss = $208.33 - $200 = $8.33 (approximately)\nLoss percentage = (8.33 / 208.33) * 100 = 4% (approximately)",
    trick:
      "This Question involves calculating overall profit or loss when selling two articles at the same price with different profit/loss percentages. Assume a convenient selling price to make calculations easier.",
  },
  {
    Answer: 20,
    Question:
      "If the price of petrol increases by 25%, by what percentage should a person reduce his consumption so that his expenditure on petrol remains the same?",
    Id: 40,
    option: [10, 15, 20, 25],
    solution:
      "Let the original price of petrol be $100 and the original consumption be 100 liters.\nOriginal expenditure = $100 * 100 liters = $10000\nNew price of petrol = $100 + 25% of $100 = $125\nLet the new consumption be 'x' liters.\nNew expenditure = $125 * x liters\nTo keep the expenditure the same:\n$125 * x = $10000\nx = $10000 / $125 = 80 liters\nReduction in consumption = 100 liters - 80 liters = 20 liters\nPercentage reduction in consumption = (20 liters / 100 liters) * 100 = 20%",
    trick:
      "This Question involves finding the percentage change in consumption to offset a price increase. Assume convenient values for the original price and consumption to make calculations easier.",
  },
  {
    Answer: 480,
    Question:
      "In an examination, 40% of the students failed in Mathematics, 30% failed in English, and 20% failed in both subjects.  If 240 students passed in both subjects, find the total number of students.",
    Id: 41,
    option: [300, 480, 500, 600],
    solution:
      "Let the total number of students be 'x'.\nStudents who failed in Mathematics only = 40% - 20% = 20%\nStudents who failed in English only = 30% - 20% = 10%\nTotal percentage of students who failed = 20% + 10% + 20% = 50%\nPercentage of students who passed in both subjects = 100% - 50% = 50%\n50% of x = 240\n(50/100) * x = 240\nx = (240 * 100) / 50\nx = 480\nTherefore, the total number of students is 480.",
    trick:
      "This Question involves sets and percentages. Use a Venn diagram to visualize the different groups of students and their overlaps.",
  },
  {
    Answer: 66.67,
    Question:
      "A merchant buys goods at 25% off the list price. He desires to mark the goods so that he can give a discount of 20% on the marked price and still clear a profit of 25% on the selling price. What percent of the list price must he mark the goods?",
    Id: 42,
    option: [20, 25, 66.67, 6667],
    solution:
      "Let the list price be $100.\nCost price for the merchant = $100 - 25% of $100 = $75\nLet the marked price be 'x'.\nSelling price = x - 20% of x = 0.8x\nProfit = 25% of the selling price = 0.25 * 0.8x = 0.2x\nSelling price = Cost price + Profit\n0.8x = $75 + 0.2x\n0.6x = $75\nx = $75 / 0.6 = $125\nMarkup percentage = (($125 - $75) / $75) * 100 = 66.67% (approximately)\nTherefore, the merchant must mark the goods at approximately 66.67% above the list price.",
    trick:
      "This Question involves multiple percentages related to list price, cost price, selling price, markup, and profit. Work step-by-step and keep track of the different prices and percentages.",
  },
  {
    Answer: 48,
    Question:
      "A man travels from A to B at a speed of 40 km/h and returns from B to A at a speed of 60 km/h. What is his average speed for the whole journey?",
    Id: 43,
    option: [48, 50, 52, 54],
    solution:
      "Let the distance between A and B be 'd' km.\nTime taken to travel from A to B = d/40 hours\nTime taken to travel from B to A = d/60 hours\nTotal distance = d + d = 2d km\nTotal time = d/40 + d/60 = (5d)/120 hours\nAverage speed = Total distance / Total time = 2d / ((5d)/120) = 2d * (120 / 5d) = 48 km/h",
    trick:
      "This Question involves calculating average speed when the speeds for the two legs of the journey are different. Remember that average speed is not simply the average of the two speeds.",
  },
  {
    Answer: 25,
    Question:
      "A dishonest shopkeeper professes to sell his goods at cost price but uses a false weight of 800 grams instead of 1 kilogram. What is his profit percentage?",
    Id: 44,
    option: [20, 25, 33.33, 40],
    solution:
      "For every 800 grams sold, the shopkeeper gains 200 grams.\nProfit percentage = (Gain / Cost price) * 100 = (200 grams / 800 grams) * 100 = 25%",
    trick:
      "This Question involves calculating profit percentage when a false weight is used. The gain is the difference between the actual weight and the false weight.",
  },
  {
    Answer: 16.67,
    Question:
      "In a class, the number of boys is 20% more than the number of girls. By what percentage is the number of girls less than the number of boys?",
    Id: 45,
    option: [16.67, 20, 25, 33.33],
    solution:
      "Let the number of girls be 100.\nNumber of boys = 100 + 20% of 100 = 120\nDifference = 120 - 100 = 20\nRequired percentage = (Difference / Number of boys) * 100 = (20 / 120) * 100 = 16.67% (approximately)",
    trick:
      "This Question involves finding the percentage difference between two quantities. Assume a convenient value for the number of girls to make calculations easier.",
  },
  {
    Answer: "4% loss",
    Question:
      "A man sells two articles for $600 each. On one he gains 20% and on the other he loses 20%. What is his overall gain or loss percentage in the whole transaction?",
    Id: 46,
    option: ["2% loss", "4% loss", "No gain, no loss", "2% gain"],
    solution:
      "For the article with gain:\nSelling price = $600, Gain = 20%\nCost price = $600 / 1.2 = $500\nFor the article with loss:\nSelling price = $600, Loss = 20%\nCost price = $600 / 0.8 = $750\nTotal cost price = $500 + $750 = $1250\nTotal selling price = $600 + $600 = $1200\nOverall loss = $1250 - $1200 = $50\nLoss percentage = (50 / 1250) * 100 = 4% loss",
    trick:
      "This Question involves calculating overall profit or loss when selling two articles at the same price with different profit/loss percentages. Calculate the cost price for each article separately, then find the overall gain or loss.",
  },
  {
    Answer: 70,
    Question:
      "A vessel contains a mixture of milk and water in the ratio 7:3.  If 10 liters of the mixture is removed and replaced with water, the ratio of milk to water becomes 5:3.  What was the initial quantity of milk in the vessel?",
    Id: 47,
    option: [35, 49, 50, 70],
    solution:
      "Let the initial quantity of the mixture be 'x' liters.\nInitial quantity of milk = (7/10) * x liters\nInitial quantity of water = (3/10) * x liters\nQuantity of milk removed = (7/10) * 10 = 7 liters\nQuantity of water removed = (3/10) * 10 = 3 liters\nQuantity of milk remaining = (7/10) * x - 7 liters\nQuantity of water remaining = (3/10) * x - 3 + 10 = (3/10) * x + 7 liters\nNew ratio of milk to water = 5:3\n((7/10) * x - 7) / ((3/10) * x + 7) = 5/3\nSolving this equation, we get x = 100 liters\nTherefore, the initial quantity of milk = (7/10) * 100 liters = 70 liters.",
    trick:
      "This Question involves mixtures, ratios, and replacements. Carefully calculate the quantities of milk and water at each step and use the new ratio to form an equation.",
  },
  {
    Answer: 5,
    Question:
      "A reduction of 20% in the price of sugar enables a housewife to buy 5 kg more for $100. What is the original price per kg of sugar?",
    Id: 48,
    option: [5, 30, 33.33, 40],
    solution:
      "Let the original price per kg of sugar be 'x'.\nOriginal quantity of sugar bought for $100 = 100/x kg\nNew price per kg of sugar = x - 20% of x = 0.8x\nNew quantity of sugar bought for $100 = 100/0.8x kg\n100/0.8x - 100/x = 5 kg\nSolving this equation, we get x = $5 per kg\nTherefore, the original price per kg of sugar is $5.",
    trick:
      "This Question involves calculating the original price when a price reduction leads to an increase in quantity. Form an equation based on the difference in quantities.",
  },


  {
    "Answer": "237.5%",
    "Question": "If the radius of a sphere is increased by 50%, what is the percentage increase in its volume?",
    "Id": 49,
    "option": [
      "50%",
      "125%",
      "150%",
      "237.5%%"
    ],
    "solution": "Let the original radius of the sphere be 'r'.\nOriginal volume = (4/3)πr³\nNew radius = r + (50/100) * r = 1.5r\nNew volume = (4/3)π(1.5r)³ = (4/3)π * 3.375r³ = 4.5πr³\nIncrease in volume = 4.5πr³ - (4/3)πr³ = (13.5πr³ - 4πr³) / 3 = 9.5πr³ / 3\nPercentage increase = (Increase in volume / Original volume) * 100 = (9.5πr³ / 3) / ((4/3)πr³) * 100 = 237.5%",
    "trick": "Remember the formula for the volume of a sphere and how it changes with the radius."
  },

  
  
  {
    Answer: 300,
    Question:
      "A train running at a speed of 72 km/h crosses a pole in 15 seconds.  The length of the train (in meters) is:",
    Id: 50,
    option: [100, 200, 300, 400],
    solution:
      "Speed of the train = 72 km/h = 72 * (5/18) m/s = 20 m/s\nTime taken to cross the pole = 15 seconds\nLength of the train = Speed * Time = 20 m/s * 15 s = 300 meters",
    trick:
      "This Question involves the concept of speed, time, and distance. When a train crosses a pole, the distance covered is equal to the length of the train.",
  },

  {
    Answer: 30,
    Question:
      "A and B can do a piece of work in 12 days, B and C in 15 days, and C and A in 20 days. In how many days can A alone do the work?",
    Id: 51,
    option: [20, 30, 40, 60],
    solution:
      "(A + B)'s 1 day's work = 1/12\n(B + C)'s 1 day's work = 1/15\n(C + A)'s 1 day's work = 1/20\nAdding all three equations, we get:\n2(A + B + C)'s 1 day's work = 1/12 + 1/15 + 1/20 = 1/5\n(A + B + C)'s 1 day's work = 1/10\nA's 1 day's work = (A + B + C)'s 1 day's work - (B + C)'s 1 day's work = 1/10 - 1/15 = 1/30\nTherefore, A alone can do the work in 30 days.",
    trick:
      "This Question involves work and time concepts.  Form equations based on the combined work of different pairs of indivIduals and solve for the indivIdual's work.",
  },

  {
    Answer: 6,
    Question:
      "A boat can travel 20 km downstream in 2 hours and 10 km upstream in 5 hours. What is the speed of the boat in still water?",
    Id: 52,
    option: [4, 6, 8, 10],
    solution:
      "Let the speed of the boat in still water be 'b' km/h and the speed of the stream be 's' km/h.\nDownstream speed = b + s = 20 km / 2 hours = 10 km/h\nUpstream speed = b - s = 10 km / 5 hours = 2 km/h\nAdding the two equations, we get:\n2b = 12 km/h\nb = 6 km/h\nTherefore, the speed of the boat in still water is 6 km/h.",
    trick:
      "This Question involves boats and streams concepts. Form equations based on downstream and upstream speeds and solve for the speed of the boat in still water.",
  },

  {
    Answer: 90,
    Question:
      "A shopkeeper sells an article at a profit of 20%. If he had bought it at 20% less and sold it for Rs. 18 less, he would have gained 25%. Find the cost price of the article.",
    Id: 53,
    option: [80, 90, 100, 110],
    solution:
      "Let the cost price of the article be Rs. 'x'.\nSelling price = x + 20% of x = 1.2x\nNew cost price = x - 20% of x = 0.8x\nNew selling price = 1.2x - 18\nNew profit = 25% of 0.8x = 0.2x\nNew selling price = New cost price + New profit\n1.2x - 18 = 0.8x + 0.2x\n1.2x - x = 18\n0.2x = 18\nx = 18 / 0.2 = 90\nTherefore, the cost price of the article is Rs. 90.",
    trick:
      "This Question involves multiple profit percentages and requires careful calculation of the new cost price and selling price.",
  },
  {
    Answer: "3200 and 4800",
    Question:
      "A man buys two horses for Rs. 8000. He sells one at a loss of 20% and the other at a profit of 20%. If the selling price of each horse is the same, find the cost price of each horse.",
    Id: 54,
    option: [
      "3000 and 5000",
      "3200 and 4800",
      "3500 and 4500",
      "4000 and 4000",
    ],
    solution:
      "Let the cost price of the first horse be Rs. 'x'.\nCost price of the second horse = Rs. (8000 - x)\nSelling price of the first horse = x - 20% of x = 0.8x\nSelling price of the second horse = (8000 - x) + 20% of (8000 - x) = 1.2(8000 - x)\nSince the selling prices are the same:\n0.8x = 1.2(8000 - x)\n0.8x = 9600 - 1.2x\n2x = 9600\nx = 4800\nTherefore, the cost price of the first horse is Rs. 4800 and the cost price of the second horse is Rs. (8000 - 4800) = Rs. 3200.",
    trick:
      "This Question involves calculating the cost price of two items when their selling prices and profit/loss percentages are given.",
  },
  {
    Answer: 50,
    Question:
      "A vessel contains a mixture of milk and water in the ratio 4:1.  20% of the mixture is removed and replaced with water.  If the resulting mixture contains 32 liters of milk, what was the initial quantity of the mixture?",
    Id: 55,
    option: [40, 50, 60, 80],
    solution:
      "Let the initial quantity of the mixture be 'x' liters.\nInitial quantity of milk = (4/5) * x liters\nQuantity of mixture removed = 20% of x = (1/5) * x liters\nQuantity of milk removed = (4/5) * (1/5) * x = (4/25) * x liters\nQuantity of milk remaining = (4/5) * x - (4/25) * x = (16/25) * x liters\nSince the resulting mixture contains 32 liters of milk:\n(16/25) * x = 32\nx = 32 * (25/16) = 50 liters\nTherefore, the initial quantity of the mixture was 50 liters.",
    trick:
      "This Question involves mixtures, ratios, and replacements. Carefully calculate the quantities of milk and water at each step.",
  },
  {
    Answer: 8000,
    Question:
      "A man invests a certain sum of money at 10% per annum compound interest, compounded annually.  At the end of the second year, the amount is Rs. 9680.  What was the sum invested?",
    Id: 56,
    option: [7000, 8000, 9000, 10000],
    solution:
      "Let the sum invested be Rs. 'P'.\nAmount after 1 year = P * (1 + 10/100) = 1.1P\nAmount after 2 years = 1.1P * (1 + 10/100) = 1.21P\n1.21P = 9680\nP = 9680 / 1.21 = 8000\nTherefore, the sum invested was Rs. 8000.",
    trick:
      "This Question involves compound interest.  Work backward from the final amount to find the principal.",
  },
  {
    Answer: 600,
    Question:
      "A shopkeeper allows a discount of 10% on the marked price of an article and still makes a profit of 20%.  If the cost price of the article is Rs. 450, what is the marked price?",
    Id: 57,
    option: [500, 550, 600, 650],
    solution:
      "Cost price = Rs. 450\nProfit = 20% of 450 = Rs. 90\nSelling price = Cost price + Profit = 450 + 90 = Rs. 540\nLet the marked price be Rs. 'x'.\nSelling price = x - 10% of x = 0.9x\n0.9x = 540\nx = 540 / 0.9 = 600\nTherefore, the marked price is Rs. 600.",
    trick:
      "This Question involves both discount and profit percentages.  Work backward from the selling price to find the marked price.",
  },

  {
    Answer: 40,
    Question:
      "In an examination, 35% of the students failed in Hindi and 45% failed in English. If 20% failed in both subjects, what percentage of students passed in both subjects?",
    Id: 58,
    option: [20, 30, 40, 50],
    solution:
      "Students who failed in Hindi only = 35% - 20% = 15%\nStudents who failed in English only = 45% - 20% = 25%\nTotal percentage of students who failed = 15% + 25% + 20% = 60%\nPercentage of students who passed in both subjects = 100% - 60% = 40%",
    trick:
      "This Question involves sets and percentages. Use a Venn diagram to visualize the different groups of students and their overlaps.",
  },

  {
    Answer: 1.2,
    Question:
      "A man rows downstream 30 km and upstream 18 km, taking 5 hours each time.  What is the speed of the current?",
    Id: 59,
    option: [1.2, 2.4, 3.6, 4.8],
    solution:
      "Let the speed of the man in still water be 'b' km/h and the speed of the current be 'c' km/h.\nDownstream speed = b + c = 30 km / 5 hours = 6 km/h\nUpstream speed = b - c = 18 km / 5 hours = 3.6 km/h\nSubtracting the second equation from the first equation, we get:\n2c = 2.4 km/h\nc = 1.2 km/h\nTherefore, the speed of the current is 1.2 km/h.",
    trick:
      "This Question involves boats and streams concepts. Form equations based on downstream and upstream speeds and solve for the speed of the current.",
  },
  {
    Answer: 45,
    Question:
      "A train 150 meters long passes a telegraph post in 12 seconds.  Find the speed of the train in km/h.",
    Id: 60,
    option: [36, 40, 45, 50],
    solution:
      "Speed = Distance / Time = 150 meters / 12 seconds = 12.5 m/s\nSpeed in km/h = 12.5 m/s * (18/5) = 45 km/h",
    trick:
      "This Question involves speed, time, and distance. When a train crosses a stationary object, the distance covered is equal to the length of the train.",
  },
  {
    Answer: 16,
    Question:
      "A and B can do a piece of work in 18 days, B and C in 24 days, and C and A in 36 days.  In how many days can they do it all working together?",
    Id: 61,
    option: [16, 24, 30, 36],
    solution:
      "(A + B)'s 1 day's work = 1/18\n(B + C)'s 1 day's work = 1/24\n(C + A)'s 1 day's work = 1/36\nAdding all three equations, we get:\n2(A + B + C)'s 1 day's work = 1/18 + 1/24 + 1/36 = 1/8\n(A + B + C)'s 1 day's work = 1/16\nTherefore, they can do the work together in 16 days.",
    trick:
      "This Question involves work and time concepts. Form equations based on the combined work of different pairs of indivIduals and solve for their combined work.",
  },
  {
    Answer: 3000,
    Question:
      "The difference between the compound interest and simple interest on a certain sum of money for 2 years at 10% per annum is Rs. 30. Find the sum.",
    Id: 62,
    option: [300, 3000, 6000, 9000],
    solution:
      "Let the principal amount be Rs. 'P'.\nSimple Interest (SI) for 2 years = (P * 10 * 2) / 100 = 0.2P\nCompound Interest (CI) for 2 years = P * (1 + 10/100)^2 - P = 1.21P - P = 0.21P\nCI - SI = 0.21P - 0.2P = 0.01P\n0.01P = 30\nP = 30 / 0.01 = 3000\nTherefore, the sum is Rs. 3000.",
    trick:
      "This Question involves the difference between compound interest and simple interest. Use the formulas for both types of interest and form an equation based on their difference.",
  },

  {
    Answer: 700,
    Question:
      "A fruit seller had some apples. He sells 40% apples and still has 420 apples. Originally, he had:",
    Id: 63,
    option: [588, 600, 672, 700],
    solution:
      "Let the original number of apples be 'x'\nApples left = 100% - 40% = 60%\n60% of x = 420\n(60/100) * x = 420\nx = (420 * 100) / 60\nx = 700",
    trick:
      "The remaining apples represent 60% of the original amount. Use this to form an equation.",
  },

  {
    Answer: "A is equal to B.",
    Question:
      "If A = x% of y and B = y% of x, then which of the following is true?",
    Id: 64,
    option: [
      "A is smaller than B.",
      "A is greater than B.",
      "If x is smaller than y, then A is greater than B.",
      "A is equal to B.",
    ],
    solution: "A = (x/100) * y\nB = (y/100) * x\nTherefore, A = B",
    trick:
      "Express A and B in terms of x and y and compare the resulting expressions.",
  },

  {
    Answer: "4% of a",
    Question: "If 20% of a = b, then b% of 20 is the same as:",
    Id: 65,
    option: ["4% of a", "5% of a", "20% of a", "None of these"],
    solution:
      "20% of a = b\n(20/100) * a = b\nb% of 20 = (b/100) * 20 = ((20/100) * a / 100) * 20 = (4/100) * a = 4% of a",
    trick:
      "Substitute the value of 'b' in terms of 'a' to simplify the expression.",
  },
  {
    Answer: "4:3",
    Question:
      "Two numbers A and B are such that the sum of 5% of A and 4% of B is two-third of the sum of 6% of A and 8% of B. Find the ratio of A : B.",
    Id: 66,
    option: ["1:1", "2:3", "3:4", "4:3"],
    solution:
      "5% of A + 4% of B = (2/3) * (6% of A + 8% of B)\n(5/100) * A + (4/100) * B = (2/3) * ((6/100) * A + (8/100) * B)\nSimplifying the equation, we get:\n15A + 12B = 12A + 16B\n3A = 4B\nA/B = 4/3\nTherefore, the ratio of A : B is 4:3.",
    trick:
      "Form an equation based on the given information and simplify it to find the ratio of A to B.",
  },
  {
    Answer: 64,
    Question:
      "A student multiplied a number by 3/5 instead of 5/3. What is the percentage error in the calculation?",
    Id: 67,
    option: [34, 44, 54, 64],
    solution:
      "Let the number be 'x'.\nCorrect Answer = (5/3) * x\nIncorrect Answer = (3/5) * x\nError = (5/3) * x - (3/5) * x = (16/15) * x\nPercentage error = (Error / Correct Answer) * 100 = ((16/15) * x / (5/3) * x) * 100 = 64%",
    trick:
      "Calculate the difference between the correct and incorrect Answers and express it as a percentage of the correct Answer.",
  },
  {
    Answer: 400,
    Question:
      "The price of an article is first increased by 20% and later decreased by 25%. If the final price is Rs. 360, what was the original price of the article?",
    Id: 68,
    option: [300, 375, 400, 450],
    solution:
      "Let the original price be 'x'.\nPrice after increase = x + 20% of x = 1.2x\nPrice after decrease = 1.2x - 25% of 1.2x = 0.75 * 1.2x = 0.9x\n0.9x = 360\nx = 360 / 0.9 = 400\nTherefore, the original price was Rs. 400.",
    trick:
      "This Question involves successive percentage changes. Work backward from the final price to find the original price.",
  },
  {
    Answer: 2700,
    Question:
      "In an election between two candIdates, one got 55% of the total valId votes, 20% of the votes were invalId. If the total number of votes was 7500, the number of valId votes that the other candIdate got, was:",
    Id: 69,
    option: [2700, 2800, 2900, 3000],
    solution:
      "Number of invalId votes = 20% of 7500 = (20/100) * 7500 = 1500\nNumber of valId votes = 7500 - 1500 = 6000\nVotes for the first candIdate = 55% of 6000 = (55/100) * 6000 = 3300\nVotes for the second candIdate = 6000 - 3300 = 2700",
    trick:
      "Calculate the number of invalId votes first, then find the number of valId votes for each candIdate.",
  },
  {
    Answer: 66.67,
    Question:
      "A's salary is 20% lower than B's salary, which is 25% lower than C's salary. By what percent is C's salary more than A's salary?",
    Id: 70,
    option: [40, 50, 60.67, 70],
    solution:
      "Let C's salary be Rs. 100.\nB's salary = 100 - 25% of 100 = Rs. 75\nA's salary = 75 - 20% of 75 = Rs. 60\nDifference between C's salary and A's salary = 100 - 60 = Rs. 40\nRequired percentage = (40 / 60) * 100 = 66.67% (approximately)",
    trick:
      "Assume a convenient value for C's salary and calculate the salaries of A and B step-by-step.",
  },
  {
    Answer: 44,
    Question:
      "If the radius of a circle is increased by 20%, then the area is increased by:",
    Id: 71,
    option: [40, 44, 80, 88],
    solution:
      "Let the original radius be 'r'.\nOriginal area = πr^2\nNew radius = r + 20% of r = 1.2r\nNew area = π(1.2r)^2 = 1.44πr^2\nIncrease in area = 1.44πr^2 - πr^2 = 0.44πr^2\nPercentage increase in area = (0.44πr^2 / πr^2) * 100 = 44%",
    trick:
      "Calculate the new area after the radius is increased and find the percentage increase compared to the original area.",
  },
  {
    Answer: 50,
    Question:
      "A man spends 75% of his income. His income is increased by 20% and he increased his expenditure by 10%. His savings are increased by:",
    Id: 72,
    option: [10, 25, 37.5, 50],
    solution:
      "Let the original income be Rs. 100.\nOriginal expenditure = 75% of 100 = Rs. 75\nOriginal savings = 100 - 75 = Rs. 25\nNew income = 100 + 20% of 100 = Rs. 120\nNew expenditure = 75 + 10% of 75 = Rs. 82.5\nNew savings = 120 - 82.5 = Rs. 37.5\nIncrease in savings = 37.5 - 25 = Rs. 12.5\nPercentage increase in savings = (12.5 / 25) * 100 = 50%",
    trick:
      "Calculate the new income, expenditure, and savings after the respective increases and find the percentage increase in savings.",
  },
  {
    Answer: "10% decrease",
    Question:
      "If the price of a book is first decreased by 25% and then increased by 20%, what is the net change in the price?",
    Id: 73,
    option: ["10% decrease", "10% increase", "5% decrease", "No change"],
    solution:
      "Let the original price be $100.\nPrice after decrease: $100 - (25/100)*$100 = $75\nPrice after increase: $75 + (20/100)*$75 = $90\nNet change: $90 - $100 = -$10 (a decrease)\nPercentage change: ($10/$100) * 100% = 10% decrease",
    trick:
      "Calculate the price after each change and then find the overall percentage change from the original price.",
  },
  {
    Answer: 26,
    Question:
      "A school has 1200 students, out of which 40% are girls.  If 20% of the girls and 30% of the boys wear glasses, what percentage of the total students wear glasses?",
    Id: 74,
    option: [16, 26, 24, 28],
    solution:
      "Number of girls: 1200 * (40/100) = 480\nNumber of boys: 1200 - 480 = 720\nGirls wearing glasses: 480 * (20/100) = 96\nBoys wearing glasses: 720 * (30/100) = 216\nTotal students wearing glasses: 96 + 216 = 312\nPercentage of students wearing glasses: (312/1200) * 100% = 26%",
    trick:
      "Calculate the number of boys and girls separately, then find how many in each group wear glasses.",
  },
  {
    Answer: 36,
    Question:
      "In a village, 60% of the resIdents are literate.  If 40% of the literate resIdents are men, what percentage of the total resIdents are literate women?",
    Id: 75,
    option: [24, 36, 40, 60],
    solution:
      "Let the total number of resIdents be 100.\nLiterate resIdents: 100 * (60/100) = 60\nLiterate men: 60 * (40/100) = 24\nLiterate women: 60 - 24 = 36\nPercentage of literate women: (36/100) * 100% = 36%",
    trick:
      "Assume a convenient number for the total resIdents to make calculations easier.",
  },
  {
    Answer: "No",
    Question:
      "A shopkeeper offers two successive discounts of 10% and 20% on an item.  Is this equivalent to a single discount of 30%?",
    Id: 76,
    option: ["Yes", "No","10","4"],
    solution:
      "Let the original price be $100.\nPrice after 1st discount: $100 - (10/100)*$100 = $90\nPrice after 2nd discount: $90 - (20/100)*$90 = $72\nPrice after a single 30% discount: $100 - (30/100)*$100 = $70\nSince $72 is not equal to $70, the two discounts are not equivalent.",
    trick:
      "Successive discounts are not additive. Calculate the final price in both scenarios to compare.",
  },
  {
    Answer: 56.25,
    Question:
      "A container has 40 liters of milk.  10 liters of milk is taken out and replaced with water.  This process is repeated one more time.  What is the percentage of milk in the container now?",
    Id: 77,
    option: [56.25, 64, 75, 81],
    solution:
      "After 1st replacement:\nMilk: 40 - 10 = 30 liters\nWater: 10 liters\nRatio of milk to total: 30/(30+10) = 3/4\nAfter 2nd replacement:\nMilk removed: (3/4) * 10 = 7.5 liters\nMilk remaining: 30 - 7.5 = 22.5 liters\nPercentage of milk: (22.5/40) * 100% = 56.25%",
    trick:
      "Calculate the amount of milk and water after each replacement carefully.",
  },
  {
    Answer: "4% loss",
    Question:
      "A trader sells two articles, one at a profit of 20% and the other at a loss of 20%.  If the selling price of both articles is the same, what is the overall profit or loss percentage?",
    Id: 78,
    option: [
      "4% profit",
      "4% loss",
      "No profit, no loss",
      "Cannot be determined",
    ],
    solution:
      "Let the selling price of each article be $100.\nFor the article with profit:\nCost price = $100 / 1.2 = $83.33 (approx.)\nFor the article with loss:\nCost price = $100 / 0.8 = $125\nTotal cost price = $83.33 + $125 = $208.33\nTotal selling price = $100 + $100 = $200\nOverall loss = $208.33 - $200 = $8.33\nLoss percentage = ($8.33/$208.33) * 100% = 4% (approx.)",
    trick:
      "Assume a convenient selling price and calculate the cost price for each article to find the overall profit or loss.",
  },
  {
    Answer: "4% decrease",
    Question:
      "A train increases its speed by 20% and then decreases it by 20%.  What is the net effect on its speed?",
    Id: 79,
    option: [
      "4% increase",
      "4% decrease",
      "No change",
      "Cannot be determined",
    ],
    solution:
      "Let the original speed be 100 km/h.\nSpeed after increase: 100 + (20/100)*100 = 120 km/h\nSpeed after decrease: 120 - (20/100)*120 = 96 km/h\nNet change: 96 - 100 = -4 km/h (a decrease)\nPercentage change: (4/100) * 100% = 4% decrease",
    trick:
      "Successive percentage changes are not simply additive. Calculate the final speed after both changes to find the net effect.",
  },
  {
    Answer: "4% decrease",
    Question:
      "If the length of a rectangle is increased by 20% and its breadth is decreased by 20%, what is the net effect on its area?",
    Id: 80,
    option: [
      "4% increase",
      "4% decrease",
      "No change",
      "Cannot be determined",
    ],
    solution:
      "Let the original length be 'l' and breadth be 'b'.\nOriginal area = l * b\nNew length = l + (20/100)*l = 1.2l\nNew breadth = b - (20/100)*b = 0.8b\nNew area = 1.2l * 0.8b = 0.96lb\nChange in area = 0.96lb - lb = -0.04lb (a decrease)\nPercentage change = (-0.04lb / lb) * 100% = 4% decrease",
    trick:
      "Calculate the new area after the changes in length and breadth and compare it to the original area.",
  },

  {
    Answer: "25%",
    Question:
      "A person's salary is reduced by 20%.  By what percentage should the reduced salary be increased to restore it to the original amount?",
    Id: 81,
    option: ["20%", "25%", "30%", "33.33%"],
    solution:
      "Let the original salary be $100.\nReduced salary = $100 - (20/100)*$100 = $80\nIncrease needed = $100 - $80 = $20\nPercentage increase = ($20/$80) * 100% = 25%",
    trick:
      "The percentage increase needed to restore the original value is not the same as the percentage decrease.",
  },

  {
    "Answer": '21%',
    "Question": "If the sIde of a cube is increased by 10%, what is the percentage increase in its surface area?",
    "Id": 82,
    "option": [
      "10%",
      "20%",
      "21%",
      "30%"
    ],
    "solution": "Let the original sIde of the cube be 's'.\nOriginal surface area = 6s²\nNew sIde = s + (10/100) * s = 1.1s\nNew surface area = 6(1.1s)² = 6 * 1.21s² = 7.26s²\nIncrease in surface area = 7.26s² - 6s² = 1.26s²\nPercentage increase = (Increase in surface area / Original surface area) * 100 = (1.26s² / 6s²) * 100 = 21%",
    "trick": "Remember the formula for the surface area of a cube and how it changes with the sIde."
  },
  {
    "Answer": "No change",
    "Question": "If the length of a rectangle is increased by 20% and its breadth is decreased by 20%, what is the net effect on its area?",
    "Id": 83,
    "option": [
      "4% increase",
      "4% decrease",
      "No change",
      "20% decrease"
    ],
    "solution": "Let the original length be 'l' and the original breadth be 'b'.\nOriginal area = l * b\nNew length = l + (20/100) * l = 1.2l\nNew breadth = b - (20/100) * b = 0.8b\nNew area = 1.2l * 0.8b = 0.96lb\nChange in area = 0.96lb - lb = -0.04lb (a decrease)\nPercentage change = (-0.04lb / lb) * 100% = 4% decrease",
    "trick": "Calculate the new area after the changes in length and breadth, and compare it to the original area."
  },
  {
    "Answer":-4,
    "Question": "If the radius of a cylinder is decreased by 20% and its height is increased by 50%, what is the percentage change in its volume?",
    "Id": 84,
    "option": [
      -10,
      10,
      125,
      -4
    ],
    "solution": "Let the original radius be 'r' and the original height be 'h'.\nOriginal volume = πr²h\nNew radius = r - (20/100) * r = 0.8r\nNew height = h + (50/100) * h = 1.5h\nNew volume = π(0.8r)² * 1.5h = π * 0.64r² * 1.5h = 0.96πr²h\nChange in volume = 0.96πr²h - πr²h = -0.04πr²h (a decrease)\nPercentage change = (-0.04πr²h / πr²h) * 100% = 4% decrease",
    "trick": "Remember the formula for the volume of a cylinder and how it changes with the radius and height."
  },
  {
    "Answer": 44,
    "Question": "If the length of each sIde of a rectangle is increased by 20%, what is the percentage increase in its area?",
    "Id": 85,
    "option": [
      20,
      40,
      44,
      60
    ],
    "solution": "Let the original length be 'l' and the original breadth be 'b'.\nOriginal area = l * b\nNew length = l + (20/100) * l = 1.2l\nNew breadth = b + (20/100) * b = 1.2b\nNew area = 1.2l * 1.2b = 1.44lb\nChange in area = 1.44lb - lb = 0.44lb (an increase)\nPercentage change = (0.44lb / lb) * 100% = 44% increase",
    "trick": "Calculate the new area after the changes in length and breadth, and compare it to the original area."
  },
  {
    "Answer": 300,
    "Question": "If the radius of a sphere is doubled, what is the percentage increase in its surface area?",
    "Id": 86,
    "option": [
      100,
      200,
      300,
      400
    ],
    "solution": "Let the original radius be 'r'.\nOriginal surface area = 4πr²\nNew radius = 2r\nNew surface area = 4π(2r)² = 4π * 4r² = 16πr²\nIncrease in surface area = 16πr² - 4πr² = 12πr²\nPercentage increase = (Increase in surface area / Original surface area) * 100 = (12πr² / 4πr²) * 100 = 300%",
    "trick": "Remember the formula for the surface area of a sphere and how it changes with the radius."
  },
  {
    "Answer": -4,
    "Question": "If the base radius of a right circular cone is increased by 20% and its slant height is decreased by 20%, then the percentage change in its curved surface area is:",
    "Id": 87,
    "option": [
      "12.5% increase",
      "12.5% decrease",
      "No change",
      -4 
    ],
    "solution": "Let the original radius be 'r' and the original slant height be 'l'.\nOriginal curved surface area = πrl\nNew radius = r + (20/100) * r = 1.2r\nNew slant height = l - (20/100) * l = 0.8l\nNew curved surface area = π * 1.2r * 0.8l = 0.96πrl\nChange in curved surface area = 0.96πrl - πrl = -0.04πrl (a decrease)\nPercentage change = (-0.04πrl / πrl) * 100 = 4% decrease",
    "trick": "Remember the formula for the curved surface area of a cone and how it changes with the radius and slant height."
  },
  {
    "Answer": 2,
    "Question": "A rectangular tank is 6 m long, 4 m wIde, and 3 m deep. If 1440 liters of water is taken out of it, what will be the percentage decrease in the volume of water in the tank?",
    "Id": 88,
    "option": [
      1,
      2.5,
      2,
      15
    ],
    "solution": "Volume of the tank = 6 m * 4 m * 3 m = 72 m³\n1 m³ = 1000 liters\nVolume of water taken out = 1440 liters = 1.44 m³\nPercentage decrease in volume = (Volume of water taken out / Volume of the tank) * 100 = (1.44 m³ / 72 m³) * 100 = 2%",
    "trick": "Remember the formula for the volume of a rectangular tank and the conversion between cubic meters and liters."
  },
  {
    "Answer": 100,
    "Question": "A sphere of radius 'r' is inscribed in a cylinder. The surface area of the sphere is what percent of the curved surface area of the cylinder?",
    "Id": 89,
    "option": [
      25,
      33.33,
      100,
      50
    ],
    "solution": "For an inscribed sphere, the diameter of the sphere is equal to the height of the cylinder, and the radius of the sphere is equal to the radius of the cylinder.\nSurface area of the sphere = 4πr²\nCurved surface area of the cylinder = 2πrh = 2πr * 2r = 4πr²\nTherefore, the surface area of the sphere is 100% of the curved surface area of the cylinder.",
    "trick": "Visualize the inscribed sphere within the cylinder to understand the relationship between their dimensions."
  },
  
  {
    "Answer": 100,
    "Question": "A solId metallic sphere of radius 6 cm is melted and recast into a right circular cone of base radius 6 cm. What is the percentage increase in the height of the cone compared to the original height of the sphere?",
    "Id": 90,
    "option": [
      100,
      200,
      300,
      20
    ],
    "solution": "Volume of the sphere = (4/3)πr³ = (4/3)π * 6³ = 288π cm³\nVolume of the cone = (1/3)πr²h = 288π cm³ (since the volume remains the same after recasting)\n(1/3)π * 6² * h = 288π\nh = 288π * 3 / (π * 36) = 24 cm\nOriginal height of the sphere (diameter) = 12 cm\nPercentage increase in height = ((24 - 12) / 12) * 100 = 100%",
    "trick": "Remember that the volume of the metal remains the same after recasting."
  },
  {
    "Answer": 70000,
    "Question": "A city's population increased by 20% in the first year, then decreased by 10% in the second year, and finally increased by 15% in the third year. If the current population is 82800, what was the population three years ago?",
    "Id": 91,
    "option": [
      70000,
      71000,
      72000,
      73000
    ],
    "solution": "Let the population three years ago be P.\nAfter the first year, the population becomes 1.2P.\nAfter the second year, the population becomes 0.9 * 1.2P = 1.08P.\nAfter the third year, the population becomes 1.15 * 1.08P = 1.242P.\nTherefore, 1.242P = 82800\nP = 82800 / 1.242 = 66666.67 (approximately)\nSo, the population three years ago was approximately 66666.67, which is closest to 70000.",
    "trick": "Work backward through the percentage changes, year by year, to find the original population."
  },
      {
        "Answer": 40.625,
        "Question": "A fruit seller buys oranges at the rate of 10 for Rs. 80 and sells them at the rate of 8 for Rs. 100. However, 10% of the oranges get spoiled during transportation. What is his overall profit or loss percentage?",
        "Id": 92,
        "option": [
          "12.5% profit",
          "12.5% loss",
          40.625,
          "20% profit"
        ],
        "solution": "Let the fruit seller buy 80 oranges (LCM of 8 and 10).\nCost price of 80 oranges = (80/10) * Rs. 80 = Rs. 640\nOranges left after spoilage = 80 - (10/100) * 80 = 72\nSelling price of 72 oranges = (72/8) * Rs. 100 = Rs. 900\nProfit = Rs. 900 - Rs. 640 = Rs. 260\nProfit percentage = (Profit / Cost price) * 100 = (260/640) * 100 = 40.625%",
        "trick": "Account for the spoilage of oranges before calculating the profit or loss percentage."
      },

        
  {
    Answer: 4.17,
    Question:
      "A dishonest dealer professes to sell his goods at cost price, but he uses a weight of 960 grams for a kilogram weight. Find his gain percent.",
    Id: 93,
    option: ["4%", 4.17, "5%", "6.25%"],
    solution: "For every 960 grams sold, the dealer gains 40 grams.\nGain percent = (Gain / Cost price) * 100% = (40/960) * 100% = 4.17%",
    trick:
      "The gain is the difference between the actual weight and the false weight used.",
  },
  {
    Answer: -4,
    Question:
      "A man buys a certain number of oranges at 20 for Rs. 60 and an equal number at 30 for Rs. 60. He mixes them and sells them at 25 for Rs. 60. What is his gain or loss percent?",
    Id: 94,
    option: ["No profit, no loss", -4 , "2.22% loss"],
    solution:
      "Let the man buy 60 oranges of each type (LCM of 20 and 30).\nCost price of 60 oranges of the first type = (60/20) * Rs. 60 = Rs. 180\nCost price of 60 oranges of the second type = (60/30) * Rs. 60 = Rs. 120\nTotal cost price = Rs. 180 + Rs. 120 = Rs. 300\nTotal selling price = (120/25) * Rs. 60 = Rs. 288\nLoss = Rs. 300 - Rs. 288 = Rs. 12\nLoss percent = (Loss / Cost price) * 100% = (12/300) * 100% = 4% loss",
    trick:
      "This Question involves buying and selling in different groups. Find the LCM of the group sizes to make calculations easier.",
  },
  {
    Answer: 40,
    Question:
      "A shopkeeper marks his goods 50% above the cost price and allows a discount of 20% on the marked price. Find his gain percent.",
    Id: 95,
    option: [20, 25, 30, 40],
    solution:"Let the cost price be $100.\nMarked price = $100 + (50/100)*$100 = $150\nSelling price = $150 - (20/100)*$150 = $120\nGain = $120 - $100 = $20\nGain percent = ($20/$100) * 100% = 20%",
    trick:
      "Calculate the marked price and selling price step-by-step to find the gain percentage.",
  },
  {
    Answer: 20,
    Question:
      "In an examination, 70% of the students passed in English, 65% passed in Mathematics, and 27% failed in both subjects. What percentage of students passed in both the subjects?",
    Id: 96,
    option: [38, 40, 20, 45],
    solution:
      "Percentage of students who passed in at least one subject = 100% - 27% = 73%\nLet the percentage of students who passed in both subjects be x%\nSo, 70 - x + x + 65 - x = 73\nx = 62\nTherefore, 62% of the students passed in both subjects.",
    trick:
      "This Question involves sets and percentages. Use a Venn diagram to visualize the different groups of students and their overlaps.",
  },
  {
    Answer: 1260,
    Question:
      "The price of a scooter depreciates by 10% each year. If the present price of the scooter is Rs. 12150, find its price after 2 years.",
    Id: 97,
    option: [9720, 9801, 9900, 1260],
    solution:
      "Price after 1 year = Rs. 12150 - (10/100) * Rs. 12150 = Rs. 10935\nPrice after 2 years = Rs. 10935 - (10/100) * Rs. 10935 = Rs. 9841.50",
    trick:
      "This involves calculating depreciation over multiple years. Calculate the decrease in price step-by-step for each year.",
  },
  {
    Answer: "4% decrease",
    Question:
      "If the sIde of a square is increased by 20%, then what is the percentage change in its area?",
    Id: 98,
    option: ["20% increase", "40% increase", "44% increase", "4% decrease"],
    solution:
      "Let the original sIde of the square be 's'.\nOriginal area = s * s = s^2\nNew sIde = s + (20/100) * s = 1.2s\nNew area = 1.2s * 1.2s = 1.44s^2\nChange in area = 1.44s^2 - s^2 = 0.44s^2 (an increase)\nPercentage change = (0.44s^2 / s^2) * 100% = 44% increase",
    trick:
      "Calculate the new area after the change in sIde and compare it to the original area.",
  },
  {
    Answer: 50,
    Question:
      "A mixture of 70 liters of wine and water contains 10% water. How much water should be added to the mixture to make 25% water in the resulting mixture?",
    Id: 99,
    option: [14, 15, 60, 50],
    solution:
      "Initial quantity of water = 10% of 70 liters = 7 liters\nInitial quantity of wine = 70 liters - 7 liters = 63 liters\nLet 'x' liters of water be added.\nTotal quantity of new mixture = 70 + x liters\nQuantity of water in new mixture = 7 + x liters\nAccording to the problem:\n(7 + x) / (70 + x) = 25/100\nSolving for x, we get x = 15 liters",
    trick:
      "Form an equation based on the new ratio of water to the total mixture after adding water.",
  },
  {
    Answer: 5,
    Question:
      "A man rows downstream 20 km in 2 hours and upstream 8 km in 4 hours.  What is the speed of the current?",
    Id: 100,
    option: [3, 4, 5, 6],
    solution:
      "Let the speed of the man in still water be 'b' km/h and the speed of the current be 'c' km/h.\nDownstream speed = b + c = 20 km / 2 hours = 10 km/h\nUpstream speed = b - c = 8 km / 4 hours = 2 km/h\nSubtracting the second equation from the first equation, we get:\n2c = 8 km/h\nc = 4 km/h\nTherefore, the speed of the current is 4 km/h.",
    trick:
      "Form equations based on downstream and upstream speeds and solve for the speed of the current.",
  },
  {
    Answer: 54,
    Question:
      "A train 130 meters long passes a platform 170 meters long in 30 seconds.  Find the speed of the train in km/h.",
    Id: 101,
    option: [36, 48, 54, 60],
    solution:
      "Total distance covered = Length of train + Length of platform = 130 meters + 170 meters = 300 meters\nSpeed = Distance / Time = 300 meters / 30 seconds = 10 m/s\nSpeed in km/h = 10 m/s * (18/5) = 36 km/h",
    trick:
      "When a train crosses a platform, the total distance covered is the sum of the length of the train and the length of the platform.",
  },
  {
    Answer: 14.4,
    Question:
      "A, B and C can do a piece of work in 10, 12 and 15 days respectively.  In how many days can they do it all working together?",
    Id: 102,
    option: [14.4, 16.4, 18.4, 14.4],
    solution:
      "A's 1 day's work = 1/10\nB's 1 day's work = 1/12\nC's 1 day's work = 1/15\n(A + B + C)'s 1 day's work = 1/10 + 1/12 + 1/15 = 1/4\nTherefore, they can do the work together in 4 days.",
    trick:
      "Calculate the one day's work for each indivIdual and add them to find their combined work.",
  },
  {
    Answer: 8000,
    Question:
      "The difference between the compound interest and simple interest on a certain sum of money for 2 years at 10% per annum is Rs. 80. Find the sum.",
    Id: 103,
    option: [800, 8000, 16000, 32000],
    solution:
      "Let the principal amount be Rs. 'P'.\nSimple Interest (SI) for 2 years = (P * 10 * 2) / 100 = 0.2P\nCompound Interest (CI) for 2 years = P * (1 + 10/100)^2 - P = 1.21P - P = 0.21P\nCI - SI = 0.21P - 0.2P = 0.01P\n0.01P = 80\nP = 80 / 0.01 = 8000\nTherefore, the sum is Rs. 8000.",
    trick:
      "Use the formulas for both simple and compound interest to form an equation based on their difference.",
  },
  {
    Answer: 28,
    Question:
      "If the price of petrol is increased by 40%, by how much percent should a car owner reduce his consumption of petrol so that his expenditure on petrol remains constant?",
    Id: 104,
    option: [22.22, 25, 28, 33.33],
    solution:
      "Let the original price of petrol be $100 and the original consumption be 100 liters.\nOriginal expenditure = $100 * 100 liters = $10000\nNew price of petrol = $100 + (40/100)*$100 = $140\nLet the new consumption be 'x' liters.\nNew expenditure = $140 * x liters\nTo keep the expenditure the same:\n$140 * x = $10000\nx = $10000 / $140 = 71.43 liters (approximately)\nReduction in consumption = 100 liters - 71.43 liters = 28.57 liters (approximately)\nPercentage reduction in consumption = (28.57 liters / 100 liters) * 100% = 28.57% (approximately)",
    trick:
      "Assume convenient values for the original price and consumption to make calculations easier.",
  },
  {
    Answer: 720,
    Question:
      "In an examination, 80% of the students passed in English, 85% in Mathematics, and 75% in both. If 40 students failed in both the subjects, find the total number of students.",
    Id: 105,
    option: [400, 600, 800, 720],
    solution:
      "Let the total number of students be 'x'\nThose who passed in English = 80% of x\nThose who passed in Maths = 85% of x\nThose who passed in both = 75% of x\nStudents who failed in both = x - {80% of x + 85% of x - 75% of x} = 40\nx - 90% of x = 40\n10% of x = 40\nx = 40 * (100/10) = 400\nTotal number of students = 400",
    trick:
      "Use a Venn diagram to visualize the different groups of students and their overlaps.",
  },
  {
    Answer: 10,
    Question:
      "The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:",
    Id: 106,
    option: [15, 16, 18, 10],
    solution:
      "Let the cost price of each article be Rs. 1\nCost price of 20 articles = Rs. 20 = Selling price of x articles\nProfit = 25%\nSelling price of 20 articles = 20 + 25% of 20 = 20 + 5 = Rs. 25\nTherefore, 25 = x\nHence, the value of x is 25.",
    trick:
      "Assume a convenient cost price for each article to make calculations easier.",
  },
  {
    Answer: "12.5% loss",
    Question:
      "A man buys an article for Rs. 80 and marks it at Rs. 120. He then allows a discount of 25%. What is his gain or loss percent?",
    Id: 107,
    option: ["12.5% gain", "12.5% loss", "25% gain", "25% loss"],
    solution:
      "Marked price = Rs. 120\nDiscount = 25% of Rs. 120 = Rs. 30\nSelling price = Marked price - Discount = Rs. 120 - Rs. 30 = Rs. 90\nLoss = Cost price - Selling price = Rs. 80 - Rs. 90 = Rs. 10\nLoss percent = (Loss / Cost price) * 100% = (10/80) * 100% = 12.5% loss",
    trick:
      "Calculate the selling price after the discount and compare it to the cost price to find the gain or loss percentage.",
  },
  {
    "Answer": 20,
    "Question": "A man spends 20% of his monthly income on house rent, 25% of the remaining on food, 15% of the remaining on clothes, and 10% of the remaining on education. If he saves Rs. 12600 per month, what is his monthly income?",
    "Id": 108,
    "option": [
      30,
      40,
      50,
      20
    ],
    "solution": "Let the monthly income be Rs. 'x'.\nAfter spending on rent, remaining income = x - (20/100) * x = 0.8x\nAfter spending on food, remaining income = 0.8x - (25/100) * 0.8x = 0.6x\nAfter spending on clothes, remaining income = 0.6x - (15/100) * 0.6x = 0.51x\nAfter spending on education, remaining income = 0.51x - (10/100) * 0.51x = 0.459x\nTherefore, 0.459x = Rs. 12600\nx = Rs. 12600 / 0.459 = Rs. 27451 (approximately)",
    "trick": "Calculate the remaining income step-by-step after each expenditure to find the monthly income."
  },
  {
    "Answer": 30,
    "Question": "In an examination, 40% of the students failed in Mathematics, 30% failed in English, and 10% failed in both subjects. If 300 students passed in both subjects, find the total number of students.",
    "Id": 109,
    "option": [
      40,
      42,
      31,
      30
    ],
    "solution": "Students who failed in Mathematics only = 40% - 10% = 30%\nStudents who failed in English only = 30% - 10% = 20%\nTotal percentage of students who failed = 30% + 20% + 10% = 60%\nPercentage of students who passed in both subjects = 100% - 60% = 40%\nLet the total number of students be 'x'.\n40% of x = 300\n(40/100) * x = 300\nx = 300 * (100/40) = 750\nTherefore, the total number of students is 750.",
    "trick": "Use a Venn diagram to visualize the different groups of students and their overlaps."
  },
  {
    "Answer": 16.67,
    "Question": "A person bought two articles for Rs. 1500 each. He sold one at a gain of 20% and the other at a loss of 20%. What is his overall gain or loss percentage in the whole transaction?",
    "Id": 110,
    "option": [
      "No gain, no loss",
      "16% gain",
      "26% loss",
      "16.67"
    ],
    "solution": "For the article sold at a gain:\nSelling price = Rs. 1500 + (20/100) * Rs. 1500 = Rs. 1800\nFor the article sold at a loss:\nSelling price = Rs. 1500 - (20/100) * Rs. 1500 = Rs. 1200\nTotal cost price = Rs. 1500 + Rs. 1500 = Rs. 3000\nTotal selling price = Rs. 1800 + Rs. 1200 = Rs. 3000\nSince the total cost price and total selling price are the same, there is no overall gain or loss.",
    "trick": "Calculate the selling price of each article separately and compare the total cost price with the total selling price."
  },
  {
    "Answer": 20,
    "Question": "A train covers a certain distance at a uniform speed. If the train had been 6 km/h faster, it would have taken 4 hours less than the scheduled time. And, if the train were slower by 6 km/h, it would have taken 6 hours more than the scheduled time. Find the distance of the journey.",
    "Id": 111,
    "option": [
      6,
      72,
      84,
      "20"
    ],
    "solution": "Let the original speed of the train be 's' km/h and the scheduled time be 't' hours.\nDistance = speed * time = s * t\nAccording to the first condition:\ns * t = (s + 6) * (t - 4)\nAccording to the second condition:\ns * t = (s - 6) * (t + 6)\nSolving these two equations, we get s = 30 km/h and t = 24 hours\nTherefore, the distance = s * t = 30 km/h * 24 hours = 720 km",
    "trick": "This Question involves the concept of speed, time, and distance. Formulate equations based on the given conditions and solve for the distance."
  },
  {
    "Answer": 6.25,
    "Question": "A shopkeeper sells an article at a discount of 20% and still gains 25% on the cost price. If the marked price of the article is Rs. 625, find the cost price.",
    "Id": 112,
    "option": [
      3.5,
      4.0,
      4.5,
      "6.25"
    ],
    "solution": "Selling price = Marked price - Discount = Rs. 625 - (20/100) * Rs. 625 = Rs. 500\nLet the cost price be Rs. 'x'.\nSelling price = Cost price + Profit = x + (25/100) * x = 1.25x\n1.25x = Rs. 500\nx = Rs. 500 / 1.25 = Rs. 400\nTherefore, the cost price is Rs. 400.",
    "trick": "Work backward from the selling price to the cost price, consIdering both the discount and the profit percentage."
  },
  {
    "Answer": 20,
    "Question": "A reduction of 10% in the price of wheat enables a person to buy 5 kg more wheat for Rs. 300. What is the reduced price per kg of wheat?",
    "Id": 113,
    "option": [
      12,
      15,
      18,
      20
    ],
    "solution": "Let the original price per kg be Rs. 'x'.\nOriginal quantity of wheat bought = 300/x kg\nNew price per kg = x - (10/100) * x = 0.9x\nNew quantity of wheat bought = 300/0.9x kg\nAccording to the problem:\n300/0.9x - 300/x = 5\nSolving for x, we get x = Rs. 60\nTherefore, the reduced price per kg = 0.9x = 0.9 * Rs. 60 = Rs. 54",
    "trick": "This Question involves calculating the reduced price when a price reduction leads to an increase in quantity."
  },
  {
    "Answer": 25,
    "Question": "A man bought two articles for Rs. 4000 each. On one, he gains 15% and on the other, he loses 15%. How much does he gain or lose in the whole transaction?",
    "Id": 114,
    "option": [
      "No gain, no loss",
      "2.25% gain",
      "2.25% loss",
      "25"
    ],
    "solution": "For the article sold at a gain:\nSelling price = Rs. 4000 + (15/100) * Rs. 4000 = Rs. 4600\nFor the article sold at a loss:\nSelling price = Rs. 4000 - (15/100) * Rs. 4000 = Rs. 3400\nTotal cost price = Rs. 4000 + Rs. 4000 = Rs. 8000\nTotal selling price = Rs. 4600 + Rs. 3400 = Rs. 8000\nSince the total cost price and total selling price are the same, there is no overall gain or loss.",
    "trick": "Calculate the selling price of each article separately and compare the total cost price with the total selling price."
  },
  {
    "Answer": 11.11,
    "Question": "A shopkeeper marks his goods 20% above the cost price. He sells 50% of the goods at the marked price, 25% at a discount of 20%, and the remaining 25% at a discount of 40%. What is his overall gain or loss percentage?",
    "Id": 115,
    "option": [
      "10% gain",
      "10% loss",
      "11.11",
      "12.5% loss"
    ],
    "solution": "Let the cost price of the goods be $100.\nMarked price = $100 + (20/100) * $100 = $120\nSelling price of 50% of the goods = $120\nSelling price of 25% of the goods = $120 - (20/100) * $120 = $96\nSelling price of the remaining 25% of the goods = $120 - (40/100) * $120 = $72\nTotal selling price = (50/100) * $120 + (25/100) * $96 + (25/100) * $72 = $60 + $24 + $18 = $102\nGain = $102 - $100 = $2\nGain percent = ($2/$100) * 100% = 2% gain",
    "trick": "This Question combines concepts of markup, discounts, and weighted averages to calculate the overall profit or loss percentage."
  }
];

addDataToFirebase(sampleData, "Quant/percentages/LevelTwo");

export default addDataToFirebase;

/**


const test = ()=>{


  return (<>Test</>)
}

export default test 

*/
