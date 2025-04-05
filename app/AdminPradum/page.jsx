"use client";
import { MathJaxContext, MathJax } from "better-react-mathjax";
import data from "./glt.json";
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
import MermaidDiagram from "@/components/chat/MermaidDiagram";
const page = () => {
  return (
    <MathJaxContext config={mathJaxConfig}>
      {data.map((items) => (
        <div className="p-3 m-3  bg-gray-400">
          <p>{items.Id}</p>

          <MathJax
            dynamic
            hideUntilTypeset="first"
            className="text-center text-2xl text-red-500 "
          >
            {items.Answer}
          </MathJax>

          <MathJax
            dynamic
            hideUntilTypeset="first"
            className="text-center text-2xl text-white "
          >
            {items.Question}
          </MathJax>

          {items.option?.map((options) => (
            <MathJax dynamic hideUntilTypeset="first" className="text-center">
              <div className="p-2 bg-red-500 m-5">{options}</div>
            </MathJax>
          ))}
          <MathJax dynamic hideUntilTypeset="first" className="text-left ">
            {items.Solution}
          </MathJax>

          <p>
            {" "}
            <MathJax
              dynamic
              hideUntilTypeset="first"
              className="text-center text-2xl text-yellow-400 "
            >
              {items.Trick}
            </MathJax>
          </p>
        </div>
      ))}
    </MathJaxContext>
  );
};

export default page;
