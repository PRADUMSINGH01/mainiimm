'use client';
/**
 * 
import { useEffect, useState } from 'react';
import Mock_Fetch_Data from '../../module/Mock_Fetch_Data'
import Link from 'next/link'
export default function MockQuestionsPage() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMockQuestions = async () => {
      try {
        const response = await Mock_Fetch_Data('/Quant/Averages/Questions');
        if (!response) {
          throw new Error('Failed to fetch mock questions');
        }

        const data = await response ;
        //console.log(data)
        setQuestions(data);
      } catch (err) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchMockQuestions();
  }, []);

  if (loading) {
    return <div className="p-4 text-center">Loading mock questions...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Mock Questions</h1>

      {questions.length === 0 ? (
        <p>No mock questions found.</p>
      ) : (
        <ul className="space-y-4">
          {questions.map((question, index) => (
            <li
              key={question.id}
              className="p-4 border rounded-md shadow-md hover:bg-gray-50 transition"
            >
              <h2 className="text-lg font-semibold">
                {question.id}. <button className=''> Attempt Mock {question.id} <Link href={`/FullMock/${question.id}`} > Click</Link></button>
              </h2>
             
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

 */


import Equestion from '@/components/Equestion'

const solutions = [
  {
    question:
      'A shopkeeper marks an article 50% above the cost price. He first gives a discount of 20% and then a further discount of 10%. Later, he charges a packaging fee of ₹50 on the discounted price. If the final selling price is ₹770, what is the cost price of the article?',
    solution:
      `Let the cost price (CP) be \\( x \\).  
      Marked Price (MP) = \\( x \\times 1.5 \\).  
      Final price after discounts:  
      \\( SP = MP \\times 0.8 \\times 0.9 + 50 = 770 \\).  
      Simplify:  
      \\( 1.5x \\times 0.72 + 50 = 770 \\),  
      \\( 1.08x + 50 = 770 \\),  
      \\( x = \\frac{720}{1.08} = \\text{₹666.67} \\).`,
    trick: 'Apply successive discounts first, then add the additional fixed fee.',
  },
  {
    question:
      "A town’s population increases by 10% annually. Additionally, 1,000 people migrate to the town every year. If the current population is 20,000, what will be the population after 2 years?",
    solution:
      `Let the original salary = ₹x.
Savings = 
100
−
(
40
+
20
)
=
40
%
100−(40+20)=40%, so 
0.4
�
0.4x = initial savings.
After increment: New salary = 
1.25
�
1.25x, New rent = 
1.25
×
0.4
�
=
0.5
�
1.25×0.4x=0.5x, New food = 
1.25
×
0.2
�
=
0.25
�
1.25×0.2x=0.25x, New savings = 
1.25
�
−
(
0.5
�
+
0.25
�
)
=
0.5
�
1.25x−(0.5x+0.25x)=0.5x.
Given new savings = ₹30,000: 
0.5
�
=
30
,
000
0.5x=30,000, 
�
=
60
,
000
x=60,000.
Original Salary = ₹60,000.
`,
    trick: 'Combine compound growth with linear addition to get the final result.',
  },
];

const MathPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Math Solutions</h1>
      {solutions.map((sol, index) => (
        <Equestion
          key={index}
          question={sol.question}
          solution={sol.solution}
          trick={sol.trick}
        />
      ))}
    </div>
  );
};

export default MathPage;