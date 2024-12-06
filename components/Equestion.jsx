'use client'; // Required for interactive components in Next.js 14

import { MathJax } from 'better-react-mathjax';

const Equestion = ({ question, solution, trick }) => {
  return (
    <div className="p-6 border rounded-lg shadow-md my-4">
      <h2 className="text-lg font-bold mb-2">Question</h2>
      <p>{question}</p>

      <h2 className="text-lg font-bold mt-4 mb-2">Solution</h2>
      <MathJax dynamic>{solution}</MathJax>

      <h2 className="text-lg font-bold mt-4 mb-2">Trick</h2>
      <p>{trick}</p>
    </div>
  );
};

export default Equestion;
