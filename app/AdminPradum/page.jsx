"use client";
import { MathJaxContext, MathJax } from "better-react-mathjax";
const mathJaxConfig = {
  loader: { load: ["input/tex", "output/chtml"] },
  tex: {
    packages: { "[+]": ["ams"] }, // Add AMS package for align environments
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["/[", "\\]"],
    ],
    processEscapes: true,

    tags: "none", // Disable equation numbering by default
  },
};

const page = () => {
  const data = [];
  return (
    <MathJaxContext config={mathJaxConfig}>
      {data.map((items) => (
        <div className="p-3 m-3  bg-gray-400">
          <MathJax
            dynamic
            hideUntilTypeset="first"
            className="text-center text-2xl text-white "
          >
            {items.Question}
          </MathJax>

          {items.option?.map((options) => (
            <div className="p-2 bg-red-500 m-5">{options}</div>
          ))}
          <MathJax dynamic hideUntilTypeset="first" className="text-center">
            {`${items.solution}`}
          </MathJax>
        </div>
      ))}
    </MathJaxContext>
  );
};

export default page;
