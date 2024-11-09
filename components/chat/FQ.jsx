// pages/faq.js
"use client"
import { useState } from 'react';
const faqs = [
  {
    question: "What is the eligibility criteria for CAT 2024?",
    answer: "Candidates must hold a bachelor's degree with at least 50% marks or equivalent CGPA.",
  },
  {
    question: "When will the CAT 2024 registration start?",
    answer: "The registration is expected to start in August 2023.",
  },
  {
    question: "What is the CAT 2024 exam pattern?",
    answer: "CAT 2024 will consist of three sections: Verbal Ability and Reading Comprehension (VARC), Data Interpretation and Logical Reasoning (DILR), and Quantitative Ability (QA).",
  },
  {
    question:   
 "How many times can I attempt CAT?",
    answer: "There is no limit on the number of attempts for CAT.",
  },
  {
    question: "Is there any age limit for CAT?",
    answer: "No, there is no age limit for appearing in CAT.",
  },
  {
    question: "What is the CAT 2024 syllabus?",
    answer: "The CAT syllabus covers topics like Reading Comprehension, Verbal Ability, Data Interpretation, Logical Reasoning, and Quantitative Aptitude.",
  },
  {
    question: "How can I prepare for CAT 2024?",
    answer: "You can prepare for CAT by self-study, joining coaching classes, or taking online courses. Make sure to practice regularly and take mock tests.",
  },
  {
    question: "What are the top colleges accepting CAT scores?",
    answer: "Some of the top IIMs and other prestigious B-schools accept CAT scores for admission to their MBA programs.",
  },
  {
    question: "What is the CAT 2024 registration fee?",
    answer: "The registration fee for CAT 2024 is expected to be around INR 2300 for general category candidates and INR 1150 for reserved category candidates.",
  },
  {
    question: "When will the CAT 2024 results be declared?",
    answer: "The CAT 2024 results are usually declared in the first or second week of January 2024.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="container mx-auto p-8 font-roboto">
      <h1 className="text-3xl font-bold mb-6 text-center">CAT 2024 FAQs</h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg p-4">
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h2 className="text-lg font-semibold">{faq.question}</h2>
            
            </div>
            {activeIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}